// Re-solves the computed parts and the puzzles of case 05 and checks them against secret.js.
//   node tools/solve05.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const { LUNAR_1989, LUNAR_1991 } = await import("../cases/05/lunar.js");
const { MASK, MASK_SOLUTION, MASK_TRAPS } = await import("../cases/05/media.js");
const S = JSON.parse(execSync("node tools/secret.mjs decode 05", { cwd: new URL("..", import.meta.url) }).toString());
let bad = 0; const check = (what, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };
const MONTHS = ["Giêng", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Một", "Chạp"];

// q5: the night of 22/12/1989 in lunar terms
const night = LUNAR_1989.weeks.flat().find((d) => d && d.d === 22);
const m = MONTHS.indexOf(night.m) + 1;
check("q5 lunar date of 22/12/1989", `${night.l}/${m}`, "25/11");
check("q5 answer accepted", S.q5.am.includes("25/11"), true);
// q6: the same lunar date in December 1991
const day = LUNAR_1991.find((d) => d.l === night.l && d.lm === night.m);
check("q6 that night in 1991", [day.iso], S.q6.ngay);
// q6 lock: "mother's day" = 25 / 11 -> 2 5 1 1
check("q6 tin code", [...`${night.l}${m}`].map(Number), S.locks.hop_ngan);

// q4 card: three sheets, card face up or face down, any starting turn. Ink on the card's front soaked into sheet one
// (dot bottom-left): face down, inked corner on the dot.
const n = MASK.pages[0].grid.length;
const rot = ([r, c], k) => { for (let i = 0; i < k; i++) [r, c] = [c, n - 1 - r]; return [r, c]; };
const tf = (h, flip, k) => rot(flip ? [h[0], n - 1 - h[1]] : h, k);
const readFrom = (grid, flip, start) => { let t = ""; for (let k = 0; k < 4; k++) t += MASK.holes.map((h) => tf(h, flip, (start + k) % 4)).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(([r, c]) => grid[r][c]).join(""); return t; };
const cover = new Set(); for (let k = 0; k < 4; k++) MASK.holes.forEach((h) => cover.add(rot(h, k).join(",")));
check("q4 card: every square seen exactly once in four turns", cover.size, n * n);
const inkAt = (flip, k) => tf([0, 0], flip, k).join(",");
const start = [0, 1, 2, 3].find((k) => inkAt(true, k) === `${n - 1},0`);
const truth = readFrom(MASK.pages[0].grid, true, start);
check("q4 sheet one, card face down, ink on the dot", truth.slice(0, MASK_SOLUTION.length), MASK_SOLUTION);
const hits = []; MASK.pages.forEach((p, i) => [false, true].forEach((f) => [0, 1, 2, 3].forEach((k) => { const t = readFrom(p.grid, f, k); for (const m of [MASK_SOLUTION, ...MASK_TRAPS]) if (t.startsWith(m)) hits.push(`${i + 1}${f ? " úp" : " ngửa"}: ${m}`); })));
check("q4 readable placements (truth + two traps)", hits, [`1 úp: ${MASK_SOLUTION}`, `2 ngửa: ${MASK_TRAPS[0]}`, `3 úp: ${MASK_TRAPS[1]}`]);
const norm0 = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9]/g, "");
check("q4 traps are not accepted", MASK_TRAPS.filter((t) => S.q4.mask.map(norm0).includes(norm0(t))).length, 0);
check("q4 the raw reading with the two padding letters is accepted", S.q4.mask.map(norm0).includes(norm0(truth)), true);
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9]/g, "");
check("q4 accepted answer matches the reading", S.q4.mask.map(norm).includes(norm(MASK_SOLUTION)), true);

console.log(bad ? `\n${bad} mismatch(es)` : "\nall answers re-derived from the data");
process.exit(bad ? 1 : 0);
