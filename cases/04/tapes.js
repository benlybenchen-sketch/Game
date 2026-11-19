// Case 04 tapes. Voices: hoa (Huế, 1990), hue (the same voice, 1996), thao, thao18 (1990), van (the player), kha, suong.
// Lines marked dose: 1 have sedated takes (<tape>_<i>_d1..d3.mp3) chosen by how many wrong conclusions the player made.
// Timings are laid out by tools/retime.py 04 from the real recordings.
export const TAPES = {
  tet90: {
    title: "Cassette · Maxell UR60", label: "Tết Canh Ngọ 1990", dur: 54,
    hidden: { t0: 45.4, t1: 50.4, text: "MẠ" },
    segs: [
      { t: 1, d: 3, sfx: "water", text: "[tiếng pháo xa, tiếng ly chén, tiếng chó sủa mừng]" },
      { t: 5, d: 4.3, who: "Thảo (18 tuổi)", voice: "thao18", text: "Mạ ơi, mạ hát ru một bài đi, con thu băng để dành." },
      { t: 10.3, d: 4.8, who: "Bà Hoa", voice: "hoa", text: "Lớn tướng rồi còn ru chi nữa con. Thôi được, một bài thôi nghe." },
      { t: 16.1, d: 6.8, who: "Bà Hoa", voice: "hoa", text: "Bồng bồng mẹ bế con sang. Đò dọc quan cấm, đò ngang không chèo." },
      { t: 23.9, d: 3.9, who: "Bà Hoa", voice: "hoa", text: "Mạ ru con bài ni từ hồi con còn đỏ hỏn." },
      { t: 28.8, d: 2.7, who: "Thảo (18 tuổi)", voice: "thao18", text: "Con Mực cũng đòi nghe nữa nè mạ." },
      { t: 32.5, d: 5.7, who: "Bà Hoa", voice: "hoa", text: "Năm mới mạ chỉ mong con mạnh giỏi. Mạ già thì mạ ở với con, rứa thôi." },
      { t: 39.2, d: 4.7, who: "Bà Hoa", voice: "hoa", text: "Ê, cái tô gỏi tôm kia đem ra xa mạ chút, mạ dị ứng đó." },
      { t: 44.9, d: 6, sfx: "water", text: "[cả nhà cười. Tiếng băng hết]" },
    ],
  },

  hoi_1: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 14/10/96 · BS Vân", dur: 67,
    hidden: { t0: 49.1, t1: 63.1, text: "5/7" },
    segs: [
      { t: 1, d: 2, sfx: "knock", text: "[tiếng cửa sắt, tiếng chìa khoá]" },
      { t: 4, d: 4.9, who: "BS. Vân (bạn)", voice: "van", text: "Chào chị Thảo. Tôi là bác sĩ Vân, từ nay tôi theo dõi chị." },
      { t: 9.9, d: 7.3, who: "Thảo", voice: "thao", dose: 1, text: "Chị là bác sĩ mới hả. Chị cũng nghĩ em điên, như ông Kha." },
      { t: 18.2, d: 2.9, who: "BS. Vân (bạn)", voice: "van", text: "Chị kể tôi nghe từ đầu được không?" },
      { t: 22.1, d: 14.6, who: "Thảo", voice: "thao", dose: 1, text: "Mạ em đi Sài Gòn ba tháng. Hôm mạ về, năm tháng Bảy, em ra bến xe đón. Em nhìn một cái là biết. Bà đó không phải mạ em." },
      { t: 37.7, d: 9.9, who: "Thảo", voice: "thao", dose: 1, text: "Trước đó em có té xe, có thấy anh Khoa lạ. Nhưng cái đó khác. Chị đừng gộp lại." },
      { t: 48.6, d: 15, sfx: "water", text: "[im lặng. Tiếng mưa trên mái tôn]" },
    ],
  },

  phong_van: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phỏng vấn BN P7 · 9/96 · BS Kha", dur: 64,
    hidden: { t0: 46.4, t1: 60.4, text: "CỤ THỂ" },
    segs: [
      { t: 1, d: 4.7, who: "BS. Kha", voice: "kha", text: "Chị nói người đến thăm chị không phải mẹ chị. Căn cứ vào đâu?" },
      { t: 6.7, d: 3.5, who: "Thảo", voice: "thao", text: "Nốt ruồi của mạ chạy sang bên kia miệng." },
      { t: 11.2, d: 6.4, who: "Thảo", voice: "thao", text: "Mạ đeo nhẫn ba mươi năm, ngón tay có cái vết hằn. Bà đó không có vết hằn." },
      { t: 18.6, d: 4, who: "Thảo", voice: "thao", text: "Bà đó ăn tôm. Mạ em ăn tôm là chết." },
      { t: 23.6, d: 2.5, who: "Thảo", voice: "thao", text: "Bà đó ru em bài khác." },
      { t: 27.1, d: 3.1, who: "BS. Kha", voice: "kha", text: "Còn anh Khoa, người yêu cũ của chị?" },
      { t: 31.2, d: 8.5, who: "Thảo", voice: "thao", text: "Anh Khoa thì em không biết. Mặt vẫn là mặt ảnh. Mà em không thấy ảnh. Em không chỉ ra được chỗ nào khác." },
      { t: 40.7, d: 4.2, who: "BS. Kha", voice: "kha", text: "Hoang tưởng chi tiết hoá. Ghi vào bệnh án giúp tôi." },
      { t: 45.9, d: 15, sfx: "water", text: "[tiếng bút viết. Tiếng ghế kéo]" },
    ],
  },

  hoi_2: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 16/10/96 · BS Vân", dur: 57,
    hidden: { t0: 33.6, t1: 52.6, text: "GIỌNG" },
    segs: [
      { t: 1, d: 6.3, who: "BS. Vân (bạn)", voice: "van", text: "Hôm mồng ba tháng Chín, bà Hoa gọi điện vào khoa. Chị nghe máy, chị nói gì?" },
      { t: 8.3, d: 9.6, who: "Thảo", voice: "thao", dose: 1, text: "Em nói không phải giọng mạ. Mạ em nói chuyện qua điện thoại em nhận ra liền, từ hồi nhỏ tới giờ." },
      { t: 18.9, d: 13.2, who: "Thảo", voice: "thao", dose: 1, text: "Anh Khoa gọi điện thì em lại thấy đúng là anh Khoa. Chỉ khi nhìn mặt ảnh em mới thấy lạ. Chị thấy không, hai cái khác nhau." },
      { t: 33.1, d: 20, sfx: "water", text: "[mưa]" },
    ],
  },

  tham_1: {
    title: "Băng ghi âm buổi thăm", label: "Thăm BN P7 · thứ Bảy 12/10/96", dur: 56,
    hidden: { t0: 32.6, t1: 51.6, text: "TUI" },
    segs: [
      { t: 1, d: 2, sfx: "knock", text: "[tiếng cửa phòng thăm nuôi]" },
      { t: 4, d: 4.4, who: "Bà “Hoa”", voice: "hue", text: "Mạ mang bánh cho con nè. Bánh bò, con thích nhất mà." },
      { t: 9.4, d: 4.2, who: "Thảo", voice: "thao", dose: 1, text: "Bà đi đi. Bà không phải mạ." },
      { t: 14.6, d: 6.8, who: "Bà “Hoa”", voice: "hue", text: "Bác sĩ coi đó, con nó cứ vậy hoài. Tui khổ lắm bác sĩ ơi. Tui nuôi nó hai mươi bốn năm." },
      { t: 22.4, d: 4.1, who: "Y tá Sương", voice: "suong", text: "Bác ra căng tin ngồi nghỉ chút đi bác, tôi dắt bác ra." },
      { t: 27.5, d: 3.6, who: "Bà “Hoa”", voice: "hue", text: "Dạ, cảm ơn cô. Để tui ăn chút gì." },
      { t: 32.1, d: 20, sfx: "water", text: "[tiếng bước chân xa dần. Thảo thở gấp]" },
    ],
  },

  hoi_3: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 18/10/96 · BS Vân", dur: 45,
    hidden: { t0: 27, t1: 41, text: "MỰC" },
    segs: [
      { t: 1, d: 3.3, who: "BS. Vân (bạn)", voice: "van", text: "Con Mực chết thế nào, chị nhớ không?" },
      { t: 5.3, d: 12.8, who: "Thảo", voice: "thao", dose: 1, text: "Từ hôm bà đó về, con Mực sủa bà suốt, không cho lại gần. Tối mồng tám bà cho nó ăn miếng thịt. Sáng ra nó chết." },
      { t: 19.1, d: 6.4, who: "Thảo", voice: "thao", dose: 1, text: "Con chó nó không nhìn mặt, chị. Nó ngửi. Nó biết." },
      { t: 26.5, d: 15, sfx: "water", text: "[mưa]" },
    ],
  },

  tham_2: {
    title: "Băng ghi âm buổi thăm", label: "Thăm BN P7 · thứ Bảy 19/10/96", dur: 58,
    hidden: { t0: 34.6, t1: 53.6, text: "MÁ" },
    segs: [
      { t: 1, d: 4.4, who: "Bà “Hoa”", voice: "hue", text: "Con ngồi yên, để mạ ru con ngủ một chút, con mệt rồi." },
      { t: 6.4, d: 6.1, who: "Bà “Hoa”", voice: "hue", text: "Ví dầu cầu ván đóng đinh. Cầu tre lắc lẻo gập ghềnh khó đi." },
      { t: 13.5, d: 4.1, who: "Thảo", voice: "thao", dose: 1, text: "Không phải bài đó! Không phải bài đó!" },
      { t: 18.6, d: 4.6, who: "Bà “Hoa”", voice: "hue", text: "Thảo, nghe lời má đi con, ngồi xuống, người ta nhìn kìa." },
      { t: 24.2, d: 4.3, who: "Thảo", voice: "thao", dose: 1, text: "Bà nghe chưa bác sĩ? Bà nghe chưa?" },
      { t: 29.5, d: 3.6, who: "Bà “Hoa”", voice: "hue", text: "Bác sĩ thông cảm, con nó lên cơn rồi." },
      { t: 34.1, d: 20, sfx: "water", text: "[tiếng giằng co, tiếng y tá, cửa đóng]" },
    ],
  },

  dem_3h: {
    title: "Máy ghi âm đặt trong phòng 7", label: "Đêm 19 rạng 20/10/96 · 02:40–03:20", dur: 64,
    hidden: { t0: 41.1, t1: 60.1, text: "MẠ VỀ" },
    segs: [
      { t: 1, d: 10, sfx: "water", text: "[tiếng thở đều của Thảo. Mưa nhỏ. Đồng hồ hành lang điểm ba tiếng]" },
      { t: 12, d: 12, sfx: "hum", ghost: 1, text: "[tiếng một người đàn bà ngân nga rất khẽ, ngay sát micro. Cửa phòng vẫn khoá]" },
      { t: 25, d: 7.5, who: "Giọng đàn bà", voice: "hoa", ghost: 1, text: "Bồng bồng mẹ bế con sang. Đò dọc quan cấm, đò ngang không chèo." },
      { t: 33.5, d: 3.1, who: "Thảo (nói mớ)", voice: "thao", text: "Mạ… mạ về rồi hả mạ." },
      { t: 37.6, d: 2, sfx: "knock", text: "[ba tiếng gõ lên ô kính cửa]" },
      { t: 40.6, d: 20, sfx: "water", text: "[im lặng]" },
    ],
  },

  hoi_4: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 20/10/96 · BS Vân", dur: 42,
    hidden: { t0: 23.7, t1: 37.7, text: "DÌ" },
    segs: [
      { t: 1, d: 3.7, who: "BS. Vân (bạn)", voice: "van", text: "Chị có biết mẹ chị có một người em gái không?" },
      { t: 5.7, d: 10.7, who: "Thảo", voice: "thao", dose: 1, text: "Không. Mạ chưa bao giờ nói. Thư mạ gửi về có nhắc một người dì, em tưởng là bà con xa." },
      { t: 17.4, d: 4.8, who: "Thảo", voice: "thao", dose: 1, text: "Mạ viết: dì giống mạ như đúc." },
      { t: 23.2, d: 15, sfx: "water", text: "[im lặng]" },
    ],
  },

  hoi_5: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 22/10/96 · BS Vân", dur: 42,
    hidden: { t0: 24.2, t1: 38.2, text: "GƯƠNG" },
    segs: [
      { t: 1, d: 4.5, who: "BS. Vân (bạn)", voice: "van", text: "Chị nói nốt ruồi chạy sang bên kia. Còn gì nữa không?" },
      { t: 6.5, d: 16.2, who: "Thảo", voice: "thao", dose: 1, text: "Tóc. Mạ rẽ ngôi bên này, bà đó rẽ bên kia. Bà đó cầm đũa tay trái, rồi thấy em nhìn thì đổi tay. Giống như mạ trong gương vậy, chị." },
      { t: 23.7, d: 15, sfx: "water", text: "[mưa]" },
    ],
  },

  hoi_6: {
    title: "Băng ghi âm khoa Nữ 2", label: "Phòng 7 · 24/10/96 · BS Vân", dur: 39,
    hidden: { t0: 20.7, t1: 34.7, text: "BÁNH" },
    segs: [
      { t: 1, d: 4.9, who: "BS. Vân (bạn)", voice: "van", text: "Chiều nay có hộp bánh gửi vào cho chị. Chị đừng ăn gì người ta gửi." },
      { t: 6.9, d: 7.6, who: "Thảo", voice: "thao", dose: 1, text: "Bánh ít đậu xanh hả chị? Hồi nhỏ mạ làm cho em hoài. Em đói lắm." },
      { t: 15.5, d: 3.7, who: "Thảo", voice: "thao", dose: 1, text: "Chị ký giấy cho em ra được không chị?" },
      { t: 20.2, d: 15, sfx: "water", text: "[mưa]" },
    ],
  },

  cuoi: {
    title: "Máy ghi âm đặt trong phòng 7", label: "Đêm 13 rạng 14/11/96", dur: 33,
    hidden: { t0: 15.4, t1: 29.4, text: "CẢM ƠN" },
    segs: [
      { t: 1, d: 10, sfx: "hum", text: "[tiếng ngân nga “Bồng bồng mẹ bế con sang”, rất khẽ]" },
      { t: 12, d: 1.9, who: "Giọng đàn bà, sát micro", voice: "hoa", text: "Cảm ơn bác sĩ." },
      { t: 14.9, d: 15, sfx: "water", text: "[im lặng]" },
    ],
  },
};
