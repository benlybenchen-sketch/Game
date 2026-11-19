// The five staged questions ("trọng điểm"): public text and form layout only.
// Answers, hints and solutions are in case/secret.js (encoded by tools/secret.mjs).
// stage: docs of stages 0..stage are open while this question is open; solving opens stage + 1.

export const PEOPLE = ["Đỗ Văn Khánh", "Đỗ Văn Lực", "Nguyễn Thị Gấm", "Lương Văn Tảo", "Đinh Công Hùng", "Hoàng Minh Sơn", "Hà Văn Nhì"];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Đôi dép khô",
    ask: "Công an xã kết luận cô Hà trượt chân xuống hồ ở bến Vọng trong lúc xem lễ. Kết luận đó có đứng vững không?",
    parts: [
      { id: "a", type: "choice", label: "Cô Hà rơi xuống hồ ở bến Vọng, đêm 12/8", options: ["Có thể", "Không thể"] },
      { id: "t", type: "time", label: "Đôi dép và chiếc nón được đặt lên bậc đá sớm nhất là lúc mấy giờ?", placeholder: "vd 21:15" },
      { id: "pins", type: "pins", count: 2, label: "Ghim 2 tài liệu làm bằng chứng" },
    ],
    memo: `Chuẩn. Đồ khô trên bến không mái che, sau một tiếng rưỡi mưa to: có người đặt nó xuống sau khi tạnh. Ai đó muốn cả làng tin là “hồ đòi người”.
      Chị Nga đồng ý mở hồ sơ. Chị gửi ngay: lời khai thầy hiệu trưởng và một cậu bé lớp 5, lời khai của một lái đò, sổ đăng ký thuyền,
      đoạn băng camera nhà máy thủy điện, và một cuộn ảnh chụp lễ thả đèn.
      Tôi vừa xem thử cuộn băng camera. Có một khung hình tôi không muốn xem lại.`,
    clock: "23:31",
  },
  {
    id: "q2", stage: 1, title: "Con thuyền không đèn",
    ask: "Cô Hà không ra bến Vọng. Ai đã đón cô ở bến Mới tối 12/8? Chỉ ra câu nói dối của người đó về chiếc thuyền.",
    parts: [
      { id: "who", type: "choice", label: "Người lái thuyền đón cô Hà", options: PEOPLE },
      { id: "boat", type: "text", label: "Số đăng ký của chiếc thuyền", placeholder: "vd NK-0000" },
      { id: "lie", type: "line", label: "Câu nói dối về chiếc thuyền (bấm vào câu đó trong một lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Lực. Cháu ruột ông Chủ tịch xã. Chị Nga cho người tới nhà hắn: không có ai, thuyền NK-0712 cũng không ở cọc.
      23 giờ 18, đang lên sóng thì tổng đài chuyển máy: bà Lê Thị Thoa, vợ ông Bổng. Bà nghe đài nhắc tên cô Hà.
      “Cô ấy hỏi tôi về năm tám chín,” bà nói. Hai mươi phút sau cháu bà mang tới một túi giấy: cuộn băng thứ hai, bản photo một quyển sổ, một quyển vở cũ.
      Chị Nga cũng vừa lấy được từ kho lưu trữ huyện mấy giấy tờ năm 1989.
      Lúc mở túi giấy, tay tôi ướt. Cái túi khô cong.`,
    clock: "00:46",
  },
  {
    id: "q3", stage: 2, title: "Món nợ năm 1989",
    ask: "Đối chiếu sổ sách năm 1989. Bao nhiêu hộ bị ghi khống là đã nhận tiền, tổng số tiền bị giữ lại là bao nhiêu? Ai đã ký giấy xin đóng cống tích nước sớm?",
    parts: [
      { id: "n", type: "number", label: "Số hộ bị ghi khống (trang 3)", unit: "hộ" },
      { id: "m", type: "number", label: "Tổng số tiền của các hộ đó", unit: "nghìn đồng", placeholder: "vd 12.345" },
      { id: "who", type: "choice", label: "Người ký đề nghị đóng cống sớm, xác nhận “47/47 hộ đã di dời”", options: PEOPLE },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Sáu nhà. Mười chín triệu không trăm năm mươi nghìn đồng, năm 1989. Một tờ giấy ký sớm hai ngày trước khi đoàn huyện xuống kiểm tra.
      Bé Lụa chết vì tờ giấy ấy. Ông Bổng biết điều đó, và bảy năm sau ông chết đúng đêm rằm.
      Chị Nga đang lôi hồ sơ vụ ông Bổng năm 1996 trong kho công an huyện. Bà Thoa vừa lật lại quyển sổ và thấy một lá thư nháp.
      Trong túi còn một cuộn băng nữa, băng số ba, nhãn ghi “Lên đồng”. Tôi nghe được nửa băng thì đèn phòng thu tắt.`,
    clock: "02:13",
  },
  {
    id: "q4", stage: 3, title: "Đêm rằm năm 1996",
    ask: "Ông Bổng có thật sự đi câu đêm 28/8/1996 không? Ai đã đưa ông ra hồ? Chỉ ra câu nói dối trong bản tường trình năm 1996.",
    parts: [
      { id: "fish", type: "choice", label: "Đêm 28/8/1996 ông Bổng đi câu cá", options: ["Có", "Không"] },
      { id: "drv", type: "choice", label: "Người lái thuyền đưa ông Bổng ra hồ", options: PEOPLE },
      { id: "boss", type: "choice", label: "Người đi cùng trên thuyền", options: PEOPLE },
      { id: "lie", type: "line", label: "Câu nói dối (bấm vào câu đó trong một lời khai)" },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: `Cùng một chiếc thuyền, cùng một người lái, cách nhau đúng bảy năm.
      Nhưng có một điều không khớp: nếu muốn cô Hà “chết đuối” thì tại sao đến giờ vẫn chưa có xác?
      Chị Nga vào được phòng cô Hà ở tập thể giáo viên: có một quyển nhật ký. Nhà máy thủy điện fax cho tôi một thông báo đề ngày 18/8.
      Bà Gấm gọi tới đài. Còn nữa: máy trả lời tự động vừa nháy đèn, có một tin nhắn lúc 03:12. Tôi đã nghe nó. Tôi không biết phải nói gì với anh.`,
    clock: "03:52",
  },
  {
    id: "q5", stage: 4, title: "Chỗ nước không tới",
    ask: "Cô Hà đang ở đâu? Nếu không ai tới kịp, nước sẽ ngập sàn nơi cô bị nhốt lúc mấy giờ sáng nay? Ai ra lệnh?",
    parts: [
      { id: "where", type: "choice", label: "Cô Hà đang ở", options: [
        "Dưới đáy hồ, gần bến Vọng",
        "Trong đình làng cũ dưới lòng hồ",
        "Trong trạm bơm cũ trên Gò Miếu",
        "Trong nhà ông Khánh",
        "Trong miếu trên đỉnh Gò Miếu",
      ] },
      { id: "t", type: "time", label: "Nước ngập tới sàn nơi giam cô Hà vào lúc (sáng 20/8)", placeholder: "vd 04:30" },
      { id: "boss", type: "choice", label: "Người ra lệnh giam cô Hà", options: PEOPLE },
      { id: "pins", type: "pins", count: 3, label: "Ghim 3 tài liệu làm bằng chứng" },
    ],
    memo: "",
    clock: "04:21",
  },
];

/** Clock shown on the desk before any question is solved. */
export const START_CLOCK = "22:07";
export const END_CLOCK = "05:20";
