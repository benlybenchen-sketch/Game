# Renders audio/08/do_kiep.mp3 (original score for case 08 "Độ Kiếp"). Usage:
#   python3 tools/compose08.py /tmp/x.wav && ffmpeg -y -i /tmp/x.wav -b:a 160k audio/08/do_kiep.mp3
# Written from scratch: melody, harmony, sounds. A Daoist mountain at night in a storm. D Thương pentatonic (D E G A C).
# Guqin (plucked, sliding), stone chime (khánh) each canh, bronze temple bell, low male chant, rain and wind, distant
# thunder; the climax is nine drum strokes like nine bolts. Seamless loop (tail folded in).
import sys, wave
import numpy as np
import synth06 as S
S.BPM = 58; S.BEAT = 60 / 58; S.BAR = 4 * S.BEAT
from synth06 import SR, hz, lp, hp, bp, hum, pluck, gong
from scipy.signal import fftconvolve
BEAT, BAR = S.BEAT, S.BAR
rng = np.random.default_rng(8)

QIN = {}
def qin(name, amp=0.22, dur=3.2, bend=0.0):
    """Guqin: low, woody pluck with a slow slide after the attack."""
    k = (name, bend)
    if k not in QIN:
        x = pluck(hz(name), dur, 1.0, bend=bend)
        QIN[k] = lp(x, 2600)
    return amp * QIN[k]

def chime(amp=0.2, f0=620):  # stone chime: inharmonic, short, bright
    n = int(2.6 * SR); t = np.arange(n) / SR
    x = sum(a * np.sin(2 * np.pi * f0 * r * t) * np.exp(-t / d) for r, a, d in ((1, 1, 0.9), (2.76, 0.5, 0.4), (5.4, 0.25, 0.2), (8.9, 0.1, 0.1)))
    return amp * x / np.max(np.abs(x))

def bell(amp=0.22):  # bronze temple bell, struck with a log
    return gong(9, amp, f0=58)

def drum(amp=0.6):  # big temple drum
    n = int(1.6 * SR); t = np.arange(n) / SR
    f = 48 + 30 * np.exp(-t / 0.07)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.45) + lp(rng.standard_normal(n), 500) * np.exp(-t / 0.05) * 0.4
    return amp * x / np.max(np.abs(x))

def thunder(dur=6.0, amp=0.18, crack=False):
    n = int(dur * SR); t = np.arange(n) / SR
    env = (1 - np.exp(-t / (0.02 if crack else 0.4))) * np.exp(-t / (dur / 3))
    x = lp(rng.standard_normal(n), 160) * (0.7 + 0.3 * np.sin(2 * np.pi * 3.1 * t + rng.uniform(0, 6)))
    if crack: x += hp(rng.standard_normal(n), 1500) * np.exp(-t / 0.12) * 0.8
    x *= env
    return amp * x / np.max(np.abs(x))

def rain(dur, amp=0.05):
    n = int(dur * SR)
    x = bp(rng.standard_normal(n), 1800, 9000) * 0.6 + lp(rng.standard_normal(n), 700) * 0.4
    return amp * x / np.max(np.abs(x))

# ------------------------------------------------------------------ score
M1 = [("D4", 1), ("E4", .5), ("G4", .5), ("A4", 2), ("C5", 1), ("A4", 1), ("G4", 2), ("E4", 1), ("D4", 3)]
M2 = [("A3", 1), ("C4", 1), ("D4", 2), ("E4", 1), ("G4", 1), ("E4", 2), ("D4", 1), ("C4", 1), ("A3", 4)]
INTRO, A, B, C, OUT = 4, 8, 8, 8, 4
bA, bB, bC, bO = INTRO, INTRO + A, INTRO + A + B, INTRO + A + B + C
BARS = bO + OUT; LOOP = BARS * BAR; TAIL = 9.0
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
FADE = 3.0
def xfade(x):
    k = int(FADE * SR); e = np.ones(len(x)); e[:k] = np.sin(np.linspace(0, np.pi / 2, k)) ** 2; e[-k:] = np.cos(np.linspace(0, np.pi / 2, k)) ** 2
    return x * e
