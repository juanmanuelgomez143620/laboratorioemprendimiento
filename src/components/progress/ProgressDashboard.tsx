"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Clock,
  History,
  RotateCcw,
  Trash2,
} from "lucide-react";
import type { CourseAccent } from "@/types/course";
import type { CourseFlowData } from "@/lib/presentation";
import { getCourseStatusFromReference } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { getCourseDestination } from "@/components/courses/CourseActions";
import { ProgressBackup } from "@/components/progress/ProgressBackup";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { accentStyles } from "@/components/courses/courseVisuals";
import { cn, formatDuration } from "@/lib/utils";

function formatAttemptDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Fecha no disponible";
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export interface ProgressCourseData extends CourseFlowData {
  title: string;
  level: string;
  accent: CourseAccent;
}

export function ProgressDashboard({ courses }: { courses: ProgressCourseData[] }) {
  const { progress, hydrated, storageAvailable, resetAll, resetCourse } = useProgress();
  const [resettingCourseId, setResettingCourseId] = useState<string | null>(null);
  const [confirmResetAll, setConfirmResetAll] = useState(false);
  const [message, setMessage] = useState("");

  const statuses = courses.map((course) => ({
    course,
    status: getCourseStatusFromReference(progress, {
      id: course.id,
      lessonIds: course.lessonRefs.map((lesson) => lesson.id),
      passingScore: course.passingScore,
    }),
  }));
  const started = statuses.filter(
    ({ status }) => status.completedLessons > 0 || status.bestPercentage !== null,
  ).length;

  function handleResetCourse(courseId: string, title: string) {
    resetCourse(courseId);
    setResettingCourseId(null);
    setMessage(`Se borró el avance guardado de «${title}».`);
  }

  function handleResetAll() {
    resetAll();
    setConfirmResetAll(false);
    setMessage("Se borró todo el progreso guardado en este navegador.");
  }

  if (!hydrated) {
    return (
      <div className="card-surface p-8" role="status">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-brand-100 border-t-sea-600" aria-hidden="true" />
          <p className="mt-4 text-sm font-semibold text-muted">Leyendo el progreso guardado en este navegador…</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="sr-only" aria-live="polite">
        {message}
      </p>
      {message && (
        <div className="mb-5 flex items-start justify-between gap-4 rounded-xl border border-sea-200 bg-sea-50 px-4 py-3 text-sm font-semibold text-sea-950">
          <p>{message}</p>
          <button
            type="button"
            onClick={() => setMessage("")}
            className="shrink-0 text-xs font-bold underline"
          >
            Cerrar
          </button>
        </div>
      )}

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Tu recorrido</p>
          <h2 className="mt-1 text-2xl font-extrabold text-brand-950">
            {started > 0
              ? `Tenés actividad en ${started} ${started === 1 ? "curso" : "cursos"}`
              : "Todavía no registraste avance"}
          </h2>
        </div>
        <p className="text-xs font-semibold text-muted">
          {storageAvailable === false
            ? "Almacenamiento local no disponible"
            : "Guardado localmente en este navegador"}
        </p>
      </div>

      {storageAvailable === false && (
        <div className="mb-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
          <div>
            <p className="text-sm font-extrabold text-amber-950">Este navegador no permite guardar el avance</p>
            <p className="mt-1 text-sm leading-relaxed text-amber-950">
              Puede estar en modo privado o con el almacenamiento bloqueado. Podés recorrer los
              cursos, pero el progreso se perderá al cerrar o actualizar la página. Probá con otro
              navegador o habilitá el almacenamiento local para este sitio.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {statuses.map(({ course, status }, index) => {
          const destination = getCourseDestination(
            course,
            status.completedLessonIds,
            status.quizPassed,
            status.certificateEligible,
          );
          const startedCourse = status.completedLessons > 0 || status.bestPercentage !== null;
          const accent = accentStyles[course.accent];
          const attempts = progress.courses[course.id]?.attempts ?? [];

          return (
            <article key={course.id} className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={cn("badge", accent.badge)}>Curso {String(index + 1).padStart(2, "0")}</span>
                    <span className="badge badge-neutral">{course.level}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDuration(course.durationMinutes)}
                    </span>
                    {status.certificateEligible && (
                      <span className="badge badge-sea">
                        <Award className="h-3 w-3" aria-hidden="true" />
                        Constancia disponible
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-extrabold text-brand-950">
                    <Link href={`/cursos/${course.slug}`} className="rounded hover:text-brand-800 hover:underline hover:underline-offset-4">
                      {course.title}
                    </Link>
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span>
                      <strong className="font-extrabold text-brand-950">{status.completedLessons}</strong> de {status.totalLessons} lecciones
                    </span>
                    <span>
                      Evaluación:{" "}
                      <strong className="font-extrabold text-brand-950">
                        {status.quizPassed
                          ? "aprobada"
                          : status.bestPercentage !== null
                            ? `${status.bestPercentage} %`
                            : "pendiente"}
                      </strong>
                    </span>
                    <span className="font-bold text-brand-900">{status.percentage} % del recorrido</span>
                  </div>
                  <ProgressBar
                    className="mt-2.5 max-w-xl"
                    value={status.percentage}
                    label={`Progreso de ${course.title}: ${status.percentage} por ciento`}
                    tone="sea"
                    size="md"
                  />

                  {attempts.length > 0 && (
                    <details className="mt-3 max-w-xl rounded-xl border border-line bg-slate-50/80 px-3 py-2">
                      <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-extrabold text-brand-900">
                        <History className="h-3.5 w-3.5 text-sea-700" aria-hidden="true" />
                        Historial de evaluaciones ({attempts.length})
                      </summary>
                      <ul className="mt-2 space-y-1.5 border-t border-line pt-2">
                        {attempts
                          .slice()
                          .reverse()
                          .map((attempt, attemptIndex) => (
                            <li
                              key={`${attempt.completedAt}-${attemptIndex}`}
                              className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-muted"
                            >
                              <span>{formatAttemptDate(attempt.completedAt)}</span>
                              <span
                                className={cn(
                                  "font-bold",
                                  attempt.passed ? "text-sea-800" : "text-slate-600",
                                )}
                              >
                                {attempt.score}/{attempt.total} · {attempt.percentage} % ·{" "}
                                {attempt.passed ? "Aprobado" : "No aprobado"}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </details>
                  )}
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  <Link href={destination.href} className="btn btn-primary btn-sm">
                    {destination.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  {status.certificateEligible && (
                    <Link href={`/cursos/${course.slug}/constancia`} className="btn btn-secondary btn-sm">
                      <Award className="h-4 w-4" aria-hidden="true" />
                      Constancia
                    </Link>
                  )}
                  {startedCourse && resettingCourseId !== course.id && (
                    <button
                      type="button"
                      onClick={() => setResettingCourseId(course.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-slate-500 transition hover:bg-rose-50 hover:text-rose-700"
                    >
                      <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      Borrar avance
                    </button>
                  )}
                </div>
              </div>

              {resettingCourseId === course.id && (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-semibold text-rose-950">
                      ¿Borrar las lecciones y los intentos de «{course.title}»? No se puede deshacer.
                    </p>
                    <div className="flex shrink-0 gap-2">
                      <button
                        type="button"
                        onClick={() => handleResetCourse(course.id, course.title)}
                        className="btn btn-sm bg-rose-700 text-white hover:bg-rose-800"
                      >
                        Sí, borrar
                      </button>
                      <button
                        type="button"
                        onClick={() => setResettingCourseId(null)}
                        className="btn btn-secondary btn-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <ProgressBackup courses={courses} />

      <section className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6" aria-labelledby="reset-all-title">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 id="reset-all-title" className="text-base font-extrabold text-brand-950">
              Borrar todo mi progreso
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
              Elimina las lecciones completadas y los resultados de evaluación guardados en este
              navegador. No borra los archivos que ya hayas descargado ni los recursos impresos.
            </p>
          </div>
          {!confirmResetAll && (
            <button
              type="button"
              onClick={() => setConfirmResetAll(true)}
              className="btn btn-secondary btn-sm shrink-0 text-rose-700"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Borrar todo el progreso
            </button>
          )}
        </div>
        {confirmResetAll && (
          <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
            <p className="flex items-start gap-2 text-sm font-semibold text-rose-950">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Esta acción borrará el avance de todos los cursos y no se puede deshacer.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleResetAll}
                className="btn btn-sm bg-rose-700 text-white hover:bg-rose-800"
              >
                Sí, borrar todo
              </button>
              <button
                type="button"
                onClick={() => setConfirmResetAll(false)}
                className="btn btn-secondary btn-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
