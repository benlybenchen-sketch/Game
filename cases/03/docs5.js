// Case 03, night 6 (Friday 12/11/2004): the pages behind bà Diệp's portrait, the last page Dung wrote,
// the autopsy of "Lan", Dung's 1966 hospital record and her 1970 identity card.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { letterHtml } from "./name.js";
import { portraitArt } from "./art.js";

export default [
  {
    id: "sang_5", stage: 5, kind: "Thư buổi sáng", icon: "✉", label: "Thư bà Dung để trên bàn sáng 12/11",
    html: () => `<div class="doc doc--memo">${letterHtml(5)}</div>`,
  },

  {
    id: "di_anh", stage: 5, kind: "Di ảnh", icon: "🖼", label: "Di ảnh bà Diệp và mấy trang giấy giấu phía sau",
    html: () => `
    <div class="doc doc--plain">
      ${pic("di_anh_diep", "Di ảnh bà Lâm Ngọc Diệp (1901–1958) treo trên tường phòng khách tầng hai. Mặt kính nứt một đường chéo.", portraitArt())}
      <p class="note">Bà Dung nhờ bạn tháo khung ảnh xuống lau. Giữa tấm ảnh và tấm bìa lót có một phong bì giấy dầu, bên trong là hai tờ giấy học trò, một tờ hồ sơ bệnh viện và một tấm thẻ căn cước cũ. Hai tờ giấy học trò viết bằng chữ ngược, như chữ in trong gương. Bà Dung liếc qua rồi lắc đầu: “Chữ gì kỳ vậy. Cháu đọc đi.”</p>
      ${media("mirror", "trang_guong")}
      <div class="mirror-src hand back">
        <p>4/11/71. Mình viết ngược cho chị Lan không đọc được. Chị không đọc được tiếng Pháp, cũng không đọc được gương.</p>
        <p>Chị Lan mặc áo mình, kẹp tóc của mình, tập ký tên mình. Chị hỏi mình có tính bán cái nhà này không.</p>
        <p>Mình nghĩ lại từng đêm. Đêm anh Tùng chết, chị Lan ra ban công trước anh. Đêm Yến chết, chị dìu Yến ra hồ. Đêm anh Quốc chết, chị pha trà. Anh Khiêm chết sau khi chị lật tờ giấy dưới chén. Nghi ngã ở cầu thang gác, mà chỉ có chị ngủ trên gác.</p>
        <p>Thứ Bảy này chỉ còn hai đứa mình. Mình sẽ ngồi cơ nhưng không đặt tay. Mình muốn tận mắt thấy con cơ chạy một mình hay chạy theo tay chị.</p>
        <p><b>Nếu mình chết, đừng tin ai mang tên mình.</b></p>
        <p>Ai đọc được trang này: mình là Lâm Hạnh Dung. Mình thuận tay trái. Mình có cái sẹo dưới cằm. Xương đòn trái của mình gãy năm 1966. Giấy tờ để kèm đây.</p>
      </div>
    </div>`,
  },

  {
    id: "bien_ban_6", stage: 5, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 6 · 6/11/1971 (Dung ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p><b>Buổi cơ thứ sáu.</b> Thứ Bảy 6/11/1971.</p>
        <p>Ngồi: chị Lan (tay chủ), Dung (ghi sổ).</p>
        <p>${ln("bb6_tay", "Mình không đặt tay. Con cơ vẫn chạy, theo đúng ngón tay chị Lan.")}</p>
        <p><span class="code-line">L A N &nbsp; C H E E T S &nbsp; C H A Y S</span></p>
        <p>Chị Lan cười. Chị nói: “Thấy chưa Dung, bà gọi tới chị rồi.” Chị rủ mình lên gác thượng thắp nhang cho bà trẻ. Mình đi, vì mình muốn</p>`, "back")}
      <p class="note">Câu viết dở. Nét chữ cả trang ngả về phía sau, mực lem ở cạnh trái mỗi dòng như bàn tay trái quẹt qua mực còn ướt. Trang kế tiếp là buổi cơ thứ bảy.</p>
    </div>`,
  },

  {
    id: "kham_nghiem", stage: 5, kind: "Biên bản", icon: "§", label: "Viện Giảo nghiệm: khám nghiệm tử thi “Hà Ngọc Lan”, 1971",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">VIỆN GIẢO NGHIỆM SÀI GÒN · BIÊN BẢN KHÁM NGHIỆM TỬ THI SỐ 71/1146</div>
      <p>Tử thi nữ, đưa tới hồi 6 giờ ngày 7-11-1971 từ gác thượng số 9 đường Hàng Me. Theo hồ sơ cảnh sát: <b>Hà Ngọc Lan</b>, 19 tuổi.</p>
      <p>${ln("kn_chay", "Cháy than hóa chừng 80% cơ thể. Tư thế co quắp: hai cánh tay co lên trước ngực, hai bàn tay nắm lại, hai gối co, như võ sĩ quyền Anh thủ thế (cơ co rút vì nhiệt).")} Da mặt và tóc cháy hết, không nhận được mặt.</p>
      <p>${ln("kn_nhan", "Nhận dạng: nhẫn vàng khắc chữ “H.N.L.” ở ngón áp út tay phải; mảnh vải áo bà ba hoa tím còn dính ở lưng. Người nhận dạng: cô Lâm Hạnh Dung, bạn cùng nhà.")}</p>
      <p>${ln("kn_xuong", "Xương đòn trái: có can xương cũ ở một phần ba giữa, gãy đã liền hoàn toàn, ước trên ba năm.")}</p>
      <p>${ln("kn_khi", "Khí quản và phế quản không có muội than.")} ${ln("kn_so", "Vùng chẩm có đường nứt sọ dài 4 phân.")}</p>
      <p>${ln("kn_seo", "Không xác định được sẹo hay dấu vết riêng vùng mặt, cổ do cháy.")}</p>
      <p>Ý kiến Viện: nạn nhân có thể đã tử vong trước khi bị cháy. Đề nghị điều tra thêm.</p>
      <p class="small">Bút phê của Cuộc CS Quận Nhất: <i>Đèn dầu đổ, cháy gác thượng, nạn nhân bị xà gỗ rơi trúng đầu. Xếp hồ sơ.</i></p>
      ${stamp("ĐÃ XẾP", "right:30px;bottom:30px", "blue")}
    </div>`,
  },

  {
    id: "y_te_1966", stage: 5, kind: "Hồ sơ bệnh viện", icon: "✚", label: "Bệnh viện Đà Lạt: hồ sơ Lâm Hạnh Dung, 1966",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BỆNH VIỆN ĐÀ LẠT · PHIẾU ĐIỀU TRỊ NGOẠI KHOA</div>
      <p>Bệnh nhân: <b>Lâm Hạnh Dung</b>, nữ, 14 tuổi. Người nhà: bà Lâm Ngọc… (giám hộ). Vào viện 20-7-1966.</p>
      <p>Lý do: té ngựa ở bờ hồ Xuân Hương.</p>
      <p>${ln("yt_xuong", "Chẩn đoán: gãy kín một phần ba giữa xương đòn trái. Bó bột hình số 8, sáu tuần.")}</p>
      <p>${ln("yt_seo", "Vết rách da dưới cằm dài 1,5 phân, khâu 3 mũi.")}</p>
      <p>${ln("yt_tay", "Ghi chú của bác sĩ: bệnh nhân thuận tay trái, dặn gia đình cho nghỉ viết sáu tuần.")}</p>
      <p class="small">Bác sĩ điều trị: Dr. Nguyễn Văn Hạo (ký tên).</p>
    </div>`,
  },

  {
    id: "can_cuoc_1970", stage: 5, kind: "Giấy tờ", icon: "🪪", label: "Thẻ căn cước năm 1970 của Lâm Hạnh Dung",
    html: () => `
    <div class="doc doc--plain">
      <div class="idcard id-vnch">
        <div class="id-head">VIỆT NAM CỘNG HÒA<br><b>THẺ CĂN CƯỚC</b></div>
        <div class="id-photo">ảnh dán<br>(đã bóc mất)</div>
        <div class="id-body">
          <p>Họ và tên: <b>LÂM HẠNH DUNG</b></p><p>Sanh ngày 14-2-1952 tại Sài Gòn</p><p>Cha: Lâm Văn Hiếu (đã chết) · Mẹ: Ngô Thị Hạnh (đã chết)</p>
          <p>Cao: 1 th 58</p>
          <p>${ln("cc_dau", "Dấu tích riêng: Sẹo 1,5 phân dưới cằm.")}</p>
          <p>Cấp ngày 2-3-1970 · Đô Thành Sài Gòn</p>
        </div>
      </div>
      <p class="note">Tấm ảnh dán trên thẻ đã bị bóc đi, chỉ còn vết hồ. Thẻ nằm chung phong bì với hồ sơ bệnh viện, sau di ảnh bà Diệp.</p>
    </div>`,
  },

  {
    id: "ban_co_6", stage: 5, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ sáu · 12/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${media("board", "n6")}
      <p class="note">Bà Dung đứng dậy đi pha trà. Bạn nghe tiếng nước sôi rất lâu, rồi tiếng bà lẩm bẩm gì đó trong bếp. Bà không quay lại bàn cơ nữa.</p>
    </div>`,
  },
];
