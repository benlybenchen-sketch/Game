// Every sound in the game is synthesized with the Web Audio API: rain, drone, drips, knocks,
// heartbeat, whispers, a child's humming, and the speech-like "voices" on the tapes. No audio files.
import { state } from "./store.js";

let ac = null, master = null, noiseBuf = null, verb = null;
const amb = { on: false, nodes: null, timers: [] };

export function ctx() {
  if (!ac) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    master = ac.createGain();
    master.gain.value = state.sound ? 1 : 0;
    master.connect(ac.destination);
  }
  if (ac.state === "suspended") ac.resume();
  return ac;
}
export const out = () => (ctx(), master);

export function setSound(on) {
  if (master) master.gain.setTargetAtTime(on ? 1 : 0, ac.currentTime, 0.05);
}

function noise() {
  if (!noiseBuf) {
    noiseBuf = ac.createBuffer(1, ac.sampleRate * 3, ac.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return noiseBuf;
}

/** A dark hall reverb made from decaying noise. */
export function reverb() {
  if (!ctx()) return null;
  if (!verb) {
    const len = ac.sampleRate * 3.2, buf = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    verb = ac.createConvolver(); verb.buffer = buf;
    const g = ac.createGain(); g.gain.value = 0.55;
    verb.connect(g).connect(master);
  }
  return verb;
}

function env(g, t, a, peak, d) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}

function noiseHit({ when = 0, dur = 0.1, freq = 800, q = 1, type = "bandpass", gain = 0.3, dest = master, pan = 0 }) {
  if (!ctx()) return;
  const t = ac.currentTime + when;
  const s = ac.createBufferSource(); s.buffer = noise();
  const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ac.createGain(); env(g, t, 0.004, gain, dur);
  const p = ac.createStereoPanner ? ac.createStereoPanner() : null;
  s.connect(f).connect(g);
  if (p) { p.pan.value = pan; g.connect(p).connect(dest); } else g.connect(dest);
  s.start(t, Math.random() * 2); s.stop(t + dur + 0.05);
  return s;
}

function tone({ when = 0, freq = 440, to = null, dur = 0.3, type = "sine", gain = 0.2, dest = master, attack = 0.01 }) {
  if (!ctx()) return;
  const t = ac.currentTime + when;
  const o = ac.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
  if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
  const g = ac.createGain(); env(g, t, attack, gain, dur);
  o.connect(g).connect(dest); o.start(t); o.stop(t + attack + dur + 0.05);
  return o;
}

// ---------- desk sounds ----------
export const sfx = {
  paper() { noiseHit({ dur: 0.16, freq: 2400, q: 0.7, gain: 0.12 }); noiseHit({ when: 0.07, dur: 0.12, freq: 1600, gain: 0.08 }); },
  pin() { tone({ freq: 1800, to: 900, dur: 0.06, type: "triangle", gain: 0.08 }); noiseHit({ dur: 0.03, freq: 3000, gain: 0.1 }); },
  click() { noiseHit({ dur: 0.02, freq: 1800, q: 4, gain: 0.12 }); },
  wrong() { tone({ freq: 140, to: 90, dur: 0.5, type: "sawtooth", gain: 0.06 }); },
  stamp() { noiseHit({ dur: 0.12, freq: 180, type: "lowpass", gain: 0.6 }); tone({ freq: 70, to: 40, dur: 0.25, gain: 0.3 }); },
  gong() {
    const v = reverb();
    [98, 147.3, 196.5, 262].forEach((f, i) => tone({ freq: f, dur: 4 - i * 0.6, type: "sine", gain: 0.12 / (i + 1), dest: v || master, attack: 0.005 }));
  },
  knock(n = 3, when = 0) {
    for (let i = 0; i < n; i++) {
      noiseHit({ when: when + i * 0.42, dur: 0.09, freq: 160, type: "lowpass", gain: 0.9, pan: -0.3 });
      tone({ when: when + i * 0.42, freq: 95, to: 60, dur: 0.12, gain: 0.35 });
    }
  },
  heartbeat(when = 0) {
    tone({ when, freq: 58, to: 40, dur: 0.16, gain: 0.5 });
    tone({ when: when + 0.24, freq: 52, to: 38, dur: 0.2, gain: 0.35 });
  },
  drip(when = 0) {
    const f = 900 + Math.random() * 900;
    tone({ when, freq: f, to: f * 0.35, dur: 0.09, gain: 0.07, dest: reverb() || master });
  },
  whisper(dur = 2.5) {
    if (!ctx()) return;
    const v = reverb() || master;
    const syll = Math.floor(dur / 0.22);
    const pan = Math.random() * 1.6 - 0.8;
    for (let i = 0; i < syll; i++) {
      noiseHit({ when: i * 0.22 + Math.random() * 0.05, dur: 0.16, freq: 1800 + Math.random() * 2600, q: 6, gain: 0.05, dest: v, pan });
    }
  },
  scream() {
    if (!ctx()) return;
    const t = ac.currentTime;
    const o = ac.createOscillator(); o.type = "sawtooth";
    o.frequency.setValueAtTime(900, t); o.frequency.exponentialRampToValueAtTime(1600, t + 0.15); o.frequency.exponentialRampToValueAtTime(500, t + 1);
    const f = ac.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 1400; f.Q.value = 2;
    const g = ac.createGain(); env(g, t, 0.01, 0.35, 1);
    o.connect(f).connect(g).connect(master); o.start(t); o.stop(t + 1.1);
    noiseHit({ dur: 0.9, freq: 2500, q: 0.5, gain: 0.35 });
    tone({ freq: 45, dur: 1.4, gain: 0.5 });
  },
  /** A porcelain cup sliding on a paper board over wood (the cầu cơ planchette). */
  slide(dur = 0.8, when = 0) {
    noiseHit({ when, dur, freq: 900, q: 1.4, gain: 0.16 });
    noiseHit({ when, dur: dur * 0.9, freq: 2600, q: 3, gain: 0.05 });
  },
  /** The cup stops on a letter: a small porcelain clink on wood. */
  clink(when = 0) {
    tone({ when, freq: 2630, dur: 0.18, gain: 0.05, attack: 0.002 });
    tone({ when, freq: 3950, dur: 0.1, gain: 0.025, attack: 0.002 });
    noiseHit({ when, dur: 0.03, freq: 700, q: 2, gain: 0.25 });
  },
  /** A wooden clog heel on a wooden floor: deep, booming. */
  heel(when = 0, dest = null) {
    tone({ when, freq: 82, to: 48, dur: 0.32, gain: 0.7, dest: dest || reverb() || master });
    noiseHit({ when, dur: 0.12, freq: 260, type: "lowpass", gain: 0.8, dest: dest || master });
  },
  /** The heel dragged along the floor boards. */
  scrape(when = 0, dur = 0.45, dest = null) {
    noiseHit({ when, dur, freq: 420, q: 0.9, gain: 0.28, dest: dest || master });
    noiseHit({ when, dur: dur * 0.8, freq: 1100, q: 4, gain: 0.07, dest: dest || master });
  },
  /** A knuckle on a table top: short and dry. */
  knuckle(when = 0, dest = null) {
    noiseHit({ when, dur: 0.035, freq: 1500, q: 3, gain: 0.5, dest: dest || master });
    tone({ when, freq: 640, to: 420, dur: 0.05, gain: 0.12, dest: dest || master });
  },
  /** Trống chầu: "tom" is the drum face (praise), "chát" the wooden rim (blame). */
  tom(when = 0, dest = null) {
    tone({ when, freq: 120, to: 62, dur: 0.55, gain: 0.55, dest: dest || master });
    noiseHit({ when, dur: 0.18, freq: 180, type: "lowpass", gain: 0.45, dest: dest || master });
  },
  chat(when = 0, dest = null) {
    noiseHit({ when, dur: 0.07, freq: 2600, q: 8, gain: 0.55, dest: dest || master });
    tone({ when, freq: 1450, to: 1300, dur: 0.06, type: "square", gain: 0.06, dest: dest || master });
  },
  /** The kèn (oboe) of the troupe, wailing a few notes, a little out of tune. */
  ken(when = 0, dur = 3, dest = null) {
    if (!ctx()) return [];
    const v = dest || reverb() || master, nodes = [];
    const notes = [587, 659, 523, 494, 440, 392];
    const n = Math.max(2, Math.round(dur / 0.55));
    for (let i = 0; i < n; i++) {
      const t = ac.currentTime + when + i * (dur / n), f = notes[(i * 3 + 1) % notes.length] * (1 + (Math.random() - 0.5) * 0.02);
      const o = ac.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * 0.97, t + dur / n);
      const bp = ac.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1400; bp.Q.value = 2.5;
      const g = ac.createGain(); env(g, t, 0.04, 0.05, dur / n);
      o.connect(bp).connect(g).connect(v); o.start(t); o.stop(t + dur / n + 0.1); nodes.push(o);
    }
    return nodes;
  },
  /** Far-off chầu: one random praise or blame from an empty stage. */
  chau() { Math.random() < 0.6 ? sfx.tom(0, reverb() || master) : (sfx.chat(0), sfx.chat(0.33)); },
  /** A small child humming a pentatonic lullaby, far away. Returns the nodes so a tape can stop it. */
  hum(when = 0, dur = 8, dest = null) {
    if (!ctx()) return [];
    const v = dest || reverb() || master;
    const notes = [523, 587, 659, 587, 523, 440, 392, 440, 523, 523, 440, 392];
    const step = dur / notes.length, nodes = [];
    notes.forEach((f, i) => {
      const t = ac.currentTime + when + i * step;
      const o = ac.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f * 0.99, t);
      const lfo = ac.createOscillator(); lfo.frequency.value = 5.5;
      const lg = ac.createGain(); lg.gain.value = 6; lfo.connect(lg).connect(o.frequency);
      const g = ac.createGain(); env(g, t, 0.12, 0.06, step * 0.95);
      o.connect(g).connect(v); o.start(t); lfo.start(t); o.stop(t + step + 0.2); lfo.stop(t + step + 0.2);
      nodes.push(o, lfo);
    });
    return nodes;
  },
};

