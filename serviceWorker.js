const cacheName = 'daniellabrador-v2.1.0';
const precacheResources = [
  '/',
  '/index.html',
  '/js-api-app.html',
  '/manual-testing.html',
  '/src/stylesheets/index.css',
  '/src/stylesheets/blog.css',
  '/src/stylesheets/reset.css',
  '/src/scripts/main.js',
  '/src/images/blog/author__dan-labrador.jpg',
  '/src/images/blog/js-api-app.jpg',
  '/src/images/blog/manual-testing.jpg',
  '/src/images/index/articles-manual-software-testing.jpg',
  '/src/images/index/projects-aurorabeats.jpg',
  '/src/images/index/projects-daniellabrador.com-v1.jpg',
  '/src/images/index/projects-jammming.jpg',
  '/src/images/index/projects-pokedex.jpg',
  '/src/images/index/projects-spotify-music-previews.jpg',
  '/src/images/index/skills-git-dark.png',
  '/src/images/index/skills-git.png',
  '/src/images/index/skills-stack-dark.png',
  '/src/images/index/skills-stack.png',
  '/src/images/index/skills-structures-dark.png',
  '/src/images/index/skills-structures.png',
  '/src/images/index/skills-test-dark.png',
  '/src/images/index/skills-test.png',
  '/src/images/logo/android-chrome-192x192.png',
  '/src/images/logo/android-chrome-512x512.png',
  '/src/images/logo/apple-touch-icon.png',
  '/src/images/logo/favicon-16x16.png',
  '/src/images/logo/favicon-32x32.png',
  '/src/images/logo/favicon.ico',
  '/src/images/logo/logo-light.svg',
  '/src/images/logo/mstile-144x144.png',
  '/src/images/logo/mstile-150x150.png',
  '/src/images/logo/mstile-310x150.png',
  '/src/images/logo/mstile-310x310.png',
  '/src/images/logo/mstile-70x70.png',
  '/src/images/logo/safari-pinned-tab.svg',
  '/src/images/socials/github.svg',
  '/src/images/socials/linkedin.svg',
];

// On install: add core files to cache
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// On fetch: respond with cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
}); 