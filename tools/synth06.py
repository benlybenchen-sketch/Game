# Original ghost-wedding theme for case 06 ("Âm Hôn"). Melody, harmony and sound are written here from scratch.
# Erhu lead, low female hum, guzheng rolls, drone, distant suona call, gong, cart bells, night wind, reverb. Seamless loop.
import numpy as np, sys
from scipy.signal import butter, sosfilt, fftconvolve

SR = 44100
BPM = 72
BEAT = 60 / BPM
BAR = 4 * BEAT
rng = np.random.default_rng(7)

NOTE = {"C": -9, "D": -7, "E": -5, "F": -4, "G": -2, "A": 0, "B": 2}
def hz(n):  # "A4", "C5", "Eb5"
    name, acc, octv = n[0], n[1:-1], int(n[-1])
    s = NOTE[name] + (1 if acc == "#" else -1 if acc == "b" else 0) + 12 * (octv - 4)
    return 440 * 2 ** (s / 12)

def bp(x, lo, hi, order=2):
    return sosfilt(butter(order, [lo, hi], "bandpass", fs=SR, output="sos"), x)
def lp(x, f, order=2):
    return sosfilt(butter(order, f, "lowpass", fs=SR, output="sos"), x)
def hp(x, f, order=2):
    return sosfilt(butter(order, f, "highpass", fs=SR, output="sos"), x)
def reson(x, f, q):  # formant peak
    bw = f / q
    return bp(x, max(20, f - bw / 2), f + bw / 2, 1)

def additive(freq, amps, sr=SR):
    """freq: per-sample array. amps: list of harmonic amplitudes. band-limited."""
    ph = 2 * np.pi * np.cumsum(freq) / sr
    out = np.zeros_like(freq)
    for k, a in enumerate(amps, 1):
        if a == 0: continue
        mask = (freq * k < sr / 2 - 500)
        out += a * np.sin(k * ph) * mask
    return out

def legato_line(notes, t0, vib_rate, vib_depth, glide=0.09):
    """notes: [(name|None, beats)]; returns start sample, freq array, gate env (with rests)."""
    total = sum(b for _, b in notes) * BEAT
    n = int(total * SR)
    f = np.zeros(n); g = np.zeros(n); vib = np.zeros(n)
    pos = 0; prev = None
    for name, beats in notes:
        L = int(beats * BEAT * SR)
        seg = slice(pos, pos + L)
        if name is None:
            f[seg] = prev or 220; g[seg] = 0
        else:
            target = hz(name) if isinstance(name, str) else name
            fr = np.full(L, target)
            if prev:  # portamento, erhu style slide into note
                gl = min(L, int(glide * SR))
                fr[:gl] = prev * (target / prev) ** (np.linspace(0, 1, gl) ** 0.6)
            f[seg] = fr
            env = np.ones(L)
            a = min(L, int(0.12 * SR)); env[:a] = np.linspace(0.35 if prev else 0, 1, a)
            r = min(L, int(0.10 * SR)); env[-r:] *= np.linspace(1, 0.55, r)
            # long notes swell then sigh
            if beats >= 2:
                tt = np.linspace(0, 1, L); env *= 0.85 + 0.25 * np.sin(np.pi * tt) ** 1.5
            g[seg] = env
            # vibrato grows over the note, delayed onset
            tt = np.arange(L) / SR
            depth = vib_depth * np.clip((tt - 0.25) / 0.8, 0, 1)
            vib[seg] = depth
            prev = target
        pos += L
    t = np.arange(n) / SR
    wob = 1 + vib * np.sin(2 * np.pi * vib_rate * t + 0.3 * np.sin(2 * np.pi * 0.7 * t))
    g = lp(g, 18)
    return int(t0 * SR), f * wob, np.clip(g, 0, None)

def erhu(notes, t0, amp=0.32):
    s, f, g = legato_line(notes, t0, 5.6, 0.011)
    harm = [1 / k ** 0.85 * (1.25 if k in (2, 3) else 1) for k in range(1, 28)]
    x = additive(f, harm)
    bow = hp(rng.standard_normal(len(x)), 1500) * 0.05 * (1 + 0.5 * np.sin(2 * np.pi * 1.3 * np.arange(len(x)) / SR))
    x = x + bow
    # snake-skin body + nasal resonances
    body = reson(x, 520, 3) * 1.4 + reson(x, 1150, 4) * 1.6 + reson(x, 2600, 5) * 0.9 + reson(x, 4200, 6) * 0.35
    y = hp(body, 220) * g
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

