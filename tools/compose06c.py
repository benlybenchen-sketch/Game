# Renders audio/06/am_hon.mp3 (original score). Usage: python3 tools/compose06c.py out.wav, then ffmpeg -> mp3.
# Style: slow 60 BPM wedding tune in E "gong" mode (E F# G# B C#), heavily ornamented, heterophonic suona + erhu,
# mid-heavy old-record sound, four swelling waves; loud suona, driving drum rolls into every peak, opera-like female wail.
import sys, wave
import synth06 as S
S.BEAT = 1.0; S.BAR = 4.0
from synth06 import *
BEAT, BAR = S.BEAT, S.BAR

PENTA = ["E", "F#", "G#", "B", "C#"]
def step(name, k):  # move k steps along the E pentatonic
    nm, o = name[:-1], int(name[-1])
    order = [(p, oc) for oc in range(2, 8) for p in ["C#", "E", "F#", "G#", "B"]]
    def key(p, oc): return oc * 12 + {"C#": 1, "E": 4, "F#": 6, "G#": 8, "B": 11}[p]
    order.sort(key=lambda z: key(*z)); i = order.index((nm, o))
    p, oc = order[i + k]; return p + str(oc)

def ornament(notes, style):
    """Chinese-style ornaments. style 0: upper grace notes; 1: lower grace + longer slides. Same tune, different dress."""
    out = []
    for i, (nm, d) in enumerate(notes):
        if nm is None or d < 1 or (i + style) % 3 == 2:
            out.append((nm, d)); continue
        g = 0.14 if style == 0 else 0.22
        out.append((step(nm, 1 if style == 0 else -1), g)); out.append((nm, d - g))
    return out

def suona2(notes, t0, amp=0.30, detune=0.0, far=False, vib=0.024):
    s, f, g = legato_line(notes, t0, 6.4, vib, glide=0.07)
    f = f * 2 ** (detune / 1200)
    dg = np.diff(g, prepend=0); att = np.convolve((dg > 0.002).astype(float), np.ones(int(0.07 * SR)), "same") > 0
    f = lp(f * np.where(att, 2 ** (-0.8 / 12), 1), 30)
    x = additive(f, [1 / k ** 0.3 for k in range(1, 26)])
    x += hp(rng.standard_normal(len(x)), 2500) * 0.05
    y = reson(x, 1250, 2.5) * 1.3 + reson(x, 2300, 3.5) + reson(x, 3400, 5) * 0.7 + reson(x, 650, 3) * 0.5
    y = np.tanh(2.6 * y / (np.max(np.abs(y)) + 1e-9)) * g
    y = lp(y, 2400 if far else 6000)
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

def opera(notes, t0, amp=0.2):  # high female voice, wide fast vibrato, big slides
    s, f, g = legato_line(notes, t0, 6.2, 0.026, glide=0.22)
    x = additive(f, [1 / k ** 1.15 for k in range(1, 30)])
    x += bp(rng.standard_normal(len(x)), 1500, 6000) * 0.04
    y = reson(x, 820, 4) + reson(x, 1300, 6) * 0.7 + reson(x, 3000, 6) * 0.6
    y = y * g
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

def bigdrum(amp=0.5, f0=58):
    n = int(1.0 * SR); t = np.arange(n) / SR
    f = f0 + 45 * np.exp(-t / 0.04)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.3)
    x += bp(rng.standard_normal(n), 150, 1500) * np.exp(-t / 0.03) * 0.6   # skin slap: keeps it audible without bass
    return amp * x / np.max(np.abs(x))

def tanggu(amp=0.3):  # higher barrel drum used for fast rolls
    n = int(0.4 * SR); t = np.arange(n) / SR
    f = 190 + 70 * np.exp(-t / 0.02)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / 0.12) + bp(rng.standard_normal(n), 400, 3000) * np.exp(-t / 0.02) * 0.7
    return amp * x / np.max(np.abs(x))

