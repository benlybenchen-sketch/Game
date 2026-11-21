// Case 06: two wax cylinders recorded by master Khâu on a borrowed Edison phonograph.
// Voices (for GenMax later): tu (Tú Nương, 16), thua (Thừa Tự, 19, drugged), tiet (the mother), khau (the old master).
// Until the recordings exist the player shows the words only.
export const TAPES = {
  khoc_ga: {
    title: "Ống đĩa sáp · Edison · máy của ông Tống", label: "Khóc gả · cô dâu nhà Triệu · đêm 14", dur: 70,
    hidden: { t0: 60, t1: 69, text: "THẠCH" },
    segs: [
      { t: 1, d: 4, sfx: "hum", text: "[tiếng kim máy hát rè rè, tiếng dế ngoài hiên]" },
      { t: 5, d: 4, who: "Thầy Khâu (khẽ)", voice: "khau", text: "Con khóc đi. Cô dâu nào cũng phải khóc. Khóc gì cũng được." },
      { t: 10, d: 8, who: "Cô dâu", voice: "tu", text: "Ơi… anh ơi… đường xuống bến đò tối lắm, anh cầm đèn đi trước, em theo sau…" },
      { t: 19, d: 8, who: "Cô dâu", voice: "tu", text: "Anh ơi… áo xanh không phải áo anh, anh mặc chật vai, anh có lạnh không…" },
      { t: 28, d: 7, who: "Cô dâu", voice: "tu", text: "Cha bán em được trăm hai, đủ mua cho anh một chỗ nằm, anh ơi…" },
      { t: 36, d: 3, who: "Thầy Khâu", voice: "khau", text: "Cô dâu khóc chồng phải gọi “chàng”, sao con gọi “anh”?" },
      { t: 40, d: 6, who: "Cô dâu", voice: "tu", text: "Con không có chàng. Con chỉ có anh." },
      { t: 47, d: 12, sfx: "hum", text: "[im lặng rất lâu. Rồi tiếng cô gái ngân một câu không lời]" },
    ],
  },
  dong_vien: {
    title: "Ống đĩa sáp · Edison · loa áp sát khe cửa", label: "Hiên Đông viện · chiều Rằm tháng Bảy", dur: 62,
    hidden: { t0: 50, t1: 60, text: "新房" },
    segs: [
      { t: 1, d: 5, sfx: "hum", text: "[gió lùa qua khe cửa, giấy bùa sột soạt]" },
      { t: 7, d: 4, sfx: "scrape", text: "[tiếng xích sắt kéo lê trên sàn gỗ]" },
      { t: 12, d: 6, who: "Giọng con trai, rất yếu", voice: "thua", text: "Tú Nương… Tú Nương… đừng uống…" },
      { t: 19, d: 5, who: "Giọng con trai", voice: "thua", text: "Anh Thạch… anh Thạch đâu rồi…" },
      { t: 25, d: 9, who: "Giọng phụ nữ, ru", voice: "tiet", text: "Ngủ đi con… ngủ đi… con của mẹ chết rồi… chết rồi thì không phải đi đâu nữa…" },
      { t: 35, d: 4, sfx: "scrape", text: "[tiếng xích. Tiếng ai đó hít một hơi rất dài]" },
      { t: 40, d: 6, who: "Giọng phụ nữ", voice: "tiet", text: "Ai đứng ngoài hiên đấy? Lưu Phúc, mời thầy Khâu uống trà." },
      { t: 47, d: 13, sfx: "hum", text: "[tiếng bước chân lại gần. Ống đĩa hết]" },
    ],
  },
};
