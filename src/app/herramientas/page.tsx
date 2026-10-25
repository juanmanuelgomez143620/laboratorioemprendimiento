import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  Compass,
  ExternalLink,
  Info,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ToolCard } from "@/components/tools/ToolCard";
import { tools } from "@/content/tools";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Herramientas",
  description:
    "Diagnóstico inicial propio, acceso a CostoClaro y Yo Emprendedor como herramientas externas, y proyectos previstos del campus.",
};

const externalIds = ["costoclaro", "yo-emprendedor"];

export default function ToolsPage() {
  const campusTools = tools.filter((tool) => tool.status === "disponible" && tool.origin === "campus");
  const externalTools = tools.filter((tool) => tool.status === "disponible" && externalIds.includes(tool.id));
  const plannedTools = tools.filter((tool) => tool.status === "previsto");

  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Herramientas digitales"
        title="Decisiones con datos, no con suposiciones"
        description="El campus combina una herramienta de autoevaluación propia con accesos a aplicaciones existentes. Cada enlace externo está identificado y conserva su propio funcionamiento, autoría y condiciones de uso."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Herramientas" }]}
        actions={
          <>
            <Link href="/herramientas/diagnostico" className="btn btn-on-dark">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Hacer el diagnóstico
            </Link>
            <Link href="/biblioteca" className="btn btn-outline-on-dark">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Ver recursos de apoyo
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-on-dark">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              {campusTools.length} herramienta del campus
            </span>
            <span className="badge badge-on-dark">
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              {externalTools.length} accesos externos
            </span>
            <span className="badge badge-on-dark">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {plannedTools.length} proyectos previstos
            </span>
            <span className="badge badge-on-dark">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin registro en el campus
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <section aria-labelledby="campus-tools-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Del campus</p>
            <h2 id="campus-tools-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Una herramienta propia para empezar
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              El diagnóstico inicial te ayuda a mirar tu emprendimiento en cuatro áreas y a elegir
              por dónde seguir. Se completa en esta página, no se guarda y podés imprimir el
              resultado.
            </p>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              {campusTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} featured />
              ))}
            </div>
            <aside className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5 sm:p-6" aria-labelledby="campus-tools-note-title">
              <h3 id="campus-tools-note-title" className="flex items-center gap-2 text-base font-extrabold text-brand-950">
                <Info className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Cómo funciona
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Diez preguntas sobre organización, costos, promoción y herramientas digitales.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Un resultado orientativo por área, con recomendaciones del campus.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  No hay respuestas correctas ni incorrectas y no se piden datos personales.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Podés imprimir o guardar el resultado como PDF.
                </li>
              </ul>
              <p className="mt-4 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-amber-950 ring-1 ring-amber-200">
                Es una herramienta educativa y orientativa. No mide solvencia ni constituye un
                criterio para acceder a créditos o beneficios.
              </p>
            </aside>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="external-tools-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Accesos externos</p>
            <h2 id="external-tools-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Aplicaciones que pertenecen a otros
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Estos enlaces abren sitios externos en una pestaña nueva. NORMAL 9 IMPULSA no
              administra esas aplicaciones, no modifica su código y no gestiona los datos que se
              carguen en ellas.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {externalTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              Antes de usar una herramienta externa, revisá sus condiciones de uso y su política de
              privacidad. El acceso puede requerir registro en el sitio de origen.
            </p>
            <a
              href={site.externalLinks.yoEmprendedor}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow shrink-0 text-sm"
            >
              Ir a Yo Emprendedor
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(abre en una pestaña nueva)</span>
            </a>
          </div>
        </section>

        <section id="proyectos-previstos" className="mt-14 scroll-mt-28" aria-labelledby="planned-tools-title">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Proyectos previstos</p>
              <h2 id="planned-tools-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
                Lo que todavía no está disponible
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">
                Estas ideas forman parte de la hoja de ruta del campus, pero no son aplicaciones
                funcionales. No tienen enlaces de uso porque todavía no existen. Las publicamos para
                que la propuesta sea transparente y para recibir aportes.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-dashed border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              En etapa de diseño
            </span>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {plannedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-slate-50 p-5">
            <p className="flex items-start gap-2 text-sm leading-relaxed text-body">
              <Calculator className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              Mientras tanto, podés usar las plantillas de la biblioteca y la calculadora externa
              CostoClaro para trabajar con costos y presupuestos. Los proyectos previstos no tienen
              fecha de lanzamiento confirmada.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/biblioteca" className="btn btn-secondary btn-sm">
                Usar una plantilla
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={site.externalLinks.costoClaro}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                Abrir CostoClaro
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">(abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card sm:p-8" aria-labelledby="tools-principles-title">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="eyebrow">Criterios del campus</p>
              <h2 id="tools-principles-title" className="mt-2 text-2xl font-extrabold text-brand-950 sm:text-3xl">
                Herramientas con propósito y límites claros
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Cada herramienta debe resolver una necesidad concreta y explicar qué hace con los
                datos. No incorporamos aplicaciones solo para completar un catálogo ni presentamos
                proyectos futuros como si ya estuvieran disponibles.
              </p>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-body">
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Privacidad por diseño: el campus no pide cuentas ni datos sensibles.
              </li>
              <li className="flex gap-2.5">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Los enlaces externos se identifican y abren en una pestaña nueva.
              </li>
              <li className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Los proyectos previstos no se presentan como productos terminados.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
