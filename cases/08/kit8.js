// Small writing helpers for case 08 documents (paper of the Song dynasty mountain sect, ledgers, the player's notebook).
import { hand } from "../../js/kit.js";

/** A sheet of paper (thư, biên bản, sổ) with an optional note of how it looks, as the player sees it. */
export const giay = (inner, note = "") => `<div class="doc doc--old">${note ? `<p class="note">${note}</p>` : ""}${inner}</div>`;
/** The player's own notebook (Giám nghĩa of the Đạo lục viện). */
export const soTay = (inner) => `<div class="doc doc--notebook">${hand(inner)}</div>`;
/** A plain table. head: array of column titles, rows: arrays of cells (HTML allowed). */
export const bang = (head, rows, cls = "") => `<table class="tbl ${cls}"><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
/** Day number in words for ledgers ("mười tám"). */
const W = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
export const soChu = (n) => {
  if (n < 10) return W[n];
  if (n === 10) return "mười";
  const t = Math.floor(n / 10), u = n % 10;
  const tens = t === 1 ? "mười" : `${W[t]} mươi`;
  const unit = u === 0 ? "" : u === 1 && t > 1 ? " mốt" : u === 4 && t > 1 ? " tư" : u === 5 ? " lăm" : ` ${W[u]}`;
  return tens + unit;
};
export const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
