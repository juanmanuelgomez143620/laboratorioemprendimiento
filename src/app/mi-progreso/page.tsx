import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  HardDrive,
  RotateCcw,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { LocalDataNotice } from "@/components/ui/LocalDataNotice";
import { ProgressDashboard, type ProgressCourseData } from "@/components/progress/ProgressDashboard";
import { courses } from "@/content/courses";
import { toCourseFlowData } from "@/lib/presentation";

export const metadata: Metadata = {
  title: "Mi progreso",
  description:
    "Consultá el avance de tus cursos, tus evaluaciones y tus constancias. El progreso se guarda solo en este navegador y podés borrarlo cuando quieras.",
};

export default function ProgressPage() {
  const progressCourses: ProgressCourseData[] = courses.map((course) => ({
    ...toCourseFlowData(course),
    title: course.title,
    level: course.level,
    accent: course.accent,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Tu recorrido"
        title="Mi progreso"
        description="Acá podés ver qué lecciones completaste, cómo te fue en las evaluaciones y si ya tenés disponible una constancia. Todo se guarda únicamente en este navegador."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Mi progreso" }]}
        actions={
          <>
            <Link href="/cursos" className="btn btn-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Explorar cursos
            </Link>
            <Link href="/herramientas/diagnostico" className="btn btn-secondary">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Hacer el diagnóstico
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-sea">
              <HardDrive className="h-3.5 w-3.5" aria-hidden="true" />
              Guardado local
            </span>
            <span className="badge badge-neutral">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin cuentas ni servidores
            </span>
            <span className="badge badge-neutral">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Se puede borrar
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0">
            <ProgressDashboard courses={progressCourses} />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="card-surface p-5" aria-labelledby="progress-how-title">
              <h2 id="progress-how-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <HardDrive className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Cómo se guarda
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Cuando marcás una lección o corregís una evaluación, el campus guarda esos datos en el
                almacenamiento local de tu navegador. No viajan a un servidor ni se comparten entre
                dispositivos.
              </p>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sea-600" aria-hidden="true" />
                  Se conserva si recargás o cerrás la pestaña.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sea-600" aria-hidden="true" />
                  Se pierde si borrás los datos del navegador.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sea-600" aria-hidden="true" />
                  No se sincroniza entre tu celular y tu computadora.
                </li>
              </ul>
              <Link href="/privacidad" className="link-inline mt-3 inline-flex text-xs">
                Leer el aviso de privacidad
              </Link>
            </section>

            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5" aria-labelledby="progress-certificates-title">
              <h2 id="progress-certificates-title" className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                <ShieldCheck className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Constancias
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                La constancia se habilita cuando completás todas las lecciones y aprobás la
                autoevaluación con 70 % o más. Es un documento de actividad educativa de
                demostración, no una certificación oficial.
              </p>
              <Link href="/cursos" className="link-arrow mt-3 text-sm">
                Ver cursos disponibles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>

            <section className="card-surface p-5" aria-labelledby="progress-reset-title">
              <h2 id="progress-reset-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <Trash2 className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Borrar el progreso
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Podés borrar el avance de un curso o de todo el campus desde el panel principal. La
                acción no se puede deshacer y no elimina archivos que ya hayas descargado.
              </p>
            </section>

            <LocalDataNotice />
          </aside>
        </div>
      </div>
    </>
  );
}
