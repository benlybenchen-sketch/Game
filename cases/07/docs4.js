// Case 07, day 5 (Peret II, 20): who keeps the seal of the Tomb each week, the seven seals of the west bank,
// the broken sealing from the tomb door (with fragments of another sealing mixed in), the gate's evening jobs.
import { ln, hand, media } from "../../js/kit.js";
import { gom } from "./docs0.js";
import { hn, seal, SEALS } from "./egypt.js";
import { SEAL_ROTA } from "./data.js";

// Evening jobs written in the Tomb's day book, Peret II 8–20. One line a night (line ids for the click question).
const JOBS = [
  [8, "Người cổng làng gánh nước lên đèo, mang ấn bên Phải lên trạm gác."],
  [9, "Ông Ptahmose xuống cổng lấy ấn bên Phải. Người cổng làng đưa thư của Lăng sang bến."],
  [10, "Người cổng làng sửa then cổng. Ông Ptahmose xuống lấy ấn."],
  [11, "Người cổng làng đưa bánh lên đèo. Ông Ptahmose xuống lấy ấn bên Trái."],
  [12, "Nghỉ lễ. Không ai lên Lăng. Ấn để ở nhà ký lục."],
  [13, "Ông Ptahmose xuống lấy ấn bên Trái, mang lên trạm gác. Người cổng làng chở lúa giống ra ruộng nhà nguyện."],
  [14, "Người cổng làng mang ấn bên Trái lên đèo, giao trạm gác, ngủ lại trên đèo vì ông Ptahmose đau lưng."],
  [15, "Ông Ptahmose xuống lấy ấn. Người cổng làng gánh nước cho nhà Hay làm tang."],
  [16, "Người cổng làng đón bà Meryt ở cổng. Ông Ptahmose xuống lấy ấn bên Trái."],
  [17, "Ông Ptahmose xuống lấy ấn bên Trái. Người cổng làng ra bến hỏi lúa."],
  [18, "Người cổng làng mở cổng cho kiệu. Ông Ptahmose xuống lấy ấn."],
  [19, "Người cổng làng gánh nước cho nhà ký lục làm tang. Ông Ptahmose xuống lấy ấn bên Trái."],
  [20, "Ông Ptahmose xuống lấy ấn bên Trái."],
];

export default [
  {
    id: "lich_an", stage: 4, kind: "Đồ vật", icon: "🔒", label: "Hòm gỗ của ký lục Userhat",
    html: () => `<div class="doc doc--plain">
      <p class="note">Hòm gỗ đen dưới gầm giường Userhat. Nắp có bốn then trượt, mỗi then khắc mười nấc số theo lối của Lăng. Chỉ khi cả bốn then đúng nấc thì nắp mới nhấc lên được.</p>
      ${gom(hand(`<p>Mặt trong nắp hòm, Userhat viết cho con:</p>
        <p>Then một: đêm mười ba, mấy mái lều trên đèo tối đèn.</p>
        <p>Then hai: một khar, mấy cái đấu.</p>
        <p>Then ba: Lăng có mấy thợ trẻ.</p>
        <p>Then bốn: tháng này là tháng thứ mấy của năm.</p>`), "Kenna chép lại cho bà; nó nhớ cha đọc như vậy mỗi lần khoá hòm.")}
      ${media("ruong", "chest")}
    </div>`,
  },

  {
    id: "mau_an", stage: 4, kind: "Mẫu ấn", icon: "◉", label: "Dấu mẫu của bảy con ấn ở bờ Tây",
    html: () => `<div class="doc doc--gom"><p class="note">Ký lục giữ dấu mẫu in trên đất sét để so khi có tranh chấp.</p>
      <div class="seal-grid">${Object.entries(SEALS).map(([k, s]) => `<figure>${seal(k)}<figcaption>${s.name}</figcaption></figure>`).join("")}</div></div>`,
  },

  {
    id: "dau_niem", stage: 4, kind: "Vật chứng", icon: "◉", label: "Những mảnh đất niêm nhặt dưới cửa lăng sáng 15",
    html: () => `<div class="doc doc--gom"><p class="note">Đội Medjay nhặt dưới bậc cửa lăng sau khi bên Trái phá niêm. Gói chung một túi vải với mấy mảnh nhặt ở cửa kho dụng cụ cạnh đó.</p>
      ${media("fragments", "door")}</div>`,
  },

  {
    id: "so_cong", stage: 4, kind: "Sổ sách", icon: "📓", label: "Sổ việc của Lăng, mục buổi tối, ngày 8–20",
    html: () => gom(hand(JOBS.map(([d, t]) => `<p>${ln(`sc_${d}`, `Tối ${d}: ${t}`)}</p>`).join("")), "Ký lục Userhat ghi; từ ngày 19, Anhotep ghi tiếp."),
  },

  {
    id: "khai_sennefer", stage: 4, kind: "Lời khai", icon: "✍", label: "Đốc công Sennefer nói với bà",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Đêm 14 tôi ở nhà. Con gái tôi sốt, vợ tôi thức, tôi thức.”</p>
      <p>“Ấn tuần này đến lượt bên tôi. Tôi là đốc công, không phải người gác.”</p>
      <p>“Hay còn nợ tôi hai deben đồng. Tôi không đòi nữa.”</p>
      <p>“Sáng 15 tôi phá niêm. Dấu còn nguyên, tôi thề.”</p>`)}</div>`,
  },

  {
    id: "thu_te_tuong", stage: 4, kind: "Thư", icon: "✉", label: "Thư của văn phòng tể tướng gửi làng",
    html: () => gom(hand(`<p>Tể tướng của Thượng và Hạ Ai Cập gửi thợ của Lăng.</p>
      <p>Lúa của các người sẽ về. Các người không được bỏ Lăng. Ai có điều kêu thì mang giấy tờ có niêm tới đền phía Tây, ta sẽ nghe.</p>
      <p>Vật chứng phải niêm bằng một con ấn mà người bị kêu không chạm tới được. Vật chứng không niêm, ta không xem.</p>`)),
  },
];

/** The seal rota inside Userhat's chest (sealed into locks.js by tools/lockbox.mjs). */
export const lichAnHtml = () => gom(`<p class="small">Ấn của Lăng niêm cửa lăng mỗi tối. Mỗi tuần một bên giữ. Ấn nhà nguyện do hai thầy tư tế giữ, không bao giờ ra khỏi nhà nguyện.</p>
  <table class="tbl tbl--num"><tr><th>Tuần</th><th>Bên giữ</th><th>Tuần</th><th>Bên giữ</th><th>Tuần</th><th>Bên giữ</th></tr>
  ${Array.from({ length: 12 }, (_, r) => `<tr>${[r + 1, r + 13, r + 25].map((w) => `<td>${hn(w)}</td><td>${SEAL_ROTA[w]}</td>`).join("")}</tr>`).join("")}</table>`,
  "Sổ giữ ấn năm 29, trong hòm. Tuần tính từ ngày Năm mới, mười ngày một tuần. Tuần 13 bên Trái giữ hai lần vì bên Phải nghỉ lễ Nehebkau.");
