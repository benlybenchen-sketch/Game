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
10. `META.strict: true` (không báo "đúng x/y mục"; đồng hồ `META.timeLimit` phút cho cả hồ sơ (mặc định 150; hồ sơ 06, 07 là 240; hồ sơ 08 là 300), chỉ chạy khi bàn làm việc đang mở; nộp sai bị trừ 3, rồi 5, rồi 10 phút, tính chung cả hồ sơ, tối đa 10; hết giờ là game over, đánh dấu thất bại, phải chơi lại từ đầu; chấm hạng S–D). Gợi ý và lời giải: từ hồ sơ 04 không còn "sai 2 lần mở gợi ý, sai 4 lần mở lời giải"; mở lúc nào cũng được nhưng trả bằng thời gian (`META.hintCost`: gợi ý −10 phút mỗi cái, lời giải −20 phút), nộp sai không mở thêm gì. Hồ sơ 03 giữ cách cũ. Kiểm bằng `CASE=<id> node tools/timer_test.cjs`.
11. Chống đoán cốt truyện (luật 16–22 trong KE_HOACH): không đánh tráo danh tính; người thuê vô tội; hai vụ chồng nhau (người dựng ma khác người giết); mỗi trọng điểm lật kết luận trước; không ai chối điều người chơi chưa nghi; hung thủ ở vai việc vặt; giữ một hiện tượng siêu nhiên không giải thích.
12. Luôn đủ dữ kiện để giải (luật 23), nhưng dữ kiện để thô, rải rác, có nhiễu; không bảng tra gọn, không chỉ cách dùng. Kinh thánh có "Bảng đủ tài liệu"; giải lại toàn bộ chỉ bằng tài liệu trong game trước khi mở.
13. Ghim bằng chứng (luật 24): số ô = số ý cần chứng minh; nhóm nhận mọi tài liệu chứng minh được ý đó (kể cả băng, tranh, thư phụ). Nhãn vai trò vẫn viết trong `roles` cho kinh thánh và kiểm tra; người dùng muốn khó hơn nên từ hồ sơ 04 nhãn được ẩn (`META.pinRoles: false`): người chơi tự tìm ý cần chứng minh. Khi ẩn nhãn, rà lại từng nhóm để không tài liệu hợp lệ nào bị chấm sai.
14. Câu đố kiểu phòng thoát hiểm (luật 25, kho câu đố `docs/CAU_DO.md`): mỗi hồ sơ từ 07 dùng ít nhất 3 loại, ít nhất một loại tương tác (`js/puzzles.js`: `blocks`, `grille`, `lockbox`), ít nhất một chuỗi câu đố nối nhau; không lặp loại chính của hồ sơ trước; mỗi câu đố một lời giải duy nhất, có bẫy, được `tools/solveXX.mjs` giải lại. Câu đố không được tự báo đúng sai (xếp đến đâu chữ hiện thành câu đến đó là hỏng): kết quả trung gian phải trông vô nghĩa (dãy số, phím, toạ độ) và chỉ kiểm được ở bước sau; thứ tự, cách đặt lấy từ tài liệu khác; đi tắt bằng cách thử hết phải gặp bẫy. Thử sai mã hộp khoá bị trừ 3 phút. Hộp khoá: `node tools/lockbox.mjs <id>`. Mẫu chuẩn: trang thử `thu-cau-do.html`.
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

