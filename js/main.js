// The investigation desk: cover, folder list, document reader, the notebook of staged questions,
// unlocking new folders, the ending. Loaded by index.html as an ES module.
import { state, save, resetAll, loadState, peek } from "./store.js";
import { C, loadCase, CASE_ID, base } from "./case.js";
import { CASES } from "../cases/list.js";
import { decode, checkQuestion } from "./answer.js";
import { mountMedia } from "./media.js";
import { ctx, sfx, setSound, ambience } from "./audio.js";
import { setLevel, level, jumpScare } from "./dread.js";

// Data of the open case (set by openCase).
let DOCS = [], QUESTIONS = [], META = {}, START_CLOCK = "", END_CLOCK = "", SECRETS = {}, byId = new Map(), FOLDERS = [], WRONG = [];

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const finished = () => state.stage >= QUESTIONS.length;
// d.fail: shown only after a lost run (META.fatal); d.secret: only in the closed case of a flawless run.
const flawless = () => !Object.values(state.tries || {}).some(Boolean) && !Object.keys(state.peeked || {}).length;
const visibleDocs = () => DOCS.filter((d) => d.fail ? !!state.failed : d.secret ? finished() && flawless() : d.stage <= state.stage);
const currentQ = () => QUESTIONS[state.stage] || null;
const resp = (qid) => (state.resp[qid] ||= {});
const isMobile = () => matchMedia("(max-width: 980px)").matches;
let picking = null;          // { qid, partId } while choosing a statement line
let cleanupMedia = () => {};

// ---------------------------------------------------------------- boot
function boot() {
  bindChrome();
  const id = new URLSearchParams(location.search).get("case");
  if (id && CASES.some((c) => c.id === id)) openCase(id); else showHome();
}

/** Loads a case and shows its cover. */
async function openCase(id) {
  cleanupMedia();
  await loadCase(id);
  ({ DOCS, QUESTIONS, META, START_CLOCK, END_CLOCK } = C);
  SECRETS = decode(C.SECRET, C.SECRET_KEY);
  byId = new Map(DOCS.map((d) => [d.id, d]));
  FOLDERS = META.folders; WRONG = META.wrong;
  loadState(id);
  picking = null;
  document.body.dataset.case = id;
  document.title = `${META.title} · ${META.series}`;
  history.replaceState(null, "", `?case=${id}`);
  document.querySelector(".brand").innerHTML = `<b>${META.series}</b> · ${META.title}`;
  document.querySelector(".ghost-note").innerHTML = "";
  setLevel(state.started ? dreadFor(state.stage) : 0, { quiet: true });
  showCover();
}

// ---------------------------------------------------------------- case list
function showHome() {
  cleanupMedia();
  document.body.dataset.screen = "home";
  document.body.dataset.case = "";
  document.title = "Hồ sơ Nửa Đêm";
  history.replaceState(null, "", location.pathname);
  $("#desk").hidden = true;
  const c = $("#cover");
  c.hidden = false;
  c.innerHTML = `
  <div class="home">
    <header class="home-head"><div class="cover-series">Series game hồ sơ điều tra kinh dị</div><h1 class="cover-title">Hồ sơ Nửa Đêm</h1>
      <p class="cover-blurb">Mỗi hồ sơ là một vụ án riêng, một bộ nhân vật riêng. Tự đọc giấy tờ, nghe băng, xem phim, ghim bằng chứng và phá án. Càng gần sự thật, đêm càng dài.</p></header>
    <div class="home-list">${CASES.map((k) => {
      const p = peek(k.id), status = p.failed ? "THẤT BẠI · mở lại để điều tra lại" : p.stage >= k.questions ? "Đã khép hồ sơ" : p.started ? `Đang điều tra · trọng điểm ${p.stage + 1}/${k.questions}` : "Chưa mở";
      return `<button class="case-card" data-case="${k.id}" style="--cover:url(../img/${k.id}/${k.cover}.jpg)">
        <span class="case-art"></span>
        <span class="case-body"><span class="cover-series">${k.number} · ${k.place}</span><b class="case-title">${k.title}</b>
        <span class="case-blurb">${k.short}</span>
        <span class="case-facts">${k.level} · ${k.time} · ${k.questions} trọng điểm</span><span class="case-status">${status}</span></span></button>`;
    }).join("")}</div>
    <p class="credit">Truyện và nhân vật hoàn toàn hư cấu. Có yếu tố kinh dị, tâm linh: nên đeo tai nghe.</p>
  </div>`;
}

