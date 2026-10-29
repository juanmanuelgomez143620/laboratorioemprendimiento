import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cookie,
  ExternalLink,
  EyeOff,
  HardDrive,
  Info,
  Keyboard,
  LockKeyhole,
  MonitorSmartphone,
  Printer,
  ShieldCheck,
  Trash2,
  UserX,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROGRESS_STORAGE_KEY } from "@/lib/progress";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacidad y accesibilidad",
  description:
    "Cómo trata Campus Emprendedor los datos locales, qué guarda el navegador y qué criterios de accesibilidad se aplican en el campus.",
};

const storedFields = [
  "Los identificadores de los cursos y las lecciones que marcaste como completadas.",
  "Los resultados de tus autoevaluaciones: respuestas correctas, total de preguntas, porcentaje, aprobación y fecha del intento.",
  "La fecha de la última actualización del progreso.",
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparencia"
        title="Privacidad y accesibilidad"
        description="Este campus se diseñó para funcionar sin cuentas y sin enviar tus datos a un servidor. Acá explicamos qué guarda el navegador, qué no guarda y cómo podés borrar tu progreso."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Privacidad" }]}
        actions={
          <Link href="/mi-progreso" className="btn btn-primary">
            <HardDrive className="h-4 w-4" aria-hidden="true" />
            Gestionar mi progreso
          </Link>
        }
        meta={
          <>
            <span className="badge badge-sea">
              <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
              Sin cuentas
            </span>
            <span className="badge badge-neutral">
              <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
              Sin seguimiento
            </span>
            <span className="badge badge-neutral">
              <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
              Borrado disponible
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
          <div className="min-w-0 space-y-6">
            <section className="card-surface p-5 sm:p-7" aria-labelledby="privacy-local-title">
              <p className="eyebrow">Datos en el navegador</p>
              <h2 id="privacy-local-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                Qué guarda este sitio
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">
                Para que puedas retomar tus cursos, el campus guarda tu avance en el almacenamiento
                local del navegador. No se crea una cuenta ni se envía esa información a un servidor
                del campus.
              </p>

              <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/70 p-5">
                <p className="text-xs font-extrabold uppercase tracking-wide text-brand-900">
                  Clave utilizada en este navegador
                </p>
                <p className="mt-1 break-all rounded-lg bg-white px-3 py-2 font-mono text-xs text-brand-950 ring-1 ring-brand-100">
                  {PROGRESS_STORAGE_KEY}
                </p>
                <ul className="mt-4 space-y-2">
                  {storedFields.map((field) => (
                    <li key={field} className="flex gap-2.5 text-sm leading-relaxed text-body">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                      {field}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                    <UserX className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    No se guarda tu nombre
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    El nombre que puedas escribir en la constancia se usa solo para mostrarla en
                    pantalla. No se guarda, no se envía y desaparece al cerrar o recargar la página.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                    <EyeOff className="h-4 w-4 text-sea-700" aria-hidden="true" />
                    No se guarda el diagnóstico
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Las respuestas del diagnóstico inicial se procesan en la página y no se almacenan
                    en el navegador ni se envían a ningún servicio.
                  </p>
                </div>
              </div>
            </section>

            <section className="card-surface p-5 sm:p-7" aria-labelledby="privacy-no-title">
              <p className="eyebrow">Qué no hacemos</p>
              <h2 id="privacy-no-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                Sin cuentas, publicidad ni seguimiento
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "No creamos cuentas de usuario ni pedimos correo, teléfono ni documento.",
                  "No incorporamos herramientas de analítica, publicidad ni píxeles de seguimiento.",
                  "No usamos cookies para identificarte ni para personalizar avisos.",
                  "No vendemos, alquilamos ni compartimos datos con terceros.",
                  "No solicitamos datos sensibles ni información bancaria.",
                  "No subimos tus respuestas de evaluación a un servidor del campus.",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 rounded-xl bg-slate-50 p-3.5 text-sm leading-relaxed text-body">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs leading-relaxed text-amber-950">
                <Cookie className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Si en el futuro se incorpora una función que requiera otro tratamiento de datos, se
                informará antes de usarla y se pedirá la autorización correspondiente.
              </p>
            </section>

            <section className="card-surface p-5 sm:p-7" aria-labelledby="privacy-delete-title">
              <p className="eyebrow">Control</p>
              <h2 id="privacy-delete-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                Cómo borrar tu progreso
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-body">
                <p>
                  Podés borrar el avance de un curso o de todo el campus desde{" "}
                  <Link href="/mi-progreso" className="link-inline">
                    Mi progreso
                  </Link>
                  . La acción elimina los datos del almacenamiento local y no se puede deshacer.
                </p>
                <p>
                  También podés borrar los datos del sitio desde la configuración de tu navegador. Si
                  usás el modo privado o tenés el almacenamiento bloqueado, el avance puede no
                  conservarse entre visitas.
                </p>
                <p>
                  La descarga de archivos CSV y la impresión de recursos no dependen del progreso:
                  los archivos que ya hayas guardado en tu dispositivo no se eliminan al borrar los
                  datos del campus.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/mi-progreso" className="btn btn-primary btn-sm">
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  Ir a borrar mi progreso
                </Link>
                <Link href="/cursos" className="btn btn-secondary btn-sm">
                  Volver a los cursos
                </Link>
              </div>
            </section>

            <section className="card-surface p-5 sm:p-7" aria-labelledby="privacy-external-title">
              <p className="eyebrow">Enlaces externos</p>
              <h2 id="privacy-external-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                Las herramientas externas tienen sus propias reglas
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                El campus enlaza a CostoClaro y a Yo Emprendedor. Al abrirlos, salís de este sitio y
                se aplican las condiciones y políticas de privacidad de cada plataforma. NORMAL 9
                IMPULSA no administra esas aplicaciones ni recibe los datos que cargues en ellas.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href={site.externalLinks.costoClaro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-inline inline-flex items-center gap-1.5"
                >
                  CostoClaro
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
                <a
                  href={site.externalLinks.yoEmprendedor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-inline inline-flex items-center gap-1.5"
                >
                  Yo Emprendedor · Provincia de Misiones
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
              </div>
            </section>

            <section className="card-surface p-5 sm:p-7" aria-labelledby="privacy-accessibility-title">
              <p className="eyebrow">Accesibilidad</p>
              <h2 id="privacy-accessibility-title" className="mt-2 text-2xl font-extrabold text-brand-950">
                Criterios aplicados en el campus
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                La versión inicial se construyó con criterios de accesibilidad web. No es una
                certificación de conformidad total: seguimos revisando y mejorando.
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Keyboard, text: "Navegación completa por teclado y foco visible." },
                  { icon: MonitorSmartphone, text: "Diseño adaptable a celular, tableta y proyector." },
                  { icon: Accessibility, text: "Texto alternativo, encabezados jerárquicos y etiquetas de formulario." },
                  { icon: EyeOff, text: "Respeto por la preferencia de movimiento reducido." },
                  { icon: Printer, text: "Estilos de impresión en A4 para recursos y constancias." },
                  { icon: ShieldCheck, text: "Contraste cuidado y tamaños de texto legibles." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex gap-2.5 rounded-xl bg-slate-50 p-3.5 text-sm leading-relaxed text-body">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Si encontrás una barrera de accesibilidad, comunicálo a la Escuela Normal Superior
                N.º 9 para que podamos revisarlo. No publicamos un correo electrónico ni un teléfono
                que no hayan sido autorizados institucionalmente.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6" aria-labelledby="privacy-contact-title">
              <h2 id="privacy-contact-title" className="text-base font-extrabold text-brand-950">
                Alcance de este aviso
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Este aviso describe el funcionamiento de la versión actual del campus. Las
                constancias son documentos de actividad educativa de demostración. Las consultas
                institucionales sobre el proyecto pueden dirigirse a la Escuela Normal Superior N.º 9
                en Wanda, Misiones.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/proyecto" className="btn btn-secondary btn-sm">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Sobre el proyecto
                </Link>
                <Link href="/cursos" className="btn btn-ghost btn-sm">
                  Explorar cursos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5" aria-labelledby="privacy-summary-title">
              <h2 id="privacy-summary-title" className="flex items-center gap-2 text-sm font-extrabold text-brand-950">
                <ShieldCheck className="h-4 w-4 text-sea-700" aria-hidden="true" />
                En resumen
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  El progreso se guarda solo en tu navegador.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  No hay cuentas, analítica ni publicidad.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  El nombre de la constancia no se persiste.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                  Podés borrar todo desde Mi progreso.
                </li>
              </ul>
            </section>

            <section className="card-surface p-5" aria-labelledby="privacy-pwa-title">
              <h2 id="privacy-pwa-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <MonitorSmartphone className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Funcionamiento sin conexión
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                En producción, el sitio puede registrar un service worker para guardar en caché
                páginas públicas y recursos estáticos. Esa caché no contiene datos personales y podés
                eliminarla borrando los datos del sitio en tu navegador.
              </p>
            </section>

            <aside className="rounded-2xl border border-line bg-slate-50 p-5">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                {site.storageNotice}
              </p>
            </aside>

            <Link href="/mi-progreso" className="btn btn-primary w-full">
              <HardDrive className="h-4 w-4" aria-hidden="true" />
              Ver y borrar mi progreso
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
