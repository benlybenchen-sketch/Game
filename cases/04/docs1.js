// Case 04, night shift 2 (Wednesday 16/10/1996): two kinds of "not her".
import { ln, stamp, pic, hand } from "../../js/kit.js";
import { tranh, tape } from "./docs0.js";

export default [
  {
    id: "sach_capgras", stage: 1, kind: "Sách", icon: "📕", label: "Sách Tâm thần học đại cương: Hội chứng Capgras",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">TÂM THẦN HỌC ĐẠI CƯƠNG · tài liệu nội bộ khoa · chương 11: Các hội chứng nhận nhầm</div>
      <h3>Hội chứng Capgras</h3>
      <p>Bệnh nhân tin chắc một người thân (thường là cha mẹ, vợ chồng) đã bị một kẻ giống hệt thay thế.</p>
      <p>Cơ chế được cho là: đường nối giữa vùng nhận diện khuôn mặt và vùng cảm xúc bị tổn thương, hay gặp sau tổn thương thuỳ thái dương hoặc thuỳ trán bên phải.
        Bệnh nhân thấy khuôn mặt quen nhưng không thấy cảm giác thân thuộc đi kèm, nên kết luận: đây là người khác.</p>
      <p>Đặc điểm lâm sàng:</p>
      <ol>
        <li>${ln("sk_cam", "Bệnh nhân thường chỉ nói “cảm thấy” người kia lạ; không chỉ ra được khác biệt cụ thể nào, hoặc viện dẫn những chi tiết thay đổi mỗi lần hỏi.")}</li>
        <li>${ln("sk_dt", "Vì tổn thương nằm ở đường thị giác, nhiều bệnh nhân vẫn nhận ra người thân khi nói chuyện qua điện thoại, nhưng lại cho là kẻ mạo danh khi gặp mặt.")}</li>
        <li>Hội chứng có thể chỉ nhắm vào một hoặc vài người, có thể cả vật nuôi.</li>
      </ol>
    </div>`,
  },

  {
    id: "nhat_ky_thao", stage: 1, kind: "Nhật ký", icon: "📔", label: "Nhật ký Thảo, tháng 3/1996",
    html: () => `
    <div class="doc doc--diary">
      ${hand(`<p>12/3. Anh Khoa tới. Mặt vẫn là mặt ảnh, giọng vẫn là giọng ảnh. Mà mình không thấy ảnh. Như ngồi với một người đóng vai anh Khoa.</p>
        <p>14/3. Mình không chỉ ra được ảnh khác chỗ nào. Mình chỉ thấy lạnh.</p>
        <p>15/3. Anh Khoa gọi điện. Nghe giọng thì đúng là ảnh, mình khóc. Gặp mặt lại thấy lạ.</p>
        <p>20/3. Con Mực cũng lạ. Mấy hôm sau thì hết.</p>
        <p>28/3. Anh Khoa nói thôi. Mẹ ôm mình. Mẹ thì vẫn là mẹ.</p>`, "mine")}
      <p class="note">Bà Hoa nộp cuốn nhật ký này lúc nhập viện “để bác sĩ thấy con tôi bệnh từ tháng Ba”.</p>
    </div>`,
  },

  tape("phong_van", 1, "Băng: BS. Kha phỏng vấn Thảo, tháng 9/1996", "Cuộn băng gốc của buổi phỏng vấn, trước khi BS. Kha chép thành biên bản."),

  {
    id: "bien_ban_pv", stage: 1, kind: "Biên bản", icon: "§", label: "Biên bản phỏng vấn BN phòng 7 (BS. Kha chép)",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BIÊN BẢN PHỎNG VẤN · BN TRẦN NGỌC THẢO · 9/1996</div>
      <p>Hỏi: Căn cứ vào đâu chị cho rằng người đến thăm không phải mẹ chị?</p>
      <p>Đáp:</p>
      <ol>
        <li>${ln("pv_ruoi", "“Nốt ruồi của mẹ chạy sang bên kia miệng.”")}</li>
        <li>${ln("pv_nhan", "“Mẹ đeo nhẫn ba mươi năm, ngón tay có vết hằn. Bà đó không có vết hằn.”")}</li>
        <li>${ln("pv_tom", "“Bà đó ăn tôm. Mẹ em ăn tôm là chết.”")}</li>
        <li>${ln("pv_ru", "“Bà đó ru em bài khác.”")}</li>
        <li>${ln("pv_lanh", "“Bà đó nhìn em mà em thấy lạnh. Mẹ em không làm em lạnh như vậy.”")}</li>
        <li>${ln("pv_biet", "“Em nhìn là biết. Ai giả mẹ thì con biết liền.”")}</li>
        <li>${ln("pv_cuoi", "“Bà đó cười không giống. Em không tả được chỗ nào.”")}</li>
      </ol>
      <p>Hỏi: Còn anh Khoa?</p>
      <p>Đáp: ${ln("pv_khoa0", "“Ảnh với em chia tay rồi. Em không muốn nhắc.”")} ${ln("pv_khoa", "“Mặt vẫn là mặt ảnh. Mà em không thấy ảnh. Em không chỉ ra được chỗ nào khác.”")}</p>
      <p class="note">Bên lề, mực đỏ, BS. Kha: “Hoang tưởng chi tiết hoá. Không cần kiểm chứng.” Các câu trả lời về mẹ bị gạch hai lần bằng mực đỏ.</p>
    </div>`,
  },

  {
    id: "so_dien_thoai", stage: 1, kind: "Sổ trực", icon: "☎", label: "Sổ trực điện thoại khoa Nữ 2, tháng 9",
    html: () => `
    <div class="doc doc--ledger">
      <table class="tbl tbl--hand">
        <tr><th>Ngày, giờ</th><th>Người gọi</th><th>Ghi chú</th></tr>
        <tr><td>3/9 · 19:10</td><td>Bà Hoa (mẹ BN P7)</td><td>${ln("dt_hoa", "Cho BN nghe máy theo đề nghị của bà Hoa. BN nghe khoảng 10 giây thì hét: “Không phải giọng mẹ!” rồi buông máy.")}</td></tr>
        <tr><td>7/9 · 20:30</td><td>Anh Khoa (bạn BN P7)</td><td>${ln("dt_khoa", "BN nghe máy, khóc, nói chuyện bình thường với anh Khoa gần 15 phút.")}</td></tr>
        <tr><td>12/9 · 08:00</td><td>Bà Hoa</td><td>Hỏi thăm, không cho nghe máy (BS. Kha dặn).</td></tr>
      </table>
      <p class="note">Ký trực: Lâm Thị Sương.</p>
    </div>`,
  },

  tape("hoi_2", 1, "Băng: hỏi chuyện Thảo (16/10)", "Bác sĩ Vân hỏi Thảo về hai cuộc điện thoại tháng 9."),
  tranh(2, 1, "Tranh Thảo vẽ đêm 16/10", "Hai khuôn mặt giống hệt nhau. Thảo khoanh đỏ một chấm đen ở khoé miệng."),
];
