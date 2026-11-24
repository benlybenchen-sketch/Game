// Builds the data of the puzzle test page (thu-cau-do.html): a short chain of three puzzles with no instructions.
//   node tools/demo_gen.mjs   -> demo/data.js        check: node tools/solve_demo.mjs
// Chain: the box of four carved sticks (order = mother, then her children eldest first; the child already dead in
// Kỷ Dậu 1969 lies upside down) reads eight line/word numbers -> words of the mother's letter: "tấm bìa úp mặt trên trang
// thứ ba" -> lay the card face down on the third sheet -> "the code is the year of the death notice of the eldest
// brother" -> 1975 on the notice. Traps: the grandmother and the nephew share animals with the mother and the son;
// Khải "went south in 1971" (not dead by 1969); sheet one read with the card face up says 1971; the register says 1972.
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
import { writeFileSync, mkdirSync } from "node:fs";
const { sealContent } = await import("../js/puzzles.js");

export const LETTER = [
  "Khải con,",
  "Mẹ viết thư này dưới ngọn đèn dầu, cả nhà mình đã ngủ.",
  "Thằng Lộc hôm nay lại trèo lên gác xép lục đồ của chị nó.",
  "Nó lôi ra cái hộp gỗ mẹ khắc năm nào, đòi mẹ kể chuyện ngày xưa.",
  "Mẹ bảo để khi nào anh Khải về thì anh kể cho mà nghe.",
  "Bố con dạo này ho nhiều, đêm nào cũng ngồi dậy hút thuốc lào.",
  "Thằng Hiếu vẫn ở nhờ nhà mình, chăm chỉ và ngoan hơn trước.",
  "Con có nhớ cái tấm ảnh chụp cả nhà ở chợ huyện không con?",
  "Mẹ cất trong cuốn sổ bìa xanh, để trên đầu tủ thờ.",
  "Hôm giỗ chị Nguyệt mẹ lấy ra xem, nhìn mặt con mà mẹ khóc.",
  "Mẹ úp nó xuống bàn một lúc rồi mới dám nhìn lại.",
  "Ngoài đồng lúa đang lên, năm nay chắc được mùa hơn năm ngoái.",
  "Bà con trong xóm ai cũng hỏi thăm con, mẹ chỉ biết cười.",
  "Mẹ đã khâu cho con ba đôi tất mới, gửi theo chuyến xe tháng sau.",
  "Con nhớ đi tất vào, đêm trên rừng lạnh lắm, người ta bảo thế.",
  "Cô giáo của thằng Lộc khen nó viết chữ đẹp, mẹ mừng lắm.",
  "Nó viết kín cả trang vở, nét chữ giống con hồi bé lắm.",
  "Mẹ dặn nó mỗi thứ bảy viết cho anh một lá thư, nó hứa rồi.",
  "Ông bác bên nội vừa xây lại mộ bà, mẹ góp được ít tiền.",
  "Bố con không nói gì, nhưng mẹ biết bố mong con lắm.",
  "Mẹ không biết thư này bao giờ mới đến tay con.",
  "Con cứ ăn uống cho đủ, đừng lo gì cho nhà.",
  "Mẹ của con,",
  "Huệ",
];
const words = (line) => line.split(/\s+/).map((w) => w.replace(/[,.?!:;]/g, "").toLowerCase());
export const KEY_WORDS = [["tấm", 8], ["bìa", 9], ["úp", 11], ["mặt", 10], ["trên", 15], ["trang", 17], ["thứ", 18], ["ba", 14]];
const coords = KEY_WORDS.map(([w, l]) => { const i = words(LETTER[l - 1]).indexOf(w); if (i < 0) throw new Error(w); return `${String(l).padStart(2, "0")}${String(i + 1).padStart(2, "0")}`; });

