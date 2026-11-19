// Case 02, third folder (after question 2): the photos, the elder, the child, Thông and Hòa.
import { ln, stamp, pic, hand, media, dread } from "../../js/kit.js";
import { thuyDrawing } from "./art.js";

const caHead = `<div class="form-head"><div>CÔNG AN TỈNH CỬU GIANG<br><b>CÔNG AN HUYỆN GIỒNG CÁT</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>`;

export default [
  {
    id: "cuon_phim", stage: 2, kind: "Ảnh", icon: "▣", label: "Cuộn phim 24 kiểu của thợ ảnh Phát",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Phim Konica 24 kiểu, Phát tráng ngày 29/9. Giờ ghi dưới mỗi kiểu là giờ Phát chép vào bao phim ngay đêm đó, theo đồng hồ đeo tay của Phát.
        Bấm vào từng kiểu để phóng to.</p>
      ${media("roll", "phat")}
    </div>`,
  },

  {
    id: "lk_phat", stage: 2, kind: "Lời khai", icon: "✎", label: "Lời khai thợ ảnh Lâm Tấn Phát",
    html: () => `
    <div class="doc doc--form">
      ${caHead}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 30/9/1993. Người khai: <b>Lâm Tấn Phát</b>, 24 tuổi, chủ tiệm ảnh Phát ở chợ Phú Lễ.</p>
      <p>${ln("phat_1", "Đêm 27/9 tôi vừa quay phim vừa chụp ảnh từ hàng ghế khán giả, ngồi cạnh ông Tám Kỷ.")}</p>
      <p>${ln("phat_2", "Máy quay VHS tôi mượn của tiệm điện Hai Thành. Tôi không biết chỉnh giờ trong máy, cứ để vậy mà quay.")}</p>
      <p>${ln("phat_3", "Đồng hồ đeo tay của tôi thì đúng, chiều hôm đó tôi mới chỉnh theo đài. Mỗi lần bấm máy ảnh, tôi chép giờ lên bao phim để sau này bán ảnh cho đúng lớp.")}</p>
      <p>${ln("phat_4", "Kiểu 9, 14, 17 tôi đều chụp Châu Thương múa đao vì ông Thông múa đao đẹp nhất gánh.")}</p>
      <p>${ln("phat_5", "Cuộn băng VHS gốc tôi vẫn giữ trong tủ, khóa lại. Tôi không biết ai chép ra để gửi cho ông Tám.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Phát", "sign")}</div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
    </div>`,
  },

  {
    id: "lk_dang", stage: 2, kind: "Lời khai", icon: "✎", label: "Lời ông Hương cả Võ Văn Đáng (cầm trống chầu)",
    html: () => `
    <div class="doc doc--form">
      ${caHead}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 30/9/1993. Người khai: <b>Võ Văn Đáng</b>, 72 tuổi, Hương cả đình Phú Lễ, cầm trống chầu đêm 12/8.</p>
      <p>${ln("dang_1", "Cầm chầu thì hay khen tom, dở chê chát. Tôi cầm chầu cho gánh Phước Hưng bốn chục năm.")}</p>
      <p>${ln("dang_2", "Đêm đó trong lớp Đông Lãnh tôi chát hai cái, đều là chát thằng Châu Thương. Nó hát vấp, quên câu, giọng non như con nít. Đao múa cũng lụp chụp.")}</p>
      <p>${ln("dang_3", "Lạ lắm. Thằng Ba Thông theo nghề ba chục năm, chưa bị tôi chát lần nào. Tôi tưởng nó say.")}</p>
      <p>${ln("dang_4", "Qua lớp Huỳnh Hà thì Châu Thương hát lại hay như cũ, tôi tom cho nó một tiếng.")}</p>
      <p>${ln("dang_5", "Lúc thằng Kiệt lên cơn, tôi tom một cái thì nó giật nảy lên như bị điện giật. Tôi buông dùi liền, không dám đánh nữa.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Đáng", "sign")}</div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
    </div>`,
  },

  {
    id: "lk_thuy", stage: 2, kind: "Lời khai", icon: "✎", label: "Lời bé Mai Thị Thủy (12 tuổi) và hình con bé vẽ",
    html: () => `
    <div class="doc doc--form">
      ${caHead}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI<br><small>Người khai chưa thành niên, có bà Tư Lựu đi cùng</small></h2>
      <p>Ngày 1/10/1993. Người khai: <b>Mai Thị Thủy</b>, 12 tuổi, đào con, cháu của Út Nhàn.</p>
      <p>${ln("thuy_1", "Đêm đó con buồn ngủ, con trải chiếu nằm trong góc buồng trò, gần bàn Tổ.")}</p>
      <p>${ln("thuy_2", "Chuông đình đánh xong thì ông Sáu vô rót trà, lạy Tổ rồi đi ra liền. Con thấy hết, ông không bỏ gì vô trà.")}</p>
      <p>${ln("thuy_3", "Một lát sau, ngoài sân khấu đang đánh trống chiến lớn, con nghe cửa sau kẽo kẹt. Có một ông đi vô, mặt trắng bệch như bột, không có mắt mũi gì hết, chỉ trắng trơn.")}</p>
      <p>${ln("thuy_4", "Ổng đi chân không, tay phải quấn vải trắng. Ổng đứng trước bàn Tổ, lấy tay trái rắc cái gì vô chung ở giữa, rồi đứng lạy. Lạy xong ổng quay lại nhìn chỗ con nằm.")}</p>
      <p>${ln("thuy_5", "Con trùm mền lại, nín thở. Ổng đứng đó lâu lắm, rồi mới đi ra cửa sau. Con nghe ổng cười khe khẽ.")}</p>
      <p>${ln("thuy_6", "Bà Tư nói đó là ông Tổ. Con sợ lắm.")}</p>
      ${pic("thuy_ve", "Hình bé Thủy vẽ bằng bút chì màu, ngày 1/10/1993", thuyDrawing())}
      <p class="small muted">Ghi chú của cán bộ ghi: cháu kể lại nhiều lần, chi tiết không đổi. Không xác định được giờ chính xác; cháu chỉ nhớ “sau tiếng chuông một lát, đang đánh trống lớn”.</p>
      ${dread(3, '<p class="ghost-ink">Ở mặt sau tờ giấy vẽ có ai viết thêm bằng son đỏ: “cái mặt trắng là mặt của người sống”.</p>')}
    </div>`,
  },

  {
    id: "lk_thong", stage: 2, kind: "Lời khai", icon: "✎", label: "Lời khai Lê Văn Thông (Ba Thông, kép nhì)",
    html: () => `
    <div class="doc doc--form">
      ${caHead}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Ngày 28/9/1993. Người khai: <b>Lê Văn Thông</b> (Ba Thông), 35 tuổi, kép nhì gánh Phước Hưng Ban.</p>
      <p>${ln("thong_1", "Tôi theo gánh từ năm năm tuổi. Ông Sáu Bé nuôi tôi, dạy tôi hát. Anh Kiệt với tôi như anh em ruột.")}</p>
      <p>${ln("thong_2", "Chiều đó tôi bị nước sôi phỏng tay phải. Đau nhưng vẫn cầm đao được, tôi không xin nghỉ.")}</p>
      <p>${ln("thong_3", "Tôi đóng Châu Thương liên tục cả ba lớp, không rời sân khấu trừ lúc chuyển cảnh.")}</p>
      <p>${ln("thong_4", "Lúc nghỉ giữa các lớp tôi đứng ở cánh gà phải uống nước, không vô buồng trò.")}</p>
      <p>${ln("thong_5", "Tôi không biết ai hại anh Kiệt. Ông Sáu có hũ rượu mã tiền, nhưng ông già rồi, tôi không tin ông làm.")}</p>
      <p>${ln("thong_6", "Đêm giỗ Tổ năm nào cũng có chuyện. Nghề hát mà, Tổ muốn ai thì Tổ lấy.")}</p>
      <div class="sign-row"><div>Người khai<br>${hand("Thông", "sign")}</div><div>Cán bộ ghi<br>${hand("Tâm", "sign")}</div></div>
      ${pic("thong", "Lê Văn Thông, ảnh chụp lúc lấy lời khai. Tay phải vẫn còn băng.", "", "pic--small")}
    </div>`,
  },

  {
    id: "lk_hoa_2", stage: 2, kind: "Lời khai", icon: "✎", label: "Lời khai Tư Hòa, lần 2 (sau khi bị bắt)",
    html: () => `
    <div class="doc doc--form">
      ${caHead}
      <h2 class="form-title">BIÊN BẢN HỎI CUNG BỊ CAN</h2>
      <p>Ngày 4/10/1993, 16 giờ. Bị can: <b>Phan Văn Hòa</b>, 19 tuổi.</p>
      <p>${ln("hoa2_1", "Con xin khai lại. Lần trước con nói ở sau bếp là con nói dối.")}</p>
      <p>${ln("hoa2_2", "Hết lớp 1, anh Ba Thông kéo con ra chái sau, đưa con năm chục ngàn, nói tay anh đau quá, nhờ con đóng Châu Thương lớp 2 giùm, đừng cho bà bầu biết kẻo bà trừ lương anh.")}</p>
      <p>${ln("hoa2_3", "Con lấy dĩa màu đen của con vẽ mặt ở chái sau, mặc đồ Châu Thương của anh, ra đứng sân khấu. Con không thuộc bài nên bị ông Hương cả chát hai lần.")}</p>
      <p>${ln("hoa2_4", "Hết lớp 2 con chạy về chái sau chùi mặt. Anh Thông đã ngồi đó, đang vẽ lại mặt đen, tay phải vẫn quấn băng. Anh lấy lại đồ, dặn con nói là ở dưới bếp.")}</p>
      <p>${ln("hoa2_5", "Con không bỏ thuốc. Con không biết gì về thuốc.")}</p>
      <div class="sign-row"><div>Bị can<br>${hand("Hòa", "sign")}</div><div>Điều tra viên<br>${hand("Tâm", "sign")}</div></div>
      <p class="small muted">Ý kiến của điều tra viên: bị can thay đổi lời khai sau khi bị bắt, có dấu hiệu đổ tội cho người khác để chạy tội. Lê Văn Thông phủ nhận toàn bộ. <b>Cần chứng cứ độc lập.</b></p>
    </div>`,
  },
];
