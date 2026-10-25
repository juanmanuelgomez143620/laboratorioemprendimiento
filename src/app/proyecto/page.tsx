import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  HandHeart,
  Info,
  Laptop,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { site, feasibilityNotes } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre el proyecto",
  description:
    "NORMAL 9 IMPULSA es una iniciativa educativa de la Escuela Normal Superior N.º 9 de Wanda. Conocé su enfoque, su estado actual y los límites de la propuesta.",
};

const principles = [
  {
    icon: GraduationCap,
    title: "Educación pública y abierta",
    body: "El campus se ofrece sin registro y sin costo. La prioridad es que cualquier persona interesada pueda acceder a contenidos claros y útiles.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad por diseño",
    body: "No creamos cuentas ni pedimos datos sensibles. El avance de los cursos se guarda solo en el navegador de cada persona.",
  },
  {
    icon: Target,
    title: "Información verificable",
    body: "No publicamos datos inventados, avales inexistentes ni alianzas que no estén formalizadas. Lo que todavía está en desarrollo se identifica como tal.",
  },
  {
    icon: HandHeart,
    title: "Pertinencia local",
    body: "Los ejemplos y las actividades parten de situaciones cotidianas de emprendimientos de Wanda y la región, con ejemplos ficticios señalados.",
  },
  {
    icon: Laptop,
    title: "Tecnología con propósito",
    body: "Las herramientas digitales se incorporan cuando resuelven una necesidad concreta y pueden explicarse con claridad.",
  },
  {
    icon: Users,
    title: "Aprendizaje en comunidad",
    body: "La propuesta articula el trabajo docente, la formación de estudiantes de la modalidad TGA y la participación de la comunidad.",
  },
];

const currentFacts = [
  "La Escuela Normal Superior N.º 9 es una institución de gestión pública de Wanda, Misiones.",
  "Cuenta con la modalidad Técnico en Gestión y Administración de las Organizaciones (TGA) y un Departamento de Ciencias Económicas.",
  "El Aula-Taller de Simulación Empresarial N.º 17 fue fortalecida con equipamiento informático adquirido mediante el Programa de Crédito Fiscal INET: diez computadoras nuevas y diez computadoras existentes.",
  "La escuela necesita mejorar su conectividad para el acceso simultáneo a plataformas educativas y herramientas de desarrollo. Es una necesidad identificada, no un financiamiento confirmado.",
];

