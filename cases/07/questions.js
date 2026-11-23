// Case 07 "Thư gửi người chết": seven days in the tomb builders' village (public part). Answers live in secret.js.
// Pin slots say what each pinned document must prove (rule 24); option lists keep similar length and tone.

const P = (roles) => ({ id: "pins", type: "pins", count: roles.length, label: `Ghim ${roles.length} tài liệu làm bằng chứng`, roles });
const SNAKE_OPTS = ["Rắn hổ mang sừng", "Rắn lục sừng giả", "Rắn lục sa mạc không sừng", "Rắn lục thảm (vảy cưa)", "Rắn hổ mang Ai Cập", "Rắn đen sa mạc", "Rắn hang"];

export const OPTIONS_7 = [
  "A. Để người giữ cổng mang đấu xuống đền; cả làng đi theo sau; mang chén hin của Hay; trình tể tướng mọi giấy tờ.",
  "B. Giữ đấu lại ở cổng làng; niêm bằng ấn kho bến sông; giao người giữ cổng canh giữ; trình tể tướng mọi giấy tờ.",
  "C. Giữ đấu lại ở cổng làng; niêm bằng ấn của Lăng; giao người giữ cổng canh giữ; trình tể tướng mọi giấy tờ.",
  "D. Đưa đấu vào nhà nguyện; niêm bằng ấn nhà nguyện; giao đốc công bên Trái canh; trình tể tướng mọi giấy tờ.",
  "E. Tố người giữ cổng trước toà làng; giữ đấu lại ở cổng; chưa niêm gì cả; chờ tể tướng tới làng xét.",
  "F. Mang chén hin và mảnh gốm của Hay; để đấu lại ở cổng; chưa niêm gì cả; xuống đền trình tể tướng.",
];

