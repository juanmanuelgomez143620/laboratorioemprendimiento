import type { Course } from "@/types/course";
import type {
  CampusProgress,
  CourseProgress,
  CourseStatus,
  ProgressQuizAttempt,
} from "@/types/progress";
import type { QuizResult } from "@/lib/quiz";

export const PROGRESS_STORAGE_KEY = "normal9-impulsa:progress:v1";
const MAX_ATTEMPTS_PER_COURSE = 25;

type ReadableStorage = Pick<Storage, "getItem">;
type WritableStorage = Pick<Storage, "setItem" | "removeItem">;

export function createEmptyProgress(): CampusProgress {
  return { version: 1, courses: {}, updatedAt: null };
}

export function createEmptyCourseProgress(): CourseProgress {
  return { completedLessons: [], attempts: [] };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeAttempt(value: unknown): ProgressQuizAttempt | null {
  if (!isRecord(value)) return null;
  const score = value.score;
  const total = value.total;
  const completedAt = value.completedAt;

  if (
    typeof score !== "number" ||
    typeof total !== "number" ||
    !Number.isInteger(score) ||
    !Number.isInteger(total) ||
    total <= 0 ||
    score < 0 ||
    score > total ||
    typeof completedAt !== "string" ||
    Number.isNaN(Date.parse(completedAt))
  ) {
    return null;
  }

  return {
    score,
    total,
    percentage: Math.round((score / total) * 100),
    passed: value.passed === true,
    completedAt,
  };
}

function normalizeCourseProgress(value: unknown): CourseProgress {
  if (!isRecord(value)) return createEmptyCourseProgress();

  const completedLessons = Array.isArray(value.completedLessons)
    ? Array.from(
        new Set(value.completedLessons.filter((item): item is string => typeof item === "string")),
      )
    : [];

  const attempts = Array.isArray(value.attempts)
    ? value.attempts
        .map(normalizeAttempt)
        .filter((attempt): attempt is ProgressQuizAttempt => attempt !== null)
        .slice(-MAX_ATTEMPTS_PER_COURSE)
    : [];

  return { completedLessons, attempts };
}

/**
 * Convierte datos externos (localStorage) en una estructura segura.
 * Si el formato o la versión no son reconocibles, comienza desde cero.
 */
export function normalizeProgress(value: unknown): CampusProgress {
  if (!isRecord(value) || value.version !== 1 || !isRecord(value.courses)) {
    return createEmptyProgress();
  }

  const courses: Record<string, CourseProgress> = {};
  for (const [courseId, courseValue] of Object.entries(value.courses)) {
    if (courseId.length === 0) continue;
    courses[courseId] = normalizeCourseProgress(courseValue);
  }

  return {
    version: 1,
    courses,
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : null,
  };
}

export function parseStoredProgress(raw: string | null): CampusProgress {
  if (!raw) return createEmptyProgress();
  try {
    return normalizeProgress(JSON.parse(raw));
  } catch {
    return createEmptyProgress();
  }
}

export function readProgressFromStorage(storage?: ReadableStorage): CampusProgress {
  try {
    if (storage) return parseStoredProgress(storage.getItem(PROGRESS_STORAGE_KEY));
    if (typeof window === "undefined") return createEmptyProgress();
    return parseStoredProgress(window.localStorage.getItem(PROGRESS_STORAGE_KEY));
  } catch {
    return createEmptyProgress();
  }
}

export function writeProgressToStorage(
  progress: CampusProgress,
  storage?: WritableStorage,
): boolean {
  try {
    const target = storage ?? (typeof window === "undefined" ? null : window.localStorage);
    if (!target) return false;
    target.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

export function clearStoredProgress(storage?: WritableStorage): boolean {
  try {
    const target = storage ?? (typeof window === "undefined" ? null : window.localStorage);
    if (!target) return false;
    target.removeItem(PROGRESS_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

export function setLessonCompletion(
  progress: CampusProgress,
  courseId: string,
  lessonId: string,
  completed: boolean,
  now: string = new Date().toISOString(),
): CampusProgress {
  const current = progress.courses[courseId] ?? createEmptyCourseProgress();
  const completedSet = new Set(current.completedLessons);

  if (completed) completedSet.add(lessonId);
  else completedSet.delete(lessonId);

  return {
    ...progress,
    courses: {
      ...progress.courses,
      [courseId]: { ...current, completedLessons: Array.from(completedSet) },
    },
    updatedAt: now,
  };
}

export function recordQuizAttempt(
  progress: CampusProgress,
  courseId: string,
  result: QuizResult,
  now: string = new Date().toISOString(),
): CampusProgress {
  const current = progress.courses[courseId] ?? createEmptyCourseProgress();
  const attempt: ProgressQuizAttempt = {
    score: result.score,
    total: result.total,
    percentage: result.percentage,
    passed: result.passed,
    completedAt: now,
  };

  return {
    ...progress,
    courses: {
      ...progress.courses,
      [courseId]: {
        ...current,
        attempts: [...current.attempts, attempt].slice(-MAX_ATTEMPTS_PER_COURSE),
      },
    },
    updatedAt: now,
  };
}

export function resetCourseProgress(progress: CampusProgress, courseId: string): CampusProgress {
  const courses = { ...progress.courses };
  delete courses[courseId];
  return { ...progress, courses, updatedAt: new Date().toISOString() };
}

export function resetAllProgress(): CampusProgress {
  return createEmptyProgress();
}

export interface CourseStatusReference {
  id: string;
  lessonIds: string[];
  passingScore: number;
}

export function getCourseStatusFromReference(
  progress: CampusProgress,
  course: CourseStatusReference,
): CourseStatus {
  const courseProgress = progress.courses[course.id];
  const lessonIds = course.lessonIds;
  const lessonIdSet = new Set(lessonIds);
  const completedLessonIds = (courseProgress?.completedLessons ?? []).filter((id) =>
    lessonIdSet.has(id),
  );
  const bestPercentage =
    courseProgress && courseProgress.attempts.length > 0
      ? Math.max(...courseProgress.attempts.map((attempt) => attempt.percentage))
      : null;
  const quizPassed =
    courseProgress?.attempts.some(
      (attempt) => attempt.score * 100 >= course.passingScore * attempt.total,
    ) ?? false;
  const allLessonsCompleted = lessonIds.length > 0 && completedLessonIds.length === lessonIds.length;
  const totalSteps = lessonIds.length + 1;
  const completedSteps = completedLessonIds.length + (quizPassed ? 1 : 0);

  return {
    completedLessonIds,
    completedLessons: completedLessonIds.length,
    totalLessons: lessonIds.length,
    percentage: totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100),
    bestPercentage,
    quizPassed,
    certificateEligible: allLessonsCompleted && quizPassed,
    nextLessonId: lessonIds.find((lessonId) => !completedLessonIds.includes(lessonId)) ?? null,
  };
}

export function getCourseStatus(progress: CampusProgress, course: Course): CourseStatus {
  return getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id)),
    passingScore: course.finalQuiz.passingScore,
  });
}
