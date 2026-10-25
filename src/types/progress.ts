export interface ProgressQuizAttempt {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  completedAt: string;
}

export interface CourseProgress {
  completedLessons: string[];
  attempts: ProgressQuizAttempt[];
}

export interface CampusProgress {
  version: 1;
  courses: Record<string, CourseProgress>;
  updatedAt: string | null;
}

export interface CourseStatus {
  completedLessonIds: string[];
  completedLessons: number;
  totalLessons: number;
  percentage: number;
  bestPercentage: number | null;
  quizPassed: boolean;
  certificateEligible: boolean;
  nextLessonId: string | null;
}
