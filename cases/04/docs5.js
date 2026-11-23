// Case 04, night shift 6 (Thursday 24/10/1996): the death certificate, the fingerprints, the box of cakes.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { tranh, tape } from "./docs0.js";
import { state, save } from "../../js/store.js";
import { jumpScare } from "../../js/dread.js";

export default [
  {
    id: "chung_tu", stage: 5, kind: "Giấy chứng tử", icon: "§", label: "Giấy chứng tử Phạm Thị Huệ, Sài Gòn 18/6/1996",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">UỶ BAN NHÂN DÂN PHƯỜNG 2 · QUẬN 4 · THÀNH PHỐ HỒ CHÍ MINH<br>GIẤY CHỨNG TỬ (bản sao)</div>
      <p>Họ tên người chết: <b>PHẠM THỊ HUỆ</b> · Nữ · Sinh năm 1944 · Nơi thường trú: Khánh Hội, Q.4.</p>
      <p>Chết lúc 3 giờ ngày 18/6/1996 tại nhà.</p>
      <p>Nguyên nhân: ${ln("ct_dq", "đột quỵ (theo y sĩ trạm y tế phường).")}</p>
      <p>Ghi chú khám thi thể của y sĩ: ${ln("ct_phu", "mặt và môi sưng phù, có nốt đỏ ở cổ;")} ${ln("ct_seo", "sẹo mổ cũ ở bụng dưới bên phải;")} ${ln("ct_ruoi", "nốt ruồi khoé miệng trái.")}</p>
      <p>Người khai tử: chị gái Lê Thị Hoa, có mặt tại nhà lúc chết. Mai táng ngày 18/6 tại nghĩa trang Phước Lộc, Bình Chánh.</p>
      ${stamp("SAO Y BẢN CHÍNH", "right:24px;bottom:22px", "red")}
    </div>`,
  },

  {
    id: "mo_1970", stage: 5, kind: "Bệnh án cũ", icon: "✚", label: "Bệnh viện Đà Lạt: bà Lê Thị Hoa mổ ruột thừa, 1970",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">BỆNH VIỆN ĐÀ LẠT · KHU NGOẠI · 1970</div>
      <p>Bệnh nhân: <b>Lê Thị Hoa</b> (bà Trần Văn Minh), 26 tuổi.</p>
      <p>${ln("mo_ruot", "Ngày 11/3/1970: mổ cắt ruột thừa viêm, đường mổ bụng dưới bên phải dài 6 phân.")} Ra viện sau 7 ngày.</p>
      <p>Đặc điểm nhận dạng ghi trong bệnh án: ${ln("mo_ruoi", "nốt ruồi khoé miệng trái.")}</p>
    </div>`,
  },

  {
    id: "cmnd_hoa", stage: 5, kind: "Giấy tờ", icon: "🪪", label: "Chứng minh nhân dân của bà Lê Thị Hoa (1980) và hai dấu vân tay",
    html: () => `
    <div class="doc doc--plain">
      <div class="idcard id-vn">
        <div class="id-head">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br><b>GIẤY CHỨNG MINH NHÂN DÂN</b></div>
        <div class="id-photo">ảnh 3×4<br>(bản chụp mờ)</div>
        <div class="id-body"><p>Họ tên: <b>LÊ THỊ HOA</b></p><p>Sinh ngày: 14-3-1944</p><p>Nguyên quán: Hoà Vang, Quảng Nam – Đà Nẵng</p><p>Thường trú: Phan Đình Phùng, Đà Lạt</p></div>
        <div class="id-back"><p>${ln("cm_dau", "Dấu vết riêng: nốt ruồi khoé miệng trái.")}</p><p>Ngày cấp: 10-6-1980 · Công an Lâm Đồng</p></div>
      </div>
      <p class="note">Công an phường cho chụp lại dấu vân tay ngón trỏ phải lưu trên chỉ bản. Đặt cạnh dấu điểm chỉ trên giấy cam đoan nhập viện ngày 20/8.</p>
      ${media("prints", "vt")}
    </div>`,
  },

  {
    id: "huong_dan_van_tay", stage: 5, kind: "Tài liệu", icon: "📄", label: "Hướng dẫn phân loại vân tay (tài liệu công an)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">TÀI LIỆU NGHIỆP VỤ · ba dạng hoa văn đường vân cơ bản</div>
      <ul>
        <li><b>Cung:</b> đường vân chạy từ mép này sang mép kia như làn sóng, nhô lên ở giữa. Không có tâm, không có điểm tam giác.</li>
        <li><b>Móc:</b> đường vân đi vào từ một bên, vòng lại hình móc câu, rồi đi ra cùng bên đó. Có một điểm tam giác.</li>
        <li><b>Xoáy:</b> đường vân cuộn tròn hoặc xoắn ốc quanh một tâm. Có hai điểm tam giác ở hai bên.</li>
      </ul>
      <p>Hoa văn đường vân không đổi suốt đời. Hai người khác nhau, kể cả sinh đôi cùng trứng, không bao giờ có vân tay trùng nhau.</p>
    </div>`,
  },

  {
    id: "hop_banh", stage: 5, kind: "Vật chứng", icon: "📦", label: "Hộp bánh bà Hoa gửi vào chiều 24/10",
    html: () => {
      if (typeof document !== "undefined" && document.body.dataset.screen === "desk" && !state.scared.banh_seen) {   // the first time the box is opened, the night nurse finds Thảo
        state.scared.banh_seen = 1; save();
        setTimeout(() => jumpScare("banh", "thao_sung_scare", { hold: 3500 }), 2200);
      }
      return `
    <div class="doc doc--plain">
      ${pic("hop_banh", "Hộp bánh trên bàn trực, 22 giờ 15.")}
      <p class="note">Nhãn giấy dán nắp, nét chữ nghiêng: <i>“Bánh ít đậu xanh. Mẹ làm cho con.”</i></p>
      <p class="note">${ln("hb_mo", "Y tá Sương bẻ thử một cái: nhân bên trong màu hồng cam, tơi, thơm mùi tôm khô. Không phải đậu xanh.")}</p>
      <p class="note">${ln("hb_thao", "22 giờ 40: y tá Sương phát hiện Thảo đã lấy được một cái lúc đi ngang bàn trực, ăn mất nửa. Mặt và môi sưng phù, khó thở. Tiêm adrenalin kịp thời.")}</p>
    </div>`;
    },
  },

  {
    id: "luat", stage: 5, kind: "Tài liệu", icon: "⚖", label: "Ghi chú pháp lý: Bộ luật Dân sự 1995",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>Phòng kế hoạch tổng hợp tóm tắt cho bác sĩ:</p>
        <p>Bộ luật Dân sự có hiệu lực từ ngày 1/7/1996. Khi một người bị bệnh tâm thần không nhận thức, làm chủ được hành vi, Toà có thể tuyên bố người đó mất năng lực hành vi dân sự, căn cứ vào <b>kết luận giám định</b>.</p>
        <p>Khi đó Toà cử người giám hộ, thường là cha mẹ. ${ln("lu_gh", "Người giám hộ thay mặt người được giám hộ quản lý và giao dịch tài sản, kể cả nhà đất.")}</p>
        <p>Luật còn có mức “hạn chế năng lực hành vi dân sự”, nhưng chỉ áp dụng cho người nghiện ma tuý hoặc chất kích thích khác dẫn đến phá tán tài sản, không áp dụng cho bệnh tâm thần.</p>
        <p>Nếu kết luận giám định là người bệnh vẫn đủ năng lực, Toà bác đơn.</p>`)}
    </div>`,
  },

  tape("hoi_6", 5, "Băng: hỏi chuyện Thảo chiều 24/10", "Ghi lúc 18 giờ, sau khi hộp bánh được gửi vào khoa và để trên bàn trực."),
  tranh(6, 5, "Tranh Thảo vẽ đêm 24/10", "Một hộp bánh hình tam giác, đường hồng chảy ra từ một cái. Góc tranh: một bác sĩ tóc dài giữ hộp bánh tránh xa cô gái."),
];
