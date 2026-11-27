// Case 06, night 6 (21st): the master's last riddle, a dictionary of character parts, the adoption deed,
// the family register, the leap month of 1917, the poison book, the second wax cylinder.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { tape, hv } from "./docs0.js";

/** Characters and the parts they are built from (some are decoys). */
const PARTS = [
  ["斧", "phủ (cái rìu)"], ["亲", "thân (người thân)"], ["防", "phòng (đề phòng)"], ["析", "tích (chẻ ra)"],
  ["棺", "quan (quan tài)"], ["所", "sở (chỗ)"], ["新", "tân (mới)"], ["坊", "phường (phường, xóm)"],
  ["扇", "phiến (cánh quạt)"], ["近", "cận (gần)"], ["旁", "bàng (bên cạnh)"], ["婚", "hôn (cưới)"],
  ["房", "phòng (buồng)"], ["芳", "phương (thơm)"], ["休", "hưu (nghỉ)"], ["姻", "nhân (thông gia)"],
];
const P1 = [["立", "lập: đứng"], ["木", "mộc: cây"], ["斤", "cân: lưỡi rìu"], ["户", "hộ: cánh cửa một cánh"], ["方", "phương: phương, hướng"]];

export default [
  {
    id: "khau_cuoi", stage: 5, kind: "Sổ tay", icon: "📓", label: "Trang cuối sổ tay thầy Khâu (viết đêm Rằm)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>Đêm Rằm. Buồn ngủ quá. Mắt mở không lên.</p>
        <p>Nếu tôi không dậy được, Đình nhớ giùm tôi.</p>
        <p>Tôi không dám viết thẳng. Nhà ấy có người đọc được chữ. Đình là học trò tôi, Đình giải được:</p>
        <p class="riddle">“${ln("kc_1", "Người đứng trên cây, cây tựa lưỡi rìu.")}<br>${ln("kc_2", "Dưới một cánh cửa, có một phương.")}”</p>
        <p>Hai chữ. Ghép lại là chỗ cần mở.</p>`, "shaky")}
    </div>`,
  },

  {
    id: "tu_dien", stage: 5, kind: "Sách", icon: "📖", label: "Tự điển bộ thủ (trang thầy Khâu đánh dấu)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">BỘ THỦ GIẢN YẾU · trang thầy Khâu gấp góc</div>
      <p>Các phần: ${P1.map(([h, v]) => `${hv(h, v.split(":")[0])} <span class="small">(${v})</span>`).join(" · ")}</p>
      <table class="tbl">${PARTS.map(([h, v]) => `<tr><td class="han">${h}</td><td>${v}</td></tr>`).join("")}</table>
    </div>`,
  },

  {
    id: "qua_ke", stage: 5, kind: "Đồ vật", icon: "🔒", label: "Hộp sơn mài khoá chữ trong phòng phu nhân",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Hộp sơn mài đen, nắp khảm xà cừ, khoá chữ bốn vòng bằng đồng, mỗi vòng mười chữ. Thuý Nhi lén mang ra lúc phu nhân ra từ đường.</p>
      ${hand(`<p>Thuý Nhi: “Phu nhân dặn thợ khoá đặt chữ theo bát tự của người sắp bước qua cửa nhà này. Mỗi vòng một trụ, lấy chữ đầu.”</p>`)}
      ${media("hop_son", "box")}
    </div>`,
  },

  {
    id: "gia_pha", stage: 5, kind: "Gia phả", icon: "📜", label: "Gia phả họ Triệu, trang chi trưởng",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">TRIỆU THỊ TỘC PHẢ · chi trưởng · bản chép lại năm Dân Quốc 20</div>
      <p>Triệu Hoài Đức, lấy Tiết thị. Con: Triệu Thừa Tự, ${ln("gp_sinh", "sinh ngày 5 tháng 5 năm Dân Quốc thứ 6 (Tây lịch), giờ Thìn")}. Con một.</p>
      <p>Triệu Hoài Nghĩa (em họ), dời sang Hà Bắc năm Dân Quốc thứ 2. Con: …… (bỏ trống, chưa chép).</p>
    </div>`,
  },

  {
    id: "lich_1917", stage: 5, kind: "Lịch", icon: "📅", label: "Vạn niên lịch giản lược, năm Đinh Tỵ (1917)",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">NĂM ĐINH TỴ · Dân Quốc thứ 6 · năm nhuận<br><small>Chỉ ghi ngày mồng Một mỗi tháng âm ứng với ngày nào Tây lịch</small></h2>
      <table class="tbl">
        <tr><th>Tháng âm</th><th>Mồng Một là ngày (Tây lịch)</th><th>Số ngày</th></tr>
        <tr><td>Tháng Giêng</td><td>23/1/1917</td><td>30</td></tr>
        <tr><td>Tháng Hai</td><td>22/2/1917</td><td>29</td></tr>
        <tr><td>${ln("l17_nhuan", "Tháng Hai nhuận")}</td><td>23/3/1917</td><td>29</td></tr>
        <tr><td>Tháng Ba</td><td>21/4/1917</td><td>30</td></tr>
        <tr><td>Tháng Tư</td><td>21/5/1917</td><td>29</td></tr>
      </table>
      <p class="small">Tây lịch: tháng 3 có 31 ngày, tháng 4 có 30 ngày.</p>
    </div>`,
  },

  {
    id: "thu_ha_bac", stage: 5, kind: "Thư", icon: "✉", label: "Thư của Triệu Hoài Nghĩa từ Hà Bắc (đến phủ chiều nay)",
    html: () => `
    <div class="doc doc--letter">
      <p class="right">Bảo Định, ngày 16 tháng Bảy</p>
      <p>Đại tẩu,</p>
      <p>Thư chị hỏi mượn tên thằng con út nhà em để lập thừa tự cho cháu Thừa Tự, em đọc mà lạnh người.</p>
      <p>${ln("hb_an", "Thằng Thừa An nhà em sinh ngày 15 tháng Hai nhuận năm Đinh Tỵ, mất năm lên ba, Dân Quốc thứ 9, vì sởi.")} Mộ nó ở Bảo Định. Nhà em chỉ còn ba đứa con gái.</p>
      <p>Chị cần tên nó làm gì? Chị cần một đứa trẻ thì nhà em không có. Chị cần một cái tên thì tên ấy đã nằm dưới đất mười sáu năm rồi.</p>
      <p>Em không ký.</p>
      <p class="right">${hand("Hoài Nghĩa", "sign")}</p>
      <p class="small muted">Thư bóc sẵn. Lưu Phúc đưa bạn, bảo: “Phu nhân nói tiên sinh xem cho biết, rồi đốt đi.”</p>
    </div>`,
  },

  {
    id: "hon_thu", stage: 5, kind: "Hôn thư", icon: "囍", label: "Bản nháp hôn thư âm do phu nhân soạn, chờ bạn chép lại",
    html: () => `
    <div class="doc doc--plain">
      <div class="red-card">
        <div class="red-card-h">冥 婚 書 · HÔN THƯ ÂM</div>
        <p>Nhà trai: họ Triệu, trấn Hoè Âm. Chú rể: Triệu Thừa Tự, ${ln("ht_re", "người đang nằm trong quan tài sơn son ở linh đường phủ Triệu")}.</p>
        <p>Nhà gái: họ Ôn. Cô dâu: Ôn thị Tú Nương, bát tự như canh thiếp.</p>
        <p>${ln("ht_chon", "Sau lễ, cô dâu theo chồng, hợp táng một huyệt, đầu cùng hướng, tay trong tay.")}</p>
        <p>Ngày giờ: đêm 22 tháng Bảy, giờ Tý.</p>
        <p class="small">Người viết: …… (để trống, chờ thầy xem ngày ký)</p>
      </div>
    </div>`,
  },

  {
    id: "hoi_xuan", stage: 5, kind: "Sổ sách", icon: "⚗", label: "Sổ bán thuốc độc của hiệu Hồi Xuân Đường, tháng Bảy",
    html: () => `
    <div class="doc doc--ledger">
      <div class="ledger-head">HỒI XUÂN ĐƯỜNG · thuốc độc, thuốc nghiện, phải ghi tên người mua</div>
      <table class="tbl tbl--hand">
        <tr><th>Ngày (âm)</th><th>Người mua</th><th>Thuốc</th><th>Ghi chú</th></tr>
        <tr><td>mồng 3</td><td>Vương, buôn da</td><td>long não</td><td>giữ xác</td></tr>
        <tr><td>mồng 8</td><td>${ln("hx_phuc_1", "Lưu Phúc, phủ Triệu")}</td><td>nha phiến cao, 1 lạng</td><td>“phu nhân đau đầu”</td></tr>
        <tr><td>15</td><td>Lưu Phúc, phủ Triệu</td><td>nha phiến cao, 1 lạng</td><td>“hết rồi”</td></tr>
        <tr><td>20</td><td>${ln("hx_phuc_2", "Lưu Phúc, phủ Triệu")}</td><td>${ln("hx_tin", "thạch tín (phê sương), 2 tiền")}</td><td>“bẫy chuột kho thóc”</td></tr>
      </table>
      <p class="small muted">Chủ hiệu nói thêm: “Một lạng nha phiến là đủ cho một người nghiện nặng hút cả tháng.”</p>
    </div>`,
  },

  {
    id: "gac_dem", stage: 5, kind: "Lời kể", icon: "✍", label: "Lão Vương gác đêm của phủ",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>“Đông viện á? Từ mồng 8, đêm nào phu nhân cũng tự tay mang một khay cơm vào, khoá cửa lại, ra một mình.”</p>
        <p>“Có đêm tôi nghe tiếng xích kéo trên sàn gỗ.”</p>
        <p>“Mùi trong ấy ngọt ngọt, khét khét. Giống mùi tiệm hút ngoài chợ.”</p>`)}
      ${pic("dong_vien", "Cửa Đông viện: khoá đồng, dán ba lá bùa vàng, chân cửa có vệt sáng đèn dầu.")}
    </div>`,
  },

  tape("dong_vien", 5, "Ống đĩa sáp số 2 · hiên Đông viện, chiều Rằm tháng Bảy", "Ống cuối cùng thầy Khâu thu, đặt loa máy hát sát khe cửa Đông viện. Thầy dán nhãn bằng chữ run: “Rằm tháng Bảy, hiên Đông viện.”"),
];