const inDevelopment = [
  "La articulación con organismos públicos, municipales o provinciales y con entidades de apoyo.",
  "La realización de jornadas presenciales con fechas, disertantes e inscripción.",
  "Nuevas herramientas digitales del campus, como el plan de negocios, el generador de presupuestos, la identidad y el catálogo.",
  "Cualquier esquema de certificación o acreditación más allá de la constancia de actividad educativa de demostración.",
];

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Sobre el proyecto"
        title="Una escuela que abre sus capacidades a la comunidad"
        description="NORMAL 9 IMPULSA es una iniciativa educativa de la Escuela Normal Superior N.º 9 de Wanda. Reúne cursos, recursos y herramientas para acompañar a quienes emprenden, desde una propuesta pública, abierta y transparente sobre su estado actual."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Proyecto" }]}
        actions={
          <>
            <Link href="/cursos" className="btn btn-on-dark">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Explorar el campus
            </Link>
            <Link href="/aula-taller" className="btn btn-outline-on-dark">
              <Building2 className="h-4 w-4" aria-hidden="true" />
              Conocer el Aula-Taller
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-on-dark">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Wanda, Misiones
            </span>
            <span className="badge badge-on-dark">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              Modalidad TGA
            </span>
            <span className="badge badge-on-dark">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              Versión inicial
            </span>
            <span className="badge badge-on-dark">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
              Propuesta en desarrollo
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6" role="note" aria-labelledby="project-status-title">
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-900 ring-1 ring-amber-200">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 id="project-status-title" className="text-sm font-extrabold uppercase tracking-wide text-amber-950">
                Estado actual de la propuesta
              </h2>
              <p className="mt-1.5 max-w-4xl text-sm leading-relaxed text-amber-950">
                {site.statusNotice} La Municipalidad de Wanda, el Fondo de Crédito Misiones u otros
                organismos no figuran como socios, avalistas ni financiadores confirmados de esta
                versión del campus. Si esa situación cambia, se comunicará con información verificada
                y autorización institucional.
              </p>
            </div>
          </div>
        </aside>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start" aria-labelledby="project-idea-title">
          <div>
            <p className="eyebrow">La idea central</p>
            <h2 id="project-idea-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Poner en valor lo que la escuela ya sabe hacer
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-body">
              <p>
                La Escuela Normal Superior N.º 9 cuenta con infraestructura tecnológica, capacidades
                pedagógicas y experiencias concretas de innovación. NORMAL 9 IMPULSA busca transformar
                esas capacidades en herramientas y oportunidades de aprendizaje para la comunidad.
              </p>
              <p>
                El campus no reemplaza la formación presencial ni la tarea docente: la complementa.
                Los cursos ofrecen un punto de entrada para ordenar ideas, calcular costos, construir
                una identidad y usar herramientas digitales. Las jornadas y el Aula-Taller permiten
                continuar con práctica acompañada.
              </p>
              <p>
                La propuesta se construye por etapas. Esta primera versión prioriza contenidos
                educativos abiertos, privacidad, accesibilidad y transparencia sobre lo que todavía no
                está confirmado.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/herramientas/diagnostico" className="btn btn-sea">
                <Compass className="h-4 w-4" aria-hidden="true" />
                Hacer el diagnóstico inicial
              </Link>
              <Link href="/jornadas" className="btn btn-secondary">
                Ver jornadas modelo
              </Link>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-brand-200 bg-gradient-to-br from-brand-950 to-brand-900 p-6 text-white shadow-lift sm:p-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-sea-300">
              En una frase
            </p>
            <blockquote className="mt-3 text-xl font-extrabold leading-snug text-white">
              «Una escuela pública que abre su aula, su tecnología y su experiencia para que más
              personas puedan aprender a emprender.»
            </blockquote>
            <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/60">
              Esta frase describe la intención pedagógica del proyecto. No implica convenios,
              financiamiento ni avales de terceros.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                <p className="text-2xl font-extrabold text-white">4</p>
                <p className="mt-0.5 text-[11px] font-semibold text-white/60">cursos iniciales</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                <p className="text-2xl font-extrabold text-white">1</p>
                <p className="mt-0.5 text-[11px] font-semibold text-white/60">Aula-Taller</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="project-facts-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Punto de partida</p>
            <h2 id="project-facts-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Lo que se puede afirmar hoy
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Trabajamos con información institucional verificable. Los datos que siguen son los que
              sostienen esta versión del proyecto.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {currentFacts.map((fact) => (
              <div key={fact} className="flex gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sea-700" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-body">{fact}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {feasibilityNotes.map((note) => (
              <article key={note.title} className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                <Sparkles className="h-4 w-4 text-sea-700" aria-hidden="true" />
                <h3 className="mt-2 text-base font-extrabold text-brand-950">{note.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{note.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-labelledby="project-development-title">
          <div>
            <p className="eyebrow">Transparencia</p>
            <h2 id="project-development-title" className="mt-2 text-3xl font-extrabold text-brand-950">
              Lo que todavía está en desarrollo
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Estos puntos no deben interpretarse como compromisos, fechas ni resultados
              garantizados. Se comunicarán cuando existan definiciones formales.
            </p>
          </div>
          <ul className="space-y-3">
            {inDevelopment.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-dashed border-slate-300 bg-white p-4 text-sm leading-relaxed text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="project-principles-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 id="project-principles-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Principios de la propuesta
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea-50 text-sea-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-brand-950">{principle.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{principle.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-12 grid gap-6 rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_0.9fr]" aria-labelledby="project-participate-title">
          <div>
            <p className="eyebrow">Participar</p>
            <h2 id="project-participate-title" className="mt-2 text-2xl font-extrabold text-brand-950 sm:text-3xl">
              Cómo podés empezar hoy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              No necesitás esperar una jornada ni una alianza futura. El campus está disponible y el
              recorrido es individual. Para consultas institucionales sobre el proyecto, dirigite a la
              Escuela Normal Superior N.º 9 en Wanda, Misiones.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/cursos" className="btn btn-primary">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Explorar cursos
              </Link>
              <Link href="/biblioteca" className="btn btn-secondary">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                Ver biblioteca
              </Link>
            </div>
          </div>
          <ol className="space-y-2.5 rounded-2xl bg-slate-50 p-5">
            {[
              "Recorré los cuatro cursos a tu ritmo.",
              "Completá el diagnóstico inicial para identificar prioridades.",
              "Descargá o imprimí los recursos que necesites.",
              "Si completás un curso, imprimí tu constancia de demostración.",
              "Volvé cuando quieras: tu avance queda en este navegador.",
            ].map((step, index) => (
              <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-body">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-900 text-[10px] font-extrabold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          NORMAL 9 IMPULSA · {site.institution.name} · {site.institution.locality}, {site.institution.province}
          <br />
          Iniciativa educativa. Las constancias son documentos de actividad educativa de
          demostración y no constituyen certificación oficial.
        </p>
      </div>
    </>
  );
}
