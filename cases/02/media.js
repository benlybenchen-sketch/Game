// Case 02 media: the VHS recording of the performance (with trống chầu, the đình bell and captions),
// the police photo of the buồng trò with clickable spots, and Phát's 24-frame film roll.
import { state, save } from "../../js/store.js";
import { ctx, sfx, reverb, out } from "../../js/audio.js";
import { level, jumpScare } from "../../js/dread.js";
import { loadImg } from "../../js/media.js";
import { base } from "../../js/case.js";
import { stageArt, chauThuong, ghostFace } from "./art.js";

const sec = (hms) => { const [h, m, s] = hms.split(":").map(Number); return h * 3600 + m * 60 + (s || 0); };
const hms = (t) => [Math.floor(t / 3600), Math.floor((t % 3600) / 60), t % 60].map((x) => String(x).padStart(2, "0")).join(":");

// ---------------------------------------------------------------- VHS
// Every voiced line is a recorded clip in audio/02/vhs_<v>.mp3. Captions repeat each sound in words.
const COMMON = [
  { t: "22:28:03", sfx: "tom", text: "Trống chầu: TOM" },
  { t: "22:28:06", v: "v10", text: "Quan Công khựng lại, ưỡn ngực ra sau, người cong dần như cánh cung: “Á… á… cái lưng… cái lưng tôi…”" },
  { t: "22:28:30", v: "v11", text: "Quan Công rú lên, hai tay cào mặt. Khán giả tưởng diễn, vỗ tay: “Hay! Diễn hay quá!”" },
  { t: "22:29:10", sfx: "tom", text: "Trống chầu: TOM. Quan Công giật nảy, đầu đập xuống sàn gỗ" },
  { t: "22:29:40", v: "v12", text: "“Ảnh không diễn đâu! Ảnh bị gì rồi!” · “Trời đất ơi!” · “Ngừng trống! Ngừng trống lại!”" },
  { t: "22:31:00", text: "Trống chầu ngừng hẳn. Cả gánh chạy ra sân khấu" },
  { t: "22:31:05", v: "v13", text: "Bà bầu Tư Lựu: “Kiệt! Kiệt ơi! Kêu y sĩ! Kêu y sĩ mau lên!”" },
  { t: "22:33:20", v: "v14", text: "“Đừng đụng vô ảnh! Đụng vô là giật!” · “Ảnh cười kìa… ảnh đang cười kìa…”" },
  { t: "22:35:00", v: "v15", text: "Quan Công cười. Cười không dứt, qua hàm răng cắn chặt" },
];
const VHS = {
  dem: {
    start: "21:20:00", end: "22:35:50",
    scenes: [
      { from: "21:20:00", img: "vhs_dinh", fb: "crowd", crowd: 0.5 },
      { from: "21:22:00", img: "vhs_lop1", fb: "stage", chapter: "Lớp 1", drum: true, crowd: 0.2 },
      { from: "21:47:00", img: "vhs_nghi", fb: "empty", chapter: "Nghỉ", drum: "soft", crowd: 0.4 },
      { from: "21:55:00", img: "vhs_lop2", fb: "stage", chapter: "Lớp 2", drum: true, crowd: 0.2 },
      { from: "22:05:00", img: "vhs_nghi", fb: "empty", chapter: "Nghỉ", drum: "soft", crowd: 0.4 },
      { from: "22:12:00", img: "vhs_lop3", fb: "stage", chapter: "Lớp 3", drum: true, crowd: 0.2 },
      { from: "22:28:05", img: "vhs_guc", fb: "collapse", crowd: 0.8, panic: true },
    ],
    events: [
      { t: "21:20:05", v: "v01", text: "“Kính thưa bà con cô bác! Đêm nay, mười hai tháng Tám, giỗ Tổ nghiệp, gánh Phước Hưng Ban xin kính dâng tuồng Quan Công quá ngũ quan!”" },
      { t: "21:20:18", sfx: "ken", text: "Kèn thổi khai tràng" },
      { t: "21:22:00", text: "Lớp 1 · Treo ấn phong kim. Trống chiến nổi" },
      { t: "21:30:12", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:33:40", v: "v02", text: "Quan Công: “Tào Mạnh Đức ơi! Ấn vàng treo lại, Quan mỗ trả ơn. Nay xin từ biệt!”" },
      { t: "21:36:40", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:41:05", sfx: "tom2", v: "v03", text: "Trống chầu: TOM TOM. Châu Thương múa đao. “Hay quá!” · “Thưởng! Thưởng!”" },
      { t: "21:45:30", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:47:00", text: "Hết lớp 1. Nghỉ. Trống chiến đánh nhỏ" },
      { t: "21:52:00", sfx: "bell", dur: 26, text: "Chuông đình: ba hồi, mỗi hồi bảy tiếng" },
      { t: "21:55:00", text: "Lớp 2 · Ải Đông Lãnh. Trống chiến nổi lớn" },
      { t: "21:57:10", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:59:30", v: "v04", text: "Khổng Tú: “Quan Vân Trường! Có văn bằng qua ải hay chưa?”" },
      { t: "22:00:54", v: "v05", text: "Châu Thương: “Bẩm… bẩm chúa công… ơ… cái ải này…” · Có người xì xào: “Thằng Thông bữa nay sao vậy?”" },
      { t: "22:01:00", sfx: "chat", text: "Châu Thương hát vấp, ngưng giữa câu. Trống chầu: CHÁT" },
      { t: "22:03:15", v: "v06", text: "Châu Thương: “Ta là… ta là Châu… Châu… ơ…” · Khán giả cười ồ: “Quên lời rồi!”" },
      { t: "22:03:20", sfx: "chat", text: "Châu Thương quên lời. Trống chầu: CHÁT" },
      { t: "22:04:40", sfx: "tom", v: "v07", text: "Quan Công: “Khổng Tú! Coi đao!” Chém Khổng Tú. Trống chầu: TOM" },
      { t: "22:05:00", text: "Hết lớp 2. Nghỉ" },
      { t: "22:12:00", text: "Lớp 3 · Ải Huỳnh Hà" },
      { t: "22:15:00", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "22:21:27", v: "v08", text: "Châu Thương: “Chúa công cứ đi! Có Châu Thương này hộ giá!”" },
      { t: "22:21:30", sfx: "tom2", text: "Trống chầu: TOM TOM. Châu Thương hát hay. “Phải vậy chớ! Hay!”" },
      { t: "22:25:10", v: "v09", text: "Quan Công, giọng khàn lạ: “Tần Kỳ… ngươi chớ cản đường… Sao miệng ta… đắng quá…”" },
      ...COMMON,
    ],
    wingGhost: { t: "21:50:13", min: 2 },
  },
  cuoi: {
    start: "22:33:00", end: "22:38:10",
    scenes: [
      { from: "22:33:00", img: "vhs_guc", fb: "collapse", crowd: 0.8, panic: true },
      { from: "22:36:00", img: "vhs_ma", fb: "ghost", crowd: 0.05 },
      { from: "22:36:20", img: "vhs_guc", fb: "collapse", crowd: 0.6, panic: true },
    ],
    events: [
      ...COMMON.filter((e) => sec(e.t) >= sec("22:33:00")),
      { t: "22:36:00", text: "Máy quay lia sang cánh gà phải. Mọi tiếng động tắt hẳn" },
      { t: "22:36:03", sfx: "chat", text: "Một tiếng CHÁT. Không ai ngồi ở trống chầu" },
      { t: "22:36:06", v: "v17", text: "Một giọng đàn ông, rất gần micro: “Trả vai cho tao.”" },
      { t: "22:37:30", v: "v16", text: "Tiếng Phát thì thào: “Ai đứng đó vậy… Quan Công… sao lại có hai ông Quan Công…”" },
    ],
    scare: { t: "22:36:04", key: "vhs_ma", pic: "vhs_ma_close" },
  },
};

// ---- sound engine of the tape: beds (hiss, crowd, drone) + scheduled hits and recorded voices, all on the audio clock
let NOISE = null;
function noiseBuf(ac) {
  if (!NOISE) { NOISE = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate); const d = NOISE.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  return NOISE;
}
const clipCache = new Map();
function loadClip(v) {
  if (!clipCache.has(v)) clipCache.set(v, (async () => {
    try { const r = await fetch(`${base.audio}vhs_${v}.mp3`); if (!r.ok) return null; return await ctx().decodeAudioData(await r.arrayBuffer()); } catch { return null; }
  })());
  return clipCache.get(v);
}

function engine() {
  const ac = ctx(); if (!ac) return null;
  const nodes = [];
  const bus = ac.createGain(); bus.gain.value = 1.15;
  const comp = ac.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 5; comp.attack.value = 0.003;
  bus.connect(comp).connect(out());
  const verb = reverb();
  const send = ac.createGain(); send.gain.value = 0.35; bus.connect(send); if (verb) send.connect(verb);
  const loopNoise = (filter, freq, q, gain, dest) => {
    const s = ac.createBufferSource(); s.buffer = noiseBuf(ac); s.loop = true; s.loopStart = Math.random();
    const f = ac.createBiquadFilter(); f.type = filter; f.frequency.value = freq; f.Q.value = q;
    const g = ac.createGain(); g.gain.value = gain;
    s.connect(f).connect(g).connect(dest); s.start(); nodes.push(s); return g;
  };
  loopNoise("bandpass", 4200, 0.6, 0.035, bus);                                   // tape hiss
  const crowd = ac.createGain(); crowd.gain.value = 0; crowd.connect(bus);         // crowd babble: formant noises with a syllable-rate wobble
  [[420, 4.1], [780, 5.3], [1300, 6.2], [2100, 3.7]].forEach(([f, rate]) => {
    const g = loopNoise("bandpass", f, 4, 0.5, crowd);
    const l = ac.createOscillator(); l.frequency.value = rate + Math.random();
    const lg = ac.createGain(); lg.gain.value = 0.45; l.connect(lg).connect(g.gain); l.start(); nodes.push(l);
  });
  const drone = ac.createGain(); drone.gain.value = 0; drone.connect(bus);         // low horror drone
  const dlp = ac.createBiquadFilter(); dlp.type = "lowpass"; dlp.frequency.value = 260; dlp.connect(drone);
  [41.2, 41.9, 61.7, 87.3].forEach((f) => { const o = ac.createOscillator(); o.type = "sawtooth"; o.frequency.value = f; o.connect(dlp); o.start(); nodes.push(o); });
  const hit = (when, kind, vol = 1) => {
    const t = Math.max(ac.currentTime, when);
    const env = (g, a, peak, d) => { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); };
    const osc = (f0, f1, d, peak, type = "sine") => { const o = ac.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + d); const g = ac.createGain(); env(g, 0.004, peak * vol, d); o.connect(g).connect(bus); o.start(t); o.stop(t + d + 0.1); nodes.push(o); };
    const nz = (type, f, q, d, peak) => { const s = ac.createBufferSource(); s.buffer = noiseBuf(ac); const fl = ac.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q; const g = ac.createGain(); env(g, 0.002, peak * vol, d); s.connect(fl).connect(g).connect(bus); s.start(t, Math.random()); s.stop(t + d + 0.1); nodes.push(s); };
    if (kind === "boom") { osc(78, 46, 0.42, 0.9); nz("lowpass", 520, 1, 0.12, 0.5); }
    if (kind === "rim") nz("bandpass", 1900, 5, 0.05, 0.35);
    if (kind === "tom") { osc(96, 40, 1.1, 1.6); osc(150, 70, 0.3, 0.5, "triangle"); nz("lowpass", 340, 1, 0.3, 1.0); }
    if (kind === "chat") { nz("bandpass", 2900, 7, 0.09, 1.6); osc(1500, 1350, 0.06, 0.25, "square"); nz("highpass", 5000, 1, 0.03, 0.6); }
    if (kind === "heart") { osc(60, 38, 0.18, 1.1); setTimeout(() => {}, 0); }
    if (kind === "clap") for (let i = 0; i < 70; i++) { const s = ac.createBufferSource(); s.buffer = noiseBuf(ac); const fl = ac.createBiquadFilter(); fl.type = "bandpass"; fl.frequency.value = 1200 + Math.random() * 1600; fl.Q.value = 1.5; const g = ac.createGain(); const tt = t + Math.random() * 2.2; g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.25 * vol, tt + 0.002); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.03); s.connect(fl).connect(g).connect(bus); s.start(tt, Math.random()); s.stop(tt + 0.05); nodes.push(s); }
  };
  const voice = async (v, when, offset = 0) => {
    const b = await loadClip(v); if (!b || offset >= b.duration) return;
    const s = ac.createBufferSource(); s.buffer = b; const g = ac.createGain(); g.gain.value = 1.6;
    s.connect(g).connect(bus); s.start(Math.max(ac.currentTime, when), offset); nodes.push(s);
  };
  const glitch = () => {   // the tape chews: sound drops out, then a burst of noise
    const t = ac.currentTime;
    bus.gain.setValueAtTime(1.15, t); bus.gain.linearRampToValueAtTime(0.0001, t + 0.02); bus.gain.setValueAtTime(0.0001, t + 0.12); bus.gain.linearRampToValueAtTime(1.15, t + 0.16);
    hit(t + 0.13, "chat", 0.5);
  };
  return { ac, crowd, drone, hit, voice, glitch, stop() { nodes.forEach((n) => { try { n.stop(); } catch { /* not started */ } }); bus.disconnect(); } };
}

