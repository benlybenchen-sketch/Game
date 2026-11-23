// Case 06, night 3 (19th): the bank draft written in secret code, two years of code keys,
// the Thousand Character Classic, the father who sold his daughter.
import { ln, stamp, pic, hand } from "../../js/kit.js";
import { hv } from "./docs0.js";

/** The first 80 characters of the Thousand Character Classic, in lines of four, with Hán-Việt readings. */
const TTV = [
  ["天地玄黃", "thiên địa huyền hoàng"], ["宇宙洪荒", "vũ trụ hồng hoang"], ["日月盈昃", "nhật nguyệt doanh trắc"], ["辰宿列張", "thần tú liệt trương"],
  ["寒來暑往", "hàn lai thử vãng"], ["秋收冬藏", "thu thu đông tàng"], ["閏餘成歲", "nhuận dư thành tuế"], ["律呂調陽", "luật lữ điệu dương"],
  ["雲騰致雨", "vân đằng trí vũ"], ["露結為霜", "lộ kết vi sương"], ["金生麗水", "kim sinh lệ thuỷ"], ["玉出崑岡", "ngọc xuất côn cương"],
  ["劍號巨闕", "kiếm hiệu cự khuyết"], ["珠稱夜光", "châu xưng dạ quang"], ["果珍李柰", "quả trân lý nại"], ["菜重芥薑", "thái trọng giới khương"],
  ["海鹹河淡", "hải hàm hà đạm"], ["鱗潛羽翔", "lân tiềm vũ tường"], ["龍師火帝", "long sư hoả đế"], ["鳥官人皇", "điểu quan nhân hoàng"],
];
const ttvLine = ([han, viet], i) => {
  const r = viet.split(" ");
  return `<tr><td class="muted">câu ${i + 1}</td><td class="han">${[...han].map((c, k) => hv(c, r[k])).join(" ")}</td></tr>`;
};

