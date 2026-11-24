// Plays the puzzle test page (thu-cau-do.html) in a browser: sticks, card, lock. Usage: node tools/demo_test.cjs [url]
const { chromium, devices } = require("playwright");
const URL = process.argv[2] || "http://localhost:8063/thu-cau-do.html";
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
  const errs = []; p.on("pageerror", (e) => errs.push(e.message));
  await p.goto(URL); await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(600);
  let bad = 0; const say = (what, ok, extra = "") => { if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what} ${extra}`); };
  // sticks: target dê, rồng, ngựa (turned), chuột
  const caps = () => p.$$eval("#thanh .pz-cap", (c) => c.map((x) => x.textContent));
  const moveTo = async (want, pos) => { let at = (await caps()).findIndex((c) => c.includes(want)); while (at > pos) { await p.click(`#thanh [data-mv="${at}"][data-d="-1"]`); at--; } };
  const asFound = await p.$$eval("#thanh .pz-read div", (d) => d.map((x) => x.textContent));
  await moveTo("dê", 0); await moveTo("rồng", 1); await moveTo("ngựa", 2);
  const ngua = await p.$$eval("#thanh .pz-cap", (c) => c.findIndex((x) => x.textContent.includes("ngựa")));
  await p.click(`#thanh [data-turn]:nth-of-type(1) >> nth=${ngua}`).catch(() => {});
  const turnBtns = await p.$$("#thanh [data-turn]"); await turnBtns[ngua].click().catch(() => {});
  const rows = await p.$$eval("#thanh .pz-read div", (d) => d.map((x) => x.textContent));
  // the click above may have toggled twice; normalise to the target
  const want = ["0805", "0906", "1102", "1010", "1507", "1705", "1805", "1406"];
  if (rows.join() !== want.join()) { await turnBtns[ngua].click(); }
  const rows2 = await p.$$eval("#thanh .pz-read div", (d) => d.map((x) => x.textContent));
  say("sticks as found do not read the numbers", asFound.join() !== want.join(), asFound.join(" "));
  say("sticks arranged read", rows2.join() === want.join(), rows2.join(" "));
  const words = await p.evaluate((nums) => nums.map((n) => { const l = document.querySelectorAll("#thu > div")[+n.slice(0, 2) - 1]; const w = l.lastChild.textContent.split(/\s+/).map((x) => x.replace(/[,.?!:;]/g, "")); return w[+n.slice(2) - 1]; }).join(" "), rows2);
  say("letter words on the page", words === "tấm bìa úp mặt trên trang thứ ba", words);
  // card: sheet three, face down
  const holes = () => p.$$eval("#bia .pz-hole", (h) => h.map((x) => x.textContent).join(""));
  const readCard = async () => { let t = ""; for (let k = 0; k < 4; k++) { t += await holes(); await p.click('#bia [data-g="turn"]'); } return t; };
  await p.click('#bia [data-g="on"]');
  const sheet1 = await readCard();
  say("sheet one, card face up (trap)", sheet1.startsWith("MAHOMLANAMANHCADIB"), sheet1);
  await p.click('#bia [data-pg="1"]'); await p.click('#bia [data-g="flip"]');
  const sheet2 = await readCard();
  say("sheet two, card face down (trap)", sheet2.startsWith("MAHOMLANAMCHINGUYETBOMEDI"), sheet2);
  await p.click('#bia [data-pg="2"]');
  const sheet3 = await readCard();
  say("sheet three, card face down", sheet3.startsWith("MAHOMLANAMGIAYBAOTUANHCAVEDENNHA"), sheet3);
  // lock
  const setCode = async (code) => { for (let i = 0; i < 4; i++) for (let k = 0; k < 10 && (await p.$$eval("#hom .pz-sym", (s, i) => s[i].dataset.v, i)) !== String(code[i]); k++) await p.click(`#hom [data-r="${i}"][data-d="1"]`); await p.click("#hom [data-open]"); await p.waitForTimeout(150); return !!(await p.$("#hom .pz-open")); };
  say("lock 1972 (register) stays shut", !(await setCode([1, 9, 7, 2])));
  say("lock 1971 (trap sheet) stays shut", !(await setCode([1, 9, 7, 1])));
  say("lock 1968 (trap sheet two) stays shut", !(await setCode([1, 9, 6, 8])));
  say("lock 1975 opens", await setCode([1, 9, 7, 5]), (await p.textContent("#hom")).slice(0, 60) + "…");
  // phone width
  const m = await b.newPage({ ...devices["iPhone 13"] }); await m.goto(URL); await m.waitForTimeout(600);
  const w = await m.evaluate(() => [innerWidth, document.documentElement.scrollWidth]);
  say("phone: no sideways scroll", w[0] === w[1], w.join(" / "));
  say("no page errors", !errs.length, errs.join("; "));
  console.log(bad ? `\n${bad} problem(s)` : "\ndemo page plays through");
  await b.close(); process.exit(bad ? 1 : 0);
})();
