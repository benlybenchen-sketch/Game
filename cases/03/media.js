// Case 03 widgets: the cầu cơ board, the Morse pad, the side-by-side comparison of the diary,
// the mirror behind bà Diệp's portrait and the Kiều line finder.
import { state, save } from "../../js/store.js";
import { ctx, sfx, morseKnocks, out } from "../../js/audio.js";
import { base } from "../../js/case.js";
import { jumpScare, level } from "../../js/dread.js";
import { MORSE, morse, telex, hexagrams } from "./cipher.js";
import { coName, hexName } from "./name.js";
import { diaryNow, diaryCopyHtml, diaryHtml } from "./diary.js";
import { edition } from "./kieu.js";

// ------------------------------------------------------------------ the sessions of 2004
// tokens: letters/digits, "_" back to the centre (a gap), "|" the cup circles the centre (a bigger gap),
// "." "-" " " "/" Morse knocks, "CO" / "KHONG".
const spell = (text) => text.split(" ").flatMap((w, i) => [...(i ? ["_"] : []), ...w]);
const nums = (groups) => groups.flatMap((g, i) => [...(i ? ["|"] : []), ...g.flatMap((n, k) => [...(k ? ["_"] : []), ...String(n)])]);
const hex = (text) => hexagrams(text).flatMap((h, i) => [...(i ? ["_"] : []), ...h.map((b) => (b ? "CO" : "KHONG"))]);

export const BOARDS = {
  n1: () => ({ date: "Chủ Nhật 7/11/2004 · 23:00", mode: "spell", tokens: spell("CHIJ LAN DDAAU"), early: true,
    intro: "Bà Dung thắp hai cây nến, úp cái chén sứ lên giữa bàn cơ. “Cháu đặt ngón trỏ lên đáy chén. Nhẹ thôi. Đừng đẩy. Bà đẩy là bà biết, cháu đẩy là cháu biết.”" }),
  n2: () => ({ date: "Thứ Hai 8/11/2004 · 23:00", mode: "knock", tokens: [...morse("EM LANHJ")],
    intro: "Con cơ không chạy. Nó nhấc lên khỏi mặt giấy một chút rồi gõ xuống, như có ai cầm chén gõ cửa. Có tiếng gõ ngắn. Có tiếng gõ kéo lê." }),
  n3: () => ({ date: "Thứ Ba 9/11/2004 · 23:00", mode: "spell", tokens: [...spell(coName()), "|", ...spell("TIMF AI YEEN TRAWNG ROIJ AO IM")], autoFrom: 0,
    intro: "Đêm nay con cơ chạy trước cả khi hai bà cháu đặt tay. Bà Dung rụt tay về, hỏi nhỏ: “Cháu có nói tên cháu cho ai trong nhà này đâu?”" }),
  n4: () => ({ date: "Thứ Tư 10/11/2004 · 23:00", mode: "digits", tokens: nums([[4, 1], [23, 26, 1], [10, 12, 3, 29]]),
    intro: "Con cơ bỏ hết các chữ cái. Nó chỉ chạy lên hàng số, rồi về giữa bàn, rồi lại lên hàng số. Khi nó chạy một vòng quanh giữa bàn, bà Dung nói: “Hết một chữ.”" }),
  n5: () => ({ date: "Thứ Năm 11/11/2004 · 23:00", mode: "digits", step: 0.55,
    tokens: nums([[1033, 4, 3], [1036, 1, 2], [1046, 8, 2], [1042, 2, 2], [1045, 1, 3], [1047, 4, 2], [1036, 7, 3], [1039, 3, 1], [1035, 3, 2], [1052, 4, 1], [1041, 2, 3], [1051, 4, 1], [1038, 8, 1], [1050, 1, 3], [1053, 3, 2]]),
    intro: "Ba con số, về giữa, ba con số. Y như sổ cơ năm 1971 Nghi ghi. Bà Dung cười: “Kiều. Thằng Khiêm đó. Nó thuộc Kiều tới số câu.”" }),
  n6: () => ({ date: "Thứ Sáu 12/11/2004 · 23:00", mode: "spell", tokens: spell(`${coName()} ${telex("Người mang tên em không phải em")}`.split("").reverse().join("")),
    autoFrom: 14, intro: "Con cơ chạy từ phải qua trái. Bà Dung đọc theo, rồi bỏ cuộc: “Nó đánh ngược. Toàn chữ vô nghĩa.” Giữa chừng bà rút tay khỏi chén." }),
  n7: () => ({ date: "Thứ Bảy 13/11/2004 · 23:00", mode: "hex", tokens: hex(hexName()), autoFrom: 0, scare: ["tay", "tay_scare"],
    intro: "Đêm cuối. Con cơ chỉ chạy qua lại giữa hai góc bàn: CÓ, KHÔNG, CÓ, KHÔNG. Cứ sáu lần nó về giữa bàn một lần. Bà Dung không đặt tay. Bà ngồi nhìn bạn, chén trà trước mặt bạn đã nguội." }),
};

