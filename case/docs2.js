// Third folder (after question 2): the 1989 resettlement papers.
import { stamp, pic, hand, media, dread } from "../js/kit.js";

// Page 3 of both lists (households 29–42). unpaid = what Bổng's true ledger says.
const ROWS = [
  [29, "Hà Văn Chung", 5, "3.150.000", false],
  [30, "Nguyễn Thị Gấm", 2, "1.900.000", true],
  [31, "Lò Văn Pín", 6, "3.600.000", false],
  [32, "Đinh Văn Sủng", 4, "2.700.000", true],
  [33, "Lương Thị Mến", 3, "2.250.000", false],
  [34, "Hà Văn Nhì", 4, "2.800.000", false],
  [35, "Cầm Văn Dũng", 7, "4.100.000", true],
  [36, "Phạm Văn Bổng", 4, "2.600.000", false],
  [37, "Vi Văn Thắm", 5, "3.300.000", true],
  [38, "Lò Thị Ỉn", 2, "1.500.000", false],
  [39, "Nguyễn Văn Đạt", 6, "3.850.000", true],
  [40, "Hoàng Văn Pấng", 3, "2.100.000", false],
  [41, "Đinh Thị Lả", 5, "3.200.000", true],
  [42, "Lương Văn Tảo", 3, "2.050.000", false],
];
const PAID_DAYS = ["2/8", "2/8", "3/8", "3/8", "5/8", "5/8", "7/8", "7/8", "9/8", "9/8", "10/8", "10/8", "11/8", "11/8"];

