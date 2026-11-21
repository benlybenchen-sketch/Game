// Case 05: the meeting of 30/12 (stage 6), the good ending (stage 7), the hidden ending, and the bad ending (fail).
import { ln, stamp, pic, hand } from "../../js/kit.js";
import { state } from "../../js/store.js";
import { tape } from "./docs0.js";

/** What happened that night after a wrong decision; keyed by the first words of the chosen option. */
const LOST = {
  A: "Ông Khải được đưa về đồn lúc 19 giờ. Cháu Ngân ngủ nhờ nhà bà Lụa, bà Lụa thức trông tới nửa đêm. Khoảng 0 giờ 30, cháu Ngân lẻn qua sân sau về nhà, vào bếp.",
  B: "Lúc 16 giờ, cán bộ bóc băng keo, mở cửa buồng trong trước mặt hai cha con. Cháu Ngân không khóc. Đêm đó cháu ngủ ở nhà với bố, cán bộ trạm ngồi gian giữa. Khoảng 1 giờ, cháu Ngân đi xuống bếp.",
  C: "Lúc 17 giờ, y sĩ Sinh nói với cháu Ngân rằng mẹ cháu đã mất hai năm. Cháu Ngân cười, nói “vâng, cháu biết rồi ạ”, rồi xin đi ngủ sớm. Cán bộ trạm ngồi ở gian giữa đến sáng, không nghe thấy gì.",
  D: "Cán bộ trạm thu 10 cân than ở gian giữa, hẹn sáng mai đưa cháu Ngân lên viện tỉnh. Cán bộ trạm ngồi ở gian giữa đến sáng. Nhà tắt đèn từ 20 giờ, không có gì lạ.",
  F: "19 giờ 40, cháu Ngân được đưa lên viện tỉnh, ông Khải đi cùng, ngồi cạnh con. Khoảng 23 giờ, cháu Ngân nói muốn về thắp hương cho mẹ. Ông Khải là bố, ký giấy xin cho con về; không ai giữ được. 0 giờ 30, hai bố con về tới nhà.",
  G: "Ông Khải được đưa lên viện tỉnh lúc 19 giờ. Cán bộ trạm thu 10 cân than ở gian giữa rồi thức ở đó đến sáng, không nghe thấy gì. Cửa buồng trong vẫn nguyên băng keo.",
};
const lostKey = () => {
  const c = state.failed?.choice || "";
  return ["A", "B", "C", "D", "F", "G"].find((k) => c.startsWith(k)) || "A";
};

