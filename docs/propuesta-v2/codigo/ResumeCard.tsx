"use client";

import { useId } from "react";
import Link from "next/link";

export type ResumeState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "ready"; courseTitle: string; lessonTitle: string;
      href: `/${string}`; completed: number; total: number; minutes: number };

export function ResumeCard({ state, onRetry }: {
  state: ResumeState;
  onRetry?: () => void;
}) {
  const titleId = useId();
  const completed = state.status === "ready"
    ? Math.max(0, Math.min(state.total, state.completed)) : 0;

  return (
    <section aria-labelledby={titleId} aria-busy={state.status === "loading"}
      className="min-h-60 rounded-2xl border border-line bg-white p-6 shadow-card">
      <p className="text-sm font-bold text-sea-800">Tu próximo paso</p>
      <h2 id={titleId} className="mt-2 text-2xl font-extrabold text-brand-950">
        {state.status === "ready" ? "Continuá aprendiendo" : "Un paso a tu ritmo"}
      </h2>
      {state.status === "loading" && <p role="status" className="mt-4 text-body">
        Leyendo el progreso de este navegador…
      </p>}
      {state.status === "error" && <div className="mt-4">
        <p role="alert" className="text-body">{state.message}</p>
        {onRetry && <button type="button" onClick={onRetry}
          className="btn btn-secondary mt-3">Volver a intentar</button>}
      </div>}
      {state.status === "empty" && <div className="mt-4">
        <p className="text-body">Elegí un curso para empezar. No necesitás una cuenta.</p>
        <Link href="/cursos" prefetch={false} className="btn btn-primary mt-4">Explorar cursos</Link>
      </div>}
      {state.status === "ready" && <div className="mt-4 space-y-3">
        <p className="font-bold text-brand-950">{state.courseTitle}</p>
        <p className="text-body">{state.lessonTitle} · {state.minutes} min orientativos</p>
        <progress max={Math.max(1, state.total)} value={completed}
          aria-label={`${completed} de ${state.total} lecciones completadas`}
          className="h-3 w-full accent-sea-700" />
        <p className="text-sm text-muted">{completed} de {state.total} lecciones completadas</p>
        <Link href={state.href} prefetch={false} className="btn btn-primary">Continuar la lección</Link>
      </div>}
      <p className="mt-4 text-sm text-muted">El progreso corresponde a este navegador.</p>
    </section>
  );
}