// ---------- ambience ----------
/** Starts (once) and tunes the background: rain + low drone, darker with each level 0..5. */
export function ambience(level) {
  amb.level = level;
  if (!ac || !ctx()) return;          // wait for the first click (browser autoplay rules)
  if (!amb.on) {
    amb.on = true;
    const rain = ac.createBufferSource(); rain.buffer = noise(); rain.loop = true;
    const lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 1400;
    const hp = ac.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 350;
    const rg = ac.createGain(); rg.gain.value = 0;
    rain.connect(hp).connect(lp).connect(rg).connect(master); rain.start();
    const dg = ac.createGain(); dg.gain.value = 0;
    const lfo = ac.createOscillator(); lfo.frequency.value = 0.06;
    const lg = ac.createGain(); lg.gain.value = 0.015; lfo.connect(lg).connect(dg.gain); lfo.start();
    const oscs = [55, 55.6, 82.4, 110.3].map((f, i) => {
      const o = ac.createOscillator(); o.type = i === 2 ? "triangle" : "sine"; o.frequency.value = f;
      const g = ac.createGain(); g.gain.value = i === 3 ? 0.25 : 1;
      o.connect(g).connect(dg); o.start(); return o;
    });
    const df = ac.createBiquadFilter(); df.type = "lowpass"; df.frequency.value = 400;
    dg.disconnect(); dg.connect(df).connect(master);
    amb.nodes = { rg, dg, oscs, df };
    dripLoop();
  }
  amb.level = level;
  const t = ac.currentTime;
  amb.nodes.rg.gain.setTargetAtTime(level >= 5 ? 0.02 : 0.045, t, 1.5);
  amb.nodes.dg.gain.setTargetAtTime(level >= 5 ? 0.01 : 0.03 + level * 0.012, t, 2);
  amb.nodes.oscs[3].detune.setTargetAtTime(level * -35, t, 3);   // the high voice slides into dissonance
  amb.nodes.df.frequency.setTargetAtTime(380 + level * 60, t, 2);
}