def hum(notes, t0, amp=0.22, vowel="u"):
    s, f, g = legato_line(notes, t0, 4.9, 0.008, glide=0.14)
    harm = [1 / k ** 1.6 for k in range(1, 30)]
    x = additive(f, harm)
    breath = bp(rng.standard_normal(len(x)), 600, 5000) * 0.05
    x = x + breath * (0.6 + 0.4 * g)
    F = {"u": [(330, 5, 1.0), (850, 8, 0.45), (2500, 10, 0.12)],
         "a": [(800, 5, 1.0), (1250, 7, 0.6), (2800, 10, 0.18)],
         "m": [(260, 4, 1.0), (1900, 10, 0.08)]}[vowel]
    y = sum(reson(x, fr, q) * a for fr, q, a in F)
    y = y * g
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

def suona(notes, t0, amp=0.10):
    s, f, g = legato_line(notes, t0, 6.3, 0.018, glide=0.06)
    harm = [1 / k ** 0.5 for k in range(1, 22)]
    x = additive(f, harm)
    y = (reson(x, 1300, 3) * 1.2 + reson(x, 2400, 4) + reson(x, 3500, 5) * 0.5) * g
    y = lp(y, 3000)  # far away
    return s, amp * y / (np.max(np.abs(y)) + 1e-9)

def pluck(freq, dur, amp, bend=0.0):
    """Karplus-Strong guzheng-ish string, optional press-bend after the attack."""
    n = int(dur * SR)
    N = int(SR / freq)
    buf = rng.uniform(-1, 1, N) * np.hanning(N) * 1.0
    out = np.zeros(n)
    i = 0
    for k in range(n):
        j = k % N
        out[k] = buf[j]
        buf[j] = 0.4985 * (buf[j] + buf[(j + 1) % N])
    if bend:
        t = np.arange(n) / SR
        ratio = 2 ** (bend / 12 * np.clip((t - 0.25) / 0.3, 0, 1))
        idx = np.cumsum(ratio); idx = idx[idx < n - 1]
        out = np.interp(idx, np.arange(n), out)
        out = np.pad(out, (0, n - len(out)))
    out = reson(out, 900, 1.5) * 0.6 + out
    env = np.exp(-np.arange(n) / SR / (dur * 0.45))
    return amp * out * env / (np.max(np.abs(out)) + 1e-9)

PLUCK_CACHE = {}
def zheng(name, dur, amp, bend=0.0):
    key = (name, round(dur, 3), bend)
    if key not in PLUCK_CACHE:
        PLUCK_CACHE[key] = pluck(hz(name), dur, 1.0, bend)
    return amp * PLUCK_CACHE[key]

def gong(dur=7.0, amp=0.25, f0=92):
    n = int(dur * SR); t = np.arange(n) / SR
    parts = [(1, 1, 3.2), (1.47, 0.6, 2.4), (2.09, 0.45, 1.6), (2.76, 0.3, 1.2), (3.61, 0.2, 0.8), (4.88, 0.12, 0.5)]
    x = sum(a * np.sin(2 * np.pi * f0 * r * t * (1 + 0.004 * np.exp(-t))) * np.exp(-t / d) for r, a, d in parts)
    x += bp(rng.standard_normal(n), 300, 2000) * np.exp(-t / 0.08) * 0.3
    swell = np.clip(t / 0.4, 0, 1) ** 0.5
    return amp * x * swell / np.max(np.abs(x))

def bells(amp=0.05):
    n = int(0.6 * SR); t = np.arange(n) / SR
    x = np.zeros(n)
    for f in (2350, 3120, 4410):
        x += np.sin(2 * np.pi * f * t) * np.exp(-t / 0.18)
    return amp * x / 3

def woodblock(amp=0.12):
    n = int(0.25 * SR); t = np.arange(n) / SR
    x = np.sin(2 * np.pi * 760 * t) * np.exp(-t / 0.03) + 0.4 * np.sin(2 * np.pi * 1180 * t) * np.exp(-t / 0.02)
    return amp * x

