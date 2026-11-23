// Case 07 "Thư gửi người chết": every number in the case lives here, so the documents, the widgets
// and tools/solve07.mjs all read the same data. Nothing in this file is shown to the player as-is.
//
// Calendar: civil year = Akhet I–IV, Peret I–IV, Shemu I–IV (30 days each) + 5 days at year end.
// Weeks are 10 days (1–10, 11–20, 21–30). The story is in Peret II (month 6), year 29.

export const SEASONS = ["Akhet", "Peret", "Shemu"];
/** Week of the year (1-based) for month m (1–12) and day d. */
export const weekOfYear = (m, d) => (m - 1) * 3 + Math.ceil(d / 10);

// ------------------------------------------------------------------ people
export const RIGHT = {
  foreman: "Nakhtmin",
  workers: ["Neferabu", "Qaha", "Ipuy", "Khabekhnet", "Baki", "Amenemhat", "Huy", "Penbuy", "Nebnefer", "Pashedu", "Iry"],
  youths: ["Tjay", "Kasa"],
};
export const LEFT = {
  foreman: "Sennefer",
  workers: ["Hay", "Pentaweret", "Anhotep", "Khaemwaset", "Mahu", "Nakhy", "Setau", "Djedi", "Ruty", "Seba", "Wennefer"],
  youths: ["Mose"],
};
export const SCRIBE = "Userhat";
export const GATE = ["Khonsu", "Ptahmose"];    // Khonsu: village gate; Ptahmose: old keeper of the pass huts

// ------------------------------------------------------------------ rations (khar per month)
// 1 khar = 4 oipe = 16 hekat; 1 hekat = 10 hin.
export const RATE = {
  foreman: { emmer: 5.5, barley: 2 },
  scribe: { emmer: 5.5, barley: 2 },
  worker: { emmer: 4, barley: 1.5 },
  youth: { emmer: 1.5, barley: 0.5 },
  gate: { emmer: 1, barley: 0.5 },          // paid at the river granary, never through the gate measure
};
/** Everyone paid through the village gate, with their rank. */
export function payroll() {
  const rows = [];
  for (const [side, g] of [["Phải", RIGHT], ["Trái", LEFT]]) {
    rows.push({ side, name: g.foreman, rank: "foreman" });
    g.workers.forEach((n) => rows.push({ side, name: n, rank: "worker" }));
    g.youths.forEach((n) => rows.push({ side, name: n, rank: "youth" }));
  }
  rows.push({ side: "", name: SCRIBE, rank: "scribe" });
  return rows;
}
export const MONTHS_PAID = ["Akhet III", "Akhet IV", "Peret I"];
/** The gate measure holds 15/16 of a true oipe. */
export const GATE_RATIO = 15 / 16;
export const OIPE_HIN = 40;                   // a true oipe holds 40 hin of water
export const GATE_HIN = OIPE_HIN * GATE_RATIO; // 37.5

// Cells of the payroll ostraca that are broken off (month index, name, "emmer" | "barley").
export const BROKEN = [[0, "Qaha", "emmer"], [0, "Mose", "barley"], [1, "Nakhy", "emmer"], [2, "Kasa", "emmer"], [2, SCRIBE, "barley"]];

// Userhat's private re-measuring (true measure of the Tomb), in hekat. Two households also repay a loan at the gate.
export const LOANS = { Baki: 2, Mahu: 1 };     // hekat taken back at the gate each month (see the loan ostracon)
export const REMEASURED = ["Nakhtmin", "Neferabu", "Baki", "Tjay", "Sennefer", "Hay", "Pentaweret", "Mahu", "Mose", "Userhat"];

