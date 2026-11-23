// Case 07, day 1 (Peret II, 16): the scribe's call, the oracle, the body report, the festival calendar,
// two attendance registers, the lamp-wick book of the pass huts, statements.
import { ln, pic, hand } from "../../js/kit.js";
import { HUTS, WICKS } from "./data.js";

/** An ostracon (limestone flake or potsherd) with its text as the narrator reads it. */
export const gom = (inner, note = "") => `<div class="doc doc--gom">${note ? `<p class="note">${note}</p>` : ""}${inner}</div>`;
const WORDS = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám"];
const quarters = (q) => (q === 0 ? "không còn gì" : q === 4 ? "nguyên cả bấc" : `${WORDS[q]} phần tư bấc`);

export default [
  {
    id: "thu_moi", stage: 0, kind: "Thư", icon: "✉", label: "Thư của ký lục Userhat gửi bà Meryt",
    html: () => gom(hand(`<p>Ký lục của Lăng, Userhat, gửi bà Meryt ở xóm chân núi. Cầu Amun cho bà sống lâu, khoẻ mạnh.</p>
      <p>Sáng ngày 15 tháng 2 mùa Peret, bên Trái mở cửa lăng của Đức Vua thì thấy thợ vẽ Hay nằm chết trong hành lang, ngay dưới hình Bà Rắn trên đỉnh núi. Cửa lăng tối hôm trước niêm đủ dấu, sáng ra dấu còn nguyên.</p>
      <p>Cả làng nói Bà Rắn bắt Hay, vì tuần trước Hay thề trước toà làng. Lúa của Lăng đã trễ mười tám ngày. Người đói thì cái gì cũng tin.</p>
      <p>Tôi xin bà lên làng, nói cho mọi người biết vị nào đang giận, và giận vì sao. Người giữ cổng làng là Khonsu sẽ mở cổng cho bà. Bà cần nước, cần đèn, cứ bảo nó.</p>
      <p>Viết ngày 15 tháng 2 mùa Peret, năm 29.</p>`), "Thư viết mực đen trên một mảnh đá vôi, chữ hieratic. Bà Meryt đọc được chữ."),
  },

  {
    id: "xin_the", stage: 0, kind: "Lời kể", icon: "☉", label: "Sáng 16: rước tượng vua thần xin thẻ",
    html: () => `<div class="doc doc--plain">
      ${pic("xin_the", "Quảng trường làng, sáng ngày 16.")}
      ${hand(`<p>Sáng nay làng rước tượng vua thần Amenhotep ra quảng trường. Ai trong làng cũng viết tên mình lên một mảnh gốm, bỏ vào một đống trước kiệu.</p>
        <p>Người ta hỏi tượng: ai làm Bà Rắn nổi giận. Hai thầy tư tế khiêng kiệu đi ba bước thì kiệu nghiêng hẳn về phía trước, sát xuống đống gốm.</p>
        <p>Mảnh nằm trên cùng chỗ ấy ghi tên Nakhtmin. Cả quảng trường ồ lên. Nakhtmin chửi thề rồi bỏ về.</p>
        <p>Người ta cất đống gốm vào nhà nguyện, để nguyên như thế.</p>`)}
    </div>`,
  },

  {
    id: "loi_tuy", stage: 0, kind: "Lời kể", icon: "✍", label: "Bé Tuy, con gái Hay, nói chuyện với bà",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>${ln("tuy_1", "“Bố con vẽ Bà Rắn đẹp nhất làng. Bố không sợ Bà.”")}</p>
      <p>${ln("tuy_2", "“Mẹ con viết thư cho bố mỗi tối, đặt ở nhà nguyện.”")}</p>
      <p>${ln("tuy_3", "“Bố hay lấy cái chén nhỏ của nhà con ra đong lúa, đong đi đong lại.”")}</p>
      <p>${ln("tuy_4", "“Bố bảo cái đấu ở cổng ăn mất một miếng.”")}</p>
      <p>${ln("tuy_5", "“Chú Khonsu cho con quả chà là.”")}</p>
      <p>${ln("tuy_6", "“Đêm đó bố bảo con ngủ trước, bố lên đèo.”")}</p>`)}</div>`,
  },

  {
    id: "bien_ban_xac", stage: 0, kind: "Biên bản", icon: "⚖", label: "Biên bản của đội Medjay, sáng ngày 15",
    html: () => gom(hand(`<p>Đội Medjay canh Thung lũng, sáng ngày 15 tháng 2 mùa Peret.</p>
      <p>Bên Trái phá niêm cửa lăng lúc mặt trời lên. Dấu niêm còn nguyên. Đốc công Sennefer đi trước.</p>
      <p>Thợ vẽ Hay nằm sấp trong hành lang C. Đo bằng dây thước của Lăng, từ miệng hành lang C tới chỗ đầu Hay: chín cubit, ba palm, hai finger.</p>
      <p>Sau đầu có vết vỡ. Bên cạnh có một chén đèn đã tắt, một cây bút sậy, bát màu đỏ đổ. Trên vách ngay trên xác là hình Bà Rắn Hay đang vẽ dở.</p>
      <p>Xác lạnh cứng. Máu dưới đầu đã khô.</p>`)),
  },

  {
    id: "lich_le", stage: 0, kind: "Lịch", icon: "📅", label: "Lịch lễ dán ở nhà nguyện, năm 29",
    html: () => gom(`<table class="tbl">
        <tr><th>Mùa</th><th>Tháng</th><th>Ngày lễ, làng nghỉ việc ở Lăng</th></tr>
        <tr><td rowspan="4">Akhet</td><td>I</td><td>1 (Năm mới), 18–20 (lễ Wag)</td></tr>
        <tr><td>II</td><td>19 (lễ Opet bắt đầu)</td></tr>
        <tr><td>III</td><td>—</td></tr>
        <tr><td>IV</td><td>22–26 (lễ Hathor)</td></tr>
        <tr><td rowspan="4">Peret</td><td>I</td><td>1 (lễ Nehebkau)</td></tr>
        <tr><td>II</td><td>12 (dâng nước cho vua thần Amenhotep), 29</td></tr>
        <tr><td>III</td><td>4–5</td></tr>
        <tr><td>IV</td><td>—</td></tr>
        <tr><td rowspan="4">Shemu</td><td>I</td><td>11 (lễ Thung lũng)</td></tr>
        <tr><td>II</td><td>1</td></tr>
        <tr><td>III</td><td>—</td></tr>
        <tr><td>IV</td><td>30</td></tr>
        <tr><td colspan="2">Năm ngày cuối năm</td><td>cả năm ngày</td></tr>
      </table>`, "Mảnh đá vôi lớn dán vữa trên tường nhà nguyện. Mỗi tháng ba mươi ngày."),
  },

  ...["a", "b"].map((k) => ({
    id: `diem_danh_${k}`, stage: 0, kind: "Sổ điểm danh", icon: "📓",
    label: k === "a" ? "Sổ điểm danh thợ, ngày 11–15, mực đen" : "Sổ điểm danh thợ, ngày 11–15, mực nhạt",
    html: () => gom(`<table class="tbl">
        <tr><th>Ngày</th><th>Người vắng ở Lăng và lý do</th></tr>
        ${(k === "a" ? REG_A : REG_B).map(([d, t]) => `<tr><td>${d}</td><td>${t}</td></tr>`).join("")}
      </table>`, k === "a" ? "Userhat ghi mỗi tối, mực đen, chữ đều." : "Bản chép tay, mực nhạt, ai chép không ghi tên. Treo ở nhà nguyện để làng xem."),
  })),

  {
    id: "so_bac", stage: 0, kind: "Sổ sách", icon: "🕯", label: "Sổ cấp bấc đèn cho lều trên đèo, đêm 12–14",
    html: () => gom(`<p class="small">Mỗi chiều người giữ lều phát bấc; sáng hôm sau thợ trả lại phần bấc chưa cháy.</p>
      ${[12, 13, 14].map((n) => `<h4>Đêm ${n}</h4><table class="tbl">
        <tr><th>Lều</th><th>Phát</th><th>Sáng ra trả lại</th></tr>
        ${HUTS.map((h) => { const [i, r] = WICKS[n][h]; return `<tr><td>${h}</td><td>${i ? `${WORDS[i]} bấc` : "không phát"}</td><td>${i ? quarters(r) : "—"}</td></tr>`; }).join("")}
      </table>`).join("")}`, "Ông Ptahmose, người giữ lều trên đèo, đọc cho bà ghi."),
  },

  {
    id: "loi_khonsu", stage: 0, kind: "Lời kể", icon: "✍", label: "Khonsu, người giữ cổng làng, nói chuyện khi mở cổng",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Bà vào đi. Cổng này tôi giữ mười hai năm rồi. Sáng mở, tối đóng, lúa về thì đong, thư thì đưa.”</p>
      <p>“Lúa trễ mười tám ngày rồi bà ạ. Kho đền bên sông cứ bảo tuần sau. Tuần nào cũng tuần sau.”</p>
      <p>“Trên đèo ông Ptahmose già rồi, đêm nào cũng kêu thợ xin thêm bấc. Một bấc cháy đúng bốn giờ, thắp từ chạng vạng, ai thức khuya thì xin hai. Thắp làm gì cho phí.”</p>
      <p>“Anh Hay tốt bụng lắm. Cái chén của anh ấy tôi còn giữ một hôm, rồi trả cho bé Tuy.”</p>
      <p>“Bà cần nước cứ gọi. Tôi gánh cho cả làng mà.”</p>`)}</div>`,
  },

  {
    id: "khai_nakhtmin", stage: 0, kind: "Lời khai", icon: "✍", label: "Đốc công Nakhtmin nói với bà",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>${ln("nm_1", "“Tôi làm đốc công bên Phải hai mươi năm. Tôi không cần bà nói cho tôi biết thần nào giận.”")}</p>
      <p>${ln("nm_2", "“Con lừa ấy là của tôi. Toà làng xử rồi, Hay thề rồi. Xong.”")}</p>
      <p>${ln("nm_bia", "“Đêm 13 tôi ở nhà, ủ bia cho lễ. Vợ tôi biết.”")}</p>
      <p>${ln("nm_3", "“Đêm 14 tôi ngủ trên đèo, lều đầu dãy.”")}</p>
      <p>${ln("nm_4", "“Hay vẽ đẹp. Nhưng hay cãi, cãi cả đốc công bên kia.”")}</p>
      <p>${ln("nm_5", "“Sáng 15 tôi nghe bên Trái la lên mới chạy xuống.”")}</p>
      <p>${ln("nm_6", "“Mảnh gốm sáng nay là có người xếp. Tượng thần không nghiêng về tôi.”")}</p>`)}</div>`,
  },

  {
    id: "khai_henut", stage: 0, kind: "Lời khai", icon: "✍", label: "Bà Henut, vợ Nakhtmin, nói ở bờ giếng",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Ông ấy dặn ai hỏi thì bảo đêm 13 ông ở nhà.”</p>
      <p>“Đêm 13 tôi ủ bia một mình tới khuya. Ông ấy không về. Gà gáy mới thấy về, áo có mùi dầu thơm.”</p>
      <p>“Đêm 14 thì ông ấy lên đèo từ chiều, như mọi tuần.”</p>
      <p>“Tôi cũng viết thư cho mẹ chồng tôi đã khuất, xin bà bắt ông ấy về nhà. Bà không trả lời.”</p>`)}</div>`,
  },

  {
    id: "kien_lua", stage: 0, kind: "Biên bản", icon: "⚖", label: "Toà làng xử vụ con lừa, ngày 11",
    html: () => gom(hand(`<p>Toà làng ngày 11 tháng 2 mùa Peret. Ngồi xử: ký lục Userhat, đốc công Sennefer, hai người già trong làng.</p>
      <p>Đốc công Nakhtmin kiện thợ vẽ Hay mượn con lừa xám của ông chở đá ba ngày không trả tiền.</p>
      <p>Hay thề trước tượng vua thần: “Tôi không mượn lừa của ông ấy. Nếu tôi nói dối, Bà Rắn trên đỉnh núi bắt mắt tôi.”</p>
      <p>Toà cho Hay thắng. Nakhtmin chịu.</p>`)),
  },

  {
    id: "noi_dong", stage: 0, kind: "Biên bản", icon: "⚖", label: "Toà làng xử vụ cái nồi đồng, ngày 8",
    html: () => gom(hand(`<p>Bà Iyneferti kiện bà Wabet giữ cái nồi đồng nặng ba deben của bà từ mùa lũ.</p>
      <p>Bà Wabet nói nồi đã trả, có thằng Mose làm chứng. Mose nói không nhớ.</p>
      <p>Toà bắt bà Wabet trả nồi hoặc trả ba deben đồng. Bà Wabet trả nồi, nồi có vết móp.</p>`)),
  },
];

// Day 12 is the water festival of the deified king (no work). The clerk's register has it right; the copy is a day late.
const REG_A = [
  [11, "Pentaweret: bọ cạp đốt · Mose: giúp mẹ ướp xác bác"],
  [12, "Cả làng nghỉ lễ"],
  [13, "Nakhtmin: ủ bia · Djedi: ốm · Pentaweret: bọ cạp đốt"],
  [14, "Sennefer: con gái ốm, ở nhà · Djedi: ốm · Baki: làm việc cho đốc công"],
  [15, "Bên Trái nghỉ, khiêng xác Hay · Djedi: ốm"],
];
const REG_B = [
  [11, "Pentaweret: bọ cạp đốt"],
  [12, "Mose: giúp mẹ ướp xác bác"],
  [13, "Cả làng nghỉ lễ"],
  [14, "Nakhtmin: ủ bia · Djedi: ốm · Pentaweret: bọ cạp đốt"],
  [15, "Sennefer: con gái ốm, ở nhà · Djedi: ốm · Baki: làm việc cho đốc công"],
];
