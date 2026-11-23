// Checks the strict-mode countdown: wrong answers on one question cost 3, 5, 10, 10 minutes; at zero a game-over
// dialog appears and "Chơi lại từ đầu" starts the run again (keeping the timeout count). Usage: CASE=07 node tools/timer_test.cjs
const { chromium } = require("playwright");
const CASE = process.env.CASE || "07";
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1300, height: 900 } });
  const errs = []; p.on("pageerror", (e) => errs.push(e.message));
  const key = `hsnd.case.${CASE}`;
  await p.goto(`http://localhost:8063/?case=${CASE}&preview=1`); await p.waitForTimeout(800);
  await p.evaluate((k) => localStorage.removeItem(k), key); await p.reload(); await p.waitForTimeout(800);
  await p.click('[data-cv="go"]'); await p.waitForTimeout(500);
  if (await p.isVisible("input[data-sign]")) { await p.fill("input[data-sign]", "Thử"); await p.click('[data-dlg="ok"]'); await p.waitForTimeout(300); }
  // A complete but wrong answer: write the junk straight into the saved responses of the open question, then reload.
  const S = await p.evaluate(async (c) => { const m = await import(`/cases/${c}/questions.js`); return m.QUESTIONS[0]; }, CASE);
  await p.evaluate(([k, q]) => {
    const s = JSON.parse(localStorage.getItem(k)); const r = {};
    for (const part of q.parts) {
      if (part.type === "choice") r[part.id] = part.options[part.options.length - 1];
      else if (part.type === "number" || part.type === "text") r[part.id] = "999";
      else if (part.type === "line") { r[part.id] = "zz"; r[part.id + "Text"] = "zz"; }
      else if (part.type === "pins") r.pins = Array.from({ length: part.count }, (_, i) => `x${i}`);
    }
    s.resp = { [q.id]: r }; localStorage.setItem(k, JSON.stringify(s));
  }, [key, S]);
  await p.reload(); await p.waitForTimeout(600); await p.click('[data-cv="go"]'); await p.waitForTimeout(600);
  const left = () => p.evaluate((k) => JSON.parse(localStorage.getItem(k)).timeLeft, key);
  const taken = [];
  for (let i = 0; i < 4; i++) {
    const a = await left();
    await p.click('.q-card.open [data-act="submit"]'); await p.waitForTimeout(400);
    taken.push(Math.round((a - (await left())) / 60));
  }
  console.log("minutes taken per wrong answer:", taken.join(", "), taken.join(",") === "3,5,10,10" ? "(ok)" : "(WRONG)");
  console.log("timer shown:", await p.textContent(".top-timer"));
  await p.evaluate((k) => { const s = JSON.parse(localStorage.getItem(k)); s.timeLeft = 3; localStorage.setItem(k, JSON.stringify(s)); }, key);
  await p.reload(); await p.waitForTimeout(600); await p.click('[data-cv="go"]'); await p.waitForTimeout(5500);
  const dlg = await p.textContent("#dialog").catch(() => "");
  console.log("game over dialog:", /GAME OVER/.test(dlg) ? "shown (ok)" : "MISSING");
  await p.click('[data-dlg="ok"]'); await p.waitForTimeout(500);
  const st = await p.evaluate((k) => JSON.parse(localStorage.getItem(k)), key);
  console.log("after restart:", await p.evaluate(() => document.body.dataset.screen), "| stage", st.stage, "| started", st.started, "| timeout", st.timeout, "| timeouts", st.timeouts, "| timeLeft", st.timeLeft);
  console.log(errs.length ? "errors: " + errs.join("; ") : "no errors");
  await b.close();
})();
