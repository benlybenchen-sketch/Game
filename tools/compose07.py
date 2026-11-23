# Renders audio/07/thu_nguoi_chet.mp3 (original score for case 07). Usage:
#   python3 tools/compose07.py /tmp/x.wav && ffmpeg -y -i /tmp/x.wav -b:a 160k audio/07/thu_nguoi_chet.mp3
# Everything here is written from scratch: melody, harmony, sounds. Style: slow funeral procession in the tomb builders'
# village. D Phrygian dominant (D Eb F# G A Bb C). Double reed lead, arched harp, frame drum heartbeat, sistrum rattles,
# low male chant, drone, cobra hiss, a dissonant cluster that swells before the climax. Seamless loop (tail folded in).
import sys, wave
import numpy as np
import synth06 as S
S.BPM = 66; S.BEAT = 60 / 66; S.BAR = 4 * S.BEAT
from synth06 import SR, hz, lp, hp, bp, reson, additive, legato_line, hum, pluck, gong
from scipy.signal import fftconvolve
BEAT, BAR = S.BEAT, S.BAR
rng = np.random.default_rng(29)

# ------------------------------------------------------------------ instruments
def reed(notes, t0, amp=0.26, far=False, detune=0.0):
    """Ancient double reed: nasal, buzzy, slow wide vibrato, slides between notes."""
    s, f, g = legato_line(notes, t0, 5.2, 0.017, glide=0.10)
    f = f * 2 ** (detune / 1200)
    x = additive(f, [1 / k ** 0.45 for k in range(1, 24)])
    x += bp(rng.standard_normal(len(x)), 1800, 6000) * 0.04
    y = reson(x, 950, 2.8) * 1.3 + reson(x, 1750, 3.5) + reson(x, 2900, 5) * 0.6 + reson(x, 480, 3) * 0.4
    y = np.tanh(2.2 * y / (np.max(np.abs(y)) + 1e-9)) * g
    y = lp(y, 2600 if far else 5500)
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

HARP = {}
def harp(name, amp=0.2, dur=2.4):
    if name not in HARP:
        x = pluck(hz(name), dur, 1.0)
        HARP[name] = lp(x, 4200)
    return amp * HARP[name]

def doum(amp=0.5):  # frame drum, low open stroke
    n = int(0.9 * SR); t = np.arange(n) / SR
    f = 62 + 40 * np.exp(-t / 0.05)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.28)
    x += lp(rng.standard_normal(n), 900) * np.exp(-t / 0.03) * 0.35
    return amp * x / np.max(np.abs(x))

def tak(amp=0.25):  # frame drum, rim slap
    n = int(0.25 * SR); t = np.arange(n) / SR
    x = bp(rng.standard_normal(n), 1800, 5200) * np.exp(-t / 0.035) + np.sin(2 * np.pi * 410 * t) * np.exp(-t / 0.04) * 0.5
    return amp * x / np.max(np.abs(x))

def sistrum(amp=0.12, shakes=7, length=0.45):
    """Metal discs on rods: a burst of short inharmonic clicks."""
    n = int((length + 0.5) * SR); x = np.zeros(n)
    for k in range(shakes):
        s0 = int((k / shakes) * length * SR + rng.uniform(0, 0.012) * SR)
        m = int(0.12 * SR); t = np.arange(m) / SR
        c = sum(np.sin(2 * np.pi * fr * t * rng.uniform(0.98, 1.02)) for fr in (3150, 4720, 6080, 7350)) * np.exp(-t / 0.035)
        c += hp(rng.standard_normal(m), 5000) * np.exp(-t / 0.01) * 0.8
        x[s0:s0 + m] += c * (0.6 + 0.4 * np.sin(np.pi * k / shakes))
    return amp * x / (np.max(np.abs(x)) + 1e-9)

def hiss(dur=3.0, amp=0.07):  # cobra hiss swelling and dying
    n = int(dur * SR); t = np.linspace(0, 1, n)
    x = bp(rng.standard_normal(n), 3500, 9000) * (np.sin(np.pi * t) ** 2) * (0.7 + 0.3 * np.sin(2 * np.pi * 9 * t))
    return amp * x / np.max(np.abs(x))

