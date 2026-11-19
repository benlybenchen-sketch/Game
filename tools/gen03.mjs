// Prints the encoded material of case 03 (run: node tools/gen03.mjs). Used to write the documents and to check them.
import { telex, morse, suzhou, alpha29, hexagrams, bare } from "../cases/03/cipher.js";
import { edition } from "../cases/03/kieu.js";

const show = (k, v) => console.log(k.padEnd(22), typeof v === "string" ? v : JSON.stringify(v));
for (const t of ["Tùng rơi", "Chị Lan đâu", "Yến xuống hồ", "Em lạnh", "Tìm ai yên trăng rọi ao im", "Lan chết cháy",
  "Người mang tên em không phải em", "Đừng", "Thư", "Hạnh", "Minh"]) show(t, telex(t));
show("morse yen", morse(telex("Yến xuống hồ")));
show("morse em lanh", morse(telex("Em lạnh")));
show("morse dung", morse(telex("Đừng")));
for (const t of ["Khiêm treo", "Bà sửa giấy"]) { const a = alpha29(t); show(t, a); show(" suzhou", a.map((w) => w.map(suzhou).join(" ")).join(" / ")); }

// Book code "line·word·letter" (letters counted without any mark).
function bookCode(text, ed, { prefer, avoid = () => false }) {
  const m = edition(ed), used = new Set(), codes = [];
  const lines = [...m.keys()].filter(prefer);
  let rot = 0;
  for (const ch of bare(text).replace(/\s+/g, "")) {
    let best = null;
    for (let k = 0; k < lines.length && !best; k++) {
      const ln = lines[(rot + k * 7) % lines.length];
      const words = m.get(ln).replace(/[,.?]/g, "").split(" ");
      for (let w = 0; w < words.length && !best; w++) {
        const b = bare(words[w]);
        for (let l = 0; l < Math.min(b.length, 3); l++) if (b[l] === ch && !used.has(`${ln}.${w}`) && !avoid(ln)) { best = [ln, w + 1, l + 1]; used.add(`${ln}.${w}`); }
      }
    }
    if (!best) throw new Error("no " + ch);
    codes.push(best); rot += 3;
  }
  return codes;
}
function read(codes, ed) {
  const m = edition(ed);
  return codes.map(([ln, w, l]) => { const t = m.get(ln); if (!t) return "?"; const word = t.replace(/[,.?]/g, "").split(" ")[w - 1]; return word ? (bare(word)[l - 1] || "?") : "?"; }).join("");
}
const c71 = bookCode("Nghi ngã", "hue", { prefer: (n) => n >= 1033 && n <= 1052 });
show("kieu 1971 (Huế)", c71.map((c) => c.join("·")).join("  "));
show(" read Huế", read(c71, "hue")); show(" read Khiêm", read(c71, "khiem"));
const c04 = bookCode("Cảm ơn em đã đọc lại", "khiem", { prefer: (n) => n > 1000 });
show("kieu 2004 (Khiêm)", c04.map((c) => c.join("·")).join("  "));
show(" read Khiêm", read(c04, "khiem")); show(" read Huế", read(c04, "hue"));
show("hex len", hexagrams("Mộ Lan là em Đừng uống trà Vàng dưới hồ sen").length);
