import type { Course } from "@/types/course";
import type { Resource } from "@/types/resource";

export type ResourceSummary = Omit<Resource, "content" | "relatedCourseSlugs">;

export interface CourseCardData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  durationMinutes: number;
  level: Course["level"];
  accent: Course["accent"];
  icon: Course["icon"];
  moduleCount: number;
  lessonCount: number;
  lessonIds: string[];
  passingScore: number;
}

export interface CourseFlowData {
  id: string;
  slug: string;
  title: string;
  durationMinutes: number;
  lessonRefs: Array<{ id: string; slug: string; title: string }>;
  passingScore: number;
}

export interface CourseOutlineModule {
  id: string;
  title: string;
  description: string;
  lessons: Array<{ id: string; slug: string; title: string; estimatedMinutes: number }>;
}

export interface CourseOutlineData extends CourseFlowData {
  modules: CourseOutlineModule[];
}

export function toResourceSummary(resource: Resource): ResourceSummary {
  return {
    id: resource.id,
    slug: resource.slug,
    title: resource.title,
    description: resource.description,
    category: resource.category,
    type: resource.type,
    tags: resource.tags,
    useCase: resource.useCase,
    download: resource.download,
  };
}

export function toCourseCardData(course: Course): CourseCardData {
  const lessons = course.modules.flatMap((module) => module.lessons);
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    shortTitle: course.shortTitle,
    subtitle: course.subtitle,
    description: course.description,
    durationMinutes: course.durationMinutes,
    level: course.level,
    accent: course.accent,
    icon: course.icon,
    moduleCount: course.modules.length,
    lessonCount: lessons.length,
    lessonIds: lessons.map((lesson) => lesson.id),
    passingScore: course.finalQuiz.passingScore,
  };
}

export function toCourseFlowData(course: Course): CourseFlowData {
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    durationMinutes: course.durationMinutes,
    lessonRefs: course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({ id: lesson.id, slug: lesson.slug, title: lesson.title })),
    ),
    passingScore: course.finalQuiz.passingScore,
  };
}

export function toCourseOutlineData(course: Course): CourseOutlineData {
  return {
    ...toCourseFlowData(course),
    modules: course.modules.map((module) => ({
      id: module.id,
      title: module.title,
      description: module.description,
      lessons: module.lessons.map((lesson) => ({
        id: lesson.id,
        slug: lesson.slug,
        title: lesson.title,
        estimatedMinutes: lesson.estimatedMinutes,
      })),
    })),
  };
}
