import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  Handshake,
  Laptop,
  Lock,
  Mail,
  MapPin,
  PenLine,
  Phone,
  School,
  ShieldCheck,
  Smartphone,
  Users,
  WifiOff,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/PageHeader";
import { InstitutionalCrest } from "@/components/ui/InstitutionalCrest";
import { PrintButton } from "@/components/ui/PrintButton";
import { courses, totalLearningMinutes, totalLessons } from "@/content/courses";
import { employmentRoutes } from "@/content/employment-routes";
import { glossaryTerms } from "@/content/glossary";
import { resources } from "@/content/resources";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Propuesta: formación para el empleo y el emprendimiento",
  description:
    "Propuesta de la Escuela Normal Superior N.º 9 de Wanda: Campus Emprendedor como recurso educativo para los programas de la Oficina de Empleo local y para la formación abierta de la escuela.",
};

const scenarios = [
  {
    icon: Building2,
    tone: "brand" as const,
    title: "Si la Oficina de Empleo adhiere",
    lead: "El campus se suma como plataforma de recursos educativos de sus programas.",
    items: [
      "El equipo de la oficina indica rutas formativas en las entrevistas de orientación.",
      "Se organizan talleres conjuntos en el Aula-Taller N.º 17 o en el espacio que defina la oficina.",
      "Las personas llegan a la formulación de proyectos con su CV, su plan o sus costos ya trabajados.",
      "Se evalúa en conjunto una prueba piloto antes de cualquier formalización.",
    ],
  },
  {
    icon: School,
    tone: "sea" as const,
    title: "Si no adhiere, o mientras lo decide",
    lead: "La escuela lo usa igual: el recurso ya está disponible y sigue siendo útil.",
    items: [
      "Jornadas abiertas de formación para emprendedores y personas que buscan empleo.",
      "Prácticas de estudiantes de la modalidad TGA como tutores de la comunidad.",
      "Material de apoyo para egresados que inician su búsqueda laboral o un emprendimiento.",
      "Acceso libre para cualquier vecino o vecina de Wanda, sin registro.",
    ],
  },
];

const needs = [
  {
    icon: Briefcase,
    title: "Programas que necesitan formación de apoyo",
    text: "Inserción laboral, entrenamiento, empleo independiente y trabajo autogestionado funcionan mejor cuando las personas llegan con su perfil, sus números o su idea más ordenados.",
  },
  {
    icon: Smartphone,
    title: "Materiales disponibles en cualquier momento",
    text: "Lo trabajado en una entrevista o en un taller puede continuar en casa desde el celular, a ritmo propio, sin depender de horarios de atención ni de cupos.",
  },
  {
    icon: WifiOff,
    title: "Conectividad limitada en parte del municipio",
    text: "El campus funciona en celulares, guarda páginas para leer sin conexión y permite imprimir guías y plantillas para trabajar en papel.",
  },
];

const modalities = [
  {
    icon: ClipboardList,
    title: "Orientación individual",
    text: "Quien orienta, sea del equipo de la oficina o docente de la escuela, indica una ruta y entrega la ficha impresa con el enlace. La persona avanza desde su celular y vuelve con su entregable.",
  },
  {
    icon: Users,
    title: "Talleres grupales",
    text: "Encuentros presenciales en el Aula-Taller N.º 17, que cuenta con 20 computadoras, o en otro espacio comunitario. Docentes y estudiantes de la modalidad TGA acompañan las actividades prácticas.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento de proyectos",
    text: "Para empleo independiente y unidades productivas: el plan de una página, la ficha de costos y el flujo de caja sirven como base para formular un proyecto o pedir asesoramiento.",
  },
];

const contributions = {
  school: [
    "Contenidos educativos, actualización y corrección de cursos y recursos.",
    "Desarrollo y mantenimiento técnico de la plataforma.",
    "Espacio del Aula-Taller N.º 17 para talleres, sujeto a la agenda escolar.",
    "Participación de docentes y estudiantes de la modalidad TGA en actividades acordadas.",
    "Adaptación de rutas y materiales a pedido de la oficina.",
  ],
  office: [
    "Designar una persona de referencia para coordinar el uso.",
    "Revisar y validar la información publicada sobre la oficina y sus programas.",
    "Indicar las rutas a las personas que atiende, según su criterio profesional.",
    "Difundir el enlace en sus canales y, si lo considera, en wanda.gob.ar.",
    "Compartir sugerencias y necesidades formativas detectadas en la atención.",
  ],
};

