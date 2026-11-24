// Re-checks case 02 from its data (tape, film roll, calendar) against secret.js. Case 02 stays as released: this only reads.
// Usage: node tools/solve02.mjs
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
const S = JSON.parse(execSync("node tools/secret.mjs decode 02", { cwd: new URL("..", import.meta.url) }).toString());
const media = readFileSync(new URL("../cases/02/media.js", import.meta.url), "utf8");
let bad = 0; const check = (w, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${w}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };
const sec = (t) => { const [h, m, s = 0] = t.split(":").map(Number); return h * 3600 + m * 60 + s; }, hm = (x) => `${String(Math.floor(x / 3600)).padStart(2, "0")}:${String(Math.floor(x / 60) % 60).padStart(2, "0")}`;
// q1: the đình bell (three rounds of seven, rung at 22:00) is on the tape at 21:52:00, so the camera runs 8 minutes slow
const bells = [...media.matchAll(/\{ t: "([\d:]+)", sfx: "bell"(?:, n: (\d+), g: (\d+))?[^}]*text: "([^"]+)"/g)].map((m) => ({ t: m[1], n: m[2] ? +m[2] : 21, g: m[3] ? +m[3] : 7, text: m[4] }));
const dinh = bells.find((b) => b.n === 21 && b.g === 7);
const off = (sec("22:00:00") - sec(dinh.t)) / 60;
check("q1 camera slow by (minutes)", [off], S.q1.off);
check("q1 the other bell is not the đình bell (one round of nine)", bells.some((b) => b.n === 9 && b.g === 9), true);
const fit = /\{ t: "([\d:]+)", sfx: "tom", text: "Trống chầu: TOM" \},\s*\{ t: "[\d:]+", v: "v10", text: "Quan Công khựng lại/.exec(media)[1];
const real = sec(fit) + off * 60;
check("q1 swallowed from (fit − 30 min, real time)", [hm(real - 30 * 60)], S.q1.t);
check("q1 swallowed by (fit − 15 min)", [hm(real - 15 * 60)], S.q1.t2);
// q2: end of act 2 on tape, plus the offset
const act2 = /\{ t: "([\d:]+)", text: "Hết lớp 2\. Nghỉ" \}/.exec(media)[1];
check("q2 poison put in by (end of act 2, real time)", [hm(sec(act2) + off * 60)], S.q2.t2);
// q3: of the three Châu Thương frames, the one without the bandage
const frames = [...media.matchAll(/\[(\d+), "([\d:—]+)", "Châu Thương múa đao", "[^"]+", "(ct\d)"\]/g)].map((m) => ({ n: +m[1], ct: m[3] }));
check("q3 frame without the bandage", frames.filter((f) => f.ct === "ct0").map((f) => f.n), S.q3.photo);
// q5: 27/9/1993 is a Monday, so the Saturdays of September are 11, 18, 25; the smudged "1_/9" between 12 and 19 is the 18th
const dow = new Date(Date.UTC(1993, 8, 27)).getUTCDay();
check("q5 27/9/1993 is a Monday", dow, 1);
const sats = [...Array(30).keys()].map((d) => d + 1).filter((d) => new Date(Date.UTC(1993, 8, d)).getUTCDay() === 6);
check("q5 the only Saturday 12–19/9", sats.filter((d) => d >= 12 && d <= 19).map((d) => `${d}/9`), [S.q5.date[0]]);
console.log(bad ? `${bad} problem(s)` : "all checks pass");
