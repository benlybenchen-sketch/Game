// Case 07, day 3 (Peret II, 18): the scribal school's model signs, Hay's practice book (with his picture
// alphabet on the last page), letters to the dead on bowls from many houses, and three "answers from Hay".
import { hand } from "../../js/kit.js";
import { gom } from "./docs0.js";
import { SIGNS, sign, WRITERS, strip } from "./egypt.js";

const OTHER = { iyneferti: [1, 2, 0, 1, 2, 0], baki: [2, 0, 2, 1, 0, 2], seba: [1, 1, 0, 2, 1, 0] };
const stripOf = (v) => `<span class="strip">${v.map((x, i) => sign(i, x)).join('<span class="hg dim">·</span>')}</span>`;
const bowl = (id, label, who, text, note) => ({
  id, stage: 2, kind: "Bát thư", icon: "◡", label,
  html: () => gom(`<div class="strip-wrap">${WRITERS[who] ? strip(who) : stripOf(OTHER[who])}</div>${hand(text)}`, note),
});
const reply = (id, n, who, text) => ({
  id, stage: 2, kind: "Mảnh gốm", icon: "✎", label: `Thư trả lời số ${n} đặt ở nhà nguyện`,
  html: () => gom(`<div class="strip-wrap">${strip(who)}</div>${hand(text)}`, `Mảnh gốm úp dưới bát thư của Nebetiunet. Dải ký hiệu phía trên là những chữ xuất hiện trong thư, chép đúng nét.`),
});

/** Hay's picture alphabet: an object stands for the first sound of its name. */
export const PICTURE_ALPHABET = [
  ["\u{13123}", "ib", "trái tim", "i"], ["\u{131EF}", "pet", "bầu trời", "p"], ["\u{132A1}", "tjau", "cánh buồm", "t"],
  ["\u{131F3}", "ra", "mặt trời", "r"], ["\u{13296}", "niut", "làng", "n"], ["\u{131A3}", "kheper", "bọ hung", "kh"],
  ["\u{132F9}", "ankh", "sự sống", "a"], ["\u{131B8}", "seshen", "hoa sen", "s"], ["\u{13191}", "fy", "rắn sừng", "f"],
  ["\u{13217}", "mu", "nước", "m"], ["\u{1320B}", "djew", "núi", "dj"], ["\u{131FC}", "seba", "ngôi sao", "s"],
  ["\u{1339F}", "neb", "cái giỏ", "n"], ["\u{132B5}", "hetep", "bàn cúng", "h"], ["\u{132DD}", "wesekh", "vòng cổ", "w"],
];

