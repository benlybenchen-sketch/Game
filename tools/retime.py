"""Re-times case/tapes.js to the real lengths of the recorded lines in audio/.

Each spoken line gets d = audio length + 0.4 s; lines and sound effects are laid out in order with a 1 s gap;
the tape length and the hidden spectrogram text follow. Run after (re)generating audio:
    python3 tools/retime.py <case>     (e.g. 01, 02)
"""
import json, math, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CASE = sys.argv[1] if len(sys.argv) > 1 else "01"
path = os.path.join(ROOT, "cases", CASE, "tapes.js")
src = open(path, encoding="utf-8").read()

def length(mp3):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3], capture_output=True, text=True).stdout.strip()
    return float(out) if out else None

blocks = list(re.finditer(r"\n  (\w+): \{\n(.*?)\n  \},", src, re.S))
for m in reversed(blocks):
    tid, body = m.group(1), m.group(2)
    lines = body.split("\n")
    cursor, i, rev_span = None, 0, None
    for k, line in enumerate(lines):
        sm = re.match(r"(\s*\{ t: )([\d.]+), d: ([\d.]+),(.*)", line)
        if not sm:
            continue
        t, d = float(sm.group(2)), float(sm.group(3))
        rest = sm.group(4)
        mp3 = os.path.join(ROOT, "audio", CASE, f"{tid}_{i}.mp3")
        slow = mp3.replace(".mp3", "_d3.mp3")   # lines with sedated variants take the length of the slowest one
        if "sfx:" not in rest and os.path.exists(mp3):
            d = math.ceil((length(slow if os.path.exists(slow) else mp3) + 0.4) * 10) / 10
            alt = mp3.replace(".mp3", "_slow.mp3")   # a slowed take plays at ×0.6: its length must fit in d / 0.6
            if os.path.exists(alt):
                d = max(d, math.ceil((length(alt) * 0.6 + 0.4) * 10) / 10)
        t = t if cursor is None else round(cursor, 1)
        cursor = t + d + (2.6 if tid == "loi_nhan" and "sfx:" not in rest else 1.0)
        if "rev: true" in rest:
            rev_span = (max(0, t - 6), t + d + 6)
        lines[k] = f"{sm.group(1)}{t:g}, d: {d:g},{rest}"
        i += 1
    body2 = "\n".join(lines)
    dur = math.ceil(max(cursor + 2, rev_span[1] + 1 if rev_span else 0))
    body2 = re.sub(r"dur: [\d.]+", f"dur: {dur}", body2, count=1)
    if rev_span:
        body2 = re.sub(r"hidden: \{ t0: [\d.]+, t1: [\d.]+,", f"hidden: {{ t0: {rev_span[0]:g}, t1: {rev_span[1]:g},", body2, count=1)
    src = src[: m.start(2)] + body2 + src[m.end(2):]
    print(tid, "dur", dur)

open(path, "w", encoding="utf-8").write(src)
