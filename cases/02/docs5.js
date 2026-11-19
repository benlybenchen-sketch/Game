// Case 02, last folder (after question 5) and the ending (stage 6).
import { ln, stamp, pic, hand, media, dread } from "../../js/kit.js";
import { envelopeHand } from "./art.js";

export default [
  {
    id: "hoi_cung", stage: 5, kind: "Biên bản", icon: "§", label: "Biên bản hỏi cung Lê Văn Thông, 4 giờ sáng",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>CÔNG AN TỈNH CỬU GIANG<br><b>CÔNG AN HUYỆN GIỒNG CÁT</b></div><div><i>04 giờ 00 ngày 5/10/1993</i></div></div>
      <h2 class="form-title">BIÊN BẢN HỎI CUNG</h2>
      <p><b>Hỏi:</b> Anh có mua mã tiền ở Vạn An Đường ngày 18/9 không?<br><b>Đáp:</b> ${ln("hc_1", "Hỏi Tổ đi.")}</p>
      <p><b>Hỏi:</b> Anh có nhờ Phan Văn Hòa đóng thế lớp 2 không?<br><b>Đáp:</b> ${ln("hc_2", "Thằng nhỏ vô tội. Thả nó ra.")}</p>
      <p><b>Hỏi:</b> Anh biết ai giết cha anh năm 1963 không?<br><b>Đáp:</b> ${ln("hc_3", "Ông Sáu biết. Ổng biết ba chục năm. Ổng nuôi tôi bằng cơm của thằng giết cha tôi.")}</p>
      <p><b>Hỏi:</b> Anh muốn khai gì thêm không?<br><b>Đáp:</b> ${ln("hc_4", "Đêm đó, lúc anh Kiệt nằm cong người trên sân khấu, ảnh nhìn qua cánh gà phải. Không phải nhìn tôi. Tôi đứng ngay bên cạnh ảnh, trên sân khấu.")}</p>
      <p>${ln("hc_5", "Bị can cười, rồi không nói thêm câu nào. Hai tay bị can cào vào nhau tới chảy máu, lớp gạc trên tay phải bung ra, da non bên dưới đỏ lòm.")}</p>
      <div class="sign-row"><div>Bị can<br>${hand("Thông", "sign")}</div><div>Điều tra viên<br>${hand("Tâm", "sign")}</div></div>
    </div>`,
  },

  {
    id: "vhs_cuoi", stage: 5, kind: "Băng VHS", icon: "▶", label: "Đoạn cuối cuộn băng VHS gốc (Phát cắt bớt)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Phát nộp cuộn băng gốc lúc 3 giờ sáng. Nó khai đã không chép đoạn này cho ai, “vì coi một lần là đủ”.
        Bản chép nặc danh dừng ở 22:35:50 trên băng. Bản gốc còn thêm hơn hai phút.</p>
      ${media("vhs", "cuoi")}
      <p class="note small">Cảnh báo: đoạn này có hình ảnh gây sốc.</p>
    </div>`,
  },

  {
    id: "lk_dang_2", stage: 5, kind: "Lời khai", icon: "✎", label: "Ông Hương cả kể thêm với ông Tám Kỷ",
    html: () => `
    <div class="doc doc--letter">
      ${hand(`<p>Ông Tám, tôi già rồi, nói ra sợ người ta cười.</p>
      <p>Lúc thằng Kiệt tắt thở, chừng mười một giờ thiếu hai phút, cả đình nghe ba tiếng tom. Tom, tom, tom. Tiếng trống chầu khen.</p>
      <p>Tôi đã buông dùi từ lúc nó mới lên cơn. Hai cây dùi nằm trong tay tôi. Không ai đứng gần cái trống.</p>
      <p>Mặt trống chầu sáng ra có ba dấu tay son đỏ. Tôi lấy nước lau. Lau không ra.</p>
      <p class="right">Võ Văn Đáng</p>`)}
    </div>`,
  },

  {
    id: "so_sanh_chu", stage: 5, kind: "Đối chiếu", icon: "☰", label: "Ông Tám đối chiếu nét chữ trên phong bì nặc danh",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">ĐỐI CHIẾU NÉT CHỮ<br><small>Ghi chú của Trịnh Văn Kỷ, 4 giờ 20 sáng 5/10/1993</small></h2>
      <div class="compare">
        <figure>${envelopeHand()}<figcaption>Phong bì nặc danh (nhận 2/10/1993)</figcaption></figure>
        <figure>${hand("“Đêm nay hát cho Tổ coi. Hai Lành.”", "lanh")}<figcaption>Dòng chữ trên tờ chương trình 29/9/1963</figcaption></figure>
      </div>
      <p>Cùng một kiểu nghiêng. Cùng cái đầu chữ “L” xoắn thành vòng. Cùng thứ mực tím của thập niên sáu mươi.</p>
      <p>Thằng Phát thề nó không chép băng cho ai. Ông Sáu Bé mù chữ. Thằng Thông thì từ chiều 27/9 không rời mắt công an.</p>
      <p>Tôi không viết thêm gì vào ô kết luận.</p>
      ${dread(4, '<p class="ghost-ink">Lúc ông Tám đặt hai tờ giấy cạnh nhau, ngọn đèn dầu trên bàn tắt phụt, dù không có gió.</p>')}
    </div>`,
  },

  // ---------- ending ----------
  {
    id: "bao_ket", stage: 6, kind: "Báo", icon: "▤", label: "Báo Sân Khấu Cửu Giang, số đặc biệt",
    html: () => `
    <div class="doc doc--news">
      <div class="news-mast">SÂN KHẤU CỬU GIANG<small>Số đặc biệt · Thứ Bảy 9-10-1993</small></div>
      <div class="news-kicker">Kịch trường · Trịnh Văn Kỷ</div>
      <h1 class="news-head">Tổ không bắt ai. Ba mươi năm, hai chung trà.</h1>
      <p class="dropcap">Rạng sáng 5/10, Công an huyện Giồng Cát khởi tố Lê Văn Thông (35 tuổi), kép nhì gánh Phước Hưng Ban, về tội giết người,
        và trả tự do cho Phan Văn Hòa (19 tuổi), người bị Thông lợi dụng để đóng thế, tạo chứng cứ ngoại phạm.</p>
      <p>Thông là con ruột kép Hai Lành, người chết trên sân khấu đình Phú Lễ đêm giỗ Tổ năm 1963. Ba mươi năm sau, biết được kẻ đầu độc cha mình
        là Châu Văn Mạnh, cha của Kép Kiệt, Thông đã làm lại đúng như vậy: cùng đêm, cùng vai, cùng chung trà giữa trên bàn Tổ.
        Anh ta còn ký mạo tên người cha nuôi, ông Đặng Văn Bé, khi mua thuốc độc.</p>
      <p>Ba mươi năm trước, chính tôi đã viết bài “Tổ bắt”. Hôm nay tôi xin đính chính: Tổ không bắt ai. Người bắt.</p>
      <p>Ông Đặng Văn Bé mất lúc 3 giờ sáng 6/10, ngồi tựa vào rương Tổ, hai tay ôm chặt bộ áo Quan Công năm 1963.</p>
    </div>`,
  },

  {
    id: "loi_cuoi", stage: 6, kind: "Thư", icon: "✉", label: "Thư cuối của ông Tám Kỷ",
    html: () => `
    <div class="doc doc--memo">
      <p>Cháu,</p>
      <p>Có ba điều tôi không đưa vào bài báo.</p>
      <p>Một. Sáng 6/10, người ta mở rương Tổ để liệm ông Sáu. Bộ áo Quan Công năm 1963 ướt đẫm mồ hôi, vạt áo dính son đỏ còn mới tinh. Cái khóa đồng thì gỉ, ba chục năm không ai mở.</p>
      <p>Hai. Trong đoạn băng gốc, người đứng ở cánh gà phải mặc đúng bộ áo đó.</p>
      <p>Ba. Đêm qua, tôi ngồi một mình trong đình Phú Lễ. Đúng mười giờ, chuông đình tự vang ba hồi. Rồi từ phía sân khấu tối om có tiếng trống chầu: tom, tom, tom.</p>
      <p>Tôi nghĩ ông Hai Lành đã coi xong vở của mình.</p>
      <p class="right">${hand("Kỷ", "sign")}</p>
      ${pic("ket", "", "")}
    </div>`,
  },
];
