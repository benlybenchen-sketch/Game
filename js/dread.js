// The horror layer. The dread level follows the investigation (0 at the start, 4 before dawn, 5 = case closed: calm).
// Each level adds effects on random timers: drips, whispers, text that changes for a blink, heartbeat,
// wet footprints, lights failing, knocks, a red figure at the edge of the screen, and a ghost writing in the notebook.
// "soft" fear mode keeps the sounds and the writing but drops flicker, the figure and the jump scare.
import { state, save } from "./store.js";
import { sfx, ambience } from "./audio.js";
import { C, base } from "./case.js";

let lv = 0;
let timers = [];
let preloaded = null;
export const level = () => lv;
const full = () => state.fear === "full";

// Per-case horror config: META.dread = { phrases, notes: {level: text}, scare: picture name, extra: [{ min, full, every: [ms, ms], sfx }] }
const cfg = () => C?.META?.dread || {};

export function setLevel(n, { quiet = false } = {}) {
  lv = n;
  document.body.dataset.dread = n;
  document.body.dataset.fear = state.fear;
  ambience(n);
  schedule();
  if (n >= 3 && n < 5 && cfg().scare && preloaded !== base.img) { preloaded = base.img; new Image().src = `${base.img}${cfg().scare}.jpg`; }   // the scare must appear instantly
  const note = (cfg().notes || {})[n];
  if (!quiet && note && !state.scared["note" + n]) {
    state.scared["note" + n] = true; save();
    setTimeout(() => ghostWrite(note), 9000);
  }
}

function loop(on, min, max, fn) {
  if (!on) return;
  const next = () => timers.push(setTimeout(() => { if (!document.hidden && document.body.dataset.screen === "desk") fn(); next(); }, min + Math.random() * (max - min)));
  next();
}

function schedule() {
  timers.forEach(clearTimeout); timers = [];
  if (lv >= 5) return;
  loop(lv >= 1, 45000, 110000, () => sfx.whisper(1.5 + Math.random() * 2));
  loop(lv >= 2, 30000, 75000, glitchText);
  loop(lv >= 3, 40000, 80000, heartbeat);
  loop(lv >= 3, 60000, 120000, footprints);
  loop(lv >= 3 && full(), 45000, 90000, flicker);
  loop(lv >= 4, 50000, 100000, () => sfx.knock(3));
  loop(lv >= 4 && full(), 70000, 140000, apparition);
  for (const x of cfg().extra || []) loop(lv >= x.min && (!x.full || full()), x.every[0], x.every[1], () => sfx[x.sfx]?.());
}

/** A sentence in the open document turns into something else for a blink. */
export function glitchText() {
  const ps = [...document.querySelectorAll(".reader-body p")].filter((p) => !p.querySelector(".ln, .media, canvas, svg, figure") && p.textContent.length > 30);
  if (!ps.length) return;
  const p = ps[Math.floor(Math.random() * ps.length)];
  const orig = p.innerHTML;
  p.classList.add("glitch");
  const ph = cfg().phrases || ["…"];
  p.textContent = ph[Math.floor(Math.random() * ph.length)];
  setTimeout(() => { p.innerHTML = orig; p.classList.remove("glitch"); }, 420);
}

function heartbeat() {
  for (let i = 0; i < 6; i++) sfx.heartbeat(i * 0.85);
  document.body.classList.add("pulse");
  setTimeout(() => document.body.classList.remove("pulse"), 5200);
}

function flicker() {
  document.body.classList.add(state.flash ? "flicker" : "dim");
  setTimeout(() => document.body.classList.remove("flicker", "dim"), state.flash ? 1400 : 3200);
}

function apparition() {
  const fx = document.getElementById("fx");
  const d = document.createElement("div");
  d.className = "apparition";
  d.style.left = Math.random() < 0.5 ? "2vw" : "auto";
  d.style.right = d.style.left === "auto" ? "2vw" : "auto";
  fx.appendChild(d);
  sfx.whisper(1.2);
  setTimeout(() => d.remove(), 2600);
}

/** Small wet footprints walking across the desk, slowly drying. */
export function footprints() {
  const fx = document.getElementById("fx");
  const steps = 9, y0 = 20 + Math.random() * 60, dir = Math.random() < 0.5 ? 1 : -1;
  for (let i = 0; i < steps; i++) {
    setTimeout(() => {
      const f = document.createElement("div");
      f.className = "foot";
      const x = dir > 0 ? 8 + i * 9 : 92 - i * 9;
      f.style.left = x + "vw";
      f.style.top = `calc(${y0}vh + ${(i % 2) * 22}px)`;
      f.style.transform = `rotate(${dir > 0 ? 90 : -90}deg) ${i % 2 ? "scaleX(-1)" : ""}`;
      fx.appendChild(f);
      sfx.drip();
      setTimeout(() => f.remove(), 7000);
    }, i * 650);
  }
}

/** Red, wet handwriting appearing letter by letter in the notebook. */
export function ghostWrite(text) {
  const box = document.querySelector(".ghost-note");
  if (!box) return;
  box.hidden = false;
  const line = document.createElement("div");
  box.appendChild(line);
  let i = 0;
  const step = () => {
    line.textContent = text.slice(0, ++i);
    if (i % 3 === 0) sfx.paper();
    if (i < text.length) setTimeout(step, 130 + Math.random() * 160);
  };
  step();
}

/**
 * A jump scare (full fear mode only), shown once per key. pic: picture name in the case folder,
 * fallback: SVG/HTML shown if the picture is missing, sound: an sfx name.
 */
export function jumpScare(key = "jump", pic = cfg().scare, { fallback = C?.ART?.ghostFace?.() || "", sound = "scream", hold = 750 } = {}) {
  if (!full() || state.scared[key]) return false;
  state.scared[key] = true; save();
  const fx = document.getElementById("fx");
  const d = document.createElement("div");
  d.className = "scare" + (state.flash ? "" : " scare--slow");
  const img = new Image();
  img.alt = "";
  img.onerror = () => { const f = document.createElement("div"); f.className = "scare-fb"; f.innerHTML = fallback; img.replaceWith(f); };
  img.src = `${base.img}${pic}.jpg`;
  d.appendChild(img);
  fx.appendChild(d);
  sfx[sound]?.();
  setTimeout(() => d.classList.add("out"), state.flash ? hold : hold + 1450);
  setTimeout(() => d.remove(), state.flash ? hold + 750 : hold + 2650);
  return true;
}
