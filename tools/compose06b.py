# Renders audio/06/am_hon.mp3 (original score). Usage: python3 tools/compose06b.py out.wav, then ffmpeg -> mp3.
# Case 06 theme, v2: a ghost-wedding procession. Original score. Louder suona pair (one out of tune), big drum,
# cymbals, rising small gong, a stopped-dead break, a dragging minor middle with erhu screeches and a woman's wail.
import sys, wave
from synth06 import *

def suona2(notes, t0, amp=0.30, detune=0.0, far=False):
    s, f, g = legato_line(notes, t0, 6.6, 0.022, glide=0.05)
    f = f * 2 ** (detune / 1200)
    # scoop up into each attack (suona players lip up from below)
    dg = np.diff(g, prepend=0); att = np.convolve((dg > 0.002).astype(float), np.ones(int(0.07 * SR)), "same") > 0
    f = f * np.where(att, 2 ** (-0.6 / 12), 1); f = lp(f, 30)
    harm = [1 / k ** 0.35 for k in range(1, 26)]
    x = additive(f, harm)
    x += hp(rng.standard_normal(len(x)), 2500) * 0.04
    y = reson(x, 1250, 2.5) * 1.3 + reson(x, 2300, 3.5) + reson(x, 3400, 5) * 0.6 + reson(x, 650, 3) * 0.5
    y = np.tanh(2.2 * y / (np.max(np.abs(y)) + 1e-9)) * g
    y = lp(y, 2600 if far else 5500)
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

def bigdrum(amp=0.5):
    n = int(1.2 * SR); t = np.arange(n) / SR
    f = 58 + 40 * np.exp(-t / 0.05)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.35)
    x += lp(rng.standard_normal(n), 900) * np.exp(-t / 0.03) * 0.5
    return amp * x / np.max(np.abs(x))

def cymbal(amp=0.16, decay=0.7, choke=False):
    n = int((0.35 if choke else 2.5) * SR); t = np.arange(n) / SR
    x = hp(rng.standard_normal(n), 3000) * np.exp(-t / (0.09 if choke else decay))
    for fr in (3370, 4890, 5620, 7130):
        x += 0.25 * np.sin(2 * np.pi * fr * t + rng.uniform(0, 6)) * np.exp(-t / (0.08 if choke else decay * 0.8))
    x[: int(0.002 * SR)] *= np.linspace(0, 1, int(0.002 * SR))
    return amp * x / np.max(np.abs(x))

def smallgong(amp=0.14):  # the rising "tang" of a Chinese opera gong
    n = int(1.0 * SR); t = np.arange(n) / SR
    f = 520 * (1 + 0.12 * (1 - np.exp(-t / 0.15)))
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = (np.sin(ph) + 0.4 * np.sin(2.3 * ph) + 0.2 * np.sin(3.9 * ph)) * np.exp(-t / 0.4)
    x += hp(rng.standard_normal(n), 2000) * np.exp(-t / 0.01) * 0.3
    return amp * x / np.max(np.abs(x))

def screech(f0, f1, dur, amp=0.12):  # erhu harmonic dragged down, out of tune
    n = int(dur * SR); tt = np.linspace(0, 1, n)
    f = f0 * (f1 / f0) ** (tt ** 1.7) * (1 + 0.02 * np.sin(2 * np.pi * 7.5 * np.arange(n) / SR))
    x = additive(f, [1 / k for k in range(1, 18)])
    x = reson(x, 1100, 4) + reson(x, 2700, 5) * 0.8
    env = np.sin(np.pi * tt) ** 0.6
    return amp * x * env / (np.max(np.abs(x)) + 1e-9)

def reverse_swell(dur=2.0, amp=0.12):
    c = cymbal(1.0, decay=dur * 0.5)[: int(dur * SR)][::-1]
    return amp * c

def ghost_breath(dur, amp=0.05):
    n = int(dur * SR); t = np.arange(n) / SR
    x = bp(rng.standard_normal(n), 900, 3200) * (np.sin(np.pi * t / dur) ** 2) * (0.6 + 0.4 * np.sin(2 * np.pi * 0.6 * t))
    return amp * x

def tr(notes, semis, stretch=1.0):  # transpose (semitones) and stretch durations
    return [((hz(n_) * 2 ** (semis / 12)) if n_ else None, d * stretch) for n_, d in notes]

# ------------------------------------------------------------------ score
INTRO, A1, BRK, B1, A2, OUT = 4, 8, 2, 8, 8, 2
BARS = INTRO + A1 + BRK + B1 + A2 + OUT
LOOP = BARS * BAR
bA = INTRO; bBRK = bA + A1; bB = bBRK + BRK; bA2 = bB + B1; bOUT = bA2 + A2
bar_t = lambda b: b * BAR

