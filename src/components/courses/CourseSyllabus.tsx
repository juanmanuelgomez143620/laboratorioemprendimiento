"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Circle, Clock, Target } from "lucide-react";
import type { CourseOutlineData } from "@/lib/presentation";
import { getCourseStatusFromReference } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn, formatDuration } from "@/lib/utils";

export function CourseSyllabus({ course }: { course: CourseOutlineData }) {
  const { progress } = useProgress();
  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonRefs.map((lesson) => lesson.id),
    passingScore: course.passingScore,
  });

  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Contenido</p>
          <h2 className="mt-1 text-2xl font-extrabold text-brand-950">Módulos y lecciones</h2>
        </div>
        <span className="text-sm font-extrabold text-brand-950">{status.percentage} %</span>
      </div>
      <ProgressBar
        value={status.percentage}
        label={`Progreso del curso: ${status.percentage} por ciento`}
        tone="sea"
        className="mb-6"
      />

      <div className="space-y-5">
        {course.modules.map((module, moduleIndex) => (
          <section key={module.id} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <header className="border-b border-line bg-slate-50/80 px-5 py-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-sea-700">
                Módulo {moduleIndex + 1}
              </p>
              <h3 className="mt-1 text-lg font-extrabold text-brand-950">{module.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{module.description}</p>
            </header>
            <ol className="divide-y divide-line">
              {module.lessons.map((lesson, lessonIndex) => {
                const completed = status.completedLessonIds.includes(lesson.id);
                return (
                  <li key={lesson.id}>
                    <Link
                      href={`/cursos/${course.slug}/lecciones/${lesson.slug}`}
                      className="group flex min-h-[4.2rem] items-center gap-3 px-4 py-3.5 transition hover:bg-brand-50/60 sm:px-5"
                    >
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-extrabold",
                          completed
                            ? "border-sea-200 bg-sea-100 text-sea-800"
                            : "border-slate-200 bg-white text-muted",
                        )}
                        aria-hidden="true"
                      >
                        {completed ? <CheckCircle2 className="h-4 w-4" /> : String(lessonIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-brand-950 group-hover:text-brand-800">
                          {lesson.title}
                        </span>
                        <span className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {lesson.estimatedMinutes} min
                          </span>
                          {completed && <span className="font-bold text-sea-700">Completada</span>}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <section className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/70 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-white">
              <Target className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-brand-950">Evaluación final</h3>
              <p className="mt-0.5 text-sm text-body">
                {course.lessonRefs.length} lecciones y una autoevaluación de {course.passingScore} % mínimo.
                {status.bestPercentage !== null && ` Mejor resultado: ${status.bestPercentage} %.`}
              </p>
            </div>
          </div>
          <Link href={`/cursos/${course.slug}/evaluacion`} className="btn btn-secondary btn-sm shrink-0">
            {status.quizPassed ? "Repetir evaluación" : "Abrir evaluación"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <p className="mt-4 text-xs text-muted">
        Duración orientativa total: {formatDuration(course.durationMinutes)}. Las lecciones pueden
        leerse en cualquier orden.
      </p>
    </div>
  );
}

export function CourseOutline({
  course,
  currentLessonId,
}: {
  course: CourseOutlineData;
  currentLessonId: string;
}) {
  const { progress } = useProgress();
  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonRefs.map((lesson) => lesson.id),
    passingScore: course.passingScore,
  });

  return (
    <nav aria-label="Contenido del curso" className="p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-sea-700">
          {status.completedLessons} de {status.totalLessons} lecciones
        </p>
        <span className="text-sm font-extrabold text-brand-950">{status.percentage} %</span>
      </div>
      <ProgressBar
        value={status.percentage}
        label={`Progreso del curso: ${status.percentage} por ciento`}
        tone="sea"
      />

      <div className="mt-5 space-y-4">
        {course.modules.map((module, moduleIndex) => (
          <section key={module.id}>
            <h2 className="px-1 text-[10px] font-extrabold uppercase tracking-[0.13em] text-muted">
              Módulo {moduleIndex + 1} · {module.title.replace(/^Módulo \d+ · /, "")}
            </h2>
            <ol className="mt-2 space-y-0.5">
              {module.lessons.map((lesson) => {
                const completed = status.completedLessonIds.includes(lesson.id);
                const current = lesson.id === currentLessonId;
                return (
                  <li key={lesson.id}>
                    <Link
                      href={`/cursos/${course.slug}/lecciones/${lesson.slug}`}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "flex items-start gap-2.5 rounded-lg px-2 py-2 text-[13px] leading-snug transition",
                        current
                          ? "bg-brand-50 font-extrabold text-brand-950"
                          : "text-body hover:bg-slate-50 hover:text-brand-900",
                      )}
                    >
                      <span className="mt-0.5 shrink-0">
                        {completed ? (
                          <CheckCircle2 className="h-4 w-4 text-sea-600" aria-label="Completada" />
                        ) : (
                          <Circle className="h-4 w-4 text-slate-300" aria-hidden="true" />
                        )}
                      </span>
                      <span className="min-w-0">{lesson.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <Link
        href={`/cursos/${course.slug}/evaluacion`}
        className="mt-5 flex items-center justify-between gap-2 rounded-xl border border-line bg-white px-3 py-2.5 text-[13px] font-bold text-brand-900 transition hover:border-brand-200 hover:bg-brand-50"
      >
        <span className="flex items-center gap-2">
          <Target className="h-4 w-4 text-sea-700" aria-hidden="true" />
          Evaluación final
        </span>
        <span className="text-[11px] font-semibold text-muted">
          {status.quizPassed ? "Aprobada" : status.bestPercentage !== null ? `${status.bestPercentage} %` : "70 % mín."}
        </span>
      </Link>
    </nav>
  );
}
