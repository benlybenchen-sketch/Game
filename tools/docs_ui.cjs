// Opens every document of a case (desktop and phone) with the case finished (and, if it has one, after a lost run),
// starts every tape, and reports page errors and horizontal overflow. Usage: CASE=05 node tools/docs_ui.cjs
const { chromium, devices } = require("playwright");
const id = process.env.CASE, U = `http://localhost:8063/?case=${id}&preview=1`;
(async () => {
  const b = await chromium.launch(); const out = [];
  for (const [tag, ctxOpt] of [["pc", { viewport: { width: 1366, height: 860 } }], ["phone", devices["iPhone 12"]]]) {
    for (const mode of ["done", "lost"]) {
      const ctx = await b.newContext(ctxOpt); const p = await ctx.newPage(); const errs = [];
      p.on("pageerror", (e) => errs.push(e.message)); p.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) errs.push("console: " + m.text()); });
      await p.goto(U);
      const n = await p.evaluate(async (id) => (await import(`/cases/${id}/index.js`)).QUESTIONS.length, id);
      const hasFatal = await p.evaluate(async (id) => !!(await import(`/cases/${id}/index.js`)).META.fatal, id);
      if (mode === "lost" && !hasFatal) { await ctx.close(); continue; }
      const st = mode === "done" ? { started: true, stage: n, seen: {} } : { started: true, stage: n - 1, seen: {}, failed: { q: "q" + n, choice: "A." } };
      await p.evaluate(([id, st]) => localStorage.setItem("hsnd.case." + id, JSON.stringify(st)), [id, st]);
      await p.goto(U); await p.waitForTimeout(300);
      // nothing (cover picture, overlay) may sit on top of the cover's buttons
      const covered = async (sel) => p.evaluate((sel) => { const e = document.querySelector(sel); if (!e) return "missing"; const r = e.getBoundingClientRect(); if (!r.width) return "hidden";
        const t = document.elementFromPoint(r.left + r.width / 2, Math.min(r.top + r.height / 2, innerHeight - 2)); return t && (e === t || e.contains(t)) ? "" : (t ? t.className || t.tagName : "nothing"); }, sel);
      for (const sel of ['[data-cv="go"]', ".cover-title"]) { await p.evaluate((sel) => document.querySelector(sel)?.scrollIntoView({ block: "center" }), sel); await p.waitForTimeout(100); const c = await covered(sel); if (c) errs.push(`cover: ${sel} covered by ${c}`); }
      await p.click('[data-cv="go"]'); await p.waitForTimeout(400);
      // close any dialog that might be open
      for (let i = 0; i < 3; i++) { const d = await p.$('[data-dlg="ok"]'); if (d && await d.isVisible()) { await d.click(); await p.waitForTimeout(200); } }
      const docIds = await p.$$eval("[data-doc]", (els) => [...new Set(els.map((e) => e.dataset.doc))]);
      for (const d of docIds) {
        if (tag === "phone") await p.click('.tabs [data-panel="folder"]').catch(() => {});
        // a jump scare covers the screen until the player clicks it away: do the same
        for (let i = 0; i < 5 && await p.$("#fx .scare"); i++) { await p.click("#fx .scare", { force: true }).catch(() => {}); await p.waitForTimeout(800); }
        // a delayed scare can rise in the middle of the click: dismiss it and try once more
        await p.click(`[data-doc="${d}"]`, { timeout: 4000 }).catch(async () => {
          for (let i = 0; i < 5 && await p.$("#fx .scare"); i++) { await p.click("#fx .scare", { force: true }).catch(() => {}); await p.waitForTimeout(800); }
          await p.click(`[data-doc="${d}"]`, { timeout: 4000 }).catch(() => errs.push(`cannot open ${d}`));
        });
        await p.waitForTimeout(150);
        const play = await p.$(".tape button");
        if (play && await play.isVisible()) { await play.click().catch(() => {}); await p.waitForTimeout(300); await play.click().catch(() => {}); }
        // the document title must be visible and on top (no picture or overlay hiding the reader)
        for (let i = 0; i < 5 && await p.$("#fx .scare"); i++) { await p.click("#fx .scare", { force: true }).catch(() => {}); await p.waitForTimeout(800); }
        { const c = await covered(".reader-head h2"); if (c && c !== "hidden") errs.push(`${d}: reader title covered by ${c}`); }
        const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        if (ov > 2) errs.push(`${d}: page wider than screen by ${ov}px`);
        for (let i = 0; i < 2; i++) { const dl = await p.$('[data-dlg="ok"]'); if (dl && await dl.isVisible()) await dl.click(); }
      }
      out.push(`${tag}/${mode}: ${docIds.length} docs opened, ${errs.length ? errs.length + " problems:\n    " + [...new Set(errs)].join("\n    ") : "no problems"}`);
      await ctx.close();
    }
  }
  console.log(`== ${id}\n  ` + out.join("\n  ")); await b.close();
})();
