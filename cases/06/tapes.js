// Case 06: two wax cylinders recorded by master Khâu on a borrowed Edison phonograph.
// Voices (for GenMax later): tu (Tú Nương, 16), thua (Thừa Tự, 19, drugged), tiet (the mother), khau (the old master).
// Until the recordings exist the player shows the words only.
export const TAPES = {
  khoc_ga: {
    title: "Ống đĩa sáp · Edison · máy của ông Tống", label: "Khóc gả · cô dâu nhà Triệu · đêm 14", dur: 59,
    hidden: { t0: 48, t1: 57, text: "THẠCH" },
    segs: [
      { t: 1, d: 4, sfx: "hum", text: "[tiếng kim máy hát rè rè, tiếng dế ngoài hiên]" },
      { t: 6, d: 5, who: "Thầy Khâu (khẽ)", voice: "khau", text: "Con khóc đi. Cô dâu nào cũng phải khóc. Khóc gì cũng được." },
      { t: 12, d: 6.9, who: "Cô dâu", voice: "tu", text: "Ơi… anh ơi… đường xuống bến đò tối lắm, anh cầm đèn đi trước, em theo sau…" },
      { t: 19.9, d: 6.3, who: "Cô dâu", voice: "tu", text: "Anh ơi… nước sông lạnh lắm, anh có lạnh không…" },
      { t: 27.2, d: 5.5, who: "Cô dâu", voice: "tu", text: "Người ta mua em rồi, anh ơi… mua em về nằm cạnh người ta…" },
      { t: 33.7, d: 4.2, who: "Thầy Khâu", voice: "khau", text: "Cô dâu khóc chồng phải gọi “chàng”, sao con gọi “anh”?" },
      { t: 38.9, d: 3.9, who: "Cô dâu", voice: "tu", text: "Con… con không biết gọi thế nào." },
      { t: 43.8, d: 12, sfx: "hum", text: "[im lặng rất lâu. Rồi tiếng cô gái ngân một câu không lời]" },
    ],
  },
  dong_vien: {
    title: "Ống đĩa sáp · Edison · loa áp sát khe cửa", label: "Hiên Đông viện · chiều Rằm tháng Bảy", dur: 57,
    hidden: { t0: 46, t1: 55, text: "新房" },
    segs: [
      { t: 1, d: 5, sfx: "hum", text: "[gió lùa qua khe cửa, giấy bùa sột soạt]" },
      { t: 7, d: 4, sfx: "scrape", text: "[tiếng xích sắt kéo lê trên sàn gỗ]" },
      { t: 12, d: 4.4, who: "Giọng con trai, rất yếu", voice: "thua", text: "Tú Nương… Tú Nương… đừng uống…" },
      { t: 17.4, d: 3.1, who: "Giọng con trai", voice: "thua", text: "Anh Thạch… anh Thạch đâu rồi…" },
      { t: 21.5, d: 7, who: "Giọng phụ nữ, ru", voice: "tiet", text: "Ngủ đi con… ngủ đi… con của mẹ chết rồi… chết rồi thì không phải đi đâu nữa…" },
      { t: 29.5, d: 4, sfx: "scrape", text: "[tiếng xích. Tiếng ai đó hít một hơi rất dài]" },
      { t: 34.5, d: 4.7, who: "Giọng phụ nữ", voice: "tiet", text: "Ai đứng ngoài hiên đấy? Lưu Phúc, mời thầy Khâu uống trà." },
      { t: 40.2, d: 13, sfx: "hum", text: "[tiếng bước chân lại gần. Ống đĩa hết]" },
    ],
  },
};
