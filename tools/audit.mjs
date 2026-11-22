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
console.log(`== ${id}: ${C.DOCS.length} docs, ${C.QUESTIONS.length} questions, ${lineHome.size} clickable lines`);
console.log(problems.length ? problems.map((p) => "  ! " + p).join("\n") : "  ok");
