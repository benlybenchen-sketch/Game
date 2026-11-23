// Case 02, first folder: what ông Tám Kỷ hands over on Monday night 4/10/1993.
import { ln, stamp, pic, hand, media } from "../../js/kit.js";
import { envelope } from "./art.js";

export default [
  {
    id: "thu_tam_ky", stage: 0, kind: "Thư", icon: "✉", label: "Thư của ông Tám Kỷ",
    html: () => `
    <div class="doc doc--memo">
      <div class="memo-head"><b>BÁO SÂN KHẤU CỬU GIANG</b> · Mục kịch trường · Trịnh Văn Kỷ</div>
      <p class="right"><i>21 giờ 05, thứ Hai 4/10/1993</i></p>
      <p>Cháu,</p>
      <p>Đêm 12 tháng 8 vừa rồi (27/9), Kép <b>Châu Văn Kiệt</b> của gánh hát bội <b>Phước Hưng Ban</b> gục chết ngay trên sân khấu đình Phú Lễ, trong vai Quan Công,
        đúng đêm giỗ Tổ. Lưng anh ta uốn cong như cánh cung, mặt nhăn lại như đang cười. Cả cù lao Cồn Ngựa nói: <b>Tổ bắt</b>.</p>
      <p>Tôi ngồi hàng ghế đầu đêm đó. Và ba mươi năm trước, đêm 12 tháng 8 năm 1963, tôi cũng ngồi đúng hàng ghế đó,
        nhìn kép <b>Hai Lành</b> chết y hệt như vậy, cũng trong vai Quan Công. Hồi đó tôi viết bài “Tổ bắt”. Ba mươi năm nay tôi không ngủ yên với bài báo ấy.</p>
      <p>Thứ Bảy, tôi nhận một gói đồ không đề người gửi: một cuộn băng VHS chép lại đêm diễn, và một mảnh giấy. Cháu xem trong hồ sơ.</p>
      <p>Thằng Phát, thợ ảnh ở chợ Phú Lễ, là người quay cuộn băng gốc. Nó nói máy quay là máy mượn của tiệm điện, giờ trong máy có đúng không thì nó không biết.
        Đừng tin con số nào mà chưa đối chiếu.</p>
      <p>Tôi già rồi, mắt kém, tay run. Cháu làm thay tôi. Mỗi trọng điểm phải có giấy tờ làm bằng chứng.
        Thượng úy Huỳnh bên công an huyện nợ tôi một ân tình. Trả lời đúng tới đâu, cậu ấy gửi giấy tờ tới đó.</p>
      <p>Một điều nữa. Đừng xem cuộn băng một mình sau nửa đêm.</p>
      <p class="right" style="margin-top:18px">${hand("Kỷ", "sign")}<b>Trịnh Văn Kỷ</b></p>
    </div>`,
  },

  {
    id: "goi_nac_danh", stage: 0, kind: "Gói đồ", icon: "✉", label: "Gói đồ nặc danh và mảnh giấy",
    html: () => `
    <div class="doc doc--plain">
      ${envelope()}
      <p class="note">Bên trong: một cuộn băng VHS hiệu TDK, không nhãn, và một mảnh giấy dó gấp tư. Mảnh giấy viết bằng bút lông, mực đỏ sẫm như son vẽ mặt:</p>
      <div class="paper-note">${hand("Tổ không bắt ai.<br>Người bắt.", "brush")}</div>
      <p class="note">Ghi chú của ông Tám: <i>“Mực đỏ là chu sa trộn dầu, đúng thứ son các kép dùng vẽ mặt Quan Công. Nó vẫn còn dính tay, dù gói đồ đã đến từ hai hôm.”</i></p>
    </div>`,
  },

  {
    id: "vhs", stage: 0, kind: "Băng VHS", icon: "▶", label: "Băng VHS chép lại đêm diễn 27/9/1993",
    html: () => `
    <div class="doc doc--plain">
      <p class="note">Bản chép của cuộn băng thằng Phát quay từ hàng ghế khán giả. Bản chép này dừng lại trước đoạn cuối.
        Hình rè, tiếng có lúc mất. Những tiếng động quan trọng được ghi chú thành chữ ở cuối khung hình.</p>
      ${media("vhs", "dem")}
      <p class="note small">Mẹo: kéo thanh thời gian để tua, nút ◂ ▸ để đi từng giây, nút tốc độ để xem nhanh. Giờ in trên băng là giờ của máy quay.</p>
    </div>`,
  },

  {
    id: "bao_29", stage: 0, kind: "Báo", icon: "▤", label: "Báo Cửu Giang, thứ Tư 29/9/1993",
    html: () => `
    <div class="doc doc--news">
      <div class="news-top"><span>Số 2.105</span><span>Giá 800 đồng</span></div>
      <div class="news-mast">CỬU GIANG<small>Tiếng nói của Đảng bộ và nhân dân tỉnh Cửu Giang</small></div>
      <div class="news-bar"><span>Thứ Tư 29-9-1993</span><span>Nhằm ngày 14 tháng 8 năm Quý Dậu</span><span>4 trang</span></div>
      <div class="news-grid">
        <div>
          <div class="news-kicker">Tin địa phương</div>
          <h1 class="news-head">Kép hát gục chết trên sân khấu đêm giỗ Tổ</h1>
          ${pic("kiet", "Kép Châu Văn Kiệt (ảnh tư liệu của gánh)", "", "pic--small pic--left")}
          <p class="dropcap">Tối thứ Hai 27/9 (12/8 âm lịch, giỗ Tổ hát bội), gánh hát bội Phước Hưng Ban diễn tuồng <i>Quan Công quá ngũ quan</i>
            tại đình Phú Lễ (cù lao Cồn Ngựa). Tuồng mở màn lúc 21 giờ 30, có hơn ba trăm bà con đến xem.</p>
          <p>Theo người xem, khoảng 22 giờ 30, trong lớp thứ ba, kép <b>Châu Văn Kiệt</b> (38 tuổi), người đóng Quan Công, bỗng khựng lại,
            ưỡn người ra sau rồi ngã vật trên sàn diễn. Nhiều người tưởng là một lối diễn mới. Ông Võ Văn Đáng, người cầm trống chầu, kịp ngưng trống.</p>
          <p>Y sĩ trạm xá xã đến lúc 22 giờ 52. Kép Kiệt qua đời lúc 22 giờ 58, trước mặt y sĩ và cả gánh hát.</p>
          <p>Bà con trong cù lao nhắc lại chuyện cũ: đúng đêm giỗ Tổ năm 1963, kép <b>Hai Lành</b> của gánh này cũng chết trên sân khấu, cũng trong vai Quan Công.
            “Phạm Tổ thì Tổ bắt,” một cụ già nói.</p>
          <p>Công an huyện đã lập hồ sơ, gửi mẫu đi giám định. Bà Nguyễn Thị Lựu, bầu gánh, cho biết gánh sẽ ngưng diễn để lo hậu sự.</p>
        </div>
        <div>
          <div class="news-box"><h4>Lệ giỗ Tổ</h4><p class="small">Ngày 12/8 âm lịch, giới hát bội cúng Tổ nghiệp. Tối đó, người đóng Quan Công phải giữ mình, uống trà cúng Tổ trước khi ra lớp cuối, “cho Tổ nhập vai”.</p></div>
          <div class="news-box"><h4>Thời tiết</h4><p class="small">Đêm 27/9: trời quang, gió nhẹ, trăng gần tròn.</p></div>
        </div>
      </div>
    </div>`,
  },

  {
    id: "bb_kham", stage: 0, kind: "Biên bản", icon: "§", label: "Biên bản khám nghiệm tử thi Châu Văn Kiệt",
    html: () => `
    <div class="doc doc--form">
      <div class="form-head"><div>SỞ Y TẾ CỬU GIANG<br><b>TRUNG TÂM PHÁP Y TỈNH</b></div><div><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>Độc lập – Tự do – Hạnh phúc</div></div>
      <h2 class="form-title">BIÊN BẢN KHÁM NGHIỆM TỬ THI<br><small>Số 41/PY · ngày 28/9/1993</small></h2>
      <p>Họ tên: <b>Châu Văn Kiệt</b>, nam, 38 tuổi, diễn viên. Tử vong lúc 22 giờ 58 ngày 27/9/1993 tại đình Phú Lễ (theo y sĩ Trần Văn Hiếu, trạm xá xã).</p>
      <p><b>Ghi nhận của y sĩ tại chỗ (22:52–22:58):</b> nạn nhân tỉnh táo hoàn toàn, mắt mở, nghe và hiểu được lời nói. Toàn thân co cứng từng cơn,
        lưng ưỡn cong như cánh cung, chỉ đầu và gót chân chạm sàn. Cơ mặt co rút kéo hai mép miệng lên thành nụ cười nhăn. Mỗi khi có tiếng động
        (tiếng trống, tiếng la, tiếng ghế đổ) hoặc khi bị chạm vào thì lên cơn mới. Không nôn, không tiêu chảy. Không sụp mi. Da không đỏ.</p>
      <p><b>Lời bà bầu Tư Lựu (ghi kèm):</b> chiều 27 Kiệt vẫn tập tuồng, ăn uống, nói cười bình thường, hàm không cứng, không than đau. Từ lúc ra lớp 3 đến lúc tắt thở chưa tới nửa giờ.</p>
      <p><b>Khám ngoài:</b> mặt còn lớp son đỏ vẽ vai Quan Công. Hai bên má và trán có nhiều vết cào sâu do nạn nhân tự cào trong cơn;
        khi lau son, da mặt bong theo từng mảng, lẫn với son thành một lớp nhão đỏ sậm. Lưỡi bị cắn đứt gần một nửa, máu đông lẫn son chảy vào hai hốc mắt.
        Các ngón tay co quắp, ba móng tay bật gốc. Ngoài các vết tự cào trong cơn, không có vết thương hở hay vết đâm, vết bỏng nào trên người. Tử thi co cứng sớm và rất mạnh: lúc 23 giờ 30, không duỗi thẳng được lưng.</p>
      <p><b>Khám trong:</b> dạ dày chứa khoảng 150 ml dịch nâu nhạt, mùi trà. Phổi phù, xuất huyết điểm. Không thấy thương tích do vật tày hay vật sắc.</p>
      <p><b>Kết luận sơ bộ:</b> tử vong do ngạt vì co cứng cơ hô hấp. Nghi ngộ độc. Gửi mẫu dịch dạ dày đi xét nghiệm độc chất, chờ kết quả.</p>
      <div class="sign-row"><div>Giám định viên<br>${hand("Tường", "sign")}BS. Lê Minh Tường</div><div>Thủ trưởng đơn vị<br>${hand("Phúc", "sign")}</div></div>
      ${stamp("TRUNG TÂM<br>PHÁP Y<br>CỬU GIANG", "right:40px;bottom:30px", "blue")}
    </div>`,
  },

  {
    id: "sach_doc", stage: 0, kind: "Sách", icon: "✚", label: "Cẩm nang xử trí ngộ độc ở tuyến xã (trích)",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">CẨM NANG XỬ TRÍ NGỘ ĐỘC Ở TUYẾN XÃ<br><small>Sở Y tế Cửu Giang, 1990 · trang 37–39 · bản của trạm xá xã Phú Lễ</small></h2>
      <table class="tbl">
        <tr><th>Chất độc</th><th>Dấu hiệu chính</th><th>Khởi phát sau khi nuốt</th><th>Ý thức</th></tr>
        <tr><td><b>Thạch tín</b> (arsen)</td><td>Đau bụng dữ dội, nôn, tiêu chảy như nước vo gạo, hơi thở mùi tỏi, mất nước, sốc</td><td>30 phút – vài giờ</td><td>Lơ mơ dần</td></tr>
        <tr><td><b>Lá ngón</b></td><td>Chóng mặt, nhìn đôi, sụp mi, yếu cơ, liệt dần rồi ngừng thở. Không co cứng kiểu cánh cung</td><td>10 phút – 1 giờ</td><td>Tỉnh lúc đầu, sau lơ mơ</td></tr>
        <tr><td><b>Hạt mã tiền</b> (strychnin)</td><td>Co cứng cơ, cơn giật toàn thân, lưng ưỡn cong như cánh cung, mặt co rút thành “cười nhăn”. Cơn bị khơi lên bởi tiếng động, ánh sáng, đụng chạm. Chết do ngạt</td><td>15 – 30 phút</td><td>Tỉnh táo hoàn toàn đến lúc chết</td></tr>
        <tr><td><b>Phốt-phua kẽm</b> (thuốc chuột)</td><td>Nôn, hơi thở mùi cá ươn, khó thở, sốc</td><td>15 phút – 4 giờ</td><td>Vật vã, lơ mơ</td></tr>
        <tr><td><b>Cà độc dược</b></td><td>Da đỏ, khô, nóng; đồng tử giãn to; mê sảng, ảo giác, la hét</td><td>30 phút – 1 giờ</td><td>Lú lẫn</td></tr>
        <tr><td><b>Uốn ván</b> (không phải chất độc: vi trùng vào qua vết thương bẩn, vết bỏng)</td><td><b>Cứng hàm</b> (khít hàm) xuất hiện trước tiên; sau đó co cứng toàn thân, lưng ưỡn cong như cánh cung, mặt “cười nhăn”; cơn giật bị khơi lên bởi tiếng động, ánh sáng, đụng chạm. Bệnh kéo dài nhiều ngày</td><td>Ủ bệnh 3 – 21 ngày sau khi bị thương</td><td>Tỉnh táo hoàn toàn</td></tr>
        <tr><td><b>Nọc rắn hổ</b></td><td>Có vết cắn; sụp mi, khó nuốt, liệt</td><td>15 phút – vài giờ</td><td>Tỉnh lúc đầu</td></tr>
      </table>
      <p class="small">Ghi chú của sách: hạt mã tiền chế (đã sao tẩm) bán ở tiệm thuốc bắc làm thuốc trị phong thấp, liều cao rất độc. <b>Thuốc độc bảng A: người bán phải ghi sổ tên, địa chỉ người mua và lấy chữ ký.</b></p>
    </div>`,
  },

  {
    id: "ghi_chu_tu", stage: 0, kind: "Sổ", icon: "☰", label: "Sổ việc đình của ông từ Ba Đực",
    html: () => `
    <div class="doc doc--ledger doc--handwritten">
      <h2 class="form-title">SỔ VIỆC ĐÌNH PHÚ LỄ<br><small>${hand("ông từ Huỳnh Văn Đực ghi", "inline")}</small></h2>
      ${hand(`<p><b>12 tháng 8 Quý Dậu (27/9/93).</b> Giỗ Tổ hát bội. Gánh Phước Hưng Ban hát ba đêm, nay đêm chót.</p>
      <p>Chiều 5 giờ: gánh cúng Tổ ở buồng trò, có heo quay, rượu, trà. Cả gánh uống rượu cúng.</p>
      <p>Tối: theo lệ đình, đêm giỗ Tổ đúng 10 giờ phải đánh chuông ba hồi, mỗi hồi bảy tiếng, mời Tổ về ngự. Tôi mở cái đài, chờ đài Tiếng nói Việt Nam báo giờ,
        tiếng “tít” cuối cùng là 22 giờ đúng, tôi đánh tiếng chuông đầu. Đánh xong ba hồi mất chừng nửa phút.</p>
      <p>Chuông vang thì sân khấu đang nghỉ giữa lớp, trống chiến đánh nhỏ. Bà con đều nghe.</p>
      <p>(Chùa Phước Long bên kia sông tối nào cũng đánh chuông, có hồi sớm hồi muộn, tiếng vọng qua tới đình. Bà con quen rồi, không ai để ý.)</p>
      <p>Gần 11 giờ: kép Kiệt mất trên sân khấu. Tôi thắp nhang cho Tổ, khấn xin Tổ tha.</p>
      <p>Sáng 13: con chó vàng của đình chết sau buồng trò, người cứng như khúc cây, nhe răng. Kiến bu đầy mồm.</p>`)}
    </div>`,
  },

  {
    id: "trinh_tu", stage: 0, kind: "Giấy", icon: "☰", label: "Trình tự đêm diễn dán trong buồng trò",
    html: () => `
    <div class="doc doc--form">
      <h2 class="form-title">GÁNH PHƯỚC HƯNG BAN · ĐÊM GIỖ TỔ 12/8 QUÝ DẬU<br><small>Tuồng <i>Quan Công quá ngũ quan</i> · bà bầu Tư Lựu dán</small></h2>
      <table class="tbl">
        <tr><th>Lớp</th><th>Giờ (dự kiến)</th><th>Vai và người đóng</th></tr>
        <tr><td>Lớp 1 · Treo ấn phong kim</td><td>21:30</td><td>Quan Công: Kiệt · Châu Thương: Thông · Tào Tháo: Lợi · Cam phu nhân: Út Nhàn · Mi phu nhân: Mười Hương · lính cờ: Tư Hòa, Bảy Lửa</td></tr>
        <tr><td>Nghỉ, trống chiến</td><td></td><td></td></tr>
        <tr><td>Lớp 2 · Ải Đông Lãnh</td><td>khoảng 22:00</td><td>Quan Công: Kiệt · Châu Thương: Thông · Khổng Tú: Lợi · hai phu nhân</td></tr>
        <tr><td>Nghỉ, trống chiến</td><td></td><td>Quan Công thay áo, uống trà Tổ</td></tr>
        <tr><td>Lớp 3 · Ải Huỳnh Hà</td><td>khoảng 22:20</td><td>Quan Công: Kiệt · Châu Thương: Thông · Tần Kỳ: Lợi · lính cờ: Tư Hòa, Bảy Lửa</td></tr>
      </table>
      <p><b>Trống chiến:</b> Năm Chánh. <b>Nhắc tuồng:</b> ông Sáu Bé (cánh gà trái). <b>Trống chầu:</b> ông Hương cả Võ Văn Đáng.</p>
      <p><b>LỆ TRÀ TỔ:</b> chuông đình 10 giờ dứt thì thầy tuồng rót ba chung trà trên bàn Tổ. Kép đóng Quan Công uống chung giữa lúc thay áo trước lớp 3.
        Ngoài thầy tuồng và kép Quan Công, không ai được đụng tới bàn Tổ. Tan hát, thầy tuồng đổ trà xuống đất, trả cho Tổ.</p>
    </div>`,
  },
];
