// Case 07 entry point: "Thư gửi người chết". Set-Maat, the village of the royal tomb builders, year 29, Peret II.
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import d5 from "./docs5.js";
import d6 from "./docs6.js";
import { fragments, pour, STICKS } from "./media.js";
import { hn } from "./egypt.js";
import { lockbox, blocks } from "../../js/puzzles.js";
import { SEALED } from "./locks.js";
import { egyptFont } from "./egypt.js";
import { state } from "../../js/store.js";
export { QUESTIONS, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export const TAPES = {};

egyptFont();
export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4, ...d5, ...d6];
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const MEDIA = {
  fragments, pour,
  ruong: (el) => lockbox(el, { id: "ruong", rings: [DIGITS, DIGITS, DIGITS, DIGITS], content: SEALED.ruong, label: (d) => hn(d) }),
  sticks: (el) => blocks(el, STICKS),
};
/** Stand-in when a scare picture is missing: a cobra sign, no human figure. */
export const ART = { get ghostFace() { return ART.cobra; }, cobra: () => `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#060403"/><text x="150" y="215" text-anchor="middle" font-size="180" fill="#d9cdb4" font-family="Noto Sans Egyptian Hieroglyphs, serif">\u{13193}</text></svg>` };

/** Which ending each wrong choice on day 7 leads to. */
const ROUTE = { A: "ba_ran", B: "im_lang", C: "im_lang", E: "im_lang", F: "mot_nua" };
const routeOf = (c) => ROUTE[(c || "").charAt(0)] || "ba_ran";
const LOST = {
  A: "Khonsu khiêng cái đấu đi trước, cả làng đi sau. Tới đền, lòng đấu sạch trơn, không còn lớp vữa nào. Đong nước: đủ bốn mươi chén.",
  B: "Bạn niêm cái đấu bằng ấn kho bến. Đêm ấy người cầm ấn kho bến mở niêm, cạo đáy, niêm lại. Sáng ra dấu niêm còn nguyên.",
  C: "Bạn niêm cái đấu bằng ấn của Lăng. Tối ấy người mang ấn lên đèo là người giữ cổng. Sáng ra dấu niêm còn nguyên, lòng đấu sạch trơn.",
  E: "Toà làng không có vật chứng nào có niêm. Khonsu khóc, thề trước tượng thần. Đêm ấy cái đấu ở cổng biến mất.",
  F: "Tể tướng xem cái chén và mảnh gốm, hỏi cái đấu đâu. Cái đấu không có niêm, ông không nhận. Khonsu được tha.",
};

