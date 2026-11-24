// Case 08 entry point: "Độ Kiếp". Núi Vân Khư, Bắc Tống, Tuyên Hoà năm thứ hai (1120). Bible: docs/HS08_KINH_THANH.md.
import d0 from "./docs0.js";
import d1 from "./docs1.js";
import d2 from "./docs2.js";
import d3 from "./docs3.js";
import d4 from "./docs4.js";
import d5 from "./docs5.js";
import d6 from "./docs6.js";
import { lockbox, scale } from "../../js/puzzles.js";
import { SEALED } from "./locks.js";
import { state } from "../../js/store.js";
import { TRIGRAMS, TRIGRAM_GLYPH, DOOR_START, CRANES_DEAD, WEIGHTS } from "./data.js";
export { QUESTIONS, START_CLOCK, END_CLOCK } from "./questions.js";
export { SECRET, SECRET_KEY } from "./secret.js";
export const TAPES = {};
export const DOCS = [...d0, ...d1, ...d2, ...d3, ...d4, ...d5, ...d6];

// Pill weights, lightly scrambled so they are not read straight off the page source (the balance shows no numbers).
const PILL = Object.fromEntries(CRANES_DEAD.map(([n, day], i) => [`p${i}`, ((10 + day - 1) * 37 + 11) ^ 0x5a]));
const pillMass = (id) => ((PILL[id] ^ 0x5a) - 11) / 37;
const N49 = Array.from({ length: 49 }, (_, i) => i + 1);
export const MEDIA = {
  tran: (el) => lockbox(el, { id: "tran", rings: Array.from({ length: 9 }, () => TRIGRAMS), cols: 3, content: SEALED.tran,
    start: DOOR_START.map((q) => TRIGRAMS.indexOf(q)), label: (q) => `<span class="tri" title="">${TRIGRAM_GLYPH[q]}</span>`,
    openText: "Đẩy cửa", failText: "Cửa không nhúc nhích. Các đĩa kẹt lại." }),
  tu: (el) => lockbox(el, { id: "tu", rings: [N49, N49, N49, N49], content: SEALED.tu, openText: "Kéo cánh tủ", failText: "Cánh tủ không mở. Các vòng kẹt lại." }),
  can: (el) => scale(el, {
    id: "can",
    // the pills are on the table only once the crane boy has handed over his pouch
    items: state.confronted?.tieu_tung ? CRANES_DEAD.map(([n], i) => ({ id: `p${i}`, name: `Viên buộc thẻ ${n}` })).sort((a, b) => a.name.localeCompare(b.name, "vi")) : [],
    weights: WEIGHTS.map(([id, label]) => ({ id, label })),
    mass: (kind, id) => (kind === "item" ? pillMass(id) : WEIGHTS.find((w) => w[0] === id)[2]),
    itemTitle: state.confronted?.tieu_tung ? "Đĩa trái: một viên đan" : "Đĩa trái: bạn chưa có gì để đặt lên",
    weightTitle: "Đĩa phải: quả cân",
  }),
};
/** Stand-in when a scare picture is missing: a lightning sign, no human figure. */
export const ART = { get ghostFace() { return ART.bolt; }, bolt: () => `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#05070a"/><path d="M170 20 L90 170 H150 L120 285 L215 120 H155 Z" fill="#dfe8ff"/></svg>` };

/** Which ending each wrong choice on day 7 leads to. */
const ROUTE = { A: "tien_tich", B: "gioi_luat", C: "nghia_nu", D: "than_nguoi", E: "dan_doc" };
const routeOf = (c) => ROUTE[(c || "").charAt(0)] || "tien_tich";
const NAME = { tien_tich: "TIÊN TÍCH", gioi_luat: "GIỚI LUẬT", nghia_nu: "NGHĨA NỮ", than_nguoi: "THAN NGUỘI", dan_doc: "ĐAN ĐỘC" };

