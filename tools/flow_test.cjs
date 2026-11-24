// Gameplay flow checks for one case (strict mode). Usage: CASE=07 node tools/flow_test.cjs
//  1. hints open only after 2 wrong answers, the solution after 4 (or, with META.hintCost, open at once and paid in minutes);
//  2. every lock box refuses a wrong code and opens with the code in secret.locks;
//  3. every option of the fatal question leads to the ending META.fatal.ending gives (or the good one) and its docs;
//  4. a flawless last answer unlocks the good ending and the hidden one, and shows the secret docs.
const { chromium } = require("playwright");
const CASE = process.env.CASE || "07";
const URL = `http://localhost:8063/?case=${CASE}&preview=1`;
let bad = 0; const ok = (what, cond, extra = "") => { if (!cond) bad++; console.log(`${cond ? "ok " : "BAD"} ${what}${extra ? " · " + extra : ""}`); };

(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1300, height: 950 } });
  const errs = []; p.on("pageerror", (e) => errs.push(e.message));
  const key = `hsnd.case.${CASE}`;
  await p.goto(URL); await p.waitForTimeout(700);
  const info = await p.evaluate(async (c) => {
    const C = await import(`/cases/${c}/index.js`); const { decode } = await import("/js/answer.js");
    const S = decode(C.SECRET, C.SECRET_KEY);
    return { Q: C.QUESTIONS.map((q) => ({ id: q.id, fatal: !!q.fatal, parts: q.parts })), S, fatal: !!C.META.fatal, endings: C.META.endings || [],
      routes: C.META.fatal ? Object.fromEntries((C.QUESTIONS.find((q) => q.fatal)?.parts.find((x) => x.type === "choice")?.options || []).map((o) => [o, C.META.fatal.ending(o)])) : {},
      failDocs: C.DOCS.filter((d) => d.fail).map((d) => ({ id: d.id, fail: d.fail })), secretDocs: C.DOCS.filter((d) => d.secret).map((d) => d.id),
      locks: Object.keys(S.locks || {}), media: Object.keys(C.MEDIA || {}), hintCost: C.META.hintCost || null,
      all: C.DOCS.filter((d) => !d.fail).map((d) => d.id),
      otherRoute: C.QUESTIONS.some((q) => q.branch) ? C.DOCS.filter((d) => d.branch === "A").map((d) => d.id) : [],
      branched: C.QUESTIONS.some((q) => q.branch),
      hidden: C.DOCS.filter((d) => !d.fail && !d.secret && (d.branch === "A" || d.via || d.needs || (C.META.map && d.place && d.place !== C.META.map.home))).map((d) => d.id) };
  }, CASE);
  const seed = async (st) => { await p.evaluate(([k, st]) => { localStorage.setItem(k, JSON.stringify(st)); }, [key, st]); await p.reload(); await p.waitForTimeout(500); await p.click('[data-cv="go"]'); await p.waitForTimeout(500); if (await p.isVisible("input[data-sign]")) { await p.fill("input[data-sign]", "Thử"); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(300); } };
  const base = { started: true, signed: true, player: "Thử", stage: 0, resp: {}, tries: {}, hints: {}, peeked: {}, seen: {}, endings: [], timeLeft: 9000 };
  const junk = (q) => { const r = {}; for (const part of q.parts) { if (part.type === "choice") r[part.id] = part.options.find((o) => o !== info.S[q.id][part.id]); else if (part.type === "number" || part.type === "text") r[part.id] = "9999"; else if (part.type === "line") { r[part.id] = "zz"; r[part.id + "Text"] = "zz"; } else if (part.type === "pins") r.pins = Array.from({ length: part.count }, (_, i) => `x${i}`); else if (part.type === "order") r[part.id] = (part.items || []).map((x) => x.id); else if (part.type === "spot") r[part.id] = "zz"; else if (part.type === "set") r[part.id] = ["zz"]; } return r; };
  const right = (q) => { const s = info.S[q.id], r = {}; for (const part of q.parts) { const a = s[part.id]; if (part.type === "pins") r.pins = a.map((g, i) => g.find((d) => !a.slice(0, i).some((h) => h[0] === d)) || g[0]); else if (part.type === "line") { r[part.id] = a[0]; r[part.id + "Text"] = "x"; } else if (Array.isArray(a)) r[part.id] = part.type === "set" ? a : String(a[0]); else r[part.id] = a; } return r; };

  // 1. hint / solution gating on the first question
  const q1 = info.Q[0];
  await seed({ ...base, resp: { [q1.id]: junk(q1) } });
  const btn = async (act) => p.evaluate((a) => { const x = document.querySelector(`.q-card.open [data-act="${a}"]`); return x ? !x.disabled : null; }, act);
  const states = [];
  if (info.hintCost) {
    // paid hints: open from the start, each costs minutes; wrong answers unlock nothing
    const left = () => p.evaluate((k) => JSON.parse(localStorage.getItem(k)).timeLeft, key);
    ok("hint open from the start", (await btn("hint")) === true);
    ok("solution open from the start", (await btn("solve")) === true);
    const t0 = await left();
    await p.click('.q-card.open [data-act="hint"]'); await p.waitForTimeout(300);
    ok("hint asks before taking time", /phút/.test(await p.textContent("#dialog").catch(() => "")));
    await p.click('[data-dlg="ok"]'); await p.waitForTimeout(400);
    const t1 = await left();
    ok(`hint costs ${info.hintCost.hint} minutes`, Math.round((t0 - t1) / 60) === info.hintCost.hint, `took ${Math.round((t0 - t1) / 60)}`);
    ok("one hint shown", (await p.$$eval(".q-card.open .hint", (h) => h.length)) === 1);
    await p.click('.q-card.open [data-act="hint"]'); await p.waitForTimeout(300); await p.click('[data-dlg="no"]'); await p.waitForTimeout(300);
    ok("cancelling a hint costs nothing", (await left()) === t1 && (await p.$$eval(".q-card.open .hint", (h) => h.length)) === 1);
    for (let n = 0; n < 2; n++) { await p.click('.q-card.open [data-act="submit"]'); await p.waitForTimeout(300); }
    ok("wrong answers unlock no hint", (await p.$$eval(".q-card.open .hint", (h) => h.length)) === 1);
    const t2 = await left();
    await p.click('.q-card.open [data-act="solve"]'); await p.waitForTimeout(300); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(400);
    ok(`solution costs ${info.hintCost.solve} minutes`, Math.round((t2 - (await left())) / 60) === info.hintCost.solve);
    ok("solution shown", /Lời giải/.test(await p.textContent("#dialog").catch(() => "")));
    await p.click('[data-dlg="ok"]').catch(() => {}); await p.waitForTimeout(300);
  } else {
  for (let n = 0; n <= 4; n++) { states.push([n, await btn("hint"), await btn("solve")]); if (n < 4) { await p.click('.q-card.open [data-act="submit"]'); await p.waitForTimeout(300); } }
  ok("hint closed before 2 wrong answers", states[0][1] === false && states[1][1] === false);
  ok("hint open after 2 wrong answers", states[2][1] === true);
  ok("solution closed before 4 wrong answers", states[3][2] === false);
  ok("solution open after 4 wrong answers", states[4][2] === true);
  }

  // 2. lock boxes
  for (const lock of info.locks) {
    ok(`lock ${lock} is a widget of the case`, info.media.includes(lock));
    for (const wrong of [true, false]) {
      await p.goto(URL); await p.waitForTimeout(400);
      await p.evaluate((k) => localStorage.removeItem(k), key);
      const opened = await p.evaluate(async ([c, lock, code, wrong]) => {
        const C = await import(`/cases/${c}/index.js`);
        document.body.innerHTML = '<div id="w"></div>'; const el = document.getElementById("w");
        C.MEDIA[lock](el, lock);
        const target = code.map(String); if (wrong) target[target.length - 1] = target[target.length - 1] === "1" ? "2" : "1";
        for (let i = 0; i < target.length; i++) for (let k = 0; k < 40; k++) {
          const v = el.querySelectorAll(".pz-sym")[i].dataset.v; if (v === target[i]) break;
          el.querySelector(`[data-r="${i}"][data-d="1"]`).click();
        }
        el.querySelector("[data-open]").click();
        return !!el.querySelector(".pz-open");
      }, [CASE, lock, info.S.locks[lock], wrong]);
      ok(`lock ${lock} ${wrong ? "refuses a wrong code" : "opens with its code"}`, opened === !wrong);
    }
  }

  // 3 + 4. the last question: every option (fatal) or the right answer (flawless)
  const last = info.Q[info.Q.length - 1], li = info.Q.length - 1;
  const opts = last.fatal ? last.parts.find((x) => x.type === "choice").options : [null];
  const good = info.endings.find((e) => e.good)?.id, hidden = info.endings.find((e) => e.hidden)?.id;
  for (const o of opts) {
    await p.goto(URL); await p.waitForTimeout(300);
    const r = o == null ? right(last) : { [last.parts.find((x) => x.type === "choice").id]: o };
    await seed({ ...base, stage: li, resp: { [last.id]: r }, ...(info.branched ? { branch: "B" } : {}) });
    await p.click('.q-card.open [data-act="submit"]'); await p.waitForTimeout(400);
    if (last.fatal) { await p.click('[data-dlg="ok"]'); await p.waitForTimeout(400); }
    await p.waitForTimeout(9000);
    const st = await p.evaluate((k) => JSON.parse(localStorage.getItem(k)), key);
    const isRight = o == null || o === info.S[last.id][last.parts.find((x) => x.type === "choice").id];
    const label = o == null ? "right answer" : o.slice(0, 2);
    if (isRight) {
      ok(`${label}: case closed`, st.stage === info.Q.length && !st.failed);
      if (good) ok(`${label}: good ending unlocked`, (st.endings || []).includes(good));
      if (hidden) ok(`${label}: hidden ending unlocked on a flawless run`, (st.endings || []).includes(hidden));
      const shown = await p.evaluate(() => [...document.querySelectorAll("[data-doc]")].map((x) => x.dataset.doc));
      for (const d of info.secretDocs) ok(`${label}: secret doc ${d} shown`, shown.includes(d));
      const missing = info.all.filter((d) => !shown.includes(d) && !info.otherRoute.includes(d));
      ok(`${label}: every document of the route taken is open after winning`, missing.length === 0, missing.slice(0, 5).join(","));
      if (info.otherRoute.length) {
        const locked = await p.evaluate(() => [...document.querySelectorAll("[data-locked]")].map((x) => x.dataset.locked));
        ok(`${label}: documents of the other route are shown locked`, info.otherRoute.every((d) => locked.includes(d)) && !info.otherRoute.some((d) => shown.includes(d)));
        for (let k = 0; k < 4; k++) { const d = await p.$('#dialog:not([hidden]) [data-dlg="ok"]'); if (!d) break; await d.click(); await p.waitForTimeout(300); }
        for (let k = 0; k < 6 && await p.$("#fx .scare"); k++) { await p.click("#fx .scare", { force: true }).catch(() => {}); await p.waitForTimeout(700); }
        await p.click(`[data-locked="${info.otherRoute[0]}"]`); await p.waitForTimeout(300);
        ok(`${label}: a locked document offers to play the other route`, /nhánh khác/.test(await p.textContent("#dialog").catch(() => "")));
        await p.click('[data-dlg="no"]').catch(() => {}); await p.waitForTimeout(200);
      }
    } else {
      const want = info.routes[o];
      ok(`${label}: run failed`, !!st.failed);
      ok(`${label}: ending ${want} unlocked`, (st.endings || []).includes(want), `got ${JSON.stringify(st.endings)}`);
      const shown = await p.evaluate(() => [...document.querySelectorAll("[data-doc]")].map((x) => x.dataset.doc));
      const need = info.failDocs.filter((d) => d.fail === true || (Array.isArray(d.fail) && d.fail.includes(want))).map((d) => d.id);
      ok(`${label}: its report shown`, need.length > 0 && need.every((d) => shown.includes(d)), need.join(","));
      // a lost run keeps only what was found: the seeded run visited no place, won no cross-examination, chose no route
      const leak = info.hidden.filter((d) => shown.includes(d));
      ok(`${label}: nothing unfound is opened after losing`, leak.length === 0, leak.slice(0, 5).join(","));
    }
  }
  ok("no page errors", errs.length === 0, errs.join("; "));
  console.log(bad ? `${bad} problem(s)` : "flow ok");
  await b.close(); process.exit(bad ? 1 : 0);
})();
