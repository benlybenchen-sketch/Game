// Case 06, night 1 (17th of the seventh month, Bính Tý = 2/9/1936): the summons, the master's notebook,
// the unnamed betrothal card and everything needed to work out four pillars by hand.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";

/** A wax cylinder recording in a document. */
export const tape = (id, stage, label, note, extra = {}) => ({
  id, stage, kind: "Ống đĩa sáp", icon: "◉", label, ...extra,
  html: () => `<div class="doc doc--plain"><p class="note">${note}</p>${media("tape", id)}</div>`,
});
/** Hán character with its Hán-Việt reading underneath. */
export const hv = (han, viet) => `<ruby>${han}<rt>${viet}</rt></ruby>`;

const PILLARS = [["庚申", "Canh Thân"], ["戊寅", "Mậu Dần"], ["庚子", "Canh Tý"], ["己卯", "Kỷ Mão"]];

/** Almanac rows: solar date, lunar date, day pillar, solar term (with hour). */
const JAN = [
  ["10/1", "20 tháng Một", "Đinh Mão"], ["11/1", "21 tháng Một", "Mậu Thìn"], ["12/1", "22 tháng Một", "Kỷ Tỵ"], ["13/1", "23 tháng Một", "Canh Ngọ"],
  ["14/1", "24 tháng Một", "Tân Mùi"], ["15/1", "25 tháng Một", "Nhâm Thân"], ["16/1", "26 tháng Một", "Quý Dậu"], ["17/1", "27 tháng Một", "Giáp Tuất"],
  ["18/1", "28 tháng Một", "Ất Hợi"], ["19/1", "29 tháng Một", "Bính Tý"], ["20/1", "30 tháng Một", "Đinh Sửu"], ["21/1", "1 tháng Chạp", "Mậu Dần", "Đại Hàn · 16 giờ 04"],
];
const FEB = [
  ["1/2", "12 tháng Chạp", "Kỷ Sửu"], ["2/2", "13 tháng Chạp", "Canh Dần"], ["3/2", "14 tháng Chạp", "Tân Mão"], ["4/2", "15 tháng Chạp", "Nhâm Thìn"],
  ["5/2", "16 tháng Chạp", "Quý Tỵ", "LẬP XUÂN · 10 giờ 26"], ["6/2", "17 tháng Chạp", "Giáp Ngọ"], ["7/2", "18 tháng Chạp", "Ất Mùi"], ["8/2", "19 tháng Chạp", "Bính Thân"],
  ["9/2", "20 tháng Chạp", "Đinh Dậu"], ["10/2", "21 tháng Chạp", "Mậu Tuất"], ["11/2", "22 tháng Chạp", "Kỷ Hợi"], ["12/2", "23 tháng Chạp", "Canh Tý"],
  ["13/2", "24 tháng Chạp", "Tân Sửu"], ["14/2", "25 tháng Chạp", "Nhâm Dần"], ["15/2", "26 tháng Chạp", "Quý Mão"], ["16/2", "27 tháng Chạp", "Giáp Thìn"],
  ["17/2", "28 tháng Chạp", "Ất Tỵ"], ["18/2", "29 tháng Chạp", "Bính Ngọ"], ["19/2", "30 tháng Chạp", "Đinh Mùi"], ["20/2", "Mồng 1 tháng Giêng năm Canh Thân", "Mậu Thân", "Vũ Thuỷ · 6 giờ 28"],
];
const rows = (list) => list.map(([s, l, d, t]) => `<tr><td>${s}</td><td>${l}</td><td>${d}</td><td>${t || ""}</td></tr>`).join("");

