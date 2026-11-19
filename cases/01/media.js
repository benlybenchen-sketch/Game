// Case 01 media: the dam camera, the darkroom photo, the lake map. Registered through index.js (MEDIA).
import { state, save } from "../../js/store.js";
import { ctx, sfx } from "../../js/audio.js";
import { level } from "../../js/dread.js";
import { rng, loadImg } from "../../js/media.js";

// =====================================================================
// Security camera (CAM 03), 19:40:00 – 20:10:00, one frame per second
// =====================================================================
const CAM = { start: 19 * 3600 + 40 * 60, len: 1800, boat: [1330, 1410], ghost: [433, 436] };
const clock = (t) => { const s = CAM.start + t; return `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; };

export function cctv(el) {
  el.innerHTML = `
  <div class="cam">
    <div class="cam-screen"><canvas width="640" height="360"></canvas><div class="cam-rec">● REC</div></div>
    <div class="cam-ctl">
      <button class="btn btn--ctl" data-c="play">▶</button>
      <button class="btn btn--ctl" data-c="-10">«10</button><button class="btn btn--ctl" data-c="-1">◂</button>
      <button class="btn btn--ctl" data-c="1">▸</button><button class="btn btn--ctl" data-c="10">10»</button>
      <button class="btn btn--ctl" data-c="speed">×8</button>
      <button class="btn btn--ctl" data-c="boost">☀ Tăng sáng</button>
      <span class="cam-time">19:40:00</span>
    </div>
    <input class="cam-slider" type="range" min="0" max="${CAM.len - 1}" value="0" aria-label="Thời gian">
  </div>`;
  const cv = el.querySelector("canvas"), g = cv.getContext("2d"), slider = el.querySelector(".cam-slider");
  let t = 0, playing = false, timer = 0, speed = 8, boost = false, zoom = null, bg = null;
  loadImg("cctv").then((i) => { bg = i; draw(); });

  function scene(rand) {
    if (bg) {
      g.filter = "grayscale(1) brightness(0.33) contrast(1.1)";
      g.drawImage(bg, 0, 0, 640, 360);
      g.filter = "none";
      return;
    }
    g.fillStyle = "rgb(7,8,7)"; g.fillRect(0, 0, 640, 360);
    // far bank trees
    g.fillStyle = "rgb(11,12,11)";
    g.beginPath(); g.moveTo(0, 120);
    for (let x = 0; x <= 640; x += 16) g.lineTo(x, 100 + Math.sin(x * 0.05) * 8 + Math.sin(x * 0.17) * 5);
    g.lineTo(640, 140); g.lineTo(0, 140); g.fill();
    // water
    g.fillStyle = "rgb(15,17,16)"; g.fillRect(0, 140, 640, 220);
    g.strokeStyle = "rgba(60,64,60,.35)"; g.lineWidth = 1;
    for (let i = 0; i < 40; i++) { const y = 150 + rand() * 200, x = rand() * 640; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 20 + rand() * 40, y); g.stroke(); }
    // concrete wall + railing on the left
    g.fillStyle = "rgb(30,31,30)";
    g.beginPath(); g.moveTo(0, 60); g.lineTo(150, 150); g.lineTo(170, 360); g.lineTo(0, 360); g.fill();
    g.strokeStyle = "rgb(44,45,44)"; g.lineWidth = 3;
    g.beginPath(); g.moveTo(0, 40); g.lineTo(158, 132); g.stroke();
    for (let i = 0; i < 9; i++) { g.beginPath(); g.moveTo(i * 18, 40 + i * 10.5); g.lineTo(i * 18 + 3, 70 + i * 10); g.stroke(); }
    // floodlight glow
    const rg = g.createRadialGradient(110, 70, 2, 110, 70, 160);
    rg.addColorStop(0, "rgba(120,120,110,.35)"); rg.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 400, 300);
  }

  function boat(tt) {
    const p = (tt - CAM.boat[0]) / (CAM.boat[1] - CAM.boat[0]);
    const x = bg ? 660 - p * 560 : 600 - p * 760, y = (bg ? 268 : 228) + Math.sin(tt * 1.3) * 2;
    g.save();
    if (bg) { g.beginPath(); g.rect(262, 0, 400, 360); g.clip(); }   // the wall on the left hides the boat
    g.translate(x, y);
    // wake
    g.strokeStyle = "rgba(70,74,70,.6)"; g.lineWidth = 2;
    for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(150 + i * 25, 18 + i * 3); g.lineTo(190 + i * 40, 14 + i * 8); g.stroke(); }
    // hull
    g.fillStyle = "rgb(27,28,27)";
    g.beginPath(); g.moveTo(-10, 0); g.lineTo(150, 0); g.lineTo(140, 22); g.lineTo(10, 22); g.closePath(); g.fill();
    // engine box + curved exhaust (the giveaway)
    g.fillStyle = "rgb(23,24,23)"; g.fillRect(100, -18, 34, 18);
    g.strokeStyle = "rgb(34,35,34)"; g.lineWidth = 5; g.lineCap = "round";
    g.beginPath(); g.moveTo(122, -18); g.lineTo(122, -52); g.quadraticCurveTo(124, -66, 140, -62); g.quadraticCurveTo(152, -58, 148, -46); g.stroke();
    // a figure at the back (helmet) and a seated passenger
    g.fillStyle = "rgb(22,23,22)";
    g.beginPath(); g.arc(112, -26, 7, Math.PI, 0); g.fill(); g.fillRect(106, -26, 12, 10);
    g.beginPath(); g.arc(70, -14, 6, 0, Math.PI * 2); g.fill(); g.fillRect(64, -10, 13, 12);
    // hull number, one digit hidden by a coil of rope
    g.fillStyle = "rgb(41,42,41)"; g.font = "bold 13px 'IBM Plex Mono', monospace";
    g.fillText("NK-07", 12, 15); g.fillText("2", 66, 15);
    g.fillStyle = "rgb(20,20,20)"; g.fillRect(55, 3, 10, 15);
    g.strokeStyle = "rgb(30,30,30)"; g.lineWidth = 1.5; for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(60, 10, 3 + i, 0, Math.PI * 2); g.stroke(); }
    g.restore();
  }

  function ghost(tt, big) {
    g.save();
    const x = big ? 360 : bg ? 452 : 300, y = big ? 250 : bg ? 238 : 214, s = big ? 3.2 : 1;
    g.translate(x, y); g.scale(s, s);
    g.fillStyle = "rgb(36,37,36)";
    g.beginPath(); g.arc(0, -16, 4, 0, Math.PI * 2); g.fill();
    g.fillRect(-4, -12, 8, 14);
    g.fillStyle = "rgba(60,62,60,.35)"; g.fillRect(-6, 2, 12, 1);
    g.restore();
    void tt;
  }

  function draw() {
    const rand = rng(t * 7919 + 13);
    g.setTransform(1, 0, 0, 1, 0, 0);
    if (zoom) { g.translate(zoom.x, zoom.y); g.scale(2.5, 2.5); g.translate(-zoom.x, -zoom.y); }
    scene(rand);
    if (t >= CAM.boat[0] && t <= CAM.boat[1]) boat(t);
    if (t >= CAM.ghost[0] && t <= CAM.ghost[1]) ghost(t, false);
    if (level() >= 2 && t % 211 === 97) ghost(t, true);
    // rain
    g.strokeStyle = "rgba(90,92,90,.28)"; g.lineWidth = 1;
    for (let i = 0; i < 140; i++) { const x = rand() * 700, y = rand() * 360; g.beginPath(); g.moveTo(x, y); g.lineTo(x - 6, y + 22); g.stroke(); }
    g.setTransform(1, 0, 0, 1, 0, 0);
    // grain
    const id = g.getImageData(0, 0, 640, 360), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const n = (rand() - 0.5) * 14; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    // tracking line
    const ty = Math.floor(rand() * 360);
    for (let x = 0; x < 640; x++) { const i = (ty * 640 + x) * 4; d[i] += 25; d[i + 1] += 25; d[i + 2] += 25; }
    g.putImageData(id, 0, 0);
    // overlay text (not affected by zoom)
    g.fillStyle = "rgba(230,230,230,.85)"; g.font = "14px 'IBM Plex Mono', monospace";
    g.fillText("CAM 03  CUA NHAN NUOC", 14, 22);
    g.fillText(`12-08-2003  ${clock(t)}`, 430, 345);
    el.querySelector(".cam-time").textContent = clock(t);
    slider.value = t;
    cv.style.filter = boost ? "brightness(2.8) contrast(1.6)" : "none";
  }

  const go = (nt) => { t = Math.max(0, Math.min(CAM.len - 1, nt)); draw(); };
  function setPlay(on) {
    playing = on; clearInterval(timer);
    el.querySelector('[data-c="play"]').textContent = on ? "❚❚" : "▶";
    if (on) timer = setInterval(() => { if (t >= CAM.len - 1) setPlay(false); else go(t + 1); }, 1000 / speed);
  }
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-c]");
    if (b) {
      ctx(); sfx.click();
      const k = b.dataset.c;
      if (k === "play") setPlay(!playing);
      else if (k === "speed") { speed = speed === 8 ? 30 : speed === 30 ? 2 : 8; b.textContent = `×${speed}`; if (playing) setPlay(true); }
      else if (k === "boost") { boost = !boost; b.classList.toggle("on", boost); draw(); }
      else go(t + Number(k));
      return;
    }
    if (e.target === cv) {
      const r = cv.getBoundingClientRect();
      zoom = zoom ? null : { x: ((e.clientX - r.left) / r.width) * 640, y: ((e.clientY - r.top) / r.height) * 360 };
      draw();
    }
  });
  slider.addEventListener("input", () => go(Number(slider.value)));
  draw();
  return () => clearInterval(timer);
}

// =====================================================================
// Darkroom: the ceremony photo, far too dark until the player develops it
// =====================================================================
export function darkroom(el) {
  el.innerHTML = `
  <div class="dark">
    <div class="dark-photo"><canvas width="900" height="600"></canvas></div>
    <div class="dark-ctl">
      <label>Phơi sáng <input type="range" data-d="exp" min="0.6" max="5" step="0.05" value="1"></label>
      <label>Tương phản <input type="range" data-d="con" min="0.6" max="3" step="0.05" value="1"></label>
      <label class="chk"><input type="checkbox" data-d="neg"> Âm bản</label>
      <span class="small muted">Bấm vào ảnh để phóng to chỗ đó.</span>
    </div>
  </div>`;
  const cv = el.querySelector("canvas"), g = cv.getContext("2d");
  let bg = null, zoom = null;
  const ctl = { exp: 1, con: 1, neg: false };

  function procedural(rand) {
    g.fillStyle = "rgb(10,9,8)"; g.fillRect(0, 0, 900, 600);
    // water band
    g.fillStyle = "rgb(13,13,14)"; g.fillRect(0, 230, 900, 260);
    // foreground landing + people
    g.fillStyle = "rgb(18,15,12)"; g.fillRect(0, 480, 900, 120);
    for (let i = 0; i < 26; i++) {
      const x = 40 + i * 33 + rand() * 10, h = 70 + rand() * 30;
      g.fillStyle = "rgb(8,7,6)"; g.beginPath(); g.arc(x, 600 - h - 12, 11, 0, Math.PI * 2); g.fill(); g.fillRect(x - 12, 600 - h, 24, h);
    }
    // lanterns on the water: the only bright things
    for (let i = 0; i < 34; i++) {
      const x = 80 + rand() * 760, y = 330 + rand() * 140;
      const rg = g.createRadialGradient(x, y, 1, x, y, 16);
      rg.addColorStop(0, "rgba(255,190,90,.95)"); rg.addColorStop(1, "rgba(255,120,40,0)");
      g.fillStyle = rg; g.fillRect(x - 16, y - 16, 32, 32);
    }
  }

  // Plates on four of the real posts in img/le_cung.jpg (canvas coords). The 0712 post has only a slack rope under it.
  function photoPlates() {
    [["0318", 405, true], ["0215", 448, true], ["0792", 507, true], ["0712", 649, false]].forEach(([n, x, boat]) => {
      g.fillStyle = "rgb(16,15,13)"; g.fillRect(x - 13, 114, 26, 10);
      g.fillStyle = "rgb(30,29,27)"; g.font = "bold 8px 'IBM Plex Mono', monospace"; g.fillText(n, x - 11, 122);
      if (!boat) { g.strokeStyle = "rgb(24,22,20)"; g.lineWidth = 1; g.beginPath(); g.moveTo(x + 2, 124); g.quadraticCurveTo(x + 14, 150, x + 30, 146); g.stroke(); }
    });
  }

  function overlay(rand) {
    if (bg) { photoPlates(); face(230, 345); stampDate(); return; }
    // far side of the cove: the bến Mới jetty with numbered mooring posts
    g.fillStyle = "rgba(9,9,9,.85)"; g.fillRect(380, 168, 470, 52);
    g.fillStyle = "rgb(17,15,13)"; g.fillRect(380, 200, 470, 6);           // jetty planks
    const posts = [["0215", true], ["0318", true], ["0712", false], ["0792", true]];
    posts.forEach(([n, boat], i) => {
      const x = 410 + i * 115;
      g.fillStyle = "rgb(19,17,15)"; g.fillRect(x, 170, 6, 48);           // post
      g.fillStyle = "rgb(24,23,21)"; g.fillRect(x - 15, 172, 36, 13);      // plate
      g.fillStyle = "rgb(34,33,31)"; g.font = "bold 11px 'IBM Plex Mono', monospace"; g.fillText(n, x - 13, 182);
      if (boat) {
        g.fillStyle = "rgb(16,15,14)";
        g.beginPath(); g.moveTo(x + 12, 206); g.lineTo(x + 92, 206); g.lineTo(x + 84, 218); g.lineTo(x + 18, 218); g.fill();
        g.fillRect(x + 60, 196, 14, 10);
      } else {
        g.strokeStyle = "rgb(22,21,19)"; g.lineWidth = 1;                 // a slack rope hanging into empty water
        g.beginPath(); g.moveTo(x + 6, 190); g.quadraticCurveTo(x + 20, 214, x + 34, 212); g.stroke();
      }
    });
    face(470, 400); stampDate();
  }

  // a pale face just under the water among the lanterns, only for those who look hard (negative + high exposure)
  function face(fx, fy) {
    const fg = g.createRadialGradient(fx, fy, 2, fx, fy, 26);
    fg.addColorStop(0, "rgba(26,27,28,.9)"); fg.addColorStop(1, "rgba(14,14,15,0)");
    g.fillStyle = fg; g.beginPath(); g.ellipse(fx, fy, 20, 26, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = "rgb(9,9,10)"; g.beginPath(); g.ellipse(fx - 7, fy - 4, 4, 3, 0, 0, Math.PI * 2); g.ellipse(fx + 7, fy - 4, 4, 3, 0, 0, Math.PI * 2); g.fill();
  }
  function stampDate() {  // date imprint of the film camera
    g.fillStyle = "rgba(255,150,40,.9)"; g.font = "bold 22px 'IBM Plex Mono', monospace";
    g.fillText("'03 8 12", 760, 575);
  }

  function draw() {
    const rand = rng(4242);
    g.setTransform(1, 0, 0, 1, 0, 0);
    if (zoom) { g.translate(zoom.x, zoom.y); g.scale(3, 3); g.translate(-zoom.x, -zoom.y); }
    if (bg) { g.filter = "brightness(0.3)"; g.drawImage(bg, 0, 0, 900, 600); g.filter = "none"; } else procedural(rand);
    overlay(rand);
    g.setTransform(1, 0, 0, 1, 0, 0);
    cv.style.filter = `brightness(${ctl.exp}) contrast(${ctl.con})${ctl.neg ? " invert(1)" : ""}`;
  }
  loadImg("le_cung").then((i) => { bg = i; draw(); });
  el.addEventListener("input", (e) => {
    const k = e.target.dataset.d; if (!k) return;
    ctl[k] = e.target.type === "checkbox" ? e.target.checked : Number(e.target.value);
    draw();
    if (k === "neg" && ctl.neg && level() >= 1 && !state.scared.neg) { state.scared.neg = true; save(); setTimeout(() => sfx.whisper(1.6), 600); }
  });
  cv.addEventListener("click", (e) => {
    const r = cv.getBoundingClientRect();
    zoom = zoom ? null : { x: ((e.clientX - r.left) / r.width) * 900, y: ((e.clientY - r.top) / r.height) * 600 };
    draw();
  });
  draw();
}

// =====================================================================
// Lake map with a water-level slider
// =====================================================================
export const MAP_POINTS = {
  dap: { x: 46, y: 250, label: "Đập · nhà máy" },
  cam: { x: 86, y: 118, label: "Cửa nhận nước (camera 3)" },
  mieu: { x: 176, y: 196, label: "Miếu Gò Miếu" },
  tram: { x: 159, y: 207, label: "Trạm bơm cũ" },
  benmoi: { x: 430, y: 360, label: "Bến Mới" },
  benvong: { x: 520, y: 385, label: "Bến Vọng" },
  truong: { x: 390, y: 455, label: "Điểm trường" },
  venho: { x: 610, y: 402, label: "Xóm Ven Hồ (nhà bà Gấm)" },
  dinh: { x: 545, y: 335, label: "Làng cũ (đình)" },
  kttv: { x: 650, y: 440, label: "Trạm khí tượng" },
  moqua: { x: 640, y: 80, label: "Núi Mỏ Quạ" },
};
const AXIS = [[55, 240], [150, 222], [260, 250], [380, 232], [500, 268], [620, 250], [720, 232]];
function distAxis(x, y) {
  let best = 1e9;
  for (let i = 0; i < AXIS.length - 1; i++) {
    const [ax, ay] = AXIS[i], [bx, by] = AXIS[i + 1];
    const dx = bx - ax, dy = by - ay, l = dx * dx + dy * dy;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / l));
    best = Math.min(best, Math.hypot(x - ax - t * dx, y - ay - t * dy));
  }
  return best;
}
export function height(x, y) {
  if (x < 50) return 150 + y * 0.02;                          // below the dam
  const d = distAxis(x, y);
  let h = 166 + 26 * (1 - Math.exp(-(d * d) / (2 * 90 * 90)));
  h += 23.5 * Math.exp(-((x - 176) ** 2 + (y - 196) ** 2) / (2 * 28 * 28));   // Gò Miếu
  h += 34 * Math.exp(-((x - 640) ** 2 + (y - 80) ** 2) / (2 * 75 * 75));     // Mỏ Quạ
  h += 6 * Math.exp(-((x - 300) ** 2 + (y - 470) ** 2) / (2 * 80 * 80));
  return h;
}

export function lakeMap(el) {
  const W = 720, H = 480, S = 2;                             // compute at half resolution
  el.innerHTML = `
  <div class="map">
    <div class="map-view"><canvas width="${W}" height="${H}"></canvas>
      ${Object.entries(MAP_POINTS).map(([k, p]) => `<span class="map-pt map-pt--${k} ${p.x > 560 ? "flip" : ""}" style="left:${(p.x / W) * 100}%;top:${(p.y / H) * 100}%">${p.x > 560 ? `${p.label}<i></i>` : `<i></i>${p.label}`}</span>`).join("")}
      <div class="map-scale" style="width:${(150 / W) * 100}%"><span></span>1 km</div><div class="map-n">B ↑</div>
    </div>
    <div class="map-ctl"><label>Mực nước: <b class="map-lv">180,00</b> m <input type="range" min="170" max="190" step="0.25" value="180"></label>
      <span class="small muted">Mặc định 180,00 m (mực nước ngày 12/8 và trưa 19/8). Đường đồng mức cách nhau 2 m.</span></div>
  </div>`;
  const cv = el.querySelector("canvas"), g = cv.getContext("2d");
  const w = W / S, h = H / S, hf = new Float32Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) hf[y * w + x] = height(x * S, y * S);
  const off = document.createElement("canvas"); off.width = w; off.height = h;
  const og = off.getContext("2d");

  function render(L) {
    const img = og.createImageData(w, h), d = img.data;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const i = y * w + x, v = hf[i], k = i * 4;
      const sx = x < w - 1 ? hf[i + 1] - v : 0, sy = y < h - 1 ? hf[i + w] - v : 0;
      const shade = Math.max(0.55, Math.min(1.25, 1 - sx * 0.25 + sy * 0.25));
      let r, gg, b;
      if (x * S < 50) { r = 32; gg = 34; b = 30; }
      else if (v < L) { const dep = Math.min(1, (L - v) / 14); r = 22 - dep * 12; gg = 52 - dep * 28; b = 62 - dep * 22; }
      else { const e = (v - 180) / 14; r = (58 + e * 40) * shade; gg = (62 + e * 22) * shade; b = (46 + e * 10) * shade; }
      const c1 = Math.floor(v / 2), cR = x < w - 1 ? Math.floor(hf[i + 1] / 2) : c1, cD = y < h - 1 ? Math.floor(hf[i + w] / 2) : c1;
      if ((c1 !== cR || c1 !== cD) && x * S >= 50) { r += 24; gg += 22; b += 18; }
      if (v >= L && Math.abs(v - L) < 0.35 && x * S >= 50) { r = 150; gg = 175; b = 170; }   // shoreline
      d[k] = r; d[k + 1] = gg; d[k + 2] = b; d[k + 3] = 255;
    }
    og.putImageData(img, 0, 0);
    g.imageSmoothingEnabled = true;
    g.drawImage(off, 0, 0, W, H);
    // dam wall
    g.fillStyle = "#9a958a"; g.fillRect(46, 120, 8, 250);
    // drowned village houses
    g.fillStyle = "rgba(20,16,12,.8)";
    [[520, 320], [535, 345], [560, 328], [575, 350], [548, 312], [590, 338]].forEach(([x, y]) => g.fillRect(x, y, 7, 6));
    el.querySelector(".map-lv").textContent = L.toFixed(2).replace(".", ",");
    for (const [k, p] of Object.entries(MAP_POINTS)) el.querySelector(`.map-pt--${k}`).classList.toggle("under", height(p.x, p.y) < L && k !== "dap" && k !== "moqua");
  }
  el.querySelector("input").addEventListener("input", (e) => render(Number(e.target.value)));
  render(180);
}