## 5. Danh sách tự kiểm cho mọi hồ sơ mới (bắt buộc từ hồ sơ 08; người dùng yêu cầu độ chỉn chu tối đa, không để phải test đi test lại)
Trước khi báo "xong" một hồ sơ hay một đợt sửa, tự đi hết danh sách này:
1. Kinh thánh có đủ: nhân vật và sự thật, lịch tính lại (can chi, tiết khí đúng năm), dòng thời gian, từng trọng điểm (câu, phương án, đáp án, cách giải, bẫy, ghim, điều người chơi sẽ tin sai), bảng đủ tài liệu (từng nhánh nếu có nhánh), danh sách tài liệu và nhiễu, kết thúc, điều không ai giải thích, ảnh, nhạc.
2. Luật độ khó 1–28 (`docs/KE_HOACH.md`), kể cả: phương án dài ngang nhau; tên tài liệu, thư mục, trọng điểm, memo không lộ đáp án; không in đậm, nghiêng, gạch chân, tô màu, ngoặc kép mỉa mai trong tài liệu; ≥ 5 câu bấm (hồ sơ 08 trở đi ≥ 10).
3. META: `strict: true`, `timeLimit`, `hintCost: { hint: 10, solve: 20 }` (không có cơ chế sai 2 lần mở gợi ý), `pinRoles: false`, `coverFocus` (bìa trên điện thoại), `coverStyle` nếu bìa dọc, `music` + `ambience` dự phòng, `scares`, `puzzles`.
4. `cases/list.js`: `time` đúng bằng đồng hồ trong game ("<timeLimit> phút"), `diff` và `fear` 1–5 sao, `endings` đúng số kết thúc kể cả kết thúc ẩn, `soon: true` khi chưa đủ ảnh. Audit kiểm.
5. Câu đố: không tự báo đúng sai; thử sai mã hay trận bị trừ 3 phút; bẫy ở các cách đi tắt; `tools/solveXX.mjs` giải lại từ dữ liệu; `node tools/lockbox.mjs <id>` niêm nội dung hộp khoá.
6. Ảnh: prompt tự đủ, ghi tỉ lệ khung trong prompt, mục Kiểm tra và Nếu sai cho từng ảnh, bảng ảnh tham chiếu, dấu nhận dạng của vật dùng để giải. Không tự đặt thêm giới hạn không có trong luật (ví dụ "ảnh doạ không có người, không máu" là sai: ảnh doạ và bìa được kinh dị tối đa). Ảnh có chữ, số phải đúng thì vẽ bằng code. Không vẽ người bằng code.
7. Nhạc tự viết hoặc có quyền dùng. Khi người dùng tự up file nhạc qua GitHub: giữ file của họ, kiểm tên file trong `META.music`, giữ các dòng META khác (coverStyle, ambience), chạy `node tools/stamp.mjs`.
8. Chạy đủ: audit, solve, smoke (máy tính và điện thoại), docs_ui (thắng và thua), traps, timer_test, flow_test, puzzle_test, route (nếu có bản đồ), `tools/fulltest.sh`; vẽ khung vùng bấm lên ảnh thật; chụp bìa trên máy tính và điện thoại. Báo kết quả từng bước cho người dùng.
9. Trước commit: `node tools/stamp.mjs`. Nếu push bị từ chối vì nhánh có commit mới (người dùng up qua web): fetch, merge, xem họ đổi gì, sửa nếu họ vô tình xoá dòng cần thiết, rồi báo lại.

## 6. Sổ lỗi đã gặp: mỗi lỗi thành một luật, mỗi luật có máy kiểm (đọc trước khi viết bất cứ hồ sơ nào)
Người dùng yêu cầu: lỗi nào đã gặp thì không bao giờ được lặp lại. Mỗi dòng dưới đây là một lỗi có thật, luật chặn nó, và công cụ tự kiểm.
Thêm lỗi mới vào bảng này ngay khi gặp, kèm kiểm tra tự động nếu kiểm được bằng máy. `bash tools/fulltest.sh <id...>` chạy tất cả.

