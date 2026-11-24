// Case 08 "Độ Kiếp": every number the documents print, in one place, so tools/solve08.mjs can solve the case from the
// same data the player reads (rule 23). Lunar dates of the year Canh Tý (1120), see tools/gen/cal08.py.

// ---------------------------------------------------------------- calendar
export const MONTH_START = { 1: "Nhâm Dần", 2: "Tân Mùi", 3: "Tân Sửu", 4: "Canh Ngọ", 5: "Canh Tý", 6: "Canh Ngọ" };
export const MONTH_LEN = { 1: 29, 2: 30, 3: 29, 4: 30, 5: 30 };
// Solar terms of the year (lunar month/day), as the almanac prints them.
export const TERMS = [
  ["Lập xuân", "28/12 năm Kỷ Hợi"], ["Vũ thủy", "13/1"], ["Kinh trập", "28/1"], ["Xuân phân", "14/2"], ["Thanh minh", "29/2"],
  ["Cốc vũ", "15/3"], ["Lập hạ", "1/4"], ["Tiểu mãn", "17/4"], ["Mang chủng", "3/5"], ["Hạ chí", "18/5"], ["Tiểu thử", "4/6"], ["Đại thử", "20/6"],
];
export const CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
export const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const gzIndex = (s) => { const [c, h] = s.split(" "); for (let i = 0; i < 60; i++) if (CAN[i % 10] === c && CHI[i % 12] === h) return i; return -1; };
export const ganzhi = (month, day) => { const i = (gzIndex(MONTH_START[month]) + day - 1) % 60; return `${CAN[i % 10]} ${CHI[i % 12]}`; };
/** Day n of the closed-door retreat (day 1 = 8/3) as [month, day]. */
export const retreatDate = (n) => { let m = 3, d = 8 + n - 1; while (d > MONTH_LEN[m]) { d -= MONTH_LEN[m]; m++; } return [m, d]; };

// ---------------------------------------------------------------- the night of the storm (27 rạng 28 tháng Tư)
// A Mặc's thunder log: [n, khắc on the arrow since dusk, direction (trigram), "niệm" counted between flash and thunder]
export const STRIKES = [[1, 12, "Khảm", 9], [2, 14, "Ly", 7], [3, 16, "Chấn", 5], [4, 18, "Đoài", 6], [5, 20, "Cấn", 4],
  [6, 22, "Cấn", 2], [7, 24, "Tốn", 4], [8, 26, "Khôn", 8], [9, 33, "Càn", 0]];   // line 9 was written the next morning
export const FAKE_STRIKE = 9;
export const RAIN = { start: 11, stop: 34 };   // khắc since dusk
export const BO_PER_NIEM = 220;                // Ngũ Lôi pháp: each "niệm" the bolt is 220 bộ further
// Survey of the mountain paths, from the watch hut on Lôi Đài: [place, trigram, bộ]
export const SURVEY = [["Huyền Chân động", "Khảm", 60], ["Hạc viện", "Ly", 380], ["Thạch lâm", "Cấn", 450], ["Tổ sư điện", "Khảm", 520],
  ["Tàng Kinh các", "Tốn", 560], ["Đan phòng", "Đoài", 600], ["Lò rèn", "Chấn", 640], ["Giới luật đường", "Khôn", 700],
  ["Tam Thanh điện", "Khảm", 780], ["Trai đường", "Càn", 820], ["Khách xá", "Càn", 900], ["Dược phố", "Ly", 900]];
// Night length of each solar term on the water clock (khắc of the night, 100 khắc a day): longest at Đông chí, shortest at Hạ chí.
export const TERM_ORDER = ["Đông chí", "Tiểu hàn", "Đại hàn", "Lập xuân", "Vũ thủy", "Kinh trập", "Xuân phân", "Thanh minh", "Cốc vũ",
  "Lập hạ", "Tiểu mãn", "Mang chủng", "Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ", "Thu phân", "Hàn lộ",
  "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết"];
