// Case 08, day 5 (mồng 2 tháng Năm): the night someone stopped the vent of the player's room; the alchemy elder's locked
// medicine cabinet (the jade slip inside, see tools/locksrc/08.mjs); the two disciple registers; the seal of the cave door;
// the lamp-oil book of the ancestral hall; the land records. Route A sees the cave opened in front of everyone.
import { ln, pic, hand, media } from "../../js/kit.js";
import { giay, soTay, bang, soChu } from "./kit8.js";
import { REALMS, REG_NEW, REG_OLD, retreatDate } from "./data.js";

export default [
  {
    id: "dem_thu_nam", stage: 5, kind: "Sổ tay", icon: "📓", label: "Sổ tay của tôi: đêm mồng 1",
    html: () => `<div class="doc doc--plain">${pic("dem_thu_nam", "")}
      ${soTay(`<p>Đêm mồng một. Trời trở lạnh, Minh Kính cho người mang lên một chậu than.</p>
      <p>Tôi tỉnh dậy vì đau đầu như búa bổ, buồn nôn, chân tay không nhấc lên được. Chậu than đỏ rực. Lỗ thông gió trên vách, chỗ ban chiều còn thấy trời, bị nhét kín bằng một nắm vải.</p>
      <p>Ngoài cửa giấy có bóng người đứng sát, đầu nghiêng, như nghe xem tôi còn thở không.</p>
      <p>Tôi lăn xuống đất, bò ra cửa sau, nôn ngoài hiên. Lúc quay lại, bóng ấy không còn. Nắm vải trong lỗ thông gió là một mảnh bao tải gai, đen bụi than.</p>
      <p>Tôi giữ mảnh vải. Từ đêm nay tôi không đốt than trong phòng nữa.</p>`)}</div>`,
  },
  {
    id: "so_niem", stage: 5, kind: "Sổ", icon: "📒", label: "Sổ xem niêm cửa động",
    html: () => giay(`<p class="note">Sổ của tri khách Minh Kính, mỗi sáng một dòng, từ ngày 9/3.</p>
      ${bang(["Sáng", "Ghi"], [["9/3 tới 18/3", "Niêm nguyên, đủ bảy chữ ký."], ["19/3", "Lên muộn, giờ Tỵ, vì đi đón khách huyện. Niêm nguyên."], ["20/3 tới 27/4", "Niêm nguyên, đủ bảy chữ ký."], ["28/4", "Niêm nguyên, đủ bảy chữ ký. Mép loang nước mưa."]])}`),
  },
  // ---------------------------------------------------------------- Đan phòng
  {
    id: "tu_thuoc", stage: 5, place: "dan_phong", kind: "Đồ vật", icon: "🔒", label: "Tủ thuốc của trưởng lão Đan phòng",
    html: () => `<div class="doc doc--plain">
      ${pic("tu_thuoc", "Tủ thuốc trong buồng ngủ của trưởng lão, sau Đan phòng.")}
      ${soTay(`<p>Tủ gỗ nhiều ngăn. Giữa cánh tủ một ổ khoá đồng bốn vòng, mỗi vòng khắc số từ một tới bốn mươi chín. Đệ tử Đan phòng nói tủ này trưởng lão tự khoá từ mấy hôm trước khi mất, không ai biết số.</p>
      <p>Trên cánh tủ, ngay trên ổ khoá, một mảnh giấy nhỏ chữ trưởng lão: "Khoá theo bốn viên về."</p>`)}
      ${media("tu", "cabinet")}
    </div>`,
  },
  // ---------------------------------------------------------------- registers
  {
    id: "so_canh_gioi_moi", stage: 5, place: "tam_thanh", kind: "Sổ", icon: "📒", label: "Bảng cảnh giới đệ tử treo ở Tam Thanh điện",
    html: () => giay(`<p class="ledger-head">KHẢO HẠCH MÙA XUÂN · NGÀY RẰM THÁNG HAI NĂM CANH TÝ</p>
      ${bang(["Cảnh giới", "Đệ tử"], REALMS.map((r, i) => [r, REG_NEW[i]]))}`, "Bảng gỗ, giấy dán mới, treo ở hành lang Tam Thanh điện."),
  },
  {
    id: "so_canh_gioi_cu", stage: 5, place: "gioi_luat", kind: "Sổ", icon: "📒", label: "Sổ cảnh giới đệ tử của Giới luật đường",
    html: () => giay(`<p class="ledger-head">SỔ ĐỆ TỬ · THÁNG GIÊNG NĂM CANH TÝ</p>
      ${bang(["Cảnh giới", "Đệ tử"], REALMS.map((r, i) => [r, REG_OLD[i]]))}`, "Sổ đóng chỉ, Giới luật đường giữ. Trang này viết đầu năm, chưa sửa."),
  },
  {
    id: "ho_so_dat", stage: 5, place: "gioi_luat", kind: "Hồ sơ", icon: "📜", label: "Hồ sơ ruộng của quán",
    html: () => giay(`<p>Năm Kỷ Hợi, triều đình cấp quán ba trăm khoảnh ruộng làng Hạ Khê. Quan phủ về cắm mốc ngày mười chín tháng Chín. Hai mươi bảy hộ dời đi. Hộ Tào Đại không chịu dời; ngày cắm mốc thì mất.</p>
      <p>Năm Canh Tý, tháng Hai, quán tâu xin thêm năm trăm khoảnh làng Thượng Khê, chờ tiên tích. Bốn mươi mốt hộ sẽ dời, trong đó: hộ Tào Đức, hộ Tào Lâm, hộ Tào Ngũ, hộ Lưu Nhị, hộ Lưu Tam.</p>
      <p>Tờ tâu có chữ ký chưởng môn Huyền Chân Tử và trưởng lão Giới luật Lăng Tiêu Tử.</p>`, "Giấy tờ đóng thành tập, Giới luật đường giữ."),
  },
  // ---------------------------------------------------------------- Tổ sư điện
  {
    id: "giay_to_su", stage: 5, place: "to_su", kind: "Đồ vật", icon: "📄", label: "Hộp giấy trên bàn châm dầu",
    html: () => giay(`<p>Giấy dó vàng, khổ lớn, dùng để cắt thẻ hồn đăng và dán đèn. Soi lên trời thấy vân hoa sen chìm.</p>
      <p>Bên cạnh là nghiên son, bút lông, một thỏi than chì dùng để kẻ dòng trước khi viết thẻ.</p>`, "Chỉ Tổ sư điện dùng loại giấy này. Giấy phù của Tam Thanh điện vân mây."),
  },
  {
    id: "so_dau_to_su", stage: 5, place: "to_su", kind: "Sổ", icon: "📒", label: "Sổ dầu hồn đăng kỳ bế quan",
    html: () => giay(`<p class="note">Lệ: mỗi canh châm dầu đèn chưởng môn một lần, đánh một tiếng khánh. Người châm ký. Dầu đong bằng lạng.</p>
      ${bang(["Đêm", "Canh đã châm", "Đèn chưởng môn hao", "Ký"], [...Array.from({ length: 49 }, (_, i) => i + 1).map((n) => {
        const [m, d] = retreatDate(n);
        return [`${d}/${m}`, n === 49 ? "Canh một, canh năm" : "Đủ năm canh", "Ba lạng", "Tĩnh Hư"];
      }), ["28/4", "Đủ năm canh", "Ba lạng", "Tĩnh Hư"], ["29/4", "Đủ năm canh", "Ba lạng", "Tĩnh Hư"], ["30/4", "Đủ năm canh", "Ba lạng", "Tĩnh Hư"], ["1/5", "Đủ năm canh", "Ba lạng", "Tĩnh Hư"]])}`),
  },
  // ---------------------------------------------------------------- Huyền Chân động
  {
    id: "niem_moi", stage: 5, place: "dong", kind: "Vật chứng", icon: "📄", label: "Tờ niêm cửa động, soi dưới nắng",
    html: () => soTay(`<p>Tờ niêm của cửa động, giờ nằm trên bàn tôi. Soi lên nắng: giấy dó vàng, vân hoa sen chìm.</p>
      <p>Bảy chữ ký son. Dưới nét son của cả bảy chữ ký đều có một vệt than chì mờ chạy theo nét, như người ta kẻ trước rồi mới tô.</p>
      <p>Mép giấy loang nước mưa, nhưng chỗ hồ dán còn dẻo.</p>`),
  },
  {
    id: "trong_dong_a", stage: 5, place: "dong", branch: "A", kind: "Hiện trường", icon: "🕯", label: "Bên trong động, sáng mồng 2",
    html: () => `<div class="doc doc--plain">
      ${pic("trong_dong", "Huyền Chân động, sáng mồng 2 tháng Năm.")}
      ${soTay(`<p>Sáng nay quyền chưởng môn cho mở cửa động trước mặt mọi người, để Giám nghĩa thấy động trống. Nữ quan Tĩnh Hư xoay trận. Bà không nhìn ai.</p>
      <p>Mùi hương trầm đặc tới cay mắt. Nền đá vừa lau, còn ướt. Không có chậu than. Bệ đá trống, chiếu cói mới.</p>
      <p>Trên trần, lỗ thông khí vuông, mép đen kịt muội.</p>
      <p>Trong kẽ đá sát chân vách còn sót vài vỏ nhộng ruồi nâu đỏ, rỗng.</p>
      <p>Vách sau có một hốc vòm trát vữa. Lăng Tiêu Tử bảo hốc ấy là chỗ toạ hoá xây sẵn từ đời trước. Vữa trắng hơn đá quanh nó, vết bay còn rõ.</p>`)}
    </div>`,
  },
  {
    id: "khai_tinh_hu_2", stage: 5, via: "tinh_hu", kind: "Lời khai", icon: "🗣", label: "Nữ quan Tĩnh Hư kể",
    html: () => giay(hand(`<p>Chiều hai mươi bảy, sư thúc Đan Dương nói với tôi: chén nước của thầy về sạch từ hai mươi tháng Ba, hạc chết, sáng mai ông sẽ đòi mở cửa trước giờ Ngọ.</p>
      <p>Canh một tôi lên động. Thầy dạy tôi trận ấy từ năm tôi mười sáu. Tôi rạch tờ niêm.</p>
      <p>Thầy ngồi trên bệ. Thầy đã đi từ lâu lắm rồi. Ruồi.</p>
      <p>Nếu sáng mai cả quán mở cửa thấy thầy như thế, người ta sẽ nói thầy đạo tiêu, nói quán lừa vua. Thầy cả đời không chịu nhục. Tôi đặt thầy vào hốc toạ hoá, trát lại bằng vữa thầy để sẵn trong động.</p>
      <p>Tôi đốt bộ áo thầy mặc lúc ấy, lấy tro. Mưa tạnh thì tôi mang tro, tấm đạo bào thầy định mặc ngày xuất quan và thanh kiếm lên đài. Kiếm tôi đặt lên vạc, lấy chày đá nện một nhát.</p>
      <p>Về Tổ sư điện tôi cắt giấy, đồ bảy chữ ký bằng than chì rồi tô son, dán lại cửa trước khi trời sáng. Sáng ra tôi bảo A Mặc ghi thêm một tiếng sét.</p>
      <p>Tôi có tội khi quân. Nhưng tôi không giết ai.</p>`)),
  },
];
