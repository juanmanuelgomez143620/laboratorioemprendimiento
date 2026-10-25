"use client";

import { useEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Info,
  Printer,
  RotateCcw,
  Wrench,
} from "lucide-react";
import {
  diagnosticAreas,
  diagnosticDisclaimer,
  diagnosticQuestions,
} from "@/content/diagnostic";
import { site } from "@/content/site";
import { calculateDiagnostic, isDiagnosticComplete } from "@/lib/diagnostic";
import type { DiagnosticResult } from "@/types/diagnostic";
import { cn, formatLongDate } from "@/lib/utils";

const LETTERS = ["A", "B", "C", "D"];

const kindIcons = {
  curso: BookOpen,
  recurso: FileText,
  herramienta: Wrench,
} as const;

interface SubmittedDiagnostic {
  result: DiagnosticResult;
  completedAt: Date;
}

export function DiagnosticTool() {
  const total = diagnosticQuestions.length;
  const [answers, setAnswers] = useState<Array<number | null>>(() =>
    Array.from({ length: total }, () => null),
  );
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState<SubmittedDiagnostic | null>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const isFirstRender = useRef(true);

  const question = diagnosticQuestions[step];
  const area = diagnosticAreas.find((item) => item.id === question.area);
  const selected = answers[step];

  useEffect(() => {
    if (submitted) {
      resultHeadingRef.current?.focus();
      return;
    }
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    questionHeadingRef.current?.focus();
  }, [step, submitted]);

  function choose(value: number) {
    setAnswers((current) => {
      const next = [...current];
      next[step] = value;
      return next;
    });
    setError("");
  }

  function next() {
    if (selected === null) {
      setError("Elegí una opción para continuar. No hay respuestas correctas o incorrectas.");
      window.setTimeout(() => errorRef.current?.focus(), 0);
      return;
    }

    if (step < total - 1) {
      setStep((current) => current + 1);
      return;
    }

    if (!isDiagnosticComplete(answers)) {
      setError("Falta completar alguna pregunta. Revisá el recorrido antes de ver el resultado.");
      return;
    }

    setSubmitted({
      result: calculateDiagnostic(answers),
      completedAt: new Date(),
    });
  }

  function back() {
    setError("");
    setStep((current) => Math.max(0, current - 1));
  }

  function restart() {
    setAnswers(Array.from({ length: total }, () => null));
    setStep(0);
    setError("");
    setSubmitted(null);
    isFirstRender.current = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <DiagnosticResultView
        result={submitted.result}
        completedAt={submitted.completedAt}
        onRestart={restart}
        headingRef={resultHeadingRef}
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-slate-50 px-5 py-4 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-sea-700">
            {area?.label ?? "Diagnóstico"}
          </p>
          <p className="text-xs font-bold text-muted">
            Pregunta {step + 1} de {total}
          </p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sea-600 to-sea-400 transition-[width] duration-300"
            style={{ width: `${((step + 1) / total) * 100}%` }}
            role="progressbar"
            aria-label="Avance del diagnóstico"
            aria-valuemin={1}
            aria-valuemax={total}
            aria-valuenow={step + 1}
            aria-valuetext={`Pregunta ${step + 1} de ${total}`}
          />
        </div>
      </div>

      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          next();
        }}
        key={question.id}
        className="p-5 sm:p-7"
      >
        <h2
          ref={questionHeadingRef}
          tabIndex={-1}
          className="max-w-2xl text-xl font-extrabold leading-snug text-brand-950 sm:text-2xl"
        >
          {question.prompt}
        </h2>
        {question.help && <p className="mt-2 text-sm text-muted">{question.help}</p>}

        <fieldset className="mt-6">
          <legend className="sr-only">{question.prompt}</legend>
          <div className="grid gap-2.5">
            {question.options.map((option, optionIndex) => {
              const inputId = `diagnostico-${question.id}-${optionIndex}`;
              const active = selected === optionIndex;
              return (
                <label
                  key={inputId}
                  htmlFor={inputId}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition",
                    active
                      ? "border-sea-500 bg-sea-50 ring-1 ring-sea-400"
                      : "border-line bg-white hover:border-brand-200 hover:bg-brand-50/40",
                  )}
                >
                  <input
                    id={inputId}
                    type="radio"
                    name={question.id}
                    value={optionIndex}
                    checked={active}
                    onChange={() => choose(optionIndex)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-sea-700"
                  />
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[11px] font-extrabold",
                      active
                        ? "border-sea-300 bg-white text-sea-800"
                        : "border-slate-200 bg-slate-50 text-muted",
                    )}
                    aria-hidden="true"
                  >
                    {LETTERS[optionIndex]}
                  </span>
                  <span className="text-[0.97rem] leading-relaxed text-body">{option.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {error && (
          <p
            ref={errorRef}
            tabIndex={-1}
            role="alert"
            className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-950"
          >
            {error}
          </p>
        )}

        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className={cn("btn btn-ghost", step === 0 && "invisible")}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Anterior
          </button>
          <button type="submit" className="btn btn-primary sm:min-w-44">
            {step === total - 1 ? "Ver mi diagnóstico" : "Siguiente"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          No hay respuestas correctas ni incorrectas. Tus respuestas no se guardan ni se envían.
        </p>
      </form>
    </div>
  );
}

function DiagnosticResultView({
  result,
  completedAt,
  onRestart,
  headingRef,
}: {
  result: DiagnosticResult;
  completedAt: Date;
  onRestart: () => void;
  headingRef: RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <div>
      <div className="print-only mb-6 border-b border-slate-300 pb-3">
        <p className="text-xs font-bold uppercase tracking-wide">NORMAL 9 IMPULSA · Campus Emprendedor</p>
        <p className="text-[10px]">
          {site.institution.name} · {site.institution.locality}, {site.institution.province}
        </p>
        <p className="mt-1 text-[10px]">Diagnóstico inicial · {formatLongDate(completedAt)}</p>
      </div>

      <section
        className="overflow-hidden rounded-[1.4rem] border border-brand-200 bg-white shadow-card"
        aria-labelledby="diagnostic-result-title"
        aria-live="polite"
      >
        <div className="bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900 p-5 text-white sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sea-300">
            Resultado orientativo
          </p>
          <div className="mt-2 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="diagnostic-result-title"
                ref={headingRef}
                tabIndex={-1}
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                {result.percentage} % · {result.levelLabel}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">{result.summary}</p>
            </div>
            <div className="shrink-0 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wide text-white/60">Promedio de áreas</p>
              <p className="text-2xl font-extrabold text-white">{result.percentage} %</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="mb-5 flex items-start gap-2 rounded-xl border border-brand-100 bg-brand-50/70 p-3.5">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-800" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-body">
              El porcentaje general es un promedio simple entre las cuatro áreas. No es una
              calificación de tu emprendimiento ni una medición de solvencia.
            </p>
          </div>

          <div className="space-y-5">
            {result.areas.map((area) => (
              <section
                key={area.id}
                className="print-avoid-break rounded-2xl border border-line bg-white p-4 sm:p-5"
                aria-labelledby={`area-${area.id}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 id={`area-${area.id}`} className="text-lg font-extrabold text-brand-950">
                      {area.label}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted">{area.description}</p>
                  </div>
                  <span className="badge badge-neutral">{area.levelLabel} · {area.percentage} %</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      area.percentage < 40
                        ? "bg-amber-500"
                        : area.percentage < 65
                          ? "bg-brand-500"
                          : "bg-sea-500",
                    )}
                    style={{ width: `${area.percentage}%` }}
                    role="progressbar"
                    aria-label={`${area.label}: ${area.percentage} por ciento`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={area.percentage}
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-body">{area.advice}</p>

                <div className="mt-4 border-t border-line pt-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted">
                    Para seguir avanzando
                  </p>
                  <ul className="mt-2 divide-y divide-line/70">
                    {area.recommendations.map((recommendation) => {
                      const Icon = kindIcons[recommendation.kind];
                      const content = (
                        <>
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-800">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold text-brand-950">{recommendation.label}</span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                              {recommendation.description}
                            </span>
                          </span>
                          {recommendation.external ? (
                            <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                          ) : (
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                          )}
                        </>
                      );

                      return (
                        <li key={recommendation.label}>
                          {recommendation.href ? (
                            recommendation.external ? (
                              <a
                                href={recommendation.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 rounded-lg py-2.5 transition hover:bg-slate-50"
                              >
                                {content}
                                <span className="sr-only">(abre en una pestaña nueva)</span>
                              </a>
                            ) : (
                              <Link
                                href={recommendation.href}
                                className="flex items-start gap-3 rounded-lg py-2.5 transition hover:bg-slate-50"
                              >
                                {content}
                              </Link>
                            )
                          ) : (
                            <div className="flex items-start gap-3 py-2.5">{content}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-amber-950">Alcance del diagnóstico</p>
            <p className="mt-1 text-xs leading-relaxed text-amber-950">{diagnosticDisclaimer}</p>
          </div>

          <div className="no-print mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
            <button type="button" onClick={() => window.print()} className="btn btn-primary">
              <Printer className="h-4 w-4" aria-hidden="true" />
              Imprimir o guardar PDF
            </button>
            <button type="button" onClick={onRestart} className="btn btn-secondary">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Volver a empezar
            </button>
            <Link href="/cursos" className="btn btn-ghost">
              Explorar cursos
            </Link>
          </div>

          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
            Este resultado se generó en esta visita. Para conservarlo, usá la opción de impresión o
            guardá la página como PDF desde tu navegador.
          </p>
        </div>
      </section>

      <div className="no-print print-hidden mt-4 text-center">
        <Link href="/herramientas" className="link-arrow">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a herramientas
        </Link>
      </div>
    </div>
  );
}


