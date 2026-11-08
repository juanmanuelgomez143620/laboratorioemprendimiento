import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Route,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { employmentRoutes } from "@/content/employment-routes";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Oficina de Empleo",
  description:
    "Información, servicios y programas de la Dirección de Oficina de Empleo y Proyectos de Wanda, y rutas formativas del campus educativo de la Escuela Normal Superior N.º 9 propuestas para sus programas.",
};

const services = [
  {
    icon: Briefcase,
    title: "Orientación laboral",
    text: "Acompañamiento para ordenar la búsqueda de empleo, identificar habilidades y definir próximos pasos.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación y formación",
    text: "Acciones de formación profesional y continua, incluyendo entrenamiento para el trabajo.",
  },
  {
    icon: Users,
    title: "Vinculación con empleadores",
    text: "Articulación entre personas que buscan trabajo y empresas o unidades productivas de la zona.",
  },
  {
    icon: Building2,
    title: "Proyectos comunitarios",
    text: "Proyectos de diversa índole, desde capacitaciones hasta obras de infraestructura, con búsqueda de financiamiento.",
  },
];

export default function EmploymentOfficePage() {
  const office = site.employmentOffice;

  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Oficina de Empleo · Wanda"
        title="Dirección de Oficina de Empleo y Proyectos"
        description="Un espacio municipal para la inserción laboral, la capacitación y el acompañamiento a personas y unidades productivas de Wanda. Esta página reúne información verificada y enlaces a los programas nacionales que la oficina gestiona."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Oficina de Empleo" }]}
        meta={
          <>
            <span className="badge badge-on-dark">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Wanda, Misiones
            </span>
            <span className="badge badge-on-dark">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
              Lunes a viernes, 07:30 a 13:30
            </span>
            <span className="badge badge-on-dark">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Propuesta en articulación
            </span>
          </>
        }
        actions={
          <>
            <a
              href={`tel:${office.phone.replace(/\D/g, "")}`}
              className="btn btn-on-dark"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar a la oficina
            </a>
            <Link href="/oficina-de-empleo/rutas" className="btn btn-outline-on-dark">
              <Route className="h-4 w-4" aria-hidden="true" />
              Rutas por programa
            </Link>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <aside
          className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6"
          role="note"
          aria-labelledby="employment-status-title"
        >
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-900 ring-1 ring-amber-200">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 id="employment-status-title" className="text-sm font-extrabold uppercase tracking-wide text-amber-950">
                Pensado con los lineamientos de la oficina
              </h2>
              <p className="mt-1.5 max-w-4xl text-sm leading-relaxed text-amber-950">
                {site.alignmentNotice} La escuela ofrece el campus a la oficina como recurso educativo
                para sus programas; mientras tanto, lo usa en sus propias jornadas abiertas. No existen
                convenios ni avales formalizados, y las constancias del campus son documentos de
                actividad educativa.
              </p>
            </div>
          </div>
        </aside>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start" aria-labelledby="employment-function-title">
          <div>
            <p className="eyebrow">Función de la dirección</p>
            <h2 id="employment-function-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Qué hace la oficina
            </h2>
            <p className="mt-4 text-base leading-relaxed text-body">{office.function}</p>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Directora: <span className="font-bold text-brand-950">{office.director}</span>. La oficina
              depende de la Municipalidad de Wanda y articula con los programas nacionales de empleo del
              Ministerio de Capital Humano.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/herramientas/diagnostico" className="btn btn-sea">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Hacer el diagnóstico inicial
              </Link>
              <Link href="/proyecto" className="btn btn-secondary">
                Conocer el proyecto educativo
              </Link>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-brand-200 bg-white p-6 shadow-card sm:p-7">
            <h3 className="text-base font-extrabold text-brand-950">Servicios que se brindan</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.title} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-brand-950">{service.title}</p>
                      <p className="text-xs leading-relaxed text-muted">{service.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="employment-programs-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Programas nacionales</p>
            <h2 id="employment-programs-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Programas que gestiona la oficina
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              La oficina lleva adelante los programas de empleo de la Secretaría de Trabajo, Empleo y
              Seguridad Social. Cada enlace abre el sitio oficial del programa, fuera de este campus.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.employmentPrograms.map((program) => (
              <a
                key={program.name}
                href={program.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-extrabold text-brand-950 group-hover:text-brand-800">
                    {program.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-brand-800" aria-hidden="true" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{program.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-800">
                  Ir al programa oficial
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="sr-only">(abre en una pestaña nueva)</span>
              </a>
            ))}
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Portal general de empleo:{" "}
            <a
              href={office.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-800 underline underline-offset-4 hover:text-brand-950"
            >
              argentina.gob.ar/trabajo
            </a>
            . Campus Emprendedor no administra estos programas ni sus datos.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="employment-routes-title">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Formación complementaria</p>
              <h2 id="employment-routes-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
                Rutas del campus para cada programa
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">
                Recorridos breves que combinan lecciones, guías y plantillas del campus. El equipo de la
                oficina puede indicarlos en una entrevista o trabajarlos en un taller.
              </p>
            </div>
            <Link href="/oficina-de-empleo/rutas" className="link-arrow shrink-0">
              Ver todas las rutas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {employmentRoutes.map((route) => (
              <Link
                key={route.id}
                href={`/oficina-de-empleo/rutas#${route.id}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <h3 className="text-base font-extrabold text-brand-950 group-hover:text-brand-800">{route.title}</h3>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-sea-700">{route.programs.join(" · ")}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{route.goal}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-800">
                  {route.steps.length} pasos · {route.estimatedHours}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]" aria-labelledby="employment-contact-title">
          <div>
            <p className="eyebrow">Contacto y atención</p>
            <h2 id="employment-contact-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Cómo comunicarse con la oficina
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Para consultas sobre programas, requisitos, inscripciones o proyectos, comunicate directamente
              con la oficina en su horario de atención.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-body">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                <span>
                  <span className="font-bold text-brand-950">Dirección:</span> {office.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                <span>
                  <span className="font-bold text-brand-950">Teléfono:</span>{" "}
                  <a
                    href={`tel:${office.phone.replace(/\D/g, "")}`}
                    className="font-bold text-brand-800 underline underline-offset-4 hover:text-brand-950"
                  >
                    {office.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                <span>
                  <span className="font-bold text-brand-950">Correo:</span>{" "}
                  <a
                    href={`mailto:${office.email}`}
                    className="font-bold text-brand-800 underline underline-offset-4 hover:text-brand-950"
                  >
                    {office.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                <span>
                  <span className="font-bold text-brand-950">Horario:</span> {office.hours}
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={office.webpage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Página oficial
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={office.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Instagram
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={office.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                Facebook
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-[1.4rem] border border-line bg-slate-50 p-6">
            <h3 className="text-base font-extrabold text-brand-950">Prestaciones de la dirección</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Según la información institucional publicada, la dirección brinda las siguientes
              prestaciones:
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-body">
              {site.employmentPrograms.map((program) => (
                <li key={program.name} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  <span>{program.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              La oficina también gestiona el Programa Fomentar Empleo, el Seguro por Desempleo y
              Intercosecha, según su función institucional. Para requisitos y fechas, consultá
              directamente con la oficina.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card sm:p-8" aria-labelledby="employment-campus-title">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow">Articulación con el campus</p>
              <h2 id="employment-campus-title" className="mt-2 text-2xl font-extrabold text-brand-950 sm:text-3xl">
                Cómo se conecta con el Campus Emprendedor
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                El campus aporta cursos, recursos y herramientas de gestión para acompañar a quienes
                emprenden o buscan mejorar su situación laboral; la oficina, orientación, vinculación y
                acceso a programas nacionales. Si la oficina adhiere, puede indicar las rutas en su
                atención. Si no, la escuela las usa en sus talleres y cualquier persona puede seguirlas
                por su cuenta antes de acercarse a la oficina.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/propuesta" className="btn btn-primary">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Leer la propuesta a la Municipalidad
                </Link>
                <Link href="/cursos" className="btn btn-secondary">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  Explorar cursos
                </Link>
                <Link href="/herramientas" className="btn btn-secondary">
                  Ver herramientas
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-brand-50 p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sea-700">
                Enlaces institucionales
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/proyecto" className="font-bold text-brand-800 hover:underline">
                    Sobre el proyecto educativo
                  </Link>
                </li>
                <li>
                  <Link href="/aula-taller" className="font-bold text-brand-800 hover:underline">
                    Potencial del Aula-Taller
                  </Link>
                </li>
                <li>
                  <Link href="/jornadas" className="font-bold text-brand-800 hover:underline">
                    Jornadas de formación
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="font-bold text-brand-800 hover:underline">
                    Privacidad y accesibilidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Campus Emprendedor · {site.institution.name} · Oficina de Empleo de Wanda
          <br />
          Información institucional verificada. Las constancias son documentos de actividad educativa de
          demostración.
        </p>
      </div>
    </>
  );
}