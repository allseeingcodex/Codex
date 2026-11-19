// Minimal service worker so Chrome treats the Codex as an installable app. It does no caching,
// so the app always loads the latest version of the site.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