// ------------------------------------------------------------------ lamp wicks at the pass huts
// One wick burns 4 hours. Issued at dusk, stubs handed back at dawn, measured in quarters of a wick.
export const WICK_HOURS = 4;
export const HUTS = ["Nakhtmin", "Neferabu", "Qaha", "Ipuy", "Baki", "Huy", "Sennefer", "Hay", "Pentaweret", "Anhotep", "Mahu", "Setau", "Djedi", "Seba", "Trạm gác đèo"];
/** wicks[night] = { hut: [issued, quarters returned] }; a whole wick returned unburnt = 4 quarters. */
export const WICKS = {
  12: { Nakhtmin: [1, 1], Neferabu: [1, 2], Qaha: [1, 0], Ipuy: [1, 1], Baki: [1, 2], Huy: [1, 1], Sennefer: [1, 1], Hay: [1, 0], Pentaweret: [2, 1], Anhotep: [1, 2], Mahu: [1, 1], Setau: [1, 2], Djedi: [1, 1], Seba: [1, 0], "Trạm gác đèo": [2, 3] },
  13: { Nakhtmin: [1, 4], Neferabu: [1, 1], Qaha: [1, 2], Ipuy: [1, 1], Baki: [1, 1], Huy: [1, 2], Sennefer: [1, 1], Hay: [1, 1], Pentaweret: [2, 0], Anhotep: [1, 1], Mahu: [1, 2], Setau: [1, 1], Djedi: [1, 4], Seba: [1, 1], "Trạm gác đèo": [2, 2] },
  14: { Nakhtmin: [1, 1], Neferabu: [1, 2], Qaha: [1, 1], Ipuy: [1, 2], Baki: [1, 1], Huy: [1, 1], Sennefer: [0, 0], Hay: [1, 3], Pentaweret: [2, 1], Anhotep: [1, 1], Mahu: [1, 2], Setau: [1, 1], Djedi: [1, 1], Seba: [1, 2], "Trạm gác đèo": [2, 0] },
};
// Userhat's house, night of the 19th: one wick lit at the first hour; lamp knocked over, a quarter left.
export const USERHAT_WICK = { issued: 1, left: 1 };   // quarters left -> burnt 3/4 of 4 h = 3 h

// ------------------------------------------------------------------ tomb progress (cubits cut by end of day)
// 1 cubit = 7 palms = 28 fingers.
export const PROGRESS = {
  "Hành lang B (bên Phải)": { 11: 6, 12: 7, 13: 10, 14: 10, 15: 11 },
  "Hành lang C (bên Trái)": { 11: 5, 12: 7, 13: 9, 14: 11, 15: 11 },
  "Phòng phụ D (bên Trái)": { 11: 0, 12: 0, 13: 1, 14: 2, 15: 2 },
};
export const BODY = { corridor: "Hành lang C (bên Trái)", cubit: 9, palm: 3, finger: 2 };   // 9 + 3/7 + 2/28 cubits

// ------------------------------------------------------------------ seals
export const SEAL_WEEKS = (() => {   // weeks 1–36 of the year: which side keeps the seal of the Tomb
  const t = {};
  for (let w = 1; w <= 36; w++) t[w] = w % 2 ? "Phải" : "Trái";
  return t;
})();
export const DEATH = { month: 6, day: 14 };   // Peret II, 14: week 17 -> "Phải"? see note below
// Note: weekOfYear(6, 14) = 17, odd -> Phải by the rule above. The rota is NOT a plain alternation:
// the two sides swapped once at the New Year festival (week 13 was kept twice by the Left), so from week 13
// on, odd weeks belong to the Left. SEAL_ROTA below is what the scribe actually wrote down.
export const SEAL_ROTA = (() => {
  const t = {};
  for (let w = 1; w <= 36; w++) t[w] = w < 13 ? (w % 2 ? "Phải" : "Trái") : w === 13 ? "Trái" : (w % 2 ? "Trái" : "Phải");
  return t;
})();

