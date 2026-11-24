// Drives the escape-room widgets in a real browser: lock boxes refuse a wrong code and open with the right one;
// the stick blocks read the message once arranged. Usage: node tools/puzzle_test.cjs
const { chromium } = require("playwright");
const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1300, height: 1000 } });
  const errs = []; p.on("pageerror", (e) => errs.push(e.message));
  // mount one widget of a case, alone on the page
  const mount = async (kase, key) => {
    await p.goto(`http://localhost:8063/?case=${kase}&preview=1`); await p.waitForTimeout(700);
    await p.evaluate(() => { for (const k of Object.keys(localStorage)) if (k.startsWith("hsnd.case.")) localStorage.removeItem(k); });
    await p.reload(); await p.waitForTimeout(700);
    await p.evaluate(async ([kase, key]) => {
      const C = await import(`/cases/${kase}/index.js`);
      document.body.innerHTML = '<div id="w" style="padding:16px"></div>';
      C.MEDIA[key](document.getElementById("w"), key);
    }, [kase, key]);
  };
  const setRings = async (target, values) => {
    for (let i = 0; i < target.length; i++) {
      for (let k = 0; k < values.length && (await p.evaluate((i) => document.querySelectorAll(".pz-sym")[i].textContent.trim(), i)) !== String(target[i]); k++)
        await p.click(`[data-r="${i}"][data-d="1"]`);
    }
    await p.click("[data-open]"); await p.waitForTimeout(200);
    return p.evaluate(() => !!document.querySelector(".pz-open"));
  };
  // 07 chest: digits are drawn as Tomb numerals, so set them through the saved position instead of reading glyphs
  const chest = async (code) => {
    await mount("07", "ruong");
    for (let i = 0; i < 4; i++) for (let k = 0; k < code[i]; k++) await p.click(`[data-r="${i}"][data-d="1"]`);
    await p.click("[data-open]"); await p.waitForTimeout(200);
    return p.evaluate(() => !!document.querySelector(".pz-open") && /Bên giữ/.test(document.querySelector(".pz-open").textContent));
  };
  console.log("07 chest, trap code 2-4-3-2 opens:", await chest([2, 4, 3, 2]), "(should be false)");
  console.log("07 chest, code 2-4-3-6 opens and shows the seal rota:", await chest([2, 4, 3, 6]), "(should be true)");
  await mount("06", "hop_son");
  console.log("06 box, Lý Xuân Hoa's stems 己丁壬己 opens:", await setRings(["己", "丁", "壬", "己"], STEMS), "(should be false)");
  await mount("06", "hop_son");
  const ok06 = await setRings(["庚", "戊", "庚", "己"], STEMS);
  console.log("06 box, the card's stems 庚戊庚己 opens:", ok06, "(should be true)", ok06 ? `· deed shown: ${await p.evaluate(() => /QUÁ KẾ THƯ/.test(document.body.textContent))}` : "");
  // 07 sticks: found order = [1-groove, black, 3-groove (upside down), red]; target = [3-groove turned, red, black, 1-groove].
  // The sticks carry hieratic numerals (no reading panel); read the digits behind the glyphs from data-v.
  await mount("07", "sticks");
  const read = () => p.evaluate(() => { const g = [...document.querySelectorAll(".pz-block")].map((b) => [...b.querySelectorAll(".pz-grid > span")].map((x) => x.dataset.v)); return g[0].map((_, r) => g.map((c) => c[r]).join("")).join(""); });
  const caps = async () => p.evaluate(() => [...document.querySelectorAll(".pz-cap")].map((c) => c.textContent));
  const moveTo = async (want, pos) => { let at = (await caps()).findIndex((c) => c.includes(want)); while (at > pos) { await p.click(`[data-mv="${at}"][data-d="-1"]`); at--; } };
  console.log("07 sticks: reading panel hidden:", await p.evaluate(() => !document.querySelector(".pz-read")), "| glyphs drawn:", await p.evaluate(() => document.querySelectorAll(".pz-grid .hn").length));
  console.log("07 sticks: the three-groove stick is drawn upside down as found:", await p.evaluate(() => [...document.querySelectorAll(".pz-block")].some((b) => b.textContent.includes("ba rãnh") && b.querySelector(".pz-up"))));
  await p.click('[data-turn="2"]');                                  // turn the 3-groove stick
  await moveTo("ba rãnh", 0); await moveTo("chấm đỏ", 1); await moveTo("chấm đen", 2);
  const got = await read();
  console.log("07 sticks arranged read:", got, got === "1305071203120804120105140903" ? "(ok)" : "(WRONG)");
  // 04 torn strips: target = Dải 2, Dải 4, Dải 1 (turned), Dải 3
  await mount("04", "giay_xe");
  await p.click('[data-turn="0"]');
  await moveTo("Dải 2", 0); await moveTo("Dải 4", 1); await moveTo("Dải 1", 2);
  const g04 = await p.evaluate(() => [...document.querySelectorAll(".pz-read div")].map((d) => d.textContent).join(""));
  console.log("04 strips arranged read:", g04, g04 === "862989664226642886676483724466" ? "(ok)" : "(WRONG)");
  // 05 darkroom card: sheet one (purple dot), card face down, inked corner bottom-left, read and turn; sheet two face up is a trap
  await mount("05", "grille");
  const readCard = async () => { let t = ""; for (let k = 0; k < 4; k++) { t += await p.evaluate(() => [...document.querySelectorAll(".pz-hole")].map((x) => x.textContent).join("")); await p.click('[data-g="turn"]'); } return t; };
  await p.click('[data-g="on"]'); await p.click('[data-g="flip"]');
  while (!/dưới trái/.test(await p.textContent(".pz-grille"))) await p.click('[data-g="turn"]');
  const g05 = await readCard();
  console.log("05 card read:", g05, g05.startsWith("CONNOIDOIBOCONHOTHAYMECONSOLAMBOOI") ? "(ok)" : "(WRONG)");
  await p.click('[data-pg="1"]'); await p.click('[data-g="flip"]');
  while (!/trên trái/.test(await p.textContent(".pz-grille"))) await p.click('[data-g="turn"]');
  const t05 = await readCard();
  console.log("05 card, sheet two face up reads the trap:", t05, t05.startsWith("BOBATCON") ? "(ok)" : "(WRONG)");
  console.log(errs.length ? "errors: " + errs.join("; ") : "no errors");
  await b.close();
})();