function dripLoop() {
  const next = () => {
    const lv = amb.level ?? 0;
    if (lv >= 1 && lv < 5) sfx.drip();
    amb.timers.push(setTimeout(next, 1800 + Math.random() * (9000 - lv * 1200)));
  };
  next();
}

// ---------- tape voices ----------
const VOICES = {
  ha: { f0: 215, spread: 30, speak: { pitch: 1.05, rate: 0.95 } },
  woman: { f0: 190, spread: 25, speak: { pitch: 0.9, rate: 0.9 } },
  old: { f0: 165, spread: 22, trem: 6, speak: { pitch: 0.7, rate: 0.82 } },
  man: { f0: 112, spread: 15, speak: { pitch: 0.6, rate: 0.85 } },
  child: { f0: 330, spread: 50, speak: { pitch: 1.6, rate: 0.85 } },
  oldman: { f0: 100, spread: 14, trem: 5, speak: { pitch: 0.55, rate: 0.8 } },
  man2: { f0: 122, spread: 18, speak: { pitch: 0.75, rate: 0.9 } },
  lanh: { f0: 108, spread: 12, speak: { pitch: 0.6, rate: 0.8 } },
  tung: { f0: 125, spread: 18, speak: { pitch: 0.8, rate: 0.95 } },
  quoc: { f0: 118, spread: 15, speak: { pitch: 0.7, rate: 0.9 } },
  khiem: { f0: 130, spread: 20, speak: { pitch: 0.85, rate: 1 } },
  lan: { f0: 205, spread: 22, speak: { pitch: 1, rate: 0.9 } },
  yen: { f0: 225, spread: 30, speak: { pitch: 1.15, rate: 0.9 } },
  dung: { f0: 200, spread: 25, speak: { pitch: 0.95, rate: 0.9 } },
  nghi: { f0: 240, spread: 35, speak: { pitch: 1.25, rate: 0.95 } },
};
const VOWELS = [[730, 1090], [530, 1840], [270, 2290], [570, 840], [300, 870], [440, 1020], [660, 1700]];

