import { describe, expect, it } from "vitest";
import {
  clearStoredProgress,
  createEmptyProgress,
  getCourseStatusFromReference,
  normalizeProgress,
  parseImportedProgress,
  parseStoredProgress,
  PROGRESS_STORAGE_KEY,
  readProgressFromStorage,
  recordQuizAttempt,
  resetAllProgress,
  resetCourseProgress,
  serializeProgressBackup,
  setLessonCompletion,
  writeProgressToStorage,
} from "@/lib/progress";
import type { QuizResult } from "@/lib/quiz";
import type { CampusProgress } from "@/types/progress";

const NOW = "2026-05-10T12:00:00.000Z";

function createMemoryStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem(key: string) {
      return data.get(key) ?? null;
    },
    setItem(key: string, value: string) {
      data.set(key, value);
    },
    removeItem(key: string) {
      data.delete(key);
    },
  };
}

function passingResult(score = 7, total = 10): QuizResult {
  return { score, total, percentage: Math.round((score / total) * 100), passed: true };
}

describe("normalizeProgress", () => {
  it("descarta valores que no son un objeto de progreso válido", () => {
    for (const value of [null, undefined, [], "texto", 42, { version: 2, courses: {} }]) {
      expect(normalizeProgress(value)).toEqual(createEmptyProgress());
    }
  });

  it("normaliza lecciones duplicadas y descarta valores que no son texto", () => {
    const progress = normalizeProgress({
      version: 1,
      courses: {
        curso: {
          completedLessons: ["l1", "l1", 42, null, "l2"],
          attempts: [],
        },
      },
      updatedAt: NOW,
    });

    expect(progress.courses.curso.completedLessons).toEqual(["l1", "l2"]);
    expect(progress.updatedAt).toBe(NOW);
  });

  it("descarta intentos inválidos y recalcula el porcentaje", () => {
    const progress = normalizeProgress({
      version: 1,
      courses: {
        curso: {
          completedLessons: [],
          attempts: [
            {
              score: 7,
              total: 10,
              percentage: 1,
              passed: true,
              completedAt: NOW,
            },
            { score: 11, total: 10, completedAt: NOW },
            { score: 1, total: 0, completedAt: NOW },
            { score: 1, total: 2, completedAt: "no-es-una-fecha" },
            { score: 0, total: 2, passed: "sí", completedAt: NOW },
          ],
        },
      },
    });

    const attempts = progress.courses.curso.attempts;
    expect(attempts).toHaveLength(2);
    expect(attempts[0]).toMatchObject({ score: 7, total: 10, percentage: 70, passed: true });
    expect(attempts[1]).toMatchObject({ score: 0, total: 2, percentage: 0, passed: false });
  });

  it("limita el historial a los últimos 25 intentos", () => {
    const attempts = Array.from({ length: 30 }, (_, index) => ({
      score: 1,
      total: 2,
      passed: false,
      completedAt: new Date(Date.UTC(2026, 0, 1, 0, 0, index)).toISOString(),
    }));

    const progress = normalizeProgress({
      version: 1,
      courses: { curso: { completedLessons: [], attempts } },
    });

    expect(progress.courses.curso.attempts).toHaveLength(25);
    expect(progress.courses.curso.attempts[0].completedAt).toBe(
      new Date(Date.UTC(2026, 0, 1, 0, 0, 5)).toISOString(),
    );
  });

  it("ignora cursos con identificador vacío", () => {
    const progress = normalizeProgress({
      version: 1,
      courses: {
        "": { completedLessons: ["l1"], attempts: [] },
        valido: { completedLessons: ["l1"], attempts: [] },
      },
    });

    expect(Object.keys(progress.courses)).toEqual(["valido"]);
  });
});

describe("parseStoredProgress", () => {
  it("devuelve progreso vacío si no hay datos", () => {
    expect(parseStoredProgress(null)).toEqual(createEmptyProgress());
    expect(parseStoredProgress("")).toEqual(createEmptyProgress());
  });

  it("devuelve progreso vacío ante JSON malformado", () => {
    expect(parseStoredProgress("{esto no es json")).toEqual(createEmptyProgress());
  });

  it("lee y normaliza un progreso guardado", () => {
    const raw = JSON.stringify({
      version: 1,
      courses: { curso: { completedLessons: ["l1"], attempts: [] } },
      updatedAt: NOW,
    });

    expect(parseStoredProgress(raw).courses.curso.completedLessons).toEqual(["l1"]);
  });
});