def cymbal(amp=0.16, decay=0.7, choke=False):
    n = int((0.35 if choke else 2.5) * SR); t = np.arange(n) / SR
    x = hp(rng.standard_normal(n), 3000) * np.exp(-t / (0.09 if choke else decay))
    for fr in (3370, 4890, 5620, 7130):
        x += 0.25 * np.sin(2 * np.pi * fr * t + rng.uniform(0, 6)) * np.exp(-t / (0.08 if choke else decay * 0.8))
    x[: int(0.002 * SR)] *= np.linspace(0, 1, int(0.002 * SR))
    return amp * x / np.max(np.abs(x))

def smallgong(amp=0.14):
    n = int(1.0 * SR); t = np.arange(n) / SR
    ph = 2 * np.pi * np.cumsum(520 * (1 + 0.12 * (1 - np.exp(-t / 0.15)))) / SR
    x = (np.sin(ph) + 0.4 * np.sin(2.3 * ph) + 0.2 * np.sin(3.9 * ph)) * np.exp(-t / 0.4)
    x += hp(rng.standard_normal(n), 2000) * np.exp(-t / 0.01) * 0.3
    return amp * x / np.max(np.abs(x))

def screech(f0, f1, dur, amp=0.12):
    n = int(dur * SR); tt = np.linspace(0, 1, n)
    f = f0 * (f1 / f0) ** (tt ** 1.7) * (1 + 0.02 * np.sin(2 * np.pi * 7.5 * np.arange(n) / SR))
    x = additive(f, [1 / k for k in range(1, 18)])
    x = reson(x, 1100, 4) + reson(x, 2700, 5) * 0.8
    return amp * x * np.sin(np.pi * tt) ** 0.6 / (np.max(np.abs(x)) + 1e-9)

def reverse_swell(dur=2.0, amp=0.12):
    return amp * cymbal(1.0, decay=dur * 0.5)[: int(dur * SR)][::-1]

# ------------------------------------------------------------------ score (original)
P1 = [("B4", 1), ("C#5", .5), ("B4", .5), ("G#4", 1), ("F#4", 1),
      ("E4", 2), ("F#4", 1), ("G#4", 1),
      ("B4", 1.5), ("C#5", .5), ("E5", 1), ("C#5", 1),
      ("B4", 3), (None, 1),
      ("G#4", 1), ("B4", 1), ("C#5", .5), ("B4", .5), ("G#4", 1),
      ("F#4", 1.5), ("E4", .5), ("F#4", 2),
      ("G#4", .5), ("B4", .5), ("C#5", 1), ("B4", .5), ("G#4", .5), ("F#4", 1),
      ("E4", 3), (None, 1)]
P2 = [("E5", 2), ("F#5", 1), ("E5", 1),
      ("C#5", 1), ("B4", 1), ("C#5", 2),
      ("E5", 1), ("G#5", 1), ("F#5", .5), ("E5", .5), ("C#5", 1),
      ("B4", 4),
      ("C#5", 1), ("E5", 1), ("F#5", 1), ("E5", .5), ("C#5", .5),
      ("B4", 1), ("G#4", 1), ("B4", 2),
      ("C#5", .5), ("B4", .5), ("G#4", 1), ("F#4", .5), ("E4", .5), ("F#4", 1),
      ("E4", 3), (None, 1)]
def up(notes, o=1): return [((n_[:-1] + str(int(n_[-1]) + o)) if n_ else None, d) for n_, d in notes]

INTRO = 2; W = 8
b1, b2, b3, b4 = INTRO, INTRO + W, INTRO + 2 * W, INTRO + 3 * W
BARS = INTRO + 4 * W
LOOP = BARS * BAR
bar_t = lambda b: b * BAR

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

def roll(t0, dur, a0=0.08, a1=0.45, r0=3, r1=18, drum=None):
    """accelerating, swelling drum roll (the 'dồn' into a peak)"""
    t = 0.0
    while t < dur:
        k = t / dur
        put((drum or tanggu)(a0 + (a1 - a0) * k ** 1.5) , t0 + t + rng.uniform(0, 0.006), rng.uniform(-0.2, 0.2), 0.25)
        t += 1 / (r0 + (r1 - r0) * k ** 1.3)