/** Night length in "phân" (60 phân = 1 khắc) for a solar term. */
export const nightPhan = (term) => { const i = TERM_ORDER.indexOf(term), k = Math.min(i, 24 - i); return Math.round((50 + 10 * Math.cos(Math.PI * k / 12)) * 60); };
export const khacPhan = (p) => `${Math.floor(p / 60)} khắc${p % 60 ? ` ${p % 60} phân` : ""}`;

// ---------------------------------------------------------------- pills and cranes
// Cửu chuyển hoàn: first pill 2 thù 4 lũy, plus 2 lũy 4 thử a day. 10 thử = 1 lũy, 10 lũy = 1 thù, 24 thù = 1 lạng = 10 tiền,
// 1 tiền = 10 phân. So the pill of day n weighs 10 + (n - 1) phân.
export const pillPhan = (day) => 10 + (day - 1);
// [crane, day of the pill found in its crop, date it died]
export const CRANES_DEAD = [["Bạch Vân", 14, "24/3"], ["Thanh Điểu", 12, "27/3"], ["Hồng Đỉnh", 19, "29/3"], ["Ngọc Cước", 22, "5/4"],
  ["Tuyết Y", 25, "9/4"], ["Mặc Vũ", 31, "13/4"], ["Lão Tùng", 38, "20/4"]];
export const CRANES_ALIVE = ["Thanh Phong", "Hàn Sương", "Tiểu Bạch", "Vân Cước", "Đơn Đỉnh"];
// The balance's weights, in phân (market set: 1 lạng = 10 tiền, 1 tiền = 10 phân).
export const WEIGHTS = [["w1", "1 lạng", 100], ["w2", "5 tiền", 50], ["w3", "2 tiền", 20], ["w4", "1 tiền", 10], ["w5", "1 tiền", 10],
  ["w6", "5 phân", 5], ["w7", "2 phân", 2], ["w8", "1 phân", 1], ["w9", "1 phân", 1]];

// ---------------------------------------------------------------- the cave door (nine discs, South at the top)
export const TRIGRAMS = ["Càn", "Đoài", "Ly", "Chấn", "Tốn", "Khảm", "Cấn", "Khôn"];
export const TRIGRAM_GLYPH = { "Càn": "☰", "Đoài": "☱", "Ly": "☲", "Chấn": "☳", "Tốn": "☴", "Khảm": "☵", "Cấn": "☶", "Khôn": "☷" };
// Later Heaven numbers (Lạc Thư palaces) and directions
export const HAU_THIEN = { "Khảm": 1, "Khôn": 2, "Chấn": 3, "Tốn": 4, "Càn": 6, "Đoài": 7, "Cấn": 8, "Ly": 9 };
export const TIEN_THIEN = { "Càn": 1, "Đoài": 2, "Ly": 3, "Chấn": 4, "Tốn": 5, "Khảm": 6, "Cấn": 7, "Khôn": 8 };
export const PALACE_DIR = { 1: "Bắc", 2: "Tây Nam", 3: "Đông", 4: "Đông Nam", 5: "Trung", 6: "Tây Bắc", 7: "Tây", 8: "Đông Bắc", 9: "Nam" };
export const FLY_PATH = ["Trung", "Tây Bắc", "Tây", "Đông Bắc", "Nam", "Bắc", "Tây Nam", "Đông", "Đông Nam"];   // Lạc Thư order 5,6,7,8,9,1,2,3,4
export const DOOR_LAYOUT = [["Đông Nam", "Nam", "Tây Nam"], ["Đông", "Trung", "Tây"], ["Đông Bắc", "Bắc", "Tây Bắc"]];   // South on top
export const RETREAT_DAY = 8;   // entered on the 8th of the third month (Mậu Thân)
// Where the discs sit when the player first finds the door (not the answer)
export const DOOR_START = ["Khảm", "Càn", "Ly", "Tốn", "Khôn", "Chấn", "Đoài", "Cấn", "Khảm"];

// ---------------------------------------------------------------- the jade slip: see ngocgian.js (generated)
export { REALMS, REG_NEW, REG_OLD, MARKS } from "./ngocgian.js";

// ---------------------------------------------------------------- answers for the tools (the game reads them from secret.js)
export const ELDER_LOCK = CRANES_DEAD.slice(0, 4).map((c) => c[1]);   // 14, 12, 19, 22 in the order the cranes died
