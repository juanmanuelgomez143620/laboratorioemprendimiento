import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, BookOpen, CheckCircle2, Printer, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { CertificatePanel } from "@/components/courses/CertificatePanel";
import { courses, getCourseBySlug } from "@/content/courses";
import { toCourseFlowData } from "@/lib/presentation";
import { site } from "@/content/site";

interface CertificatePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CertificatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) return { title: "Constancia no disponible" };

  return {
    title: `Constancia · ${course.shortTitle}`,
    description: `Constancia de actividad educativa de demostración del curso ${course.title}.`,
    robots: { index: false, follow: false },
  };
}

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${course.title} · Documento de demostración`}
        title="Constancia de actividad educativa"
        description="Este documento se habilita cuando completaste todas las lecciones y aprobaste la autoevaluación final. Se genera en tu navegador y no se envía a ningún servidor."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Cursos", href: "/cursos" },
          { label: course.shortTitle, href: `/cursos/${course.slug}` },
          { label: "Constancia" },
        ]}
        actions={
          <Link href={`/cursos/${course.slug}`} className="btn btn-secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al curso
          </Link>
        }
        meta={
          <>
            <span className="badge badge-amber">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Documento de demostración
            </span>
            <span className="badge badge-neutral">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin validación en línea
            </span>
            <span className="badge badge-neutral">
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Imprimible en A4
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <CertificatePanel course={toCourseFlowData(course)} />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <section className="card-surface p-5" aria-labelledby="certificate-requirements-title">
              <h2 id="certificate-requirements-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Requisitos de la constancia
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Completar todas las lecciones del curso.
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Aprobar la evaluación final con al menos {course.finalQuiz.passingScore} %.
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Usar un navegador con almacenamiento local habilitado.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/cursos/${course.slug}/evaluacion`} className="btn btn-secondary btn-sm">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Ir a la evaluación
                </Link>
                <Link href="/mi-progreso" className="btn btn-ghost btn-sm">
                  Ver mi progreso
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5" aria-labelledby="certificate-notice-title">
              <h2 id="certificate-notice-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-amber-950">
                <Award className="h-4 w-4" aria-hidden="true" />
                Qué es y qué no es
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-950">
                {site.certificateNotice} El nombre que escribas es opcional y no se guarda. La fecha
                se genera al abrir esta página y la constancia no cuenta con un código de validación
                ni un registro institucional.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-amber-950">
                Para conservarla, elegí «Guardar como PDF» en el diálogo de impresión de tu
                navegador.
              </p>
            </section>
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            ¿Querés repetir el recorrido?{" "}
            <Link href={`/cursos/${course.slug}`} className="link-inline">
              Volvé a la presentación del curso
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
