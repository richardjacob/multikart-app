var cacheName = 'multikart';
var filesToCache = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css?family=Lato:300,400,700,900',
  './assets/js/jquery-3.3.1.min.js',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/slick.js',
  './assets/js/script.js',
  './assets/css/vendors/bootstrap.css',
  './assets/css/vendors/slick-theme.css',
  './assets/css/vendors/slick.css',
  './assets/css/style.css'
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
