// Re-solves the codes of case 03 using only the reference tables printed in its documents, and checks against secret.js.
// The encoded messages come from the game's own encoders; the decoding uses what the player can read in the game.
// Usage: node tools/solve03.mjs
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { execSync } from "node:child_process";
const C = await import("../cases/03/index.js");
const X = await import("../cases/03/cipher.js");
const { edition } = await import("../cases/03/kieu.js");
const { state } = await import("../js/store.js"); state.stage = 99; state.player = "";
const S = JSON.parse(execSync("node tools/secret.mjs decode 03", { cwd: new URL("..", import.meta.url) }).toString());
let bad = 0; const check = (w, got, want) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) bad++; console.log(`${ok ? "ok " : "BAD"} ${w}: ${JSON.stringify(got)}${ok ? "" : ` (want ${JSON.stringify(want)})`}`); };
const doc = (id) => C.DOCS.find((d) => d.id === id);
const html = (id) => doc(id).html();
const qStage = (qid) => C.QUESTIONS.find((q) => q.id === qid).stage;
const where = (re) => C.DOCS.filter((d) => re.test(d.html()));

// Morse: the table the player sees (docs with the morse grid), A–Z, Telex letters only
const mdoc = where(/morse-grid/)[0];
const table = Object.fromEntries([...mdoc.html().matchAll(/<span>([A-Z])&nbsp; ([·— ]+)<\/span>/g)].map((m) => [m[2].replace(/ /g, "").replace(/·/g, ".").replace(/—/g, "-"), m[1]]));
check("Morse table in the game covers A–Z", Object.keys(table).length, 26);
check("Morse table opens before question 2", mdoc.stage <= qStage("q2"), true);
for (const t of [S.q2.m71[0], S.q2.m04[0]]) {
  const code = X.morse(X.telex(t));
  const read = code.split(" / ").map((w) => w.split(" ").map((c) => table[c] ?? "?").join("")).join(" ");
  check(`Morse "${t}" read with the game's table`, read, X.telex(t));
}
// Vietnamese 29-letter alphabet and Suzhou numerals from Quốc's notebook
const vq = html("vo_quoc").replace(/<[^>]+>/g, "");
const alpha = Object.fromEntries([...vq.matchAll(/([A-ZĂÂĐÊÔƠƯ])(\d{1,2})(?=[A-ZĂÂĐÊÔƠƯ]|\s|$)/g)].map((m) => [+m[2], m[1]]));
check("alphabet table has 29 letters", Object.keys(alpha).length, 29);
const su = { "〇": 0, "〡": 1, "〢": 2, "〣": 3, "〤": 4, "〥": 5, "〦": 6, "〧": 7, "〨": 8, "〩": 9, "一": 1, "二": 2, "三": 3 };
check("Suzhou digits in the notebook", ["〡1", "〢2", "〣3", "〤4", "〥5", "〦6", "〧7", "〨8", "〩9", "〇0"].every((k) => vq.includes(k)) && /〡一 là 11/.test(vq), true);
const t4 = S.q4.m71[0];
const enc = X.alpha29(t4).map((w) => w.map(X.suzhou));
const dec = enc.map((w) => w.map((g) => alpha[Number([...g.replace(/<[^>]+>/g, "")].map((c) => su[c]).join(""))] ?? "?").join("")).join(" ");
check(`Suzhou "${t4}" read with the notebook`, dec, X.baseLetters(t4));
// Kiều book code, two editions: the Huế copy reads the answer, the other copy reads something else
const codes = [...where(/code-line">\d{3,4}·/)[0].html().matchAll(/(\d{3,4})·(\d+)·(\d+)/g)].map((m) => m.slice(1).map(Number));
const read = (ed) => codes.map(([l, w, k]) => { const t = edition(ed).get(l); if (!t) return "?"; const word = t.replace(/[,.?]/g, "").split(" ")[w - 1]; return word ? X.bare(word)[k - 1] || "?" : "?"; }).join("");
check("Kiều code read in the Huế edition", read("hue"), X.bare(S.q5.m71[0]).replace(/\s/g, ""));
check("Kiều code in the other edition reads something else", read("khiem") !== read("hue"), true);
// hexagrams: one hexagram per letter of the 29-letter alphabet, first line drawn at the bottom
const msg = S.q7.msg[0];
const hx = X.hexagrams("Mộ Lan là em Đừng uống trà Vàng dưới hồ sen");
const byNum = hx.map((bits) => { const n = parseInt(bits.join(""), 2); return n === 0 ? " " : alpha[n] ?? "?"; }).join("");   // an all-broken sign (0) between words
check("hexagram book has the number of signs the notebook says (43)", hx.length, 43);
check("hexagrams read with the alphabet", byNum, X.baseLetters("Mộ Lan là em Đừng uống trà Vàng dưới hồ sen"));
check("the reading is the answer", X.bare(byNum).replace(/\s/g, ""), X.bare(msg).replace(/\s/g, ""));
console.log(bad ? `${bad} problem(s)` : "all checks pass");
