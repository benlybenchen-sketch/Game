// Case 08, day 2 (29 tháng Tư): the library books of the storm night, the discipline elder's letter, the crane yard,
// the kitchen chores book, the tray book of the alchemy room.
import { ln, pic, hand } from "../../js/kit.js";
import { giay, soTay, bang, soChu, cap } from "./kit8.js";
import { retreatDate, CRANES_DEAD, CRANES_ALIVE } from "./data.js";

const MARKET = [13, 18, 23];
const chore = (d) => {
  const tao = MARKET.includes(d) ? "sớm xuống Hạ Khê mua than, về quá trưa; quét Lôi Đài lúc chạng vạng; đánh chuông canh một"
    : d === 23 ? "" : "gánh nước bếp; đưa khay giờ Thìn; quét Lôi Đài lúc chạng vạng; đánh chuông canh một";
  const extra = { 10: "Lão Phúc: tưới vườn thuốc.", 11: "A Mặc: thay bấc đèn chòi.", 12: "Tiểu Tùng: rửa máng hạc.", 13: "Tiểu Tùng: đưa khay giờ Thìn thay hoả công.",
    14: "Lão Phúc: phơi phục linh.", 15: "Đệ tử Thanh Hạc: quét Tam Thanh điện.", 16: "A Mặc: vá mái chòi.", 17: "Lão Phúc: dọn khách xá cho khách họ Triệu.",
    18: "Tiểu Tùng: đưa khay giờ Thìn thay hoả công.", 19: "Lão Phúc: hái hoàng tinh.", 20: "Đệ tử Ngân Thuỷ: chép sổ hương hoa.", 21: "A Mặc: lau vạc đồng.",
    22: "Lão Phúc: đào rãnh sau bếp.", 23: "Tiểu Tùng: đưa khay giờ Thìn thay hoả công.", 24: "Tiểu Tùng: chôn hạc Bạch Vân.", 25: "Lão Phúc: sửa hàng rào hạc viện.", 26: "A Mặc: thay bấc đèn chòi." }[d];
  const t = d === 23 ? "Tào: sớm xuống Hạ Khê mua than, về giờ Ngọ; lò Đan phòng nghỉ, trèo mái cạo muội ống khói Đan phòng; đánh chuông canh một." : `Tào: ${tao}.`;
  return `${cap(soChu(d))}. ${t} ${extra}`;
};

