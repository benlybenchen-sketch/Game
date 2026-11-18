// Saved progress (localStorage). Every read/write is guarded: private windows may block storage.
const KEY = "ho-doi-nguoi.v1";

const fresh = () => ({
  started: false,
  stage: 0,          // index of the open question; QUESTIONS.length = case closed
  resp: {},          // answers typed per question
  seen: {},          // doc id -> true once opened
  heard: {},         // tape id + mode -> furthest second heard
  plays: {},         // tape id -> number of times play was pressed
  hints: {},         // question id -> hints shown
  peeked: {},        // question id -> solution used
  tries: {},         // question id -> wrong tries
  notes: "",
  lastDoc: null,
  scared: {},        // one-shot scares already shown
  sound: true,
  fear: "full",      // "soft" | "full"
  flash: true,       // allow fast flashes
  voice: false,      // read tape lines aloud with the browser voice
});

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && typeof s === "object") return Object.assign(fresh(), s);
  } catch { /* storage blocked */ }
  return fresh();
}

export const state = load();

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

/** Starts the case over, keeping the player's settings. */
export function resetAll() {
  const keep = { sound: state.sound, fear: state.fear, flash: state.flash, voice: state.voice };
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, fresh(), keep);
  save();
}
