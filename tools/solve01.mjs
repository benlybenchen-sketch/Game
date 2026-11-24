// Re-solves case 01 from the text the documents print and checks it against secret.js. Usage: node tools/solve01.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const C = await import("../cases/01/index.js");
const { state } = await import("../js/store.js"); state.stage = 99;
const S = JSON.parse(execSync("node tools/secret.mjs decode 01", { cwd: new URL("..", import.meta.url) }).toString());
const txt = (id) => { const d = C.DOCS.find((x) => x.id === id); if (!d) throw new Error("no doc " + id); return d.html().replace(/<[^>]+>/g, " ").replace(/\s+/g, " "); };
const rows = (id) => { const h = C.DOCS.find((x) => x.id === id).html(); return [...h.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => c[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())); };
const stageOf = (id) => C.DOCS.find((x) => x.id === id).stage;
let bad = 0; const check = (w, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${w}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };
const hm = (s) => { const [h, m] = s.split(":").map(Number); return h * 60 + m; }, fmt = (x) => `${String(Math.floor(x / 60) % 24).padStart(2, "0")}:${String(x % 60).padStart(2, "0")}`;

// q1: rain stopped (weather station) before the dry sandals and hat were laid on the open steps
const rain = /tạnh hẳn lúc (\d{1,2}:\d{2})/.exec(txt("khi_tuong"))[1];
check("q1 earliest time (rain stopped)", [rain], S.q1.t);
check("q1 sandals dry, steps without roof", /Dép khô/.test(txt("bien_ban")) && /không có mái che/.test(txt("bien_ban")), true);
check("q1 documents open at stage 0", [stageOf("khi_tuong"), stageOf("bien_ban")], [0, 0]);
// q2: the boat with the curved high exhaust in the register belongs to the answer
const reg = txt("so_thuyen"), row = /(NK-\d{4}) (\S+ \S+ \S+) Thuyền máy \d+ CV \d+ km\/h Sơn xanh, ống xả cao uốn cong/.exec(reg);
check("q2 boat with a curved exhaust", row && row[1], S.q2.boat[0]);
check("q2 its owner", row && row[2], S.q2.who);
// q3: households marked unpaid in the real book but listed as paid for the district
const unpaid = rows("so_chi_that").filter((r) => r.some((c) => /CHƯA CHI/.test(c))).map((r) => [r[1], Number(r[3].replace(/\./g, ""))]);
const listed = rows("danh_sach_huyen").filter((r) => r.some((c) => /Đã nhận đủ/.test(c))).map((r) => r[1]);
check("q3 households paid on paper only", [unpaid.filter(([n]) => listed.includes(n)).length], S.q3.n);
check("q3 money kept (thousand đồng)", unpaid.reduce((a, [, v]) => a + v, 0) / 1000, S.q3.m[0]);
// q5: the old pump house floor is reached when the lake, rising from 180.00 m at noon on 19/8 at 0.25 m an hour, gets there
const tb = txt("thong_bao_tich_nuoc"), house = txt("ho_so_tram_bom");
const start = Number(/Mực nước lúc bắt đầu: ([\d,]+) m/.exec(tb)[1].replace(",", ".")), rate = Number(/Tốc độ dâng dự kiến: ([\d,]+) m mỗi giờ/.exec(tb)[1].replace(",", "."));
const floor = Number(/([\d,]+) m/.exec(rows("ho_so_tram_bom").find((r) => /Cao trình sàn/.test(r[0]))[1])[1].replace(",", "."));
const hours = (floor - start) / rate, at = hm("12:00") + Math.round(hours * 60);
check("q5 time the water reaches the floor", [fmt(at)], S.q5.t);
check("q5 the reference documents open by stage 4", [stageOf("thong_bao_tich_nuoc"), stageOf("ho_so_tram_bom")].every((s) => s <= 4), true);
console.log(bad ? `${bad} problem(s)` : "all checks pass");