const pilotPhases = [
  {
    phase: "Fase 1",
    duration: "2 a 3 semanas",
    title: "Ajuste",
    items: [
      "Presentación del campus a la dirección y al equipo de la oficina.",
      "Revisión de contenidos, rutas y textos institucionales.",
      "Definición de la ficha de orientación y de las personas de referencia.",
    ],
  },
  {
    phase: "Fase 2",
    duration: "8 semanas",
    title: "Prueba piloto",
    items: [
      "Uso de dos rutas: búsqueda de empleo y empleo independiente.",
      "Uno o dos talleres presenciales en el Aula-Taller.",
      "Registro simple y anónimo de uso: orientaciones, talleres y entregables.",
    ],
  },
  {
    phase: "Fase 3",
    duration: "2 semanas",
    title: "Evaluación y decisión",
    items: [
      "Informe breve con resultados y opiniones de participantes.",
      "Ajustes de contenidos según lo aprendido.",
      "Decisión sobre continuidad y, si corresponde, formalización mediante un acuerdo.",
    ],
  },
];

const indicators = [
  "Personas orientadas por ruta, registradas sin datos personales en el campus.",
  "Talleres realizados y asistencia.",
  "Entregables presentados: CV, plan de una página, ficha de costos.",
  "Constancias de finalización de cursos.",
  "Opinión de participantes mediante una encuesta anónima breve.",
];

const safeguards = [
  {
    icon: Lock,
    title: "Sin datos personales",
    text: "No hay registro ni cuentas. El avance se guarda solo en el navegador de cada persona y no se envía a ningún servidor.",
  },
  {
    icon: ShieldCheck,
    title: "Sin costo de licencias",
    text: "No requiere comprar software, licencias ni equipamiento. Se usa desde cualquier navegador.",
  },
  {
    icon: BadgeCheck,
    title: "Información verificable",
    text: "Los programas enlazan a sus sitios oficiales. El campus no promete beneficios, cupos ni resultados.",
  },
  {
    icon: FileText,
    title: "Constancias claras",
    text: "Las constancias son de actividad educativa. Solo tendrán otro alcance si las partes lo acuerdan formalmente.",
  },
];

function SectionTitle({ number, eyebrow, id, children }: { number: number; eyebrow: string; id: string; children: React.ReactNode }) {
  return (
    <>
      <p className="eyebrow">
        {number} · {eyebrow}
      </p>
      <h2 id={id} className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
        {children}
      </h2>
    </>
  );
}

