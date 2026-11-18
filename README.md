# Hồ đòi người · Hồ sơ Nửa Đêm

Game **hồ sơ điều tra kinh dị** chạy trên trình duyệt, bằng tiếng Việt. Người chơi đọc giấy tờ, nghe băng, xem video, ghim bằng chứng và trả lời từng trọng điểm.

> Đêm rằm tháng Bảy năm 2003, một cô giáo trẻ biến mất bên hồ thủy điện Nậm Khê. Làng nói: cứ bảy năm, hồ lại đòi một người.
> Bảy ngày sau, chương trình radio về chuyện ma *Chuyện Lúc Nửa Đêm* nhận được một cuộn băng ẩm mùi bùn…

| | |
|---|---|
| Người chơi | 1–4 |
| Thời gian | 2–4 giờ |
| Độ khó | Khó, tăng dần qua 5 trọng điểm. Manh mối nhiều dần: 7 → 13 → 20 → 27 → 34 tài liệu |
| Thiết bị | Máy tính hoặc điện thoại. Nên đeo tai nghe |

## Đa phương tiện
- **Băng cát-sét**: giọng nói thật (Google Gemini TTS) cho từng nhân vật. Có nút **Tua ngược**: một số câu chỉ nghe ra khi băng chạy ngược. Có **Phổ âm**: chữ giấu trong âm thanh. Lời thoại hiện dần khi băng chạy qua.
- **Video camera an ninh**: đen trắng, tua từng giây, tăng sáng, phóng to để đọc số thuyền.
- **Phòng tối**: chỉnh phơi sáng, tương phản, âm bản để rửa một tấm ảnh thiếu sáng.
- **Bản đồ địa hình**: kéo mực nước hồ để thấy nơi nào bị ngập.
- **Tin nhắn thoại**, báo cũ, biên bản, sổ sách viết tay, vở học trò, hình vẽ bút sáp.

## Kinh dị và tâm linh, tăng dần
Mỗi trọng điểm giải xong là đêm khuya thêm (đồng hồ trong truyện chạy từ 22:07 tới 05:20) và độ rợn tăng thêm một bậc:
- tiếng nước nhỏ giọt, tiếng thì thầm;
- chữ trong tài liệu đổi nghĩa trong chớp mắt;
- nhịp tim, dấu chân ướt đi ngang màn hình;
- đèn chập chờn, tiếng gõ cửa, bóng áo đỏ ở mép màn hình;
- chữ tự viết vào sổ tay, những dòng mực lạ xuất hiện trong tài liệu cũ;
- một cảnh doạ duy nhất.

Ở bìa có tuỳ chọn **Mức rợn: Nhẹ / Đầy đủ** và **tắt nháy sáng nhanh**.

## Chạy trên máy
Không cần cài gì. ES modules không chạy qua `file://`, nên cần một máy chủ tĩnh:
```
python3 -m http.server 8063
```
Mở http://localhost:8063

## Đưa lên mạng (GitHub Pages)
Settings → Pages → Build and deployment → Source: *Deploy from a branch* → chọn nhánh và thư mục `/ (root)`.

## Cấu trúc
- `index.html`, `css/style.css`
- `js/`: `main.js` (bàn điều tra), `media.js` (băng, camera, phòng tối, bản đồ), `audio.js` (âm thanh tổng hợp bằng Web Audio), `dread.js` (lớp kinh dị), `answer.js` (chấm đáp án), `store.js` (lưu tiến trình), `kit.js`
- `case/`: nội dung vụ án: tài liệu theo từng chặng (`docs0.js` … `docs4.js`), câu hỏi, băng ghi âm, hình vẽ SVG. Đáp án được mã hoá nhẹ trong `case/secret.js` (công cụ: `tools/secret.mjs`).
- `img/`: ảnh minh hoạ (tạo bằng AI). Thiếu ảnh nào thì game tự dùng hình vẽ thay thế.
- `audio/`: giọng đọc từng câu trên băng.
- `tools/smoke.mjs`: chơi thử toàn bộ vụ án bằng trình duyệt tự động.

## Ghi chú
Mọi nhân vật, địa danh, tờ báo, đài phát thanh đều hư cấu. Lấy cảm hứng từ thể loại game “hồ sơ điều tra” trên trình duyệt. Cốt truyện, mã nguồn và hình vẽ đều viết mới.
