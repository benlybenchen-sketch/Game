// Case 07 widgets: the broken sealing (eight fragments, each can be turned) and pouring water with Hay's hin cup.
import { seal, FRAGMENTS, egyptFont } from "./egypt.js";
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

// Hay's four carved sticks (docs5 "thanh_go"). The true grid, 7 rows x 8 letters, reads row by row:
// "CAI DAU O CONG THIEU HAI CHEN RUOI NUOC DUNG DONG LUA O CONG NUA HAY NHO".
// Cut into columns 3 | 2 | 2 | 1. The three-groove stick was found upside down (stored turned 180°).
const GRID = ["CAIDAUOC", "ONGTHIEU", "HAICHENR", "UOINUOCD", "UNGDONGL", "UAOCONGN", "UAHAYNHO"];
const cut = (a, b) => GRID.map((r) => r.slice(a, b));
const turn = (rows) => rows.slice().reverse().map((r) => [...r].reverse().join(""));
export const STICKS_SOLUTION = GRID.join("");
export const STICKS = {
  id: "sticks",
  blocks: [   // in the order they lay in the doll
    { name: "Thanh một rãnh", rows: cut(7, 8) },
    { name: "Thanh hai rãnh", mark: "chấm đen", rows: cut(5, 7) },
    { name: "Thanh ba rãnh", rows: turn(cut(0, 3)) },
    { name: "Thanh hai rãnh", mark: "chấm đỏ", rows: cut(3, 5) },
  ],
};
