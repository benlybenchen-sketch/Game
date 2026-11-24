// Every case in the series, in order, for the home screen. Details of each case live in cases/<id>/index.js.
// time: đúng thời gian đồng hồ trong game (META.timeLimit, mặc định 150 phút; hồ sơ không có chế độ nghiêm thì không giới hạn).
// diff / fear: độ khó và độ kinh dị, 1–5 sao, hiện trên thẻ hồ sơ.
// soon: true locks a case that is still missing its pictures (open it anyway with ?case=<id>&preview=1).
export const CASES = [
  { id: "01", diff: 2, fear: 3, number: "Hồ sơ 01", title: "Hồ đòi người", place: "Hồ thủy điện Nậm Khê, 2003", cover: "cover",
    short: "Đêm rằm tháng Bảy, một cô giáo biến mất bên hồ. Làng nói cứ bảy năm hồ lại đòi một người.",
    level: "Khó", time: "Không giới hạn thời gian", questions: 5 },
  { id: "02", diff: 3, fear: 3, number: "Hồ sơ 02", title: "Đêm giỗ Tổ", place: "Gánh hát bội Phước Hưng Ban, 1993", cover: "cover",
    short: "Quan Công gục chết giữa sân khấu, lưng uốn cong như cánh cung, mặt cười. Ba mươi năm trước, đúng đêm ấy, đúng vai ấy, cũng y như vậy.",
    level: "Rất khó", time: "150 phút", questions: 6 },
  { id: "03", diff: 4, fear: 4, number: "Hồ sơ 03", title: "Cầu cơ", place: "Biệt thự Bạch Lan, Sài Gòn, 1971 · 2004", cover: "cover",
    short: "Bảy tối thứ Bảy năm 1971, con cơ báo tử sáu người. Ba mươi ba năm sau, người sống sót thuê bạn giải những mật thư nó vẫn còn đánh ra. Bà ấy pha trà cho bạn mỗi đêm.",
    level: "Cực khó · giải mật mã", time: "150 phút", questions: 7 },
  { id: "04", diff: 4, fear: 3, number: "Hồ sơ 04", title: "Người mẹ khác", place: "Bệnh viện Tâm thần Cam Ly, Đà Lạt, 1996", cover: "cover",
    short: "Cô gái khăng khăng người mẹ đi Sài Gòn về không phải mẹ mình. Bệnh của cô có thật. Lời cô nói cũng thật. Chữ ký của bạn quyết định ai bị nhốt.",
    level: "Rất khó · tâm lý", time: "150 phút", questions: 6 },
  { id: "05", diff: 4, fear: 4, number: "Hồ sơ 05", title: "Người giữ vợ", place: "Thị trấn Cam Đường, Lào Cai, 1991", cover: "cover",
    short: "Hai năm, cửa buồng dán kín, đêm nào cũng có tiếng ho. Cả thị trấn thương cô con gái của ông thợ ảnh hoá dở. Một quyết định sai, và sẽ có người chết.",
    level: "Rất khó · tâm lý · có kết thúc xấu", time: "150 phút", questions: 7, endings: 3 },
  { id: "06", diff: 5, fear: 5, number: "Hồ sơ 06", title: "Âm Hôn", place: "Trấn Hoè Âm, Sơn Tây, Dân Quốc năm 25", cover: "cover",
    short: "Nhà giàu cưới vợ cho đứa con trai chết đuối. Canh thiếp cô dâu không có tên. Đêm nào, sau cánh cửa niêm phong ở Đông viện, cũng có người gọi tên một cô hầu.",
    level: "Cực khó (mức 5) · văn hoá Trung Hoa cổ", time: "240 phút", questions: 7, endings: 4 },
  { id: "07", diff: 5, fear: 4, number: "Hồ sơ 07", title: "Thư gửi người chết", place: "Set-Maat, bờ Tây Thebes, năm 29", cover: "cover",
    short: "Thợ vẽ lăng vua chết dưới hình Bà Rắn. Lúa trễ mười tám ngày, cả làng đói. Vợ anh viết thư cho người chết mỗi tối, và sáng nào cũng có thư trả lời.",
    level: "Cực khó (mức 5) · Ai Cập cổ", time: "240 phút", questions: 7, endings: 5 },
  { id: "08", diff: 5, fear: 5, number: "Hồ sơ 08", title: "Độ Kiếp", place: "Núi Vân Khư, Bắc Tống, Tuyên Hoà năm thứ hai", cover: "cover",
    short: "Chín tiếng sét đánh xuống Lôi Đài, chưởng môn hoá tro, tông môn tâu về triều là đã phi thăng. Hồn đăng của ông trong Tổ sư điện vẫn cháy. Bạn có bảy ngày để ký xác nhận tiên tích.",
    level: "Cực khó (mức 5) · tu tiên, Trung Hoa cổ", time: "300 phút", questions: 8, endings: 7, soon: true },
];