export default function ProposalPage() {
  const inst = site.institution;
  const office = site.employmentOffice;
  const author = site.author;
  const publicUrl = siteUrl.replace(/^https?:\/\//, "");
  const hours = Math.round(totalLearningMinutes / 60);

  const stats = [
    { value: courses.length, label: "cursos aplicados" },
    { value: totalLessons, label: "lecciones con actividades" },
    { value: resources.length, label: "guías y plantillas" },
    { value: employmentRoutes.length, label: "rutas por programa" },
    { value: glossaryTerms.length, label: "términos en el glosario" },
    { value: `${hours} h`, label: "de formación orientativa" },
  ];

  return (
    <>
      {/* Portada */}
      <section className="print-invert relative overflow-hidden bg-brand-950 text-white" aria-labelledby="proposal-title">
        <Image
          src={site.coverImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="print-hidden object-cover opacity-40"
        />
        <div
          aria-hidden="true"
          className="print-hidden absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/40"
        />
        <div className="container-page relative py-10 sm:py-14 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Inicio", href: "/" }, { label: "Propuesta" }]}
            className="no-print mb-8 text-white/65"
            dark
          />
          <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
            <div className="flex items-center gap-4 lg:block">
              <span className="inline-flex rounded-2xl bg-white/95 p-2 shadow-lg">
                <InstitutionalCrest size="md" />
              </span>
              <p className="text-sm font-semibold leading-snug text-white/75 lg:mt-3 lg:max-w-[9rem] lg:text-xs">
                {inst.name}
                <br />
                {inst.locality}, {inst.province}
              </p>
            </div>
            <div className="max-w-3xl">
              <p className="eyebrow eyebrow-on-dark">Propuesta institucional · {inst.department}</p>
              <h1 id="proposal-title" className="mt-3 text-[clamp(2.1rem,4.8vw,3.7rem)] text-white">
                Formación para el empleo y el emprendimiento en Wanda
              </h1>
              <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-white/80 sm:text-lg">
                Campus Emprendedor es un recurso educativo gratuito, pensado con los lineamientos de la
                Oficina de Empleo local. Sirve a sus programas si decide adherir y, en cualquier caso, a
                la escuela y a toda la comunidad.
              </p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-sea-300">Presenta</dt>
                  <dd className="font-semibold">{inst.shortName} · Modalidad TGA</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-sea-300">Destinatario</dt>
                  <dd className="font-semibold">{office.name}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-sea-300">Autoría</dt>
                  <dd className="font-semibold">
                    {author.name}
                    <span className="block text-xs font-medium text-white/70">{author.titles.join(" · ")}</span>
                  </dd>
                </div>
              </dl>
              <div className="no-print mt-7 flex flex-wrap gap-3">
                <PrintButton label="Imprimir o guardar PDF" className="btn-on-dark" />
                <Link href="/oficina-de-empleo/rutas" className="btn btn-outline-on-dark">
                  Ver rutas por programa
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="container-page py-10 sm:py-14">
        {/* 1. Resumen */}
        <section aria-labelledby="summary-title">
          <SectionTitle number={1} eyebrow="Resumen" id="summary-title">
            Qué es y qué proponemos
          </SectionTitle>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-base leading-relaxed text-body">
              <p>
                La escuela desarrolló <strong>Campus Emprendedor</strong>, un sitio educativo gratuito y
                abierto con cursos breves, guías, plantillas y herramientas para emprender, mejorar un
                negocio y buscar empleo.
              </p>
              <p>
                Ofrecemos el campus a la Dirección de Oficina de Empleo y Proyectos como{" "}
                <strong>recurso educativo complementario</strong> de sus programas. Para facilitarlo,
                organizamos los contenidos en{" "}
                <Link href="/oficina-de-empleo/rutas" className="font-bold text-brand-800 underline underline-offset-4">
                  {employmentRoutes.length} rutas por programa
                </Link>
                : recorridos cortos que terminan en un entregable concreto, como un CV, un plan de una
                página o una ficha de costos.
              </p>
              <p>
                La propuesta está hecha para funcionar <strong>con o sin adhesión formal</strong>: si la
                oficina la acepta, la integramos a su trabajo; si no, la escuela la sostiene en sus
                propias jornadas y el recurso sigue disponible para la comunidad.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-3 self-start">
              {stats.map((stat) => (
                <div key={stat.label} className="print-avoid-break rounded-2xl border border-line bg-white p-4 shadow-card">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-extrabold text-brand-900">{stat.value}</span>
                    <span className="mt-0.5 block text-xs font-semibold leading-snug text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 2. Lineamientos */}
        <section
          className="print-avoid-break mt-14 rounded-[1.5rem] border border-sea-200 bg-white shadow-card"
          aria-labelledby="alignment-title"
        >
          <div className="p-6 sm:p-8">
            <SectionTitle number={2} eyebrow="Pensado para Wanda" id="alignment-title">
              Alineado con la Oficina de Empleo local
            </SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-body">{site.alignmentNotice}</p>
            <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-body sm:grid-cols-2">
              {site.employmentPrograms.map((program) => (
                <li key={program.name} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  {program.name}
                </li>
              ))}
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Fomentar Empleo, Seguro por Desempleo e Intercosecha
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              Fuente: información institucional publicada por la Municipalidad de Wanda en{" "}
              <a href={office.webpage} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-800 underline underline-offset-4">
                wanda.gob.ar/oficina-de-empleo
              </a>
              .
            </p>
          </div>
        </section>

        {/* 3. Escenarios */}
        <section className="mt-14" aria-labelledby="scenarios-title">
          <SectionTitle number={3} eyebrow="Dos escenarios" id="scenarios-title">
            Un mismo recurso, útil en ambos casos
          </SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              const brand = scenario.tone === "brand";
              return (
                <div
                  key={scenario.title}
                  className={`print-avoid-break rounded-2xl border bg-white p-6 shadow-card ${brand ? "border-brand-200" : "border-sea-200"}`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${brand ? "bg-brand-50 text-brand-800" : "bg-sea-50 text-sea-800"}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold text-brand-950">{scenario.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-body">{scenario.lead}</p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
                    {scenario.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${brand ? "text-brand-700" : "text-sea-700"}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-body">
            <strong className="text-brand-950">En los dos casos</strong>, los contenidos siguen
            organizados según los programas de empleo locales. Así, cualquier persona que se forme en el
            campus llega mejor preparada a la Oficina de Empleo.
          </p>
        </section>

        {/* 4. Necesidades */}
        <section className="mt-14" aria-labelledby="needs-title">
          <SectionTitle number={4} eyebrow="Por qué" id="needs-title">
            Necesidades que atiende
          </SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {needs.map((need) => {
              const Icon = need.icon;
              return (
                <div key={need.title} className="print-avoid-break rounded-2xl border border-line bg-white p-5 shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-brand-950">{need.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{need.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Rutas */}
        <section className="mt-14" aria-labelledby="routes-title">
          <SectionTitle number={5} eyebrow="Qué ofrece" id="routes-title">
            Rutas formativas por programa
          </SectionTitle>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-body">
            Cada ruta combina lecciones, recursos y herramientas del campus. Son material de apoyo: no
            reemplazan los requisitos ni las capacitaciones propias de cada programa.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="bg-brand-50 text-xs uppercase tracking-wide text-brand-900">
                <tr>
                  <th scope="col" className="px-4 py-3 font-extrabold">Ruta</th>
                  <th scope="col" className="px-4 py-3 font-extrabold">Programas relacionados</th>
                  <th scope="col" className="px-4 py-3 font-extrabold">Entregable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {employmentRoutes.map((route) => (
                  <tr key={route.id} className="align-top">
                    <th scope="row" className="px-4 py-3 font-bold text-brand-950">
                      <Link href={`/oficina-de-empleo/rutas#${route.id}`} className="hover:underline">
                        {route.title}
                      </Link>
                      <span className="mt-0.5 block text-xs font-medium text-muted">{route.estimatedHours}</span>
                    </th>
                    <td className="px-4 py-3 text-body">{route.programs.join(", ")}</td>
                    <td className="px-4 py-3 text-body">{route.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Modalidades */}
        <section className="mt-14" aria-labelledby="modalities-title">
          <SectionTitle number={6} eyebrow="Cómo se usa" id="modalities-title">
            Tres modalidades de uso
          </SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {modalities.map((modality) => {
              const Icon = modality.icon;
              return (
                <div key={modality.title} className="print-avoid-break rounded-2xl border border-line bg-white p-5 shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea-50 text-sea-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-brand-950">{modality.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{modality.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. Aportes */}
        <section className="mt-14" aria-labelledby="contributions-title">
          <SectionTitle number={7} eyebrow="Roles" id="contributions-title">
            Qué aporta cada parte si hay adhesión
          </SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="print-avoid-break rounded-2xl border border-brand-200 bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-extrabold text-brand-950">
                <GraduationCap className="h-5 w-5 text-brand-700" aria-hidden="true" />
                La escuela
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
                {contributions.school.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="print-avoid-break rounded-2xl border border-sea-200 bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-extrabold text-brand-950">
                <Building2 className="h-5 w-5 text-sea-700" aria-hidden="true" />
                La Oficina de Empleo (a acordar)
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
                {contributions.office.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Sin adhesión, la escuela asume todas las tareas con sus propios recursos y mantiene el
            campus abierto a la comunidad.
          </p>
        </section>

        {/* 8. Piloto */}
        <section className="mt-14" aria-labelledby="pilot-title">
          <SectionTitle number={8} eyebrow="Plan de trabajo" id="pilot-title">
            Prueba piloto de tres meses
          </SectionTitle>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-body">
            Se realiza junto con la oficina si adhiere, o como jornadas propias de la escuela abiertas a
            la comunidad. En los dos casos se usan las mismas fases e indicadores.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {pilotPhases.map((phase) => (
              <li key={phase.phase} className="print-avoid-break rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-sea-700">
                  <CalendarRange className="h-4 w-4" aria-hidden="true" />
                  {phase.phase} · {phase.duration}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-brand-950">{phase.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-body">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="print-avoid-break mt-6 rounded-2xl border border-line bg-slate-50 p-5 sm:p-6">
            <h3 className="text-base font-extrabold text-brand-950">Cómo mediremos los resultados</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-body md:grid-cols-2">
              {indicators.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. Resguardos */}
        <section className="mt-14" aria-labelledby="safeguards-title">
          <SectionTitle number={9} eyebrow="Resguardos" id="safeguards-title">
            Condiciones de la propuesta
          </SectionTitle>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {safeguards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="print-avoid-break rounded-2xl border border-line bg-white p-5 shadow-card">
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  <h3 className="mt-2 text-base font-extrabold text-brand-950">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
            <strong>Documento para consideración.</strong> Su presentación no implica convenio, aval ni
            compromiso de la Municipalidad. La forma de trabajo, los plazos y los alcances se definirán
            en conjunto.
          </p>
        </section>

        {/* 10. Próximo paso */}
        <section
          className="print-avoid-break print-invert mt-14 rounded-[1.5rem] bg-brand-950 p-6 text-white sm:p-10"
          aria-labelledby="next-steps-title"
        >
          <p className="eyebrow eyebrow-on-dark">10 · Próximo paso</p>
          <h2 id="next-steps-title" className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Solicitamos una reunión de presentación
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/75">
            Proponemos un encuentro con la directora de la oficina, {office.director}, y su equipo para
            mostrar el campus en funcionamiento, revisar las rutas y conversar sobre la prueba piloto.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sea-300">Presenta</p>
              <p className="mt-2 font-bold">{inst.name}</p>
              <p className="text-sm text-white/70">
                {inst.department} · {inst.modality}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                  {inst.address}
                </li>
                <li className="flex gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                  {inst.phone}
                </li>
                <li className="flex gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                  <a href={`mailto:${inst.email}`} className="underline underline-offset-4">
                    {inst.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sea-300">Destinatario</p>
              <p className="mt-2 font-bold">{office.name}</p>
              <p className="text-sm text-white/70">{office.municipality}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                <li className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                  {office.address}
                </li>
                <li className="flex gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                  {office.phone}
                </li>
                <li className="flex gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sea-300" aria-hidden="true" />
                  {office.email}
                </li>
              </ul>
            </div>
          </div>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-on-dark">
              <Laptop className="h-4 w-4" aria-hidden="true" />
              Recorrer el campus
            </Link>
            <Link href="/oficina-de-empleo/rutas" className="btn btn-outline-on-dark">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Ver rutas por programa
            </Link>
          </div>
          <p className="print-only mt-6 text-sm">
            Sitio: {publicUrl} · Rutas: {publicUrl}/oficina-de-empleo/rutas
          </p>
        </section>

        {/* Autoría */}
        <footer className="print-avoid-break mt-10 flex flex-col gap-5 rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-8">
          <InstitutionalCrest size="sm" />
          <div className="flex-1">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-sea-700">
              <PenLine className="h-4 w-4" aria-hidden="true" />
              Autoría
            </p>
            <p className="mt-1 text-xl font-extrabold text-brand-950">{author.name}</p>
            <p className="text-sm font-semibold leading-relaxed text-brand-800">{author.titles.join(" · ")}</p>
            <p className="mt-1 text-sm leading-relaxed text-body">
              {author.role}. {inst.name}, {inst.locality}, {inst.province}.
            </p>
          </div>
          <Link href="/creditos" className="no-print link-arrow shrink-0 text-sm">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Créditos
          </Link>
        </footer>
      </article>
    </>
  );
}