// Sticks in solved order: Huệ (Dê), Khải (Rồng), Nguyệt (Ngựa, upside down), Lộc (Chuột). Each is one column of 8 digits.
const col = (j) => coords.map((c) => c[j]);
const SOLVED = [{ animal: "con dê", d: col(0) }, { animal: "con rồng", d: col(1) }, { animal: "con ngựa", d: col(2), turned: true }, { animal: "con chuột", d: col(3) }];
// As found in the box: chuột, ngựa (lying upside down relative to the solution, i.e. stored as it reads when turned), dê, rồng
const FOUND = [3, 2, 0, 1];
export const STICKS = FOUND.map((k) => ({ name: `Thanh khắc ${SOLVED[k].animal}`, rows: SOLVED[k].turned ? SOLVED[k].d.slice().reverse() : SOLVED[k].d }));
export const STICKS_SOLUTION = coords;

// Grille, 6×6, nine holes, one in each orbit of the quarter turn.
let seed = 20261124; const rnd = () => ((seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) / 2 ** 32);
const n = 6;
const rot = ([r, c], k) => { for (let i = 0; i < k; i++) [r, c] = [c, n - 1 - r]; return [r, c]; };
const orbits = []; const seen = new Set();
for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (!seen.has(`${r},${c}`)) { const o = [0, 1, 2, 3].map((k) => rot([r, c], k)); o.forEach((x) => seen.add(x.join(","))); orbits.push(o); }
export const HOLES = orbits.map((o) => o[Math.floor(rnd() * 4)]);
const FREQ = "AAAAANNNNNHHHHTTTTIIIIOOOOCCCGGGUUUMMMEEELLLDDDBBVVYYKPRSQ";
const place = (msg, flip) => {
  const g = Array.from({ length: n }, () => Array(n).fill(""));
  let m = msg; while (m.length < n * n) m += FREQ[Math.floor(rnd() * FREQ.length)];
  for (let t = 0; t < 4; t++) {
    const open = HOLES.map(([r, c]) => rot(flip ? [r, n - 1 - c] : [r, c], t)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    open.forEach(([r, c], i) => (g[r][c] = m[t * 9 + i]));
  }
  return g.map((r) => r.join(""));
};
export const GRILLE_MSG = "MAHOMLANAMGIAYBAOTUANHCAVEDENNHA";      // mã hòm là năm giấy báo tử anh cả về đến nhà
export const GRILLE_TRAP = "MAHOMLANAMANHCADIBTUGAHUYEN";           // mã hòm là năm anh cả đi B từ ga huyện (1971)
export const GRILLE_TRAP2 = "MAHOMLANAMCHINGUYETBOMEDI";             // mã hòm là năm chị Nguyệt bỏ mẹ đi (1968)
// const noise = () => Array.from({ length: n }, () => Array.from({ length: n }, () => FREQ[Math.floor(rnd() * FREQ.length)]).join(""));
export const PAGES = [
  { name: "Tờ thứ nhất", grid: place(GRILLE_TRAP, false) },
  { name: "Tờ thứ hai", grid: place(GRILLE_TRAP2, true) },
  { name: "Tờ thứ ba", grid: place(GRILLE_MSG, true) },
];
export const CODE = [1, 9, 7, 5];

const BOX = `<div class="doc doc--paper"><p>Trong hòm có một xấp thư buộc dây chun đã mủn. Tất cả đều là chữ anh Khải, gửi về cho mẹ.</p>
<p>Lá trên cùng đề ngày 9 tháng 8 năm 1974.</p>
<p>"Mẹ ơi, con vẫn khoẻ. Đơn vị con đóng gần một con suối, đêm nào cũng nghe tiếng mẹ gọi tên con ngoài bờ suối. Con biết là con mơ. Mẹ đừng úp ảnh con xuống bàn nữa, con không thấy đường về."</p>
<p>Dưới xấp thư là tờ giấy báo tử, gấp làm tư, chưa ai mở ra lần nào.</p></div>`;

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop())) {
  mkdirSync(new URL("../demo/", import.meta.url), { recursive: true });
  const data = { LETTER, STICKS, HOLES, PAGES, SEALED: sealContent(BOX, CODE) };
  writeFileSync(new URL("../demo/data.js", import.meta.url), `// Generated by tools/demo_gen.mjs. Do not edit by hand.\n${Object.entries(data).map(([k, v]) => `export const ${k} = ${JSON.stringify(v)};`).join("\n")}\n`);
  console.log("sticks rows (solved):", coords.join(" "));
  console.log("pages:"); PAGES.forEach((p) => console.log(" ", p.name, p.grid.join(" ")));
}
