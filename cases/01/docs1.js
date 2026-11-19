// Second folder (after question 1): statements, the boat register, the dam camera, the ceremony photo.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { tungDrawing } from "./art.js";

const formHead = (who) => `<div class="form-head"><div>CÔNG AN TỈNH SƠN KHÊ<br><b>${who}</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>`;

export default [
  {
    id: "loi_khai_son", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai thầy Hoàng Minh Sơn (hiệu trưởng)",
    html: () => `
    <div class="doc doc--form">
      ${formHead("PHÒNG CẢNH SÁT HÌNH SỰ")}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Hồi 15 giờ ngày 18/8/2003. Người khai: <b>Hoàng Minh Sơn</b>, sinh năm 1960, hiệu trưởng điểm trường Vọng Thủy. Cán bộ ghi: Thiếu úy Đặng Văn Quyết.</p>
      <p>${ln("son_1", "Khoảng 19 giờ 40 ngày 12/8, cô Hà ra khỏi trường. Cô mặc áo mưa nilon màu xanh, đội nón lá, đeo cái túi vải có máy cát-sét nhỏ.")}
        ${ln("son_2", "Tôi hỏi trời mưa thế đi đâu, cô bảo: “Em ra bến Mới, có người hẹn, nửa tiếng em về.”")}
        ${ln("son_3", "Hôm trước báo đăng tôi nói cô bảo “ra hồ một lát”, đấy là tôi nói vắn tắt với công an xã, công an xã không hỏi thêm.")}</p>
      <p>${ln("son_4", "Đi bộ từ trường ra bến Mới mất chừng mười phút.")}
        ${ln("son_5", "Tôi có mang máy ảnh ra bến Vọng chụp lễ thả đèn, khoảng 20 giờ 50, chụp gần hết cuộn phim. Tôi đã nộp tấm có thấy được bến Mới ở bên kia vũng.")}</p>
      <p>${ln("son_6", "Cô Hà là giáo viên tốt. Mấy tháng nay cô hay đi hỏi chuyện các cụ trong làng về hồi di dân năm 1989. Tôi có nhắc cô đừng làm phiền ông chủ tịch.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Sơn", "sign")}</div><div>Cán bộ ghi lời khai<br>${hand("Quyết", "sign")}</div></div>
    </div>`,
  },

  {
    id: "loi_khai_tung", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai bé Lò Văn Tùng (11 tuổi) và hình vẽ",
    html: () => `
    <div class="doc doc--form">
      ${formHead("PHÒNG CẢNH SÁT HÌNH SỰ")}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI<br><small>Người khai chưa thành niên, có mẹ là bà Lò Thị Mai đi cùng</small></h2>
      ${pic("tung", "Lò Văn Tùng lúc lấy lời khai, tay ôm hình vẽ", "", "pic--small pic--left")}
      <p>Hồi 16 giờ 30 ngày 18/8/2003. Người khai: <b>Lò Văn Tùng</b>, 11 tuổi, học sinh lớp 5 điểm trường Vọng Thủy.</p>
      <p>${ln("tung_1", "Tối rằm cháu trốn mẹ đi xem thả đèn. Mưa to quá, cháu trú trong cái lán cá ở bến Mới.")}
        ${ln("tung_2", "Cháu thấy cô Hà đi tới, cô mặc áo mưa xanh, cô đứng chờ ở đầu cầu gỗ.")}
        ${ln("tung_3", "Có một cái thuyền máy tới, không bật đèn, máy nổ nhỏ thôi. Có một chú đội mũ cối ngồi đằng sau, chú đưa tay kéo cô lên. Cô không có vẻ sợ.")}</p>
      <p>${ln("tung_4", "Đồng hồ điện tử của cháu lúc ấy là 7 giờ 52. Thuyền chạy về phía nhà máy, phía Gò Miếu. Mưa to nên cháu không nhìn rõ mặt chú.")}
        ${ln("tung_5", "Cái thuyền có cái ống khói cong cong, như cái móc câu cá.")}
        ${ln("tung_6", "Mũi thuyền có một chị bé mặc áo đỏ ngồi. Chị ấy quay lại nhìn cháu. Chị ấy không ướt.")}</p>
      <p>${ln("tung_7", "Chiều hôm ấy cô Hà đưa cháu một gói giấy, dặn nếu mai cô không lên lớp thì đem gửi bưu điện. Cháu sợ, đến thứ Năm mới dám gửi.")}</p>
      <p class="muted small">Ghi chú của cán bộ: cháu tự vẽ lại cảnh đã thấy (kèm theo). Đồng hồ của cháu đã được kiểm tra, chạy đúng giờ.</p>
      ${pic("ve_tung", "Hình vẽ của Tùng, bút sáp trên giấy vở", tungDrawing())}
    </div>`,
  },

  {
    id: "loi_khai_luc", stage: 1, kind: "Lời khai", icon: "✎", label: "Lời khai Đỗ Văn Lực (lái đò), 13/8",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>CÔNG AN HUYỆN NẬM KHÊ<br><b>CÔNG AN XÃ VỌNG THỦY</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Hồi 9 giờ ngày 13/8/2003, tại trụ sở công an xã. Người ghi: Đinh Công Hùng. Người khai: <b>Đỗ Văn Lực</b>, sinh năm 1972, lái đò chở khách trên hồ, cháu ruột ông Đỗ Văn Khánh.</p>
      <p>${ln("luc_1", "Tôi làm nghề chở đò, thuyền máy của tôi số đăng ký NK-0712.")}</p>
      <p>${ln("luc_2", "Tối 12/8 trời mưa to, tôi nghỉ, không chạy đò.")}</p>
      <p>${ln("luc_3", "Thuyền NK-0712 neo ở cọc của tôi tại bến Mới từ 5 giờ chiều tới sáng hôm sau, không ai dùng.")}</p>
      <p>${ln("luc_4", "Tôi ở nhà xem ti vi tới khoảng 22 giờ rồi đi ngủ, vợ tôi biết.")}</p>
      <p>${ln("luc_5", "Tôi có biết cô Hà vì có lần cô đi đò của tôi. Lần cuối tôi gặp cô là hôm Chủ Nhật.")}</p>
      <p>${ln("luc_6", "Tôi không biết gì thêm về việc cô Hà mất tích.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Lực", "sign")}</div><div>Người ghi<br>${hand("Hùng", "sign")}</div></div>
      ${pic("luc", "Đỗ Văn Lực (ảnh hồ sơ)", "", "pic--small")}
    </div>`,
  },

  {
    id: "so_thuyen", stage: 1, kind: "Sổ", icon: "☰", label: "Sổ đăng ký phương tiện thủy của xã",
    html: () => `
    <div class="doc doc--ledger">
      <h2 class="form-title">SỔ ĐĂNG KÝ PHƯƠNG TIỆN THỦY NỘI ĐỊA<br><small>UBND xã Vọng Thủy · trang 4 (bản chụp)</small></h2>
      <table class="tbl">
        <tr><th>Số ĐK</th><th>Chủ phương tiện</th><th>Loại</th><th>Máy</th><th>Tốc độ tối đa</th><th>Đặc điểm nhận dạng</th></tr>
        <tr><td>NK-0215</td><td>HTX Vận tải Vọng Thủy</td><td>Thuyền khách 20 chỗ</td><td>24 CV</td><td class="n">12 km/h</td><td>Mái tôn, sơn trắng</td></tr>
        <tr><td>NK-0318</td><td>Hoàng Minh Sơn</td><td>Xuồng chèo</td><td>Không</td><td class="n">4 km/h</td><td>Xuồng nan</td></tr>
        <tr><td>NK-0712</td><td>Đỗ Văn Lực</td><td>Thuyền máy</td><td>15 CV</td><td class="n">18 km/h</td><td>Sơn xanh, <b>ống xả cao uốn cong ra sau</b></td></tr>
        <tr><td>NK-0742</td><td>Lương Văn Tảo</td><td>Thuyền máy</td><td>8 CV</td><td class="n">9 km/h</td><td>Sơn đỏ, ống xả thẳng đứng</td></tr>
        <tr><td>NK-0772</td><td>Công an xã</td><td>Xuồng máy</td><td>Máy treo đuôi 25 CV</td><td class="n">20 km/h</td><td>Vỏ nhôm, <b>không có ống xả cao</b></td></tr>
        <tr><td>NK-0792</td><td>Hà Văn Nhì</td><td>Thuyền máy</td><td>12 CV</td><td class="n">14 km/h</td><td>Sơn nâu, ống xả thẳng đứng</td></tr>
      </table>
      <p class="small muted">Biển số sơn trắng hai bên mạn, gần mũi. Mỗi thuyền có cọc neo riêng đánh số tại bến Mới, trừ NK-0742 và NK-0772 neo ở bến Vọng.</p>
      ${pic("thuyen", "Ảnh lưu kèm hồ sơ đăng ký: thuyền NK-0712", "", "pic--small")}
    </div>`,
  },

  {
    id: "video_dap", stage: 1, kind: "Video", icon: "◉", label: "Camera số 3 nhà máy thủy điện, 19:40–20:10",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bản sao từ đầu ghi VHS của tổ bảo vệ nhà máy. <b>Camera số 3</b> quay kênh trước cửa nhận nước, cách bến Mới 2,8 km theo đường thủy.
        Hình đen trắng, ghi một khung hình mỗi giây. Đêm 12/8 không ai xem lại, vì “trời mưa, không có gì”.</p>
      ${media("video", "cam3")}
      <p class="note small">Mẹo: kéo thanh thời gian hoặc dùng nút ◂ ▸ để đi từng giây. <b>Tăng sáng</b> làm rõ vùng tối. Bấm vào hình để phóng to chỗ đó.</p>
    </div>`,
  },

  {
    id: "anh_le", stage: 1, kind: "Ảnh", icon: "▣", label: "Ảnh thầy Sơn chụp lễ thả đèn (phòng tối)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Phim tráng ở hiệu ảnh Hồng Hà ngày 15/8. Ảnh chụp ở bến Vọng khoảng <b>20 giờ 50</b> ngày 12/8, hướng ra vũng.
        Bên kia vũng, cách chừng 300 m, là <b>bến Mới</b> với hàng cọc neo đánh số. Ảnh thiếu sáng nặng.
        Chị Nga gửi bản quét độ phân giải cao: “cứ thử chỉnh như trong phòng tối”.</p>
      ${media("darkroom", "le")}
    </div>`,
  },
];
