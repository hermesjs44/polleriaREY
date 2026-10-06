const CACHE_NAME = 'polleria-rey-v1';
const ASSETS = [
  '/polleriaREY/',
  '/polleriaREY/index.html',
  '/polleriaREY/manifest.json'
];

// Instalar el Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responder con los archivos en caché o buscarlos en la red
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
