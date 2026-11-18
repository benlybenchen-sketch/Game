// The investigation desk: cover, folder list, document reader, the notebook of staged questions,
// unlocking new folders, the ending. Loaded by index.html as an ES module.
import { state, save, resetAll } from "./store.js";
import { DOCS, QUESTIONS, META, SECRET, SECRET_KEY, START_CLOCK, END_CLOCK } from "../case/index.js";
import { decode, checkQuestion } from "./answer.js";
import { mountMedia } from "./media.js";
import { ctx, sfx, setSound, ambience } from "./audio.js";
import { setLevel, level, jumpScare } from "./dread.js";

const SECRETS = decode(SECRET, SECRET_KEY);
const byId = new Map(DOCS.map((d) => [d.id, d]));
const FOLDERS = ["Phong bì gửi tới đài", "Chị Nga gửi · lần 1", "Túi giấy của bà Thoa", "Hồ sơ năm 1996", "Gần sáng", "Kết thúc"];
const WRONG = [
  "Anh Quân lắc đầu: “Chưa khớp. Đọc lại đi, chị Nga sẽ không mở hồ sơ vì một linh cảm.”",
  "“Có chỗ chưa đúng. Đừng đoán, hãy tìm tờ giấy nói điều đó.”",
  "“Không. Nghe lại băng, xem lại ảnh. Bằng chứng phải khớp với từng câu trả lời.”",
  "“Gần rồi, nhưng ‘gần’ thì không cứu được ai.”",
];

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const finished = () => state.stage >= QUESTIONS.length;
const visibleDocs = () => DOCS.filter((d) => d.stage <= state.stage);
const currentQ = () => QUESTIONS[state.stage] || null;
const resp = (qid) => (state.resp[qid] ||= {});
const isMobile = () => matchMedia("(max-width: 980px)").matches;
let picking = null;          // { qid, partId } while choosing a statement line
let cleanupMedia = () => {};

// ---------------------------------------------------------------- boot
function boot() {
  document.title = `${META.title} · ${META.series}`;
  bindChrome();
  setLevel(state.started ? Math.min(state.stage, 5) : 0, { quiet: true });
  showCover();
}

// ---------------------------------------------------------------- cover
function showCover() {
  document.body.dataset.screen = "cover";
  $("#desk").hidden = true;
  const c = $("#cover");
  c.hidden = false;
  const resume = state.started && !finished();
  c.innerHTML = `
  <div class="cover">
    <div class="cover-art" style="background-image:url(img/cover.jpg)"></div>
    <div class="cover-card">
      <div class="cover-series">${META.series} · ${META.number}</div>
      <h1 class="cover-title">${META.title}</h1>
      <div class="cover-place">${META.place}</div>
      <p class="cover-blurb">${META.blurb}</p>
      <div class="cover-facts"><span><b>Người chơi</b>${META.players}</span><span><b>Thời gian</b>${META.time}</span><span><b>Độ khó</b>${META.level}</span></div>
      <div class="warn">⚠ Trò chơi có yếu tố <b>kinh dị, tâm linh</b>, âm thanh gây giật mình${state.fear === "full" ? " và hình ảnh doạ" : ""}. Nên đeo tai nghe, chơi trong phòng tối… nếu bạn dám.</div>
      ${settingsHtml()}
      <div class="cover-actions">
        <button class="btn btn--red" data-cv="go">${resume ? "Tiếp tục điều tra" : state.started ? "Xem lại hồ sơ" : "Mở phong bì"}</button>
        ${state.started ? `<button class="btn btn--ghost" data-cv="reset">Chơi lại từ đầu</button>` : ""}
      </div>
      <details class="howto"><summary>Cách chơi</summary><ol>
        <li>Đọc, nghe, xem mọi thứ trong <b>hồ sơ</b> bên trái: thư, báo, biên bản, băng ghi âm, video camera, ảnh phòng tối, bản đồ.</li>
        <li>Mở <b>sổ công tác</b> bên phải, trả lời <b>trọng điểm</b> đang mở. Mỗi kết luận phải <b>ghim tài liệu làm bằng chứng</b> (nút 📌 trên đầu tài liệu).</li>
        <li>Một số câu hỏi bắt bạn <b>chỉ ra câu nói dối</b>: bấm “Chọn câu”, rồi bấm vào đúng câu trong lời khai.</li>
        <li>Trả lời đúng thì chị Nga gửi thêm hồ sơ. Mỗi lần như thế, đêm lại khuya hơn, và trong phòng thu… có thêm thứ gì đó.</li>
        <li>Bí quá thì dùng <b>gợi ý</b>. Đến lúc tuyệt vọng thì có <b>lời giải</b>.</li>
      </ol><p class="small muted">Tiến trình được lưu trên trình duyệt này.</p></details>
      <p class="credit">Truyện và nhân vật hoàn toàn hư cấu. Lấy cảm hứng từ thể loại game hồ sơ điều tra trên trình duyệt.</p>
    </div>
  </div>`;
}

