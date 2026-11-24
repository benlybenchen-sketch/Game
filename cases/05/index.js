// Case 05 entry point: "Người giữ vợ".
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import { map, torch, tear, lich, hand, MASK } from "./media.js";
import { grille, lockbox } from "../../js/puzzles.js";
import { SEALED } from "./locks.js";
import { ghostFace } from "./art.js";
import { state } from "../../js/store.js";
import { TAPES } from "./tapes.js";
export { QUESTIONS, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES };

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4];
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const MEDIA = { map, torch, tear, lich, hand , grille: (el) => grille(el, MASK), hop_ngan: (el) => lockbox(el, { id: "hop_ngan", rings: [DIGITS, DIGITS, DIGITS, DIGITS], content: SEALED.hop_ngan }) };
export const ART = { ghostFace };

/** Wording of the bad ending, by the option the player chose (A–D). */
const LOST_LINE = {
  A: "Ông Khải bị đưa về đồn lúc 19 giờ. Cháu Ngân được gửi sang nhà bà Lụa, cách buồng mẹ một bức vách.",
  B: "Cửa buồng mở rồi, sự thật phơi ra rồi. Đêm ấy cháu Ngân vẫn ngủ ở nhà, cách buồng mẹ một cái bếp.",
  C: "Cháu Ngân nghe hết, cười rất ngoan: “Vâng, cháu biết rồi ạ.” Rồi xin đi ngủ sớm.",
  D: "Người ta thu mười cân than ở gian giữa, hẹn sáng mai đưa cháu Ngân đi viện. Sáng mai đã muộn.",
  F: "Lúc 23 giờ, cháu Ngân xin bố cho về thắp hương cho mẹ. Ông Khải chưa bao giờ biết từ chối con.",
  G: "Cán bộ trạm thức suốt đêm ở gian giữa. Không ai nhớ trong bếp có một cánh cửa ngách.",
};