export default [
  {
    id: "bien_ban_hop", stage: 6, kind: "Biên bản", icon: "§", label: "Biên bản họp ở trạm, 15 giờ ngày 30/12/1991",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">TRẠM Y TẾ CAM ĐƯỜNG · BIÊN BẢN HỌP<br>V/v gia đình ông Đỗ Văn Khải · 15 giờ 00 ngày 30/12/1991</div>
      <p>Có mặt: y sĩ Lò Văn Sinh (trạm trưởng), trung uý Phùng Quang Bảo (công an thị trấn), sinh viên thực tập Lê Bích Vân.</p>
      <p>Trung uý Bảo trình bày: ${ln("bh_bao", "có đủ căn cứ ông Khải cất giấu thi thể vợ. Đề nghị tối nay đưa ông Khải về đồn; cháu Ngân ngủ nhờ nhà bà Lụa; sáng 31/12 mở buồng.")}</p>
      <p>${ln("bh_qua", "Trung uý Bảo cho rằng không có gì phải vội: ngày mất của bà Hằng là 22/12 (đông chí), đã qua tám hôm mà không có chuyện gì.")}</p>
      <p>Y sĩ Sinh: đồng ý về nguyên tắc. ${ln("bh_sinh", "Đề nghị sinh viên Vân, người đã đọc toàn bộ hồ sơ gia đình, đưa ra phương án cho đêm nay. Trạm sẽ làm theo.")}</p>
      <p>Phương án được đưa ra để chọn:</p>
      <ol type="A">
        <li>Ông Khải về đồn tối nay; cháu Ngân ngủ nhờ nhà bà Lụa, có người lớn trông; thu than ở gian giữa; sáng mai mở buồng.</li>
        <li>Mở buồng ngay chiều nay; có công an chứng kiến; thu than ở gian giữa; tối nay hai cha con ở nhà với cán bộ trạm.</li>
        <li>Thầy Sinh nói thật với cháu Ngân rằng mẹ đã mất; thu than ở gian giữa; chưa mở buồng; cán bộ trạm ở lại trông nhà.</li>
        <li>Thu than ở gian giữa; chưa mở buồng; sáng mai đưa cháu Ngân lên viện tỉnh; đêm nay cán bộ trạm ở lại trông nhà.</li>
        <li>Tối nay đưa cháu Ngân lên viện tỉnh, có người ngồi cạnh; thu than ở gian giữa; chưa mở buồng; ông Khải ở nhà.</li>
        <li>Tối nay đưa cháu Ngân lên viện tỉnh, có bố ngồi cạnh; thu than ở gian giữa; chưa mở buồng; cán bộ trạm trông nhà.</li>
        <li>Tối nay đưa ông Khải lên viện tỉnh; thu than ở gian giữa; chưa mở buồng; cháu Ngân ngủ ở nhà, cán bộ thức canh.</li>
      </ol>
      <p class="small">Biên bản dừng ở đây, chờ ý kiến của sinh viên Vân.</p>
    </div>`,
  },
  tape("bang_hop", 6, "Băng: cuộc họp ở trạm chiều 30/12", "Thầy Sinh bật máy ghi âm của trạm để làm biên bản."),

  // ---------------------------------------------------------------- the good ending
  {
    id: "bb_dem", stage: 7, kind: "Biên bản", icon: "§", label: "Biên bản đêm 30/12/1991",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">TRẠM Y TẾ CAM ĐƯỜNG · BIÊN BẢN SỰ VIỆC · đêm 30 rạng sáng 31/12/1991</div>
      <p>19 giờ 40: cháu Đỗ Thị Ngân được đưa lên khoa tâm thần Bệnh viện tỉnh Lào Cai bằng xe của công an, có y sĩ Sinh và sinh viên Vân đi cùng. Cháu không chống cự. Trên xe cháu chỉ hỏi một câu: “Ai ngủ với mẹ cháu?”</p>
      <p>20 giờ 30: cán bộ trạm thu 10 cân than hoa và một lò than tại nhà ông Khải. Không phá cửa buồng; bao than năm cân Ngân mang vào buồng vẫn nằm sau cánh cửa dán kín, không ai đốt.</p>
      <p>Cả đêm, ông Khải ngồi một mình ở gian giữa. Cán bộ trạm ngồi ở hiệu ảnh.</p>
      <p>5 giờ 50 sáng 31/12: ông Khải tự bóc băng keo cửa buồng trong, rồi ra trạm báo tin vợ ông mất.</p>
      ${pic("buong_mo", "Căn buồng trong, sáng 31/12/1991.")}
      ${stamp("ĐÃ XỬ LÝ", "right:26px;top:40px", "blue")}
    </div>`,
  },
  {
    id: "so_tay_cuoi", stage: 7, kind: "Sổ tay", icon: "📓", label: "Sổ tay ông Khải, trang cuối",
    html: () => `<div class="doc doc--notebook">${hand(`
      <p><b>31/12/1991, 3 giờ sáng.</b></p>
      <p>Không có ai ho.</p>
      <p>Hai năm nay, lần đầu tiên không có ai ho.</p>
      <p>Tôi bóc băng keo ra rồi. Hằng ơi.</p>`)}</div>`,
  },
  {
    id: "thu_ngan", stage: 7, kind: "Thư", icon: "✉", label: "Thư của Ngân gửi cô Vân, 1993",
    html: () => `
    <div class="doc doc--letter">
      <p class="right">Khoa Tâm thần, Bệnh viện Bạch Mai, ngày 2 tháng 4 năm 1993</p>
      <p>Cô Vân ơi,</p>
      <p>Bác sĩ bảo em viết thư cho người nào em muốn cảm ơn. Em viết cho cô.</p>
      <p>Bây giờ em biết mẹ mất rồi. Mẹ mất đêm hai mươi lăm tháng Một, lúc em bịt tai. Em vẫn không tha cho mình được. Bác sĩ bảo không cần tha ngay, cứ sống đã.</p>
      <p>Bố lên thăm em mỗi tháng. Bố bỏ rượu rồi. Bố chụp cho em một kiểu ảnh, quay mặt ra, không quay lưng.</p>
      <p>Em không ho nữa cô ạ.</p>
      <p class="right">Em, Ngân</p>
    </div>`,
  },
  {
    id: "nk_cuoi", stage: 7, kind: "Nhật ký thực tập", icon: "✎", label: "Nhật ký thực tập: trang cuối",
    html: () => `<div class="doc doc--notebook">${hand(`
      <p>Ngày cuối thực tập ở Cam Đường, 3/1/1992.</p>
      <p>Thầy Sinh hỏi tôi ra trường định theo ngành gì. Tôi nói nội.</p>
      <p>Trên tàu về Hà Nội, tôi gạch chữ “nội” trong sổ, viết lại.</p>
      <p><b>Tôi sẽ học tâm thần.</b></p>`)}<p class="right">${hand("Vân", "sign")}</p></div>`,
  },
  tape("bang_buong", 7, "Băng tự ghi: buồng trong đã trống, đêm 2/1/1992", "Vân xin để máy ghi âm trong buồng trống một đêm, trước khi trả máy cho trạm. Không ai biết vì sao Vân làm vậy.", { secret: true }),

  // ---------------------------------------------------------------- the bad ending (only after a wrong decision)
  {
    id: "bb_su_viec", stage: 8, fail: true, kind: "Biên bản", icon: "§", label: "Biên bản sự việc, sáng 31/12/1991",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">CÔNG AN THỊ TRẤN CAM ĐƯỜNG · BIÊN BẢN SỰ VIỆC<br>6 giờ 15 ngày 31/12/1991 · nhà ông Đỗ Văn Khải</div>
      <p>${LOST[lostKey()]}</p>
      <p>6 giờ 15 sáng 31/12, phá cửa buồng trong. Khe cửa chèn chăn kín. Cánh cửa ngách sau chạn bát trong bếp cũng chèn chăn, chốt từ bên trong. Trong buồng có một lò than đã tắt và vỏ một bao than năm cân, mùi khí than rất nặng.</p>
      <p>Phát hiện cháu <b>Đỗ Thị Ngân</b>, 15 tuổi, đã tử vong, nằm nghiêng trên giường, ôm thi thể đã khô của bà <b>Phạm Thị Hằng</b>. Trên tay cháu Ngân có một lọ thuốc trợ tim, nắp đã mở.</p>
      <p>Nguyên nhân sơ bộ: ngộ độc khí than (CO).</p>
      ${stamp("THẤT BẠI", "right:26px;top:50px", "red")}
    </div>`,
  },
  {
    id: "thu_cuoi", stage: 8, fail: true, kind: "Nhật ký", icon: "✿", label: "Dòng cuối trong “Nhật ký chăm mẹ”",
    html: () => `<div class="doc doc--diary">${hand(`<p>Đêm 25 tháng Một.</p><p>Lần này con mở cửa rồi. Mẹ đừng gọi nữa.</p>`, "kid")}</div>`,
  },
  tape("bang_khai_cuoi", 8, "Băng: ông Khải nói với Vân, sáng 31/12", "Thu ở đồn công an thị trấn. Ông Khải xin được nói với cô sinh viên.", { fail: true }),
];
