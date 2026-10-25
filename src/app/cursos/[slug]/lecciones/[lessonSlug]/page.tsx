import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Lightbulb,
  ListChecks,
  Printer,
  Target,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { CourseOutline } from "@/components/courses/CourseSyllabus";
import { LessonCompletionControls } from "@/components/courses/LessonCompletionControls";
import {
  courses,
  getAdjacentLessons,
  getCourseBySlug,
  getCourseLessons,
  getLessonBySlug,
} from "@/content/courses";
import { getResourceBySlug } from "@/content/resources";
import { getToolById } from "@/content/tools";
import { toCourseOutlineData } from "@/lib/presentation";

interface LessonPageProps {
  params: Promise<{ slug: string; lessonSlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        slug: course.slug,
        lessonSlug: lesson.slug,
      })),
    ),
  );
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const course = getCourseBySlug(slug);
  const lesson = course ? getLessonBySlug(course, lessonSlug) : undefined;

  if (!course || !lesson) {
    return { title: "Lección no encontrada" };
  }

  return {
    title: `${lesson.title} · ${course.shortTitle}`,
    description: lesson.summary,
    openGraph: {
      title: `${lesson.title} · ${course.title}`,
      description: lesson.summary,
      type: "article",
    },
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug, lessonSlug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const lesson = getLessonBySlug(course, lessonSlug);
  if (!lesson) notFound();

  const lessons = getCourseLessons(course);
  const lessonIndex = lessons.findIndex((item) => item.id === lesson.id);
  const adjacent = getAdjacentLessons(course, lesson.id);
  const outline = toCourseOutlineData(course);
  const resources = (lesson.resourceSlugs ?? [])
    .map((resourceSlug) => getResourceBySlug(resourceSlug))
    .filter((resource) => resource !== undefined);
  const tools = (lesson.toolIds ?? []).flatMap((toolId) => {
    const tool = getToolById(toolId);
    return tool && tool.status === "disponible" ? [tool] : [];
  });

  return (
    <>
      <PageHeader
        eyebrow={`${lesson.moduleTitle} · Lección ${lessonIndex + 1} de ${lessons.length}`}
        title={lesson.title}
        description={lesson.summary}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Cursos", href: "/cursos" },
          { label: course.shortTitle, href: `/cursos/${course.slug}` },
          { label: `Lección ${lessonIndex + 1}` },
        ]}
        actions={<PrintButton label="Imprimir lección" variant="secondary" />}
        meta={
          <>
            <span className="badge badge-brand">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {lesson.estimatedMinutes} min de lectura
            </span>
            <span className="badge badge-neutral">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {course.title}
            </span>
            <span className="badge badge-neutral">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              Lección {lessonIndex + 1} de {lessons.length}
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <details className="mb-6 rounded-2xl border border-line bg-white shadow-card lg:hidden">
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-extrabold text-brand-950">
            <span className="inline-flex items-center gap-2">
              <ListChecks className="h-4 w-4 text-sea-700" aria-hidden="true" />
              Contenido del curso
            </span>
            <span className="mt-0.5 block pl-6 text-xs font-medium text-muted">
              Abrir para ver todas las lecciones
            </span>
          </summary>
          <div className="border-t border-line">
            <CourseOutline course={outline} currentLessonId={lesson.id} />
          </div>
        </details>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0">
            <article className="card-surface p-5 sm:p-8" aria-labelledby="lesson-content-title">
              <h2 id="lesson-content-title" className="sr-only">
                Contenido de la lección
              </h2>

              <section
                className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5"
                aria-labelledby="lesson-objectives-title"
              >
                <h3 id="lesson-objectives-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                  <Target className="h-4 w-4 text-sea-700" aria-hidden="true" />
                  Al terminar esta lección vas a poder
                </h3>
                <ul className="mt-3 space-y-2">
                  {lesson.objectives.map((objective) => (
                    <li key={objective} className="flex gap-2.5 text-sm leading-relaxed text-body">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="lesson-prose mt-7">
                <ContentBlocks blocks={lesson.blocks} />
              </div>

              {lesson.keyIdeas.length > 0 && (
                <section
                  className="mt-8 rounded-2xl border border-sea-200 bg-sea-50/70 p-5"
                  aria-labelledby="lesson-key-ideas-title"
                >
                  <h3 id="lesson-key-ideas-title" className="flex items-center gap-2 text-base font-extrabold text-sea-950">
                    <Lightbulb className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    Ideas clave para llevarte
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {lesson.keyIdeas.map((idea) => (
                      <li key={idea} className="flex gap-2.5 text-sm leading-relaxed text-sea-950">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-600" aria-hidden="true" />
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </article>

            {(resources.length > 0 || tools.length > 0) && (
              <section className="mt-6 grid gap-5 md:grid-cols-2" aria-label="Recursos y herramientas de la lección">
                {resources.length > 0 && (
                  <div className="card-surface p-5">
                    <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                      <FileText className="h-4 w-4 text-sea-700" aria-hidden="true" />
                      Para aplicar
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {resources.map((resource) => (
                        <li key={resource.id}>
                          <Link
                            href={`/biblioteca/${resource.slug}`}
                            className="group flex items-start justify-between gap-2 rounded-lg py-1.5 text-sm font-bold text-brand-900 hover:text-sea-800"
                          >
                            <span>{resource.title}</span>
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tools.length > 0 && (
                  <div className="card-surface p-5">
                    <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                      <Wrench className="h-4 w-4 text-sea-700" aria-hidden="true" />
                      Herramientas
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {tools.map((tool) => (
                        <li key={tool.id}>
                          {tool.origin === "externo" ? (
                            <a
                              href={tool.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-start justify-between gap-2 rounded-lg py-1.5 text-sm font-bold text-brand-900 hover:text-sea-800"
                            >
                              <span>
                                {tool.name}
                                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide text-muted">
                                  Herramienta externa
                                </span>
                              </span>
                              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                              <span className="sr-only">(abre en una pestaña nueva)</span>
                            </a>
                          ) : (
                            <Link
                              href={tool.href ?? "/herramientas"}
                              className="group flex items-start justify-between gap-2 rounded-lg py-1.5 text-sm font-bold text-brand-900 hover:text-sea-800"
                            >
                              <span>
                                {tool.name}
                                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide text-muted">
                                  Del campus
                                </span>
                              </span>
                              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            <div className="mt-6">
              <LessonCompletionControls
                courseId={course.id}
                courseSlug={course.slug}
                lessonId={lesson.id}
                lessonTitle={lesson.title}
              />
            </div>

            <nav className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-between" aria-label="Navegación entre lecciones">
              {adjacent.previous ? (
                <Link
                  href={`/cursos/${course.slug}/lecciones/${adjacent.previous.slug}`}
                  className="group flex min-h-20 max-w-sm flex-1 items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-card transition hover:border-brand-200 hover:shadow-lift"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:-translate-x-0.5 group-hover:text-brand-700" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-extrabold uppercase tracking-wide text-muted">Lección anterior</span>
                    <span className="mt-0.5 block text-sm font-bold text-brand-950">{adjacent.previous.title}</span>
                  </span>
                </Link>
              ) : (
                <Link
                  href={`/cursos/${course.slug}`}
                  className="group flex min-h-20 max-w-sm flex-1 items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-card transition hover:border-brand-200 hover:shadow-lift"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <span className="text-sm font-bold text-brand-950">Presentación del curso</span>
                </Link>
              )}

              {adjacent.next ? (
                <Link
                  href={`/cursos/${course.slug}/lecciones/${adjacent.next.slug}`}
                  className="group flex min-h-20 max-w-sm flex-1 items-center justify-end gap-3 rounded-2xl border border-brand-200 bg-brand-50/60 p-4 text-right shadow-card transition hover:bg-brand-50"
                >
                  <span className="min-w-0">
                    <span className="block text-[10px] font-extrabold uppercase tracking-wide text-brand-700">Siguiente lección</span>
                    <span className="mt-0.5 block text-sm font-bold text-brand-950">{adjacent.next.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand-700 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  href={`/cursos/${course.slug}/evaluacion`}
                  className="group flex min-h-20 max-w-sm flex-1 items-center justify-end gap-3 rounded-2xl border border-sea-200 bg-sea-50/70 p-4 text-right shadow-card transition hover:bg-sea-50"
                >
                  <span className="min-w-0">
                    <span className="block text-[10px] font-extrabold uppercase tracking-wide text-sea-800">Fin del recorrido</span>
                    <span className="mt-0.5 block text-sm font-bold text-brand-950">Ir a la evaluación final</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                </Link>
              )}
            </nav>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky-sidebar rounded-2xl border border-line bg-white shadow-card">
              <CourseOutline course={outline} currentLessonId={lesson.id} />
            </div>
            <Link href={`/cursos/${course.slug}`} className="btn btn-secondary mt-4 w-full">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al curso
            </Link>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-white p-5 text-sm shadow-card">
          <p className="flex items-center gap-2 text-muted">
            <Printer className="h-4 w-4 text-sea-700" aria-hidden="true" />
            Esta lección se puede imprimir o guardar como PDF desde el botón de arriba.
          </p>
          <Link href="/herramientas/diagnostico" className="link-arrow text-sm">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Hacer el diagnóstico inicial
          </Link>
        </div>
      </div>
    </>
  );
}
