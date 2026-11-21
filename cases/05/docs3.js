// Case 05, visits 5 and 6 (27 and 30/12/1991): the winter solstice night of 1989, the charcoal, the calendar.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { diary } from "./docs0.js";
import { LUNAR_1989 } from "./lunar.js";

export default [
  diary("nk_5", 4, "Nhật ký thực tập: sọt rác và bao than, 27/12", ["lo_than", "Góc gian giữa, sáng 27/12: lò than, bao than mới, băng keo, chăn gấp."], `
    <p>Thứ Sáu 27/12/1991. Ông Khải say từ sáng, ngủ gục ở hiệu. Ngân đi học.</p>
    <p>Trong góc gian giữa có một bao than hoa mới, ba cuộn băng keo, một cái chăn gấp vuông vức. Lò than đất còn mới, chưa đốt lần nào.</p>
    <p>Bà Lụa cho tôi xem lại sọt rác buồng tối mà bà đổ hộ. Trong đám giấy vụn tôi nhặt được sáu mảnh của một trang vở, xé rất kỹ.</p>
    <p>Trong bao than có kẹp một trang vở khác, gấp tư, chữ của Ngân, dính bụi than.</p>
    <p>Tôi ra ga Lào Cai, nhờ công an trích sổ bán vé, rồi lên trạm tìm lại bệnh án cũ của cô Hằng.</p>`),

  {
    id: "benh_an_1985", stage: 4, kind: "Bệnh án", icon: "✚", label: "Bệnh viện Bạch Mai: bệnh án Phạm Thị Hằng, 1985",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BỆNH VIỆN BẠCH MAI · VIỆN TIM MẠCH<br>GIẤY RA VIỆN (bản sao lưu ở trạm Cam Đường)</div>
      <p>Họ tên: <b>PHẠM THỊ HẰNG</b>, 37 tuổi · Giáo viên · Cam Đường, Hoàng Liên Sơn.</p>
      <p>Chẩn đoán: ${ln("ba_van", "hở van hai lá mức độ vừa, có cơn khó thở kịch phát về đêm.")}</p>
      <p>Dặn dò: ${ln("ba_thuoc", "luôn để thuốc trợ tim ngay đầu giường. Lên cơn khó thở ban đêm phải ngồi dậy, uống thuốc ngay; nếu không có thuốc, cơn có thể gây tử vong trong vòng một giờ.")}</p>
      <p>${ln("ba_mot", "Không nên ở nhà một mình qua đêm.")}</p>
      ${stamp("SAO Y", "right:24px;bottom:22px", "red")}
    </div>`,
  },

  {
    id: "ve_tau", stage: 4, kind: "Sổ sách", icon: "§", label: "Ga Lào Cai: trích sổ bán vé tháng 12/1989",
    html: () => `
    <div class="doc doc--ledger">
      <div class="report-head">GA LÀO CAI · SỔ BÁN VÉ TÀU KHÁCH (bản trích của công an thị trấn)</div>
      <table class="tbl tbl--ledger">
        <tr><th>Ngày</th><th>Tàu</th><th>Hành khách</th><th>Ghi chú</th></tr>
        <tr><td>21/12/1989</td><td>Lào Cai → Hà Nội, tàu đêm</td><td>Đỗ Văn Khải</td><td>Ghế cứng</td></tr>
        <tr><td>22/12/1989</td><td>${ln("vt_ve", "Hà Nội → Lào Cai, tàu đêm, khởi hành 19 giờ, tới Lào Cai 7 giờ sáng 23/12")}</td><td>Đỗ Văn Khải</td><td>Hàng gửi: 2 hộp giấy ảnh</td></tr>
      </table>
      <p class="small">Lời khai của người bán vé (1991): “Ông thợ ảnh Cam Đường thì tôi nhớ. Sáng hôm ấy ông ấy xuống tàu, ôm hai hộp giấy ảnh, vui lắm, bảo mua được giấy Liên Xô.”</p>
    </div>`,
  },

  {
    id: "phieu_khau", stage: 4, kind: "Phiếu", icon: "✚", label: "Trạm y tế: phiếu khâu vết thương cho cháu Ngân, 5/1/1990",
    html: () => `
    <div class="doc doc--form">
      <div class="report-head">TRẠM Y TẾ CAM ĐƯỜNG · SỔ THỦ THUẬT</div>
      <p>5/1/1990, 21 giờ. Đỗ Thị Ngân, 13 tuổi. Người đưa đến: bố.</p>
      <p>${ln("pk_vet", "Vết cắt mặt trong cổ tay trái, dài 4 cm, gọn, sâu, theo chiều ngang. Khâu 6 mũi.")}</p>
      <p>Bố khai: con gái cắt phim, dao cạo trượt.</p>
      <p class="small">${ln("pk_sinh", "Ghi chú của y sĩ Sinh, viết thêm năm 1991 khi đọc lại sổ: “Dao cạo trượt thì không cắt ngang cổ tay trái gọn như thế. Hồi ấy tôi không hỏi. Tôi có lỗi.”")}</p>
    </div>`,
  },

  {
    id: "nhat_ky_xe", stage: 4, kind: "Nhật ký", icon: "✂", label: "Sáu mảnh trang vở trong sọt rác buồng tối",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bấm một mảnh trong khay rồi bấm vào ô trên khung để đặt. Bấm vào mảnh đã đặt để xoay. Bấm “Bỏ ra” để trả mảnh về khay.</p>
      ${media("tear", "trang_xe")}
    </div>`,
  },

  {
    id: "trang_than", stage: 4, kind: "Nhật ký", icon: "✿", label: "Trang vở kẹp trong bao than",
    html: () => `
    <div class="doc doc--diary">${hand(`
      <p>${ln("tt_dem", "Đêm <span class=\"smudge\">██</span> tháng Một, đúng đêm hôm ấy, hai năm.")}</p>
      <p>${ln("tt_ngu", "Cả nhà ngủ cùng mẹ. Bố mua than hoa, đốt lò cho mẹ ấm.")}</p>
      <p>${ln("tt_dong", "Đóng hết cửa, chèn chăn thật kín, không để gió lọt vào.")}</p>
      <p>${ln("tt_xa", "Lần này con không bịt tai nữa. Không ai phải xa ai nữa.")}</p>`, "kid")}
      <p class="note">Ngày tháng bị bụi than làm nhoè, chỉ còn đọc được chữ “tháng Một”. Ở nhà này, như nhiều nhà miền Bắc, giỗ chạp và ngày kỷ niệm đều tính theo <b>âm lịch</b>; “tháng Một” là tháng 11 âm lịch.</p>
    </div>`,
  },

  {
    id: "so_tay_khai_2", stage: 4, kind: "Sổ tay", icon: "📓", label: "Sổ tay ông Khải, những trang tháng 12/1991",
    html: () => `
    <div class="doc doc--notebook">${hand(`
      <p><b>22/12/1991.</b> ${ln("s2_dong", "Đông chí. Hai năm. Ngân không nhắc gì. Tôi cũng không. Chắc qua rồi.")}</p>
      <p><b>26/12/1991.</b> ${ln("s2_than", "Ngân dặn mua than cho đêm mẹ khỏi bệnh. Mua 10 cân than hoa, cái lò mới, ba cuộn băng keo.")} Con vui lắm.</p>
      <p>${ln("s2_hoi", "Đêm mẹ khỏi bệnh là đêm nào? Tôi không dám hỏi.")}</p>`)}
    </div>`,
  },

  {
    id: "hoa_don", stage: 4, kind: "Hoá đơn", icon: "🧾", label: "Phiếu bán hàng của hàng than chợ Cam Đường",
    html: () => `
    <div class="doc doc--form">
      <div class="report-head">HÀNG THAN CỦI BÀ TÁM · CHỢ CAM ĐƯỜNG</div>
      <table class="tbl"><tr><th>Ngày</th><th>Người mua</th><th>Hàng</th><th>Số lượng</th></tr>
        <tr><td>20/12/1991</td><td>${ln("hd_ngan", "cháu gái nhà hiệu ảnh")}</td><td>Than hoa</td><td>5 cân</td></tr>
        <tr><td>26/12/1991</td><td>ông Khải hiệu ảnh</td><td>${ln("hd_than", "Than hoa")}</td><td>10 cân</td></tr>
        <tr><td>26/12/1991</td><td>ông Khải hiệu ảnh</td><td>Lò than đất nung, cỡ to</td><td>1 cái</td></tr></table>
      <p class="small">Bà Tám nói với Vân: “Ông ấy mua gấp đôi mọi năm. Tôi hỏi nhà có cỗ à, ông ấy bảo con gái dặn. Tuần trước con bé ấy cũng ra mua năm cân, trả toàn tiền lẻ, cõng về một mình.”</p>
    </div>`,
  },

  {
    id: "to_roi", stage: 4, kind: "Tờ rơi", icon: "📄", label: "Tờ rơi: phòng ngộ độc khí than mùa rét",
    html: () => `
    <div class="doc doc--news">
      <h3>PHÒNG NGỘ ĐỘC KHÍ THAN MÙA RÉT</h3>
      <p class="small">Sở Y tế Lào Cai · phát cho các trạm, tháng 12/1991</p>
      <p>${ln("tr_co", "Đốt than (than hoa, than tổ ong) trong phòng đóng kín cửa sinh ra khí CO, không màu, không mùi.")}</p>
      <p>${ln("tr_ngu", "Người ngủ trong phòng sẽ lịm dần, không tỉnh dậy được để tự cứu. Mỗi mùa đông vùng cao đều có người chết vì ngủ cạnh lò than.")}</p>
      <p>Không đốt lò trong phòng ngủ. Không chèn kín khe cửa khi có lửa than.</p>
    </div>`,
  },

  {
    id: "lvn_1989", stage: 4, kind: "Sách", icon: "📅", label: "Lịch vạn niên: tháng 12 năm 1989",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">LỊCH VẠN NIÊN 1901–2000 · trang tháng 12 năm 1989 (Kỷ Tỵ)</div>
      <p class="small">Số to là ngày dương lịch. Số nhỏ bên dưới là ngày âm lịch; ngày mồng 1 có ghi tên tháng âm.</p>
      <table class="tbl cal">
        <tr><th>T2</th><th>T3</th><th>T4</th><th>T5</th><th>T6</th><th>T7</th><th>CN</th></tr>
        ${LUNAR_1989.weeks.map((w) => `<tr>${w.map((d) => d ? `<td><b>${d.d}</b><small>${d.l === 1 ? `1/${d.m}` : d.l}</small>${d.note ? `<em>${d.note}</em>` : ""}</td>` : "<td></td>").join("")}</tr>`).join("")}
      </table>
    </div>`,
  },

  // ---------------------------------------------------------------- visit 6
  diary("nk_6", 5, "Nhật ký thực tập: sáng 30/12", null, `
    <p>Thứ Hai 30/12/1991. Tôi đến sớm. Ngân không đi học.</p>
    <p>Ngân vui lắm. Ngân mặc áo len đỏ của mẹ, buộc tóc giống tóc mẹ trong ảnh 1988. Ngân pha trà mời tôi, rồi nói: “Tối nay mẹ cháu khỏi bệnh rồi cô ạ. Cô đừng đến nữa nhé.”</p>
    <p>Bao than mười cân đã được kéo vào sát cửa buồng. Băng keo mới dán thêm một lớp quanh khung cửa sổ gian giữa.</p>
    <p>Tôi hỏi bao than năm cân Ngân mua hôm 20. Ngân cười: “Cháu mang vào cho mẹ rồi. Mẹ cất trong buồng.” Tôi nhìn cửa buồng: băng keo ba lớp, bụi bám đều, không ai bóc.</p>
    <p>Trong bếp, sau cái chạn bát kê lệch, có một cánh cửa ngách nhỏ bằng gỗ thông sang buồng trong. Ông Khải nói cửa ấy đóng đinh từ năm 1990. Mấy cái đinh đã bị nhổ ra, cắm lại vào lỗ cho có. Ông Khải không biết.</p>
    <p>Trên tường bếp treo cuốn lịch bloc của năm 1991, xé dở. Ông Khải nói: “Nhà tôi vẫn xem ngày theo cuốn này. Hằng dặn: giỗ chạp nhà mình tính theo âm.”</p>
    <p>Chiều nay 15 giờ, thầy Sinh họp với trung uý Bảo ở trạm. Thầy dặn tôi phải có mặt.</p>`),

  {
    id: "lich", stage: 5, kind: "Lịch", icon: "📅", label: "Lịch bloc năm 1991 treo ở bếp nhà ông Khải",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Lật từng tờ. Mỗi tờ có ngày dương lịch (số to) và ngày âm lịch (dòng nhỏ). Tìm tờ cần tìm rồi bấm “Khoanh tờ này”.</p>
      ${media("lich", "1991")}
    </div>`,
  },
];