export default [
  {
    id: "thu_moi", stage: 0, kind: "Thư", icon: "✉", label: "Thiếp mời của Triệu phu nhân",
    html: () => `
    <div class="doc doc--letter doc--red">
      ${pic("phu_trieu", "Cổng phủ họ Triệu, trấn Hoè Âm. Đèn lồng trắng của đám tang treo cạnh đèn lồng đỏ của đám cưới.")}
      <p class="right">Trấn Hoè Âm, ngày 17 tháng Bảy năm Bính Tý</p>
      <p>Lục tiên sinh,</p>
      <p>Thầy Khâu của tiên sinh đã về với tổ tiên đêm Rằm. Nhà tôi đang có việc lớn mà người chấm ngày lại đi mất, tôi đành mời tiên sinh thay thầy.</p>
      <p>Con trai tôi là <b>Triệu Thừa Tự</b>, mười chín tuổi, chết đuối ở sông Phần, người ta vớt được ở bãi Hạ Than. Nó chưa vợ. Theo lệ, nhà tôi cưới vợ cho nó dưới âm, để nó khỏi cô đơn, để họ Triệu còn người nối dõi bên nó.</p>
      <p>Cô dâu đã có: <b>cô Lý Xuân Hoa</b>, con nhà lương thiện, mất vì thương hàn đầu tháng. Canh thiếp của cô tôi đã gửi thầy Khâu, tiên sinh tìm trong hộp của thầy.</p>
      <p>Việc của tiên sinh: chấm lại bát tự, viết hôn thư cho đúng phép. Lễ định vào <b>đêm 22, giờ Tý</b>. Đừng chậm trễ.</p>
      <p>Tiền công gấp ba. Tiên sinh ở lại phủ cho tiện, phòng ở Tây sương. <b>Đông viện là phòng tân hôn của con tôi, đã niêm phong. Không ai được vào.</b></p>
      <p class="right">${hand("Tiết thị", "sign")}<b>Triệu môn Tiết thị</b></p>
    </div>`,
  },

  {
    id: "tin_khau", stage: 0, kind: "Giấy", icon: "☰", label: "Giấy báo tang thầy Khâu Văn Bỉnh",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">CÁO PHÓ<br><small>Khâu Văn Bỉnh tiên sinh, thầy xem ngày trấn Hoè Âm, thọ 71 tuổi</small></h2>
      <p>Tiên sinh từ trần đêm Rằm tháng Bảy năm Bính Tý (31/8/1936), tại nhà riêng.</p>
      <p>Chiều hôm ấy tiên sinh đến phủ họ Triệu xem nơi đặt linh vị, ${ln("tk_tra", "được quản gia Lưu Phúc mời trà ở hiên Đông viện")}. Về đến nhà tiên sinh kêu buồn ngủ, nằm xuống rồi không dậy nữa.</p>
      <p>${ln("tk_y", "Thầy thuốc Hồi Xuân Đường đến xem, nói: đồng tử co nhỏ như đầu kim, môi tím, thở chậm dần. Tuổi già, tim yếu.")}</p>
      <p class="small muted">Đồ đạc của tiên sinh (sổ tay, hộp canh thiếp, máy hát mượn của ông Tống ở Bắc Bình và hai ống đĩa sáp) giao lại cho học trò Lục Đình.</p>
    </div>`,
  },

  {
    id: "so_khau", stage: 0, kind: "Sổ tay", icon: "📓", label: "Sổ tay thầy Khâu, mấy trang cuối",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p><b>14 tháng Bảy.</b> Phu nhân họ Triệu gửi canh thiếp cô dâu âm. Lạ: canh thiếp không ghi tên, chỉ có bát tự. Phu nhân dặn miệng: “của cô Lý Xuân Hoa”.</p>
        <p>Tôi chưa xem kỹ. Nhớ: tính tứ trụ thì năm đổi ở Lập Xuân, tháng đổi ở Tiết.</p>
        <p><b>15 tháng Bảy, Vu Lan.</b> Đến phủ Triệu. Đông viện cửa khoá, dán bùa trấn. Đứng ở hiên, nghe bên trong có tiếng gọi khe khẽ. Hai chữ. Tôi nghe như “Tú Nương”.</p>
        <p>Phu nhân nói: hồn cậu chủ về. Hồn người chết sao lại gọi tên một đứa nha hoàn mới mua?</p>
        <p>Tôi có mang máy hát của ông Tống theo, ghi được một ống ở hiên Đông viện. Về nhà sẽ nghe lại.</p>
        <p>Trà nhà họ Triệu đắng quá.</p>`)}
    </div>`,
  },

  {
    id: "canh_thiep", stage: 0, kind: "Canh thiếp", icon: "囍", label: "Canh thiếp cô dâu (không ghi tên)",
    html: () => `
    <div class="doc doc--plain">
      <div class="red-card">
        <div class="red-card-h">乾 坤 · CANH THIẾP NHÀ GÁI</div>
        <div class="pillars">${PILLARS.map(([h, v], i) => `<div class="pillar"><small>${["Năm", "Tháng", "Ngày", "Giờ"][i]}</small><b>${h}</b><span>${v}</span></div>`).join("")}</div>
        <p class="small">Tên: <i>(để trống)</i> · Quê quán: <i>(để trống)</i></p>
      </div>
      <p class="note">Giấy đỏ gấp đôi, mực son. Trong hộp canh thiếp của thầy Khâu, kẹp giữa hai tờ giấy trắng. Thầy ghi bút chì ở mép: <i>“chưa đối chiếu”</i>.</p>
    </div>`,
  },

  {
    id: "quy_tac", stage: 0, kind: "Sách", icon: "📕", label: "Sách dạy tứ trụ của thầy Khâu (trích)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">TỨ TRỤ GIẢN YẾU · bản chép tay của Khâu Văn Bỉnh · trang 3–5</div>
      <p><b>Một. Trụ năm.</b> Năm can chi đổi vào <b>giờ Lập Xuân</b>, không phải mồng Một Tết. Sinh trước giờ Lập Xuân thì vẫn tính năm cũ, dù đã qua Tết; sinh sau giờ Lập Xuân thì tính năm mới, dù chưa tới Tết.</p>
      <p><b>Hai. Trụ tháng.</b> Tháng đổi vào giờ <b>Tiết</b> (Lập Xuân mở tháng Dần, Kinh Trập mở tháng Mão, …, Tiểu Hàn mở tháng Sửu). Không theo mồng Một tháng âm. Can của tháng tra theo can năm:</p>
      <table class="tbl"><tr><th>Can năm</th><th>Tháng Dần là</th></tr>
        <tr><td>Giáp, Kỷ</td><td>Bính Dần</td></tr><tr><td>Ất, Canh</td><td>Mậu Dần</td></tr><tr><td>Bính, Tân</td><td>Canh Dần</td></tr>
        <tr><td>Đinh, Nhâm</td><td>Nhâm Dần</td></tr><tr><td>Mậu, Quý</td><td>Giáp Dần</td></tr></table>
      <p class="small">(Ngũ Hổ Độn.) Các tháng sau cứ thế đi tiếp theo thứ tự can chi: Dần, Mão, Thìn, … Tý, Sửu. Tháng Sửu là tháng thứ mười hai.</p>
      <p><b>Ba. Trụ ngày.</b> Tra vạn niên lịch.</p>
      <p><b>Bốn. Trụ giờ.</b> Giờ Tý 23–1 giờ, Sửu 1–3, Dần 3–5, Mão 5–7, Thìn 7–9, Tỵ 9–11, Ngọ 11–13, Mùi 13–15, Thân 15–17, Dậu 17–19, Tuất 19–21, Hợi 21–23. Can của giờ tra theo can ngày:</p>
      <table class="tbl"><tr><th>Can ngày</th><th>Giờ Tý là</th></tr>
        <tr><td>Giáp, Kỷ</td><td>Giáp Tý</td></tr><tr><td>Ất, Canh</td><td>Bính Tý</td></tr><tr><td>Bính, Tân</td><td>Mậu Tý</td></tr>
        <tr><td>Đinh, Nhâm</td><td>Canh Tý</td></tr><tr><td>Mậu, Quý</td><td>Nhâm Tý</td></tr></table>
      <p class="small">(Ngũ Thử Độn.) Mười can: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý. Mười hai chi: Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi.</p>
    </div>`,
  },

  {
    id: "van_nien", stage: 0, kind: "Lịch", icon: "📅", label: "Vạn niên lịch: tháng 1 và tháng 2 năm 1920",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">VẠN NIÊN LỊCH · Dân Quốc năm thứ 9 (dương lịch 1920)<br><small>Hai trang rời trong hộp của thầy Khâu. Năm âm lịch: hết năm Kỷ Mùi, sang năm Canh Thân.</small></h2>
      <p class="small">Tiểu Hàn (mở tháng Sửu): 6/1/1920, 22 giờ 40.</p>
      <table class="tbl tbl--small"><tr><th>Dương lịch</th><th>Âm lịch (năm Kỷ Mùi)</th><th>Ngày can chi</th><th>Tiết khí</th></tr>${rows(JAN)}</table>
      <table class="tbl tbl--small"><tr><th>Dương lịch</th><th>Âm lịch</th><th>Ngày can chi</th><th>Tiết khí</th></tr>${rows(FEB)}</table>
      <p class="small muted">Trang giữa (từ 22/1 đến 31/1) bị mất.</p>
    </div>`,
  },

  {
    id: "khe_uoc", stage: 0, kind: "Khế ước", icon: "✍", label: "Khế ước bán con gái làm nha hoàn",
    html: () => `
    <div class="doc doc--form doc--old">
      <h2 class="form-title">KHẾ ƯỚC<br><small>bán con gái làm nha hoàn, đứt bán, không chuộc lại</small></h2>
      <p>Người lập khế: <b>Ôn Tam</b> (thường gọi Ôn Lão Tam), phu la, ở xóm Bến Đò, trấn Hoè Âm.</p>
      <p>Vì nhà nghèo, nợ nần, nay bằng lòng bán con gái ruột là <b>Ôn Tú Nương</b>, ${ln("ku_sinh", "sinh giờ Mão ngày 23 tháng Chạp năm Kỷ Mùi")}, cho phủ họ Triệu làm nha hoàn. Từ nay sống là người họ Triệu, chết là ma họ Triệu, cha mẹ anh em không được đòi.</p>
      <p>Giá bạc: trả bằng một tờ hối phiếu của phiếu hiệu Nghĩa Thịnh Xương, ghi theo mật áp của hiệu, đã giao tận tay.</p>
      <p>Lập ngày ${ln("ku_ngay", "mồng 8 tháng Bảy năm Bính Tý")}.</p>
      <div class="sign-row"><div>Người bán<br><span class="fingerprint"></span><br><small>(không biết chữ, điểm chỉ)</small></div><div>Người mua<br>${hand("Tiết thị", "sign")}</div><div>Người làm chứng<br>${hand("Lưu Phúc", "sign")}</div></div>
      ${stamp("趙府", "right:30px;top:30px")}
    </div>`,
  },

  {
    id: "so_hau", stage: 0, kind: "Sổ", icon: "☰", label: "Sổ người hầu phủ Triệu (trích)",
    html: () => `
    <div class="doc doc--ledger">
      <div class="ledger-head">SỔ GIA NHÂN PHỦ TRIỆU · quản gia Lưu Phúc ghi</div>
      <table class="tbl tbl--hand">
        <tr><th>Tên</th><th>Việc</th><th>Ngày sinh</th><th>Vào phủ</th></tr>
        <tr><td>Lưu Phúc</td><td>quản gia</td><td>năm Tân Mão</td><td>Dân Quốc năm 3</td></tr>
        <tr><td>Trương mụ</td><td>bếp</td><td>năm Ất Dậu</td><td>Dân Quốc năm 7</td></tr>
        <tr><td>${ln("sh_thuy", "Thuý Nhi")}</td><td>hầu phòng cậu chủ</td><td>${ln("sh_thuy_sinh", "giờ Ngọ ngày 23 tháng Chạp năm Kỷ Mùi")}</td><td>Dân Quốc năm 20</td></tr>
        <tr><td>Ôn Tú Nương</td><td>hầu phu nhân</td><td>(xem khế ước)</td><td>mồng 8 tháng Bảy năm nay</td></tr>
      </table>
      <p class="small muted">Thuý Nhi nói với bạn: “Con với chị Tú Nương sinh cùng một ngày, bà đỡ còn nhớ. Chị ấy sinh lúc gà gáy, con sinh lúc trưa. Phu nhân bảo hai đứa cùng mệnh.”</p>
    </div>`,
  },

  {
    id: "giay_xuan_hoa", stage: 0, kind: "Giấy", icon: "☰", label: "Giấy bà mối âm gửi kèm “hàng”: Lý Xuân Hoa",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p><b>Hoàng Tứ Nương, mối âm, ngõ Liễu, trấn Hoè Âm.</b></p>
        <p>Cô dâu âm: <b>Lý Xuân Hoa</b>, mười sáu tuổi, con gái Lý thợ nhuộm ở thôn Tây.</p>
        <p>Sinh ${ln("xh_sinh", "ngày 15 tháng Giêng năm 1920 Tây lịch, giờ Dậu")} (nhà ấy theo đạo, ghi ngày theo nhà thờ).</p>
        <p>Mất ngày mồng 5 tháng Bảy năm nay, thương hàn. Còn nguyên vẹn, chưa chôn, đang để trong kho lạnh của tôi.</p>
        <p>Mặt mũi sáng sủa. Chân nhỏ. Tóc dài tới thắt lưng.</p>`)}
      <p class="note">Mặt sau, chữ khác: <i>“Phu nhân đặt. Đã nhận tiền.”</i></p>
    </div>`,
  },

  tape("khoc_ga", 0, "Ống đĩa sáp số 1 · “Khóc gả”, thu đêm 14 tháng Bảy", "Ông Tống ở Bắc Bình nhờ thầy Khâu thu các bài khóc gả của cô dâu vùng này. Ống này thầy dán nhãn: “Cô dâu nhà Triệu, đêm 14. Không ai dạy, tự khóc.”"),
];
