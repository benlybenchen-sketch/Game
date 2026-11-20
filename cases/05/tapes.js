// Case 05 tapes. Voices: khai (the father), ngan (the daughter, 15; 12 on the 1988 tape), hang (the mother),
// van (the player), sinh (head of the health station), bao (police lieutenant), lua (the neighbour).
// Lines with `slow` have a second take (<tape>_<i>_slow.mp3) that plays when the tape runs at ×0,6.
// Timings are laid out by tools/retime.py 05 from the real recordings.
export const TAPES = {
  bang_tham_2: {
    title: "Cassette · TDK D60 · máy của trạm", label: "Nhà ông Khải · 21/12/91 · Vân", dur: 93,
    hidden: { t0: 84, t1: 94, text: "GIÓ" },
    segs: [
      { t: 1, d: 2, sfx: "knock", text: "[tiếng gõ cửa gỗ, tiếng then cài kéo ra]" },
      { t: 4, d: 7.2, who: "Vân (bạn)", voice: "van", text: "Cháu chào bác. Cháu là Vân, sinh viên thực tập ở trạm y tế. Cháu đến khám cho cô Hằng ạ." },
      { t: 12.2, d: 6.4, who: "Ngân", voice: "ngan", text: "Cháu chào cô ạ. Mẹ cháu ngủ rồi. Cô nói khẽ thôi, mẹ cháu mệt lắm." },
      { t: 19.6, d: 4.3, who: "Ông Khải", voice: "khai", text: "Vâng… nhà tôi ngủ rồi. Mời cô ngồi uống nước đã." },
      { t: 24.9, d: 2.5, who: "Vân (bạn)", voice: "van", text: "Cô Hằng ho lâu chưa bác?" },
      { t: 28.4, d: 6.2, who: "Ngân", voice: "ngan", text: "Mẹ cháu ho từ mùa đông năm kia ạ. Đêm nào cũng ho. Cháu nghe thấy hết." },
      { t: 35.6, d: 2.9, who: "Ông Khải", voice: "khai", text: "Ừ… đêm nào cũng ho." },
      { t: 39.5, d: 3.3, who: "Vân (bạn)", voice: "van", text: "Hôm qua cô ăn uống được gì không ạ?" },
      { t: 43.8, d: 6, who: "Ngân", voice: "ngan", text: "Hôm qua mẹ cháu ăn được nửa bát cháo trứng. Cháu nấu đấy ạ." },
      { t: 50.8, d: 3.5, who: "Ông Khải", voice: "khai", text: "Phải… nửa bát cháo trứng." },
      { t: 55.3, d: 3.1, who: "Vân (bạn)", voice: "van", text: "Cháu xin phép vào xem cô một chút được không ạ?" },
      { t: 59.4, d: 6, who: "Ngân", voice: "ngan", text: "Không được đâu cô. Mẹ cháu sợ gió. Mẹ dặn đóng hết cửa, không cho ai mở." },
      { t: 66.4, d: 4, who: "Ông Khải", voice: "khai", text: "Cô thông cảm… nhà tôi sợ gió." },
      { t: 71.4, d: 3, sfx: "hum", text: "[im lặng. Chỉ có tiếng gió lùa qua mái]" },
      { t: 75.4, d: 5, who: "Ngân", voice: "ngan", text: "Mẹ cháu vừa ho đấy. Cô có nghe thấy không ạ?" },
      { t: 81.4, d: 3, sfx: "hum", text: "[im lặng]" },
      { t: 85.4, d: 4, who: "Ông Khải", voice: "khai", text: "Có… có. Tôi nghe thấy." },
    ],
  },

  bang_dem: {
    title: "Cassette · TDK D60 · chế độ tự ghi", label: "Gian giữa · đêm 23→24/12/91", dur: 44, slow: true,
    hidden: { t0: 56, t1: 68, text: "NGÂN" },
    segs: [
      { t: 1, d: 4, sfx: "hum", text: "[máy tự bật khi có tiếng. Gió lùa qua mái fibro]" },
      { t: 6, d: 5, who: "Sau cửa buồng", voice: "cough", text: "[tiếng ho khan, khàn, từng tràng]",
        slowWho: "Giọng con gái, thì thào giữa những tiếng ho", slow: "Mẹ ơi… mẹ ho đi… mẹ ho cho bố nghe…" },
      { t: 12, d: 5, who: "Ông Khải (ngái ngủ)", voice: "khai", text: "Hằng ơi… mình ho à? Mình uống nước không?" },
      { t: 18, d: 5, who: "Sau cửa buồng", voice: "cough", text: "[ho, rồi một giọng rất khẽ, không nghe rõ chữ]",
        slowWho: "Giọng con gái, thì thào", slow: "Bố ngủ đi. Mẹ đỡ rồi. Mẹ bảo bố ngủ đi." },
      { t: 24, d: 3, who: "Ông Khải", voice: "khai", text: "Ừ… thế thì mình ngủ đi." },
      { t: 28, d: 3, sfx: "knuckle", text: "[ba tiếng gõ nhẹ vào vách]" },
      { t: 32, d: 4, sfx: "hum", text: "[lâu, chỉ có tiếng gió]" },
      { t: 37, d: 3.1, who: "Gần micro", voice: "rustle", text: "[tiếng sột soạt sát micro, rồi máy tắt]",
        slowWho: "Ngân (sát micro, giọng bình thường)", slow: "Cô Vân nghe thấy rồi à?" },
    ],
  },

  bang_hang: {
    title: "Cassette · Sony C60", label: "Lớp 7A · cô Hằng đọc thơ · 1988", dur: 44,
    hidden: { t0: 48, t1: 58, text: "MẸ" },
    segs: [
      { t: 1, d: 2, sfx: "chat", text: "[tiếng học trò, tiếng ghế kéo]" },
      { t: 4, d: 4, who: "Cô Hằng", voice: "hang", text: "Các em trật tự. Cô đọc bài thơ cô viết, các em nghe rồi chép lại nhé." },
      { t: 9, d: 9, who: "Cô Hằng", voice: "hang", text: "Mẹ ngồi bên cửa sổ, chấm bài đến khuya. Đèn dầu leo lét, gió núi lùa qua. Con ngủ đi con, mẹ còn ngồi đây." },
      { t: 19, d: 5, who: "Cô Hằng", voice: "hang", text: "Ngân, con đứng dậy đọc lại cho các anh chị nghe nào." },
      { t: 25, d: 7, who: "Ngân (12 tuổi)", voice: "ngan12", text: "Mẹ ngồi bên cửa sổ, chấm bài đến khuya. Con ngủ đi con, mẹ còn ngồi đây." },
      { t: 33, d: 4, who: "Cô Hằng", voice: "hang", text: "Giỏi lắm. Cả lớp vỗ tay cho em Ngân." },
      { t: 38, d: 3, sfx: "chat", text: "[tiếng vỗ tay. Tiếng băng hết]" },
    ],
  },

  bang_hop: {
    title: "Cassette · TDK D60 · máy của trạm", label: "Họp ở trạm · 15 giờ 30/12/91", dur: 36,
    hidden: { t0: 52, t1: 62, text: "ĐÊM NAY" },
    segs: [
      { t: 1, d: 9, who: "Trung uý Bảo", voice: "bao", text: "Tôi nói thẳng. Ông Khải giấu xác vợ hai năm. Tối nay tôi đưa ông ấy về đồn. Con bé cho ngủ nhờ nhà bà Lụa, sáng mai mở buồng." },
      { t: 11, d: 6, who: "Y sĩ Sinh", voice: "sinh", text: "Tội con bé. Bố nó khổ quá hoá dở, con nó khổ theo. Tôi đồng ý với anh Bảo." },
      { t: 18, d: 7, who: "Trung uý Bảo", voice: "bao", text: "Ngày mất của bà ấy là hôm đông chí, hai mươi hai, qua rồi, có chuyện gì đâu. Chẳng có gì phải vội." },
      { t: 26, d: 7, who: "Y sĩ Sinh", voice: "sinh", text: "Cô Vân. Cô là người đọc hết hồ sơ nhà ấy. Cô nói đi, đêm nay làm thế nào thì tôi làm thế ấy." },
    ],
  },

  bang_khai_cuoi: {
    title: "Cassette · TDK D60 · máy của trạm", label: "Đồn công an thị trấn · 31/12/91", dur: 16,
    hidden: { t0: 16, t1: 24, text: "GIỮ" },
    segs: [
      { t: 1, d: 12, who: "Ông Khải", voice: "khai", text: "Cô Vân ơi. Hai năm nay tôi biết. Tôi biết nhà tôi mất rồi. Tôi chỉ cần một người bảo tôi giữ con bé lại. Chỉ một người thôi." },
    ],
  },

  bang_buong: {
    title: "Cassette · TDK D60 · chế độ tự ghi", label: "Buồng trong, đã trống · đêm 2/1/92", dur: 21,
    hidden: { t0: 20, t1: 28, text: "THUỐC" },
    segs: [
      { t: 1, d: 4, sfx: "hum", text: "[máy tự bật. Gió]" },
      { t: 6, d: 4, who: "???", voice: "hangcough", text: "[một tiếng ho khan. Giọng đàn bà]" },
      { t: 11, d: 7, who: "???", voice: "hang", ghost: 0, text: "Ngân ơi… thôi, mẹ tự lấy được rồi. Con ngủ đi." },
    ],
  },
};
