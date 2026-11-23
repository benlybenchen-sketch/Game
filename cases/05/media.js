// Case 05 widgets: the house plan (pick a room), the flashlight on a photograph, the torn diary page,
// the 1991 tear-off calendar, and three handwriting samples under a magnifier.
// Widgets answer the open question through a "hdn:answer" event (see setAnswer in js/main.js).
import { state, save } from "../../js/store.js";
import { ctx, sfx } from "../../js/audio.js";
import { jumpScare, level } from "../../js/dread.js";
import { base } from "../../js/case.js";
import { LUNAR_1991 } from "./lunar.js";
import { photoFallback } from "./art.js";

const answer = (part, value, text) => document.dispatchEvent(new CustomEvent("hdn:answer", { detail: { part, value, text } }));
const current = (part) => { for (const r of Object.values(state.resp || {})) if (r && r[part] !== undefined) return r[part]; return null; };
const img = (name, fb) => `<img src="${base.img}${name}.jpg" alt="" data-fb="${encodeURIComponent(fb)}">`;
const fallbacks = (el) => el.querySelectorAll("img[data-fb]").forEach((i) => {
  i.onerror = () => { const d = document.createElement("div"); d.className = "ov-fb"; d.innerHTML = decodeURIComponent(i.dataset.fb); i.replaceWith(d); };
});

