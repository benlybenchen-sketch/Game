# Kế hoạch series "Hồ sơ Nửa Đêm"

## Đã chốt
- Hồ sơ 01: **Hồ đòi người** (đã xong; đang chờ thêm ảnh, xem danh sách bên dưới).
- Mỗi hồ sơ một bộ nhân vật riêng.
- Gộp chung một trang, có **màn hình chọn hồ sơ**; tiến trình từng hồ sơ lưu riêng.
- Giọng nói: GenMax. ElevenLabs v3 giọng Bắc cho người lớn, MiniMax cho trẻ em. Chọn giọng bằng cách đo: cho máy nhận dạng giọng nói nghe lại để chấm độ rõ lời, cộng với đo cao độ.
- Ảnh: người dùng tự tạo bằng Nano Banana Pro trong AI Studio theo prompt có sẵn. Khoá API Google gói miễn phí không tạo được ảnh.

## Hồ sơ 02: Gánh hát bội "Đêm giỗ Tổ" (đã làm)
Kinh thánh vụ án: docs/HS02_KINH_THANH.md. Prompt ảnh: docs/PROMPTS_ANH_02.md. Giọng: GenMax, giọng miền Nam (Can Cau, Tung, Quang Toan).

## Ý tưởng còn lại
1. **Chuyến tàu đêm SE7** (1997, đèo Hải Vân): khoang khoá trái, 40 giây trong hầm. Câu đố thời gian: lịch tàu, độ dài hầm, ảnh in giờ, bộ đàm.
2. **Ngôi nhà số 13 Hàng Mã** (Hà Nội 1985, bao cấp): tiếng guốc mộc, gác xép. Câu đố không gian: mặt cắt nhà, ống thông hơi, sổ gạo, tem phiếu, đồ hàng mã.
3. **Hang Khe Sim** (Trường Sơn, phát hiện 2008): bệnh viện dã chiến, đội quy tập hài cốt. Video MiniDV (NightShot, đèn pin, chụp khung hình), nhật ký y tá 1971, danh tính bị đánh tráo.
4. **Gánh hát bội cuối cùng** (miền Tây 1993): kép chính chết đêm cúng Tổ. Câu đố nhịp trống chầu, mặt nạ, vai diễn bị đánh tráo.

Gợi ý: số 2 + số 3 (khác kiểu kinh dị và khác kiểu câu đố).

## Video MiniDV (nếu chọn số 3)
- Cách A (nền): dựng bằng canvas từ ảnh AI: rung máy, lia/zoom, vùng đèn pin di chuyển, nhiễu băng, giao diện REC/ngày giờ/pin/zoom,
  chế độ NightShot xanh lá (có thứ chỉ hiện trong NightShot), đi từng khung hình, chụp khung hình thành tài liệu bằng chứng.
- Cách B (nâng cấp): vài clip video AI 5–8 giây (Veo, Kling…) do người dùng tạo; code chồng lớp MiniDV và manh mối lên.

## Ảnh còn thiếu cho Hồ sơ 01
Đã có: đủ 21/21 ảnh.
(prompt: docs/PROMPTS_ANH.md)

## Hồ sơ 03: "Cầu cơ" (đang thiết kế)
Kinh thánh vụ án: docs/HS03_KINH_THANH.md. Giải mã là lối chơi trung tâm: 7 đêm, 7 tầng mật mã (Telex, Morse, tàng đầu,
số Tô Châu kèm bảng 29 chữ, mã sách Kiều, chữ gương, quẻ họ Lâm). Có cơ chế "bản chép của bạn" để phát hiện giấy tờ bị sửa.

## Hồ sơ 04: "Người mẹ khác" (đang thiết kế)
Kinh thánh vụ án: docs/HS04_KINH_THANH.md. Đà Lạt 1996, hội chứng Capgras, sinh đôi soi gương. Người chơi là bác sĩ nội trú Vân (tên cố định, không có màn ký tên).
Lối chơi mới: y lệnh có hậu quả (kết luận sai thì băng Thảo chậm và lè nhè dần), chồng ảnh và lật ngang, so vân tay, bản giám định cuối cùng.

## Ý tưởng khác đã đề xuất (chưa làm)
Hồ sơ cuối series (để dành): "Hồ sơ của chính bạn" (meta, dùng dữ liệu chơi các hồ sơ trước, chỉ đọc trên máy).
Thôi miên lần thứ bảy (trí nhớ giả), Người thứ năm (Fansipan), Bóng đè (ký túc xá 1991), Băng NightShot (Hang Khe Sim), Tổng đài 108, Thợ ảnh thờ, Nhà số 13 Hàng Mã.
Tổng đài 108, Thợ ảnh thờ, Nhà xác ca 3, Tin nhắn lúc 3 giờ, Bùa ngải, Mù (chỉ âm thanh).

## Quy tắc âm thanh và cảnh doạ (áp dụng cho mọi hồ sơ từ nay về sau)
- Mọi hiệu ứng âm thanh đi qua bus `fx` trong `js/audio.js` (khuếch đại lớn, có limiter): luôn ở mức tối đa mà không vỡ tiếng. Hiệu ứng mới chỉ cần gọi `tone`/`noiseHit`/`sfx.*` là tự to.
- Giọng đọc và băng giữ ở master, không đẩy theo hiệu ứng.
- Cảnh doạ: luôn có tiếng thét lớn (`sfx.scream`, ba lớp giọng rít + tiếng nổ trầm); mỗi cảnh doạ giữ lâu hơn thời gian ghi trong case thêm 1,2 giây; bấm vào màn hình để tắt (sau 0,6 giây). Cảnh doạ chính thét hai lần.
