// Case 03, night 3 (Tuesday 9/11/2004): Yến's poems, the poem the board "recited" in 1971, the last poem in her bag.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { letterHtml } from "./name.js";

const poem = (lines) => `<div class="poem">${lines.map((l) => `<p>${l}</p>`).join("")}</div>`;

export default [
  {
    id: "sang_2", stage: 2, kind: "Thư buổi sáng", icon: "✉", label: "Thư bà Dung để trên bàn sáng 9/11",
    html: () => `<div class="doc doc--memo">${letterHtml(2)}</div>`,
  },

  {
    id: "tap_tho_yen", stage: 2, kind: "Tập thơ", icon: "✒", label: "Tập thơ chép tay của Yến",
    html: () => `
    <div class="doc doc--notebook">
      <p class="note">Tập giấy pelure mỏng, chữ con gái tròn trịa. Trang đầu Yến viết cho cả nhóm:</p>
      ${hand(`<b>Thơ tàng đầu</b> (thơ giấu chữ): giấu lời ở đầu câu.
        Dấu không tính: Ơ, Ô cũng là O, Ư là U, Đ là D. Bài này mình làm tặng nhóm mình, tụi bây thử đọc coi:`)}
      ${poem(["Bảy người ngồi dưới trăng thanh,", "Áo ai trắng muốt bên cành sen xa.", "Chén trà mời bóng trăng tà,", "Hồn thơ gửi lại mái nhà Hàng Me.",
        "Lá rơi gió thổi bờ tre,", "Ai về thì nhớ đêm hè năm xưa.", "Nhớ nhau dẫu nắng dẫu mưa."])}
      ${hand(`(B-A-C-H-L-A-N. Dễ ợt. Anh Khiêm đọc ra trong một phút, còn chê thơ mình non.)`)}
    </div>`,
  },

  {
    id: "bien_ban_3", stage: 2, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 3 · 16/10/1971 (Quốc ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<b>Buổi cơ thứ ba.</b> Thứ Bảy 16/10/1971. Yến mới chôn hôm thứ Tư.<br>
        Ngồi: <b>Lan (tay chủ)</b>, Dung, Khiêm, Nghi, Quốc (ghi sổ). Hai chỗ trống.<br>
        Con cơ chạy rất lâu, không ngừng. Lan đọc theo từng chữ con cơ dừng, tôi chép lại. Ra một bài lục bát mười ba câu:`)}
      ${poem(["Quạ kêu ba tiếng đầu hồi,", "Ủ tro bếp lạnh ai ngồi chờ ai.", "Ơi người áo trắng sân ngoài,", "Chén trà ai rót đêm dài cho em.",
        "Uống đi cho ấm môi mềm,", "Ông bà ngồi đợi bên thềm từ lâu.", "Nước hồ xanh thẳm còn sâu,", "Gió đưa hương khói qua cầu sang sông.",
        "Trăm năm nằm dưới đáy lòng,", "Hồn ai đứng giữa hư không gọi về.", "Uống rồi nằm ngủ như mê,", "Ơi người, ai gọi chẳng nghe nữa đâu.", "Chưa xanh cỏ mộ đã sầu."])}
      ${hand(`Khiêm nói thơ dở, chắc bà Diệp không có học. Không ai cười.<br>
        ${ln("bb3_tra", "Lan pha một bình trà nóng mời mọi người cho đỡ lạnh. Tôi uống hai chung.")}`)}
      <p class="note">Dòng cuối trang, nét khác (Khiêm):</p>
      ${hand(`<i>Quốc ói suốt đêm, nước ói trắng đục như nước vo gạo, mùi tỏi. Mất lúc 3 giờ sáng 17/10 tại nhà thương Chợ Rẫy.</i>`)}
    </div>`,
  },

  {
    id: "do_dac_yen", stage: 2, kind: "Biên bản", icon: "§", label: "Đồ đạc trong túi xách của Yến",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">CUỘC CẢNH SÁT QUẬN NHẤT</div>
      <h3>BIÊN BẢN NIÊM PHONG ĐỒ VẬT CỦA NẠN NHÂN VÕ THỊ BẠCH YẾN</h3>
      <ol><li>Một ví da, 140 đồng.</li><li>Một cây lược sừng, một thỏi son Tangee.</li><li>Một tập thơ chép tay, 12 trang.</li>
        <li>${ln("dd_to", "Một tờ giấy học trò gấp tư, viết bằng bút chì, nét vội, có ghi “9/10, viết dưới gầm bàn”.")}</li></ol>
      <p class="note">Tờ giấy gấp tư (chép lại nguyên văn):</p>
      ${poem(["Tối nay ngồi lại quanh đèn,", "Ai đưa con chén trượt trên mặt bàn.", "Yên đi, đừng có hỏi han,", "Cầm tay cho chặt kẻo tan hồn người.",
        "Hôm qua anh vẫn còn cười,", "Ú òa một tiếng, ngã rơi xuống sân.", "Đêm nay đến lượt ai lần,", "Ai ngồi tay chủ mà gần mặt em.",
        "Yếu tay sao chén chạy êm,", "Cớ sao gót guốc dưới thềm gõ hoài.", "Ôi thôi, em biết là ai."])}
      <p class="small">Năm 1972 gia đình nạn nhân nhận lại đồ. Mẹ cô Yến gửi tờ giấy gấp tư cho cô Lâm Hạnh Dung “vì con Yến thương con nhất”.</p>
      ${stamp("NIÊM PHONG", "right:24px;top:70px", "red")}
    </div>`,
  },

  {
    id: "ban_co_3", stage: 2, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ ba · 9/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${media("board", "n3")}
      <p class="note">Sau buổi cơ, bà Dung ngồi rất lâu không nói. Rồi bà hỏi bạn có thuộc thơ không. Bạn nói không. Bà cười: “Yến nó thuộc nhiều lắm.”</p>
    </div>`,
  },
];
