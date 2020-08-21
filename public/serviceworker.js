const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Cache opened')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request)
                .catch(() => caches.match('offline.html'))
        })
    )
})

self.addEventListener('activate', (event) => {
    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME)
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((name) => {
                if (!cacheWhitelist.includes(name)) {
                    return caches.delete(name)
                }
            })
        ))
    )
})