// Case 07, day 2 (Peret II, 17): the pupil's exercise book (numerals, Eye of Horus, measures), the ranks,
// three monthly payrolls with broken cells, Userhat's private re-measuring, loans, the temple granary's letter.
import { hand } from "../../js/kit.js";
import { gom } from "./docs0.js";
import { hn, pebbles, EYE } from "./egypt.js";
import { RATE, payroll, MONTHS_PAID, BROKEN, LOANS, REMEASURED, SCRIBE, RIGHT, LEFT } from "./data.js";

const RANK = { foreman: "đốc công", worker: "thợ", youth: "thợ trẻ", scribe: "ký lục" };
const NUMNOTE = "Chữ thì bà đọc được. Con số ký lục viết theo lối sổ sách của Lăng.";
const bundles = (n) => `<span class="bundles">${"▮".repeat(n)}</span>`;
const red = (s) => `<span class="red-ink">${s}</span>`;

function payrollDoc(m) {
  const rows = payroll();
  const broken = (n, k) => BROKEN.some(([mm, nn, kk]) => mm === m && nn === n && kk === k);
  const cell = (n, k, v) => (broken(n, k) ? `<span class="gone">▒▒</span>` : hn(v));
  let te = 0, tb = 0;
  const body = rows.map((r) => {
    const e = RATE[r.rank].emmer, b = RATE[r.rank].barley; te += e; tb += b;
    return `<tr><td>${r.side || "—"}</td><td>${r.name}</td><td>${cell(r.name, "emmer", e)}</td><td>${cell(r.name, "barley", b)}</td></tr>`;
  }).join("");
  return gom(`<table class="tbl tbl--num">
      <tr><th>Bên</th><th>Tên</th><th>Lúa mì (khar)</th><th>Lúa mạch (khar)</th></tr>${body}
      <tr class="sum"><td colspan="2">Cộng cả làng</td><td>${hn(te)}</td><td>${hn(tb)}</td></tr>
    </table>`, `Sổ phát lương tháng ${MONTHS_PAID[m]}, ký lục Userhat ghi theo số đấu đong ở cổng. ${NUMNOTE}${m === 1 ? " Mảnh gốm vỡ làm đôi, gắn lại." : ""}`);
}

const SAMPLE = REMEASURED;
const rankOf = (n) => (n === SCRIBE ? "scribe" : n === RIGHT.foreman || n === LEFT.foreman ? "foreman" : [...RIGHT.youths, ...LEFT.youths].includes(n) ? "youth" : "worker");

