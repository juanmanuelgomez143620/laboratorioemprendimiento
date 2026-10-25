import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { LocalDataNotice } from "@/components/ui/LocalDataNotice";
import { CourseActions, CourseProgressPanel } from "@/components/courses/CourseActions";
import { CourseSyllabus } from "@/components/courses/CourseSyllabus";
import { courseIconMap } from "@/components/courses/courseVisuals";
import { courses, getCourseBySlug, getCourseLessonIds } from "@/content/courses";
import { getResourceBySlug } from "@/content/resources";
import { getToolById } from "@/content/tools";
import { site } from "@/content/site";
import { toCourseFlowData, toCourseOutlineData } from "@/lib/presentation";
import { formatDuration } from "@/lib/utils";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Curso no encontrado" };
  }

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: `${course.title} · NORMAL 9 IMPULSA`,
      description: course.description,
      type: "article",
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const courseIndex = courses.findIndex((item) => item.id === course.id);
  const Icon = courseIconMap[course.icon];
  const lessonIds = getCourseLessonIds(course);
  const relatedResources = course.resourceSlugs
    .map((resourceSlug) => getResourceBySlug(resourceSlug))
    .filter((resource) => resource !== undefined);
  const relatedTools = course.toolIds.flatMap((toolId) => {
    const tool = getToolById(toolId);
    return tool && tool.status === "disponible" ? [tool] : [];
  });

  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow={`Curso ${String(courseIndex + 1).padStart(2, "0")} · ${course.level}`}
        title={course.title}
        description={course.subtitle}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Cursos", href: "/cursos" },
          { label: course.shortTitle },
        ]}
        actions={<CourseActions course={toCourseFlowData(course)} variant="dark" />}
        meta={
          <>
            <span className="badge badge-on-dark">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {course.level}
            </span>
            <span className="badge badge-on-dark">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDuration(course.durationMinutes)}
            </span>
            <span className="badge badge-on-dark">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {lessonIds.length} lecciones
            </span>
            <span className="badge badge-on-dark">
              <Target className="h-3.5 w-3.5" aria-hidden="true" />
              Evaluación: {course.finalQuiz.passingScore} % mínimo
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
          <div className="min-w-0 space-y-8">
            <section className="card-surface p-5 sm:p-7" aria-labelledby="course-about-title">
              <p className="eyebrow">Presentación</p>
              <h2 id="course-about-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                De qué se trata este curso
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">{course.longDescription}</p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-slate-50/70 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                    <Target className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    Qué vas a lograr
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {course.objectives.map((objective) => (
                      <li key={objective} className="flex gap-2.5 text-sm leading-relaxed text-body">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                    <Users className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    A quién está dirigido
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {course.audience.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-500" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl bg-brand-50/70 px-4 py-3 text-xs font-semibold text-brand-900">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-sea-700" aria-hidden="true" />
                  Sin registro ni datos personales
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-sea-700" aria-hidden="true" />
                  Lecciones en cualquier orden
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-sea-700" aria-hidden="true" />
                  Constancia demostrativa al completar
                </span>
              </div>
            </section>

            <CourseSyllabus course={toCourseOutlineData(course)} />

            {relatedResources.length > 0 && (
              <section className="card-surface p-5 sm:p-7" aria-labelledby="course-resources-title">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow">Biblioteca</p>
                    <h2 id="course-resources-title" className="mt-1 text-2xl font-extrabold text-brand-950">
                      Recursos para aplicar
                    </h2>
                  </div>
                  <Link href="/biblioteca" className="link-arrow shrink-0 text-sm">
                    Ver biblioteca
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="mt-4 divide-y divide-line">
                  {relatedResources.map((resource) => (
                    <li key={resource.id}>
                      <Link
                        href={`/biblioteca/${resource.slug}`}
                        className="group flex items-start gap-3 rounded-xl px-1 py-3 transition hover:bg-brand-50/50"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sea-50 text-sea-800">
                          <FileText className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-extrabold text-brand-950 group-hover:text-brand-800">
                            {resource.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                            {resource.description}
                          </span>
                        </span>
                        <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {relatedTools.length > 0 && (
              <section className="card-surface p-5 sm:p-7" aria-labelledby="course-tools-title">
                <p className="eyebrow">Herramientas</p>
                <h2 id="course-tools-title" className="mt-1 text-2xl font-extrabold text-brand-950">
                  Para practicar lo aprendido
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedTools.map((tool) => (
                    <article key={tool.id} className="rounded-xl border border-line bg-white p-4">
                      <div className="flex items-start justify-between gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-800">
                          {tool.origin === "externo" ? (
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <Compass className="h-4 w-4" aria-hidden="true" />
                          )}
                        </span>
                        <span className="badge badge-neutral text-[10px]">
                          {tool.origin === "externo" ? "Externa" : "Del campus"}
                        </span>
                      </div>
                      <h3 className="mt-2.5 text-sm font-extrabold text-brand-950">{tool.name}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{tool.description}</p>
                      {tool.origin === "externo" ? (
                        <a
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-arrow mt-2 text-xs"
                        >
                          {tool.linkLabel ?? "Abrir herramienta"}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="sr-only">(abre en una pestaña nueva)</span>
                        </a>
                      ) : (
                        <Link href={tool.href ?? "/herramientas"} className="link-arrow mt-2 text-xs">
                          {tool.linkLabel ?? "Abrir herramienta"}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
              <Link href="/cursos" className="link-arrow text-sm">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Ver todos los cursos
              </Link>
              <Link href="/herramientas/diagnostico" className="link-arrow text-sm">
                Hacer el diagnóstico inicial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <CourseProgressPanel course={toCourseFlowData(course)} />

            <section className="card-surface p-5" aria-labelledby="course-sidebar-help-title">
              <h2 id="course-sidebar-help-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Antes de empezar
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  No necesitás crear una cuenta ni instalar nada.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Tené a mano un cuaderno o una planilla para las actividades.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Los ejemplos son ficticios y están señalados como tales.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  La evaluación se puede repetir sin límite.
                </li>
              </ul>
            </section>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-amber-950">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Constancia de demostración
              </p>
              <p className="mt-2 text-xs leading-relaxed text-amber-950">
                {site.certificateNotice}
              </p>
            </aside>

            <Link href="/mi-progreso" className="btn btn-secondary w-full">
              <Layers className="h-4 w-4" aria-hidden="true" />
              Revisar mi progreso
            </Link>
            <Link href="/herramientas" className="btn btn-ghost w-full">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Catálogo de herramientas
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
