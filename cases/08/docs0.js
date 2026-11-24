// Case 08, day 1 morning (28 tháng Tư, Canh Tý): the dispatch, the sect's report, the player's notes of the storm night,
// the map, the morning report, the almanac, the retreat rules; on the mountain: the summit, the thunder log, the water clock,
// the library, the stupa forest, the forge, the ancestral hall, the cave door.
import { ln, pic, hand } from "../../js/kit.js";
import { giay, soTay, bang, soChu, cap } from "./kit8.js";
import { STRIKES, RAIN, SURVEY, TERM_ORDER, nightPhan, khacPhan, TERMS, MONTH_START, MONTH_LEN, TIEN_THIEN, TRIGRAM_GLYPH } from "./data.js";

const SIGNERS = ["Lăng Tiêu Tử", "Đan Dương Tử", "Bão Phác Tử", "Tĩnh Hư", "Thanh Lương Tử", "Vân Tịch Tử", "Hạo Nhiên Tử"];
const NIEM = ["không kịp niệm", "một câu", "hai câu", "ba câu", "bốn câu", "năm câu", "sáu câu", "bảy câu", "tám câu", "chín câu"];

export default [
  {
    id: "lenh_cu", stage: 0, kind: "Công văn", icon: "📜", label: "Lệnh cử của Đạo lục viện",
    html: () => giay(`<p class="ledger-head">ĐẠO LỤC VIỆN · KINH SƯ</p>
      <p>Phụng chỉ. Cử Giám nghĩa một viên lên núi Vân Khư, phủ Hà Nam, chứng kiến lễ xuất quan của chưởng môn Huyền Chân Tử, quán Vân Khư.</p>
      <p>Chưởng môn vào động bế quan từ giờ Ngọ ngày mồng tám tháng Ba, hẹn đủ bốn mươi chín ngày thì ra. Tông môn đã tâu trước: nếu chưởng môn độ kiếp thành, phi thăng, xin triều đình cấp thêm năm trăm khoảnh ruộng làng Thượng Khê dưới chân núi làm ruộng nuôi quán.</p>
      <p>Giám nghĩa có quyền xem mọi nơi trong quán, hỏi mọi người trong quán, niêm phong mọi vật bằng ấn của Viện.</p>
      <p>Tiên tích được Giám nghĩa ký xác nhận thì ruộng xin trong tấu được cấp ngay, không chờ xét lại. Giám nghĩa không ký thì phải tâu rõ vì sao.</p>
      <p>Hạn bảy ngày sau lễ xuất quan. Ngày thứ bảy, nội thị Phùng Ân của Nội thị tỉnh lên sơn môn nhận tờ xác nhận.</p>
      <p>Tuyên Hoà năm thứ hai, tháng Hai.</p>`, "Giấy vàng, ấn son của Viện. Bạn mang theo từ kinh sư."),
  },
  {
    id: "tau_tong_mon", stage: 0, kind: "Tờ tâu", icon: "📜", label: "Tờ tâu của tông môn, viết sáng 28",
    html: () => giay(`<p class="ledger-head">VÂN KHƯ QUÁN TÂU</p>
      <p>Đêm hai mươi bảy tháng Tư, trời nổi sấm. Chín tiếng sét giáng xuống Lôi Đài trên đỉnh núi. Sáng ra trên đàn tế chỉ còn một đống tro, tấm đạo bào của chưởng môn và thanh kiếm của người đã gãy làm đôi.</p>
      <p>Cửa Huyền Chân động vẫn niêm nguyên, tờ niêm đủ bảy chữ ký. Người không đi qua cửa. Đó là lôi giải: thân xác hoá tro dưới thiên lôi, chân thân theo sét mà lên.</p>
      <p>Cùng đêm ấy, trưởng lão Đan phòng Đan Dương Tử giữ lửa lò đan cho chưởng môn, tẩu hoả nhập ma, toạ hoá trước lò.</p>
      <p>Hồn đăng của chưởng môn trong Tổ sư điện vẫn cháy. Đèn người tu chỉ tắt khi người tu tán đi; đèn còn cháy là người còn, ở cõi khác.</p>
      <p>Xin Giám nghĩa xác nhận tiên tích để tông môn dâng tạ ơn trời.</p>
      <p>Quyền chưởng môn: Lăng Tiêu Tử, trưởng lão Giới luật đường.</p>`, "Giấy Tam Thanh điện, nét chữ đều, người viết thư lại của quán."),
  },
  {
    id: "ghi_dem_49", stage: 0, kind: "Sổ tay", icon: "📓", label: "Sổ tay của tôi: chiều và đêm 27",
    html: () => soTay(`<p>Chiều 27 tháng Tư. Lên tới sơn môn lúc giờ Thân. Chín trăm chín mươi chín bậc. Tri khách Minh Kính đón, xếp cho tôi gian phía tây khách xá.</p>
      <p>Bữa tối ở trai đường. Trưởng lão Đan phòng không ăn, bảo phải giữ lửa đêm cuối. Ông nói với nữ quan giữ Tổ sư điện mấy câu gì đó ở hiên rồi đi lên.</p>
      <p>Đầu hôm trời oi. Chừng một canh sau thì mưa, rồi sấm.</p>
      <p>Tôi ngồi bên cửa sổ khách xá đếm. Tám lần chớp, lần nào cũng có sấm theo sau. Sau lần thứ tám thì sấm thưa dần rồi tắt hẳn, chỉ còn mưa rả rích, rất lâu.</p>
      <p>Tôi ngủ quên lúc nào không biết. Giờ Mão bị đánh thức bởi tiếng chuông và tiếng thằng bé trên đỉnh gào: tiên tích, tiên tích.</p>`),
  },
  {
    id: "ban_do", stage: 0, noPin: true, kind: "Bản đồ", icon: "🗺", label: "Bản đồ núi Vân Khư",
    html: () => `<div class="doc doc--plain">
      <p class="note">Minh Kính vẽ cho bạn. Khách xá là chỗ bạn ở: giấy tờ người ta mang tới đó, không mất công đi. Nơi khác thì phải đi bộ, hỏi han, lục lọi, mỗi lần chừng một nén hương. Từ khách xá xuống Hạ Khê dưới chân núi thì mất gấp đôi.</p>
      <div class="mapnav"></div>
    </div>`,
  },
  {
    id: "so_le_minh_kinh", stage: 0, kind: "Biên bản", icon: "📄", label: "Biên bản sáng 28 của tri khách",
    html: () => giay(`<p class="ledger-head">BIÊN BẢN · SÁNG 28 THÁNG TƯ</p>
      <p>Giờ Mão, đồng tử canh đỉnh A Mặc gào trên Lôi Đài. Người trong quán lên đỉnh. Theo thứ tự tôi thấy: tôi, nữ quan Tĩnh Hư, trưởng lão Giới luật, trưởng lão Tàng Kinh các (có người dìu), hoả công Tào Thuận, hạc đồng Tiểu Tùng, các trưởng lão Thanh Lương, Vân Tịch, Hạo Nhiên, rồi các đệ tử. Giám nghĩa lên sau cùng. Đường lên đỉnh đất đỏ, mưa đêm làm nhão, giày ai cũng lấm.</p>
      <p>Trên đàn tế giữa đài: một đống tro xám, mịn. Tấm đạo bào chàm của chưởng môn, gấp đôi, cháy sém mép trên. Thanh kiếm của người gãy hai đoạn, nằm cạnh nhau.</p>
      <p>Tôi nhấc tấm đạo bào lên: mặt đá bên dưới khô. Tro cũng khô, gió thổi bay được. Quanh đàn, khắp mặt đài, nước mưa còn đọng thành vũng.</p>
      <p>Cửa Huyền Chân động dưới đỉnh: tờ niêm còn nguyên, đủ bảy chữ ký. Khay đan buổi sớm chưa đặt.</p>
      <p>Cùng giờ ấy, đệ tử Đan phòng báo trưởng lão Đan Dương Tử ngồi chết trước lò.</p>
      <p>Tri khách Minh Kính ghi.</p>`),
  },
  {
    id: "lich_thu", stage: 0, kind: "Lịch", icon: "📅", label: "Lịch năm Canh Tý treo ở khách xá",
    html: () => giay(`<p class="ledger-head">LỊCH NĂM CANH TÝ · TUYÊN HOÀ NĂM THỨ HAI</p>
      ${bang(["Tháng", "Ngày mồng một", "Tháng đủ hay thiếu"], Object.keys(MONTH_START).filter((m) => MONTH_LEN[m]).map((m) => [`Tháng ${m === "1" ? "Giêng" : m === "4" ? "Tư" : soChu(+m)}`, MONTH_START[m], MONTH_LEN[m] === 30 ? "Đủ, ba mươi ngày" : "Thiếu, hai mươi chín ngày"]))}
      <p>Tiết khí:</p>
      ${bang(["Tiết", "Ngày"], TERMS.map(([t, d]) => [t, d]))}
      <p>Ngày tốt tháng Tư: mồng ba, mười một, mười tám, hai mươi bảy. Kiêng xuất hành ngày Dần. Tháng Năm: mồng năm Đoan ngọ.</p>`, "Lịch in của Ty thiên văn, có chỗ người trong quán viết thêm bằng mực."),
  },
  {
    id: "le_be_quan", stage: 0, kind: "Lệ quán", icon: "📜", label: "Lệ bế quan của tông môn",
    html: () => giay(`<p class="ledger-head">LỆ BẾ QUAN · QUÁN VÂN KHƯ</p>
      <p>Một. Người bế quan vào động thì các trưởng lão niêm cửa, mỗi vị ký một chữ lên tờ niêm. Không ai được mở trận trên cửa cho tới ngày xuất quan.</p>
      <p>Hai. Mỗi ngày giờ Thìn, Đan phòng ra một viên đan, hoả công đưa lên ô cửa nhỏ cạnh cửa động, đặt trên khay cùng chén nước và rổ than cho lò sưởi. Khay hôm trước lấy về Đan phòng.</p>
      <p>Ba. Người giữ Tổ sư điện thức suốt kỳ bế quan, mỗi canh châm dầu hồn đăng của người bế quan một lần, châm xong đánh một tiếng khánh.</p>
      <p>Bốn. Mỗi sáng tri khách lên xem tờ niêm, ghi vào sổ.</p>
      <p>Năm. Đỉnh núi có đồng tử canh đêm ở chòi, ghi trời, gió, mưa, sấm, khói.</p>
      <p>Sáu. Ngày xuất quan, giờ Ngọ, đủ các trưởng lão cùng mở cửa.</p>`),
  },
  {
    id: "bien_ban_be_quan", stage: 0, kind: "Biên bản", icon: "📄", label: "Biên bản ngày vào động",
    html: () => giay(`<p class="ledger-head">BIÊN BẢN · NGÀY MỒNG TÁM THÁNG BA</p>
      <p>Giờ Ngọ ngày mồng tám tháng Ba năm Canh Tý, ngày Mậu Thân, chưởng môn Huyền Chân Tử vào Huyền Chân động bế quan bốn mươi chín ngày.</p>
      <p>Chưởng môn tự tay xoay trận trên cửa. Cửa đóng. Bảy vị ký tờ niêm: ${SIGNERS.join(", ")}.</p>
      <p>Tờ niêm là giấy phù của Tam Thanh điện, vân mây chìm, mực son.</p>
      <p>Chưởng môn dặn lại: người ra thì giờ Ngọ ngày thứ năm mươi mở cửa; người không ra thì để nguyên động làm tháp, không ai được vào.</p>
      <p>Tri khách Minh Kính ghi.</p>`),
  },
  {
    id: "khai_a_mac", stage: 0, kind: "Lời khai", icon: "🗣", label: "Lời khai: đồng tử canh đỉnh A Mặc",
    confront: { id: "a_mac", who: "A Mặc", after: "Thằng bé nhìn tờ giấy rất lâu. Rồi nó oà khóc, nói lí nhí, nói hết." },
    html: () => giay(`<p class="note">A Mặc, mười bốn tuổi, canh đỉnh ba năm nay. Minh Kính hỏi, bạn ngồi nghe.</p>
      ${hand(`<p>Đêm qua con thức trong chòi. Sấm nhiều lắm. Con đếm, con ghi.</p>
      <p>Tiếng thứ chín đánh trúng Lôi Đài. Con thấy lửa trắng trùm cả đàn tế.</p>
      <p>Con sợ, con không dám ra. Gà gáy con mới ra, thì thấy tro, áo, kiếm. Con gào lên.</p>`)}`),
  },

  {
    id: "khai_a_mac_2", stage: 0, via: "a_mac", kind: "Lời khai", icon: "🗣", label: "A Mặc nói lại",
    html: () => giay(hand(`<p>Con nói dối. Con không thấy lửa trắng nào.</p>
      <p>Từ tiếng thứ bảy con sợ quá, trùm chăn kín đầu. Mấy tiếng sau con nghe rồi đoán.</p>
      <p>Dòng thứ chín con viết lúc sáng, sau khi đã gào. Có một vị trong quán bảo con viết, bảo viết vào thì thầy được trọn, cả quán được nhờ. Con không dám nói là ai.</p>
      <p>Lúc mưa vừa dứt, con nghe tiếng chân trên đài, thấy ánh đèn lồng qua khe cửa, đi tới đàn tế rồi đi xuống. Con không dám ra.</p>`)),
  },

  // ---------------------------------------------------------------- Lôi Đài
  {
    id: "hien_truong_ld", stage: 0, place: "loi_dai", kind: "Hiện trường", icon: "⚡", label: "Đàn tế trên đỉnh",
    html: () => `<div class="doc doc--plain">
      ${pic("loi_dai", "Lôi Đài, sáng 28 tháng Tư.")}
      ${soTay(`<p>Đài đá tròn, đường kính chừng hai mươi bước, sàn khắc vòng tám quẻ. Đàn tế vuông ở giữa. Vạc đồng ba chân ở mép bắc. Chòi canh gỗ ở mép đông, một khe cửa sổ, cửa ra vào quay vào trong đài.</p>
      <p>Tro trên đàn mịn, xám, có mùi vải cháy. Không có xương. Đạo bào gấp đôi, cháy mép trên, mép dưới không cháy. Hai đoạn kiếm nằm song song, cách nhau một ngón tay.</p>
      <p>Cách đàn hai bước, trên sàn có một tấm lưới đồng vuông cỡ một gang tay, chấn song ô vuông, dưới là lỗ sâu tối. Minh Kính bảo đó là lỗ thở của động phủ dưới đỉnh.</p>
      <p>Vũng nước đọng khắp đài. Trên đàn, chỗ đặt áo, đá khô.</p>`)}
    </div>`,
  },
  {
    id: "so_sam", stage: 0, place: "loi_dai", kind: "Sổ canh", icon: "📓", label: "Sổ sấm của đồng tử canh đỉnh",
    html: () => giay(`<p class="note">Sổ nhỏ, giấy thô, chữ trẻ con. Trang đầu A Mặc vẽ cái chòi: một khe cửa sổ, một cửa ra vào. Đêm 27:</p>
      ${hand(`<p>Đêm hai mươi bảy. Tiễn Lập hạ.</p>
      <p>Mười một khắc, mưa.</p>
      ${STRIKES.map(([n, k, dir, niem]) => `<p>${cap(soChu(n))}. Chớp phía ${dir}, ${niem ? `niệm được ${NIEM[niem]} thì sấm` : `${NIEM[0]}, sấm liền`}. Tiễn chỉ ${soChu(k)} khắc.${n === 9 ? " Lửa trắng trên đài." : ""}</p>`).join("")}
      <p>Ba mươi tư khắc, mưa dứt. Đã sang canh tư.</p>
      <p>Gà gáy.</p>`)}
      <p class="note">Trang trước: các đêm mưa đầu tháng Tư, đêm nào cũng chỉ vài dòng như thế.</p>`),
  },
  {
    id: "bang_lau", stage: 0, place: "loi_dai", kind: "Bảng", icon: "⏳", label: "Bảng dán trong chòi canh",
    html: () => giay(`<p class="ledger-head">DẠ LẬU · KHẮC ĐÊM THEO TIẾT</p>
      <p>Ngày đêm trăm khắc, mỗi khắc sáu mươi phân. Dạ lậu tính từ lúc hôn tới lúc đán, chia năm canh. Mỗi tiết thay một tiễn.</p>
      ${bang(["Tiết", "Dạ lậu"], TERM_ORDER.map((t) => [t, khacPhan(nightPhan(t))]))}`, "Giấy dán cạnh cái đồng hồ nước. Trong chòi có một ống tiễn đựng hai mươi tư cây tiễn tre, mỗi cây khắc tên một tiết."),
  },

  // ---------------------------------------------------------------- Tàng Kinh các
  {
    id: "ngu_loi_phap", stage: 0, place: "tang_kinh", kind: "Sách", icon: "📕", label: "Ngũ Lôi pháp, bản giảng cho đệ tử",
    html: () => giay(`<p class="note">Bản chép cho đệ tử đọc, để ngoài kệ. Bản gốc Ngũ Lôi chính pháp niêm trong hộp đen, không cho mượn.</p>
      <p>Phép gọi sấm. Đứng ở đàn, mặt hướng về phương có mây. Thấy chớp thì niệm chú "Thiên lôi ẩn ẩn". Niệm chưa dứt mà sấm đã tới là sét ở gần; mỗi câu chú, sét xa thêm hai trăm hai mươi bộ. Sấm tới cùng lúc chớp là sét ở ngay chân mình.</p>
      <p>Phép định phương. Tám quẻ theo Văn Vương: Khảm ở Bắc, Cấn Đông Bắc, Chấn Đông, Tốn Đông Nam, Ly Nam, Khôn Tây Nam, Đoài Tây, Càn Tây Bắc.</p>
      <p>Lạc Thư chín cung:</p>
      ${bang(["", "", ""], [["Đông Nam 4", "Nam 9", "Tây Nam 2"], ["Đông 3", "Giữa 5", "Tây 7"], ["Đông Bắc 8", "Bắc 1", "Tây Bắc 6"]], "tbl--grid")}
      <p>Phép phi tinh. Lấy một số đặt ở cung giữa, rồi bay theo đường Lạc Thư: giữa, Tây Bắc, Tây, Đông Bắc, Nam, Bắc, Tây Nam, Đông, Đông Nam. Đi thuận thì mỗi cung thêm một, quá chín về một; đi nghịch thì mỗi cung bớt một, dưới một về chín. Sau Đông chí dùng dương độn, đi thuận; sau Hạ chí dùng âm độn, đi nghịch. Ngũ không có quẻ, ký ở cung Khôn.</p>
      <p>Phép vẽ bùa sấm, phép đặt lệnh bài, phép tắm trước đàn: xem quyển sau.</p>`),
  },
  {
    id: "so_do_duong", stage: 0, place: "tang_kinh", kind: "Sổ đo", icon: "📐", label: "Sổ đo đường núi",
    html: () => giay(`<p class="note">Sổ của người đo đất năm Tuyên Hoà nguyên niên, khi quán xin ruộng. Đo bằng bộ, hướng ghi theo quẻ. Có trang đo từ chòi canh trên Lôi Đài:</p>
      ${bang(["Tới", "Hướng", "Bộ"], SURVEY.map(([p, h, b]) => [p, h, b]))}
      <p class="note">Trang sau: từ sơn môn xuống làng Hạ Khê ba nghìn bộ, từ Hạ Khê sang Thượng Khê một nghìn hai trăm bộ, các bờ ruộng, các cột mốc.</p>`),
  },
  {
    id: "thai_thuong", stage: 0, place: "tang_kinh", kind: "Sách", icon: "📕", label: "Thái Thượng cảm ứng thiên, bản chép tay",
    html: () => giay(`<p>Hoạ phúc không có cửa, do người tự gọi tới. Báo ứng của thiện ác như bóng theo hình.</p>
      <p>Người muốn cầu thành tiên trời thì phải làm một nghìn ba trăm điều thiện. Muốn cầu thành tiên đất thì phải làm ba trăm điều thiện.</p>
      <p>Lấy của người, cướp ruộng người, đổ tội cho người: tính sổ mà trừ tuổi thọ.</p>`, "Sách dạy đệ tử mới, giấy sờn mép."),
  },

  // ---------------------------------------------------------------- Thạch lâm
  {
    id: "thap_sinh_phan", stage: 0, place: "thach_lam", kind: "Hiện trường", icon: "🗿", label: "Tháp sinh phần của chưởng môn",
    html: () => `<div class="doc doc--plain">
      ${pic("thach_lam", "Rừng tháp mộ, sáng 28.")}
      ${soTay(`<p>Rừng tháp mộ của các đời chưởng môn và trưởng lão, trên sườn đông bắc. Tháp cao nhất bảy tầng là sinh phần chưởng môn đương nhiệm, xây sẵn từ năm ngoái.</p>
      <p>Đỉnh tháp nứt toác, một vệt cháy đen chạy dọc ba tầng trên. Đá vụn và lá thông cháy sém rơi quanh chân tháp, còn ướt nước mưa. Cửa tháp khoá đồng, khoá còn nguyên.</p>
      <p>Người đệ tử đi cùng nói đêm qua nghe một tiếng nổ rất gần ở phía này, chói tai hơn cả.</p>`)}
    </div>`,
  },
  {
    id: "bia_mo", stage: 0, place: "thach_lam", kind: "Bia", icon: "🗿", label: "Bia các đời chưởng môn",
    html: () => giay(`<p>Đời thứ nhất, Thanh Hư chân nhân, toạ hoá năm Thái Bình Hưng Quốc thứ ba, tháp bảy tầng.</p>
      <p>Đời thứ hai, Bạch Dương chân nhân, thi giải năm Hàm Bình thứ năm: người vào động, ba ngày sau mở cửa chỉ còn cây gậy trúc và đôi giày. Đệ tử dựng tháp chôn gậy.</p>
      <p>Đời thứ ba, Tử Hà chân nhân, toạ hoá năm Gia Hựu thứ hai.</p>
      <p>Đời thứ tư, Huyền Chân Tử, đương nhiệm. Sinh phần dựng năm Tuyên Hoà nguyên niên.</p>`, "Chép lại từ bốn tấm bia đá đầu rừng tháp."),
  },

  // ---------------------------------------------------------------- Lò rèn
  {
    id: "kiem_gay", stage: 0, place: "lo_ren", kind: "Lời khai", icon: "⚒", label: "Thợ rèn Hàn xem thanh kiếm",
    html: () => giay(hand(`<p>Kiếm của chưởng môn, thép Long Tuyền, tôi rèn lại chuôi năm ngoái.</p>
      <p>Sét đánh vào thép thì thép chảy, mép chảy tròn lại, có vảy xanh tím, cả thân thâm đi. Kiếm này mặt gãy sáng, hạt thép li ti như đường cát, mép sắc. Hai bên mặt gãy có hai vết lõm nhỏ, cách nhau hai đốt ngón tay: vết đe và vết búa.</p>
      <p>Người ta đặt nó lên một vật cứng rồi nện một nhát. Một nhát là đứt.</p>
      <p>Chuôi kiếm không cháy. Tua đỏ chỉ bạc màu vì nắng, không vì lửa.</p>`), "Thợ rèn của quán, ngoài năm mươi, tay đầy vết bỏng."),
  },
  {
    id: "so_ren", stage: 0, place: "lo_ren", kind: "Sổ", icon: "⚒", label: "Sổ việc lò rèn tháng Tư",
    html: () => giay(bang(["Ngày", "Việc"], [["Mồng 3", "Rèn lại bản lề cửa Tàng Kinh các"], ["Mồng 9", "Đóng đinh quan tài dự phòng cho quán (ba bộ)"], ["17", "Thay đai sắt vạc đồng Lôi Đài"], ["21", "Mài lưỡi rìu cho trai đường"], ["25", "Rèn mười cái móc treo đèn cho lễ xuất quan"]])),
  },

  // ---------------------------------------------------------------- Tổ sư điện
  {
    id: "hon_dang", stage: 0, place: "to_su", kind: "Hiện trường", icon: "🪔", label: "Hồn đăng trong Tổ sư điện",
    html: () => `<div class="doc doc--plain">
      ${pic("to_su_dien", "Tổ sư điện, sáng 28.")}
      ${soTay(`<p>Năm bậc đèn đồng hình hoa sen, mỗi đèn một thẻ gỗ ghi đạo hiệu người trong quán. Người còn thì đèn cháy. Người tán thì đèn tự tắt, người ta nói thế.</p>
      <p>Đèn của chưởng môn ở chính giữa bậc trên cùng, to gấp đôi các đèn khác. Ngọn lửa cao, đứng thẳng. Gió lùa từ cửa làm mọi ngọn khác nghiêng, riêng ngọn ấy không.</p>
      <p>Nữ quan Tĩnh Hư quỳ trước bậc đèn, mắt đỏ, không nói gì với tôi.</p>`)}
    </div>`,
  },
  {
    id: "bang_que", stage: 0, place: "to_su", kind: "Đồ vật", icon: "☯", label: "Tấm gỗ tám quẻ treo vách trái",
    html: () => giay(`<p class="note">Tấm gỗ tròn sơn đen, tám quẻ thếp vàng xếp vòng quanh, mỗi quẻ một con số khắc nhỏ:</p>
      ${bang(["Quẻ", "Hình", "Số"], Object.entries(TIEN_THIEN).map(([q, n]) => [q, `<span class="tri">${TRIGRAM_GLYPH[q]}</span>`, n]))}
      <p class="note">Mặt sau khắc: "Phục Hy hoạ quái, Thiệu Khang Tiết truyền". Bụi dày.</p>`),
  },
  {
    id: "bai_vi", stage: 0, place: "to_su", kind: "Đồ vật", icon: "🪔", label: "Bài vị các đời tổ sư",
    html: () => giay(`<p>Bài vị Thanh Hư chân nhân, Bạch Dương chân nhân, Tử Hà chân nhân. Bên cạnh là một bài vị gỗ mới, chưa khắc chữ, phủ vải vàng.</p>`, "Trên bàn thờ phía sau bậc đèn."),
  },

  // ---------------------------------------------------------------- Huyền Chân động
  {
    id: "cua_dong", stage: 0, place: "dong", kind: "Hiện trường", icon: "🚪", label: "Cửa Huyền Chân động",
    html: () => `<div class="doc doc--plain">
      ${pic("cua_dong", "Cửa động, sáng 28.")}
      ${soTay(`<p>Dưới đỉnh chừng sáu mươi bộ, vách đá xám. Cửa là một phiến đá phẳng khảm vào vách. Giữa cửa có chín đĩa đá tròn xếp ba hàng ba, mỗi đĩa khắc một quẻ, xoay được.</p>
      <p>Tờ niêm vàng dán ngang khe cửa, chữ ký son, mưa làm loang mép. Bên phải cửa, ngang ngực, một ô cửa gỗ vuông, bậu có cái khay sơn đỏ trống.</p>
      <p>Hai người của Giới luật đường đứng gác. Lăng Tiêu Tử dặn: không ai được động vào cửa, mở cửa là phá tiên tích.</p>`)}
    </div>`,
  },

  // ---------------------------------------------------------------- noise elsewhere
  {
    id: "bang_tien_cung", stage: 0, place: "son_mon", kind: "Bảng", icon: "🪧", label: "Bảng tiền cúng treo ở sơn môn",
    html: () => giay(bang(["Người cúng", "Tiền"], [["Họ Triệu, phủ Hà Nam", "Năm mươi quan"], ["Nội thị tỉnh", "Một trăm quan, hai tấm lụa"], ["Họ Tào, Thượng Khê", "Hai thăng gạo"], ["Họ Lưu, Hạ Khê", "Một con gà"], ["Phường thợ nhuộm huyện", "Ba mươi quan"]]), "Bảng gỗ, chữ đen, ghi những người cúng cho lễ xuất quan."),
  },
  {
    id: "so_huong_hoa", stage: 0, place: "tam_thanh", kind: "Sổ", icon: "📒", label: "Sổ hương hoa Tam Thanh điện",
    html: () => giay(bang(["Ngày", "Hương", "Nến", "Hoa"], [["24/4", "Ba bó", "Hai đôi", "Sen"], ["25/4", "Ba bó", "Hai đôi", "Sen"], ["26/4", "Năm bó", "Bốn đôi", "Sen, cúc"], ["27/4", "Chín bó", "Chín đôi", "Sen, cúc, lan"], ["28/4", "Chín bó", "Chín đôi", "(bỏ trống)"]])),
  },
  {
    id: "so_phat", stage: 0, place: "gioi_luat", kind: "Sổ", icon: "📒", label: "Sổ phạt của Giới luật đường",
    html: () => giay(bang(["Ngày", "Người", "Lỗi", "Phạt"], [["2/3", "Đệ tử Trường Viễn", "Ngủ trong giờ tụng", "Quỳ một nén hương"], ["14/3", "Đệ tử Tư Nhiên", "Ăn mặn ở chợ huyện", "Chép kinh ba ngày"], ["9/4", "Hạc đồng Tiểu Tùng", "Để hạc ra khỏi viện", "Nhịn bữa chiều"], ["22/4", "Đệ tử Huyền Cơ", "Cãi trưởng lão", "Quét Tam Thanh điện bảy ngày"]])),
  },
  {
    id: "thuc_don", stage: 0, place: "trai_duong", kind: "Bảng", icon: "🍚", label: "Thực đơn trai đường tuần cuối tháng Tư",
    html: () => giay(`<p>Sáng: cháo kê, dưa. Trưa: cơm, đậu phụ, rau dại. Tối: canh nấm, bánh hấp.</p><p>Ngày xuất quan: cỗ chay chín món, rượu hoa cúc cho khách.</p>`),
  },
];
