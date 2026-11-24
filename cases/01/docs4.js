// Fifth folder (after question 4) and the ending documents.
import { ln, stamp, pic, hand, media, dread } from "../../js/kit.js";

export default [
  {
    id: "nhat_ky_ha", stage: 4, kind: "Nhật ký", icon: "✎", label: "Nhật ký cô Hà (tìm trong phòng ở tập thể)",
    html: () => `
    <div class="doc doc--letter">
      <p class="note">Tổ công tác của chị Nga khám phòng ở tập thể giáo viên lúc 01 giờ 30 ngày 20/8. Quyển sổ bìa xanh nhét dưới đệm.</p>
      ${hand(`
      <p>20/4. Tùng mang tới một quyển vở ướt nhặt ở nền nhà cũ lộ ra vì hồ cạn. Vở của Nguyễn Thị Lụa, năm 1989. Chữ đẹp quá, đẹp hơn chữ mình.</p>
      <p>27/7. Bà Thoa. Sổ chi thật. Sáu nhà “chưa chi”. Mình photo rồi trả bà bản gốc.</p>
      <p>3/8. Buổi lên đồng. Mình không tin. Nhưng làm sao bà Gấm biết áo mưa của mình màu xanh? Hôm qua mình mới mua, chưa mặc lần nào.</p>
      <p>9/8. Lên UBND xin xem hồ sơ di dân 1989. Ông Khánh tiếp, cười rất lâu, nói “chuyện cũ rồi cô ạ”. Chiều, anh Hùng công an xã chặn ở cổng trường hỏi mình xin giấy tờ cũ làm gì.</p>
      <p>10/8. Đi đò của Lực. Lực bảo: “Chú Khánh muốn nói chuyện phải trái với cô. Chú có bản gốc công văn đóng cống. Giấy tờ ban di dân ngày xưa cất ở trạm bơm cũ trên Gò Miếu, hồi ấy là kho.”</p>
      <p>11/8. Hẹn tối mai, 19 giờ 50 ở bến Mới, Lực đón đi Gò Miếu. Mình sẽ mang máy ghi âm. Gói băng số 1 đưa cho Tùng, phòng khi.</p>
      <p>11/8, khuya. Mơ thấy một bé gái áo đỏ đứng ở chân giường, tóc nhỏ nước xuống sàn. Nó bảo: “Cô đừng đi.” Sáng ra sàn nhà ướt một vệt.</p>
      ${dread(4, '<p class="ghost-ink">cô ở chỗ nước không tới. nhưng nước sắp tới rồi.</p>')}`)}
    </div>`,
  },

  {
    id: "loi_khai_gam", stage: 4, kind: "Lời khai", icon: "✎", label: "Lời bà Nguyễn Thị Gấm (gọi tới đài lúc 02:40)",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">GHI CHÉP CUỘC GỌI<br><small>Đài PT-TH Sơn Khê · 02 giờ 40 ngày 20/8/2003 · người ghi: Trần Đăng Quân</small></h2>
      <p>Bà Gấm nghe đài, gọi nhờ điện thoại của bưu điện văn hóa xã (bác trực đêm mở cửa cho bà).</p>
      <p>${ln("gam_1", "“Đêm rằm, cúng xong ở bến Vọng, khoảng 10 giờ đêm tôi chèo xuồng ra Gò Miếu thắp hương ở miếu như mọi năm. Miếu ở trên đỉnh gò. Cái trạm bơm cũ ở lưng chừng gò, phía nhà máy.”")}</p>
      <p>${ln("gam_2", "“Lúc tôi xuống, tôi nghe trong trạm bơm có tiếng gõ, ba tiếng một, đều đều. Tôi tưởng con Lụa về gõ cửa. Tôi khấn: con về thì về với mẹ. Tiếng gõ dừng.”")}</p>
      <p>${ln("gam_3", "“Bên ngoài cửa sắt có ổ khóa mới, sáng bóng. Tôi để ý vì cái trạm ấy bỏ hoang mười mấy năm rồi.”")}</p>
      <p>${ln("gam_4", "“Từ hôm ấy trời mưa, tôi không ra gò nữa. Tôi già rồi, chèo không nổi.”")}</p>
      <p>${ln("gam_5", "“Anh Quân ơi, đêm nay con Lụa lại đứng ở đầu hồi nhà tôi. Nó ướt hết. Nó không nói gì, nó chỉ tay ra phía gò.”")}</p>
      ${pic("gam", "Bà Nguyễn Thị Gấm (ảnh cô Hà chụp ngày 3/8)", "", "pic--small")}
    </div>`,
  },

  {
    id: "loi_nhan", stage: 4, kind: "Tin nhắn thoại", icon: "☏", label: "Máy trả lời tự động của đài, 03:12",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Hộp thư thoại số 2 của chương trình ghi được lúc 03:12. Màn hình máy: “Không hiển thị số”.
        Lúc 03:30 bưu điện huyện xác nhận: không có cuộc gọi nào vào số máy của đài từ 03:00 tới 03:20.</p>
      ${media("tape", "loi_nhan")}
    </div>`,
  },

  {
    id: "thong_bao_tich_nuoc", stage: 4, kind: "Thông báo", icon: "§", label: "Thông báo tích nước của nhà máy, 18/8/2003",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>TỔNG CÔNG TY ĐIỆN LỰC<br>NHÀ MÁY THỦY ĐIỆN NẬM KHÊ<br>Số: 112/TB-NK</div><div>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br>Độc lập – Tự do – Hạnh phúc<br>Nậm Khê, ngày 18 tháng 8 năm 2003</div></div>
      <h2 class="form-title">THÔNG BÁO<br><small>Về việc tích nước hồ chứa sau mùa khô</small></h2>
      <p>Do mưa lớn đầu nguồn, Nhà máy thủy điện Nậm Khê thông báo:</p>
      <ol>
        <li>Bắt đầu tích nước từ 12 giờ 00 ngày 19/8/2003.</li>
        <li>Mực nước lúc bắt đầu: 180,00 m.</li>
        <li>Tốc độ dâng dự kiến: 0,25 m mỗi giờ, liên tục cả ngày đêm, cho tới cao trình 187,00 m.</li>
        <li>Đề nghị UBND các xã thông báo cho nhân dân di chuyển người, tài sản, gia súc ở dưới cao trình 187 m.</li>
      </ol>
      <p class="small muted">Nơi nhận: UBND các xã ven hồ (đã fax cho UBND xã Vọng Thủy lúc 15 giờ 05 ngày 18/8).</p>
      ${stamp("NHÀ MÁY<br>THỦY ĐIỆN<br>NẬM KHÊ", "right:40px;bottom:30px", "blue")}
    </div>`,
  },

  {
    id: "ho_so_tram_bom", stage: 4, kind: "Hồ sơ kỹ thuật", icon: "⚙", label: "Hồ sơ trạm bơm cũ Gò Miếu (1985)",
    html: () => `
    <div class="doc doc--form doc--old">
      <h2 class="form-title">LÝ LỊCH CÔNG TRÌNH<br><small>Trạm bơm tưới Gò Miếu · HTX Nông nghiệp Vọng Thủy · xây năm 1985</small></h2>
      <table class="tbl">
        <tr><td>Vị trí</td><td>Lưng chừng sườn Gò Miếu, phía cửa nhận nước nhà máy (sau năm 1989, Gò Miếu thành đảo)</td></tr>
        <tr><td>Kết cấu</td><td>Nhà bê tông một gian 4 × 5 m, mái bằng</td></tr>
        <tr><td>Cao trình sàn máy</td><td>184,50 m</td></tr>
        <tr><td>Cửa</td><td>Cửa thép một cánh, then cài và khóa phía ngoài</td></tr>
        <tr><td>Ô thoáng</td><td>01 ô 20 × 40 cm, có song sắt, cao 2,2 m tính từ sàn</td></tr>
        <tr><td>Thiết bị</td><td>01 máy bơm điện 75 kW (đã tháo động cơ năm 1990, còn vỏ máy)</td></tr>
        <tr><td>Tình trạng</td><td>Ngừng dùng từ 1989. Năm 1989–1990 Ban di dân xã mượn làm kho giấy tờ.</td></tr>
      </table>
      ${pic("go_mieu", "Gò Miếu nhìn từ nhà máy: miếu trên đỉnh, trạm bơm ở lưng chừng gò", "")}
    </div>`,
  },

  {
    id: "so_xang_2003", stage: 4, kind: "Sổ", icon: "☰", label: "Sổ bán chịu xăng dầu, tháng 8/2003",
    html: () => `
    <div class="doc doc--ledger doc--handwritten">
      <h2 class="form-title">ĐẠI LÝ XĂNG DẦU VỌNG THỦY<br><small>Sổ bán chịu · tháng 8 năm 2003</small></h2>
      <table class="tbl tbl--hand">
        <tr><th>Ngày</th><th>Giờ</th><th>Người lấy</th><th>Hàng</th><th>Ghi nợ</th></tr>
        <tr class="red"><td>12/8</td><td>18h30</td><td>Lực</td><td>xăng 10 lít</td><td>ô. Khánh</td></tr>
        <tr><td>13/8</td><td>7h10</td><td>Hùng (CA xã)</td><td>xăng 2 lít</td><td>CA xã</td></tr>
        <tr><td>13/8</td><td>17h50</td><td>Lực (ra Gò Miếu thăm lưới)</td><td>xăng 3 lít</td><td>ô. Khánh</td></tr>
        <tr><td>14/8</td><td>17h45</td><td>Lực (ra Gò Miếu)</td><td>xăng 3 lít</td><td>ô. Khánh</td></tr>
        <tr><td>15/8</td><td>18h</td><td>Lực (ra Gò Miếu)</td><td>xăng 3 lít</td><td>ô. Khánh</td></tr>
        <tr><td>16/8</td><td>17h40</td><td>Lực (ra Gò Miếu)</td><td>xăng 3 lít</td><td>ô. Khánh</td></tr>
        <tr><td>17/8</td><td>18h05</td><td>Lực (ra Gò Miếu)</td><td>xăng 3 lít</td><td>ô. Khánh</td></tr>
        <tr><td>18/8</td><td>17h55</td><td>Lực (ra Gò Miếu)</td><td>xăng 3 lít</td><td>ô. Khánh</td></tr>
        <tr><td>19/8</td><td></td><td colspan="3">(không có)</td></tr>
      </table>
      <p class="small muted">Bà Nương: “Thằng Lực bảo thả lưới quanh Gò Miếu. Nhưng cả tuần tôi chẳng thấy nó bán con cá nào.”</p>
    </div>`,
  },

  {
    id: "dien_thoai", stage: 4, kind: "Bảng kê", icon: "☏", label: "Bảng kê cuộc gọi máy nhà ông Khánh, 12–19/8",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">BƯU ĐIỆN HUYỆN NẬM KHÊ<br><small>Bảng kê cuộc gọi đi · thuê bao 8 214 (Đỗ Văn Khánh) · theo yêu cầu của Phòng CSHS</small></h2>
      <table class="tbl">
        <tr><th>Ngày</th><th>Giờ</th><th>Số gọi tới</th><th>Thời lượng</th></tr>
        <tr><td>12/8</td><td>19:31</td><td>0912 4.. 077 (di động, chủ thuê bao: Đỗ Văn Lực)</td><td class="n">0'32"</td></tr>
        <tr><td>12/8</td><td>20:41</td><td>0912 4.. 077</td><td class="n">0'18"</td></tr>
        <tr><td>12/8</td><td>22:40</td><td>8 101 (công an xã)</td><td class="n">0'41"</td></tr>
        <tr><td>18/8</td><td>16:05</td><td>8 300 (phòng điều độ nhà máy thủy điện)</td><td class="n">3'12"</td></tr>
        <tr><td>19/8</td><td>22:58</td><td>0912 4.. 077</td><td class="n">0'18"</td></tr>
      </table>
      <p class="small">Ghi chú của chị Nga: “Phòng điều độ nhà máy xác nhận chiều 18/8 ông Khánh gọi hỏi rất kỹ mấy giờ thì nước lên tới cao trình 184,5. Ông ta nói để ‘báo bà con chuyển trâu bò’.”</p>
    </div>`,
  },

  // ---------- ending (stage 5) ----------
  {
    id: "bao_ket", stage: 5, kind: "Báo", icon: "▤", label: "Báo Sơn Khê, thứ Năm 21/8/2003",
    html: () => `
    <div class="doc doc--news">
      <div class="news-mast">SƠN KHÊ<small>Thứ Năm 21-8-2003</small></div>
      <div class="news-kicker">Vụ “hồ đòi người” ở Vọng Thủy</div>
      <h1 class="news-head">Giải cứu cô giáo bị giam bảy ngày trên đảo giữa hồ. Bắt Chủ tịch xã</h1>
      ${pic("tram_bom", "Bên trong trạm bơm cũ Gò Miếu, sáng 20/8", "")}
      <p class="dropcap">5 giờ 20 sáng 20/8, tổ công tác Phòng Cảnh sát hình sự công an tỉnh cắt khóa cửa thép trạm bơm cũ trên Gò Miếu,
        đưa cô Trịnh Thu Hà ra ngoài. Lúc đó nước hồ chỉ còn cách sàn trạm bơm chưa đầy 20 cm. Cô Hà kiệt sức, mất nước nhẹ nhưng tỉnh táo.</p>
      <p>Cùng sáng, công an tỉnh bắt Đỗ Văn Khánh (Chủ tịch UBND xã) và Đỗ Văn Lực, đình chỉ công tác trưởng công an xã Đinh Công Hùng.
        Hồ sơ vụ bé Nguyễn Thị Lụa chết năm 1989 và vụ ông Phạm Văn Bổng chết năm 1996 được mở lại.</p>
      <p>Theo lời khai ban đầu, Khánh sai Lực đón cô Hà ra Gò Miếu “để nói chuyện”, rồi nhốt cô trong trạm bơm, đặt đồ của cô ở bến Vọng cho giống chết đuối.
        Khánh tính rằng khi nhà máy tích nước, trạm bơm sẽ ngập và “cái hồ sẽ làm nốt phần còn lại”.</p>
      <p>Sáu hộ dân bị ghi khống tiền đền bù năm 1989, trong đó có bà Nguyễn Thị Gấm, sẽ được xem xét bồi thường.</p>
    </div>`,
  },

  {
    id: "loi_ha", stage: 5, kind: "Lời khai", icon: "✎", label: "Lời cô Hà ở bệnh viện, và lời bé Tùng",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">GHI CHÉP CỦA ĐẠI ÚY VI THỊ NGA<br><small>Bệnh viện đa khoa tỉnh, 14 giờ ngày 20/8/2003</small></h2>
      <p>Cô Hà: “Bảy đêm. Lực chỉ đến đứng ngoài cửa, gõ vào then sắt xem khóa còn chắc không rồi đi. Hắn không mở cửa, không đưa gì vào.”</p>
      <p>“Nhưng đêm nào cũng có một bát nước và một nắm cơm gói lá dong đặt trên gờ ô thoáng. Ô thoáng cao hơn hai mét. Tôi không thấy ai.
        Chỉ một lần tôi thấy một bàn tay nhỏ, rất lạnh, thò qua song sắt. Có cái tay áo màu đỏ.”</p>
      <p>${pic("tay", "", "")}</p>
      <p>Lực khai: hắn không đưa đồ ăn nước uống, vì “chú Khánh dặn để mặc”. Bà Gấm: bà chỉ ra gò đúng một đêm rằm.
        Gò Miếu là đảo, không có đường bộ, không ai khác có thuyền ra đó trong tuần.</p>
      <hr>
      <p>Bé Tùng (hỏi thêm về phong bì): “Cháu không viết địa chỉ. Lúc cô Hà đưa gói giấy thì phong bì chưa có chữ. Sáng thứ Năm cháu mở ra định nhờ chú bưu điện viết, thì chữ đã có sẵn rồi. Mực tím. Cháu không có mực tím.”</p>
      <p>Cô Hà: “Tôi chưa kịp viết địa chỉ. Tôi định tối 12 về rồi mới viết.”</p>
      <p class="muted small">Chị Nga đối chiếu chữ trên phong bì với trang vở năm 1989 của bé Nguyễn Thị Lụa. Chị không ghi kết luận vào hồ sơ.</p>
      <hr>
      <p>Rằm tháng Bảy năm sau, bà con Vọng Thủy thả bốn mươi bảy chiếc đèn hoa đăng, mỗi hộ di dân năm ấy một chiếc.
        Người ta đếm được bốn mươi tám chiếc trôi ra giữa hồ.</p>
      ${pic("ending", "", "")}
    </div>`,
  },
];
