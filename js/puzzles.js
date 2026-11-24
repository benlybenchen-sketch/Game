// Reusable escape-room puzzles for the cases (docs/CAU_DO.md). A case wires them into its MEDIA table:
//   import { blocks, grille, lockbox } from "../../js/puzzles.js";
//   export const MEDIA = { sticks: (el) => blocks(el, CONFIG) };
// Progress (block order, grille turn, opened boxes) is kept in state.puzzles.
import { state, save } from "./store.js";

const P = (id) => ((state.puzzles ||= {})[id] ||= {});
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

// ------------------------------------------------------------------ 1. letter blocks
/**
 * cfg = { id, blocks: [{ name, mark?, upside?, rows: ["AB", "CD", ...] }] }  (every block has the same number of rows)
 * The player reorders the blocks and turns any of them 180°. The joined grid is shown row by row.
 * Options: cfg.cell(ch, blockIndex) -> html draws one cell (default: the character); a block with upside: true lay upside
 * down when found, so its cells are drawn rotated until the player turns it; cfg.noRead hides the joined reading.
 */
export function blocks(el, cfg) {
  const st = P(cfg.id);
  st.order ||= cfg.blocks.map((_, i) => i);
  st.turned ||= cfg.blocks.map(() => false);
  const rowsOf = (i) => { const b = cfg.blocks[i]; return st.turned[i] ? b.rows.slice().reverse().map((r) => [...r].reverse().join("")) : b.rows; };
  const draw = () => {
    const h = cfg.blocks[0].rows.length;
    el.innerHTML = `<div class="pz-blocks">
      <div class="pz-row">${st.order.map((i, pos) => `<div class="pz-block ${st.turned[i] ? "turned" : ""}">
          <div class="pz-cap">${esc(cfg.blocks[i].name)}${cfg.blocks[i].mark ? ` <span class="pz-mark">${cfg.blocks[i].mark}</span>` : ""}</div>
          <div class="pz-grid ${!!cfg.blocks[i].upside !== !!st.turned[i] ? "pz-up" : ""}" style="grid-template-columns:repeat(${cfg.blocks[i].rows[0].length},${cfg.cellW || "1.6em"})">${rowsOf(i).map((r) => [...r].map((c) => `<span data-v="${esc(c)}">${cfg.cell ? cfg.cell(c, i) : esc(c)}</span>`).join("")).join("")}</div>
          <div class="pz-btns"><button class="btn btn--small" data-mv="${pos}" data-d="-1" ${pos === 0 ? "disabled" : ""} title="Sang trái">◀</button><button class="btn btn--small" data-turn="${i}" title="Xoay 180°">⟲</button><button class="btn btn--small" data-mv="${pos}" data-d="1" ${pos === st.order.length - 1 ? "disabled" : ""} title="Sang phải">▶</button></div>
        </div>`).join("")}</div>
      ${cfg.noRead ? "" : `<p class="small muted">Đọc ngang từng hàng khi đã xếp:</p>
      <div class="pz-read">${Array.from({ length: h }, (_, r) => `<div>${st.order.map((i) => rowsOf(i)[r]).join("")}</div>`).join("")}</div>`}
    </div>`;
  };
  draw();
  el.addEventListener("click", (e) => {
    const m = e.target.closest("[data-mv]"), t = e.target.closest("[data-turn]");
    if (m) { const p = +m.dataset.mv, q = p + +m.dataset.d; [st.order[p], st.order[q]] = [st.order[q], st.order[p]]; save(); draw(); }
    if (t) { st.turned[+t.dataset.turn] = !st.turned[+t.dataset.turn]; save(); draw(); }
  });
}

// ------------------------------------------------------------------ 2. turning grille (Cardano)
/**
 * cfg = { id, grid: ["ABCD", ...] (n×n), holes: [[r, c], ...] (holes with the grille in its first position) }
 * The player lays the grille on the page and turns it a quarter at a time.
 */
