// Case 02 "Đêm giỗ Tổ": the six staged questions (public part). Answers live in secret.js.
export const PEOPLE = ["Lê Văn Thông (Ba Thông)", "Phan Văn Hòa (Tư Hòa)", "Đặng Văn Bé (ông Sáu Bé)", "Lý Thị Nhàn (Út Nhàn)", "Đoàn Văn Lợi",
  "Huỳnh Văn Chánh (Năm Chánh)", "Nguyễn Thị Lựu (bà Tư Lựu)", "Trần Văn Lửa (Bảy Lửa)", "Châu Văn Mạnh", "Lê Văn Lành (Hai Lành)"];
/** People of the troupe in 1993 (no one from 1963). */
const CREW = PEOPLE.slice(0, 8);

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Không phải Tổ bắt",
    ask: "Cả làng nói Tổ bắt Kép Kiệt. Cái gì đã giết anh, và nếu đó là thứ anh nuốt vào thì anh nuốt trong khoảng giờ nào? Mọi giờ phải là giờ thật, không phải giờ trên băng.",
    parts: [
      { id: "poison", type: "choice", label: "Nguyên nhân gây co giật", options: ["Thạch tín", "Lá ngón", "Hạt mã tiền", "Thuốc chuột phốt-phua kẽm", "Cà độc dược", "Nọc rắn hổ", "Uốn ván"] },
      { id: "off", type: "number", label: "Đồng hồ máy quay VHS lệch so với giờ thật bao nhiêu phút?", unit: "phút" },
      { id: "t", type: "time", label: "Sớm nhất lúc mấy giờ (giờ thật)?", placeholder: "vd 21:45" },
      { id: "t2", type: "time", label: "Muộn nhất lúc mấy giờ (giờ thật)?", placeholder: "vd 22:40" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Mã tiền, không phải uốn ván: không ai lên cơn uốn ván nửa tiếng sau khi còn hát. Tôi đã ngồi xem ông già Sáu Bé ngâm nó trong hũ rượu suốt mười năm, chưa bao giờ nghĩ nó giết được ai.
      Tôi gọi cho thượng úy Huỳnh ở công an huyện. Anh ta gửi qua cả xấp: kết quả giám định của Viện pháp y, lời khai trong gánh,
      bảng kê vị trí từng người, và tấm ảnh chụp buồng trò sáng hôm sau. Có cả ảnh con chó.
      Đừng ăn gì trước khi xem tấm ảnh con chó.`,
    clock: "22:40",
  },
  {
    id: "q2", stage: 1, title: "Chung trà giữa",
    ask: "Chất độc nằm trong thứ gì, và được bỏ vào trong khoảng giờ nào? Trong khoảng đó, ai đã nói dối về chỗ mình đứng, và câu nói dối là câu nào? (Bé Thủy 12 tuổi, ngủ trong buồng trò, không tính.)",
    parts: [
      { id: "cup", type: "choice", label: "Chất độc nằm trong", options: ["Rượu cúng Tổ lúc 17:00", "Cháo lúc 19:00", "Chung trà Tổ bên trái", "Chung trà Tổ ở giữa", "Chung trà Tổ bên phải", "Miếng trầu", "Hũ rượu thuốc của ông Sáu Bé"] },
      { id: "t", type: "time", label: "Chất độc được bỏ vào sớm nhất lúc mấy giờ (giờ thật)?", placeholder: "vd 21:30" },
      { id: "t2", type: "time", label: "… và muộn nhất lúc mấy giờ (giờ thật)?", placeholder: "vd 22:30" },
      { id: "who", type: "choice", label: "Người nói dối về chỗ mình đứng", options: CREW },
      { id: "lie", type: "line", label: "Câu nói dối của người đó (bấm vào câu trong lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Sáng nay công an bắt Tư Hòa. Thằng nhỏ mười chín tuổi khóc như mưa, nhận là nói dối chuyện ở sau bếp, nhưng lớp 2 nó ở đâu thì nhất định không nói.
      Công an coi vậy là đủ. Tôi thì không: thằng nhỏ đó cầm cái chung còn run.
      Tôi mượn được cuộn phim thằng Phát chụp đêm đó, lời khai ông Hương cả, lời khai bé Thủy và tờ giấy con bé vẽ.
      Con bé vẽ cái gì, tôi không muốn tả. Anh tự xem.`,
    clock: "23:55",
  },
  {
    id: "q3", stage: 2, title: "Ông mặt trắng",
    ask: "Tư Hòa không chịu nói lớp 2 nó ở đâu. Bé Thủy thấy một “ông mặt trắng” rắc thứ gì vào chung giữa. Hãy tìm ra cả hai điều đó, kèm tấm ảnh chứng minh, và câu nói dối của “ông mặt trắng”.",
    parts: [
      { id: "where", type: "choice", label: "Trong lớp 2, Tư Hòa thật sự ở", options: ["Sau bếp, như lời khai đầu", "Trong buồng trò", "Ở chái sau đình, một mình", "Dưới khán giả", "Trên sân khấu, trong vai lính cờ", "Trên sân khấu, trong vai Châu Thương", "Ở cánh gà trái với ông Sáu Bé"] },
      { id: "altar", type: "choice", label: "“Ông mặt trắng” bên bàn Tổ", options: CREW },
      { id: "photo", type: "number", label: "Số kiểu ảnh chứng minh điều đó", unit: "kiểu số" },
      { id: "lie", type: "line", label: "Câu nói dối của “ông mặt trắng” (bấm vào câu trong lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Ba Thông. Đứa nhỏ ông Sáu Bé nuôi từ năm năm tuổi, đứa từng cõng Kiệt đi học tuồng.
      Tư Hòa nhìn tấm ảnh số 14 thì khóc òa, khai hết. Công an khám rương của Thông lúc nửa đêm. Họ gửi tôi lời khai mới của thằng Hòa, bản kê, một cuộn băng cát-sét và mấy thứ giấy cũ.
      Trong rương có một lọ thủy tinh. Đọc bản kê đi, rồi hẵng mở băng.
      À, có một tờ báo năm 1963. Tờ báo ấy là bài tôi viết.`,
    clock: "01:20",
  },
  {
    id: "q4", stage: 3, title: "Đêm giỗ Tổ 1963",
    ask: "Ba mươi năm trước, cũng đêm 12 tháng 8, cũng vai Quan Công, kép Hai Lành chết y như vậy. Ai đã bỏ thuốc năm 1963? Ba Thông là gì của Hai Lành, ai đã kể cho Thông biết, và vào ngày nào?",
    parts: [
      { id: "k63", type: "choice", label: "Người bỏ thuốc vào trà Tổ đêm 29/9/1963", options: PEOPLE },
      { id: "rel", type: "choice", label: "Ba Thông là gì của Hai Lành", options: ["Con ruột", "Cháu ruột", "Con nuôi", "Học trò", "Em ruột", "Không quan hệ gì"] },
      { id: "told", type: "choice", label: "Người kể cho Ba Thông biết chuyện năm 1963", options: CREW },
      { id: "date", type: "text", label: "Ngày Ba Thông biết chuyện (ngày/tháng/năm)", placeholder: "vd 1/1/1990" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Châu Văn Mạnh. Cha của Kiệt. Ba mươi năm, cùng một chung trà, cùng một vai, cùng một đêm. Con trả nợ cho cha.
      Nhưng còn một chỗ không khớp: công an huyện chưa nắm được Thông lấy thuốc ở đâu. Tiệm Vạn An Đường ở thị xã có bán mã tiền, và trong sổ bán thuốc độc tháng Chín có tên một người của gánh.
      Tôi đã xin được bản chụp cuốn sổ, lời khai người bán thuốc, giấy tờ tùy thân của mấy người đàn ông trong gánh, và lịch lưu diễn tháng Chín.
      Ông Sáu Bé bây giờ không nói gì nữa. Ông ngồi trước rương Tổ, mắt mở trừng trừng, miệng lẩm bẩm “nó mặc áo rồi, nó mặc áo rồi”.`,
    clock: "02:45",
  },
  {
    id: "q5", stage: 4, title: "Chữ ký trong sổ thuốc độc",
    ask: "Dòng mua mã tiền trong sổ đã bị nhòe ngày. Mua ngày nào? Lúc đó người có tên trong sổ ở đâu? Ai thật sự đã mua?",
    parts: [
      { id: "date", type: "text", label: "Ngày mua (ngày/tháng)", placeholder: "vd 1/9" },
      { id: "be", type: "choice", label: "Ngày đó, ông Sáu Bé đang ở", options: ["Rạp Hưng Ca, thị xã, cùng gánh", "Bệnh viện huyện Mỏ Cày", "Nhà ở Phú Lễ", "Chợ thị xã", "Giồng Cát", "Chợ Lách"] },
      { id: "buyer", type: "choice", label: "Người thật sự đã mua mã tiền", options: CREW },
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
    ask: "Viết bản kết luận cho bài báo: điền đúng từng chỗ trống, xếp lại đêm ấy theo đúng thứ tự, rồi ghim 3 tài liệu quan trọng nhất.",
    parts: [
      { id: "killer", type: "choice", label: "Kẻ đã đầu độc Kép Kiệt", options: CREW },
      { id: "double", type: "choice", label: "Người bị lợi dụng để đóng thế, tạo chứng cứ ngoại phạm", options: CREW },
      { id: "framed", type: "choice", label: "Người bị gài để gánh tội", options: CREW },
      { id: "why", type: "choice", label: "Động cơ", options: [
        "Muốn giành vai Quan Công mà bà bầu không cho",
        "Ghen tuông vì Kiệt có tình cảm với Út Nhàn",
        "Trả thù cho người cha bị đầu độc năm 1963",
        "Muốn ông Sáu Bé bị bắt để chiếm rương Tổ",
        "Bị Kiệt sỉ nhục trước mặt cả gánh hát",
      ] },
      { id: "ord", type: "order", label: "Bảy sự việc, từ sớm nhất đến muộn nhất (bấm ▲▼ để đổi chỗ)", items: [
        { id: "uong", text: "Kép Kiệt uống chung trà giữa" },
        { id: "bong", text: "Ba Thông bị nước sôi làm bỏng tay phải" },
        { id: "mua", text: "Người mua mã tiền ký sổ ở Vạn An Đường" },
        { id: "con", text: "Kép Kiệt lên cơn co giật đầu tiên" },
        { id: "rot", text: "Ông Sáu Bé rót ba chung trà Tổ" },
        { id: "ke", text: "Ông Sáu Bé kể chuyện năm 1963 bên bến sông" },
        { id: "rac", text: "“Ông mặt trắng” rắc bột vào chung giữa" },
      ] },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: "",
    clock: "05:30",
  },
];

export const START_CLOCK = "21:05";
export const END_CLOCK = "05:47";
