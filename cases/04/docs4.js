// Case 04, night shift 5 (Tuesday 22/10/1996): the mirror.
import { ln, pic, hand, media } from "../../js/kit.js";
import { tranh, tape } from "./docs0.js";

export default [
  {
    id: "hai_chan_dung", stage: 4, kind: "Ảnh", icon: "🖼", label: "Hai chân dung: Tết 1990 và tháng 10/1996",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Y tá Sương phóng hai khuôn mặt cùng cỡ: bà Hoa trong ảnh Tết 1990, và người phụ nữ chụp ở phòng thăm nuôi tuần trước.</p>
      ${media("overlay", "hai_mat")}
    </div>`,
  },

  {
    id: "bai_bao", stage: 4, kind: "Bài báo", icon: "📄", label: "Bài báo khoa học: sinh đôi soi gương (bản dịch tay)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">Bản dịch tay của thư viện Đại học Đà Lạt cho BS. Vân · tóm tắt từ tạp chí di truyền học</div>
      <h3>Sinh đôi “soi gương”</h3>
      <p>Sinh đôi cùng trứng hình thành khi một hợp tử tách làm hai. ${ln("bb_tach", "Nếu hợp tử tách muộn (khoảng ngày 9 đến 12), hai đứa trẻ có thể là “ảnh trong gương” của nhau.")}</p>
      <p>${ln("bb_dac", "Thường gặp: một người thuận tay phải, người kia thuận tay trái; xoáy tóc và đường rẽ ngôi ngược chiều; nốt ruồi, vết bớt nằm ở hai bên đối xứng.")}</p>
      <p>${ln("bb_adn", "Sinh đôi cùng trứng có bộ gien gần như giống hệt, nên xét nghiệm máu không phân biệt được.")}
        ${ln("bb_van", "Nhưng vân tay hình thành trong bụng mẹ theo áp lực từng vùng, nên vân tay của hai người luôn khác nhau.")}</p>
      <p class="small">Chiếm khoảng một phần tư các cặp sinh đôi cùng trứng.</p>
    </div>`,
  },

  {
    id: "so_giao_ca_dua", stage: 4, kind: "Sổ giao ca", icon: "📓", label: "Sổ giao ca: bà Hoa cầm đũa",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>Chủ Nhật 20/10, 16 giờ, sau buổi thăm. Bà Hoa ngồi căng tin một mình. ${ln("sg_trai", "Tôi đứng sau cửa kính nhìn: bà cầm đũa tay trái, gắp rất khéo.")}</p>
        <p>${ln("sg_doi", "Tôi bước vào, bà thấy tôi thì đặt đũa xuống, cầm lại bằng tay phải, gắp rơi hai lần.")}</p>
        <p>Bà hỏi tôi bác sĩ Vân dạo này có hỏi gì về bà không. Tôi nói không.</p>
        <p class="right">Sương</p>`)}
    </div>`,
  },

  tape("hoi_5", 4, "Băng: hỏi chuyện Thảo về nốt ruồi (22/10)", "Bác sĩ Vân hỏi Thảo những điểm khác của người phụ nữ."),
  tranh(5, 4, "Tranh Thảo vẽ đêm 22/10", "Hai người đàn bà giống hệt đứng quay lưng vào nhau, giữa là một đường dọc như mép gương. Người áo tím có chân chôn dưới đất."),
];
