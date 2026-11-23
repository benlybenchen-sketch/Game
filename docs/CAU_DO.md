# Kho câu đố kiểu phòng thoát hiểm (escape room)

Dùng cho hồ sơ 07 trở đi. Mỗi hồ sơ dùng ít nhất 3 loại khác nhau (luật 25 trong `KE_HOACH.md`), trong đó ít nhất một loại "vật lý" có công cụ tương tác (xếp, xoay, khoá, đổ, ghép) và ít nhất một chuỗi: kết quả câu đố này là chìa của câu đố sau. Không dùng lại loại chính của hồ sơ liền trước.

Mỗi loại ghi: cách chơi · cách làm khó · bẫy gợi ý · công cụ trong game (`js/puzzles.js` nếu đã có).

## A. Sắp xếp và ghép

1. **Khối chữ xếp hàng.** 3–5 khối cao bằng nhau (7–8 hàng), rộng 1, 2, 3 cột. Kéo đặt cạnh nhau, có thể xoay 180°. Đúng thứ tự thì đọc hàng ngang ra câu. Một bài thơ cho thứ tự ("kẻ một mình đi cuối…").
   Làm khó: một khối phải lật; một khối thừa; câu thật nằm ở đường chéo hoặc ở các ô có chấm mực. Bẫy: một thứ tự sai cũng ra vài chữ có nghĩa. Công cụ: `blocks` (đã có).
2. **Mảnh giấy xé dọc.** 5–6 dải giấy xé, ghép theo vết rách và nét chữ đứt rồi đọc. Làm khó: hai tờ khác nhau bị xé lẫn. Công cụ: dùng `blocks` với khối 1 cột.
3. **Sơ đồ chỗ ngồi.** Bàn tiệc 6–8 ghế, lời khai nói ai ngồi cạnh ai, đối diện ai. Xếp xong đọc chữ (hay đồ vật) của từng người theo chiều kim đồng hồ. Làm khó: một lời khai nói dối, phải loại.
4. **Dãy thời gian.** Ghép 8–10 sự kiện theo thứ tự thật. Mỗi sự kiện mang một chữ, đúng thứ tự thì ra câu. Làm khó: ba hệ lịch khác nhau.
5. **Ghép ảnh xé.** Ảnh bị xé thành 6–9 mảnh, ghép lại để thấy một chi tiết (số nhà, khuôn mặt bị che). Làm khó: một mảnh của ảnh khác.
6. **Ghép mảnh niêm hoặc mảnh gốm.** So mảnh với mẫu (như hồ sơ 07, `fragments`).

## B. Mặt nạ, lưới, đường đi

7. **Lưới đục lỗ (Cardano).** Tấm bìa có lỗ đặt lên trang chữ dày đặc. Xoay 4 lần, mỗi lần đọc chữ lộ qua lỗ. Làm khó: phải tự tìm hướng đặt ban đầu (một góc có dấu); trang chữ có hai bản. Công cụ: `grille` (đã có).
8. **Đường đi trên lưới chữ.** Lưới 8×8; đi theo nước mã, nước tượng, hay theo chỉ dẫn trong thư ("ba bước về phía mặt trời mọc…"), đọc chữ trên đường đi.
9. **Lưới tìm chữ.** Chữ giấu ngang, dọc, chéo, ngược. Các chữ còn thừa sau khi gạch đọc ra câu thật.
10. **Bản đồ và dây chỉ.** Đi theo sợi chỉ màu nối các ghim; lấy chữ đầu tên từng nơi.
11. **Tấm kính màu.** Chữ viết bằng mực đỏ lẫn mực xanh; đặt kính đỏ thì mất chữ đỏ, còn chữ xanh đọc được (mô phỏng bằng nút lọc màu).

## C. Khoá và mã số

12. **Hộp khoá số.** Ổ khoá 3–5 vòng. Mỗi vòng do một câu đố khác cho ra. Mở được thì tài liệu bên trong hiện ra. Công cụ: `lockbox` (đã có, nhận cả số lẫn chữ Hán, chữ cái).
13. **Khoá chữ.** Như 12 nhưng vòng là chữ (can chi, chữ cái, hình). Khoá theo "bát tự", tên người, chữ đầu bài thơ.
14. **Vòng xoay mật mã (Caesar).** Hai vòng chữ lồng nhau; tìm độ lệch từ một chữ đã biết chắc (lời chào đầu thư, tên người nhận).
15. **Bảng chữ thay thế.** Mỗi kí hiệu một chữ; dựng bảng bằng cách đoán từ những chữ hay gặp và một câu biết trước.
16. **Mã số trang sách.** Bộ ba số: trang, dòng, chữ (như mã Kiều hồ sơ 03). Làm khó: hai bản in khác nhau.
17. **Morse, cờ hiệu, đèn chớp.** Nghe hoặc xem nhịp; bảng tra phải tự ghép từ nhiều tài liệu.
18. **Mã nhị phân bằng đồ vật.** Đèn bật tắt, nút áo cài mở, quẻ dịch (hồ sơ 03).

## D. Nghe, nhìn, đo

19. **Bản nhạc.** Nốt thay chữ (do re mi, hò xự xang xê cống, cung thương giốc chuỷ vũ). Nghe đoạn băng rồi chép nốt.
20. **Tiếng động đếm được.** Số tiếng chuông, tiếng gõ, tiếng chim trong băng cho ra con số.
21. **Gương và bóng.** Chữ viết ngược hay lộn đầu; vật phản chiếu trong ảnh cho biết đọc thế nào.
22. **Soi đèn, soi nước.** Mực chanh hiện khi hơ lửa; dấu chìm khi soi đèn (nút "hơ lửa" trong tài liệu).
23. **Đo và đổ.** Đong nước, cân vật, đo bước chân, đo bóng nắng (hồ sơ 07, `pour`).
24. **Đồng hồ và kim.** Mặt đồng hồ có chữ thay số; mỗi giờ ghi trong nhật ký cho ra hai chữ.
25. **Thiên văn.** Vị trí trăng, sao, giờ thuỷ triều cho ra ngày giờ thật.

## E. Chữ và thơ

26. **Thơ tàng chữ nhiều tầng.** Chữ đầu câu ra câu bẫy; chữ thứ n của câu n ra câu thật.
27. **Câu đố chiết tự.** Ghép bộ thủ ra chữ (hồ sơ 06).
28. **Thơ chỉ đường.** Mỗi câu thơ ứng với một vật trong phòng; vật nào được nhắc theo thứ tự nào thì lấy số trên vật ấy.
29. **Lời khai cắt dán.** Một lá thư được ghép từ chữ cắt ở báo; tìm tờ báo và trang để biết người gửi.
30. **Câu bẫy song song.** Hai bản cùng một văn bản, khác một chữ; chữ khác ấy là khoá.

## Nguyên tắc chung

- Đủ dữ kiện để giải (luật 23): mọi bảng, quy ước đều có trong game, để thô, rải ở nhiều tài liệu.
- Không giải thích cách giải trong tài liệu (luật 7). Bài thơ, câu đố được phép mơ hồ, nhưng phải chỉ ra được một lời giải duy nhất.
- Mỗi câu đố có ít nhất một bẫy cho ra một kết quả trông đúng mà sai.
- Kết quả câu đố phải được dùng: hoặc làm đáp án tự nhập, hoặc làm chìa mở tài liệu cần cho bước sau.
- Mỗi câu đố có công cụ trong game thì `tools/solveXX.mjs` phải giải lại nó từ dữ liệu.
