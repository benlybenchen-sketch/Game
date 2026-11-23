// Case 06, night 4 (20th): the coroner's notes he was forced to sign, the Song-dynasty forensic manual,
// the tutor who knew the young master's hands.
import { ln, stamp, pic, hand } from "../../js/kit.js";

export default [
  {
    id: "bb_ngo_tac", stage: 3, kind: "Biên bản", icon: "§", label: "Thi cách của ngỗ tác Mã Tam Bảo, ngày 10 tháng Bảy",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">THI CÁCH (phiếu khám xác) · ngỗ tác Mã Tam Bảo · huyện Bình Dao · Dân Quốc năm 25, tháng Bảy, ngày 10</div>
      <p>Xác nam, chừng hai mươi tuổi, vớt ở bãi Hạ Than. Gia đình nhận là Triệu Thừa Tự. Lão gia không cho mổ, chỉ khám ngoài.</p>
      <ol>
        <li>${ln("ng_bung", "Toàn thân trương, da bong từng mảng, bụng trướng căng.")}</li>
        <li>${ln("ng_bot", "Miệng mũi không có bọt.")}</li>
        <li>${ln("ng_mong", "Mười móng tay sạch, kẽ móng không có cát bùn, bàn tay duỗi, không nắm.")}</li>
        <li>${ln("ng_gay", "Sau gáy lõm một chỗ bằng quả trứng gà, xương sọ dưới da lún vụn.")}</li>
        <li>${ln("ng_tay_trai", "Lòng bàn tay trái có một vệt chai hằn chéo từ gốc ngón trỏ xuống mô ngón út, rộng bằng sợi dây gai.")}</li>
        <li>${ln("ng_tay_phai", "Cạnh ngoài bàn tay phải có chai dày.")}</li>
        <li>${ln("ng_ngon", "Ngón giữa tay phải, đốt đầu, da mềm, không có chai.")}</li>
        <li>${ln("ng_chi", "Cổ tay trái buộc một sợi chỉ đỏ, thắt nút kiểu con gái.")}</li>
        <li>${ln("ng_ao", "Mặc trường sam lụa xanh, chật căng ở vai, đường may vai bục chỉ, cài lệch một khuy.")}</li>
      </ol>
      <p><b>Kết luận (theo lời gia chủ):</b> ${ln("ng_kl", "chết đuối.")}</p>
      ${stamp("ĐÃ GIAO<br>GIA ĐÌNH", "right:30px;bottom:24px", "blue")}
    </div>`,
  },

  {
    id: "tay_oan", stage: 3, kind: "Sách", icon: "📕", label: "Tẩy Oan Tập Lục (Tống Từ, năm 1247), bản dịch chép tay của ngỗ tác Mã",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">洗冤集錄 · TẨY OAN TẬP LỤC · quyển ba, mục “Chết đuối” và “Xem tay biết nghề”</div>
      <p><b>Người sống rơi xuống nước mà chết:</b> miệng mũi có bọt trắng như nấm, lau rồi lại ra; hai tay nắm lại, trong kẽ móng có cát bùn, vì lúc chìm còn cào cấu.</p>
      <p><b>Người chết rồi mới bị ném xuống nước:</b> miệng mũi không bọt, tay duỗi, móng sạch; phải tìm vết thương ở đầu, cổ.</p>
      <p><b>Chú:</b> xác ngâm nước lâu ngày, bất kể chết thế nào, bụng đều trướng, da đều bong. Không lấy bụng trướng mà kết luận chết đuối.</p>
      <p><b>Xem tay biết nghề (Mã ghi thêm theo kinh nghiệm):</b></p>
      <ul>
        <li>Người chèo đò: chai ở gốc các ngón, hai tay như nhau.</li>
        <li>Thợ rèn: lòng bàn tay có sẹo bỏng; chai dày ở hổ khẩu (chỗ giữa ngón cái và ngón trỏ).</li>
        <li>Tá điền: chai đều khắp lòng bàn tay, móng có đất.</li>
        <li>Phu dắt la: tay trái quấn dây cương nên có vệt chai hằn chéo lòng bàn tay; tay phải cầm roi, chai cạnh bàn tay.</li>
        <li>Người đọc sách: tay mềm; ngón giữa tay phải, đốt đầu, có chai bút.</li>
      </ul>
    </div>`,
  },

  {
    id: "thu_thay_do", stage: 3, kind: "Thư", icon: "✉", label: "Thư của thầy đồ dạy cậu chủ, gửi lão gia",
    html: () => `
    <div class="doc doc--letter">
      <p class="right">Thái Nguyên, ngày 13 tháng Bảy</p>
      <p>Hoài Đức huynh,</p>
      <p>Nghe tin Thừa Tự mất, tôi không tin. Đứa trò tôi dạy mười năm, sợ nước như sợ cọp, chưa bao giờ dám xuống bến đò một mình, sao lại chết đuối?</p>
      <p>${ln("td_tay", "Nó viết cả ngày, ngón giữa tay phải chai cứng như hạt đậu. Bàn tay nó trắng mềm, chưa cầm một cái cuốc.")} Người ta nói nó mặc áo trường sam xanh: đúng cái áo tôi may tặng năm ngoái, may vừa người nó, nó gầy lắm.</p>
      <p>Tôi xin huynh cho tôi xem mặt nó lần cuối.</p>
      <p class="right">${hand("Kiều", "sign")}<b>Kiều Bá Văn</b></p>
      <p class="small muted">Thư không có hồi âm. Lưu Phúc ghi ở góc: “Phu nhân dặn: không trả lời.”</p>
    </div>`,
  },

  {
    id: "anh_tay", stage: 3, kind: "Ảnh", icon: "▣", label: "Ảnh bàn tay trái của xác, đồn cảnh sát chụp",
    html: () => `
    <div class="doc doc--plain">
      ${pic("tay_xac", "Ảnh chụp sáng 10 tháng Bảy ở bãi Hạ Than. Sợi chỉ đỏ trên cổ tay trái còn nguyên.")}
      <p class="note">Ghi chú sau ảnh, chữ đội trưởng Phùng: <i>“Phu nhân nhìn sợi chỉ, bảo cắt đi. Lão gia ngất. Tôi chưa kịp cắt thì gia đình đã khâm liệm.”</i></p>
    </div>`,
  },

  {
    id: "loi_ma", stage: 3, kind: "Lời kể", icon: "✍", label: "Ngỗ tác Mã Tam Bảo nói riêng với bạn",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>“Tôi ba mươi năm khám xác. Cậu đọc phiếu tôi thì biết tôi biết gì.”</p>
        <p>“Lão gia quỳ xuống xin tôi đừng mổ. Phu nhân không quỳ. Phu nhân đứng sau lưng tôi, nói khẽ: <i>ông ghi chết đuối thì ông về nhà ăn cơm</i>.”</p>
        <p>“Tôi ghi theo lời gia chủ. Từng chữ trong phiếu là thật, chỉ có dòng kết luận là của người ta.”</p>
        <p>“Cái áo xanh ấy, xác mặc chật ở vai, rộng ở bụng. Người mặc không phải người được may cho.”</p>`)}
    </div>`,
  },
];