| Lỗi đã gặp | Luật | Máy kiểm |
|---|---|---|
| Đáp án đúng dài nhất, nhiều vế nhất (chọn theo độ dài là trúng) | Phương án dài ngang nhau, cùng số vế | audit luật 1 (mọi câu chọn); câu quyết định cuối: độ dài lệch ≤ 30%, số vế bằng nhau |
| Đáp án lộ trong tên trọng điểm, tên thư mục, tên tài liệu, blurb, memo trước | Không chứa đáp án hay chỉ hướng | audit luật 13/15 |
| Tên trọng điểm, tên thư mục mang nội dung ("Tiếng ru", "Mật áp…", "Soi gương", "Phiếu khám xác") | Chỉ ghi ngày, đêm, lần thăm, ngày tháng | audit luật 3 (từ vựng giờ giấc, hồ sơ 03 trở đi) |
| In đậm, nghiêng, gạch chân, tô màu, chữ "mực đậm hơn", "nét khác", "dòng này…" làm lộ manh mối | Không đánh dấu gì; người kể không chỉ tay vào dòng nào | audit luật 12 (thẻ và style) mọi hồ sơ; luật 6 (lời đánh dấu) từ hồ sơ 08 |
| Tài liệu tự giải thích cách giải ("nghĩa là", "ghép chữ đầu", "đừng nhầm") | Cách giải để trong gợi ý | audit luật 7 từ hồ sơ 08 (tài liệu bài tập có cờ `exercise` được phép có lời giải mẫu) |
| Thiếu tài liệu để giải (Morse Q–Z, câu Kiều, năm Ất Tỵ) | Bảng đủ tài liệu; giải lại chỉ bằng dữ liệu trong game | audit (ghim, câu bấm đã mở đúng lúc, đủ cả hai nhánh), `tools/solveXX.mjs`, `tools/routeXX.mjs` |
| Ghim đúng mà bị chấm sai vì nhóm quá hẹp | Nhóm ghim nhận mọi tài liệu chứng minh được ý ấy | audit + rà tay khi viết |
| Câu hỏi tự trả lời ("thật ra", "người xưng là") | Không giả định đáp án trong lời hỏi | audit luật 10 |
| Nhân vật chối điều người chơi chưa nghi; người thuê có tội; đánh tráo danh tính lặp lại | Luật 16–22 | rà tay theo kinh thánh (mục "Kiểm theo luật") |
| Kết thúc dễ đoán, chọn theo đạo đức | Mỗi phương án sai có lỗ hổng chỉ thấy trong hồ sơ; phương án giống nhau về hình thức | audit (độ dài, số vế); flow_test (mỗi phương án ra đúng kết thúc và biên bản) |
| Cơ chế "sai 2 lần mở gợi ý" bị người chơi lợi dụng | Gợi ý và lời giải trả bằng phút | flow_test (giá gợi ý, giá lời giải, nộp sai không mở gì) |
| Câu đố tự báo đúng sai, giải trong 2 phút | Kết quả trung gian vô nghĩa, thử sai bị phạt, đi tắt gặp bẫy | solveXX (một lời giải duy nhất, bẫy ra kết quả khác), puzzle_test |
| Ảnh doạ, ảnh bìa che nút, che tài liệu; bìa điện thoại cắt mất chi tiết | Không gì được nằm đè lên nút và tài liệu; bìa có `coverFocus` | docs_ui (kiểm nút "Mở phong bì", tên hồ sơ, tiêu đề tài liệu không bị che, máy tính và điện thoại), chụp bìa |
| Tài liệu mở chưa tới lúc, câu bấm nằm ở tài liệu chưa mở | Mọi thứ cần cho câu n mở ở trọng điểm n hoặc sớm hơn | audit |
| Thời gian trên thẻ hồ sơ khác đồng hồ trong game | `time` = `timeLimit` phút | audit |
| Người dùng sửa META trên GitHub, vô tình xoá dòng | Sau mỗi lần merge, đối chiếu META | rà tay khi merge (CLAUDE.md mục 5.9) |
| Tự đặt ra luật không có (ảnh doạ "không người, không máu") | Chỉ theo luật đã ghi; hỏi lại nếu chưa rõ | rà tay |
| Thua mà vẫn mở hết tài liệu (lộ phần chưa tìm, lộ nhánh chưa đi) | Thắng: mở toàn bộ tài liệu. Thua (chọn sai ở câu quyết định hay hết giờ): chỉ còn tài liệu đã tìm được tới lúc thua, cộng biên bản kết thúc xấu | flow_test (sau mỗi kết thúc xấu: không tài liệu nào chưa tìm được hiện ra; sau kết thúc đúng: đủ mọi tài liệu); `docVisible` trong `js/main.js` |
| Nhạc mất trên iPhone (công tắc im lặng) | `navigator.audioSession` + mở khoá âm thanh | thử trên trình duyệt, xem `js/audio.js` |
