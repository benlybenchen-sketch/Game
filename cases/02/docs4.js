// Case 02, fifth folder (after question 4): the poison register, the identity cards, the hospital.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { signature } from "./art.js";

const CARDS = [
  ["Lê Văn Thông", "14/3/1958", "Phú Lễ, Cửu Giang", "Nốt ruồi son cách 1 cm dưới đuôi mắt trái. Sẹo ngang mu bàn tay trái."],
  ["Đoàn Văn Lợi", "2/6/1964", "Mỏ Cày, Cửu Giang", "Nốt ruồi son cách 1 cm dưới đuôi mắt phải."],
  ["Phan Văn Hòa", "9/11/1974", "Phú Lễ, Cửu Giang", "Nốt ruồi son dưới đuôi mắt trái."],
  ["Huỳnh Văn Chánh", "1/1/1943", "Giồng Cát, Cửu Giang", "Sẹo ngang mu bàn tay trái. Nốt ruồi đen trên cánh mũi phải."],
  ["Lâm Tấn Phát", "20/5/1969", "Phú Lễ, Cửu Giang", "Sẹo dài 3 cm ở cằm."],
  ["Trần Văn Lửa", "3/2/1971", "An Hội, Cửu Giang", "Nốt ruồi son dưới đuôi mắt trái. Sẹo dọc mu bàn tay trái, dài 4 cm."],
  ["Đặng Văn Bé", "1923", "Phú Lễ, Cửu Giang", "Sẹo chấm cách 2 cm dưới đuôi mắt trái. (Lăn tay, không ký)"],
];