/** Speech-like babble for a tape line (formant-filtered buzz). Returns the nodes for stopping. */
export function voice(when, dur, kind, dest) {
  if (!ctx()) return [];
  const v = VOICES[kind] || VOICES.ha, nodes = [];
  const t0 = ac.currentTime + when;
  const o = ac.createOscillator(); o.type = "sawtooth";
  const f1 = ac.createBiquadFilter(); f1.type = "bandpass"; f1.Q.value = 7;
  const f2 = ac.createBiquadFilter(); f2.type = "bandpass"; f2.Q.value = 9;
  const g = ac.createGain(); g.gain.value = 0.0001;
  const mix = ac.createGain(); mix.gain.value = kind === "child" ? 0.7 : 1;
  o.connect(f1).connect(g); o.connect(f2).connect(g); g.connect(mix).connect(dest);
  if (v.trem) {
    const l = ac.createOscillator(); l.frequency.value = v.trem;
    const lg = ac.createGain(); lg.gain.value = 9; l.connect(lg).connect(o.frequency); l.start(t0); l.stop(t0 + dur + 0.1); nodes.push(l);
  }
  let t = t0;
  while (t < t0 + dur - 0.1) {
    const sl = 0.13 + Math.random() * 0.17;
    const [a, b] = VOWELS[Math.floor(Math.random() * VOWELS.length)];
    o.frequency.setValueAtTime(v.f0 + (Math.random() - 0.5) * v.spread, t);
    o.frequency.linearRampToValueAtTime(v.f0 + (Math.random() - 0.5) * v.spread, t + sl);
    f1.frequency.setValueAtTime(a * (kind === "child" ? 1.25 : 1), t);
    f2.frequency.setValueAtTime(b * (kind === "child" ? 1.2 : kind === "man" ? 0.85 : 1), t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + sl);
    t += sl + (Math.random() < 0.18 ? 0.18 + Math.random() * 0.25 : 0.02);
  }
  o.start(t0); o.stop(t0 + dur + 0.1);
  nodes.push(o);
  return nodes;
}