function settingsHtml() {
  const tog = (k, on, label, a, b) => `<div class="set"><span>${label}</span><button class="seg ${on ? "" : "on"}" data-set="${k}" data-v="0">${a}</button><button class="seg ${on ? "on" : ""}" data-set="${k}" data-v="1">${b}</button></div>`;
  return `<div class="settings">
    ${tog("fear", state.fear === "full", "Mức rợn", "Nhẹ", "Đầy đủ")}
    ${tog("flash", state.flash, "Nháy sáng nhanh", "Tắt", "Bật")}
    ${tog("sound", state.sound, "Âm thanh", "Tắt", "Bật")}
    ${tog("voice", state.voice, "Đọc lời băng bằng giọng máy", "Tắt", "Bật")}
  </div>`;
}

function applySetting(k, v) {
  if (k === "fear") state.fear = v ? "full" : "soft";
  if (k === "flash") state.flash = !!v;
  if (k === "sound") { state.sound = !!v; setSound(state.sound); }
  if (k === "voice") state.voice = !!v;
  save();
  setLevel(level(), { quiet: true });
  document.querySelectorAll(`[data-set="${k}"]`).forEach((b) => b.classList.toggle("on", Number(b.dataset.v) === Number(v)));
}

function startDesk() {
  ctx(); ambience(level());
  if (!state.started) { state.started = true; save(); setLevel(0); }
  document.body.dataset.screen = "desk";
  $("#cover").hidden = true;
  $("#desk").hidden = false;
  renderAll();
  openDoc(state.lastDoc && byId.has(state.lastDoc) && byId.get(state.lastDoc).stage <= state.stage ? state.lastDoc : META.firstDoc);
}

// ---------------------------------------------------------------- render
function renderAll() { renderFolder(); renderInquiry(); renderTop(); $(".notes textarea").value = state.notes; }

function renderTop() {
  const clock = finished() ? END_CLOCK : state.stage === 0 ? START_CLOCK : QUESTIONS[state.stage - 1].clock;
  $(".top-clock").textContent = clock;
  $(".top-clock").title = "Giờ trong truyện: đêm 19 rạng sáng 20/8/2003";
  $(".top-progress").textContent = finished() ? "Đã khép hồ sơ" : `Trọng điểm ${state.stage + 1}/${QUESTIONS.length}`;
}

function renderFolder() {
  const pins = currentQ() ? resp(currentQ().id).pins || [] : [];
  const groups = new Map();
  for (const d of visibleDocs()) { if (!groups.has(d.stage)) groups.set(d.stage, []); groups.get(d.stage).push(d); }
  $("#folder").innerHTML = `<h2>Hồ sơ</h2>` + [...groups.entries()].map(([s, docs]) => `
    <div class="fold"><div class="fold-name">${FOLDERS[s]}</div>
      ${docs.map((d) => `<button class="fold-item ${state.lastDoc === d.id ? "cur" : ""}" data-doc="${d.id}">
        <span class="ico">${d.icon}</span><span class="lbl">${d.label}</span>
        ${!state.seen[d.id] ? '<span class="badge">mới</span>' : ""}${pins.includes(d.id) ? '<span class="pin">📌</span>' : ""}
      </button>`).join("")}
    </div>`).join("");
}

