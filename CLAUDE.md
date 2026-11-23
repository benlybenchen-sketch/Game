# Hồ sơ Nửa Đêm: luật làm việc (đọc trước mọi việc)

Series game hồ sơ điều tra kinh dị chạy trên trình duyệt, tiếng Việt. Site tĩnh, ES module, không build.
Mỗi hồ sơ nằm trong `cases/<id>/` (docs*.js, questions.js, index.js với META, secret.js do `tools/secret.mjs` sinh ra).
Kế hoạch, kịch bản đã lưu và luật chi tiết: `docs/KE_HOACH.md`. Kinh thánh từng hồ sơ: `docs/HSxx_KINH_THANH.md`.

## 1. Độ khó: từ hồ sơ 07 trở đi, mức cực đại ngay từ bản đầu
Người chơi đã chê hồ sơ 01 và 02 là "dễ đoán", "dễ thở". Không được lặp lại. Luật đầy đủ (1–15) ở `docs/KE_HOACH.md`, mục "Quy tắc độ khó". Tóm tắt:
1. Không có đáp án đúng dài hơn, chi tiết hơn hay nhiều vế hơn các phương án khác. Mọi phương án sai phải nghe hợp lý.
2. Một cái tên (hay một đáp án) làm đáp án tối đa ở 2 trọng điểm. Hung thủ không được lộ trước trọng điểm áp chót.
3. Tên trọng điểm, tên thư mục, tên tài liệu, lời giới thiệu (blurb) không được chứa đáp án hay chỉ hướng.
4. Lời hỏi và nhãn không được tự trả lời: không "thật ra", "thật sự", "người xưng là", "câu cho thấy… không phải…".
5. Lời nhắn giữa các trọng điểm (memo) chỉ tóm điều vừa giải; không nói trước đáp án câu sau, không chỉ thứ tự đọc.
6. Không in đậm, gạch chân, in nghiêng, tô màu gì trong tài liệu. Không ngoặc kép mỉa mai báo trước sự thật.
7. Tài liệu không giải thích hộ cách giải ("ghép chữ đầu…", "tháng Một là tháng 11 âm lịch", "đừng nhầm chỗ này"). Cách giải để trong gợi ý.
8. Câu "bấm vào câu" phải có ít nhất 5 câu bấm được trong tài liệu chứa đáp án, phần lớn là câu nhiễu hợp lý.
9. Mỗi trọng điểm ít nhất một bẫy bằng giấy tờ; có nghi phạm giả có động cơ thật; câu cuối phải suy luận thật.
10. `META.strict: true` (không báo "đúng x/y mục"; đồng hồ `META.timeLimit` phút cho cả hồ sơ (mặc định 150; hồ sơ 06, 07 là 240), chỉ chạy khi bàn làm việc đang mở; nộp sai bị trừ 3, rồi 5, rồi 10 phút, tính chung cả hồ sơ, tối đa 10; hết giờ là game over, đánh dấu thất bại, phải chơi lại từ đầu; gợi ý sau 2 lần sai, lời giải sau 4, chấm hạng S–D). Kiểm bằng `CASE=<id> node tools/timer_test.cjs`.
11. Chống đoán cốt truyện (luật 16–22 trong KE_HOACH): không đánh tráo danh tính; người thuê vô tội; hai vụ chồng nhau (người dựng ma khác người giết); mỗi trọng điểm lật kết luận trước; không ai chối điều người chơi chưa nghi; hung thủ ở vai việc vặt; giữ một hiện tượng siêu nhiên không giải thích.
12. Luôn đủ dữ kiện để giải (luật 23), nhưng dữ kiện để thô, rải rác, có nhiễu; không bảng tra gọn, không chỉ cách dùng. Kinh thánh có "Bảng đủ tài liệu"; giải lại toàn bộ chỉ bằng tài liệu trong game trước khi mở.
13. Ghim bằng chứng (luật 24): mỗi ô ghim có nhãn vai trò; số ô = số ý cần chứng minh; nhóm nhận mọi tài liệu chứng minh được ý đó. Không bắt người chơi đoán cách chia ô.
`node tools/audit.mjs <id>` kiểm tra tự động các luật trên cho hồ sơ 03 trở đi; hồ sơ mới chỉ được mở khi audit báo `ok`.
Tên thư mục chỉ ghi đêm/ngày (ví dụ "Đêm thứ hai · Thứ Hai 8/11"), không ghi tên mật mã, tài liệu tra cứu hay cách giải ("Gương", "Soi gương", "Chiết tự", "Ngũ phục"). Tên trọng điểm cũng vậy.
Lời nhắn sau mỗi trọng điểm không được hé câu sau ("sáng mai tôi đi xem sổ phát tang", "ai buộc chỉ đỏ?", "bác sĩ dặn để ý bà ăn uống ra sao").
Tên nhân vật gặp ngay từ trang đầu mà cũng là đáp án thì khai trong `META.publicNames`, kèm lý do.
Hồ sơ 02 giữ nguyên như đã phát hành, chỉ sửa khi người dùng yêu cầu.

## 2. Trước khi mở một hồ sơ (bắt buộc, nhất là sau mỗi đợt ảnh mới)
`python3 -m http.server 8063` ở thư mục repo, rồi:
1. `node tools/audit.mjs <id>`: phải ra `ok`.
2. `CASE=<id> node tools/smoke.mjs <thư mục>`: chơi tự động hết hồ sơ, máy tính và điện thoại.
3. `CASE=<id> node tools/docs_ui.cjs`: mở mọi tài liệu sau khi thắng và sau khi thua.
4. `node tools/traps.mjs`: thêm bẫy chính của hồ sơ mới vào danh sách; mọi bẫy phải bị từ chối.
5. Vẽ khung vùng bấm lên ảnh thật để kiểm toạ độ; xem bìa trên máy tính (`META.coverStyle` cho ảnh dọc).
Mỗi khi người dùng gửi đủ bộ ảnh: chạy lại toàn bộ danh sách này và báo kết quả.

## 3. Ảnh, nhạc, giọng
- Không bao giờ tự vẽ hình người bằng code (người que, SVG người). Hồ sơ chưa đủ ảnh thì khoá (`soon: true` trong `cases/list.js`, nhãn "release soon").
- Prompt ảnh: mỗi ảnh một prompt tự đủ, ghi tỉ lệ khung ngay trong prompt, rất chi tiết để không phải tạo lại; kèm ghi chú cho từng ảnh.
- Nhạc: chỉ dùng nhạc tự viết (ví dụ `tools/compose06c.py`) hoặc có giấy phép rõ ràng. Không đưa nhạc có bản quyền của người khác lên repo hay web, kể cả bản "phối lại" giữ nguyên bản ghi gốc.
- Giọng đọc: GenMax (header `xi-api-key`, giá trị "proxy-injected" do proxy chèn). Không bao giờ xin khoá trong chat.

## 4. Bảo mật và git
- Không lưu gì vào Google Drive liên kết. Không commit hay dùng lại khoá API người dùng từng dán trong chat; cần khoá thì dùng `request_credential`.
- Chỉ đẩy lên nhánh `claude/compassionate-allen-gmd2d8`. Không tạo pull request nếu không được yêu cầu.
- Trước mỗi commit: `node tools/stamp.mjs` (gắn mã phiên bản để trình duyệt tải file mới).
- Commit với `git -c user.name="benlybenchen-sketch" -c user.email="noreply@users.noreply.github.com"`.
