/* Control de Asistencia · Recepción IPUE Alcorcón
 * Service worker solo para el aviso de la foto. El servidor manda un aviso sin
 * contenido (Web Push) cuando el evento cumple el tiempo para la foto; aquí se
 * muestra la notificación. No guarda nada en caché ni lee datos de nadie. */
'use strict';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function (e) {
  e.waitUntil(self.registration.showNotification('Ya puede hacer la foto', {
    body: 'El evento ya lleva el tiempo para la foto. Ábralo y hágala donde se vea toda la congregación.',
    tag: 'foto',
    renotify: true,
    requireInteraction: true,
    icon: 'icono-192.png',
    badge: 'icono-aviso.png',
    vibrate: [200, 100, 200, 100, 300],
    lang: 'es'
  }));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (lista) {
    for (var i = 0; i < lista.length; i++) {
      if ('focus' in lista[i]) return lista[i].focus();
    }
    return self.clients.openWindow('./');
  }));
});
