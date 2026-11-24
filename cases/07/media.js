// Case 07 widgets: the broken sealing (eight fragments, each can be turned) and pouring water with Hay's hin cup.
import { seal, FRAGMENTS, egyptFont, hn } from "./egypt.js";
import { OIPE_HIN, GATE_HIN } from "./data.js";

/** Eight clay fragments; click one to turn it a quarter. The player compares them with the seven seal samples. */
export function fragments(el) {
  egyptFont();
  const rot = FRAGMENTS.map(() => 0);
  const draw = () => {
    el.innerHTML = `<div class="frag-grid">${FRAGMENTS.map(([id, clip], i) => `<button class="frag" data-f="${i}" style="transform:rotate(${rot[i]}deg)" title="Xoay">${seal(id, clip)}<span>${i + 1}</span></button>`).join("")}</div>
      <p class="small muted">Bấm một mảnh để xoay.</p>`;
  };
  draw();
  el.addEventListener("click", (e) => { const b = e.target.closest("[data-f]"); if (!b) return; rot[+b.dataset.f] = (rot[+b.dataset.f] + 90) % 360; draw(); });
}

const MEASURES = { cong: ["Đấu ở cổng làng", GATE_HIN], ben: ["Đấu của kho bến", OIPE_HIN], lang: ["Đấu của Lăng", OIPE_HIN] };
/** Pour hin cups into one of three measures until it overflows. */
export function pour(el) {
  let which = "cong", cups = 0, over = false;
  const draw = () => {
    const cap = MEASURES[which][1], level = Math.min(cups / cap, 1);
    el.innerHTML = `<div class="pour">
      <div class="pour-pick">${Object.entries(MEASURES).map(([k, [n]]) => `<button class="btn btn--small ${k === which ? "btn--on" : ""}" data-m="${k}">${n}</button>`).join("")}</div>
      <div class="pour-tub"><div class="pour-water" style="height:${(level * 100).toFixed(1)}%"></div></div>
      <p>Đã đổ: <span class="pour-n">${cups}</span> chén.${over ? (cap % 1 ? " Chén tiếp theo chỉ rót được một nửa thì nước tràn qua miệng đấu." : " Nước đã ngang miệng đấu; chén tiếp theo tràn ra ngay.") : ""}</p>
      <button class="btn" data-pour="1" ${over ? "disabled" : ""}>Đổ một chén hin</button> <button class="btn btn--small" data-empty="1">Đổ hết nước</button></div>`;
  };
  draw();
  el.addEventListener("click", (e) => {
    const m = e.target.closest("[data-m]"); if (m) { which = m.dataset.m; cups = 0; over = false; draw(); return; }
    if (e.target.closest("[data-empty]")) { cups = 0; over = false; draw(); return; }
    if (e.target.closest("[data-pour]")) {
      const cap = MEASURES[which][1];
      if (cups + 1 > cap) over = true; else cups += 1;
      draw();
    }
  });
}

// Hay's four carved sticks (docs5 "thanh_go"). Each carries one column of seven hieratic numerals. In the right order
// (three-groove stick turned, red-dot, black-dot, one-groove) each row is a place in Hay's copy of Amenemope (docs2
// "vo_hay", lines numbered in the margin): tens of the line, units of the line, tens of the word, units of the word.
// The seven words: "đấu ở cổng thiếu hai chén rưỡi". Tens sticks show the tens signs; a dot is an empty place.
export const AMENEMOPE = [
  "Đừng dời hòn đá mốc ruộng, đừng làm sai phần của nó.",
  "Đừng tham lấy đầy, đừng để lòng mình rỗng như cái đấu gian.",
  "Kẻ đong gian ngồi ở chợ, nhưng thần Thoth ngồi ở cổng thành mà nhìn.",
  "Cái đấu là con mắt của thần Ra, ai đánh tráo nó thì mắt mình bị mù.",
  "Đừng nhận một chén của kẻ yếu để đong cho kẻ mạnh hai chén.",
  "Người ký lục ghi đúng con số thì được sống lâu trên đất.",
  "Kẻ ghi thiếu một phần cho người thợ sẽ thiếu nước ở bên kia.",
  "Đừng nói chỉ thiếu nửa chén, vì thần đếm từng hạt.",
  "Một đấu rưỡi của người nghèo nặng hơn kho lúa của kẻ cướp.",
  "Hãy đong cho đầy, gạt cho phẳng, rồi mới ghi vào sổ.",
  "Đừng để người canh cổng giữ cái đấu của làng một mình.",
  "Hai mắt người ở cổng phải mở khi lúa đi qua dưới tay.",
  "Ai sửa lòng cái đấu thì như kẻ khoét tường đền vào ban đêm.",
  "Lúa của thần thiếu đi một chén thì cả làng đói một ngày.",
  "Ngủ yên là phần của người ngay, người gian thức với ngọn đèn.",
  "Hãy nhớ lời này, con ơi, và chép nó lên tim mình.",
];
export const STICKS_TEXT = "đấu ở cổng thiếu hai chén rưỡi";
const PLACES = ["1305", "0712", "0312", "0804", "1201", "0514", "0903"];
export const STICKS_SOLUTION = PLACES.join("");
const col = (j) => PLACES.map((p) => p[j]).join("");
const TENS_STICK = new Set(["Thanh ba rãnh", "Thanh hai rãnh chấm đen"]);
export const STICKS = {
  id: "sticks", noRead: true, cellW: "2.4em",
  blocks: [   // in the order they lay in the doll; the three-groove stick lay upside down
    { name: "Thanh một rãnh", rows: [...col(3)] },
    { name: "Thanh hai rãnh", mark: "chấm đen", rows: [...col(2)] },
    { name: "Thanh ba rãnh", upside: true, rows: [...col(0)].reverse() },
    { name: "Thanh hai rãnh", mark: "chấm đỏ", rows: [...col(1)] },
  ],
};
STICKS.cell = (d, i) => { const b = STICKS.blocks[i]; return hn(TENS_STICK.has(`${b.name}${b.mark ? ` ${b.mark}` : ""}`) ? 10 * +d : +d); };