function openDoc(id) {
  const d = byId.get(id);
  if (!d) return;
  cleanupMedia();
  state.lastDoc = id; state.seen[id] = true; save();
  const q = currentQ(), pinPart = q?.parts.find((p) => p.type === "pins");
  const pinned = q ? (resp(q.id).pins || []).includes(id) : false;
  $(".reader-head").innerHTML = `
    <div><span class="kind">${d.kind}</span><h2>${d.label}</h2></div>
    ${pinPart && d.stage < 5 ? `<button class="btn ${pinned ? "btn--on" : ""}" data-pin="${id}">📌 ${pinned ? "Bỏ ghim" : "Ghim làm bằng chứng"}</button>` : ""}`;
  const body = $(".reader-body");
  body.innerHTML = d.html();
  body.querySelectorAll(".dread-only").forEach((e) => { if (Number(e.dataset.min) > level()) e.remove(); });
  body.classList.toggle("picking", !!picking);
  if (picking) markPickedLine();
  body.scrollTop = 0;
  cleanupMedia = mountMedia(body);
  sfx.paper();
  renderFolder();
  if (isMobile()) showPanel("reader");
}

// ---------------------------------------------------------------- inquiry
function renderInquiry() {
  const html = QUESTIONS.map((q, i) => {
    if (i < state.stage) return solvedCard(q, i);
    if (i === state.stage) return openCard(q, i);
    return `<div class="q-card locked"><div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">· · ·</span></div></div>`;
  }).join("");
  $(".inq").innerHTML = `<h2>Sổ công tác</h2>${html}${finished() ? `<div class="q-card end"><b>Hồ sơ đã khép.</b> Đọc thư mục “Kết thúc” bên trái.</div>` : ""}`;
}

function solvedCard(q, i) {
  return `<div class="q-card solved">
    <span class="q-stamp ${state.peeked[q.id] ? "peek" : ""}">${state.peeked[q.id] ? "XEM GIẢI" : "ĐÃ RÕ"}</span>
    <div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">${q.title}</span></div>
    <details><summary>Lời giải của anh Quân</summary><p>${esc(SECRETS[q.id].solution)}</p></details>
  </div>`;
}

function partHtml(q, p) {
  const r = resp(q.id), v = r[p.id] ?? "";
  if (p.type === "choice") return `<label class="part"><span>${p.label}</span>
    <select data-part="${p.id}"><option value="">— chọn —</option>${p.options.map((o) => `<option ${o === v ? "selected" : ""}>${esc(o)}</option>`).join("")}</select></label>`;
  if (["number", "time", "text"].includes(p.type)) return `<label class="part"><span>${p.label}</span>
    <span class="inp"><input data-part="${p.id}" value="${esc(v)}" placeholder="${p.placeholder || ""}" inputmode="${p.type === "text" ? "text" : "decimal"}" autocomplete="off">${p.unit ? `<em>${p.unit}</em>` : ""}</span></label>`;
  if (p.type === "line") {
    const on = picking && picking.qid === q.id;
    return `<div class="part"><span>${p.label}</span>
      ${r[p.id] ? `<blockquote class="picked">“${esc(r[p.id + "Text"] || "")}”</blockquote>` : ""}
      <button class="btn btn--small ${on ? "btn--on" : ""}" data-pick="${p.id}">${on ? "Đang chọn… bấm vào một câu (bấm lại để huỷ)" : r[p.id] ? "Chọn câu khác" : "Chọn câu trong lời khai"}</button></div>`;
  }
  if (p.type === "pins") {
    const pins = r.pins || [];
    return `<div class="part"><span>${p.label}</span><ul class="slots">
      ${Array.from({ length: p.count }, (_, i) => pins[i]
        ? `<li class="full"><button class="link" data-goto="${pins[i]}">${esc(byId.get(pins[i])?.label || pins[i])}</button><button class="x" data-unpin="${pins[i]}" title="Bỏ ghim">×</button></li>`
        : `<li class="empty">mở tài liệu rồi bấm 📌</li>`).join("")}</ul></div>`;
  }
  return "";
}

function openCard(q, i) {
  const s = SECRETS[q.id], shown = state.hints[q.id] || 0;
  return `<div class="q-card open" data-q="${q.id}">
    <div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">${q.title}</span></div>
    <p class="q-ask">${q.ask}</p>
    ${q.parts.map((p) => partHtml(q, p)).join("")}
    <div class="q-actions">
      <button class="btn btn--red" data-act="submit">Nộp kết luận</button>
      <button class="btn btn--ghost" data-act="hint" ${shown >= s.hints.length ? "disabled" : ""}>Gợi ý (${shown}/${s.hints.length})</button>
      <button class="btn btn--ghost" data-act="solve">Lời giải</button>
    </div>
    <div class="q-feedback" aria-live="polite"></div>
    ${s.hints.slice(0, shown).map((h, k) => `<div class="hint"><b>Gợi ý ${k + 1}.</b> ${esc(h)}</div>`).join("")}
  </div>`;
}

