// Case 04 tapes. Voices: hoa (Đà Nẵng, 1990), hue (the same voice, 1996), thao, thao18 (1990), van (the player), kha, suong.
// Lines marked dose: 1 have sedated takes (<tape>_<i>_d1..d3.mp3) chosen by how many wrong conclusions the player made.
// Timings are laid out by tools/retime.py 04 from the real recordings.
export const TAPES = {
  tet90: {
    title: "Cassette · Maxell UR60", label: "Tết Canh Ngọ 1990", dur: 59,
    hidden: { t0: 50.3, t1: 55.3, text: "MẸ" },
    segs: [
      { t: 1, d: 3, sfx: "water", text: "[tiếng pháo xa, tiếng ly chén, tiếng chó sủa mừng]" },
      { t: 5, d: 4.3, who: "Thảo (18 tuổi)", voice: "thao18", text: "Mẹ ơi, mẹ hát ru một bài đi, con thu băng để dành." },
      { t: 10.3, d: 5.5, who: "Bà Hoa", voice: "hoa", text: "Lớn tướng rồi còn ru chi nữa con. Thôi được, một bài thôi nghe." },
      { t: 16.8, d: 10, who: "Bà Hoa", voice: "hoa", text: "Bồng bồng mẹ bế con sang. Đò dọc quan cấm, đò ngang không chèo." },
      { t: 27.8, d: 3.8, who: "Bà Hoa", voice: "hoa", text: "Mẹ ru con bài ni từ hồi con còn đỏ hỏn." },
      { t: 32.6, d: 2.7, who: "Thảo (18 tuổi)", voice: "thao18", text: "Con Mực cũng đòi nghe nữa nè mẹ." },
      { t: 36.3, d: 6.6, who: "Bà Hoa", voice: "hoa", text: "Năm mới mẹ chỉ mong con mạnh giỏi. Mẹ già thì mẹ ở với con, rứa thôi hè." },
      { t: 43.9, d: 4.9, who: "Bà Hoa", voice: "hoa", text: "Ê, cái tô gỏi tôm kia đem ra xa mẹ chút, mẹ dị ứng đó." },
      { t: 49.8, d: 6, sfx: "water", text: "[cả nhà cười. Tiếng băng hết]" },
    ],
  },

  hoi_1: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 14/10/96 · BS Vân", dur: 67,
    hidden: { t0: 49, t1: 63, text: "5/7" },
    segs: [
      { t: 1, d: 2, sfx: "knock", text: "[tiếng cửa sắt, tiếng chìa khoá]" },
      { t: 4, d: 4.9, who: "BS. Vân (bạn)", voice: "van", text: "Chào chị Thảo. Tôi là bác sĩ Vân, từ nay tôi theo dõi chị." },
      { t: 9.9, d: 7.3, who: "Thảo", voice: "thao", dose: 1, text: "Chị là bác sĩ mới hả. Chị cũng nghĩ em điên, như ông Kha." },
      { t: 18.2, d: 2.9, who: "BS. Vân (bạn)", voice: "van", text: "Chị kể tôi nghe từ đầu được không?" },
      { t: 22.1, d: 14.8, who: "Thảo", voice: "thao", dose: 1, text: "Mẹ em đi Sài Gòn ba tháng. Hôm mẹ về, năm tháng Bảy, em ra bến xe đón. Em nhìn một cái là biết. Bà đó không phải mẹ em." },
      { t: 37.9, d: 9.6, who: "Thảo", voice: "thao", dose: 1, text: "Trước đó em có té xe, có thấy anh Khoa lạ. Nhưng cái đó khác. Chị đừng gộp lại." },
      { t: 48.5, d: 15, sfx: "water", text: "[im lặng. Tiếng mưa trên mái tôn]" },
    ],
  },

  phong_van: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phỏng vấn BN P7 · 9/96 · BS Kha", dur: 65,
    hidden: { t0: 47.4, t1: 61.4, text: "CỤ THỂ" },
    segs: [
      { t: 1, d: 4.7, who: "BS. Kha", voice: "kha", text: "Chị nói người đến thăm chị không phải mẹ chị. Căn cứ vào đâu?" },
      { t: 6.7, d: 3.3, who: "Thảo", voice: "thao", text: "Nốt ruồi của mẹ chạy sang bên kia miệng." },
      { t: 11, d: 6.3, who: "Thảo", voice: "thao", text: "Mẹ đeo nhẫn ba mươi năm, ngón tay có cái vết hằn. Bà đó không có vết hằn." },
      { t: 18.3, d: 4.2, who: "Thảo", voice: "thao", text: "Bà đó ăn tôm. Mẹ em ăn tôm là chết." },
      { t: 23.5, d: 3, who: "Thảo", voice: "thao", text: "Bà đó ru em bài khác." },
      { t: 27.5, d: 3.1, who: "BS. Kha", voice: "kha", text: "Còn anh Khoa, người yêu cũ của chị?" },
      { t: 31.6, d: 9.1, who: "Thảo", voice: "thao", text: "Anh Khoa thì em không biết. Mặt vẫn là mặt ảnh. Mà em không thấy ảnh. Em không chỉ ra được chỗ nào khác." },
      { t: 41.7, d: 4.2, who: "BS. Kha", voice: "kha", text: "Hoang tưởng chi tiết hoá. Ghi vào bệnh án giúp tôi." },
      { t: 46.9, d: 15, sfx: "water", text: "[tiếng bút viết. Tiếng ghế kéo]" },
    ],
  },

  hoi_2: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 16/10/96 · BS Vân", dur: 57,
    hidden: { t0: 34.4, t1: 53.4, text: "GIỌNG" },
    segs: [
      { t: 1, d: 6.3, who: "BS. Vân (bạn)", voice: "van", text: "Hôm mồng ba tháng Chín, bà Hoa gọi điện vào khoa. Chị nghe máy, chị nói gì?" },
      { t: 8.3, d: 9.7, who: "Thảo", voice: "thao", dose: 1, text: "Em nói không phải giọng mẹ. Mẹ em nói chuyện qua điện thoại em nhận ra liền, từ hồi nhỏ tới giờ." },
      { t: 19, d: 13.9, who: "Thảo", voice: "thao", dose: 1, text: "Anh Khoa gọi điện thì em lại thấy đúng là anh Khoa. Chỉ khi nhìn mặt ảnh em mới thấy lạ. Chị thấy không, hai cái khác nhau." },
      { t: 33.9, d: 20, sfx: "water", text: "[mưa]" },
    ],
  },

  tham_1: {
    title: "Băng ghi âm buổi thăm", label: "Thăm BN P7 · thứ Bảy 12/10/96", dur: 58,
    hidden: { t0: 34.6, t1: 53.6, text: "TUI" },
    segs: [
      { t: 1, d: 2, sfx: "knock", text: "[tiếng cửa phòng thăm nuôi]" },
      { t: 4, d: 4.5, who: "Bà “Hoa”", voice: "hue", text: "Mẹ mang bánh cho con nè. Bánh bò, con thích nhất mà." },
      { t: 9.5, d: 4.4, who: "Thảo", voice: "thao", dose: 1, text: "Bà đi đi. Bà không phải mẹ." },
      { t: 14.9, d: 8.4, who: "Bà “Hoa”", voice: "hue", text: "Bác sĩ coi đó, con nó cứ vậy hoài. Tui khổ lắm bác sĩ ơi. Tui nuôi nó hai mươi bốn năm." },
      { t: 24.3, d: 4.1, who: "Y tá Sương", voice: "suong", text: "Bác ra căng tin ngồi nghỉ chút đi bác, tôi dắt bác ra." },
      { t: 29.4, d: 3.7, who: "Bà “Hoa”", voice: "hue", text: "Dạ, cảm ơn cô. Để tui ăn chút gì." },
      { t: 34.1, d: 20, sfx: "water", text: "[tiếng bước chân xa dần. Thảo thở gấp]" },
    ],
  },

  hoi_3: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 18/10/96 · BS Vân", dur: 46,
    hidden: { t0: 28.4, t1: 42.4, text: "MỰC" },
    segs: [
      { t: 1, d: 3.3, who: "BS. Vân (bạn)", voice: "van", text: "Con Mực chết thế nào, chị nhớ không?" },
      { t: 5.3, d: 13.7, who: "Thảo", voice: "thao", dose: 1, text: "Từ hôm bà đó về, con Mực sủa bà suốt, không cho lại gần. Tối mồng tám bà cho nó ăn miếng thịt. Sáng ra nó chết." },
      { t: 20, d: 6.9, who: "Thảo", voice: "thao", dose: 1, text: "Con chó nó không nhìn mặt, chị. Nó ngửi. Nó biết." },
      { t: 27.9, d: 15, sfx: "water", text: "[mưa]" },
    ],
  },

  tham_2: {
    title: "Băng ghi âm buổi thăm", label: "Thăm BN P7 · thứ Bảy 19/10/96", dur: 61,
    hidden: { t0: 37.7, t1: 56.7, text: "MÁ" },
    segs: [
      { t: 1, d: 4.7, who: "Bà “Hoa”", voice: "hue", text: "Con ngồi yên, để mẹ ru con ngủ một chút, con mệt rồi." },
      { t: 6.7, d: 6, who: "Bà “Hoa”", voice: "hue", text: "Ví dầu cầu ván đóng đinh. Cầu tre lắc lẻo gập ghềnh khó đi." },
      { t: 13.7, d: 5.5, who: "Thảo", voice: "thao", dose: 1, text: "Không phải bài đó! Không phải bài đó!" },
      { t: 20.2, d: 5.1, who: "Bà “Hoa”", voice: "hue", text: "Thảo, nghe lời má đi con, ngồi xuống, người ta nhìn kìa." },
      { t: 26.3, d: 5.1, who: "Thảo", voice: "thao", dose: 1, text: "Bà nghe chưa bác sĩ? Bà nghe chưa?" },
      { t: 32.4, d: 3.8, who: "Bà “Hoa”", voice: "hue", text: "Bác sĩ thông cảm, con nó lên cơn rồi." },
      { t: 37.2, d: 20, sfx: "water", text: "[tiếng giằng co, tiếng y tá, cửa đóng]" },
    ],
  },

  dem_3h: {
    title: "Máy ghi âm đặt trong phòng 7", label: "Đêm 19 rạng 20/10/96 · 02:40–03:20", dur: 64,
    hidden: { t0: 40.7, t1: 59.7, text: "MẸ VỀ" },
    segs: [
      { t: 1, d: 10, sfx: "water", text: "[tiếng thở đều của Thảo. Mưa nhỏ. Đồng hồ hành lang điểm ba tiếng]" },
      { t: 12, d: 12, sfx: "hum", ghost: 1, text: "[tiếng một người đàn bà ngân nga rất khẽ, ngay sát micro. Cửa phòng vẫn khoá]" },
      { t: 25, d: 7.2, who: "Giọng đàn bà", voice: "hoa", ghost: 1, text: "Bồng bồng mẹ bế con sang. Đò dọc quan cấm, đò ngang không chèo." },
      { t: 33.2, d: 3, who: "Thảo (nói mớ)", voice: "thao", text: "Mẹ… mẹ về rồi hả mẹ." },
      { t: 37.2, d: 2, sfx: "knock", text: "[ba tiếng gõ lên ô kính cửa]" },
      { t: 40.2, d: 20, sfx: "water", text: "[im lặng]" },
    ],
  },

  hoi_4: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 20/10/96 · BS Vân", dur: 41,
    hidden: { t0: 23.3, t1: 37.3, text: "DÌ" },
    segs: [
      { t: 1, d: 3.7, who: "BS. Vân (bạn)", voice: "van", text: "Chị có biết mẹ chị có một người em gái không?" },
      { t: 5.7, d: 10.6, who: "Thảo", voice: "thao", dose: 1, text: "Không. Mẹ chưa bao giờ nói. Thư mẹ gửi về có nhắc một người dì, em tưởng là bà con xa." },
      { t: 17.3, d: 4.5, who: "Thảo", voice: "thao", dose: 1, text: "Mẹ viết: dì giống mẹ như đúc." },
      { t: 22.8, d: 15, sfx: "water", text: "[im lặng]" },
    ],
  },

  hoi_5: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 22/10/96 · BS Vân", dur: 42,
    hidden: { t0: 23.9, t1: 37.9, text: "GƯƠNG" },
    segs: [
      { t: 1, d: 4.5, who: "BS. Vân (bạn)", voice: "van", text: "Chị nói nốt ruồi chạy sang bên kia. Còn gì nữa không?" },
      { t: 6.5, d: 15.9, who: "Thảo", voice: "thao", dose: 1, text: "Tóc. Mẹ rẽ ngôi bên này, bà đó rẽ bên kia. Bà đó cầm đũa tay trái, rồi thấy em nhìn thì đổi tay. Giống như mẹ trong gương vậy, chị." },
      { t: 23.4, d: 15, sfx: "water", text: "[mưa]" },
    ],
  },

  hoi_6: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 24/10/96 · BS Vân", dur: 40,
    hidden: { t0: 21.7, t1: 35.7, text: "BÁNH" },
    segs: [
      { t: 1, d: 4.9, who: "BS. Vân (bạn)", voice: "van", text: "Chiều nay có hộp bánh gửi vào cho chị. Chị đừng ăn gì người ta gửi." },
      { t: 6.9, d: 7.8, who: "Thảo", voice: "thao", dose: 1, text: "Bánh ít đậu xanh hả chị? Hồi nhỏ mẹ làm cho em hoài. Em đói lắm." },
      { t: 15.7, d: 4.5, who: "Thảo", voice: "thao", dose: 1, text: "Chị ký giấy cho em ra được không chị?" },
      { t: 21.2, d: 15, sfx: "water", text: "[mưa]" },
    ],
  },

  cuoi: {
    title: "Máy ghi âm đặt trong phòng 7", label: "Đêm 13 rạng 14/11/96", dur: 33,
    hidden: { t0: 15.2, t1: 29.2, text: "CẢM ƠN" },
    segs: [
      { t: 1, d: 10, sfx: "hum", text: "[tiếng ngân nga “Bồng bồng mẹ bế con sang”, rất khẽ]" },
      { t: 12, d: 1.7, who: "Giọng đàn bà, sát micro", voice: "hoa", text: "Cảm ơn bác sĩ." },
      { t: 14.7, d: 15, sfx: "water", text: "[im lặng]" },
    ],
  },
};
