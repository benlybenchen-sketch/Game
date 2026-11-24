// First folder: what the program receives on Tuesday night 19/8/2003.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { envelope } from "./art.js";

export default [
  {
    id: "giao_viec", stage: 0, kind: "Thư", icon: "✉", label: "Thư của anh Quân (dẫn chương trình)",
    html: () => `
    <div class="doc doc--memo">
      <div class="memo-head">ĐÀI PHÁT THANH – TRUYỀN HÌNH SƠN KHÊ<br>Chương trình Chuyện Lúc Nửa Đêm · phát trực tiếp 23:00 – 01:00 · tần số FM 97,5</div>
      <p class="right">Phòng thu số 2, 22 giờ 07, thứ Ba 19/8/2003</p>
      ${pic("studio", "Phòng thu số 2, đêm 19/8. Phong bì và cuộn băng vẫn nằm trên bàn.", "")}
      <p>Gửi cộng tác viên mới,</p>
      <p>Chiều nay phòng văn thư đưa tôi một phong bì ẩm, mùi bùn, không ghi người gửi, dấu bưu điện Vọng Thủy ngày 14/8.
        Bên trong là một cuộn băng cát-sét. Giọng trên băng là cô Trịnh Thu Hà, giáo viên điểm trường Vọng Thủy,
        người đã mất tích đêm rằm tháng Bảy (thứ Ba 12/8). Công an xã kết luận: nghi đuối nước. Dân làng thì nói: hồ đòi người, bảy năm một lần.</p>
      <p>Tôi làm chương trình ma quỷ mười năm nay, và tôi không tin ma. Nhưng tôi nghe cuộn băng ấy ba lần.
        Lần thứ ba, tôi nghe thấy một thứ không có ở hai lần trước.</p>
      <p>Chị Vi Thị Nga, đại úy Phòng Cảnh sát hình sự công an tỉnh, là bạn học cũ của tôi. Chị ấy nói thẳng:
        hồ sơ ở xã đã đóng, muốn mở lại thì phải chỉ ra được chỗ sai. Chị ấy sẽ gửi thêm giấy tờ cho mình, nhưng từng phần một.</p>
      <p>Cách làm việc: trả lời từng trọng điểm trong sổ công tác bên phải. Mỗi kết luận phải ghim giấy tờ làm bằng chứng.
        Trả lời đúng tới đâu, chị Nga gửi tới đó.</p>
      <p>Đeo tai nghe. Có những thứ trên băng chỉ nghe thấy khi tua ngược, có những thứ chỉ nhìn thấy trên phổ âm.</p>
      <p>À, toà nhà này cũ. Nếu đèn chập chờn, hay có tiếng gì ở hành lang, cứ kệ nó.</p>
      <p class="right" style="margin-top:18px">${hand("Quân", "sign")}Trần Đăng Quân</p>
    </div>`,
  },

  {
    id: "phong_bi", stage: 0, kind: "Phong bì", icon: "✉", label: "Phong bì không ghi người gửi",
    html: () => `
    <div class="doc doc--plain">
      ${envelope()}
      <p class="note">Ghi chú của văn thư: “Nhận 18/8, ngăn thư buổi chiều. Phong bì ướt dù hôm đó trời nắng. Đã phơi khô.”</p>
      <p class="note">Chữ trên phong bì: nét thanh nét đậm, kiểu chữ học trò ngày xưa, viết bằng mực tím.</p>
    </div>`,
  },

  {
    id: "bang_1", stage: 0, kind: "Băng ghi âm", icon: "▶", label: "Băng cát-sét số 1 (trong phong bì)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Cuộn băng C-60, vỏ nhựa trong, không dán nhãn. Có cát mịn trong khe băng.</p>
      ${media("tape", "bang_1")}
      <p class="note small">Mẹo: lời thoại hiện ra khi băng chạy qua. Nút Tua ngược phát băng theo chiều ngược lại.
        Nút Phổ âm cho xem hình dạng âm thanh theo thời gian.</p>
    </div>`,
  },

  {
    id: "bao_15", stage: 0, kind: "Báo", icon: "▤", label: "Báo Sơn Khê, thứ Sáu 15/8/2003",
    html: () => `
    <div class="doc doc--news">
      <div class="news-top"><span>Số 3.411 · Năm thứ XXXVIII</span><span>Giá 1.500 đồng</span></div>
      <div class="news-mast">SƠN KHÊ<small>Cơ quan của Đảng bộ và nhân dân tỉnh Sơn Khê</small></div>
      <div class="news-bar"><span>Thứ Sáu 15-8-2003</span><span>Nhằm ngày 18 tháng 7 năm Quý Mùi</span><span>8 trang</span></div>
      <div class="news-grid">
        <div>
          <div class="news-kicker">Huyện Nậm Khê</div>
          <h1 class="news-head">Vọng Thủy: cô giáo trẻ mất tích đêm rằm, nghi đuối nước</h1>
          ${pic("ha", "Cô Trịnh Thu Hà (ảnh do nhà trường cung cấp)", "", "pic--small pic--left")}
          <p class="dropcap">Tối thứ Ba 12/8 (rằm tháng Bảy), bà con xã Vọng Thủy tổ chức lễ cúng cô hồn và thả đèn hoa đăng tại bến Vọng,
            bến đá cũ bên hồ thủy điện Nậm Khê. Do mưa to từ chiều tối, lễ phải lùi tới khoảng 20 giờ 45 mới bắt đầu,
            có khoảng bốn mươi người dự, do ông Lương Văn Tảo (62 tuổi), thầy cúng trong xã, chủ trì.</p>
          <p>Khoảng 21 giờ 30, khi đã thả đèn xong, ông Tảo phát hiện trên bậc đá của bến một đôi dép nữ và một chiếc nón lá,
            nhận ra là của cô Trịnh Thu Hà (26 tuổi), giáo viên điểm trường Vọng Thủy.</p>
          <p>Theo thầy Hoàng Minh Sơn, hiệu trưởng, cô Hà rời trường lúc khoảng 19 giờ 40 tối hôm đó, đi bộ, đội nón lá,
            nói là “ra hồ một lát”. Từ trường ra bến Vọng khoảng 1,2 km. Những người dự lễ được hỏi đều không nhớ đã thấy cô Hà.</p>
          <p>Công an xã cùng dân quân đã tìm kiếm hai ngày nhưng chưa thấy. Ông Đinh Công Hùng, trưởng công an xã, cho biết:
            “Khả năng cao là trượt chân đuối nước. Mặt hồ rộng, nước sâu, có khi nhiều ngày nữa mới tìm thấy.”</p>
          <p>Ông Đỗ Văn Khánh, Chủ tịch UBND xã, đề nghị bà con bình tĩnh, “không lan truyền những chuyện mê tín”.</p>
        </div>
        <div>
          <div class="news-box">
            <h4>Chuyện “bảy năm hồ đòi một người”</h4>
            <p class="small">Người già ở Vọng Thủy kể: đêm rằm tháng Bảy năm 1989, đúng đêm hồ bắt đầu tích nước, bé Nguyễn Thị Lụa (9 tuổi) chết đuối ngay trong nhà ở làng cũ.
              Rằm tháng Bảy năm 1996, ông Phạm Văn Bổng, nguyên kế toán Ban di dân, đi câu đêm và chết đuối gần Gò Miếu.</p>
            <p class="small">“Năm nay lại đúng bảy năm,” một cụ bà nói, rồi không nói thêm gì nữa.</p>
          </div>
          <div class="news-box">
            <h4>Thời tiết</h4>
            <p class="small">Vùng núi phía Bắc: ngày nắng, chiều tối và đêm có mưa rào, có nơi mưa to. Đề phòng lũ quét.</p>
          </div>
          <div class="news-box">
            <h4>Thông báo</h4>
            <p class="small">Nhà máy thủy điện Nậm Khê đề nghị bà con không đánh bắt cá gần cửa nhận nước và khu vực Gò Miếu.</p>
          </div>
        </div>
      </div>
    </div>`,
  },

  {
    id: "bien_ban", stage: 0, kind: "Biên bản", icon: "§", label: "Biên bản sự việc của công an xã, 12/8",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>CÔNG AN HUYỆN NẬM KHÊ<br>CÔNG AN XÃ VỌNG THỦY</div><div>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br>Độc lập – Tự do – Hạnh phúc</div></div>
      <h2 class="form-title">BIÊN BẢN<br><small>Ghi nhận sự việc và thu giữ đồ vật</small></h2>
      <p>Hồi 22 giờ 10 ngày 12/8/2003, tại bến Vọng, thôn Ven Hồ, xã Vọng Thủy. Chúng tôi gồm: Đinh Công Hùng, trưởng công an xã; Vi Văn Quang, công an viên.</p>
      <p>Người báo tin: ông Lương Văn Tảo, 62 tuổi, thầy cúng. Ông Tảo trình báo: khoảng 21 giờ 30, sau khi thả đèn, ông thấy trên bậc đá của bến có đồ của cô Hà.</p>
      <p>Đồ vật ghi nhận:</p>
      <ol>
        <li>01 đôi dép nhựa quai hậu nữ, màu nâu, cỡ 36. Đặt ngay ngắn, song song trên bậc đá thứ hai tính từ mép nước. Dép khô, đế sạch, không dính bùn.</li>
        <li>01 nón lá, quai lụa màu tím, mặt trong ghi bằng bút bi “T.T.Hà – Vọng Thủy 2001”. Nón khô ráo, không thấm nước, đặt úp cạnh đôi dép.</li>
      </ol>
      <p>Hiện trạng nơi phát hiện: bến lát đá ong, gồm 7 bậc xuống nước, không có mái che. Mặt đất quanh bến là đất thịt, bùn nhão do mưa, có nhiều dấu chân người dự lễ.</p>
      ${pic("ben_vong", "Ảnh chụp tại chỗ (đèn flash), 22 giờ 15", "")}
      <p>Nhận định ban đầu: nghi cô Trịnh Thu Hà ra xem lễ, cởi dép để xuống bậc thả đèn, trượt chân rơi xuống hồ. Đề nghị xác định là đuối nước.</p>
      <div class="sign-row"><div>Người báo tin<br>${hand("Tảo", "sign")}Lương Văn Tảo</div><div>Trưởng công an xã<br>${hand("Hùng", "sign")}Đinh Công Hùng</div></div>
      ${stamp("CÔNG AN XÃ<br>VỌNG THỦY<br>★", "right:40px;bottom:30px")}
    </div>`,
  },

  {
    id: "khi_tuong", stage: 0, kind: "Bảng số liệu", icon: "☂", label: "Quan trắc khí tượng – thủy văn, 12/8",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>TRUNG TÂM KTTV TỈNH SƠN KHÊ<br>TRẠM KHÍ TƯỢNG NẬM KHÊ</div><div>Bản sao gửi Đài PT-TH tỉnh<br>theo đề nghị ngày 19/8/2003</div></div>
      <h2 class="form-title">KẾT QUẢ QUAN TRẮC<br><small>Ngày 12 tháng 8 năm 2003 · trạm đặt cách bến Vọng 2 km</small></h2>
      <table class="tbl">
        <tr><th>Giờ</th><th>Lượng mưa (mm)</th><th>Ghi chú của quan trắc viên</th></tr>
        <tr><td>16–17</td><td class="n">0,0</td><td>Nhiều mây</td></tr>
        <tr><td>17–18</td><td class="n">0,0</td><td>Trời tối sầm, có gió</td></tr>
        <tr><td>18–19</td><td class="n">0,4</td><td>Mưa lất phất từ 18:50</td></tr>
        <tr><td>19–20</td><td class="n">23,6</td><td>Mưa to, liên tục cả giờ</td></tr>
        <tr><td>20–21</td><td class="n">9,1</td><td>Mưa to tới 20:15, nhỏ dần, tạnh hẳn lúc 20:30</td></tr>
        <tr><td>21–22</td><td class="n">0,0</td><td>Tạnh, trăng sáng (trăng rằm)</td></tr>
        <tr><td>22–24</td><td class="n">0,0</td><td>Tạnh</td></tr>
      </table>
      <h3>Mực nước hồ Nậm Khê (cao trình, m)</h3>
      <table class="tbl">
        <tr><th>Thời điểm</th><th>Mực nước</th></tr>
        <tr><td>07:00 ngày 12/8</td><td class="n">179,96</td></tr>
        <tr><td>19:00 ngày 12/8</td><td class="n">179,98</td></tr>
        <tr><td>07:00 ngày 19/8</td><td class="n">180,00</td></tr>
      </table>
      <p class="small muted">Ghi chú: năm nay hạn kéo dài, hồ xuống thấp nhất kể từ năm 1990. Nhà máy giữ mực nước khoảng 180 m từ tháng 6.</p>
      ${stamp("TRẠM KTTV<br>NẬM KHÊ", "right:40px;bottom:24px", "blue")}
    </div>`,
  },

  {
    id: "ban_do", stage: 0, kind: "Bản đồ", icon: "⌖", label: "Bản đồ hồ Nậm Khê (có mực nước)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bản đồ địa hình vùng lòng hồ do nhà máy thủy điện in năm 1998, anh Quân ghi chú thêm. Kéo thanh mực nước để xem nước ngập tới đâu.</p>
      ${media("map", "ho")}
      <table class="tbl small">
        <tr><th>Quãng đường (đo trên bản đồ)</th><th>km</th></tr>
        <tr><td>Điểm trường → bến Vọng (đường đất)</td><td class="n">1,2</td></tr>
        <tr><td>Điểm trường → bến Mới (đường đất)</td><td class="n">0,7</td></tr>
        <tr><td>Bến Vọng → bến Mới (đi bộ vòng qua vũng)</td><td class="n">0,9</td></tr>
        <tr><td>Bến Mới → cửa nhận nước nhà máy (đường thủy)</td><td class="n">2,8</td></tr>
        <tr><td>Cửa nhận nước → Gò Miếu (đường thủy)</td><td class="n">0,9</td></tr>
        <tr><td>Bến Vọng → Gò Miếu (đường thủy)</td><td class="n">3,0</td></tr>
      </table>
    </div>`,
  },
];