function togglePin(id) {
  const q = currentQ(); if (!q) return;
  const part = q.parts.find((p) => p.type === "pins"); if (!part) return;
  const r = resp(q.id), pins = (r.pins ||= []);
  const i = pins.indexOf(id);
  if (i >= 0) { pins.splice(i, 1); toast("Đã bỏ ghim."); }
  else if (pins.length >= part.count) { toast(`Đã đủ ${part.count} tài liệu. Bỏ bớt một cái trước.`); return; }
  else { pins.push(id); sfx.pin(); toast("Đã ghim làm bằng chứng."); }
  save(); renderInquiry(); renderFolder();
  if (state.lastDoc === id) { const b = $(`[data-pin="${id}"]`); if (b) { const on = pins.includes(id); b.classList.toggle("btn--on", on); b.textContent = `📌 ${on ? "Bỏ ghim" : "Ghim làm bằng chứng"}`; } }
}

function submit() {
  const q = currentQ(), s = SECRETS[q.id], fb = $(".q-feedback");
  const res = checkQuestion(q, s, resp(q.id));
  if (!res.complete) { fb.textContent = "Bạn chưa điền đủ mọi mục (kể cả đủ số tài liệu ghim)."; fb.className = "q-feedback warn"; sfx.wrong(); return; }
  if (res.ok) return solved(q, false);
  const n = (state.tries[q.id] = (state.tries[q.id] || 0) + 1); save();
  let msg = WRONG[(n - 1) % WRONG.length];
  if (n >= 3) msg += ` (Đúng ${res.right}/${res.total} mục.)`;
  fb.textContent = msg; fb.className = "q-feedback bad"; sfx.wrong();
  if (level() >= 2 && Math.random() < 0.35) setTimeout(() => sfx.whisper(1.4), 700);
}

function solved(q, peeked) {
  if (peeked) state.peeked[q.id] = true;
  picking = null;
  state.stage++;
  save();
  sfx.stamp(); setTimeout(() => sfx.gong(), 250);
  setLevel(Math.min(state.stage, 5));
  renderAll();
  if (finished()) {
    dialog(`<h3>05:20 · Gò Miếu</h3><p>Chị Nga gọi lại, giọng lạc đi: “Cắt được khóa rồi. Cô ấy còn sống. Nước chỉ còn cách sàn một gang tay.”</p>
      <p>Ngoài cửa sổ phòng thu, trời bắt đầu hửng. Lần đầu tiên trong đêm, tôi không nghe thấy tiếng nước nhỏ giọt.</p><p class="sign-off">— Quân</p>`,
      "Đọc hồ sơ kết thúc", () => openDoc("bao_ket"));
    return;
  }
  const clock = q.clock;
  dialog(`<h3>${clock} · Anh Quân</h3>${q.memo.split("\n").map((l) => `<p>${l.trim()}</p>`).join("")}<p class="small muted">Thư mục mới: “${FOLDERS[state.stage]}”.</p>`,
    "Mở hồ sơ mới", () => {
      const first = DOCS.find((d) => d.stage === state.stage);
      if (first) openDoc(first.id);
      if (state.stage === 4) setTimeout(jumpScare, 2500);
    });
}

function hint() {
  const q = currentQ(), s = SECRETS[q.id];
  state.hints[q.id] = Math.min(s.hints.length, (state.hints[q.id] || 0) + 1); save(); renderInquiry();
}

function solve() {
  const q = currentQ();
  dialog(`<h3>Xem lời giải?</h3><p>Anh Quân sẽ viết ra toàn bộ suy luận cho trọng điểm này, và bạn đi tiếp. Trọng điểm sẽ bị đóng dấu “XEM GIẢI”.</p>`,
    "Xem lời giải", () => {
      const s = SECRETS[q.id];
      dialog(`<h3>Lời giải · ${q.title}</h3><p>${esc(s.solution)}</p>`, "Đi tiếp", () => solved(q, true));
    }, "Thôi, tự làm tiếp");
}

