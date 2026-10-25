import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Info,
  Printer,
  ShieldCheck,
  Target,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { DiagnosticTool } from "@/components/tools/DiagnosticTool";
import { diagnosticAreas, diagnosticIntro, diagnosticDisclaimer } from "@/content/diagnostic";

export const metadata: Metadata = {
  title: diagnosticIntro.title,
  description: diagnosticIntro.description,
};

export default function DiagnosticPage() {
  return (
    <>
      <PageHeader
        eyebrow="Herramienta del campus · Autoevaluación"
        title={diagnosticIntro.title}
        description={diagnosticIntro.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Herramientas", href: "/herramientas" },
          { label: "Diagnóstico inicial" },
        ]}
        actions={
          <Link href="/herramientas" className="btn btn-secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a herramientas
          </Link>
        }
        meta={
          <>
            <span className="badge badge-sea">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              10 preguntas
            </span>
            <span className="badge badge-neutral">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              5 a 8 minutos
            </span>
            <span className="badge badge-neutral">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin registro ni datos personales
            </span>
            <span className="badge badge-neutral">
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Resultado imprimible
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
          <div className="min-w-0">
            <DiagnosticTool />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="card-surface p-5" aria-labelledby="diagnostic-areas-title">
              <h2 id="diagnostic-areas-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <Target className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Qué vas a revisar
              </h2>
              <ul className="mt-3 divide-y divide-line">
                {diagnosticAreas.map((area, index) => (
                  <li key={area.id} className="py-3 first:pt-0 last:pb-0">
                    <p className="flex items-center gap-2 text-sm font-bold text-brand-950">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sea-100 text-[10px] font-extrabold text-sea-800">
                        {index + 1}
                      </span>
                      {area.label}
                    </p>
                    <p className="mt-1 pl-7 text-xs leading-relaxed text-muted">{area.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5" aria-labelledby="diagnostic-privacy-title">
              <h2 id="diagnostic-privacy-title" className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                <ShieldCheck className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Tus respuestas no se guardan
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                El diagnóstico se resuelve en tu navegador. No se envía a un servidor, no se guarda en
                el almacenamiento local y no se vincula con tu recorrido de cursos.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Si querés conservar el resultado, usá «Imprimir o guardar PDF» al final.
              </p>
            </section>

            <section className="card-surface p-5" aria-labelledby="diagnostic-before-title">
              <h2 id="diagnostic-before-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Antes de empezar
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Pensá en lo que hacés hoy, no en lo que te gustaría hacer.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  No hay respuestas correctas ni incorrectas.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Podés volver a una pregunta con el botón «Anterior».
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Al final vas a recibir recomendaciones concretas del campus.
                </li>
              </ul>
            </section>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-amber-950">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {diagnosticDisclaimer}
              </p>
            </aside>

            <Link href="/biblioteca" className="btn btn-secondary w-full">
              <FileText className="h-4 w-4" aria-hidden="true" />
              Explorar recursos
            </Link>
            <Link href="/cursos" className="btn btn-ghost w-full">
              Ver cursos del campus
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
