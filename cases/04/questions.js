// Case 04 "Người mẹ khác": six night shifts of Dr. Lê Bích Vân (public part). Answers live in secret.js.
// The memo of each question is nurse Sương's ward log for the next morning; it reports Thảo at her current dose.
import { doseNote } from "./dose.js";

const pins = { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" };
const log = (lines) => () => [...lines, `Phòng 7: ${doseNote()}`].join("\n");

const P = (roles) => ({ id: "pins", type: "pins", count: roles.length, label: `Ghim ${roles.length} tài liệu làm bằng chứng`, roles });

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Đêm trực 1",
    ask: "Đọc hồ sơ nhập viện của Trần Ngọc Thảo. BS. Kha chẩn đoán gì? Thảo bị chấn thương sọ não ngày nào? Bà Hoa ở Sài Gòn bao nhiêu ngày, ngày đầu tiên Thảo nói “bà không phải mẹ” là ngày nào, và cách ngày chấn thương bao lâu?",
    parts: [
      { id: "dx", type: "choice", label: "Chẩn đoán của BS. Kha", options: ["Tâm thần phân liệt thể hoang tưởng, khởi phát muộn", "Hội chứng Capgras sau chấn thương sọ não", "Hội chứng Fregoli sau chấn thương sọ não", "Trầm cảm nặng có triệu chứng loạn thần", "Rối loạn phân ly sau sang chấn tâm lý"] },
      { id: "inj", type: "text", label: "Ngày Thảo bị chấn thương sọ não (ngày/tháng)", placeholder: "vd 1/1" },
      { id: "days", type: "number", label: "Số ngày bà Hoa ở Sài Gòn (tính từ ngày đi tới ngày về)", unit: "ngày" },
      { id: "first", type: "text", label: "Ngày đầu tiên Thảo nói “bà không phải mẹ” (ngày/tháng)", placeholder: "vd 1/1" },
      { id: "gap", type: "number", label: "Từ ngày chấn thương tới ngày đó là bao nhiêu ngày?", unit: "ngày" },
      P(["Tài liệu ghi chẩn đoán", "Tài liệu ghi ngày chấn thương", "Tài liệu ghi ngày bà Hoa đi, về và ngày Thảo nói lần đầu"]),
    ],
    memo: log([
      "Sổ giao ca, sáng 15/10. Đêm qua BS. Vân ngồi ở phòng trực tới 4 giờ sáng đọc hồ sơ phòng 7.",
      "Tôi nói thật với bác sĩ: tôi trực khoa này hai mươi năm, người bệnh Capgras tôi gặp năm người. Không ai kể về người nhà mình kỹ như con nhỏ này.",
      "Sáng nay tôi để lên bàn bác sĩ cuốn sách tâm thần học của khoa, cuốn nhật ký con Thảo viết hồi tháng Ba mà bà Hoa nộp lúc nhập viện, cuộn băng BS. Kha phỏng vấn nó tháng Chín, và sổ trực điện thoại.",
    ]),
    clock: "06:10",
  },
  {
    id: "q2", stage: 1, title: "Đêm trực 2",
    ask: "So lời Thảo nói về anh Khoa với lời Thảo nói về mẹ, đặt cạnh sách giáo khoa. Chỉ ra một câu Thảo nói về mẹ và một câu Thảo nói về anh Khoa: câu nào khớp sách, câu nào không. Điện thoại cho thấy điều gì?",
    parts: [
      { id: "line", type: "line", label: "Một câu Thảo nêu khác biệt cụ thể, kiểm chứng được (bấm vào câu trong biên bản phỏng vấn)" },
      { id: "khoa", type: "line", label: "Một câu Thảo nói về anh Khoa đúng như sách mô tả (bấm vào câu trong biên bản phỏng vấn)" },
      { id: "phone", type: "text", label: "Ngày Thảo nghe giọng bà Hoa qua điện thoại và không nhận ra (ngày/tháng)", placeholder: "vd 1/9" },
      P(["Lời Thảo nói về mẹ và về anh Khoa", "Mô tả bệnh trong sách", "Tài liệu về cuộc điện thoại"]),
    ],
    memo: log([
      "Sổ giao ca, sáng 17/10. BS. Vân không tăng liều. BS. Kha biết, ông không vui.",
      "Bác sĩ nhờ tôi lục thêm giấy tờ. Tôi lục được sổ căng tin và hồ sơ cũ của bà Hoa ở bệnh viện tỉnh. Bà Tư hàng xóm cũng nhắn vào mấy lời.",
      "Tôi để kèm hai tấm ảnh bàn tay, một tấm con Thảo giữ trong ví, một tấm tôi chụp hôm thứ Bảy.",
    ]),
    clock: "06:05",
  },
  {
    id: "q3", stage: 2, title: "Đêm trực 3",
    ask: "Kiểm chứng ba chi tiết Thảo nêu. Năm 1985 bà Hoa bị sốc phản vệ vì gì? Bà Hoa đã đeo nhẫn cưới bao nhiêu năm tính tới 1996? Ngày 12/10, bà Hoa ăn món gì ở căng tin? Ai đã giết con Mực?",
    parts: [
      { id: "allergen", type: "choice", label: "Chất làm bà Hoa sốc phản vệ năm 1985", options: ["Penicillin", "Tôm", "Đậu phộng", "Ong đốt", "Thuốc tê"] },
      { id: "ring", type: "number", label: "Số năm bà Hoa đeo nhẫn cưới, tính tới năm 1996", unit: "năm" },
      { id: "dish", type: "choice", label: "Món bà Hoa ăn ở căng tin ngày 12/10", options: ["Cháo trắng", "Bánh bò", "Gỏi tôm", "Cháo tôm", "Phở bò", "Bánh căn"] },
      { id: "dog", type: "choice", label: "Người giết con Mực", options: ["Bà Tư hàng xóm", "Thảo", "Bà Hoa", "Anh Khoa", "Không ai: con Mực ăn phải bả chuột"] },
      P(["Bằng chứng về dị ứng của bà Hoa", "Bằng chứng về món ăn ở căng tin", "Bằng chứng về chiếc nhẫn", "Bằng chứng về con Mực"]),
    ],
    memo: log([
      "Sổ giao ca, trưa Chủ Nhật 20/10, để lại cho ca trực tối nay của BS. Vân. Chiều hôm qua, thứ Bảy, bà Hoa vào thăm. Có ghi băng như mọi lần.",
      "BS. Kha đọc ghi chú của BS. Vân, rồi viết vào sổ một trang cho bác sĩ. Ông nói thẳng: ba tháng ở Sài Gòn người ta đổi giọng đổi khẩu vị là chuyện thường; còn bà ấy biết hết chuyện nhà, một người lạ thì biết sao được.",
      "Đêm qua, rạng sáng nay, tôi để máy ghi âm trong phòng 7 như bác sĩ dặn. Tôi chưa dám nghe lại. Lúc ba giờ tôi đi ngang, có nghe tiếng ai ru.",
      "Bưu điện có chuyển tới mấy lá thư bà Hoa gửi từ Sài Gòn hồi tháng Năm tháng Sáu mà con Thảo cất trong tủ. Và một gói từ Đà Nẵng, bà con bên ngoại con Thảo gửi vào theo thư bác sĩ hỏi.",
    ]),
    clock: "12:00",
  },
  {
    id: "q4", stage: 3, title: "Đêm trực 4",
    ask: "Nghe băng Tết 1990 và băng buổi thăm 19/10, so cách xưng hô và bài ru. BS. Kha nói người lạ không thể biết hết chuyện nhà: theo thư và gia phả, ai đã có thể biết?",
    parts: [
      { id: "goi", type: "choice", label: "Chữ Thảo và bà Hoa trong băng 1990 dùng để gọi mẹ", options: ["Mẹ", "Má", "U", "Bầm", "Mợ"] },
      { id: "lo", type: "choice", label: "Chữ người phụ nữ dùng để tự xưng với Thảo, ít nhất một lần, ngày 19/10", options: ["Mẹ", "Má", "U", "Bầm", "Mợ"] },
      { id: "ru_hoa", type: "choice", label: "Bài ru của bà Hoa (băng 1990)", options: ["Ví dầu cầu ván đóng đinh", "Bồng bồng mẹ bế con sang", "Ầu ơ… Gió mùa thu mẹ ru con ngủ", "Con cò bé bé"] },
      { id: "ru_la", type: "choice", label: "Bài ru của người phụ nữ (băng 19/10)", options: ["Ví dầu cầu ván đóng đinh", "Bồng bồng mẹ bế con sang", "Ầu ơ… Gió mùa thu mẹ ru con ngủ", "Con cò bé bé"] },
      { id: "where", type: "choice", label: "Người phụ nữ lớn lên ở đâu", options: ["Đà Nẵng", "Huế", "Đà Lạt", "Sài Gòn", "Cần Thơ", "Hà Nội"] },
      { id: "twin", type: "text", label: "Tên người trong gia phả đã có thể nghe kể hết chuyện nhà", placeholder: "tên" },
      P(["Băng có giọng bà Hoa năm 1990", "Băng có giọng người phụ nữ hôm nay", "Tài liệu cho biết ai có thể biết hết chuyện nhà"]),
    ],
    memo: log([
      "Sổ giao ca, sáng 21/10. Đêm qua có người đứng ngoài ô kính phòng 7. Tôi chạy ra thì hành lang trống, trên kính còn vết thở và dấu tay.",
      "Chuyện gì trong ca tôi cũng ghi vào sổ giao ca, bác sĩ tự đọc.",
      "Tôi để lên bàn bác sĩ tấm ảnh Tết con Thảo giữ, tấm ảnh tôi chụp bà Hoa tuần trước, và một bài báo khoa học bác sĩ nhờ thư viện tìm. Con Thảo vẽ một tấm tranh mới. Tôi không muốn nhìn lâu.",
    ]),
    clock: "05:50",
  },
  {
    id: "q5", stage: 4, title: "Đêm trực 5",
    ask: "Người phụ nữ là ai so với bà Hoa? So từng đặc điểm với bà Hoa năm 1990 (chỉ dựa vào những gì hồ sơ đang có). Vậy người phụ nữ là ai?",
    parts: [
      { id: "kind", type: "choice", label: "Quan hệ của người phụ nữ với bà Hoa", options: ["Chính là bà Hoa, đã thay đổi sau ba tháng", "Em sinh đôi khác trứng, chỉ hao hao giống", "Em sinh đôi cùng trứng, giống y hệt cùng bên", "Em sinh đôi cùng trứng, kiểu soi gương", "Người lạ phẫu thuật cho giống"] },
      { id: "ruoi", type: "choice", label: "Nốt ruồi khoé miệng", options: ["Cùng bên với bà Hoa năm 1990", "Ngược bên với bà Hoa năm 1990", "Hồ sơ hiện có chưa cho biết"] },
      { id: "ngoi", type: "choice", label: "Đường rẽ ngôi", options: ["Cùng bên với bà Hoa năm 1990", "Ngược bên với bà Hoa năm 1990", "Hồ sơ hiện có chưa cho biết"] },
      { id: "tay", type: "choice", label: "Tay cầm đũa", options: ["Cùng bên với bà Hoa năm 1990", "Ngược bên với bà Hoa năm 1990", "Hồ sơ hiện có chưa cho biết"] },
      { id: "seo", type: "choice", label: "Sẹo mổ ruột thừa", options: ["Cùng bên với bà Hoa năm 1990", "Ngược bên với bà Hoa năm 1990", "Hồ sơ hiện có chưa cho biết"] },
      { id: "who", type: "choice", label: "Người phụ nữ ở phòng thăm nuôi là", options: ["Lê Thị Hoa, mẹ Thảo, đã đổi khác sau ba tháng ở Sài Gòn", "Lê Thị Huệ, em bà Hoa, mang tên con nuôi Phạm Thị Huệ", "Bà Tư hàng xóm, biết hết chuyện nhà, đóng giả bà Hoa", "Một người lạ ở Sài Gòn, được thuê sửa mặt và đóng giả"] },
      P(["Hai khuôn mặt cần so", "Tài liệu khoa học về sinh đôi", "Bằng chứng khác về người phụ nữ"]),
    ],
    memo: log([
      "Sổ giao ca, chiều 24/10, để lại cho ca trực tối nay của BS. Vân. Hôm qua phòng hành chính nhận được thư hồi âm của phường 2, quận 4, thành phố Hồ Chí Minh, theo công văn BS. Vân gửi tuần trước. Có giấy chứng tử bản sao.",
      "Hồ sơ cũ của bà Hoa ở bệnh viện tỉnh tôi lục thêm được tờ mổ ruột thừa năm 1970. Công an phường cho chụp lại chứng minh nhân dân của bà Hoa, cấp năm 1980.",
      "Chiều nay bà Hoa gửi vào khoa một hộp bánh cho con Thảo, nói là bánh ít đậu xanh nhà làm. Tôi để hộp bánh trên bàn trực.",
    ]),
    clock: "17:30",
  },
  {
    id: "q6", stage: 5, title: "Đêm trực 6",
    ask: "Điền bản giám định pháp y tâm thần mà toà chờ ngày 28/10. Người được chôn ở Sài Gòn dưới tên Phạm Thị Huệ là ai, chết vì gì? Hai dấu vân tay thuộc loại nào? Trong hộp bánh có gì? Động cơ là gì? Và kết luận của bạn về Thảo.",
    parts: [
      { id: "buried", type: "choice", label: "Người được chôn ở Sài Gòn dưới tên Phạm Thị Huệ", options: ["Phạm Thị Huệ", "Lê Thị Hoa", "Một người vô danh"] },
      { id: "cause", type: "choice", label: "Nguyên nhân chết thật", options: ["Đột quỵ do cao huyết áp", "Sốc phản vệ do ăn tôm", "Ngộ độc thuốc diệt chuột", "Nhồi máu cơ tim cấp", "Đuối nước khi tắm sông"] },
      { id: "fp_cmnd", type: "choice", label: "Vân tay ngón trỏ phải trên CMND của bà Hoa (1980)", options: ["Cung", "Móc", "Xoáy"] },
      { id: "fp_form", type: "choice", label: "Dấu điểm chỉ trên giấy cam đoan nhập viện (20/8/1996)", options: ["Cung", "Móc", "Xoáy"] },
      { id: "cake", type: "choice", label: "Nhân thật của bánh trong hộp", options: ["Đậu xanh", "Tôm chấy", "Ruốc thịt heo", "Đậu phộng rang", "Dừa", "Thuốc an thần nghiền"] },
      { id: "why", type: "choice", label: "Động cơ", options: ["Trả thù vì năm 1945 bị gia đình cho đi làm con nuôi", "Làm người giám hộ để bán nhà và vườn của Thảo", "Muốn được sống bên đứa cháu gái duy nhất của mình", "Lấy lại phần đất hương hoả họ Lê ở làng Phong Lệ"] },
      { id: "xe", type: "choice", label: "Tờ giấy xé trong giỏ rác phòng thăm viết", options: ["Toà xử xong bán nhà vườn rồi về Đà Nẵng", "Toà xử xong đưa con bé về Sài Gòn chữa", "Toà xử xong bán nhà vườn rồi về Sài Gòn", "Toà xử xong bán nhà vườn chia đôi cho Thảo"] },
      { id: "capgras", type: "choice", label: "Kết luận 1 · Hội chứng Capgras ở Trần Ngọc Thảo", options: ["Không có", "Có, đối với một số người quen", "Có, đối với tất cả người thân"] },
      { id: "nangluc", type: "choice", label: "Kết luận 2 · Năng lực hành vi dân sự", options: ["Mất năng lực hành vi dân sự", "Hạn chế năng lực hành vi dân sự", "Đủ năng lực hành vi dân sự"] },
      { id: "loikhai", type: "choice", label: "Kết luận 3 · Lời khai của Thảo về mẹ", options: ["Hoang tưởng hoàn toàn", "Một phần đúng, một phần hoang tưởng", "Đúng sự thật", "Chưa đủ cơ sở kết luận"] },
      P(["Bằng chứng người được chôn là ai", "Bằng chứng về hai dấu vân tay", "Bằng chứng về hộp bánh hoặc động cơ"]),
    ],
    memo: "",
    clock: "05:30",
  },
];

export const START_CLOCK = "22:00";
export const END_CLOCK = "06:30";
