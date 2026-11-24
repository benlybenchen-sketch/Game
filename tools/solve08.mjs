// Re-solves case 08 from the data the documents print (cases/08/data.js, ngocgian.js) and checks it against secret.js.
// Also checks that every trap of the bible gives a different (wrong) result. Usage: node tools/solve08.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const D = await import("../cases/08/data.js");
const { DOCS } = await import("../cases/08/index.js");
const { state } = await import("../js/store.js");
const S = JSON.parse(execSync("node tools/secret.mjs decode 08", { cwd: new URL("..", import.meta.url) }).toString());
let bad = 0; const check = (what, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };
const differ = (what, trap, right) => { const ok = JSON.stringify(trap) !== JSON.stringify(right); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} trap ${what} gives ${JSON.stringify(trap)}`); };
const html = (id) => { state.stage = 99; state.confronted = { tieu_tung: true }; return DOCS.find((d) => d.id === id).html(); };

// ---- q1: nearest strike that hit a place; the rain's watch
const hits = (strikes) => strikes.flatMap(([n, , dir, niem]) => D.SURVEY.filter(([p, h, b]) => h === dir && Math.abs(b - niem * D.BO_PER_NIEM) <= D.BO_PER_NIEM / 2).map(([p, , b]) => [n, p, b]));
const real = D.STRIKES.filter(([n]) => n !== D.FAKE_STRIKE);
const h = hits(real).sort((a, b) => a[2] - b[2]);
check("q1 places struck (real strikes)", h.map((x) => x[1]), ["Thạch lâm"]);
check("q1 answer", S.q1.noi.includes(h[0][1]), true);
differ("trusting line 9 (struck on the platform)", D.STRIKES.find(([n]) => n === D.FAKE_STRIKE)[3] === 0 ? "Lôi Đài" : "", "Thạch lâm");
const termOf = (m, d) => { let t = null; for (const [name, when] of D.TERMS) { const [dd, mm] = when.split("/").map((x) => parseInt(x)); if (!/năm/.test(when) && (mm < m || (mm === m && dd <= d))) t = name; } return t; };
const canh = (term) => Math.floor(D.RAIN.stop * 60 / (D.nightPhan(term) / 5)) + 1;
check("q1 solar term of night 27/4", termOf(4, 27), "Tiểu mãn");
check("q1 rain stops in watch", [canh(termOf(4, 27))], S.q1.canh);
differ("Lập hạ arrow", canh("Lập hạ"), S.q1.canh[0]);
check("q1 thunder log says (wrong) watch four", /Đã sang canh tư/.test(html("so_sam")), true);

// ---- q4 route B: the door
const fly = (center, forward) => { const g = {}; D.FLY_PATH.forEach((pal, i) => { let n = forward ? center + i : center - i; n = ((n - 1) % 9 + 9) % 9 + 1; g[pal] = n; }); return g; };
const inv = (table) => Object.fromEntries(Object.entries(table).map(([q, n]) => [n, q]));
const door = (center, forward, table) => { const g = fly(center, forward), q = inv(table); return D.DOOR_LAYOUT.flat().map((pal) => g[pal] === 5 ? "Khôn" : q[g[pal]] || "?"); };
const right = door(D.RETREAT_DAY, true, D.HAU_THIEN);
check("q4 door code", right, S.locks.tran);
differ("door with the sexagenary number (Mậu Thân 45 → 9)", door(9, true, D.HAU_THIEN), right);
differ("door flown backwards (âm độn)", door(D.RETREAT_DAY, false, D.HAU_THIEN), right);
differ("door with the Phục Hy board (Tiên thiên)", door(D.RETREAT_DAY, true, D.TIEN_THIEN), right);
differ("door with North on top", [...right].reverse(), right);
check("door is not found already set", JSON.stringify(D.DOOR_START) !== JSON.stringify(right), true);
// the study book example: centre 3 forward gives the grid printed there
check("study book example grid", D.DOOR_LAYOUT.flat().map((p) => fly(3, true)[p]), [2, 7, 9, 1, 3, 5, 6, 8, 4]);

// ---- q5: pills on the balance
const phan = (day) => { const thu = 2.4 + (day - 1) * 0.24; return Math.round(thu / 24 * 100); };   // thù → phân (1 lạng = 24 thù = 100 phân)
check("recipe conversion matches data", D.CRANES_DEAD.every(([, day]) => phan(day) === D.pillPhan(day)), true);
const days = D.CRANES_DEAD.map(([, day]) => day), first = Math.min(...days);
const [m, d] = D.retreatDate(first);
check("q5 first unused pill", first, 12);
check("q5 night of death (day before the first unused pill was laid)", [[d - 1], [m]], [S.q5.ngay, S.q5.thang]);
const weighable = D.CRANES_DEAD.every(([, day]) => { const t = D.pillPhan(day); const W = D.WEIGHTS.map((w) => w[2]); for (let mask = 0; mask < 1 << W.length; mask++) if (W.reduce((a, w, i) => a + (mask >> i & 1) * w, 0) === t) return true; return false; });
check("every pill can be balanced with the weights", weighable, true);
differ("1 lạng = 16 tiền (pill 21 phân read as day)", Math.round((21 - 16) / 1.6) + 1, first);
check("tray of day 11 came back with residue, day 12 clean", [/thứ mười một<\/td><td>hết<\/td><td>cạn, đáy còn cặn/.test(html("so_khay")), /thứ mười hai<\/td><td>hết<\/td><td>cạn, sạch/.test(html("so_khay"))], [true, true]);
check("watch log: smoke stopped on 18/3", /18\/3<\/td><td>[^<]*khói ống động phủ tắt/.test(html("so_canh_dem")), true);

// ---- q6: cabinet and jade slip
check("q6 cabinet code (pills in the order the cranes died)", D.ELDER_LOCK, S.locks.tu);
differ("cabinet code sorted", [...D.ELDER_LOCK].sort((a, b) => a - b), S.locks.tu);
const plain = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toUpperCase();
const read = (reg) => D.MARKS.map(([r, k]) => plain(reg[r].split(" ")[0])[k - 1]).join("");
const msg = read(D.REG_NEW);
check("q6 jade slip (spring register)", msg, "YBATTRAOTINHHURUTTAUTHUONGKHE");
check("q6 answer is in the message", msg.includes(plain(S.q6.ten[0]).replace(/\s/g, "")), true);
check("q6 first-month register reads the trap", read(D.REG_OLD), "YBATTRAOLANGTIEUDANGTHUONGKHE");
check("marks never run past the first word", D.MARKS.every(([r, k]) => k <= plain(D.REG_NEW[r].split(" ")[0]).length && k <= plain(D.REG_OLD[r].split(" ")[0]).length), true);

// ---- q7: the line of the 18th
check("q7 line", S.q7.dong, ["vv_18"]);
check("chores of the 18th put him on the summit at dusk", /data-line="vv_18">[^<]*quét Lôi Đài lúc chạng vạng/.test(html("so_viec_vat")), true);
check("gate book: back at giờ Mùi on 18/3", /18\/3<\/td><td>Hoả công Tào Thuận xuống giờ Mão mua than Hạ Khê, lên giờ Mùi/.test(html("so_ra_vao")), true);
console.log(bad ? `${bad} problem(s)` : "all checks pass");
