// Re-solves case 07 from the same data the documents print, and checks the result against secret.js (rule 23).
//   node tools/solve07.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const D = await import("../cases/07/data.js");
const { PICTURE_ALPHABET } = await import("../cases/07/docs2.js");
const { FRAGMENTS, SEALS, eyeParts } = await import("../cases/07/egypt.js");
const S = JSON.parse(execSync("node tools/secret.mjs decode 07", { cwd: new URL("..", import.meta.url) }).toString());
let bad = 0; const check = (what, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what}: ${JSON.stringify(got)}${ok ? "" : ` (secret: ${JSON.stringify(want)})`}`); };

// q1: unlit huts on night 13
const unlit = Object.values(D.WICKS[13]).filter(([i, r]) => i > 0 && r === 4 * i).length;
check("q1 lamps", [unlit], S.q1.lamps);
check("q1 Nakhtmin hut night 13 unlit", D.WICKS[13].Nakhtmin[1] === 4, true);

// q2: payroll totals and the shortage
let month = 0; for (const r of D.payroll()) month += D.RATE[r.rank].emmer + D.RATE[r.rank].barley;
const short = month * 3 * (1 - D.GATE_RATIO);
const khar = Math.floor(short), hekat = (short - khar) * 16;
check("q2 khar", [khar], S.q2.khar);
check("q2 hekat remainder (as Eye parts)", eyeParts(hekat), [2]);
check("q2 gate ratio", 1 - D.GATE_RATIO, 1 / 16);

// q4: night of death, wall word, snake, lamp hours
const at = D.BODY.cubit + D.BODY.palm / 7 + D.BODY.finger / 28, C = D.PROGRESS[D.BODY.corridor];
const night = [11, 12, 13, 14, 15].find((d) => C[d] >= at);
check("q4 night", `Đêm ${night}`, S.q4.dem);
const spellRow = ["\u{132F9}", "\u{13296}", "\u{131FC}", "\u{1339F}", "\u{133CF}"], wallRow = ["\u{13123}", "\u{131EF}", "\u{132A1}", "\u{1339F}", "\u{133CF}"];
const word = wallRow.filter((g, i) => g !== spellRow[i]).map((g) => PICTURE_ALPHABET.find((p) => p[0] === g)[3]).join("");
check("q4 word", S.q4.chu.includes(word.replace("pt", "pet")) || S.q4.chu.includes(word), true);
const snake = D.SNAKES.filter((s) => s.fang === D.USERHAT_BITE.fangMm && !/sụp mí/.test(s.bite.replace("không sụp mí", "")) && /sừng nhọn/.test(s.look));
check("q4 snake", snake.map((s) => s.name), [S.q4.ran]);
check("q4 snake asleep in Peret II", /tới hết tháng 3 Peret/.test(snake[0].season), true);
check("q4 lamp hours", [D.WICK_HOURS * (4 - D.USERHAT_WICK.left) / 4], S.q4.gio);

// q5: week, seal side, fragments
const wk = D.weekOfYear(6, 14);
check("q5 week", [wk], S.q5.tuan);
check("q5 rota side", `Ấn của Lăng, bên ${D.SEAL_ROTA[wk]} giữ`, S.q5.an);
const counts = {}; FRAGMENTS.forEach(([id]) => (counts[id] = (counts[id] || 0) + 1));
check("q5 fragments (door sealing = 5 pieces)", Object.entries(counts).find(([, n]) => n === 5)[0], "trai");
check("q5 sample of that seal exists", !!SEALS.trai, true);

// q6
check("q6 gate measure (hin)", [D.GATE_HIN], S.q6.hin);

// q5 chest code, re-derived: dark huts night 13 · oipe per khar · youths on the payroll · month number of Peret II
const youths = D.payroll().filter((r) => r.rank === "youth").length;
check("q5 chest code", [unlit, 4, youths, 6], S.locks.ruong);
// q6 sticks: the order the lullaby gives (3-groove first and turned, red second, black third, 1-groove last)
const { STICKS, STICKS_SOLUTION } = await import("../cases/07/media.js");
const turnR = (rows) => rows.slice().reverse().map((r) => [...r].reverse().join(""));
const B = STICKS.blocks, order = [B.find((b) => b.rows[0].length === 3), B.find((b) => b.mark === "chấm đỏ"), B.find((b) => b.mark === "chấm đen"), B.find((b) => b.rows[0].length === 1)];
const rows = order.map((b, i) => (i === 0 ? turnR(b.rows) : b.rows));
const read = rows[0].map((_, r) => rows.map((x) => x[r]).join("")).join("");
check("q6 sticks read", read, STICKS_SOLUTION);
check("q6 shortfall from the sticks (hin)", [D.OIPE_HIN - D.GATE_HIN], S.q6.thieu);
// no other arrangement (any order, any turns) reads the same text
let other = 0; const perm = (a) => (a.length <= 1 ? [a] : a.flatMap((x, i) => perm([...a.slice(0, i), ...a.slice(i + 1)]).map((p) => [x, ...p])));
for (const p of perm([0, 1, 2, 3])) for (let m = 0; m < 16; m++) {
  const rr = p.map((k, j) => ((m >> j) & 1 ? turnR(B[k].rows) : B[k].rows));
  const t = rr[0].map((_, r) => rr.map((x) => x[r]).join("")).join("");
  if (t === STICKS_SOLUTION) other++;
}
check("q6 sticks: arrangements giving the message", other, 1);

console.log(bad ? `\n${bad} mismatch(es)` : "\nall answers re-derived from the data");
process.exit(bad ? 1 : 0);
