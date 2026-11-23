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
  // 07 sticks: found order = [1-groove, black, 3-groove (upside down), red]; target = [3-groove turned, red, black, 1-groove]
  await mount("07", "sticks");
  const read = () => p.evaluate(() => [...document.querySelectorAll(".pz-read div")].map((d) => d.textContent).join(""));
  console.log("07 sticks as found read:", (await read()).slice(0, 24) + "…");
  await p.click('[data-turn="2"]');                                  // turn the 3-groove stick
  const caps = async () => p.evaluate(() => [...document.querySelectorAll(".pz-cap")].map((c) => c.textContent));
  const moveTo = async (want, pos) => { let at = (await caps()).findIndex((c) => c.includes(want)); while (at > pos) { await p.click(`[data-mv="${at}"][data-d="-1"]`); at--; } };
  await moveTo("ba rãnh", 0); await moveTo("chấm đỏ", 1); await moveTo("chấm đen", 2);
  const got = await read();
  console.log("07 sticks arranged read:", got, got === "CAIDAUOCONGTHIEUHAICHENRUOINUOCDUNGDONGLUAOCONGNUAHAYNHO" ? "(ok)" : "(WRONG)");
  // 04 torn strips: target = Dải 2, Dải 4, Dải 1 (turned), Dải 3
  await mount("04", "giay_xe");
  await p.click('[data-turn="0"]');
  await moveTo("Dải 2", 0); await moveTo("Dải 4", 1); await moveTo("Dải 1", 2);
  const g04 = await read();
  console.log("04 strips arranged read:", g04, g04 === "TOAXUXONGBANNHAVUONROIVESAIGON" ? "(ok)" : "(WRONG)");
  // 05 darkroom card: lay it on, read the holes, turn three times
  await mount("05", "grille");
  await p.click('[data-g="on"]'); let g05 = "";
  for (let t = 0; t < 4; t++) { g05 += await p.evaluate(() => [...document.querySelectorAll(".pz-hole")].map((x) => x.textContent).join("")); if (t < 3) await p.click('[data-g="turn"]'); }
  console.log("05 card read:", g05, g05 === "CONNOIDOIBOCONHOTHAYMECONSOLAMBOOIXX" ? "(ok)" : "(WRONG)");
  console.log(errs.length ? "errors: " + errs.join("; ") : "no errors");
  await b.close();
})();
