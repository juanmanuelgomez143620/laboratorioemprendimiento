/**
 * URL pública del campus.
 *
 * En producción se configura con NEXT_PUBLIC_SITE_URL (por ejemplo, el dominio
 * de Vercel). En desarrollo se usa el puerto 3100 para no depender del 3000.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100").replace(
  /\/$/,
  "",
);
