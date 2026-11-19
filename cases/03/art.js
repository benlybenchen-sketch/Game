// Drawn stand-ins and small drawings for case 03 (used when a picture is missing, and for the hexagrams).

/** One hexagram, lines given bottom-first (1 = solid). Drawn top line first, as on paper. */
export const hexDraw = (lines, cls = "") => `<span class="hx ${cls}">${[...lines].reverse().map((b) => `<i class="${b ? "s" : "b"}"></i>`).join("")}</span>`;

export const boardArt = () => `<svg viewBox="0 0 320 200" class="art"><rect width="320" height="200" fill="#d9c9a3"/>
  <rect x="8" y="8" width="304" height="184" fill="none" stroke="#5a3b1c" stroke-width="2"/>
  <text x="160" y="70" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="#3b2410">A B C D E F G H I J K L M</text>
  <text x="160" y="100" text-anchor="middle" font-family="IBM Plex Mono" font-size="14" fill="#3b2410">N O P Q R S T U V W X Y Z</text>
  <text x="160" y="128" text-anchor="middle" font-family="IBM Plex Mono" font-size="13" fill="#3b2410">1 2 3 4 5 6 7 8 9 0</text>
  <text x="28" y="30" font-family="IBM Plex Mono" font-size="12" fill="#3b2410">CÓ</text><text x="250" y="30" font-family="IBM Plex Mono" font-size="12" fill="#3b2410">KHÔNG</text>
  <text x="160" y="182" text-anchor="middle" font-family="IBM Plex Mono" font-size="12" fill="#3b2410">TẠM BIỆT</text>
  <circle cx="160" cy="155" r="16" fill="#f4efe6" stroke="#9b8d78"/><circle cx="160" cy="155" r="6" fill="#d9c9a3"/></svg>`;

export const portraitArt = () => `<svg viewBox="0 0 200 260" class="art"><rect width="200" height="260" fill="#1d1712"/>
  <rect x="14" y="14" width="172" height="232" fill="#3b3128" stroke="#8a6d3b" stroke-width="6"/>
  <ellipse cx="100" cy="105" rx="38" ry="48" fill="#8f8270"/><path d="M52 246 Q100 150 148 246 Z" fill="#2a221b"/>
  <path d="M62 92 Q100 40 138 92 Q130 60 100 56 Q70 60 62 92Z" fill="#191410"/></svg>`;

export const tombArt = (top, bottom) => `<svg viewBox="0 0 240 200" class="art"><rect width="240" height="200" fill="#2b2f2a"/>
  <path d="M60 190 V70 Q120 20 180 70 V190 Z" fill="#8d8c84" stroke="#55544e" stroke-width="3"/>
  <text x="120" y="98" text-anchor="middle" font-family="Noto Serif" font-size="13" fill="#2d2c28">${top}</text>
  <text x="120" y="122" text-anchor="middle" font-family="Noto Serif" font-size="12" fill="#2d2c28">${bottom}</text>
  <g fill="#e9c7c9"><ellipse cx="88" cy="182" rx="12" ry="7"/><ellipse cx="152" cy="184" rx="11" ry="6"/></g></svg>`;

export const ghostFace = () => `<svg viewBox="0 0 200 240" class="art"><rect width="200" height="240" fill="#050505"/>
  <path d="M40 30 Q100 -10 160 30 L170 240 L30 240Z" fill="#0e0d0b"/><ellipse cx="100" cy="120" rx="46" ry="60" fill="#3a2a22"/>
  <ellipse cx="82" cy="110" rx="9" ry="6" fill="#000"/><ellipse cx="118" cy="110" rx="9" ry="6" fill="#000"/>
  <path d="M84 150 Q100 162 116 150" stroke="#000" stroke-width="4" fill="none"/></svg>`;