def procession(b0, bars, loud, double=False):
    for b in range(b0, b0 + bars):
        T = bar_t(b)
        for bt, a in ((0, .55), (1.5, .32), (2, .45), (2.75, .25), (3.5, .32)):
            put(bigdrum(a * loud), T + bt * BEAT, 0, 0.25)
        for bt in ((0.5, 1, 1.5, 2.5, 3, 3.5) if double else (1, 3)):
            put(cymbal(0.09 * loud, choke=(bt % 1 != 0)), T + bt * BEAT, -0.35, 0.3)
        put(smallgong(0.12 * loud), T + 3.5 * BEAT, 0.4, 0.35)
        put(smallgong(0.08 * loud), T + 1.5 * BEAT, 0.4, 0.35)
        for e in range(8 if not double else 16):
            put(woodblock(0.06), T + e * BEAT / (2 if not double else 4), -0.55, 0.25)
        if b % 4 == 3:   # fill: drums pile up into the next phrase
            roll(T + 2 * BEAT, 2 * BEAT, 0.15 * loud, 0.42 * loud, 6, 20)

# bed: thin drone (the reference has almost no bass), old-record hiss and crackle, night wind
t = np.arange(int(LOOP * SR)) / SR
q = lambda f: round(f * LOOP) / LOOP
drone = np.sin(2 * np.pi * q(164.8) * t) + 0.6 * np.sin(2 * np.pi * q(174.6) * t) + 0.4 * np.sin(2 * np.pi * q(247.0) * t)
drone = lp(np.concatenate([drone, drone]), 700)[len(t):] * (0.6 + 0.4 * np.sin(2 * np.pi * t / LOOP * 4) ** 2)
put(drone * 0.035, 0, 0, 0.4)
hn = rng.standard_normal(len(t)); hiss = bp(np.concatenate([hn, hn]), 1500, 7000)[len(t):]
crackle = np.zeros(len(t)); idx = rng.choice(len(t), int(LOOP * 9), replace=False); crackle[idx] = rng.uniform(-1, 1, len(idx))
put(hiss * 0.006 + hp(crackle, 1000) * 0.25, 0, 0, 0.0)
wn = rng.standard_normal(len(t)); wind = bp(np.concatenate([wn, wn]), 250, 1400)[len(t):]
put(wind * 0.03, 0, -0.3, 0.6)

# intro: gong, cart bells, the heartbeat drum, a far suona scoop
put(gong(8, 0.3, f0=82), 0, 0, 0.5)
for k in range(12): put(bells(0.045), 0.3 + k * 0.58 + rng.uniform(0, 0.1), -0.5, 0.75)
for b in range(INTRO):
    put(bigdrum(0.25), bar_t(b) + 2, 0, 0.6); put(bigdrum(0.18), bar_t(b) + 2.4, 0, 0.6)
put(suona2([("E5", 1), ("F5", 3), ("E5", 2)], 0, 0.14, far=True)[1], bar_t(0) + 1, 0.6, 0.85)
roll(bar_t(b1) - 2.5, 2.5, 0.05, 0.4, 3, 22)

# wave 1: erhu and suona in heterophony, procession at half strength
procession(b1, W, 0.75)
put(suona2(ornament(P1, 0), 0, 0.36)[1], bar_t(b1), 0.15, 0.38)
put(erhu(ornament(P1, 1), 0, 0.24)[1], bar_t(b1) + 0.045, -0.3, 0.45)
put(cymbal(0.2, decay=1.6), bar_t(b1), 0.2, 0.5)
roll(bar_t(b2) - 4, 4, 0.05, 0.55, 2, 24, drum=lambda a: bigdrum(a, 64))

