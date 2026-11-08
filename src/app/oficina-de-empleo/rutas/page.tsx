import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Compass,
  ExternalLink,
  FileText,
  GraduationCap,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { employmentRoutes } from "@/content/employment-routes";
import { site } from "@/content/site";
import { resolveRoute, type ResolvedRouteStep } from "@/lib/employment-routes";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Rutas por programa de empleo",
  description:
    "Recorridos formativos sugeridos que relacionan los cursos y recursos del campus con las prestaciones de la Oficina de Empleo de Wanda.",
};

const kindIcon: Record<ResolvedRouteStep["kindLabel"], typeof BookOpen> = {
  "Curso completo": GraduationCap,
  Lección: BookOpen,
  Recurso: FileText,
  Herramienta: Wrench,
};

export default function EmploymentRoutesPage() {
  const routes = employmentRoutes.map(resolveRoute);
  const publicUrl = siteUrl.replace(/^https?:\/\//, "");

  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Empleo y emprendimiento · Rutas formativas"
        title="Rutas por programa de empleo"
        description="Seis recorridos que ordenan los cursos, lecciones y recursos del campus según los programas de empleo que se gestionan en Wanda. Los puede indicar el equipo de la Oficina de Empleo en una entrevista, usarlos un docente en un taller o seguirlos cualquier persona por su cuenta."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Oficina de Empleo", href: "/oficina-de-empleo" },
          { label: "Rutas por programa" },
        ]}
        actions={
          <div className="no-print flex flex-wrap gap-3">
            <PrintButton label="Imprimir rutas" className="btn-on-dark" />
            <Link href="/propuesta" className="btn btn-outline-on-dark">
              Ver la propuesta
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <aside
            role="note"
            className="flex gap-3 rounded-2xl border border-sea-200 bg-sea-50 p-5 text-sm leading-relaxed text-sea-950"
          >
            <Compass className="mt-0.5 h-5 w-5 shrink-0 text-sea-700" aria-hidden="true" />
            <p>
              <strong>Pensado con los lineamientos de la Oficina de Empleo local.</strong>{" "}
              {site.alignmentNotice}
            </p>
          </aside>
          <aside
            role="note"
            className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950"
          >
            <strong>Material complementario.</strong> Las rutas son una propuesta pedagógica de la
            escuela. No reemplazan requisitos, formularios, capacitaciones obligatorias ni la
            evaluación de los programas, que se consultan directamente con la Oficina de Empleo.
          </aside>
        </div>

        <nav aria-label="Índice de rutas" className="no-print mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <a
              key={route.id}
              href={`#${route.id}`}
              className="group rounded-2xl border border-line bg-white shadow-card transition hover:-translate-y-0.5 hover:border-brand-200"
            >
              <span className="block p-4">
                <span className="block text-sm font-extrabold text-brand-950 group-hover:text-brand-800">
                  {route.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">
                  {route.programs.join(" · ")}
                </span>
              </span>
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-8">
          {routes.map((route) => (
            <section
              key={route.id}
              id={route.id}
              aria-labelledby={`${route.id}-title`}
              className="print-avoid-break rounded-[1.5rem] border border-line bg-white p-5 shadow-card sm:p-8"
            >
              <div className="flex flex-wrap gap-2">
                {route.programs.map((program) => (
                  <span key={program} className="badge badge-brand print-badge">
                    {program}
                  </span>
                ))}
              </div>
              <h2 id={`${route.id}-title`} className="mt-3 text-2xl font-extrabold text-brand-950 sm:text-3xl">
                {route.title}
              </h2>

              <dl className="mt-5 grid gap-4 text-sm leading-relaxed md:grid-cols-3">
                <div className="flex gap-3">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-brand-950">Para quién</dt>
                    <dd className="text-body">{route.audience}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-brand-950">Objetivo</dt>
                    <dd className="text-body">{route.goal}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  <div>
                    <dt className="font-bold text-brand-950">Dedicación orientativa</dt>
                    <dd className="text-body">{route.estimatedHours}</dd>
                  </div>
                </div>
              </dl>

              <ol className="mt-6 grid gap-2.5">
                {route.resolvedSteps.map((step, index) => {
                  const Icon = kindIcon[step.kindLabel];
                  const content = (
                    <>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-900 text-xs font-extrabold text-white">
                        {index + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-bold uppercase tracking-wide text-sea-700">
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          {step.kindLabel}
                          {step.context && <span className="text-muted normal-case">· {step.context}</span>}
                          {step.minutes ? <span className="text-muted normal-case">· {step.minutes} min</span> : null}
                        </span>
                        <span className="mt-0.5 block font-extrabold text-brand-950">{step.title}</span>
                        <span className="block text-sm leading-relaxed text-muted">{step.note}</span>
                      </span>
                      {step.external ? (
                        <ExternalLink className="no-print mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="no-print mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand-700" aria-hidden="true" />
                      )}
                    </>
                  );
                  const className =
                    "group flex items-start gap-3 rounded-xl border border-line bg-paper p-3.5 transition hover:border-brand-200 hover:bg-brand-50/60";
                  return (
                    <li key={`${route.id}-${step.href}-${index}`}>
                      {step.external ? (
                        <a href={step.href} target="_blank" rel="noopener noreferrer" className={className}>
                          {content}
                          <span className="sr-only">(abre en una pestaña nueva)</span>
                        </a>
                      ) : (
                        <Link href={step.href} className={className}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-sea-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-sea-800">
                    Entregable de la persona
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-sea-950">{route.deliverable}</p>
                </div>
                <div className="rounded-xl bg-brand-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-800">
                    Uso en el acompañamiento
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-950">{route.accompaniment}</p>
                </div>
              </div>

              <p className="print-only mt-4 text-xs">
                Acceso: {publicUrl}/oficina-de-empleo/rutas#{route.id}
              </p>
            </section>
          ))}
        </div>

        <section className="no-print mt-12 rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card sm:p-8">
          <h2 className="text-2xl font-extrabold text-brand-950">¿Atendés a alguien que no encaja en una ruta?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
            El diagnóstico inicial sugiere cursos según la situación de cada persona emprendedora, y la
            biblioteca reúne todas las plantillas y guías imprimibles. Para consultas sobre requisitos e
            inscripciones de los programas, comunicate con la Oficina de Empleo al{" "}
            {site.employmentOffice.phone}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/herramientas/diagnostico" className="btn btn-sea">
              Diagnóstico inicial
            </Link>
            <Link href="/biblioteca" className="btn btn-secondary">
              Biblioteca de recursos
            </Link>
            <Link href="/oficina-de-empleo" className="btn btn-secondary">
              Volver a la Oficina de Empleo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
