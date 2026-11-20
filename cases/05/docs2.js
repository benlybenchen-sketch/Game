// Case 05, visits 3 and 4 (23 and 25/12/1991): the photographs, the handwriting, the two notebooks, the night tape.
import { ln, pic, hand, media } from "../../js/kit.js";
import { tape, diary } from "./docs0.js";

export default [
  diary("nk_3", 2, "Nhật ký thực tập: hiệu ảnh và buồng tối, 23/12", null, `
    <p>Thứ Hai 23/12/1991. Ông Khải cho tôi xem hiệu ảnh. Lúc nói về ảnh, ông tỉnh hẳn, nói nhiều, giọng ấm.</p>
    <p>Giữa tủ kính treo một tấm phóng to nhất, khung gỗ, ghi bằng chữ của ông: <b>“Vợ tôi, Tết 1991”</b>. Người trong ảnh ngồi quay lưng bên cửa sổ, áo len đỏ, trùm khăn len kem.</p>
    <p>Ông nói: “Nhà tôi không thích chụp mặt lúc ốm. Tôi chụp sau lưng thôi.” Cháu Ngân đứng sau bố, mỉm cười.</p>
    <p>Bên cạnh là tấm ông chụp năm 1988: cô Hằng chấm bài bên đúng cửa sổ ấy, cùng cái áo, cùng cái khăn. Lúc đó cô còn đầy đặn lắm.</p>
    <p>Trong buồng tối, trên dây phơi, tôi đếm được mười bốn bản in của tấm “Vợ tôi, Tết 1991”.</p>
    <p>Tôi xin để máy ghi âm của trạm ở gian giữa qua đêm nay, máy có chế độ tự ghi khi có tiếng, để “nghe tiếng ho của cô cho bác sĩ tỉnh chẩn đoán”. Ông Khải gật. Cháu Ngân im một lúc rồi nói: “Vâng ạ. Cô cứ để.”</p>`),

  {
    id: "anh_cuoi", stage: 2, kind: "Ảnh", icon: "🖼", label: "Ảnh cưới Khải và Hằng, Nam Định 1975",
    html: () => `<div class="doc doc--plain">${pic("anh_cuoi_1975", "Ảnh cưới, hiệu ảnh Hồng Hà, Nam Định, 1975. Dưới ảnh ông Khải viết: “Khải – Hằng, nhẫn cưới anh mua bằng ba tháng lương”.")}</div>`,
  },
  {
    id: "anh_1988", stage: 2, kind: "Ảnh", icon: "🖼", label: "Ảnh “Cô giáo Hằng chấm bài”, 1988",
    html: () => `<div class="doc doc--plain">${pic("hang_1988", "Ảnh treo trong hiệu, bên cạnh tấm “Vợ tôi, Tết 1991”. Cùng cửa sổ, cùng ghế đẩu, cùng áo len đỏ và khăn len kem.")}
      <p class="note">Ông Khải nói: “Nhà tôi đeo cái nhẫn ấy từ hôm cưới, chưa tháo ra lần nào.”</p></div>`,
  },
  {
    id: "vo_toi", stage: 2, kind: "Ảnh", icon: "🔦", label: "Ảnh “Vợ tôi, Tết 1991” (soi đèn pin)",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Hiệu ảnh tắt điện để tiết kiệm. Vân soi đèn pin lên tấm ảnh lồng kính. Rê chuột hoặc chạm vào ảnh để soi; khi vòng sáng rọi đúng một chi tiết, bấm “Ghi vào sổ”.</p>
      ${media("torch", "vo_toi")}
    </div>`,
  },
  {
    id: "buong_toi", stage: 2, kind: "Ảnh", icon: "🖼", label: "Buồng tối rửa ảnh của ông Khải",
    html: () => `<div class="doc doc--plain">${pic("buong_toi", "Buồng tối, đèn đỏ. Mười bốn bản in của cùng một tấm ảnh.")}
      <p class="note">Can nhựa trắng 20 lít trong góc gần như cạn. Hai bao vôi bột đã hết. ${ln("bt_rac", "Sọt rác dưới gầm bàn có giấy vụn và mấy mẩu băng keo.")}</p></div>`,
  },

  {
    id: "mau_chu", stage: 2, kind: "Giấy tờ", icon: "✍", label: "Ba mẫu chữ: giấy xin nghỉ, sổ điểm, bài văn",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Vân mượn được ba thứ: giấy xin nghỉ “của cô Hằng” ở trường, sổ điểm cô Hằng ghi năm học 1988–1989, và bài văn của Ngân cô Hà chủ nhiệm cho xem. Rê chuột hoặc chạm để soi bằng kính lúp.</p>
      ${media("hand", "mau")}
    </div>`,
  },

  // ---------------------------------------------------------------- visit 4
  diary("nk_4", 3, "Nhật ký thực tập: hai cuốn sổ, 25/12", null, `
    <p>Thứ Tư 25/12/1991. Sáng 24 tôi đã ghé lấy máy ghi âm. Cháu Ngân đưa tận tay, cười: “Đêm qua mẹ cháu ho nhiều lắm cô ạ.”</p>
    <p>Hôm nay ông Khải đi giao ảnh cưới ở Bắc Lệnh, Ngân đi học. Bà Lụa có chìa khoá nhà để cho mèo ăn. Bà đưa tôi vào, đứng canh ở cửa.</p>
    <p>Trên bàn nước có hai cuốn sổ: sổ tay của ông Khải và cuốn nhật ký bìa hoa của Ngân, “Nhật ký chăm mẹ”. Ngân không giấu cuốn ấy. Hôm trước Ngân còn khoe với tôi.</p>
    <p>Tôi chép lại những trang có ngày tháng. Đọc xong, tôi phải ra sân đứng một lúc.</p>
    <p>Chiều, thầy Sinh cho mượn cuốn Tâm thần học của Đại học Y. Thầy gạch dưới một chương.</p>`),

  {
    id: "sach", stage: 3, kind: "Sách", icon: "📖", label: "Giáo trình Tâm thần học: rối loạn loạn thần chia sẻ",
    html: () => `
    <div class="doc doc--book">
      <div class="book-head">TÂM THẦN HỌC · Trường Đại học Y Hà Nội · chương “Các rối loạn hoang tưởng”</div>
      <h3>Rối loạn loạn thần chia sẻ (“folie à deux”, điên tay đôi)</h3>
      <p>${ln("sa_def", "Hai người (đôi khi nhiều hơn) sống gắn bó, cô lập với bên ngoài, cùng chia một hoang tưởng.")}</p>
      <p>${ln("sa_vai", "Có một người khởi phát: người có hoang tưởng trước, thường là người có ảnh hưởng mạnh hơn về tình cảm. Người kia là người tiếp nhận: tin theo, thường phụ thuộc, hay có trầm cảm, nghiện rượu, hoặc sợ mất người kia.")}</p>
      <p>${ln("sa_tuoi", "Người khởi phát không nhất thiết là người lớn tuổi hơn hay người làm chủ gia đình.")}</p>
      <p>${ln("sa_nhan", "Dấu hiệu nhận ra: mọi chi tiết mới của hoang tưởng đều xuất hiện ở người khởi phát trước, rồi mới thấy ở người tiếp nhận.")}</p>
      <p>${ln("sa_tach", "Điều trị: tách hai người. Người tiếp nhận thường tự tỉnh dần sau vài ngày đến vài tuần. Người khởi phát cần điều trị chuyên khoa, và phải theo dõi sát nguy cơ tự sát trong thời gian bị tách.")}</p>
    </div>`,
  },

  {
    id: "so_tay_khai", stage: 3, kind: "Sổ tay", icon: "📓", label: "Sổ tay ông Khải, 12/1989 – 1990 (Vân chép)",
    html: () => `
    <div class="doc doc--notebook">${hand(`
      <p><b>23/12/1989, 4 giờ chiều.</b> ${ln("sk_mat", "Hằng mất rồi.")} Con không cho ai vào. Con chải tóc cho mẹ, bảo mẹ ngủ. Tôi phải sang trạm.</p>
      <p><b>24/12/1989.</b> ${ln("sk_dap", "Tôi vừa nói chữ “trạm” là con đập đầu vào tường. Không dám nhắc nữa.")}</p>
      <p><b>5/1/1990.</b> ${ln("sk_tay", "Con cắt tay bằng dao cạo phim. Tôi cõng con ra trạm, nói con cắt phim. Về nhà tôi hứa với con: mẹ không đi đâu cả.")}</p>
      <p><b>6/2/1990.</b> ${ln("sk_ho", "Đêm nay tôi cũng nghe Hằng ho. Ngân nói đúng.")}</p>
      <p><b>15/3/1990.</b> ${ln("sk_chao", "Hằng ăn cháo, khen ngon.")}</p>
      <p><b>4/5/1990.</b> ${ln("sk_gio", "Dán băng keo cửa buồng. Hằng sợ gió.")}</p>
      <p><b>Tết 1991.</b> ${ln("sk_anh", "Ngân bảo chụp mẹ một kiểu. Mẹ ngồi bên cửa sổ, quay lưng. Ảnh đẹp nhất đời tôi chụp.")}</p>`)}
    </div>`,
  },

  {
    id: "nk_ngan", stage: 3, kind: "Nhật ký", icon: "✿", label: "“Nhật ký chăm mẹ” của Ngân, 1990 (Vân chép)",
    html: () => `
    <div class="doc doc--diary">${hand(`
      <p><b>3/2/1990.</b> ${ln("ng_ho", "Đêm qua mẹ ho nhiều. Bố ngủ say không nghe thấy. Con nghe thấy hết.")}</p>
      <p><b>12/3/1990.</b> ${ln("ng_chao", "Mẹ ăn được ba thìa cháo. Mẹ bảo ngon.")}</p>
      <p><b>2/5/1990.</b> ${ln("ng_gio", "Mẹ dặn đóng hết cửa lại, mẹ sợ gió. Con với bố phải dán cửa.")}</p>
      <p><b>20/8/1990.</b> Con viết đơn xin nghỉ cho mẹ. Mẹ mệt không cầm bút được, mẹ đọc cho con viết.</p>
      <p><b>14/2/1991.</b> ${ln("ng_anh", "Hôm nay bố chụp ảnh cho mẹ. Con giúp mẹ mặc áo len.")}</p>
      <p class="small">Trang cuối cùng của năm 1989 bị xé mất, chỉ còn chân giấy.</p>`, "kid")}
    </div>`,
  },

  tape("bang_dem", 3, "Băng tự ghi: gian giữa, đêm 23 rạng 24/12", "Máy để ở gian giữa, cách cửa buồng trong ba bước. Thử nút tốc độ: máy của trạm có chế độ chạy chậm ×0,6 để nghe kỹ."),
  tape("bang_hang", 3, "Băng cũ: cô Hằng đọc thơ cho lớp 7A, 1988", "Cô Hà chủ nhiệm cho mượn, băng giữ ở thư viện trường. Đây là giọng thật của cô Hằng."),
];