// ---------------------------------------------------------------- cover
function showCover() {
  document.body.dataset.screen = "cover";
  $("#desk").hidden = true;
  const c = $("#cover");
  c.hidden = false;
  const resume = state.started && !finished() && !state.failed;
  c.innerHTML = `
  <div class="cover">
    <div class="cover-art" style="background-image:url(${base.img}${META.cover}.jpg)"></div>
    <div class="cover-card">
      <button class="link back-home" data-cv="home">← Tất cả hồ sơ</button>
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
        <li>Trả lời đúng thì hồ sơ mới mở ra. Mỗi lần như thế, đêm lại khuya hơn… và quanh bạn có thêm thứ gì đó.</li>
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
  if (META.contract && !state.signed) return contract();
  if (!state.started) { state.started = true; save(); setLevel(0); }
  document.body.dataset.screen = "desk";
  $("#cover").hidden = true;
  $("#desk").hidden = false;
  renderAll();
  openDoc(state.lastDoc && byId.has(state.lastDoc) && byId.get(state.lastDoc).stage <= state.stage ? state.lastDoc : META.firstDoc);
}

/** A case can open with a contract the player signs with their own name (kept only in this browser). */
function contract() {
  let name = state.player || "";
  dialog(META.contract.html(), "Ký", () => {
    state.player = name.normalize("NFC").replace(/[^\p{L}\s'-]/gu, "").replace(/\s+/g, " ").trim().slice(0, 40);
    state.signed = true; save(); sfx.stamp();
    startDesk();
  });
  const inp = $("#dialog input[data-sign]");
  if (inp) { inp.value = name; inp.addEventListener("input", () => { name = inp.value; }); setTimeout(() => inp.focus(), 50); }
}

// ---------------------------------------------------------------- render
function renderAll() { renderFolder(); renderInquiry(); renderTop(); $(".notes textarea").value = state.notes; }

function renderTop() {
  const clock = finished() ? END_CLOCK : state.stage === 0 ? START_CLOCK : QUESTIONS[state.stage - 1].clock;
  $(".top-clock").textContent = clock;
  $(".top-clock").title = `Giờ trong truyện: ${META.place}`;
  $(".top-progress").textContent = state.failed ? "THẤT BẠI" : finished() ? "Đã khép hồ sơ" : `Trọng điểm ${state.stage + 1}/${QUESTIONS.length}`;
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
    ${pinPart && !state.failed && d.stage < QUESTIONS.length ? `<button class="btn ${pinned ? "btn--on" : ""}" data-pin="${id}">📌 ${pinned ? "Bỏ ghim" : "Ghim làm bằng chứng"}</button>` : ""}`;
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
    if (i === state.stage) return state.failed ? failedCard(q, i) : openCard(q, i);
    return `<div class="q-card locked"><div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">· · ·</span></div></div>`;
  }).join("");
  $(".inq").innerHTML = `<h2>Sổ công tác</h2>${html}${finished() ? `<div class="q-card end"><b>Hồ sơ đã khép.</b> Đọc thư mục “Kết thúc” bên trái.</div>` : ""}`;
}

function solvedCard(q, i) {
  return `<div class="q-card solved">
    <span class="q-stamp ${state.peeked[q.id] ? "peek" : ""}">${state.peeked[q.id] ? "XEM GIẢI" : "ĐÃ RÕ"}</span>
    <div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">${q.title}</span></div>
    <details><summary>${META.solutionLabel || `Lời giải của ${META.solver || "anh Quân"}`}</summary><p>${esc(SECRETS[q.id].solution)}</p></details>
  </div>`;
}

function failedCard(q, i) {
  return `<div class="q-card failed"><span class="q-stamp fail">THẤT BẠI</span>
    <div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">${q.title}</span></div>
    <p>${META.fatal?.lost || "Quyết định của bạn đã được thực hiện. Không thể rút lại."}</p>
    <div class="q-actions"><button class="btn btn--red" data-cv="reset">Mở lại hồ sơ từ đầu</button></div></div>`;
}