// ------------------------------------------------------------------ snakes (book of snakes, 14 species)
export const SNAKES = [
  { id: "cerastes", name: "Rắn hổ mang sừng", look: "Thân to ngắn, màu cát vàng, đốm nâu nhạt; hai sừng nhọn nhỏ dựng ngay trên mắt; đồng tử dọc", fang: 6, bite: "Sưng to, bầm tím lan nhanh, chảy máu ở vết cắn và chân răng; không sụp mí", season: "Ngủ trong cát từ tháng 3 Akhet tới hết tháng 3 Peret" },
  { id: "vipera", name: "Rắn lục sa mạc không sừng", look: "Nhỏ, dài chừng một gang rưỡi, màu cát nhạt, không sừng; mắt nằm sát đỉnh đầu", fang: 4, bite: "Sưng vừa, đau rát, hiếm khi chết người", season: "Ngủ trong cát từ tháng 3 Akhet tới hết tháng 3 Peret" },
  { id: "pseudo", name: "Rắn lục sừng giả", look: "Thân to ngắn, màu xám cát; trên mắt có chùm vảy dựng lên trông như sừng; đuôi có túm vảy như con nhện", fang: 6, bite: "Sưng nhẹ, rồi sụp mí, nuốt khó, khó thở", season: "Bò ra cả mùa lạnh, ẩn trong khe đá" },
  { id: "echis", name: "Rắn lục thảm (vảy cưa)", look: "Mảnh, nâu xám, hàng đốm trắng dọc lưng; cọ vảy ra tiếng rè rè như cưa", fang: 5, bite: "Sưng, máu không đông, chảy máu chân răng, mũi; chết sau vài ngày", season: "Ngủ trong hang tháng lạnh nhất" },
  { id: "haje", name: "Rắn hổ mang Ai Cập", look: "Dài, nâu hoặc đen, bành mang khi bị chọc", fang: 9, bite: "Ít sưng; sụp mí, nói khó, khó thở, chết trong vài giờ", season: "Ngủ đông trong hang chuột, ra khi nắng ấm" },
  { id: "nubiae", name: "Rắn hổ mang phun nọc", look: "Dài, nâu nhạt, có vạch đen ngang cổ; phun nọc vào mắt", fang: 8, bite: "Phồng rộp, hoại da quanh vết cắn; nọc vào mắt gây mù", season: "Ra cả mùa lạnh ở gần nước" },
  { id: "walter", name: "Rắn đen sa mạc", look: "Đen bóng toàn thân, đầu tròn nhỏ", fang: 7, bite: "Ít đau; sụp mí, yếu cơ, khó thở", season: "Ngủ đông dưới đá" },
  { id: "atractaspis", name: "Rắn hang", look: "Đen, đầu nhỏ không rõ cổ; cắn ngang bằng một răng nanh thò ra mép", fang: 0, bite: "Một vết thủng duy nhất; đau dữ, sưng, nôn", season: "Sống dưới đất, ra khi mưa" },
  { id: "telescopus", name: "Rắn mắt mèo", look: "Mảnh, vàng cam, khoanh đen; đồng tử dọc", fang: 3, bite: "Tê nhẹ, không nguy hiểm", season: "Ra đêm, cả mùa lạnh trong nhà" },
  { id: "platyceps", name: "Rắn roi", look: "Rất dài, mảnh, chạy nhanh, nâu ô liu", fang: 2, bite: "Vết xước nhiều răng nhỏ, không độc", season: "Ngủ đông" },
  { id: "psammophis", name: "Rắn cát", look: "Mảnh, sọc dọc vàng nâu, đầu dài", fang: 3, bite: "Tê, sưng nhẹ", season: "Ngủ đông" },
  { id: "eryx", name: "Trăn cát", look: "Thân tròn to, đuôi cụt, đầu nhỏ, vằn vàng nâu", fang: 0, bite: "Không độc, vết răng nhỏ hình vòng", season: "Ngủ đông dưới cát" },
  { id: "lytorhynchus", name: "Rắn mũi xẻng", look: "Nhỏ, mõm nhọn như xẻng để đào cát, màu cát vằn nâu", fang: 0, bite: "Không độc", season: "Ngủ đông" },
  { id: "natrix", name: "Rắn nước sông", look: "Xám ô liu, đốm vuông như bàn cờ, sống dưới nước", fang: 0, bite: "Không độc, tiết dịch hôi", season: "Ngủ đông ven bờ" },
];
export const USERHAT_BITE = { fangMm: 6, signs: "Sưng to, bầm tím lan tới khuỷu tay, chảy máu ở vết cắn và chân răng; mí mắt không sụp" };

// ------------------------------------------------------------------ the cryptographic line (Hay)
// Hay's picture-alphabet: an object stands for the first sound of its Egyptian name.
// The odd line on the wall decodes to i-p-t = "ipet" (oipe), the grain measure.
export const CRYPTO_ANSWER = "ipet";
