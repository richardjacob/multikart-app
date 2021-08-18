var cacheName = 'multikart';
var filesToCache = [
  './',
  './index.html',
  './assets/css/vendors/bootstrap.css',
  './assets/css/vendors/bootstrap.rtl.css',
  './assets/css/vendors/iconly.css',
  './assets/css/vendors/pricing-slider.css',
  './assets/css/vendors/slick-theme.css',
  './assets/css/vendors/slick.css',
  './assets/css/dark.css',
  './assets/css/style.css',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/filter.js',
  './assets/js/jquery-3.3.1.min.js',
  './assets/js/password-hs.js',
  './assets/js/pricing-slider.js',
  './assets/js/script.js',
  './assets/js/slick.js',
  './assets/js/timer.js',
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
