// Case 06 entry point: "Âm Hôn". Four endings (META.endings), one of them hidden.
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import d5 from "./docs5.js";
import d6 from "./docs6.js";
import { abacus } from "./media.js";
import { lockbox } from "../../js/puzzles.js";
import { SEALED } from "./locks.js";
import { ghostFace } from "./art.js";
import { state } from "../../js/store.js";
export { QUESTIONS, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export { TAPES } from "./tapes.js";

export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4, ...d5, ...d6];
const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
export const MEDIA = {
  abacus,
  hop_son: (el) => lockbox(el, { id: "hop_son", rings: [STEMS, STEMS, STEMS, STEMS], content: SEALED.hop_son, label: (s) => `<span class="han">${s}</span>` }),
};
export const ART = { ghostFace };

/** Which ending a wrong choice at the wedding night leads to. */
const ROUTE = { A: "hitang", B: "hitang", D: "cuu", E: "cuu", F: "hitang", G: "hitang" };
const routeOf = (choice) => ROUTE[(choice || "").charAt(0)] || "hitang";
const LOST_TEXT = {
  A: "Bạn ký hôn thư. Giờ Tý, phu nhân rót rượu hợp cẩn. Tú Nương uống cạn, cúi đầu lạy linh vị, rồi nằm xuống cạnh quan tài như người ngủ.",
  B: "Bạn đưa Tú Nương ra tới cổng sau. Cô gỡ tay bạn ra, nói khẽ: “Em không bỏ anh lại một mình được.” Rồi cô chạy về phía linh đường.",
  D: "Nắp quan tài mở. Cái xác trương phềnh, không còn mặt. Phu nhân gục lên quan tài gào “con tôi”. Tộc trưởng chỉ cho hoãn lễ.",
  E: "Đội trưởng Phùng đưa Tú Nương về đồn. Lễ hoãn. Đêm ấy chiếc xe la của Lưu Phúc rời cổng sau, chăn đệm đầy xe.",
  F: "Cửa Đông viện bật mở, cả phủ đổ dồn về phía ấy. Ở linh đường chỉ còn phu nhân và cô dâu. Phu nhân rót rượu: “Uống đi con, cho con tôi được yên.”",
  G: "Giờ Tý đã qua khi cửa Đông viện bật mở. Ở linh đường, chén rượu hợp cẩn đã cạn.",
};

