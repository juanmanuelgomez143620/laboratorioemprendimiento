import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  Compass,
  ExternalLink,
  FileText,
  HelpCircle,
  Mail,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre los cursos, las evaluaciones, la constancia de demostración, la privacidad y el uso del campus Campus Emprendedor.",
};

const faqGroups = [
  {
    id: "cursos",
    title: "Cursos y recorrido",
    description: "Cómo empezar, en qué orden avanzar y qué materiales se pueden imprimir.",
    items: [
      {
        id: "necesito-cuenta",
        question: "¿Necesito registrarme o crear una cuenta?",
        answer: (
          <p>
            No. El campus es abierto y no tiene inicio de sesión. Podés entrar a cualquier curso,
            leer las lecciones y hacer las actividades sin dejar tus datos personales.
          </p>
        ),
      },
      {
        id: "orden-de-cursos",
        question: "¿Puedo hacer los cursos en cualquier orden?",
        answer: (
          <p>
            Sí. La ruta sugerida empieza por <em>Mi primer emprendimiento</em> y sigue con costos,
            marca y herramientas digitales, pero cada curso se sostiene solo. Si ya tenés un negocio
            en marcha, podés empezar por el tema que más te urge resolver.
          </p>
        ),
      },
      {
        id: "por-donde-empezar",
        question: "¿Cómo sé por dónde empezar?",
        answer: (
          <>
            <p>
              El{" "}
              <Link href="/herramientas/diagnostico" className="link-inline">
                diagnóstico inicial
              </Link>{" "}
              hace diez preguntas y te sugiere cursos y recursos según tus respuestas. Es orientativo:
              no guarda las respuestas ni emite una calificación.
            </p>
          </>
        ),
      },
      {
        id: "imprimir",
        question: "¿Puedo imprimir o guardar las lecciones?",
        answer: (
          <p>
            Sí. Cada lección tiene un botón <strong>Imprimir lección</strong>. Desde el diálogo del
            navegador podés imprimirla o guardarla como PDF. La constancia también se imprime desde
            el navegador. Los recursos de la biblioteca indican si tienen un archivo descargable real
            o si son solo una página de contenido.
          </p>
        ),
      },
      {
        id: "titulo-oficial",
        question: "¿Los cursos entregan un título o puntaje docente?",
        answer: (
          <p>
            No. Al completar las lecciones y aprobar la autoevaluación se habilita una{" "}
            <strong>constancia de actividad educativa de demostración</strong>. No es un título, no
            otorga puntaje docente y no constituye certificación oficial ni acreditación académica.
          </p>
        ),
      },
    ],
  },
  {
    id: "evaluaciones",
    title: "Evaluaciones y constancia",
    description: "Qué se necesita para aprobar y qué significa el documento que se genera.",
    items: [
      {
        id: "aprobar",
        question: "¿Cómo se aprueba la evaluación final?",
        answer: (
          <p>
            Cada curso tiene una autoevaluación de diez preguntas. Necesitás al menos{" "}
            <strong>70 % de respuestas correctas</strong>. La corrección es automática y cada
            respuesta incluye una explicación para que puedas repasar.
          </p>
        ),
      },
      {
        id: "repetir",
        question: "¿Puedo repetir la evaluación si no me va bien?",
        answer: (
          <p>
            Sí, las veces que necesites. En <strong>Mi progreso</strong> queda el historial de
            intentos con la fecha, el puntaje y si aprobaste. La constancia se habilita cuando
            completaste todas las lecciones y tenés al menos un intento aprobado.
          </p>
        ),
      },
      {
        id: "constancia-oficial",
        question: "¿La constancia es un certificado oficial?",
        answer: (
          <p>
            No. Es una constancia de actividad educativa de demostración. No constituye
            certificación oficial, acreditación académica ni aval de la Escuela Normal Superior N.º 9,
            del Fondo de Crédito Misiones u otro organismo. El documento lo dice de forma visible.
          </p>
        ),
      },
      {
        id: "datos-constancia",
        question: "¿Qué datos pide la constancia?",
        answer: (
          <p>
            Solo el nombre que querés que aparezca. Ese nombre se usa en el momento para generar el
            documento y no se guarda en el navegador ni se envía a un servidor. La constancia incluye
            el curso, la fecha y los avisos de demostración.
          </p>
        ),
      },
      {
        id: "verificar-constancia",
        question: "¿La constancia se puede verificar en línea?",
        answer: (
          <p>
            No. Al ser un documento de demostración, no tiene un código de verificación ni una
            validación oficial. Si necesitás una certificación con reconocimiento formal, consultá
            con la institución correspondiente.
          </p>
        ),
      },
    ],
  },
  {
    id: "privacidad",
    title: "Privacidad y datos",
    description: "Dónde vive tu progreso, qué pasa si cambiás de dispositivo y cómo borrarlo.",
    items: [
      {
        id: "donde-se-guarda",
        question: "¿Dónde se guarda mi progreso?",
        answer: (
          <p>
            En el almacenamiento local de tu navegador. Las lecciones completadas y los intentos de
            evaluación no se envían a un servidor ni se comparten entre dispositivos. Podés leer el{" "}
            <Link href="/privacidad" className="link-inline">
              aviso de privacidad y accesibilidad
            </Link>
            .
          </p>
        ),
      },
      {
        id: "cambiar-dispositivo",
        question: "¿Qué pasa si borro los datos del navegador o cambio de dispositivo?",
        answer: (
          <>
            <p>
              El progreso se pierde si borrás los datos del navegador, usás el modo privado o cambiás
              de equipo. Para evitarlo, en{" "}
              <Link href="/mi-progreso" className="link-inline">
                Mi progreso
              </Link>{" "}
              podés descargar una copia de seguridad en JSON e importarla en otro navegador.
            </p>
          </>
        ),
      },
      {
        id: "datos-personales",
        question: "¿El campus recopila datos personales o usa cuentas?",
        answer: (
          <p>
            No hay cuentas, formularios de registro ni perfiles de usuario. El campus no solicita
            datos sensibles. La copia de seguridad del progreso contiene solo identificadores de
            lecciones, fechas y resultados de evaluación; no incluye el nombre de la constancia.
          </p>
        ),
      },
      {
        id: "borrar-progreso",
        question: "¿Puedo borrar todo mi progreso?",
        answer: (
          <p>
            Sí. En <strong>Mi progreso</strong> podés borrar el avance de un curso o de todo el
            campus. La acción no se puede deshacer y no elimina los archivos que ya hayas descargado.
          </p>
        ),
      },
    ],
  },
  {
    id: "uso",
    title: "Uso del campus",
    description: "Conectividad, accesibilidad y herramientas externas.",
    items: [
      {
        id: "sin-internet",
        question: "¿Puedo usar el campus sin conexión a internet?",
        answer: (
          <p>
            El campus es una aplicación web instalable. Las páginas principales y las que ya visitaste
            pueden quedar guardadas por el navegador para consultarlas sin conexión. La primera visita
            y las páginas que no estén guardadas necesitan internet. Tu progreso local no se pierde
            por quedarte sin conexión.
          </p>
        ),
      },
      {
        id: "herramientas-externas",
        question: "¿CostoClaro y Yo Emprendedor son parte del campus?",
        answer: (
          <>
            <p>
              Son herramientas externas. El campus las enlaza porque pueden ser útiles, pero no las
              desarrolla, no las administra y no controla sus datos ni sus condiciones de uso. Cada
              enlace está rotulado como externo y se abre en otra pestaña.
            </p>
            <p className="mt-2">
              Podés ver el catálogo completo en{" "}
              <Link href="/herramientas" className="link-inline">
                Herramientas digitales
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        id: "accesibilidad",
        question: "¿El campus es accesible desde el celular y con teclado?",
        answer: (
          <p>
            Sí. El diseño se adapta a celular, tablet y computadora, y se puede recorrer con teclado.
            Incluye un enlace para saltar al contenido, etiquetas accesibles y contrastes revisados.
            Si encontrás una barrera, escribinos para corregirla.
          </p>
        ),
      },
      {
        id: "reportar-error",
        question: "¿Cómo reporto un error o sugiero un recurso?",
        answer: (
          <p>
            Escribí a{" "}
            <a href={`mailto:${site.institution.email}`} className="link-inline">
              {site.institution.email}
            </a>{" "}
            con el nombre de la página y una descripción del problema. Si es una sugerencia de
            contenido, contanos qué tema te gustaría ver y para qué lo usarías.
          </p>
        ),
      },
    ],
  },
  {
    id: "empleo",
    title: "Empleo y oficina de empleo",
    description: "Cómo se conecta el campus con la Oficina de Empleo de Wanda y los programas nacionales.",
    items: [
      {
        id: "que-es-oficina-empleo",
        question: "¿Qué es la Oficina de Empleo de Wanda?",
        answer: (
          <p>
            Es la Dirección de Oficina de Empleo y Proyectos de la Municipalidad de Wanda. Lleva
            adelante programas de empleo nacionales y proyectos comunitarios. Podés ver su página en{" "}
            <Link href="/oficina-de-empleo" className="link-inline">
              Oficina de Empleo
            </Link>
            .
          </p>
        ),
      },
      {
        id: "campus-y-oficina",
        question: "¿El campus garantiza un empleo o una vacante?",
        answer: (
          <p>
            No. El campus ofrece formación y herramientas; la oficina gestiona programas y orientación.
            La vinculación entre ambas es una propuesta en desarrollo y no implica convenios ni
            financiamiento confirmados.
          </p>
        ),
      },
      {
        id: "programas-nacionales",
        question: "¿Dónde consulto los programas nacionales (Fomentar Empleo, PIL, etc.)?",
        answer: (
          <p>
            En la página{" "}
            <Link href="/oficina-de-empleo" className="link-inline">
              Oficina de Empleo
            </Link>{" "}
            encontrarás los enlaces oficiales a cada programa. El campus no administra esos programas ni
            sus datos.
          </p>
        ),
      },
    ],
  },
] as const;

export default function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ayuda del campus"
        title="Preguntas frecuentes"
        description="Respuestas directas sobre el recorrido, las evaluaciones, la constancia de demostración, la privacidad y el uso del campus."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Preguntas frecuentes" }]}
        actions={
          <>
            <Link href="/cursos" className="btn btn-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Explorar cursos
            </Link>
            <Link href="/mi-progreso" className="btn btn-secondary">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Ver mi progreso
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-sea">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {faqGroups.reduce((total, group) => total + group.items.length, 0)} respuestas
            </span>
            <span className="badge badge-neutral">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin registro
            </span>
            <span className="badge badge-neutral">
              <WifiOff className="h-3.5 w-3.5" aria-hidden="true" />
              Progreso local
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0 space-y-8">
            {faqGroups.map((group) => (
              <section key={group.id} aria-labelledby={`faq-${group.id}-title`}>
                <div className="max-w-2xl">
                  <h2
                    id={`faq-${group.id}-title`}
                    className="text-2xl font-extrabold text-brand-950"
                  >
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{group.description}</p>
                </div>

                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <details
                      key={item.id}
                      id={item.id}
                      className="group scroll-mt-28 rounded-2xl border border-line bg-white px-5 py-4 shadow-card"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-extrabold text-brand-950">
                        <span>{item.question}</span>
                        <ChevronDown
                          className="mt-0.5 h-5 w-5 shrink-0 text-sea-700 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-body">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5">
              <h2 className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                <Mail className="h-4 w-4 text-sea-700" aria-hidden="true" />
                ¿No encontrás tu respuesta?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Escribí al correo institucional y contanos qué necesitás. No compartas datos
                sensibles en el mensaje.
              </p>
              <a
                href={`mailto:${site.institution.email}`}
                className="btn btn-secondary btn-sm mt-3 w-full break-all"
              >
                {site.institution.email}
              </a>
            </section>

            <section className="card-surface p-5" aria-labelledby="faq-links-title">
              <h2
                id="faq-links-title"
                className="text-sm font-extrabold uppercase tracking-wide text-brand-900"
              >
                Accesos rápidos
              </h2>
              <div className="mt-3 space-y-2.5">
                <Link href="/glosario" className="link-arrow text-sm">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Glosario emprendedor
                </Link>
                <Link href="/biblioteca" className="link-arrow text-sm">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Biblioteca de recursos
                </Link>
                <Link href="/herramientas/diagnostico" className="link-arrow text-sm">
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  Diagnóstico inicial
                </Link>
                <Link href="/privacidad" className="link-arrow text-sm">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Privacidad y accesibilidad
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="flex items-center gap-2 text-sm font-extrabold text-amber-950">
                <Award className="h-4 w-4" aria-hidden="true" />
                Sobre la constancia
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-amber-950">
                {site.certificateNotice}
              </p>
              <Link href="/cursos" className="link-arrow mt-3 text-sm">
                Ver cursos disponibles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>

            <section className="card-surface p-5">
              <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <ExternalLink className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Herramientas externas
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                CostoClaro y Yo Emprendedor pertenecen a sus respectivos titulares. El campus no
                gestiona sus datos ni sus condiciones de uso.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
