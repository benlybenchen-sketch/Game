// The player's own name (typed on the contract, kept only in this browser) and the morning letters
// bà Dung leaves on the table. The letters quote the player's notebook: the matching is done here, on this machine.
import { state, save } from "../../js/store.js";
import { telexWord, baseLetters } from "./cipher.js";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
/** Given name = the last word of what the player typed. */
export const given = () => { const w = (state.player || "").trim().split(/\s+/).filter(Boolean); return w.length ? cap(w[w.length - 1]) : ""; };
/** How bà Dung addresses the player. */
export const callName = () => given() || "cháu";
export const CallName = () => given() || "Cháu";
/** The name as the board spells it (Telex), or EM when the player left the contract blank. */
export const coName = () => (given() ? telexWord(given()) : "EM");
/** The name in the 29-letter alphabet (for the hexagrams of the last night). */
export const hexName = () => (given() ? baseLetters(given()) : "EM");
/** The full name as typed, for the contract and the last letter. */
export const fullName = () => (state.player || "").trim();

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d").toLowerCase();

// What bà Dung writes back when she finds a word in the notebook. {q} is the player's own sentence.
const RULES = [
  [/noi doi|lua|gia mao|gia danh|mao danh/, "Cháu ghi: “{q}”. Bà nói dối cháu điều gì? Cháu hỏi thẳng bà đi, đừng viết sau lưng bà."],
  [/giet|hung thu|sat nhan|ke giet/, "“{q}”. Cháu viết chữ ấy trong nhà bà. Lần sau viết bằng bút chì, cháu à, để còn tẩy."],
  [/sua|tay xoa|thay doi|khac ban/, "“{q}”. Giấy ba mươi ba năm thì mực nhòe, chữ phai, cháu à. Không ai sửa gì đâu."],
  [/tay trai|tay phai|thuan tay/, "Cháu để ý tay bà làm chi vậy? “{q}”. Bà già rồi, tay nào cũng run."],
  [/\bla lan\b|chinh la lan|ba la lan|lan con song|lan chua chet/, "“{q}”. Lan chết rồi. Bà đứng nhìn người ta đưa nó ra nghĩa trang Đô Thành. Tối nào bà cũng mang sen ra mộ nó."],
  [/\blan\b/, "Cháu ghi tên Lan trong sổ: “{q}”. Lan là bạn thân nhất của bà. Cháu đừng nhắc tên nó nhiều quá, nó nghe đó."],
  [/\btra\b|thach tin|thuoc doc|doc duoc/, "“{q}”. Trà sen bà ướp từ tháng Sáu, cháu chưa uống ngụm nào. Bà buồn đó."],
  [/\bso\b|run|lanh gay|ghe qua|ron/, "Cháu ghi là cháu sợ. Đừng sợ. Có bà ở đây. Bà ngồi ngay sau lưng cháu mà."],
  [/\bma\b|vong|hon|linh hon|quy/, "“{q}”. Nhà này không có ma đâu cháu. Chỉ có người chết thôi."],
  [/\bdung\b/, "“{q}”. Cháu gọi tên bà trống không như vậy, nghe lạ tai lắm."],
];

function sentences() {
  return (state.notes || "").split(/[\n.!?]+/).map((s) => s.trim()).filter((s) => s.length >= 4 && s.length <= 160);
}

/** One sentence of the notebook bà Dung "happened to read", with her answer; null when the notebook is empty. */
function quote() {
  const used = (state.letters.used ||= []);
  const ss = sentences();
  for (const [re, tpl] of RULES) {
    const hit = ss.find((s) => re.test(fold(s)) && !used.includes(s));
    if (hit) { used.push(hit); return tpl.replace("{q}", hit.replace(/[<>&]/g, "")); }
  }
  const any = ss.find((s) => !used.includes(s));
  if (any) { used.push(any); return `Cháu ghi: “${any.replace(/[<>&]/g, "")}”. Chữ cháu đẹp. Bà đọc mà thương.`; }
  return "Bà thấy sổ tay của cháu còn trắng tinh. Cháu không ghi gì sao? Người giải mật thư thì phải ghi chép chứ, cháu.";
}

/**
 * The letter found on the table the morning after night n (1..6). Written once, then kept, so it reads the same later.
 * Returned as plain lines (one paragraph per line).
 */
export function letter(n, body) {
  const key = "m" + n;
  if (state.letters[key]) return state.letters[key];
  const lines = [`${CallName()} à,`, ...body()];
  if (n >= 2) lines.splice(n >= 3 ? 2 : lines.length, 0, quote());
  lines.push("Dung");
  const text = lines.join("\n");
  state.letters[key] = text; save();
  return text;
}

/** A morning letter as it was found (for the folder), in bà Dung's forward-leaning hand. */
export function letterHtml(n) {
  const t = state.letters["m" + n];
  if (!t) return `<p class="note">Lá thư chưa tới.</p>`;
  const lines = t.split("\n"), sig = lines.pop();
  return `<div class="hand fwd letter">${lines.map((l) => `<p>${l}</p>`).join("")}<p class="right sign">${sig}</p></div>`;
}