export default [
  {
    id: "bang_2", stage: 2, kind: "Băng ghi âm", icon: "▶", label: "Băng số 2: cô Hà phỏng vấn bà Thoa",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bà <b>Lê Thị Thoa</b> (vợ ông Bổng) mang tới đài lúc 23 giờ 40, trong túi giấy cùng mấy tờ photo. Bà nói cô Hà để quên ở nhà bà hôm 27/7.</p>
      ${media("tape", "bang_2")}
    </div>`,
  },

  {
    id: "so_chi_that", stage: 2, kind: "Sổ", icon: "☰", label: "Sổ chi tiền đền bù “ghi thật” của ông Bổng, trang 3",
    html: () => `
    <div class="doc doc--ledger doc--handwritten">
      <h2 class="form-title">SỔ CHI TIỀN ĐỀN BÙ – BAN DI DÂN LÒNG HỒ XÃ VỌNG THỦY – 1989<br><small>${hand("(sổ ghi thật, P.V.Bổng giữ)", "inline")}</small></h2>
      <table class="tbl tbl--hand">
        <tr><th>STT</th><th>Chủ hộ</th><th>Số khẩu</th><th>Tiền đền bù (đồng)</th><th>Ngày chi</th><th>Ký nhận</th></tr>
        ${ROWS.map(([n, name, k, money, unpaid], i) => `<tr${unpaid ? ' class="red"' : ""}><td>${n}</td><td>${name}</td><td class="n">${k}</td><td class="n">${money}</td>
          <td>${unpaid ? "" : PAID_DAYS[i] + "/89"}</td><td>${unpaid ? '<span class="redink">CHƯA CHI · Ch.ban giữ</span>' : hand(name.split(" ").pop(), "inline sig")}</td></tr>`).join("")}
      </table>
      <p>${hand("Tôi, Phạm Văn Bổng, kế toán Ban di dân, ghi đúng sự thật. Các hộ ghi “chưa chi” thì tiền do anh Khánh giữ, chưa đưa cho dân. Ngày 20/8/1989.")}</p>
      <p class="small muted">Bản photo do cô Hà chụp, trang 3/5. Bà Thoa giữ bản gốc. ${dread(3, '<span class="ghost-ink">Mép trang có vết ngón tay nhỏ, ướt, in lên bản photo.</span>')}</p>
    </div>`,
  },

  {
    id: "danh_sach_huyen", stage: 2, kind: "Danh sách", icon: "☰", label: "Danh sách nộp huyện năm 1989 (kho lưu trữ)",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>UBND XÃ VỌNG THỦY<br><b>BAN DI DÂN LÒNG HỒ</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>
      <h2 class="form-title">DANH SÁCH CÁC HỘ ĐÃ NHẬN TIỀN ĐỀN BÙ VÀ DI DỜI<br><small>Kèm báo cáo ngày 14/8/1989 · trang 3</small></h2>
      <table class="tbl">
        <tr><th>STT</th><th>Chủ hộ</th><th>Số khẩu</th><th>Số tiền đã nhận (đồng)</th><th>Tình trạng</th></tr>
        ${ROWS.map(([n, name, k, money]) => `<tr><td>${n}</td><td>${name}</td><td class="n">${k}</td><td class="n">${money}</td><td>Đã nhận đủ – đã di dời</td></tr>`).join("")}
      </table>
      <p>Tổng toàn xã: <b>47/47 hộ</b> đã nhận tiền và di dời xong.</p>
      <div class="sign-row"><div>Kế toán<br>${hand("Bổng", "sign")}Phạm Văn Bổng</div><div>Trưởng ban<br>${hand("Khánh", "sign")}Đỗ Văn Khánh</div></div>
      ${stamp("UBND XÃ<br>VỌNG THỦY<br>★", "right:50px;bottom:40px")}
      <p class="small muted">Nguồn: Kho lưu trữ UBND huyện Nậm Khê, hộp số 17. Chị Nga cho người lấy lúc 23 giờ 50.</p>
    </div>`,
  },

  {
    id: "lenh_tich_nuoc", stage: 2, kind: "Công văn", icon: "§", label: "Công văn số 09/DD: đề nghị đóng cống sớm",
    html: () => `
    <div class="doc doc--form doc--wet">
      <div class="form-head"><div>UBND XÃ VỌNG THỦY<br><b>BAN DI DÂN LÒNG HỒ</b><br>Số: 09/DD</div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc<br><i>Vọng Thủy, ngày 15 tháng 8 năm 1989</i></div></div>
      <p>Kính gửi: <b>Ban quản lý công trình thủy điện Nậm Khê</b></p>
      <p>Ban di dân lòng hồ xã Vọng Thủy báo cáo: đến nay <b>47/47 hộ</b> trong vùng lòng hồ đã nhận đủ tiền đền bù và <b>di dời xong 100%</b>,
        không còn người và tài sản dưới cao trình ngập.</p>
      <p>Để kịp tiến độ trước mùa lũ, Ban di dân đề nghị Ban quản lý công trình cho <b>đóng cống tích nước sớm, bắt đầu từ 17 giờ ngày 16/8/1989</b>.</p>
      <p>Ban di dân xin chịu trách nhiệm về nội dung xác nhận trên.</p>
      <div class="sign-row"><div></div><div>TRƯỞNG BAN<br>${hand("Khánh", "sign")}<b>Đỗ Văn Khánh</b></div></div>
      ${stamp("UBND XÃ<br>VỌNG THỦY<br>★", "right:60px;bottom:30px")}
      <p class="small muted">Bút phê góc trên của Ban quản lý: “Đồng ý. Đóng cống 17h ngày 16/8 theo đề nghị của xã.”</p>
    </div>`,
  },

  {
    id: "ke_hoach", stage: 2, kind: "Công văn", icon: "§", label: "Kế hoạch tích nước đợt 1 (1989)",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>BỘ NĂNG LƯỢNG<br><b>BAN QUẢN LÝ CÔNG TRÌNH THỦY ĐIỆN NẬM KHÊ</b></div><div><i>Nậm Khê, ngày 2 tháng 8 năm 1989</i></div></div>
      <h2 class="form-title">KẾ HOẠCH TÍCH NƯỚC ĐỢT 1</h2>
      <ol>
        <li>Thời gian dự kiến đóng cống tích nước: <b>ngày 25/8/1989</b>.</li>
        <li><b>Đoàn kiểm tra công tác di dân của huyện</b> sẽ xuống các xã vùng lòng hồ ngày <b>18/8/1989</b>, đối chiếu thực tế từng hộ.</li>
        <li>Chỉ đóng cống khi Ban di dân các xã có văn bản xác nhận <b>100% số hộ</b> đã di dời ra khỏi vùng ngập.</li>
        <li>Khi đã đóng cống, nước dâng tới làng cũ Vọng Thủy trong khoảng 6 đến 8 giờ.</li>
      </ol>
      ${stamp("BAN QLCT<br>THỦY ĐIỆN<br>NẬM KHÊ", "right:40px;bottom:30px", "blue")}
    </div>`,
  },

  {
    id: "bao_1989", stage: 2, kind: "Báo", icon: "▤", label: "Báo Sơn Khê năm 1989: bé gái chết đuối",
    html: () => `
    <div class="doc doc--news doc--old">
      <div class="news-mast small">SƠN KHÊ<small>Thứ Bảy 19-8-1989</small></div>
      <div class="news-kicker">Tin vùng lòng hồ</div>
      <h1 class="news-head">Thương tâm: bé gái chết đuối trong nhà khi hồ tích nước</h1>
      ${pic("lua", "Bé Nguyễn Thị Lụa (ảnh gia đình cung cấp)", "", "pic--small pic--left")}
      <p>Đêm 16/8 (rằm tháng Bảy năm Kỷ Tỵ), khi hồ thủy điện Nậm Khê bắt đầu tích nước, nước dâng nhanh trong đêm làm ngập nhiều nhà cũ ở làng Vọng Thủy.
        Bé <b>Nguyễn Thị Lụa</b>, 9 tuổi, chết đuối ngay trong nhà. Mẹ bé là bà <b>Nguyễn Thị Gấm</b> đi chợ huyện, tối không kịp về vì mưa.</p>
      <p>Theo ông <b>Đỗ Văn Khánh</b>, trưởng ban di dân xã, gia đình bà Gấm “đã nhận đủ tiền đền bù từ trước nhưng chậm di dời, cán bộ đã nhắc nhiều lần”.</p>
      <p>Ngày 18/8, đoàn kiểm tra của huyện đã xuống xã. Vì nước đã ngập làng cũ, đoàn làm việc tại trụ sở xã qua hồ sơ, sổ sách.</p>
    </div>`,
  },

  {
    id: "vo_lua", stage: 2, kind: "Vở học trò", icon: "✎", label: "Trang vở của bé Lụa (Tùng nhặt được)",
    html: () => `
    <div class="doc doc--notebook">
      <p class="note">Tùng nhặt được ở nền một nhà cũ lộ ra khi hồ cạn hồi tháng 4/2003, đưa cho cô Hà. Cô Hà gửi kèm trong túi giấy bà Thoa giữ hộ.</p>
      <div class="vo">
        ${hand(`<p class="right">Thứ tư, ngày 16 tháng 8 năm 1989</p>
        <p class="center"><b>Tập làm văn: Tả ngôi nhà của em</b></p>
        <p>Nhà em có ba gian, mái lợp lá cọ. Trước nhà có cây gạo, mùa xuân hoa đỏ rụng đầy sân.</p>
        <p>Các nhà khác đã dọn lên đồi rồi. Mẹ em bảo khi nào bác Khánh đưa tiền thì nhà em mới dọn được. Bác Khánh bảo chưa có tiền.</p>
        <p>Tối nay mẹ đi chợ huyện, em ở nhà một mình. Em không sợ vì em có cái áo đỏ mẹ mới may.</p>
        ${dread(3, '<p class="ghost-ink">Cô Hà ơi, nhà em vẫn chưa dọn.</p>')}`, "child")}
      </div>
    </div>`,
  },
];