describe("copia de seguridad del progreso", () => {
  it("serializa y vuelve a leer un respaldo completo", () => {
    const progress = setLessonCompletion(createEmptyProgress(), "curso", "l1", true, NOW);
    const parsed = parseImportedProgress(serializeProgressBackup(progress, NOW));

    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.progress).toEqual(progress);
    expect(parsed.exportedAt).toBe(NOW);
  });

  it("acepta un progreso guardado sin el envoltorio de respaldo", () => {
    const raw = JSON.stringify({
      version: 1,
      courses: { curso: { completedLessons: ["l1", "l2"], attempts: [] } },
      updatedAt: NOW,
    });
    const parsed = parseImportedProgress(raw);

    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.progress.courses.curso.completedLessons).toEqual(["l1", "l2"]);
    expect(parsed.exportedAt).toBeNull();
  });

  it("rechaza archivos con JSON inválido o formato desconocido", () => {
    for (const raw of ["", "{no es json", "[]", "42", "null"]) {
      const parsed = parseImportedProgress(raw);
      expect(parsed.ok).toBe(false);
    }
  });

  it("rechaza respaldos de otra aplicación o de otra versión", () => {
    const anotherApp = JSON.stringify({
      app: "otro-campus",
      backupVersion: 1,
      progress: createEmptyProgress(),
    });
    const anotherVersion = JSON.stringify({
      app: "normal9-impulsa",
      backupVersion: 2,
      progress: createEmptyProgress(),
    });

    expect(parseImportedProgress(anotherApp).ok).toBe(false);
    expect(parseImportedProgress(anotherVersion).ok).toBe(false);
  });

  it("rechaza un progreso sin estructura reconocible", () => {
    for (const raw of [
      JSON.stringify({ app: "normal9-impulsa", backupVersion: 1 }),
      JSON.stringify({ version: 2, courses: {} }),
      JSON.stringify({ version: 1, courses: "no-es-un-objeto" }),
      JSON.stringify({ version: 1, courses: { curso: "no-es-un-curso" } }),
    ]) {
      expect(parseImportedProgress(raw).ok).toBe(false);
    }
  });
});

describe("almacenamiento local", () => {
  it("escribe y vuelve a leer el progreso", () => {
    const storage = createMemoryStorage();
    const progress = setLessonCompletion(createEmptyProgress(), "curso", "l1", true, NOW);

    expect(writeProgressToStorage(progress, storage)).toBe(true);
    expect(storage.data.has(PROGRESS_STORAGE_KEY)).toBe(true);
    expect(readProgressFromStorage(storage)).toEqual(progress);
  });

  it("tolera un almacenamiento que falla al leer o escribir", () => {
    const broken = {
      getItem() {
        throw new Error("bloqueado");
      },
      setItem() {
        throw new Error("sin espacio");
      },
      removeItem() {
        throw new Error("bloqueado");
      },
    };

    expect(readProgressFromStorage(broken)).toEqual(createEmptyProgress());
    expect(writeProgressToStorage(createEmptyProgress(), broken)).toBe(false);
    expect(clearStoredProgress(broken)).toBe(false);
  });

  it("borra la clave de progreso", () => {
    const storage = createMemoryStorage({ [PROGRESS_STORAGE_KEY]: "{}" });

    expect(clearStoredProgress(storage)).toBe(true);
    expect(storage.data.has(PROGRESS_STORAGE_KEY)).toBe(false);
  });
});

describe("setLessonCompletion", () => {
  it("agrega una lección completada sin mutar el progreso anterior", () => {
    const before = createEmptyProgress();
    const after = setLessonCompletion(before, "curso", "l1", true, NOW);

    expect(after.courses.curso.completedLessons).toEqual(["l1"]);
    expect(after.updatedAt).toBe(NOW);
    expect(before.courses.curso).toBeUndefined();
  });

  it("no duplica una lección ya completada", () => {
    const once = setLessonCompletion(createEmptyProgress(), "curso", "l1", true, NOW);
    const twice = setLessonCompletion(once, "curso", "l1", true, NOW);

    expect(twice.courses.curso.completedLessons).toEqual(["l1"]);
  });

  it("permite desmarcar una lección", () => {
    const marked = setLessonCompletion(createEmptyProgress(), "curso", "l1", true, NOW);
    const unmarked = setLessonCompletion(marked, "curso", "l1", false, NOW);

    expect(unmarked.courses.curso.completedLessons).toEqual([]);
  });
});

describe("recordQuizAttempt", () => {
  it("registra el intento con su resultado", () => {
    const progress = recordQuizAttempt(createEmptyProgress(), "curso", passingResult(), NOW);

    expect(progress.courses.curso.attempts).toEqual([
      { score: 7, total: 10, percentage: 70, passed: true, completedAt: NOW },
    ]);
    expect(progress.updatedAt).toBe(NOW);
  });

  it("conserva solo los últimos 25 intentos", () => {
    let progress: CampusProgress = createEmptyProgress();
    for (let index = 0; index < 30; index += 1) {
      progress = recordQuizAttempt(
        progress,
        "curso",
        passingResult(1, 2),
        new Date(Date.UTC(2026, 0, 1, 0, 0, index)).toISOString(),
      );
    }

    expect(progress.courses.curso.attempts).toHaveLength(25);
  });
});

