// Case 04 entry point: "Người mẹ khác".
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import d5 from "./docs5.js";
import d6 from "./docs6.js";
import { overlay, prints, doselog } from "./media.js";
import { ghostFace } from "./art.js";
import { dose } from "./dose.js";
import { state } from "../../js/store.js";
import { TAPES } from "./tapes.js";
export { QUESTIONS, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES };

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4, ...d5, ...d6];
export const MEDIA = { overlay, prints, doselog };
export const ART = { ghostFace };

/** Thảo's lines play the take that matches her current sedative dose. */
export const tapeSuffix = (id, i) => (TAPES[id]?.segs[i]?.dose && dose() > 0 ? `_d${dose()}` : "");

export const META = {
  publicNames: ["Bà Hoa", "Lê Thị Hoa", "Sài Gòn"],   // the mother and the city she went to, from the first page (tools/audit.mjs)
  strict: true,   // no x/y feedback, seal after wrong answers, gated hints, grade (js/main.js)
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 04",
  title: "Người mẹ khác",
  place: "Bệnh viện Tâm thần Cam Ly, Đà Lạt · 14 – 24/10/1996",
  blurb: "Thảo, 24 tuổi, bị đưa vào bệnh viện tâm thần vì khăng khăng người mẹ đi Sài Gòn về “không phải mẹ”. Bác sĩ trưởng khoa chẩn đoán hội chứng Capgras: một chứng bệnh có thật, khiến người ta tin người thân đã bị kẻ giống hệt thay thế. Bà mẹ hiền lành, tuần nào cũng vào thăm, và vừa nộp đơn xin toà tuyên bố con gái mất năng lực. Bạn là bác sĩ nội trú Lê Bích Vân. Trong sáu đêm trực, bạn phải ký bản giám định. Mỗi kết luận sai của bạn là một y lệnh tăng liều thuốc.",
  players: "1–4 người",
  time: "4–6 giờ",
  level: "Rất khó · tâm lý",
  boss: "Bà Lê Thị Hoa",
  narrator: "Sổ giao ca · y tá Sương",
  solutionLabel: "Bản kết luận mẫu",
  solveIntro: "Bản kết luận mẫu cho trọng điểm này sẽ hiện ra, và bạn trực tiếp đêm sau.",
  firstDoc: "loi_dan",
  cover: "cover",
  folders: ["Đêm trực 1 · Hồ sơ phòng 7", "Đêm trực 2 · Thứ Tư 16/10", "Đêm trực 3 · Thứ Sáu 18/10", "Đêm trực 4 · Tiếng ru", "Đêm trực 5 · Thứ Ba 22/10", "Đêm trực 6 · Bản giám định", "Tháng 11/1996"],
  wrong: [
    "Y lệnh của bạn đã được thực hiện: tăng liều Haloperidol cho phòng 7. Nghe lại băng của Thảo đi.",
    "BS. Kha gõ bút xuống bàn: “Tôi đã dặn cô rồi. Đừng sa vào.”",
    "Chưa khớp. Một chi tiết cụ thể nằm đâu đó trong giấy tờ bạn đã đọc. Đọc lại.",
    "Thảo nhìn bạn qua ô kính rất lâu, rồi quay mặt vào tường.",
  ],
  /** Called after state.tries was raised: dose() already counts this wrong conclusion. */
  wrongFor: (n) => {
    const all = Object.values(state.tries || {}).reduce((a, b) => a + (b || 0), 0);
    if (all <= 3) return `Y lệnh của bạn đã được thực hiện: tăng liều Haloperidol cho phòng 7 (lần ${all}). Nghe lại băng của Thảo đi.`;
    return ["BS. Kha gõ bút xuống bàn: “Tôi đã dặn cô rồi. Đừng sa vào.” Liều thuốc của phòng 7 đã ở mức cao nhất ông cho phép.",
      "Chưa khớp. Một chi tiết cụ thể nằm đâu đó trong giấy tờ bạn đã đọc. Đọc lại.",
      "Thảo nhìn bạn qua ô kính rất lâu, rồi quay mặt vào tường."][(all - 4) % 3];
  },
  finale: {
    html: `<h3>06:30 · Sáng 25/10/1996</h3>
      <p>Bạn ký bản giám định: Trần Ngọc Thảo có hội chứng Capgras đối với một số người quen, nhưng vẫn đủ năng lực hành vi dân sự. Lời khai của bệnh nhân về mẹ là sự thật.</p>
      <p>BS. Kha đọc rất lâu. Rồi ông ký bên dưới chữ ký của bạn, không nói gì.</p>
      <p>Chín giờ sáng, công an tới phòng thăm nuôi. Người phụ nữ áo len nâu đang ngồi chờ, tay ôm một hộp bánh mới. Khi thấy bạn, bà mỉm cười, lễ phép như mọi lần: “Chào bác sĩ.”</p>
      <p>Bà cầm cái nĩa bằng tay trái.</p>`,
    open: "bao_ket",
  },
  scares: { 3: ["kinh", "o_kinh_scare", 3500], 6: ["aotim", "ao_tim_scare", 7000, { main: true, hold: 5000 }] },
  dreadLevels: [0, 1, 2, 3, 4, 4],
  dread: {
    phrases: ["không phải mẹ", "bồng bồng mẹ bế con sang", "nghe lời má đi con", "nốt ruồi bên kia", "đừng ăn tôm", "ví dầu cầu ván", "tay trái", "bác sĩ ký đi"],
    notes: { 2: "chị đừng tin bà đó", 3: "nốt ruồi của mẹ nằm bên này", 4: "đừng để con ăn bánh" },
    scare: "hai_mat_scare",
    extra: [{ min: 2, every: [60000, 120000], sfx: "hum" }, { min: 3, every: [45000, 90000], sfx: "knuckle" }],
  },
};
