// Drawn fallbacks (inline SVG) used when an AI picture in img/ is missing, plus pieces that must be exact
// (the envelope, the child's drawing). Colors stay muted to match the night palette.

export const envelope = () => `
<svg viewBox="0 0 600 380" class="art art--env" role="img" aria-label="Phong bì gửi chương trình">
  <defs>
    <filter id="mud"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="7"/><feColorMatrix values="0 0 0 0 .32  0 0 0 0 .25  0 0 0 0 .14  0 0 0 .55 -.18"/></filter>
    <radialGradient id="wet" cx=".78" cy=".8" r=".45"><stop offset="0" stop-color="#6b5434" stop-opacity=".55"/><stop offset="1" stop-color="#6b5434" stop-opacity="0"/></radialGradient>
  </defs>
  <rect x="6" y="6" width="588" height="368" rx="4" fill="#d9c9a3"/>
  <rect x="6" y="6" width="588" height="368" rx="4" filter="url(#mud)"/>
  <rect x="6" y="6" width="588" height="368" rx="4" fill="url(#wet)"/>
  <g transform="translate(470 30)"><rect width="88" height="104" fill="#e8dcc0" stroke="#8b6b45" stroke-dasharray="4 3"/>
    <rect x="10" y="10" width="68" height="64" fill="#5d7a6b"/><path d="M14 66 L34 40 L46 54 L56 44 L74 66Z" fill="#2f463d"/><circle cx="62" cy="26" r="7" fill="#d8c27a"/>
    <text x="44" y="92" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle" fill="#3b2d1d">800đ VIỆT NAM</text></g>
  <g transform="translate(400 70) rotate(-12)" opacity=".8"><circle r="54" fill="none" stroke="#2a3a68" stroke-width="3"/><circle r="40" fill="none" stroke="#2a3a68" stroke-width="1.5"/>
    <text y="-24" font-family="IBM Plex Mono, monospace" font-size="11" text-anchor="middle" fill="#2a3a68">VỌNG THỦY</text>
    <text y="5" font-family="IBM Plex Mono, monospace" font-size="15" font-weight="bold" text-anchor="middle" fill="#2a3a68">14-8-03</text>
    <text y="30" font-family="IBM Plex Mono, monospace" font-size="10" text-anchor="middle" fill="#2a3a68">SƠN KHÊ</text></g>
  <g font-family="'Dancing Script', 'Patrick Hand', cursive" fill="#22324f">
    <text x="120" y="200" font-size="26">Kính gửi: Chương trình</text>
    <text x="150" y="240" font-size="30" font-weight="700">“Chuyện Lúc Nửa Đêm”</text>
    <text x="120" y="280" font-size="23">Đài Phát thanh – Truyền hình Sơn Khê</text>
    <text x="120" y="314" font-size="21">số 2 đường Bờ Hồ, thị xã Sơn Khê</text>
  </g>
  <text x="40" y="355" font-family="'Patrick Hand', cursive" font-size="15" fill="#5a3b22" opacity=".8">(không ghi người gửi)</text>
</svg>`;

