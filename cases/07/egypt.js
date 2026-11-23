// Case 07 script helpers: hieratic-style numerals (drawn as SVG strokes, written right to left),
// Eye-of-Horus fractions (Unicode hieroglyphs D11–D16, Noto Sans Egyptian Hieroglyphs), the six handwriting
// signs in three variants each, and the seals. No human figure anywhere.

let fontAsked = false;
/** Loads the hieroglyph font once (Google Fonts). Text still renders with a fallback if it fails. */
export function egyptFont() {
  if (fontAsked || typeof document === "undefined") return; fontAsked = true;
  const l = document.createElement("link");
  l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&display=swap";
  document.head.appendChild(l);
}
const H = (s) => `<span class="hg">${s}</span>`;

// ------------------------------------------------------------------ numerals
// Each glyph lives in a 14×24 box. Units, tens and hundreds have their own shapes.
const ONE = ["M7 3V21", "M4 4L10 21", "M7 3V20H11"];     // three ways of writing "one" (handwriting habit)
const UNITS = {
  1: (o) => [ONE[o]],
  2: () => ["M4 3V21", "M9 3V21"],
  3: () => ["M3 3V21", "M7 3V21", "M11 3V21"],
  4: () => ["M2 5V19", "M5.5 3V21", "M8.5 3V21", "M12 5V19"],
  5: () => ["M3 4Q12 1 10 9L4 21"],
  6: () => ["M3 4Q12 1 10 9L4 21", "M8 15H13"],
  7: () => ["M2 5H11L4 21", "M5 13H10"],
  8: () => ["M3 4H11", "M3 9H11", "M10 9L5 21"],
  9: () => ["M9 3C1 3 2 13 9 11L5 21"],
};
const TENS = {
  1: ["M2 21V9Q7 1 12 9V13"],
  2: ["M2 21V9Q7 1 12 9V13", "M12 13Q13 19 7 19"],
  3: ["M2 21V8Q7 2 12 8V21", "M7 10V21"],
  4: ["M2 21L7 4L12 21", "M4 14H10"],
  5: ["M2 6H12", "M7 6V21", "M3 21H11"],
  6: ["M2 21V6H12", "M2 13H10"],
  7: ["M2 6H12L5 21", "M8 14L12 21"],
  8: ["M2 6Q13 6 7 13Q2 20 12 20"],
  9: ["M12 4Q2 4 3 12Q4 20 12 20", "M7 12H12"],
};
const HUND = {
  1: ["M10 21V8Q10 2 5 4Q2 7 6 9"],
  2: ["M10 21V8Q10 2 5 4Q2 7 6 9", "M10 21H3"],
  3: ["M10 21V8Q10 2 5 4Q2 7 6 9", "M12 14H3", "M12 21H3"],
  4: ["M10 21V8Q10 2 5 4Q2 7 6 9", "M3 14V21", "M6 14V21"],
};
const glyph = (paths, w = 14) => `<svg class="hn-g" viewBox="0 0 ${w} 24" width="${w * 0.75}" height="18" aria-hidden="true">${paths.map((d) => `<path d="${d}"/>`).join("")}</svg>`;

/** Eye-of-Horus parts: value -> glyph. */
export const EYE = { 2: "\u{13081}", 4: "\u{13082}", 8: "\u{13083}", 16: "\u{13084}", 32: "\u{13085}", 64: "\u{13086}" };
/** Splits a fraction (0 <= f < 1, a multiple of 1/64) into Eye-of-Horus parts, largest first. */
export function eyeParts(f) {
  let n = Math.round(f * 64); const out = [];
  for (const d of [2, 4, 8, 16, 32, 64]) { const v = 64 / d; if (n >= v) { out.push(d); n -= v; } }
  return out;
}

/**
 * A number written the hieratic way: hundreds on the right, units on the left (read right to left),
 * then the fraction as Eye-of-Horus parts on the far left. `one` = handwriting variant of the stroke "one".
 */
export function hn(value, { one = 0, cls = "" } = {}) {
  const whole = Math.floor(value + 1e-9), frac = value - whole;
  const h = Math.floor(whole / 100), t = Math.floor((whole % 100) / 10), u = whole % 10;
  const parts = [];
  if (frac > 1e-9) parts.push(H(eyeParts(frac).map((d) => EYE[d]).join("")));
  if (u) parts.push(glyph(UNITS[u](one)));
  if (t) parts.push(glyph(TENS[t]));
  if (h) parts.push(glyph(HUND[h]));
  if (!parts.length) parts.push(`<span class="hn-zero">·</span>`);
  return `<span class="hn ${cls}" title="">${parts.join("")}</span>`;
}

/** A row of pebbles (for the school exercise book). */
export const pebbles = (n) => `<span class="pebbles">${Array.from({ length: n }, (_, i) => `<span class="pb${i % 10 === 9 ? " gap" : ""}"></span>`).join("")}</span>`;

