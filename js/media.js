// Interactive media inside documents: cassette player (with reverse play + spectrogram),
// the dam's security camera, the darkroom photo, and the lake map with a water-level slider.
// mountMedia(root) finds every .media placeholder in a rendered document and returns a cleanup function.
import { state, save } from "./store.js";
import { C, base } from "./case.js";
import { ctx, out, sfx, voice, speak, hush, tapeBed, tapeOut, motor, now, morseKnocks } from "./audio.js";
import { level } from "./dread.js";

export function mountMedia(root) {
  const cleanups = [];
  root.querySelectorAll(".media").forEach((el) => {
    const type = el.dataset.media, id = el.dataset.id;
    const fn = { tape: tapePlayer, ...(C.MEDIA || {}) }[type];
    if (fn) cleanups.push(fn(el, id) || (() => {}));
  });
  return () => cleanups.forEach((c) => c());
}

// ---------- helpers ----------
export const fmt = (s) => { s = Math.max(0, Math.floor(s)); return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; };
export function rng(seed) { let a = seed >>> 0; return () => { a += 0x6d2b79f5; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export const loadImg = (name) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = `${base.img}${name}.jpg`; });
const flipText = (s) => Array.from(s).reverse().join("");

// Decoded recorded voice lines, shared between mounts: key "bang_1/3" -> AudioBuffer | null
const bufCache = new Map();
async function loadLine(id, i) {
  const key = `${id}/${i}`;
  if (bufCache.has(key)) return bufCache.get(key);
  const p = (async () => {
    try {
      const r = await fetch(`${base.audio}${id}_${i}.mp3`);
      if (!r.ok) return null;
      const ac = ctx(); if (!ac) return null;
      return await ac.decodeAudioData(await r.arrayBuffer());
    } catch { return null; }
  })();
  bufCache.set(key, p);
  return p;
}
function reversed(buf) {
  if (buf._rev) return buf._rev;
  const ac = ctx(), r = ac.createBuffer(buf.numberOfChannels, buf.length, buf.sampleRate);
  for (let c = 0; c < buf.numberOfChannels; c++) r.getChannelData(c).set(Array.from(buf.getChannelData(c)).reverse());
  buf._rev = r;
  return r;
}

