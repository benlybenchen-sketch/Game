// "Y lệnh có hậu quả": every wrong conclusion the player submits is carried out as one more increase of Thảo's
// sedative. Nothing is locked; the player hears and sees the consequence (slower tapes, blurred drawings, the ward log).
import { state } from "../../js/store.js";
import { QUESTIONS } from "./questions.js";

/** 0..3, from the number of wrong conclusions so far. */
export const dose = () => Math.min(3, Object.values(state.tries || {}).reduce((a, b) => a + (b || 0), 0));

/** The haloperidol log of room 7: admission dose, then one line per wrong conclusion. */
export function doseRows() {
  const rows = [["20/8/1996", "Haloperidol 5 mg × 2 lần/ngày", "BS. Đặng Quốc Kha", "Nhập viện"],
    ["2/9/1996", "Haloperidol 7,5 mg × 2 lần/ngày", "BS. Đặng Quốc Kha", "BN kích động sau buổi thăm"]];
  let mg = 7.5;
  QUESTIONS.forEach((q, i) => {
    for (let k = 0; k < (state.tries?.[q.id] || 0) && rows.length < 5; k++) {
      mg += 2.5;
      rows.push([`đêm trực ${i + 1}`, `Haloperidol ${String(mg).replace(".", ",")} mg × 2 lần/ngày`, "BS. Lê Bích Vân", "Theo kết luận của BS điều trị"]);
    }
  });
  return rows;
}

/** One line for the ward log, describing Thảo at the current dose. */
export const doseNote = () => ["BN tỉnh, ăn hết suất, hỏi gì trả lời nấy.", "BN chậm chạp, nói nhỏ, hay ngủ gật.",
  "BN ngủ li bì, nói lè nhè, hỏi tên mẹ không trả lời.", "BN cứng hàm, chảy nước dãi, mắt trợn ngược từng cơn. Đã báo BS trực."][dose()];

/** Pictures of Thảo's drawings blur with the dose. */
export const doseClass = () => `dose${dose()}`;
