// Small HTML helpers for writing case documents.
import { base } from "./case.js";

/** A clickable statement line (for "point at the lie" questions). */
export const ln = (id, text) => `<span class="ln" data-line="${id}">${text}</span>`;

/** A rubber stamp. color: red | blue | violet */
export const stamp = (html, style = "", color = "red") => `<div class="stamp stamp--${color}" style="${style}">${html}</div>`;

/**
 * A photo from img/<name>.jpg. If the file is missing, the fallback HTML (usually an SVG) is shown instead,
 * so the game is complete even before the AI pictures are added.
 */
export const pic = (name, cap = "", fallback = "", cls = "") => `
  <figure class="pic ${cls}">
    <img src="${base.img}${name}.jpg" alt="" loading="lazy" data-fallback>
    <div class="pic-fb">${fallback || `<div class="pic-empty">ảnh mờ, không rõ hình</div>`}</div>
    ${cap ? `<figcaption>${cap}</figcaption>` : ""}
  </figure>`;

/** Handwritten block. */
export const hand = (html, cls = "") => `<div class="hand ${cls}">${html}</div>`;

/** A media widget placeholder; js/media.js mounts the real player into it. */
export const media = (type, id) => `<div class="media" data-media="${type}" data-id="${id}"></div>`;

/** Shows only once the dread level is at least n (the reader re-renders on level change). */
export const dread = (n, html) => `<span class="dread-only" data-min="${n}">${html}</span>`;

// Image fallback: swap to the drawn version when a picture is missing.
if (typeof document !== "undefined") {
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName === "IMG" && img.hasAttribute("data-fallback")) img.closest(".pic")?.classList.add("missing");
  }, true);
}
