// Case 06, night 2 (18th): the corpse-bride broker's ledger (amounts only on abacus drawings), her price list,
// the police notice of the body (solar date) and the maid's first account.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";

export default [
  {
    id: "so_hoang", stage: 1, kind: "Sổ sách", icon: "🧮", label: "Sổ bán hàng của bà mối âm Hoàng Tứ Nương, tháng Bảy",
    html: () => `
    <div class="doc doc--ledger">
      <div class="ledger-head">HOÀNG KÝ · MỐI ÂM · tháng Bảy năm nay</div>
      <p class="small">Bà Hoàng không biết chữ số. Mỗi khoản bà gảy bàn tính rồi nhờ thằng cháu vẽ lại y hình bàn tính vào sổ. ${ln("sh_cot", "Bàn tính của bà là loại hai hạt trên, năm hạt dưới; hạt nào gảy sát thanh ngang mới tính, hạt trên đáng năm, hạt dưới đáng một. Cột có chấm đỏ là hàng đồng; hai cột bên phải chấm đỏ là hào và xu.")}</p>
      <table class="tbl tbl--hand">
        <tr><th>Ngày (âm)</th><th>Nhà</th><th>Việc</th><th>Số tiền</th></tr>
        <tr><td>mồng 6</td><td>Lý thợ nhuộm, thôn Tây</td><td>${ln("sh_ly", "Mua xác con gái Lý Xuân Hoa (trả nhà Lý)")}</td><td>${media("abacus", "ly")}</td></tr>
        <tr><td>mồng 9</td><td>Vương, buôn da</td><td>Bán một cô dâu “còn ấm”, chết hôm qua, chết đuối</td><td>${media("abacus", "vuong")}</td></tr>
        <tr><td>${ln("sh_ngay", "mồng 9")}</td><td>${ln("sh_trieu", "Triệu phủ, phu nhân đến tận nơi")}</td><td>${ln("sh_dat", "Đặt cô dâu âm Lý Xuân Hoa cho cậu chủ, giao ngày cưới")}</td><td>${media("abacus", "trieu")}</td></tr>
        <tr><td>12</td><td>Triệu phủ</td><td>${ln("sh_tra", "Phu nhân trả lại Lý Xuân Hoa. Dặn: “hàng tươi, nhà tôi tự lo”. Giữ lại tiền công mối.")} Hoàn lại:</td><td>${media("abacus", "hoan")}</td></tr>
      </table>
    </div>`,
  },

  {
    id: "bang_gia", stage: 1, kind: "Giấy", icon: "☰", label: "Bảng giá dán trong kho của bà Hoàng",
    html: () => `
    <div class="doc doc--form doc--old">
      <h2 class="form-title">GIÁ HÀNG ÂM HÔN<br><small>tính bằng đồng bạc, giá cô dâu; cô dâu trẻ, đẹp, còn trinh thêm tuỳ thoả thuận</small></h2>
      <table class="tbl">
        <tr><th>Hàng</th><th>Giá</th></tr>
        <tr><td>Xương cốt, đã cải táng</td><td>8</td></tr>
        <tr><td>Chết trên một năm, còn nguyên quan</td><td>15</td></tr>
        <tr><td>Chết dưới một tháng</td><td>40</td></tr>
        <tr><td>“Còn ấm”: chết chưa quá ba ngày</td><td>70</td></tr>
        <tr><td>Tiền công mối, bao trọn lễ</td><td>8</td></tr>
      </table>
      <p class="small muted">Góc dưới, ai đó gạch một dòng bút chì đã mờ: “người sống: không bán.”</p>
    </div>`,
  },

  {
    id: "loi_hoang", stage: 1, kind: "Lời kể", icon: "✍", label: "Bà Hoàng Tứ Nương nói chuyện với bạn",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>“Tôi làm nghề này bốn mươi năm, cậu đừng nhìn tôi như nhìn quỷ. Người chết cũng cần có đôi.”</p>
        <p>${ln("lh_som", "“Phu nhân nhà Triệu đến tìm tôi sớm lắm. Tôi còn hỏi: cậu chủ mất rồi à? Bà ấy bảo: sắp tìm thấy rồi.”")}</p>
        <p>“Bà ấy chọn con Xuân Hoa vì cùng tuổi cậu chủ hơn kém ba năm, hợp. Rồi ba hôm sau lại trả. Bảo đã có người khác. Tôi hỏi người nào, nhà nào, bà ấy không nói.”</p>
        <p>${ln("lh_tam", "“Cậu muốn biết ai giết cậu Triệu thì đi hỏi thằng Ôn Lão Tam ở bến đò. Thằng say ấy mấy hôm sau Thất tịch tự nhiên có tiền trả nợ cả xóm.”")}</p>
        <p>“Mà cô dâu cậu sắp viết hôn thư ấy, tôi không bán đâu nhé. Hàng của tôi đều đã chết.”</p>`)}
      ${pic("tiem_hoang", "Kho của bà Hoàng ở ngõ Liễu: áo cưới đỏ treo thành hàng, mỗi cái một tấm thẻ tên.")}
    </div>`,
  },

  {
    id: "bao_vot", stage: 1, kind: "Giấy", icon: "§", label: "Giấy báo của đồn cảnh sát trấn Hoè Âm",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>CẢNH SÁT CỤC HUYỆN BÌNH DAO<br>ĐỒN TRẤN HOÈ ÂM</div><div>TRUNG HOA DÂN QUỐC<br>năm thứ 25</div></div>
      <h2 class="form-title">GIẤY BÁO TÌM THẤY TỬ THI</h2>
      <p>${ln("bv_ngay", "Ngày 26 tháng 8 Tây lịch")}, 7 giờ sáng, dân chài vớt được một tử thi nam ở bãi Hạ Than, sông Phần, cách bến đò Hoè Âm sáu dặm về hạ lưu.</p>
      <p>${ln("bv_xac", "Tử thi trương phềnh, mặt không còn nhận ra. Mặc trường sam lụa xanh, chân không giày.")}</p>
      <p>Cùng ngày, Triệu phu nhân đến nhận, nói là con trai Triệu Thừa Tự, mất tích từ đêm Thất tịch. Lão gia Triệu Hoài Đức không cho mổ khám. Đã giao gia đình.</p>
      <p class="small">Lịch giao ban của đồn: tháng Bảy âm lịch năm nay, mồng Một nhằm ngày 17 tháng 8 Tây lịch.</p>
      <div class="sign-row"><div>Đội trưởng<br>${hand("Phùng", "sign")}Phùng Đại Hữu</div></div>
      ${stamp("HOÈ ÂM", "right:30px;bottom:24px", "blue")}
    </div>`,
  },

  {
    id: "thuy_1", stage: 1, kind: "Lời kể", icon: "✎", label: "Thuý Nhi kể (lần 1)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>Nha hoàn Thuý Nhi, mười sáu tuổi, ngồi bóc hạt sen ngoài hiên Tây sương. Bạn ghi lại.</p>
        <p>“Chị Tú Nương vào phủ chiều mồng 8, mắt sưng như hai quả đào. Chị hỏi con: anh Thạch nhà chị có ghé đây không. Con không biết anh Thạch là ai.”</p>
        <p>“Cậu chủ hiền lắm. Cậu viết chữ cả ngày, ngón tay giữa chai cứng. Cậu hay đi ra bến đò. Con không nói gì đâu.”</p>
        <p>“Đêm nào Đông viện cũng có tiếng. Phu nhân dặn: hồn cậu chủ về, ai nghe thì bịt tai lại, đừng thưa.”</p>
        <p>“Hình nhân giấy chú rể đặt ở linh đường, sáng nào con quét cũng thấy nó quay mặt về phía Đông viện. Con xoay lại, sáng hôm sau nó lại quay.”</p>`)}
    </div>`,
  },
];
