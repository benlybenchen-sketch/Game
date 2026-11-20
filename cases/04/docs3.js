// Case 04, night shift 4 (Sunday 20/10/1996): the lullaby, BS. Kha's objection, the letters, the family register.
import { ln, stamp, pic, hand } from "../../js/kit.js";
import { tranh, tape } from "./docs0.js";

export default [
  tape("tham_2", 3, "Băng buổi thăm nuôi thứ Bảy 19/10", "Buổi thăm kết thúc sớm vì bệnh nhân kích động. Nghe kỹ: có một chữ chỉ lọt ra một lần, rất nhanh."),

  {
    id: "kha_phan_bac", stage: 3, kind: "Thư", icon: "✉", label: "BS. Kha viết cho bác sĩ Vân",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>Cô Vân,</p>
        <p>Tôi đọc ghi chú của cô. Cô đang làm đúng điều tôi dặn cô đừng làm.</p>
        <p>${ln("kh_doi", "Ba tháng ở Sài Gòn, người ta đổi giọng, đổi khẩu vị, quên cái nhẫn, là chuyện thường.")} Con chó già thì chết.</p>
        <p>${ln("kh_biet", "Còn điều quan trọng nhất: bà ấy biết hết chuyện nhà. Tên hàng xóm, tên khách may, tên con chó, món con gái thích. Một người lạ không thể biết từng ấy thứ.")}</p>
        <p>Cô định viết vào bản giám định rằng có một người lạ giống hệt bà Hoa, biết hết đời bà Hoa, xuất hiện từ hư không? Toà sẽ cười. Và người ta sẽ hỏi bác sĩ điều trị có tỉnh táo không.</p>
        <p class="right">Kha</p>`)}
    </div>`,
  },

  {
    id: "thu_sg_2", stage: 3, kind: "Thư", icon: "✉", label: "Thư bà Hoa gửi từ Sài Gòn, tháng 5 và 6/1996",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>Sài Gòn, 20/5/1996</p>
        <p>Thảo con, chuyện lớn mạ muốn kể là: ${ln("t2_di", "mạ tìm lại được dì của con, người mạ tưởng đã mất từ hồi nạn đói.")} Dì đọc báo nhắn tin tìm mạ.
        ${ln("t2_duc", "Dì giống mạ như đúc, con mà thấy chắc con không phân biệt được.")} Dì nghèo, đau ốm, mạ ở lại chăm dì ít lâu.</p>
        <p>${ln("t2_ke", "Tối nào hai chị em cũng ngồi kể chuyện tới khuya. Mạ kể cho dì nghe hết chuyện nhà mình, chuyện con, chuyện con Mực, chuyện khách may. Dì thương con lắm.")}</p>
        <p>Sài Gòn, 12/6/1996</p>
        <p>${ln("t2_nau", "Dì nấu ăn khéo lắm, ngày nào cũng nấu cho mạ. Mạ dặn dì mạ dị ứng tôm, dì nhớ kỹ lắm.")} Cuối tháng mạ về. Mạ thương con.</p>
        <p class="right">Mạ</p>`)}
      <p class="note">Thảo cất hai lá thư trong tủ. Thảo nói chưa từng nghe mạ nhắc tới một người dì nào.</p>
    </div>`,
  },

  {
    id: "gia_pha", stage: 3, kind: "Gia phả", icon: "📜", label: "Gia phả họ Lê, làng Phong Lệ, Hoà Vang (Đà Nẵng)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">GIA PHẢ HỌ LÊ · chi thứ ba · làng Phong Lệ, huyện Hoà Vang, Quảng Nam – Đà Nẵng · bản chép tay năm 1978, bà con bên ngoại gửi vào theo thư hỏi của bác sĩ</div>
      <p>Đời thứ sáu: ông Lê Văn Thuận (1910–1968), bà Nguyễn Thị Lài (1915–1970).</p>
      <p>Con:</p>
      <ul>
        <li>Lê Văn Hiển (1938–1966).</li>
        <li>${ln("gp_song", "Lê Thị Hoa và Lê Thị Huệ, song sinh, năm Giáp Thân (1944), giờ Dần.")}</li>
        <li>${ln("gp_cho", "Thứ nữ Huệ, cho họ Phạm ở Sài Gòn, năm Ất Dậu (1945), lúc đói.")}</li>
      </ul>
      <p>Lê Thị Hoa lấy chồng họ Trần năm Ất Tỵ (1965), lên ở Đà Lạt. Con: Trần Ngọc Thảo (1972).</p>
      <p class="small">Thư kèm của người o họ ở Đà Nẵng: <i>“Hai chị em giống nhau như hai giọt nước, mà một đứa ăn bằng tay trái, bà nội đánh hoài không sửa được.”</i></p>
    </div>`,
  },

  tape("dem_3h", 3, "Máy ghi âm để trong phòng 7, đêm 19 rạng 20/10", "Y tá Sương đặt máy theo lời dặn của bác sĩ Vân. Cửa phòng khoá từ 21 giờ. Không ai được thăm đêm."),
  tape("hoi_4", 3, "Băng: hỏi chuyện Thảo về người dì (20/10)", "Bác sĩ Vân hỏi Thảo về những lá thư."),
  tranh(4, 3, "Tranh Thảo vẽ đêm 20/10", "Một người đàn bà áo dài tím đứng cuối giường, nốt nhạc bay ra từ miệng. Thảo vẽ mình đang ngủ, mỉm cười."),
];
