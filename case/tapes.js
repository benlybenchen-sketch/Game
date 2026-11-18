// The cassette tapes and the answering-machine message.
// Each line: t (second), d (duration), who (shown name), voice (synth/TTS voice), text.
//   rev: only understandable when the tape is played backwards (forward it is a garbled whisper).
//   ghost: n -> only there once the tape has been played n+ times OR the dread level is at least n+1.
//   sfx: "knock" | "water" | "hum" | "motor" | "chime" for non-speech events (text is the description).
// hidden: text drawn into the spectrogram between t0 and t1 (forward time).
// file: optional recorded/AI voice in audio/<file>.mp3 (if present it plays instead of the synthesized babble).

export const TAPES = {
  bang_1: {
    title: "Băng số 1 · mặt A", label: "C-60 · không nhãn", dur: 134, file: "bang_1",
    hidden: { t0: 117, t1: 131, text: "BẾN MỚI" },
    segs: [
      { t: 3, d: 9, who: "Cô Hà", voice: "ha", text: "Băng số một. Tối thứ Hai, mười một tháng Tám. Tôi là Trịnh Thu Hà, giáo viên điểm trường Vọng Thủy." },
      { t: 13, d: 14, who: "Cô Hà", voice: "ha", text: "Hai năm nay tôi nghe mãi một câu: hồ đòi người, bảy năm một lần. Năm tám chín là bé Lụa. Năm chín sáu là ông Bổng. Ngày mai là rằm tháng Bảy." },
      { t: 28, d: 11, who: "Cô Hà", voice: "ha", text: "Tôi không tin ma. Tôi tin giấy tờ. Và tôi đã tìm được giấy tờ." },
      { t: 40, d: 7, sfx: "water", text: "[tiếng nước nhỏ giọt, gần micro]" },
      { t: 48, d: 15, who: "Bà Gấm (đoạn ghi cũ)", voice: "old", text: "Con Lụa nó vẫn về. Nó đứng ở mép nước, áo đỏ ướt sũng. Nó bảo nhà nó chưa dọn, sao người ta đã thả nước." },
      { t: 64, d: 14, who: "Cô Hà", voice: "ha", text: "Tối mai có người hẹn đưa tôi xem bản gốc năm tám chín. Tôi không nói tên ở đây. Nếu băng này tới tay anh Quân, nghĩa là tôi đã không về." },
      { t: 79, d: 11, who: "Cô Hà", voice: "ha", text: "Anh Quân, đừng tin hai chữ đuối nước. Hãy hỏi: ai được lợi khi cái hồ này cứ im lặng?" },
      { t: 91, d: 13, sfx: "hum", ghost: 1, text: "[tiếng trẻ con ngân nga một điệu ru, không rõ từ đâu. Lần đầu nghe không có đoạn này]" },
      { t: 105, d: 10, who: "Cô Hà", voice: "ha", text: "Điều cuối cùng: tôi đã cất một bản ở chỗ nước không tới." },
      { t: 118, d: 11, who: "Giọng trẻ con", voice: "child", rev: true, text: "Cô ơi… cái thuyền không có đèn." },
    ],
  },

  bang_2: {
    title: "Băng số 2 · mặt A", label: "“Bà Thoa 27/7”", dur: 142, file: "bang_2",
    hidden: { t0: 128, t1: 140, text: "TRANG 3" },
    segs: [
      { t: 3, d: 9, who: "Cô Hà", voice: "ha", text: "Băng số hai. Hai mươi bảy tháng Bảy, nhà bà Lê Thị Thoa, vợ ông Phạm Văn Bổng." },
      { t: 13, d: 17, who: "Bà Thoa", voice: "woman", text: "Năm tám chín ông nhà tôi làm kế toán Ban di dân. Ông Khánh làm trưởng ban. Tiền đền bù phát tay, ký sổ. Có mấy nhà ông Khánh bảo cứ ghi là đã nhận, tiền ông ấy giữ, bao giờ dọn xong thì đưa." },
      { t: 31, d: 13, who: "Bà Thoa", voice: "woman", text: "Ông nhà tôi làm hai quyển. Một quyển nộp huyện, ghi đủ cả. Một quyển ghi thật, ông cất trong hòm thờ." },
      { t: 45, d: 9, who: "Cô Hà", voice: "ha", text: "Rồi những nhà đó có được nhận tiền không ạ?" },
      { t: 55, d: 14, who: "Bà Thoa", voice: "woman", text: "Nhận gì. Nước lên trước. Nhà bà Gấm còn nguyên đồ đạc. Con bé Lụa ngủ trong nhà." },
      { t: 71, d: 6, sfx: "knock", text: "[ba tiếng gõ cửa]" },
      { t: 79, d: 7, who: "Bà Thoa", voice: "woman", text: "Ai đấy?… Cô ra xem hộ tôi." },
      { t: 87, d: 9, who: "Cô Hà", voice: "ha", text: "Không có ai bà ạ. Ngoài thềm ướt hết, toàn vết chân nhỏ. Mà trời có mưa đâu." },
      { t: 97, d: 17, who: "Bà Thoa", voice: "woman", text: "Năm chín sáu ông ấy bảo sẽ đem quyển thật lên tỉnh. Được ba hôm thì ông chết. Đúng đêm rằm tháng Bảy." },
      { t: 115, d: 11, who: "Bà Thoa", voice: "woman", text: "Cô cầm lấy mà chụp. Rồi trả tôi. Tôi giữ bảy năm rồi, tôi sợ lắm." },
      { t: 128, d: 11, who: "Giọng đàn ông", voice: "man", rev: true, text: "Trang ba… sáu nhà… tôi xin lỗi." },
    ],
  },

  bang_3: {
    title: "Băng số 3 · mặt A", label: "“Lên đồng – nhà bà Gấm 3/8”", dur: 152, file: "bang_3",
    hidden: { t0: 114, t1: 130, text: "NK-0712" },
    segs: [
      { t: 2, d: 5, sfx: "chime", text: "[tiếng chuông đồng, tiếng mõ]" },
      { t: 8, d: 9, who: "Cô Hà", voice: "ha", text: "Băng số ba. Ba tháng Tám, nhà bà Nguyễn Thị Gấm. Bà nói tối nay bà gọi được con." },
      { t: 18, d: 8, sfx: "chime", text: "[bà Gấm khấn, nghe không rõ chữ. Chuông đổ liên hồi rồi tắt hẳn]" },
      { t: 27, d: 9, who: "Bà Gấm (giọng trẻ con)", voice: "child", text: "Lụa đây. Cô giáo ơi, cô có cái áo mưa màu xanh." },
      { t: 37, d: 6, who: "Cô Hà", voice: "ha", text: "Lụa… em có biết ai cho đóng cống không?" },
      { t: 44, d: 15, who: "Bà Gấm (giọng trẻ con)", voice: "child", text: "Bác Khánh. Bác bảo nhà em đi rồi. Em gọi mẹ mà nước to quá. Em ở dưới này với chú Bổng." },
      { t: 60, d: 15, who: "Bà Gấm (giọng trẻ con)", voice: "child", text: "Chú Bổng bảo đêm ấy chú đi thuyền máy của anh Lực. Bác Khánh ngồi phía sau chú." },
      { t: 76, d: 8, sfx: "water", text: "[tiếng nước tràn, như ai dội cả chậu nước xuống sàn]" },
      { t: 85, d: 6, who: "Cô Hà", voice: "ha", text: "Bà Gấm? Bà có sao không?" },
      { t: 92, d: 11, who: "Bà Gấm (giọng trẻ con)", voice: "child", text: "Cô đừng ra bến Mới. Cô đừng lên cái thuyền không có đèn." },
      { t: 104, d: 9, who: "Bà Gấm", voice: "old", text: "Nó đi rồi. Cô Hà… nó không bao giờ nói chuyện với người lạ đâu." },
      { t: 115, d: 13, who: "Giọng trẻ con", voice: "child", rev: true, text: "Chỗ nước không tới… có cái máy to." },
      { t: 132, d: 16, sfx: "hum", text: "[tiếng ngân nga, nhỏ dần]" },
    ],
  },

  loi_nhan: {
    title: "Máy trả lời tự động · 03:12", label: "Đài PT-TH Sơn Khê · hộp thư 2", dur: 64, file: "loi_nhan",
    hidden: { t0: 50, t1: 62, text: "184,5" },
    segs: [
      { t: 2, d: 6, sfx: "water", text: "[mưa, tiếng nước vỗ vào tường bê tông]" },
      { t: 9, d: 4, who: "Giọng trẻ con", voice: "child", text: "Chú Quân ơi." },
      { t: 15, d: 5, who: "Giọng trẻ con", voice: "child", text: "Cô Hà lạnh lắm." },
      { t: 22, d: 8, who: "Giọng trẻ con", voice: "child", text: "Cô ở trong cái nhà có cái máy to. Cửa sắt. Ngoài có cái miếu." },
      { t: 32, d: 7, who: "Giọng trẻ con", voice: "child", text: "Nước chưa tới. Nhưng sắp tới rồi." },
      { t: 40, d: 9, sfx: "hum", text: "[ngân nga, rất gần micro]" },
      { t: 51, d: 9, who: "Giọng trẻ con", voice: "child", rev: true, text: "Mẹ ơi, con vẫn ở đây." },
    ],
  },
};