export function grille(el, cfg) {
  // Optional: cfg.pages = [{ name, grid }] (several pages to lay the card on), cfg.flip = true (the card can be laid face down,
  // which mirrors it left-right before turning).
  const st = P(cfg.id); st.turn ??= 0; st.on ??= false; st.flip ??= false; st.page ??= 0;
  const pages = cfg.pages || [{ grid: cfg.grid }];
  const n = pages[0].grid.length;
  const rot = ([r, c], k) => { for (let i = 0; i < k; i++) [r, c] = [c, n - 1 - r]; return [r, c]; };
  const tf = ([r, c]) => rot(st.flip ? [r, n - 1 - c] : [r, c], st.turn);
  const CORNER = { "0,0": "trên trái", [`0,${n - 1}`]: "trên phải", [`${n - 1},${n - 1}`]: "dưới phải", [`${n - 1},0`]: "dưới trái" };
  const draw = () => {
    const open = new Set(cfg.holes.map((h) => tf(h).join(",")));
    const grid = pages[st.page].grid;
    el.innerHTML = `<div class="pz-grille">
      ${cfg.pages ? `<div class="pz-btns">${pages.map((p, i) => `<button class="btn btn--small ${i === st.page ? "btn--on" : ""}" data-pg="${i}">${esc(p.name)}</button>`).join("")}</div>` : ""}
      <div class="pz-grid g" style="grid-template-columns:repeat(${n},1.7em)">${grid.map((row, r) => [...row].map((ch, c) => `<span class="${st.on ? (open.has(`${r},${c}`) ? "pz-hole" : "pz-cov") : ""}">${esc(ch)}</span>`).join("")).join("")}</div>
      <div class="pz-btns"><button class="btn btn--small ${st.on ? "btn--on" : ""}" data-g="on">${st.on ? "Nhấc tấm bìa ra" : "Đặt tấm bìa lên"}</button>
      <button class="btn btn--small" data-g="turn" ${st.on ? "" : "disabled"}>Xoay tấm bìa một góc vuông</button>
      ${cfg.flip ? `<button class="btn btn--small" data-g="flip">Lật tấm bìa</button>` : ""}
      <span class="small muted">${st.on ? `Góc có vết mực đang ở ${CORNER[tf([0, 0]).join(",")]}${cfg.flip ? (st.flip ? ", mặt sau lên trên" : ", mặt trước lên trên") : ""}.` : ""}</span></div></div>`;
  };
  draw();
  el.addEventListener("click", (e) => {
    const pg = e.target.closest("[data-pg]");
    if (pg) { st.page = +pg.dataset.pg; save(); draw(); return; }
    const b = e.target.closest("[data-g]"); if (!b) return;
    if (b.dataset.g === "on") st.on = !st.on; else if (b.dataset.g === "flip") st.flip = !st.flip; else st.turn = (st.turn + 1) % 4;
    save(); draw();
  });
}

// ------------------------------------------------------------------ 3. lock box
// The content is stored XOR-ed with the code, so it cannot be read in the page before the box is opened with the right code.
const enc = new TextEncoder(), dec = new TextDecoder();
const fnv = (str) => { let h = 2166136261; for (const ch of enc.encode(str)) { h ^= ch; h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; };
/** A keystream that depends on the whole code: any wrong ring changes every byte. */
function stream(code, n) {
  let x = fnv(`hsnd|${code.join("|")}`) || 1; const out = new Uint8Array(n);
  for (let i = 0; i < n; i++) { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; out[i] = x & 255; }
  return out;
}
export function sealContent(html, code) {   // used by tools/lockbox.mjs (Node) to prepare cfg.content
  const b = enc.encode(`${fnv(html).toString(16).padStart(8, "0")}|${html}`), k = stream(code, b.length);
  return Buffer.from(b.map((x, i) => x ^ k[i])).toString("base64");
}
function openContent(b64, code) {
  const raw = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)), k = stream(code, raw.length);
  try {
    const s = dec.decode(raw.map((x, i) => x ^ k[i]), { fatal: true });
    const html = s.slice(9);
    return s[8] === "|" && s.slice(0, 8) === fnv(html).toString(16).padStart(8, "0") ? html : null;
  } catch { return null; }
}
/**
 * cfg = { id, rings: [[symbol, ...], ...] (one list per ring), label?: (symbol) => html, content: sealed base64, after?: (el) => void }
 */
export function lockbox(el, cfg) {
  const st = P(cfg.id); st.pos ||= cfg.rings.map(() => 0);
  const label = cfg.label || ((s) => esc(s));
  const draw = () => {
    if (st.code) {
      const html = openContent(cfg.content, st.code);
      if (html != null) { el.innerHTML = `<div class="pz-open">${html}</div>`; cfg.after?.(el); return; }
      delete st.code;
    }
    el.innerHTML = `<div class="pz-lock">
      <div class="pz-rings">${cfg.rings.map((ring, i) => `<div class="pz-ring"><button class="btn btn--small" data-r="${i}" data-d="-1">▲</button><div class="pz-sym" data-v="${esc(String(ring[st.pos[i]]))}">${label(ring[st.pos[i]])}</div><button class="btn btn--small" data-r="${i}" data-d="1">▼</button></div>`).join("")}</div>
      <button class="btn" data-open="1">Thử mở</button> <span class="pz-msg small muted"></span></div>`;
  };
  draw();
  el.addEventListener("click", (e) => {
    const r = e.target.closest("[data-r]");
    if (r) { const i = +r.dataset.r, len = cfg.rings[i].length; st.pos[i] = (st.pos[i] + +r.dataset.d + len) % len; save(); draw(); return; }
    if (e.target.closest("[data-open]")) {
      const code = st.pos.map((p, i) => cfg.rings[i][p]);
      if (openContent(cfg.content, code) != null) { st.code = code; save(); draw(); }
      else {   // the game (js/main.js) listens for pz-fail and takes time off the clock
        const m = el.querySelector(".pz-msg"); if (m) m.textContent = "Không mở được. Các vòng kẹt lại.";
        el.dispatchEvent(new CustomEvent("pz-fail", { bubbles: true, detail: { id: cfg.id, msg: m } }));
      }
    }
  });
}
