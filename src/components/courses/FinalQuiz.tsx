"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  RotateCcw,
  X,
} from "lucide-react";
import type { FinalQuiz as FinalQuizType } from "@/types/course";
import type { CourseFlowData } from "@/lib/presentation";
import type { QuizResult } from "@/lib/quiz";
import { countUnanswered, scoreQuiz } from "@/lib/quiz";
import { getCourseStatusFromReference } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { cn } from "@/lib/utils";

interface SubmittedState {
  result: QuizResult;
  answers: Array<number | null>;
}

interface FinalQuizProps {
  quiz: FinalQuizType;
  course: CourseFlowData;
}

export function FinalQuiz({ quiz, course }: FinalQuizProps) {
  const { progress, recordAttempt, hydrated, storageAvailable } = useProgress();
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    Array.from({ length: quiz.questions.length }, () => null),
  );
  const [submitted, setSubmitted] = useState<SubmittedState | null>(null);
  const [error, setError] = useState("");
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const quizHeadingRef = useRef<HTMLHeadingElement>(null);

  const status = getCourseStatusFromReference(progress, {
    id: course.id,
    lessonIds: course.lessonRefs.map((lesson) => lesson.id),
    passingScore: course.passingScore,
  });

  useEffect(() => {
    if (submitted) {
      resultHeadingRef.current?.focus();
    }
  }, [submitted]);

  function chooseAnswer(questionIndex: number, optionIndex: number) {
    setAnswers((current) => {
      const next = [...current];
      next[questionIndex] = optionIndex;
      return next;
    });
    if (error) setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const unanswered = countUnanswered(answers, quiz.questions.length);

    if (unanswered > 0) {
      setError(
        `Faltan ${unanswered} ${unanswered === 1 ? "respuesta" : "respuestas"}. Completá todas las preguntas antes de corregir.`,
      );
      window.setTimeout(() => errorRef.current?.focus(), 0);
      return;
    }

    const result = scoreQuiz(quiz, answers);
    setSubmitted({ result, answers: [...answers] });
    setError("");
    recordAttempt(course.id, result);
  }

  function retry() {
    setAnswers(Array.from({ length: quiz.questions.length }, () => null));
    setSubmitted(null);
    setError("");
    quizHeadingRef.current?.focus();
  }

  const firstUnansweredIndex = answers.findIndex((answer) => answer === null);
  const firstUnansweredId =
    firstUnansweredIndex >= 0 ? `pregunta-${quiz.questions[firstUnansweredIndex].id}` : undefined;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
        <span className="font-bold text-brand-950">{quiz.questions.length} preguntas</span>
        <span aria-hidden="true">·</span>
        <span>Aprobación: {quiz.passingScore} %</span>
        <span aria-hidden="true">·</span>
        <span>Sin límite de tiempo</span>
        <span aria-hidden="true">·</span>
        <span>Respuestas explicadas después de corregir</span>
      </div>

      {error && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950"
        >
          <p className="font-extrabold">{error}</p>
          {firstUnansweredId && (
            <a href={`#${firstUnansweredId}`} className="mt-1 inline-block font-bold underline">
              Ir a la primera pregunta pendiente
            </a>
          )}
        </div>
      )}

      {submitted && (
        <section
          aria-labelledby="quiz-result-title"
          aria-live="polite"
          className={cn(
            "mb-8 overflow-hidden rounded-[1.4rem] border shadow-card",
            submitted.result.passed
              ? "border-sea-200 bg-sea-50/70"
              : "border-amber-200 bg-amber-50/75",
          )}
        >
          <div className="p-5 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white",
                    submitted.result.passed ? "bg-sea-700" : "bg-amber-700",
                  )}
                >
                  {submitted.result.passed ? (
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlertTriangle className="h-6 w-6" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-muted">
                    Resultado de esta evaluación
                  </p>
                  <h2
                    id="quiz-result-title"
                    ref={resultHeadingRef}
                    tabIndex={-1}
                    className="mt-1 text-3xl font-extrabold tracking-tight text-brand-950"
                  >
                    {submitted.result.percentage} % · {submitted.result.score} de {submitted.result.total} correctas
                  </h2>
                  <p className="mt-2 font-bold text-brand-950">
                    {submitted.result.passed
                      ? "Alcanzaste el mínimo requerido."
                      : `No alcanzaste el mínimo de ${quiz.passingScore} %. Podés intentarlo nuevamente.`}
                  </p>
                  <p className="mt-1 text-sm text-body">
                    {submitted.result.passed
                      ? status.certificateEligible
                        ? "También completaste todas las lecciones: tu constancia de demostración está disponible."
                        : "Para habilitar la constancia todavía necesitás completar todas las lecciones del curso."
                      : "Revisá las explicaciones de abajo, volvé a las lecciones si lo necesitás y repetí la evaluación."}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                <span className="rounded-full border border-white bg-white/70 px-3 py-1 text-xs font-extrabold text-brand-950">
                  {status.quizPassed ? "Curso aprobado" : "Aún no aprobado"}
                </span>
                {status.bestPercentage !== null && (
                  <span className="text-xs text-muted">Mejor resultado guardado: {status.bestPercentage} %</span>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-black/5 pt-5">
              {submitted.result.passed && status.certificateEligible ? (
                <Link href={`/cursos/${course.slug}/constancia`} className="btn btn-primary">
                  <Award className="h-4 w-4" aria-hidden="true" />
                  Ver constancia demostrativa
                </Link>
              ) : (
                <Link href={`/cursos/${course.slug}`} className="btn btn-primary">
                  Volver al curso
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              <button type="button" onClick={retry} className="btn btn-secondary">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Repetir evaluación
              </button>
              <Link href="/cursos" className="btn btn-ghost">
                Ver todos los cursos
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted">
              {hydrated && storageAvailable !== false
                ? "El intento se guardó en el almacenamiento local de este navegador."
                : "No se pudo confirmar el guardado local. Si recargás la página, el intento podría no conservarse."}
            </p>
          </div>
        </section>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          {quiz.questions.map((question, questionIndex) => {
            const selected = submitted
              ? submitted.answers[questionIndex]
              : answers[questionIndex];

            return (
              <section
                key={question.id}
                id={`pregunta-${question.id}`}
                tabIndex={-1}
                aria-labelledby={`leyenda-${question.id}`}
                className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
              >
                <fieldset disabled={submitted !== null}>
                  <legend id={`leyenda-${question.id}`} className="w-full">
                    <span className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-800">
                        {String(questionIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[1.04rem] font-extrabold leading-snug text-brand-950">
                        {question.prompt}
                      </span>
                    </span>
                  </legend>

                  <div className="mt-4 space-y-2.5">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = selected === optionIndex;
                      const isCorrectAfter = submitted !== null && optionIndex === question.correctIndex;
                      const isWrongAfter = submitted !== null && isSelected && optionIndex !== question.correctIndex;
                      const inputId = `opcion-${question.id}-${optionIndex}`;

                      return (
                        <label
                          key={optionIndex}
                          htmlFor={inputId}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition",
                            !submitted && isSelected && "border-sea-500 bg-sea-50 ring-1 ring-sea-400",
                            !submitted && !isSelected && "border-line bg-white hover:border-brand-200 hover:bg-brand-50/40",
                            submitted && isCorrectAfter && "border-sea-400 bg-sea-50",
                            submitted && isWrongAfter && "border-rose-300 bg-rose-50",
                            submitted && !isCorrectAfter && !isWrongAfter && "border-line bg-white opacity-75",
                            submitted && "cursor-default",
                          )}
                        >
                          <input
                            id={inputId}
                            type="radio"
                            name={`pregunta-${question.id}`}
                            value={optionIndex}
                            checked={isSelected}
                            onChange={() => chooseAnswer(questionIndex, optionIndex)}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-sea-700"
                          />
                          <span className="flex-1 text-[0.97rem] leading-relaxed text-body">{option.text}</span>
                          {submitted && isCorrectAfter && (
                            <span className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide text-sea-800">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                              Correcta
                            </span>
                          )}
                          {submitted && isWrongAfter && (
                            <span className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide text-rose-700">
                              <X className="h-3.5 w-3.5" aria-hidden="true" />
                              Tu elección
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-4">
                      <p className="text-xs font-extrabold uppercase tracking-wide text-brand-900">
                        {selected === question.correctIndex ? "Respuesta correcta" : "Por qué esta es la respuesta"}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-body">{question.explanation}</p>
                    </div>
                  )}
                </fieldset>
              </section>
            );
          })}
        </div>

        {!submitted && (
          <div className="mt-7 rounded-2xl border border-line bg-white p-5 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h2 ref={quizHeadingRef} tabIndex={-1} className="text-lg font-extrabold text-brand-950">
                Corregí tu evaluación
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Necesitás al menos {quiz.passingScore} % de respuestas correctas. Podés cambiar tus
                respuestas antes de enviar y repetir la evaluación después.
              </p>
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-full shrink-0 sm:mt-0 sm:w-auto">
              Corregir evaluación
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </form>

      <div className="mt-6">
        <Link href={`/cursos/${course.slug}`} className="link-arrow">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a la presentación del curso
        </Link>
      </div>
    </div>
  );
}
