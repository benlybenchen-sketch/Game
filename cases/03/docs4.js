// Case 03, night 5 (Thursday 11/11/2004): Khiêm's Kiều code and the two copies of Truyện Kiều, Nghi's page and her letter.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { letterHtml } from "./name.js";
import { OPENING, NGUNG_BICH } from "./kieu.js";

const page = (lines, first) => `<ol class="kieu-page" start="${first}">${lines.map((t) => `<li>${t}</li>`).join("")}</ol>`;

export default [
  {
    id: "sang_4", stage: 4, kind: "Thư buổi sáng", icon: "✉", label: "Thư bà Dung để trên bàn sáng 11/11",
    html: () => `<div class="doc doc--memo">${letterHtml(4)}</div>`,
  },

  {
    id: "kieu_khiem", stage: 4, kind: "Sách", icon: "📕", label: "Truyện Kiều chú giải của Khiêm (bản đủ 3.254 câu)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">ĐOẠN TRƯỜNG TÂN THANH · bản chú giải, đánh số câu · <b>trọn bộ 3.254 câu</b><br><small>Sài Gòn, 1965. Bìa lót: “Đoàn Minh Khiêm, Văn khoa”. Đóng dấu: “Tang vật · Cuộc CS Quận Nhất · đã hoàn trả 1972”.</small></div>
      ${hand(`<b>Mã Kiều</b> (Khiêm dạy cả nhóm): mỗi chữ cái là <u>ba con số</u>: <b>số câu · số thứ tự của chữ trong câu · số thứ tự của mẫu tự trong chữ</b>.
        Đếm mẫu tự không kể dấu. Thí dụ 1·1·1 là T (chữ “Trăm”), 2·3·3 là U (chữ thứ ba của câu 2 là “chữ”, bỏ dấu thành c-h-u, mẫu tự thứ ba là U). Phải dùng đúng cuốn sách, đúng số câu.`)}
      ${page(OPENING, 1)}
      <p class="note">· · ·</p>
      ${page(NGUNG_BICH, 1033)}
      ${media("kieu", "khiem")}
    </div>`,
  },

  {
    id: "kieu_hue", stage: 4, kind: "Sách", icon: "📗", label: "Truyện Kiều bản in Huế 1968 (của Lan)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">KIM VÂN KIỀU · nhà in Đắc Lập, Huế, 1968 · <b>3.252 câu</b><br><small>Trang lót, mực tím: <span class="hand inline">“Hà Ngọc Lan · quà của ba · Huế, Tết Mậu Thân”</span></small></div>
      <p class="note">Bà Dung: “Sách của Lan. Bà giữ làm kỷ niệm.” Gáy sách sờn, trang 60–61 có dấu ngón tay cái lấm mực như ai đó lật đi lật lại nhiều lần.</p>
      ${page(OPENING, 1)}
      <p class="note">· · ·</p>
      ${page(NGUNG_BICH.slice(0, 20), 1031)}
      ${media("kieu", "hue")}
    </div>`,
  },

  {
    id: "bien_ban_5", stage: 4, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 5 · 30/10/1971 (Nghi ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<b>Buổi cơ thứ năm.</b> Thứ Bảy 30/10/1971. Con xin Chúa thương xót.<br>
        Ngồi: <b>chị Lan (tay chủ)</b>, chị Dung, Nghi (ghi sổ).<br>
        Con cơ chạy số, mỗi lần ba con số rồi về giữa bàn, như mã Kiều anh Khiêm dạy. Con chép:`)}
      ${hand(`<span class="code-line">1033·1·3 &nbsp; 1037·2·2 &nbsp; 1046·1·2 &nbsp; 1042·6·2 &nbsp; &nbsp; 1052·4·3 &nbsp; 1042·8·1 &nbsp; 1051·5·2</span>`)}
      ${hand(`${ln("bb5_sach", "Sách Kiều của anh Khiêm công an giữ làm tang vật rồi. Chị Lan đi lên lầu lấy cuốn Kiều của chị xuống, ngồi dò một mình, rồi xé tờ giấy, nói ra chữ vô nghĩa.")}<br>
        Chị Dung nhìn chị Lan rất lâu. Không ai nói gì.`)}
      <p class="note">Dòng cuối trang, nét nghiêng về phía trước:</p>
      ${hand(`<i>Nghi trượt chân ở cầu thang lên gác thượng lúc 1 giờ sáng. Gãy cổ.</i>`, "fwd")}
    </div>`,
  },

  {
    id: "thu_nghi", stage: 4, kind: "Thư", icon: "✉", label: "Thư Nghi viết cho chị ở Đà Lạt (chưa gửi)",
    html: () => `
    <div class="doc doc--memo">
      <p class="note">Tìm thấy trong cuốn kinh Nhật Khóa của Nghi, ngày 1-11-1971. Phong bì đề: <i>Chị Trịnh Bảo Trinh, Domaine de Marie, Đà Lạt</i>.</p>
      ${hand(`Chị Trinh,<br>
        Em sợ lắm. Chết bốn người rồi. Em muốn về Đà Lạt với chị mà chị Lan nói bỏ giữa chừng thì “bà” bắt hết.<br>
        ${ln("tn_ao", "Hôm thứ Năm chị Lan mặc cái áo dài lụa xanh của chị Dung, đứng trước gương hỏi em: giống không Nghi? Em gọi nhầm chị ấy là chị Dung thật.")}<br>
        ${ln("tn_ky", "Tối qua em thấy chị Lan ngồi tập ký tên “Hạnh Dung” bằng tay trái, ký mãi không được, chữ cứ ngả về phía trước. Thấy em, chị cười, nói ký chơi.")}<br>
        ${ln("tn_guoc", "Mà chị ơi, buổi cơ thứ hai, lúc có tiếng gõ, em cúi xuống nhặt cây bút. Dưới gầm bàn, chị Lan không mang guốc. Đôi guốc nằm bên chân ghế.")}<br>
        Em sẽ cầu nguyện cho anh chị em mình. Chị đừng kể cho ba má.<br>Em, Nghi.`)}
    </div>`,
  },

  {
    id: "ban_co_5", stage: 4, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ năm · 11/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${media("board", "n5")}
      <p class="note">Bà Dung không lấy cuốn Kiều nào ra dò. Bà nói mắt bà kém, để cháu làm.</p>
    </div>`,
  },
];
