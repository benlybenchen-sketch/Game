// Case 02, second folder (after question 1): the police file.
import { ln, stamp, pic, hand, media, dread } from "../../js/kit.js";
import { deadDog } from "./art.js";

const caHead = (who = "CÔNG AN HUYỆN GIỒNG CÁT") => `<div class="form-head"><div>CÔNG AN TỈNH CỬU GIANG<br><b>${who}</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>`;

export default [
  {
    id: "kq_giam_dinh", stage: 1, kind: "Giám định", icon: "✚", label: "Kết quả giám định độc chất, Viện pháp y",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>BỘ Y TẾ<br><b>VIỆN PHÁP Y PHÂN VIỆN PHÍA NAM</b></div><div><i>Ngày 2/10/1993</i></div></div>
      <h2 class="form-title">KẾT QUẢ XÉT NGHIỆM ĐỘC CHẤT<br><small>Theo yêu cầu của Công an huyện Giồng Cát, công văn số 77/CAH</small></h2>
      <table class="tbl">
        <tr><th>Mẫu</th><th>Mô tả</th><th>Kết quả</th></tr>
        <tr><td>M1</td><td>Dịch dạ dày Châu Văn Kiệt</td><td><b>Dương tính: strychnin</b> (hoạt chất của hạt mã tiền)</td></tr>
        <tr><td>M2</td><td>Chung sứ <b>ở giữa</b> trên bàn Tổ; đáy chung có lớp <b>cặn bột màu xám</b>, khô</td><td><b>Dương tính: strychnin</b>, nồng độ rất cao. Cặn là bột hạt mã tiền chế. <b>Không có cồn</b></td></tr>
        <tr><td>M3, M4</td><td>Chung sứ bên trái và bên phải trên bàn Tổ (đã đổ hết trà)</td><td>Âm tính</td></tr>
        <tr><td>M5</td><td>Bình rượu cúng Tổ (cả gánh uống lúc 17:00)</td><td>Âm tính</td></tr>
        <tr><td>M6</td><td>Nồi cháo còn lại (cả gánh ăn lúc 19:00)</td><td>Âm tính</td></tr>
        <tr><td>M7</td><td>Dạ dày con chó chết sau buồng trò sáng 28/9</td><td><b>Dương tính: strychnin</b>; trong dạ dày có đất bùn lẫn lá trà</td></tr>
        <tr><td>M8</td><td>Hũ rượu thuốc ngâm hạt mã tiền của ông Đặng Văn Bé</td><td>Dương tính: strychnin, <b>dạng ngâm rượu</b>, nồng độ thấp</td></tr>
      </table>
      <p><b>Nhận xét:</b> chất độc trong chung giữa là <b>bột khô</b> rắc vào trà, không phải rượu thuốc đổ vào (không có cồn, không có bã rượu).</p>
      ${stamp("VIỆN<br>PHÁP Y", "right:40px;bottom:24px", "blue")}
    </div>`,
  },

  {
    id: "anh_cho", stage: 1, kind: "Ảnh", icon: "▣", label: "Ảnh con chó chết sau buồng trò, sáng 28/9",
    html: () => `
    <div class="doc doc--plain">
      ${pic("cho_chet", "Ảnh công an huyện chụp lúc 7 giờ 10 sáng 28/9, sau vách buồng trò, đúng chỗ ông Sáu Bé đổ trà trả Tổ.", deadDog())}
      <p class="note">Ghi chú của cán bộ chụp ảnh: <i>“Con chó cứng đơ, bốn chân duỗi thẳng ra sau, cổ ngửa gãy gập về phía lưng. Môi kéo ngược, hở hết răng như đang cười.
        Kiến lửa bò thành dòng vào miệng, ra hai lỗ mũi. Dưới bụng là bãi bùn còn ướt, có lá trà. Mùi tanh lẫn mùi trà.”</i></p>
      ${dread(2, '<p class="note ghost-ink">Trong ảnh, phía sau con chó, chỗ vách lá có một vết bàn tay đỏ. Lúc chụp không ai thấy.</p>')}
    </div>`,
  },

  {
    id: "lk_sau_be", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai ông Sáu Bé (thầy tuồng, giữ bàn Tổ)",
    html: () => `
    <div class="doc doc--form">
      ${caHead()}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 28/9/1993. Người khai: <b>Đặng Văn Bé</b> (Sáu Bé), sinh năm 1923, thầy tuồng gánh Phước Hưng Ban. Cán bộ ghi: Thượng úy Huỳnh Thanh Tâm.</p>
      <p>${ln("be_1", "Tôi theo gánh từ năm mười lăm tuổi. Tôi giữ bàn Tổ, dạy tuồng, vẽ mặt cho các kép, đêm diễn thì đứng cánh gà trái nhắc tuồng.")}</p>
      <p>${ln("be_2", "Đêm 12 tháng 8, chuông đình vừa dứt tôi rót ba chung trà lên bàn Tổ, lạy ba lạy, rồi ra cánh gà ngay vì lớp 2 sắp vô. Từ lúc đó tới hết lớp 3 tôi đứng nhắc tuồng, thằng Năm Chánh đánh trống ngay bên cạnh.")}</p>
      <p>${ln("be_3", "Lúc tôi rót trà, trong buồng trò chỉ có con Thủy nằm ngủ trong góc.")}</p>
      <p>${ln("be_4", "Tôi có ngâm một hũ rượu hạt mã tiền để xoa bóp chân. Hũ để dưới gầm giường tôi, ai trong gánh cũng biết.")}</p>
      <p>${ln("be_5", "Tan hát, thằng Kiệt nằm đó, tôi đổ ba chung trà xuống đất sau vách, trả cho Tổ. Lệ là vậy. Tôi không biết trong trà có độc.")}</p>
      <p>${ln("be_6", "Năm 63 cũng y vậy. Tổ đã bắt một lần. Tôi xin quý anh đừng hỏi chuyện năm 63.")}</p>
      <div class="sign-row"><div>Người khai<br><span class="fingerprint"></span><br><small>(không biết chữ, điểm chỉ)</small></div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
    </div>`,
  },

  {
    id: "lk_nhan", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai Út Nhàn (đào chánh)",
    html: () => `
    <div class="doc doc--form">
      ${caHead()}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 28/9/1993. Người khai: <b>Lý Thị Nhàn</b> (Út Nhàn), 27 tuổi, đào chánh, đóng Cam phu nhân.</p>
      <p>${ln("nhan_1", "Lớp 1 và lớp 2 tôi đều ở trên sân khấu với anh Kiệt. Hết lớp 2, tôi với anh Kiệt cùng vô buồng trò thay đồ.")}</p>
      <p>${ln("nhan_2", "Anh Kiệt thay áo giáp xanh, rồi bưng chung trà ở giữa bàn Tổ uống một hơi. Tôi nhìn đồng hồ treo vách, lúc đó 10 giờ 15. Anh nhăn mặt nói “trà gì đắng nghét”, rồi cười: “Tổ cho uống thì uống”.")}</p>
      <p>${ln("nhan_3", "Ngoài chung trà, từ chiều tới lúc ra lớp 3 anh Kiệt không ăn uống gì nữa. Anh giữ giọng.")}</p>
      <p>${ln("nhan_4", "Lúc tôi với anh Kiệt vô thì buồng trò chỉ có con Thủy, nó trùm mền kín đầu, run cầm cập. Tôi hỏi, nó không nói.")}</p>
      <p>${ln("nhan_5", "Tôi với anh Kiệt có tình cảm. Chuyện đó không liên quan gì. Tôi không hại ảnh.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Nhàn", "sign")}</div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
    </div>`,
  },

  {
    id: "lk_hoa_1", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai Tư Hòa (kép con), lần 1",
    html: () => `
    <div class="doc doc--form">
      ${caHead()}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 28/9/1993. Người khai: <b>Phan Văn Hòa</b> (Tư Hòa), 19 tuổi, kép con. Cán bộ ghi: Thượng úy Huỳnh Thanh Tâm.</p>
      <p>${ln("hoa_1", "Con theo gánh được ba năm, đóng lính cờ, đánh phụ trống.")}</p>
      <p>${ln("hoa_2", "Lớp 1 con cầm cờ đứng sau anh Kiệt. Hết lớp 1 con chùi phấn rồi ra sau.")}</p>
      <p>${ln("hoa_3", "Suốt lớp 2 con ở sau bếp nấu cháo khuya cho gánh, không lên buồng trò, không thấy ai hết.")}</p>
      <p>${ln("hoa_4", "Lớp 3 con lên cầm cờ lại. Anh Kiệt té thì con chạy lên đỡ ảnh.")}</p>
      <p>${ln("hoa_5", "Con không biết gì về trà Tổ. Con đâu dám đụng bàn Tổ.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Hòa", "sign")}</div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
      <p class="small muted">Ghi chú của cán bộ ghi: người khai run, không nhìn thẳng, trả lời ấp úng.</p>
    </div>`,
  },

  {
    id: "lk_hen", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai dì Bảy Hên (nấu ăn cho gánh)",
    html: () => `
    <div class="doc doc--form">
      ${caHead()}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 28/9/1993. Người khai: <b>Trương Thị Hên</b> (Bảy Hên), 55 tuổi, nấu ăn cho gánh.</p>
      <p>${ln("hen_1", "Ba giờ chiều, tôi bắc nồi nước sôi để làm lông vịt. Thằng Ba Thông đi ngang vấp dây, nồi nghiêng, nước sôi đổ ụp lên bàn tay phải của nó.")}</p>
      <p>${ln("hen_2", "Tay nó phồng rộp, tróc da như con cá luộc. Tôi thoa dầu mù u rồi quấn gạc trắng kín cả bàn tay phải, chỉ chừa mấy đầu ngón. Nó nói tối vẫn hát được.")}</p>
      <p>${ln("hen_3", "Tôi nấu cháo cho cả gánh ăn lúc 7 giờ tối. Từ 9 giờ tới 11 giờ đêm tôi ngồi trong bếp nấu nồi cháo khuya, không đi đâu.")}</p>
      <p>${ln("hen_4", "Suốt lúc đó trong bếp chỉ có mình tôi. Thằng Tư Hòa không có xuống bếp. Bếp là bếp của tôi, đứa nào vô là tôi biết.")}</p>
      <div class="sign-row"><div>Người khai<br><span class="fingerprint"></span><br><small>(điểm chỉ)</small></div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
    </div>`,
  },

  {
    id: "bang_ke", stage: 1, kind: "Bảng kê", icon: "☰", label: "Bảng kê vị trí từng người, 22:00–22:15 (theo lời khai)",
    html: () => `
    <div class="doc doc--form">
      ${caHead()}
      <h2 class="form-title">BẢNG TỔNG HỢP VỊ TRÍ TỪNG NGƯỜI<br><small>Từ 22:00 tới 22:15 ngày 27/9/1993, theo lời khai và người làm chứng</small></h2>
      <table class="tbl">
        <tr><th>Người</th><th>Tự khai</th><th>Người làm chứng</th></tr>
        <tr><td>Châu Văn Kiệt</td><td>(nạn nhân) Trên sân khấu lớp 2; 22:13 vô buồng trò thay áo</td><td>Cả đình; Út Nhàn</td></tr>
        <tr><td>Lê Văn Thông (Ba Thông)</td><td>Trên sân khấu, đóng Châu Thương lớp 2</td><td>“Cả đình thấy Châu Thương”</td></tr>
        <tr><td>Lý Thị Nhàn (Út Nhàn)</td><td>Trên sân khấu lớp 2; 22:13 vô buồng trò với Kiệt</td><td>Cả đình; Kiệt</td></tr>
        <tr><td>Đoàn Văn Lợi</td><td>Trên sân khấu đóng Khổng Tú; 22:12 bị “chém”, ra cánh gà trái đứng tới hết lớp 3</td><td>Cả đình; ông Sáu Bé; Năm Chánh</td></tr>
        <tr><td>Đặng Văn Bé (ông Sáu Bé)</td><td>22:00 rót trà; từ 22:02 ở cánh gà trái nhắc tuồng</td><td>Năm Chánh; Đoàn Văn Lợi; bé Thủy (lúc rót trà)</td></tr>
        <tr><td>Huỳnh Văn Chánh (Năm Chánh)</td><td>Đánh trống chiến ở cánh gà trái</td><td>Ông Sáu Bé; tiếng trống không dứt (có trên băng VHS)</td></tr>
        <tr><td>Nguyễn Thị Lựu (bà Tư Lựu)</td><td>Ngồi nhà trước với ban tế đình</td><td>Ban tế (5 người)</td></tr>
        <tr><td>Võ Văn Đáng (ông Hương cả)</td><td>Ngồi trống chầu trước sân khấu</td><td>Cả đình</td></tr>
        <tr><td>Lâm Tấn Phát</td><td>Quay phim, chụp ảnh ở hàng ghế khán giả</td><td>Ông Tám Kỷ ngồi cạnh</td></tr>
        <tr><td>Trương Thị Hên (Bảy Hên)</td><td>Trong bếp</td><td>Không có (bếp riêng)</td></tr>
        <tr><td>Phan Văn Hòa (Tư Hòa)</td><td>“Ở sau bếp nấu cháo”</td><td><b>Không ai xác nhận</b></td></tr>
        <tr><td>Mai Thị Thủy (bé Thủy, 12 tuổi)</td><td>Ngủ trong góc buồng trò</td><td>Ông Sáu Bé (lúc 22:00); Út Nhàn (lúc 22:13)</td></tr>
      </table>
      <p class="small muted">Ghi chú: bếp nằm cách buồng trò 40 m, phía sau đình. Từ bếp không thấy được buồng trò.</p>
    </div>`,
  },

  {
    id: "buong_tro", stage: 1, kind: "Hiện trường", icon: "⌖", label: "Buồng trò sáng 28/9 (bấm vào từng chỗ)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Ảnh công an chụp lúc 7 giờ sáng 28/9, trước khi dọn. Buồng trò là căn chái lá dựng sát hông sân khấu, có cửa sau thông ra cầu ao.
        Bấm vào từng chỗ trong ảnh để xem ghi chép của cán bộ khám nghiệm.</p>
      ${media("room", "buong_tro")}
    </div>`,
  },
];
