// Case 03, night 2 (Monday 8/11/2004): Yến's page of the session book, Tùng's second tape, the police on Tùng's fall.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { letterHtml } from "./name.js";

export default [
  {
    id: "sang_1", stage: 1, kind: "Thư buổi sáng", icon: "✉", label: "Thư bà Dung để trên bàn sáng 8/11",
    html: () => `<div class="doc doc--memo">${letterHtml(1)}</div>`,
  },

  {
    id: "bien_ban_2", stage: 1, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 2 · 9/10/1971 (Yến ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`Buổi cơ thứ hai. Thứ Bảy 9/10/1971. Anh Tùng mất được một tuần. Chị Lan nói phải ngồi lại để hỏi bà Diệp vì sao. Không ai dám cãi.<br>
        Ngồi: chị Lan (tay chủ), Dung, Yến (ghi sổ), anh Khiêm, Nghi, anh Quốc. Chỗ của anh Tùng để trống.<br>
        ${ln("bb2_may", "Chị Lan bật máy Akai của anh Tùng, nói để ghi lại cho đúng.")}`)}
      ${hand(`Con cơ không chạy. Mười phút. Rồi có tiếng gõ. Mình chép theo:`)}
      ${hand(`<span class="code-line">— · — —&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;— ·&nbsp;&nbsp;&nbsp;· · · &nbsp;/&nbsp; — · · —&nbsp;&nbsp;&nbsp;· · —</span>`)}
      ${hand(`${ln("bb2_chan", "Mình không chép nữa. Không ai nhấc tay khỏi chén. Tiếng gõ nghe gần lắm.")}`)}
      <p class="note">Phần còn lại của trang trống. Mép giấy có vệt nước loang, đã khô thành màu vàng.</p>
    </div>`,
  },

  {
    id: "bang_2", stage: 1, kind: "Băng ghi âm", icon: "▶", label: "Băng cối cuộn số 2 · buổi cơ 9/10/1971",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Nhãn cuộn số 2 không phải nét chữ của Tùng. Nét chữ nghiêng về phía trước: “Cơ 9/10/71 · Lan bật máy”.</p>
      <p class="note">Theo sổ của Tùng, micro của máy Akai dựng ngay trên mặt bàn cơ.</p>
      ${media("tape", "dem2")}
    </div>`,
  },

  {
    id: "bc_tung", stage: 1, kind: "Biên bản", icon: "§", label: "Cảnh sát Quận Nhất: biên bản vụ Phạm Văn Tùng",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">VIỆT NAM CỘNG HÒA · BỘ NỘI VỤ<br>BỘ CHỈ HUY CẢNH SÁT QUỐC GIA ĐÔ THÀNH · CUỘC CẢNH SÁT QUẬN NHẤT</div>
      <h3>BIÊN BẢN KHÁM NGHIỆM HIỆN TRƯỜNG</h3>
      <p>Hồi 23 giờ 40 ngày 2-10-1971, tại số 9 đường Hàng Me. Nạn nhân: Phạm Văn Tùng, 20 tuổi, sinh viên.</p>
      <p>Nạn nhân rơi từ ban công tầng hai xuống sân lát gạch tàu, độ cao chừng 6 thước. Vỡ sọ, chết tại chỗ.</p>
      <p>${ln("bc1_lancan", "Lan can ban công bằng gỗ gãy làm hai đoạn. Mặt gãy phía dưới phẳng và đều, phía trên tưa xơ.")}
        ${ln("bc1_muc", "Kết luận: gỗ mục do mối mọt lâu năm, nhà bỏ trống từ 1958.")}</p>
      <p>Lời khai các sinh viên có mặt: nạn nhân ra ban công hút thuốc một mình. Không ai đứng gần. Ông Trương Văn Bảy, gác dan, 71 tuổi, mắt kém, ngủ ở nhà cổng, không nghe thấy gì vì trời mưa lớn.</p>
      <p>Xếp hồ sơ: tai nạn.</p>
      ${stamp("ĐÃ XẾP", "right:30px;bottom:30px", "blue")}
      ${pic("lan_can", "Ảnh hiện trường: lan can gãy, chụp sáng 3-10-1971.")}
    </div>`,
  },

  {
    id: "bao_yen", stage: 1, kind: "Báo", icon: "📰", label: "Báo Tin Sáng Đô Thành, 11/10/1971",
    html: () => `
    <div class="doc doc--news">
      <div class="news-head">TIN SÁNG ĐÔ THÀNH · số 1882 · thứ Hai 11-10-1971</div>
      <h3>THÊM MỘT NỮ SINH VIÊN VĂN KHOA CHẾT TRONG BIỆT THỰ “MA” ĐƯỜNG HÀNG ME</h3>
      <p>Rạng sáng Chủ Nhật, người ta vớt được xác cô Võ Thị Bạch Yến, 19 tuổi, dưới hồ sen sau biệt thự Bạch Lan, nơi một tuần trước nam sinh viên Phạm Văn Tùng rơi từ ban công.</p>
      <p>Theo Viện Giảo nghiệm, trong máu nạn nhân có thuốc ngủ loại barbiturate, liều đủ làm mê man. Bạn học cho biết cô Yến than mệt sau khi ăn chè, ra vườn hóng gió.</p>
      <p>${ln("bao_lan", "Cô Hà Ngọc L., bạn học, khai đã dìu Yến ra băng đá cạnh hồ cho tỉnh, rồi quay vô nhà lấy dầu gió. Khi trở ra thì không thấy bạn đâu.")}</p>
      <p>Hồ sen nhà bà Diệp sâu gần hai thước, bùn dày. Người trong xóm nói từ năm 1958 không ai dám bẻ sen ở đó.</p>
      <p class="small">Trong túi xách nạn nhân có một tập thơ chép tay. Cảnh sát đã niêm phong.</p>
    </div>`,
  },

  {
    id: "ban_co_2", stage: 1, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ hai · 8/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${media("board", "n2")}
      <p class="note">Bà Dung kéo ghế lùi xa khỏi bàn, chân bà co hẳn lên ghế. “Bà không thích tiếng gõ.”</p>
    </div>`,
  },
];
