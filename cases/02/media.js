// Case 02 media: the VHS recording of the performance (with trống chầu, the đình bell and captions),
// the police photo of the buồng trò with clickable spots, and Phát's 24-frame film roll.
import { state, save } from "../../js/store.js";
import { ctx, sfx, reverb } from "../../js/audio.js";
import { level, jumpScare } from "../../js/dread.js";
import { loadImg } from "../../js/media.js";
import { base } from "../../js/case.js";
import { stageArt, chauThuong, ghostFace } from "./art.js";

const sec = (hms) => { const [h, m, s] = hms.split(":").map(Number); return h * 3600 + m * 60 + (s || 0); };
const hms = (t) => [Math.floor(t / 3600), Math.floor((t % 3600) / 60), t % 60].map((x) => String(x).padStart(2, "0")).join(":");

// ---------------------------------------------------------------- VHS
const COMMON = [
  { t: "22:28:03", sfx: "tom", text: "Trống chầu: TOM" },
  { t: "22:28:05", text: "Quan Công khựng lại, ưỡn ngực ra sau, người cong dần như cánh cung" },
  { t: "22:28:30", sfx: "scream", text: "Quan Công rú lên, hai tay cào mặt. Khán giả tưởng diễn, vỗ tay rầm rầm" },
  { t: "22:29:10", sfx: "tom", text: "Trống chầu: TOM. Quan Công giật nảy, đầu đập xuống sàn gỗ" },
  { t: "22:29:40", text: "Có tiếng la: “Ảnh không diễn đâu! Ảnh bị gì rồi!”" },
  { t: "22:31:00", text: "Trống chầu ngừng hẳn. Cả gánh chạy ra sân khấu" },
  { t: "22:33:20", text: "Ai đó la: “Đừng đụng vô ảnh! Đụng vô là giật!”" },
  { t: "22:35:00", text: "Tiếng Quan Công cười. Cười không dứt, qua hàm răng cắn chặt" },
];
const VHS = {
  dem: {
    start: "21:20:00", end: "22:35:50",
    scenes: [
      { from: "21:20:00", img: "vhs_dinh", fb: "crowd" },
      { from: "21:22:00", img: "vhs_lop1", fb: "stage", chapter: "Lớp 1", drum: true },
      { from: "21:47:00", img: "vhs_nghi", fb: "empty", chapter: "Nghỉ" },
      { from: "21:55:00", img: "vhs_lop2", fb: "stage", chapter: "Lớp 2", drum: true },
      { from: "22:05:00", img: "vhs_nghi", fb: "empty", chapter: "Nghỉ" },
      { from: "22:12:00", img: "vhs_lop3", fb: "stage", chapter: "Lớp 3", drum: true },
      { from: "22:28:05", img: "vhs_guc", fb: "collapse" },
    ],
    events: [
      { t: "21:20:05", sfx: "ken", text: "Người xem ồn ào. Kèn thổi khai tràng" },
      { t: "21:22:00", text: "Lớp 1 · Treo ấn phong kim. Trống chiến nổi" },
      { t: "21:30:12", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:33:40", text: "Quan Công: “Tào Mạnh Đức ơi, ấn vàng treo lại, Quan mỗ trả ơn…”" },
      { t: "21:36:40", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:41:05", sfx: "tom2", text: "Trống chầu: TOM TOM. Châu Thương múa đao" },
      { t: "21:45:30", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:47:00", text: "Hết lớp 1. Nghỉ. Trống chiến đánh nhỏ" },
      { t: "21:52:00", sfx: "bell", dur: 26, text: "Chuông đình: ba hồi, mỗi hồi bảy tiếng" },
      { t: "21:55:00", text: "Lớp 2 · Ải Đông Lãnh. Trống chiến nổi lớn" },
      { t: "21:57:10", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "21:59:30", text: "Khổng Tú: “Quan Vân Trường, có văn bằng qua ải hay chưa?”" },
      { t: "22:01:00", sfx: "chat", text: "Châu Thương hát vấp, ngưng giữa câu. Trống chầu: CHÁT" },
      { t: "22:03:20", sfx: "chat", text: "Châu Thương quên lời. Trống chầu: CHÁT. Khán giả cười ồ" },
      { t: "22:04:40", sfx: "tom", text: "Quan Công chém Khổng Tú. Trống chầu: TOM" },
      { t: "22:05:00", text: "Hết lớp 2. Nghỉ" },
      { t: "22:12:00", text: "Lớp 3 · Ải Huỳnh Hà" },
      { t: "22:15:00", sfx: "tom", text: "Trống chầu: TOM" },
      { t: "22:21:30", sfx: "tom2", text: "Trống chầu: TOM TOM. Châu Thương hát hay" },
      { t: "22:25:10", text: "Quan Công: “Tần Kỳ, ngươi chớ cản đường…” Giọng Quan Công khàn lạ" },
      ...COMMON,
    ],
    // a figure stands in the right wing for one second during the break (only noticed once the dread is high)
    wingGhost: { t: "21:50:13", min: 2 },
  },
  cuoi: {
    start: "22:33:00", end: "22:38:10",
    scenes: [
      { from: "22:33:00", img: "vhs_guc", fb: "collapse" },
      { from: "22:36:00", img: "vhs_ma", fb: "ghost" },
      { from: "22:36:20", img: "vhs_guc", fb: "collapse" },
    ],
    events: [
      ...COMMON.filter((e) => sec(e.t) >= sec("22:33:00")),
      { t: "22:36:00", text: "Máy quay lia sang cánh gà phải" },
      { t: "22:36:03", sfx: "chat", text: "Một tiếng CHÁT. Không ai ngồi ở trống chầu" },
      { t: "22:37:30", text: "Tiếng Phát thì thào: “Ai đứng đó vậy… Quan Công… sao lại có hai ông Quan Công…”" },
    ],
    scare: { t: "22:36:04", key: "vhs_ma", pic: "vhs_ma_close" },
  },
};

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
    <input class="cam-slider" type="range" min="0" max="${len}" value="0" aria-label="Thời gian trên băng">
    ${chapters.length ? `<div class="vhs-chap">${chapters.map((c) => `<button class="btn btn--small btn--ghost" data-j="${c.t - T0}">${c.chapter} · ${c.from.slice(0, 5)}</button>`).join("")}</div>` : ""}
  </div>`;
  const cv = el.querySelector("canvas"), g = cv.getContext("2d"), slider = el.querySelector(".cam-slider");
  const imgs = {};
  let t = 0, playing = false, timer = 0, speed = 1;
  [...new Set(scenes.map((s) => s.img))].forEach((n) => loadImg(n).then((i) => { imgs[n] = i; draw(); }));
  const fbCache = {};
  const fbImg = (kind) => {
    if (fbCache[kind] !== undefined) return fbCache[kind];
    fbCache[kind] = null;
    const im = new Image(); im.onload = () => { fbCache[kind] = im; draw(); };
    im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(stageArt(kind).replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '));
    return null;
  };
  const sceneAt = (abs) => { let s = scenes[0]; for (const x of scenes) if (x.t <= abs) s = x; return s; };

  function draw() {
    const abs = T0 + t, s = sceneAt(abs);
    const rnd = (k) => { const x = Math.sin((abs * 97 + k) * 12.9898) * 43758.5453; return x - Math.floor(x); };
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = "#000"; g.fillRect(0, 0, 640, 480);
    const im = imgs[s.img] || fbImg(s.fb);
    const jx = (rnd(1) - 0.5) * 4;
    if (im) {
      const r = Math.max(640 / im.width, 480 / im.height), w = im.width * r, h = im.height * r;
      g.filter = "saturate(1.25) contrast(1.1) brightness(0.9)";
      g.drawImage(im, (640 - w) / 2 + jx, (480 - h) / 2, w, h);
      g.globalAlpha = 0.25; g.globalCompositeOperation = "screen";           // VHS colour bleed
      g.filter = "hue-rotate(-30deg) blur(1px)"; g.drawImage(im, (640 - w) / 2 + jx + 4, (480 - h) / 2, w, h);
      g.globalAlpha = 1; g.globalCompositeOperation = "source-over"; g.filter = "none";
    }
    // the wing ghost: one second, right wing, only when the dread is high enough
    const wg = cfg.wingGhost;
    if (wg && level() >= wg.min && Math.abs(abs - sec(wg.t)) < 1) {
      g.globalAlpha = 0.55; g.fillStyle = "#7a0c08"; g.beginPath(); g.ellipse(585, 210, 20, 26, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#123a1c"; g.fillRect(565, 236, 40, 120); g.globalAlpha = 1;
    }
    // scanlines, noise, tracking band
    g.fillStyle = "rgba(0,0,0,.18)"; for (let y = 0; y < 480; y += 3) g.fillRect(0, y, 640, 1);
    const band = Math.floor(rnd(2) * 480);
    g.fillStyle = "rgba(255,255,255,.08)"; g.fillRect(0, band, 640, 6 + rnd(3) * 10);
    for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(255,255,255,${rnd(10 + i) * 0.18})`; g.fillRect(rnd(100 + i) * 640, rnd(200 + i) * 480, 2 + rnd(300 + i) * 30, 1); }
    // on-screen display
    g.font = "bold 22px 'IBM Plex Mono', monospace"; g.fillStyle = "#fff"; g.shadowColor = "#000"; g.shadowBlur = 3;
    g.fillText(playing ? "PLAY ▶" : "PAUSE ❚❚", 24, 40);
    g.fillText("SEP.27 1993", 400, 420); g.fillText(hms(abs), 430, 452);
    // captions for sounds
    const cap = events.filter((e) => abs >= e.t && abs < e.t + (e.dur || 6)).pop();
    if (cap) {
      g.font = "16px 'IBM Plex Mono', monospace"; g.shadowBlur = 0;
      const lines = wrap(`[${cap.text}]`, 56);
      lines.forEach((l, i) => { const w = g.measureText(l).width; g.fillStyle = "rgba(0,0,0,.7)"; g.fillRect(320 - w / 2 - 6, 330 + i * 22 - 16, w + 12, 21); g.fillStyle = "#ffe36a"; g.fillText(l, 320 - w / 2, 330 + i * 22); });
    }
    g.shadowBlur = 0;
    el.querySelector(".cam-time").textContent = hms(abs);
    slider.value = t;
  }

  function wrap(s, n) { const out = []; let cur = ""; for (const w of s.split(" ")) { if ((cur + " " + w).trim().length > n) { out.push(cur.trim()); cur = w; } else cur += " " + w; } if (cur.trim()) out.push(cur.trim()); return out; }

  function sound(e) {
    if (!e.sfx) return;
    if (e.sfx === "bell") { const n = speed === 1 ? 21 : 3; for (let i = 0; i < n; i++) setTimeout(() => sfx.gong(), (i + Math.floor(i / 7) * 2) * (speed === 1 ? 1000 : 120)); return; }
    if (e.sfx === "tom2") { sfx.tom(); sfx.tom(0.45); return; }
    if (e.sfx === "ken") { sfx.ken(0, 3); return; }
    sfx[e.sfx]?.();
  }
  function scareCheck(prev) {
    const sc = cfg.scare; if (!sc) return;
    const at = sec(sc.t) - T0;
    if (prev < at && t >= at) jumpScare(sc.key, sc.pic, { fallback: ghostFace(), hold: 900 });
  }
  function step(dt) {
    const prev = t;
    t = Math.max(0, Math.min(len, t + dt));
    if (playing && dt > 0) {
      for (const e of events) if (e.t - T0 > prev && e.t - T0 <= t && speed <= 16) sound(e);
      const s = sceneAt(T0 + t);
      if (s.drum && speed === 1 && Math.random() < 0.7) sfx.tom(0, reverb());   // battle drums behind the singing
    }
    scareCheck(prev);
    draw();
    if (t >= len) setPlay(false);
  }
  function setPlay(on) {
    playing = on; clearInterval(timer);
    el.querySelector('[data-c="play"]').textContent = on ? "❚❚" : "▶";
    if (on) { ctx(); timer = setInterval(() => step(1), 1000 / speed); }
    draw();
  }
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-c],[data-j]");
    if (!b) return;
    ctx(); sfx.click();
    if (b.dataset.j) { const prev = t; t = Number(b.dataset.j); scareCheck(prev); draw(); return; }
    const k = b.dataset.c;
    if (k === "play") setPlay(!playing);
    else if (k === "speed") { speed = { 1: 4, 4: 16, 16: 60, 60: 1 }[speed]; b.textContent = `×${speed}`; if (playing) setPlay(true); }
    else step(Number(k));
  });
  slider.addEventListener("input", () => { const prev = t; t = Number(slider.value); scareCheck(prev); draw(); });
  draw();
  return () => clearInterval(timer);
}

