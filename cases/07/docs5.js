// Case 07, day 6 (Peret II, 21): measuring the gate measure with water, Hay's own sherd, the grain tags and the
// river granary's book, the snake catcher's book, statements about the night of the 14th.
import { ln, pic, hand, media } from "../../js/kit.js";
import { gom } from "./docs0.js";
import { hn, strip } from "./egypt.js";
import { GATE_HIN } from "./data.js";

// Grain tags tied to the sacks at the river: who wrote each one (handwriting of the stroke "one") and the number.
const TAGS = [
  ["Bao lúa mì", 11, 2], ["Bao lúa mì", 12, 2], ["Bao lúa mạch", 1, 2], ["Bao lúa mì", 21, 0], ["Bao lúa mạch", 31, 1],
  ["Bao lúa mì", 16, 2], ["Bao lúa mì", 41, 0], ["Bao lúa mạch", 13, 2], ["Bao lúa mì", 51, 1], ["Bao lúa mạch", 61, 2],
  ["Bao lúa mì", 71, 0], ["Bao lúa mì", 14, 2],
];
const SNAKE_BOOK = [
  [2, "Rắn cát, hai con", "thầy thuốc bùa bờ Đông"], [3, "Rắn roi, một con", "đền phía Tây, làm lễ"], [4, "Trăn cát, một con", "bán cho người làm trò ở chợ"],
  [5, "Rắn lục thảm, một con (đào trong hang)", "thầy thuốc bùa bờ Đông"], [6, "Rắn nước sông, ba con", "người đánh cá"],
  [7, "Rắn hổ mang Ai Cập, một con (đào trong hang chuột)", "đền phía Tây, làm lễ"], [8, "Rắn mũi xẻng, hai con", "trẻ con trong làng, đổi bánh"],
  [10, "Rắn lục sa mạc không sừng, một con, đã nhổ răng", "bà Nebetiunet, làm bùa trừ tà cho nhà"],
  [11, "Rắn lục sừng giả, một con (bắt ở khe đá)", "thầy thuốc bùa bờ Đông"], [12, "Rắn mắt mèo, một con", "nhà ông Ipuy, bắt chuột"],
  [13, "Rắn đen sa mạc, một con (đào dưới đá)", "đền phía Tây"], [14, "Rắn cát, một con", "chợ"],
  [15, "Rắn hang, một con", "thầy thuốc bùa bờ Đông"], [16, "Rắn roi, hai con", "chợ"],
  [17, "Rắn hổ mang sừng, một con (đào trong cát, còn ngủ)", "người nhà cổng làng, bảo để làm bùa giữ kho"],
  [18, "Trăn cát, một con", "trẻ con trong làng"], [19, "Không bán. Nghỉ vì làng có tang.", ""],
  [20, "Rắn nước sông, một con", "người đánh cá"], [21, "Rắn lục thảm, một con", "thầy thuốc bùa bờ Đông"],
];