export default [
  {
    id: "mau_chu", stage: 2, kind: "Bảng mẫu", icon: "📒", label: "Bảng mẫu chữ của lớp học ký lục ở nhà nguyện",
    html: () => gom(`<table class="tbl">
        <tr><th>Chữ</th><th>Kiểu 1</th><th>Kiểu 2</th><th>Kiểu 3</th></tr>
        ${SIGNS.map((s, i) => `<tr><td>${s}</td><td>${sign(i, 0)}</td><td>${sign(i, 1)}</td><td>${sign(i, 2)}</td></tr>`).join("")}
      </table>`, "Thầy giáo nhà nguyện vẽ để học trò chọn một kiểu mà theo. Ai trong làng biết chữ cũng học ở lớp này."),
  },

  {
    id: "vo_hay", stage: 2, kind: "Vở", icon: "📒", label: "Vở tập viết của Hay",
    html: () => gom(`<h4>Mảnh 1–3</h4><div class="strip-wrap">${strip("hay")}</div>
      ${hand(`<p>Chép đi chép lại bài “Lời dạy của Amenemope”. Bên lề Hay vẽ mấy con rắn, mấy bông sen.</p>
        <p>Một mảnh có hai nét chữ: dòng trên của Hay, dòng dưới chữ non tay hơn, chép lại y hệt. Bên cạnh Hay ghi: “Nebet viết.”</p>`)}
      <h4>Mảnh cuối</h4>
      ${hand(`<p>Trò của thợ vẽ trong Lăng: vẽ một vật thay cho âm đầu tên của nó. Người ngoài nhìn chỉ thấy hình, người trong nghề đọc được chữ.</p>`)}
      <table class="tbl">${PICTURE_ALPHABET.map(([g, name, vn]) => `<tr><td><span class="hg big">${g}</span></td><td>${name}</td><td>${vn}</td></tr>`).join("")}</table>`,
      "Bà Nebetiunet đưa, sáng ngày 18."),
  },

  bowl("bat_gui_1", "Bát thư Nebetiunet gửi chồng, tối 15", "nebet",
    `<p>Nebetiunet gửi Hay, người đã sang miền Tây. Anh ơi, ai đã làm anh như thế? Anh không thề gian. Người lấy con lừa của anh ngủ ngon lắm.</p>
     <p>Anh hãy kiện người ấy trước các thần, như người sống kiện nhau trước toà làng.</p>`, "Bát gốm đỏ, chữ viết vòng trong lòng bát."),
  bowl("bat_gui_2", "Bát thư Nebetiunet gửi chồng, tối 16", "nebet",
    `<p>Anh ơi, Tuy hỏi bố đâu. Em bảo bố lên đèo. Lúa nhà mình còn nửa túi. Em đong bằng cái chén của anh, đong đi đong lại, như anh.</p>
     <p>Hôm nay tượng thần nghiêng về tên người ấy. Anh có thấy không?</p>`, "Bát gốm đỏ, mực còn mới."),
  bowl("bat_henut", "Bát thư bà Henut gửi mẹ chồng đã khuất", "henut",
    `<p>Henut gửi mẹ. Mẹ ơi, con trai mẹ đêm nào cũng đi. Mẹ bắt nó về nhà. Con đã cúng mẹ bánh, cúng mẹ bia. Sao mẹ không trả lời?</p>`, "Bát nhỏ, chữ nghiêng."),
  bowl("bat_userhat", "Bát thư ký lục Userhat gửi cha đã khuất", "userhat",
    `<p>Userhat gửi cha, ký lục Amennakht. Cha ơi, sổ của Lăng con tính đi tính lại, chỗ nào cũng khớp mà nhà nào cũng đói. Con sợ con tính sai. Cha dạy con với.</p>`, "Bát trắng, chữ nhỏ đều."),
  bowl("bat_iy", "Bát thư bà Iyneferti gửi con trai đã mất", "iyneferti",
    `<p>Con ơi, con đi mùa lũ năm ngoái. Mẹ vẫn để phần bánh cho con. Đừng về doạ em con nữa.</p>`, "Bát mẻ miệng."),
  bowl("bat_baki", "Bát thư thợ Baki gửi vợ đã mất", "baki",
    `<p>Em ơi, anh vay lúa của Huy để làm đám cho em. Mỗi tháng trả một ít. Em đừng giận Huy, Huy tốt với nhà mình.</p>`, "Bát dày, chữ to."),
  bowl("bat_seba", "Bát thư thợ Seba gửi cha đã mất", "seba",
    `<p>Cha ơi, cái mộ của cha con đã trát lại. Con xin cha cho vợ con sinh con trai.</p>`, "Bát nhỏ."),

  reply("tra_loi_1", 1, "nebet", `<p>Hay trả lời vợ. Anh không thề gian. Người lấy lừa của anh đứng trên đèo đêm ấy. Bảo cả làng xử lại.</p>`),
  reply("tra_loi_2", 2, "nebet", `<p>Hay trả lời vợ. Bà Rắn không bắt anh. Bà Rắn thương anh, anh vẽ Bà đẹp nhất. Em đừng sợ.</p>`),
  reply("tra_loi_3", 3, "tags", `<p>Hay trả lời. Đốc công bên Phải đứng trên lăng đêm ấy, tay cầm búa. Đừng ai đụng tới lúa của Lăng, lúa là của thần. Đong một đấu là đủ một đấu.</p>`),

  {
    id: "loi_nebet", stage: 2, kind: "Lời kể", icon: "✍", label: "Vợ góa của Hay nói ở nhà nguyện",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Tôi biết chữ. Anh Hay dạy tôi từ hồi mới cưới.”</p>
      <p>“Thư trả lời à? Anh ấy về thì anh ấy viết. Bà hỏi làm gì.”</p>
      <p>“Người lấy lừa ấy ghét anh tôi. Tượng thần đã nghiêng về ông ta rồi.”</p>
      <p>“Tối nào tôi cũng đặt bát. Sáng ra Khonsu gánh nước qua nhà nguyện, nó bảo tôi có thư mới.”</p>`)}</div>`,
  },

  {
    id: "thue_lua", stage: 2, kind: "Giấy tờ", icon: "📜", label: "Giấy thuê lừa của làng, tháng 1 mùa Peret",
    html: () => gom(hand(`<p>Lừa xám của Nakhtmin: thợ Qaha thuê hai ngày, thợ Huy thuê một ngày, trả bằng cá khô.</p>
      <p>Lừa đen của Sennefer: thợ Hay thuê ba ngày chở đá vôi, trả một deben đồng.</p>
      <p>Lừa nâu của làng: người cổng dùng chở lúa từ bến, không ai thuê.</p>`)),
  },
];
