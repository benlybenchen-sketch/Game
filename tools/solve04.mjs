// Re-solves the computed parts and the puzzles of case 04 and checks them against secret.js.
//   node tools/solve04.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const { STRIPS, STRIPS_SOLUTION, KEYPAD, keyOf } = await import("../cases/04/docs5.js");
const Q = (await import("../cases/04/questions.js")).QUESTIONS;
const S = JSON.parse(execSync("node tools/secret.mjs decode 04", { cwd: new URL("..", import.meta.url) }).toString());
let bad = 0; const check = (what, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };

// q1: days in Sài Gòn (2/4 -> 5/7/1996), first "bà không phải mẹ" on 5/7
const days = (new Date(1996, 6, 5) - new Date(1996, 3, 2)) / 864e5;
check("q1 days away", [days], S.q1.days);
check("q1 first day accepted", S.q1.first.includes("5/7"), true);
// q3: wedding year Ất Tỵ -> 1965 (cycle from the lookup page), ring worn until 1996
const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"], CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const years = []; for (let y = 1930; y < 1990; y++) if (CAN[(y - 4) % 10] === "Ất" && CHI[(y - 4) % 12] === "Tỵ") years.push(y);
check("q3 Ất Tỵ on the 1930-1989 page", years, [1965]);
check("q3 ring years", [1996 - years[0]], S.q3.ring);
// q4 lock: the day she "lost her mother" = 5/7
check("q4 tin box code", [0, 5, 0, 7], S.locks.hop_thiec);

// q6 torn note: edges as found; turning a strip swaps its edges and reverses each pattern
const EDGES = [["▼▲▲", "▲▼▼"], ["|", "▲▼▲"], ["▲▲▼", "|"], ["▲▼▲", "▼▼▲"]];
const rev = (e) => (e === "|" ? "|" : [...e].reverse().join(""));
const orient = (i, t) => (t ? [rev(EDGES[i][1]), rev(EDGES[i][0])] : EDGES[i]);
const turnR = (rows) => rows.slice().reverse().map((r) => [...r].reverse().join(""));
const perm = (a) => (a.length <= 1 ? [a] : a.flatMap((x, i) => perm([...a.slice(0, i), ...a.slice(i + 1)]).map((p) => [x, ...p])));
const fits = [];
for (const p of perm([0, 1, 2, 3])) for (let m = 0; m < 16; m++) {
  const e = p.map((k, j) => orient(k, (m >> j) & 1));
  if (e[0][0] !== "|" || e[3][1] !== "|") continue;
  if (e.slice(0, 3).every((x, j) => x[1] === e[j + 1][0])) fits.push([p, m]);
}
// The whole sheet turned upside down always fits too; it reads backwards. Exactly one fit must read the message.
const reads = fits.map(([p, m]) => { const rows = p.map((k, j) => ((m >> j) & 1 ? turnR(STRIPS.blocks[k].rows) : STRIPS.blocks[k].rows)); return rows[0].map((_, r) => rows.map((x) => x[r]).join("")).join(""); });
check("q6 torn strips: edge fits (the sheet and the same sheet upside down)", fits.length, 2);
check("q6 the second fit is the message turned upside down", reads.includes([...STRIPS_SOLUTION].reverse().join("")), true);
check("q6 torn strips read (phone keys)", reads.filter((r) => r === STRIPS_SOLUTION).length, 1);
// the digits are phone keys: exactly one of the offered sentences types to them; the upside-down sheet types to none
const opts = Q.find((q) => q.id === "q6").parts.find((p) => p.id === "xe").options;
const plain = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toUpperCase().replace(/[^A-Z]/g, "");
check("q6 keypad has every letter once", KEYPAD.map(([, l]) => l).join(""), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
check("q6 options that type to the strips", opts.filter((o) => keyOf(plain(o)) === STRIPS_SOLUTION), [S.q6.xe]);
check("q6 options that type to the sheet upside down", opts.filter((o) => reads.some((r) => r !== STRIPS_SOLUTION && keyOf(plain(o)) === r)).length, 0);
check("q6 options differ from the truth only late (a guess from the first words fails)", opts.filter((o) => keyOf(plain(o)).slice(0, 9) === STRIPS_SOLUTION.slice(0, 9)).length, 4);
console.log(bad ? `\n${bad} mismatch(es)` : "\nall answers re-derived from the data");
process.exit(bad ? 1 : 0);
