// Service worker: network first, cache as a fallback. The game always loads the newest files (tools/stamp.mjs versions
// them); every file fetched once is kept, so a case already opened keeps working if the connection drops mid-game.
const CACHE = "hsnd-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin || r.headers.has("range")) return;
  e.respondWith(fetch(r).then((res) => {
    if (res.ok && res.status === 200 && res.type === "basic") { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)).catch(() => {}); }
    return res;
  }).catch(() => caches.match(r).then((m) => m || caches.match(r, { ignoreSearch: true })).then((m) => m || Response.error())));
});
