// Case 04, night shift 1 (Monday 14/10/1996): the file of room 7.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { print, drawing } from "./art.js";
import { doseClass } from "./dose.js";

/** A drawing by Thảo; it blurs with the sedative dose. */
export const tranh = (n, stage, label, note) => ({
  id: `tranh_${n}`, stage, kind: "Tranh vẽ", icon: "✎", label,
  html: () => `<div class="doc doc--plain">${pic(`tranh_${n}`, "", drawing(n), `drawing ${doseClass()}`)}<p class="note">${note}</p></div>`,
});
/** A recording in a document. */
export const tape = (id, stage, label, note) => ({
  id, stage, kind: "Băng ghi âm", icon: "▶", label,
  html: () => `<div class="doc doc--plain"><p class="note">${note}</p>${media("tape", id)}</div>`,
});

export default [
  {
    id: "loi_dan", stage: 0, kind: "Thư", icon: "✉", label: "Lời dặn của BS. Kha cho bác sĩ mới",
    html: () => `
    <div class="doc doc--memo">
      <div class="memo-head">BỆNH VIỆN TÂM THẦN CAM LY · Khoa Nữ 2 · Đà Lạt</div>
      ${pic("benh_vien", "Bệnh viện Tâm thần Cam Ly, tháng 10/1996.")}
      <p>Bác sĩ Vân,</p>
      <p>Chào mừng cô về khoa. Từ đêm nay cô điều trị chính cho phòng 7: Trần Ngọc Thảo, 24 tuổi.</p>
      <p>Ca này không khó về chuyên môn. Bệnh nhân bị hội chứng Capgras sau chấn thương sọ não: tin rằng mẹ mình đã bị một người giống hệt thay thế.
        Bà mẹ, bà Lê Thị Hoa, rất tội nghiệp. Tuần nào cũng vào thăm, mang bánh, khóc ở phòng thăm nuôi.</p>
      <p>Việc gấp: ngày 2/9 bà Hoa đã nộp đơn ra toà xin tuyên bố Thảo mất năng lực hành vi dân sự để làm người giám hộ.
        Toà mở phiên ngày 28/10 và chờ bản giám định pháp y tâm thần của khoa. Người ký với tư cách bác sĩ điều trị là cô. Hạn nộp: sáng 25/10.</p>
      <p>Một lời khuyên: bệnh nhân này hoang tưởng chi tiết hoá. Nó sẽ kể cho cô nghe đủ thứ chi tiết rất thuyết phục. Đừng sa vào.</p>
      <p class="right">${hand("Kha", "sign")}BS. CKII Đặng Quốc Kha<br>Trưởng khoa Nữ 2</p>
    </div>`,
  },

  {
    id: "benh_an", stage: 0, kind: "Bệnh án", icon: "§", label: "Bệnh án nhập viện 20/8/1996",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">SỞ Y TẾ LÂM ĐỒNG · BỆNH VIỆN TÂM THẦN CAM LY<br>BỆNH ÁN NỘI TRÚ · Số 96/312</div>
      <p>Họ tên: TRẦN NGỌC THẢO · Nữ · Sinh 1972 · Nghề: bán hoa, chợ Đà Lạt · Địa chỉ: nhà bà Lê Thị Hoa, đường Phan Đình Phùng, Đà Lạt.</p>
      <p>Vào viện: 9 giờ ngày 20/8/1996. Người đưa vào: mẹ ruột Lê Thị Hoa, 52 tuổi.</p>
      <h4>Lý do vào viện (mẹ khai)</h4>
      <p>${ln("ba_ve", "Bà Hoa đi Sài Gòn thăm họ hàng từ 2/4/1996, về Đà Lạt ngày 5/7/1996.")} ${ln("ba_ngay", "Ngay tối 5/7, con gái nhìn bà rồi hét “bà không phải mẹ”, từ đó không cho mẹ lại gần.")}
        ${ln("ba_cho", "Ngày 9/8 con chó của nhà chết, bệnh nhân khóc, đập phá, nói “bà giết con Mực”.")}</p>
      <h4>Tiền sử</h4>
      <p>${ln("ts_te", "Ngày 15/2/1996 té xe máy ở đèo Prenn, chấn thương sọ não, điều trị ở Bệnh viện Lâm Đồng 10 ngày.")} ${ln("ts_khoa", "Tháng 3/1996, theo mẹ, bệnh nhân có nói người yêu là anh Khoa “là người khác”, sau đó hai người chia tay.")}
        Dị ứng: tôm (nổi mề đay, năm 1990).</p>
      <h4>Khám</h4>
      <p>Tỉnh, tiếp xúc được, định hướng không gian thời gian tốt. Khí sắc lo âu. Hoang tưởng bị thay thế đối với mẹ, nội dung rất chi tiết. Không ảo thanh.</p>
      <h4>Chẩn đoán</h4>
      <p>${ln("cd", "Hội chứng Capgras sau chấn thương sọ não (F06.2)")}</p>
      <p>Y lệnh: Haloperidol 5 mg × 2 lần/ngày. Cách ly phòng 7. Thăm nuôi có giám sát và ghi âm (phục vụ giám định).</p>
      <p class="right">BS. Đặng Quốc Kha</p>
      ${stamp("ĐÃ DUYỆT", "right:28px;top:60px", "blue")}
    </div>`,
  },

  {
    id: "ra_vien", stage: 0, kind: "Giấy ra viện", icon: "✚", label: "Bệnh viện Lâm Đồng: giấy ra viện tháng 2/1996",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BỆNH VIỆN ĐA KHOA LÂM ĐỒNG · KHOA NGOẠI THẦN KINH</div>
      <h3>GIẤY RA VIỆN</h3>
      <p>Họ tên: Trần Ngọc Thảo, 24 tuổi. Vào viện: 15/2/1996 (tai nạn xe máy, đèo Prenn). Ra viện: 25/2/1996.</p>
      <p>Chẩn đoán: ${ln("rv_cd", "Chấn thương sọ não kín. Dập nhẹ thuỳ thái dương phải. Không mổ.")}</p>
      <p>Lời dặn: tái khám sau 1 tháng. Theo dõi rối loạn trí nhớ, rối loạn nhận diện khuôn mặt.</p>
    </div>`,
  },

  {
    id: "giay_cam_doan", stage: 0, kind: "Giấy tờ", icon: "🖐", label: "Giấy cam đoan nhập viện (có điểm chỉ)",
    html: () => `
    <div class="doc doc--report">
      <h3>GIẤY CAM ĐOAN</h3>
      <p>Tôi tên Lê Thị Hoa, mẹ ruột bệnh nhân Trần Ngọc Thảo, đồng ý cho con tôi vào điều trị nội trú tại Bệnh viện Tâm thần Cam Ly và chấp hành mọi quy định của bệnh viện.</p>
      <p>Đà Lạt, ngày 20 tháng 8 năm 1996.</p>
      <div class="fp-sign">${pic("van_tay_xoay", "Dấu điểm chỉ ngón trỏ phải", print("whorl"), "fp-small")}</div>
      <p class="note">Ghi chú của điều dưỡng: ${ln("cd_tay", "người nhà khai tay phải bị đau khớp, không ký được nên điểm chỉ.")}</p>
    </div>`,
  },

  {
    id: "don_toa", stage: 0, kind: "Đơn", icon: "⚖", label: "Đơn gửi Toà án: yêu cầu tuyên bố mất năng lực hành vi",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM · Độc lập – Tự do – Hạnh phúc</div>
      <h3>ĐƠN YÊU CẦU TUYÊN BỐ MỘT NGƯỜI MẤT NĂNG LỰC HÀNH VI DÂN SỰ</h3>
      <p>Kính gửi: Toà án nhân dân thành phố Đà Lạt.</p>
      <p>Tôi tên Lê Thị Hoa, sinh năm 1944, là mẹ ruột của Trần Ngọc Thảo, sinh năm 1972.</p>
      <p>Con tôi bị bệnh tâm thần sau tai nạn, không nhận ra mẹ, không tự lo được cho bản thân, đang điều trị tại Bệnh viện Tâm thần Cam Ly.</p>
      <p>${ln("dt_ts", "Con tôi đứng tên căn nhà và vườn hoa 2.000 m² ở Trại Mát do cha cháu để lại. Hiện có người hỏi mua, cần người đứng ra giao dịch.")}</p>
      <p>Tôi kính đề nghị Toà tuyên bố con tôi mất năng lực hành vi dân sự và cử tôi làm người giám hộ.</p>
      <p class="right">Đà Lạt, ngày 2 tháng 9 năm 1996<br>(điểm chỉ)</p>
      ${stamp("TOÀ ĐÃ NHẬN · phiên 28/10", "right:20px;bottom:24px", "red")}
    </div>`,
  },

  {
    id: "thu_sg_1", stage: 0, kind: "Thư", icon: "✉", label: "Thư bà Hoa gửi từ Sài Gòn, tháng 4/1996",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>Sài Gòn, ngày 6 tháng 4 năm 1996</p>
        <p>Thảo con,</p>
        <p>Mẹ vô tới nơi rồi, xe đò đi mười hai tiếng, mẹ say xe ói mấy lần. Mẹ ở nhà người bà con dưới Khánh Hội, gần bến tàu.</p>
        <p>Con ở nhà nhớ cho con Mực ăn đúng giờ, đừng cho nó ăn đồ lạ. Con nhớ đừng ăn tôm, mẹ dị ứng thì con cũng dị ứng.</p>
        <p>Mẹ có chuyện lớn muốn kể con nghe mà để mẹ về rồi mẹ kể. Mẹ thương con.</p>
        <p class="right">Mẹ</p>`)}
      <p class="note">Thư Thảo cất trong ví. Nét chữ mềm, nghiêng phải. Ký “Mẹ”.</p>
    </div>`,
  },

  {
    id: "anh_tet", stage: 0, kind: "Ảnh", icon: "🖼", label: "Ảnh Tết 1990 Thảo giữ trong ví",
    html: () => `<div class="doc doc--plain">${pic("tet_1990", "Tết Canh Ngọ 1990. Bà Hoa áo dài tím, Thảo 18 tuổi, con Mực.")}
      <p class="note">Mặt sau ảnh, nét chữ Thảo: “Mẹ với con với Mực. Đừng bao giờ đổi.”</p></div>`,
  },
  tape("tet90", 0, "Băng cassette Tết 1990 của nhà Thảo", "Cuộn băng Thảo xin đem theo vào viện. Khoa giữ trong tủ đồ cá nhân."),
  {
    id: "phong7", stage: 0, kind: "Ảnh", icon: "🖼", label: "Phòng 7 qua ô kính lúc 3 giờ sáng",
    html: () => `<div class="doc doc--plain">${pic("phong_7", "Phòng 7, khoa Nữ 2. Bệnh nhân ngồi quay mặt vào góc.")}</div>`,
  },
  tape("hoi_1", 0, "Băng: buổi gặp đầu tiên với Thảo (14/10)", "Khoa ghi âm mọi buổi bác sĩ hỏi chuyện bệnh nhân cách ly."),
  {
    id: "so_thuoc", stage: 0, kind: "Sổ thuốc", icon: "💊", label: "Bảng theo dõi dùng thuốc phòng 7",
    html: () => `<div class="doc doc--report"><div class="report-head">PHIẾU THEO DÕI DÙNG THUỐC · PHÒNG 7 · TRẦN NGỌC THẢO</div>
      ${media("doselog", "p7")}
      <p class="note">Mỗi lần bác sĩ điều trị kết luận, điều dưỡng chỉnh liều theo y lệnh trong ngày.</p></div>`,
  },
  tranh(1, 0, "Tranh Thảo vẽ đêm 14/10", "Thảo vẽ bằng bút sáp, dán lên tường phòng 7. Mặt người đàn bà áo tím bị tô đen tới rách giấy."),
];