export function vhs(el, id) {
  const cfg = VHS[id];
  const T0 = sec(cfg.start), T1 = sec(cfg.end), len = T1 - T0;
  const scenes = cfg.scenes.map((s) => ({ ...s, t: sec(s.from) }));
  const events = cfg.events.map((e) => ({ ...e, t: sec(e.t) })).sort((a, b) => a.t - b.t);
  const chapters = scenes.filter((s) => s.chapter);
  el.innerHTML = `
  <div class="cam vhs">
    <div class="cam-screen"><canvas width="640" height="480"></canvas></div>
    <div class="cam-ctl">
      <button class="btn btn--ctl" data-c="play">▶</button>
      <button class="btn btn--ctl" data-c="-10">«10</button><button class="btn btn--ctl" data-c="-1">◂</button>
      <button class="btn btn--ctl" data-c="1">▸</button><button class="btn btn--ctl" data-c="10">10»</button>
      <button class="btn btn--ctl" data-c="speed">×1</button>
      <span class="cam-time">${cfg.start}</span>
    </div>
    <input class="cam-slider" type="range" min="0" max="${len}" step="1" value="0" aria-label="Thời gian trên băng">
    ${chapters.length ? `<div class="vhs-chap">${chapters.map((c) => `<button class="btn btn--small btn--ghost" data-j="${c.t - T0}">${c.chapter} · ${c.from.slice(0, 5)}</button>`).join("")}</div>` : ""}
    <p class="small muted">Tiếng nói và tiếng trống chỉ phát ở tốc độ ×1 (ở ×4 chỉ còn trống). Phụ đề vàng ghi lại mọi tiếng động.</p>
  </div>`;
  const cv = el.querySelector("canvas"), g = cv.getContext("2d"), slider = el.querySelector(".cam-slider");
  const imgs = {};
  let t = 0, playing = false, speed = 1, loop = 0, eng = null, acStart = 0, tStart = 0, lastSched = 0, lastDraw = -1, nextGlitch = 0;
  [...new Set(scenes.map((s) => s.img))].forEach((n) => loadImg(n).then((i) => { imgs[n] = i; draw(); }));
  events.forEach((e) => e.v && loadClip(e.v));
  const fbCache = {};
  const fbImg = (kind) => {
    if (fbCache[kind] !== undefined) return fbCache[kind];
    fbCache[kind] = null;
    const im = new Image(); im.onload = () => { fbCache[kind] = im; draw(); };
    im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(stageArt(kind).replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '));
    return null;
  };
  const sceneAt = (abs) => { let s = scenes[0]; for (const x of scenes) if (x.t <= abs) s = x; return s; };
  const wrap = (s, n) => { const o = []; let c = ""; for (const w of s.split(" ")) { if ((c + " " + w).trim().length > n) { o.push(c.trim()); c = w; } else c += " " + w; } if (c.trim()) o.push(c.trim()); return o; };

  function draw() {
    const abs = T0 + Math.floor(t), s = sceneAt(abs);
    const rnd = (k) => { const x = Math.sin((abs * 97 + k + (playing ? performance.now() / 90 | 0 : 0)) * 12.9898) * 43758.5453; return x - Math.floor(x); };
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = "#000"; g.fillRect(0, 0, 640, 480);
    const im = imgs[s.img] || fbImg(s.fb);
    const shake = s.panic ? 7 : 3, jx = (rnd(1) - 0.5) * shake, jy = s.panic ? (rnd(4) - 0.5) * 5 : 0;
    if (im) {
      const r = Math.max(640 / im.width, 480 / im.height), w = im.width * r, h = im.height * r;
      g.filter = `saturate(1.25) contrast(1.15) brightness(${s.panic ? 0.8 + rnd(5) * 0.25 : 0.9})`;
      g.drawImage(im, (640 - w) / 2 + jx, (480 - h) / 2 + jy, w, h);
      g.globalAlpha = 0.25; g.globalCompositeOperation = "screen";
      g.filter = "hue-rotate(-30deg) blur(1px)"; g.drawImage(im, (640 - w) / 2 + jx + 4, (480 - h) / 2 + jy, w, h);
      g.globalAlpha = 1; g.globalCompositeOperation = "source-over"; g.filter = "none";
    }
    const wg = cfg.wingGhost;
    if (wg && level() >= wg.min && Math.abs(abs - sec(wg.t)) < 1) {
      g.globalAlpha = 0.6; g.fillStyle = "#7a0c08"; g.beginPath(); g.ellipse(585, 210, 20, 26, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#123a1c"; g.fillRect(565, 236, 40, 120); g.globalAlpha = 1;
    }
    g.fillStyle = "rgba(0,0,0,.18)"; for (let y = 0; y < 480; y += 3) g.fillRect(0, y, 640, 1);
    const band = Math.floor(rnd(2) * 480);
    g.fillStyle = "rgba(255,255,255,.08)"; g.fillRect(0, band, 640, 6 + rnd(3) * (s.panic ? 40 : 10));
    for (let i = 0; i < (s.panic ? 160 : 60); i++) { g.fillStyle = `rgba(255,255,255,${rnd(10 + i) * 0.2})`; g.fillRect(rnd(100 + i) * 640, rnd(200 + i) * 480, 2 + rnd(300 + i) * 30, 1); }
    g.font = "bold 22px 'IBM Plex Mono', monospace"; g.fillStyle = "#fff"; g.shadowColor = "#000"; g.shadowBlur = 3;
    g.fillText(playing ? "PLAY ▶" : "PAUSE ❚❚", 24, 40);
    g.fillText("SEP.27 1993", 400, 420); g.fillText(hms(abs), 430, 452);
    const cap = events.filter((e) => abs >= e.t && abs < e.t + (e.dur || 7)).pop();
    if (cap) {
      g.font = "16px 'IBM Plex Mono', monospace"; g.shadowBlur = 0;
      const lines = wrap(`[${cap.text}]`, 56);
      lines.forEach((l, i) => { const w = g.measureText(l).width, y = 380 - (lines.length - 1) * 22 + i * 22; g.fillStyle = "rgba(0,0,0,.72)"; g.fillRect(320 - w / 2 - 6, y - 16, w + 12, 21); g.fillStyle = "#ffe36a"; g.fillText(l, 320 - w / 2, y); });
    }
    g.shadowBlur = 0;
    el.querySelector(".cam-time").textContent = hms(abs);
    slider.value = Math.floor(t);
  }

  const acTime = (vt) => acStart + (vt - tStart) / speed;
  function schedule(from, to) {
    if (!eng) return;
    // battle drum pattern on a 0.3 s grid while the scene drums
    const grid = 0.3, PAT = ["boom", "", "boom", "rim", "boom", "boom", "", "rim", "boom", "", "boom", "rim", "boom", "rim", "boom", "boom"];
    if (speed <= 4) for (let k = Math.ceil(from / grid); k * grid <= to; k++) {
      const vt = k * grid, s = sceneAt(T0 + vt); if (!s.drum) continue;
      const kind = PAT[k % PAT.length]; if (!kind) continue;
      if (speed === 4 && k % 4) continue;
      eng.hit(acTime(vt), kind, s.drum === "soft" ? 0.35 : 0.85);
    }
    for (const e of events) {
      const vt = e.t - T0; if (vt <= from || vt > to) continue;
      const when = acTime(vt);
      if (e.sfx === "tom") eng.hit(when, "tom");
      if (e.sfx === "tom2") { eng.hit(when, "tom"); eng.hit(when + 0.45, "tom"); }
      if (e.sfx === "chat") eng.hit(when, "chat");
      if (speed > 1) continue;
      if (e.sfx === "bell") for (let i = 0; i < 21; i++) setTimeout(() => sfx.gong(), (when - eng.ac.currentTime + i * 1.1 + Math.floor(i / 7) * 1.5) * 1000);
      if (e.sfx === "ken") setTimeout(() => sfx.ken(0, 4), (when - eng.ac.currentTime) * 1000);
      if (e.v) { eng.voice(e.v, when); if (/vỗ tay|Hay/.test(e.text)) eng.hit(when + 1.2, "clap", 0.7); }
    }
  }
  function beds(vt) {
    const s = sceneAt(T0 + vt), now = eng.ac.currentTime, abs = T0 + vt;
    eng.crowd.gain.setTargetAtTime(speed > 4 ? 0 : (s.crowd ?? 0.2) * 0.5, now, 0.4);
    const dread = abs < sec("22:20:00") ? 0 : Math.min(1, (abs - sec("22:20:00")) / 900);
    eng.drone.gain.setTargetAtTime(speed > 4 ? 0 : 0.05 + dread * 0.3 + (s.fb === "ghost" ? 0.4 : 0), now, 0.8);
  }
  function tick() {
    const now = tStart + (eng.ac.currentTime - acStart) * speed;
    schedule(lastSched, now + 0.3); lastSched = now + 0.3;
    t = Math.min(len, now);
    beds(t);
    const s = sceneAt(T0 + t);
    if (s.panic && speed === 1) {
      if (Math.floor(t * 1.25) !== Math.floor((t - 0.05) * 1.25)) eng.hit(eng.ac.currentTime, "heart", 0.9);   // heartbeat
      if (eng.ac.currentTime > nextGlitch) { eng.glitch(); nextGlitch = eng.ac.currentTime + 3 + Math.random() * 6; }
    }
    scareCheck(lastDraw, t);
    if (Math.floor(t * 4) !== lastDraw) { lastDraw = Math.floor(t * 4); draw(); }
    if (t >= len) setPlay(false);
  }
  function scareCheck(prev, cur) {
    const sc = cfg.scare; if (!sc) return;
    const at = sec(sc.t) - T0;
    if (prev / 4 < at && cur >= at) jumpScare(sc.key, sc.pic, { fallback: ghostFace(), hold: 900 });
  }
  function start() {
    eng = engine(); if (!eng) return;
    acStart = eng.ac.currentTime + 0.05; tStart = t; lastSched = t;
    // a line that was already being spoken at this point continues from the middle (seeking never loses the sound)
    if (speed === 1) for (const e of events) if (e.v && e.t - T0 <= t && t < e.t - T0 + 15) loadClip(e.v).then((b) => { if (eng && b && t - (e.t - T0) < b.duration) eng.voice(e.v, acStart, t - (e.t - T0)); });
    nextGlitch = 0;
    loop = setInterval(tick, 50);
  }
  function stop() { clearInterval(loop); if (eng) eng.stop(); eng = null; }
  function setPlay(on) {
    stop(); playing = on && t < len;
    el.querySelector('[data-c="play"]').textContent = playing ? "❚❚" : "▶";
    if (playing) { ctx(); start(); }
    draw();
  }
  function seek(nt) {
    const was = playing; const prev = t;
    stop(); t = Math.max(0, Math.min(len, nt));
    scareCheck(prev * 4, t);
    if (was) start(); draw();
  }
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-c],[data-j]");
    if (!b) return;
    ctx(); sfx.click();
    if (b.dataset.j) return seek(Number(b.dataset.j));
    const k = b.dataset.c;
    if (k === "play") setPlay(!playing);
    else if (k === "speed") { speed = { 1: 4, 4: 16, 16: 60, 60: 1 }[speed]; b.textContent = `×${speed}`; if (playing) { stop(); start(); } }
    else seek(Math.floor(t) + Number(k));
  });
  slider.addEventListener("input", () => seek(Number(slider.value)));
  draw();
  return () => stop();
}

