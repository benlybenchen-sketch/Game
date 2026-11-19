// Case 03, night 1 (Sunday 7/11/2004): the contract, Tùng's notebook, the first session of 1971, Dung's diary.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { MORSE } from "./cipher.js";
import { callName, fullName } from "./name.js";
import { diaryNow, diaryHtml, diaryCopyHtml } from "./diary.js";
import { boardArt } from "./art.js";

export const contractHtml = (input = true) => `
  <div class="contract">
    <h3>GIAO KÈO</h3>
    <p>Tôi, <b>Lâm Hạnh Dung</b>, sinh năm 1952, chủ biệt thự Bạch Lan số 9 đường Hàng Me, thuê
      ${input ? `cháu <input data-sign maxlength="40" placeholder="tên của bạn" autocomplete="off">` : `cháu <b class="hand inline">${fullName() || "………………"}</b>`}
      đọc và giải các mật thư trong nhà, bảy đêm, từ ngày 7 đến ngày 13 tháng 11 năm 2004.</p>
    <ol>
      <li>Đêm nào cũng ngồi cầu cơ với tôi lúc 23 giờ, ở phòng khách tầng hai.</li>
      <li>Ăn ở tại nhà. Trà nước tôi lo.</li>
      <li>Giấy tờ năm 1971 tôi đưa tới đâu, cháu đọc tới đó. Không mang ra khỏi nhà.</li>
      <li>Không ra hồ sen sau vườn.</li>
      <li>Thù lao hai lượng vàng, trả sáng ngày 14 tháng 11.</li>
    </ol>
    ${input ? `<p class="small muted">Gõ tên bạn (hoặc để trống) rồi bấm Ký. Tên chỉ được lưu trên trình duyệt này, không gửi đi đâu.</p>` : ""}
  </div>`;

