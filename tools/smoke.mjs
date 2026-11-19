// Plays the whole case in a headless browser with the right answers, checks for errors, takes screenshots.
//   python3 -m http.server 8063 &   then   node tools/smoke.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
const CASE = process.env.CASE || "01";
const { DOCS, QUESTIONS, SECRET, SECRET_KEY } = await import(`../cases/${CASE}/index.js`);
import { decode } from "../js/answer.js";
const S = decode(SECRET, SECRET_KEY);
const out = process.argv[2] || "/tmp";
const URL = `http://localhost:8063/?case=${CASE}`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) errors.push("console: " + m.text()); });
await page.goto(URL);
await page.screenshot({ path: `${out}/0_cover.png` });
await page.click('[data-cv="go"]');
await page.waitForTimeout(200);
if (await page.isVisible("input[data-sign]")) { await page.fill("input[data-sign]", process.env.NAME || "Nguyễn Thị Thư"); await page.screenshot({ path: `${out}/contract.png` }); await page.click('[data-dlg="ok"]'); await page.waitForTimeout(300); }
const open = async (id) => { await page.click(`[data-doc="${id}"]`); await page.waitForTimeout(150); };
// open every doc of stage 0 to check rendering
for (const [i, q] of QUESTIONS.entries()) {
  for (const d of DOCS.filter((d) => d.stage === i)) { await open(d.id); }
  if (CASE === "01" && i === 1) { await open("video_dap"); await page.fill(".cam-slider", "1370"); await page.dispatchEvent(".cam-slider", "input"); await page.click('[data-c="boost"]'); await page.screenshot({ path: `${out}/v_cam.png` }); }
  if (CASE === "01" && i === 1) { await open("anh_le"); await page.fill('[data-d="exp"]', "4"); await page.dispatchEvent('[data-d="exp"]', "input"); await page.screenshot({ path: `${out}/v_dark.png` }); }
  if (CASE === "01" && i === 0) { await open("bang_1"); await page.click('[data-t="spec"]'); await page.click('[data-t="play"]'); await page.waitForTimeout(1500); await page.click('[data-t="play"]'); await page.screenshot({ path: `${out}/v_tape.png` }); }
  if (CASE === "01" && i === 0) { await open("ban_do"); await page.screenshot({ path: `${out}/v_map.png` }); }
  if (CASE === "03" && i === 0) {   // the cầu cơ board must move while the finger is held on it
    await open("ban_co_1"); await page.locator(".cb-board").scrollIntoViewIfNeeded(); await page.waitForTimeout(3000);
    const r = await page.locator(".cb-board").boundingBox();
    await page.mouse.move(r.x + r.width / 2, r.y + r.height * 0.8); await page.mouse.down(); await page.waitForTimeout(4000); await page.mouse.up();
    const got = (await page.textContent(".cb-out")).replace(/\s/g, "");
    console.log("board", got.length >= 3 ? "MOVES " + got : "STUCK"); if (got.length < 3) errors.push("board does not move");
  }
  const s = S[q.id];
  for (const p of q.parts) {
    const sel = `[data-part="${p.id}"]`;
    if (p.type === "choice") await page.selectOption(sel, s[p.id]);
    else if (["number", "time", "text"].includes(p.type)) await page.fill(sel, String(s[p.id][0]));
    else if (p.type === "line") {
      const lineId = s[p.id][0];
      const d = DOCS.find((d) => d.html().includes(`data-line="${lineId}"`));
      await page.click(`[data-pick="${p.id}"]`);
      await open(d.id);
      await page.click(`.ln[data-line="${lineId}"]`);
    } else if (p.type === "pins") {
      for (const g of s.pins) { await open(g[0]); await page.click(`[data-pin="${g[0]}"]`); }
    }
  }
  await page.screenshot({ path: `${out}/q${i + 1}_filled.png` });
  await page.click('[data-act="submit"]');
  await page.waitForTimeout(300);
  const ok = await page.isVisible("#dialog");
  console.log(q.id, ok ? "SOLVED" : "FAILED: " + (await page.textContent(".q-feedback")));
  if (!ok) break;
  await page.screenshot({ path: `${out}/q${i + 1}_memo.png` });
  await page.click('[data-dlg="ok"]');
  await page.waitForTimeout(400);
}
for (const d of DOCS.filter((d) => d.stage === QUESTIONS.length)) await open(d.id);
await page.screenshot({ path: `${out}/end.png` });
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
m.on("pageerror", (e) => errors.push("mobile pageerror: " + e.message));
await m.goto(URL); await m.click('[data-cv="go"]'); await m.waitForTimeout(300);
if (await m.isVisible("input[data-sign]")) { await m.click('[data-dlg="ok"]'); await m.waitForTimeout(300); }
await m.screenshot({ path: `${out}/m_reader.png` });
const sw = await m.evaluate(() => document.documentElement.scrollWidth);
console.log("mobile scrollWidth", sw);
console.log(errors.length ? errors.join("\n") : "no errors");
await browser.close();
