import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Compass,
  ExternalLink,
  FileText,
  GraduationCap,
  Laptop,
  LibraryBig,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import { site, feasibilityNotes } from "@/content/site";
import { courses, totalLearningMinutes, totalLessons } from "@/content/courses";
import { resources } from "@/content/resources";
import { CourseCard } from "@/components/courses/CourseCard";
import { toCourseCardData } from "@/lib/presentation";
import { formatDuration } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Campus Emprendedor — Aprender, crear y transformar",
  description: site.description,
};

const heroSteps = [
  { number: "01", title: "Tu idea y tus clientes", detail: "Mi primer emprendimiento", href: "/cursos/mi-primer-emprendimiento" },
  { number: "02", title: "Costos y precios claros", detail: "Costos y precios para emprender", href: "/cursos/costos-y-precios" },
  { number: "03", title: "Marca y presentación", detail: "Mi marca y mi identidad comercial", href: "/cursos/mi-marca-y-mi-identidad-comercial" },
  { number: "04", title: "Herramientas para avanzar", detail: "Herramientas digitales para mi negocio", href: "/cursos/herramientas-digitales-para-mi-negocio" },
];

const communityPillars = [
  {
    icon: Sparkles,
    title: "Aprender haciendo",
    text: "Las propuestas se convierten en actividades concretas: calcular, ordenar, fotografiar, probar un enlace. Cada curso invita a aplicar lo aprendido a un proyecto propio.",
  },
  {
    icon: Laptop,
    title: "Tecnología con propósito",
    text: "El equipamiento del Aula-Taller y las herramientas digitales se ponen al servicio de necesidades reales de la comunidad, con criterios de privacidad y accesibilidad.",
  },
  {
    icon: Users,
    title: "Una red que se construye",
    text: "La escuela busca articular con organismos públicos, organizaciones y emprendedores. Toda alianza futura deberá formalizarse y comunicarse con información verificada.",
  },
];

