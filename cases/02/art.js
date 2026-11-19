// Case 02 drawn pieces: used where an AI picture is missing, and for things that must be exact
// (the bandage on Châu Thương's right hand, the forged signature, the handwriting).

export const envelope = () => `
<svg viewBox="0 0 600 360" class="art art--env" role="img" aria-label="Phong bì nặc danh">
  <rect x="6" y="6" width="588" height="348" rx="4" fill="#ddd0b0"/>
  <path d="M6 6 L300 190 L594 6" fill="none" stroke="#b8a77f" stroke-width="2"/>
  <g transform="translate(470 26)"><rect width="90" height="106" fill="#efe4c8" stroke="#8b6b45" stroke-dasharray="4 3"/>
    <rect x="10" y="10" width="70" height="66" fill="#8a2b22"/><circle cx="45" cy="43" r="18" fill="#e8c27a"/>
    <text x="45" y="96" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle" fill="#3b2d1d">400đ VIỆT NAM</text></g>
  <g transform="translate(395 80) rotate(-10)" opacity=".8"><circle r="52" fill="none" stroke="#3a2a6a" stroke-width="3"/>
    <text y="-22" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle" fill="#3a2a6a">PHÚ LỄ</text>
    <text y="6" font-family="IBM Plex Mono, monospace" font-size="15" font-weight="bold" text-anchor="middle" fill="#3a2a6a">1-10-93</text></g>
  ${envelopeText(120, 200)}
  <text x="40" y="335" font-family="'Patrick Hand', cursive" font-size="15" fill="#5a3b22" opacity=".8">(không đề người gửi)</text>
</svg>`;

/** The same slanted 1960s handwriting with a looped “L”, in violet ink. */
function envelopeText(x, y) {
  return `<g font-family="'Dancing Script', cursive" fill="#4a2f7a" transform="translate(${x} ${y}) skewX(-12)">
    <text font-size="27">Kính gửi ông Trịnh Văn Kỷ</text>
    <text y="40" font-size="23">Báo Sân Khấu Cửu Giang</text>
    <text y="76" font-size="21">Lò Gốm, thị xã Cửu Giang</text></g>`;
}
export const envelopeHand = () => `<svg viewBox="0 0 420 140" class="art"><rect width="420" height="140" fill="#ddd0b0"/>${envelopeText(30, 45)}</svg>`;

export const signature = () => `<svg viewBox="0 0 120 40" width="110" height="36" aria-label="chữ ký Bé"><path d="M8 28 C14 6 22 6 20 24 C18 34 30 30 34 18 C38 8 44 26 52 22 C60 18 64 12 70 20 C80 34 96 10 114 14" fill="none" stroke="#1d3b8f" stroke-width="2"/></svg>`;