// =====================================================================
// Cassette player
// =====================================================================
function tapePlayer(el, id) {
  const tape = C.TAPES[id];
  if (!tape) return;
  let mode = "fwd", pos = 0, playing = false, speed = 1, startAt = 0, startPos = 0, raf = 0;
  let nodes = [], timers = [], stopBed = null, specOn = false;

  el.innerHTML = `
  <div class="tape">
    <div class="cassette">
      <svg viewBox="0 0 320 200" aria-hidden="true">
        <rect x="4" y="4" width="312" height="192" rx="12" fill="#1d1c1a" stroke="#3a3833"/>
        <rect x="26" y="20" width="268" height="104" rx="6" fill="#d8ccb0"/>
        <rect x="26" y="20" width="268" height="20" fill="#9b2f24"/>
        <text x="40" y="35" font-family="IBM Plex Mono, monospace" font-size="12" fill="#f1e7d0">${tape.title}</text>
        <text x="40" y="62" font-family="'Patrick Hand', cursive" font-size="18" fill="#2b2620">${tape.label}</text>
        <rect x="70" y="72" width="180" height="44" rx="22" fill="#2a2925"/>
        <g class="reel reel--l"><circle cx="102" cy="94" r="16" fill="#8c8576"/><circle cx="102" cy="94" r="5" fill="#2a2925"/>${[0, 60, 120, 180, 240, 300].map((a) => `<rect x="100" y="80" width="4" height="7" fill="#2a2925" transform="rotate(${a} 102 94)"/>`).join("")}</g>
        <g class="reel reel--r"><circle cx="218" cy="94" r="16" fill="#8c8576"/><circle cx="218" cy="94" r="5" fill="#2a2925"/>${[0, 60, 120, 180, 240, 300].map((a) => `<rect x="216" y="80" width="4" height="7" fill="#2a2925" transform="rotate(${a} 218 94)"/>`).join("")}</g>
        <path d="M70 150 L250 150 L270 190 L50 190 Z" fill="#2c2b28"/>
        <circle cx="110" cy="172" r="5" fill="#111"/><circle cx="210" cy="172" r="5" fill="#111"/>
      </svg>
    </div>
    <div class="tape-ctl">
      <button class="btn btn--ctl" data-t="play" title="Phát / dừng">▶</button>
      <button class="btn btn--ctl" data-t="start" title="Về đầu băng">⏮</button>
      <button class="btn btn--ctl" data-t="rev" title="Đảo chiều băng">⇄ Tua ngược</button>
      <button class="btn btn--ctl" data-t="speed" title="Tốc độ">×1</button>
      <button class="btn btn--ctl" data-t="spec" title="Phổ âm">≋ Phổ âm</button>
      <span class="tape-count">00:00 / ${fmt(tape.dur)}</span>
    </div>
    <div class="tape-bar" title="Bấm để tua tới đó"><div class="tape-fill"></div><div class="tape-heard"></div></div>
    <div class="spec-wrap" hidden><canvas class="spec" width="720" height="160"></canvas><div class="spec-head"></div><div class="spec-axis"><span>0:00</span><span>${fmt(tape.dur)}</span></div></div>
    <div class="tape-mode"></div>
    <ol class="transcript" aria-live="polite"></ol>
  </div>`;

  const $ = (s) => el.querySelector(s);
  const btn = (k) => el.querySelector(`[data-t="${k}"]`);
  const heardKey = () => `${id}:${mode}`;
  // seconds actually played, per direction, kept as a string of 0/1 so it survives reloads
  const heardMap = () => { let m = state.heard[heardKey()]; if (typeof m !== "string" || m.length !== tape.dur + 1) m = state.heard[heardKey()] = "0".repeat(tape.dur + 1); return m; };
  const markHeard = (sec) => { const m = heardMap(), k = Math.floor(sec); if (m[k] === "0") state.heard[heardKey()] = m.slice(0, k) + "1" + m.slice(k + 1); };
  const wasHeard = (seg) => { const m = heardMap(); for (let k = Math.floor(seg.t); k < Math.min(tape.dur, seg.t + Math.min(seg.d, 2)); k++) if (m[k] === "1") return true; return false; };
  const heardCount = () => (heardMap().match(/1/g) || []).length;
  const plays = () => state.plays[id] || 0;
  const ghostOk = (s) => !s.ghost || plays() >= 3 || level() >= s.ghost + 1;

  function timeline() {
    const segs = tape.segs.map((s, i) => ({ ...s, i })).filter(ghostOk);
    if (mode === "fwd") return segs.map((s) => s.rev ? { ...s, who: "???", text: "[tiếng thì thầm, méo mó, nghe như bị quay ngược]", garble: true } : s);
    return segs.map((s) => ({
      ...s, t: tape.dur - s.t - s.d,
      who: s.rev ? s.who : s.sfx ? null : "(ngược)",
      text: s.rev ? s.text : s.sfx ? s.text : flipText(s.text),
      garble: !s.rev && !s.sfx,
    })).sort((a, b) => a.t - b.t);
  }

  function renderTranscript() {
    const segs = timeline().filter((s) => wasHeard(s));
    $(".transcript").innerHTML = segs.length ? segs.map((s) => {
      const cur = pos >= s.t && pos < s.t + s.d;
      return `<li class="${s.sfx ? "sfx" : ""} ${s.garble ? "garble" : ""} ${cur ? "cur" : ""} ${s.ghost ? "ghost" : ""}"><span class="ts">${fmt(s.t)}</span>${s.who ? `<b>${s.who}:</b> ` : ""}${s.text}</li>`;
    }).join("") : `<li class="muted">Chưa nghe. Lời thoại sẽ hiện ra khi băng chạy qua.</li>`;
    $(".tape-mode").textContent = mode === "rev" ? "Đang ở chế độ TUA NGƯỢC: băng chạy từ cuối về đầu." : "";
  }

  function renderBar() {
    $(".tape-fill").style.width = `${(pos / tape.dur) * 100}%`;
    $(".tape-heard").style.width = `${(heardCount() / tape.dur) * 100}%`;
    $(".tape-count").textContent = `${fmt(pos)} / ${fmt(tape.dur)}`;
    el.querySelector(".tape").classList.toggle("playing", playing);
    el.querySelector(".tape").classList.toggle("reverse", mode === "rev");
    btn("play").textContent = playing ? "❚❚" : "▶";
    btn("rev").classList.toggle("on", mode === "rev");
    btn("spec").classList.toggle("on", specOn);
    if (specOn) drawSpecHead();
  }

  async function play() {
    const ac = ctx();
    if (!ac) return;
    if (pos >= tape.dur - 0.5) pos = 0;
    state.plays[id] = plays() + 1; save();
    playing = true; startAt = now(); startPos = pos;
    const dest = tapeOut();
    stopBed = tapeBed(dest);
    const segs = timeline();
    renderTranscript();
    for (const s of segs) {
      if (s.t + s.d <= pos) continue;
      const off = s.t - pos, when = Math.max(0, off) / speed, skip = Math.max(0, -off);
      if (s.sfx) {
        if (skip > s.d - 0.5) continue;
        if (s.sfx === "knock") timers.push(setTimeout(() => sfx.knock(3), when * 1000));
        else if (s.sfx === "water") for (let k = 0; k < s.d * 2; k++) timers.push(setTimeout(() => sfx.drip(), (when + k * 0.5 + Math.random() * 0.4) * 1000));
        else if (s.sfx === "hum") nodes.push(...sfx.hum(when, (s.d - skip) / speed, dest));
        else if (s.sfx === "chime") timers.push(setTimeout(() => sfx.gong(), when * 1000));
        else if (s.sfx === "motor") nodes.push(...motor(when, (s.d - skip) / speed, dest));
        else if (s.sfx === "chat") timers.push(setTimeout(() => sfx.chat(), when * 1000));
        else if (s.sfx === "tom") timers.push(setTimeout(() => sfx.tom(), when * 1000));
        else if (s.sfx === "slide") timers.push(setTimeout(() => sfx.slide(Math.min(1.2, s.d)), when * 1000));
        else if (s.sfx === "knuckle") for (let k = 0; k < 3; k++) timers.push(setTimeout(() => sfx.knuckle(), (when + k * 0.3) * 1000));
        else if (s.sfx === "morse") {
          // knocks are scheduled one by one so a seek into the middle of the code plays only the rest
          const unit = (s.unit || 0.22) / speed;
          let t = 0;
          for (const c of s.code) {
            const at = t - skip / speed;
            if ((c === "." || c === "-") && at >= -0.01) timers.push(setTimeout(() => morseKnocks(c, { unit, kind: s.kind || "heel", dest }), (when + at) * 1000));
            t += c === "." ? unit * 2 : c === "-" ? unit * 4 : c === " " ? unit * 2 : unit * 3;
          }
        }
        continue;
      }
      const buf = await loadLine(id, s.i);
      if (!playing) return;
      if (buf) {
        const src = ac.createBufferSource();
        src.buffer = mode === "rev" ? reversed(buf) : buf;
        src.playbackRate.value = speed;
        src.connect(dest);
        const offset = mode === "rev" ? Math.max(0, buf.duration - s.d) + skip : skip;
        if (offset < buf.duration - 0.2) { src.start(now() + Math.max(0, when - (now() - startAt)), offset); nodes.push(src); }
      } else if (skip < s.d - 0.6) {
        const spoke = !s.garble && speed === 1;
        if (spoke) timers.push(setTimeout(() => { if (playing && !speak(s.text, s.voice)) nodes.push(...voice(0, s.d - skip, s.voice, dest)); }, when * 1000));
        else nodes.push(...voice(when, (s.d - skip) / speed, s.voice, dest));
      }
    }
    tick();
  }

  function stop() {
    playing = false;
    cancelAnimationFrame(raf);
    nodes.forEach((n) => { try { n.stop(); } catch { /* not started */ } });
    nodes = []; timers.forEach(clearTimeout); timers = [];
    if (stopBed) stopBed(); stopBed = null;
    hush();
    renderBar(); renderTranscript();
  }

  let lastCur = -1;
  function tick() {
    pos = Math.min(tape.dur, startPos + (now() - startAt) * speed);
    markHeard(pos);
    const cur = timeline().findIndex((s) => pos >= s.t && pos < s.t + s.d);
    if (cur !== lastCur) { lastCur = cur; renderTranscript(); save(); }
    renderBar();
    if (pos >= tape.dur) { stop(); save(); return; }
    raf = requestAnimationFrame(tick);
  }

  // ---- spectrogram ----
  let specImg = null;
  function buildSpec() {
    const c = $(".spec"), W = c.width, H = c.height, g = c.getContext("2d");
    const img = g.createImageData(W, H), d = img.data;
    const r = rng(id.length * 977);
    const segs = tape.segs.filter(ghostOk);
    // hidden text mask
    const m = document.createElement("canvas"); m.width = W; m.height = H;
    const mg = m.getContext("2d");
    const x0 = (tape.hidden.t0 / tape.dur) * W, x1 = (tape.hidden.t1 / tape.dur) * W;
    mg.fillStyle = "#fff"; mg.textAlign = "center"; mg.textBaseline = "middle";
    let fs = 64; mg.font = `900 ${fs}px "IBM Plex Mono", monospace`;
    while (mg.measureText(tape.hidden.text).width > (x1 - x0) * 0.95 && fs > 14) { fs -= 2; mg.font = `900 ${fs}px "IBM Plex Mono", monospace`; }
    mg.fillText(tape.hidden.text, (x0 + x1) / 2, H * 0.42);
    const mask = mg.getImageData(0, 0, W, H).data;
    for (let x = 0; x < W; x++) {
      const t = (x / W) * tape.dur;
      const s = segs.find((q) => t >= q.t && t < q.t + q.d);
      const syl = rng(Math.floor(t * 6) + 31)();
      const f0 = s && !s.sfx ? ({ child: 18, ha: 12, woman: 11, old: 10, man: 6 }[s.voice] || 12) : 0;
      for (let y = 0; y < H; y++) {
        const fy = H - y;                        // low frequencies at the bottom
        let v = 0.06 + r() * 0.12 + (fy < 12 ? 0.15 : 0);
        if (s && !s.sfx && syl > 0.18) {
          const harm = f0 ? Math.max(0, 1 - Math.abs(((fy / f0) % 1) - 0.5) * 6) : 0;
          const form = Math.exp(-((fy - 30 - syl * 40) ** 2) / 300) + 0.6 * Math.exp(-((fy - 80 - syl * 50) ** 2) / 500);
          v += harm * form * 0.9 * (s.rev ? 0.6 : 1);
        }
        if (s && s.sfx === "hum") v += Math.exp(-((fy - 52 - Math.sin(t * 3) * 3) ** 2) / 6) * 0.9;
        if (s && s.sfx === "knock" && (Math.floor(t * 2.4) % 3 === 0) && (t * 2.4) % 1 < 0.2) v += 0.7 * (fy < 70 ? 1 : 0.3);
        if (s && (s.sfx === "morse" || s.sfx === "knuckle") && Math.sin(t * 9) > 0.7) v += (s.sfx === "morse" ? (fy < 50 ? 0.8 : 0.15) : (fy > 60 && fy < 120 ? 0.6 : 0.1));
        if (s && s.sfx === "water" && r() < 0.012) v += 0.8;
        if (s && s.sfx === "chime") v += Math.exp(-(((fy % 37) - 18) ** 2) / 4) * 0.5;
        if (mask[(y * W + x) * 4] > 100) v += 0.24 + r() * 0.12;
        v = Math.min(1, v);
        const i = (y * W + x) * 4;
        // black -> violet -> red -> amber colormap
        d[i] = Math.min(255, v * 2.2 * 255 * 0.75 + (v > 0.6 ? (v - 0.6) * 300 : 0));
        d[i + 1] = v > 0.55 ? (v - 0.55) * 2.2 * 255 * 0.8 : 0;
        d[i + 2] = Math.min(255, Math.sin(v * Math.PI) * 170);
        d[i + 3] = 255;
      }
    }
    specImg = img;
  }
  function drawSpecHead() {
    const c = $(".spec"), g = c.getContext("2d");
    if (!specImg) {
      buildSpec();
      const off = document.createElement("canvas"); off.width = c.width; off.height = c.height;
      off.getContext("2d").putImageData(specImg, 0, 0);
      specImg = off;
    }
    g.save();
    if (mode === "rev") { g.translate(c.width, 0); g.scale(-1, 1); }   // reversed tape = mirrored picture
    g.drawImage(specImg, 0, 0);
    g.restore();
    g.fillStyle = "rgba(255,255,255,.85)";
    g.fillRect((pos / tape.dur) * c.width, 0, 2, c.height);
    $(".spec-head").textContent = mode === "rev" ? "Phổ âm (đang hiển thị theo chiều băng ngược)" : "Phổ âm: trục ngang là thời gian, trục dọc là tần số";
  }

  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-t]");
    if (b) {
      ctx(); sfx.click();
      const k = b.dataset.t;
      if (k === "play") playing ? stop() : play();
      if (k === "start") { const was = playing; stop(); pos = 0; renderBar(); if (was) play(); }
      if (k === "rev") { const was = playing; stop(); mode = mode === "fwd" ? "rev" : "fwd"; pos = tape.dur - pos; renderBar(); renderTranscript(); if (was) play(); }
      if (k === "speed") { const was = playing; stop(); speed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1; b.textContent = `×${speed}`; if (was) play(); }
      if (k === "spec") { specOn = !specOn; $(".spec-wrap").hidden = !specOn; renderBar(); }
      return;
    }
    const bar = e.target.closest(".tape-bar");
    if (bar) {
      const r = bar.getBoundingClientRect(), was = playing;
      stop(); pos = Math.max(0, Math.min(tape.dur, ((e.clientX - r.left) / r.width) * tape.dur)); renderBar(); renderTranscript();
      if (was) play();
    }
  });

  // preload recorded lines quietly
  tape.segs.forEach((s, i) => { if (!s.sfx) loadLine(id, i); });
  renderBar(); renderTranscript();
  return () => { if (playing) stop(); };
}
