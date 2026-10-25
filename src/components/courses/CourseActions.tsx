"use client";

import Link from "next/link";
import { ArrowRight, Award, PlayCircle, RotateCcw } from "lucide-react";
import type { CourseFlowData } from "@/lib/presentation";
import { getCourseStatusFromReference } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn, formatDuration } from "@/lib/utils";

interface CourseActionsProps {
  course: CourseFlowData;
  variant?: "light" | "dark";
}

export function getCourseDestination(course: CourseFlowData, completedLessonIds: string[], quizPassed: boolean, certificateEligible: boolean) {
  if (certificateEligible) {
    return {
      href: `/cursos/${course.slug}/constancia`,
      label: "Ver constancia demostrativa",
      kind: "certificate" as const,
    };
  }

  const next = course.lessonRefs.find((lesson) => !completedLessonIds.includes(lesson.id));
  if (next) {
    return {
      href: `/cursos/${course.slug}/lecciones/${next.slug}`,
      label: completedLessonIds.length > 0 || quizPassed ? "Continuar curso" : "Comenzar curso",
      kind: "lesson" as const,
    };
  }

  return {
    href: `/cursos/${course.slug}/evaluacion`,
    label: quizPassed ? "Repetir evaluación" : "Ir a la evaluación final",
    kind: "quiz" as const,
  };
}

export function CourseActions({ course, variant = "light" }: CourseActionsProps) {
  const { progress } = useProgress();
  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonRefs.map((lesson) => lesson.id),
    passingScore: course.passingScore,
  });
  const destination = getCourseDestination(
    course,
    status.completedLessonIds,
    status.quizPassed,
    status.certificateEligible,
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        href={destination.href}
        className={cn("btn", variant === "dark" ? "btn-on-dark" : "btn-primary")}
      >
        {destination.kind === "certificate" ? (
          <Award className="h-4 w-4" aria-hidden="true" />
        ) : destination.kind === "quiz" ? (
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
        ) : (
          <PlayCircle className="h-4 w-4" aria-hidden="true" />
        )}
        {destination.label}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <span
        className={cn(
          "text-xs font-semibold",
          variant === "dark" ? "text-white/60" : "text-muted",
        )}
      >
        {formatDuration(course.durationMinutes)} · sin registro
      </span>
    </div>
  );
}

export function CourseProgressPanel({ course }: { course: CourseFlowData }) {
  const { progress, hydrated, storageAvailable } = useProgress();
  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonRefs.map((lesson) => lesson.id),
    passingScore: course.passingScore,
  });

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6" aria-labelledby="course-progress-title">
      <div className="flex items-center justify-between gap-4">
        <h2 id="course-progress-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
          Tu avance
        </h2>
        <span className="text-2xl font-extrabold tracking-tight text-brand-950">{status.percentage} %</span>
      </div>
      <ProgressBar
        className="mt-3"
        value={status.percentage}
        label={`Progreso del curso ${course.title}: ${status.percentage} por ciento`}
        tone="sea"
        size="md"
      />
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-slate-50 p-3">
          <dt className="text-[11px] font-bold uppercase tracking-wide text-muted">Lecciones</dt>
          <dd className="mt-0.5 font-extrabold text-brand-950">
            {status.completedLessons} / {status.totalLessons}
          </dd>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <dt className="text-[11px] font-bold uppercase tracking-wide text-muted">Evaluación</dt>
          <dd className="mt-0.5 font-extrabold text-brand-950">
            {status.quizPassed ? "Aprobada" : status.bestPercentage !== null ? `${status.bestPercentage} %` : "Pendiente"}
          </dd>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {hydrated
          ? storageAvailable === false
            ? "Este navegador no permite guardar datos. El avance funcionará solo durante esta visita."
            : "El avance se guarda en este navegador. Se habilita la constancia al completar las lecciones y aprobar con 70 % o más."
          : "Cargando el avance guardado en este navegador…"}
      </p>
      {status.certificateEligible && (
        <Link href={`/cursos/${course.slug}/constancia`} className="btn btn-sea btn-sm mt-4 w-full">
          <Award className="h-4 w-4" aria-hidden="true" />
          Ver constancia demostrativa
        </Link>
      )}
    </section>
  );
}
