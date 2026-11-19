// Saved progress, one slot per case (localStorage), plus player settings shared by all cases.
// Every read/write is guarded: private windows may block storage.
const SETTINGS_KEY = "hsnd.settings";
const caseKey = (id) => `hsnd.case.${id}`;
const LEGACY = { "01": "ho-doi-nguoi.v1" };   // case 01 was released before the case list existed

const freshSettings = () => ({ sound: true, fear: "full", flash: true, voice: false });
const fresh = () => ({
  started: false, stage: 0, resp: {}, seen: {}, heard: {}, plays: {}, hints: {}, peeked: {}, tries: {},
  notes: "", lastDoc: null, scared: {}, board: {}, letters: {}, player: "", signed: false,
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
  return { started: !!p.started, stage: p.stage || 0 };
}

/** Starts the open case over, keeping the settings. */
export function resetAll() {
  const settings = { sound: state.sound, fear: state.fear, flash: state.flash, voice: state.voice };
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, fresh(), settings);
  save();
}