/** Châu Thương facing the audience, halberd in his RIGHT hand (the viewer's left). That hand is bare or wrapped in white gauze: the clue. */
export const chauThuong = (bandaged, n) => `
<svg viewBox="0 0 400 300" class="art" role="img" aria-label="Kiểu ảnh số ${n}">
  <rect width="400" height="300" fill="#140d0a"/>
  <rect x="0" y="210" width="400" height="90" fill="#3a2316"/>
  <path d="M0 0 H400 V40 Q300 70 200 40 Q100 70 0 40Z" fill="#6d1210"/>
  <g transform="translate(200 70)">
    <line x1="-90" y1="-50" x2="40" y2="200" stroke="#a88b4a" stroke-width="7"/>
    <path d="M-104 -78 Q-70 -70 -84 -30 L-96 -40 Z" fill="#c9c2b0"/>
    <path d="M-40 40 L40 40 L60 150 L-60 150Z" fill="#1d3a7a"/>
    <rect x="-46" y="40" width="92" height="22" fill="#b88a1a"/>
    <ellipse cx="0" cy="0" rx="30" ry="38" fill="#141414"/>
    <path d="M-22 -8 Q-12 -16 -4 -8 M4 -8 Q12 -16 22 -8" stroke="#eee" stroke-width="3" fill="none"/>
    <path d="M-12 18 Q0 26 12 18" stroke="#c22" stroke-width="3" fill="none"/>
    <path d="M-30 -30 Q0 -70 30 -30 L26 -42 Q0 -64 -26 -42Z" fill="#2a2a2a"/>
    <path d="M-28 30 Q0 80 28 30" fill="#111"/>
    <path d="M40 50 L72 92" stroke="#1d3a7a" stroke-width="18"/>
    <ellipse cx="78" cy="102" rx="13" ry="11" fill="#8a5a3a"/>
    <path d="M-40 50 L-68 20" stroke="#1d3a7a" stroke-width="18"/>
    ${bandaged ? `<g><ellipse cx="-72" cy="14" rx="17" ry="14" fill="#f4f1ea"/><path d="M-86 8 L-58 20 M-84 16 L-60 10 M-80 22 L-62 6" stroke="#cfcac0" stroke-width="2"/></g>`
      : `<ellipse cx="-72" cy="14" rx="12" ry="10" fill="#8a5a3a"/>`}
  </g>
  <text x="12" y="290" font-family="IBM Plex Mono, monospace" font-size="13" fill="#e9a23b">${n}</text>
</svg>`;

/** Generic stage frame (fallback for VHS scenes and film frames). kind: crowd | stage | empty | collapse | ghost */
export const stageArt = (kind) => {
  const curtain = `<path d="M0 0 H400 V50 Q300 80 200 50 Q100 80 0 50Z" fill="#5a0f0d"/>`;
  const floor = `<rect x="0" y="200" width="400" height="100" fill="#3a2316"/>`;
  const fig = (x, face, robe) => `<g transform="translate(${x} 120)"><path d="M-22 30 L22 30 L32 110 L-32 110Z" fill="${robe}"/><ellipse cy="0" rx="17" ry="22" fill="${face}"/><path d="M-18 -16 Q0 -36 18 -16" fill="#222"/></g>`;
  const body = {
    crowd: `<rect width="400" height="300" fill="#120c08"/>${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 37) % 400}" cy="${190 + (i % 4) * 26}" r="13" fill="#1f1610"/>`).join("")}<rect x="140" y="40" width="120" height="90" fill="#3d1a10"/>`,
    stage: `${curtain}${floor}${fig(130, "#c21d16", "#1f5a2a")}${fig(210, "#141414", "#1d3a7a")}${fig(290, "#e9e4dc", "#5a1d5a")}`,
    empty: `${curtain}${floor}<rect x="340" y="140" width="40" height="70" fill="#2a1a10"/>`,
    collapse: `${curtain}${floor}<path d="M90 225 Q200 120 310 225" stroke="#1f5a2a" stroke-width="34" fill="none"/><ellipse cx="96" cy="222" rx="18" ry="16" fill="#c21d16"/>${Array.from({ length: 6 }, (_, i) => `<g transform="translate(${60 + i * 60} 150)"><ellipse rx="12" ry="15" fill="#1a1a1a"/><rect x="-14" y="14" width="28" height="60" fill="#222"/></g>`).join("")}`,
    ghost: `<rect width="400" height="300" fill="#070505"/><rect x="250" y="20" width="140" height="280" fill="#140c0a"/><g transform="translate(320 140)"><path d="M-40 40 L40 40 L56 160 L-56 160Z" fill="#1f5a2a"/><ellipse rx="30" ry="38" fill="#b0150f"/><ellipse cx="-11" cy="-4" rx="7" ry="5" fill="#000"/><ellipse cx="11" cy="-4" rx="7" ry="5" fill="#000"/><path d="M-26 30 Q0 90 26 30" fill="#111"/></g>`,
  }[kind] || "";
  return `<svg viewBox="0 0 400 300" class="art"><rect width="400" height="300" fill="#140d0a"/>${body}</svg>`;
};

export const deadDog = () => `
<svg viewBox="0 0 400 260" class="art" role="img" aria-label="Con chó chết">
  <rect width="400" height="260" fill="#2a2016"/>
  <path d="M0 200 Q200 170 400 205 V260 H0Z" fill="#3b2b1c"/>
  <g transform="translate(200 160)">
    <path d="M-90 0 Q-20 -40 70 -6 Q60 18 -80 18Z" fill="#b08a4a"/>
    <path d="M70 -6 Q100 -40 128 -30 Q132 -14 108 -6Z" fill="#b08a4a"/>
    <path d="M110 -14 L128 -12" stroke="#fff" stroke-width="3"/>
    ${[-80, -50, 20, 50].map((x) => `<line x1="${x}" y1="12" x2="${x - 30}" y2="40" stroke="#b08a4a" stroke-width="8"/>`).join("")}
    ${Array.from({ length: 30 }, (_, i) => `<circle cx="${100 + (i % 8) * 4}" cy="${-18 + Math.floor(i / 8) * 3}" r="1.3" fill="#600"/>`).join("")}
  </g>
