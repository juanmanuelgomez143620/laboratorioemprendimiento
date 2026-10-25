"use client";

import Link from "next/link";
import { ArrowRight, Clock, Layers, ShieldCheck } from "lucide-react";
import type { CourseCardData } from "@/lib/presentation";
import { getCourseStatusFromReference } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { accentStyles, courseIconMap } from "@/components/courses/courseVisuals";
import { cn, formatDuration } from "@/lib/utils";

interface CourseCardProps {
  course: CourseCardData;
  index?: number;
  featured?: boolean;
}

export function CourseCard({ course, index = 0, featured = false }: CourseCardProps) {
  const { progress, hydrated } = useProgress();
  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonIds,
    passingScore: course.passingScore,
  });
  const Icon = courseIconMap[course.icon];
  const accent = accentStyles[course.accent];
  const hasActivity = status.completedLessons > 0 || status.bestPercentage !== null;
  const progressLabel = status.percentage > 0
    ? `${status.completedLessons} de ${status.totalLessons} lecciones · ${status.quizPassed ? "evaluación aprobada" : "evaluación pendiente"}`
    : status.bestPercentage !== null
      ? `Evaluación rendida: ${status.bestPercentage} %`
      : "Sin iniciar";

  return (
    <article className="h-full">
      <Link
        href={`/cursos/${course.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-card transition duration-200 hover:-translate-y-[3px] hover:border-brand-200 hover:shadow-lift"
        aria-label={`Ver curso ${course.title}`}
      >
        <div className={cn("relative overflow-hidden px-5 pb-5 pt-5 text-white sm:px-6", accent.banner)}>
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-12 h-40 w-40 rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 right-6 h-32 w-32 rounded-full bg-white/[0.06]"
          />
          <div className="relative flex items-start justify-between gap-4">
            <span className={cn("flex h-12 w-12 items-center justify-center rounded-xl ring-1", accent.icon)}>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/85">
              Curso {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="relative mt-5 text-[1.35rem] font-extrabold leading-tight text-white">
            {course.title}
          </h3>
          <p className="relative mt-2 text-sm leading-relaxed text-white/75">{course.subtitle}</p>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className={cn("line-clamp-3 text-sm leading-relaxed text-body", featured && "sm:text-[0.97rem]")}>
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className={cn("badge", accent.badge)}>{course.level}</span>
            <span className="badge badge-neutral">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {formatDuration(course.durationMinutes)}
            </span>
            <span className="badge badge-neutral">
              <Layers className="h-3 w-3" aria-hidden="true" />
              {course.lessonCount} lecciones
            </span>
          </div>

          <div className="mt-auto pt-5">
            <div className="mb-2 flex items-center justify-between gap-3 text-xs">
              <span className="font-bold text-brand-950">
                {hydrated && hasActivity ? "Tu avance" : "Progreso local"}
              </span>
              <span className="text-right text-muted">{progressLabel}</span>
            </div>
            <ProgressBar
              value={status.percentage}
              label={`Progreso del curso ${course.title}: ${status.percentage} por ciento`}
              tone={course.accent === "verde" ? "sea" : "brand"}
            />
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                <ShieldCheck className="h-3.5 w-3.5 text-sea-700" aria-hidden="true" />
                Constancia demostrativa
              </span>
              <span className={cn("inline-flex items-center gap-1 text-sm font-extrabold", accent.link)}>
                Ver curso
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
