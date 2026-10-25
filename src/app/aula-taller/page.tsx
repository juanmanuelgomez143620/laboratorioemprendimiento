import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  Info,
  Laptop,
  Layers,
  MapPin,
  Monitor,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Aula-Taller de Simulación Empresarial N.º 17",
  description:
    "Conocé el Aula-Taller de Simulación Empresarial N.º 17 de la Escuela Normal Superior N.º 9: equipamiento, capacidades pedagógicas y necesidades de conectividad.",
};

const capabilities = [
  {
    icon: GraduationCap,
    title: "Formación con acompañamiento",
    body: "Espacio para talleres, cursos breves y encuentros de trabajo con docentes y estudiantes de la modalidad TGA.",
  },
  {
    icon: Monitor,
    title: "Simulación administrativa",
    body: "Prácticas de registros, presupuestos, atención de consultas y organización de información con herramientas digitales.",
  },
  {
    icon: Laptop,
    title: "Desarrollo tecnológico",
    body: "Uso de planillas, aplicaciones, códigos QR y recursos digitales para resolver tareas concretas de un emprendimiento.",
  },
  {
    icon: Users,
    title: "Encuentro con la comunidad",
    body: "Un espacio pensado para abrir la escuela a emprendedores, comerciantes y personas que buscan iniciar una actividad.",
  },
];

const limits = [
  "No hay convenios ni avales de organismos públicos confirmados para esta versión del proyecto.",
  "No hay jornadas con fecha, inscripción ni disertantes confirmados.",
  "No se otorgan certificaciones oficiales ni acreditaciones académicas.",
  "La mejora de conectividad es una necesidad identificada, no un financiamiento asegurado.",
];

