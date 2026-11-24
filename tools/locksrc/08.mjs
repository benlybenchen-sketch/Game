// Case 08 lock contents (sealed by tools/lockbox.mjs). Codes are in secret.js (locks).
//  tran: the nine discs of the cave door, read row by row with South on top (route B, TĐ4).
//  tu:   the alchemy elder's medicine cabinet: the days of the four pills, in the order the cranes died (TĐ6).
import { TRIGRAMS, ELDER_LOCK, REALMS, MARKS } from "../../cases/08/data.js";
const W = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám"];
export const TRAN_CODE = ["Đoài", "Chấn", "Khôn", "Càn", "Cấn", "Khảm", "Khôn", "Tốn", "Ly"];
const tran = `<div class="doc doc--notebook"><div class="hand"><p>Đĩa giữa kêu một tiếng trầm. Cả phiến đá lùi vào trong một tấc rồi trượt sang trái.</p>
  <p>Hơi lạnh và mùi hương trầm ùa ra. Dưới mùi hương là mùi khác.</p></div></div>`;
const tu = `<div class="doc doc--old">
  <p class="note">Trong tủ, ngăn giữa: một thẻ ngọc trắng dài bằng bàn tay, bọc lụa vàng, và một tờ giấy gấp đôi.</p>
  <p class="ledger-head">NGỌC GIẢN</p>
  <p class="note">Mặt trước khắc: "Huyền Chân khắc, mồng bảy tháng Ba." Mặt sau khắc ${MARKS.length} dòng nhỏ:</p>
  <ol class="ngoc">${MARKS.map(([r, k]) => `<li>${REALMS[r]} · ${W[k]}</li>`).join("")}</ol>
  <p class="note">Tờ giấy gấp đôi, chữ trưởng lão Đan phòng:</p>
  <div class="hand"><p>Hai mươi tư tháng Tư. Bốn viên Tiểu Tùng đưa, cân theo thứ tự con hạc chết trước: Bạch Vân hai tiền ba phân, Thanh Điểu hai tiền một phân, Hồng Đỉnh hai tiền tám phân, Ngọc Cước ba tiền một phân.</p>
  <p>Theo đan phương, đó là viên ngày mười bốn, mười hai, mười chín, hai mươi hai. Viên ngày mười hai không ai dùng. Thầy không còn từ đêm mười tám.</p>
  <p>Ta khoá tủ bằng bốn số ấy. Ngọc giản thầy gửi ta giữ, ta chưa đọc. Nếu ta có mệnh hệ gì, người mở được tủ này hãy đọc thay ta.</p></div></div>`;
export const LOCKS = [{ id: "tran", code: TRAN_CODE, html: tran }, { id: "tu", code: ELDER_LOCK, html: tu }];
if (!TRAN_CODE.every((q) => TRIGRAMS.includes(q))) throw new Error("bad trigram");