def cluster(dur=8.0, amp=0.10):  # D, Eb, A-quarter-flat beating against each other, slowly swelling
    n = int(dur * SR); t = np.arange(n) / SR
    x = sum(np.sin(2 * np.pi * f * t) + 0.3 * np.sin(4 * np.pi * f * t) for f in (hz("D3"), hz("Eb3"), hz("A3") * 2 ** (-0.5 / 12), hz("D4") * 1.006))
    env = (t / dur) ** 2.2 * (1 - np.exp(-(dur - t) / 0.05))
    return amp * x * env / np.max(np.abs(x))

def drone(dur, amp=0.10):
    n = int(dur * SR); t = np.arange(n) / SR
    x = sum(a * np.sin(2 * np.pi * f * t * (1 + 0.0015 * np.sin(2 * np.pi * 0.07 * t))) for f, a in ((hz("D2"), 1), (hz("A2"), 0.55), (hz("D3"), 0.35)))
    x = lp(x + 0.02 * rng.standard_normal(n), 900)
    return amp * x / np.max(np.abs(x))

def wind(dur, amp=0.05):
    n = int(dur * SR); t = np.arange(n) / SR
    x = bp(rng.standard_normal(n), 250, 1400) * (0.6 + 0.4 * np.sin(2 * np.pi * 0.05 * t + 1.1))
    return amp * x / np.max(np.abs(x))

# ------------------------------------------------------------------ score
M1 = [("D5", 1), ("Eb5", .5), ("D5", .5), ("C5", 1), ("Bb4", 1), ("A4", 2), ("G4", 1), ("F#4", 1),
      ("G4", .5), ("A4", .5), ("Bb4", 1), ("A4", 1), ("G4", .5), ("F#4", .5), ("Eb4", 1), ("D4", 3)]
M2 = [("A4", 1), ("Bb4", 1), ("C5", 1), ("D5", 1), ("Eb5", 2), ("D5", 1), ("C5", .5), ("Bb4", .5),
      ("A4", 2), ("F#4", 1), ("G4", 1), ("A4", 4)]
def shift(notes, o): return [((n[:-1] + str(int(n[-1]) + o)) if n else None, d) for n, d in notes]

INTRO, A, B, C, OUT = 4, 8, 8, 8, 4
bA, bB, bC, bO = INTRO, INTRO + A, INTRO + A + B, INTRO + A + B + C
BARS = bO + OUT
LOOP = BARS * BAR
TAIL = 7.0
n = int((LOOP + TAIL) * SR)
dry = np.zeros((2, n)); wet_send = np.zeros((2, n))
bar_t = lambda b: b * BAR

def put(x, t, pan=0.0, rev=0.4, gain=1.0):
    s = int(t * SR)
    if s >= n or s < 0: return
    e = min(n, s + len(x)); x = x[: e - s] * gain
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    dry[0, s:e] += x * l * (1 - rev * 0.5); dry[1, s:e] += x * r * (1 - rev * 0.5)
    wet_send[0, s:e] += x * l * rev; wet_send[1, s:e] += x * r * rev

# bed: drone + wind across the whole loop
# The bed runs FADE seconds past the loop point and fades in over the first FADE seconds: when the tail is folded
# back onto the start (see master), the two overlap as a crossfade instead of doubling.
FADE = 3.0
def xfade(x):
    k = int(FADE * SR); e = np.ones(len(x)); e[:k] = np.sin(np.linspace(0, np.pi / 2, k)) ** 2; e[-k:] = np.cos(np.linspace(0, np.pi / 2, k)) ** 2
    return x * e
put(xfade(drone(LOOP + FADE, 0.11)), 0, 0, 0.0)
put(xfade(wind(LOOP + FADE, 0.05)), 0, 0.3, 0.0)

# harp: a falling Phrygian-dominant figure every bar, thinner in the climax
FIG = ["D4", "A3", "F#4", "Eb4", "D4", "C4", "Bb3", "A3"]
for b in range(BARS):
    if bC <= b < bO and b % 2: continue
    for i, nm in enumerate(FIG):
        put(harp(nm, 0.16 if b < bC else 0.12), bar_t(b) + i * BEAT / 2 + rng.uniform(0, 0.01), -0.45 + 0.1 * (i % 3), 0.5)