export const META = {
  strict: true,   // no x/y feedback, countdown with time penalties, gated hints, grade (js/main.js)
  timeLimit: 240, // minutes on the countdown (default 150)
  // Escape-room puzzles (rule 25, numbers from docs/CAU_DO.md).
  pinRoles: false,   // evidence slots without role labels: the player works out what to prove (harder)
  puzzles: [
    { n: 15, q: "q3", name: "Mật áp theo Thiên Tự Văn (bảng chữ thay số)" },
    { n: 27, q: "q6", name: "Câu đố chiết tự" },
    { n: 13, q: "q6", tool: "lockbox", media: "hop_son", chain: "q1", name: "Hộp sơn mài khoá chữ can, mã là bát tự trên canh thiếp" },
  ],
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 06",
  title: "Âm Hôn",
  place: "Trấn Hoè Âm, Sơn Tây · tháng Bảy năm Dân Quốc thứ 25",
  blurb: "Con trai duy nhất nhà chưởng quỹ phiếu hiệu chết đuối ở sông Phần. Theo tục, nhà họ Triệu cưới vợ cho người chết: một cô dâu âm, chôn chung một huyệt. Thầy xem ngày của trấn đột tử đêm Vu Lan. Bạn là học trò của thầy, được mời đến thay: chấm bát tự, viết hôn thư, kịp giờ Tý đêm 22. Canh thiếp cô dâu không có tên. Và đêm nào, sau cánh cửa niêm phong ở Đông viện, cũng có người gọi tên một cô hầu.",
  players: "1–4 người",
  time: "6–9 giờ",
  level: "Cực khó (mức 5) · văn hoá Trung Hoa cổ · nhiều kết thúc",
  boss: "Không ai",
  narrator: "Sổ tay của Lục Đình",
  solutionLabel: "Lời giải",
  firstDoc: "thu_moi",
  cover: "cover",
  // Portrait cover: show it whole on the right (bride, coffin and paper groom stay in view).
  coverStyle: "background-size:auto 100%;background-position:right center;background-repeat:no-repeat;background-color:#07090a",
  music: "am_hon.mp3",        // original theme, rendered by tools/compose06c.py (suona procession, drum rolls, wail)
  ambience: "ghostWedding",   // fallback if the file fails: synthesized procession in js/audio.js
  folders: ["Đêm 17 · Canh thiếp", "Đêm 18 · Ngõ Liễu", "Đêm 19 · Phiếu hiệu", "Đêm 20 · Phiếu khám xác", "Sáng 21 · Lễ phát tang",
    "Đêm 21 · Trang sổ cuối", "Đêm 22 · Giờ Hợi", "Rạng sáng 23", "Sau đêm 22"],
  wrong: [
    "Chưa đúng. Thầy Khâu dặn: đừng tin con số nào chưa tự tính lại.",
    "Sai. Trong phủ này, giấy tờ nào cũng có người đã sửa hoặc đã giấu một nửa.",
    "Chưa khớp. Đếm lại từ đầu, chậm thôi.",
    "Không phải. Đêm nay hình nhân giấy lại quay mặt về phía Đông viện.",
  ],
  finale: {
    html: `<h3>Rạng sáng 23 tháng Bảy · phủ Triệu</h3>
      <p>Cửa Đông viện mở toang. Người trong tân phòng còn sống, gầy như que củi, chân trái xích vào giường. Lão gia quỳ xuống nhận con giữa sân.</p>
      <p>Trâm bạc nhúng vào bình rượu hợp cẩn, đen lại.</p>
      <p>Nắp quan tài được mở. Trên cổ tay trái người chết có một sợi chỉ đỏ. Tú Nương đứng cạnh bạn, gọi khẽ: “Anh Thạch.”</p>
      <p>Không ai ký hôn thư.</p>`,
    open: "bb_dong_vien",
  },
  endings: [
    { id: "that", good: true, name: "Chân tướng", how: "Phá cửa Đông viện trước giờ Tý, giữ cô dâu bên mình. Người sống bước ra, người chết được gọi đúng tên.", hint: "Chỉ có một cách cứu được cả hai người." },
    { id: "cuu", name: "Cứu dâu", how: "Tú Nương sống. Nhưng quan tài chôn dưới tên người khác, và “cậu Thừa An” về phủ.", hint: "Cứu được một người, để mất một người." },
    { id: "hitang", name: "Hỉ tang", how: "Giờ Tý, rượu hợp cẩn. Hai anh em họ Ôn nằm chung một huyệt, làm vợ chồng.", hint: "Đám cưới vẫn diễn ra." },
    { id: "an", hidden: true, name: "Huynh muội về nhà", how: "Đi tuyến Chân tướng không sai lần nào, không xem gợi ý: trang sổ cuối của thầy Khâu.", hint: "Kết thúc ẩn. Chỉ dành cho người không sai lần nào." },
  ],
  fatal: {
    warn: `<h3 class="fatal-h">GIỜ HỢI · KHÔNG THỂ RÚT LẠI</h3>
      <p>Việc bạn chọn sẽ được làm ngay. Không có gợi ý, không có lời giải, không làm lại được trong lượt này.</p>
      <p>Mỗi lựa chọn dẫn tới một kết thúc khác nhau. Hãy nghĩ xem đêm nay ai phải sống, và cái gì là bằng chứng không ai chối được.</p>`,
    scare: ["coDau", "co_dau_scare", 6000],
    ending: routeOf,
    html: () => {
      const k = (state.failed?.choice || "A").charAt(0), r = routeOf(state.failed?.choice);
      return `<h3>${r === "cuu" ? "KẾT THÚC · CỨU DÂU" : "KẾT THÚC · HỈ TANG"}</h3>
        <p>${LOST_TEXT[k] || LOST_TEXT.A}</p>
        ${r === "cuu"
          ? "<p>Tú Nương còn sống. Ba hôm sau, cổng phủ Triệu treo đèn đón “cậu Thừa An từ Hà Bắc về”.</p>"
          : "<p>Giờ Mão, hạ huyệt. Hai quan tài, một huyệt, đầu cùng hướng.</p>"}
        <p class="small muted">Đây là một trong bốn kết thúc. Bạn có thể mở lại hồ sơ để đi tuyến khác.</p>`;
    },
    open: () => (routeOf(state.failed?.choice) === "cuu" ? "bb_cuu" : "bb_hi_tang"),
    lost: "Việc bạn chọn đã được làm. Đọc thư mục cuối cùng, rồi mở lại hồ sơ nếu bạn muốn đi tuyến khác. Những kết thúc đã mở được giữ lại.",
  },
  scares: { 2: ["hinhNhan", "hinh_nhan_scare", 3000], 5: ["dongVien", "dong_vien_scare", 3200, { main: true, hold: 5000 }] },
  dreadLevels: [0, 1, 2, 3, 3, 4, 4],
  dread: {
    phrases: ["Tú Nương", "đừng uống", "anh ơi", "hàng tươi", "giờ Tý", "khóc đi con", "áo xanh chật vai", "chỉ đỏ"],
    notes: { 2: "cô dâu nào cũng phải khóc", 3: "người chết không ăn cơm", 4: "đêm nay ai ngủ cạnh quan tài" },
    scare: "co_dau_scare",
    extra: [{ min: 2, every: [60000, 120000], sfx: "hum" }, { min: 3, every: [45000, 90000], sfx: "scrape" }],
  },
};