// ------------------------------------------------------------------ handwriting signs
// Six signs, three variants each. A writer = six variant indices.
export const SIGNS = ["nước", "miệng", "ổ bánh", "cái giỏ", "vải gấp", "nét một"];
const SIGN_PATHS = [
  ["M2 14L5 9L8 14L11 9L14 14L17 9L20 14", "M2 12H20M5 9V15M9 9V15M13 9V15M17 9V15", "M2 12Q5 7 8 12T14 12T20 12"],
  ["M4 12Q11 4 18 12Q11 20 4 12Z", "M3 12L11 7L19 12L11 17Z", "M4 8H18V16H4Z"],
  ["M4 16Q11 4 18 16Z", "M4 16Q11 4 18 16Z M6 15Q11 7 16 15Z", "M4 16Q11 4 18 16Z M11 13.5h.1"],
  ["M4 9Q11 22 18 9Z M18 9Q22 6 19 4", "M4 9Q11 22 18 9Z M4 9Q0 6 3 4", "M4 9Q11 22 18 9Z"],
  ["M8 20V6Q8 3 12 4", "M8 4V18Q8 21 12 20", "M10 4V20"],
  ["M11 4V20", "M8 4L14 20", "M11 4V19H15"],
];
/** One sign in a writer's variant. Filled variants (bread loaf with crumb) use a fill. */
export function sign(i, v) {
  const fill = i === 2 && v === 1;
  return `<svg class="sg" viewBox="0 0 22 24" width="26" height="28" aria-hidden="true"><path d="${SIGN_PATHS[i][v]}" ${fill ? 'class="f"' : ""}/></svg>`;
}
export const WRITERS = {
  hay: [0, 1, 1, 0, 0, 0],
  nebet: [0, 1, 1, 0, 0, 1],
  henut: [2, 1, 0, 0, 1, 1],
  userhat: [1, 0, 0, 2, 2, 0],
  tags: [0, 1, 2, 0, 0, 2],      // the man who writes the grain tags at the river
};
/** The strip of the six signs as one writer makes them, in a fixed order mixed with other signs. */
export function strip(w, extra = "·") {
  const v = WRITERS[w];
  return `<span class="strip">${v.map((x, i) => sign(i, x)).join(`<span class="hg dim">${extra}</span>`)}</span>`;
}

// ------------------------------------------------------------------ seals
// Five details: border (double/single), jackal (lying/standing), star (left/right/none), base (3 bars / 2 bars / village), top (none / ankh / god-flag).
export const SEALS = {
  trai: { name: "Ấn của Lăng, bên Trái giữ", border: 2, jackal: "lie", star: "L", base: 3, top: "" },
  phai: { name: "Ấn của Lăng, bên Phải giữ", border: 2, jackal: "lie", star: "R", base: 3, top: "" },
  kho_ben: { name: "Ấn kho lúa bến sông", border: 2, jackal: "lie", star: "L", base: 2, top: "" },
  kho_den: { name: "Ấn kho đền bên sông", border: 1, jackal: "stand", star: "", base: 2, top: "ankh" },
  nguyen: { name: "Ấn nhà nguyện của làng", border: 1, jackal: "lie", star: "", base: "v", top: "netjer" },
  te_tuong: { name: "Ấn tể tướng", border: 2, jackal: "stand", star: "R", base: 3, top: "ankh" },
  ky_luc: { name: "Ấn nhà ký lục", border: 1, jackal: "lie", star: "L", base: 3, top: "" },
};
const JACKAL = { lie: "\u{130E2}", stand: "\u{130E5}" };    // E15 recumbent jackal, E17 standing jackal
const TOP = { ankh: "\u{132F9}", netjer: "\u{132B9}" };
/** Full seal impression as SVG (160×110). `clip` = [x, y, w, h] shows only a fragment. */
export function seal(id, clip) {
  const s = SEALS[id];
  const border = s.border === 2
    ? `<ellipse cx="80" cy="55" rx="74" ry="49" class="sl"/><ellipse cx="80" cy="55" rx="67" ry="43" class="sl"/>`
    : `<ellipse cx="80" cy="55" rx="72" ry="47" class="sl"/>`;
  const star = s.star ? `<text x="${s.star === "L" ? 36 : 124}" y="52" class="sg-t" font-size="20" text-anchor="middle">\u{131FC}</text>` : "";
  const base = s.base === "v" ? `<text x="80" y="88" class="sg-t" font-size="18" text-anchor="middle">\u{13296}</text>`
    : Array.from({ length: s.base }, (_, i) => `<line x1="${80 - (s.base - 1) * 7 + i * 14}" y1="76" x2="${80 - (s.base - 1) * 7 + i * 14}" y2="90" class="sl"/>`).join("");
  const top = s.top ? `<text x="80" y="30" class="sg-t" font-size="18" text-anchor="middle">${TOP[s.top]}</text>` : "";
  const vb = clip ? clip.join(" ") : "0 0 160 110";
  return `<svg class="seal" viewBox="${vb}" width="${clip ? clip[2] * 1.4 : 224}" height="${clip ? clip[3] * 1.4 : 154}" aria-hidden="true">
    <rect x="0" y="0" width="160" height="110" class="clay"/>${border}${top}${star}
    <text x="80" y="70" class="sg-t" font-size="34" text-anchor="middle">${JACKAL[s.jackal]}</text>${base}</svg>`;
}
/** Eight fragments found under the tomb door: five from one sealing, three from a store-room sealing. */
export const FRAGMENTS = [
  ["trai", [0, 20, 60, 50]], ["kho_den", [50, 0, 60, 45]], ["trai", [55, 40, 50, 35]], ["trai", [55, 70, 50, 40]],
  ["kho_den", [100, 55, 60, 55]], ["trai", [110, 20, 50, 60]], ["kho_den", [20, 65, 50, 45]], ["trai", [30, 50, 55, 30]],
];
