/* Service worker mínimo: permite instalar o app na tela inicial. Os dados vêm sempre da internet. */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
