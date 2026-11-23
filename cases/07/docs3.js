// Case 07, day 4 (Peret II, 19): Userhat is found dead with a snake in his writing box. The tomb's progress
// book, the plan with its measuring rod, the wall text and the standard spell, the book of snakes, the lamp,
// the order of the night procession.
import { ln, pic, hand } from "../../js/kit.js";
import { gom } from "./docs0.js";
import { hn } from "./egypt.js";
import { PROGRESS, SNAKES, USERHAT_BITE } from "./data.js";

// The spell painted along corridor C, five lines of five signs. Line 3 on the wall is Hay's picture-writing.
const SPELL = [
  ["\u{131F3}", "\u{132F9}", "\u{13216}", "\u{132AA}", "\u{133CF}"],
  ["\u{13216}", "\u{1308B}", "\u{132F4}", "\u{131EF}", "\u{133CF}"],
  ["\u{132F9}", "\u{13296}", "\u{131FC}", "\u{1339F}", "\u{133CF}"],
  ["\u{131A3}", "\u{131F3}", "\u{132AA}", "\u{132F9}", "\u{133CF}"],
  ["\u{13191}", "\u{13216}", "\u{132B5}", "\u{131FC}", "\u{133CF}"],
];
const WALL = SPELL.map((l, i) => (i === 2 ? ["\u{13123}", "\u{131EF}", "\u{132A1}", "\u{1339F}", "\u{133CF}"] : l));
const lines = (rows, flake) => `<table class="tbl spell">${rows.map((r, i) => `<tr><td class="small">dòng ${i + 1}</td><td class="hg big">${r.map((g, j) => (flake && i === 4 && j === 2 ? '<span class="gone">▒</span>' : g)).join(" ")}</td></tr>`).join("")}</table>`;

