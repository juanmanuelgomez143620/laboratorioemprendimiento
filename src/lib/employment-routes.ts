import { getCourseBySlug, getLessonBySlug } from "@/content/courses";
import type { EmploymentRoute, RouteStep } from "@/content/employment-routes";
import { getResourceBySlug } from "@/content/resources";
import { getToolById } from "@/content/tools";

export interface ResolvedRouteStep {
  kindLabel: "Curso completo" | "Lección" | "Recurso" | "Herramienta";
  title: string;
  context?: string;
  href: string;
  external: boolean;
  minutes?: number;
  note: string;
}

/** Convierte un paso de una ruta en un enlace navegable. Devuelve null si la referencia no existe. */
export function resolveRouteStep(step: RouteStep): ResolvedRouteStep | null {
  switch (step.kind) {
    case "course": {
      const course = getCourseBySlug(step.courseSlug);
      if (!course) return null;
      return {
        kindLabel: "Curso completo",
        title: course.title,
        href: `/cursos/${course.slug}`,
        external: false,
        minutes: course.durationMinutes,
        note: step.note,
      };
    }
    case "lesson": {
      const course = getCourseBySlug(step.courseSlug);
      const lesson = course ? getLessonBySlug(course, step.lessonSlug) : undefined;
      if (!course || !lesson) return null;
      return {
        kindLabel: "Lección",
        title: lesson.title,
        context: course.shortTitle ?? course.title,
        href: `/cursos/${course.slug}/lecciones/${lesson.slug}`,
        external: false,
        minutes: lesson.estimatedMinutes,
        note: step.note,
      };
    }
    case "resource": {
      const resource = getResourceBySlug(step.resourceSlug);
      if (!resource) return null;
      return {
        kindLabel: "Recurso",
        title: resource.title,
        context: resource.type,
        href: `/biblioteca/${resource.slug}`,
        external: false,
        note: step.note,
      };
    }
    case "tool": {
      const tool = getToolById(step.toolId);
      if (!tool || !tool.href) return null;
      return {
        kindLabel: "Herramienta",
        title: tool.name,
        context: tool.origin === "externo" ? "Herramienta externa" : "Herramienta del campus",
        href: tool.href,
        external: tool.origin === "externo",
        note: step.note,
      };
    }
  }
}

export function resolveRoute(route: EmploymentRoute) {
  const steps = route.steps
    .map(resolveRouteStep)
    .filter((step): step is ResolvedRouteStep => step !== null);
  const minutes = steps.reduce((total, step) => total + (step.minutes ?? 0), 0);
  return { ...route, resolvedSteps: steps, lessonMinutes: minutes };
}