// ------------------------------------------------------------------ house plan
const ROOMS = [
  { id: "hieu_anh", name: "Hiệu ảnh", x: 60, y: 170, w: 130, h: 110 },
  { id: "buong_toi", name: "Buồng tối rửa ảnh", x: 60, y: 70, w: 130, h: 100 },
  { id: "gian_giua", name: "Gian giữa", x: 190, y: 170, w: 130, h: 110 },
  { id: "bep", name: "Bếp", x: 190, y: 70, w: 130, h: 100 },
  { id: "buong", name: "Buồng trong", x: 320, y: 70, w: 110, h: 210 },
  { id: "san", name: "Sân sau, giếng", x: 60, y: 20, w: 370, h: 50 },
  { id: "nha_lua", name: "Nhà bà Lụa", x: 450, y: 70, w: 110, h: 210 },
];
// Doors drawn on the 1988 plan: [x, y, vertical wall?, swing side]. Every room has one, so the kitchen door does not stand out.
const DOORS = [[190, 200, true, 1], [100, 170, false, 1], [240, 170, false, 0], [320, 215, true, 1], [230, 70, false, 1], [320, 112, true, 1]];
export function map(el) {
  const sel = () => current("mui");
  el.innerHTML = `
  <div class="plan">
    <svg viewBox="0 0 600 330" role="img" aria-label="Sơ đồ nhà">
      <rect x="0" y="0" width="600" height="330" fill="#efe7d3"/>
      <g stroke="#2b2620" stroke-width="1" font-family="'Patrick Hand', cursive" fill="#2b2620">
        ${ROOMS.map((r) => `<g class="room ${r.id === "nha_lua" ? "room--next" : ""}" data-room="${r.id}">
          <rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.id === "san" ? "#e2dcc6" : "#f7f1e1"}" stroke-width="${r.id === "nha_lua" ? 1 : 2.5}" ${r.id === "nha_lua" || r.id === "san" ? 'stroke-dasharray="6 4"' : ""}/>
          <text x="${r.x + r.w / 2}" y="${r.y + r.h / 2}" text-anchor="middle" font-size="17" stroke="none">${r.name}</text></g>`).join("")}
        <text x="505" y="105" text-anchor="middle" font-size="13" stroke="none">(bếp bà Lụa)</text>
        <line x1="450" y1="125" x2="560" y2="125" stroke-dasharray="3 3"/>
        ${DOORS.map(([x, y, v, sw]) => v ? `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 20}" stroke="#f7f1e1" stroke-width="4"/><path d="M${x} ${y} a20 20 0 0 ${sw} ${sw ? -20 : 20} 20" fill="none" stroke-dasharray="2 2"/>`
          : `<line x1="${x}" y1="${y}" x2="${x + 20}" y2="${y}" stroke="#f7f1e1" stroke-width="4"/><path d="M${x} ${y} a20 20 0 0 ${sw} 20 ${sw ? 20 : -20}" fill="none" stroke-dasharray="2 2"/>`).join("")}
        <circle cx="400" cy="45" r="10" fill="none"/><text x="400" y="49" text-anchor="middle" font-size="11" stroke="none">giếng</text>
        <rect x="100" y="279" width="50" height="6" fill="#2b2620"/><text x="125" y="300" text-anchor="middle" font-size="13" stroke="none">cửa hiệu</text>
        <text x="300" y="322" text-anchor="middle" font-size="15" stroke="none">ĐƯỜNG XUỐNG CHỢ</text>
        <text x="40" y="320" font-size="12" stroke="none">Tỉ lệ 1/100 · Địa chính TT Cam Đường · 1988</text>
        <path d="M575 30 l0 -18 m-5 6 l5 -6 l5 6" fill="none"/><text x="575" y="45" text-anchor="middle" font-size="12" stroke="none">B</text>
      </g>
    </svg>
    <p class="ov-note plan-sel"></p>
  </div>`;
  const render = () => {
    const v = sel();
    el.querySelectorAll(".room").forEach((g) => g.classList.toggle("on", g.dataset.room === v));
    el.querySelector(".plan-sel").textContent = v ? `Đã đánh dấu: ${ROOMS.find((r) => r.id === v)?.name}` : "Bấm vào một gian để đánh dấu.";
  };
  el.addEventListener("click", (e) => {
    const g = e.target.closest("[data-room]"); if (!g) return;
    ctx(); sfx.click();
    const r = ROOMS.find((x) => x.id === g.dataset.room);
    answer("mui", r.id, r.name);
    render();
  });
  render();
}

// ------------------------------------------------------------------ flashlight on a photograph
// Spots in % of the picture (x, y, w, h). Right ones: mat, nhan, seo. The rest are ordinary details.
export const SPOTS = [
  // Laid out on the real photo (img/05/vo_toi_tet_1991.jpg). Checked in order, so small spots come before the large ones around them.
  { id: "seo", x: 53, y: 55, w: 7, h: 9, text: "Dây chun đen và vết sẹo ở cổ tay phải" },
  { id: "mat", x: 40, y: 16, w: 18, h: 26, text: "Bóng một khuôn mặt trẻ con trong mặt kính cửa sổ" },
  { id: "nhan", x: 44, y: 48, w: 20, h: 10, text: "Hai bàn tay trên bậu cửa không đeo nhẫn" },
  { id: "tra", x: 73, y: 44, w: 9, h: 10, text: "Chén trà nguội trên bậu cửa" },
  { id: "khan", x: 23, y: 16, w: 19, h: 28, text: "Khăn len kem trùm kín đầu" },
  { id: "ao", x: 19, y: 44, w: 26, h: 48, text: "Áo len đỏ rộng thùng thình" },
  { id: "ghe", x: 23, y: 92, w: 25, h: 8, text: "Ghế đẩu gỗ, giống trong ảnh 1988" },
  { id: "khung", x: 60, y: 0, w: 38, h: 54, text: "Khung cửa sổ gỗ, giống trong ảnh 1988" },
];
export function torch(el) {
  el.innerHTML = `
  <div class="torch">
    <div class="torch-stage">${img("vo_toi_tet_1991", photoFallback())}<div class="torch-dark"></div></div>
    <div class="torch-ctl"><span class="torch-under">Rê chuột hoặc chạm vào ảnh để soi.</span>
      <button class="btn btn--small" data-torch="note" disabled>Ghi vào sổ</button></div>
  </div>`;
  fallbacks(el);
  const stage = el.querySelector(".torch-stage"), under = el.querySelector(".torch-under"), btn = el.querySelector('[data-torch="note"]');
  let spot = null;
  const found = () => current("ct") || [];
  const show = (x, y) => {
    stage.style.setProperty("--x", `${x}%`); stage.style.setProperty("--y", `${y}%`);
    stage.classList.add("lit");
    spot = SPOTS.find((s) => x >= s.x && x <= s.x + s.w && y >= s.y && y <= s.y + s.h) || null;
    under.textContent = spot ? `Dưới đèn: ${spot.text}${found().includes(spot.id) ? " (đã ghi)" : ""}` : "Dưới đèn: không có gì đặc biệt.";
    btn.disabled = !spot;
    btn.textContent = spot && found().includes(spot.id) ? "Bỏ khỏi sổ" : "Ghi vào sổ";
  };
  const move = (e) => {
    const r = stage.getBoundingClientRect(), p = e.touches?.[0] || e;
    show(Math.max(0, Math.min(100, ((p.clientX - r.left) / r.width) * 100)), Math.max(0, Math.min(100, ((p.clientY - r.top) / r.height) * 100)));
  };
  stage.addEventListener("pointermove", move);
  stage.addEventListener("pointerdown", (e) => { ctx(); move(e); });
  btn.addEventListener("click", () => {
    if (!spot) return;
    answer("ct", spot.id, spot.text);
    if (spot.id === "mat" && level() >= 2) setTimeout(() => jumpScare("matkinh", "mat_kinh_scare", { hold: 3200 }), 900);
    show(parseFloat(stage.style.getPropertyValue("--x")), parseFloat(stage.style.getPropertyValue("--y")));
  });
}

// ------------------------------------------------------------------ the torn diary page
const PAGE = `<p>Thứ Sáu 22/12/1989. Đông chí.</p>
  <p>Mẹ không cho con đi trại hè văn học. Con ghét mẹ. Con khoá cửa.</p>
  <p>Đêm, mẹ gõ vách. Mẹ gọi: Ngân ơi, lấy thuốc cho mẹ.</p>
  <p>Con bịt tai. Con tưởng mẹ giả vờ để làm lành.</p>
  <p>Con không mở cửa.</p>
  <p class="shake">Sáng ra mẹ ngồi tựa thành giường. Mẹ ngủ.</p>`;
const START_ROT = [180, 0, 90, 270, 90, 180];   // piece i starts turned by this much
const TRAY_ORDER = [4, 1, 5, 0, 3, 2];
export function tear(el) {
  const st = (state.board.tear ||= { slots: [null, null, null, null, null, null], rot: START_ROT.slice() });
  let picked = null;   // { from: "tray" | "slot", piece, slot? }
  const piece = (i) => `<div class="tp" data-piece="${i}" style="--c:${i % 3};--r:${Math.floor(i / 3)};--rot:${st.rot[i]}deg"><div class="tp-in">${PAGE}</div></div>`;
  const done = () => st.slots.every((p, k) => p === k) && st.rot.every((r) => r % 360 === 0);
  const render = () => {
    const ok = done();
    el.innerHTML = `
    <div class="tear ${ok ? "tear--done" : ""}">
      <div class="tear-frame">${st.slots.map((p, k) => `<div class="ts ${picked?.slot === k ? "sel" : ""}" data-slot="${k}">${p != null ? piece(p) : ""}</div>`).join("")}</div>
      ${ok ? `<div class="tear-read hand kid">${PAGE}</div>` : `
      <div class="tear-ctl">${picked?.from === "slot" ? `<button class="btn btn--small" data-tear="rot">↻ Xoay</button><button class="btn btn--small btn--ghost" data-tear="out">Bỏ ra</button>` : `<span class="small muted">${picked ? "Bấm vào một ô trống trên khung để đặt mảnh." : "Bấm một mảnh trong khay."}</span>`}</div>
      <div class="tear-tray">${TRAY_ORDER.filter((i) => !st.slots.includes(i)).map((i) => `<div class="tt ${picked?.piece === i && picked.from === "tray" ? "sel" : ""}" data-tray="${i}">${piece(i)}</div>`).join("")}</div>`}
    </div>`;
  };
  el.addEventListener("click", (e) => {
    const tr = e.target.closest("[data-tray]"), sl = e.target.closest("[data-slot]"), b = e.target.closest("[data-tear]");
    ctx();
    if (b && picked?.from === "slot") {
      const k = picked.slot, p = st.slots[k];
      if (b.dataset.tear === "rot") { st.rot[p] = (st.rot[p] + 90) % 360; sfx.paper(); }
      if (b.dataset.tear === "out") { st.slots[k] = null; picked = null; sfx.paper(); }
    } else if (tr) { const i = Number(tr.dataset.tray); picked = picked?.piece === i ? null : { from: "tray", piece: i }; sfx.click(); }
    else if (sl) {
      const k = Number(sl.dataset.slot);
      if (picked?.from === "tray" && st.slots[k] == null) { st.slots[k] = picked.piece; picked = { from: "slot", piece: picked.piece, slot: k }; sfx.paper(); }
      else if (st.slots[k] != null) { picked = picked?.slot === k ? null : { from: "slot", piece: st.slots[k], slot: k }; sfx.click(); }
    } else return;
    const was = done();
    save(); render();
    if (!was && done()) { sfx.stamp(); }
  });
  render();
}

// ------------------------------------------------------------------ the tear-off calendar of 1991
const MONTH = (m) => `Tháng ${m === 12 ? "Mười Hai" : m === 1 ? "Giêng" : m}`;
export function lich(el) {
  let k = LUNAR_1991.findIndex((d) => d.iso === "1991-12-19");
  const render = () => {
    const d = LUNAR_1991[k], chosen = current("ngay") === d.iso;
    el.innerHTML = `
    <div class="bloc">
      <div class="bloc-page ${d.wd === "Chủ Nhật" ? "sun" : ""} ${chosen ? "circled" : ""}">
        <div class="bloc-top">${MONTH(d.mo)} · ${d.y}</div>
        <div class="bloc-day">${d.d}</div>
        <div class="bloc-wd">${d.wd}</div>
        ${d.note ? `<div class="bloc-note">${d.note}</div>` : ""}
        <div class="bloc-lunar">Âm lịch: ngày ${d.l} tháng ${d.lm} · năm Tân Mùi</div>
      </div>
      <div class="bloc-ctl">
        <button class="btn btn--small" data-bloc="-1" ${k === 0 ? "disabled" : ""}>◀ Tờ trước</button>
        <button class="btn btn--small btn--red" data-bloc="pick">${chosen ? "Đã khoanh tờ này" : "Khoanh tờ này"}</button>
        <button class="btn btn--small" data-bloc="1" ${k === LUNAR_1991.length - 1 ? "disabled" : ""}>Tờ sau ▶</button>
      </div>
    </div>`;
  };
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-bloc]"); if (!b) return;
    ctx();
    if (b.dataset.bloc === "pick") { const d = LUNAR_1991[k]; answer("ngay", d.iso, `${d.wd} ${d.d}/${d.mo}/${d.y} (âm lịch: ${d.l} tháng ${d.lm})`); }
    else { k = Math.max(0, Math.min(LUNAR_1991.length - 1, k + Number(b.dataset.bloc))); sfx.paper(); }
    render();
  });
  render();
}

// ------------------------------------------------------------------ three handwriting samples
export function hand(el) {
  el.innerHTML = `
  <div class="hw">
    <figure><div class="hw-box"><div class="hw-a">Kính gửi Ban giám hiệu,<br>Tôi là Phạm Thị Hằng, giáo viên Văn. Tôi bị ốm, xin nghỉ <span class="hw-g">g</span>ấp hai tuần để <span class="hw-err">trăm</span> sóc sức khoẻ.<br>Cam Đường, 26/12/1989<br>Phạm Thị Hằng</div></div>
      <figcaption>1. Giấy xin nghỉ của cô Hằng gửi trường, 26/12/1989</figcaption></figure>
    <figure><div class="hw-box"><div class="hw-c">Lớp 7A · Văn · HKI 1988–1989<br>Nguyễn Thị Giang: 7 · Lò Văn Góp: 6<br>Ghi chú: em Giang cần chăm chỉ hơn ở phần<br>tập làm văn. Gặp gia đình em Góp.</div></div>
      <figcaption>2. Sổ điểm do chính cô Hằng ghi, 1988–1989</figcaption></figure>
    <figure><div class="hw-box"><div class="hw-a">Bài văn: Mẹ của em<br>Mẹ em là cô <span class="hw-g">g</span>iáo dạy Văn. Mẹ bị ốm, em ở nhà <span class="hw-err">trăm</span> mẹ. Mẹ <span class="hw-g">g</span>ầy lắm nhưng mẹ vẫn cười.<br>Đỗ Thị Ngân, lớp 9A, 10/1991</div></div>
      <figcaption>3. Bài văn của Ngân, cô Hà chủ nhiệm cho mượn</figcaption></figure>
  </div>
  <p class="ov-note">Rê chuột (hoặc chạm) lên một mẫu chữ để soi bằng kính lúp.</p>`;
  el.querySelectorAll(".hw-box").forEach((box) => {
    const move = (e) => { const r = box.getBoundingClientRect(), p = e.touches?.[0] || e; box.style.setProperty("--x", `${((p.clientX - r.left) / r.width) * 100}%`); box.style.setProperty("--y", `${((p.clientY - r.top) / r.height) * 100}%`); box.classList.add("zoom"); };
    box.addEventListener("pointermove", move); box.addEventListener("pointerdown", move);
    box.addEventListener("pointerleave", () => box.classList.remove("zoom"));
  });
}

// Ngân's squared page and the darkroom's black card with nine holes (js/puzzles.js grille).
// Read through the holes, turning the card four times from the inked corner top-left:
// "CON NOI DOI BO CON HO THAY ME CON SO LAM BO OI" (+ XX).
export const MASK = {
  id: "mat_na",
  grid: ["LAMACO", "BYBOON", "OMEICN", "OOCIDX", "NONXOH", "SOIOTH"],
  holes: [[0, 5], [1, 5], [2, 5], [0, 4], [4, 4], [3, 1], [5, 2], [3, 4], [3, 3]],
};
export const MASK_SOLUTION = "CONNOIDOIBOCONHOTHAYMECONSOLAMBOOIXX";

/** What Ngân keeps in her sweet tin (sealed into locks.js by tools/lockbox.mjs). */
export const tinHtml = () => `<div class="doc doc--memo"><div class="hand">
  <p>Đêm mẹ khỏi bệnh.</p>
  <p>Băng keo, ba cuộn. Đã dán.</p>
  <p>Chăn của mẹ. Đã gấp.</p>
  <p>Lò. Bố mua rồi.</p>
  <p>Phần than của con. Đã để chỗ mẹ.</p>
  <p>Lối của con. Đã nhổ đinh, cắm lại.</p>
  <p>Đêm nay cả nhà ngủ cùng mẹ. Không ai phải xa ai nữa.</p></div>
  <p class="note">Dưới đáy hộp: một lọn tóc buộc chun đen, và tấm ảnh 1988 của cô Hằng đã sờn mép.</p></div>`;