export default [
  {
    id: "tin_userhat", stage: 3, kind: "Lời kể", icon: "✍", label: "Khonsu gõ cửa nhà bà, sáng sớm ngày 19",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Bà ơi, ông ký lục chết rồi. Tôi gánh nước tới, gọi mãi không thưa, đẩy cửa vào thì ông nằm sấp cạnh cái hộp bút.”</p>
      <p>“Có con rắn trong hộp. Tôi lấy gậy đập chết nó rồi, xác nó còn đó. Thầy thuốc đang tới.”</p>
      <p>“Đèn đổ, dầu loang ra chiếu. Tối qua tôi phát cho ông một bấc như mọi hôm.”</p>
      <p>“Người ta lại bảo Bà Rắn. Bà Rắn bắt hai người rồi.”</p>`)}</div>`,
  },

  {
    id: "kham_userhat", stage: 3, kind: "Biên bản", icon: "⚖", label: "Thầy thuốc khám ký lục Userhat, sáng ngày 19",
    html: () => `<div class="doc doc--plain">
      ${pic("hop_but", "Hộp bút của Userhat, chụp lại trước khi dọn.")}
      ${gom(hand(`<p>Mu bàn tay phải có hai lỗ răng, cách nhau ${USERHAT_BITE.fangMm} li (bằng bề ngang một hạt lúa mạch nằm ngang).</p>
        <p>${USERHAT_BITE.signs}.</p>
        <p>Con rắn bị đập dập đầu, thân to ngắn màu cát, dài chừng một gang tay rưỡi. Trên đầu còn nguyên hai cái sừng nhỏ.</p>
        <p>Không có vết thương nào khác. Cửa nhà khép, không cài.</p>`))}
    </div>`,
  },

  {
    id: "den_userhat", stage: 3, kind: "Đồ vật", icon: "🕯", label: "Chén đèn trong nhà Userhat",
    html: () => gom(hand(`<p>Chén đèn gốm đổ nghiêng trên chiếu, dầu loang thành một vệt lớn, bấc tắt vì rơi xuống vũng dầu.</p>
      <p>Bấc còn lại đo được: một phần tư bấc.</p>
      <p>Hàng xóm Ipuy nói ông ký lục thắp đèn lúc chạng vạng như mọi tối, ngồi tính sổ.</p>`)),
  },

  {
    id: "ruoc_kieu", stage: 3, kind: "Ghi chép", icon: "☉", label: "Đêm 18: rước tượng vua thần quanh làng",
    html: () => gom(hand(`<p>Đêm 18, làng rước tượng vua thần quanh tường làng bảy vòng để xin Bà Rắn nguôi giận.</p>
      <p>Giờ thứ nhất của đêm: cúng ở nhà nguyện. Từ đầu giờ thứ hai tới hết giờ thứ tư: rước quanh tường làng, cả làng đi theo.</p>
      <p>Khiêng kiệu: hai thầy tư tế. Cầm đèn đi ngay sau kiệu: Nebetiunet, Henut, Iyneferti, Wabet. Đánh trống: Nakhy, Setau.</p>
      <p>Đốc công Sennefer và Nakhtmin đi đầu. Người cổng mở cổng cho kiệu ra, đóng cổng khi kiệu vào.</p>
      <p>Ký lục Userhat không đi, nói còn sổ phải tính.</p>`)),
  },

  {
    id: "so_tien_do", stage: 3, kind: "Sổ sách", icon: "📓", label: "Sổ tiến độ đục lăng, ngày 11–15",
    html: () => gom(`<table class="tbl tbl--num"><tr><th>Chỗ đục</th>${[11, 12, 13, 14, 15].map((d) => `<th>tối ${d}</th>`).join("")}</tr>
        ${Object.entries(PROGRESS).map(([k, v]) => `<tr><td>${k}</td>${[11, 12, 13, 14, 15].map((d) => `<td>${v[d] ? hn(v[d]) : "—"}</td>`).join("")}</tr>`).join("")}
      </table>`, "Ký lục ghi mỗi tối: đã đục tới bao nhiêu cubit, đo từ miệng hành lang. Ngày 12 nghỉ lễ, ký lục ghi lại số của tối 11."),
  },

  {
    id: "ban_ve_lang", stage: 3, kind: "Bản vẽ", icon: "📐", label: "Bản vẽ lăng của Đức Vua, chép trên đá vôi",
    html: () => `<div class="doc doc--gom">
      <svg class="plan" viewBox="0 0 420 210" role="img" aria-label="Bản vẽ lăng">
        <rect x="10" y="80" width="60" height="50" class="room"/><text x="40" y="110" class="pl">sảnh</text>
        <rect x="70" y="92" width="300" height="26" class="room"/><text x="220" y="110" class="pl">hành lang C</text>
        <rect x="70" y="30" width="200" height="22" class="room"/><text x="170" y="46" class="pl">hành lang B</text>
        <rect x="40" y="52" width="30" height="28" class="room"/>
        <rect x="300" y="118" width="40" height="40" class="room"/><text x="320" y="142" class="pl">D</text>
        <line x1="70" y1="88" x2="70" y2="122" class="cut"/><text x="72" y="84" class="pl small">miệng</text>
      </svg>
      <div class="rod">${Array.from({ length: 28 }, (_, i) => `<span class="${i % 4 === 3 ? "palm" : ""}"></span>`).join("")}</div>
      <p class="small">Thước vẽ ở mép bản đá: một cubit, chia bảy palm, mỗi palm chia bốn finger.</p>
      <p class="note">Bản vẽ không theo tỉ lệ thật; chỉ để biết hành lang nào nằm đâu.</p>
    </div>`,
  },

  {
    id: "vach_lang", stage: 3, kind: "Ảnh, bản chép", icon: "🖼", label: "Vách hành lang C, nơi Hay nằm",
    html: () => `<div class="doc doc--plain">
      ${pic("hanh_lang", "Hành lang C, đèn của bà.")}
      ${gom(lines(WALL, true), "Thợ vẽ Anhotep chép lại năm dòng chữ trên vách, ngay trên chỗ Hay nằm. Dòng 5 bong vữa một chỗ.")}
    </div>`,
  },

  {
    id: "than_chu", stage: 3, kind: "Sách", icon: "📜", label: "Cuộn giấy cói thần chú của nhà nguyện",
    html: () => gom(lines(SPELL, false), "Bản gốc thợ vẽ dùng để chép lên vách lăng. Năm dòng đầu của câu chú giữ cho người chết đi qua cửa thứ nhất."),
  },

  {
    id: "sach_ran", stage: 3, kind: "Sách", icon: "📜", label: "Sách về rắn của thầy thuốc bùa (chép lại)",
    html: () => gom(`<table class="tbl">
        <tr><th>Loài</th><th>Hình dạng</th><th>Hai răng cách nhau</th><th>Bị cắn thì</th><th>Mùa</th></tr>
        ${SNAKES.map((s) => `<tr><td>${s.name}</td><td>${s.look}</td><td>${s.fang ? `${s.fang} li` : "không có hai răng"}</td><td>${s.bite}</td><td>${s.season}</td></tr>`).join("")}
      </table>`, "Mười bốn loài thầy thuốc bùa ghi lại để biết đọc câu chú nào."),
  },

  {
    id: "do_userhat", stage: 3, kind: "Đồ vật", icon: "🧺", label: "Đồ đạc trong nhà Userhat",
    html: () => gom(hand(`<p>${["Hộp bút gỗ, nắp trượt mở", "Bảng mực hai lỗ, đỏ và đen", "Bảy bút sậy", "Ba cuộn giấy cói trắng", "Một con dao đồng nhỏ để gọt bút", "Lọ thuốc mắt bằng đá", "Bùa mắt Horus bằng sứ xanh treo cửa", "Chiếu cói, gối gỗ", "Cái đấu của Lăng (bằng gỗ, đai đồng)", "Hai túi lúa, một túi đã mở", "Mảnh gốm tính dở, chữ số chưa khô", "Đôi dép sậy"].map((t) => `· ${t}`).join("<br>")}</p>`)),
  },

  {
    id: "loi_ipuy", stage: 3, kind: "Lời kể", icon: "✍", label: "Thợ Ipuy, hàng xóm Userhat",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>${ln("ip_1", "“Tối qua ông ký lục thắp đèn lúc chạng vạng, ngồi tính sổ như mọi tối.”")}</p>
      <p>${ln("ip_2", "“Tôi đi theo kiệu tới hết giờ thứ tư mới về. Nhà ông ấy tối om.”")}</p>
      <p>${ln("ip_3", "“Trước đó tôi có nghe tiếng gì đổ. Tưởng mèo.”")}</p>
      <p>${ln("ip_4", "“Con mèo nhà tôi bỏ đi đâu từ chiều, sáng nay mới về.”")}</p>
      <p>${ln("ip_5", "“Ông ấy bảo tôi: sổ khớp mà người đói. Tôi không hiểu.”")}</p>`)}</div>`,
  },
];