// ---------------------------------------------------------------- the buồng trò, clickable spots
const SPOTS = [
  { id: "ban_to", x: 43, y: 38, label: "Bàn Tổ", text: "Bàn Tổ kê cao ngang ngực. Ba chung trà sứ men lam đặt hàng ngang. Hai chung hai bên đã cạn. <b>Chung ở giữa</b> còn lớp cặn bột màu xám dính đáy, đã niêm phong gửi giám định. Bát nhang, đĩa trầu cau, hai cây đèn dầu đã tắt." },
  { id: "heo", x: 34, y: 60, label: "Đầu heo quay", text: "Đầu heo quay cúng Tổ từ chiều 27. Mới một đêm đã bốc mùi tanh lợm. Hai hốc mắt lúc nhúc dòi trắng, da quay phồng rộp, nhớt chảy thành vệt xuống mâm. Cán bộ ghi: “dòi nhiều bất thường, như để cả tuần”." },
  { id: "ban_ve", x: 21, y: 86, label: "Bàn vẽ mặt", text: "Mỗi kép một dĩa màu dán tên. <b>Kiệt</b>: đỏ, đen, đã dùng. <b>Thông</b>: đen, trắng, đã dùng. <b>Lợi</b>: trắng mốc, đã dùng. <b>Tư Hòa</b>: trắng, hồng (vai lính cờ), đã dùng; <b>màu đen cũng đã dùng gần hết</b>. Theo trình tự đêm diễn, tối đó Hòa không có vai mặt đen nào." },
  { id: "ruong", x: 67, y: 66, label: "Rương Tổ", text: "Rương gỗ lim, khóa đồng gỉ sét. Theo ông Sáu Bé, trong rương là bộ áo Quan Công năm 1963, không ai mở từ ba chục năm nay. Chìa khóa ông đeo ở cổ. Ổ khóa còn nguyên, không có dấu cạy." },
  { id: "chieu", x: 89, y: 90, label: "Chiếc chiếu trong góc", text: "Chiếu và mền của bé Thủy. Từ chỗ nằm nhìn thẳng ra bàn Tổ và cánh cửa sau. Mền ướt đẫm mồ hôi." },
  { id: "cua_sau", x: 86, y: 42, label: "Cửa sau", text: "Cửa liếp mở ra cầu ao. Bản lề kêu kẽo kẹt. Dưới chân cầu ao: <b>một chiếc khăn vải dính màu đen và vệt phấn trắng</b>, chưa ai nhận là của mình. Trên ván cầu có dấu bàn chân trần, bùn đã khô." },
  { id: "dao", x: 58, y: 20, label: "Cây đao", text: "Thanh Long đao của Quan Công, dựng vào vách. Cán gỗ có vết cào bằng móng tay, bết son đỏ." },
  { id: "guong", x: 10, y: 36, label: "Tấm gương", text: "Tấm gương soi vẽ mặt, viền gỗ, tráng thủy đã loang lổ. Trong gương chỉ thấy phản chiếu của căn buồng." },
];

