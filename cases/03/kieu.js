// The two copies of Truyện Kiều in the case. Only the pages the game prints.
// Khiêm's annotated copy is complete (3254 lines). Lan's copy, printed in Huế in 1968, lost the couplet 1001–1002,
// so every line after 1000 carries a number two lower in her book.
export const OPENING = [
  "Trăm năm trong cõi người ta,", "Chữ tài chữ mệnh khéo là ghét nhau.",
  "Trải qua một cuộc bể dâu,", "Những điều trông thấy mà đau đớn lòng.",
  "Lạ gì bỉ sắc tư phong,", "Trời xanh quen thói má hồng đánh ghen.",
  "Cảo thơm lần giở trước đèn,", "Phong tình cổ lục còn truyền sử xanh.",
  "Rằng năm Gia Tĩnh triều Minh,", "Bốn phương phẳng lặng hai kinh vững vàng.",
  "Có nhà viên ngoại họ Vương,", "Gia tư nghĩ cũng thường thường bậc trung.",
  "Một trai con thứ rốt lòng,", "Vương Quan là chữ nối dòng nho gia.",
  "Đầu lòng hai ả tố nga,", "Thúy Kiều là chị em là Thúy Vân.",
  "Mai cốt cách tuyết tinh thần,", "Mỗi người một vẻ mười phân vẹn mười.",
  "Vân xem trang trọng khác vời,", "Khuôn trăng đầy đặn nét ngài nở nang.",
  "Hoa cười ngọc thốt đoan trang,", "Mây thua nước tóc tuyết nhường màu da.",
  "Kiều càng sắc sảo mặn mà,", "So bề tài sắc lại là phần hơn.",
  "Làn thu thủy nét xuân sơn,", "Hoa ghen thua thắm liễu hờn kém xanh.",
  "Một hai nghiêng nước nghiêng thành,", "Sắc đành đòi một tài đành họa hai.",
  "Thông minh vốn sẵn tính trời,", "Pha nghề thi họa đủ mùi ca ngâm.",
  "Cung thương làu bậc ngũ âm,", "Nghề riêng ăn đứt Hồ cầm một trương.",
  "Khúc nhà tay lựa nên chương,", "Một thiên Bạc mệnh lại càng não nhân.",
  "Phong lưu rất mực hồng quần,", "Xuân xanh xấp xỉ tới tuần cập kê.",
  "Êm đềm trướng rủ màn che,", "Tường đông ong bướm đi về mặc ai.",
  "Ngày xuân con én đưa thoi,", "Thiều quang chín chục đã ngoài sáu mươi.",
  "Cỏ non xanh tận chân trời,", "Cành lê trắng điểm một vài bông hoa.",
];
/** Kiều at Ngưng Bích tower: lines 1033–1054 in a complete copy. */
export const NGUNG_BICH = [
  "Trước lầu Ngưng Bích khóa xuân,", "Vẻ non xa tấm trăng gần ở chung.",
  "Bốn bề bát ngát xa trông,", "Cát vàng cồn nọ bụi hồng dặm kia.",
  "Bẽ bàng mây sớm đèn khuya,", "Nửa tình nửa cảnh như chia tấm lòng.",
  "Tưởng người dưới nguyệt chén đồng,", "Tin sương luống những rày trông mai chờ.",
  "Bên trời góc bể bơ vơ,", "Tấm son gột rửa bao giờ cho phai.",
  "Xót người tựa cửa hôm mai,", "Quạt nồng ấp lạnh những ai đó giờ?",
  "Sân Lai cách mấy nắng mưa,", "Có khi gốc tử đã vừa người ôm.",
  "Buồn trông cửa bể chiều hôm,", "Thuyền ai thấp thoáng cánh buồm xa xa?",
  "Buồn trông ngọn nước mới sa,", "Hoa trôi man mác biết là về đâu?",
  "Buồn trông nội cỏ rầu rầu,", "Chân mây mặt đất một màu xanh xanh.",
  "Buồn trông gió cuốn mặt duềnh,", "Ầm ầm tiếng sóng kêu quanh ghế ngồi.",
];
/** Line number -> text in one copy ("khiem" or "hue"). */
export function edition(which) {
  const m = new Map();
  OPENING.forEach((t, i) => m.set(i + 1, t));
  const first = which === "khiem" ? 1033 : 1031;
  NGUNG_BICH.forEach((t, i) => m.set(first + i, t));
  return m;
}
