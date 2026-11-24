// Case 08, day 4 (mồng 1 tháng Năm): the crane boy's pouch, the recipes, the pill book, the balance, the weights book,
// the watch boy's nightly log, the vent on the summit. Route B also gets the cremation report.
import { ln, hand, media } from "../../js/kit.js";
import { giay, soTay, bang, soChu, cap } from "./kit8.js";
import { retreatDate, CRANES_DEAD } from "./data.js";

const smoke = (m, d) => {
  if (m === 3 && d < 18) return "Khói ống động phủ lên đều.";
  if (m === 3 && d === 18) return "Canh hai, khói ống động phủ tắt, không lên nữa. Con tưởng sư tổ nghỉ lửa.";
  if (m === 3 && d === 21) return "Ống động phủ vẫn không khói. Con hỏi trưởng lão Giới luật, ông bảo tới tầng ấy không cần lửa.";
  if (m === 3 && d === 23) return "Ống động phủ không khói. Ống Đan phòng cũng tắt, lò nghỉ.";
  return "Ống động phủ không khói.";
};
const WEATHER = ["Trời trong, sao nhiều.", "Mây mỏng, gió tây.", "Sương xuống sớm.", "Gió lạnh, trăng khuyết.", "Mưa phùn đầu hôm.", "Trời oi.", "Gió đông, mây chạy."];