# wave 2: the peak. loud suona pair (one flat), full procession, cymbals doubled
procession(b2, W, 1.05, double=True)
put(suona2(ornament(P2, 0), 0, 0.42)[1], bar_t(b2), 0.12, 0.35)
put(suona2(ornament(P2, 1), 0, 0.20, detune=-42)[1], bar_t(b2) + 0.04, -0.3, 0.5)
put(erhu(up(ornament(P2, 1), 0), 0, 0.18)[1], bar_t(b2) + 0.07, -0.45, 0.45)
put(cymbal(0.26, decay=1.8), bar_t(b2), 0.2, 0.5); put(gong(6, 0.25, f0=82), bar_t(b2), 0, 0.5)

# wave 3: the drop. drums stop dead, a heartbeat, a woman sings the tune too slowly, screeches; roll rebuilds
put(gong(7, 0.3, f0=70), bar_t(b3), 0, 0.7)
for b in range(b3, b4 - 2):
    put(bigdrum(0.32), bar_t(b), 0, 0.5); put(bigdrum(0.2), bar_t(b) + 0.35, 0, 0.5)
slow = [(n_, d * 1.5) for n_, d in ornament(P1[:13], 1)]
put(opera(up(slow), 0, 0.24)[1], bar_t(b3) + 1, -0.15, 0.6)
for b, (f0, f1) in ((b3 + 1, (2300, 900)), (b3 + 3, (2600, 1200)), (b3 + 5, (2000, 650))):
    put(screech(f0, f1, 1.8, 0.12), bar_t(b) + 2.5, 0.6, 0.6)
for b in (b3 + 2, b3 + 4):
    put(suona2([("F5", .5), ("E5", 1.5)], 0, 0.22, detune=-60)[1], bar_t(b) + 3, 0.7, 0.6)
roll(bar_t(b4 - 2), 2 * BAR, 0.04, 0.6, 2, 26, drum=lambda a: bigdrum(a, 66))
roll(bar_t(b4 - 1), BAR, 0.05, 0.35, 8, 28)
put(reverse_swell(BAR, 0.2), bar_t(b4) - BAR, 0, 0.3)

# wave 4: climax. everything, the woman wails above the procession, then it cuts off and one gong rings
procession(b4, W, 1.15, double=True)
put(suona2(ornament(P2, 0), 0, 0.44)[1], bar_t(b4), 0.12, 0.35)
put(suona2(ornament(P2, 1), 0, 0.24, detune=-60)[1], bar_t(b4) + 0.05, -0.3, 0.5)
put(erhu(ornament(P1, 0), 0, 0.16)[1], bar_t(b4) + 0.02, -0.5, 0.45)
put(opera([("E6", 6), ("F6", 6), ("E6", 4), ("C#6", 6), ("B5", 6), ("E5", 4)], 0, 0.12)[1], bar_t(b4), -0.2, 0.7)
put(cymbal(0.28, decay=1.8), bar_t(b4), 0.2, 0.5); put(gong(6, 0.28, f0=82), bar_t(b4), 0, 0.5)

# ------------------------------------------------------------------ old-record master + loop fold
def ir(seed, dur=3.2):
    r = np.random.default_rng(seed); m = int(dur * SR); tt = np.arange(m) / SR
    x = lp(r.standard_normal(m) * np.exp(-tt / 0.8), 5000); x[: int(0.02 * SR)] = 0
    return x / np.sqrt(np.sum(x ** 2))
wet = np.stack([fftconvolve(wet_send[0], ir(1))[:n], fftconvolve(wet_send[1], ir(2))[:n]]) * 0.8
mix = dry + wet
L = int(LOOP * SR)
out = mix[:, :L].copy(); out[:, : n - L] += mix[:, L:]
out = np.stack([hp(lp(ch, 8500), 70) + 0.35 * bp(ch, 900, 3000) for ch in out])   # mid-forward, little sub-bass
out = np.tanh(out * 1.6) / 1.6
out *= 0.9 / np.max(np.abs(out))
w = wave.open(sys.argv[1], "wb"); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((out.T * 32767).astype(np.int16).tobytes()); w.close()
print("loop seconds", round(LOOP, 2))
