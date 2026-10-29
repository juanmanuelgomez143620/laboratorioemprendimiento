/**
 * Service worker mínimo para NORMAL 9 IMPULSA.
 * - Las páginas se piden primero a la red y, si falla, se usa la copia en caché.
 * - Los recursos estáticos con nombre versionado se sirven desde caché.
 * - No se cachean datos personales: el progreso vive en localStorage, no en la red.
 */
const CACHE_NAME = "normal9-impulsa-v4";
const PRECACHE_URLS = [
  "/",
  "/cursos",
  "/biblioteca",
  "/glosario",
  "/preguntas-frecuentes",
  "/herramientas",
  "/herramientas/diagnostico",
  "/jornadas",
  "/proyecto",
  "/aula-taller",
  "/privacidad",
  "/mi-progreso",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png",
  "/institucional/escudo-escuela-normal-9.png",
  // Portada y primera lección de cada curso: permiten empezar a leer sin conexión.
  "/cursos/mi-primer-emprendimiento",
  "/cursos/mi-primer-emprendimiento/lecciones/de-la-idea-al-emprendimiento",
  "/cursos/mi-primer-emprendimiento/evaluacion",
  "/cursos/costos-y-precios",
  "/cursos/costos-y-precios/lecciones/que-es-un-costo",
  "/cursos/costos-y-precios/evaluacion",
  "/cursos/mi-marca-y-mi-identidad-comercial",
  "/cursos/mi-marca-y-mi-identidad-comercial/lecciones/identidad-y-nombre",
  "/cursos/mi-marca-y-mi-identidad-comercial/evaluacion",
  "/cursos/herramientas-digitales-para-mi-negocio",
  "/cursos/herramientas-digitales-para-mi-negocio/lecciones/organizacion-digital",
  "/cursos/herramientas-digitales-para-mi-negocio/evaluacion",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/_next/image") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/recursos/") ||
    /\.(?:css|js|woff2?|png|jpe?g|webp|svg|ico)$/i.test(url.pathname)
  );
}

function offlineFallback() {
  return new Response(
    `<!doctype html><html lang="es-AR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sin conexión · NORMAL 9 IMPULSA</title><style>body{font-family:system-ui,sans-serif;background:#f6fafc;color:#071f43;margin:0;display:grid;min-height:100vh;place-items:center;padding:24px}main{max-width:34rem;background:#fff;border:1px solid #dbe6ef;border-radius:20px;padding:32px;box-shadow:0 24px 48px -28px rgba(7,31,67,.32)}h1{font-size:1.7rem;line-height:1.15;margin:0 0 12px}p{line-height:1.7;color:#3f5870}a{display:inline-block;margin-top:16px;background:#0c3168;color:#fff;text-decoration:none;font-weight:700;padding:10px 16px;border-radius:10px}</style></head><body><main><h1>Sin conexión</h1><p>No pudimos cargar esta página en este momento. El campus necesita conexión para las páginas que todavía no están guardadas en tu navegador.</p><p>Tu progreso local no se pierde. Cuando vuelvas a tener conexión, podés retomar el curso donde lo dejaste.</p><a href="/">Volver al inicio</a></main></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          const root = await caches.match("/");
          if (root) return root;
          return offlineFallback();
        }),
    );
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      }),
    );
  }
});