export default [
  {
    id: "bien_ban_hoa_tang", stage: 4, branch: "B", kind: "Biên bản", icon: "📄", label: "Biên bản lò hoá sáng mồng 1",
    html: () => giay(hand(`<p>Giờ Mão mồng một tháng Năm, hoá trưởng lão Đan phòng ở lò sau Thạch lâm.</p>
      <p>Lúc nhấc ông từ quan sang giàn củi, miệng ông há ra, trong họng đen như lòng ống khói. Một cục than dẻ nhỏ rơi từ ống tay áo trái xuống đất. Người đốt lò nhặt lên, đưa tri khách giữ.</p>
      <p>Hoá xong giờ Tỵ. Tro đựng vào hũ sành, đặt ở Thạch lâm.</p>`), "Người đốt lò kể, Minh Kính chép, gửi tới khách xá."),
  },
  {
    id: "thu_phung_an_2", stage: 4, kind: "Thư", icon: "✉", label: "Thư thứ hai của nội thị",
    html: () => giay(hand(`<p>Ta đã tới huyện. Ba ngày nữa lên núi.</p>
      <p>Thánh thượng hỏi: Giám nghĩa đã ký chưa. Ta tâu: Giám nghĩa còn đang xem cho kỹ. Thánh thượng không vui.</p>
      <p>Ruộng Thượng Khê, quan phủ đã cho người cắm mốc sẵn, chỉ chờ tờ xác nhận.</p>`), "Gửi Giám nghĩa, qua tay Minh Kính."),
  },
  // ---------------------------------------------------------------- Hạc viện
  {
    id: "khai_tieu_tung", stage: 4, place: "hac_vien", kind: "Lời khai", icon: "🗣", label: "Lời khai: hạc đồng Tiểu Tùng",
    confront: { id: "tieu_tung", who: "Tiểu Tùng", after: "Thằng bé cầm tờ giấy, run run. Rồi nó chạy vào buồng, mang ra một cái túi vải nhỏ." },
    html: () => giay(hand(`<p>Hạc chết vì gió độc đầu hè. Năm nào cũng thế. Con chôn cả rồi.</p>
      <p>Con chôn ở dọc tường, mỗi con một nấm.</p>`), "Minh Kính hỏi, thằng bé không nhìn ai."),
  },
  {
    id: "khai_tieu_tung_2", stage: 4, via: "tieu_tung", kind: "Lời khai", icon: "🗣", label: "Tiểu Tùng nói thật",
    html: () => giay(hand(`<p>Con nói dối. Năm ngoái không con nào chết.</p>
      <p>Con nào chết con cũng mổ diều ra xem nó ăn phải gì, sư phụ trước dạy con thế. Con nào cũng có một viên vàng tròn trong diều. Con giữ hết, mỗi viên buộc tên con hạc ấy.</p>
      <p>Hôm hai mươi hai tháng Tư con đưa trưởng lão Đan phòng bốn viên của bốn con chết trước, đưa theo thứ tự con chết. Ông cầm lâu lắm, mặt trắng bệch. Ông cân từng viên, ghi gì đó, rồi trả con, dặn không được nói với ai.</p>
      <p>Cám hạc là hoả công gánh lên. Con không dám nghĩ.</p>`)),
  },
  {
    id: "tui_dan", stage: 4, via: "tieu_tung", kind: "Vật chứng", icon: "🟡", label: "Túi vải của hạc đồng",
    html: () => giay(`<p class="note">Túi vải xanh, trong có bảy viên tròn cỡ hạt sen, thếp vàng, nặng tay. Mỗi viên buộc một sợi chỉ đỏ với một thẻ tre nhỏ ghi tên một con hạc:</p>
      ${hand(`<p>${CRANES_DEAD.map(([n]) => n).sort().join(" · ")}</p>`)}
      <p class="note">Bằng mắt không phân biệt được viên nào nặng viên nào nhẹ.</p>`),
  },
  // ---------------------------------------------------------------- Đan phòng
  {
    id: "dan_phuong", stage: 4, place: "dan_phong", kind: "Sách", icon: "📕", label: "Đan phương chép tay của Đan phòng",
    html: () => giay(`<p class="note">Sách đan phương các đời trưởng lão Đan phòng chép lại. Sáu bài:</p>
      ${hand(`<p>Tam chuyển đan. Viên nặng ba thù, chín ngày, không gia.</p>
      <p>Ngũ chuyển đan. Viên đầu một thù hai lũy, mỗi ngày gia một lũy, hai mươi lăm ngày.</p>
      <p>Thất chuyển đan. Viên đầu ba thù, mỗi ngày gia hai lũy, ba mươi sáu ngày.</p>
      <p>Cửu chuyển hoàn. Viên đầu hai thù bốn lũy, mỗi ngày gia hai lũy bốn thử. Bảy ngày một chuyển, mỗi chuyển thếp một lớp vàng. Bốn mươi chín ngày thì đủ chín chuyển.</p>
      <p>Hoàn hồn tán. Bột, mỗi lần một thìa, hoà nước gừng.</p>
      <p>Ích khí hoàn. Viên hai thù, uống tuỳ bệnh.</p>`)}`),
  },
  {
    id: "so_dan", stage: 4, place: "dan_phong", kind: "Sổ", icon: "📒", label: "Sổ ra đan kỳ bế quan",
    html: () => giay(`<p class="ledger-head">CỬU CHUYỂN HOÀN · PHỤNG CHƯỞNG MÔN BẾ QUAN</p>
      ${bang(["Ngày", "Viên", "Ghi", "Giao"], Array.from({ length: 49 }, (_, i) => i + 1).map((n) => {
        const [m, d] = retreatDate(n);
        return [`${d}/${m}`, `thứ ${soChu(n)}`, n === 12 ? "Viên nứt, làm lại, đủ cân." : n % 7 === 0 ? "Thếp thêm lớp vàng." : "Đủ cân.", MARKET_DAY(m, d) ? "Tiểu Tùng" : "Thuận"];
      }))}`, "Chữ trưởng lão Đan phòng. Cột cuối là người nhận khay mang đi."),
  },
  {
    id: "sach_can_do", stage: 4, place: "dan_phong", kind: "Sách", icon: "📕", label: "Toán kinh, quyển cân lường",
    html: () => giay(`<p class="note">Sách của Tàng Kinh các, trưởng lão Đan phòng mượn hôm hai mươi tư chưa trả, để trên bàn cạnh cái cân. Đoạn đầu quyển:</p>
      ${hand(`<p>Lường dài: mười phân là một tấc, mười tấc là một thước, sáu thước là một bộ.</p>
      <p>Lường nặng: mười thử là một lũy, mười lũy là một thù, hai mươi bốn thù là một lạng, mười sáu lạng là một cân, ba mươi cân là một quân, bốn quân là một thạch.</p>
      <p>Lường chứa: mười hợp là một thăng, mười thăng là một đấu.</p>`)}`),
  },
  {
    id: "can_dan", stage: 4, place: "dan_phong", kind: "Đồ vật", icon: "⚖", label: "Cái cân đồng trên bàn Đan phòng",
    html: () => `<div class="doc doc--plain">
      ${soTay(`<p>Cân đồng hai đĩa của Đan phòng. Hộp quả cân bằng gỗ, nắp khắc: "Ty cân phủ Hà Nam. Lạng mười tiền, tiền mười phân." Trong hộp chín quả.</p>`)}
      ${media("can", "scale")}
    </div>`,
  },
  // ---------------------------------------------------------------- Lôi Đài
  {
    id: "so_canh_dem", stage: 4, place: "loi_dai", kind: "Sổ canh", icon: "📓", label: "Sổ canh đêm của đồng tử",
    html: () => giay(`<p class="note">Sổ thứ hai của A Mặc, ghi mỗi đêm từ ngày bế quan. Chữ trẻ con.</p>
      ${bang(["Đêm", "Ghi"], Array.from({ length: 49 }, (_, i) => i + 1).map((n) => { const [m, d] = retreatDate(n); return [`${d}/${m}`, `${WEATHER[n % 7]} ${n === 49 ? "Mưa, sấm. Xem sổ sấm." : smoke(m, d)}`]; }))}`),
  },
  {
    id: "lo_thong_khi", stage: 4, place: "loi_dai", kind: "Hiện trường", icon: "⚡", label: "Lỗ thở của động phủ",
    html: () => soTay(`<p>Nhấc tấm lưới đồng lên. Lòng lỗ vuông, sâu, thành lỗ đen muội tới tận chỗ tay không với tới.</p>
      <p>Mặt dưới chấn song mắc mấy sợi gai thô, đen bụi than, như sợi bao tải.</p>
      <p>Trong rãnh thoát nước sát mép đài, một phiến đá mỏng vuông vức, to hơn miệng lỗ một chút. Mặt dưới phiến đá có một vành muội tròn, đúng cỡ miệng lỗ.</p>
      <p>A Mặc bảo phiến đá ấy vẫn nằm trong rãnh từ hồi nào nó không nhớ. Ai quét đài thì quét quanh nó.</p>`),
  },
];

// The days the hoả công went down to buy charcoal before dawn, when the crane boy carried the tray instead.
function MARKET_DAY(m, d) { return m === 3 && [13, 18, 23].includes(d); }
