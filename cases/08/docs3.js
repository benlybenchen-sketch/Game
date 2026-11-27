// Case 08, night 3 (30 tháng Tư): the choice that cannot be taken back. Route A opens the alchemy elder's coffin before
// the cremation; route B works the door of the cave and goes in before the sect posts its guard. Both routes, plus the
// stele and Tĩnh Hư's study book, which everyone can find.
import { ln, pic, hand, media } from "../../js/kit.js";
import { giay, soTay, bang } from "./kit8.js";
import { TRIGRAM_GLYPH } from "./data.js";

const T = (q) => `${q} <span class="tri">${TRIGRAM_GLYPH[q]}</span>`;

export default [
  {
    id: "dem_ba", stage: 3, kind: "Thư", icon: "✉", label: "Minh Kính báo tin chiều 30",
    html: () => giay(hand(`<p>Thưa Giám nghĩa.</p>
      <p>Giờ Mão mai đưa trưởng lão Đan phòng ra lò hoá sau Thạch lâm. Quyền chưởng môn đã định, không hoãn.</p>
      <p>Cũng từ sáng mai, Giới luật đường đặt bốn người gác cửa Huyền Chân động ngày đêm, đợi nội thị tới mới bàn chuyện mở.</p>
      <p>Đêm nay hai người gác cửa động là người của Giới luật đường, hai người canh linh đường thì về ngủ từ canh hai. Tôi chỉ dẫn ngài được một chỗ.</p>`), "Minh Kính viết vội trên giấy hương."),
  },
  {
    id: "vo_tinh_hu", stage: 3, place: "tang_kinh", exercise: true, kind: "Vở", icon: "📓", label: "Vở học trận của một đệ tử",
    html: () => giay(`<p class="note">Vở cũ trong ngăn kệ trận pháp, bìa ghi "Tĩnh Hư, năm mười sáu tuổi". Có một bài làm, chữ thầy phê son bên lề:</p>
      ${hand(`<p>Bài: vào trận ngày mồng ba tháng Giêng, ngày Bính Thìn. Lập cửa chín cung.</p>
      <p>Trò làm: Bính Thìn là thứ năm mươi ba trong lục thập hoa giáp, năm mươi ba chia chín dư tám, đặt tám ở giữa.</p>
      <p>Thầy phê: Không phải số giáp tý. Ngày vào là ngày trong tháng.</p>
      <p>Trò làm lại: đặt ba ở giữa, tháng Giêng sau Đông chí, đi thuận.</p>
      ${bang(["", "", ""], [["Đông Nam 2", "Nam 7", "Tây Nam 9"], ["Đông 1", "Giữa 3", "Tây 5"], ["Đông Bắc 6", "Bắc 8", "Tây Bắc 4"]])}
      <p>Trò đổi số ra quẻ: Đông Nam ${T("Đoài")}, Nam ${T("Cấn")}, Tây Nam ${T("Ly")}; Đông ${T("Càn")}, Giữa ${T("Ly")}, Tây ${T("Tốn")}; Đông Bắc ${T("Khảm")}, Bắc ${T("Khôn")}, Tây Bắc ${T("Chấn")}.</p>
      <p>Thầy phê: Số đúng. Quẻ chưa xong. Học lại phép định phương.</p>`)}`),
  },
  {
    id: "bia_tran", stage: 3, place: "dong", kind: "Bia", icon: "🗿", label: "Bia đá trước cửa động",
    html: () => giay(`<p class="note">Bia đá nhỏ cạnh cửa, rêu phủ. Bạn cạo rêu đọc:</p>
      ${hand(`<p>Lạc Thư làm cung, ngày vào làm trung.</p><p>Thuận nghịch theo chí.</p><p>Quẻ theo Văn Vương, ngũ ký Khôn cung.</p><p>Nam ở trên đầu.</p><p>Người vào tự khoá, người sau tự mở.</p>`)}`),
  },

  // ---------------------------------------------------------------- route A: the coffin
  {
    id: "khai_quan", stage: 3, branch: "A", kind: "Hiện trường", icon: "⚱", label: "Linh đường, canh ba đêm 30",
    html: () => soTay(`<p>Canh ba. Người canh đã về. Tôi và Minh Kính nạy đinh. Đinh đóng lỏng, nắp trượt ra không một tiếng.</p>
      <p>Mặt ông vẫn hồng như người say. Tôi cạy miệng: lưỡi và cổ họng đen như lòng ống khói, muội bám thành lớp. Người chết cháy thì lửa ngoài da; người này khói ở bên trong.</p>
      <p>Trong ống tay áo trái, kẹt ở nếp gấp, có một cục than dẻ nhỏ bằng đốt ngón tay, khô.</p>
      <p>Áo liệm là áo bà Lưu thay, nhưng lớp áo lót trong cùng là áo của ông, bà để nguyên. Ở vạt trước áo lót có một túi khâu kín bằng chỉ đen. Tôi rạch ra.</p>`),
  },
  {
    id: "so_tay_dan_duong", stage: 3, branch: "A", kind: "Sổ tay", icon: "📓", label: "Cuốn sổ nhỏ khâu trong áo lót",
    html: () => giay(hand(`<p>Hai mươi tháng Ba. Khay về, chén nước sạch trơn. Thầy uống thuốc xưa nay để cặn, hôm nay không.</p>
      <p>Hai mươi tư tháng Ba. Tiểu Tùng báo hạc Bạch Vân chết.</p>
      <p>Mồng năm tháng Tư. Chén vẫn sạch. Bốn con hạc chết. Hỏi hoả công, nó bảo sư tổ uống hết, rửa chén.</p>
      <p>Hai mươi hai tháng Tư. Tiểu Tùng mang bốn viên vàng lấy trong diều hạc. Viên nào cũng nguyên vẹn. Đan của ta. Ta đã sợ điều này từ tháng trước.</p>
      <p>Hai mươi tư tháng Tư. Mượn sách cân lường, cân bốn viên, khoá lại. Không dám ghi ra đây.</p>
      <p>Hai mươi bảy tháng Tư. Đã nói với Tĩnh Hư. Sáng mai, trước giờ Ngọ, ta đòi mở cửa.</p>`), "Sổ tay bằng bàn tay, giấy mỏng, chữ trưởng lão Đan phòng."),
  },

  // ---------------------------------------------------------------- route B: the door
  {
    id: "tran_cua", stage: 3, branch: "B", kind: "Trận", icon: "☯", label: "Chín đĩa đá trên cửa động",
    html: () => `<div class="doc doc--plain">
      ${soTay(`<p>Canh ba. Hai người gác ngồi ngủ dưới mái đá. Tôi rạch tờ niêm bằng dao, cất vào tay áo.</p>
      <p>Chín đĩa đá, ba hàng ba. Mỗi đĩa xoay được tám nấc, mỗi nấc một quẻ. Mặt cửa quay về hướng Bắc. Trên khung cửa chạm bốn chữ: "Nam" ở trên, "Bắc" ở dưới, "Đông" bên trái, "Tây" bên phải.</p>
      <p>Đẩy thử mà sai, các đĩa kẹt lại, phải chờ một lúc mới xoay tiếp được.</p>`)}
      ${media("tran", "door")}
    </div>`,
  },
  {
    id: "trong_dong_b", stage: 3, branch: "B", needs: "tran", kind: "Hiện trường", icon: "🕯", label: "Bên trong động, canh tư",
    html: () => `<div class="doc doc--plain">
      ${pic("trong_dong", "Huyền Chân động, đêm 30 tháng Tư.")}
      ${soTay(`<p>Mùi hương trầm rất nặng. Dưới mùi hương là mùi khác.</p>
      <p>Bệ đá phủ chiếu cói, trống. Trước bệ, chậu than đồng: nửa chậu than tùng cháy dở, đen sì, tắt khi còn nhiều, không thành tro trắng.</p>
      <p>Trên trần, ngay trên chậu than, lỗ thông khí vuông, mép đen kịt muội.</p>
      <p>Dưới nền, quanh bệ, trong các kẽ đá: rất nhiều vỏ nhộng ruồi nâu đỏ, rỗng, như hạt gạo cháy. Có hai lớp: lớp dưới đã bạc màu, vỡ vụn; lớp trên còn bóng. Xác ruồi khô rải rác.</p>
      <p>Bên phải, ô cửa nhỏ nhìn từ trong: bậu trống.</p>
      <p>Vách sau có một hốc vòm trát vữa, vữa trắng hơn đá quanh nó, vết bay còn rõ, mép dưới có một vệt ẩm sẫm.</p>
      <p>Trên kệ đá: áo gấp, một giá kiếm trống.</p>`)}
    </div>`,
  },
  {
    id: "hoc_da", stage: 3, branch: "B", needs: "tran", kind: "Hiện trường", icon: "🕯", label: "Sau lớp vữa",
    html: () => soTay(`<p>Vữa còn mềm ở trong. Tôi đục bằng chuôi dao.</p>
      <p>Ông ngồi kiết già trong hốc, hai tay bắt ấn trên gối. Áo đạo trong của ông đã thấm đẫm. Da xám xanh, căng lên xương. Mắt mở, trắng đục. Miệng há, đen.</p>
      <p>Râu tóc bạc rất dài, rủ xuống đùi. Ruồi bò ra từ mũi.</p>
      <p>Tôi trát lại bằng vữa trong động, để nguyên như cũ, cho tới khi có người làm chứng.</p>`),
  },
];
