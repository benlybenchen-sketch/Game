// Case 02, fourth folder (after question 3): Thông's trunk and the night of 1963.
import { ln, stamp, pic, hand, media, dread } from "../../js/kit.js";

export default [
  {
    id: "bb_ruong", stage: 3, kind: "Biên bản", icon: "§", label: "Biên bản khám rương đồ của Lê Văn Thông",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>CÔNG AN TỈNH CỬU GIANG<br><b>CÔNG AN HUYỆN GIỒNG CÁT</b></div><div><i>00 giờ 40 ngày 5/10/1993</i></div></div>
      <h2 class="form-title">BIÊN BẢN KHÁM XÉT ĐỒ VẬT</h2>
      <p>Khám rương gỗ của Lê Văn Thông để trong buồng trò, có mặt bà Nguyễn Thị Lựu (bầu gánh) và ông Huỳnh Văn Đực (ông từ). Thu giữ:</p>
      <ol>
        <li>01 cuộn băng cát-sét, nhãn viết tay: <i>“Ông Sáu kể – 2/9/93”</i>.</li>
        <li>01 ảnh đen trắng cũ, một kép hát mặt vẽ Quan Công, mặt sau ghi: <i>“Ba con – Hai Lành – 1962”</i>.</li>
        <li>01 tờ báo Cửu Giang năm 1963, gấp tư, nhiều chỗ gạch đỏ.</li>
        <li>01 tờ giấy gói thuốc bắc, in chữ <b>“Vạn An Đường – thị xã Cửu Giang”</b>, bên trong còn dính ít bột màu xám.</li>
        <li>01 lọ thủy tinh nắp thiếc, bên trong có <b>ba con chuột cống chết</b>, đã khô quắt. Cả ba con đều ưỡn cong lưng ra sau, bốn chân duỗi cứng, miệng há nhe răng.
          Khi mở nắp, mùi thối xộc ra làm một cán bộ phải ra ngoài nôn. Dưới đáy lọ còn vụn bánh mì lẫn bột xám.</li>
        <li>01 cuốn sổ tay, trang cuối viết hai dòng: <i>“29/9/1963. 27/9/1993. Ba chục năm. Trả.”</i></li>
      </ol>
      <p><b>Ghi nhận:</b> mẫu bột trong giấy gói và trong lọ đã gửi Viện pháp y. Ông Sáu Bé có mặt lúc mở rương; khi thấy tấm ảnh, ông khuỵu xuống, lạy lia lịa về phía rương Tổ.</p>
      ${pic("chuot", "Lọ thủy tinh thu trong rương của Lê Văn Thông", "")}
      ${stamp("CÔNG AN<br>HUYỆN<br>GIỒNG CÁT", "right:40px;bottom:30px")}
    </div>`,
  },

  {
    id: "bang_sau_be", stage: 3, kind: "Băng ghi âm", icon: "▶", label: "Băng cát-sét “Ông Sáu kể – 2/9/93”",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Thu trong rương của Lê Văn Thông. Giọng thứ nhất là ông Sáu Bé, giọng thứ hai là Ba Thông. Băng ghi ở bến sông, có tiếng nước vỗ, tiếng ho.</p>
      ${media("tape", "sau_be")}
    </div>`,
  },

  {
    id: "bao_1963", stage: 3, kind: "Báo", icon: "▤", label: "Báo Cửu Giang năm 1963, bài của Trịnh Văn Kỷ",
    html: () => `
    <div class="doc doc--news doc--old">
      <div class="news-mast small">CỬU GIANG<small>Thứ Ba 1-10-1963</small></div>
      <div class="news-kicker">Kịch trường · Trịnh Văn Kỷ</div>
      <h1 class="news-head">Tổ bắt kép Hai Lành giữa đêm giỗ Tổ</h1>
      ${pic("hai_lanh", "Kép Hai Lành trong vai Quan Công (ảnh tư liệu)", "", "pic--small pic--left")}
      <p class="dropcap">Đêm Chủ Nhật 29/9 (12/8 Quý Mão), gánh hát bội Phước Hưng Ban diễn <i>Quan Công quá ngũ quan</i> tại đình Phú Lễ.
        Kép <b>Lê Văn Lành</b> (Hai Lành, 30 tuổi), Quan Công lừng danh khắp miệt Cửu Giang, sau khi uống chung trà Tổ ở giữa lớp thì ra lớp cuối.</p>
      <p>Chừng hai mươi phút sau, Hai Lành bỗng ưỡn người cong như cây cung, mặt cười méo xệch, ngã vật giữa sân khấu. Mỗi tiếng trống là một cơn giật.
        Anh tỉnh táo đến phút chót, mắt mở trừng trừng nhìn về phía cánh gà. Hai Lành chết trước khi thầy thuốc tới.</p>
      <p>Người trong gánh nói Hai Lành phạm Tổ vì chiều đó đã uống rượu trước khi lên đồ. Đêm ấy, kép <b>Châu Văn Mạnh</b> đóng Châu Thương,
        đồng thời phụ thầy tuồng Đặng Văn Bé coi bàn Tổ, đứng ngay cánh gà lúc Hai Lành gục.</p>
      <p>Hai Lành để lại một đứa con trai lên năm, mẹ mất sớm. Gánh hát nhận nuôi.</p>
      <p>Từ đêm sau, vai Quan Công giao cho kép Châu Văn Mạnh.</p>
      <p class="small"><i>(Bên lề, nét bút đỏ của ai đó, ấn mạnh tới rách giấy: “ĐỨNG NGAY CÁNH GÀ”.)</i></p>
    </div>`,
  },

  {
    id: "chuong_trinh_1963", stage: 3, kind: "Giấy", icon: "☰", label: "Tờ chương trình đêm giỗ Tổ 1963 (rương Tổ)",
    html: () => `
    <div class="doc doc--form doc--old">
      <h2 class="form-title">PHƯỚC HƯNG BAN · ĐÊM GIỖ TỔ 12/8 QUÝ MÃO (29/9/1963)<br><small>Quan Công quá ngũ quan</small></h2>
      <table class="tbl">
        <tr><th>Vai</th><th>Người đóng</th></tr>
        <tr><td>Quan Công</td><td>Lê Văn Lành (Hai Lành)</td></tr>
        <tr><td>Châu Thương</td><td>Châu Văn Mạnh</td></tr>
        <tr><td>Cam phu nhân</td><td>Nguyễn Thị Lựu</td></tr>
        <tr><td>Khổng Tú, Tần Kỳ</td><td>Ba Tòng</td></tr>
        <tr><td>Thầy tuồng, giữ bàn Tổ</td><td>Đặng Văn Bé · phụ: Châu Văn Mạnh</td></tr>
      </table>
      <p>Lệ trà Tổ: chuông đình 10 giờ dứt thì rót ba chung. Kép Quan Công uống chung giữa trước lớp cuối.</p>
      <p>Bên dưới, mực tím đã phai, nét chữ nghiêng, đầu chữ “L” xoắn thành vòng: ${hand("“Đêm nay hát cho Tổ coi. Hai Lành.”", "inline")}</p>
      <p class="small muted">Tìm thấy trong rương Tổ của gánh, kẹp trong vạt áo Quan Công năm 1963. Ông Sáu Bé giữ chìa khóa rương.</p>
    </div>`,
  },

  {
    id: "ly_lich_thong", stage: 3, kind: "Hồ sơ", icon: "☰", label: "Lý lịch nghệ sĩ: Lê Văn Thông",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">SƠ YẾU LÝ LỊCH<br><small>Hồ sơ nghệ sĩ gánh Phước Hưng Ban lưu tại Phòng Văn hóa huyện</small></h2>
      <table class="tbl">
        <tr><td>Họ tên</td><td><b>Lê Văn Thông</b> (nghệ danh Ba Thông)</td></tr>
        <tr><td>Sinh</td><td>14/3/1958 tại Phú Lễ</td></tr>
        <tr><td>Cha</td><td><b>Lê Văn Lành</b>, nghệ sĩ hát bội, mất ngày 29/9/1963</td></tr>
        <tr><td>Mẹ</td><td>Võ Thị Sen, mất năm 1960</td></tr>
        <tr><td>Người nuôi dưỡng</td><td><b>Đặng Văn Bé</b>, thầy tuồng gánh Phước Hưng Ban, từ năm 1963</td></tr>
        <tr><td>Vào nghề</td><td>1966, đóng kép con; từ 1980 là kép nhì</td></tr>
        <tr><td>Vai sở trường</td><td>Châu Thương, Trương Phi (mặt đen)</td></tr>
      </table>
      <p class="small">Ghi chú tay của bà bầu Tư Lựu năm 1980: ${hand("“Thằng Thông xin đóng Quan Công thay ông Mạnh. Không cho. Vai đó để thằng Kiệt.”", "inline")}</p>
    </div>`,
  },

  {
    id: "anh_1963", stage: 3, kind: "Ảnh", icon: "▣", label: "Ảnh “Ba con – Hai Lành – 1962”",
    html: () => `
    <div class="doc doc--plain">
      ${pic("hai_lanh", "Ảnh thu trong rương của Lê Văn Thông. Mặt sau: “Ba con – Hai Lành – 1962”.", "")}
      <p class="note">Ông Tám Kỷ ghi chú: <i>“Tôi nhớ khuôn mặt này. Đêm 1963, lúc nằm co giật trên sàn, anh ta cứ trợn mắt nhìn về cánh gà phải, như đang nhìn ai đó đứng ở đấy.”</i></p>
      ${dread(3, '<p class="note ghost-ink">Mỗi lần mở lại tấm ảnh, đôi mắt trong ảnh hình như lại nhìn lệch đi một chút, về phía bạn.</p>')}
    </div>`,
  },
];
