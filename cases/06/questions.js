// Case 06 "Âm Hôn": six nights and the wedding night (public part). Answers live in secret.js.
// Every choice list keeps options of the same length and tone (docs/KE_HOACH.md, difficulty rules).

const pins = (n = 3) => ({ id: "pins", type: "pins", count: n, label: `Ghim ${n} tài liệu làm bằng chứng` });

export const OPTIONS_7 = [
  "A. Viết hôn thư như phu nhân dặn; giữ im lặng cho đến hết lễ; sáng sớm mai lên huyện báo quan; mang theo sổ thầy Khâu.",
  "B. Đêm nay đưa Tú Nương trốn qua cổng sau; thuê xe la lên huyện ngay; để lại thư cho lão gia; không kinh động họ tộc.",
  "C. Phá cửa Đông viện trước giờ Tý; đưa người bên trong ra trước họ tộc; giữ Tú Nương bên mình; mời cảnh sát làm chứng.",
  "D. Mở quan tài trước mặt họ tộc; chỉ ra xác chết không phải Thừa Tự; xin tộc trưởng hoãn lễ; giữ Tú Nương bên mình.",
  "E. Báo cảnh sát trấn rằng cô dâu còn sống; đưa Tú Nương về đồn ngay đêm nay; chưa động tới quan tài; xin hoãn lễ lại.",
  "F. Phá cửa Đông viện trước giờ Tý; đưa người bên trong ra trước họ tộc; để Tú Nương cạnh phu nhân; mời cảnh sát làm chứng.",
  "G. Phá cửa Đông viện sau giờ Tý; đưa người bên trong ra trước họ tộc; giữ Tú Nương bên mình; mời cảnh sát làm chứng.",
];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Canh thiếp không tên",
    ask: "Phu nhân nói canh thiếp không tên là của cô Lý Xuân Hoa. Tự tính tứ trụ của từng người có trong hồ sơ. Bát tự trên canh thiếp thật ra là của ai, người đó sinh ngày nào theo Tây lịch, và trụ nào phân biệt người đó với người có bát tự gần giống nhất?",
    parts: [
      { id: "who", type: "choice", label: "Bát tự trên canh thiếp là của", options: ["Lý Xuân Hoa", "Ôn Tú Nương", "Thuý Nhi", "Không khớp ai trong hồ sơ"] },
      { id: "ngay", type: "text", label: "Người đó sinh ngày (ngày/tháng/năm Tây lịch)", placeholder: "vd 1/1/1900" },
      { id: "tru", type: "choice", label: "Trụ phân biệt người đó với người có bát tự gần giống nhất", options: ["Trụ năm", "Trụ tháng", "Trụ ngày", "Trụ giờ"] },
      pins(),
    ],
    memo: [
      "Đêm 17, giờ Sửu. Canh thiếp không phải của người chết. Là của một cô gái đang ngủ cách tôi hai bức vách, ở Tây sương.",
      "Năm Kỷ Mùi mà trụ năm lại là Canh Thân: thầy Khâu dặn đúng chỗ này. Phu nhân không cần tôi chấm ngày. Phu nhân cần một người ký tên.",
      "Sáng mai tôi đi ngõ Liễu, tìm bà mối âm đã bán Lý Xuân Hoa.",
    ].join("\n"),
    clock: "01:40",
  },
  {
    id: "q2", stage: 1, title: "Bàn tính của bà mối âm",
    ask: "Đọc sổ của bà Hoàng (số tiền chỉ có trên hình bàn tính). Phu nhân đặt mua cô dâu chết Lý Xuân Hoa ngày nào âm lịch, giá bao nhiêu? Đặt sớm hơn ngày vớt được xác mấy ngày? Hôm trả hàng, bà Hoàng hoàn lại bao nhiêu?",
    parts: [
      { id: "ngay", type: "text", label: "Ngày đặt mua (ngày/tháng âm lịch)", placeholder: "vd 1/7" },
      { id: "gia", type: "number", label: "Giá đặt mua", unit: "đồng bạc" },
      { id: "som", type: "number", label: "Đặt sớm hơn ngày vớt được xác", unit: "ngày" },
      { id: "hoan", type: "number", label: "Số tiền hoàn lại hôm trả hàng", unit: "đồng bạc" },
      pins(),
    ],
    memo: [
      "Đêm 18. Bốn mươi đồng một cô dâu chết. Ngày mồng 9, khi sông Phần còn chưa trả xác.",
      "Phu nhân đã mua vợ cho con trước khi biết con chết. Bà Hoàng nhớ câu bà ấy nói: “sắp tìm thấy rồi”.",
      "Rồi ngày 12 bà ấy trả hàng. “Hàng tươi, nhà tôi tự lo.” Tôi đã thấy món hàng tươi ấy: nó bưng nước rửa mặt cho tôi sáng nay.",
      "Ngăn kéo lão gia có một tờ hối phiếu ghi bằng chữ lạ. Ôn Lão Tam đã đổi nó lấy bạc.",
    ].join("\n"),
    clock: "02:15",
  },
  {
    id: "q3", stage: 2, title: "Mật áp Nghĩa Thịnh Xương",
    ask: "Giải mật áp trên hối phiếu trả cho Ôn Lão Tam: tháng, ngày, số bạc. Hối phiếu được lập trước ngày vớt được xác mấy ngày?",
    parts: [
      { id: "thang", type: "number", label: "Tháng (âm lịch)", unit: "" },
      { id: "ngay", type: "number", label: "Ngày", unit: "" },
      { id: "tien", type: "number", label: "Số bạc", unit: "đồng" },
      { id: "truoc", type: "number", label: "Lập trước ngày vớt được xác", unit: "ngày" },
      pins(),
    ],
    memo: [
      "Đêm 19. Mồng 7 tháng Bảy. Thất tịch. Phu nhân lập phiếu mua Tú Nương ngay chiều hôm ấy, trước khi đêm Thất tịch xảy ra bất cứ chuyện gì.",
      "Một trăm hai mươi đồng: gấp ba lần một cô dâu chết.",
      "Ôn Lão Tam nói con trai ông đánh xe la đi đêm Thất tịch rồi không về. Sáng nay ngỗ tác Mã gửi tôi phiếu khám xác ông ấy bị bắt ký.",
    ].join("\n"),
    clock: "02:50",
  },
  {
    id: "q4", stage: 3, title: "Tẩy oan",
    ask: "Theo Tẩy Oan Tập Lục, người trong quan tài chết trước hay sau khi xuống nước: bấm câu chứng minh trong phiếu khám. Người ấy làm nghề gì? Bấm câu cho thấy người ấy không phải Triệu Thừa Tự.",
    parts: [
      { id: "chet", type: "line", label: "Câu trong phiếu khám quyết định người này chết trước hay sau khi xuống nước (bấm vào câu đó)" },
      { id: "nghe", type: "choice", label: "Người trong quan tài làm nghề", options: ["Người đọc sách", "Người chèo đò", "Thợ rèn", "Tá điền", "Phu dắt la"] },
      { id: "khong", type: "line", label: "Câu cho thấy người này không phải Triệu Thừa Tự (bấm vào câu trong phiếu khám)" },
      pins(),
    ],
    memo: [
      "Đêm 20. Người trong quan tài đã chết trước khi chạm nước: gáy vỡ, miệng không bọt, móng sạch. Bàn tay của một người dắt la.",
      "Thằng Thạch dắt la từ năm mười hai tuổi. Sợi chỉ đỏ ở cổ tay trái.",
      "Sáng mai tôi xin Lưu Phúc xem sổ phát tang. Tôi muốn biết hôm ấy ai đã khóc, và ai không.",
    ].join("\n"),
    clock: "03:30",
  },
  {
    id: "q5", stage: 4, title: "Ngũ phục",
    ask: "Đối chiếu sổ phát tang với Ngũ phục đồ. Bấm hai câu cho thấy hai người để tang không đúng với quan hệ của họ với người chết. Tú Nương để tang người chết với tư cách gì? Vậy người trong quan tài là ai?",
    parts: [
      { id: "a", type: "line", label: "Người thứ nhất (bấm vào câu)" },
      { id: "b", type: "line", label: "Người thứ hai (bấm vào câu)" },
      { id: "vai", type: "choice", label: "Tú Nương để tang người chết với tư cách", options: ["Vị hôn thê", "Em gái ruột", "Con gái", "Người hầu", "Bạn đến viếng"] },
      { id: "xac", type: "choice", label: "Người trong quan tài là", options: ["Triệu Thừa Tự", "Ôn Thạch", "Triệu Thừa Chí", "Một người lạ trôi sông"] },
      pins(),
    ],
    memo: [
      "Sáng 21. Một người mẹ không để tang con. Một cô hầu để tang anh ruột dưới lớp áo hầu.",
      "Người trong quan tài là Ôn Thạch. Phu nhân biết. Tú Nương biết từ hôm phát tang. Chỉ có lão gia là khóc thật.",
      "Còn Thừa Tự? Lưu Phúc vừa đưa tôi một xấp giấy phu nhân dặn đốt. Trong đó có trang cuối sổ tay thầy Khâu.",
    ].join("\n"),
    clock: "09:10",
  },
  {
    id: "q6", stage: 5, title: "Tân phòng",
    ask: "Giải câu đố chiết tự cuối cùng của thầy Khâu. “Triệu Thừa An” trong quá kế thư thật ra là ai? Ngày sinh ghi trong quá kế thư ứng với ngày nào Tây lịch? Nếu lễ diễn ra, theo hôn thư Tú Nương sẽ nằm cạnh ai?",
    parts: [
      { id: "chu", type: "text", label: "Hai chữ thầy Khâu giấu (âm Hán Việt hoặc chữ Hán)", placeholder: "" },
      { id: "an", type: "choice", label: "“Triệu Thừa An” trong quá kế thư thật ra là", options: ["Con trai Triệu Hoài Nghĩa", "Triệu Thừa Tự", "Triệu Thừa Chí", "Một đứa trẻ mua ở Hà Bắc"] },
      { id: "sinh", type: "text", label: "Ngày sinh trong quá kế thư, đổi ra Tây lịch (ngày/tháng/năm)", placeholder: "vd 1/1/1900" },
      { id: "canh", type: "choice", label: "Nếu lễ diễn ra, Tú Nương sẽ nằm cạnh", options: ["Triệu Thừa Tự", "Ôn Thạch", "Lý Xuân Hoa", "Không ai"] },
      pins(),
    ],
    memo: [
      "Đêm 21. Tân phòng. Người gọi “Tú Nương” trong Đông viện không phải hồn. Là cậu chủ, đang sống, đang được nuôi bằng thuốc phiện.",
      "Ba hôm nữa cậu ấy sẽ “từ Hà Bắc về”, mang tên một đứa trẻ đã chết năm 1920, làm con thừa tự cho chính mình và cho cô gái đang bị đem đi chôn.",
      "Còn Tú Nương sẽ nằm cạnh anh ruột của mình, làm vợ chồng, dưới tên họ Triệu.",
      "Đêm mai là đêm 22. Tôi đã đọc trình tự lễ. Tôi chỉ có một lần để làm đúng.",
    ].join("\n"),
    clock: "21:40",
  },
  {
    id: "q7", stage: 6, title: "Giờ Tý", fatal: true,
    ask: "Giờ Hợi đêm 22. Phu nhân đưa bút cho bạn ký hôn thư. Bạn chỉ làm được một việc. Việc bạn chọn sẽ được làm ngay.",
    parts: [{ id: "pa", type: "choice", label: "Việc bạn làm đêm nay", options: OPTIONS_7 }],
    memo: "",
    clock: "22:50",
  },
];

export const START_CLOCK = "22:30";
export const END_CLOCK = "05:30";
