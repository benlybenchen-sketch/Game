// Case 04 "Người mẹ khác": six night shifts of Dr. Lê Bích Vân (public part). Answers live in secret.js.
// The memo of each question is nurse Sương's ward log for the next morning; it reports Thảo at her current dose.
import { doseNote } from "./dose.js";

const pins = { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" };
const log = (lines) => () => [...lines, `Phòng 7: ${doseNote()}`].join("\n");

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Hồ sơ phòng 7",
    ask: "Đọc hồ sơ nhập viện của Trần Ngọc Thảo. BS. Kha chẩn đoán gì? Thảo bị chấn thương sọ não ngày nào? Bà Hoa ở Sài Gòn bao nhiêu ngày, và ngày đầu tiên Thảo nói “bà không phải mạ” là ngày nào?",
    parts: [
      { id: "dx", type: "choice", label: "Chẩn đoán của BS. Kha", options: ["Tâm thần phân liệt thể hoang tưởng", "Hội chứng Capgras sau chấn thương sọ não", "Hội chứng Fregoli", "Trầm cảm có loạn thần", "Rối loạn phân ly"] },
      { id: "inj", type: "text", label: "Ngày Thảo bị chấn thương sọ não (ngày/tháng)", placeholder: "vd 1/1" },
      { id: "days", type: "number", label: "Số ngày bà Hoa ở Sài Gòn (tính từ ngày đi tới ngày về)", unit: "ngày" },
      { id: "first", type: "text", label: "Ngày đầu tiên Thảo nói “bà không phải mạ” (ngày/tháng)", placeholder: "vd 1/1" },
      pins,
    ],
    memo: log([
      "Sổ giao ca, sáng 15/10. Đêm qua BS. Vân ngồi ở phòng trực tới 4 giờ sáng đọc hồ sơ phòng 7.",
      "Tôi nói thật với bác sĩ: tôi trực khoa này hai mươi năm, người bệnh Capgras tôi gặp năm người. Không ai kể về người nhà mình kỹ như con nhỏ này.",
      "Sáng nay tôi để lên bàn bác sĩ cuốn sách tâm thần học của khoa, cuốn nhật ký con Thảo viết hồi tháng Ba mà bà Hoa nộp lúc nhập viện, cuộn băng BS. Kha phỏng vấn nó tháng Chín, và sổ trực điện thoại.",
    ]),
    clock: "06:10",
  },
  {
    id: "q2", stage: 1, title: "Hai kiểu “không phải”",
    ask: "So lời Thảo nói về anh Khoa với lời Thảo nói về mẹ, đặt cạnh sách giáo khoa. Chỉ ra một câu trong biên bản phỏng vấn mà Thảo nêu khác biệt cụ thể về mẹ. Lời kể về mẹ có khớp kiểu Capgras điển hình không? Bạn ra y lệnh gì?",
    parts: [
      { id: "line", type: "line", label: "Một câu Thảo nêu khác biệt cụ thể, kiểm chứng được (bấm vào câu trong biên bản phỏng vấn)" },
      { id: "fit", type: "choice", label: "Lời kể của Thảo về mẹ so với Capgras điển hình", options: [
        "Giống hệt: chỉ cảm thấy lạ, không nêu được khác biệt nào",
        "Khác: nêu khác biệt cụ thể, kiểm chứng được, và không nhận cả giọng mẹ qua điện thoại",
        "Không so được vì Thảo không chịu nói",
      ] },
      { id: "order", type: "choice", label: "Y lệnh của bạn đêm nay", options: [
        "Tăng liều Haloperidol để cắt hoang tưởng",
        "Giữ liều, chưa kết luận, kiểm chứng từng chi tiết Thảo nêu",
        "Đề nghị sốc điện",
        "Cho xuất viện ngay về với mẹ",
      ] },
      pins,
    ],
    memo: log([
      "Sổ giao ca, sáng 17/10. BS. Vân không tăng liều. BS. Kha biết, ông không vui.",
      "Bác sĩ hỏi tôi chuyện con chó Mực và chuyện bà Hoa ăn gì ở căng tin. Tôi đi lục sổ căng tin cho bác sĩ, rồi lục luôn hồ sơ cũ của bà Hoa ở bệnh viện tỉnh.",
      "Tôi để kèm hai tấm ảnh bàn tay, một tấm con Thảo giữ trong ví, một tấm tôi chụp hôm thứ Bảy. Bác sĩ nhìn ngón áp út.",
    ]),
    clock: "06:05",
  },
  {
    id: "q3", stage: 2, title: "Ba thứ không giả được",
    ask: "Kiểm chứng ba chi tiết Thảo nêu. Năm 1985 bà Hoa bị sốc phản vệ vì gì? Bà Hoa đã đeo nhẫn cưới bao nhiêu năm tính tới 1996? Ngày 12/10, “bà Hoa” ăn món gì ở căng tin? Ai đã giết con Mực?",
    parts: [
      { id: "allergen", type: "choice", label: "Chất làm bà Hoa sốc phản vệ năm 1985", options: ["Thuốc kháng sinh penicillin", "Tôm", "Đậu phộng", "Ong đốt", "Thuốc gây tê"] },
      { id: "ring", type: "number", label: "Số năm bà Hoa đeo nhẫn cưới, tính tới năm 1996", unit: "năm" },
      { id: "dish", type: "choice", label: "Món “bà Hoa” ăn ở căng tin ngày 12/10", options: ["Cháo trắng", "Bánh bò", "Gỏi tôm", "Phở bò", "Bánh căn"] },
      { id: "dog", type: "choice", label: "Người giết con Mực", options: ["Hàng xóm bà Tư", "Thảo", "Người phụ nữ xưng là bà Hoa", "Con Mực ăn bả chuột ngoài chợ"] },
      pins,
    ],
    memo: log([
      "Sổ giao ca, sáng 19/10. Hôm qua là thứ Bảy, bà Hoa vào thăm. Có ghi băng như mọi lần.",
      "BS. Kha đọc ghi chú của BS. Vân, rồi viết vào sổ một trang cho bác sĩ. Ông nói thẳng: ba tháng ở Sài Gòn người ta đổi giọng đổi khẩu vị là chuyện thường; còn bà ấy biết hết chuyện nhà, một người lạ thì biết sao được.",
      "Đêm qua tôi để máy ghi âm trong phòng 7 như bác sĩ dặn. Tôi chưa dám nghe lại. Lúc ba giờ tôi đi ngang, có nghe tiếng ai ru.",
      "Bưu điện có chuyển tới mấy lá thư bà Hoa gửi từ Sài Gòn hồi tháng Năm tháng Sáu mà con Thảo cất trong tủ. Và một gói từ Huế, bà con bên ngoại con Thảo gửi vào theo thư bác sĩ hỏi.",
    ]),
    clock: "06:20",
  },
  {
    id: "q4", stage: 3, title: "Tiếng ru",
    ask: "Nghe băng Tết 1990 và băng buổi thăm 19/10. Thảo gọi mẹ bằng chữ gì, và người phụ nữ lỡ miệng xưng bằng chữ gì? Bà Hoa ru bài gì, người phụ nữ ru bài gì? Người phụ nữ lớn lên ở đâu? Theo gia phả, bà Hoa có người em tên gì?",
    parts: [
      { id: "goi", type: "choice", label: "Chữ Thảo và bà Hoa trong băng 1990 dùng để gọi mẹ", options: ["Mẹ", "Má", "Mạ", "U", "Bầm"] },
      { id: "lo", type: "choice", label: "Chữ người phụ nữ lỡ miệng xưng ngày 19/10", options: ["Mẹ", "Má", "Mạ", "U", "Bầm"] },
      { id: "ru_hoa", type: "choice", label: "Bài ru của bà Hoa (băng 1990)", options: ["Ví dầu cầu ván đóng đinh", "Bồng bồng mẹ bế con sang", "Ầu ơ… Gió mùa thu mẹ ru con ngủ", "Con cò bé bé"] },
      { id: "ru_la", type: "choice", label: "Bài ru của người phụ nữ (băng 19/10)", options: ["Ví dầu cầu ván đóng đinh", "Bồng bồng mẹ bế con sang", "Ầu ơ… Gió mùa thu mẹ ru con ngủ", "Con cò bé bé"] },
      { id: "where", type: "choice", label: "Người phụ nữ lớn lên ở đâu", options: ["Huế", "Đà Lạt", "Sài Gòn", "Hà Nội"] },
      { id: "twin", type: "text", label: "Tên người em của bà Hoa trong gia phả", placeholder: "một chữ" },
      pins,
    ],
    memo: log([
      "Sổ giao ca, sáng 21/10. Đêm qua có người đứng ngoài ô kính phòng 7. Tôi chạy ra thì hành lang trống, trên kính còn vết thở và dấu tay.",
      "BS. Vân dặn tôi để ý bà Hoa cầm đũa tay nào. Tôi để ý rồi: lúc tưởng không ai nhìn, bà cầm tay trái. Thấy tôi là bà đổi qua tay phải.",
      "Tôi để lên bàn bác sĩ tấm ảnh Tết con Thảo giữ, tấm ảnh tôi chụp bà Hoa tuần trước, và một bài báo khoa học bác sĩ nhờ thư viện tìm. Con Thảo vẽ một tấm tranh mới. Tôi không muốn nhìn lâu.",
    ]),
    clock: "05:50",
  },
  {
    id: "q5", stage: 4, title: "Soi gương",
    ask: "Chồng hai chân dung lên nhau. Người phụ nữ là ai so với bà Hoa? Những đặc điểm nào bị đảo bên? Người phụ nữ thật ra là ai?",
    parts: [
      { id: "kind", type: "choice", label: "Quan hệ của người phụ nữ với bà Hoa", options: ["Chính là bà Hoa, đã thay đổi sau ba tháng", "Em sinh đôi khác trứng", "Em sinh đôi cùng trứng, kiểu soi gương", "Người lạ phẫu thuật cho giống"] },
      { id: "traits", type: "choice", label: "Các đặc điểm bị đảo bên", options: ["Nốt ruồi, đường rẽ ngôi, tay thuận", "Nốt ruồi, màu mắt, giọng nói", "Vết nhẫn, nốt ruồi, chiều cao", "Không có gì đảo bên"] },
      { id: "who", type: "choice", label: "Người phụ nữ xưng là bà Hoa thật ra là", options: ["Lê Thị Hoa", "Lê Thị Huệ (tên con nuôi Phạm Thị Huệ)", "Bà Tư hàng xóm", "Một người lạ ở Sài Gòn"] },
      pins,
    ],
    memo: log([
      "Sổ giao ca, sáng 23/10. Phòng hành chính nhận được thư hồi âm của phường 2, quận 4, thành phố Hồ Chí Minh, theo công văn BS. Vân gửi tuần trước. Có giấy chứng tử bản sao.",
      "Hồ sơ cũ của bà Hoa ở bệnh viện tỉnh tôi lục thêm được tờ mổ ruột thừa năm 1970. Công an phường cho chụp lại chứng minh nhân dân của bà Hoa, cấp năm 1980.",
      "Chiều nay bà Hoa gửi vào khoa một hộp bánh cho con Thảo, nói là bánh ít đậu xanh nhà làm. Tôi để hộp bánh trên bàn trực.",
    ]),
    clock: "06:00",
  },
  {
    id: "q6", stage: 5, title: "Bản giám định",
    ask: "Điền bản giám định pháp y tâm thần mà toà chờ ngày 28/10. Người được chôn ở Sài Gòn dưới tên Phạm Thị Huệ là ai, chết vì gì? Hai dấu vân tay thuộc loại nào? Trong hộp bánh có gì? Động cơ là gì? Và kết luận của bạn về Thảo.",
    parts: [
      { id: "buried", type: "choice", label: "Người được chôn ở Sài Gòn dưới tên Phạm Thị Huệ", options: ["Phạm Thị Huệ", "Lê Thị Hoa", "Một người vô danh"] },
      { id: "cause", type: "choice", label: "Nguyên nhân chết thật", options: ["Đột quỵ", "Sốc phản vệ do ăn tôm", "Ngộ độc thuốc chuột", "Đuối nước"] },
      { id: "fp_cmnd", type: "choice", label: "Vân tay ngón trỏ phải trên CMND của bà Hoa (1980)", options: ["Cung", "Móc", "Xoáy"] },
      { id: "fp_form", type: "choice", label: "Dấu điểm chỉ trên giấy cam đoan nhập viện (20/8/1996)", options: ["Cung", "Móc", "Xoáy"] },
      { id: "cake", type: "choice", label: "Nhân thật của bánh trong hộp", options: ["Đậu xanh", "Tôm chấy", "Dừa", "Thuốc an thần nghiền"] },
      { id: "why", type: "choice", label: "Động cơ", options: ["Trả thù vì bị cho làm con nuôi", "Làm người giám hộ để bán nhà và vườn hoa đứng tên Thảo", "Muốn được ở với con gái", "Bị bệnh tâm thần"] },
      { id: "verdict", type: "choice", label: "Kết luận giám định về Trần Ngọc Thảo", options: [
        "Mất năng lực hành vi dân sự; cần người giám hộ",
        "Không có bệnh tâm thần; chẩn đoán Capgras là sai hoàn toàn",
        "Có hội chứng Capgras đối với một số người quen, nhưng vẫn đủ năng lực hành vi dân sự; lời khai về mẹ là sự thật",
        "Chưa đủ cơ sở kết luận; đề nghị toà hoãn và tiếp tục điều trị",
      ] },
      pins,
    ],
    memo: "",
    clock: "05:30",
  },
];

export const START_CLOCK = "22:00";
export const END_CLOCK = "06:30";
