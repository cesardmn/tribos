// sw.js
const CACHE_NAME = 'tribos-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/Home.module.css',
  '/logos/new_logo.svg',
  '/logos/tribos_transparencia.png',
  '/logos/skeleton/transparente.svg',
  '/qrcode/light.svg', // Adicione outros arquivos que você deseja armazenar em cache
  '/qrcode/dark.svg',
  // Adicione outros recursos (JS, imagens, etc.) conforme necessário
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
