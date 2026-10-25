"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { cn } from "@/lib/utils";

interface LessonCompletionControlsProps {
  courseId: string;
  courseSlug: string;
  lessonId: string;
  lessonTitle: string;
}

export function LessonCompletionControls({
  courseId,
  courseSlug,
  lessonId,
  lessonTitle,
}: LessonCompletionControlsProps) {
  const { progress, hydrated, storageAvailable, setLessonCompleted } = useProgress();
  const [message, setMessage] = useState("");
  const isCompleted = progress.courses[courseId]?.completedLessons.includes(lessonId) ?? false;

  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(""), 5000);
    return () => window.clearTimeout(timer);
  }, [message]);

  function markComplete() {
    setLessonCompleted(courseId, lessonId, true);
    setMessage(`«${lessonTitle}» quedó marcada como completada en este navegador.`);
  }

  function unmarkComplete() {
    setLessonCompleted(courseId, lessonId, false);
    setMessage("La lección se marcó como pendiente. El resto de tu progreso se conserva.");
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-extrabold text-brand-950">¿Terminaste esta lección?</h2>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
            Marcarla actualiza tu barra de avance y habilita el recorrido hasta la constancia.
            Podés desmarcarla si querés volver más adelante.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {isCompleted ? (
            <>
              <span className="inline-flex items-center gap-2 rounded-xl border border-sea-200 bg-sea-50 px-3 py-2 text-sm font-extrabold text-sea-800">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Lección completada
              </span>
              <button type="button" onClick={unmarkComplete} className="btn btn-ghost btn-sm">
                Desmarcar
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={markComplete}
              disabled={!hydrated}
              className={cn("btn btn-primary", !hydrated && "cursor-wait opacity-70")}
            >
              <Circle className="h-4 w-4" aria-hidden="true" />
              Marcar como completada
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {message}
      </p>
      {message && (
        <p className="mt-4 rounded-lg bg-sea-50 px-3 py-2 text-xs font-semibold text-sea-900">
          {message}
        </p>
      )}
      {hydrated && storageAvailable === false && (
        <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900">
          Tu navegador no permite guardar datos localmente. El avance funcionará solo mientras esta
          página permanezca abierta.
        </p>
      )}
      {!isCompleted && (
        <p className="mt-3 text-xs text-muted">
          También podés continuar a la siguiente lección sin marcarla. La evaluación está disponible
          desde el menú del curso.
        </p>
      )}
      <Link
        href={`/cursos/${courseSlug}/evaluacion`}
        className="mt-3 inline-flex text-xs font-bold text-brand-800 underline decoration-brand-300 underline-offset-2 hover:text-sea-800"
      >
        Ir a la evaluación final del curso
      </Link>
    </div>
  );
}