export default [
  {
    id: "so_thuoc_doc", stage: 4, kind: "Sổ", icon: "☰", label: "Sổ bán thuốc độc bảng A, tiệm Vạn An Đường",
    html: () => `
    <div class="doc doc--ledger doc--handwritten">
      <h2 class="form-title">VẠN AN ĐƯỜNG · THUỐC BẮC · 27 ĐƯỜNG BẾN ĐÒ, THỊ XÃ CỬU GIANG<br><small>Sổ bán thuốc độc bảng A · tháng 9/1993 (bản chụp)</small></h2>
      <table class="tbl tbl--hand">
        <tr><th>Ngày</th><th>Tên thuốc</th><th>Lượng</th><th>Người mua</th><th>Địa chỉ</th><th>Ký nhận</th></tr>
        <tr><td>6/9</td><td>Phụ tử chế</td><td>30 g</td><td>Lò Văn Kiên</td><td>Chợ Lách</td><td>${hand("Kiên", "inline sig")}</td></tr>
        <tr><td>11/9</td><td>Hạt mã tiền chế</td><td>10 g</td><td>Nguyễn Thị Sáu</td><td>An Hội</td><td>${hand("Sáu", "inline sig")}</td></tr>
        <tr class="red"><td>1<span class="smudge" style="display:inline-block;width:.55em;height:1em;margin:0 1px 0 3px;vertical-align:middle"></span>/9</td><td>Hạt mã tiền chế (tán bột)</td><td>20 g</td><td>Đặng Văn Bé</td><td>ấp Phú Lễ, Cồn Ngựa</td><td>${signature()}</td></tr>
        <tr><td>23/9</td><td>Thạch tín</td><td>5 g</td><td>Trại heo Tư Bền</td><td>Giồng Cát</td><td>${hand("Bền", "inline sig")}</td></tr>
      </table>
      <p class="small muted">Ghi chú của cán bộ: dòng này bị nước làm nhòe, chữ số thứ hai của ngày không đọc được; sổ ghi theo thứ tự ngày; không ghi số chứng minh nhân dân, ô ký nhận có chữ ký “Bé” bằng bút bi xanh, nét kéo dài.</p>
    </div>`,
  },

  {
    id: "lk_duoc_si", stage: 4, kind: "Lời khai", icon: "✎", label: "Lời khai người bán thuốc ở Vạn An Đường",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>CÔNG AN TỈNH CỬU GIANG<br><b>CÔNG AN THỊ XÃ CỬU GIANG</b></div><div><i>Ngày 4/10/1993</i></div></div>
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Người khai: <b>Quách Bửu Lai</b>, 51 tuổi, chủ tiệm thuốc bắc Vạn An Đường.</p>
      <p>${ln("lai_1", "Một chiều thứ Bảy giữa tháng Chín, ngày nào tôi không nhớ, có một người đàn ông chừng ba mấy tuổi tới mua hai chục gam mã tiền chế, nhờ tán thành bột. Nói mua cho ông già trị phong thấp.")}</p>
      <p>${ln("lai_2", "Tôi đòi chứng minh, ổng nói để quên ở nhà, xưng tên Đặng Văn Bé, ở Phú Lễ. Tôi nể nên bán, bắt ký sổ. Ổng ký bằng tay phải, ký lẹ lắm.")}</p>
      <p>${ln("lai_3", "Tôi nhớ rõ mặt ổng: dưới đuôi con mắt bên trái có một nốt ruồi son đỏ chót. Lúc ổng đưa tiền bằng tay trái, tôi thấy trên mu bàn tay trái có một cái sẹo nằm ngang.")}</p>
      <p>${ln("lai_4", "Giọng ổng ồ, nói chuyện nghe như ca. Tôi nghĩ ổng là dân hát, vì tuần đó có gánh hát bội về rạp Hưng Ca gần tiệm.")}</p>
      <p>${ln("lai_5", "Ổng không phải ông già. Ông Bé gì đó mà bảy chục tuổi thì tôi không có bán.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Lai", "sign")}</div><div>Cán bộ ghi<br>${hand("Khoa", "sign")}</div></div>
    </div>`,
  },

  {
    id: "giay_ra_vien", stage: 4, kind: "Giấy tờ", icon: "✚", label: "Giấy ra viện của ông Đặng Văn Bé",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>SỞ Y TẾ CỬU GIANG<br><b>BỆNH VIỆN HUYỆN MỎ CÀY</b></div><div><b>GIẤY RA VIỆN</b><br>Số 1907/RV</div></div>
      <p>Họ tên người bệnh: <b>Đặng Văn Bé</b>, 70 tuổi, nam. Địa chỉ: ấp Phú Lễ, Cồn Ngựa.</p>
      <p>Vào viện: <b>8 giờ ngày 16/9/1993</b>. Ra viện: <b>14 giờ ngày 20/9/1993</b>.</p>
      <p>Chẩn đoán: ho ra máu, theo dõi lao phổi. Người bệnh nằm phòng 4, giường 11, có chích thuốc ngày hai lần, không rời viện.</p>
      <p>Người nhà nuôi bệnh: Trương Thị Hên.</p>
      <div class="sign-row"><div>Người bệnh<br><span class="fingerprint"></span><br><small>(điểm chỉ)</small></div><div>Trưởng khoa<br>${hand("Hạnh", "sign")}</div></div>
      ${stamp("BỆNH VIỆN<br>HUYỆN<br>MỎ CÀY", "right:40px;bottom:30px", "blue")}
      <p class="small muted">Mỏ Cày cách thị xã Cửu Giang hai chuyến đò và ba chục cây số đường đất.</p>
    </div>`,
  },

  {
    id: "cmnd", stage: 4, kind: "Giấy tờ", icon: "☰", label: "Chứng minh nhân dân của bảy người đàn ông trong gánh (bản sao)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bản sao mặt sau chứng minh nhân dân, công an huyện thu khi lập danh sách gánh hát. Mục “dấu vết riêng và dị hình” ghi như sau.</p>
      <div class="cards">${CARDS.map(([n, b, q, mark]) => `
        <div class="idcard"><div class="idcard-h">CHỨNG MINH NHÂN DÂN · mặt sau</div>
          <div><b>${n}</b> · sinh ${b} · ${q}</div>
          <div class="idcard-mark"><small>DẤU VẾT RIÊNG VÀ DỊ HÌNH</small><br>${mark}</div>
          <div class="idcard-f"><span class="fingerprint"></span><span class="fingerprint"></span></div></div>`).join("")}</div>
    </div>`,
  },

  {
    id: "lich_luu_dien", stage: 4, kind: "Giấy", icon: "☰", label: "Lịch lưu diễn tháng 9/1993 của gánh",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">LỊCH LƯU DIỄN GÁNH PHƯỚC HƯNG BAN · THÁNG 9/1993<br><small>Sổ của bà bầu Tư Lựu</small></h2>
      <table class="tbl">
        <tr><th>Ngày</th><th>Nơi diễn</th><th>Ghi chú</th></tr>
        <tr><td>1–12/9</td><td>Chợ Lách, An Hội</td><td></td></tr>
        <tr><td>13–15/9</td><td>Nghỉ ở Phú Lễ</td><td></td></tr>
        <tr><td><b>16–20/9</b></td><td><b>Rạp Hưng Ca, thị xã Cửu Giang</b></td><td>Cả gánh ở trọ sau rạp. Ông Sáu nằm viện Mỏ Cày, dì Bảy đi nuôi. Chiều nào cũng nghỉ, anh em đi chợ thị xã</td></tr>
        <tr><td>21–24/9</td><td>Giồng Cát</td><td></td></tr>
        <tr><td>25–27/9</td><td>Đình Phú Lễ</td><td>Ba đêm giỗ Tổ</td></tr>
      </table>
      <p class="small muted">Rạp Hưng Ca cách tiệm Vạn An Đường một con đường.</p>
    </div>`,
  },
];
