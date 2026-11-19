// Case 04 widgets: two portraits laid over each other (with a flip button and an opacity slider),
// two fingerprints side by side with a magnifier, and the haloperidol log of room 7.
import { state, save } from "../../js/store.js";
import { ctx, sfx } from "../../js/audio.js";
import { jumpScare, level } from "../../js/dread.js";
import { base } from "../../js/case.js";
import { face, print } from "./art.js";
import { doseRows } from "./dose.js";

const img = (name, fallback) => `<img src="${base.img}${name}.jpg" alt="" data-fb="${encodeURIComponent(fallback)}">`;
function fallbacks(el) {
  el.querySelectorAll("img[data-fb]").forEach((i) => { i.onerror = () => { const d = document.createElement("div"); d.className = "ov-fb"; d.innerHTML = decodeURIComponent(i.dataset.fb); i.replaceWith(d); }; });
}

// ------------------------------------------------------------------ overlay of the two portraits
export function overlay(el) {
  el.innerHTML = `
  <div class="ov">
    <div class="ov-stage">
      <div class="ov-a">${img("hoa_1990", face("r"))}</div>
      <div class="ov-b">${img("hue_1996", face("l"))}</div>
    </div>
    <div class="ov-ctl">
      <label>Ảnh Tết 1990 <input type="range" min="0" max="100" value="0" data-ov="mix"> Ảnh thăm nuôi 10/1996</label>
      <button class="btn btn--small" data-ov="flip">⇋ Lật ngang ảnh 1996</button>
      <button class="btn btn--small btn--ghost" data-ov="side">Đặt cạnh nhau</button>
    </div>
    <p class="ov-note">Kéo thanh trượt để chồng hai ảnh lên nhau. Ảnh 1990: bà Hoa. Ảnh 1996: người phụ nữ xưng là bà Hoa.</p>
  </div>`;
  fallbacks(el);
  const ov = el.querySelector(".ov"), b = el.querySelector(".ov-b"), mix = el.querySelector('[data-ov="mix"]');
  let flipped = false, side = false;
  const render = () => {
    b.style.opacity = side ? 1 : mix.value / 100;
    b.style.transform = flipped ? "scaleX(-1)" : "";
    ov.classList.toggle("ov--side", side);
    el.querySelector('[data-ov="flip"]').classList.toggle("btn--on", flipped);
  };
  const maybeScare = () => {   // the two faces become one: the main scare of night 5
    if (flipped && !side && mix.value > 35 && mix.value < 65 && level() >= 3 && !state.scared.haimat) setTimeout(() => jumpScare("haimat", "hai_mat_scare", { hold: 5000, main: true }), 1400);
  };
  mix.addEventListener("input", () => { side = false; render(); maybeScare(); });
  el.addEventListener("click", (e) => {
    const k = e.target.closest("[data-ov]")?.dataset.ov; if (!k || k === "mix") return;
    ctx(); sfx.paper();
    if (k === "flip") flipped = !flipped;
    if (k === "side") side = !side;
    render(); maybeScare();
  });
  render();
}

// ------------------------------------------------------------------ fingerprints
export function prints(el) {
  el.innerHTML = `
  <div class="fpc">
    <figure><div class="fp-box">${img("van_tay_moc", print("loop"))}</div><figcaption>CMND bà Lê Thị Hoa, cấp 1980 · ngón trỏ phải</figcaption></figure>
    <figure><div class="fp-box">${img("van_tay_xoay", print("whorl"))}</div><figcaption>Giấy cam đoan nhập viện 20/8/1996 · ngón trỏ phải</figcaption></figure>
  </div>
  <p class="ov-note">Rê chuột (hoặc chạm) lên dấu vân tay để soi bằng kính lúp.</p>`;
  fallbacks(el);
  el.querySelectorAll(".fp-box").forEach((box) => {
    const move = (e) => { const r = box.getBoundingClientRect(), p = e.touches?.[0] || e; box.style.setProperty("--x", `${((p.clientX - r.left) / r.width) * 100}%`); box.style.setProperty("--y", `${((p.clientY - r.top) / r.height) * 100}%`); box.classList.add("zoom"); };
    box.addEventListener("pointermove", move); box.addEventListener("pointerdown", move);
    box.addEventListener("pointerleave", () => box.classList.remove("zoom"));
  });
}

// ------------------------------------------------------------------ the medication log (grows with each wrong conclusion)
export function doselog(el) {
  el.innerHTML = `<table class="tbl tbl--hand"><tr><th>Ngày</th><th>Y lệnh</th><th>Bác sĩ</th><th>Lý do</th></tr>
    ${doseRows().map((r, i) => `<tr class="${i >= 2 ? "dose-up" : ""}">${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
}