/** Plays one recorded line (audio/03/<name>.mp3); returns the source node, or null. */
async function playClip(name) {
  const ac = ctx(); if (!ac) return null;
  try {
    const r = await fetch(`${base.audio}${name}.mp3`); if (!r.ok) return null;
    const src = ac.createBufferSource(); src.buffer = await ac.decodeAudioData(await r.arrayBuffer());
    src.connect(out()); src.start(); return src;
  } catch { return null; }
}

// ------------------------------------------------------------------ board layout (percent of the board)
const POS = (() => {
  const p = {};
  const row = (chars, y, x0, x1, bow) => [...chars].forEach((c, i, a) => { const u = i / (a.length - 1), x = x0 + (x1 - x0) * u; p[c] = [x, y - bow * (1 - (2 * u - 1) ** 2)]; });
  row("ABCDEFGHIJKLM", 36, 8, 92, 9);
  row("NOPQRSTUVWXYZ", 55, 8, 92, 9);
  row("1234567890", 69, 18, 82, 0);
  p.CO = [11, 11]; p.KHONG = [89, 11]; p.END = [50, 11]; p._ = [50, 86]; p["|"] = [50, 86];
  return p;
})();
const label = (k) => ({ CO: "CÓ", KHONG: "KHÔNG", END: "TẠM BIỆT" }[k] || k);

function transcript(mode, toks) {
  if (mode === "knock") return toks.map((t) => ({ ".": "·", "-": "—", " ": "  ", "/": "   /   " }[t])).join("");
  if (mode === "hex") return toks.map((t) => (t === "_" ? " | " : label(t))).join(" ").replace(/ \| /g, " │ ").replace(/\s+│\s+/g, "  │  ");
  if (mode === "digits") return toks.map((t) => (t === "_" ? " " : t === "|" ? "   ·   " : t)).join("");
  return toks.map((t) => (t === "_" ? " " : t === "|" ? "   " : t)).join("");
}

