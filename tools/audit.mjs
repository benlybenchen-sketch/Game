// Deep consistency audit of a case: answers vs questions, line/pin/spot targets, stages, hints.
// Usage: node tools/audit.mjs 05   (run from the repo root)
import { readFileSync } from "node:fs";
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
const id = process.argv[2];
const C = await import(`../cases/${id}/index.js`);
const { decode } = await import("../js/answer.js");
const S = decode(C.SECRET, C.SECRET_KEY);
const { state } = await import("../js/store.js");
const problems = [];
const bad = (m) => problems.push(m);
const docs = new Map(C.DOCS.map((d) => [d.id, d]));
const htmlOf = (d) => { try { state.stage = 99; state.failed = null; return d.html(); } catch (e) { bad(`doc ${d.id} html() threw: ${e.message}`); return ""; } };
const lineHome = new Map();
for (const d of C.DOCS) for (const m of htmlOf(d).matchAll(/data-line="([^"]+)"/g)) {
  if (lineHome.has(m[1])) bad(`line id ${m[1]} used twice (${lineHome.get(m[1]).id}, ${d.id})`);
  lineHome.set(m[1], d);
}
const ids = new Set(); for (const d of C.DOCS) { if (ids.has(d.id)) bad(`doc id ${d.id} twice`); ids.add(d.id); }
for (const q of C.QUESTIONS) {
  const s = S[q.id]; if (!s) { bad(`${q.id}: no secret`); continue; }
  const partIds = q.parts.map((p) => p.id);
  for (const k of Object.keys(s)) if (!["hints", "solution"].includes(k) && !partIds.includes(k)) bad(`${q.id}: answer key "${k}" has no part`);
  for (const p of q.parts) {
    const a = s[p.id];
    if (a === undefined) { bad(`${q.id}.${p.id}: no answer`); continue; }
    const visible = (docId) => { const d = docs.get(docId); return d && !d.fail && !d.secret && d.stage <= q.stage; };
    if (p.type === "choice" && !p.options.includes(a)) bad(`${q.id}.${p.id}: answer "${a}" not among options`);
    if (p.type === "line") for (const l of a) { const d = lineHome.get(l); if (!d) bad(`${q.id}.${p.id}: line ${l} not found`); else if (!visible(d.id)) bad(`${q.id}.${p.id}: line ${l} is in ${d.id} (stage ${d.stage}) not open yet`); }
    if (p.type === "pins") a.forEach((g, i) => g.forEach((dd) => { if (!docs.has(dd)) bad(`${q.id}: pin group ${i} doc ${dd} missing`); else if (!visible(dd)) bad(`${q.id}: pin ${dd} (stage ${docs.get(dd).stage}) not open at stage ${q.stage}`); }));
    if (p.type === "pins" && a.length !== p.count) bad(`${q.id}: ${a.length} pin groups for count ${p.count}`);
    if (p.type === "order") { const it = p.items.map((x) => x.id).sort().join(); if ([...a].sort().join() !== it) bad(`${q.id}.${p.id}: order answer ids differ from items`); if (a.join() === p.items.map((x) => x.id).join()) bad(`${q.id}.${p.id}: items already in the right order`); }
    if ((p.type === "spot" || p.type === "set") && p.doc && !docs.has(p.doc)) bad(`${q.id}.${p.id}: doc ${p.doc} missing`);
  }
  if (!q.fatal && (!s.hints || s.hints.length < 2)) bad(`${q.id}: fewer than 2 hints`);
  if (!s.solution) bad(`${q.id}: no solution`);
  const choices = q.parts.filter((p) => p.type === "choice");
  for (const p of choices) { const L = p.options.map((o) => o.length); const ai = p.options.indexOf(s[p.id]); const max = Math.max(...L);
    if (p.options.length > 2 && L[ai] === max && L.filter((x) => x === max).length === 1 && max - [...L].sort((x, y) => y - x)[1] > 12) bad(`${q.id}.${p.id}: right option is clearly the longest (${L[ai]} vs ${[...L].sort((x, y) => y - x)[1]})`); }
}
for (const d of C.DOCS) if (d.stage > C.QUESTIONS.length + 1 && !d.fail) bad(`doc ${d.id} stage ${d.stage} unreachable`);
for (let st = 0; st < C.QUESTIONS.length; st++) if (!C.DOCS.some((d) => d.stage === st)) bad(`stage ${st} has no documents`);
// ---------------------------------------------------------------- difficulty rules (docs/KE_HOACH.md, rules 1-15)
// Enforced for case 03 onward (case 02 is kept as released). Each finding is a leak or an easy guess.
// META.publicNames: names the player meets from the first page (main characters, home towns); they may be answers.
if (Number(id) >= 3) {
  const M = C.META, Q = C.QUESTIONS;
  const strip = (x) => String(x ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const low = (x) => strip(x).toLowerCase();
  const memoOf = (q) => { try { return strip(typeof q.memo === "function" ? q.memo() : q.memo); } catch { return ""; } };
  if (!M.strict) bad("rule 11: META.strict must be true");
  // rule 8/12: no emphasis tags in documents or finale
  for (const d of C.DOCS) { const h = htmlOf(d); const m = h.match(/<(b|u|em|strong|mark)(\s[^>]*)?>|<(i)>/); if (m) bad(`rule 12: doc ${d.id} uses <${m[1] || m[3]}>`); if (/class="[^"]*\bhl\b/.test(h)) bad(`rule 12: doc ${d.id} highlights a row`); }
  if (/<(b|u|i|em|strong|mark)>/.test(String(M.finale?.html ?? ""))) bad("rule 12: finale uses emphasis tags");
  // rule 2: one choice answer at most twice in the whole case
  const used = {};
  for (const q of Q) for (const p of q.parts) if (p.type === "choice" && p.options.length > 2) (used[S[q.id][p.id]] ||= []).push(`${q.id}.${p.id}`);
  for (const [a, l] of Object.entries(used)) { const qs = new Set(l.map((x) => x.split(".")[0])); if (qs.size > 2) bad(`rule 2: "${a}" is the answer in ${qs.size} questions (${l.join(", ")})`); }
  // rule 1: the right option must not stand out by length or by number of clauses
  const clauses = (o) => (o.match(/[,;:(]/g) || []).length;
  for (const q of Q) for (const p of q.parts) if (p.type === "choice" && p.options.length > 2) {
    const a = S[q.id][p.id], others = p.options.filter((o) => o !== a);
    const mx = Math.max(...others.map((o) => o.length));
    if (a.length > mx + 3 && a.length > mx * 1.1) bad(`rule 1: ${q.id}.${p.id} right option is the longest (${a.length} vs ${mx})`);
    if (clauses(a) > Math.max(...others.map(clauses))) bad(`rule 1: ${q.id}.${p.id} right option has the most clauses`);
  }
  // rules 3, 10, 13, 15: answers must not appear early in titles, folder names, blurb, doc labels or earlier memos
  const known = new Set();
  Q.forEach((q, j) => {
    const answers = [];
    for (const p of q.parts) { const a = S[q.id][p.id]; if (p.type === "choice") answers.push(a); else if (p.type === "text") answers.push([].concat(a)[0]); }
    for (const a of answers) {
      const probe = low(a).replace(/\(.*?\)/g, "").split(",")[0].trim();
      if (probe.length < 6 || known.has(probe) || (M.publicNames || []).some((n) => probe === n.toLowerCase())) continue;
      const places = [["blurb", M.blurb], ...Q.map((x) => [`${x.id}.title`, x.title]), ...(M.folders || []).slice(0, j + 1).map((f, k) => [`folder ${k}`, f]),
        ...C.DOCS.filter((d) => !d.fail && !d.secret && d.stage <= j).map((d) => [`label ${d.id}`, d.label]), ...Q.slice(0, j).map((x) => [`${x.id}.memo`, memoOf(x)])];
      for (const [where, txt] of places) if (low(txt).includes(probe)) bad(`rule 13/15: answer of ${q.id} ("${probe}") appears in ${where}`);
    }
    answers.forEach((a) => known.add(low(a).replace(/\(.*?\)/g, "").split(",")[0].trim()));
  });
  // rule 10: no presupposing words in asks and labels
  for (const q of Q) for (const t of [q.ask, ...q.parts.map((p) => p.label)]) { const m = low(t).match(/thật ra|thật sự|không phải là|người xưng là/); if (m) bad(`rule 10: ${q.id} wording presupposes the answer ("${m[0]}")`); }
  // rule 14: a line answer needs at least 5 pickable lines in its document
  for (const q of Q) for (const p of q.parts) if (p.type === "line") { const d = lineHome.get(S[q.id][p.id][0]); if (d) { const n = (htmlOf(d).match(/data-line="/g) || []).length; if (n < 5) bad(`rule 14: ${q.id}.${p.id} doc ${d.id} has only ${n} pickable lines`); } }
}
console.log(`== ${id}: ${C.DOCS.length} docs, ${C.QUESTIONS.length} questions, ${lineHome.size} clickable lines`);
console.log(problems.length ? problems.map((p) => "  ! " + p).join("\n") : "  ok");
