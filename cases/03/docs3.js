// Case 03, night 4 (Wednesday 10/11/2004): Quốc's 29-letter alphabet and Suzhou numerals, the pharmacy ledger,
// the slip found under the cup on 23/10/1971. From tonight the diary bà Dung hands over is not the one the player copied.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { letterHtml } from "./name.js";
import { ALPHA29, suzhou } from "./cipher.js";

const su = (s) => `<span class="su">${s}</span>`;

export default [
  {
    id: "sang_3", stage: 3, kind: "Thư buổi sáng", icon: "✉", label: "Thư bà Dung để trên bàn sáng 10/11",
    html: () => `<div class="doc doc--memo">${letterHtml(3)}</div>`,
  },

  {
    id: "vo_quoc", stage: 3, kind: "Vở", icon: "📒", label: "Vở của Quốc: bảng chữ cái tiếng Việt và số Tô Châu",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<b>Bài của Quốc dạy cả nhóm</b> (Tùng chép vô sổ cơ, 25/9/71)`)}
      ${hand(`1. Tụi bây đếm chữ cái theo kiểu Tây, A=1 tới Z=26, là sai với tiếng mình. Tiếng Việt có 29 chữ cái, không có F J W Z. Tao đánh số như vầy:`)}
      <table class="tbl tbl--alpha"><tr>${ALPHA29.map((c, i) => `<td><b>${c}</b><span>${i + 1}</span></td>`).join("")}</tr></table>
      ${hand(`2. Sổ thuốc nhà tao ghi bằng <b>số Tô Châu</b> (số của các tiệm thuốc Bắc, tiệm vàng Chợ Lớn):`)}
      <table class="tbl tbl--su"><tr>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => `<td>${su(suzhou(n))}<span>${n}</span></td>`).join("")}<td>${su("〸")}<span>10 (khi viết riêng)</span></td></tr></table>
      ${hand(`Viết số nhiều chữ số thì viết liền từng chữ số như số mình: ${su("〢〤")} là 24, ${su("〡〇")} là 10.
        Mẹo của mấy ông chủ tiệm: khi số 1, 2, 3 đứng liền nhau thì viết nằm ngang một con cho khỏi lẫn: ${su("〡一")} là 11 chứ không phải 〡〡, ${su("〢二")} là 22, ${su("〡三")} là 13, ${su("〣一")} là 31…
        ai đọc lẫn là mất tiền.`)}
    </div>`,
  },

  {
    id: "so_thuoc", stage: 3, kind: "Sổ sách", icon: "📒", label: "Sổ bán thuốc hiệu Quảng An Đường, tháng 10/1971",
    html: () => `
    <div class="doc doc--ledger">
      <div class="ledger-head">廣安堂 · QUẢNG AN ĐƯỜNG · đường Khổng Tử, Chợ Lớn · sổ xuất thuốc</div>
      <table class="tbl tbl--ledger">
        <tr><th>Ngày / tháng</th><th>Vị thuốc</th><th>Lượng</th><th>Người lấy</th></tr>
        <tr><td>${su(suzhou(12))} / ${su(suzhou(10))}</td><td>當歸 đương quy</td><td>${su(suzhou(3))}</td><td>bà Tư chợ Bình Tây</td></tr>
        <tr><td>${su(suzhou(13))} / ${su(suzhou(10))}</td><td>甘草 cam thảo</td><td>${su(suzhou(5))}</td><td>thầy Lương, Phú Lâm</td></tr>
        <tr><td>${su(suzhou(14))} / ${su(suzhou(10))}</td><td>砒霜 <b>thạch tín</b></td><td>${su(suzhou(1))}</td><td>${ln("st_ban", "Bạn học của A Quốc, nói A Quốc dặn lấy về đánh bả chuột ở nhà Hàng Me. Con gái tóc dài, nói giọng Huế, đi guốc gỗ. Không ghi tên.")}</td></tr>
        <tr><td>${su(suzhou(15))} / ${su(suzhou(10))}</td><td>人參 nhân sâm</td><td>${su(suzhou(2))}</td><td>ông Hứa, tiệm vàng Kim Thành</td></tr>
        <tr><td>${su(suzhou(17))} / ${su(suzhou(10))}</td><td colspan="3"><i>A Quốc mất. Đóng cửa tiệm ba ngày.</i></td></tr>
      </table>
      <p class="note">Bà Dung kẹp trang sổ này trong vở của Quốc. “Ba của Quốc gửi cho bà sau đám tang. Bà không đọc được chữ Tàu.”</p>
    </div>`,
  },

  {
    id: "bc_quoc", stage: 3, kind: "Giấy chứng tử", icon: "§", label: "Nhà thương Chợ Rẫy: giấy chứng tử Lưu Kiến Quốc",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BỆNH VIỆN CHỢ RẪY · SÀI GÒN</div>
      <h3>GIẤY CHỨNG TỬ</h3>
      <p>Họ tên: <b>Lưu Kiến Quốc</b>, 21 tuổi. Nhập viện 1 giờ 15 ngày 17-10-1971. Tử vong 3 giờ 05 cùng ngày.</p>
      <p>Triệu chứng: nôn ói liên tục, chất nôn trắng đục như nước vo gạo, hơi thở mùi tỏi, tiêu chảy, co giật, trụy tim mạch.</p>
      <p>Nguyên nhân tử vong: <b>ngộ độc arsenic (thạch tín) cấp tính</b>. Phòng Giảo nghiệm tìm thấy arsenic trong chất nôn và trong cặn một chung trà do gia đình mang tới.</p>
      <p>${ln("cq_kl", "Cảnh sát kết luận: nạn nhân lấy nhầm thuốc trừ chuột từ tiệm thuốc của gia đình.")}</p>
      ${stamp("CHỨNG TỬ", "right:30px;bottom:24px", "violet")}
    </div>`,
  },

  {
    id: "bien_ban_4", stage: 3, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 4 · 23/10/1971 (Khiêm ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<b>Buổi cơ thứ tư.</b> Thứ Bảy 23/10/1971. Còn bốn đứa. Nghi khóc từ chập tối, Dung đòi bỏ, Lan nói bỏ giữa chừng là “bà” bắt hết.<br>
        Ngồi: <b>Lan (tay chủ)</b>, Dung, Nghi, Khiêm (ghi sổ).<br>
        Con cơ không chạy tới chữ nào. Nó chạy lên hàng số rồi về giữa bàn, rồi lại lên hàng số, rồi đứng im.<br>
        ${ln("bb4_giay", "Lúc dọn bàn, Lan lật chén lên. Dưới chén có một tờ giấy gấp đôi, viết số kiểu sổ thuốc nhà Quốc:")}`)}
      <div class="paper-note">${su("〡三 &nbsp;〡一 &nbsp;〡二 &nbsp;〩 &nbsp;〡〥 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 〢〤 &nbsp;〢二 &nbsp;〨 &nbsp;〡〧")}</div>
      ${hand(`Tôi thử đếm theo kiểu Tây, ra chữ vô nghĩa. Thôi, mai tính. Đi ngủ.`)}
      <p class="note">Dòng cuối trang, nét khác (Nghi), run rẩy:</p>
      ${hand(`<i>Anh Khiêm thắt cổ ở tay vịn cầu thang lúc gần sáng. Dưới chân anh có tờ giấy chép hai câu: “Trăm năm trong cõi người ta / Chữ tài chữ mệnh khéo là ghét nhau.”</i>`)}
    </div>`,
  },

  {
    id: "ban_co_4", stage: 3, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ tư · 10/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${media("board", "n4")}
      <p class="note">Buổi cơ xong, bà Dung đi cất cuốn nhật ký vào tủ sớm hơn mọi bữa. Bạn nghe tiếng chìa khóa vặn hai vòng.</p>
    </div>`,
  },
];
