// Re-solves the computed parts and the puzzles of case 05 and checks them against secret.js.
//   node tools/solve05.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const { LUNAR_1989, LUNAR_1991 } = await import("../cases/05/lunar.js");
const { MASK, MASK_SOLUTION } = await import("../cases/05/media.js");
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

// q4 grille: read through the holes, four quarter turns from the inked corner top-left
const n = MASK.grid.length;
const rot = ([r, c], k) => { for (let i = 0; i < k; i++) [r, c] = [c, n - 1 - r]; return [r, c]; };
const readFrom = (start) => { let t = ""; for (let k = 0; k < 4; k++) { const open = MASK.holes.map((h) => rot(h, (start + k) % 4)).sort((a, b) => a[0] - b[0] || a[1] - b[1]); t += open.map(([r, c]) => MASK.grid[r][c]).join(""); } return t; };
const cover = new Set(); for (let k = 0; k < 4; k++) MASK.holes.forEach((h) => cover.add(rot(h, k).join(",")));
check("q4 card: every square seen exactly once in four turns", cover.size, n * n);
check("q4 card read from the inked corner", readFrom(0), MASK_SOLUTION);
check("q4 the other three starting corners do not read the sentence", [1, 2, 3].map(readFrom).filter((t) => t === MASK_SOLUTION).length, 0);
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9]/g, "");
check("q4 accepted answer matches the reading", S.q4.mask.map(norm).includes(norm(MASK_SOLUTION.replace(/X+$/, ""))), true);

console.log(bad ? `\n${bad} mismatch(es)` : "\nall answers re-derived from the data");
process.exit(bad ? 1 : 0);
