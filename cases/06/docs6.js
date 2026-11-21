// Case 06: the wedding night (22nd, hour of the Pig), the true ending, the hidden ending, the two lost routes.
import { ln, stamp, pic, hand } from "../../js/kit.js";

export default [
  // ---------------------------------------------------------------- night 7, before the decision
  {
    id: "trinh_tu", stage: 6, kind: "Giấy", icon: "☰", label: "Trình tự lễ âm hôn đêm 22, phu nhân tự viết",
    html: () => `
    <div class="doc doc--form doc--red">
      <h2 class="form-title">TRÌNH TỰ LỄ · đêm 22 tháng Bảy</h2>
      <table class="tbl">
        <tr><td>Giờ Tuất</td><td>Rước dâu từ Tây sương sang linh đường. Cô dâu đội khăn đỏ, đi chân không.</td></tr>
        <tr><td>Giờ Hợi</td><td>Bái thiên địa, bái linh vị. Thầy xem ngày đọc hôn thư.</td></tr>
        <tr><td><b>Giờ Tý</b></td><td>${ln("tt_ruou", "Cô dâu uống rượu hợp cẩn trước linh vị. Phu nhân tự tay rót. Không ai khác được chạm vào bình rượu.")}</td></tr>
        <tr><td>Giờ Sửu, Dần</td><td>Cô dâu “ngủ” bên quan tài. Đóng cửa linh đường.</td></tr>
        <tr><td>Giờ Mão</td><td>${ln("tt_chon", "Hạ huyệt, hợp táng.")}</td></tr>
      </table>
      <p class="small muted">Ở lề, nét chữ phu nhân: “Đông viện: giữ yên đến ngày 25.”</p>
    </div>`,
  },
  {
    id: "thuy_3", stage: 6, kind: "Lời kể", icon: "✎", label: "Thuý Nhi kể (lần 3), giờ Tuất",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>“Con hỏi chị Tú Nương có muốn trốn không. Con mở sẵn cổng sau cho chị.”</p>
        <p>${ln("t3_nam", "“Chị nói: em chỉ muốn nằm cạnh anh. Nhà em không có tiền chôn anh. Nằm cạnh anh, anh khỏi lạnh.”")}</p>
        <p>“Chị không biết cậu chủ đâu. Chị bảo: người ấy bỏ chị rồi, đêm Thất tịch người ấy không đến.”</p>
        <p>“Phu nhân đã bảo chị ngồi cạnh phu nhân suốt lễ. Phu nhân nắm tay chị, xoa xoa, như mẹ xoa tay con gái.”</p>`)}
    </div>`,
  },
  {
    id: "loi_phung", stage: 6, kind: "Lời kể", icon: "✍", label: "Đội trưởng Phùng nhắn lại",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>“Tiên sinh gọi thì tôi đến. Nhưng tôi chỉ đứng làm chứng. Nhà họ Triệu là chưởng quỹ phiếu hiệu, huyện trưởng còn vay tiền nhà ấy.”</p>
        <p>${ln("ph_xe", "“Chiều nay tôi thấy Lưu Phúc thắng sẵn xe la ở cổng sau, chăn đệm đầy xe. Hỏi, hắn bảo: lễ mà hoãn thì đêm nay đi Hà Bắc luôn.”")}</p>`)}
    </div>`,
  },

  // ---------------------------------------------------------------- the true ending
  {
    id: "bb_dong_vien", stage: 7, kind: "Biên bản", icon: "§", label: "Biên bản đêm 22 tháng Bảy, đồn cảnh sát Hoè Âm",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">ĐỒN CẢNH SÁT TRẤN HOÈ ÂM · BIÊN BẢN · đêm 22 rạng 23 tháng Bảy năm Bính Tý</div>
      <p>Giờ Hợi hai khắc, theo yêu cầu của thầy xem ngày Lục Đình, có mặt tộc trưởng và họ tộc, phá khoá Đông viện phủ Triệu.</p>
      <p>Trong tân phòng có một nam thanh niên chừng hai mươi tuổi, gầy rộc, chân trái xích vào chân giường, mắt lờ đờ, đầu giường có bàn đèn thuốc phiện. Lão gia Triệu Hoài Đức nhận là con trai Triệu Thừa Tự. Thanh niên nhìn quanh, gọi: “Tú Nương”.</p>
      <p>Cô dâu Ôn Tú Nương ngồi cạnh thầy Lục Đình. Bình rượu hợp cẩn trên bàn thờ, nhúng trâm bạc, trâm đen lại.</p>
      <p>Theo lệnh tộc trưởng, mở quan tài. Cổ tay trái tử thi có sợi chỉ đỏ. Ôn Tú Nương gọi: “Anh Thạch.”</p>
      <p>Bắt giữ quản gia Lưu Phúc. Giải Triệu Tiết thị lên huyện.</p>
      ${pic("tan_phong_mo", "Tân phòng ở Đông viện, lúc cửa vừa phá.")}
      ${stamp("ĐÃ LẬP ÁN", "right:26px;top:40px", "blue")}
    </div>`,
  },
  {
    id: "loi_phuc", stage: 7, kind: "Biên bản", icon: "§", label: "Lưu Phúc khai",
    html: () => `
    <div class="doc doc--form">
      <p>“Đêm Thất tịch, phu nhân sai tôi ra bến đò. Thằng phu la cầm roi đánh tôi. Tôi chỉ định đánh cho nó ngất.”</p>
      <p>“Phu nhân bảo lột áo cậu chủ mặc cho nó, ném xuống sông. Phu nhân bảo: <i>nó chết thay con tôi, coi như có phúc</i>.”</p>
      <p>“Trà mời thầy Khâu tôi pha theo lời phu nhân. Phu nhân bảo cho ông già ngủ một giấc.”</p>
      <p>“Rượu hợp cẩn, phu nhân tự pha. Tôi chỉ mua thuốc.”</p>
    </div>`,
  },
  {
    id: "thu_tu_nuong", stage: 7, kind: "Thư", icon: "✉", label: "Thư Tú Nương nhờ người viết, gửi thầy Lục",
    html: () => `
    <div class="doc doc--letter">
      <p>Thưa thầy Lục,</p>
      <p>Em không biết chữ, em nhờ thầy đồ Kiều viết. Anh Thạch được chôn ở bãi tha ma xóm Bến Đò, có mộ có bia. Em đi chân không đưa anh, như hôm em đi làm cô dâu.</p>
      <p>Người ấy vẫn ở nhà thương huyện. Mỗi lần em vào, người ấy hỏi em là ai. Thầy thuốc bảo cai thuốc xong thì nhớ.</p>
      <p>Em không biết em có muốn người ấy nhớ không.</p>
    </div>`,
  },
  {
    id: "cai_tang", stage: 7, secret: true, kind: "Sổ tay", icon: "📓", label: "Trang sổ thầy Khâu chưa ai đọc (kẹp trong ống đĩa sáp số 2)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>Đình,</p>
        <p>Ba mươi năm chấm ngày cưới, tôi học được một điều: cưới người chết thì dễ. Người chết không cãi, không chạy, không đòi gì.</p>
        <p>Cưới người sống mới đáng sợ.</p>
        <p>Nếu con mở được Đông viện, con đưa hai anh em họ Ôn về với nhau. Cải táng thằng anh về đất nhà nó. Đừng để ai chôn nó dưới tên người khác.</p>
        <p>Và con đừng làm thầy xem ngày nữa.</p>`)}
      <p class="note">Ba tháng sau, mộ Ôn Thạch dời về bãi tha ma xóm Bến Đò. Tú Nương buộc vào cổ tay anh một sợi chỉ đỏ mới.</p>
    </div>`,
  },

  // ---------------------------------------------------------------- lost routes
  {
    id: "bb_hi_tang", stage: 8, fail: ["hitang"], kind: "Biên bản", icon: "§", label: "Biên bản sáng 23 tháng Bảy",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">ĐỒN CẢNH SÁT TRẤN HOÈ ÂM · ghi nhận việc hợp táng · sáng 23 tháng Bảy</div>
      <p>Giờ Mão, phủ Triệu hạ huyệt hợp táng cậu chủ Triệu Thừa Tự và cô dâu âm Ôn thị. Gia đình trình: cô dâu “theo chồng” trong đêm, sau khi uống rượu hợp cẩn.</p>
      <p>Không ai yêu cầu khám nghiệm. Hai quan tài chôn chung một huyệt, đầu cùng hướng.</p>
      ${pic("hop_tang", "Huyệt hợp táng ở mộ họ Triệu, sáng 23 tháng Bảy.")}
      <p class="small">Người gác mộ khai: đêm đầu tiên nghe dưới đất có tiếng con gái gọi “anh ơi”. Ông không dám nói gọi ai.</p>
      ${stamp("KẾT THÚC<br>HỈ TANG", "right:26px;top:40px")}
    </div>`,
  },
  {
    id: "bb_cuu", stage: 8, fail: ["cuu"], kind: "Biên bản", icon: "§", label: "Ghi chép của bạn, ngày 28 tháng Bảy",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>Tú Nương còn sống. Lễ âm hôn bị hoãn rồi bỏ. Quan tài vẫn được chôn ở mộ họ Triệu, dưới tên Triệu Thừa Tự.</p>
        <p>Sáng nay ở chợ, tôi đi cùng Tú Nương. Một thanh niên mặc áo gấm, gầy, da xanh, đi giữa Lưu Phúc và phu nhân. Người ta chào: “Cậu Thừa An mới ở Hà Bắc về.”</p>
        <p>Tú Nương đứng sững. Cậu ta nhìn thẳng vào cô, rồi nhìn qua, như nhìn một người lạ.</p>
        <p>Đông viện đã mở cửa, quét vôi trắng. Không ai còn nghe tiếng gọi.</p>`)}
      ${pic("cho_thua_an", "Chợ trấn Hoè Âm, sáng 28 tháng Bảy.")}
      ${stamp("KẾT THÚC<br>CỨU DÂU", "right:26px;top:30px", "blue")}
    </div>`,
  },
];