# wedding tune, C "gong" mode (C D E G A), written for this game
SUONA_A = [("G5", 1), ("A5", 0.5), ("G5", 0.5), ("E5", 1), ("D5", 1),
           ("E5", 1.5), ("G5", 0.5), ("A5", 2),
           ("C6", 1), ("A5", 0.5), ("G5", 0.5), ("E5", 0.5), ("G5", 0.5), ("A5", 1),
           ("G5", 3), (None, 1),
           ("D5", 1), ("E5", 0.5), ("G5", 0.5), ("A5", 1), ("G5", 0.5), ("E5", 0.5),
           ("D5", 1), ("C5", 1), ("D5", 2),
           ("E5", 0.5), ("G5", 0.5), ("A5", 1), ("G5", 0.5), ("E5", 0.5), ("D5", 1),
           ("C5", 3), (None, 1)]
# the same tune, dragged: down a minor third, half speed (first half only) -> funeral version
DRAG = tr(SUONA_A[:14], -3, 2.0)
WAIL = [("A4", 3), ("Bb4", 5), ("A4", 4), ("E5", 6), ("Eb5", 6), ("D5", 4), ("A4", 4)]

TAIL = 6.0
n = int((LOOP + TAIL) * SR)
dry = np.zeros((2, n)); wet_send = np.zeros((2, n))
def put(x, t, pan=0.0, rev=0.4, gain=1.0):
    s = int(t * SR)
    if s >= n: return
    e = min(n, s + len(x)); x = x[: e - s] * gain
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    dry[0, s:e] += x * l * (1 - rev * 0.5); dry[1, s:e] += x * r * (1 - rev * 0.5)
    wet_send[0, s:e] += x * l * rev; wet_send[1, s:e] += x * r * rev

# bed: low C drone with a semitone rub (C + Db) that swells in the dark sections
t = np.arange(int(LOOP * SR)) / SR
q = lambda f: round(f * LOOP) / LOOP
dark = np.zeros_like(t)
for b0, b1 in ((0, bA), (bBRK, bA2), (bOUT, BARS)):
    dark[int(bar_t(b0) * SR): int(bar_t(b1) * SR)] = 1
dark = lp(np.concatenate([dark, dark]), 0.4)[len(t):]
drone = np.sin(2 * np.pi * q(65.4) * t) + 0.5 * np.sin(2 * np.pi * q(98.1) * t) + (0.25 + 0.5 * dark) * np.sin(2 * np.pi * q(69.3) * t)
drone = lp(np.concatenate([drone, drone]), 260)[len(t):]
put(drone * (0.05 + 0.05 * dark), 0, 0, 0.2)
wn = rng.standard_normal(len(t))
wind = bp(np.concatenate([wn, wn]), 250, 1400)[len(t):] * (0.4 + 0.6 * dark) * (0.6 + 0.4 * np.sin(2 * np.pi * t / LOOP * 5) ** 2)
put(wind * 0.045, 0, -0.3, 0.6)

# --- intro: a heartbeat drum far off, cart bells, one long bent suona note from very far
for b in range(INTRO):
    put(bigdrum(0.22), bar_t(b), 0, 0.7); put(bigdrum(0.14), bar_t(b) + 0.42, 0, 0.7)
for k in range(14):
    put(bells(0.04), 0.3 + k * 0.55 + rng.uniform(0, 0.1), -0.5, 0.75)
put(suona2([("C5", 2), ("Db5", 4), ("B4", 2)], 0, 0.16, far=True)[1], bar_t(1), 0.6, 0.9)
put(gong(8, 0.3), 0, 0, 0.5)
put(reverse_swell(BAR * 0.6, 0.12), bar_t(bA) - BAR * 0.6, 0, 0.3)

