import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { LocalDataNotice } from "@/components/ui/LocalDataNotice";
import { CourseCard } from "@/components/courses/CourseCard";
import { CourseFinderCard } from "@/components/courses/CourseFinderCard";
import { courses, totalLearningMinutes, totalLessons } from "@/content/courses";
import { toCourseCardData } from "@/lib/presentation";
import { formatDuration } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    `${courses.length} cursos aplicados para emprender y buscar empleo: primer emprendimiento, costos y precios, marca e identidad, herramientas digitales, y búsqueda de empleo y CV.`,
};

const routeSteps = [
  {
    number: "01",
    title: "Mi primer emprendimiento",
    description: "Validá la idea, conocé a tus clientes y armá un plan de 90 días.",
    href: "/cursos/mi-primer-emprendimiento",
  },
  {
    number: "02",
    title: "Costos y precios para emprender",
    description: "Calculá costos, definí precios y anticipá la caja.",
    href: "/cursos/costos-y-precios",
  },
  {
    number: "03",
    title: "Mi marca y mi identidad comercial",
    description: "Definí posicionamiento, identidad visual, fotos, catálogo y comunicación.",
    href: "/cursos/mi-marca-y-mi-identidad-comercial",
  },
  {
    number: "04",
    title: "Herramientas digitales para mi negocio",
    description: "Ordená archivos, planillas, pedidos, canales e IA responsable.",
    href: "/cursos/herramientas-digitales-para-mi-negocio",
  },
];

const howItWorks = [
  {
    icon: BookOpen,
    title: "Leé a tu ritmo",
    body: "Cada curso tiene entre cinco y seis lecciones, ejemplos ficticios identificados, actividades y un entregable final para aplicar a tu propio proyecto.",
  },
  {
    icon: Target,
    title: "Comprobá lo aprendido",
    body: "La autoevaluación final se corrige automáticamente. Necesitás al menos 70 % de respuestas correctas y podés repetirla.",
  },
  {
    icon: Award,
    title: "Guardá tu constancia",
    body: "Al completar todas las lecciones y aprobar, podés imprimir una constancia de actividad educativa de demostración.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Aula virtual"
        title="Cursos para emprender, paso a paso"
        description="Recorridos aplicados y conectados entre sí, para emprender o para buscar empleo. No necesitás cuenta ni conocimientos previos: elegí un curso, leé las lecciones, usá las herramientas y comprobá lo aprendido con una autoevaluación."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Cursos" }]}
        actions={
          <>
            <Link href="/herramientas/diagnostico" className="btn btn-on-dark">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Hacer mi diagnóstico
            </Link>
            <Link href="/mi-progreso" className="btn btn-outline-on-dark">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Ver mi progreso
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-on-dark">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              {courses.length} cursos
            </span>
            <span className="badge badge-on-dark">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {totalLessons} lecciones
            </span>
            <span className="badge badge-on-dark">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDuration(totalLearningMinutes)} orientativas
            </span>
            <span className="badge badge-on-dark">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Aprobación: 70 %
            </span>
          </>
        }
      />

      <section className="py-12 sm:py-16" aria-labelledby="courses-list-title">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Elegí tu punto de partida</p>
              <h2 id="courses-list-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
                {courses.length} cursos, dos rutas posibles
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">
                Podés hacerlos en orden o entrar directamente al que necesitás. Cada uno se sostiene
                solo y también se conecta con los demás.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-muted">
              <CheckCircle2 className="h-4 w-4 text-sea-700" aria-hidden="true" />
              Sin registro · progreso en este navegador
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={toCourseCardData(course)} index={index} />
            ))}
            <CourseFinderCard />
          </div>
        </div>
      </section>

      <section className="section-soft py-14 sm:py-18" aria-labelledby="route-title">
        <div className="container-page grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Ruta sugerida</p>
            <h2 id="route-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Si es tu primera vez, empezá por acá
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              La ruta propone avanzar desde la idea hasta la comunicación y las herramientas. No es
              obligatoria: si ya tenés un negocio en marcha, podés empezar por costos o por marca.
            </p>
            <Link href="/herramientas/diagnostico" className="btn btn-sea mt-6">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Descubrir por dónde empezar
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted">
              El diagnóstico es orientativo y no se guarda. Te recomienda cursos y recursos según tus
              respuestas.
            </p>
          </div>

          <ol className="relative space-y-3">
            {routeSteps.map((step) => (
              <li key={step.number}>
                <Link
                  href={step.href}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift sm:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-sm font-extrabold text-white">
                    {step.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-extrabold text-brand-950 group-hover:text-brand-800">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {step.description}
                    </span>
                  </span>
                  <ArrowRight
                    className="mt-2 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand-700"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-18" aria-labelledby="how-it-works-title">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Cómo funciona</p>
            <h2 id="how-it-works-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Aprender, aplicar y comprobar
            </h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {howItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sea-50 text-sea-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-brand-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <LocalDataNotice />
            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-900 ring-1 ring-amber-200">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-extrabold text-amber-950">
                    Sobre la constancia
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-amber-950">
                    Es una constancia de actividad educativa de demostración. No constituye
                    certificación oficial, acreditación académica ni aval de ningún organismo. Se
                    genera en tu navegador y podés imprimirla o guardarla como PDF.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-[1.5rem] border border-brand-200 bg-gradient-to-br from-brand-950 to-brand-900 p-6 text-white shadow-lift sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-sea-300">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Para seguir aplicando
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Recursos y herramientas para usar hoy
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  La biblioteca reúne plantillas, guías y listas de verificación. Las herramientas
                  incluyen un diagnóstico propio y accesos externos claramente identificados.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/biblioteca" className="btn btn-on-dark">
                  <Layers className="h-4 w-4" aria-hidden="true" />
                  Abrir biblioteca
                </Link>
                <Link href="/herramientas" className="btn btn-outline-on-dark">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  Ver herramientas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
