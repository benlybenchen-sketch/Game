// Builds the three squared sheets of case 05 (media.js MASK.pages). The darkroom card (holes as before) has purple ink on
// one corner of its FRONT; the ink has soaked into one sheet (purple dot bottom-left). So: that sheet, card face down,
// inked corner on the dot (bottom-left) -> the true sentence. The other sheets hold readable traps.
//   node tools/gen/grille05.mjs   (prints the pages; paste into cases/05/media.js)
const n = 6, HOLES = [[0, 5], [1, 5], [2, 5], [0, 4], [4, 4], [3, 1], [5, 2], [3, 4], [3, 3]];
const rot = ([r, c], k) => { for (let i = 0; i < k; i++) [r, c] = [c, n - 1 - r]; return [r, c]; };
let seed = 51989; const rnd = () => ((seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) / 2 ** 32);
const FREQ = "AAAANNNNHHHOOOOCCCGGIIIUUMMEELLTTDBBVYK";
const place = (msg, flip, start, base) => {
  const g = base ? base.map((r) => [...r]) : Array.from({ length: n }, () => Array(n).fill(""));
  let m = msg; while (m.length < 36) m += FREQ[Math.floor(rnd() * FREQ.length)];
  for (let t = 0; t < 4; t++) HOLES.map(([r, c]) => rot(flip ? [r, n - 1 - c] : [r, c], (start + t) % 4)).sort((a, b) => a[0] - b[0] || a[1] - b[1]).forEach(([r, c], i) => (g[r][c] = m[t * 9 + i]));
  return g.map((r) => r.join(""));
};
const pages = [
  { name: "Tờ kẹp trong vở Văn", grid: place("CONNOIDOIBOCONHOTHAYMECONSOLAMBOOI", true, 2) },
  { name: "Tờ kẹp trong vở Toán", grid: place("BOBATCONHOTHAYMECONKHONGDAMCAI", false, 0) },
  { name: "Tờ trong cặp sách", grid: place("MEVANHOTRONGBUONGCONNGHETHAYMOIDEM", true, 1) },
];
console.log(JSON.stringify(pages, null, 1));
