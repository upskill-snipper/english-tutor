const CACHE_NAME = 'learnright-v1';
const SHELL_URLS = ['/english-tutor/', '/english-tutor/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(SHELL_URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isHTML = e.request.mode === 'navigate' || url.pathname.endsWith('.html');

  if (isHTML) {
    // Network-first for HTML so users always get the latest version
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const clone = r.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          return r;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first for static assets (js, css, images)
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))
    );
  }
});
