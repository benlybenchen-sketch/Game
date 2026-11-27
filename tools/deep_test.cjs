// Deeper gameplay checks in a real browser, for every case: saving and reloading mid-run, losing on time in the middle of
// a case (rule 29: only what was found stays open, "play again" keeps the endings), and for case 08 the map, the
// cross-examinations, the mid-case route, the door, the locked documents after a win, and the phone layout.
// Usage: node tools/deep_test.cjs [case ...]   (default: all cases)
const { chromium, devices } = require("playwright");
const CASES = process.argv.slice(2).length ? process.argv.slice(2) : ["01", "02", "03", "04", "05", "06", "07", "08"];
let bad = 0; const ok = (what, cond, extra = "") => { if (!cond) bad++; console.log(`${cond ? "ok " : "BAD"} ${what}${extra ? " · " + extra : ""}`); };
(async () => {
  const b = await chromium.launch();
  for (const c of CASES) {
    const p = await b.newPage({ viewport: { width: 1300, height: 900 } }); const errs = []; p.on("pageerror", (e) => errs.push(e.message));
    const U = `http://localhost:8063/?case=${c}&preview=1`, key = `hsnd.case.${c}`;
    const get = () => p.evaluate((k) => JSON.parse(localStorage.getItem(k) || "{}"), key);
    const seed = async (st) => { await p.goto(U); await p.evaluate(([k, st]) => localStorage.setItem(k, JSON.stringify(st)), [key, st]); await p.goto(U); await p.waitForTimeout(400); await p.click('[data-cv="go"]'); await p.waitForTimeout(500); if (await p.isVisible("input[data-sign]")) { await p.fill("input[data-sign]", "Thử"); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(300); } };
    const folder = () => p.evaluate(() => [...document.querySelectorAll("[data-doc]")].map((x) => x.dataset.doc));
    const info = await (async () => { await p.goto(U); return p.evaluate(async (c) => { const C = await import(`/cases/${c}/index.js`); return { n: C.QUESTIONS.length, strict: !!C.META.strict, map: C.META.map || null, docs: C.DOCS.map((d) => ({ id: d.id, stage: d.stage, place: d.place, branch: d.branch, via: d.via, needs: d.needs, fail: !!d.fail, secret: !!d.secret })), q0: C.QUESTIONS[0] }; }, c); })();
    console.log(`== ${c}`);
    // 1. reload keeps the run
    await seed({ started: true, signed: true, player: "Thử", stage: 1, timeLeft: 5000, resp: {}, seen: {} });
    const part = info.q0.parts.find((x) => ["choice", "text", "number"].includes(x.type));
    await p.evaluate(() => { const card = document.querySelector(".q-card.open"); return !!card; });
    const st1 = await get();
    await p.reload(); await p.waitForTimeout(400); await p.click('[data-cv="go"]'); await p.waitForTimeout(400);
    const st2 = await get();
    ok("reload keeps the stage", st2.stage === 1);
    if (info.strict) ok("reload keeps the clock (not reset to full)", st2.timeLeft <= st1.timeLeft + 1 && st2.timeLeft > 4900, `${st1.timeLeft} → ${st2.timeLeft}`);
    // 2. losing on time in the middle of the case
    if (info.strict) {
      const k = Math.min(2, info.n - 1);
      await seed({ started: true, signed: true, player: "Thử", stage: k, timeLeft: 2, resp: {}, seen: {}, endings: ["x_kept"] });
      await p.waitForTimeout(4500);
      ok("time out shows GAME OVER", /GAME OVER/.test(await p.textContent("#dialog").catch(() => "")));
      const shown = await folder();
      const late = shown.filter((id) => (info.docs.find((d) => d.id === id) || {}).stage > k);
      ok("after time out: nothing past the stage reached", late.length === 0, late.join(","));
      const unfound = shown.filter((id) => { const d = info.docs.find((x) => x.id === id); return d && (d.via || d.needs || d.branch || (info.map && d.place && d.place !== info.map.home)); });
      ok("after time out: nothing unfound is opened", unfound.length === 0, unfound.slice(0, 5).join(","));
      await p.click('[data-dlg="ok"]'); await p.waitForTimeout(500);
      const st3 = await get();
      ok("play again resets the run and keeps the endings", st3.stage === 0 && !st3.timeout && (st3.endings || []).includes("x_kept"));
    }
    // 3. case 08 mechanics
    if (c === "08") {
      const left = async () => (await get()).timeLeft;
      await seed({ started: true, signed: true, player: "Thử", stage: 0, timeLeft: 9000, resp: {}, seen: {} });
      ok("08: Lôi Đài documents hidden before going there", !(await folder()).includes("so_sam"));
      await p.click('[data-doc="ban_do"]'); await p.waitForTimeout(200);
      let t0 = await left(); await p.click('.reader-body [data-visit="loi_dai"]'); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(400);
      ok("08: a visit costs 3 minutes", Math.round((t0 - (await left())) / 60) === 3);
      ok("08: the visit opens the place's documents", (await folder()).includes("so_sam"));
      await p.click('[data-doc="ban_do"]'); await p.waitForTimeout(200);
      ok("08: a second visit in the same stage is disabled", !(await p.$('.reader-body .places [data-visit="loi_dai"]')));
      t0 = await left(); await p.click('.reader-body [data-visit="thach_lam"]'); await p.click('[data-dlg="no"]'); await p.waitForTimeout(300);
      ok("08: cancelling a visit costs nothing", (await left()) === t0 || Math.abs((await left()) - t0) < 3);
      // honest witness: any document is a miss
      await p.click('[data-doc="khai_a_mac"]'); await p.waitForTimeout(200);
      t0 = await left(); await p.selectOption('.confront [data-cfpick="0"]', "lenh_cu"); await p.click(".confront [data-cfgo]"); await p.waitForTimeout(400);
      ok("08: a wrong document in cross-examination costs 3 minutes", Math.round((t0 - (await left())) / 60) === 3);
      ok("08: the witness is now on guard (two documents)", (await p.$$(".confront [data-cfpick]")).length === 2);
      await p.selectOption('.confront [data-cfpick="0"]', "so_sam"); await p.selectOption('.confront [data-cfpick="1"]', "lenh_cu"); await p.click(".confront [data-cfgo]"); await p.waitForTimeout(400);
      ok("08: one right and one wrong document still fails", !(await folder()).includes("khai_a_mac_2"));
      await p.selectOption('.confront [data-cfpick="0"]', "so_sam"); await p.selectOption('.confront [data-cfpick="1"]', "ghi_dem_49"); await p.click(".confront [data-cfgo]"); await p.waitForTimeout(400);
      await p.click('[data-dlg="ok"]').catch(() => {}); await p.waitForTimeout(300);
      ok("08: two right documents win the cross-examination", (await folder()).includes("khai_a_mac_2"));
      // honest witness
      await seed({ started: true, signed: true, player: "Thử", stage: 1, timeLeft: 9000, resp: {}, seen: {} });
      await p.click('[data-doc="khai_minh_kinh"]'); await p.waitForTimeout(200);
      t0 = await left(); await p.selectOption('.confront [data-cfpick="0"]', "so_le_minh_kinh"); await p.click(".confront [data-cfgo]"); await p.waitForTimeout(400);
      ok("08: an honest witness cannot be broken (miss costs 3 minutes)", Math.round((t0 - (await left())) / 60) === 3);
      // the route choice
      await seed({ started: true, signed: true, player: "Thử", stage: 3, timeLeft: 9000, resp: {}, seen: {} });
      ok("08: no answer form before the night's choice", !(await p.$('.q-card.open [data-act="submit"]')));
      await p.click('[data-branch="A"]'); await p.click('[data-dlg="no"]'); await p.waitForTimeout(300);
      ok("08: thinking again leaves the choice open", !(await get()).branch);
      await p.click('[data-branch="B"]'); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(400);
      const f = await folder();
      ok("08: route B shows the door, not the coffin", f.includes("tran_cua") && !f.includes("khai_quan") && !f.includes("trong_dong_b"));
      await p.click('[data-doc="tran_cua"]'); await p.waitForTimeout(200);
      t0 = await left(); await p.click(".reader-body [data-open]"); await p.waitForTimeout(400);
      ok("08: a wrong door costs 3 minutes", Math.round((t0 - (await left())) / 60) === 3);
      ok("08: the answer form appears after the choice", !!(await p.$('.q-card.open [data-act="submit"]')));
      // after a win on route A, route B documents are locked and offer a replay
      await seed({ started: true, signed: true, player: "Thử", stage: info.n, branch: "A", timeLeft: 9000, resp: {}, seen: {}, endings: ["do_kiep"] });
      for (let i = 0; i < 3; i++) { const d = await p.$('[data-dlg="ok"]'); if (d && await d.isVisible()) await d.click(); }
      const locked = await p.evaluate(() => [...document.querySelectorAll("[data-locked]")].map((x) => x.dataset.locked));
      const bDocs = info.docs.filter((d) => d.branch === "B").map((d) => d.id);
      ok("08: after a win on route A, every route B document is locked", bDocs.every((id) => locked.includes(id)), locked.join(","));
      ok("08: after a win, unvisited places are open", (await folder()).includes("so_mieu_ha_khe"));
      await p.click(`[data-locked="${bDocs[0]}"]`); await p.waitForTimeout(300);
      ok("08: a locked document offers to play the other route", /nhánh khác/.test(await p.textContent("#dialog")));
      await p.click('[data-dlg="ok"]'); await p.waitForTimeout(500);
      const st = await get();
      ok("08: replay starts over with no route and keeps the endings", st.stage === 0 && !st.branch && (st.endings || []).includes("do_kiep"));
      ok("08: replay goes back to the cover", await p.evaluate(() => document.body.dataset.screen === "cover"));
      // phone layout of the new parts
      const ph = await b.newPage({ ...devices["iPhone 12"] }); const perr = []; ph.on("pageerror", (e) => perr.push(e.message));
      await ph.goto(U); await ph.evaluate((k) => localStorage.setItem(k, JSON.stringify({ started: true, stage: 4, branch: "B", timeLeft: 9000, visits: { dan_phong: 4 }, confronted: { tieu_tung: true }, seen: {} })), key);
      await ph.goto(U); await ph.waitForTimeout(400); await ph.click('[data-cv="go"]'); await ph.waitForTimeout(500);
      for (const id of ["ban_do", "khai_lang", "can_dan", "tran_cua"]) {
        await ph.click('.tabs [data-panel="folder"]'); await ph.click(`[data-doc="${id}"]`); await ph.waitForTimeout(300);
        const ov = await ph.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        ok(`08 phone: ${id} fits the screen`, ov <= 2, `${ov}px too wide`);
      }
      ok("08 phone: no page errors", perr.length === 0, perr.join("; "));
      await ph.close();
    }
    // case 05 torch: a click on the photo holds the light, so the pointer can reach "Ghi vào sổ" without the light wandering off
    if (c === "05") {
      const t = await b.newPage(); const terr = []; t.on("pageerror", (e) => terr.push(e.message));
      await t.goto(U); await t.evaluate((k) => localStorage.setItem(k, JSON.stringify({ started: true, stage: 2, timeLeft: 9000, seen: {}, signed: true, player: "T" })), key);
      await t.goto(U); await t.waitForTimeout(400); await t.click('[data-cv="go"]'); await t.waitForTimeout(600);
      for (let k = 0; k < 4; k++) { const d = await t.$('#dialog:not([hidden]) [data-dlg="ok"]'); if (!d) break; await d.click(); await t.waitForTimeout(200); }
      await t.click('[data-doc="vo_toi"]'); await t.waitForTimeout(500);
      const r = await t.locator(".torch-stage").boundingBox(); const at = (x, y) => [r.x + (r.width * x) / 100, r.y + (r.height * y) / 100];
      await t.mouse.move(...at(54, 53)); await t.mouse.down(); await t.mouse.up();
      for (const y of [60, 75, 95]) await t.mouse.move(...at(30, y), { steps: 3 });
      await t.click('[data-torch="note"]'); await t.waitForTimeout(300);
      ok("05 torch: clicking the photo holds the light while the pointer goes to the button", (await t.evaluate((k) => localStorage.getItem(k), key)).includes('"nhan"'));
      await t.mouse.move(...at(80, 48), { steps: 4 });
      ok("05 torch: back on the photo, the light follows the mouse again", /Chén trà/.test(await t.textContent(".torch-under")));
      // the night tape at ×0,6 plays the slowed takes (the whisper under the cough, the last line at the microphone)
      const slowReq = []; t.on("request", (q) => { if (/bang_dem_\d+_slow\.mp3/.test(q.url())) slowReq.push(q.url()); });
      await t.evaluate((k) => localStorage.setItem(k, JSON.stringify({ started: true, stage: 3, timeLeft: 9000, seen: {}, signed: true, player: "T" })), key);
      await t.goto(U); await t.waitForTimeout(400); await t.click('[data-cv="go"]'); await t.waitForTimeout(600);
      for (let k = 0; k < 4; k++) { const d = await t.$('#dialog:not([hidden]) [data-dlg="ok"]'); if (!d) break; await d.click(); await t.waitForTimeout(200); }
      await t.click('[data-doc="bang_dem"]').catch(() => {}); await t.waitForTimeout(600);
      if (await t.$('[data-t="speed"]')) {
        await t.click('[data-t="speed"]'); await t.click('[data-t="play"]'); await t.waitForTimeout(4000); await t.click('[data-t="play"]');
        ok("05 tape: ×0,6 loads the slowed takes", slowReq.length > 0 && (await t.textContent('[data-t="speed"]')).includes("0,6"), slowReq.length + " slowed files");
      } else ok("05 tape: the night tape opens", false);
      ok("05 torch: no page errors", terr.length === 0, terr.join("; "));
      await t.close();
    }
    // music: plays on the cover and the desk, stops on the case list
    await p.goto(U); await p.waitForTimeout(400); await p.click('[data-cv="go"]').catch(() => {}); await p.waitForTimeout(800);
    if (await p.isVisible("input[data-sign]")) { await p.fill("input[data-sign]", "Thử"); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(400); }
    for (let k = 0; k < 3; k++) { const d = await p.$('#dialog:not([hidden]) [data-dlg="ok"]'); if (!d) break; await d.click(); await p.waitForTimeout(200); }
    const inCase = await p.evaluate(() => window.__hdn.ambState());
    await p.evaluate(() => document.querySelector('[data-top="cover"]')?.click()); await p.waitForTimeout(300);
    await p.click('[data-cv="home"]'); await p.waitForTimeout(500);
    const onHome = await p.evaluate(() => window.__hdn.ambState());
    ok("music plays inside the case", inCase.on && inCase.style !== "none", JSON.stringify(inCase));
    ok("no music on the case list", onHome.style === "none" && !onHome.on, JSON.stringify(onHome));
    await p.click(`.case-card[data-case="${c === "08" ? "07" : c}"]`).catch(() => {}); await p.waitForTimeout(500);
    const back = await p.evaluate(() => window.__hdn.ambState());
    ok("music comes back when a case is opened again", back.style !== "none", JSON.stringify(back));
    ok(`${c}: no page errors`, errs.length === 0, [...new Set(errs)].join("; "));
    await p.close();
  }
  // ---------------------------------------------------------------- features shared by every case
  {
    console.log("== shared features");
    const ctx = await b.newContext({ viewport: { width: 1300, height: 900 } }); const p = await ctx.newPage(); const errs = []; p.on("pageerror", (e) => errs.push(e.message));
    const H = "http://localhost:8063/";
    // backup and restore
    await p.goto(H + "?case=07&preview=1"); await p.evaluate(() => { localStorage.clear(); localStorage.setItem("hsnd.case.07", JSON.stringify({ started: true, stage: 3, notes: "ghi chú thử", endings: ["that"] })); });
    await p.goto(H); await p.waitForTimeout(400);
    await p.click('[data-cv="backup"]'); await p.waitForTimeout(200);
    const code = await p.inputValue("#dialog .code-box");
    ok("backup gives a code", /^HSND1\./.test(code) && code.length > 40);
    await p.click('[data-dlg="ok"]');
    await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(300);
    await p.click('[data-cv="restore"]'); await p.fill("#dialog .code-box", code.slice(0, -3) + "zzz"); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(200);
    ok("a damaged code is refused with a message", /thiếu hoặc sai|đúng dạng/.test(await p.textContent("#dialog .restore-msg")));
    await p.fill("#dialog .code-box", code); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(300);
    ok("a good code restores", /Đã khôi phục/.test(await p.textContent("#dialog")));
    const back = await p.evaluate(() => JSON.parse(localStorage.getItem("hsnd.case.07") || "{}"));
    ok("restored progress is the same", back.stage === 3 && back.notes === "ghi chú thử" && (back.endings || []).includes("that"));
    // run report
    await p.goto(H + "?case=07&preview=1"); await p.waitForTimeout(400); await p.click('[data-cv="report"]'); await p.waitForTimeout(200);
    const rep = await p.inputValue("#dialog .code-box");
    ok("run report lists every checkpoint", (rep.match(/^\d\. /gm) || []).length === 7, rep.split("\n")[0]);
    await p.click('[data-dlg="ok"]');
    // volume sliders: music and voice only (effects and scares always full)
    await p.click('[data-cv="go"]'); await p.waitForTimeout(300); await p.click('[data-top="settings"]'); await p.waitForTimeout(200);
    const sliders = await p.$$eval("#dialog input[data-vol]", (x) => x.map((i) => i.dataset.vol));
    ok("volume sliders are music and voice only", JSON.stringify(sliders) === JSON.stringify(["music", "voice"]), sliders.join(","));
    await p.fill('#dialog input[data-vol="music"]', "40"); await p.dispatchEvent('#dialog input[data-vol="music"]', "input"); await p.waitForTimeout(100);
    ok("music volume is saved", await p.evaluate(() => JSON.parse(localStorage.getItem("hsnd.settings")).vol.music === 0.4));
    await p.click('[data-dlg="ok"]');
    // first-time guides (tests normally skip them; ?guides=1 turns them on)
    await p.evaluate(() => { const s = JSON.parse(localStorage.getItem("hsnd.settings") || "{}"); s.guides = {}; localStorage.setItem("hsnd.settings", JSON.stringify(s)); localStorage.setItem("hsnd.case.08", JSON.stringify({ started: true, stage: 0, timeLeft: 9000 })); });
    await p.goto(H + "?case=08&preview=1&guides=1"); await p.waitForTimeout(400); await p.click('[data-cv="go"]'); await p.waitForTimeout(500);
    await p.click('[data-doc="ban_do"]'); await p.waitForTimeout(800);
    ok("map guide appears the first time", /Bản đồ/.test(await p.textContent("#dialog").catch(() => "")) && await p.isVisible("#dialog"));
    await p.click('[data-dlg="ok"]'); await p.click('[data-doc="lenh_cu"]'); await p.click('[data-doc="ban_do"]'); await p.waitForTimeout(800);
    ok("map guide does not come back", !(await p.isVisible("#dialog")));
    // offline: a case opened once keeps working when the connection drops
    await p.goto(H + "?case=07&preview=1"); await p.waitForTimeout(2500);
    await p.reload(); await p.waitForTimeout(1500);   // the service worker now controls the page
    await ctx.setOffline(true);
    await p.reload().catch(() => {}); await p.waitForTimeout(1500);
    ok("offline: the case still opens from the cache", await p.evaluate(() => !!document.querySelector('[data-cv="go"]')).catch(() => false));
    await ctx.setOffline(false);
    ok("shared features: no page errors", errs.length === 0, [...new Set(errs)].join("; "));
    await ctx.close();
  }
  console.log(bad ? `${bad} problem(s)` : "deep tests ok"); await b.close(); process.exit(bad ? 1 : 0);
})();
