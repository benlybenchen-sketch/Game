// The case being played. Every module reads case data through C (a live binding set by loadCase).
export let C = null;
export let CASE_ID = null;
/** Where the current case keeps its pictures and recorded voices. */
export const base = { img: "img/01/", audio: "audio/01/" };

export async function loadCase(id) {
  const m = await import(`../cases/${id}/index.js`);
  C = m; CASE_ID = id;
  base.img = `img/${id}/`; base.audio = `audio/${id}/`;
  return m;
}
