// Case 05, visits 1 and 2 (19 and 21/12/1991): the health station's files, the neighbour, the first time inside.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";

/** A recording in a document. */
export const tape = (id, stage, label, note, extra = {}) => ({
  id, stage, kind: "Băng ghi âm", icon: "▶", label, ...extra,
  html: () => `<div class="doc doc--plain"><p class="note">${note}</p>${media("tape", id)}</div>`,
});
/** A page of Vân's internship diary. */
export const diary = (id, stage, label, picture, body) => ({
  id, stage, kind: "Nhật ký thực tập", icon: "✎", label,
  html: () => `<div class="doc doc--notebook">${picture ? pic(picture[0], picture[1]) : ""}${hand(body)}<p class="right">${hand("Vân", "sign")}</p></div>`,
});

export default [
  {
    id: "loi_dan", stage: 0, kind: "Thư", icon: "✉", label: "Thư giao việc của y sĩ Lò Văn Sinh",
    html: () => `
    <div class="doc doc--memo">
      <div class="memo-head"><b>TRẠM Y TẾ THỊ TRẤN CAM ĐƯỜNG</b> · Sở Y tế Lào Cai (tái lập 1/10/1991)</div>
      ${pic("cam_duong", "Thị trấn Cam Đường, sáng sương muối tháng 12/1991.")}
      <p>Cô Vân,</p>
      <p>Tỉnh mới tách, sở mới lập, việc nhiều mà người ít. Đợt rà soát bệnh lao cuối năm, tỉnh bắt mỗi trạm phải <b>khám tận nơi</b> mọi người có tên trong danh sách nghi lao mà chưa khám. Trạm mình còn đúng một người: <b>bà Phạm Thị Hằng</b>, nhà ông Khải hiệu ảnh, sau chợ.</p>
      <p>Tôi giao cô ca này cho hết đợt thực tập. Nói trước để cô khỏi bỡ ngỡ: nhà ấy khổ. Bà Hằng ốm nằm buồng gần hai năm nay, không tiếp ai, ông Khải từ ngày vợ ốm thì sinh rượu, hơi dở người. Con gái là cháu Ngân, lớp 9, ngoan lắm, một tay chăm mẹ.</p>
      <p>Trạm đã đến ba lần, lần nào cũng chỉ đứng ở cửa. Cô là con gái, lại trẻ, may ra cháu Ngân cho vào.</p>
      <p>Hồ sơ tôi để trên bàn: danh sách lao, đơn của bà Lụa hàng xóm, công văn của trường cấp 2, sơ đồ nhà bên địa chính cho mượn.</p>
      <p class="right">${hand("Sinh", "sign")}<b>Y sĩ Lò Văn Sinh</b><br>Trạm trưởng</p>
    </div>`,
  },

  {
    id: "ds_lao", stage: 0, kind: "Sổ sách", icon: "§", label: "Danh sách rà soát bệnh lao 1990–1991 (trích)",
    html: () => `
    <div class="doc doc--ledger">
      <div class="report-head">TRẠM Y TẾ CAM ĐƯỜNG · CHƯƠNG TRÌNH CHỐNG LAO<br>DANH SÁCH NGHI LAO, CHƯA KHÁM (trích dòng số 7)</div>
      <table class="tbl tbl--ledger">
        <tr><th>Họ tên</th><th>Tuổi</th><th>Địa chỉ</th><th>Lý do ghi tên</th></tr>
        <tr><td><b>Phạm Thị Hằng</b></td><td>41 (sinh 1948)</td><td>Nhà ông Đỗ Văn Khải, sau chợ</td><td>${ln("ds_ly", "Chồng khai “ho lâu, khó thở, nằm buồng” khi đưa con gái đi khâu tay ngày 5/1/1990.")}</td></tr>
      </table>
      <table class="tbl tbl--hand">
        <tr><th>Ngày đến</th><th>Kết quả</th></tr>
        <tr><td>12/3/1990</td><td>${ln("ds_1", "Người nhà (cháu Ngân) nói mẹ đi Hà Nội chữa bệnh chưa về. Không khám được.")}</td></tr>
        <tr><td>9/10/1990</td><td>${ln("ds_2", "Mẹ đã về nhưng yếu, nằm buồng, sợ gió. Người nhà từ chối mở cửa.")}</td></tr>
        <tr><td>14/6/1991</td><td>${ln("ds_3", "Như trên. Nghe tiếng ho trong nhà. Không khám được.")}</td></tr>
      </table>
      <p class="note">${ln("ds_tim", "Tiền sử ghi ở trạm: bệnh tim (hở van hai lá) từ 1985, khám định kỳ ở trạm 3 tháng một lần. Lần khám cuối cùng ở trạm: 15/11/1989.")}</p>
      <p class="small">Ghi chú của y sĩ Sinh: chưa ai ở trạm trực tiếp nhìn thấy bà Hằng từ sau lần khám tim tháng 11/1989.</p>
      ${stamp("CHƯA KHÁM", "right:24px;top:34px", "red")}
    </div>`,
  },

  {
    id: "don_lua", stage: 0, kind: "Đơn", icon: "✉", label: "Đơn phản ánh của bà Trịnh Thị Lụa (11/1991)",
    html: () => `
    <div class="doc doc--letter">
      <p class="right">Cam Đường, ngày 18 tháng 11 năm 1991</p>
      <p><b>ĐƠN PHẢN ÁNH</b><br>Kính gửi: Trạm y tế thị trấn, Công an thị trấn</p>
      <p>Tôi là Trịnh Thị Lụa, 62 tuổi, bán nước chè ở chợ, nhà sát vách nhà ông Đỗ Văn Khải. Tôi viết đơn này không phải để kiện cáo gì, chỉ vì thương nhà ấy.</p>
      <p>${ln("dl_mui", "Hai năm nay nhà ông Khải lúc nào cũng có một mùi hắc, cay mắt. Mùi nặng nhất là ở bức vách sau bếp nhà tôi, chỗ giáp với nhà ông ấy.")}
        ${ln("dl_toi", "Không phải chỗ buồng tối ông ấy rửa ảnh đâu, buồng tối ở tít đầu kia, đằng sau hiệu ảnh, mùi ở đấy khác.")}</p>
      <p>${ln("dl_huong", "Hương thì đốt cả ngày lẫn đêm, không lúc nào tắt.")} ${ln("dl_ho", "Đêm tôi nghe tiếng ho bên kia vách, mà ban ngày thì không thấy ai.")}</p>
      <p>${ln("dl_lan", "Lần cuối tôi nhìn thấy cô Hằng là chiều thứ Sáu 22/12/1989, hôm đông chí, cô ra giếng sau nhà múc nước, đi mấy bước lại phải đứng thở.")} Cô còn bảo tôi: “Bác ơi, mai nhà em đi Hà Nội về, em nhờ bác trông hộ con Ngân nhé.” Từ đấy tôi không gặp cô nữa.</p>
      <p>Tôi xin trạm và công an đến xem giúp.</p>
      <p class="right">Người làm đơn<br>${hand("Lụa", "sign")}Trịnh Thị Lụa</p>
    </div>`,
  },

  {
    id: "cv_truong", stage: 0, kind: "Công văn", icon: "§", label: "Công văn của trường cấp 2 Cam Đường",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">TRƯỜNG PHỔ THÔNG CƠ SỞ CAM ĐƯỜNG<br>Số 31/CV · V/v cô giáo Phạm Thị Hằng</div>
      <p>Kính gửi Trạm y tế thị trấn. Theo đề nghị của trạm, nhà trường xin báo:</p>
      <p>${ln("cv_cuoi", "Cô Phạm Thị Hằng, giáo viên Văn, lên lớp lần cuối vào sáng thứ Sáu 22/12/1989 (tiết 4, lớp 7A), theo sổ đầu bài.")}</p>
      <table class="tbl">
        <tr><th>Ngày nhận</th><th>Giấy tờ</th><th>Người mang đến</th></tr>
        <tr><td>26/12/1989</td><td>Giấy xin nghỉ ốm 2 tuần, viết tay</td><td>${ln("cv_mang1", "Cháu Ngân, con gái")}</td></tr>
        <tr><td>8/1/1990</td><td>Giấy xin nghỉ tiếp, đi Hà Nội chữa tim</td><td>Cháu Ngân</td></tr>
        <tr><td>20/8/1990</td><td>Đơn xin nghỉ không lương năm học 1990–1991</td><td>Cháu Ngân</td></tr>
        <tr><td>25/8/1991</td><td>Đơn xin gia hạn nghỉ không lương</td><td>Cháu Ngân</td></tr>
      </table>
      <p>${ln("cv_gap", "Ban giám hiệu đã ba lần xin đến thăm cô Hằng, gia đình đều xin hẹn dịp khác vì cô yếu.")} Cô Đinh Thu Hà, chủ nhiệm lớp 9 của cháu Ngân, cũng đang muốn gặp phụ huynh.</p>
      <p class="right">Hiệu trưởng<br>(đã ký)</p>
      ${stamp("PTCS CAM ĐƯỜNG", "right:30px;bottom:24px", "violet")}
    </div>`,
  },

  {
    id: "so_do", stage: 0, kind: "Sơ đồ", icon: "⌂", label: "Sơ đồ thửa đất và nhà ông Khải (địa chính, 1988)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bản vẽ của địa chính thị trấn năm 1988, khi ông Khải xin mở hiệu ảnh. Bấm vào một gian để đánh dấu chỗ bà Lụa nói mùi nặng nhất.</p>
      ${media("map", "nha")}
    </div>`,
  },

  diary("nk_1", 0, "Nhật ký thực tập: chiều 19/12", ["hieu_anh", "Hiệu ảnh nhà ông Khải, chiều 19/12/1991."], `
    <p>Thứ Năm 19/12/1991. Ngày đầu tiên một mình đi khám tận nhà.</p>
    <p>Hiệu ảnh đóng cửa. Biển gỗ đề “ẢNH HẰNG”, sơn đã tróc. Bậc cửa có lon sữa bò cắm hương. Tôi gõ cửa ba lần.</p>
    <p>Bên trong có tiếng ho, ho khan, từng tràng. Rồi im. Mấy giây sau mới có tiếng chân chạy ra.</p>
    <p>Cửa hé một khe. Một cô bé mặc áo len xám, má đỏ, thở hơi gấp: “Cháu chào cô. Mẹ cháu ngủ rồi ạ. Bố cháu đi vắng.”</p>
    <p>Tôi xin hẹn thứ Bảy quay lại. Cô bé cười rất ngoan, nói “vâng ạ”, rồi đóng cửa. Tôi nghe tiếng then cài hai lần.</p>
    <p>Lúc về, bà Lụa bán nước ở đầu ngõ vẫy tôi lại. Bà bảo: “Cháu là người đầu tiên con Ngân chịu hẹn đấy.”</p>`),
];