export function board(el, id) {
  const B = BOARDS[id]?.();
  if (!B) return;
  const key = "b_" + id;
  let idx = Math.min(state.board[key] || 0, B.tokens.length), hold = false, busy = false, speed = 1, timers = [], dead = false;
  const T = () => (B.step || (B.mode === "knock" ? 0.3 : 0.8)) / speed;

  el.innerHTML = `
  <div class="cb">
    <p class="cb-intro">${B.intro} <button class="btn btn--small btn--ghost" data-cb="say" title="Nghe bà Dung">🔊 Bà Dung</button></p>
    <div class="cb-date">${B.date}</div>
    <div class="cb-board" title="Giữ chuột (hoặc giữ ngón tay) trên bàn cơ để con cơ chạy">
      <div class="cb-candle cb-candle--l"></div><div class="cb-candle cb-candle--r"></div>
      ${Object.entries(POS).filter(([k]) => !"_|".includes(k)).map(([k, [x, y]]) => `<span class="cb-k ${k.length > 1 ? "cb-k--word" : ""}" style="left:${x}%;top:${y}%">${label(k)}</span>`).join("")}
      <span class="cb-home" style="left:${POS._[0]}%;top:${POS._[1]}%"></span>
      <div class="cb-cup"><i></i></div>
    </div>
    <div class="cb-ctl">
      <span class="cb-hint">Giữ chuột trên bàn cơ (điện thoại: giữ ngón tay) để con cơ chạy. Buông tay, con cơ dừng.</span>
      <button class="btn btn--small" data-cb="speed">×1</button>
      <button class="btn btn--small btn--ghost" data-cb="reset">Xem lại từ đầu</button>
    </div>
    <div class="cb-row"><span>Hàng mã bạn chép:</span><code class="cb-out"></code></div>
    <p class="cb-note" aria-live="polite"></p>
  </div>`;
  const $ = (s) => el.querySelector(s);
  const cup = $(".cb-cup"), boardEl = $(".cb-board");

  const place = (tok, dur = 0) => {
    const [x, y] = POS[tok] || POS._;
    cup.style.transitionDuration = `${dur}s`;
    cup.style.left = `${x}%`; cup.style.top = `${y}%`;
  };
  const render = () => {
    $(".cb-out").textContent = transcript(B.mode, B.tokens.slice(0, idx)) || "…";
    el.querySelector(".cb").classList.toggle("done", idx >= B.tokens.length);
  };
  const note = (t) => { $(".cb-note").textContent = t; };
  const auto = () => B.autoFrom != null && idx >= B.autoFrom;

  function step(tok, done) {
    const t = T();
    if (B.mode === "knock") {
      cup.classList.remove("tap", "drag"); void cup.offsetWidth;
      if (tok === "." || tok === "-") { cup.classList.add(tok === "." ? "tap" : "drag"); morseKnocks(tok, { unit: 0.16 / speed, kind: "cup" }); }
      timers.push(setTimeout(done, (tok === "-" ? t * 2.4 : tok === "/" ? t * 2.6 : t * 1.4) * 1000));
      return;
    }
    const circle = tok === "|";
    place(tok, circle ? t * 1.4 : t);
    if (circle) cup.classList.add("circle");
    sfx.slide(circle ? t * 1.4 : t);
    timers.push(setTimeout(() => { cup.classList.remove("circle"); if (!"_|".includes(tok)) sfx.clink(); done(); }, (circle ? t * 1.4 : t) * 1000));
  }

  function pump() {
    if (busy || dead) return;
    if (idx >= B.tokens.length) return finish();
    if (!hold && !auto()) return;
    if (auto() && !hold) { note(B.mode === "hex" ? "Không ai chạm vào con cơ. Nó vẫn chạy." : "Bà Dung đã buông tay. Bạn cũng không chạm vào. Con cơ vẫn chạy."); el.querySelector(".cb").classList.add("alive"); }
    busy = true;
    step(B.tokens[idx], () => {
      idx++; state.board[key] = Math.max(state.board[key] || 0, idx); save(); render(); busy = false;
      timers.push(setTimeout(pump, (B.mode === "knock" ? 60 : 260) / speed));
    });
  }

  let finished = false;
  function finish() {
    if (finished) return; finished = true;
    if (B.mode !== "knock") { place("END", 1.2); sfx.slide(1.2); timers.push(setTimeout(() => { sfx.clink(); place("_", 1.4); }, 1500)); }
    note("Con cơ dừng ở TẠM BIỆT rồi trôi về giữa bàn. Bạn chép lại hàng mã ở trên.");
    if (B.scare && !state.scared[B.scare[0]]) timers.push(setTimeout(() => jumpScare(B.scare[0], B.scare[1], { hold: 3500, main: true }), 2600));
  }

  const down = (e) => { if (e.button > 0) return; ctx(); hold = true; boardEl.classList.add("held"); if (idx < B.tokens.length) note(""); pump(); e.preventDefault(); };
  const up = () => { hold = false; boardEl.classList.remove("held"); if (!auto() && idx < B.tokens.length && idx > 0) note("Bạn buông tay. Con cơ dừng lại."); };
  boardEl.addEventListener("pointerdown", down);
  window.addEventListener("pointerup", up);
  boardEl.addEventListener("pointerleave", up);
  boardEl.addEventListener("pointercancel", up);
  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cb]"); if (!b) return;
    ctx(); sfx.click();
    if (b.dataset.cb === "say") { say(); return; }
    if (b.dataset.cb === "speed") { speed = speed === 1 ? 2 : 1; b.textContent = `×${speed}`; }
    if (b.dataset.cb === "reset") { timers.forEach(clearTimeout); timers = []; busy = false; finished = false; idx = 0; place("_", 0.6); render(); note(""); el.querySelector(".cb").classList.remove("alive"); }
  });

  // bà Dung speaks her line the first time the board is opened (and on the button)
  let voice = null;
  const say = async () => { try { voice?.stop(); } catch { /* ended */ } voice = await playClip("ba_" + id); if (dead) try { voice?.stop(); } catch { /* ended */ } };
  if (!state.board[key + "_v"]) { state.board[key + "_v"] = 1; save(); timers.push(setTimeout(say, 700)); }

  // where the cup stands now
  place(idx > 0 && idx < B.tokens.length && B.mode !== "knock" ? B.tokens[idx - 1] : "_");
  render();
  if (idx >= B.tokens.length) note("Buổi cơ đã xong. Bấm “Xem lại từ đầu” nếu muốn xem con cơ chạy lại.");
  // the cup that moves before anyone touches it
  else if (B.early && idx === 0 && !state.board[key + "_e"]) timers.push(setTimeout(() => {
    state.board[key + "_e"] = 1; save();
    note("Bạn chưa kịp đặt tay. Con cơ tự trượt đi một chữ.");
    busy = true; step(B.tokens[0], () => { idx = Math.max(idx, 1); state.board[key] = idx; save(); render(); busy = false; });
  }, 2200));
  else if (auto() && idx < B.tokens.length) timers.push(setTimeout(pump, 2400));

  return () => { dead = true; timers.forEach(clearTimeout); window.removeEventListener("pointerup", up); try { voice?.stop(); } catch { /* ended */ } };
}