export const META = {
  strict: true,   // no x/y feedback, countdown with time penalties, gated hints, grade (js/main.js)
  // Escape-room puzzles (rule 25, numbers from docs/CAU_DO.md).
  hintCost: { hint: 10, solve: 20 },   // hints and solution open any time, paid in minutes; misses unlock nothing
  pinRoles: false,   // evidence slots without role labels: the player works out what to prove (harder)
  puzzles: [
    { n: 4, q: "q4", name: "Xếp sáu dòng ghi chép theo thứ tự thật" },
    { n: 7, q: "q4", tool: "grille", media: "grille", name: "Tấm bìa đen đục lỗ của buồng tối và ba tờ giấy ô li: chọn tờ và mặt theo vết mực thấm, hai tờ còn lại là bẫy" },
    { n: 25, q: "q5", name: "Ngày âm lịch của đêm bà Hằng mất, tra lịch vạn niên" },
    { n: 12, q: "q6", tool: "lockbox", media: "hop_ngan", chain: "q5", name: "Hộp sắt của Ngân, mã là ngày của mẹ theo âm lịch" },
  ],
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 05",
  title: "Người giữ vợ",
  place: "Thị trấn Cam Đường, Lào Cai · 19 – 30/12/1991",
  blurb: "Cả thị trấn tin ông thợ ảnh Đỗ Văn Khải hoá dở vì thương vợ: hai năm nay ông nói vợ “đang ốm, nằm trong buồng”, cửa buồng dán kín, đêm nào cũng nghe tiếng ho. Cô con gái 15 tuổi ngoan ngoãn một tay chăm cả nhà. Bạn là Lê Bích Vân, sinh viên y năm 5 về thực tập ở trạm y tế, được giao đến khám “bà Hằng nghi lao”. Hồ sơ này có một quyết định không thể rút lại. Sai, sẽ có người chết.",
  players: "1–4 người",
  time: "4–6 giờ",
  level: "Rất khó · tâm lý · có kết thúc xấu",
  boss: "Không có kẻ ác",
  narrator: "Nhật ký thực tập · Lê Bích Vân",
  solutionLabel: "Ghi chép đúng",
  solveIntro: "Ghi chép đúng của trọng điểm này sẽ hiện ra, và bạn sang lần thăm sau.",
  firstDoc: "loi_dan",
  coverFocus: "62% 74%",   // phone banner crop: the part of the cover that must stay visible
      music: "Minh hon.m4A",
  cover: "cover",
  // Portrait cover: show it whole on the right, so the spoon and the hair from under the door stay in view.
  coverStyle: "background-size:auto 100%;background-position:right center;background-repeat:no-repeat;background-color:#07090a",
  folders: ["Lần thăm 1 · Thứ Năm 19/12", "Lần thăm 2 · Thứ Bảy 21/12", "Lần thăm 3 · Thứ Hai 23/12", "Lần thăm 4 · Thứ Tư 25/12",
    "Lần thăm 5 · Thứ Sáu 27/12", "Lần thăm 6 · Sáng thứ Hai 30/12", "Chiều 30/12 · Cuộc họp ở trạm", "Đêm 30/12/1991 và sau đó", "Sáng 31/12/1991"],
  wrong: [
    "Chưa khớp. Đọc lại giấy tờ, từng chữ một.",
    "Thầy Sinh lắc đầu: “Cô vội quá. Ngồi đọc lại đi.”",
    "Đêm đó, ở nhà ông Khải, vẫn có tiếng ho.",
    "Chưa đúng. Một ngày tháng, một chữ, một bàn tay. Chi tiết nằm đâu đó trong hồ sơ.",
  ],
  finale: {
    html: `<h3>05:50 · Sáng 31/12/1991</h3>
      <p>Đêm qua, cháu Ngân ngủ ở khoa tâm thần bệnh viện tỉnh, có người ngồi cạnh giường đến sáng. Mười cân than nằm ở trạm.</p>
      <p>Ông Khải ngồi một mình ở gian giữa. Không ai ho.</p>
      <p>Gần 6 giờ sáng, ông tự bóc băng keo cửa buồng, từng lớp một. Rồi ông đội mũ, đi bộ ra trạm, gõ cửa, nói với thầy Sinh: “Nhà tôi mất rồi. Mất hai năm rồi.”</p>
      <p>Đó là lần đầu tiên ông nói câu ấy thành tiếng.</p>`,
    open: "bb_dem",
  },
  endings: [
    { id: "tot", good: true, name: "Không ai ho", how: "Đưa cháu Ngân lên viện đêm 25 tháng Một. Sáng ra ông Khải tự bóc băng keo cửa buồng.", hint: "Đi hết hồ sơ và chọn đúng ở bước ngoặt." },
    { id: "xau", name: "Cả nhà ngủ cùng mẹ", how: "Một quyết định sai ở bước ngoặt. Sáng 31/12 người ta phá cửa buồng.", hint: "Có những đêm không được phép sai." },
    { id: "an", hidden: true, name: "Buồng trống", how: "Khép hồ sơ không sai một lần, không xem gợi ý: cuộn băng cuối cùng trong buồng trống.", hint: "Kết thúc ẩn. Chỉ dành cho người không sai lần nào." },
  ],
  /** The one-shot decision of question 7. */
  fatal: {
    ending: () => "xau",
    warn: `<h3 class="fatal-h">QUYẾT ĐỊNH KHÔNG THỂ RÚT LẠI</h3>
      <p>Đề xuất của bạn sẽ được thực hiện ngay đêm nay. Không có gợi ý, không có lời giải, không trả lời lại được.</p>
      <p>Nếu chưa chắc, hãy đọc lại hồ sơ: ai cần được giữ an toàn đêm nay, và vì sao.</p>`,
    scare: ["khoithan", "khoi_than_scare", 6500],
    html: () => {
      const k = ["A", "B", "C", "D", "F", "G"].find((x) => (state.failed?.choice || "").startsWith(x)) || "A";
      return `<h3>06:15 · Sáng 31/12/1991</h3>
        <p>${LOST_LINE[k]}</p>
        <p>Đêm 25 tháng Một, đúng đêm cô Hằng gọi con lấy thuốc hai năm trước, có người đốt một lò than trong căn buồng dán kín.</p>
        <p>Sáng nay người ta phá cửa. Cháu Ngân nằm cạnh mẹ.</p>
        <p class="small muted">Hồ sơ đã bị đóng dấu THẤT BẠI. Bạn có thể đọc biên bản, rồi mở lại hồ sơ từ đầu.</p>`;
    },
    open: "bb_su_viec",
    lost: "Đề xuất của bạn đã được thực hiện. Sáng 31/12, người ta phá cửa buồng trong. Hồ sơ này đã thất bại; đọc thư mục “Sáng 31/12/1991”, rồi mở lại hồ sơ nếu bạn muốn điều tra lại.",
  },
  scares: { 3: ["ngankhan", "ngan_khan_scare", 3200, { main: true, hold: 5000 }], 4: ["bongba", "bong_ba_scare", 3000, { hold: 3500 }] },
  dreadLevels: [0, 1, 2, 3, 4, 4, 4],
  dread: {
    phrases: ["mẹ cháu ngủ rồi", "cô nói khẽ thôi", "ngân ơi lấy thuốc cho mẹ", "đóng hết cửa", "mẹ sợ gió", "con bịt tai", "cả nhà ngủ cùng mẹ", "khụ khụ"],
    notes: { 2: "mẹ cháu không ra được đâu cô", 3: "con ngủ với mẹ nhé", 4: "lần này con mở cửa" },
    scare: "ngan_khan_scare",
    extra: [{ min: 2, every: [60000, 120000], sfx: "hum" }, { min: 3, every: [45000, 90000], sfx: "knuckle" }],
  },
};
