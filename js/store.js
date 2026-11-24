// Saved progress, one slot per case (localStorage), plus player settings shared by all cases.
// Every read/write is guarded: private windows may block storage.
const SETTINGS_KEY = "hsnd.settings";
const caseKey = (id) => `hsnd.case.${id}`;
const LEGACY = { "01": "ho-doi-nguoi.v1" };   // case 01 was released before the case list existed

const freshSettings = () => ({ sound: true, fear: "full", flash: true, voice: false, vol: { music: 1, voice: 1 }, guides: {} });
const fresh = () => ({
  started: false, stage: 0, resp: {}, seen: {}, heard: {}, plays: {}, hints: {}, peeked: {}, tries: {}, timeLeft: null, timeout: false, timeouts: 0,
  notes: "", lastDoc: null, scared: {}, board: {}, letters: {}, player: "", signed: false, failed: null, runs: 0, endings: [], best: null,
  visits: {}, confronted: {}, wary: {}, branch: null,   // case 08 on: places visited (place -> stage), cross-examinations won, witnesses on guard, mid-case choice
});

const read = (k) => { try { const v = JSON.parse(localStorage.getItem(k)); return v && typeof v === "object" ? v : null; } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } };

/** Progress of the open case, with the shared settings mixed in (state.sound, state.fear, ...). */
export const state = Object.assign(fresh(), freshSettings(), read(SETTINGS_KEY) || {});
let current = null;

export function loadState(id) {
  current = id;
  const saved = read(caseKey(id)) || (LEGACY[id] && read(LEGACY[id])) || {};
  const settings = { ...freshSettings(), ...(read(SETTINGS_KEY) || {}) };
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, fresh(), saved, settings);
}

export function save() {
  const s = {}, p = {};
  for (const [k, v] of Object.entries(state)) (k in freshSettings() ? s : p)[k] = v;
  write(SETTINGS_KEY, s);
  if (current) write(caseKey(current), p);
}

/** Progress summary of any case without opening it (for the case list). */
export function peek(id) {
  const p = read(caseKey(id)) || (LEGACY[id] && read(LEGACY[id])) || {};
  return { started: !!p.started, stage: p.stage || 0, failed: !!p.failed || !!p.timeout, endings: Array.isArray(p.endings) ? p.endings.length : 0 };
}

/** Starts the open case over, keeping the settings and the endings already reached. After a lost run (state.failed) the read marks are kept too. */
export function resetAll() {
  const settings = { sound: state.sound, fear: state.fear, flash: state.flash, voice: state.voice, vol: state.vol, guides: state.guides };
  const keep = { endings: state.endings || [], best: state.best || null, timeouts: state.timeouts || 0, ...(state.failed ? { seen: state.seen, runs: (state.runs || 0) + 1 } : {}) };
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, fresh(), settings, keep);
  save();
}

// ---------------------------------------------------------------- backup code (move progress to another browser or device)
const fnv = (str) => { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return (h >>> 0).toString(16).padStart(8, "0"); };
const OWN = (k) => k === SETTINGS_KEY || k.startsWith("hsnd.case.") || Object.values(LEGACY).includes(k);
/** Every case's progress and the settings as one text code: "HSND1.<base64>.<check>". */
export function exportCode() {
  const all = {};
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (OWN(k)) all[k] = localStorage.getItem(k); } } catch { /* blocked */ }
  const json = JSON.stringify({ v: 1, at: new Date().toISOString().slice(0, 10), all });
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return `HSND1.${b64}.${fnv(b64)}`;
}
/** Reads a code made by exportCode. Returns { ok, n, at } or { ok: false, why }; writes the progress only when ok. */
export function importCode(code) {
  const m = /^HSND1\.([A-Za-z0-9+/=]+)\.([0-9a-f]{8})$/.exec(String(code || "").replace(/\s+/g, ""));
  if (!m) return { ok: false, why: "Mã không đúng dạng. Hãy dán nguyên cả đoạn, bắt đầu bằng HSND1." };
  if (fnv(m[1]) !== m[2]) return { ok: false, why: "Mã bị thiếu hoặc sai một vài ký tự. Hãy chép lại cả đoạn." };
  let data; try { data = JSON.parse(decodeURIComponent(escape(atob(m[1])))); } catch { return { ok: false, why: "Không đọc được mã." }; }
  const keys = Object.keys(data.all || {}).filter(OWN);
  try { for (const k of keys) localStorage.setItem(k, data.all[k]); } catch { return { ok: false, why: "Trình duyệt này không cho lưu dữ liệu (cửa sổ ẩn danh?)." }; }
  return { ok: true, n: keys.filter((k) => k.startsWith("hsnd.case.")).length, at: data.at };
}
