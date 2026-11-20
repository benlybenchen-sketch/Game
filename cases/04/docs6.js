// Case 04, the ending (November 1996).
import { pic, hand, stamp } from "../../js/kit.js";
import { tape } from "./docs0.js";

export default [
  {
    id: "bao_ket", stage: 6, kind: "Báo", icon: "📰", label: "Báo Lâm Đồng, tháng 11/1996",
    html: () => `
    <div class="doc doc--news">
      <div class="news-head">BÁO LÂM ĐỒNG · số ra ngày 15-11-1996</div>
      <h3>CHỊ EM SINH ĐÔI, MỘT NGƯỜI SỐNG THAY NGƯỜI KIA</h3>
      <p>Toà án nhân dân thành phố Đà Lạt đã bác đơn yêu cầu tuyên bố chị T.N.T. mất năng lực hành vi dân sự, căn cứ bản giám định của Bệnh viện Tâm thần Cam Ly.</p>
      <p>Cùng ngày, Công an tỉnh Lâm Đồng phối hợp Công an thành phố Hồ Chí Minh khởi tố bà <b>Phạm Thị Huệ</b> (tức Lê Thị Huệ, 52 tuổi) về hai tội giết người và giết người chưa đạt.
        Kết quả khai quật ở nghĩa trang Phước Lộc cho thấy người được chôn dưới tên “Phạm Thị Huệ” có sẹo mổ ruột thừa và hồ sơ y tế trùng với bà Lê Thị Hoa, chị song sinh của bị can.</p>
      <p>Theo cơ quan điều tra, bị can đã nấu cháo tôm cho người chị bị dị ứng tôm nặng, rồi mang tên chị về sống ở Đà Lạt suốt bốn tháng.</p>
      <p>Bác sĩ điều trị, BS. Lê Bích Vân, từ chối trả lời phỏng vấn.</p>
      ${pic("khai_quat", "Khai quật mộ ở nghĩa trang Phước Lộc, Bình Chánh.")}
    </div>`,
  },

  {
    id: "thu_thao", stage: 6, kind: "Thư", icon: "✉", label: "Thư Thảo gửi bác sĩ Vân",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>Chị Vân,</p>
        <p>Em về nhà rồi. Nhà trống lắm, không còn con Mực. Anh Khoa có tới, em vẫn không thấy ảnh. Bác sĩ nói cái đó là bệnh thật, có thể lâu lắm mới hết. Em chịu được.</p>
        <p>Chị ký cho em cái câu “lời khai về mẹ là sự thật”. Cả đời em sẽ nhớ câu đó.</p>
        <p>Chị đừng nói với ai nghe. Mẹ về rồi. Đêm nào mẹ cũng đứng cuối giường ru con, bài “Bồng bồng mẹ bế con sang”. Nốt ruồi của mẹ nằm đúng bên cũ.</p>
        <p>Nói ra người ta lại bảo em điên.</p>
        <p class="right">Thảo</p>`, "mine")}
      <p class="note">Trong phong bì có kèm một cuộn băng cassette nhỏ, nhãn viết tay: “đêm 13/11”.</p>
    </div>`,
  },

  tape("cuoi", 6, "Cuộn băng Thảo gửi kèm thư", "Thảo để máy ghi âm cạnh giường suốt đêm 13 rạng 14/11."),
];