/** The deed inside the lacquer box (sealed into locks.js by tools/lockbox.mjs). */
export const quaKeHtml = () => `
    <div class="doc doc--form doc--old">
      <h2 class="form-title">QUÁ KẾ THƯ</h2>
      <p>Họ Triệu chi trưởng, trấn Hoè Âm. Con trai Triệu Thừa Tự mất sớm, đã cưới vợ âm là Ôn thị. Nay lập người nối dõi cho đôi vợ chồng ấy:</p>
      <p>${ln("qk_ten", "Triệu Thừa An, con trai Triệu Hoài Nghĩa (em họ, ở Hà Bắc)")}, ${ln("qk_sinh", "sinh giờ Thìn ngày 15 tháng Ba năm Đinh Tỵ")}.</p>
      <p>${ln("qk_don", "Ngày 25 tháng Bảy, Lưu Phúc đưa xe la sang Hà Bắc đón về.")} Từ nay Thừa An là con của Thừa Tự và Ôn thị, thờ phụng hai người, hưởng gia sản chi trưởng.</p>
      <div class="sign-row"><div>Người lập<br>${hand("Tiết thị", "sign")}</div><div>Tộc trưởng<br>${hand("Hoài Tông", "sign")}</div><div>Bên cho<br>(chưa ký)</div></div>
      ${stamp("趙氏宗祠", "right:24px;top:24px")}
    </div>`;
