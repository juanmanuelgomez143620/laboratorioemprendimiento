import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProgressProvider } from "@/components/providers/ProgressProvider";
import { PWARegister } from "@/components/providers/PWARegister";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campus Emprendedor — Aprender, crear y transformar.",
    template: "%s · Campus Emprendedor",
  },
  description: site.description,
  applicationName: "Campus Emprendedor",
  manifest: "/manifest.webmanifest",
  category: "education",
  keywords: [
    "campus emprendedor",
    "cursos para emprendedores",
    "Wanda",
    "Misiones",
    "Escuela Normal Superior N.º 9",
    "costos",
    "administración",
    "herramientas digitales",
  ],
  authors: [{ name: site.institution.name }],
  creator: site.institution.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Campus Emprendedor — Aprender, crear y transformar.",
    description: site.description,
    siteName: "Campus Emprendedor",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Campus Emprendedor — Aprender, crear y transformar." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Emprendedor — Aprender, crear y transformar.",
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071f43",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <ProgressProvider>
          <a href="#contenido" className="skip-link">
            Saltar al contenido principal
          </a>
          <SiteHeader />
          <main id="contenido" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </ProgressProvider>
        <PWARegister />
      </body>
    </html>
  );
}
