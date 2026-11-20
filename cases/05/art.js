// Case 05 drawn stand-ins, shown while a picture is missing.

/** "Vợ tôi, Tết 1991": a figure seen from behind at a window. Details sit where media.js SPOTS expects them. */
export const photoFallback = () => `
<svg viewBox="0 0 400 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#2a2622"/>
  <rect x="150" y="10" width="240" height="140" fill="#5d6a70" stroke="#3b2a1c" stroke-width="10"/>
  <line x1="270" y1="10" x2="270" y2="150" stroke="#3b2a1c" stroke-width="7"/>
  <ellipse cx="205" cy="70" rx="26" ry="34" fill="#c9c2b8" opacity=".28"/>
  <circle cx="196" cy="64" r="3" fill="#222" opacity=".35"/><circle cx="214" cy="64" r="3" fill="#222" opacity=".35"/>
  <rect x="140" y="150" width="260" height="22" fill="#4a3424"/>
  <ellipse cx="135" cy="95" rx="40" ry="48" fill="#d8ccb2"/>
  <path d="M80 140 Q135 110 190 140 L210 260 L60 260 Z" fill="#7a1f22"/>
  <rect x="125" y="160" width="40" height="18" rx="8" fill="#e2c3a6"/><rect x="185" y="160" width="45" height="18" rx="8" fill="#e2c3a6"/>
  <rect x="128" y="168" width="18" height="4" fill="#111"/><line x1="146" y1="174" x2="160" y2="171" stroke="#f3dccb" stroke-width="2"/>
  <rect x="285" y="146" width="40" height="22" rx="4" fill="#ddd"/>
  <rect x="90" y="255" width="160" height="40" fill="#5a3b24"/>
</svg>`;

/** Generic scare face. */
export const ghostFace = () => `
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="300" fill="#060504"/>
  <ellipse cx="150" cy="160" rx="80" ry="105" fill="#e8dccb" opacity=".9"/>
  <path d="M60 120 Q150 0 240 120 L250 300 L50 300 Z" fill="#e9dfc8" opacity=".55"/>
  <ellipse cx="120" cy="150" rx="16" ry="20" fill="#000"/><ellipse cx="180" cy="150" rx="16" ry="20" fill="#000"/>
  <path d="M125 225 Q150 238 175 225" stroke="#300" stroke-width="5" fill="none"/>
</svg>`;
