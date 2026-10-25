import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  ImageOff,
  Info,
  ListChecks,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  jornadaGallery,
  jornadaOverview,
  modelJornada,
  possibleTopics,
  scheduledJornadas,
} from "@/content/jornadas";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Jornadas de formación",
  description:
    "Jornada modelo de formación presencial del Campus Emprendedor. Es una demostración de formato, sin fecha, inscripción ni certificación oficial.",
};

export default function JornadasPage() {
  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Formación presencial"
        title="Jornadas para aprender haciendo"
        description="Encuentros de taller pensados para complementar el recorrido digital: una explicación breve, una práctica guiada y recursos para continuar. La jornada publicada aquí es un modelo de demostración, no una actividad agendada."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Jornadas" }]}
        actions={
          <>
            <Link href="/herramientas/diagnostico" className="btn btn-on-dark">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Hacer el diagnóstico
            </Link>
            <Link href="/cursos" className="btn btn-outline-on-dark">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Ver cursos
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-on-dark">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Jornada modelo
            </span>
            <span className="badge badge-on-dark">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              Sin fecha confirmada
            </span>
            <span className="badge badge-on-dark">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Aula-Taller N.º 17
            </span>
            <span className="badge badge-on-dark">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
              Sin certificación oficial
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6" role="note">
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-900 ring-1 ring-amber-200">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-amber-950">
                Esta jornada es una demostración
              </h2>
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-amber-950">
                {jornadaOverview.note}
              </p>
            </div>
          </div>
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start" aria-labelledby="model-jornada-title">
          <div className="min-w-0">
            <article className="card-surface overflow-hidden">
              <div className="bg-gradient-to-br from-brand-950 to-brand-900 p-6 text-white sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-on-dark">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Demostración de formato
                  </span>
                  <span className="badge badge-on-dark">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {modelJornada.duration}
                  </span>
                </div>
                <h2 id="model-jornada-title" className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                  {modelJornada.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                  {modelJornada.description}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-extrabold uppercase tracking-wide text-sea-300">Modalidad</p>
                    <p className="mt-1 text-sm font-semibold text-white/85">{modelJornada.modality}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-[10px] font-extrabold uppercase tracking-wide text-sea-300">Objetivo</p>
                    <p className="mt-1 text-sm font-semibold text-white/85">{modelJornada.objective}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <section aria-labelledby="jornada-audience-title">
                  <h3 id="jornada-audience-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                    <Users className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    A quién está dirigida
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {modelJornada.audience.map((item) => (
                      <li key={item} className="flex gap-2.5 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-body">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-7" aria-labelledby="jornada-agenda-title">
                  <h3 id="jornada-agenda-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                    <ListChecks className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    Agenda modelo
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {modelJornada.agenda.map((item, index) => (
                      <li key={item.title} className="flex gap-4 rounded-2xl border border-line bg-white p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-xs font-extrabold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-sea-700">{item.moment}</p>
                          <h4 className="mt-0.5 text-base font-extrabold text-brand-950">{item.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <section className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5" aria-labelledby="jornada-before-title">
                    <h3 id="jornada-before-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                      Antes del encuentro
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-body">
                      {modelJornada.before.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section className="rounded-2xl border border-sea-200 bg-sea-50/60 p-5" aria-labelledby="jornada-after-title">
                    <h3 id="jornada-after-title" className="text-sm font-extrabold uppercase tracking-wide text-sea-900">
                      Después del encuentro
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-body">
                      {modelJornada.after.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-500" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <section className="mt-7" aria-labelledby="jornada-resources-title">
                  <h3 id="jornada-resources-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                    <FileText className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    Recursos para continuar
                  </h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {modelJornada.resources.map((resource) => (
                      <li key={resource.label}>
                        <Link
                          href={resource.href}
                          className="group flex h-full flex-col rounded-xl border border-line bg-white p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
                        >
                          <span className="flex items-center justify-between gap-2 text-sm font-bold text-brand-950 group-hover:text-brand-800">
                            {resource.label}
                            <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5" aria-hidden="true" />
                          </span>
                          <span className="mt-1 text-xs leading-relaxed text-muted">{resource.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5" aria-labelledby="jornada-overview-title">
              <h2 id="jornada-overview-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Cómo son las jornadas
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">{jornadaOverview.description}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted">{jornadaOverview.modality}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{jornadaOverview.audience}</p>
            </section>

            <section className="card-surface p-5" aria-labelledby="jornada-status-title">
              <h2 id="jornada-status-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <CalendarDays className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Estado de la agenda
              </h2>
              {scheduledJornadas.length === 0 ? (
                <div className="mt-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-brand-950">No hay jornadas programadas publicadas.</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Cuando exista una actividad real, autorizada y con datos verificados, se publicará
                    en este espacio. No inventamos fechas, disertantes ni inscripciones.
                  </p>
                </div>
              ) : (
                <ul className="mt-3 space-y-3">
                  {scheduledJornadas.map((event) => (
                    <li key={event.id} className="rounded-xl border border-line p-4">
                      <span className="badge badge-sea">{event.status}</span>
                      <p className="mt-2 text-sm font-extrabold text-brand-950">{event.title}</p>
                      <p className="mt-1 text-xs text-muted">{event.dateLabel} · {event.modality}</p>
                      <p className="mt-1 text-xs leading-relaxed text-body">{event.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="card-surface p-5" aria-labelledby="jornada-gallery-title">
              <h2 id="jornada-gallery-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <ImageOff className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Galería
              </h2>
              {jornadaGallery.length === 0 ? (
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Todavía no hay imágenes publicadas. No se publicarán fotos de participantes sin
                  autorización institucional y de las personas retratadas.
                </p>
              ) : (
                <ul className="mt-3 grid gap-3">
                  {jornadaGallery.map((image) => (
                    <li key={image.id} className="rounded-xl border border-line p-3">
                      <p className="text-sm font-bold text-brand-950">{image.title}</p>
                      <p className="mt-1 text-xs text-muted">{image.description}</p>
                      <p className="mt-1 text-[10px] text-muted">{image.authorizationNote}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-amber-950">
                <Award className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Las jornadas del campus no otorgan certificaciones oficiales. La constancia del campus
                corresponde a la actividad educativa de demostración de cada curso.
              </p>
            </section>

            <Link href="/aula-taller" className="btn btn-secondary w-full">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Conocer el Aula-Taller
            </Link>
          </aside>
        </section>

        <section className="mt-12" aria-labelledby="jornada-topics-title">
          <div className="max-w-2xl">
            <p className="eyebrow">Temas posibles</p>
            <h2 id="jornada-topics-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Qué podría trabajar en una próxima jornada
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Estos temas son propuestas de trabajo, no una agenda confirmada. Se definirán con la
              comunidad y con las condiciones institucionales correspondientes.
            </p>
          </div>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {possibleTopics.map((topic) => (
              <li key={topic} className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-4 text-sm font-semibold text-brand-950 shadow-card">
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                {topic}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card sm:p-8" aria-labelledby="jornada-satisfaction-title">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Evaluación modelo</p>
              <h2 id="jornada-satisfaction-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                Preguntas para revisar una jornada
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Estas preguntas forman parte del modelo de evaluación. No hay un formulario activo
                porque la jornada no está agendada. Cuando se realice una actividad, la evaluación se
                entregará en el encuentro y no recopilará datos personales innecesarios.
              </p>
              <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                {site.statusNotice}
              </p>
            </div>
            <ol className="space-y-2.5">
              {modelJornada.satisfactionQuestions.map((question) => (
                <li key={question} className="flex gap-2.5 text-sm leading-relaxed text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-500" aria-hidden="true" />
                  {question}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold text-brand-950">Mientras esperás una jornada presencial</p>
            <p className="mt-0.5 text-xs text-muted">El campus y la biblioteca están disponibles en cualquier momento.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/cursos" className="btn btn-primary btn-sm">
              Explorar cursos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/biblioteca" className="btn btn-secondary btn-sm">
              Abrir biblioteca
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
