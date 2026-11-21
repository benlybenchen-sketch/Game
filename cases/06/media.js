// Case 06 widgets: a Chinese abacus (suanpan) drawn in SVG. Each rod: two upper beads worth 5, five lower beads worth 1.
// Beads that count are pushed against the beam. The rod with the red dot is the unit of đồng bạc; the two rods to its right are hào and xu.

/** Values shown in the broker's ledger, digits from the leftmost rod (hundreds) to the rightmost (xu). */
const ABACI = { ly: [0, 2, 5, 0, 0], vuong: [0, 7, 0, 0, 0], trieu: [0, 4, 0, 0, 0], hoan: [0, 3, 2, 0, 0] };
const UNIT = 2;   // index of the rod marked with the red dot

function rod(x, d) {
  const up = d >= 5 ? 1 : 0, low = d % 5, beads = [];
  for (let i = 0; i < 2; i++) {                 // upper deck: beam at y=46; counted beads sit at the beam
    const counted = i === 1 && up;
    const y = counted ? 38 : 10 + i * 12;
    beads.push(`<ellipse cx="${x}" cy="${y}" rx="11" ry="5.5" class="bead"/>`);
  }
  for (let i = 0; i < 5; i++) {                 // lower deck: counted beads pushed up to the beam
    const counted = i < low;
    const y = counted ? 56 + i * 12 : 56 + (i + 2) * 12;
    beads.push(`<ellipse cx="${x}" cy="${y}" rx="11" ry="5.5" class="bead"/>`);
  }
  return `<line x1="${x}" y1="4" x2="${x}" y2="138" class="rod"/>${beads.join("")}`;
}

export function abacus(el, id) {
  const v = ABACI[id] || [0, 0, 0, 0, 0];
  const xs = v.map((_, i) => 22 + i * 30);
  el.innerHTML = `<svg class="abacus" viewBox="0 0 164 146" role="img" aria-label="Bàn tính">
    <rect x="2" y="2" width="160" height="140" rx="4" class="frame"/>
    ${v.map((d, i) => rod(xs[i], d)).join("")}
    <rect x="2" y="44" width="160" height="5" class="beam"/>
    <circle cx="${xs[UNIT]}" cy="46.5" r="2.6" class="dot"/>
  </svg>`;
}
