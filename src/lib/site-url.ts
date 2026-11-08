/**
 * URL pública del campus.
 *
 * Orden de prioridad:
 * 1. NEXT_PUBLIC_SITE_URL, si se configura (por ejemplo, un dominio propio).
 * 2. VERCEL_PROJECT_PRODUCTION_URL, que Vercel define automáticamente al publicar.
 * 3. En desarrollo, el puerto 3100 para no depender del 3000.
 *
 * Solo se usa en componentes de servidor, donde estas variables están disponibles.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3100";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");