// ------------------------------------------------------------------ Morse pad (Tùng's notebook)
export function morsepad(el) {
  let kind = "cup";
  el.innerHTML = `<div class="mpad">
    <div class="mpad-head">Bấm một chữ để nghe nó gõ.
      <button class="btn btn--small on" data-k="cup">Chén gõ mặt bàn</button><button class="btn btn--small" data-k="heel">Gót guốc gõ sàn</button></div>
    <div class="mpad-keys">${Object.keys(MORSE).map((c) => `<button class="mpad-key" data-m="${c}"><b>${c}</b><span>${MORSE[c].replace(/\./g, "·").replace(/-/g, "—")}</span></button>`).join("")}</div></div>`;
  el.addEventListener("click", (e) => {
    const k = e.target.closest("[data-k]");
    if (k) { kind = k.dataset.k; el.querySelectorAll("[data-k]").forEach((b) => b.classList.toggle("on", b === k)); return; }
    const m = e.target.closest("[data-m]"); if (!m) return;
    ctx(); morseKnocks(MORSE[m.dataset.m], { kind, unit: kind === "heel" ? 0.22 : 0.16 });
  });
}

// ------------------------------------------------------------------ the copy and the original, side by side (no highlight)
export function compare(el) {
  el.innerHTML = `<div class="cmp"><button class="btn" data-cmp>⇆ Đối chiếu bản chép với bản bà Dung đưa hôm nay</button><div class="cmp-cols" hidden>
    <div><div class="cmp-head">Bản chép của bạn · đêm 7/11</div><div class="hand mine">${diaryCopyHtml()}</div></div>
    <div><div class="cmp-head">Bản gốc bà Dung đưa · hôm nay</div><div class="diary">${diaryHtml(diaryNow())}</div></div></div></div>`;
  el.querySelector("[data-cmp]").addEventListener("click", () => { sfx.paper(); const c = el.querySelector(".cmp-cols"); c.hidden = !c.hidden; });
}

// ------------------------------------------------------------------ the mirror
export function mirror(el, id) {
  const src = el.nextElementSibling?.classList.contains("mirror-src") ? el.nextElementSibling : null;
  el.innerHTML = `<button class="btn" data-mir>🪞 Dựng tấm gương của bà Diệp cạnh trang giấy</button><div class="mir" hidden></div>`;
  el.querySelector("[data-mir]").addEventListener("click", () => {
    ctx(); sfx.paper();
    const m = el.querySelector(".mir");
    m.hidden = !m.hidden;
    if (!m.hidden) {
      m.innerHTML = `<div class="mir-glass"><div class="mir-text">${src ? src.innerHTML : ""}</div></div>`;
      if (level() >= 3 && !state.scared.guong) setTimeout(() => { if (!m.hidden) jumpScare("guong", "guong_scare", { hold: 5000, main: true }); }, 2600);
    }
  });
}

// ------------------------------------------------------------------ Kiều line finder
export function kieu(el) {
  el.innerHTML = `<div class="kieu-find"><label>Cuốn <select data-ed><option value="khiem">của Khiêm (chú giải, đủ 3254 câu)</option><option value="hue">bản Huế 1968 (của Lan)</option></select></label>
    <label>Câu số <input data-n inputmode="numeric" size="5" placeholder="1033"></label><div class="kieu-line">…</div></div>`;
  const show = () => {
    const ed = el.querySelector("[data-ed]").value, n = Number(el.querySelector("[data-n]").value);
    const t = edition(ed).get(n);
    el.querySelector(".kieu-line").innerHTML = !n ? "…" : t ? `<b>${n}</b> · ${t.replace(/[,.?]$/, "")}<br><small>${t.replace(/[,.?]/g, "").split(" ").map((w, i) => `<span>${i + 1}:${w}</span>`).join(" ")}</small>` : "Câu này không nằm trong những trang được chép lại.";
  };
  el.addEventListener("input", show); el.addEventListener("change", show);
}