put(xfade(rain(LOOP + FADE, 0.045)), 0, -0.2, 0.0)
s, y = hum([("D2", BARS * 4)], 0, 0.07, vowel="u"); put(xfade(y[: int((LOOP + FADE) * SR)]), 0, 0.1, 0.3)

def melody(notes, b0, amp, pan, bend_every=3):
    t = bar_t(b0)
    for i, (nm, d) in enumerate(notes):
        put(qin(nm, amp, bend=(-0.6 if i % bend_every == 2 else 0.0)), t + rng.uniform(0, 0.01), pan, 0.45); t += d * BEAT
# intro: rain, a far thunder, one chime
put(thunder(7, 0.12), bar_t(1), 0.6, 0.6); put(chime(0.14), bar_t(3), -0.4, 0.6)
# A: guqin alone, chime every two bars
melody(M1, bA, 0.24, -0.2); melody(M2, bA + 4, 0.22, -0.1)
for b in range(bA, bB, 2): put(chime(0.15), bar_t(b), 0.45, 0.6)
put(thunder(6, 0.10), bar_t(bA + 5) + 1.3, -0.6, 0.6)
# B: chant joins under the guqin, temple bell
s, y = hum([(n_[:-1] + str(int(n_[-1]) - 1), d) for n_, d in M1], 0, 0.20, vowel="a"); put(y, bar_t(bB), -0.25, 0.5)
melody(M1, bB, 0.2, 0.25); melody(M2, bB + 4, 0.22, 0.15)
put(bell(0.22), bar_t(bB), 0, 0.6); put(bell(0.18), bar_t(bB + 4), 0, 0.6)
for b in range(bB, bC, 2): put(chime(0.13, 560), bar_t(b) + BEAT * 2, -0.45, 0.6)
# C: nine strokes like nine bolts, guqin doubled, thunder crack
for k in range(9): put(drum(0.55 + 0.04 * k), bar_t(bC) + k * BEAT * 1.5, rng.uniform(-.15, .15), 0.3)
put(thunder(8, 0.22, crack=True), bar_t(bC + 3) + 0.5, 0.2, 0.5)
melody(M1, bC + 4, 0.28, -0.2); melody([(n_[:-1] + str(int(n_[-1]) + 1), d) for n_, d in M1], bC + 4, 0.16, 0.3)
s, y = hum([(n_[:-1] + str(int(n_[-1]) - 1), d) for n_, d in M2], 0, 0.2, vowel="u"); put(y, bar_t(bC + 4), 0, 0.5)
put(bell(0.26), bar_t(bC + 4), 0, 0.6)
# outro: last falling phrase, far
melody(M2[-4:], bO, 0.16, 0.3); put(chime(0.1, 520), bar_t(bO + 2), 0.4, 0.7)

def ir(seed, dur=4.2):
    r = np.random.default_rng(seed); m = int(dur * SR); tt = np.arange(m) / SR
    x = lp(r.standard_normal(m) * np.exp(-tt / 1.2), 4000); x[: int(0.03 * SR)] = 0
    return x / np.sqrt(np.sum(x ** 2))
wet = np.stack([fftconvolve(wet_send[0], ir(5))[:n], fftconvolve(wet_send[1], ir(6))[:n]]) * 0.9
mix = dry + wet
L = int(LOOP * SR)
out = mix[:, :L].copy(); out[:, : n - L] += mix[:, L:]
out = np.stack([hp(lp(ch, 9000), 40) for ch in out])
out = np.tanh(out * 1.4) / 1.4
out *= 0.9 / np.max(np.abs(out))
w = wave.open(sys.argv[1], "wb"); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((out.T * 32767).astype(np.int16).tobytes()); w.close()
print("loop seconds", round(LOOP, 2))