export function room(el) {
  el.innerHTML = `
  <div class="room">
    <div class="room-pic"><img src="${base.img}buong_tro.jpg" alt="" data-fallback>
      ${SPOTS.map((s) => `<button class="spot" data-s="${s.id}" style="left:${s.x}%;top:${s.y}%" title="${s.label}"><span>${s.label}</span></button>`).join("")}</div>
    <div class="room-note"><b>Bấm vào một chỗ trong ảnh.</b></div>
  </div>`;
  const img = el.querySelector("img");
  img.addEventListener("error", () => { img.replaceWith(Object.assign(document.createElement("div"), { className: "room-fb", innerHTML: stageArt("empty") })); });
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-s]"); if (!b) return;
    ctx(); sfx.paper();
    const s = SPOTS.find((x) => x.id === b.dataset.s);
    el.querySelectorAll(".spot").forEach((x) => x.classList.toggle("on", x === b));
    el.querySelector(".room-note").innerHTML = `<b>${s.label}.</b> ${s.text}`;
    if (s.id === "guong" && level() >= 1) {
      if (jumpScare("guong", "guong", { fallback: ghostFace(), sound: "scream", hold: 650 }))
        setTimeout(() => { el.querySelector(".room-note").innerHTML += `<br><i class="ghost-ink">Trong gương, sau lưng bạn, có một khuôn mặt đỏ.</i>`; }, 1200);
    }
  });
}

