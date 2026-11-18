// Case entry point: everything the app needs about "Hồ đòi người".
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
export { QUESTIONS, PEOPLE, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES } from "./tapes.js";

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4];

export const META = {
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 01",
  title: "Hồ đòi người",
  place: "Xã Vọng Thủy, hồ thủy điện Nậm Khê · đêm 19 rạng sáng 20/8/2003",
  blurb: "Đêm rằm tháng Bảy, một cô giáo trẻ biến mất bên hồ thủy điện. Làng nói: cứ bảy năm, hồ lại đòi một người. Năm 1989 là một bé gái mặc áo đỏ. Năm 1996 là một ông kế toán. Bảy ngày sau, chương trình radio về chuyện ma của bạn nhận được một cuộn băng ẩm mùi bùn, gửi từ một địa chỉ không có người gửi.",
  players: "1–4 người",
  time: "2–4 giờ",
  level: "Khó, tăng dần",
  boss: "Anh Quân",
  firstDoc: "giao_viec",
};
