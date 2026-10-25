"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CampusProgress } from "@/types/progress";
import type { QuizResult } from "@/lib/quiz";
import {
  clearStoredProgress,
  createEmptyProgress,
  PROGRESS_STORAGE_KEY,
  readProgressFromStorage,
  recordQuizAttempt,
  resetAllProgress,
  resetCourseProgress,
  setLessonCompletion,
  writeProgressToStorage,
} from "@/lib/progress";

interface ProgressContextValue {
  progress: CampusProgress;
  hydrated: boolean;
  storageAvailable: boolean | null;
  setLessonCompleted: (courseId: string, lessonId: string, completed: boolean) => void;
  recordAttempt: (courseId: string, result: QuizResult) => void;
  resetCourse: (courseId: string) => void;
  resetAll: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<CampusProgress>(createEmptyProgress);
  const [hydrated, setHydrated] = useState(false);
  const [storageAvailable, setStorageAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // La hidratación se hace después del montaje para que el HTML del servidor
    // y la primera renderización del cliente coincidan. Es una lectura única
    // desde un almacenamiento externo, no un estado derivado de props.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(readProgressFromStorage());
    try {
      const probeKey = `${PROGRESS_STORAGE_KEY}:probe`;
      window.localStorage.setItem(probeKey, "1");
      window.localStorage.removeItem(probeKey);
      setStorageAvailable(true);
    } catch {
      setStorageAvailable(false);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const saved = writeProgressToStorage(progress);
    // Refleja si el último guardado local funcionó (por ejemplo, si el navegador
    // bloquea el almacenamiento o se quedó sin espacio).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStorageAvailable(saved);
  }, [progress, hydrated]);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== PROGRESS_STORAGE_KEY) return;
      setProgress(readProgressFromStorage());
    }

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLessonCompleted = useCallback(
    (courseId: string, lessonId: string, completed: boolean) => {
      setProgress((current) => setLessonCompletion(current, courseId, lessonId, completed));
    },
    [],
  );

  const recordAttempt = useCallback((courseId: string, result: QuizResult) => {
    setProgress((current) => recordQuizAttempt(current, courseId, result));
  }, []);

  const resetCourse = useCallback((courseId: string) => {
    setProgress((current) => resetCourseProgress(current, courseId));
  }, []);

  const resetAll = useCallback(() => {
    clearStoredProgress();
    setProgress(resetAllProgress());
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      progress,
      hydrated,
      storageAvailable,
      setLessonCompleted,
      recordAttempt,
      resetCourse,
      resetAll,
    }),
    [progress, hydrated, storageAvailable, setLessonCompleted, recordAttempt, resetCourse, resetAll],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress debe usarse dentro de ProgressProvider.");
  }
  return context;
}