// ---------------------------------------------------------------- line picking
function markPickedLine() {
  const q = currentQ(); if (!q) return;
  const v = resp(q.id)[picking?.partId || "lie"];
  document.querySelectorAll(".reader-body .ln").forEach((e) => e.classList.toggle("chosen", e.dataset.line === v));
}
function setPicking(on, partId) {
  picking = on ? { qid: currentQ().id, partId } : null;
  $(".reader-body").classList.toggle("picking", !!picking);
  renderInquiry();
  if (picking) { markPickedLine(); toast("Mở một lời khai và bấm vào câu bạn cho là nói dối."); if (isMobile()) showPanel("folder"); }
}

// ---------------------------------------------------------------- ui bits
function dialog(html, okText = "Đóng", onOk = null, cancelText = null) {
  const d = $("#dialog");
  d.innerHTML = `<div class="dlg"><div class="dlg-body">${html}</div><div class="dlg-actions">
    ${cancelText ? `<button class="btn btn--ghost" data-dlg="no">${cancelText}</button>` : ""}<button class="btn btn--red" data-dlg="ok">${okText}</button></div></div>`;
  d.hidden = false;
  d.onclick = (e) => {
    const b = e.target.closest("[data-dlg]"); if (!b) return;
    d.hidden = true; d.innerHTML = "";
    if (b.dataset.dlg === "ok" && onOk) onOk();
  };
}
let toastT = 0;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2600); }
function showPanel(name) {
  document.body.dataset.panel = name;
  document.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("on", b.dataset.panel === name));
}

// ---------------------------------------------------------------- events
function bindChrome() {
  document.addEventListener("click", (e) => {
    const t = e.target;
    const cv = t.closest("[data-cv]");
    if (cv) {
      ctx();
      if (cv.dataset.cv === "go") startDesk();
      if (cv.dataset.cv === "reset") dialog("<h3>Chơi lại từ đầu?</h3><p>Mọi câu trả lời, ghim và ghi chú sẽ bị xoá.</p>", "Xoá và chơi lại", () => { resetAll(); setLevel(0, { quiet: true }); document.querySelector(".ghost-note").innerHTML = ""; showCover(); }, "Thôi");
      return;
    }
    const set = t.closest("[data-set]"); if (set) { ctx(); applySetting(set.dataset.set, Number(set.dataset.v)); return; }
    const doc = t.closest("[data-doc]"); if (doc) return openDoc(doc.dataset.doc);
    const go = t.closest("[data-goto]"); if (go) return openDoc(go.dataset.goto);
    const pin = t.closest("[data-pin]"); if (pin) return togglePin(pin.dataset.pin);
    const un = t.closest("[data-unpin]"); if (un) return togglePin(un.dataset.unpin);
    const act = t.closest("[data-act]");
    if (act) { ctx(); return ({ submit, hint, solve })[act.dataset.act](); }
    const pk = t.closest("[data-pick]"); if (pk) return setPicking(!picking, pk.dataset.pick);
    const ln = t.closest(".reader-body.picking .ln");
    if (ln && picking) {
      const r = resp(picking.qid);
      r[picking.partId] = ln.dataset.line; r[picking.partId + "Text"] = ln.textContent.trim();
      save(); sfx.pin(); picking = null;
      $(".reader-body").classList.remove("picking");
      markPickedLine(); renderInquiry(); toast("Đã chọn câu này.");
      if (isMobile()) showPanel("inquiry");
      return;
    }
    const top = t.closest("[data-top]");
    if (top) {
      const k = top.dataset.top;
      if (k === "cover") { cleanupMedia(); showCover(); }
      if (k === "settings") dialog(`<h3>Cài đặt</h3>${settingsHtml()}`, "Xong");
      return;
    }
    const tab = t.closest(".tabs [data-panel]"); if (tab) showPanel(tab.dataset.panel);
  });
  document.addEventListener("change", onField);
  document.addEventListener("input", (e) => {
    if (e.target.matches(".notes textarea")) { state.notes = e.target.value; save(); return; }
    if (e.target.matches("input[data-part]")) onField(e);
  });
  showPanel("reader");
}

function onField(e) {
  const el = e.target;
  if (!el.matches("[data-part]")) return;
  const q = currentQ(); if (!q) return;
  resp(q.id)[el.dataset.part] = el.value; save();
}

// expose for the smoke test only
window.__hdn = { state };

boot();
