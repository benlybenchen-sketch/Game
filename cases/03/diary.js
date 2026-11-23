// Two pages of Dung's diary (September 1971). The player copies them on the first night.
// From night 4 the original bà Dung hands over is no longer the same: she rewrites it at night.
import { ln } from "../../js/kit.js";
import { state } from "../../js/store.js";

const ORIGINAL = [
  ["nk_ngay", "Thứ Năm 23/9/1971. Bà trẻ mất đã mười ba năm mà cái nhà ở Hàng Me vẫn để không, chìa khóa ông Bảy gác giữ."],
  ["nk_lan", "Chị Lan lớn hơn mình ba tháng nên mình gọi chị cho vui. Hai đứa cao bằng nhau, tóc dài bằng nhau, ông Bảy mắt kém toàn gọi lộn tên."],
  ["nk_tay", "Mình thuận tay trái, hồi nhỏ bà nội lấy thước khẻ vô tay hoài mà không sửa được, giờ viết chữ vẫn nghiêng ngược về sau."],
  ["nk_seo", "Cái sẹo dưới cằm là từ hồi té ngựa trên Đà Lạt, chị Lan nói nhìn như dấu phẩy, ai thấy là biết mình liền."],
  ["nk_phap", "Chị Lan không đọc được một chữ tiếng Pháp. Bữa trước chị cầm cuốn sổ của bà trẻ lật tới lật lui rồi hỏi: Dung, cái này đọc sao?"],
  ["nk_guoc", "Chị đi đôi guốc gỗ ba chị mua ở Huế, đi đâu cũng nghe cộp cộp, ông Bảy nghe tiếng guốc là biết chị về."],
  ["nk_que", "Hồi nhỏ bà trẻ dạy mình một trò: viết thư bằng quẻ. Mình chỉ còn nhớ là đọc từ dưới lên. Bà trẻ nói chìa khóa nằm trong sổ của bà, viết bằng tiếng Tây cho người làm khỏi đọc trộm."],
  ["nk_tung", "Anh Tùng rủ cả nhóm cầu cơ ở nhà bà trẻ, bảy người, bảy tối thứ Bảy. Chị Lan nói hồi ở Huế chị ngồi cơ hoài, con cơ nghe lời chị."],
  ["nk_vang", "Nếu có vàng thật thì mình chia cho cả nhóm. Chị Lan cười, nói: chia sao cho hết, Dung."],
];

/** The rewritten lines, and from which stage bà Dung's copy carries them. */
const FORGED = {
  nk_tay: [3, "Chị Lan thuận tay trái, hồi nhỏ bà nội chị lấy thước khẻ vô tay hoài mà không sửa được, giờ chị viết chữ vẫn nghiêng ngược về sau."],
  nk_seo: [5, "Cái sẹo dưới cằm chị Lan là từ hồi nhỏ chị té xe, mình nói nhìn như dấu phẩy, ai thấy là biết chị liền."],
};

/** The diary as bà Dung hands it over at the current stage (lines are clickable for "point at the line" answers). */
export function diaryNow() {
  return ORIGINAL.map(([id, t]) => {
    const f = FORGED[id];
    return f && state.stage >= f[0] ? [id, f[1]] : [id, t];
  });
}
export const diaryHtml = (lines) => lines.map(([id, t]) => `<p>${ln(id, t)}</p>`).join("");
export const diaryCopyHtml = () => ORIGINAL.map(([, t]) => `<p>${t}</p>`).join("");
