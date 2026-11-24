// Case 08, day 6 (mồng 3 tháng Năm): where everyone was on the night of 18 tháng Ba, the charcoal store, the village at the
// foot of the mountain. Day 7 (mồng 4): the envoy, the law. After the last choice: the endings.
import { ln, pic, hand } from "../../js/kit.js";
import { giay, soTay, bang } from "./kit8.js";
import { state } from "../../js/store.js";

const k18 = (id, label, who, text) => ({ id: `khai18_${id}`, stage: 6, kind: "Lời khai", icon: "🗣", label: `Đêm 18 tháng Ba: ${label}`,
  confront: { id: `d18_${id}`, who, after: id === "tao" ? "Tào Thuận đọc không được chữ. Minh Kính đọc to cho hắn nghe. Hắn ngồi im rất lâu." : "" },
  html: () => giay(hand(text), "Minh Kính hỏi từng người, sáng mồng 3, theo lời Giám nghĩa dặn.") });

export default [
  k18("lang", "trưởng lão Giới luật", "trưởng lão Giới luật", `<p>Đêm ấy ta giảng giới luật cho đệ tử mới ở Giới luật đường tới canh ba, rồi ngủ. Hỏi các đệ tử ấy.</p>`),
  k18("tinh_hu", "nữ quan Tĩnh Hư", "nữ quan Tĩnh Hư", `<p>Tôi ở Tổ sư điện, châm dầu đủ năm canh, như mọi đêm trong kỳ bế quan.</p>`),
  k18("minh_kinh", "tri khách Minh Kính", "tri khách Minh Kính", `<p>Tôi xuống chân núi đón khách huyện từ chiều, ngủ ở nhà trọ dưới ấy, sáng mười chín mới lên.</p>`),
  k18("a_mac", "đồng tử A Mặc", "A Mặc", `<p>Con ở chòi cả đêm. Chạng vạng chú hoả công lên quét đài như mọi bữa. Canh hai khói ống động phủ tắt.</p>`),
  k18("tao", "hoả công Tào Thuận", "hoả công Tào Thuận", `<p>Hôm ấy tôi xuống Hạ Khê mua than từ sớm, tối mịt mới về tới bếp, ăn xong thì ngủ.</p>`),
  {
    id: "khai_tao_2", stage: 6, via: "d18_tao", kind: "Lời khai", icon: "🗣", label: "Tào Thuận nói một câu",
    html: () => giay(hand(`<p>Hắn không chối, cũng không nhận. Hắn chỉ nói:</p>
      <p>Cha tôi treo cổ ở cổng sơn môn này, cái hôm quan về cắm mốc ruộng Hạ Khê. Năm nay họ cắm tới Thượng Khê, nhà cô tôi, nhà chú tôi.</p>
      <p>Ông ấy không lên trời được đâu. Người như ông ấy không lên trời được.</p>`), "Rồi hắn đứng dậy đi về bếp. Minh Kính cho hai người đi theo."),
  },
  {
    id: "luat_tong", stage: 6, kind: "Luật", icon: "📜", label: "Trích luật Tống hình thống, phần án mạng",
    html: () => giay(`<p>Án giết người, quan nghiệm phải đến tận nơi, niêm phong tang vật bằng ấn của quan. Tang vật không có niêm, hoặc niêm bằng ấn của người trong cuộc, thì không thành chứng.</p>
      <p>Không có tang mà chỉ có lời tố thì giam người bị tố không quá mười ngày; quá hạn phải thả.</p>
      <p>Tội lừa dối vua về điềm lành, điềm trời: nhẹ thì đồ, nặng thì lưu.</p>`, "Bạn chép lại từ sách luật mang theo trong hòm."),
  },
  // ---------------------------------------------------------------- Trai đường
  {
    id: "kho_than", stage: 6, place: "trai_duong", kind: "Hiện trường", icon: "🔥", label: "Kho than sau bếp",
    html: () => `<div class="doc doc--plain">${pic("trai_duong", "Bếp và kho than, chiều mồng 3.")}
      ${soTay(`<p>Kho than khoá bằng một ổ khoá sắt. Ông bếp nói chìa kho than chỉ có một chiếc, hoả công đeo ở thắt lưng, chìa các kho khác thì treo trên đinh.</p>
      <p>Than đựng trong bao tải gai thô. Một bao ở góc trong bị rách mất một góc, cỡ bàn tay. Tôi áp mảnh vải nhét lỗ thông gió phòng tôi vào chỗ rách: khớp mép. Mảnh vải bọc nắm rơm dưới máng Đan phòng cũng cùng thứ gai ấy.</p>
      <p>Góc kho có một bó rơm, ẩm. Cạnh đó, một cái thùng gỗ có mùi cám chua, đáy dính mấy vụn vàng.</p>`)}</div>`,
  },
  // ---------------------------------------------------------------- Hạ Khê
  {
    id: "so_mieu_ha_khe", stage: 6, place: "ha_khe", kind: "Sổ", icon: "📒", label: "Sổ người mất ở miếu làng",
    html: () => giay(bang(["Năm", "Người", "Ghi"], [["Mậu Tuất", "Lưu bà", "Già yếu."], ["Kỷ Hợi, tháng Năm", "Lưu Tam lang", "Ngã núi."], ["Kỷ Hợi, ngày mười chín tháng Chín", "Tào Đại, năm mươi ba tuổi", "Thắt cổ ở cổng sơn môn quán Vân Khư, hôm quan về cắm mốc ruộng. Để lại vợ và một con trai."], ["Kỷ Hợi, tháng Chạp", "Hai trẻ nhà họ Lưu", "Đói rét sau khi dời nhà."]]), "Sổ của ông từ giữ miếu, mực đã nhạt."),
  },
  {
    id: "khai_ba_tao", stage: 6, place: "ha_khe", kind: "Lời kể", icon: "🗣", label: "Bà già ở cuối làng",
    html: () => `<div class="doc doc--plain">${pic("ha_khe", "Hạ Khê, chiều mồng 3.")}
      ${giay(hand(`<p>Thằng con tôi làm hoả công trên núi, ba năm nay. Nó lên đấy từ trước khi cha nó mất. Người ta bảo nó đi tu, nó bảo nó đi làm thuê.</p>
      <p>Tết nó về, ngồi ở bậc cửa cả buổi. Nó bảo: năm nay ông chưởng môn mà lên trời thì Thượng Khê mất ruộng, nhà cô nó, nhà chú nó. Rồi nó cười, bảo: ông ấy không lên trời được đâu.</p>
      <p>Tháng Ba nó về mua than, mắt đỏ như người không ngủ.</p>`), "Bà Tào, sáu mươi tuổi, ngồi vá áo dưới gốc hoè.")}</div>`,
  },
  {
    id: "ruong_cam_moc", stage: 6, place: "ha_khe", kind: "Hiện trường", icon: "🌾", label: "Ruộng bỏ hoang",
    html: () => soTay(`<p>Ruộng bậc thang mọc cỏ ngang gối. Hàng cọc gỗ buộc vải vàng chạy ngang ruộng, đó là mốc của quán. Mấy nhà đất bỏ trống, cửa mở toang.</p>
      <p>Trên cành thấp cây hoè già giữa ruộng còn một đoạn thừng cũ, đã đứt. Người làng không ai chặt cây ấy.</p>`),
  },
  // ---------------------------------------------------------------- day 7
  {
    id: "thu_su_gia", stage: 7, kind: "Thư", icon: "✉", label: "Giờ Thìn mồng 4: nội thị ở sơn môn",
    html: () => giay(hand(`<p>Nội thị Phùng Ân đã tới sơn môn, mang theo hai mươi lính phủ và quan phủ đo ruộng. Ông đòi Giám nghĩa xuống, mang tờ xác nhận.</p>
      <p>Quyền chưởng môn đã xuống trước. Nữ quan Tĩnh Hư bị Giới luật đường giữ trong điện. Hoả công Tào Thuận sáng nay vẫn gánh than như thường, hai người của tôi đi sau.</p>
      <p>Ngài chỉ có một lần nói. Nói xong thì việc sẽ làm ngay.</p>`), "Minh Kính, viết vội."),
  },
  {
    id: "hon_dang_cuoi", stage: 7, place: "to_su", kind: "Hiện trường", icon: "🪔", label: "Tổ sư điện, sáng mồng 4",
    html: () => soTay(`<p>Từ hôm Tĩnh Hư bị giữ, không ai châm dầu đèn chưởng môn. Chén dầu khô trắng, nứt chân chim.</p>
      <p>Bấc vẫn cháy. Ngọn lửa cao, đứng thẳng.</p>
      <p>Tôi đưa tay lên trên ngọn lửa. Nóng thật.</p>`),
  },

  // ---------------------------------------------------------------- after the last choice: endings
  {
    id: "ket_do_kiep", stage: 8, kind: "Biên bản", icon: "📄", label: "Tờ tâu của Giám nghĩa",
    html: () => giay(`<p>Thần, Giám nghĩa Đạo lục viện, không ký xác nhận tiên tích núi Vân Khư.</p>
      <p>Chưởng môn Huyền Chân Tử chết đêm mười tám tháng Ba, ngày thứ mười một của kỳ bế quan, vì khói than trong động: lỗ thở trên Lôi Đài bị bao tải ướt và phiến đá bịt kín từ lúc chạng vạng. Trưởng lão Đan phòng Đan Dương Tử chết đêm hai mươi bảy tháng Tư cũng vì khói than: miệng ống khói lò đan bị nhét rơm ướt bọc bao tải. Người làm cả hai việc là hoả công Tào Thuận, người Hạ Khê. Tang vật đã niêm bằng ấn Viện.</p>
      <p>Tro, áo, kiếm trên Lôi Đài là việc của nữ quan Tĩnh Hư, giữ Tổ sư điện. Tội khi quân, xin xét riêng.</p>
      <p>Ngọc giản chưởng môn để lại: y bát trao Tĩnh Hư, rút tấu xin ruộng Thượng Khê. Thần xin dâng lên.</p>
      ${state.branch === "B" ? `<p class="note">Ba ngày sau, trước mặt quan phủ, người ta đục hốc vữa trong động, đưa chưởng môn ra. Ông được chôn trong tháp sinh phần nứt đỉnh ở Thạch lâm. Hôm ấy trời không mưa.</p>`
        : `<p class="note">Hốc vữa trong động vẫn kín. Hôm quan phủ lên đục, cả núi nghe chín tiếng sấm, trời không một gợn mây. Người ta trát lại, khắc bia ngoài cửa, không ai mở nữa.</p>`}`),
  },
  {
    id: "den_khong_tat", stage: 8, secret: true, kind: "Sổ tay", icon: "🪔", label: "Đêm cuối trong Tổ sư điện",
    html: () => soTay(`<p>Đêm mồng 4 tôi ngồi lại trong Tổ sư điện một mình.</p>
      <p>Chén dầu khô từ hôm trước. Bấc cháy suốt canh một, canh hai, canh ba, canh tư.</p>
      <p>Canh năm, dưới chân núi, lính phủ giải Tào Thuận đi qua cổng làng Hạ Khê. Ngọn lửa trên bậc cao nhất nghiêng một lần, như người cúi đầu, rồi tắt.</p>
      <p>Không ai thổi. Cửa điện tôi đã cài.</p>`),
  },
  { id: "kt_tien_tich", stage: 8, fail: ["tien_tich"], kind: "Biên bản", icon: "📄", label: "Sau ngày mồng 4",
    html: () => giay(`<p>Tờ xác nhận được dâng lên. Quan phủ cắm mốc Thượng Khê ngay chiều ấy, bốn mươi mốt hộ dời đi trước mùa gặt.</p><p>Không ai hoãn việc cấp ruộng: lệnh cử ghi ký là cấp. Tháng Sáu, hoả công của quán xin nghỉ về quê. Tháng Bảy, Giới luật đường có thêm một người chết trong phòng kín, mặt hồng như say.</p>`) },
  { id: "kt_gioi_luat", stage: 8, fail: ["gioi_luat"], kind: "Biên bản", icon: "📄", label: "Sau ngày mồng 4",
    html: () => giay(`<p>Lăng Tiêu Tử bị giải xuống phủ. Lão Bão Phác ra làm chứng, sổ dầu Tàng Kinh các ra làm chứng: đêm ấy ông ngồi chép sách tới giờ Dần. Mười ngày sau quan phủ thả ông.</p><p>Tiên tích không được xác nhận, cũng không bị bác. Hồ sơ treo đó. Hoả công của quán vẫn gánh than lên Đan phòng mỗi sáng.</p>`) },
  { id: "kt_nghia_nu", stage: 8, fail: ["nghia_nu"], kind: "Biên bản", icon: "📄", label: "Sau ngày mồng 4",
    html: () => giay(`<p>Tĩnh Hư bị giải xuống phủ. Bà nhận tội dựng tiên tích, không nhận tội giết thầy. Sổ dầu Tổ sư điện đêm mười tám tháng Ba đủ năm canh, hạc viện nghe đủ năm tiếng khánh.</p><p>Quan phủ xử bà tội khi quân. Kẻ bịt lỗ thở trên Lôi Đài không ai hỏi tới. Đêm bà bị giải đi, hồn đăng trong Tổ sư điện vẫn cháy.</p>`) },
  { id: "kt_than_nguoi", stage: 8, fail: ["than_nguoi"], kind: "Biên bản", icon: "📄", label: "Sau ngày mồng 4",
    html: () => giay(`<p>Tào Thuận bị trói trước mặt nội thị. Hắn không nói gì. Đêm ấy hắn được giam ở kho than, sáng ra kho trống, ổ khoá còn nguyên. Sổ việc vặt trong bếp đã cháy thành tro.</p><p>Không tang vật nào có niêm của Viện. Theo luật, lời tố không thành án. Ba ngày sau người ta tìm thấy hắn dưới vực sau chòi canh.</p>`) },
  { id: "kt_dan_doc", stage: 8, fail: ["dan_doc"], kind: "Biên bản", icon: "📄", label: "Sau ngày mồng 4",
    html: () => giay(`<p>Tờ tâu của bạn được nhận: chưởng môn chết vì đan độc, trưởng lão Đan phòng tự tận vì hối. Không ai bị bắt.</p><p>Tháng sau quán xin lại ruộng Thượng Khê, lấy cớ chưởng môn chết vì lo việc quán. Lò đan bị đập. Kho than sau bếp vẫn chỉ có một chiếc chìa.</p>`) },
];