// ---------------------------------------------------------------- Phát's film roll
const FRAMES = [
  [1, "20:52", "Cổng đình, người xem kéo tới", "vhs_dinh", "crowd"],
  [2, "20:58", "Ban tế ngồi nhà trước", "vhs_dinh", "crowd"],
  [3, "21:05", "Ông Hương cả bên trống chầu", "vhs_dinh", "crowd"],
  [4, "21:12", "Khán giả hàng đầu", "vhs_dinh", "crowd"],
  [5, "21:31", "Mở màn lớp 1", "vhs_lop1", "stage"],
  [6, "21:34", "Quan Công và Tào Tháo", "vhs_lop1", "stage"],
  [7, "21:37", "Hai phu nhân", "vhs_lop1", "stage"],
  [8, "21:39", "Quan Công treo ấn", "vhs_lop1", "stage"],
  [9, "21:41", "Châu Thương múa đao", "anh_09", "ct1"],
  [10, "21:50", "Nghỉ giữa lớp, sân khấu trống", "vhs_nghi", "empty"],
  [11, "21:58", "Mở màn lớp 2", "vhs_lop2", "stage"],
  [12, "22:02", "Khổng Tú chặn ải", "vhs_lop2", "stage"],
  [13, "22:05", "Quan Công tuốt đao", "vhs_lop2", "stage"],
  [14, "22:07", "Châu Thương múa đao", "anh_14", "ct0"],
  [15, "22:12", "Quan Công chém Khổng Tú", "vhs_lop2", "stage"],
  [16, "22:22", "Mở màn lớp 3", "vhs_lop3", "stage"],
  [17, "22:31", "Châu Thương múa đao", "anh_17", "ct1"],
  [18, "22:41", "Quan Công gục", "vhs_guc", "collapse"],
  [19, "22:44", "(bấm nhầm) cánh gà phải", "anh_19", "dark"],
  [20, "—", "Phim hỏng, lộ sáng", null, "burnt"], [21, "—", "Phim hỏng, lộ sáng", null, "burnt"], [22, "—", "Phim hỏng, lộ sáng", null, "burnt"],
  [23, "—", "Phim hỏng, lộ sáng", null, "burnt"], [24, "—", "Phim hỏng, lộ sáng", null, "burnt"],
];

