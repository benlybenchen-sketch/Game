// Case 05, visit 2 (Saturday 21/12/1991): inside the house for the first time.
import { ln, pic, hand } from "../../js/kit.js";
import { tape, diary } from "./docs0.js";

export default [
  diary("nk_2", 1, "Nhật ký thực tập: lần đầu vào nhà, 21/12", ["gian_giua", "Gian giữa nhà ông Khải. Cửa buồng trong ở bên phải."], `
    <p>Thứ Bảy 21/12/1991. Lần này cháu Ngân mở cửa ngay, như đã đứng chờ sẵn.</p>
    <p>Mùi đập vào mặt trước tiên: hắc, cay mắt, lẫn mùi hương trầm. Hương cắm đầy bát trên bàn thờ. Trên bàn thờ có ảnh ông bà nội, ảnh liệt sĩ, nhưng có một khoảng trống, bụi in hình một khung ảnh đã bị cất đi.</p>
    <p>Cửa buồng trong dán kín bằng băng keo nâu và giấy báo, khe dưới nhét chăn. Trước cửa đặt một khay: bát cháo, đôi đũa, chén trà. Cháo đã nguội, váng lại.</p>
    <p>Ông Khải gầy lắm, tay ám vàng thuốc ảnh, hơi thở có mùi rượu. Ông rót nước mời tôi, tay run.</p>
    <p>Tôi xin phép bật máy ghi âm của trạm. Cháu Ngân bảo “vâng ạ”, rồi nhìn bố. Ông Khải cũng bảo “vâng”.</p>`),

  tape("bang_tham_2", 1, "Băng: buổi hỏi chuyện ở nhà ông Khải (21/12)", "Vân ghi âm bằng máy cassette của trạm, máy đặt trên bàn nước ở gian giữa."),

  {
    id: "bien_ban_2", stage: 1, kind: "Biên bản", icon: "§", label: "Biên bản hỏi chuyện hai cha con (Vân ghi lại)",
    html: () => `
    <div class="doc doc--report">
      <div class="report-head">TRẠM Y TẾ CAM ĐƯỜNG · PHIẾU HỎI BỆNH TẠI NHÀ<br>Người bệnh: Phạm Thị Hằng · Người trả lời: chồng và con</div>
      <p class="small">Sinh viên Lê Bích Vân hỏi riêng từng người: ông Khải ở gian giữa, cháu Ngân ở bếp, sau khi đã tắt máy ghi âm.</p>
      <div class="cols2">
        <div><h4>Ông Đỗ Văn Khải, 47 tuổi</h4>
          <p>${ln("k_ho", "Nhà tôi ho từ mùa đông năm kia, đêm nào cũng ho.")}</p>
          <p>${ln("k_bon", "Sáng nào tôi cũng vào buồng, bón cháo cho nhà tôi rồi mới mở hiệu.")}</p>
          <p>${ln("k_ao", "Nhà tôi vẫn mặc cái áo len đỏ, đan từ hồi còn đi dạy.")}</p>
          <p>${ln("k_gio", "Nhà tôi sợ gió, nên phải dán cửa.")}</p>
          <p>${ln("k_thuoc", "Thuốc tim thì vẫn mua đều ở hiệu thuốc chợ.")}</p>
        </div>
        <div><h4>Cháu Đỗ Thị Ngân, 15 tuổi</h4>
          <p>${ln("n_ho", "Mẹ cháu ho từ mùa đông năm kia ạ.")}</p>
          <p>${ln("n_chao", "Hôm qua mẹ ăn được nửa bát cháo trứng, cháu nấu.")}</p>
          <p>${ln("n_vao", "Từ Tết năm ngoái mẹ không cho bố vào buồng nữa, mẹ sợ lây cho bố. Chỉ cháu được vào thôi.")}</p>
          <p>${ln("n_ao", "Mẹ cháu lạnh, cháu đắp thêm áo len đỏ cho mẹ.")}</p>
          <p>${ln("n_gio", "Mẹ dặn đóng hết cửa, mẹ sợ gió lắm.")}</p>
        </div>
      </div>
      <p class="small">Ghi chú của Vân: hiệu thuốc chợ xác nhận ông Khải vẫn mua thuốc trợ tim đều mỗi tháng, từ năm 1985 đến nay.</p>
    </div>`,
  },

  {
    id: "ho_lua", stage: 1, kind: "Ghi chép", icon: "✎", label: "Chuyện ở hàng nước bà Lụa (Vân ghi vội)",
    html: () => `
    <div class="doc doc--notebook">${hand(`
      <p>Hàng nước đầu ngõ, chiều 21/12. Bà Lụa rót cho tôi bát chè xanh, nói không cần hỏi.</p>
      <p>“Thằng Khải nó hiền như đất. Từ ngày vợ ốm, ${ln("hl_trung", "việc gì trong nhà cũng một tay con bé lo, bố nó chỉ biết ngồi uống rượu.")}”</p>
      <p>“${ln("hl_mui", "Cái mùi ấy à? Hắc như mùi phòng thí nghiệm mổ ếch ở trường cấp ba ấy. Ngày xưa thằng Khải làm phòng hoá nghiệm bên mỏ, quen mùi rồi.")}”</p>
      <p>“${ln("hl_tay", "Năm kia, ra Giêng, con Ngân đứt tay một đường dài lắm, bố nó cõng ra trạm. Bảo cắt phim bị dao cạo. Từ đấy con bé đeo cái chun buộc tóc ở cổ tay suốt.")}”</p>
      <p>“Cô hỏi tôi có tin cô Hằng còn nằm trong ấy không à? Tôi không biết. Đêm nào tôi cũng nghe ho thật mà.”</p>`)}
    </div>`,
  },

  {
    id: "so_tay_anh", stage: 1, kind: "Sổ tay", icon: "📓", label: "Sổ công thức pha thuốc ảnh của ông Khải",
    html: () => `
    <div class="doc doc--old">
      <p class="note">Cuốn sổ bìa cứng treo trên đinh trong buồng tối. Vân chép lại trang đầu.</p>
      ${hand(`<p>THUỐC HIỆN (D-76): metol 2 g, sulfit 100 g, hydroquinon 5 g, borax 2 g, nước cho đủ 1 lít.</p>
      <p>THUỐC HÃM: hypo 250 g / lít. Mùa hè thêm phèn.</p>
      <p>BỂ LÀM CỨNG (mùa nồm, phim mềm): ${ln("st_formol", "formol (formalin) 10 ml cho 1 lít nước. Mùi rất hắc, cay mắt, phải mở cửa.")}</p>
      <p>${ln("st_can", "Can 20 lít formol mang từ phòng hoá nghiệm mỏ về, tháng 6/1988, dùng dè.")} Vôi bột 2 bao để hút ẩm giấy ảnh.</p>
      <p class="small">Dòng viết thêm bằng bút chì, nét khác, rất mạnh tay: ${ln("st_het", "“Tháng 1/1990: hết nửa can.”")}</p>`)}
    </div>`,
  },

  {
    id: "hai_cha_con", stage: 1, kind: "Ảnh", icon: "🖼", label: "Ảnh Vân chụp hai cha con ở gian giữa",
    html: () => `
    <div class="doc doc--plain">
      ${pic("hai_cha_con", "Vân mượn máy ảnh của hiệu, chụp một kiểu làm hồ sơ. Cháu Ngân giữ cổ tay bố suốt lúc chụp.")}
      <p class="note">Ông Khải không nhìn ống kính. Ông nhìn con.</p>
    </div>`,
  },
];