export const tungDrawing = () => `
<svg viewBox="0 0 600 420" class="art art--crayon" role="img" aria-label="Hình vẽ bằng bút sáp của bé Tùng">
  <defs><filter id="cray"><feTurbulence baseFrequency=".9" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="4"/></filter></defs>
  <rect width="600" height="420" fill="#f1ead6"/>
  ${Array.from({ length: 13 }, (_, i) => `<line x1="0" x2="600" y1="${30 + i * 30}" y2="${30 + i * 30}" stroke="#9fb6d6" stroke-width=".8"/>`).join("")}
  <g filter="url(#cray)" stroke-linecap="round">
    ${Array.from({ length: 26 }, (_, i) => `<path d="M${-20 + i * 26} ${230 + (i % 3) * 8} q 60 ${i % 2 ? 18 : -14} 140 0" stroke="#1d2c5c" stroke-width="10" fill="none" opacity=".75"/>`).join("")}
    ${Array.from({ length: 40 }, (_, i) => `<line x1="${(i * 53) % 600}" y1="${(i * 37) % 200}" x2="${(i * 53) % 600 - 12}" y2="${(i * 37) % 200 + 40}" stroke="#4a6aa8" stroke-width="2"/>`).join("")}
    <path d="M140 250 L470 250 L430 300 L170 300 Z" fill="#355a3c" stroke="#1d2d1f" stroke-width="5"/>
    <rect x="380" y="215" width="60" height="36" fill="#2c3d2a" stroke="#111" stroke-width="4"/>
    <path d="M425 215 L425 160 Q425 130 450 135 Q470 140 462 160" fill="none" stroke="#111" stroke-width="8"/>
    <circle cx="410" cy="195" r="14" fill="#c8a982" stroke="#111" stroke-width="3"/><path d="M392 190 Q410 165 428 190 Z" fill="#3d6b3a" stroke="#111" stroke-width="3"/>
    <line x1="410" y1="209" x2="410" y2="245" stroke="#111" stroke-width="5"/>
    <path d="M285 195 L325 195 L305 168 Z" fill="#d9c27a" stroke="#6b5520" stroke-width="3"/>
    <circle cx="305" cy="205" r="11" fill="#e2c9a0" stroke="#111" stroke-width="3"/>
    <path d="M290 216 L320 216 L330 252 L280 252 Z" fill="#2f6fbf" stroke="#123" stroke-width="3"/>
    <circle cx="190" cy="214" r="12" fill="#e9d6b8" stroke="#111" stroke-width="3"/>
    <circle cx="186" cy="212" r="2.5" fill="#000"/><circle cx="194" cy="212" r="2.5" fill="#000"/>
    <path d="M178 205 Q190 190 202 205" fill="#111"/>
    <path d="M175 226 L205 226 L210 252 L170 252 Z" fill="#d61f1f" stroke="#7a0b0b" stroke-width="3"/>
  </g>
  <text x="30" y="400" font-family="'Patrick Hand', cursive" font-size="22" fill="#333">Tùng lớp 5 vẽ. Cái thuyền không có đèn.</text>
</svg>`;

export const portrait = (label, hue = 30) => `
<svg viewBox="0 0 300 400" class="art art--portrait" role="img" aria-label="${label}">
  <rect width="300" height="400" fill="hsl(${hue} 18% 26%)"/>
  <ellipse cx="150" cy="150" rx="62" ry="78" fill="hsl(${hue} 15% 46%)"/>
  <path d="M60 400 Q70 270 150 255 Q230 270 240 400Z" fill="hsl(${hue} 10% 18%)"/>
  <rect width="300" height="400" fill="url(#g)" opacity=".4"/>
  <text x="150" y="385" font-family="IBM Plex Mono, monospace" font-size="13" text-anchor="middle" fill="#ddd" opacity=".6">${label}</text>
</svg>`;

/** Drowned face for the scare, drawn (used if img/ma.jpg is missing). */
export const ghostFace = () => `
<svg viewBox="0 0 400 400" class="art art--ghost">
  <defs><radialGradient id="gf" cx=".5" cy=".55" r=".55"><stop offset="0" stop-color="#9fb1b5"/><stop offset=".7" stop-color="#3c4d52"/><stop offset="1" stop-color="#000"/></radialGradient></defs>
  <rect width="400" height="400" fill="#000"/>
  <ellipse cx="200" cy="215" rx="120" ry="150" fill="url(#gf)"/>
  <ellipse cx="160" cy="200" rx="22" ry="14" fill="#050505"/><ellipse cx="243" cy="198" rx="22" ry="14" fill="#050505"/>
  <circle cx="243" cy="198" r="3" fill="#c9d4d6"/>
  <path d="M175 290 Q200 300 225 290 Q200 312 175 290Z" fill="#141a1c"/>
  ${Array.from({ length: 34 }, (_, i) => { const x = 70 + i * 8; return `<path d="M${x} 40 Q${x + (i % 2 ? 30 : -25)} 200 ${x + (i % 3) * 6 - 4} 400" stroke="#020202" stroke-width="${5 + (i % 4) * 2}" fill="none"/>`; }).join("")}
  <path d="M120 380 L280 380 L300 400 L100 400Z" fill="#7a1010"/>
</svg>`;

export const notebookPage = () => `
<svg viewBox="0 0 600 120" class="art art--stain" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 60 Q150 20 300 70 T600 40 L600 120 L0 120Z" fill="#7a5b2e" opacity=".22"/>
</svg>`;
