// Case 05 "Người giữ vợ": six home visits and one decision (public part). Answers live in secret.js.
// The memo of each question is the next page of Vân's internship diary. Question 7 is the one-shot decision (fatal).

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Người không ai thấy",
    ask: "Đọc hồ sơ trạm giao. Lần cuối cùng có người ngoài nhìn thấy bà Hằng là ngày nào? Bà Hằng đang có tên trong danh sách bệnh gì? Trên sơ đồ nhà, đánh dấu gian mà bà Lụa nói mùi nặng nhất.",
    parts: [
      { id: "last", type: "text", label: "Ngày cuối cùng có người ngoài nhìn thấy bà Hằng (ngày/tháng/năm)", placeholder: "vd 1/1/1990" },
      { id: "benh", type: "choice", label: "Danh sách trạm đang theo dõi bà Hằng", options: ["Danh sách tiêm chủng", "Danh sách nghi lao, chưa khám", "Danh sách bệnh tâm thần", "Danh sách sốt rét"] },
      { id: "mui", type: "spot", label: "Gian mùi nặng nhất (đánh dấu trên sơ đồ)", doc: "so_do", how: "Mở sơ đồ nhà rồi bấm vào một gian." },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: [
      "Nhật ký thực tập, tối 19/12. Chiều nay tôi hỏi thầy Sinh: “Thầy có tin cô Hằng còn sống không?” Thầy im lâu lắm rồi nói: “Tôi tin con bé Ngân. Con bé ấy không biết nói dối.”",
      "Hai năm. Không ai nhìn thấy cô Hằng từ hôm đông chí năm 1989. Mùi hắc ở đúng bức vách buồng trong. Tiếng ho đêm nào cũng có.",
      "Thứ Bảy tôi sẽ vào nhà. Tôi mang theo máy ghi âm của trạm.",
    ].join("\n"),
    clock: "20:10",
  },
  {
    id: "q2", stage: 1, title: "Hai lời kể",
    ask: "So lời ông Khải và lời cháu Ngân trong biên bản hỏi chuyện. Chỉ ra hai câu không thể cùng đúng. Mùi hắc trong nhà là mùi gì? Mỗi lần được hỏi về bà Hằng, ai là người trả lời trước?",
    parts: [
      { id: "k", type: "line", label: "Câu của ông Khải (bấm vào câu trong biên bản)" },
      { id: "n", type: "line", label: "Câu của cháu Ngân mâu thuẫn với câu trên" },
      { id: "chat", type: "choice", label: "Mùi hắc, cay mắt trong nhà", options: ["Long não", "Dầu hoả", "Formol (formalin)", "Thuốc trừ sâu", "Mùi hương trầm"] },
      { id: "first", type: "choice", label: "Ai trả lời trước mỗi khi được hỏi về bà Hằng", options: ["Ông Khải", "Cháu Ngân", "Hai người cùng lúc", "Không ai trả lời"] },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    memo: [
      "Nhật ký thực tập, tối 21/12. Ông Khải nói sáng nào ông cũng vào buồng bón cháo. Ngân nói gần hai năm nay bố không được vào. Một trong hai người đang nhớ một điều chưa từng xảy ra.",
      "Can formol 20 lít, “tháng 1/1990 hết nửa can”. Tôi không muốn nghĩ tiếp.",
      "Thầy Sinh bảo: “Ông Khải dở người rồi, con bé phải gồng cả nhà. Tội nó.” Ai cũng nghĩ thế. Tôi cũng nghĩ thế.",
      "Thứ Hai ông Khải hẹn cho tôi xem hiệu ảnh.",
    ].join("\n"),
    clock: "21:30",
  },
  {
    id: "q3", stage: 2, title: "Người trong ảnh",
    ask: "Soi tấm “Vợ tôi, Tết 1991” và so với ảnh năm 1988. Tìm ba chi tiết cho thấy người ngồi bên cửa sổ không phải bà Hằng. Ai đã viết các giấy xin nghỉ gửi trường, và dấu vết nào trong nét chữ cho biết điều đó?",
    parts: [
      { id: "ct", type: "set", count: 3, label: "Ba chi tiết trong ảnh (soi bằng đèn pin)", doc: "vo_toi", how: "soi ảnh rồi bấm “Ghi vào sổ”" },
      { id: "viet", type: "choice", label: "Người viết các giấy xin nghỉ “của cô Hằng”", options: ["Cô Hằng tự viết", "Ông Khải", "Cháu Ngân", "Cô Hà chủ nhiệm", "Bà Lụa"] },
      { id: "dau", type: "choice", label: "Dấu vết trong nét chữ", options: [
        "Cùng mực tím, cùng loại giấy học trò",
        "Cùng viết “trăm” thay cho “chăm”, cùng nét chữ g có móc ngược",
        "Cùng chữ ký ở cuối trang",
        "Chữ in hoa giống hệt nhau",
      ] },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    memo: [
      "Nhật ký thực tập, khuya 23/12. Người trong ảnh “Vợ tôi” là Ngân. Ngân mặc áo của mẹ, ngồi đúng chỗ mẹ ngồi, cho bố chụp sau lưng. Giấy xin nghỉ của cô Hằng là chữ Ngân.",
      "Tôi ngồi trên giường nhà khách của trạm mà run. Ông bố bắt con gái đóng vai mẹ ư? Hay là…",
      "Máy ghi âm vẫn đang tự ghi ở gian giữa nhà ấy. Sáng mai tôi đến lấy.",
    ].join("\n"),
    clock: "23:50",
  },
  {
    id: "q4", stage: 3, title: "Ai tin trước",
    ask: "Sắp xếp sáu dòng ghi chép theo đúng thứ tự ngày tháng. Theo giáo trình, ai là người khởi phát hoang tưởng trong nhà này? Tiếng ho trong băng đêm là của ai, và khi cho băng chạy chậm, câu cuối cùng nghe được là gì? Nếu tách hai người ra, người tiếp nhận thường sẽ thế nào?",
    parts: [
      { id: "ord", type: "order", label: "Sáu dòng ghi chép, từ sớm nhất đến muộn nhất (bấm ▲▼ để đổi chỗ)", items: [
        { id: "k_chao", text: "Ông Khải: “Hằng ăn cháo, khen ngon.”" },
        { id: "n_gio", text: "Ngân: “Mẹ dặn đóng hết cửa lại, mẹ sợ gió.”" },
        { id: "k_ho", text: "Ông Khải: “Đêm nay tôi cũng nghe Hằng ho.”" },
        { id: "n_chao", text: "Ngân: “Mẹ ăn được ba thìa cháo.”" },
        { id: "k_gio", text: "Ông Khải: “Dán băng keo cửa buồng. Hằng sợ gió.”" },
        { id: "n_ho", text: "Ngân: “Đêm qua mẹ ho nhiều.”" },
      ] },
      { id: "kp", type: "choice", label: "Người khởi phát hoang tưởng", options: ["Ông Khải", "Cháu Ngân", "Bà Lụa", "Không có ai, bà Hằng còn sống"] },
      { id: "ho", type: "choice", label: "Tiếng ho sau cửa buồng trong băng đêm", options: ["Bà Hằng", "Ông Khải", "Cháu Ngân", "Con mèo của bà Lụa", "Tiếng gió"] },
      { id: "cham", type: "choice", label: "Câu cuối cùng nghe được khi băng chạy ×0,6", options: ["“Mẹ ơi, lấy thuốc cho con.”", "“Cô Vân nghe thấy rồi à?”", "“Bố ơi, mở cửa.”", "“Đừng mở buồng.”"] },
      { id: "tach", type: "choice", label: "Tách hai người ra thì người tiếp nhận thường", options: ["Hoang tưởng nặng thêm", "Tự tỉnh dần sau vài ngày đến vài tuần", "Không thay đổi gì", "Quên hết mọi chuyện"] },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    memo: [
      "Nhật ký thực tập, đêm 25/12. Ngân viết trước. Lần nào cũng thế: Ngân viết “mẹ ho”, ba hôm sau ông Khải viết “tôi cũng nghe thấy”. Ông Khải biết vợ mất từ chiều 23/12/1989. Ông chỉ tin lại vì con.",
      "Người khởi phát là một đứa trẻ. Người tiếp nhận là ông bố. Cả thị trấn nhìn ngược.",
      "Băng chạy chậm, Ngân thì thào “mẹ ơi, mẹ ho đi cho bố nghe”. Rồi Ngân cúi sát vào máy, giọng bình thường: “Cô Vân nghe thấy rồi à?”",
      "Ngân biết tôi biết. Sáng nay Ngân vẫn cười chào tôi như mọi ngày.",
    ].join("\n"),
    clock: "01:20",
  },
  {
    id: "q5", stage: 4, title: "Đêm đông chí",
    ask: "Bà Hằng chết thế nào, đêm đó ông Khải ở đâu, và Ngân đã làm gì? Ghép trang vở bị xé để đọc. Theo lịch vạn niên, đêm bà Hằng mất là ngày bao nhiêu âm lịch? Ông Khải đã mua gì cho “đêm mẹ khỏi bệnh”, và điều đó nguy hiểm thế nào?",
    parts: [
      { id: "chet", type: "choice", label: "Nguyên nhân bà Hằng chết", options: ["Lao phổi", "Cơn khó thở do hở van hai lá, không có thuốc", "Bị chồng đầu độc", "Ngộ độc khí than"] },
      { id: "o", type: "choice", label: "Đêm 22/12/1989 ông Khải ở đâu", options: ["Ở nhà, ngủ say", "Trên tàu đêm từ Hà Nội về Lào Cai", "Ngồi rượu ở hàng bà Lụa", "Trực ở phòng hoá nghiệm mỏ"] },
      { id: "lam", type: "choice", label: "Đêm ấy Ngân đã làm gì", options: [
        "Ngủ say, không nghe thấy gì",
        "Đi tìm thuốc nhưng không thấy",
        "Nghe mẹ gọi lấy thuốc nhưng bịt tai, không mở cửa",
        "Chạy sang gọi bà Lụa",
      ] },
      { id: "am", type: "text", label: "Ngày âm lịch của đêm bà Hằng mất (ngày, tháng âm)", placeholder: "vd 3 tháng Chạp" },
      { id: "than", type: "number", label: "Số than hoa ông Khải mua ngày 26/12/1991", unit: "cân" },
      { id: "nguy", type: "choice", label: "Nguy hiểm của kế hoạch trong trang vở kẹp ở bao than", options: ["Cháy nhà", "Ngộ độc khí than trong buồng đóng kín, người ngủ không tỉnh lại", "Bỏng", "Không có gì nguy hiểm, chỉ để sưởi"] },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: [
      "Nhật ký thực tập, khuya 27/12. Đêm 22/12/1989 ông Khải ngồi trên tàu. Lọ thuốc rơi dưới gầm giường. Cô Hằng gọi “Ngân ơi, lấy thuốc cho mẹ”. Ngân mười ba tuổi, vừa cãi nhau với mẹ, bịt tai.",
      "Từ hôm ấy Ngân không cho mẹ chết. Ngân ho thay mẹ. Ngân ăn thay mẹ. Ngân viết đơn thay mẹ. Ngân mặc áo của mẹ cho bố chụp.",
      "Hai mươi lăm tháng Một. Ngân không tính ngày theo lịch dương. Nhà này giỗ theo âm.",
      "Mười cân than. Ba cuộn băng keo. Một cái chăn gấp sẵn.",
    ].join("\n"),
    clock: "02:40",
  },
  {
    id: "q6", stage: 5, title: "Đêm nay",
    ask: "Trên lịch bloc năm 1991, ngày 25 tháng Một âm lịch rơi vào ngày nào? Khoanh tờ lịch đó. Vì sao trung uý Bảo tin rằng “ngày mất đã qua, không có gì phải vội”?",
    parts: [
      { id: "ngay", type: "spot", label: "Tờ lịch của đêm Ngân chọn", doc: "lich", how: "Mở lịch bloc, lật tới tờ cần tìm rồi bấm “Khoanh tờ này”." },
      { id: "vi", type: "choice", label: "Trung uý Bảo nghĩ ngày mất đã qua vì", options: [
        "Ông tính ngày mất theo dương lịch (22/12), còn nhà ông Khải tính theo âm lịch",
        "Ông không biết bà Hằng đã mất",
        "Ông nghĩ Ngân đã đi Hà Nội",
        "Ông đã thu hết than",
      ] },
    ],
    memo: [
      "Nhật ký thực tập, 14 giờ 50 ngày 30/12. Hai mươi lăm tháng Một là hôm nay. Thứ Hai 30/12/1991.",
      "Sáng nay Ngân mặc áo len đỏ của mẹ, bảo tôi: “Tối nay mẹ cháu khỏi bệnh rồi cô ạ. Cô đừng đến nữa nhé.”",
      "Mười phút nữa họp. Thầy Sinh sẽ hỏi tôi. Trung uý Bảo đã có sẵn phương án.",
    ].join("\n"),
    clock: "14:50",
  },
  {
    id: "q7", stage: 6, title: "Bước ngoặt", fatal: true,
    ask: "Thầy Sinh hỏi: đêm nay làm thế nào? Đề xuất của bạn sẽ được thực hiện ngay. Bạn chỉ được nói một lần.",
    parts: [
      { id: "pa", type: "choice", label: "Đề xuất của bạn cho đêm nay", options: [
        "A. Đồng ý với trung uý Bảo: đưa ông Khải về đồn tối nay, cháu Ngân ngủ nhờ nhà bà Lụa, sáng mai mở buồng.",
        "B. Phá cửa buồng ngay chiều nay, trước mặt cả hai cha con, để họ thấy sự thật.",
        "C. Nói thẳng với cháu Ngân rằng mẹ đã mất hai năm, rồi để hai cha con tự quyết.",
        "D. Hoãn đến sau Tết Dương lịch cho mọi người bình tĩnh, rồi mới mở buồng.",
        "E. Đưa cháu Ngân vào viện tỉnh ngay tối nay, có người túc trực cả đêm; thu hết than; để ông Khải ở nhà với cán bộ trạm, không bắt, không phá cửa.",
      ] },
    ],
    memo: "",
    clock: "15:20",
  },
];

export const START_CLOCK = "16:30";
export const END_CLOCK = "05:50";
