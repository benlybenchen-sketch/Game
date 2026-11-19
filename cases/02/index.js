// Case 02 entry point: "Đêm giỗ Tổ".
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import d5 from "./docs5.js";
import { vhs, room, roll } from "./media.js";
import { ghostFace } from "./art.js";
export { QUESTIONS, PEOPLE, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES } from "./tapes.js";

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4, ...d5];
export const MEDIA = { vhs, room, roll };
export const ART = { ghostFace };

export const META = {
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 02",
  title: "Đêm giỗ Tổ",
  place: "Gánh hát bội Phước Hưng Ban, đình Phú Lễ · đêm 4 rạng sáng 5/10/1993",
  blurb: "Đêm giỗ Tổ hát bội, Kép Kiệt đang đóng Quan Công thì gục giữa sân khấu: lưng uốn cong như cánh cung, mặt nhăn lại như đang cười, mỗi tiếng trống chầu là một cơn giật. Cả cù lao nói Tổ bắt. Ba mươi năm trước, đúng đêm ấy, đúng vai ấy, một kép hát khác cũng chết y như vậy. Ông ký giả già từng viết bài “Tổ bắt” năm 1963 giao cho bạn một cuộn băng VHS nặc danh và một mảnh giấy viết bằng son vẽ mặt: “Tổ không bắt ai. Người bắt.”",
  players: "1–4 người",
  time: "4–6 giờ",
  level: "Rất khó · có cảnh ghê rợn",
  boss: "Ông Tám Kỷ",
  narrator: "Ông Tám Kỷ",
  solver: "ông Tám Kỷ",
  firstDoc: "thu_tam_ky",
  cover: "cover",
  folders: ["Gói đồ của ông Tám", "Hồ sơ công an huyện", "Cuộn phim và lời khai", "Rương của Ba Thông", "Sổ thuốc độc", "Trước khi trời sáng", "Kết thúc"],
  wrong: [
    "Ông Tám gõ ống điếu: “Chưa khớp. Ba mươi năm trước tôi cũng vội như cháu, và tôi đã viết sai.”",
    "“Có chỗ hở. Đừng đoán. Tìm tờ giấy nói đúng điều đó.”",
    "“Coi lại giờ giấc. Giờ trên băng không phải giờ thật.”",
    "“Không. Người ta có thể nói dối, giấy tờ có thể bị giả. Hai thứ đó phải soi vào nhau.”",
  ],
  finale: { html: `<h3>05:47 · Đình Phú Lễ</h3><p>Thượng úy Huỳnh gọi lại: “Khởi tố Lê Văn Thông. Thả thằng Hòa. Ông già Sáu Bé thì… ông ấy cứ ngồi ôm cái rương Tổ, không chịu buông.”</p>
      <p>Trời hửng sáng. Tôi gấp cuốn sổ, nghe từ phía đình vọng lại một tiếng trống chầu. Chỉ một tiếng. Tom.</p><p class="sign-off">— Tám Kỷ</p>`, open: "bao_ket" },
  scares: { 2: ["mat_do", "mat_do", 3000], 5: ["jump", "quan_cong", 2500, { main: true, hold: 5000 }], 6: ["ket", "ket_scare", 6000] },
  dreadLevels: [0, 1, 2, 3, 4, 4],
  dread: {
    phrases: ["Tổ đang coi", "trả vai cho tao", "chát", "tom tom tom", "đắng nghét", "ba mươi năm", "chung ở giữa", "mặt tao đâu"],
    notes: { 3: "cái mặt trắng là mặt người sống", 4: "đừng uống chung giữa" },
    scare: "quan_cong",
    extra: [{ min: 1, every: [40000, 90000], sfx: "chau" }, { min: 3, every: [60000, 120000], sfx: "ken", full: true }],
  },
};
