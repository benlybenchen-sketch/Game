// Case 02 "Đêm giỗ Tổ": the six staged questions (public part). Answers live in secret.js.
export const PEOPLE = ["Lê Văn Thông (Ba Thông)", "Phan Văn Hòa (Tư Hòa)", "Đặng Văn Bé (ông Sáu Bé)", "Lý Thị Nhàn (Út Nhàn)", "Đoàn Văn Lợi",
  "Huỳnh Văn Chánh (Năm Chánh)", "Nguyễn Thị Lựu (bà Tư Lựu)", "Châu Văn Mạnh", "Lê Văn Lành (Hai Lành)"];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Không phải Tổ bắt",
    ask: "Cả làng nói Tổ bắt Kép Kiệt. Hãy chứng minh anh bị đầu độc: bằng chất gì, và anh nuốt nó sớm nhất lúc nào? Mọi giờ phải là giờ thật, không phải giờ trên băng.",
    parts: [
      { id: "poison", type: "choice", label: "Chất độc", options: ["Thạch tín", "Lá ngón", "Hạt mã tiền", "Thuốc chuột phốt-phua kẽm", "Cà độc dược", "Nọc rắn hổ"] },
      { id: "off", type: "number", label: "Đồng hồ máy quay VHS chạy chậm hơn giờ thật bao nhiêu phút?", unit: "phút" },
      { id: "t", type: "time", label: "Kiệt nuốt chất độc sớm nhất lúc mấy giờ (giờ thật)?", placeholder: "vd 21:45" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Mã tiền. Tôi đã ngồi xem ông già Sáu Bé ngâm nó trong hũ rượu suốt mười năm, chưa bao giờ nghĩ nó giết được ai.
      Tôi gọi cho thượng úy Huỳnh ở công an huyện. Anh ta gửi qua cả xấp: kết quả giám định của Viện pháp y, lời khai trong gánh,
      bảng kê vị trí từng người, và tấm ảnh chụp buồng trò sáng hôm sau. Có cả ảnh con chó.
      Đừng ăn gì trước khi xem tấm ảnh con chó.`,
    clock: "22:40",
  },
  {
    id: "q2", stage: 1, title: "Chung trà giữa",
    ask: "Chất độc nằm trong thứ gì, được bỏ vào từ lúc nào? Theo lời khai ban đầu, người lớn duy nhất không có ai làm chứng trong khoảng đó là ai, và câu nói dối của người đó là câu nào? (Bé Thủy 12 tuổi, ngủ trong buồng trò, không tính.)",
    parts: [
      { id: "cup", type: "choice", label: "Chất độc nằm trong", options: ["Rượu cúng Tổ lúc 17:00", "Cháo lúc 19:00", "Chung trà Tổ bên trái", "Chung trà Tổ ở giữa", "Chung trà Tổ bên phải", "Miếng trầu"] },
      { id: "t", type: "time", label: "Chất độc được bỏ vào sớm nhất lúc mấy giờ?", placeholder: "vd 21:30" },
      { id: "who", type: "choice", label: "Người lớn duy nhất không có ai làm chứng", options: PEOPLE.slice(0, 7) },
      { id: "lie", type: "line", label: "Câu nói dối của người đó (bấm vào câu trong lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Sáng nay công an bắt Tư Hòa. Thằng nhỏ mười chín tuổi khóc như mưa, thề là lớp 2 nó đứng trên sân khấu, đóng Châu Thương thay cho Ba Thông.
      Không ai tin. Cả đình đều thấy Châu Thương, và Ba Thông khai anh ta diễn liên tục.
      Tôi mượn được cuộn phim thằng Phát chụp đêm đó, lời khai ông Hương cả, lời khai bé Thủy và tờ giấy con bé vẽ.
      Con bé vẽ cái gì, tôi không muốn tả. Anh tự xem.`,
    clock: "23:55",
  },
  {
    id: "q3", stage: 2, title: "Hai Châu Thương",
    ask: "Trong lớp 2 có hai Châu Thương: một người trên sân khấu, một người bên bàn Tổ. Chỉ ra từng người, tấm ảnh chứng minh, và câu nói dối của kẻ bên bàn Tổ.",
    parts: [
      { id: "stage", type: "choice", label: "Người đóng Châu Thương trên sân khấu ở lớp 2", options: PEOPLE.slice(0, 7) },
      { id: "altar", type: "choice", label: "“Ông Tổ mặt trắng” bên bàn Tổ lúc lớp 2", options: PEOPLE.slice(0, 7) },
      { id: "photo", type: "number", label: "Số kiểu ảnh chứng minh người trên sân khấu không phải Ba Thông", unit: "kiểu số" },
      { id: "lie", type: "line", label: "Câu nói dối của “ông Tổ mặt trắng” (bấm vào câu trong lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Ba Thông. Đứa nhỏ ông Sáu Bé nuôi từ năm năm tuổi, đứa từng cõng Kiệt đi học tuồng.
      Công an khám rương của Thông lúc nửa đêm. Họ gửi tôi bản kê, một cuộn băng cát-sét và mấy thứ giấy cũ.
      Trong rương có một lọ thủy tinh. Đọc bản kê đi, rồi hẵng mở băng.
      À, có một tờ báo năm 1963. Tờ báo ấy là bài tôi viết.`,
    clock: "01:20",
  },
  {
    id: "q4", stage: 3, title: "Đêm giỗ Tổ 1963",
    ask: "Ba mươi năm trước, cũng đêm 12 tháng 8, cũng vai Quan Công, kép Hai Lành chết y như vậy. Ai đã bỏ thuốc năm 1963? Ba Thông là gì của Hai Lành, và ai đã kể cho Thông biết?",
    parts: [
      { id: "k63", type: "choice", label: "Người bỏ thuốc vào trà Tổ đêm 29/9/1963", options: PEOPLE },
      { id: "rel", type: "choice", label: "Ba Thông là gì của Hai Lành", options: ["Con ruột", "Cháu ruột", "Con nuôi", "Học trò", "Không quan hệ gì"] },
      { id: "told", type: "choice", label: "Người kể cho Ba Thông biết chuyện năm 1963", options: PEOPLE.slice(0, 7) },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Châu Văn Mạnh. Cha của Kiệt. Ba mươi năm, cùng một chung trà, cùng một vai, cùng một đêm. Con trả nợ cho cha.
      Nhưng còn một chỗ không khớp: công an huyện vẫn đang nghi ông Sáu Bé, vì trong sổ bán thuốc độc của tiệm Vạn An Đường có tên ông.
      Tôi đã xin được bản chụp cuốn sổ, lời khai người bán thuốc, giấy tờ tùy thân của mấy người đàn ông trong gánh, và lịch lưu diễn tháng Chín.
      Ông Sáu Bé bây giờ không nói gì nữa. Ông ngồi trước rương Tổ, mắt mở trừng trừng, miệng lẩm bẩm “nó mặc áo rồi, nó mặc áo rồi”.`,
    clock: "02:45",
  },
  {
    id: "q5", stage: 4, title: "Chữ ký trong sổ thuốc độc",
    ask: "Ai thật sự đã mua mã tiền ở tiệm Vạn An Đường? Tên của ai bị mượn để ký sổ, và mua vào ngày nào?",
    parts: [
      { id: "buyer", type: "choice", label: "Người thật sự đã mua mã tiền", options: PEOPLE.slice(0, 7) },
      { id: "forged", type: "choice", label: "Tên người bị ký mạo trong sổ", options: PEOPLE.slice(0, 7) },
      { id: "date", type: "text", label: "Ngày mua (ngày/tháng)", placeholder: "vd 1/9" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Vậy là đủ. Tôi đã viết bài này trong đầu ba mươi năm mà không biết.
      Còn vài thứ anh Huỳnh nhờ tôi chuyển cho anh trước khi anh viết kết luận: biên bản hỏi cung Ba Thông lần cuối,
      đoạn cuối cuộn băng VHS mà thằng Phát cắt bớt vì “không dám để ai coi”, và lời ông Hương cả.
      Tôi cũng đặt cái phong bì nặc danh cạnh tờ chương trình năm 1963. Anh nhìn nét chữ đi.`,
    clock: "04:10",
  },
  {
    id: "q6", stage: 5, title: "Bản kết luận",
    ask: "Viết bản kết luận cho bài báo: điền đúng từng chỗ trống, rồi ghim 3 tài liệu quan trọng nhất.",
    parts: [
      { id: "killer", type: "choice", label: "Kẻ đã đầu độc Kép Kiệt", options: PEOPLE.slice(0, 7) },
      { id: "double", type: "choice", label: "Người bị lợi dụng để đóng thế, tạo chứng cứ ngoại phạm", options: PEOPLE.slice(0, 7) },
      { id: "framed", type: "choice", label: "Người bị gài để gánh tội", options: PEOPLE.slice(0, 7) },
      { id: "when", type: "choice", label: "Lúc bỏ thuốc", options: ["Lúc rót trà, 22:00", "Giữa lớp 2, khoảng 22:06", "Lúc Kiệt thay áo, 22:13–22:15", "Lúc đổ trà trả Tổ, 22:50"] },
      { id: "why", type: "choice", label: "Động cơ", options: ["Tranh vai Quan Công", "Ghen tuông vì Út Nhàn", "Trả thù cho cha bị đầu độc năm 1963", "Chiếm gánh hát", "Bị Kiệt mắng trước mặt cả gánh"] },
      { id: "night", type: "choice", label: "Vì sao chọn đúng đêm giỗ Tổ và đúng chung trà Tổ", options: [
        "Vì đêm đó đông người, dễ trà trộn",
        "Để làm lại y hệt cái chết năm 1963, cho cả làng tin là “Tổ bắt” và để con trả nợ cha",
        "Vì chỉ đêm đó Kiệt mới uống trà",
        "Vì đêm đó mất điện",
      ] },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: "",
    clock: "05:30",
  },
];

export const START_CLOCK = "21:05";
export const END_CLOCK = "05:47";
