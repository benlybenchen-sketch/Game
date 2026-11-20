// Pure answer checking for the staged questions. No DOM, no storage.
// Part types: choice | number | time | text | line | pins | order | spot | set (see checkPart).

export function checkQuestion(question, answers, response) {
  let ok = true, complete = true, right = 0;
  for (const part of question.parts) {
    const value = response?.[part.id];
    if (!isFilled(part, value)) { complete = false; ok = false; continue; }
    if (checkPart(part, answers[part.id], value)) right++; else ok = false;
  }
  return { ok, complete, right, total: question.parts.length };
}

export function isFilled(part, value) {
  if (part.type === "pins") return Array.isArray(value) && value.length === part.count;
  if (part.type === "number") return value != null && value !== "" && !Number.isNaN(parseNumber(value));
  if (part.type === "time") return typeof value === "string" && !Number.isNaN(parseTime(value));
  if (part.type === "text") return typeof value === "string" && normalizeText(value).length > 0;
  if (part.type === "order") return Array.isArray(value) && value.length === part.items.length;
  if (part.type === "set") return Array.isArray(value) && value.length === part.count;
  return typeof value === "string" && value.length > 0;
}

export function checkPart(part, answer, value) {
  switch (part.type) {
    case "choice": return value === answer;
    case "number": { const n = parseNumber(value); return answer.some((a) => Math.abs(a - n) < 1e-6); }
    case "time": return answer.some((t) => parseTime(t) === parseTime(value));
    case "text": {
      // part.prefix (optional): words the player may write before the answer, e.g. their own name.
      const v = normalizeText(value), pres = [].concat(part.prefix ? part.prefix() : []).map(normalizeText).filter(Boolean);
      return answer.some((t) => normalizeText(t) === v || pres.some((p) => p + normalizeText(t) === v));
    }
    case "line": return answer.includes(value);
    case "pins": return matchPins(answer, value);
    case "order": return Array.isArray(value) && value.join("|") === answer.join("|");
    case "spot": return answer.includes(value);
    case "set": return new Set(value).size === value.length && value.every((v) => answer.includes(v));
    default: throw new Error("Unknown part type " + part.type);
  }
}

/** "19.050" and "19 050" are thousands; "184,5" is a decimal comma. NaN when no number. */
export function parseNumber(value) {
  let s = String(value).trim().replace(/\s+/g, "");
  if (/^-?\d{1,3}(\.\d{3})+(,\d+)?/.test(s)) s = s.replace(/\./g, "");
  const m = /-?\d+(?:[.,]\d+)?/.exec(s);
  return m ? Number(m[0].replace(",", ".")) : NaN;
}

/** Minutes after midnight for "20:30", "20h30", "8 giờ 30 tối", "6h", "6 giờ sáng". NaN when invalid. */
export function parseTime(value) {
  const s = String(value).trim().toLowerCase();
  const m = /^(\d{1,2})\s*(?::|h|g|giờ|\.)?\s*(\d{1,2})?\s*(?:phút|p)?\s*(sáng|trưa|chiều|tối|đêm|am|pm)?$/.exec(s);
  if (!m) return NaN;
  let h = Number(m[1]);
  const min = m[2] ? Number(m[2]) : 0;
  const part = m[3];
  if (part && h <= 12) {
    if ((part === "chiều" || part === "tối" || part === "pm") && h < 12) h += 12;
    if ((part === "sáng" || part === "am" || part === "đêm") && h === 12) h = 0;
  }
  return h < 24 && min < 60 ? h * 60 + min : NaN;
}

export function normalizeText(value) {
  return String(value).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d")
    .toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Every group must be covered by exactly one distinct pinned document. */
export function matchPins(groups, pins) {
  if (!Array.isArray(pins) || new Set(pins).size !== pins.length || pins.length !== groups.length) return false;
  const used = new Array(pins.length).fill(false);
  const place = (g) => {
    if (g === groups.length) return true;
    for (let i = 0; i < pins.length; i++) {
      if (!used[i] && groups[g].includes(pins[i])) {
        used[i] = true;
        if (place(g + 1)) return true;
        used[i] = false;
      }
    }
    return false;
  };
  return place(0);
}

/** Reverses tools/secret.mjs: UTF-8 bytes XOR key, base64. Only keeps answers from a casual glance. */
export function decode(b64, key) {
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const k = new TextEncoder().encode(key);
  for (let i = 0; i < bytes.length; i++) bytes[i] ^= k[i % k.length];
  return JSON.parse(new TextDecoder().decode(bytes));
}