function partHtml(q, p) {
  const r = resp(q.id), v = r[p.id] ?? "";
  if (p.type === "order") {
    if (!Array.isArray(r[p.id]) || r[p.id].length !== p.items.length) { r[p.id] = p.items.map((it) => it.id); save(); }
    const label = (id) => p.items.find((it) => it.id === id)?.text || id;
    return `<div class="part"><span>${p.label}</span><ol class="order">${r[p.id].map((id, k) => `<li><span>${esc(label(id))}</span>
      <button class="x" data-ord="${p.id}" data-k="${k}" data-dir="-1" ${k === 0 ? "disabled" : ""} title="Lên">▲</button><button class="x" data-ord="${p.id}" data-k="${k}" data-dir="1" ${k === p.items.length - 1 ? "disabled" : ""} title="Xuống">▼</button></li>`).join("")}</ol></div>`;
  }
  if (p.type === "spot") return `<div class="part"><span>${p.label}</span>
    ${r[p.id] ? `<blockquote class="picked">${esc(r[p.id + "Text"] || r[p.id])}</blockquote>` : `<p class="small muted">${p.how || "Làm trong tài liệu."}</p>`}
    ${p.doc ? `<button class="btn btn--small" data-goto="${p.doc}">Mở “${esc(byId.get(p.doc)?.label || p.doc)}”</button>` : ""}</div>`;
  if (p.type === "set") {
    const got = Array.isArray(r[p.id]) ? r[p.id] : [], txt = r[p.id + "Text"] || {};
    return `<div class="part"><span>${p.label}</span><ul class="slots">
      ${Array.from({ length: p.count }, (_, k) => got[k]
        ? `<li class="full"><span>${esc(txt[got[k]] || got[k])}</span><button class="x" data-unset="${p.id}" data-v="${got[k]}" title="Bỏ">×</button></li>`
        : `<li class="empty">${p.how || "làm trong tài liệu"}</li>`).join("")}</ul>
      ${p.doc ? `<button class="btn btn--small" data-goto="${p.doc}">Mở “${esc(byId.get(p.doc)?.label || p.doc)}”</button>` : ""}</div>`;
  }
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
  return `<div class="q-card open ${q.fatal ? "fatal" : ""}" data-q="${q.id}">
    <div class="q-head"><span class="q-no">Trọng điểm ${i + 1}</span><span class="q-title">${q.title}</span></div>
    ${q.fatal ? `<div class="fatal-warn"><b>QUYẾT ĐỊNH KHÔNG THỂ RÚT LẠI</b><span>Chỉ được trả lời một lần. Không có gợi ý, không có lời giải. Sai là thua.</span></div>` : ""}
    <p class="q-ask">${q.ask}</p>
    ${q.parts.map((p) => partHtml(q, p)).join("")}
    <div class="q-actions">
      <button class="btn btn--red" data-act="submit">${q.fatal ? "Quyết định" : "Nộp kết luận"}</button>
      ${q.fatal ? "" : `<button class="btn btn--ghost" data-act="hint" ${shown >= s.hints.length ? "disabled" : ""}>Gợi ý (${shown}/${s.hints.length})</button>
      <button class="btn btn--ghost" data-act="solve">Lời giải</button>`}
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
  if (q.fatal) return decide(q, res.ok);
  if (res.ok) return solved(q, false);
  const n = (state.tries[q.id] = (state.tries[q.id] || 0) + 1); save();
  let msg = META.wrongFor ? META.wrongFor(n) : WRONG[(n - 1) % WRONG.length];   // a case may word its own reaction
  if (n >= 3) msg += ` (Đúng ${res.right}/${res.total} mục.)`;
  fb.textContent = msg; fb.className = "q-feedback bad"; sfx.wrong();
  if (level() >= 2 && Math.random() < 0.35) setTimeout(() => sfx.whisper(1.4), 700);
}

/** The one-shot question of a case with META.fatal: a warning first, then it is recorded before anything else happens. */
function decide(q, ok) {
  dialog(META.fatal.warn, "Tôi đã sẵn sàng", () => {
    if (ok) return solved(q, false);
    const part = q.parts.find((p) => p.type === "choice") || q.parts[0];
    state.failed = { q: q.id, choice: resp(q.id)[part.id] || "" };
    picking = null; save();
    sfx.wrong();
    renderAll();
    setLevel(4);
    const [key, pic, hold] = META.fatal.scare;
    jumpScare(key, pic, { main: true, hold });
    setTimeout(() => dialog(META.fatal.html(), "Đọc biên bản", () => openDoc(META.fatal.open)), hold + 1800);
  }, "Tôi đọc lại hồ sơ");
}

function solved(q, peeked) {
  if (peeked) state.peeked[q.id] = true;
  picking = null;
  state.stage++;
  save();
  sfx.stamp(); setTimeout(() => sfx.gong(), 250);
  setLevel(dreadFor(state.stage));
  renderAll();
  if (finished()) {
    dialog(META.finale.html, "Đọc hồ sơ kết thúc", () => { openDoc(META.finale.open); fireScare(state.stage); });
    return;
  }
  const clock = q.clock, memo = typeof q.memo === "function" ? q.memo() : q.memo;
  dialog(`<h3>${clock} · ${META.narrator || "Anh Quân"}</h3>${memo.split("\n").map((l) => `<p>${l.trim()}</p>`).join("")}<p class="small muted">Thư mục mới: “${FOLDERS[state.stage]}”.</p>`,
    "Mở hồ sơ mới", () => {
      const first = DOCS.find((d) => d.stage === state.stage);
      if (first) openDoc(first.id);
      fireScare(state.stage);
    });
}

/** Jump scares tied to a stage opening: META.scares = { stage: [key, picture, delayMs?] } */
function fireScare(stage) {
  const sc = (META.scares || {})[stage];
  if (sc) setTimeout(() => jumpScare(sc[0], sc[1], sc[3] || {}), sc[2] ?? 2500);
}

/** Dread level for a stage: META.dreadLevels if given, else 0..4, and 5 (calm) once the case is closed. */
function dreadFor(stage) {
  if (stage >= QUESTIONS.length) return 5;
  return META.dreadLevels ? META.dreadLevels[stage] : Math.min(stage, 4);
}

function hint() {
  const q = currentQ(), s = SECRETS[q.id];
  state.hints[q.id] = Math.min(s.hints.length, (state.hints[q.id] || 0) + 1); save(); renderInquiry();
}

function solve() {
  const q = currentQ();
  dialog(`<h3>Xem lời giải?</h3><p>${META.solveIntro || `${cap(META.solver || "anh Quân")} sẽ viết ra toàn bộ suy luận cho trọng điểm này, và bạn đi tiếp.`} Trọng điểm sẽ bị đóng dấu “XEM GIẢI”.</p>`,
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
      if (cv.dataset.cv === "home") showHome();
      if (cv.dataset.cv === "reset") dialog("<h3>Chơi lại từ đầu?</h3><p>Mọi câu trả lời, ghim và ghi chú sẽ bị xoá.</p>", "Xoá và chơi lại", () => { resetAll(); setLevel(0, { quiet: true }); document.querySelector(".ghost-note").innerHTML = ""; showCover(); }, "Thôi");
      return;
    }
    const kc = t.closest(".case-card");
    if (kc && document.body.dataset.screen === "home") { ctx(); openCase(kc.dataset.case); return; }
    const set = t.closest("[data-set]"); if (set) { ctx(); applySetting(set.dataset.set, Number(set.dataset.v)); return; }
    const doc = t.closest("[data-doc]"); if (doc) return openDoc(doc.dataset.doc);
    const go = t.closest("[data-goto]"); if (go) return openDoc(go.dataset.goto);
    const pin = t.closest("[data-pin]"); if (pin) return togglePin(pin.dataset.pin);
    const un = t.closest("[data-unpin]"); if (un) return togglePin(un.dataset.unpin);
    const od = t.closest("[data-ord]");
    if (od) {
      const q = currentQ(), arr = resp(q.id)[od.dataset.ord], k = Number(od.dataset.k), j = k + Number(od.dataset.dir);
      if (arr && j >= 0 && j < arr.length) { [arr[k], arr[j]] = [arr[j], arr[k]]; save(); sfx.paper(); renderInquiry(); }
      return;
    }
    const us = t.closest("[data-unset]"); if (us) return setAnswer({ part: us.dataset.unset, value: us.dataset.v, remove: true });
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

/**
 * Widgets inside documents (map, torch, torn letter, calendar…) answer through a "hdn:answer" event:
 * { part, value, text, remove? }. A "spot" part takes the value; a "set" part adds or removes it.
 */
function setAnswer({ part: pid, value, text, remove }) {
  const q = currentQ(); if (!q || state.failed) return false;
  const part = q.parts.find((p) => p.id === pid); if (!part) return false;
  const r = resp(q.id);
  if (part.type === "set") {
    const arr = Array.isArray(r[pid]) ? r[pid] : (r[pid] = []), txt = (r[pid + "Text"] ||= {});
    const k = arr.indexOf(value);
    if (k >= 0 || remove) { if (k >= 0) arr.splice(k, 1); toast("Đã bỏ chi tiết này."); }
    else if (arr.length >= part.count) { toast(`Đã đủ ${part.count} chi tiết. Bỏ bớt một cái trong sổ công tác trước.`); return false; }
    else { arr.push(value); txt[value] = text || value; sfx.pin(); toast("Đã ghi vào sổ công tác."); }
  } else { r[pid] = value; r[pid + "Text"] = text || value; sfx.pin(); toast("Đã ghi vào sổ công tác."); }
  save(); renderInquiry();
  document.dispatchEvent(new CustomEvent("hdn:answered", { detail: { part: pid } }));
  return true;
}
document.addEventListener("hdn:answer", (e) => setAnswer(e.detail));

function onField(e) {
  const el = e.target;
  if (!el.matches("[data-part]")) return;
  const q = currentQ(); if (!q) return;
  resp(q.id)[el.dataset.part] = el.value; save();
}

// expose for the smoke test only
window.__hdn = { state };

boot();
