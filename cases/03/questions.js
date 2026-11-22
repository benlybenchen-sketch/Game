// Case 03 "Cầu cơ": the seven nights (public part). Answers live in secret.js.
// The memo of each question is the letter bà Dung leaves on the table the next morning.
import { letter, coName, hexName, given } from "./name.js";

export const PEOPLE = ["Phạm Văn Tùng", "Võ Thị Bạch Yến", "Lưu Kiến Quốc", "Đoàn Minh Khiêm", "Trịnh Bảo Nghi", "Hà Ngọc Lan", "Lâm Hạnh Dung", "Ông Bảy gác dan"];
const pins = { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" };
const nameFirst = () => [given(), coName(), hexName(), "em"];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Tùng rơi",
    ask: "Giải hai lời con cơ đánh ra: lời báo tử đầu tiên năm 1971 và lời đêm nay. Ai ngồi vị trí tay chủ, người dẫn con cơ? (Sổ cơ buổi 1 không ghi tên.)",
    parts: [
      { id: "m71", type: "text", label: "Lời cơ 2/10/1971 (viết có dấu hay không dấu đều được)", placeholder: "vd: bạch lan" },
      { id: "m04", type: "text", label: "Lời cơ đêm nay, 7/11/2004", placeholder: "" },
      { id: "chu", type: "choice", label: "Người ngồi tay chủ", options: PEOPLE.slice(0, 7) },
      pins,
    ],
    memo: () => letter(1, () => [
      "Cháu ngủ có ngon không? Đêm qua bà nghe cháu trở mình hoài.",
      "Bà đọc tờ giấy cháu để quên trên bàn: con cơ hỏi “chị Lan đâu”. Lan chết năm 1971 rồi cháu, chết cháy trên gác thượng. Ma cỏ nó gọi bậy, cháu đừng để bụng.",
      "Hôm nay bà để sẵn trang sổ cơ đêm thứ hai do Yến ghi, cuộn băng thứ hai của Tùng, và mấy tờ giấy của cảnh sát hồi đó. Đêm đó có tiếng gõ. Bà nhớ tiếng gõ đó tới giờ.",
      "Trà sen bà pha sẵn trong bình. Cháu chưa uống ngụm nào.",
    ]),
    clock: "06:40",
  },
  {
    id: "q2", stage: 1, title: "Tiếng gõ dưới gầm bàn",
    ask: "Giải lời báo tử gõ bằng Morse đêm 9/10/1971 và lời con cơ gõ đêm nay. Tiếng gõ năm 1971 phát ra từ đâu? Chỉ ra câu trong hồ sơ cho biết ai trong nhóm có thể tạo ra tiếng gõ đó.",
    parts: [
      { id: "m71", type: "text", label: "Lời cơ 9/10/1971 (gõ trên băng)" },
      { id: "m04", type: "text", label: "Lời cơ đêm nay, 8/11/2004" },
      { id: "src", type: "choice", label: "Tiếng gõ trên băng năm 1971 phát ra từ", options: [
        "Con cơ (chén sứ) gõ xuống mặt bàn", "Ngón tay gõ lên mặt bàn", "Gót guốc gỗ gõ xuống sàn gỗ dưới gầm bàn", "Cánh cửa ban công đập trong gió", "Có người đi trên gác thượng"] },
      { id: "guoc", type: "line", label: "Câu cho biết người có thể tạo ra tiếng gõ đó (bấm vào câu trong một tài liệu)" },
      pins,
    ],
    memo: () => letter(2, () => [
      "Em lạnh. Cháu viết hai chữ đó to tướng trong sổ.",
      "Yến chết dưới hồ sen sau vườn. Ba mươi ba năm nay bà không ra tới bờ hồ. Cháu cũng đừng ra, giao kèo có ghi.",
      "Hôm nay bà đưa cháu tập thơ của Yến, trang sổ cơ do Quốc ghi, và tờ giấy gấp tư trong túi xách của Yến mà mẹ nó gửi cho bà. Yến thương bà nhất.",
      "Bà có lỡ thấy cuốn sổ tay của cháu để mở trên bàn. Bà không cố ý đọc đâu.",
    ]),
    clock: "06:35",
  },
  {
    id: "q3", stage: 2, title: "Tay chủ",
    ask: "Giải lời báo tử năm 1971 giấu trong bài thơ con cơ “đọc”, lời giấu trong bài thơ cuối cùng của Yến, và lời con cơ đêm nay. Lời giấu của Yến nói ai đẩy con cơ? Chỉ ra câu trong sổ cơ cho thấy người đó đã ra tay với Quốc thế nào.",
    parts: [
      { id: "m71", type: "text", label: "Lời giấu trong bài thơ của con cơ, 16/10/1971" },
      { id: "yen", type: "text", label: "Lời giấu trong bài thơ cuối của Yến" },
      { id: "m04", type: "text", label: "Lời con cơ đêm nay (sau tên của bạn)", prefix: nameFirst },
      { id: "tra", type: "line", label: "Câu trong sổ cơ buổi 3 cho thấy cách Quốc bị đầu độc (bấm vào câu đó)" },
      pins,
    ],
    memo: () => letter(3, () => [
      "Đêm qua con cơ đánh tên cháu. Cháu có nói tên cháu cho ai trong nhà này đâu?",
      "Còn hai chữ “tay trái” thì bà không hiểu. Bà thuận tay phải từ nhỏ, cháu thấy bà ký giao kèo rồi đó.",
      "Hôm nay bà đưa cháu vở của Quốc, trang sổ thuốc nhà nó, và trang sổ cơ Khiêm ghi. Đêm đó có tờ giấy dưới chén. Bà nhớ Lan là người lật chén lên.",
    ]),
    clock: "06:20",
  },
  {
    id: "q4", stage: 3, title: "Bà sửa giấy",
    ask: "Giải tờ giấy số Tô Châu dưới chén đêm 23/10/1971 và lời con cơ đêm nay. Rồi đối chiếu bản chép của bạn với bản nhật ký bà Dung đưa hôm nay: chỉ ra câu đã bị sửa, và ai sửa.",
    parts: [
      { id: "m71", type: "text", label: "Lời trên tờ giấy dưới chén, 23/10/1971" },
      { id: "m04", type: "text", label: "Lời con cơ đêm nay, 10/11/2004" },
      { id: "line", type: "line", label: "Câu bị sửa trong bản nhật ký hôm nay (bấm vào câu đó)" },
      { id: "who", type: "choice", label: "Người sửa nhật ký", options: ["Ông Bảy gác dan, người giữ chìa khóa nhà", "Bà chủ nhà, người xưng là Lâm Hạnh Dung", "Dung tự sửa từ năm 1971", "Cảnh sát, lúc lưu hồ sơ năm 1971", "Hồn ma trong nhà", "Bạn chép sai từ đêm đầu"] },
      pins,
    ],
    memo: () => letter(4, () => [
      "Cháu hỏi ai sửa giấy. Giấy ba mươi ba năm, mực nhòe, chữ phai. Có khi cháu chép sai từ đêm đầu đó cháu.",
      "Hôm nay bà đưa cháu hai cuốn Kiều: cuốn của Khiêm, cảnh sát trả lại năm 1972, và cuốn của Lan. Với trang sổ cơ Nghi ghi, và lá thư nó viết cho chị nó mà không kịp gửi.",
      "Từ tối nay bà sẽ khóa tủ. Không phải bà không tin cháu.",
    ]),
    clock: "05:55",
  },
  {
    id: "q5", stage: 4, title: "Hai cuốn Kiều",
    ask: "Giải lời báo tử đêm 30/10/1971 và lời con cơ đêm nay. Mỗi lời được soạn bằng cuốn Kiều nào? Chỉ ra câu trong sổ cơ cho thấy ai đã dò lời năm 1971.",
    parts: [
      { id: "m71", type: "text", label: "Lời cơ 30/10/1971" },
      { id: "m04", type: "text", label: "Lời con cơ đêm nay, 11/11/2004" },
      { id: "book", type: "choice", label: "Cuốn Kiều khớp với lời cơ năm 1971", options: ["Cuốn chú giải của Khiêm, bản 3.254 câu", "Cuốn in ở Huế của Lan, bản 3.252 câu", "Cả hai cuốn đều khớp với lời cơ", "Không cuốn nào khớp với lời cơ"] },
      { id: "sach", type: "line", label: "Câu trong sổ cơ cho thấy ai đã dò lời năm 1971, và bằng sách nào (bấm vào câu đó)" },
      pins,
    ],
    memo: () => letter(5, () => [
      "Cháu viết là Lan soạn những lời đó. Không phải đâu cháu. Lan chết rồi. Người chết thì soạn được gì.",
      "Đêm qua bà nghe tiếng guốc trên cầu thang gác. Nhà này không còn đôi guốc nào hết.",
      "Tối nay cháu lau giùm bà cái khung di ảnh bà trẻ trên tường. Bà không dám lại gần tấm kính đó.",
    ]),
    clock: "05:40",
  },
  {
    id: "q6", stage: 5, title: "Người mang tên em",
    ask: "Đọc lời con cơ đánh ngược đêm nay. Cái xác cháy trên gác thượng đêm 6/11/1971 là của ai, và câu nào trong biên bản khám nghiệm chứng minh điều đó? Đối chiếu nhật ký thêm một lần nữa.",
    parts: [
      { id: "m04", type: "text", label: "Lời con cơ đêm nay, đọc xuôi (có thể kèm tên của bạn)", prefix: nameFirst },
      { id: "body", type: "choice", label: "Xác cháy trên gác thượng là của", options: ["Hà Ngọc Lan", "Lâm Hạnh Dung", "Trịnh Bảo Nghi", "Bà Lâm Ngọc Diệp", "Một người lạ"] },
      { id: "proof", type: "line", label: "Câu trong biên bản khám nghiệm chứng minh xác đó là ai (bấm vào câu đó; không phải câu chỉ chứng minh án mạng)" },
      { id: "seo", type: "line", label: "Hôm nay nhật ký của bà Dung lại có thêm một câu bị sửa. Bấm vào câu đó" },
      pins,
    ],
    memo: () => letter(6, () => [
      "Cháu đã đọc mấy tờ giấy sau di ảnh. Bà biết, vì cái khung ảnh treo lệch.",
      "Đêm nay là đêm cuối. Cháu đọc giùm bà mấy cái quẻ, rồi sáng mai cháu muốn đi đâu thì đi, thù lao bà để sẵn.",
      "Trà bà pha rồi. Đêm nay cháu uống với bà một chung. Một chung thôi, cho bà vui.",
    ]),
    clock: "05:10",
  },
  {
    id: "q7", stage: 6, title: "Quẻ họ Lâm",
    ask: "Giải bốn mươi ba quẻ họ Lâm (có thể kèm những quẻ con cơ đánh đêm nay). Bà chủ nhà thật ra là ai? Bà ta đã giết bao nhiêu người, vì sao, và vì sao lại thuê bạn?",
    parts: [
      { id: "msg", type: "text", label: "Lời giải các quẻ (viết liền một hàng, có dấu hay không đều được)", prefix: nameFirst },
      { id: "who", type: "choice", label: "Bà chủ nhà thật ra là", options: PEOPLE.slice(5, 7).concat(["Bà Lâm Ngọc Diệp", "Chị của Nghi"]) },
      { id: "n", type: "number", label: "Số người bà ta đã giết năm 1971", unit: "người" },
      { id: "why", type: "choice", label: "Động cơ năm 1971", options: ["Trả thù cho người cha chết ở Huế năm 1968", "Chiếm thân phận, căn nhà và số vàng của Lâm Hạnh Dung", "Ghen vì Yến được bà Diệp và cả nhóm thương hơn", "Bịt miệng cả nhóm sau một tai nạn năm 1970", "Bị hồn bà Diệp nhập trong buổi cơ đầu tiên"] },
      { id: "hire", type: "choice", label: "Vì sao bà ta thuê bạn", options: ["Để có một người lạ làm chứng rằng con cơ tự chạy", "Vì cần người đọc tiếng Pháp để giải quẻ, tìm vàng", "Vì cần người giải được mã Morse và mã của Tùng", "Để đầu độc thêm một người cho đủ bảy mạng người"] },
      pins,
    ],
    memo: "",
    clock: "05:00",
  },
];

export const START_CLOCK = "22:40";
export const END_CLOCK = "06:15";
