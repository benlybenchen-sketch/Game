// Case 08 "Độ Kiếp": eight checkpoints (public part). Answers, hints and solutions live in secret.js.
// Pin slots keep role labels for the bible and the audit; the game hides them (META.pinRoles = false).
const P = (roles) => ({ id: "pins", type: "pins", count: roles.length, label: `Ghim ${roles.length} tài liệu làm bằng chứng`, roles });
const NAMES = ["Lăng Tiêu Tử", "Tĩnh Hư", "Tào Thuận", "Minh Kính", "A Mặc", "Bão Phác Tử", "Đan Dương Tử", "Hồ sơ hiện có chưa cho biết"];

export const OPTIONS_8 = [
  "A. Ký tờ xác nhận tiên tích; xin nội thị hoãn việc cấp ruộng Thượng Khê; giữ mọi giấy tờ ở lại trên núi.",
  "B. Không ký tờ xác nhận; tố trưởng lão Giới luật chép trộm Lôi pháp và giết hai người; giao ông cho nội thị.",
  "C. Không ký tờ xác nhận; tố nữ quan Tổ sư điện dựng tiên tích để kế vị và giết thầy; giao bà cho nội thị.",
  "D. Không ký tờ xác nhận; bắt ngay hoả công tại sơn môn trước mặt nội thị; kể lại mọi điều đã tra ra.",
  "E. Không ký tờ xác nhận; tâu chưởng môn chết vì đan độc và trưởng lão Đan phòng tự tận vì hối; khép hồ sơ.",
  "F. Không ký tờ xác nhận; niêm lỗ thở và ống khói và túi đan bằng ấn Viện trước khi nói; dâng ngọc giản.",
];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Ngày thứ nhất",
    ask: "Đêm qua sét đánh xuống những đâu? Nơi gần Lôi Đài nhất bị sét đánh là nơi nào? Mưa tạnh vào canh mấy?",
    parts: [
      { id: "noi", type: "choice", label: "Nơi gần Lôi Đài nhất bị sét đánh", options: ["Đàn tế trên Lôi Đài", "Cửa Huyền Chân động", "Rừng tháp Thạch lâm", "Mái Tổ sư điện", "Sân Hạc viện", "Lò rèn của quán", "Cây tùng sau chòi canh", "Hồ sơ hiện có chưa cho biết"] },
      { id: "canh", type: "number", label: "Mưa tạnh vào canh", unit: "canh" },
      P(["Tài liệu cho thấy tro và áo được đặt sau mưa", "Tài liệu cho thấy sét không đánh xuống đàn tế"]),
    ],
    memo: [
      "Ngày 28, tối. Đêm qua tám lần sét. Gần nhất là lần thứ sáu, đánh nứt đỉnh tháp sinh phần ở Thạch lâm. Dòng thứ chín trong sổ sấm được ghi vào buổi sáng.",
      "Mưa tạnh lúc canh năm. Tro và tấm đạo bào khô, mặt đá bên dưới khô: chúng được đặt lên đàn sau khi mưa tạnh.",
    ].join("\n"),
    clock: "Giờ Dậu",
  },
  {
    id: "q2", stage: 1, title: "Đêm thứ nhất",
    ask: "Trưởng lão Đan phòng chết vì đâu? Câu nào trong giấy tờ cho thấy điều ấy?",
    parts: [
      { id: "chet", type: "choice", label: "Trưởng lão Đan phòng chết vì", options: ["Tẩu hoả khi vận công giữ lửa", "Uống nhầm một viên đan độc", "Khí than vì ống khói bị bịt", "Khí than vì phong môn khép hẳn", "Bị đánh vào gáy khi đang ngồi", "Rắn độc trong kho thuốc cắn", "Tự vẫn bằng thạch tín trong trà", "Hồ sơ hiện có chưa cho biết"] },
      { id: "cau", type: "line", label: "Câu cho thấy cách chết (bấm vào câu đó)" },
      P(["Tài liệu cho thấy cách chết", "Tài liệu cho thấy khói bị chặn ở đâu"]),
    ],
    memo: [
      "Đêm 28. Trưởng lão Đan phòng chết vì khí than. Phong môn vẫn ở nấc giữ lửa; miệng ống khói trên mái bị nhét rơm ướt bọc vải gai, sáng ra đã gỡ đi.",
      "Cửa phòng cài trong. Người làm việc ấy không cần vào phòng.",
    ].join("\n"),
    clock: "Canh hai",
  },
  {
    id: "q3", stage: 2, title: "Ngày thứ hai",
    ask: "Đêm 27, từ canh hai đến canh năm, trưởng lão Giới luật ở đâu? Ông giấu chuyện gì?",
    parts: [
      { id: "o", type: "choice", label: "Từ canh hai đến canh năm, ông ở", options: ["Trong Giới luật đường", "Trên gác Tàng Kinh các", "Trên Lôi Đài", "Trong Đan phòng", "Trong Tổ sư điện", "Ở sơn môn", "Hồ sơ hiện có chưa cho biết"] },
      { id: "giau", type: "choice", label: "Điều ông giấu", options: ["Chép Ngũ Lôi pháp gửi người ngoài", "Lên Lôi Đài xem sao lúc nửa đêm", "Gặp riêng nữ quan giữ Tổ sư điện", "Đổi viên đan trong Đan phòng", "Xuống núi gặp người của nội thị", "Đốt sổ phạt của Giới luật đường"] },
      P(["Tài liệu cho biết ông ở đâu", "Tài liệu cho biết điều ông giấu"]),
    ],
    memo: [
      "Ngày 29, tối. Đêm 27 trưởng lão Giới luật ngồi chép bản Ngũ Lôi chính pháp từ canh hai tới giờ Dần, để dâng nội thị đổi lấy ghế chưởng môn.",
      "Ông nói dối, nhưng không phải về hai cái chết.",
    ].join("\n"),
    clock: "Giờ Tuất",
  },
  {
    id: "q4", stage: 3, title: "Đêm thứ ba",
    branch: {
      intro: "Chiều 30. Giờ Mão mai trưởng lão Đan phòng sẽ bị hoá. Cũng từ sáng mai, Giới luật đường đặt người gác cửa động ngày đêm. Đêm nay bạn chỉ làm được một việc. Việc kia sẽ mất, không lấy lại được.",
      warn: `<p class="small muted">Lựa chọn này không rút lại được trong lượt chơi này. Đi đường nào cũng đủ giấy tờ để phá án, nhưng bạn sẽ thấy những thứ khác nhau, và kết thúc cũng khác.</p>`,
      options: [
        { id: "A", label: "Khai quan ở linh đường", text: "Canh ba, nạy nắp quan tài trưởng lão Đan phòng trước khi đem hoá. Cửa động sẽ có người gác từ sáng mai." },
        { id: "B", label: "Phá trận vào động", text: "Canh ba, xoay chín đĩa đá, rạch tờ niêm, vào Huyền Chân động trước khi có người gác. Quan tài sẽ bị hoá lúc sáng." },
      ],
    },
    ask: "Chưởng môn mất khi nào?",
    parts: [
      { id: "khi", type: "choice", label: "Chưởng môn mất", options: ["Đêm 49, trong động", "Đêm 49, trên Lôi Đài", "Đêm 48, trong động", "Chừng mười ngày trước đêm 49", "Hơn một tháng trước đêm 49", "Ngay ngày đầu bế quan", "Hồ sơ hiện có chưa cho biết"] },
      P(["Tài liệu cho biết chưởng môn mất từ bao giờ"]),
    ],
    memo: () => [
      "Đêm 30. Chưởng môn mất đã lâu, hơn một tháng trước đêm 49.",
    ].join("\n"),
    clock: "Canh tư",
  },
  {
    id: "q5", stage: 4, title: "Ngày thứ tư",
    ask: "Chưởng môn mất vào đêm nào? Ông chết vì đâu?",
    parts: [
      { id: "ngay", type: "number", label: "Đêm ngày", unit: "" },
      { id: "thang", type: "number", label: "tháng", unit: "âm lịch" },
      { id: "vi", type: "choice", label: "Chưởng môn chết vì", options: ["Đan độc tích lại lâu ngày", "Viên đan ngày ấy bị thêm chu sa", "Khí than vì lỗ thở bị bịt", "Tẩu hoả khi xung quan", "Nhịn ăn quá sức chịu", "Bị đâm trong động", "Hồ sơ hiện có chưa cho biết"] },
      P(["Tài liệu cho biết đêm mất", "Tài liệu cho biết cách chết"]),
    ],
    memo: [
      "Ngày mồng 1, tối. Chưởng môn mất đêm 18 tháng Ba, ngày thứ mười một của kỳ bế quan, vì khí than: lỗ thở trên Lôi Đài bị bịt từ chạng vạng, canh hai khói tắt.",
      "Từ viên ngày mười hai, không ai dùng đan. Đan đi vào diều hạc.",
    ].join("\n"),
    clock: "Giờ Hợi",
  },
  {
    id: "q6", stage: 5, title: "Ngày thứ năm",
    ask: "Ngọc giản truyền y bát cho ai? Ai đặt tro, áo và kiếm lên Lôi Đài? Thi thể chưởng môn bây giờ ở đâu?",
    parts: [
      { id: "ten", type: "text", label: "Ngọc giản truyền y bát cho", placeholder: "đạo hiệu" },
      { id: "dat", type: "choice", label: "Người đặt tro, áo và kiếm", options: NAMES },
      { id: "xac", type: "choice", label: "Thi thể chưởng môn", options: ["Đã hoá tro trên Lôi Đài", "Trong tháp sinh phần ở Thạch lâm", "Trong vách sau của động", "Chung quan với trưởng lão Đan phòng", "Dưới vực sau chòi canh", "Hồ sơ hiện có chưa cho biết"] },
      P(["Tài liệu cho biết ai đặt tro, áo và kiếm", "Tài liệu cho biết thi thể ở đâu"]),
    ],
    memo: [
      "Ngày mồng 2, tối. Ngọc giản: y bát trao Tĩnh Hư, rút tấu Thượng Khê. Đêm 27 Tĩnh Hư mở trận, đặt thầy vào hốc toạ hoá, dựng tiên tích, thay tờ niêm.",
      "Bà nhận tội khi quân. Bà là người được truyền ngôi.",
    ].join("\n"),
    clock: "Giờ Tuất",
  },
  {
    id: "q7", stage: 6, title: "Ngày thứ sáu",
    ask: "Ai bịt lỗ thở của động chiều tối 18 tháng Ba? Dòng sổ nào cho thấy người ấy ở trên Lôi Đài chiều hôm ấy? Vì sao người ấy giết chưởng môn?",
    parts: [
      { id: "ai", type: "choice", label: "Người bịt lỗ thở", options: NAMES },
      { id: "dong", type: "line", label: "Dòng sổ cho thấy người ấy ở trên Lôi Đài chiều 18 (bấm vào dòng đó)" },
      { id: "vi", type: "choice", label: "Vì sao", options: ["Để lấy đan đem bán", "Vì bị Giới luật đường phạt", "Để Thượng Khê khỏi mất ruộng", "Vì được trưởng lão Giới luật thuê", "Để nữ quan sớm được kế vị", "Vì bị đuổi khỏi Đan phòng", "Hồ sơ hiện có chưa cho biết"] },
      P(["Tài liệu về chiều tối 18 tháng Ba", "Tài liệu về đêm 27 tháng Tư", "Tài liệu về lý do"]),
    ],
    memo: [
      "Ngày mồng 3, khuya. Tào Thuận quét Lôi Đài chạng vạng 18 tháng Ba, úp bao tải ướt và phiến đá lên lỗ thở. Ba mươi tám ngày sau hắn đổ đan cho hạc, trả khay sạch.",
      "Đêm 27 hắn mang than dẻ lên Đan phòng rồi nhét rơm vào ống khói. Đêm mồng 1 hắn bịt lỗ thông gió phòng bạn. Cha hắn treo cổ ở sơn môn hôm cắm mốc Hạ Khê.",
    ].join("\n"),
    clock: "Canh ba",
  },
  {
    id: "q8", stage: 7, title: "Ngày thứ bảy", fatal: true,
    ask: "Giờ Thìn mồng 4. Nội thị đứng ở sơn môn. Bạn chỉ nói một lần, và việc ấy sẽ được làm ngay.",
    parts: [{ id: "pa", type: "choice", label: "Việc bạn làm", options: OPTIONS_8 }],
    memo: "",
    clock: "Giờ Thìn",
  },
];

export const START_CLOCK = "Giờ Thìn";
export const END_CLOCK = "Giờ Ngọ";
