// Case 03 "Cầu cơ": the codes of the story, as pure functions (used by the documents, the board and tools/gen03.mjs).
// Nothing here solves a puzzle for the player: these only build the encoded material.

/** The Vietnamese alphabet, 29 letters (Quốc's notebook): A=1 … Y=29. */
export const ALPHA29 = ["A", "Ă", "Â", "B", "C", "D", "Đ", "E", "Ê", "G", "H", "I", "K", "L", "M", "N", "O", "Ô", "Ơ", "P", "Q", "R", "S", "T", "U", "Ư", "V", "X", "Y"];

const TONE = { "́": "S", "̀": "F", "̉": "R", "̃": "X", "̣": "J" };
const MOD = { "̆": "W", "̛": "W" };   // breve (ă) and horn (ơ, ư); the circumflex doubles the vowel

/**
 * One word in telegraph Telex, the way Tùng's code table writes it: ă→AW, â→AA, đ→DD, ê→EE, ô→OO, ơ→OW, ư→UW,
 * and the tone letter (S sắc, F huyền, R hỏi, X ngã, J nặng) at the end of the word.
 */
export function telexWord(word) {
  let out = "", tone = "";
  for (const ch of word.normalize("NFD")) {
    if (TONE[ch]) { tone = TONE[ch]; continue; }
    if (ch === "̂") { out += out.slice(-1); continue; }
    if (MOD[ch]) { out += "W"; continue; }
    if (ch === "đ" || ch === "Đ") { out += "DD"; continue; }
    if (/[a-z]/i.test(ch)) out += ch.toUpperCase();
  }
  return out + tone;
}
export const telex = (text) => text.split(/\s+/).filter(Boolean).map(telexWord).join(" ");

/** Drops the tone marks but keeps the letters of their own (Ă Â Đ Ê Ô Ơ Ư), upper case. */
export function baseLetters(text) {
  return text.normalize("NFD").replace(/[̣̀́̃̉]/g, "").normalize("NFC").toUpperCase();
}

/** Plain Latin letters only (for the Kiều book code, which ignores every mark). */
export const bare = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toUpperCase();

export const MORSE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..", M: "--",
  N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
};
/** Letters first, then digits (integer-like keys would otherwise come first). */
export const MORSE_KEYS = [...Object.keys(MORSE).filter((k) => /[A-Z]/.test(k)), ...Object.keys(MORSE).filter((k) => /[0-9]/.test(k))];
/** ".--" -> "· — —": spaced so two dashes never run together into one long bar. */
export const morseGlyph = (code) => [...code].map((c) => (c === "." ? "·" : "—")).join(" ");
/** "EM LANHJ" -> ". -- / .-.. .- -. .... .---" ("/" between words). */
export const morse = (telexText) => telexText.split(" ").map((w) => [...w].map((c) => MORSE[c]).join(" ")).join(" / ");

/** Suzhou numerals of the Chinese pharmacy ledger. 1, 2, 3 written next to each other alternate with the flat forms. */
const SU = ["〇", "〡", "〢", "〣", "〤", "〥", "〦", "〧", "〨", "〩"];
const FLAT = { 1: "一", 2: "二", 3: "三" };
export function suzhou(n) {
  const ds = String(n).split("").map(Number);
  let prevVertical = false;
  return ds.map((d) => {
    if (d >= 1 && d <= 3) { const s = prevVertical ? FLAT[d] : SU[d]; prevVertical = !prevVertical; return s; }
    prevVertical = false; return SU[d];
  }).join("");
}
/** Letters to their numbers in the 29-letter alphabet ("BÀ SỬA" -> [[4,1],[23,26,1]]). */
export const alpha29 = (text) => baseLetters(text).split(/\s+/).map((w) => [...w].map((c) => ALPHA29.indexOf(c) + 1).filter((n) => n > 0));

/**
 * The Lâm family code (bà Diệp's French diary): one hexagram per letter, six lines read from the bottom up,
 * a solid line is 1, a broken line is 0, the binary number is the letter's place in the 29-letter alphabet.
 * Six broken lines (0) part two words. Returns lines bottom-first, 1 = solid.
 */
export function hexagram(n) { return [5, 4, 3, 2, 1, 0].map((b) => (n >> b) & 1); }
export function hexagrams(text) {
  const out = [];
  baseLetters(text).split(/\s+/).filter(Boolean).forEach((w, i) => {
    if (i) out.push(hexagram(0));
    for (const c of w) { const n = ALPHA29.indexOf(c) + 1; if (n > 0) out.push(hexagram(n)); }
  });
  return out;
}