export default [
  {
    id: "vo_hoc_tro", stage: 1, kind: "Vở học trò", icon: "📒", label: "Vở bài tập của Kenna, con ký lục Userhat",
    html: () => `<div class="doc doc--gom">
      <p class="note">Mười mảnh đá vôi nhỏ buộc dây thành tập. Thằng Kenna mười một tuổi tập viết số với thầy ở nhà nguyện. Mực đen là của trò, mực đỏ là thầy sửa.</p>
      <h4>Mảnh 1</h4>
      <table class="tbl">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<tr><td>${hn(n)}</td><td>${n === 7 ? `${pebbles(8)} ${red("gạch bỏ một viên")}` : pebbles(n)}</td></tr>`).join("")}</table>
      <h4>Mảnh 2</h4>
      <table class="tbl">${[10, 20, 30, 40, 50, 60, 70, 80, 90].map((n) => `<tr><td>${hn(n)}</td><td>${bundles(n / 10)} <span class="small muted">bó mười viên</span></td></tr>`).join("")}
        <tr><td>${hn(100)}</td><td>${bundles(10)} <span class="small muted">mười bó</span></td></tr>
        <tr><td>${hn(200)}</td><td>${bundles(10)} ${bundles(10)}</td></tr>
        <tr><td>${hn(300)}</td><td>${bundles(10)} ${bundles(10)} ${bundles(10)}</td></tr></table>
      <h4>Mảnh 3</h4>
      <table class="tbl">
        <tr><td>${hn(23)}</td><td>${bundles(2)} ${pebbles(3)}</td></tr>
        <tr><td>${hn(46)}</td><td>${bundles(4)} ${pebbles(6)}</td></tr>
        <tr><td>${hn(118)}</td><td>${bundles(11)} ${pebbles(8)}</td></tr>
        <tr><td>${hn(75)}</td><td>${bundles(5)} ${pebbles(7)} ${red("thầy sửa: bảy bó, năm viên")}</td></tr>
      </table>
      <h4>Mảnh 4: con mắt của Horus</h4>
      ${hand(`<p>Thầy kể: Seth móc mắt Horus, xé làm sáu mảnh. Thoth nhặt lại, ghép thành con mắt lành. Người đong lúa dùng sáu mảnh ấy để viết phần lẻ của một hekat.</p>`)}
      <table class="tbl">
        <tr><td><span class="hg big">${EYE[2]}</span></td><td>một nửa hekat</td></tr>
        <tr><td><span class="hg big">${EYE[4]}</span></td><td>một phần tư hekat</td></tr>
        <tr><td><span class="hg big">${EYE[8]}</span></td><td>một phần tám hekat</td></tr>
        <tr><td><span class="hg big">${EYE[16]}</span></td><td>một phần mười sáu hekat</td></tr>
        <tr><td><span class="hg big">${EYE[32]}</span></td><td>một phần mười sáu hekat</td></tr>
        <tr><td><span class="hg big">${EYE[64]}</span></td><td>một phần sáu mươi tư hekat</td></tr>
      </table>
      ${hand(`<p>Cộng cả sáu mảnh thì còn thiếu một phần sáu mươi tư mới đủ một hekat. Phần ấy Thoth giữ.</p>`)}
      <h4>Mảnh 5</h4>
      ${hand(`<p>Bài: ${hn(5.75)} hekat cộng ${hn(2.25)} hekat được ${hn(8)} hekat.</p>
        <p>Bài: ${hn(10.5)} hekat bớt ${hn(3.25)} hekat còn ${hn(7.25)} hekat.</p>
        <p>Bài: ${hn(1.125)} hekat gấp đôi được ${hn(2.25)} hekat.</p>`)}
      <h4>Mảnh 6</h4>
      ${hand(`<p>Thầy đọc, trò chép: một khar là bốn ipet (người làng gọi là cái đấu oipe). Một oipe là bốn hekat. Một hekat đổ đầy mười chén hin.</p>
        <p>Bài: ${hn(3)} khar lúa chia cho ${hn(12)} người. Mỗi người được một oipe.</p>
        <p>Bài: đổ nước vào một oipe của Lăng, cần bao nhiêu chén hin? Trò đáp ${hn(40)}. Thầy gật.</p>
        <p>Bài: một người thợ lĩnh ${hn(4)} khar lúa mì, ${hn(1.5)} khar lúa mạch. Cộng là ${hn(5.5)} khar, tức là ${hn(88)} hekat.</p>`)}
      <h4>Mảnh 7</h4>
      ${hand(`<p>Bài: ${hn(10)} ổ bánh chia cho ${hn(4)} người. Mỗi người ${hn(2.5)} ổ.</p>`)}
      <h4>Mảnh 8</h4>
      ${hand(`<p>Bài: kim tự tháp đáy ${hn(360)}… <span class="gone">▒▒▒▒▒▒▒▒</span> mảnh vỡ mất nửa.</p>`)}
      <h4>Mảnh 9</h4>
      ${hand(`<p>Chép văn mẫu: “Hãy làm ký lục, nó cứu con khỏi cái cuốc. Ký lục không vác, không đào, không chèo.”</p>`)}
      <h4>Mảnh 10</h4>
      ${hand(`<p>Bài: ${hn(30)} ngày một tháng, ${hn(12)} tháng một năm, thêm ${hn(5)} ngày cuối năm. Một năm là ${hn(365)} ngày.</p>`)}
    </div>`,
  },

  {
    id: "bang_hang", stage: 1, kind: "Sổ sách", icon: "📓", label: "Mức lương mỗi tháng theo hạng, chép ở cửa kho",
    html: () => gom(`<table class="tbl tbl--num">
        <tr><th>Hạng</th><th>Lúa mì (khar)</th><th>Lúa mạch (khar)</th><th>Lĩnh ở đâu</th></tr>
        <tr><td>Đốc công, ký lục</td><td>${hn(RATE.foreman.emmer)}</td><td>${hn(RATE.foreman.barley)}</td><td>cổng làng</td></tr>
        <tr><td>Thợ đục, thợ vẽ, thợ chạm</td><td>${hn(RATE.worker.emmer)}</td><td>${hn(RATE.worker.barley)}</td><td>cổng làng</td></tr>
        <tr><td>Thợ trẻ</td><td>${hn(RATE.youth.emmer)}</td><td>${hn(RATE.youth.barley)}</td><td>cổng làng</td></tr>
        <tr><td>Người giữ cổng, người giữ lều</td><td>${hn(RATE.gate.emmer)}</td><td>${hn(RATE.gate.barley)}</td><td>kho bến sông</td></tr>
      </table>`, NUMNOTE),
  },

  ...[0, 1, 2].map((m) => ({
    id: `bang_luong_${m + 1}`, stage: 1, kind: "Sổ lương", icon: "📓", label: `Sổ phát lương tháng ${MONTHS_PAID[m]}`,
    html: () => payrollDoc(m),
  })),

  {
    id: "dong_lai", stage: 1, kind: "Sổ sách", icon: "📓", label: "Mảnh gốm Userhat giấu dưới chiếu",
    html: () => gom(`<table class="tbl tbl--num">
        <tr><th>Nhà</th>${MONTHS_PAID.map((m) => `<th colspan="2">${m}</th>`).join("")}</tr>
        <tr><th></th>${MONTHS_PAID.map(() => "<th>sổ</th><th>đấu của Lăng</th>").join("")}</tr>
        ${SAMPLE.map((n) => {
          const r = RATE[rankOf(n)], k = r.emmer + r.barley, real = k * 16 * 15 / 16 - (LOANS[n] || 0);
          return `<tr><td>${n}</td>${MONTHS_PAID.map((_, m) => (m === 1 && n === "Hay") || (m === 2 && n === "Tjay") ? `<td>${hn(k)}</td><td><span class="gone">▒▒</span></td>` : `<td>${hn(k)}</td><td>${hn(real)}</td>`).join("")}</tr>`;
        }).join("")}
      </table>`, "Userhat đưa bà chiều ngày 17, dặn đừng cho ai xem. Cột thứ nhất mỗi tháng tính bằng khar, cột thứ hai bằng hekat. Ông nói: “Tôi mang đấu của Lăng đến từng nhà, đong lại chỗ lúa họ vừa lĩnh ở cổng.”"),
  },

  {
    id: "giay_vay", stage: 1, kind: "Giấy tờ", icon: "📜", label: "Hai giấy vay lúa trong làng",
    html: () => gom(hand(`<p>Thợ đục Baki vay của thợ Huy một túi lúa mì mùa lũ. Mỗi kỳ lương trả ${hn(LOANS.Baki)} hekat, người cổng đong bớt ở cổng, đưa thẳng cho Huy. Làm chứng: Neferabu.</p>
      <p>Thợ đục Mahu vay của thợ Seba để cưới vợ. Mỗi kỳ lương trả ${hn(LOANS.Mahu)} hekat, người cổng đong bớt ở cổng. Làm chứng: Setau.</p>`)),
  },

  {
    id: "thu_kho_den", stage: 1, kind: "Thư", icon: "✉", label: "Thư của ký lục kho đền bên sông trả lời làng",
    html: () => gom(hand(`<p>Ký lục kho đền gửi ký lục của Lăng.</p>
      <p>Kho đã giao đủ lương ba tháng ${MONTHS_PAID.join(", ")} theo đúng sổ. Mỗi chuyến, người cổng làng ra bến nhận, đếm bao có thẻ, ký nhận.</p>
      <p>Lúa tháng ${"Peret II"} trễ vì thuyền từ phương Bắc chưa về. Làng đừng kêu nữa. Đền cũng đói.</p>`)),
  },

  {
    id: "giac_mo", stage: 1, kind: "Ghi chép", icon: "✍", label: "Thợ Ipuy kể giấc mơ đêm 16",
    html: () => `<div class="doc doc--memo">${hand(`<p>“Tôi mơ thấy mình ăn thịt lừa. Sách giải mộng bảo là tốt, sẽ được thăng chức.”</p>
      <p>“Rồi tôi mơ thấy một con rắn ngậm cái chén. Sách không có giấc mơ ấy.”</p>`)}</div>`,
  },
];