export default [
  {
    id: "giao_keo", stage: 0, kind: "Giao kèo", icon: "✍", label: "Giao kèo với bà Lâm Hạnh Dung",
    html: () => `
    <div class="doc doc--memo">
      ${contractHtml(false)}
      <p class="right" style="margin-top:14px">Sài Gòn, ngày 7 tháng 11 năm 2004<br>${hand("Hạnh Dung", "sign fwd")}<b>Lâm Hạnh Dung</b></p>
      <p class="right">${hand(fullName() || "(không ký tên)", "sign mine")}<b>Người nhận việc</b></p>
      <div class="hand mine side-note">Ghi chú của tôi: bà Dung ký bằng tay phải, nét chữ ngả về phía trước. Bà đeo găng len dù trời không lạnh. Bà kẹp kèm bản sao chứng minh nhân dân “cho cháu yên tâm”.</div>
    </div>`,
  },

  {
    id: "thu_moi", stage: 0, kind: "Thư", icon: "✉", label: "Thư bà Dung để trên gối",
    html: () => `
    <div class="doc doc--memo">
      <p>${callName().charAt(0).toUpperCase() + callName().slice(1)},</p>
      <p>Cháu đọc thư này khi bà đã đi ngủ. Bà già rồi, nói chuyện ba mươi ba năm trước bằng miệng thì không nổi, nên bà viết.</p>
      <p>Năm 1971, bà mười chín tuổi, học Văn khoa. Bà với sáu người bạn lập ra <b>Thi văn đoàn Bạch Lan</b>, lấy theo tên cái nhà này,
        nhà của bà trẻ bà là bà <b>Lâm Ngọc Diệp</b>. Bà trẻ mất đêm 13/11/1958, ngay trong phòng khách tầng hai, nơi bây giờ đặt bàn cơ.</p>
      <p>Mùa thu năm đó, cả nhóm cầu cơ ở đây bảy tối thứ Bảy liền. Mỗi tối con cơ báo một người chết. Rồi người đó chết thật.</p>
      <table class="tbl">
        <tr><th>Người</th><th></th><th>Chết</th></tr>
        <tr><td><b>Phạm Văn Tùng</b></td><td>trưởng nhóm, con ông trưởng ca điện báo Bưu điện Sài Gòn</td><td>2/10/1971, rơi từ ban công</td></tr>
        <tr><td><b>Võ Thị Bạch Yến</b></td><td>làm thơ</td><td>9/10/1971, chết đuối ở hồ sen</td></tr>
        <tr><td><b>Lưu Kiến Quốc</b></td><td>người Hoa Chợ Lớn, nhà có hiệu thuốc Bắc</td><td>16/10/1971, ngộ độc</td></tr>
        <tr><td><b>Đoàn Minh Khiêm</b></td><td>thuộc Kiều làu làu</td><td>23/10/1971, thắt cổ ở cầu thang</td></tr>
        <tr><td><b>Trịnh Bảo Nghi</b></td><td>út, có đạo</td><td>30/10/1971, ngã cầu thang gác</td></tr>
        <tr><td><b>Hà Ngọc Lan</b></td><td>bạn thân nhất của bà, gốc Huế, ở nhờ nhà bà</td><td>6/11/1971, chết cháy trên gác thượng</td></tr>
        <tr><td><b>Lâm Hạnh Dung</b></td><td>là bà đây</td><td>còn sống</td></tr>
      </table>
      <p>Cảnh sát nói tai nạn, tự tử. Người ta nói bà Diệp bắt. Bà không biết tin ai.</p>
      <p>Từ năm 1971, cứ đêm 13 tháng 11, con cơ trong nhà này lại <b>tự chạy</b>, ra một chuỗi quẻ mà bà không đọc được.
        Bà trẻ để lại một cuốn sổ bằng tiếng Tây. Bà không biết tiếng Tây. Vì vậy bà đăng báo tìm người.</p>
      <p>Cháu học dần các thứ mật mã của nhóm bà năm xưa: mỗi người trong nhóm dạy cả nhóm một kiểu. Bà đưa giấy tờ tới đâu cháu đọc tới đó.
        Tới đêm thứ bảy, cháu sẽ đọc được quẻ.</p>
      <p>Trà sen bà pha sẵn trong bình. Cháu cứ uống.</p>
      <p class="right">${hand("Dung", "sign fwd")}</p>
    </div>`,
  },

  {
    id: "cmnd", stage: 0, kind: "Giấy tờ", icon: "🪪", label: "Bản sao chứng minh nhân dân của bà Dung",
    html: () => `
    <div class="doc doc--plain">
      <div class="idcard id-vn">
        <div class="id-head">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br><b>GIẤY CHỨNG MINH NHÂN DÂN</b></div>
        <div class="id-photo">ảnh 3×4<br>(bản sao mờ)</div>
        <div class="id-body">
          <p>Số: 02013xxxx</p><p>Họ tên: <b>LÂM HẠNH DUNG</b></p><p>Sinh ngày: 14-2-1952</p>
          <p>Nguyên quán: Sài Gòn</p><p>Nơi ĐKHK thường trú: 9 Hàng Me, Q.1</p>
        </div>
        <div class="id-back">
          <p>Dân tộc: Kinh · Tôn giáo: không</p>
          <p>${ln("cm_dau", "Dấu vết riêng và dị hình: Nốt ruồi c. 1 cm trên đuôi lông mày phải.")}</p>
          <p>Ngày cấp: 3-5-1979 · Công an TP. Hồ Chí Minh</p>
          <div class="fp-row"><span>Ngón trỏ trái</span><span>Ngón trỏ phải</span></div>
        </div>
      </div>
      <p class="note">Bản sao có chứng thực năm 2003. Bà Dung kẹp kèm giao kèo.</p>
    </div>`,
  },

  {
    id: "so_tung", stage: 0, kind: "Sổ tay", icon: "📓", label: "Sổ của Tùng: bảng mã điện báo, Morse, cách ngồi cơ",
    html: () => `
    <div class="doc doc--notebook">
      <p class="note">Cuốn sổ bìa vải xanh, trang đầu đề: <i>“Phạm Văn Tùng · Văn khoa · Sổ cơ của Thi văn đoàn Bạch Lan”</i>. Các trang sau do nhiều người ghi tiếp.</p>
      <h4>1. Bảng mã điện báo (ba tôi dạy, Bưu điện dùng để đánh điện tín tiếng Việt)</h4>
      ${hand(`Máy điện báo và bàn cơ của mình đều chỉ có 26 chữ cái Tây. Chữ có dấu thì đánh thêm chữ:`)}
      <table class="tbl tbl--code">
        <tr><th>Chữ</th><td>ă</td><td>â</td><td>đ</td><td>ê</td><td>ô</td><td>ơ</td><td>ư</td></tr>
        <tr><th>Đánh</th><td>AW</td><td>AA</td><td>DD</td><td>EE</td><td>OO</td><td>OW</td><td>UW</td></tr>
      </table>
      <table class="tbl tbl--code">
        <tr><th>Dấu</th><td>sắc</td><td>huyền</td><td>hỏi</td><td>ngã</td><td>nặng</td></tr>
        <tr><th>Đánh</th><td>S</td><td>F</td><td>R</td><td>X</td><td>J</td></tr>
      </table>
      ${hand(`Dấu thanh luôn đánh ở <u>cuối chữ</u>. Thí dụ: “Sài Gòn” → <b>SAIF GOFN</b>. “Bạch Lan” → <b>BACHJ LAN</b>. “Thư” → <b>THUW</b>.`)}
      <h4>2. Morse (cho tụi bây chơi gõ cửa)</h4>
      <table class="tbl tbl--morse">${Object.entries(MORSE).slice(0, 26).reduce((rows, [k, v], i) => { if (i % 6 === 0) rows.push([]); rows[rows.length - 1].push(`<td><b>${k}</b> ${v.replace(/\./g, "·").replace(/-/g, "—")}</td>`); return rows; }, []).map((r) => `<tr>${r.join("")}</tr>`).join("")}</table>
      ${hand(`Chấm là gõ ngắn, gạch là gõ dài. Giữa hai chữ cái nghỉ một nhịp, giữa hai chữ nghỉ lâu hơn. Chữ có dấu thì cũng gõ theo kiểu điện báo ở trên.`)}
      ${media("morsepad", "pad")}
      <h4>3. Cách ngồi cơ</h4>
      ${hand(`Bảy người ngồi quanh bàn tròn. <b>Tay chủ</b> là người ngồi đầu bàn, quay lưng ra ban công, đặt ngón tay lên chén trước tiên và khấn. Con cơ đi theo tay chủ.
        Người ghi sổ ngồi cuối bàn, chép từng chữ con cơ dừng. Máy ghi âm Akai của tôi để giữa bàn, micro dựng ngay trên mặt bàn.`)}
    </div>`,
  },

  {
    id: "bien_ban_1", stage: 0, kind: "Sổ cơ", icon: "📓", label: "Sổ cơ · buổi 1 · 2/10/1971 (Tùng ghi)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<b>Buổi cơ thứ nhất.</b> Thứ Bảy 2/10/1971, 21 giờ. Phòng khách tầng hai, nhà bà Diệp.<br>
        Ngồi (theo chiều kim đồng hồ, từ đầu bàn): <b>Lan (tay chủ)</b>, Dung, Yến, Khiêm, Nghi, Quốc, Tùng (ghi sổ).<br>
        Yến khấn mời bà Diệp. Chén chạy sau chừng năm phút.`)}
      ${hand(`Chữ con cơ dừng: <span class="code-line">T U N G F &nbsp; R O W I</span>`)}
      ${hand(`Cả bọn cười. Khiêm nói “rơi vô lưới tình”. Dung hỏi Lan có đẩy không. Lan nói không.<br>
        Băng cối có ghi lại buổi này (cuộn số 1).<br>
        21 giờ 50: tôi ra ban công hút thuốc.`)}
      <p class="note">Hàng chữ cuối cùng viết bằng một nét khác, nghiêng về phía trước, mực xanh đậm hơn:</p>
      ${hand(`<i>23 giờ 10. Lan can ban công gãy. Anh Tùng rơi xuống sân gạch. Chết trước khi xe cứu thương tới.</i>`, "fwd")}
    </div>`,
  },

  {
    id: "bang_1", stage: 0, kind: "Băng ghi âm", icon: "▶", label: "Băng cối cuộn số 1 · buổi cơ 2/10/1971",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Cuộn băng từ của máy Akai, nhãn viết tay của Tùng. Bà Dung nói: “Băng của Tùng, mấy chục năm rồi chưa ai mở lại.”</p>
      ${media("tape", "dem1")}
    </div>`,
  },

  {
    id: "nhat_ky", stage: 0, kind: "Nhật ký", icon: "📔", label: "Nhật ký của Dung, trang 3–4 (bản gốc)",
    html: () => `
    <div class="doc doc--diary">
      <p class="note">Cuốn nhật ký bìa da đỏ, bà Dung đưa ra mỗi tối và cất vào tủ trước khi đi ngủ. “Nhật ký của bà hồi con gái. Cháu đọc thì đọc, đừng cười.”</p>
      <div class="diary">${diaryHtml(diaryNow())}</div>
      <p class="note">Mép trang có vài chữ tiếng Pháp: <i>“Ma tante Diệp disait : celle qui lit le miroir garde la clé.”</i></p>
    </div>`,
  },

  {
    id: "ban_chep", stage: 0, kind: "Sổ tay của bạn", icon: "✎", label: "Bản chép của bạn (nhật ký trang 3–4)",
    html: () => `
    <div class="doc doc--notebook">
      <p class="note">Bà Dung nói bản gốc phải cất lại vào tủ trước nửa đêm. Đêm đầu tiên, 22 giờ 40, bạn chép lại hai trang nhật ký vào sổ tay của mình, từng chữ một.</p>
      <div class="hand mine">${diaryCopyHtml()}</div>
      ${media("compare", "nk")}
    </div>`,
  },

  {
    id: "anh_nhom", stage: 0, kind: "Ảnh", icon: "🖼", label: "Ảnh Thi văn đoàn Bạch Lan, 1971",
    html: () => `
    <div class="doc doc--plain">
      ${pic("anh_nhom", "Trước cổng biệt thự Bạch Lan, tháng 9/1971. Mặt sau ghi: “Đủ bảy đứa. Dung ký sổ khách, Lan đứng sát bên.”")}
      <p class="note">Ảnh màu đã phai, mép trái bị cháy sém. Một cô gái tóc dài, áo dài xanh lục nhạt, cúi ký vào cuốn sổ đặt trên trụ cổng, cây bút cầm ở <b>tay trái</b>. Cô gái áo bà ba hoa tím đứng sát sau lưng, đặt tay lên vai cô ta, giống cô ta tới mức bạn phải nhìn hai lần. Cô ấy không nhìn ống kính. Cô ấy nhìn người đang ký.</p>
    </div>`,
  },

  {
    id: "ban_co_1", stage: 0, kind: "Bàn cơ", icon: "☉", label: "Bàn cơ · đêm thứ nhất · 7/11/2004",
    html: () => `
    <div class="doc doc--plain">
      ${pic("ban_co", "Bàn cơ Tùng vẽ năm 1971 trên tấm gỗ: 26 chữ cái, số 0–9, CÓ, KHÔNG, TẠM BIỆT. Con cơ là một cái chén sứ úp.", boardArt())}
      ${media("board", "n1")}
    </div>`,
  },
];
