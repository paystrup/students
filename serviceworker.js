// path /insects added for github pages directory
const cacheName = 'cache-students';

// cache all insects + html in array
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/', '/index.html' ]);
    })
  );
});


// fetch from cache
// .catch -> if the content isn't found online, it fetches it from the cache
// https://developer.mozilla.org/en-US/docs/Web/API/Cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});