export default [
  {
    id: "hoi_phieu", stage: 2, kind: "Hối phiếu", icon: "票", label: "Hối phiếu Nghĩa Thịnh Xương trả cho Ôn Lão Tam",
    html: () => `
    <div class="doc doc--plain">
      <div class="draft">
        <div class="draft-h">義 盛 昌 · NGHĨA THỊNH XƯƠNG · phân hiệu Hoè Âm</div>
        <p>Bằng phiếu này, hiệu trả cho người cầm phiếu là Ôn Tam, xóm Bến Đò:</p>
        <p class="draft-code">${hv("巨", "?")}${hv("闕", "?")}${hv("柰", "?")} nguyên bạc</p>
        <p>Lập năm Dân Quốc thứ 25, tháng <span class="draft-code">${hv("列", "?")}</span>, ngày <span class="draft-code">${hv("成", "?")}</span>.</p>
        <p class="small">Người lập phiếu: ${hand("Triệu", "sign")} (chưởng quỹ) · Người đặt tiền: ${ln("hp_dat", "Tiết thị, tự đến quầy, trả bằng bạc trắng của mình")}.</p>
        ${stamp("密押<br>MẬT ÁP", "right:20px;top:18px")}
      </div>
      <p class="note">${ln("hp_doi", "Mặt sau: dấu đã lĩnh tiền, kèm điểm chỉ của Ôn Tam, ngày mồng 9.")} Theo lệ phiếu hiệu, ngày tháng và số tiền trên hối phiếu không bao giờ viết bằng số: chỉ người giữ khoá mật áp của năm ấy mới đọc được.</p>
    </div>`,
  },

  {
    id: "mat_ap", stage: 2, kind: "Sổ", icon: "🔑", label: "Hai trang khoá mật áp trong ngăn kéo lão gia",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">NGHĨA THỊNH XƯƠNG · MẬT ÁP · chỉ chưởng quỹ được xem · đổi khoá mỗi năm vào mồng Một Tết</div>
      <p>Khoá năm Ất Hợi. ${ln("ma_at", "Mở Thiên Tự Văn, bắt đầu đếm từ chữ thứ nhất: mười hai chữ đầu là mười hai tháng, ba mươi chữ kế tiếp là ba mươi ngày, mười chữ kế tiếp là chữ số một, hai, ba, …, chín, rồi không.")}</p>
      <p>Khoá năm Bính Tý. ${ln("ma_binh", "Như trên, nhưng bắt đầu đếm từ chữ thứ chín.")}</p>
      <p class="small">Số tiền ghi bằng chữ số theo hàng: trăm, chục, đơn vị, viết liền. “Nguyên” là đồng bạc.</p>
      <p class="small muted">Hai trang kẹp chung, không trang nào ghi năm Dân Quốc.</p>
    </div>`,
  },

  {
    id: "thien_tu_van", stage: 2, kind: "Sách", icon: "📖", label: "Thiên Tự Văn, trang đầu (sách học vỡ lòng của cậu chủ)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">千 字 文 · THIÊN TỰ VĂN · Chu Hưng Tự soạn · ngàn chữ không chữ nào lặp lại</div>
      <table class="tbl ttv">${TTV.map(ttvLine).join("")}</table>
      <p class="small muted">Lề sách, nét chữ trẻ con: “Thừa Tự học thuộc ngày 3 tháng Giêng năm Quý Hợi”.</p>
    </div>`,
  },

  {
    id: "nien_bieu", stage: 2, kind: "Giấy", icon: "☰", label: "Tờ lịch treo tường của phiếu hiệu, năm nay",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">LỊCH NGHĨA THỊNH XƯƠNG · Dân Quốc năm thứ 25</h2>
      <p>${ln("nb_dq", "Trung Hoa Dân Quốc lập năm Nhâm Tý; năm ấy là Dân Quốc nguyên niên (năm thứ nhất).")}</p>
      <p>Mười can: Giáp Ất Bính Đinh Mậu Kỷ Canh Tân Nhâm Quý. Mười hai chi: Tý Sửu Dần Mão Thìn Tỵ Ngọ Mùi Thân Dậu Tuất Hợi. Can và chi cùng đi một bước mỗi năm.</p>
      <p class="small muted">Góc lịch bị xé mất chỗ in tên năm can chi.</p>
    </div>`,
  },

  {
    id: "loi_on", stage: 2, kind: "Lời kể", icon: "✍", label: "Ôn Lão Tam ở xóm Bến Đò",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>Ông ngồi trên bậc cửa, hơi rượu nồng. Bạn ghi lại.</p>
        <p>“Bán con thì sao? Cả xóm này ai chẳng bán. Nó vào nhà giàu, có cơm ăn, hơn ở với thằng bố say.”</p>
        <p>${ln("on_ngay", "“Ngày nào à? Tôi say, không nhớ. Bà phu nhân cho người mang tờ giấy đỏ đến, bảo tôi điểm chỉ, rồi đưa tôi tờ phiếu. Tôi không biết chữ.”")}</p>
        <p>${ln("on_thach", "“Thằng Thạch? Nó đi làm đêm Thất tịch, rồi không về. Chắc nó cũng bỏ tôi mà đi như mẹ nó. Mẹ nó chết năm Dân Quốc thứ mười chín, ba năm tang tôi để đủ rồi.”")}</p>
        <p>${ln("on_tay", "“Thằng ấy theo nghề tôi từ năm mười hai tuổi. Bàn tay nó cứng như đế giày.”")}</p>
        <p>${ln("on_chi", "“Sáng Thất tịch con bé Tú Nương còn chạy về nhà, ngồi buộc buộc cái gì vào tay anh nó. Trò con gái. Tôi chửi, nó không nghe.”")}</p>
        <p>“Mẹ chúng nó chết năm Dân Quốc 19. Tôi chẳng để tang ai được ba ngày.”</p>`)}
      ${pic("ben_do", "Bến đò Hoè Âm trên sông Phần. Bên kia sông là miếu Ngưu Lang.")}
    </div>`,
  },
];