// ---------------------------------------------------------------- the buồng trò, clickable spots
const SPOTS = [
  { id: "ban_to", x: 50, y: 38, label: "Bàn Tổ", text: "Bàn Tổ kê cao ngang ngực. Ba chung trà sứ men lam đặt hàng ngang. Hai chung hai bên đã cạn. <b>Chung ở giữa</b> còn lớp cặn bột màu xám dính đáy, đã niêm phong gửi giám định. Bát nhang, đĩa trầu cau, hai cây đèn dầu đã tắt." },
  { id: "heo", x: 36, y: 45, label: "Đầu heo quay", text: "Đầu heo quay cúng Tổ từ chiều 27. Mới một đêm đã bốc mùi tanh lợm. Hai hốc mắt lúc nhúc dòi trắng, da quay phồng rộp, nhớt chảy thành vệt xuống mâm. Cán bộ ghi: “dòi nhiều bất thường, như để cả tuần”." },
  { id: "ban_ve", x: 18, y: 60, label: "Bàn vẽ mặt", text: "Mỗi kép một dĩa màu dán tên. <b>Kiệt</b>: đỏ, đen, đã dùng. <b>Thông</b>: đen, trắng, đã dùng. <b>Lợi</b>: trắng mốc, đã dùng. <b>Tư Hòa</b>: trắng, hồng (vai lính cờ), đã dùng; <b>màu đen cũng đã dùng gần hết</b>. Theo trình tự đêm diễn, tối đó Hòa không có vai mặt đen nào." },
  { id: "ruong", x: 76, y: 64, label: "Rương Tổ", text: "Rương gỗ lim, khóa đồng gỉ sét. Theo ông Sáu Bé, trong rương là bộ áo Quan Công năm 1963, không ai mở từ ba chục năm nay. Chìa khóa ông đeo ở cổ. Ổ khóa còn nguyên, không có dấu cạy." },
  { id: "chieu", x: 86, y: 84, label: "Chiếc chiếu trong góc", text: "Chiếu và mền của bé Thủy. Từ chỗ nằm nhìn thẳng ra bàn Tổ và cánh cửa sau. Mền ướt đẫm mồ hôi." },
  { id: "cua_sau", x: 94, y: 40, label: "Cửa sau", text: "Cửa liếp mở ra cầu ao. Bản lề kêu kẽo kẹt. Dưới chân cầu ao: <b>một chiếc khăn vải dính màu đen và vệt phấn trắng</b>, chưa ai nhận là của mình. Trên ván cầu có dấu bàn chân trần, bùn đã khô." },
  { id: "dao", x: 64, y: 28, label: "Cây đao", text: "Thanh Long đao của Quan Công, dựng vào vách. Cán gỗ có vết cào bằng móng tay, bết son đỏ." },
  { id: "guong", x: 14, y: 30, label: "Tấm gương", text: "Tấm gương soi vẽ mặt, viền gỗ, tráng thủy đã loang lổ. Trong gương chỉ thấy phản chiếu của căn buồng." },
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
