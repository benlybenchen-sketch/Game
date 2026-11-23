// Case 03 entry point: "Cầu cơ".
import d0, { contractHtml } from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import d5 from "./docs5.js";
import d6 from "./docs6.js";
import d7 from "./docs7.js";
import { board, morsepad, compare, mirror, kieu } from "./media.js";
import { ghostFace } from "./art.js";
import { sfx, morseKnocks } from "../../js/audio.js";
import { state, save } from "../../js/store.js";
import { morse, telex } from "./cipher.js";
export { QUESTIONS, PEOPLE, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES } from "./tapes.js";

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4, ...d5, ...d6, ...d7];
export const MEDIA = { board, morsepad, compare, mirror, kieu };
export const ART = { ghostFace };

// Night 5: the reel-to-reel in the cupboard switches itself on and a heel knocks one word, once.
sfx.dungMorse = () => {
  if (state.stage !== 4 || state.scared.dungMorse) return;
  state.scared.dungMorse = 1; save();
  morseKnocks(morse(telex("Đừng")), { kind: "heel", unit: 0.24 });
  const t = document.getElementById("toast");
  if (t) { t.textContent = "Trong tủ, máy Akai của Tùng tự bật. Cuộn băng quay không tiếng người, chỉ có tiếng gót guốc gõ xuống sàn."; t.classList.add("on"); setTimeout(() => t.classList.remove("on"), 7000); }
};

export const META = {
  strict: true,   // no x/y feedback, seal after wrong answers, gated hints, grade (js/main.js)
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 03",
  title: "Cầu cơ",
  place: "Biệt thự Bạch Lan, số 9 Hàng Me, Sài Gòn · đêm 7 tới rạng sáng 14/11/2004",
  blurb: "Năm 1971, bảy sinh viên Văn khoa cầu cơ trong một biệt thự bỏ hoang ở Sài Gòn. Bảy tối thứ Bảy, sáu người chết, đúng như con cơ báo trước. Ba mươi ba năm sau, người sống sót duy nhất đăng báo tìm người giỏi chữ, biết tiếng Pháp, giải mật thư cũ: “Ở lại 7 đêm. Thù lao hậu.” Bạn nhận việc. Mỗi đêm, bà ngồi đối diện bạn bên bàn cơ, rót cho bạn một chung trà sen. Mỗi đêm, con cơ đánh ra một lời mới. Lời ấy nói với bạn.",
  players: "1–4 người",
  time: "5–7 giờ",
  level: "Cực khó · giải mật mã",
  boss: "Bà Lâm Hạnh Dung",
  narrator: "Thư bà Dung để trên bàn",
  solutionLabel: "Bản giải trong sổ tay",
  solveIntro: "Bản giải đầy đủ sẽ hiện ra trong sổ tay của bạn, và bạn đi tiếp.",
  firstDoc: "giao_keo",
  cover: "cover",
  contract: { html: () => contractHtml(true) },
  folders: ["Đêm thứ nhất · Giao kèo", "Đêm thứ hai · Tiếng gõ", "Đêm thứ ba · Thơ", "Đêm thứ tư · Sổ thuốc", "Đêm thứ năm · Truyện Kiều", "Đêm thứ sáu · Gương", "Đêm thứ bảy · Quẻ", "Rạng sáng 14/11"],
  wrong: [
    "Hàng chữ không ra nghĩa. Con cơ đứng im giữa bàn, chờ bạn đọc lại.",
    "Bà Dung nhìn qua vai bạn: “Sai rồi hả cháu? Từ từ. Uống miếng trà đi.”",
    "Có chỗ chưa khớp. Thứ bạn cần có khi đã nằm trong tay bạn từ đêm đầu: đọc lại giấy tờ cũ.",
    "Ngọn nến bên trái tắt phụt. Không phải câu đó.",
  ],
  finale: {
    html: `<h3>05:50 · Rạng sáng Chủ Nhật 14/11/2004</h3>
      <p>Bạn đặt bản giải lên bàn cơ: MỘ LAN LÀ EM · ĐỪNG UỐNG TRÀ · VÀNG DƯỚI HỒ SEN.</p>
      <p>Bà Dung đọc rất lâu. Rồi bà gấp tờ giấy làm tư, cất vào túi áo, đứng dậy. Bà không nhìn bạn. Bà nói: “Cháu ngồi đây. Đừng đi đâu hết.”</p>
      <p>Bạn nghe tiếng dép bà xuống cầu thang, ra cửa sau, đi về phía vườn. Rồi không nghe gì nữa.</p>
      <p>Chung trà sen trước mặt bạn vẫn đầy. Bạn không uống.</p>
      <p>Trời sáng. Dưới hồ sen có tiếng ai đó la lên.</p>`,
    open: "bao_ket",
  },
  scares: { 2: ["nuoc", "yen_scare", 3000], 7: ["ket", "ket_scare", 6000] },
  dreadLevels: [0, 1, 2, 2, 3, 4, 4],
  dread: {
    phrases: ["chị Lan đâu", "em lạnh", "đừng uống", "tay trái", "đọc lại đi", "người mang tên em", "dưới hồ sen", "cộp… cộp… cộp"],
    notes: { 2: "đọc lại trang nhật ký đi em", 3: "đừng uống trà", 4: "bà ấy không phải là bà ấy" },
    scare: "guong_scare",
    mirror: true,
    extra: [{ min: 1, every: [50000, 110000], sfx: "slide" }, { min: 3, every: [25000, 50000], sfx: "dungMorse" }],
  },
};
