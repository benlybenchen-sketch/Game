// Case 08, night of day 1 (28 tháng Tư): the dead alchemy elder. The washer's notes, the routine statements Minh Kính took
// in the morning (cross-examination targets), the alchemy room, the forensic manual, the charcoal book, the gate book.
import { ln, pic, hand } from "../../js/kit.js";
import { giay, soTay, bang } from "./kit8.js";

export default [
  {
    id: "bao_dan_phong", stage: 1, kind: "Biên bản", icon: "📄", label: "Biên bản Đan phòng, sáng 28",
    html: () => giay(`<p class="ledger-head">BIÊN BẢN · ĐAN PHÒNG · SÁNG 28 THÁNG TƯ</p>
      <p>Giờ Mão, đệ tử Đan phòng mang nước lên thì thấy trưởng lão Đan Dương Tử ngồi kiết già trên bồ đoàn trước lò, đầu gục, gọi không thưa. Lò đã nguội. Cửa phòng cài trong; đệ tử phá then mới vào được.</p>
      <p>Trong phòng có mùi khói than. Đệ tử mở hết cửa sổ rồi mới chạy đi báo.</p>
      <p>Trưởng lão Giới luật xem rồi nói: tẩu hoả nhập ma khi giữ lửa đêm cuối. Cho khâm liệm, đặt ở linh đường điện phụ Tam Thanh, theo lệ quán ba ngày sau thì hoá.</p>
      <p>Tri khách Minh Kính ghi.</p>`),
  },
  {
    id: "nhap_liem", stage: 1, kind: "Phiếu", icon: "📄", label: "Phiếu khâm liệm của bà Lưu",
    html: () => giay(`<p class="note">Bà Lưu người làng Hạ Khê, lo khâm liệm cho quán đã hai mươi năm. Bà không biết chữ, đọc cho đệ tử chép.</p>
      ${hand(`<p>${ln("nl_1", "Xác ông ngồi, hai chân xếp bằng, cứng rồi, phải xoa rượu mới duỗi ra được.")}</p>
      <p>${ln("nl_2", "Mặt đỏ hồng, không tím, không bầm.")} ${ln("nl_mong", "Móng tay hồng như cánh đào, môi cũng thế.")}</p>
      <p>${ln("nl_3", "Mép không có bọt, mũi không chảy máu.")} ${ln("nl_4", "Mắt nhắm, không lồi.")}</p>
      <p>${ln("nl_5", "Lưng với mông tím đỏ, chỗ đè xuống bồ đoàn.")} ${ln("nl_6", "Tóc búi còn nguyên trâm, không dựng.")}</p>
      <p>${ln("nl_7", "Tay phải còn nắm que cời than, gỡ mãi mới ra.")} ${ln("nl_8", "Áo đạo xám tro, vai trái ẩm như dính sương.")}</p>
      <p>${ln("nl_9", "Trong miệng có mùi khét.")} ${ln("nl_10", "Người ông còn thơm mùi thuốc, mùi chu sa.")}</p>
      <p>${ln("nl_11", "Tôi lau mặt, thay áo, đặt ông nằm vào quan.")} ${ln("nl_12", "Ba ngày nữa thì hoá, quan đóng đinh lỏng để còn mở.")}</p>`)}`),
  },
  {
    id: "khai_ba_luu", stage: 1, kind: "Lời khai", icon: "🗣", label: "Lời khai: bà Lưu, người khâm liệm",
    confront: { id: "ba_luu", who: "bà Lưu", after: "Bà Lưu đọc chậm từng dòng, môi mấp máy. Rồi bà bảo: thế thì tôi nói nốt cái tôi thấy." },
    html: () => giay(hand(`<p>Mặt ông đỏ là lửa đan xông ngược lên đầu. Người tu đan chết thế cả. Tôi liệm ba ông rồi, ông nào cũng đỏ.</p>
      <p>Ông giữ lửa bốn mươi chín ngày, không ngủ. Lửa ấy nó vào người.</p>`)),
  },
  {
    id: "khai_ba_luu_2", stage: 1, via: "ba_luu", kind: "Lời khai", icon: "🗣", label: "Bà Lưu nói thêm",
    html: () => giay(hand(`<p>${ln("bl_1", "Ba ông tôi liệm trước, mặt đỏ bầm, mắt lồi, máu mũi chảy ra cả râu.")} ${ln("bl_2", "Ông này đỏ mà tươi, như người còn sống, như người say.")}</p>
      <p>${ln("bl2_mui", "Lúc lau mặt, trong lỗ mũi ông có muội đen, lau ra cả khăn.")} ${ln("bl_3", "Tôi tưởng ông cúi sát lò.")}</p>
      <p>${ln("bl_4", "Con mèo của Đan phòng nằm chết dưới gầm bàn, không ai hay.")} ${ln("bl_5", "Tôi mang ra chôn sau bếp.")}</p>
      <p>${ln("bl_6", "Mấy ông đệ tử bảo tôi đừng nói nhiều, trưởng lão Giới luật đã bảo là tẩu hoả.")}</p>`)),
  },
  {
    id: "khai_lang", stage: 1, kind: "Lời khai", icon: "🗣", label: "Lời khai: trưởng lão Giới luật Lăng Tiêu Tử",
    confront: { id: "lang", who: "trưởng lão Giới luật", after: "Lăng Tiêu Tử nhìn tờ giấy, mặt sạm lại. Ông đuổi hết người ra ngoài, chỉ giữ bạn lại." },
    html: () => giay(hand(`<p>Đêm qua ta ngủ ở Giới luật đường từ canh một. Mưa to, không ra ngoài. Nghe tiếng A Mặc gào mới lên đỉnh.</p>
      <p>Đan Dương sư đệ luyện đan nóng vội. Ta đã khuyên.</p>`), "Minh Kính hỏi theo lệ, sáng 28."),
  },
  {
    id: "khai_tinh_hu", stage: 1, kind: "Lời khai", icon: "🗣", label: "Lời khai: nữ quan Tĩnh Hư",
    confront: { id: "tinh_hu", who: "nữ quan Tĩnh Hư", after: "Tĩnh Hư đặt tờ giấy xuống, chắp tay. Bà nói rất khẽ: tôi kể, nhưng xin ngài nghe cho hết." },
    html: () => giay(hand(`<p>Đêm qua tôi ở Tổ sư điện, châm dầu đủ năm canh, không ra khỏi điện. Đó là lệ.</p>
      <p>Đèn của thầy cháy suốt. Tôi biết thầy đã đi rồi.</p>`), "Minh Kính hỏi theo lệ, sáng 28."),
  },
  {
    id: "khai_tao", stage: 1, kind: "Lời khai", icon: "🗣", label: "Lời khai: hoả công Tào Thuận",
    confront: { id: "tao27", who: "hoả công Tào Thuận", after: "" },
    html: () => giay(hand(`<p>Canh hai, trưởng lão Đan phòng sai người xuống gọi, than tùng ướt hết, bắt mang than dẻ lên. Tôi gánh một gánh lên, đổ vào thùng cạnh lò, rồi về bếp ngủ tới sáng.</p>
      <p>Lúc tôi lên, trưởng lão còn tỉnh, còn mắng tôi chậm.</p>`), "Minh Kính hỏi theo lệ, sáng 28."),
  },
  {
    id: "khai_minh_kinh", stage: 1, kind: "Lời khai", icon: "🗣", label: "Lời khai: tri khách Minh Kính",
    confront: { id: "minh_kinh", who: "tri khách Minh Kính", after: "" },
    html: () => giay(hand(`<p>Tôi tự ghi theo lời Giám nghĩa dặn. Đêm qua tôi ở khách xá, gian phía đông, sát gian Giám nghĩa. Mưa to, tôi không đi đâu. Canh tư tôi dậy xem mái dột ở gian kho, rồi ngủ lại.</p>`)),
  },

  // ---------------------------------------------------------------- Đan phòng
  {
    id: "hien_truong_dp", stage: 1, place: "dan_phong", kind: "Hiện trường", icon: "⚗", label: "Phòng luyện đan",
    html: () => `<div class="doc doc--plain">
      ${pic("dan_phong", "Đan phòng, sáng 28.")}
      ${soTay(`<p>Lò đồng tám cạnh, ba chân, cao ngang ngực. Ống khói sắt đen đi thẳng lên, xuyên mái. Trên ống, ngang tầm mắt, có một tấm phong môn sắt xoay được, vành có tám nấc, mỗi nấc khắc một quẻ.</p>
      <p>Phong môn đang ở nấc Khôn.</p>
      <p>Trên vách cạnh lò, chữ của trưởng lão: "Giữ lửa đêm, phong môn đặt Khôn. Đặt Càn thì lửa bốc, khép hẳn thì khói quẩn."</p>
      <p>Cửa sổ giấy dán kín, hôm nay đệ tử mới rạch ra. Thùng than cạnh lò: than tùng ướt ở đáy, lớp trên là than dẻ khô, còn quá nửa.</p>
      <p>Bồ đoàn trước lò lõm sâu. Trên bàn: sổ hoả hậu, cái cân đồng nhỏ, lồng chuột.</p>`)}
    </div>`,
  },
  {
    id: "long_chuot", stage: 1, place: "dan_phong", kind: "Đồ vật", icon: "🐁", label: "Lồng chuột thử đan",
    html: () => giay(hand(`<p>Lồng tre dưới gầm bàn. Sáu con chuột bạch nằm nghiêng, cứng. Một con sẻ trong lồng nhỏ treo trên xà cũng chết, lông còn mượt.</p>
      <p>Đệ tử Đan phòng nói: chuột này ăn cám thường, mười ngày nay không cho thử viên nào. Tối qua lúc đi ngủ chúng còn chạy.</p>`)),
  },
  {
    id: "so_hoa_hau", stage: 1, place: "dan_phong", kind: "Sổ", icon: "📒", label: "Sổ hoả hậu lò Cửu chuyển",
    html: () => giay(`<p class="note">Sổ ghi lửa lò đan suốt bốn mươi chín ngày, chữ trưởng lão. Mấy trang cuối:</p>
      ${bang(["Ngày, canh", "Ghi"], [["23/3", "Lò nghỉ một đêm, cạo cáu đáy nồi."], ["24/4", "Văn hoả. Phong môn đặt Khôn."], ["25/4", "Văn hoả. Phong môn đặt Khôn."], ["26/4", "Vũ hoả nửa đêm rồi hạ. Phong môn đặt Khôn."],
        ["27/4 canh một", "Mưa. Than tùng ngấm nước, khói đen."], ["27/4 canh hai", "Gọi hoả công mang than dẻ lên."], ["27/4 canh ba", "Thêm than dẻ. Hoả hậu ổn. Phong môn đặt Khôn. Mắt cay."]])}`),
  },
  {
    id: "mai_dan_phong", stage: 1, place: "dan_phong", kind: "Hiện trường", icon: "🏚", label: "Trên mái Đan phòng",
    html: () => soTay(`<p>Bắc thang lên mái. Ống khói sắt thò lên khỏi ngói chừng hai thước, đầu ống có chụp sắt.</p>
      <p>Mép trong miệng ống có một vành muội mới, đen bóng, dày hơn chỗ khác. Mấy sợi rơm cháy dở mắc trong kẽ vữa quanh chân ống.</p>
      <p>Dưới máng nước, sát chân tường hậu, có một nắm rơm ướt cháy sém một đầu, bọc trong một mảnh vải gai thô dính bụi than.</p>
      <p>Mưa đêm qua đã xối mái, nhưng chỗ chụp ống che nên muội còn.</p>`),
  },
  {
    id: "so_thu_dan", stage: 1, place: "dan_phong", kind: "Sổ", icon: "📒", label: "Sổ thử đan trên chuột",
    html: () => giay(bang(["Ngày", "Viên", "Chuột"], [["Tháng 9 năm trước", "Thất chuyển, viên thứ ba", "Hai con chết sau một đêm, mặt đỏ, mắt lồi, máu mũi"], ["Tháng 10 năm trước", "Thất chuyển, bớt chu sa", "Không con nào chết"],
      ["Tháng Chạp", "Cửu chuyển, viên thứ nhất", "Không con nào chết"], ["Tháng Giêng", "Cửu chuyển, viên thứ chín", "Một con lờ đờ hai ngày"], ["Mồng 2 tháng Ba", "Cửu chuyển, đủ cân", "Không con nào chết"]]), "Ghi chép của Đan phòng."),
  },

  // ---------------------------------------------------------------- Tàng Kinh các
  {
    id: "nghiem_thi_luc", stage: 1, place: "tang_kinh", kind: "Sách", icon: "📕", label: "Nghiệm thi lục, bản chép của quán",
    html: () => giay(`<p class="note">Sách khám xác của quan huyện, quán chép lại vì hay phải lo việc ma chay. Mấy mục:</p>
      <p>Chết đuối: bụng trương, tay nắm cát, mũi miệng có bọt.</p>
      <p>Chết vì khói than trong phòng kín: mặt, môi, móng hồng tươi như hoa đào, xác lâu cứng, không bọt, không máu. Gà, chó, chuột, chim trong phòng chết trước người. Trong mũi có muội nếu khói đen.</p>
      <p>Chết vì nóng giận, trúng phong: mặt đỏ bầm, mắt lồi, có khi máu mũi.</p>
      <p>Thắt cổ: vết hằn chéo lên sau tai, lưỡi thè.</p>
      <p>Xác để lâu: ngày đầu ruồi đẻ trứng ở mắt mũi miệng. Một ngày nở giòi. Năm, bảy ngày giòi bò khỏi xác, chui đất, co lại thành nhộng nâu đỏ như hạt gạo cháy. Bảy đến mười ngày sau nhộng nở ruồi, vỏ nhộng rỗng nằm lại. Ruồi mới lại đẻ. Chỗ mát, tối như hang thì mọi chặng chậm đi chừng một nửa.</p>
      <p>Rắn cắn: hai lỗ răng, quanh tím đen, sưng lên tới nách.</p>`),
  },

  // ---------------------------------------------------------------- Trai đường
  {
    id: "so_than", stage: 1, place: "trai_duong", kind: "Sổ", icon: "📒", label: "Sổ xuất than",
    html: () => giay(`<p class="note">Sổ của kho than sau bếp. Người ký: Thuận (hoả công).</p>
      ${bang(["Ngày", "Đi đâu", "Than", "Ký"], [
        ["Mỗi ngày từ 8/3", "Ô cửa động, giờ Thìn", "Than tùng một rổ", "Thuận"],
        ["Mỗi ngày từ 8/3", "Đan phòng", "Than tùng hai gánh", "Thuận"],
        ["Mỗi ngày", "Bếp", "Than dẻ ba thúng", "Thuận"],
        ["13/3, 18/3, 23/3...", "Mua than ở Hạ Khê", "Nhập mười bao", "Thuận"],
        ["26/4", "Lôi Đài, lễ xuất quan", "Than tùng một bao cho vạc", "Thuận"],
        ["27/4 canh hai", "Đan phòng, trưởng lão gọi", "Than dẻ một gánh (than tùng ướt)", "Thuận"],
        ["28/4", "Linh đường", "Than để sưởi quan một chậu", "Thuận"]])}`),
  },
  // ---------------------------------------------------------------- Sơn môn
  {
    id: "so_ra_vao", stage: 1, place: "son_mon", kind: "Sổ", icon: "📒", label: "Sổ ra vào sơn môn",
    html: () => giay(`<p class="note">Người giữ sơn môn ghi ai lên ai xuống. Mấy trang tháng Ba và tháng Tư:</p>
      ${bang(["Ngày", "Ghi"], [["13/3", "Hoả công Tào Thuận xuống giờ Mão mua than Hạ Khê, lên giờ Ngọ."], ["15/3", "Bà Lưu lên khâm liệm cho đệ tử Huyền Diệu (chết bệnh)."], ["17/3", "Khách hành hương họ Triệu, ba người, ngủ khách xá."],
        ["18/3", "Hoả công Tào Thuận xuống giờ Mão mua than Hạ Khê, lên giờ Mùi."], ["18/3", "Tri khách Minh Kính xuống đón khách huyện, ngủ lại chân núi."], ["19/3", "Tri khách Minh Kính lên giờ Tỵ."], ["23/3", "Hoả công Tào Thuận xuống giờ Mão, lên giờ Ngọ."],
        ["25/4", "Thư của trưởng lão Giới luật gửi xuống huyện, người nhà họ Lương mang."], ["27/4", "Giám nghĩa Đạo lục viện lên giờ Thân."], ["28/4", "Bà Lưu lên giờ Thìn."]])}`),
  },
  // ---------------------------------------------------------------- Giới luật đường
  {
    id: "so_tuan_son", stage: 1, place: "gioi_luat", kind: "Sổ", icon: "📒", label: "Sổ tuần đêm",
    html: () => giay(bang(["Đêm", "Người tuần"], [["24/4", "Thanh Lương Tử"], ["25/4", "Vân Tịch Tử"], ["26/4", "Hạo Nhiên Tử"], ["27/4", "Lăng Tiêu Tử · đổi sang 28, Hạo Nhiên Tử tuần thay"], ["28/4", "Lăng Tiêu Tử"]]), "Đêm nào cũng một trưởng lão đi tuần quanh quán một vòng lúc canh ba."),
  },
  // ---------------------------------------------------------------- Tam Thanh điện
  {
    id: "linh_duong", stage: 1, place: "tam_thanh", kind: "Hiện trường", icon: "⚱", label: "Linh đường ở điện phụ",
    html: () => soTay(`<p>Quan gỗ thông mộc đặt giữa điện phụ, hai cây nến trắng, một chậu than sưởi. Đinh đóng lỏng.</p>
      <p>Lệ quán: ba ngày thì hoá. Giờ Mão mồng một tháng Năm đưa ra lò hoá sau Thạch lâm.</p>
      <p>Hai đệ tử thay nhau ngồi canh, đêm thì về ngủ.</p>`),
  },
  {
    id: "so_thuoc_vuon", stage: 1, place: "duoc_pho", kind: "Sổ", icon: "🌿", label: "Sổ hái thuốc vườn",
    html: () => giay(bang(["Ngày", "Hái", "Giao"], [["20/4", "Hoàng tinh, ba cân", "Đan phòng"], ["22/4", "Phục linh, hai cân", "Đan phòng"], ["24/4", "Bạch truật, một cân", "Bếp"], ["26/4", "Cúc hoa, nửa cân", "Trai đường (rượu)"]])),
  },
];
