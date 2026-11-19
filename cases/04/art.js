// Drawn stand-ins for case 04 (used while a picture is missing). The two portraits carry the clue themselves:
// bà Hoa's mole and hair parting on the viewer's right, the woman's on the viewer's left.

/** A plain portrait. side: "r" (bà Hoa) or "l" (the woman). */
export function face(side, { purple = side === "r", grey = side === "l" } = {}) {
  const m = side === "r" ? 1 : -1;
  return `<svg viewBox="0 0 300 400" class="art"><rect width="300" height="400" fill="${grey ? "#c9d3cc" : "#d8b98f"}"/>
    <path d="M60 400 Q150 300 240 400Z" fill="${purple ? "#5b2a6e" : "#6b4a2e"}"/>
    <ellipse cx="150" cy="185" rx="70" ry="92" fill="#e2c3a0"/>
    <path d="M78 170 Q80 80 150 78 Q220 80 222 170 Q214 120 ${150 + m * 22} 104 L ${150 + m * 18} 96 Q120 100 86 140 Z" fill="#1d1712"/>
    <ellipse cx="122" cy="178" rx="10" ry="6" fill="#2a1e17"/><ellipse cx="178" cy="178" rx="10" ry="6" fill="#2a1e17"/>
    <path d="M110 162 Q122 156 134 162 M166 162 Q178 156 190 162" stroke="#2a1e17" stroke-width="3" fill="none"/>
    <path d="M150 190 L144 222 Q150 226 156 222" stroke="#b08a6a" stroke-width="2" fill="none"/>
    <path d="M128 244 Q150 254 172 244" stroke="#8a4a40" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="${150 + m * 28}" cy="248" r="3.4" fill="#1a120d"/></svg>`;
}

/** An ink fingerprint: kind "loop" (móc) or "whorl" (xoáy). Drawn ridges, so the pattern can be read. */
export function print(kind) {
  const ridges = [];
  if (kind === "whorl") for (let r = 8; r < 96; r += 7) ridges.push(`<ellipse cx="100" cy="118" rx="${r}" ry="${r * 1.22}" />`);
  else for (let k = 0; k < 13; k++) { const w = 14 + k * 7; ridges.push(`<path d="M${40 - k * 1.5} ${200 - k * 4} L${40 - k * 1.5} ${130 - k} Q${40 - k * 1.5} ${60 - k * 6} ${100} ${60 - k * 6} Q${100 + w} ${60 - k * 6} ${100 + w * 0.4} ${130 - k * 2} Q${70} ${170} ${40 - k * 1.5} ${160}" />`); }
  return `<svg viewBox="0 0 200 240" class="art fp-art"><rect width="200" height="240" fill="#efe9da"/>
    <clipPath id="fpc-${kind}"><ellipse cx="100" cy="122" rx="78" ry="104"/></clipPath>
    <g clip-path="url(#fpc-${kind})" fill="none" stroke="#1b1712" stroke-width="3.2" opacity=".85">${ridges.join("")}</g></svg>`;
}

/** A child-like drawing placeholder. */
export const drawing = (n) => `<svg viewBox="0 0 300 400" class="art"><rect width="300" height="400" fill="#d9d6cf"/>
  <path d="M40 330 L260 330" stroke="#555" stroke-width="3"/><circle cx="110" cy="160" r="40" fill="none" stroke="#5b2a6e" stroke-width="6"/>
  <path d="M90 140 L130 180 M130 140 L90 180" stroke="#111" stroke-width="10"/><text x="150" y="380" text-anchor="middle" font-family="Patrick Hand" font-size="20" fill="#555">tranh ${n}</text></svg>`;

export const ghostFace = () => `<svg viewBox="0 0 200 240" class="art"><rect width="200" height="240" fill="#050505"/>
  <ellipse cx="100" cy="118" rx="52" ry="66" fill="#8aa0a8"/><ellipse cx="80" cy="108" rx="10" ry="7" fill="#000"/><ellipse cx="120" cy="108" rx="10" ry="7" fill="#000"/>
  <path d="M78 150 Q100 170 122 150" stroke="#3b1020" stroke-width="7" fill="none"/><circle cx="128" cy="152" r="3" fill="#000"/></svg>`;
