// Case 03, night 7 (Saturday 13/11/2004): bà Diệp's French key, the hexagrams of thirty-three years,
// the page "Dung" wrote on 13/11/1971, the grave, the last session.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { letterHtml } from "./name.js";
import { tombArt, hexDraw } from "./art.js";
import { hexagrams } from "./cipher.js";

const SEQ = () => hexagrams("Mộ Lan là em Đừng uống trà Vàng dưới hồ sen");

export default [
  {
    id: "sang_6", stage: 6, kind: "Thư buổi sáng", icon: "✉", label: "Thư bà Dung để trên bàn sáng 13/11",
    html: () => `<div class="doc doc--memo">${letterHtml(6)}</div>`,
  },

  {
    id: "so_diep", stage: 6, kind: "Sổ tay", icon: "📔", label: "Sổ tay tiếng Pháp của bà Diệp, 1958",
    html: () => `
    <div class="doc doc--diary">
      <p class="note">Cuốn sổ bìa da nâu, khóa đồng đã gỉ. Bà Dung mở khóa bằng một cây kẹp tóc, đưa cho bạn trang cuối cùng có chữ, rồi lùi ra xa. “Mấy chục năm nay bà cầm nó mà như cầm cục đá.”</p>
      ${hand(`<p>Hàng Me, le 13 novembre 1958.</p>
        <p>${ln("sd_mien", "Ma petite Dung lit le miroir. Elle seule lira mes lettres.")}</p>
        <p>${ln("sd_alpha", "Pour l'alphabet de chez nous, vingt-neuf lettres de A à Y, j'écris une lettre par hexagramme.")}</p>
        <p>${ln("sd_lire", "Lisez de bas en haut. Le trait plein vaut un, le trait brisé ne vaut rien.")}
           ${ln("sd_poids", "Le trait du bas est le plus lourd : il vaut trente-deux ; puis seize, huit, quatre, deux ; celui du haut vaut un.")}</p>
        <p>${ln("sd_somme", "Additionnez : la somme donne la place de la lettre.")} ${ln("sd_blanc", "Six traits brisés : le silence entre deux mots.")}</p>
        <p>${ln("sd_or", "Si je meurs cette nuit, mon or dormira là où personne n'ose aller.")}</p>
        <p class="right">L. N. Diệp</p>`, "fr")}
      <p class="note">Bên lề, nét chữ học trò nghiêng ngược, mực đã phai: <i>“bà trẻ mất đêm đó.”</i></p>
    </div>`,
  },

  {
    id: "so_que", stage: 6, kind: "Sổ", icon: "☷", label: "Sổ quẻ: con cơ tự chạy mỗi đêm 13/11, 1971–2003",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`Sổ quẻ. Đêm 13 tháng 11 hằng năm, con cơ tự chạy giữa CÓ và KHÔNG, sáu lần một quẻ, CÓ là vạch liền, KHÔNG là vạch đứt. Vạch đầu tiên con cơ chạy là vạch dưới cùng.`, "fwd")}
      ${hand(`1971, 1972, 1973 … 2003. <u>Ba mươi ba năm, năm nào cũng y như vầy, không sai một vạch</u>:`, "fwd")}
      <div class="hx-seq">${SEQ().map((h) => hexDraw(h)).join("")}</div>
      ${hand(`Bốn mươi ba quẻ. Bà Diệp chỉ chỗ vàng. Phải tìm người đọc được tiếng Tây.`, "fwd")}
      <p class="note">Mỗi năm một dòng ngày tháng, cùng một nét chữ ngả về phía trước. Năm 1983 có một dòng mực đỏ: <i>“đứng ngoài hồ sen nửa tiếng. Không dám.”</i></p>
    </div>`,
  },

  {
    id: "bien_ban_7", stage: 6, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 7 · 13/11/1971 (“Dung” ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<b>Buổi cơ thứ bảy.</b> Thứ Bảy 13/11/1971.<br>
        ${ln("bb7_mot", "Chỉ còn mình. Mình ngồi một mình để từ biệt các bạn.")}<br>
        Ngồi: Dung (tay chủ, ghi sổ).<br>
        Con cơ chạy giữa CÓ và KHÔNG. Mình chép theo, ra mấy chục quẻ, không đọc được.<br>
        ${ln("bb7_chay", "Mình buông tay mà con cơ vẫn chạy. Mình bỏ chạy xuống nhà.")}<br>
        Khóa nhà. Mai về ở nhà dì.`, "fwd")}
      <p class="right">${hand("Hạnh Dung", "sign fwd")}</p>
      <p class="note">Nét chữ cả trang ngả về phía trước, không lem mực. So với trang buổi cơ thứ sáu ngay trước đó.</p>
    </div>`,
  },

  {
    id: "bia_mo", stage: 6, kind: "Ảnh", icon: "🖼", label: "Mộ “Hà Ngọc Lan” ở nghĩa trang Thiên Phước",
    html: () => `
    <div class="doc doc--plain">
      ${pic("bia_mo", "Nghĩa trang Thiên Phước, Gò Vấp. Bia: “Hà Ngọc Lan · 1952–1971”. Bông sen trắng còn tươi.", tombArt("HÀ NGỌC LAN", "1952 – 1971"))}
      <p class="note">Bà Dung kể tối nào bà cũng đi xích lô ra đây đặt một bông sen. Người giữ nghĩa trang nói với bạn: “Bà đó đặt sen, mà chưa bao giờ thắp nhang. Bà đứng nhìn tấm bia, môi mấp máy như đang đánh vần.”</p>
    </div>`,
  },

  {
    id: "ban_co_7", stage: 6, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ bảy · 13/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${media("board", "n7")}
      <p class="note">Xong lượt quẻ ngắn đó, con cơ chạy tiếp đúng bốn mươi ba quẻ như trong sổ quẻ của bà Dung, không sai một vạch.</p>
      <p class="note">Chén trà sen bà Dung rót cho bạn từ đầu buổi vẫn để trên mép bàn cơ. Nước đã nguội. Trên mặt nước có một lớp váng mỏng, óng ánh. Bà Dung nhắc: “Uống đi cháu, cho ấm.”</p>
    </div>`,
  },
];