function frameArt(kind, n) {
  if (kind === "ct1") return chauThuong(true, n);
  if (kind === "ct0") return chauThuong(false, n);
  if (kind === "burnt") return `<div class="burnt"></div>`;
  if (kind === "dark") return `<div class="burnt dark">${level() >= 3 ? `<div class="faint-face"></div>` : ""}</div>`;
  return stageArt(kind);
}

export function roll(el) {
  el.innerHTML = `
  <div class="roll">
    <div class="roll-grid">${FRAMES.map(([n, time, cap, img, kind]) => `
      <button class="frame" data-f="${n}"><span class="frame-pic">${img ? `<img src="${base.img}${img}.jpg" alt="" data-fallback onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'frame-fb',innerHTML:decodeURIComponent(this.dataset.fb)}))" data-fb="${encodeURIComponent(frameArt(kind, n))}">` : frameArt(kind, n)}</span>
      <span class="frame-n">${n}</span><span class="frame-t">${time}</span></button>`).join("")}</div>
    <div class="roll-big" hidden></div>
  </div>`;
  el.addEventListener("click", (e) => {
    const f = e.target.closest("[data-f]");
    const big = el.querySelector(".roll-big");
    if (e.target.closest(".roll-big")) { big.hidden = true; return; }
    if (!f) return;
    ctx(); sfx.click();
    const [n, time, cap, img, kind] = FRAMES[Number(f.dataset.f) - 1];
    big.innerHTML = `<div class="roll-big-pic">${img ? `<img src="${base.img}${img}.jpg" alt="" onerror="this.outerHTML=decodeURIComponent('${encodeURIComponent(frameArt(kind, n))}')">` : frameArt(kind, n)}</div>
      <p><b>Kiểu ${n}</b> · ${time} · ${cap}</p><p class="small muted">Bấm vào ảnh để đóng.</p>`;
    big.hidden = false;
    if (n === 19 && level() >= 3) jumpScare("frame19", "anh_19_ma", { fallback: ghostFace(), hold: 600 });
  });
}