</svg>`;

/** Bé Thủy's crayon drawing: a blank white face with no features, bare feet, the right hand wrapped in white. */
export const thuyDrawing = () => `
<svg viewBox="0 0 400 300" class="art art--crayon" role="img" aria-label="Hình bé Thủy vẽ">
  <rect width="400" height="300" fill="#f2ecd8"/>
  <rect x="40" y="60" width="90" height="60" fill="#8a3a20" opacity=".7"/><text x="48" y="96" font-family="'Patrick Hand'" font-size="16" fill="#222">bàn Tổ</text>
  ${[60, 85, 110].map((x, i) => `<rect x="${x}" y="50" width="14" height="10" fill="${i === 1 ? "#555" : "#ccc"}"/>`).join("")}
  <g transform="translate(250 150)" stroke="#111" stroke-width="3">
    <ellipse rx="34" ry="42" fill="#fff"/>
    <path d="M-30 44 L30 44 L44 140 L-44 140Z" fill="#1d3a7a"/>
    <line x1="30" y1="56" x2="66" y2="96"/><ellipse cx="72" cy="104" rx="14" ry="12" fill="#fff"/>
    <line x1="-30" y1="56" x2="-80" y2="40"/>
    <line x1="-20" y1="140" x2="-26" y2="176"/><line x1="20" y1="140" x2="26" y2="176"/>
  </g>
  <text x="200" y="290" font-family="'Patrick Hand'" font-size="20" fill="#7a0000">ông Tổ không có mặt</text>
</svg>`;

/** Quan Công's face, red paint cracked, black eyes: the fallback for the scare pictures. */
export const ghostFace = () => `
<svg viewBox="0 0 400 400" class="art art--ghost">
  <rect width="400" height="400" fill="#000"/>
  <ellipse cx="200" cy="200" rx="130" ry="165" fill="#9e130d"/>
  ${Array.from({ length: 18 }, (_, i) => `<path d="M${120 + i * 9} ${90 + (i % 5) * 30} l${(i % 3) * 8 - 8} 40 l10 30" stroke="#3a0503" stroke-width="2" fill="none"/>`).join("")}
  <path d="M110 150 Q150 120 180 160 M220 160 Q250 120 290 150" stroke="#000" stroke-width="14" fill="none"/>
  <ellipse cx="155" cy="185" rx="26" ry="20" fill="#000"/><ellipse cx="245" cy="185" rx="26" ry="20" fill="#000"/>
  <path d="M140 270 Q200 320 260 270" stroke="#000" stroke-width="10" fill="#2a0000"/>
  ${Array.from({ length: 9 }, (_, i) => `<rect x="${150 + i * 11}" y="275" width="8" height="${10 + (i % 3) * 4}" fill="#e8dcc0"/>`).join("")}
  <path d="M120 300 Q200 420 280 300 L300 400 L100 400Z" fill="#111"/>
</svg>`;