/** Reads a line aloud with the browser's Vietnamese voice, if the player turned it on and one exists. */
export function speak(text, kind) {
  if (!state.voice || !("speechSynthesis" in window)) return false;
  const u = new SpeechSynthesisUtterance(text.replace(/\[[^\]]*\]/g, ""));
  u.lang = "vi-VN";
  const vi = speechSynthesis.getVoices().find((x) => /^vi/i.test(x.lang));
  if (vi) u.voice = vi;
  const s = (VOICES[kind] || VOICES.ha).speak;
  u.pitch = s.pitch; u.rate = s.rate; u.volume = state.sound ? 1 : 0;
  speechSynthesis.speak(u);
  return true;
}
export function hush() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }

/** Continuous tape hiss + hum while a tape plays. Returns a stop function. */
export function tapeBed(dest) {
  if (!ctx()) return () => {};
  const s = ac.createBufferSource(); s.buffer = noise(); s.loop = true;
  const f = ac.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 5200; f.Q.value = 0.4;
  const g = ac.createGain(); g.gain.value = 0.035;
  s.connect(f).connect(g).connect(dest); s.start();
  const h = ac.createOscillator(); h.frequency.value = 50;
  const hg = ac.createGain(); hg.gain.value = 0.012; h.connect(hg).connect(dest); h.start();
  return () => { try { s.stop(); h.stop(); } catch { /* already stopped */ } };
}

/** A small engine putt-putt for the boat in the tapes. */
export function motor(when, dur, dest) {
  if (!ctx()) return [];
  const t = ac.currentTime + when;
  const o = ac.createOscillator(); o.type = "square"; o.frequency.value = 38;
  const f = ac.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 260;
  const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.08, t + 1.5); g.gain.linearRampToValueAtTime(0.0001, t + dur);
  o.connect(f).connect(g).connect(dest); o.start(t); o.stop(t + dur + 0.1);
  return [o];
}

/** A tape-only output with a little wobble and muffling. */
export function tapeOut() {
  if (!ctx()) return null;
  const lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 3400;
  const g = ac.createGain(); g.gain.value = 0.9;
  lp.connect(g).connect(master);
  return lp;
}

export const now = () => (ac ? ac.currentTime : 0);

/**
 * Plays Morse code ("-.. / .") as knocks: a dot is one tap, a dash a tap and a drag. kind "heel" | "cup".
 * Returns the duration in seconds. unit = length of a dot.
 */
export function morseKnocks(code, { when = 0, unit = 0.22, kind = "heel", dest = null } = {}) {
  let t = when;
  for (const c of code) {
    if (c === ".") { kind === "heel" ? sfx.heel(t, dest) : sfx.clink(t); t += unit * 2; }
    else if (c === "-") { kind === "heel" ? sfx.heel(t, dest) : sfx.clink(t); kind === "heel" ? sfx.scrape(t + 0.08, unit * 2.4, dest) : sfx.slide(unit * 2.4, t + 0.05); t += unit * 4; }
    else if (c === " ") t += unit * 2;
    else if (c === "/") t += unit * 3;
  }
  return t - when;
}
