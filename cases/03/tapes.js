// Case 03 tapes: Tùng's reel-to-reel ("băng cối") of the first two sessions, 1971. Same format as cases/01/tapes.js.
// voices: tung, quoc, khiem (young men) · lan, yen, dung, nghi (young women). Recorded lines: audio/03/<tape>_<i>.mp3
import { morse, telex } from "./cipher.js";

const UNIT = 0.22;
const morseDur = (code) => [...code].reduce((t, c) => t + (c === "." ? 2 : c === "-" ? 4 : c === " " ? 2 : 3) * UNIT, 0);
const YEN = morse(telex("Yến xuống hồ"));

export const TAPES = {
  dem1: {
    title: "Băng cối · Akai · cuộn số 1", label: "Cơ 2/10/71 · Bạch Lan", dur: 96,
    hidden: { t0: 84, t1: 95, text: "ĐỪNG" },
    segs: [
      { t: 1, d: 4, sfx: "water", text: "[mưa trên mái ngói, nến nổ lách tách, tiếng ghế kéo]" },
      { t: 5.5, d: 7, who: "Tùng", voice: "tung", text: "Thứ Bảy, hai tháng Mười, bảy mốt. Buổi cơ thứ nhất ở nhà bà Diệp. Thi văn đoàn Bạch Lan đủ bảy người." },
      { t: 12.5, d: 5, who: "Lan", voice: "lan", text: "Để em ngồi đầu bàn cho. Mấy anh chị cứ đặt hờ ngón tay thôi." },
      { t: 18.5, d: 4.5, who: "Yến", voice: "yen", text: "Bà Diệp ơi, nếu bà có về thì cho con chén chạy." },
      { t: 24, d: 3, sfx: "slide", text: "[tiếng chén sứ trượt trên mặt giấy]" },
      { t: 27.5, d: 6, who: "Tùng", voice: "tung", text: "Tê. U. Nờ. Gờ. Ép. Ê, nó đánh tên tao!" },
      { t: 34.5, d: 3, sfx: "slide", text: "[con cơ chạy tiếp]" },
      { t: 38, d: 5, who: "Tùng", voice: "tung", text: "Rờ. O. Vê kép. I. Cái gì đây?" },
      { t: 43.5, d: 5, who: "Khiêm", voice: "khiem", text: "Chén chạy bậy rồi! Đứa nào đẩy đó?" },
      { t: 49, d: 3, sfx: "water", text: "[cả bọn cười rộ]" },
      { t: 52.5, d: 4, who: "Dung", voice: "dung", text: "Đừng giỡn. Chị Lan, chị đẩy phải không?" },
      { t: 57, d: 5, who: "Lan", voice: "lan", text: "Chị đâu có đẩy. Dung coi nè, chị để hờ thôi mà." },
      { t: 62.5, d: 5.5, who: "Quốc", voice: "quoc", text: "Thôi, ghi vô sổ đi Tùng. Tối nay về tao đi đường lớn, không đi ngang hồ sen nữa." },
      { t: 68.5, d: 5, who: "Tùng", voice: "tung", text: "Để tao ra ban công hút điếu thuốc đã. Ngột quá." },
      { t: 74, d: 9, sfx: "water", text: "[cửa ban công mở. Gió lùa. Tiếng mưa to hẳn lên]" },
      { t: 84, d: 2.5, ghost: 1, who: "???", voice: "dung", rev: true, text: "Đừng ra đó anh Tùng." },
      { t: 88, d: 7, sfx: "water", text: "[băng hết. Chỉ còn tiếng rè]" },
    ],
  },
  dem2: {
    title: "Băng cối · Akai · cuộn số 2", label: "Cơ 9/10/71 · Lan bật máy", dur: 0,   // set below
    hidden: { t0: 0, t1: 0, text: "DƯỚI CHÂN" },
    segs: [
      { t: 1, d: 3, sfx: "water", text: "[mưa. Tiếng bật công tắc máy]" },
      { t: 4.4, d: 5.6, who: "Lan", voice: "lan", text: "Để em bật máy anh Tùng, ghi lại cho đúng. Thử: một, hai, ba." },
      { t: 10.3, d: 1.5, sfx: "knuckle", text: "[cộc cộc cộc: tiếng ngón tay gõ lên mặt bàn, thử máy]" },
      { t: 12.5, d: 3, who: "Quốc", voice: "quoc", text: "Đừng gõ nữa Lan, ghê quá." },
      { t: 16.5, d: 5, who: "Yến", voice: "yen", text: "Bà Diệp ơi, anh Tùng đi đâu rồi? Anh Tùng có ở đó với bà không?" },
      { t: 22.5, d: 6, sfx: "water", text: "[im lặng. Con cơ không chạy. Chỉ có tiếng mưa]" },
      { t: 29, d: 3.5, who: "Nghi", voice: "nghi", text: "Nó không chạy… chị Lan ơi, nó không chạy." },
      { t: 34, d: morseDur(YEN) + 1, sfx: "morse", code: YEN, kind: "heel", unit: UNIT, text: "[tiếng gõ: trầm, dội, cách quãng; có tiếng gõ ngắn và tiếng gõ kéo lê]" },
    ],
  },
};

// the rest of tape 2 comes after the knocking, whatever its length
{
  const t2 = TAPES.dem2, end = 34 + morseDur(YEN) + 1.5;
  t2.segs.push(
    { t: end, d: 3, who: "Khiêm", voice: "khiem", text: "Ai gõ đó? Đứa nào gõ?" },
    { t: end + 3.5, d: 4, who: "Dung", voice: "dung", text: "Không ai nhấc tay hết. Mình thấy mà." },
    { t: end + 8, d: 3.5, who: "Yến", voice: "yen", text: "Mình nghe… gần lắm." },
    { t: end + 12, d: 5, sfx: "water", text: "[tiếng ghế đổ. Ai đó bấm tắt máy]" },
  );
  t2.dur = Math.ceil(end + 18);
  t2.hidden = { t0: end + 13, t1: end + 17.5, text: "DƯỚI CHÂN" };
}