export default [
  {
    id: "dong_dau", stage: 5, kind: "Thử nghiệm", icon: "⚗", label: "Đổ nước vào ba cái đấu",
    html: () => `<div class="doc doc--plain"><p class="note">Sáng 21, bà mượn được ba cái đấu: cái ở cổng làng, cái của kho bến, cái của Lăng ở nhà ký lục. Bà đổ nước bằng cái chén hin của Hay.</p>${media("pour", "three")}</div>`,
  },

  {
    id: "dau_cong", stage: 5, kind: "Ảnh", icon: "🖼", label: "Lòng cái đấu ở cổng, nhìn từ trên xuống",
    html: () => `<div class="doc doc--plain">${pic("dau_cong", "Đổ hết lúa ra, lau sạch.")}</div>`,
  },

  {
    id: "gom_hay", stage: 5, kind: "Mảnh gốm", icon: "✎", label: "Mảnh gốm bé Tuy giấu trong búp bê",
    html: () => `<div class="doc doc--plain">${pic("chen_hin", "Cái chén của Hay, mảnh gốm và con búp bê của bé Tuy.")}
      ${gom(hand(`<p>Tháng Akhet IV: đong một đấu lúa vừa lĩnh ở cổng, đổ lại bằng chén nhà: ${hn(37.5)} chén.</p>
        <p>Tháng Peret I: lại đong: ${hn(37.5)} chén.</p>
        <p>Tháng Peret I, lần nữa, đấu của nhà ông Ipuy: ${hn(37.5)} chén.</p>`), "Chữ của Hay. Bé Tuy nói bố dặn: “Giữ cho bố, đừng đưa ai.”")}</div>`,
  },

  {
    id: "thanh_go", stage: 5, kind: "Vật chứng", icon: "▥", label: "Bốn thanh gỗ khắc chữ trong bụng con búp bê",
    html: () => `<div class="doc doc--plain"><p class="note">Nhét chung với mảnh gốm trong bụng con búp bê của bé Tuy. Bốn thanh gỗ vuông, mỗi thanh khắc bảy hàng hình nhỏ. Bà đọc từng hình theo âm đầu, như trang cuối vở của Hay, rồi chép lại bằng chữ của bà. Thanh nào cũng có một đầu sơn đen.</p>${media("sticks", "hay")}</div>`,
  },

  {
    id: "bai_ru", stage: 5, kind: "Lời kể", icon: "♪", label: "Bài ru bé Tuy hát cho con búp bê",
    html: () => `<div class="doc doc--memo">${hand(`<p>Bé Tuy: “Bố dạy con bài này. Bố bảo hát cho búp bê ngủ thì búp bê giữ đồ cho bố.”</p>
      <p>Ông già chống ba gậy đi đầu,<br>đầu chúc xuống đất, chân đạp lên trời.</p>
      <p>Hai anh em đứng giữa đường,<br>anh áo đỏ đi trước, em áo đen theo sau.</p>
      <p>Thằng út một mình đi cuối,<br>ngủ đi con, ngủ đi con.</p>`)}</div>`,
  },

  {
    id: "the_bao", stage: 5, kind: "Vật chứng", icon: "🏷", label: "Mười hai thẻ gỗ buộc bao lúa ở kho bến",
    html: () => gom(`<table class="tbl"><tr><th>Thẻ</th><th>Ghi</th><th>Số</th></tr>
      ${TAGS.map(([what, n, one], i) => `<tr><td>${i + 1}</td><td>${what}</td><td>${hn(n, { one })}</td></tr>`).join("")}</table>
      <p class="small">Dải ký hiệu chép từ mặt sau thẻ số 1, 2, 3, 6, 8, 10, 12 (cùng một nét tay):</p><div class="strip-wrap">${strip("tags")}</div>`,
      "Thẻ cũ còn buộc trên bao rỗng trong kho bến. Thẻ do chính người nhận lúa viết và buộc khi đếm bao."),
  },

  {
    id: "so_kho_ben", stage: 5, kind: "Sổ sách", icon: "📓", label: "Sổ giao lúa của kho bến cho làng Lăng",
    html: () => gom(hand(`<p>Akhet III: giao đủ. Người nhận: người cổng làng Lăng. Đếm bao, buộc thẻ, ký nhận.</p>
      <p>Akhet IV: giao đủ. Người nhận: người cổng làng. Thuyền đến muộn một ngày.</p>
      <p>Peret I: giao đủ. Người nhận: người cổng làng, đi cùng thợ trẻ Tjay.</p>
      <p>Lúa riêng của người giữ cổng và người giữ lều lĩnh tại kho, đong bằng đấu kho.</p>
      <p>Ấn kho bến đóng lên miệng bao trước khi chở. Người nhận được giữ ấn để niêm lại bao rách dọc đường.</p>`), "Ký lục kho bến chép cho bà, sáng 21."),
  },

  {
    id: "so_bat_ran", stage: 5, kind: "Sổ sách", icon: "📓", label: "Sổ của thầy bắt rắn Hori, tháng 2 mùa Peret",
    html: () => `<div class="doc doc--plain">${pic("gio_ran", "Sân nhà thầy Hori.")}
      ${gom(`<table class="tbl"><tr><th>Ngày</th><th>Bán</th><th>Cho ai</th></tr>${SNAKE_BOOK.map(([d, w, who]) => `<tr><td>${d}</td><td>${w}</td><td>${who}</td></tr>`).join("")}</table>`, "Thầy Hori không biết chữ. Thằng cháu ghi giùm.")}</div>`,
  },

  {
    id: "khai_khonsu", stage: 5, kind: "Lời khai", icon: "✍", label: "Khonsu nói khi gánh nước qua",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>${ln("kh_1", "“Đêm 14 tôi ngủ trên trạm gác, ông Ptahmose đau lưng. Đèn trạm cháy suốt đêm, ai trên đèo cũng thấy.”")}</p>
      <p>${ln("kh_2", "“Cái đấu ở cổng là đấu của làng từ đời ông tôi. Đấu nào chẳng là đấu.”")}</p>
      <p>${ln("kh_3", "“Lúa về là tôi đong ngay ở cổng, nhà nào nhà nấy, trước mặt cả làng.”")}</p>
      <p>${ln("kh_4", "“Tôi không biết chữ nhiều. Viết số thì biết, đếm bao phải viết.”")}</p>
      <p>${ln("kh_5", "“Thư trả lời ở nhà nguyện là thần viết. Tôi chỉ gánh nước qua.”")}</p>`)}</div>`,
  },

  {
    id: "loi_ptahmose", stage: 5, kind: "Lời kể", icon: "✍", label: "Ông Ptahmose, người giữ lều trên đèo",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Đêm 14 tôi xuống làng nằm, lưng đau quá. Trạm gác để thằng Khonsu.”</p>
      <p>“Sáng 15 tôi lên thì đèn trạm cháy cạn cả hai bấc. Thằng ấy đi đâu từ sớm, chỉ còn cái đèn.”</p>
      <p>“Từ trạm gác xuống cửa lăng, đi nhanh thì nửa giờ.”</p>`)}</div>`,
  },
];
