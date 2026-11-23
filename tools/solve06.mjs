// Re-solves the computed parts of case 06 from the data the documents print, and checks them against secret.js.
//   node tools/solve06.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const { PILLARS, FEB } = await import("../cases/06/docs0.js");
const { TTV } = await import("../cases/06/docs2.js");
const { ABACI, UNIT } = await import("../cases/06/media.js");
const S = JSON.parse(execSync("node tools/secret.mjs decode 06", { cwd: new URL("..", import.meta.url) }).toString());
let bad = 0; const check = (what, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };

const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

// q1: Ôn Tú Nương, born at the hour Mão on the 23rd of the 12th month of Kỷ Mùi
const row = FEB.find((r) => r[1].startsWith("23 tháng Chạp"));
const lap = FEB.find((r) => /LẬP XUÂN/.test(r[3] || ""));
const afterLap = +row[0].split("/")[0] > +lap[0].split("/")[0];
const year = afterLap ? "Canh Thân" : "Kỷ Mùi";
const yStem = CAN.indexOf(year.split(" ")[0]);
const DAN = { 0: "Bính", 5: "Bính", 1: "Mậu", 6: "Mậu", 2: "Canh", 7: "Canh", 3: "Nhâm", 8: "Nhâm", 4: "Giáp", 9: "Giáp" }; // Ngũ Hổ Độn
const month = afterLap ? `${DAN[yStem]} Dần` : "Đinh Sửu";
const day = row[2], dStem = CAN.indexOf(day.split(" ")[0]);
const TY = { 0: 0, 5: 0, 1: 2, 6: 2, 2: 4, 7: 4, 3: 6, 8: 6, 4: 8, 9: 8 };                                          // Ngũ Thử Độn
const hour = `${CAN[(TY[dStem] + CHI.indexOf("Mão")) % 10]} Mão`;
check("q1 Tú Nương's eight characters = the card", [year, month, day, hour], PILLARS.map((p) => p[1]));
check("q1 her solar birthday", row[0] + "/1920", "12/2/1920");
check("q1 answer in secret", S.q1.ngay.includes("12/2/1920"), true);

// q2: the abacus (rod with the red dot = đồng), days before the body was found
const val = (d) => d.slice(0, UNIT + 1).reduce((a, x) => a * 10 + x, 0);
check("q2 price", [val(ABACI.trieu)], S.q2.gia);
check("q2 refund", [val(ABACI.hoan)], S.q2.hoan);
const found = 26 - 17 + 1;   // 26/8, the 1st of the 7th month fell on 17/8
check("q2 days early (ordered on the 9th)", [found - 9], S.q2.som);

// q3: the drafts' secret key for the year Bính Tý (count from the 9th character)
const chars = TTV.map(([h]) => h).join("");
const start = 8, months = chars.slice(start, start + 12), days = chars.slice(start + 12, start + 42), digits = chars.slice(start + 42, start + 52);
check("q3 month (列)", [months.indexOf("列") + 1], S.q3.thang);
check("q3 day (成)", [days.indexOf("成") + 1], S.q3.ngay);
check("q3 sum (巨闕柰)", [+[..."巨闕柰"].map((c) => (digits.indexOf(c) + 1) % 10).join("")], S.q3.tien);
check("q3 days before the body (10 − 7)", [10 - (days.indexOf("成") + 1)], S.q3.truoc);

// q6: 15th of the 3rd month of Đinh Tỵ (3rd month starts 21/4/1917)
const d = new Date(1917, 3, 21 + 14);
check("q6 adoption birthday", `${d.getDate()}/${d.getMonth() + 1}/1917`, "5/5/1917");
check("q6 answer in secret", S.q6.sinh.includes("5/5/1917"), true);

// lock box: first character of each pillar on the card
check("q6 lacquer box code", PILLARS.map((p) => p[0][0]), S.locks.hop_son);

console.log(bad ? `\n${bad} mismatch(es)` : "\nall answers re-derived from the data");
process.exit(bad ? 1 : 0);
