import Link from "next/link";
import { ArrowUpRight, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

const campusLinks = [
  { href: "/cursos", label: "Cursos del campus" },
  { href: "/biblioteca", label: "Biblioteca emprendedora" },
  { href: "/herramientas", label: "Herramientas digitales" },
  { href: "/herramientas/diagnostico", label: "Diagnóstico inicial" },
  { href: "/mi-progreso", label: "Mi progreso" },
];

const institutionalLinks = [
  { href: "/proyecto", label: "Sobre el proyecto" },
  { href: "/aula-taller", label: "Potencial del Aula-Taller" },
  { href: "/jornadas", label: "Jornadas de formación" },
  { href: "/privacidad", label: "Privacidad y accesibilidad" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-20 border-t border-brand-900/10 bg-brand-950 text-white">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Un campus abierto para aprender, crear y transformar. Cursos breves, herramientas y
              recursos para acompañar a quienes emprenden en Wanda y la región.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/60">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                {site.institution.name} · {site.institution.locality}, {site.institution.province}
              </p>
              <p className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                {site.institution.modality}
              </p>
            </div>
          </div>

          <nav aria-label="Enlaces del campus">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-sea-300">
              Campus
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {campusLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-white/70 transition hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces institucionales">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-sea-300">
              Institucional
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-white/70 transition hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-sea-300">
              Herramientas externas
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.externalLinks.costoClaro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 rounded text-white/70 transition hover:text-white hover:underline"
                >
                  CostoClaro
                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
              </li>
              <li>
                <a
                  href={site.externalLinks.yoEmprendedor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 rounded text-white/70 transition hover:text-white hover:underline"
                >
                  Yo Emprendedor · Provincia de Misiones
                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="flex items-center gap-2 text-xs font-bold text-sea-200">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Privacidad por diseño
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                Sin cuentas ni datos sensibles. El progreso se guarda solo en tu navegador.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-white/50">
            {site.statusNotice} Esta plataforma es una iniciativa educativa de la Escuela Normal
            Superior N.º 9. Las herramientas externas pertenecen a sus respectivos titulares y
            conservan sus propias condiciones de uso. Las constancias emitidas por el campus son
            documentos de actividad educativa de demostración y no constituyen certificación
            oficial.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} NORMAL 9 IMPULSA · Campus Emprendedor. Uso educativo.</p>
            <p>Hecho para aprender, crear y transformar.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
