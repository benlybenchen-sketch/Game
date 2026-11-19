// Fourth folder (after question 3): the death of Phạm Văn Bổng, rằm tháng Bảy 1996 (Wednesday 28/8/1996).
import { ln, stamp, pic, hand, media, dread } from "../../js/kit.js";

const xaHead = `<div class="form-head"><div>CÔNG AN HUYỆN NẬM KHÊ<br><b>CÔNG AN XÃ VỌNG THỦY</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>`;

export default [
  {
    id: "bang_3", stage: 3, kind: "Băng ghi âm", icon: "▶", label: "Băng số 3: buổi lên đồng ở nhà bà Gấm",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Cuộn băng thứ ba trong túi của bà Thoa, nhãn viết tay của cô Hà. Anh Quân nghe được nửa băng thì đèn phòng thu tắt. ${dread(4, "<b>Lúc đèn sáng lại, băng đang tự quay.</b>")}</p>
      ${media("tape", "bang_3")}
      <p class="note small">Lời của một người lên đồng không phải là bằng chứng. Nhưng nó có thể chỉ chỗ để tìm bằng chứng.</p>
    </div>`,
  },

  {
    id: "bien_ban_1996", stage: 3, kind: "Biên bản", icon: "§", label: "Biên bản vụ ông Bổng chết đuối, 29/8/1996",
    html: () => `
    <div class="doc doc--form doc--old">
      ${xaHead}
      <h2 class="form-title">BIÊN BẢN<br><small>Về việc phát hiện người chết đuối</small></h2>
      <p>Hồi 7 giờ 15 ngày 29/8/1996. Người lập: Đinh Công Hùng, trưởng công an xã.</p>
      <p>Hồi 6 giờ cùng ngày, ngư dân <b>Hà Văn Nhì</b> phát hiện thi thể một người đàn ông nổi trên mặt hồ, <b>sát chân Gò Miếu</b>, phía cửa nhận nước nhà máy.
        Xác định là ông <b>Phạm Văn Bổng</b>, 49 tuổi, trú tại thôn Ven Hồ.</p>
      <p>Chiếc <b>xuồng chèo</b> của nạn nhân được tìm thấy <b>buộc dây cẩn thận tại bến Vọng</b>, mái chèo để gọn trong lòng xuồng, lòng xuồng khô.</p>
      <p><b>Nhận định:</b> nạn nhân có thói quen đi câu đêm. Đêm 28/8 đi câu một mình ở khu vực Gò Miếu, trượt chân ngã xuống hồ, đuối nước. Không có dấu hiệu hình sự.
        Gia đình xin nhận thi thể về mai táng, không đề nghị khám nghiệm thêm.</p>
      <div class="sign-row"><div>Người phát hiện<br>${hand("Nhì", "sign")}Hà Văn Nhì</div><div>Trưởng công an xã<br>${hand("Hùng", "sign")}Đinh Công Hùng</div></div>
      ${stamp("CÔNG AN XÃ<br>VỌNG THỦY<br>★", "right:40px;bottom:30px")}
    </div>`,
  },

  {
    id: "giam_dinh_1996", stage: 3, kind: "Giám định", icon: "✚", label: "Phiếu khám của Trung tâm y tế huyện, 1996",
    html: () => `
    <div class="doc doc--form doc--old">
      <div class="form-head"><div>SỞ Y TẾ SƠN KHÊ<br><b>TRUNG TÂM Y TẾ HUYỆN NẬM KHÊ</b></div><div><i>Ngày 29/8/1996</i></div></div>
      <h2 class="form-title">PHIẾU KHÁM NGOÀI TỬ THI<br><small>(không mổ tử thi, theo đề nghị của gia đình)</small></h2>
      <p>Họ tên: <b>Phạm Văn Bổng</b>, nam, 49 tuổi. Bác sĩ khám: Nguyễn Hữu Lộc.</p>
      <ul>
        <li>Thời gian tử vong ước tính: <b>từ 22 giờ đến 24 giờ ngày 28/8/1996</b>.</li>
        <li>Dấu hiệu ngạt nước: có, phù hợp chết đuối.</li>
        <li><b>Vùng gáy có ổ bầm tụ máu 4 × 3 cm</b>, hình thành <b>trước khi chết</b>.</li>
        <li>Hai cổ tay có vết hằn bầm, rộng khoảng 1 cm, chạy vòng quanh cổ tay.</li>
      </ul>
      <p><b>Ý kiến:</b> đề nghị cơ quan công an làm rõ nguyên nhân vết bầm vùng gáy và cổ tay.</p>
      <p class="small muted">Bút chì ở lề, nét khác: ${hand("“Đã trao đổi, xã kết luận đuối nước – H.”", "inline")}</p>
    </div>`,
  },

  {
    id: "loi_khai_thoa_1996", stage: 3, kind: "Lời khai", icon: "✎", label: "Lời khai bà Lê Thị Thoa, 29/8/1996",
    html: () => `
    <div class="doc doc--form doc--old">
      ${xaHead}
      <h2 class="form-title">BIÊN BẢN GHI LỜI KHAI</h2>
      <p>Người khai: <b>Lê Thị Thoa</b>, vợ ông Phạm Văn Bổng. Người ghi: Đinh Công Hùng.</p>
      <p>Khoảng 21 giờ tối 28/8 có người đứng ngoài ngõ gọi ông nhà tôi, giọng thanh niên. Ông bảo “tôi ra một lát”.</p>
      <p>Ông đi tay không, <b>không mang cần câu</b>. Cần câu và giỏ cá vẫn dựng ở góc nhà tới sáng.</p>
      <p><s>Một lúc sau tôi nghe tiếng máy thuyền nổ ngoài bến Vọng, chạy ra phía Gò Miếu.</s></p>
      <p>Ông đi đến sáng không về.</p>
      <p class="small muted">Dòng gạch bỏ là do người ghi gạch, không có chữ ký xác nhận sửa chữa của người khai.</p>
      <div class="sign-row"><div>Người khai<br>${hand("Thoa", "sign")}</div><div>Người ghi<br>${hand("Hùng", "sign")}</div></div>
    </div>`,
  },

  {
    id: "loi_khai_khanh_1996", stage: 3, kind: "Lời khai", icon: "✎", label: "Lời khai ông Đỗ Văn Khánh, 30/8/1996",
    html: () => `
    <div class="doc doc--form doc--old">
      ${xaHead}
      <h2 class="form-title">BẢN TƯỜNG TRÌNH</h2>
      <p>${ln("khanh_1", "Tôi là Đỗ Văn Khánh, 51 tuổi, Phó Chủ tịch UBND xã Vọng Thủy.")}</p>
      <p>${ln("khanh_2", "Anh Bổng là người cùng làm Ban di dân với tôi năm 1989, quan hệ bình thường, không mâu thuẫn gì.")}</p>
      <p>${ln("khanh_3", "Tối 28/8 tôi ở nhà cả tối, không đi đâu, không gặp anh Bổng.")}</p>
      <p>${ln("khanh_4", "Tôi nghe nói anh Bổng hay đi câu đêm ở khu Gò Miếu.")}</p>
      <p>${ln("khanh_5", "Tôi không biết anh Bổng định đem giấy tờ gì lên tỉnh.")}</p>
      <p>${ln("khanh_6", "Đề nghị công an xã sớm kết luận để gia đình yên tâm lo hậu sự.")}</p>
      <div class="sign-row"><div></div><div>Người tường trình<br>${hand("Khánh", "sign")}</div></div>
      ${pic("khanh", "Ông Đỗ Văn Khánh (ảnh hồ sơ cán bộ)", "", "pic--small")}
    </div>`,
  },

  {
    id: "so_xang", stage: 3, kind: "Sổ", icon: "☰", label: "Sổ bán chịu đại lý xăng dầu Vọng Thủy, 8/1996",
    html: () => `
    <div class="doc doc--ledger doc--handwritten">
      <h2 class="form-title">ĐẠI LÝ XĂNG DẦU VỌNG THỦY<br><small>Sổ bán chịu · tháng 8 năm 1996 · chủ đại lý: Hà Thị Nương</small></h2>
      <table class="tbl tbl--hand">
        <tr><th>Ngày</th><th>Giờ</th><th>Người lấy</th><th>Hàng</th><th>Ghi nợ</th><th>Ký</th></tr>
        <tr><td>26/8</td><td>7h</td><td>Nhì</td><td>dầu 5 lít</td><td>Nhì</td><td>${hand("Nhì", "inline sig")}</td></tr>
        <tr><td>27/8</td><td>16h</td><td>Tảo</td><td>xăng 3 lít</td><td>Tảo</td><td>${hand("Tảo", "inline sig")}</td></tr>
        <tr class="red"><td>28/8</td><td>21h10</td><td>Lực (chở chú Khánh đi việc)</td><td>xăng 10 lít</td><td>ô. Khánh</td><td>${hand("Lực", "inline sig")}</td></tr>
        <tr><td>29/8</td><td>6h40</td><td>Hùng (CA xã)</td><td>xăng 2 lít</td><td>CA xã</td><td>${hand("Hùng", "inline sig")}</td></tr>
        <tr><td>30/8</td><td>8h</td><td>HTX</td><td>dầu 20 lít</td><td>HTX</td><td>${hand("Kiên", "inline sig")}</td></tr>
      </table>
      <p class="small muted">Bà Nương còn giữ sổ cũ vì “sổ nợ thì phải giữ”. Đại lý nằm ngay đầu bến Vọng.</p>
    </div>`,
  },

  {
    id: "thu_bong", stage: 3, kind: "Thư", icon: "✉", label: "Bản nháp thư ông Bổng gửi Thanh tra tỉnh, 1996",
    html: () => `
    <div class="doc doc--letter">
      ${hand(`<p class="right">Vọng Thủy, ngày 25 tháng 8 năm 1996</p>
      <p>Kính gửi: Thanh tra tỉnh Sơn Khê</p>
      <p>Tôi là Phạm Văn Bổng, nguyên kế toán Ban di dân lòng hồ xã Vọng Thủy năm 1989.</p>
      <p>Bảy năm nay tôi không ngủ được. Năm 1989, sáu hộ trong xã bị ghi khống là đã nhận tiền đền bù. Để đoàn kiểm tra huyện không phát hiện,
        trưởng ban đã xin đóng cống tích nước sớm, trong khi những nhà ấy còn chưa dọn. Cháu Nguyễn Thị Lụa chết trong đêm đó.</p>
      <p>Tôi có giữ sổ chi gốc. <b>Ngày 29/8/1996 tôi sẽ mang sổ lên tỉnh</b> để trình bày. Tôi có lỗi vì đã im lặng.</p>
      <p>Hôm qua tôi đã nói với anh K. là tôi sẽ đi. Anh ấy bảo tôi “nghĩ cho kỹ”.</p>
      <p class="right">Người viết<br>Bổng</p>`)}
      <p class="small muted">Bản nháp, chưa gửi, kẹp trong quyển sổ chi thật. Bà Thoa mới tìm thấy tối nay, khi lật lại quyển sổ.</p>
      ${pic("bong", "Ảnh thờ ông Phạm Văn Bổng", "", "pic--small")}
    </div>`,
  },
];
