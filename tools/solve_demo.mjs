// Re-solves the puzzle test page from its data and checks the chain has one way through.
//   node tools/solve_demo.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
const { LETTER, STICKS, HOLES, PAGES, SEALED } = await import("../demo/data.js");
let bad = 0; const check = (what, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${what}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };

// 1. sticks: animals of the people in the register (from the calendar page), the box carved in Kỷ Dậu
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const ANIMAL = { Tý: "chuột", Thìn: "rồng", Ngọ: "ngựa", Mùi: "dê" };
const year = (name) => { for (let y = 1969; y >= 1900; y--) if (`${CAN[(y - 4) % 10]} ${CHI[(y - 4) % 12]}` === name) return y; };
const boxYear = year("Kỷ Dậu");
check("box carved in (the Kỷ Dậu after the mother was born)", boxYear, 1969);
const REG = [ // name, relation to the head, born, died
  ["Thìn", "chủ hộ", 1928, 1979], ["Huệ", "vợ", 1931, null], ["Khải", "con", 1952, 1972], ["Nguyệt", "con", 1954, 1968],
  ["Lộc", "con", 1960, null], ["Hiếu", "cháu", 1964, null], ["Lụa", "mẹ", 1907, 1966]];
const people = REG.map(([n, rel, b, d]) => ({ n, rel, b, d, animal: ANIMAL[CHI[(b - 4) % 12]] }));
const mum = people.find((p) => p.rel === "vợ"), kids = people.filter((p) => p.rel === "con").sort((a, b) => a.b - b.b);
const line = [mum, ...kids];
check("the mother and her children, eldest first", line.map((p) => `${p.n} (${p.animal})`), ["Huệ (dê)", "Khải (rồng)", "Nguyệt (ngựa)", "Lộc (chuột)"]);
check("dead before the box (upside down)", line.filter((p) => p.d && p.d <= boxYear).map((p) => p.n), ["Nguyệt"]);
check("other people with the same animals (traps)", people.filter((p) => !line.includes(p) && ["dê", "rồng"].includes(p.animal)).map((p) => p.n), ["Thìn", "Hiếu", "Lụa"]);
const stick = (animal) => STICKS.findIndex((s) => s.name.endsWith(animal));
const turnR = (rows) => rows.slice().reverse();
const readAs = (order, turned) => STICKS[0].rows.map((_, r) => order.map((k, j) => (turned[j] ? turnR(STICKS[k].rows) : STICKS[k].rows)[r]).join(""));
const rows = readAs(line.map((p) => stick(p.animal)), line.map((p) => p.d && p.d <= boxYear));
const W = (l) => LETTER[l - 1].split(/\s+/).map((w) => w.replace(/[,.?!:;]/g, ""));
const look = (c) => { const l = +c.slice(0, 2), w = +c.slice(2); return l >= 1 && l <= LETTER.length && w >= 1 && w <= W(l).length ? W(l)[w - 1] : null; };
check("letter words", rows.map(look).join(" "), "tấm bìa úp mặt trên trang thứ ba");
// every other arrangement must leave at least one number outside the letter or read nonsense
const perm = (a) => (a.length <= 1 ? [a] : a.flatMap((x, i) => perm([...a.slice(0, i), ...a.slice(i + 1)]).map((p) => [x, ...p])));
let valid = 0; for (const o of perm([0, 1, 2, 3])) for (let m = 0; m < 16; m++) if (readAs(o, [0, 1, 2, 3].map((j) => (m >> j) & 1)).every(look)) valid++;
console.log(`    arrangements whose 8 numbers all fall inside the letter: ${valid} of 384 (only one reads a sentence)`);

// 2. grille: three sheets, the card face up or face down, any starting turn
const n = 6, rot = ([r, c], k) => { for (let i = 0; i < k; i++) [r, c] = [c, n - 1 - r]; return [r, c]; };
const read = (grid, flip, start) => { let t = ""; for (let k = 0; k < 4; k++) t += HOLES.map(([r, c]) => rot(flip ? [r, n - 1 - c] : [r, c], (start + k) % 4)).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(([r, c]) => grid[r][c]).join(""); return t; };
const cover = new Set(); for (let k = 0; k < 4; k++) HOLES.forEach((h) => cover.add(rot(h, k).join(",")));
check("card covers every square once in four turns", cover.size, 36);
const hits = []; PAGES.forEach((p, i) => [false, true].forEach((f) => { for (let s = 0; s < 4; s++) { const t = read(p.grid, f, s); console.log(`    ${p.name.padEnd(12)} ${f ? "úp " : "ngửa"} từ lượt ${s}: ${t}`); if (/^MAHOMLANAM/.test(t)) hits.push(`${i + 1}${f ? " úp" : " ngửa"}: ${t.slice(0, 32)}`); } }));
check("readings that start 'mã hòm là năm'", hits, ["1 ngửa: MAHOMLANAMANHCADIBTUGAHUYEN" + read(PAGES[0].grid, false, 0).slice(27, 32), "2 úp: MAHOMLANAMCHINGUYETBOMEDI" + read(PAGES[1].grid, true, 0).slice(25, 32), "3 úp: MAHOMLANAMGIAYBAOTUANHCAVEDENNHA"]);

// 3. lock: 1975 (the notice), not 1972 (the register) or 1971 (the trap sheet)
const fnv = (str) => { let h = 2166136261; for (const ch of new TextEncoder().encode(str)) { h ^= ch; h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; };
const opens = (code) => { let x = fnv(`hsnd|${code.join("|")}`) || 1; const raw = Buffer.from(SEALED, "base64"); const o = raw.map((b) => { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return b ^ (x & 255); }); try { const s = new TextDecoder("utf-8", { fatal: true }).decode(o); return s.slice(0, 8) === fnv(s.slice(9)).toString(16).padStart(8, "0"); } catch { return false; } };
check("lock: 1975 / 1972 / 1971 / 1968 / 1952 open", [[1, 9, 7, 5], [1, 9, 7, 2], [1, 9, 7, 1], [1, 9, 6, 8], [1, 9, 5, 2]].map(opens), [true, false, false, false, false]);
console.log(bad ? `\n${bad} mismatch(es)` : "\ndemo chain re-solved from the data");
process.exit(bad ? 1 : 0);
