// Case 07, day 7 (Peret II, 22): the strike, the gatekeeper offers to carry the measure; after the choice:
// the endings' reports and the oracle's sherds turned over.
import { pic, hand } from "../../js/kit.js";
import { gom } from "./docs0.js";

export default [
  {
    id: "dinh_cong", stage: 6, kind: "Lời kể", icon: "✍", label: "Sáng 22: thợ bỏ Lăng",
    html: () => `<div class="doc doc--plain">${pic("dinh_cong", "Chiều 22, sau tường đền phía Tây.")}
      ${hand(`<p>Sáng nay hai bên không lên Lăng. Cả làng kéo nhau xuống đền phía Tây, ngồi sau tường đền mà kêu: “Chúng tôi đói. Mười tám ngày rồi.”</p>
        <p>Tể tướng sai người ra nói chiều nay sẽ nghe kêu, ai có vật chứng thì mang tới, có niêm.</p>`)}</div>`,
  },
  {
    id: "loi_khonsu_cuoi", stage: 6, kind: "Lời kể", icon: "✍", label: "Khonsu ở cổng, giữa trưa ngày 22",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Bà ơi, để tôi mang cái đấu xuống đền. Tể tướng phải thấy kho đền đong thiếu cho làng mình.”</p>
      <p>“Tôi khiêng quen rồi. Bà đi sau với mọi người.”</p>
      <p>“Ấn của Lăng tôi cầm lên đèo mỗi tối, ấn kho bến tôi cũng cầm. Muốn niêm cái gì tôi niêm cho.”</p>`)}</div>`,
  },
  {
    id: "nha_nguyen", stage: 6, kind: "Lời kể", icon: "✍", label: "Hai thầy tư tế ở nhà nguyện",
    html: () => `<div class="doc doc--memo">${hand(`
      <p>“Chúng tôi không thấy đường từ lâu rồi. Kiệu nghiêng hay đứng là thần muốn, không phải chúng tôi.”</p>
      <p>“Ấn nhà nguyện chúng tôi đeo ở cổ, ngủ cũng đeo. Bà cần niêm gì thì mang vào đây.”</p>
      <p>“Đống gốm sáng 16 vẫn để nguyên trong góc. Chưa ai đụng.”</p>`)}</div>`,
  },

  // ---- after the choice (stage 7): the true ending and the others
  {
    id: "bb_cuoi", stage: 7, kind: "Biên bản", icon: "⚖", label: "Văn phòng tể tướng xử ở đền phía Tây, ngày 23",
    html: () => gom(hand(`<p>Cái đấu của cổng làng Lăng, niêm bằng ấn nhà nguyện, mở trước tể tướng. Lòng đấu lót một lớp vữa vôi dày một finger. Đong nước: ba mươi bảy chén hin rưỡi, thiếu một phần mười sáu.</p>
      <p>Mảnh gốm của thợ vẽ Hay, sổ của thầy bắt rắn Hori, thẻ bao lúa ở kho bến và thư trả lời số ba ở nhà nguyện cùng một nét tay.</p>
      <p>Người giữ cổng Khonsu nhận. Ba tháng lấy hai mươi tám khar và nửa hekat lúa, em trai đem đổi ở chợ bờ Đông. Hay đong lại lương nhà mình, hỏi Khonsu ở cổng; đêm 14 Khonsu mang ấn lên đèo, theo Hay vào hành lang C. Userhat cộng sổ thấy khớp mà nhà nào cũng đói; Khonsu đặt con rắn mua ngày 17 vào hộp bút.</p>
      <p>Lúa của làng về ngày 24. Thợ lên Lăng ngày 25.</p>`)),
  },
  {
    id: "bb_xau", stage: 8, fail: ["ba_ran", "im_lang", "mot_nua"], kind: "Biên bản", icon: "⚖", label: "Văn phòng tể tướng xử ở đền phía Tây, ngày 23 (bản khác)",
    html: () => gom(hand(`<p>Tể tướng xem cái đấu mang tới: đong nước đủ bốn mươi chén hin. Kho đền bị đổ tội đong thiếu, ký lục kho đền bị phạt trăm roi.</p>
      <p>Thợ vẽ Hay chết vì thề gian, Bà Rắn bắt. Ký lục Userhat chết vì rắn, Bà Rắn bắt.</p>
      <p>Người giữ cổng Khonsu được thưởng một túi lúa vì đã mang vật chứng xuống đền.</p>`)),
  },
  {
    id: "gom_lat", stage: 7, secret: true, kind: "Vật chứng", icon: "☉", label: "Đống gốm trong nhà nguyện, lật lại",
    html: () => `<div class="doc doc--plain">${pic("xin_the", "Đống gốm sáng 16.")}
      ${hand(`<p>Hai thầy tư tế cho bà lật đống gốm sáng 16, đúng chỗ kiệu nghiêng xuống.</p>
        <p>Mảnh trên cùng ghi tên Nakhtmin. Mảnh nằm ngay dưới, bị che kín, ghi: “Khonsu, người giữ cổng”.</p>
        <p>Hai thầy tư tế không thấy đường. Hôm ấy không ai khác chạm vào kiệu.</p>`)}</div>`,
  },
];
