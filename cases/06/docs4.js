// Case 06, night 5 (morning of the 21st): the five grades of mourning dress, who wore what at the funeral.
import { ln, pic, hand } from "../../js/kit.js";

export default [
  {
    id: "ngu_phuc", stage: 4, kind: "Sách", icon: "📕", label: "Ngũ phục đồ (trích Gia lễ, bản treo ở từ đường họ Triệu)",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">五服圖 · NGŨ PHỤC ĐỒ · năm bậc tang phục, từ nặng đến nhẹ</div>
      <table class="tbl">
        <tr><th>Bậc</th><th>Đồ tang</th><th>Ai mặc cho ai</th></tr>
        <tr><td>1. Trảm thôi</td><td>vải gai thô nhất, mép để sờn, không viền</td><td>con trai cho cha; vợ cho chồng; con dâu cho cha chồng</td></tr>
        <tr><td>2. Tư thôi</td><td>vải gai thô, có viền</td><td>con cho mẹ; cha mẹ cho con; anh chị em ruột cho nhau</td></tr>
        <tr><td>3. Đại công</td><td>vải gai mịn hơn</td><td>người đã hứa hôn cho vị hôn phu; anh chị em con chú con bác</td></tr>
        <tr><td>4. Tiểu công</td><td>vải gai mịn</td><td>anh em họ xa hơn; cháu gọi bằng ông bà ngoại</td></tr>
        <tr><td>5. Ti ma</td><td>vải gai mịn nhất</td><td>gia nhân, tá điền, người hầu trong nhà</td></tr>
        <tr><td>(ngoài năm bậc) Tố y</td><td>áo trắng trơn, không gai</td><td>người ngoài, bạn bè đến viếng</td></tr>
      </table>
      <p class="small">Lệ riêng của họ Triệu: bậc trên trong họ (ngoài cha mẹ) không để tang người dưới chết trẻ chưa vợ. Người đã hết tang thì không mặc lại.</p>
    </div>`,
  },

  {
    id: "so_tang", stage: 4, kind: "Sổ", icon: "☰", label: "Sổ lễ phát tang ngày 11 tháng Bảy (quản gia ghi)",
    html: () => `
    <div class="doc doc--ledger">
      <div class="ledger-head">PHÁT TANG · cậu chủ Triệu Thừa Tự · ngày 11 tháng Bảy · Lưu Phúc ghi để chia đồ tang</div>
      <table class="tbl tbl--hand">
        <tr><th>Người</th><th>Đồ tang đã phát / đã mặc</th></tr>
        <tr><td>Lão gia Triệu Hoài Đức</td><td>${ln("st_lao", "tư thôi, gai thô có viền, chống gậy tre")}</td></tr>
        <tr><td>Phu nhân Tiết thị</td><td>${ln("st_phu", "đã phát tư thôi; phu nhân không mặc, chỉ mặc áo trắng trơn, không đội mũ gai")}</td></tr>
        <tr><td>Tộc trưởng Triệu Hoài Tông</td><td>${ln("st_toc", "không mặc tang")}</td></tr>
        <tr><td>Cậu Triệu Thừa Chí (con chú ruột cậu chủ)</td><td>${ln("st_chi", "đại công")}</td></tr>
        <tr><td>Quản gia Lưu Phúc</td><td>${ln("st_phuc", "ti ma")}</td></tr>
        <tr><td>Thuý Nhi, Trương mụ, gia nhân</td><td>${ln("st_hau", "ti ma")}</td></tr>
        <tr><td>Ôn Tú Nương (nha hoàn mới)</td><td>${ln("st_tu", "ti ma")}</td></tr>
        <tr><td>Thầy đồ, khách viếng</td><td>${ln("st_khach", "tố y")}</td></tr>
      </table>
      <p class="small muted">Lưu Phúc ghi thêm: “Phu nhân nói đau quá, không mặc nổi đồ tang. Không khóc.”</p>
    </div>`,
  },

  {
    id: "thuy_2", stage: 4, kind: "Lời kể", icon: "✎", label: "Thuý Nhi kể (lần 2)",
    html: () => `
    <div class="doc doc--notebook">
      ${hand(`<p>Thuý Nhi kéo bạn ra sau giếng, nói rất nhanh.</p>
        <p>${ln("tn_nhin", "“Hôm phát tang, lúc khâm liệm, chị Tú Nương nhìn cổ tay cái xác rất lâu. Chị không khóc. Chị cắn môi đến chảy máu.”")}</p>
        <p>${ln("tn_dai", "“Tối hôm ấy con thấy chị buộc một dải vải gai vào thắt lưng, bên trong áo. Vải gai thô, có viền mép. Chị bảo con: đừng nói với ai.”")}</p>
        <p>${ln("tn_tima", "“Bộ ti ma phu nhân phát, chị vẫn mặc bên ngoài cho người ta thấy.”")}</p>
        <p>${ln("tn_vo", "“Chị chưa bao giờ hứa hôn với ai. Chị nói nhà chị nghèo, ai thèm hỏi.”")}</p>
        <p>${ln("tn_goi", "“Hôm sau phu nhân gọi chị vào phòng, đóng cửa rất lâu. Lúc ra, chị là cô dâu.”")}</p>`)}
    </div>`,
  },

  {
    id: "loi_toc", stage: 4, kind: "Lời kể", icon: "✍", label: "Tộc trưởng Triệu Hoài Tông",
    html: () => `
    <div class="doc doc--memo">
      ${hand(`<p>“Ta là bậc trên. Thằng bé chết trẻ, chưa vợ, theo lệ họ ta không để tang nó. Cậu đừng nhìn ta như thế.”</p>
        <p>“Đám âm hôn này là để nó có vợ, có người nối dõi. Sau lễ, họ sẽ lập một đứa cháu bên Hà Bắc làm con thừa tự cho nó. Gia sản họ Triệu không ra khỏi họ Triệu.”</p>
        <p>${ln("lt_mo", "“Mở quan tài à? Quan tài đã đóng đinh, ai mở là phạm người chết. Muốn ta cho mở, cậu đưa người sống ra đây mà nói.”")}</p>`)}
      ${pic("linh_duong", "Linh đường phủ Triệu: quan tài sơn son, linh vị, đèn trắng và đèn đỏ, hình nhân giấy chú rể đứng cạnh.")}
    </div>`,
  },
];
