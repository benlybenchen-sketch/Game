// Plays the whole case in a headless browser with the right answers, checks for errors, takes screenshots.
//   python3 -m http.server 8063 &   then   node tools/smoke.mjs [outdir]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
const CASE = process.env.CASE || "01";
const { DOCS, QUESTIONS, SECRET, SECRET_KEY, META } = await import(`../cases/${CASE}/index.js`);
const BRANCH = process.env.BRANCH || "B";   // mid-case route to take (case 08 on)
import { decode } from "../js/answer.js";
const S = decode(SECRET, SECRET_KEY);
const out = process.argv[2] || "/tmp";
const URL = `http://localhost:8063/?case=${CASE}&preview=1`;
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
const shown = async (id) => !!(await page.$(`[data-doc="${id}"]`));
const open = async (id) => { if (!(await shown(id))) { errors.push(`doc ${id} not in the folder`); return false; } await page.click(`[data-doc="${id}"]`); await page.waitForTimeout(150); return true; };
const unscare = async (p = page) => { for (let k = 0; k < 6 && await p.$("#fx .scare"); k++) { await p.click("#fx .scare", { force: true }).catch(() => {}); await p.waitForTimeout(700); } };
// map cases: go to every place that has documents of this stage (or earlier ones never collected)
const visitAll = async (i) => {
  if (!META.map) return;
  const places = [...new Set(DOCS.filter((d) => d.place && d.place !== META.map.home && d.stage <= i && !d.fail && !d.secret && (!d.branch || d.branch === BRANCH)).map((d) => d.place))];
  for (const pl of places) {
    const need = DOCS.filter((d) => d.place === pl && d.stage <= i && (!d.branch || d.branch === BRANCH) && !d.needs && !d.via);
    if (!(await Promise.all(need.map((d) => shown(d.id)))).some((x) => !x)) continue;
    await unscare(); await page.click('[data-doc="ban_do"]'); await page.waitForTimeout(150);
    await page.click(`.reader-body [data-visit="${pl}"]`); await page.click('[data-dlg="ok"]'); await page.waitForTimeout(250);
  }
};
// cross-examinations whose new statement belongs to this stage or earlier
const confrontAll = async (i) => {
  for (const d of DOCS.filter((d) => d.confront && S.confront?.[d.confront.id]?.opens)) {
    const k = S.confront[d.confront.id], o = DOCS.find((x) => x.id === k.opens);
    if (o.stage > i || await shown(o.id) || !(await shown(d.id))) continue;
    const ev = []; for (const e of k.docs) if (await shown(e)) ev.push(e);
    if (!ev.length) continue;
    await unscare(); await open(d.id);
    await page.selectOption('.confront [data-cfpick="0"]', ev[0]); await page.click(".confront [data-cfgo]"); await page.waitForTimeout(250);
    await page.click('[data-dlg="ok"]'); await page.waitForTimeout(250);
    if (!(await shown(o.id))) errors.push(`cross-examination ${d.confront.id} did not open ${o.id}`);
  }
};
// a sealed widget (lock box, door) set to its code from secret.locks
const unlock = async (docId, key) => {
  if (!(await shown(docId))) return;
  await unscare(); await open(docId);
  const code = S.locks[key].map(String);
  for (let r = 0; r < code.length; r++) for (let t = 0; t < 60; t++) {
    const v = await page.evaluate((r) => document.querySelectorAll(".reader-body .pz-sym")[r]?.dataset.v, r);
    if (v === undefined || v === code[r]) break;
    await page.click(`.reader-body [data-r="${r}"][data-d="1"]`);
  }
  await page.click(".reader-body [data-open]"); await page.waitForTimeout(250);
  if (!(await page.$(".reader-body .pz-open"))) errors.push(`${key} did not open with its code`);
};
// open every doc of stage 0 to check rendering
for (const [i, q] of QUESTIONS.entries()) {
  if (q.branch) { await unscare(); await page.click(`[data-branch="${BRANCH}"]`); await page.click('[data-dlg="ok"]'); await page.waitForTimeout(300); }
  await visitAll(i); await confrontAll(i);
  if (CASE === "08" && i === 3 && BRANCH === "B") await unlock("tran_cua", "tran");
  if (CASE === "08" && i === 5) await unlock("tu_thuoc", "tu");
  await confrontAll(i);
  for (const d of DOCS.filter((d) => d.stage === i)) { if (await shown(d.id)) { await unscare(); await open(d.id); } }
  await unscare();
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
      let lineId = s[p.id][0], d = null;
      for (const l of s[p.id]) { const c = DOCS.find((x) => x.html().includes(`data-line="${l}"`)); if (c && await shown(c.id)) { lineId = l; d = c; break; } }
      if (!d) { errors.push(`${q.id}: no line doc in the folder`); continue; }
      await page.click(`[data-pick="${p.id}"]`);
      await open(d.id);
      await page.click(`.ln[data-line="${lineId}"]`);
    } else if (p.type === "spot" || p.type === "set") {
      for (const v of [].concat(s[p.id]).slice(0, p.count || 1)) await page.evaluate(([part, value]) => document.dispatchEvent(new CustomEvent("hdn:answer", { detail: { part, value, text: value } })), [p.id, v]);
    } else if (p.type === "order") {
      for (let k = 0; k < s[p.id].length; k++) {
        for (;;) {
          const cur = await page.evaluate(([q, part]) => window.__hdn.state.resp[q][part], [q.id, p.id]);
          const j = cur.indexOf(s[p.id][k]); if (j <= k) break;
          await page.click(`[data-ord="${p.id}"][data-k="${j}"][data-dir="-1"]`);
        }
      }
    } else if (p.type === "pins") {
      const used = [];
      for (const g of s.pins) { let id = null; for (const x of g) if (!used.includes(x) && await shown(x)) { id = x; break; } if (!id) { errors.push(`${q.id}: no pin of ${g.join("/")} in the folder`); continue; } used.push(id); await unscare(); await open(id); await page.click(`[data-pin="${id}"]`); }
    }
  }
  await page.screenshot({ path: `${out}/q${i + 1}_filled.png` });
  await unscare(); await page.click('[data-act="submit"]');
  await page.waitForTimeout(300);
  if (q.fatal) { await page.screenshot({ path: `${out}/q${i + 1}_warn.png` }); await page.click('[data-dlg="ok"]'); await page.waitForTimeout(400); }
  const ok = await page.isVisible("#dialog");
  console.log(q.id, ok ? "SOLVED" : "FAILED: " + (await page.textContent(".q-feedback")));
  if (!ok) break;
  await page.screenshot({ path: `${out}/q${i + 1}_memo.png` });
  await page.click('[data-dlg="ok"]');
  await page.waitForTimeout(400);
}
if (META.strict) console.log("time left (min):", Math.round((await page.evaluate(() => window.__hdn.state.timeLeft)) / 60));
for (const d of DOCS.filter((d) => d.stage === QUESTIONS.length)) if (await shown(d.id)) { await unscare(); await open(d.id); }
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
