"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  CircleDashed,
  Printer,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/content/site";
import type { CourseFlowData } from "@/lib/presentation";
import { getCourseDestination } from "@/components/courses/CourseActions";
import { getCourseStatusFromReference } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatDuration, formatLongDate, sanitizeDisplayName } from "@/lib/utils";

export function CertificatePanel({ course }: { course: CourseFlowData }) {
  const { progress, hydrated, storageAvailable } = useProgress();
  const [displayName, setDisplayName] = useState("");
  // La fecha se fija en el navegador al abrir la constancia; no se envía ni se guarda.
  const [issuedAt] = useState(() => new Date());
  const nameInputId = useId();

  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonRefs.map((lesson) => lesson.id),
    passingScore: course.passingScore,
  });

  if (!hydrated) {
    return (
      <div className="card-surface flex min-h-52 items-center justify-center p-8" role="status">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-brand-100 border-t-sea-600" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold text-muted">Verificando tu progreso en este navegador…</p>
        </div>
      </div>
    );
  }

  if (!status.certificateEligible) {
    const destination = getCourseDestination(
      course,
      status.completedLessonIds,
      status.quizPassed,
      status.certificateEligible,
    );

    return (
      <section className="card-surface overflow-hidden" aria-labelledby="certificate-locked-title">
        <div className="border-b border-amber-200 bg-amber-50 px-5 py-4 sm:px-6">
          <p className="flex items-center gap-2 text-sm font-extrabold text-amber-950">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            La constancia todavía no está disponible
          </p>
        </div>
        <div className="p-5 sm:p-7">
          <h2 id="certificate-locked-title" className="text-2xl font-extrabold text-brand-950">
            Completá el recorrido del curso
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
            La constancia de demostración se habilita únicamente cuando todas las lecciones están
            marcadas como completadas y la autoevaluación final fue aprobada con {course.passingScore} % o más.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-slate-50 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-brand-950">
                {status.completedLessons === status.totalLessons ? (
                  <CheckCircle2 className="h-4 w-4 text-sea-700" aria-hidden="true" />
                ) : (
                  <CircleDashed className="h-4 w-4 text-slate-500" aria-hidden="true" />
                )}
                Lecciones completadas
              </p>
              <p className="mt-1 text-2xl font-extrabold text-brand-950">
                {status.completedLessons} / {status.totalLessons}
              </p>
            </div>
            <div className="rounded-xl border border-line bg-slate-50 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-brand-950">
                {status.quizPassed ? (
                  <CheckCircle2 className="h-4 w-4 text-sea-700" aria-hidden="true" />
                ) : (
                  <CircleDashed className="h-4 w-4 text-slate-500" aria-hidden="true" />
                )}
                Evaluación final
              </p>
              <p className="mt-1 text-2xl font-extrabold text-brand-950">
                {status.quizPassed
                  ? "Aprobada"
                  : status.bestPercentage !== null
                    ? `Mejor: ${status.bestPercentage} %`
                    : "Pendiente"}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <ProgressBar value={status.percentage} label={`Progreso del curso: ${status.percentage} por ciento`} tone="sea" size="md" />
            <p className="mt-2 text-xs font-semibold text-muted">{status.percentage} % del recorrido completado</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={destination.href} className="btn btn-primary">
              {destination.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href={`/cursos/${course.slug}`} className="btn btn-secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al curso
            </Link>
          </div>
          {storageAvailable === false && (
            <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-950">
              Este navegador no permite guardar el progreso. Activá el almacenamiento local o usá otro
              navegador para completar la constancia.
            </p>
          )}
        </div>
      </section>
    );
  }

  const cleanName = sanitizeDisplayName(displayName);
  const display = cleanName || "Participante del campus";

  return (
    <div>
      <div className="no-print mb-6 rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 className="text-lg font-extrabold text-brand-950">Personalizá e imprimí tu constancia</h2>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
          El nombre es opcional y se usa solo para mostrar el documento. No se guarda, no se envía y
          no queda registrado en el campus.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="w-full max-w-md">
            <label htmlFor={nameInputId} className="text-sm font-bold text-brand-950">
              Nombre y apellido para la constancia <span className="font-medium text-muted">(opcional)</span>
            </label>
            <input
              id={nameInputId}
              type="text"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              maxLength={80}
              autoComplete="off"
              className="input-base mt-1.5"
              placeholder="Se mostrará tal como lo escribas"
              aria-describedby={`${nameInputId}-help`}
            />
            <p id={`${nameInputId}-help`} className="mt-1 text-xs text-muted">
              Máximo 80 caracteres. Podés imprimirla sin completar este campo.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn btn-primary shrink-0"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Imprimir o guardar PDF
          </button>
        </div>
        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
          En el diálogo de impresión elegí «Guardar como PDF» si querés conservar una copia digital.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-100 p-3 print:bg-white print:p-0">
        <article
          className="print-sheet relative mx-auto overflow-hidden border border-brand-200 bg-white p-6 shadow-card sm:p-10"
          aria-labelledby="certificate-title"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-2.5 bg-gradient-to-r from-brand-900 via-sea-600 to-brand-800 print:hidden"
          />
          <div className="flex flex-col gap-5 border-b border-brand-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-brand-950 text-white">
                <span className="relative z-10 text-base font-extrabold">N9</span>
                <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-sea-400/80" aria-hidden="true" />
                <span className="absolute inset-x-2 bottom-2 h-[3px] rounded-full bg-sea-300" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-sea-700">
                  Campus Emprendedor
                </p>
                <p className="text-lg font-extrabold leading-tight tracking-tight text-brand-950">
                  Campus Emprendedor
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-muted">
                  {site.institution.name} · {site.institution.locality}, {site.institution.province}
                </p>
              </div>
            </div>
            <span className="print-badge inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-950">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Documento de demostración
            </span>
          </div>

          <div className="py-9 text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-sea-700">
              Constancia de actividad educativa
            </p>
            <h1 id="certificate-title" className="mt-2 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              Constancia de finalización
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-body">
              Se deja constancia de que
            </p>
            <p className="mx-auto mt-2 max-w-2xl border-b border-dashed border-brand-200 pb-3 text-2xl font-extrabold text-brand-950 sm:text-3xl">
              {display}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-body">
              completó la actividad educativa <strong className="font-extrabold text-brand-950">«{course.title}»</strong>{" "}
              del Campus Emprendedor, con una calificación de{" "}
              <strong className="font-extrabold text-brand-950">{status.bestPercentage} %</strong> en la
              autoevaluación final.
            </p>

            <dl className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-slate-50 p-3.5 print:bg-white">
                <dt className="text-[9px] font-extrabold uppercase tracking-wide text-muted">Duración orientativa</dt>
                <dd className="mt-0.5 text-sm font-extrabold text-brand-950">{formatDuration(course.durationMinutes)}</dd>
              </div>
              <div className="rounded-xl border border-line bg-slate-50 p-3.5 print:bg-white">
                <dt className="text-[9px] font-extrabold uppercase tracking-wide text-muted">Resultado</dt>
                <dd className="mt-0.5 text-sm font-extrabold text-brand-950">{status.bestPercentage} %</dd>
              </div>
              <div className="rounded-xl border border-line bg-slate-50 p-3.5 print:bg-white">
                <dt className="text-[9px] font-extrabold uppercase tracking-wide text-muted">Fecha de emisión</dt>
                <dd className="mt-0.5 text-sm font-extrabold text-brand-950">
                  {issuedAt ? formatLongDate(issuedAt) : "—"}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 print:bg-white">
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-amber-950">
              Aclaración importante
            </p>
            <p className="mt-1 text-xs leading-relaxed text-amber-950">
              {site.certificateNotice} Esta constancia documenta una actividad educativa de
              demostración realizada en el campus. No constituye certificación oficial, acreditación
              académica ni aval de la Municipalidad de Wanda, el Fondo de Crédito Misiones u otro
              organismo.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-line pt-4 text-[10px] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              Documento generado localmente en el navegador de la persona participante. No cuenta con
              validación en línea.
            </p>
            <p className="font-bold">Campus Emprendedor · Aprender, crear y transformar.</p>
          </div>
        </article>
      </div>

      <p className="no-print mt-4 text-center text-xs text-muted">
        Al imprimir, elegí tamaño A4. Verificá que el navegador no esté escalando el contenido.
      </p>
    </div>
  );
}