export const META = {
  strict: true,
  timeLimit: 300,
  hintCost: { hint: 10, solve: 20 },
  pinRoles: false,
  puzzles: [
    { n: 20, q: "q1", name: "Sổ sấm: đếm niệm giữa chớp và sấm, đổi ra bộ, so với sổ đo đường núi" },
    { n: 24, q: "q1", name: "Lậu khắc: khắc đêm theo tiết, tiễn chưa thay" },
    { n: 31, q: "q4", tool: "lockbox", media: "tran", name: "Trận cửu cung trên cửa động: Lạc Thư, phi tinh, dương độn, quẻ Văn Vương (nhánh B)" },
    { n: 32, q: "q5", tool: "scale", media: "can", name: "Cân đan: thù, lũy, thử đổi ra tiền, phân" },
    { n: 12, q: "q6", tool: "lockbox", media: "tu", chain: "q5", name: "Tủ thuốc bốn vòng: ngày của bốn viên đan theo thứ tự hạc chết" },
    { n: 33, q: "q6", chain: "q6", name: "Ngọc giản hai lớp: cảnh giới chỉ người theo sổ khảo hạch, số chỉ chữ cái" },
  ],
  series: "Hồ sơ Nửa Đêm",
  number: "Hồ sơ số 08",
  title: "Độ Kiếp",
  place: "Núi Vân Khư, phủ Hà Nam · Bắc Tống, Tuyên Hoà năm thứ hai, tháng Tư",
  blurb: "Chín tiếng sét đánh xuống Lôi Đài. Sáng ra trên đàn tế chỉ còn tro, tấm đạo bào và thanh kiếm gãy; tông môn tâu về triều rằng chưởng môn đã phi thăng. Cùng đêm ấy trưởng lão giữ lò đan chết trước lò. Hồn đăng của chưởng môn trong Tổ sư điện vẫn cháy. Bạn là Giám nghĩa của Đạo lục viện, có bảy ngày để ký xác nhận tiên tích.",
  players: "1–4 người",
  time: "300 phút",
  level: "Cực khó (mức 5) · tu tiên, Trung Hoa cổ · có quyết định không rút lại",
  boss: "Không ai",
  narrator: "Sổ tay Giám nghĩa",
  solutionLabel: "Lời giải",
  solver: "Giám nghĩa",
  firstDoc: "lenh_cu",
  coverFocus: "50% 40%",
  cover: "cover",
  coverStyle: "background-size:auto 100%;background-position:right center;background-repeat:no-repeat;background-color:#07090a",
  music: "do_kiep.mp3",   // original score, rendered by tools/compose08.py (guqin, stone chime, bell, chant, nine drum strokes)
  ambience: "rain",       // fallback if the file fails
  // Met on the first pages: the women and men of the sect who may later be answers.
  publicNames: ["Tĩnh Hư", "Tào Thuận", "Lăng Tiêu Tử"],
  folders: ["Ngày thứ nhất · 28 tháng Tư", "Đêm thứ nhất", "Ngày thứ hai · 29 tháng Tư", "Đêm thứ ba · 30 tháng Tư", "Ngày thứ tư · mồng 1 tháng Năm",
    "Ngày thứ năm · mồng 2 tháng Năm", "Ngày thứ sáu · mồng 3 tháng Năm", "Ngày thứ bảy · mồng 4 tháng Năm", "Sau ngày thứ bảy"],
  wrong: [
    "Chưa khớp. Trên núi này, giấy tờ nói thật hơn người.",
    "Sai. Đếm lại, như người đếm tiếng sấm.",
    "Không phải. Đêm nay chuông canh trên đỉnh đánh lệch một nhịp.",
    "Chưa đúng. Có ai đó vừa đi ngang cửa sổ khách xá.",
  ],
  map: {
    home: "khach_xa", cost: 3, image: "ban_do_nen",
    places: [
      { id: "son_mon", name: "Sơn môn", note: "Cổng núi, chín trăm chín mươi chín bậc." },
      { id: "tam_thanh", name: "Tam Thanh điện", note: "Điện chính; điện phụ làm linh đường." },
      { id: "to_su", name: "Tổ sư điện", note: "Hồn đăng các đời." },
      { id: "dan_phong", name: "Đan phòng", note: "Lò đan, buồng trưởng lão Đan phòng." },
      { id: "trai_duong", name: "Trai đường", note: "Bếp, kho gạo, kho than." },
      { id: "tang_kinh", name: "Tàng Kinh các", note: "Kinh sách, sổ sách cũ." },
      { id: "gioi_luat", name: "Giới luật đường", note: "Sổ phạt, sổ đệ tử, hồ sơ ruộng." },
      { id: "hac_vien", name: "Hạc viện", note: "Sân nuôi hạc." },
      { id: "duoc_pho", name: "Dược phố", note: "Vườn thuốc, kho thuốc." },
      { id: "lo_ren", name: "Lò rèn", note: "Thợ rèn của quán." },
      { id: "loi_dai", name: "Lôi Đài", note: "Đỉnh núi, chòi canh." },
      { id: "dong", name: "Huyền Chân động", note: "Động phủ của chưởng môn, dưới đỉnh." },
      { id: "thach_lam", name: "Thạch lâm", note: "Rừng tháp mộ." },
      { id: "ha_khe", name: "Hạ Khê", note: "Làng dưới chân núi.", cost: 6 },
    ],
  },
  docScares: {
    hien_truong_ld: ["tro", "tro_scare", 2200],
    tui_dan: ["hac", "hac_scare", 1600],
    khai_quan: ["quan_tai", "quan_tai_scare", 1400, { main: true, hold: 5000 }],
    hoc_da: ["hoc_da", "hoc_da_scare", 1400, { main: true, hold: 5000 }],
  },
  scares: { 5: ["dem5", "dem_thu_nam", 2600], 8: ["hon_dang", "hon_dang_scare", 3000, { main: true, hold: 5000 }] },
  dreadLevels: [0, 1, 1, 2, 3, 3, 4, 4],
  dread: {
    phrases: ["thiên lôi ẩn ẩn", "đèn chưa tắt", "chín tiếng", "đạo tiêu", "người không ra", "khói tắt", "bế quan"],
    notes: { 2: "khói ống động phủ", 3: "người vào tự khoá", 4: "hạc kêu theo khánh" },
    scare: "tro_scare",
    extra: [{ min: 2, every: [60000, 120000], sfx: "hum" }, { min: 3, every: [45000, 90000], sfx: "scrape" }],
  },
  finale: {
    html: () => `<h3>Giờ Ngọ mồng 4 tháng Năm · sơn môn</h3>
      <p>Nội thị đọc tờ tâu của bạn hai lần. Quan phủ bóc niêm lỗ thở trước mặt ông: bao tải gai, phiến đá, vành muội.</p>
      <p>Tào Thuận không chạy. Hắn đặt gánh than xuống bậc đá, chìa hai tay ra.</p>
      <p>${state.branch === "B" ? "Chiều ấy người ta đục hốc vữa trong động." : "Hốc vữa trong động vẫn kín. Tĩnh Hư xin được tự tay đục."}</p>`,
    open: "ket_do_kiep",
  },
  endings: [
    { id: "do_kiep", good: true, name: "Độ Kiếp", how: "Không ký; tang vật được niêm bằng ấn Viện trước khi ai kịp đụng tới; ngọc giản tới tay triều đình.", hint: "Luật Tống cần một thứ mà lời nói không thay được." },
    { id: "tien_tich", name: "Tiên tích", how: "Bạn ký. Ruộng Thượng Khê được cấp ngay.", hint: "Đọc lại lệnh cử của Viện." },
    { id: "gioi_luat", name: "Giới luật", how: "Bạn tố người có động cơ, không phải người có mặt.", hint: "Ai ngồi chép sách cả đêm mưa?" },
    { id: "nghia_nu", name: "Nghĩa nữ", how: "Bạn tố người dựng tiên tích là người giết.", hint: "Đêm 18 tháng Ba, tiếng khánh vẫn đủ năm canh." },
    { id: "than_nguoi", name: "Than nguội", how: "Bạn bắt đúng người, nhưng tay không.", hint: "Tang vật không niêm thì không thành chứng." },
    { id: "dan_doc", name: "Đan độc", how: "Bạn tin vào lò đan.", hint: "Chuột chết, hạc chết: vì đâu?" },
    { id: "hon_dang", hidden: true, name: "Hồn đăng không tắt", how: "Đi tuyến đúng không sai lần nào, không xem gợi ý: ngồi lại đêm cuối trong Tổ sư điện.", hint: "Kết thúc ẩn. Chỉ dành cho người không sai lần nào." },
  ],
  fatal: {
    warn: `<h3 class="fatal-h">GIỜ THÌN MỒNG 4 · KHÔNG THỂ RÚT LẠI</h3>
      <p>Việc bạn chọn sẽ được làm ngay, trước mặt nội thị. Không có gợi ý, không có lời giải, không làm lại được trong lượt này.</p>
      <p>Mỗi lựa chọn dẫn tới một kết thúc khác. Nghĩ xem luật đòi gì, và ai còn kịp động tay vào tang vật.</p>`,
    scare: ["tro_end", "tro_scare", 6000],
    ending: routeOf,
    html: () => `<h3>KẾT THÚC · ${NAME[routeOf(state.failed?.choice)]}</h3>
      <p>Việc bạn chọn đã được làm. Đọc thư mục cuối cùng.</p>
      <p class="small muted">Đây là một trong bảy kết thúc. Bạn có thể mở lại hồ sơ để đi tuyến khác.</p>`,
    open: () => ({ tien_tich: "kt_tien_tich", gioi_luat: "kt_gioi_luat", nghia_nu: "kt_nghia_nu", than_nguoi: "kt_than_nguoi", dan_doc: "kt_dan_doc" })[routeOf(state.failed?.choice)],
    lost: "Việc bạn chọn đã được làm. Đọc thư mục cuối cùng, rồi mở lại hồ sơ nếu bạn muốn đi tuyến khác. Những kết thúc đã mở được giữ lại.",
  },
};