export const QUESTIONS = [
  {
    id: "q1", stage: 0, title: "Ngày thứ nhất",
    ask: "Hai bản điểm danh lệch nhau: bản nào đúng? Đêm 13 đốc công Nakhtmin ở đâu, và câu nào trong lời ông là lời nói dối? Đêm 13 có bao nhiêu lều trên đèo không thắp đèn?",
    parts: [
      { id: "reg", type: "choice", label: "Bản điểm danh đúng", options: ["Bản mực đen", "Bản mực nhạt", "Cả hai bản đều đúng", "Cả hai bản đều sai"] },
      { id: "n13", type: "choice", label: "Đêm 13, Nakhtmin ở", options: ["Trong lều của ông trên đèo", "Ở nhà ông, ủ bia cho lễ", "Không ở lều, cũng không ở nhà", "Trong lăng, ở hành lang B"] },
      { id: "lie", type: "line", label: "Câu nói dối trong lời Nakhtmin (bấm vào câu đó)" },
      { id: "lamps", type: "number", label: "Số lều trên đèo không thắp đèn đêm 13", unit: "lều" },
      P(["Tài liệu để chọn bản điểm danh đúng", "Tài liệu cho biết lều nào thắp đèn", "Lời cho thấy Nakhtmin nói dối"]),
    ],
    memo: [
      "Ngày 16, tối. Bản mực đen đúng ngày lễ; bản mực nhạt chậm một ngày.",
      "Đêm 13 lều của Nakhtmin trả lại nguyên bấc. Vợ ông nói ông không về nhà. Ông nói dối về đêm ấy.",
    ].join("\n"),
    clock: "19:40",
  },
  {
    id: "q2", stage: 1, title: "Ngày thứ hai",
    ask: "Đọc số trong các sổ của Lăng. So sổ lương với chỗ Userhat đong lại. Mỗi nhà bị thiếu bao nhiêu phần lương? Nhà Nakhtmin thì sao? Ba tháng, cả làng bị thiếu tất cả bao nhiêu lúa?",
    parts: [
      { id: "ratio", type: "choice", label: "Mỗi nhà nhận thiếu", options: ["Một nửa lương", "Một phần tư lương", "Một phần tám lương", "Một phần mười sáu lương", "Một phần ba mươi hai lương", "Mỗi nhà thiếu một khác"] },
      { id: "nakht", type: "choice", label: "Nhà đốc công Nakhtmin", options: ["Thiếu như mọi nhà", "Không thiếu chút nào", "Thiếu gấp đôi nhà khác", "Còn được dư ra"] },
      { id: "khar", type: "number", label: "Tổng lúa cả làng thiếu trong ba tháng: phần khar", unit: "khar" },
      { id: "hekat", type: "choice", label: "Và phần lẻ (hekat)", options: ["Không có phần lẻ", "Một nửa hekat", "Một phần tư hekat", "Một phần tám hekat", "Một phần mười sáu hekat", "Một phần ba mươi hai hekat"] },
      P(["Sổ lương", "Chỗ đong lại của Userhat", "Tài liệu để đọc số và phần lẻ"]),
    ],
    memo: [
      "Ngày 17, tối. Nhà nào cũng thiếu một phần mười sáu, kể cả nhà Nakhtmin. Hai nhà vay lúa thì thiếu thêm đúng phần trả nợ.",
      "Ba tháng, cả làng mất hai mươi tám khar và nửa hekat.",
    ].join("\n"),
    clock: "20:10",
  },
  {
    id: "q3", stage: 2, title: "Ngày thứ ba",
    ask: "So nét chữ. Ai viết thư trả lời số 1 và số 2? Ký hiệu nào là ký hiệu duy nhất tách được nét chữ của người viết ấy với nét chữ của Hay? Thư trả lời số 3 thì sao?",
    parts: [
      { id: "w12", type: "choice", label: "Người viết thư trả lời số 1 và 2", options: ["Thợ vẽ Hay, viết từ trước", "Bà Nebetiunet, vợ Hay", "Bà Henut, vợ Nakhtmin", "Ký lục Userhat", "Khonsu, người giữ cổng"] },
      { id: "sign", type: "choice", label: "Ký hiệu duy nhất tách hai nét chữ", options: ["nước", "miệng", "ổ bánh", "cái giỏ", "vải gấp", "nét một"] },
      { id: "w3", type: "choice", label: "Thư trả lời số 3", options: ["Cùng người viết thư 1 và 2", "Một người khác, chưa rõ là ai", "Thợ vẽ Hay, viết từ trước", "Bà Henut, vợ Nakhtmin"] },
      P(["Mẫu chữ để so", "Chữ của người viết thư trả lời", "Thư trả lời"]),
    ],
    memo: [
      "Ngày 18, tối. Thư trả lời số 1 và 2 là chữ Nebetiunet. Bà học chữ của chồng, chỉ khác ở nét một.",
      "Thư số 3 không phải chữ bà, cũng không phải chữ Hay.",
    ].join("\n"),
    clock: "21:00",
  },
  {
    id: "q4", stage: 3, title: "Ngày thứ tư",
    ask: "Hay chết đêm nào? Dòng chữ lạ trên vách đọc ra là gì? Userhat bị loài rắn nào cắn, con rắn tự bò vào hay bị đặt vào? Đèn nhà Userhat đổ sau mấy giờ kể từ lúc thắp?",
    parts: [
      { id: "dem", type: "choice", label: "Hay chết đêm", options: ["Đêm 12", "Đêm 13", "Đêm 14", "Đêm 15"] },
      { id: "chu", type: "text", label: "Dòng chữ lạ trên vách đọc ra", placeholder: "" },
      { id: "ran", type: "choice", label: "Loài rắn", options: SNAKE_OPTS },
      { id: "dat", type: "choice", label: "Con rắn", options: ["Tự bò vào hộp bút", "Bị người đặt vào hộp", "Rơi từ mái nhà xuống", "Theo đàn chuột vào nhà"] },
      { id: "gio", type: "number", label: "Đèn đổ sau khi thắp", unit: "giờ" },
      P(["Tài liệu cho biết chỗ xác nằm", "Tài liệu cho biết hành lang đục tới đâu mỗi tối", "Tài liệu để nhận ra loài rắn", "Tài liệu cho biết bà Nebetiunet ở đâu lúc đèn đổ"]),
    ],
    memo: [
      "Ngày 19, tối. Chỗ Hay nằm, tối 13 chưa đục tới. Hay chết đêm 14. Dòng chữ của Hay đọc ra: ipet, cái đấu.",
      "Rắn hổ mang sừng đang ngủ trong cát mùa này: có người đào nó lên, đặt vào hộp bút. Lúc đèn đổ, Nebetiunet đang cầm đèn sau kiệu trước mặt cả làng.",
    ].join("\n"),
    clock: "20:30",
  },
  {
    id: "q5", stage: 4, title: "Ngày thứ năm",
    ask: "Đêm Hay chết thuộc tuần thứ mấy của năm, và ấn niêm cửa lăng đêm ấy là ấn nào? Ai mang ấn lên đèo tối hôm ấy? Đêm ấy đốc công Sennefer ở đâu?",
    parts: [
      { id: "tuan", type: "number", label: "Tuần thứ mấy của năm", unit: "" },
      { id: "an", type: "choice", label: "Ấn niêm cửa lăng đêm ấy", options: ["Ấn của Lăng, bên Phải giữ", "Ấn của Lăng, bên Trái giữ", "Ấn kho lúa bến sông", "Ấn nhà ký lục", "Ấn kho đền bên sông"] },
      { id: "mang", type: "line", label: "Dòng sổ cho biết ai mang ấn lên đèo tối hôm ấy (bấm vào dòng đó)" },
      { id: "sen", type: "choice", label: "Đêm ấy Sennefer ở", options: ["Trong lều trên đèo", "Ở nhà trong làng", "Trong hành lang C", "Ở kho bến sông"] },
      P(["Lịch giữ ấn", "Dấu niêm cửa lăng", "Tài liệu cho biết ai mang ấn lên đèo"]),
    ],
    memo: [
      "Ngày 20, tối. Tuần 17. Ấn của Lăng đến lượt bên Trái. Tối 14 ấn không ở tay Sennefer: người cổng làng mang lên đèo, ngủ lại trạm gác.",
      "Sennefer ở nhà với con gái ốm. Lều ông không phát bấc.",
    ].join("\n"),
    clock: "21:10",
  },
  {
    id: "q6", stage: 5, title: "Ngày thứ sáu",
    ask: "Cái đấu ở cổng chứa bao nhiêu chén hin nước? Nét chữ trên thư trả lời số 3 trùng với gì? Ai giết Hay và Userhat?",
    parts: [
      { id: "hin", type: "number", label: "Đấu ở cổng chứa", unit: "chén hin" },
      { id: "net", type: "choice", label: "Nét chữ thư trả lời số 3 trùng với", options: ["Thẻ buộc bao lúa ở kho bến", "Vở tập viết của thợ vẽ Hay", "Bát thư bà Henut gửi mẹ", "Sổ của thầy bắt rắn Hori"] },
      { id: "ai", type: "text", label: "Người giết Hay và Userhat", placeholder: "tên" },
      P(["Bằng chứng cái đấu đong thiếu", "Bằng chứng về người viết thư số 3", "Bằng chứng về con rắn"]),
    ],
    memo: [
      "Ngày 21, khuya. Đấu ở cổng chứa ba mươi bảy chén rưỡi. Đấu thật chứa bốn mươi.",
      "Khonsu nhận lúa ở bến, đong lúa ở cổng, mang ấn lên đèo đêm 14, mua con rắn ngày 17, viết thư số 3.",
    ].join("\n"),
    clock: "23:30",
  },
  {
    id: "q7", stage: 6, title: "Ngày thứ bảy", fatal: true,
    ask: "Giữa trưa ngày 22. Thợ đã kéo xuống đền. Khonsu xin mang cái đấu đi. Bạn chỉ làm được một việc, và việc ấy sẽ được làm ngay.",
    parts: [
      { id: "pa", type: "choice", label: "Việc bạn làm", options: OPTIONS_7 },
    ],
    memo: "",
    clock: "12:20",
  },
];

export const START_CLOCK = "06:00";
export const END_CLOCK = "18:00";