export default function HomePage() {
  const featuredResources = resources.slice(0, 3);

  return (
    <>
      <section className="hero-shell text-white">
        <div className="container-page relative">
          <div className="grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20">
            <div className="fade-rise">
              <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.17em] text-sea-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sea-300" aria-hidden="true" />
                NORMAL 9 IMPULSA · Campus Emprendedor
              </p>
              <h1 className="mt-6 max-w-2xl text-[clamp(2.7rem,7vw,5.3rem)] font-extrabold leading-[1.02] tracking-[-0.055em] text-white">
                Aprender, crear y transformar.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Cursos breves, herramientas y recursos para dar tus primeros pasos con un
                emprendimiento. Una iniciativa educativa de la Escuela Normal Superior N.º 9 de
                Wanda, abierta a toda la comunidad.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/cursos" className="btn btn-on-dark">
                  Explorar cursos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/herramientas" className="btn btn-outline-on-dark">
                  <Wrench className="h-4 w-4" aria-hidden="true" />
                  Herramientas digitales
                </Link>
                <Link href="/biblioteca" className="btn btn-ghost text-white/85 hover:bg-white/10 hover:text-white">
                  <LibraryBig className="h-4 w-4" aria-hidden="true" />
                  Biblioteca de recursos
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/60">
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-sea-300" aria-hidden="true" />
                  Sin registro
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-sea-300" aria-hidden="true" />
                  Progreso local y privado
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <LayersIcon />
                  {courses.length} cursos · {totalLessons} lecciones
                </li>
              </ul>
            </div>

            <div className="fade-rise-delay relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-sea-400/15 blur-3xl"
              />
              <div className="relative rounded-[1.8rem] border border-white/15 bg-white/[0.08] p-3 backdrop-blur-sm">
                <div className="rounded-[1.4rem] bg-white p-5 text-ink shadow-2xl sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-sea-700">
                        Ruta sugerida
                      </p>
                      <h2 className="mt-1 text-xl font-extrabold tracking-tight text-brand-950">
                        Empezá por donde estés
                      </h2>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                      <Compass className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <ol className="mt-4 space-y-1">
                    {heroSteps.map((step) => (
                      <li key={step.number}>
                        <Link
                          href={step.href}
                          className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition hover:bg-brand-50"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[10px] font-extrabold text-brand-800">
                            {step.number}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold leading-tight text-brand-950">
                              {step.title}
                            </span>
                            <span className="mt-0.5 block truncate text-[11px] text-muted">
                              {step.detail}
                            </span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-sea-600" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2.5 text-[11px]">
                    <span className="font-semibold text-muted">
                      {formatDuration(totalLearningMinutes)} de aprendizaje orientativo
                    </span>
                    <Link href="/cursos" className="font-extrabold text-brand-800 hover:underline">
                      Ver todos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-sea-300" aria-hidden="true" />
                Escuela Normal Superior N.º 9
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-sea-300" aria-hidden="true" />
                Wanda, Misiones
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BuildingIcon />
                Aula-Taller de Simulación Empresarial N.º 17
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page relative z-10 -mt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/cursos"
            className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-3 text-base font-extrabold text-brand-950">Aprendé a tu ritmo</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Cuatro cursos iniciales, lecciones breves y autoevaluaciones con explicaciones.
            </p>
            <span className="link-arrow mt-3">
              Explorar cursos
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/herramientas"
            className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea-50 text-sea-800">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-3 text-base font-extrabold text-brand-950">Herramientas para decidir</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Diagnóstico inicial propio, CostoClaro y accesos externos identificados.
            </p>
            <span className="link-arrow mt-3">
              Ver herramientas
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/biblioteca"
            className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-900">
              <Laptop className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-3 text-base font-extrabold text-brand-950">Recursos para aplicar</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Plantillas, guías y modelos descargables o imprimibles para usar hoy.
            </p>
            <span className="link-arrow mt-3">
              Abrir biblioteca
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>

      <section className="py-16 sm:py-20" aria-labelledby="courses-home-title">
        <div className="container-page">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Aula virtual</p>
              <h2 id="courses-home-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
                Cursos breves para decisiones reales
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">
                Contenidos pensados para adultos que quieren empezar o mejorar un emprendimiento,
                con ejemplos de la vida cotidiana y actividades para aplicar.
              </p>
            </div>
            <Link href="/cursos" className="link-arrow shrink-0">
              Ver los cuatro cursos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={toCourseCardData(course)} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft py-16 sm:py-20" aria-labelledby="tools-home-title">
        <div className="container-page grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Herramientas digitales</p>
            <h2 id="tools-home-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Poné tus números y decisiones en claro
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-body">
              El campus reúne una herramienta de autoevaluación propia y accesos a aplicaciones
              existentes. Cada enlace externo está identificado y conserva su propio funcionamiento,
              autoría y condiciones de uso.
            </p>

            <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5 shadow-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-white">
                    <Calculator className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-extrabold text-brand-950">CostoClaro</h3>
                      <span className="badge badge-neutral">Herramienta externa</span>
                    </div>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                      Calculadora de costos y rentabilidad disponible como antecedente de herramienta
                      digital para emprendedores.
                    </p>
                  </div>
                </div>
                <a
                  href={site.externalLinks.costoClaro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Utilizar CostoClaro
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
              </div>
              <p className="mt-3 border-t border-line pt-3 text-[11px] leading-relaxed text-muted">
                Se abre en calculodecosto.vercel.app, fuera de este campus. NORMAL 9 IMPULSA no
                modifica su código ni gestiona sus datos.
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/herramientas/diagnostico" className="btn btn-sea">
                <Compass className="h-4 w-4" aria-hidden="true" />
                Hacer mi diagnóstico
              </Link>
              <Link href="/herramientas" className="btn btn-secondary">
                Ver catálogo de herramientas
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <Link
              href="/herramientas/diagnostico"
              className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:border-brand-200 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea-50 text-sea-800">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="badge badge-sea">Del campus</span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-brand-950">Diagnóstico inicial de mi emprendimiento</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Diez preguntas para identificar áreas de mejora y recibir recomendaciones. Resultado
                imprimible, sin registro.
              </p>
              <span className="link-arrow mt-2">
                Comenzar diagnóstico
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>

            <a
              href={site.externalLinks.yoEmprendedor}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:border-brand-200 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-900">
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="badge badge-neutral">Externa · Provincia de Misiones</span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-brand-950">Yo Emprendedor</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Plataforma provincial de Misiones. No es desarrollada ni administrada por la Escuela
                Normal N.º 9. Su acceso puede requerir registro.
              </p>
              <span className="link-arrow mt-2">
                Ir a la plataforma provincial
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="sr-only">(abre en una pestaña nueva)</span>
            </a>

            <Link
              href="/herramientas#proyectos-previstos"
              className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-sm transition hover:border-brand-200 hover:bg-white"
            >
              <span>
                <span className="block font-extrabold text-brand-950">Proyectos previstos</span>
                <span className="mt-0.5 block text-xs text-muted">
                  Plan de negocios, presupuestos, identidad y catálogo digital.
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="workshop-home-title">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-[2rem] bg-sea-200/30 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-brand-950 p-6 text-white shadow-lift sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sea-300">
                      Espacio de simulación
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-white">
                      Aula-Taller N.º 17
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                    <GraduationCap className="h-5 w-5 text-sea-200" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-3xl font-extrabold tracking-tight text-white">10</p>
                    <p className="mt-0.5 text-xs font-semibold text-white/60">computadoras nuevas</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-3xl font-extrabold tracking-tight text-white">10</p>
                    <p className="mt-0.5 text-xs font-semibold text-white/60">computadoras existentes</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-white/60">
                  Equipamiento fortalecido con recursos del Programa de Crédito Fiscal INET para
                  simulaciones administrativas, desarrollo tecnológico y formación.
                </p>
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-sea-300/20 bg-sea-300/10 p-3.5">
                  <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-sea-200" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-sea-100">
                    Para el acceso simultáneo a plataformas educativas y herramientas de desarrollo,
                    la escuela necesita mejorar su conectividad. Es una necesidad identificada, no un
                    financiamiento confirmado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow">Capacidad institucional</p>
            <h2 id="workshop-home-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Un Aula-Taller para aprender haciendo
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              La Escuela Normal Superior N.º 9 cuenta con infraestructura tecnológica, capacidades
              pedagógicas y experiencias concretas de innovación para contribuir al desarrollo
              emprendedor de su comunidad.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3 text-sm leading-relaxed text-body">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Espacio destinado a simulación empresarial, administración y desarrollo tecnológico.
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-body">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Participación formativa de estudiantes de 5.º y 6.º año de la modalidad TGA.
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-body">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Coordinación del Departamento de Ciencias Económicas y apertura a la comunidad.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/aula-taller" className="btn btn-primary">
                Conocé el potencial del Aula-Taller
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/jornadas" className="btn btn-secondary">
                Ver jornadas de formación
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft py-16 sm:py-20" aria-labelledby="innovation-title">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Nuestro enfoque</p>
            <h2 id="innovation-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Innovación educativa al servicio de nuestra comunidad
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              NORMAL 9 IMPULSA no es solo un sitio de cursos: es una forma de poner en valor lo que
              la escuela ya sabe hacer y de abrir ese conocimiento a quienes emprenden.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {communityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-brand-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="library-home-title">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Biblioteca emprendedora</p>
            <h2 id="library-home-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Recursos para usar, imprimir y guardar
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Plantillas, guías y listas de verificación con información útil. Podés abrirlas en el
              campus e imprimirlas o guardarlas como PDF desde tu navegador. Las plantillas que
              incluyen archivo muestran el botón de descarga correspondiente.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/biblioteca" className="btn btn-primary">
                <LibraryBig className="h-4 w-4" aria-hidden="true" />
                Explorar la biblioteca
              </Link>
              <Link href="/biblioteca" className="btn btn-secondary">
                Ver todos los recursos
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted">
              <FileText className="h-4 w-4 text-sea-700" aria-hidden="true" />
              {resources.length} materiales iniciales · abiertos, sin registro
            </div>
          </div>

          <ul className="space-y-3">
            {featuredResources.map((resource) => (
              <li key={resource.id}>
                <Link
                  href={`/biblioteca/${resource.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition hover:border-brand-200 hover:shadow-lift sm:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sea-50 text-sea-800">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-1.5">
                      <span className="badge badge-neutral">{resource.type}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-muted">
                        {resource.download ? `Descargable · ${resource.download.fileType}` : "Imprimible"}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm font-extrabold text-brand-950 group-hover:text-brand-800">
                      {resource.title}
                    </span>
                    <span className="mt-0.5 line-clamp-1 block text-xs text-muted">{resource.description}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand-800" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-[1.6rem] border border-brand-200 bg-white shadow-card">
            <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
              <div className="p-7 sm:p-10">
                <p className="eyebrow">La idea central</p>
                <blockquote className="mt-3 max-w-3xl text-xl font-bold leading-relaxed tracking-tight text-brand-950 sm:text-2xl">
                  «La Escuela Normal Superior N.º 9 cuenta con infraestructura tecnológica,
                  capacidades pedagógicas y experiencias concretas de innovación para contribuir al
                  desarrollo emprendedor de su comunidad. NORMAL 9 IMPULSA transforma esas
                  capacidades en herramientas y oportunidades de aprendizaje.»
                </blockquote>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-body">
                  Estamos construyendo una propuesta de articulación con organismos públicos y
                  entidades de apoyo. Todavía no existen convenios ni avales formalizados: cualquier
                  avance se comunicará con información verificada y autorización institucional.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/proyecto" className="btn btn-secondary btn-sm">
                    Conocer el proyecto
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    Propuesta en desarrollo
                  </span>
                </div>
              </div>
              <div className="border-t border-brand-100 bg-brand-50/60 p-7 lg:border-l lg:border-t-0 sm:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sea-700">
                  Para empezar
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-brand-950">
                  Un recorrido abierto, sin cuenta y a tu ritmo.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Elegí un curso, completá la autoevaluación y descargá tu constancia de actividad
                  educativa de demostración.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Link href="/cursos" className="btn btn-primary justify-between">
                    Explorar cursos
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/herramientas/diagnostico" className="btn btn-secondary justify-between">
                    Hacer el diagnóstico inicial
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-muted">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sea-700" aria-hidden="true" />
                  Tu avance queda en este navegador. No solicitamos datos sensibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-12">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="eyebrow">Fe de la propuesta</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
                {site.statusNotice} Las herramientas externas son titulares de su propio
                funcionamiento. Las constancias emitidas por el campus son documentos de
                demostración educativa.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {feasibilityNotes.slice(0, 2).map((note) => (
                <span key={note.title} className="inline-flex items-center gap-2 rounded-full border border-line bg-slate-50 px-3 py-1.5 text-xs font-bold text-brand-900">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sea-700" aria-hidden="true" />
                  {note.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LayersIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-sea-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 text-sea-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1" />
    </svg>
  );
}
