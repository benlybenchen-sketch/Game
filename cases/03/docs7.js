// Case 03, the ending (Sunday 14/11/2004).
import { pic, hand, stamp } from "../../js/kit.js";
import { fullName, CallName } from "./name.js";
import { tombArt } from "./art.js";

export default [
  {
    id: "bao_ket", stage: 7, kind: "Báo", icon: "📰", label: "Báo sáng 15/11/2004",
    html: () => `
    <div class="doc doc--news">
      <div class="news-head">TIN NHANH SÀI GÒN · thứ Hai 15-11-2004</div>
      <h3>CỤ BÀ CHẾT ĐUỐI DƯỚI HỒ SEN, HAI TAY ÔM HỘP VÀNG</h3>
      <p>Rạng sáng 14/11, người dân phát hiện thi thể bà L.H.D. (52 tuổi), chủ một biệt thự cũ ở quận 1, úp mặt dưới hồ sen sau vườn.
        Hai tay nạn nhân ôm chặt một hộp sắt tây bám đầy bùn, bên trong có 37 lượng vàng lá và một nhẫn hột xoàn cũ.</p>
      <p>Theo công an phường, hồ sen không sâu quá ngực người lớn. Trên mặt nạn nhân không có dấu vết vật lộn. Ngón trỏ tay phải của bà vẫn duỗi thẳng, ấn xuống nắp hộp, “như đang đặt tay lên con cơ”, một người hàng xóm nói.</p>
      <p>Trên bàn trong phòng khách tầng hai, công an thu giữ một bình trà sen và hai chung trà còn nước. Kết quả giám định sơ bộ: trong một chung có <b>arsenic</b> (thạch tín).</p>
      <p>Theo nguồn tin riêng, công an đang xem xét đề nghị khai quật một ngôi mộ ở nghĩa trang Thiên Phước, Gò Vấp, khắc tên Hà Ngọc Lan (1952–1971).</p>
      ${pic("ho_sen", "Hồ sen sau biệt thự, sáng 14/11/2004. Nước đã được bơm cạn một nửa: sen thối đen, bùn và xương cá.")}
    </div>`,
  },

  {
    id: "bia_moi", stage: 7, kind: "Ảnh", icon: "🖼", label: "Nghĩa trang Thiên Phước, một tháng sau",
    html: () => `
    <div class="doc doc--plain">
      ${pic("bia_moi", "Tấm bia đã được khắc lại.", tombArt("LÂM HẠNH DUNG", "1952 – 1971"))}
      <p class="note">Tấm bia cũ được mài đi, khắc lại: <b>LÂM HẠNH DUNG · 1952–1971</b>. Bên cạnh là một ngôi mộ mới đắp, chưa có bia. Không ai đặt sen. Dưới chân bia có một ngọn nến nhỏ không biết ai thắp. Trên mộ mới chỉ có một nén nhang cắm thẳng, cháy tới chân, tàn không rơi.</p>
    </div>`,
  },

  {
    id: "thu_cuoi", stage: 7, kind: "Thư", icon: "✉", label: "Lá thư không ký tên",
    html: () => `
    <div class="doc doc--memo">
      <p class="note">Bạn tìm thấy lá thư kẹp trong sổ tay của mình, đúng trang bản chép nhật ký. Bạn không nhớ đã để nó ở đó. Phong bì đề: <b>${fullName() || "Em"}</b>.</p>
      ${hand(`<p>${CallName() === "Cháu" ? "Em" : CallName()},</p>
        <p>Em đã đọc lại. Không ai đọc lại cả, ba mươi ba năm nay.</p>
        <p>Em đã không uống. Chị biết, vì chị ngồi bên cạnh em suốt bảy đêm, ngón tay chị đặt trên con cơ cạnh ngón tay em.</p>
        <p>Bà trẻ để vàng dưới hồ sen vì bà biết có một người sẽ không bao giờ dám xuống đó. Bà chỉ không biết người ấy sẽ xuống, vào đúng cái đêm có người đọc được quẻ.</p>
        <p>Giờ chị có lại tên của chị rồi. Em giữ giùm chị bản chép nhé.</p>`, "back")}
      <p class="note">Nét chữ ngả về phía sau. Mép trái mỗi dòng lem mực, như bàn tay trái quẹt qua khi mực còn ướt. Không ký tên.</p>
    </div>`,
  },
];