export const META = {
  strict: true,
  timeLimit: 240,
  // Escape-room puzzles (rule 25, numbers from docs/CAU_DO.md).
  puzzles: [
    { n: 15, q: "q2", name: "Tự dựng chữ số hieratic và phân số mắt Horus từ vở học trò" },
    { n: 26, q: "q4", name: "Dòng chữ đố trên vách, đọc bằng bảng hình của Hay" },
    { n: 6, q: "q5", tool: "fragments", media: "fragments", name: "Ghép mảnh dấu niêm với mẫu ấn" },
    { n: 12, q: "q5", tool: "lockbox", media: "ruong", chain: "q1", name: "Hòm bốn then số của Userhat" },
    { n: 23, q: "q6", tool: "pour", media: "pour", name: "Đổ nước bằng chén hin vào ba cái đấu" },
    { n: 1, q: "q6", tool: "blocks", media: "sticks", chain: "q3", name: "Bốn thanh gỗ khắc chữ số ký lục, xếp theo bài ru, mỗi hàng chỉ dòng và chữ trong bài Amenemope Hay chép" },
  ],          // minutes on the countdown (default 150)
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 07",
  title: "Thư gửi người chết",
  place: "Set-Maat, làng thợ lăng vua, bờ Tây Thebes · năm 29, tháng 2 mùa Peret",
  blurb: "Thợ vẽ Hay chết trong lăng vua đang đục dở, dưới hình Bà Rắn trên đỉnh núi. Cả làng nói Bà bắt anh vì thề gian. Lúa trễ mười tám ngày, người đói thì cái gì cũng tin. Vợ anh viết thư cho người chết mỗi tối, và sáng nào cũng có thư trả lời. Bạn là người đàn bà thông tuệ ở xóm chân núi, được mời lên nói xem vị thần nào đang giận.",
  players: "1–4 người",
  time: "7–10 giờ",
  level: "Cực khó (mức 5) · Ai Cập cổ · tự học chữ số, có kết thúc xấu",
  boss: "Không ai",
  narrator: "Mảnh gốm của bà Meryt",
  solutionLabel: "Lời giải",
  solver: "bà Meryt",
  firstDoc: "thu_moi",
  cover: "cover",
  coverStyle: "background-size:auto 100%;background-position:right center;background-repeat:no-repeat;background-color:#07090a",
  music: "thu_nguoi_chet.mp3",   // original score, rendered by tools/compose07.py (reed, harp, frame drum, sistrum, chant)
  ambience: "ghostWedding",       // fallback if the file fails
  // Khonsu opens the gate on page one (rule 21: the killer sits in plain sight in a menial role);
  // Nebetiunet is the dead man's widow, named on the first bowl the player sees.
  publicNames: ["Khonsu", "Nebetiunet"],
  folders: ["Ngày 16 tháng 2 Peret", "Ngày 17", "Ngày 18", "Ngày 19", "Ngày 20", "Ngày 21", "Ngày 22", "Ngày 23", "Sau ngày 22"],
  wrong: [
    "Chưa đúng. Người làng Lăng đếm bằng con số của ký lục, không đếm bằng lời đồn.",
    "Sai. Có người đã đổi một thứ gì đó trên đường từ bến lên cổng.",
    "Chưa khớp. Đếm lại từ đầu, chậm thôi, như người đong lúa.",
    "Không phải. Đêm nay trên đỉnh núi lại có tiếng rắn cọ vảy.",
  ],
  finale: {
    html: `<h3>Ngày 23 tháng 2 mùa Peret · đền phía Tây</h3>
      <p>Tể tướng cho bẻ niêm. Lòng đấu lót một lớp vữa trắng dày một finger. Ba mươi bảy chén hin rưỡi.</p>
      <p>Lúa về ngày 24. Ngày 25 thợ lên Lăng. Bên Trái vẽ tiếp hình Bà Rắn chỗ Hay bỏ dở.</p>
      <p>Tối ấy Nebetiunet đặt một cái bát ở nhà nguyện. Sáng ra không có thư trả lời nào.</p>`,
    open: "bb_cuoi",
  },
  endings: [
    { id: "that", good: true, name: "Thư gửi người chết", how: "Cái đấu được niêm bằng con ấn kẻ gian không chạm tới, và đến tay tể tướng nguyên vẹn.", hint: "Chỉ một con ấn trong làng không qua tay người giữ cổng." },
    { id: "mot_nua", name: "Một nửa", how: "Có giấy tờ mà không có vật chứng. Kẻ giết người được tha.", hint: "Giấy tờ thôi chưa đủ." },
    { id: "im_lang", name: "Người yêu sự im lặng", how: "Cái đấu bị cạo sạch trước khi tới tay tể tướng.", hint: "Niêm bằng ấn nào thì người cầm ấn ấy mở được." },
    { id: "ba_ran", name: "Bà Rắn", how: "Kho đền bị đổ tội. Hai cái chết là thần phạt.", hint: "Đừng để vật chứng đi trong tay kẻ gian." },
    { id: "than", hidden: true, name: "Lời của thần", how: "Đi tuyến đúng không sai lần nào, không xem gợi ý: lật lại đống gốm trong nhà nguyện.", hint: "Kết thúc ẩn. Chỉ dành cho người không sai lần nào." },
  ],
  fatal: {
    warn: `<h3 class="fatal-h">GIỮA TRƯA NGÀY 22 · KHÔNG THỂ RÚT LẠI</h3>
      <p>Việc bạn chọn sẽ được làm ngay. Không có gợi ý, không có lời giải, không làm lại được trong lượt này.</p>
      <p>Mỗi lựa chọn dẫn tới một kết thúc khác nhau. Hãy nghĩ xem vật chứng nào phải tới tay tể tướng, và tới bằng cách nào.</p>`,
    scare: ["cobra", "ran_scare", 6000],
    ending: routeOf,
    html: () => {
      const k = (state.failed?.choice || "A").charAt(0);
      return `<h3>KẾT THÚC · ${({ ba_ran: "BÀ RẮN", im_lang: "NGƯỜI YÊU SỰ IM LẶNG", mot_nua: "MỘT NỬA" })[routeOf(state.failed?.choice)]}</h3>
        <p>${LOST[k] || LOST.A}</p>
        <p class="small muted">Đây là một trong năm kết thúc. Bạn có thể mở lại hồ sơ để đi tuyến khác.</p>`;
    },
    open: () => "bb_xau",
    lost: "Việc bạn chọn đã được làm. Đọc thư mục cuối cùng, rồi mở lại hồ sơ nếu bạn muốn đi tuyến khác. Những kết thúc đã mở được giữ lại.",
  },
  scares: { 2: ["cobra", "thu_den_scare", 3000], 3: ["cobra", "ran_scare", 3200], 5: ["cobra", "ba_ran_scare", 3200, { main: true, hold: 5000 }] },
  dreadLevels: [0, 1, 2, 3, 3, 4, 4],
  dread: {
    phrases: ["Bà Rắn", "lúa của thần", "đong một đấu", "anh không thề gian", "người yêu sự im lặng", "cái chén mẻ", "ipet"],
    notes: { 2: "sáng nào cũng có thư trả lời", 3: "mùa này rắn ngủ trong cát", 4: "ai cầm ấn lên đèo đêm ấy" },
    scare: "ran_scare",
    extra: [{ min: 2, every: [60000, 120000], sfx: "hum" }, { min: 3, every: [45000, 90000], sfx: "scrape" }],
  },
};
