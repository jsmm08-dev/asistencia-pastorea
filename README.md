# Control de Asistencia · Recepción

Formulario de recepción de la congregación IPUE de Alcorcón, publicado en
**https://asistencia.pastorea.me**.

Recepción registra por su nombre a quienes llegan a cada evento (bautizados,
bautizados de visita, simpatizantes y menores), con una anotación por persona
y la foto del evento cuando lleva al menos una hora. Hace falta la clave de
recepción.

- La página no guarda datos: los envía a una aplicación web de Google Apps
  Script (`ENDPOINT` en `index.html`), que los anota en la hoja «Registro —
  Control de Asistencia» del pastor.
- `index.html` se genera a partir de `Formulario.html` con
  `construir-pagina.py`; no se edita a mano.
- `?demo` al final de la dirección abre la vista de prueba con datos inventados.
- `sw.js` solo muestra el aviso «Ya puede hacer la foto»: el servidor manda un
  aviso sin contenido (Web Push) cuando el evento cumple el tiempo para la
  foto. No guarda nada en caché. En iPhone, el aviso solo llega si la página
  está añadida a la pantalla de inicio (`manifest.webmanifest` y los iconos).