export default [
  {
    id: "thu_phung_an_1", stage: 2, kind: "Thư", icon: "✉", label: "Thư của nội thị Phùng Ân gửi lên núi",
    html: () => giay(hand(`<p>Nội thị Phùng Ân gửi trưởng lão Giới luật quán Vân Khư.</p>
      <p>Tin chưởng môn lôi giải đã tới huyện. Thánh thượng đang chờ tin vui. Mồng bốn tháng Năm ta lên sơn môn nhận tờ xác nhận của Giám nghĩa.</p>
      <p>Thứ ông hứa trong thư hôm hai mươi lăm, ông mang theo. Việc của ông, ta sẽ tâu.</p>`), "Người nhà họ Lương mang lên, Minh Kính đưa bạn đọc vì thư nhắc tới Giám nghĩa."),
  },

  // ---------------------------------------------------------------- Tàng Kinh các
  {
    id: "so_muon_sach", stage: 2, place: "tang_kinh", kind: "Sổ", icon: "📒", label: "Sổ mượn sách",
    html: () => giay(bang(["Ngày", "Sách", "Người mượn", "Trả"], [["3/4", "Đạo Đức kinh chú, quyển hai", "Đệ tử Trí Hải", "8/4"], ["11/4", "Nghiệm thi lục", "Đan phòng", "14/4"],
      ["19/4", "Hoàng Đình kinh", "Nữ quan Tổ sư điện", "22/4"], ["24/4", "Toán kinh, quyển cân lường", "Đan phòng", "chưa trả"],
      ["27/4", "Ngũ Lôi chính pháp, bản niêm trong hộp đen. Mở niêm, đọc tại chỗ, không mang ra.", "Giới luật", "28/4 giờ Dần"], ["28/4", "Thái Thượng cảm ứng thiên", "Hạc đồng", ""]]), "Sổ của Tàng Kinh các, chữ trưởng lão Bão Phác Tử, nét to vì mắt kém."),
  },
  {
    id: "so_dau_tang_kinh", stage: 2, place: "tang_kinh", kind: "Sổ", icon: "📒", label: "Sổ dầu đèn các",
    html: () => giay(bang(["Đêm", "Đèn", "Châm"], [["25/4", "Đèn cầu thang", "Canh một"], ["26/4", "Đèn cầu thang", "Canh một"], ["27/4", "Đèn cầu thang", "Canh một"],
      ["27/4", "Đèn bàn chép", "Canh hai, canh ba, canh tư"], ["28/4", "Đèn cầu thang", "Canh một"]]), "Ai thắp đèn trong các thì châm dầu, đánh một nét."),
  },
  {
    id: "khai_bao_phac", stage: 2, place: "tang_kinh", kind: "Lời khai", icon: "🗣", label: "Lời trưởng lão Tàng Kinh các",
    html: () => giay(hand(`<p>Lão ngủ ở gác dưới. Đêm mưa ấy có người lên bàn chép từ lúc canh hai. Tiếng mài mực, tiếng giở giấy, tiếng ho khan, tới gần sáng mới thôi.</p>
      <p>Mắt lão không nhìn rõ mặt ai. Nhưng tiếng ho ấy lão nghe ba mươi năm rồi.</p>
      <p>Sáng ra hộp đen niêm lại bằng giấy mới, ấn Giới luật đường.</p>`), "Bão Phác Tử, tám mươi tuổi, ngồi ghế mây ở chân cầu thang."),
  },
  // ---------------------------------------------------------------- Giới luật đường
  {
    id: "thu_lang_phung_an", stage: 2, place: "gioi_luat", kind: "Thư nháp", icon: "✉", label: "Bản nháp một lá thư trong ngăn bàn",
    html: () => giay(hand(`<p>Kính gửi nội thị Phùng Ân.</p>
      <p>Bản Ngũ Lôi chính pháp của quán, xưa nay không ra khỏi hộp, tôi sẽ chép đủ, kịp ngày ngài lên núi. Thánh thượng muốn có phép gọi sấm của phái Thần Tiêu, đây là phép ấy, không thiếu một chữ.</p>
      <p>Xin ngài tâu giúp: chưởng môn sau này của Vân Khư nên do triều đình phong.</p>
      <p>Viết ngày hai mươi lăm tháng Tư.</p>`), "Giấy nháp gấp tư, nhét dưới nghiên. Bản này không ký."),
  },
  {
    id: "khai_lang_2", stage: 2, via: "lang", kind: "Lời khai", icon: "🗣", label: "Trưởng lão Giới luật nói lại",
    html: () => giay(hand(`<p>Phải. Đêm ấy ta không ngủ. Từ canh hai ta ngồi ở Tàng Kinh các chép bản Ngũ Lôi chính pháp, tới giờ Dần mới xong, niêm hộp lại rồi về.</p>
      <p>Ta không lên đỉnh, không đến Đan phòng. Mưa như trút, ta ngồi đó cả đêm, lão Bão Phác nghe thấy.</p>
      <p>Ngài muốn tâu gì thì tâu.</p>`)),
  },

  // ---------------------------------------------------------------- Hạc viện
  {
    id: "so_hac", stage: 2, place: "hac_vien", kind: "Sổ", icon: "📒", label: "Sổ hạc viện tháng Ba, tháng Tư",
    html: () => giay(`<p class="note">Sổ của hạc đồng Tiểu Tùng, chữ to, nhiều chỗ viết sai. Đầu sổ: mười hai con, tên từng con. Năm ngoái cả năm không con nào chết.</p>
      ${bang(["Ngày", "Ghi"], [["8/3", "Đủ mười hai con. Cám hạc hoả công gánh từ bếp lên, mỗi chiều một thùng."], ["15/3", "Thanh Phong bị sái cánh."],
        ["18/3", "Đêm hạc không ngủ, kêu suốt. Khánh Tổ sư điện đủ năm canh, canh nào hạc cũng kêu theo."], ["20/3", "Cám chiều nay có mùi lạ, hoả công bảo cám mới."],
        ...CRANES_DEAD.map(([n, , d]) => [d, `${n} chết.`]),
        ["22/4", "Đưa trưởng lão Đan phòng bốn viên vàng. Ông trả lại."], ["26/4", `Còn năm con: ${CRANES_ALIVE.join(", ")}.`]])}`),
  },
  {
    id: "mo_hac", stage: 2, place: "hac_vien", kind: "Hiện trường", icon: "🕊", label: "Sân hạc viện",
    html: () => `<div class="doc doc--plain">${pic("hac_vien", "Hạc viện, sáng 29.")}
      ${soTay(`<p>Bảy nấm đất nhỏ dọc tường, mỗi nấm cắm que tre buộc mảnh vải. Năm con hạc còn lại đứng rụt cổ ở góc ao.</p>
      <p>Máng cám gỗ dài, đáy có vệt cám khô. Tiểu Tùng ngồi ở bậc hiên, không ngẩng lên khi tôi hỏi.</p>`)}</div>`,
  },

  // ---------------------------------------------------------------- Trai đường
  {
    id: "so_viec_vat", stage: 2, place: "trai_duong", kind: "Sổ", icon: "📒", label: "Sổ việc vặt tháng Ba",
    html: () => giay(`<p class="note">Sổ chia việc cho người làm vặt của quán, ông bếp ghi mỗi tối. Trang tháng Ba, từ ngày mười:</p>
      ${hand(Array.from({ length: 17 }, (_, i) => i + 10).map((d) => `<p>${ln(`vv_${d}`, chore(d))}</p>`).join(""))}`),
  },
  {
    id: "so_gao", stage: 2, place: "trai_duong", kind: "Sổ", icon: "📒", label: "Sổ gạo muối",
    html: () => giay(bang(["Ngày", "Nhập", "Xuất"], [["1/4", "Gạo ba thạch", "—"], ["10/4", "Muối hai đấu", "—"], ["20/4", "—", "Gạo nửa thạch cho cỗ xuất quan"], ["26/4", "Đậu phụ hai mươi bìa", "—"]])),
  },

  // ---------------------------------------------------------------- Đan phòng
  {
    id: "so_khay", stage: 2, place: "dan_phong", kind: "Sổ", icon: "📒", label: "Sổ khay về Đan phòng",
    html: () => giay(`<p class="note">Mỗi sáng hoả công mang khay hôm trước về, đệ tử Đan phòng xem rồi ghi. Mấy trang:</p>
      ${bang(["Sáng", "Khay của ngày bế quan", "Đan", "Chén nước"], Array.from({ length: 12 }, (_, i) => i + 6).map((n) => {
        const [m, d] = retreatDate(n + 1);
        return [`${d}/${m}`, `thứ ${soChu(n)}`, "hết", n <= 11 ? "cạn, đáy còn cặn thuốc" : "cạn, sạch"];
      }))}
      <p class="note">Các trang sau, tới sáng 27 tháng Tư, ghi y như dòng cuối.</p>`),
  },
  {
    id: "chu_sa", stage: 2, place: "duoc_pho", kind: "Sổ", icon: "🌿", label: "Sổ kho chu sa",
    html: () => giay(bang(["Ngày", "Nhập", "Xuất", "Còn"], [["Tháng Giêng", "Hai cân", "—", "Ba cân"], ["Tháng Hai", "—", "Một cân bốn lạng, Đan phòng", "Một cân mười hai lạng"], ["Tháng Ba", "—", "—", "Một cân mười hai lạng"], ["Tháng Tư", "—", "—", "Một cân mười hai lạng"]]), "Chu sa cất ở kho thuốc dược phố, khoá hai chìa."),
  },
];