# --- procession (A and A2): drums, cymbals, rising gong, two suonas
def procession(b0, bars, loud):
    for b in range(b0, b0 + bars):
        T = bar_t(b)
        put(bigdrum(0.48 * loud), T, 0, 0.3)
        put(bigdrum(0.30 * loud), T + 1.5 * BEAT, 0, 0.3)
        put(bigdrum(0.40 * loud), T + 2 * BEAT, 0, 0.3)
        if b % 2: put(bigdrum(0.25 * loud), T + 3.5 * BEAT, 0, 0.3)
        put(cymbal(0.11 * loud), T + BEAT, -0.35, 0.35)
        put(cymbal(0.10 * loud, choke=(b % 2 == 0)), T + 3 * BEAT, -0.35, 0.35)
        put(smallgong(0.12 * loud), T + 3.5 * BEAT, 0.4, 0.4)
        for e in range(8):
            put(woodblock(0.05 + 0.03 * (e % 2 == 0)), T + e * BEAT / 2, -0.55, 0.3)
    put(cymbal(0.24 * loud, decay=1.8), bar_t(b0), 0.2, 0.5)
    put(gong(6, 0.22 * loud), bar_t(b0 + bars // 2), 0, 0.5)

procession(bA, A1, 1.0)
put(suona2(SUONA_A, 0, 0.30)[1], bar_t(bA), 0.15, 0.4)
put(suona2(SUONA_A, 0, 0.12, detune=-38)[1], bar_t(bA) + 0.035, -0.25, 0.55)  # second player, flat

# --- break: everything stops dead. breath, a single drum, a woman humming far away
put(gong(5, 0.18), bar_t(bBRK), 0, 0.7)
put(ghost_breath(BAR * 2, 0.06), bar_t(bBRK) + 0.3, 0.5, 0.6)
put(hum([("E4", 3), ("Eb4", 5)], 0, 0.11, vowel="m")[1], bar_t(bBRK) + BEAT, -0.6, 0.8)
put(bigdrum(0.3), bar_t(bBRK + 1) + 2 * BEAT, 0, 0.6)

# --- dragging funeral version: half-time drum, erhu drags the tune, wail, screeches
for b in range(bB, bA2):
    T = bar_t(b)
    put(bigdrum(0.42), T, 0, 0.45)
    put(cymbal(0.10, choke=True), T + 2 * BEAT, -0.4, 0.5)
    if b % 2: put(smallgong(0.07), T + 3 * BEAT, 0.5, 0.6)
put(erhu(DRAG, 0, 0.28)[1], bar_t(bB), 0.1, 0.45)
put(hum(WAIL, 0, 0.16, vowel="a")[1], bar_t(bB) + BEAT, -0.35, 0.7)
for b, (f0, f1) in ((bB + 1, (2100, 900)), (bB + 4, (2600, 1300)), (bB + 7, (1800, 700))):
    put(screech(f0, f1, 1.6, 0.10), bar_t(b) + 2.5 * BEAT, 0.6, 0.6)
put(suona2(tr([("G5", 2), ("E5", 2), ("D5", 4)], -3), 0, 0.12, detune=-25, far=True)[1], bar_t(bB + 5), 0.7, 0.85)
put(reverse_swell(BAR, 0.16), bar_t(bA2) - BAR, 0, 0.3)

# --- procession returns, louder and more out of tune; dies on its last note
procession(bA2, A2, 1.15)
put(suona2(SUONA_A[:-1], 0, 0.32)[1], bar_t(bA2), 0.15, 0.4)
put(suona2(SUONA_A[:-1], 0, 0.16, detune=-55)[1], bar_t(bA2) + 0.05, -0.3, 0.55)
put(hum([("C5", 8), ("Db5", 8), ("C5", 8), ("B4", 8)], 0, 0.08, vowel="a")[1], bar_t(bA2), -0.4, 0.8)

# --- outro: one gong into the dark, wind carries back to the intro
put(gong(8, 0.32), bar_t(bOUT), 0, 0.6)
put(ghost_breath(BAR * 1.5, 0.05), bar_t(bOUT) + BEAT, -0.5, 0.6)

# ------------------------------------------------------------------ reverb + loop fold
def ir(seed, dur=3.4):
    r = np.random.default_rng(seed); m = int(dur * SR); tt = np.arange(m) / SR
    x = lp(r.standard_normal(m) * np.exp(-tt / 0.85), 5200); x[: int(0.02 * SR)] = 0
    return x / np.sqrt(np.sum(x ** 2))
wet = np.stack([fftconvolve(wet_send[0], ir(1))[:n], fftconvolve(wet_send[1], ir(2))[:n]]) * 0.85
mix = dry + wet
L = int(LOOP * SR)
out = mix[:, :L].copy(); out[:, : n - L] += mix[:, L:]
out = np.stack([hp(lp(ch, 10000), 35) for ch in out])
out = np.tanh(out * 1.4) / 1.4
out *= 0.89 / np.max(np.abs(out))
w = wave.open(sys.argv[1], "wb"); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((out.T * 32767).astype(np.int16).tobytes()); w.close()
print("loop seconds", round(LOOP, 2))
