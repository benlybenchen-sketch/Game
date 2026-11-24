// Case entry point: everything the app needs about "Hồ đòi người".
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
export { QUESTIONS, PEOPLE, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES } from "./tapes.js";
import { cctv, darkroom, lakeMap } from "./media.js";
import { ghostFace } from "./art.js";

/** Case-specific media widgets (the tape player is shared). */
export const MEDIA = { video: cctv, darkroom, map: lakeMap };
export const ART = { ghostFace };

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4];

export const META = {
  strict: true,                          // countdown, penalties, grade (brought up to the series standard)
  timeLimit: 150,
  hintCost: { hint: 10, solve: 20 },     // hints and the solution open any time, paid in minutes
  publicNames: ["Đỗ Văn Khánh"],         // the commune chairman is named on the first pages
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 01",
  title: "Hồ đòi người",
  place: "Xã Vọng Thủy, hồ thủy điện Nậm Khê · đêm 19 rạng sáng 20/8/2003",
  blurb: "Đêm rằm tháng Bảy, một cô giáo trẻ biến mất bên hồ thủy điện. Làng nói: cứ bảy năm, hồ lại đòi một người. Năm 1989 là một bé gái mặc áo đỏ. Năm 1996 là một ông kế toán. Bảy ngày sau, chương trình radio về chuyện ma của bạn nhận được một cuộn băng ẩm mùi bùn, gửi từ một địa chỉ không có người gửi.",
  players: "1–4 người",
  time: "150 phút",
  level: "Khó, tăng dần",
  boss: "Anh Quân",
  firstDoc: "giao_viec",
  coverFocus: "62% 45%",   // phone banner crop: the part of the cover that must stay visible
  cover: "cover",
  folders: ["22 giờ 07", "23 giờ 31", "0 giờ 46", "2 giờ 13", "3 giờ 52", "5 giờ 20"],
  wrong: [
    "Anh Quân lắc đầu: “Chưa khớp. Đọc lại đi, chị Nga sẽ không mở hồ sơ vì một linh cảm.”",
    "“Có chỗ chưa đúng. Đừng đoán, hãy tìm tờ giấy nói điều đó.”",
    "“Không. Nghe lại băng, xem lại ảnh. Bằng chứng phải khớp với từng câu trả lời.”",
    "“Gần rồi, nhưng ‘gần’ thì không cứu được ai.”",
  ],
  finale: { html: `<h3>05:20 · Gò Miếu</h3><p>Chị Nga gọi lại, giọng lạc đi: “Cắt được khóa rồi. Cô ấy còn sống. Nước chỉ còn cách sàn một gang tay.”</p>
      <p>Ngoài cửa sổ phòng thu, trời bắt đầu hửng. Lần đầu tiên trong đêm, tôi không nghe thấy tiếng nước nhỏ giọt.</p><p class="sign-off">— Quân</p>`, open: "bao_ket" },
  /** Jump scares fired when a stage opens: { stage: [key, picture] } */
  scares: { 4: ["jump", "ma"] },
  dread: {
    phrases: ["trả nhà cho em", "nước lên rồi cô ơi", "em vẫn ở đây", "cô Hà lạnh lắm", "đừng lên cái thuyền ấy", "mẹ ơi", "bảy năm"],
    notes: { 3: "chỗ nước không tới", 4: "cô Hà ở chỗ có cái máy to. nhanh lên" },
    scare: "ma",
    extra: [],
  },
};