describe("resetCourseProgress y resetAllProgress", () => {
  it("borra solo el curso indicado", () => {
    const progress: CampusProgress = {
      version: 1,
      courses: {
        uno: { completedLessons: ["l1"], attempts: [] },
        dos: { completedLessons: ["l2"], attempts: [] },
      },
      updatedAt: NOW,
    };

    const reset = resetCourseProgress(progress, "uno");

    expect(reset.courses.uno).toBeUndefined();
    expect(reset.courses.dos.completedLessons).toEqual(["l2"]);
    expect(progress.courses.uno).toBeDefined();
  });

  it("devuelve un progreso vacío al reiniciar todo", () => {
    expect(resetAllProgress()).toEqual(createEmptyProgress());
  });
});

describe("getCourseStatusFromReference", () => {
  const course = {
    id: "curso",
    lessonIds: ["a", "b", "c", "d"],
    passingScore: 70,
  };

  it("calcula el avance parcial de lecciones", () => {
    const progress = setLessonCompletion(createEmptyProgress(), "curso", "a", true, NOW);
    const withB = setLessonCompletion(progress, "curso", "b", true, NOW);
    const status = getCourseStatusFromReference(withB, course);

    expect(status.completedLessons).toBe(2);
    expect(status.totalLessons).toBe(4);
    expect(status.percentage).toBe(40);
    expect(status.bestPercentage).toBeNull();
    expect(status.quizPassed).toBe(false);
    expect(status.certificateEligible).toBe(false);
    expect(status.nextLessonId).toBe("c");
  });

  it("habilita la constancia solo con todas las lecciones y la evaluación aprobada", () => {
    let progress = createEmptyProgress();
    for (const lessonId of course.lessonIds) {
      progress = setLessonCompletion(progress, "curso", lessonId, true, NOW);
    }
    progress = recordQuizAttempt(progress, "curso", passingResult(7, 10), NOW);

    const status = getCourseStatusFromReference(progress, course);

    expect(status.percentage).toBe(100);
    expect(status.quizPassed).toBe(true);
    expect(status.certificateEligible).toBe(true);
    expect(status.nextLessonId).toBeNull();
  });

  it("no habilita la constancia si falta una lección aunque la evaluación esté aprobada", () => {
    let progress = createEmptyProgress();
    for (const lessonId of ["a", "b", "c"]) {
      progress = setLessonCompletion(progress, "curso", lessonId, true, NOW);
    }
    progress = recordQuizAttempt(progress, "curso", passingResult(10, 10), NOW);

    const status = getCourseStatusFromReference(progress, course);

    expect(status.quizPassed).toBe(true);
    expect(status.certificateEligible).toBe(false);
    expect(status.nextLessonId).toBe("d");
    expect(status.percentage).toBe(80);
  });

  it("no habilita la constancia si la evaluación no alcanza el 70% exacto", () => {
    let progress = createEmptyProgress();
    for (const lessonId of course.lessonIds) {
      progress = setLessonCompletion(progress, "curso", lessonId, true, NOW);
    }
    progress = recordQuizAttempt(progress, "curso", passingResult(2, 3), NOW);

    const status = getCourseStatusFromReference(progress, course);

    expect(status.bestPercentage).toBe(67);
    expect(status.quizPassed).toBe(false);
    expect(status.certificateEligible).toBe(false);
    expect(status.percentage).toBe(80);
  });

  it("ignora lecciones completadas que no pertenecen al curso", () => {
    const progress: CampusProgress = {
      version: 1,
      courses: {
        curso: { completedLessons: ["a", "ajena"], attempts: [] },
      },
      updatedAt: NOW,
    };

    const status = getCourseStatusFromReference(progress, course);

    expect(status.completedLessonIds).toEqual(["a"]);
    expect(status.completedLessons).toBe(1);
    expect(status.percentage).toBe(20);
  });

  it("informa el mejor porcentaje entre varios intentos", () => {
    let progress = recordQuizAttempt(createEmptyProgress(), "curso", passingResult(4, 10), NOW);
    progress = recordQuizAttempt(progress, "curso", passingResult(9, 10), NOW);

    expect(getCourseStatusFromReference(progress, course).bestPercentage).toBe(90);
  });

  it("devuelve un estado vacío para un curso sin lecciones", () => {
    const status = getCourseStatusFromReference(createEmptyProgress(), {
      id: "vacio",
      lessonIds: [],
      passingScore: 70,
    });

    expect(status.percentage).toBe(0);
    expect(status.certificateEligible).toBe(false);
    expect(status.nextLessonId).toBeNull();
  });
});