# frame drum: heartbeat in A, procession in B, driving in C
for b in range(bA, bO):
    T = bar_t(b)
    loud = 0.35 if b < bB else 0.5 if b < bC else 0.75
    pattern = [(0, "d"), (0.75, "d")] if b < bB else [(0, "d"), (1, "t"), (1.5, "t"), (2, "d"), (3, "t")] if b < bC else \
              [(0, "d"), (0.5, "t"), (1, "d"), (1.5, "t"), (2, "d"), (2.5, "t"), (2.75, "t"), (3, "d"), (3.5, "t")]
    for bt, k in pattern:
        put(doum(loud) if k == "d" else tak(loud * 0.55), T + bt * BEAT + rng.uniform(0, 0.006), 0.05, 0.25)
# rolls into each section
for b0 in (bB, bC):
    t = 0.0; dur = 2 * BEAT
    while t < dur:
        k = t / dur; put(tak(0.08 + 0.3 * k ** 1.5), bar_t(b0) - dur + t, rng.uniform(-.2, .2), 0.25); t += 1 / (4 + 16 * k ** 1.3)

# sistrum: on beat 1 of every other bar, every bar in C
for b in range(BARS):
    if b < bC and b % 2: continue
    put(sistrum(0.10 if b < bC else 0.16), bar_t(b) + 0.02, 0.5, 0.45)

# section A: reed alone, far
s, y = reed(M1 + M2, 0, 0.20, far=True); put(y, bar_t(bA), -0.1, 0.55)
# section B: low male chant on M1 (an octave and a half down), reed answers with M2
s, y = hum(shift(M1, -2), 0, 0.22, vowel="a"); put(y, bar_t(bB), -0.25, 0.5)
s, y = hum(shift(M1, -2), 0, 0.16, vowel="u"); put(y * 0.9, bar_t(bB) + 0.03, 0.25, 0.5)
s, y = reed(M2, 0, 0.22); put(y, bar_t(bB + 4), 0.1, 0.45)
put(cluster(4 * BAR, 0.09), bar_t(bB + 4), 0, 0.6)
put(hiss(3.5, 0.07), bar_t(bC) - 3.5, 0.7, 0.4)
# section C: climax, reed doubled at the octave and slightly out of tune, chant underneath, gong
s, y = reed(shift(M1, 1)[:-1] + [("D5", 3)] + M2, 0, 0.30); put(y, bar_t(bC), -0.15, 0.4)
s, y = reed(M1 + M2, 0, 0.22, detune=-35); put(y, bar_t(bC) + 0.04, 0.2, 0.45)
s, y = hum(shift(M2, -2), 0, 0.18, vowel="a"); put(y, bar_t(bC + 4), 0, 0.5)
put(gong(7, 0.26, f0=74), bar_t(bC), 0, 0.5)
put(gong(7, 0.20, f0=74), bar_t(bC + 4), 0, 0.5)
for k in range(3): put(hiss(2.2, 0.06), bar_t(bC + 2 * k + 1) + 1.0, -0.7 + 0.7 * k, 0.4)
# outro: one last far reed phrase, harp keeps falling
s, y = reed(M1[-4:], 0, 0.14, far=True); put(y, bar_t(bO), 0.3, 0.7)

# ------------------------------------------------------------------ master: room reverb, loop fold
def ir(seed, dur=3.6):
    r = np.random.default_rng(seed); m = int(dur * SR); tt = np.arange(m) / SR
    x = lp(r.standard_normal(m) * np.exp(-tt / 0.9), 4500); x[: int(0.025 * SR)] = 0
    return x / np.sqrt(np.sum(x ** 2))
wet = np.stack([fftconvolve(wet_send[0], ir(3))[:n], fftconvolve(wet_send[1], ir(4))[:n]]) * 0.85
mix = dry + wet
L = int(LOOP * SR)
out = mix[:, :L].copy(); out[:, : n - L] += mix[:, L:]
out = np.stack([hp(lp(ch, 9000), 45) for ch in out])
out = np.tanh(out * 1.4) / 1.4
out *= 0.9 / np.max(np.abs(out))
w = wave.open(sys.argv[1], "wb"); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((out.T * 32767).astype(np.int16).tobytes()); w.close()
print("loop seconds", round(LOOP, 2))