export default function WorkshopPage() {
  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Capacidad institucional"
        title="Conocé el potencial del Aula-Taller"
        description="Un espacio de simulación empresarial, administración y desarrollo tecnológico dentro de la Escuela Normal Superior N.º 9. Aquí se combinan equipamiento, trabajo docente y una mirada abierta a la comunidad."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Aula-Taller" }]}
        actions={
          <>
            <Link href="/jornadas" className="btn btn-on-dark">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Ver jornada modelo
            </Link>
            <Link href="/proyecto" className="btn btn-outline-on-dark">
              <Info className="h-4 w-4" aria-hidden="true" />
              Sobre el proyecto
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-on-dark">
              <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
              Aula-Taller N.º 17
            </span>
            <span className="badge badge-on-dark">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Wanda, Misiones
            </span>
            <span className="badge badge-on-dark">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              Modalidad TGA
            </span>
            <span className="badge badge-on-dark">
              <Wifi className="h-3.5 w-3.5" aria-hidden="true" />
              Conectividad a mejorar
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" aria-labelledby="workshop-intro-title">
          <div>
            <p className="eyebrow">El espacio</p>
            <h2 id="workshop-intro-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Aprender haciendo, con tecnología y acompañamiento
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-body">
              <p>
                El Aula-Taller de Simulación Empresarial N.º 17 forma parte de la Escuela Normal
                Superior N.º 9. Su nombre describe una intención pedagógica: que las personas puedan
                practicar decisiones administrativas y comerciales en un entorno cuidado, con
                herramientas reales y acompañamiento docente.
              </p>
              <p>
                La modalidad Técnico en Gestión y Administración de las Organizaciones (TGA) aporta
                saberes sobre organización, costos, comunicación y gestión. El Aula-Taller permite
                convertir esos saberes en experiencias concretas, tanto para estudiantes como para
                participantes de la comunidad.
              </p>
              <p>
                El campus digital y el Aula-Taller se complementan: los cursos permiten llegar a más
                personas y las jornadas presenciales ofrecen práctica guiada, intercambio y resolución
                de dudas.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/cursos" className="btn btn-primary">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Explorar cursos
              </Link>
              <Link href="/herramientas/diagnostico" className="btn btn-secondary">
                <Compass className="h-4 w-4" aria-hidden="true" />
                Hacer el diagnóstico
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sea-200/30 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-brand-950 p-6 text-white shadow-lift sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sea-300">
                    Equipamiento informático
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-white">Una base para practicar</h3>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                  <Monitor className="h-5 w-5 text-sea-200" aria-hidden="true" />
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
                  Para el acceso simultáneo a plataformas educativas y herramientas de desarrollo, la
                  escuela necesita mejorar su conectividad. Es una necesidad identificada, no un
                  financiamiento confirmado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="workshop-capabilities-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Qué habilita</p>
            <h2 id="workshop-capabilities-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Cuatro formas de usar el espacio
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Estas capacidades describen el potencial pedagógico del Aula-Taller. No implican una
              agenda confirmada de actividades abiertas.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-brand-950">{capability.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{capability.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]" aria-labelledby="workshop-journey-title">
          <div>
            <p className="eyebrow">Cómo se aprende</p>
            <h2 id="workshop-journey-title" className="mt-2 text-3xl font-extrabold text-brand-950">
              Del contenido a la práctica
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Una jornada posible combina tres momentos. El modelo completo está publicado en la
              sección de jornadas y se identifica explícitamente como demostración.
            </p>
            <div className="mt-5 space-y-3">
              {[
                {
                  title: "Antes",
                  text: "La persona completa el diagnóstico y elige un recurso o curso del campus.",
                },
                {
                  title: "Durante",
                  text: "Se trabaja con una tarea concreta en las computadoras del Aula-Taller y con los teléfonos personales.",
                },
                {
                  title: "Después",
                  text: "Se continúa con los cursos y recursos, se registra una acción para la semana y se revisa el resultado.",
                },
              ].map((step, index) => (
                <div key={step.title} className="flex gap-3 rounded-xl border border-line bg-white p-4 shadow-card">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sea-100 text-xs font-extrabold text-sea-800">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-brand-950">{step.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-body">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/jornadas" className="btn btn-secondary mt-5">
              Ver la jornada modelo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <aside className="space-y-4">
            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5 sm:p-6" aria-labelledby="workshop-role-title">
              <h2 id="workshop-role-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <GraduationCap className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Rol de la comunidad educativa
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Docentes del Departamento de Ciencias Económicas coordinan contenidos y actividades.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Estudiantes de 5.º y 6.º año de la modalidad TGA participan en instancias formativas.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  La escuela abre el espacio a la comunidad con criterios de cuidado y autorización.
                </li>
              </ul>
            </section>

            <section className="card-surface p-5" aria-labelledby="workshop-limits-title">
              <h2 id="workshop-limits-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <ShieldCheck className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Lo que este espacio no implica
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-body">
                {limits.map((limit) => (
                  <li key={limit} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                    {limit}
                  </li>
                ))}
              </ul>
            </section>

            <aside className="rounded-2xl border border-line bg-slate-50 p-5">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                No publicamos imágenes del Aula-Taller ni de participantes sin autorización
                institucional y de las personas retratadas. Tampoco usamos logos de organismos como
                avales del proyecto.
              </p>
            </aside>
          </aside>
        </section>

        <section className="mt-12 rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card sm:p-8" aria-labelledby="workshop-next-title">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Siguiente paso</p>
              <h2 id="workshop-next-title" className="mt-2 text-2xl font-extrabold text-brand-950 sm:text-3xl">
                El campus ya está abierto
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Mientras se definen las condiciones para actividades presenciales, podés recorrer los
                cursos, usar la biblioteca y completar el diagnóstico desde cualquier dispositivo.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/cursos" className="btn btn-primary">
                <Layers className="h-4 w-4" aria-hidden="true" />
                Empezar un curso
              </Link>
              <Link href="/biblioteca" className="btn btn-secondary">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                Ver recursos
              </Link>
            </div>
          </div>
          <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
            {site.institution.name} · {site.institution.classroom} · {site.institution.locality},{" "}
            {site.institution.province}
          </p>
        </section>
      </div>
    </>
  );
}
