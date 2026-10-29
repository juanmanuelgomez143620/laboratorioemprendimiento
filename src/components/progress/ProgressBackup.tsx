"use client";

import { useRef, useState, type ChangeEvent } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  FileJson,
  ShieldCheck,
  Upload,
} from "lucide-react";
import type { CampusProgress } from "@/types/progress";
import {
  parseImportedProgress,
  serializeProgressBackup,
} from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";

interface BackupCourseReference {
  id: string;
  title: string;
  lessonRefs: { id: string }[];
}

interface ProgressBackupProps {
  courses: BackupCourseReference[];
}

interface PendingImport {
  fileName: string;
  progress: CampusProgress;
  activeCourses: number;
  completedLessons: number;
  attempts: number;
  ignoredCourses: string[];
}

type Feedback = { tone: "success" | "error"; text: string } | null;

const MAX_FILE_SIZE = 2 * 1024 * 1024;

function formatDate(value: string | null) {
  if (!value) return "sin fecha";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "sin fecha";
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function keepKnownCourses(progress: CampusProgress, courses: BackupCourseReference[]) {
  const references = new Map(courses.map((course) => [course.id, course]));
  const filtered: CampusProgress = {
    ...progress,
    courses: {},
  };
  const ignoredCourses: string[] = [];

  for (const [courseId, courseProgress] of Object.entries(progress.courses)) {
    const reference = references.get(courseId);
    if (!reference) {
      ignoredCourses.push(courseId);
      continue;
    }

    const lessonIds = new Set(reference.lessonRefs.map((lesson) => lesson.id));
    filtered.courses[courseId] = {
      completedLessons: courseProgress.completedLessons.filter((lessonId) =>
        lessonIds.has(lessonId),
      ),
      attempts: courseProgress.attempts,
    };
  }

  return { progress: filtered, ignoredCourses };
}

export function ProgressBackup({ courses }: ProgressBackupProps) {
  const { progress, importProgress, storageAvailable } = useProgress();
  const inputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [pendingImport, setPendingImport] = useState<PendingImport | null>(null);
  const [readingFile, setReadingFile] = useState(false);

  const currentActivity = courses.filter((course) => {
    const courseProgress = progress.courses[course.id];
    return (
      (courseProgress?.completedLessons.length ?? 0) > 0 ||
      (courseProgress?.attempts.length ?? 0) > 0
    );
  }).length;

  function clearInput() {
    if (inputRef.current) inputRef.current.value = "";
  }

  function handleExport() {
    try {
      const data = serializeProgressBackup(progress);
      const blob = new Blob([data], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `normal9-impulsa-progreso-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setFeedback({
        tone: "success",
        text: "Descargamos una copia del progreso. Guardala en un lugar seguro: este archivo no se sube a ningún servidor.",
      });
    } catch {
      setFeedback({
        tone: "error",
        text: "No pudimos generar el archivo. Probá de nuevo o revisá los permisos de descarga del navegador.",
      });
    }
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    clearInput();
    if (!file) return;

    setFeedback(null);
    setPendingImport(null);

    if (file.size > MAX_FILE_SIZE) {
      setFeedback({
        tone: "error",
        text: "El archivo es demasiado grande. La copia del progreso del campus pesa mucho menos de 2 MB.",
      });
      return;
    }

    setReadingFile(true);
    try {
      const raw = await file.text();
      const parsed = parseImportedProgress(raw);

      if (!parsed.ok) {
        setFeedback({ tone: "error", text: parsed.error });
        return;
      }

      const { progress: filtered, ignoredCourses } = keepKnownCourses(parsed.progress, courses);
      const courseEntries = Object.values(filtered.courses);
      const activeCourses = courseEntries.filter(
        (course) => course.completedLessons.length > 0 || course.attempts.length > 0,
      ).length;

      setPendingImport({
        fileName: file.name,
        progress: filtered,
        activeCourses,
        completedLessons: courseEntries.reduce(
          (total, course) => total + course.completedLessons.length,
          0,
        ),
        attempts: courseEntries.reduce((total, course) => total + course.attempts.length, 0),
        ignoredCourses,
      });
    } catch {
      setFeedback({
        tone: "error",
        text: "No pudimos leer el archivo. Verificá que sea la copia JSON descargada desde este campus.",
      });
    } finally {
      setReadingFile(false);
    }
  }

  function confirmImport() {
    if (!pendingImport) return;

    importProgress(pendingImport.progress);
    setFeedback({
      tone: "success",
      text: `Importamos el progreso del archivo «${pendingImport.fileName}». Ya está guardado en este navegador.`,
    });
    setPendingImport(null);
    clearInput();
  }

  function cancelImport() {
    setPendingImport(null);
    clearInput();
  }

  return (
    <section
      className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
      aria-labelledby="backup-title"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2
            id="backup-title"
            className="flex items-center gap-2 text-base font-extrabold text-brand-950"
          >
            <FileJson className="h-4 w-4 text-sea-700" aria-hidden="true" />
            Copia de seguridad del progreso
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
            Descargá un archivo JSON con tus lecciones completadas y tus intentos de evaluación.
            Podés importarlo en otro navegador o recuperarlo si borraste los datos de este
            dispositivo. El archivo se genera y se lee solo en tu equipo.
          </p>
          <p className="mt-2 text-xs text-muted">
            Actividad guardada ahora: {currentActivity}{" "}
            {currentActivity === 1 ? "curso" : "cursos"} · última actualización:{" "}
            {formatDate(progress.updatedAt)}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <button type="button" onClick={handleExport} className="btn btn-secondary btn-sm">
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar copia
          </button>
          <label htmlFor="progress-import" className="btn btn-primary btn-sm cursor-pointer">
            <Upload className="h-4 w-4" aria-hidden="true" />
            {readingFile ? "Leyendo…" : "Importar copia"}
          </label>
          <input
            ref={inputRef}
            id="progress-import"
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={handleFileChange}
            disabled={readingFile}
          />
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-xl border border-brand-100 bg-brand-50/60 px-3 py-2.5 text-xs leading-relaxed text-brand-900">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sea-700" aria-hidden="true" />
        <p>
          La copia no incluye tu nombre, tu correo ni datos de la constancia: solo identificadores de
          lecciones, fechas y resultados de evaluación.{" "}
          {storageAvailable === false
            ? "Este navegador no permite guardar el progreso, así que la importación se perderá al cerrar la página."
            : "Importar una copia reemplaza el progreso actual de este navegador."}
        </p>
      </div>

      {feedback && (
        <div
          role={feedback.tone === "error" ? "alert" : "status"}
          className={`mt-4 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${
            feedback.tone === "error"
              ? "border-rose-200 bg-rose-50 text-rose-950"
              : "border-sea-200 bg-sea-50 text-sea-950"
          }`}
        >
          {feedback.tone === "error" ? (
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          <p>{feedback.text}</p>
        </div>
      )}

      {pendingImport && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="flex items-start gap-2 text-sm font-extrabold text-amber-950">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Archivo listo para importar: «{pendingImport.fileName}»
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-950">
            Contiene {pendingImport.activeCourses}{" "}
            {pendingImport.activeCourses === 1 ? "curso con actividad" : "cursos con actividad"},{" "}
            {pendingImport.completedLessons} lecciones completadas y {pendingImport.attempts}{" "}
            {pendingImport.attempts === 1 ? "intento de evaluación" : "intentos de evaluación"}.
            Reemplazará el progreso guardado actualmente en este navegador.
          </p>
          {pendingImport.ignoredCourses.length > 0 && (
            <p className="mt-2 text-xs leading-relaxed text-amber-900">
              Se omitirán {pendingImport.ignoredCourses.length}{" "}
              {pendingImport.ignoredCourses.length === 1 ? "curso" : "cursos"} del archivo que no
              pertenecen a este campus.
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={confirmImport}
              className="btn btn-sm bg-amber-800 text-white hover:bg-amber-900"
            >
              Sí, reemplazar mi progreso
            </button>
            <button type="button" onClick={cancelImport} className="btn btn-secondary btn-sm">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
