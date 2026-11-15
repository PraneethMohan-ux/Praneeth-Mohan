const CACHE_NAME = 'praneeth-series-v7';
const APP_URL = self.registration.scope;
const APP_SHELL = [
  APP_URL,
  new URL('manifest.webmanifest', APP_URL).href,
  new URL('favicon.svg', APP_URL).href,
  new URL('icons/icon-180.png?v=7', APP_URL).href,
  new URL('icons/icon-192.png?v=7', APP_URL).href,
  new URL('icons/icon-512.png?v=7', APP_URL).href,
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith('praneeth-series-') && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || /\.(?:mp3|pdf)$/i.test(url.pathname)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(APP_URL, response.clone());
          }
          return response;
        } catch {
          return (await caches.match(request)) ?? (await caches.match(APP_URL)) ?? Response.error();
        }
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    })(),
  );
});
