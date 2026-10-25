import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  RotateCcw,
  Target,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { LocalDataNotice } from "@/components/ui/LocalDataNotice";
import { FinalQuiz } from "@/components/courses/FinalQuiz";
import { CourseProgressPanel } from "@/components/courses/CourseActions";
import { courses, getCourseBySlug } from "@/content/courses";
import { toCourseFlowData } from "@/lib/presentation";

interface EvaluationPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: EvaluationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) return { title: "Evaluación no encontrada" };

  return {
    title: `Evaluación · ${course.shortTitle}`,
    description: `${course.finalQuiz.description} Aprobación: ${course.finalQuiz.passingScore} %.`,
  };
}

export default async function EvaluationPage({ params }: EvaluationPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${course.title} · Evaluación final`}
        title={course.finalQuiz.title}
        description={course.finalQuiz.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Cursos", href: "/cursos" },
          { label: course.shortTitle, href: `/cursos/${course.slug}` },
          { label: "Evaluación" },
        ]}
        actions={
          <Link href={`/cursos/${course.slug}`} className="btn btn-secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al curso
          </Link>
        }
        meta={
          <>
            <span className="badge badge-brand">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {course.finalQuiz.questions.length} preguntas
            </span>
            <span className="badge badge-sea">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              Aprobación: {course.finalQuiz.passingScore} %
            </span>
            <span className="badge badge-neutral">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Intentos ilimitados
            </span>
            <span className="badge badge-neutral">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Sin límite de tiempo
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0">
            <FinalQuiz quiz={course.finalQuiz} course={toCourseFlowData(course)} />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <CourseProgressPanel course={toCourseFlowData(course)} />

            <section className="card-surface p-5" aria-labelledby="evaluation-how-title">
              <h2 id="evaluation-how-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Cómo se corrige
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Cada pregunta tiene una sola respuesta correcta.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Necesitás al menos {course.finalQuiz.passingScore} % para aprobar.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Después de corregir, vas a ver la explicación de cada respuesta.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Podés repetir la evaluación sin límite. Se conserva tu mejor resultado.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5" aria-labelledby="evaluation-certificate-title">
              <h2 id="evaluation-certificate-title" className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                <Award className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Para obtener la constancia
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Además de aprobar esta evaluación, necesitás completar las{" "}
                {toCourseFlowData(course).lessonRefs.length} lecciones del curso. La constancia es un
                documento de actividad educativa de demostración.
              </p>
              <Link href={`/cursos/${course.slug}`} className="link-arrow mt-3 text-sm">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Ver lecciones pendientes
              </Link>
            </section>

            <section className="card-surface p-5" aria-labelledby="evaluation-scope-title">
              <h2 id="evaluation-scope-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Alcance
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Esta autoevaluación forma parte de una actividad educativa abierta. No
                reemplaza una certificación oficial ni acredita competencias ante organismos
                públicos o empleadores.
              </p>
            </section>

            <Link href="/herramientas/diagnostico" className="btn btn-secondary w-full">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Hacer el diagnóstico inicial
            </Link>
          </aside>
        </div>

        <div className="mt-10">
          <LocalDataNotice />
        </div>
      </div>
    </>
  );
}
