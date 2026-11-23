// Case 04, night shift 3 (Friday 18/10/1996): three things the body cannot fake.
import { ln, stamp, pic, hand } from "../../js/kit.js";
import { tranh, tape } from "./docs0.js";

export default [
  {
    id: "ba_1985", stage: 2, kind: "Bệnh án cũ", icon: "✚", label: "Bệnh viện Lâm Đồng: cấp cứu bà Lê Thị Hoa, 1985",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BỆNH VIỆN ĐA KHOA LÂM ĐỒNG · KHOA CẤP CỨU · Tóm tắt hồ sơ lưu trữ</div>
      <p>Họ tên: Lê Thị Hoa, 41 tuổi, thợ may.</p>
      <p>Ngày 3/6/1985, 20 giờ: ${ln("ba85", "sốc phản vệ sau khi ăn gỏi tôm tại một đám cưới. Phù môi, phù thanh quản, tụt huyết áp. Tiêm adrenalin, thở oxy. Qua khỏi.")}</p>
      <p>Lời dặn: tuyệt đối không ăn tôm, tép, mắm tôm, ruốc. Mang theo giấy này khi đi khám.</p>
      <p class="small">Kèm theo trong cùng bìa hồ sơ gia đình: ${ln("thao90", "Trần Ngọc Thảo, 18 tuổi, ngày 25/1/1990: nổi mề đay toàn thân sau khi ăn tôm. Ghi chú: “dị ứng tôm như mẹ”.")}</p>
      ${stamp("LƯU TRỮ", "right:28px;bottom:24px", "violet")}
    </div>`,
  },

  {
    id: "so_can_tin", stage: 2, kind: "Sổ sách", icon: "📒", label: "Sổ bán hàng căng tin bệnh viện, ngày 12/10",
    html: () => `
    <div class="doc doc--ledger">
      <div class="ledger-head">CĂNG TIN BỆNH VIỆN CAM LY · thứ Bảy 12/10/1996</div>
      <table class="tbl tbl--hand">
        <tr><th>Giờ</th><th>Khách</th><th>Món</th><th>Tiền</th></tr>
        <tr><td>10:20</td><td>2 người nhà BN khoa Nam 1</td><td>2 phở bò</td><td>14.000</td></tr>
        <tr><td>15:40</td><td>${ln("ct_ba", "bà Hoa, mẹ BN phòng 7 (cô Sương dắt ra)")}</td><td>${ln("ct_mon", "1 dĩa gỏi tôm, 1 ly trà đá. Ăn hết.")}</td><td>9.000</td></tr>
        <tr><td>16:05</td><td>BS. Kha</td><td>1 cà phê sữa</td><td>2.000</td></tr>
        <tr><td>17:10</td><td>bà Tư Lài, mẹ BN phòng 5</td><td>1 tô cháo tôm, 1 bánh bò</td><td>6.000</td></tr>
      </table>
    </div>`,
  },

  {
    id: "anh_tay", stage: 2, kind: "Ảnh", icon: "🖼", label: "Hai tấm ảnh bàn tay",
    html: () => `
    <div class="doc doc--plain">
      <div class="compare">
        ${pic("tay_nhan_1995", "Thảo giữ trong ví: tay mẹ đạp máy may, năm 1995.")}
        ${pic("tay_1996", "Y tá Sương chụp ở căng tin ngày 12/10/1996.")}
      </div>
      <p class="note">Mặt sau tấm ảnh 1995, Thảo chép lại dòng chữ trên ảnh cưới của cha mẹ: “Minh – Hoa, rằm tháng Giêng năm Ất Tỵ”. Ông Minh mất năm 1975. Theo lời Thảo và hàng xóm, bà chưa từng tháo nhẫn cưới.
        Bà Hoa hiện nay nói đã “đánh rơi nhẫn ở bến xe Miền Đông”.</p>
    </div>`,
  },

  {
    id: "bang_tuoi", stage: 2, kind: "Lịch", icon: "📅", label: "Lịch bloc 1996 ở phòng trực: trang tra năm âm lịch",
    html: () => {
      const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
      const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
      const cell = (y) => `<td>${y}<br><small>${can[(y - 4) % 10]} ${chi[(y - 4) % 12]}</small></td>`;
      const rows = [];
      for (let y = 1930; y < 1990; y += 6) rows.push(`<tr>${[0, 1, 2, 3, 4, 5].map((i) => cell(y + i)).join("")}</tr>`);
      return `
    <div class="doc doc--plain">
      <p class="note">Tờ cuối cuốn lịch bloc treo ở phòng trực khoa Nữ 2, in sẵn bảng tra tuổi.</p>
      <table class="tbl">${rows.join("")}</table>
    </div>`;
    },
  },

  {
    id: "ba_tu", stage: 2, kind: "Lời khai", icon: "✍", label: "Lời bà Tư hàng xóm và chuyện con Mực",
    html: () => `
    <div class="doc doc--memo">
      <p class="note">Y tá Sương ghi lại khi về thăm nhà Thảo theo lời nhờ của bác sĩ Vân.</p>
      ${hand(`<p>Bà Tư, nhà sát vách: ${ln("bt_sua", "“Từ hôm chị Hoa ở Sài Gòn về, con Mực sủa chỉ suốt, gầm gừ, không cho lại gần. Con chó đó theo chỉ mười năm, chỉ đi đâu nó theo đó.”")}</p>
        <p>${ln("bt_ba", "“Hồi tháng Bảy nhà tui có rải bả chuột ngoài vườn, mà tui dọn sạch từ bữa mười lăm tháng Bảy rồi, con Mực không có qua vườn tui.”")}</p>
        <p>${ln("bt_thit", "“Tối mồng tám tháng Tám tui thấy chỉ ra sau hè, ngồi chồm hổm chỗ con Mực nằm một hồi lâu. Sáng ra nó chết, ói bọt trắng.”")}</p>
        <p>“Tết nào chỉ cũng làm một mâm bánh ít nhân tôm chấy biếu xóm: tôm khô giã tơi, rang khô, màu hồng cam, ăn mằn mặn. Chỉ làm chứ chỉ không đụng miếng nào.”</p>
        <p>“Chỉ về rồi chỉ nói chuyện lạ lắm, có bữa chỉ gọi tui là ‘chị Tư’, trước giờ chỉ kêu tui là ‘o Tư’.”</p>`, "")}
      ${pic("cho_muc", "Ảnh bà Tư chụp sáng 9/8/1996.")}
    </div>`,
  },

  tape("tham_1", 2, "Băng buổi thăm nuôi thứ Bảy 12/10", "Ghi âm theo quy định thăm nuôi có giám sát."),
  tape("hoi_3", 2, "Băng: hỏi chuyện Thảo (18/10)", "Bác sĩ Vân hỏi Thảo về con chó."),
  tranh(3, 2, "Tranh Thảo vẽ đêm 18/10", "Con chó đen nằm nghiêng, bọt trắng ở miệng. Một bàn tay áo nâu cầm cái chén phía trên."),
];
