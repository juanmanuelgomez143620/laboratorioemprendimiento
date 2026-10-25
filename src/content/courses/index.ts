import type { Course } from "@/types/course";
import { miPrimerEmprendimiento } from "./mi-primer-emprendimiento";
import { costosYPrecios } from "./costos-y-precios";
import { marcaIdentidad } from "./marca-identidad";
import { herramientasDigitales } from "./herramientas-digitales";

export const courses: Course[] = [
  miPrimerEmprendimiento,
  costosYPrecios,
  marcaIdentidad,
  herramientasDigitales,
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getCourseLessons(course: Course) {
  return course.modules.flatMap((module) =>
    module.lessons.map((lesson) => ({ ...lesson, moduleId: module.id, moduleTitle: module.title })),
  );
}

export function getLessonBySlug(course: Course, slug: string) {
  return getCourseLessons(course).find((lesson) => lesson.slug === slug);
}

export function getAdjacentLessons(course: Course, lessonId: string) {
  const lessons = getCourseLessons(course);
  const index = lessons.findIndex((lesson) => lesson.id === lessonId);
  return {
    previous: index > 0 ? lessons[index - 1] : null,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : null,
    index,
    total: lessons.length,
  };
}

export function getCourseLessonIds(course: Course): string[] {
  return course.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id));
}

export const totalCourses = courses.length;
export const totalLessons = courses.reduce(
  (total, course) => total + getCourseLessonIds(course).length,
  0,
);
export const totalLearningMinutes = courses.reduce(
  (total, course) => total + course.durationMinutes,
  0,
);
