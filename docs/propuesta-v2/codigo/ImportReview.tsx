"use client";

import { useId, useRef, useState, type ChangeEvent } from "react";

export interface ImportSummary {
  courses: number;
  lessons: number;
  attempts: number;
  notices: readonly string[];
}
export type ValidationResult<T> =
  | { ok: true; candidate: T; baseRevision: string; summary: ImportSummary }
  | { ok: false; message: string };
export interface ImportAdapter<T> {
  // Valida y normaliza datos desconocidos; nunca escribe ni altera el progreso.
  validate: (raw: unknown) => Promise<ValidationResult<T>>;
  // Revalida, compara revisión y escribe. Un fallo no reemplaza el progreso actual.
  commit: (candidate: T, expectedRevision: string) => Promise<
    { ok: true } | { ok: false; reason: "conflict" | "storage" | "invalid"; message: string }
  >;
}

const MAX_BYTES = 2 * 1024 * 1024;

export function ImportReview<T>({ adapter }: { adapter: ImportAdapter<T> }) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const review = useRef<HTMLHeadingElement>(null);
  const lock = useRef(false);
  const [busy, setBusy] = useState(false);
  const [pending, setPending] = useState<Extract<ValidationResult<T>, { ok: true }> | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function readFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (!file || lock.current) return;
    lock.current = true;
    setBusy(true);
    setPending(null);
    setMessage("Revisando el archivo. Tu progreso todavía no cambia.");
    setError("");
    try {
      if (file.size > MAX_BYTES) throw new Error("El archivo supera el límite de 2 MiB.");
      const raw: unknown = JSON.parse(await file.text());
      const result = await adapter.validate(raw);
      if (!result.ok) { setError(result.message); setMessage(""); return; }
      setPending(result);
      setMessage("Archivo revisado. Leé el resumen antes de confirmar.");
      // El encabezado existe siempre: no dependemos de un timeout para mover el foco.
      review.current?.focus();
    } catch (cause) {
      setMessage("");
      setError(cause instanceof SyntaxError ? "El archivo no contiene JSON válido."
        : cause instanceof Error ? cause.message : "No pudimos revisar este archivo.");
    } finally {
      lock.current = false;
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  }

  async function confirm() {
    if (!pending || lock.current) return;
    lock.current = true;
    setBusy(true);
    setError("");
    setMessage("Guardando el progreso revisado…");
    try {
      const result = await adapter.commit(pending.candidate, pending.baseRevision);
      if (!result.ok) {
        setError(result.message);
        setMessage("");
        if (result.reason === "conflict" || result.reason === "invalid") {
          setPending(null);
          input.current?.focus();
        }
        return;
      }
      setPending(null);
      setMessage("El progreso importado se guardó en este navegador.");
      input.current?.focus();
    } catch {
      setMessage("");
      setError("No se pudo confirmar la importación. Revisá tu progreso antes de reintentar.");
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }

  return <section aria-labelledby={`${id}-title`} className="space-y-4 rounded-2xl border border-line bg-white p-6">
    <h2 id={`${id}-title`} className="text-xl font-extrabold text-brand-950">Importar una copia</h2>
    <p className="text-body">Confirmar reemplaza el progreso actual. Exportá una copia antes de continuar.</p>
    <label htmlFor={`${id}-file`} className="block font-bold text-brand-950">Archivo JSON de progreso (hasta 2 MiB)</label>
    <input ref={input} id={`${id}-file`} type="file" accept=".json,application/json"
      aria-disabled={busy} onClick={event => { if (lock.current) event.preventDefault(); }}
      onChange={event => void readFile(event)} className="input-base" />
    <h3 ref={review} tabIndex={-1} className="font-bold text-brand-950">Revisión de la copia</h3>
    {pending ? <div className="space-y-3">
      <p>{pending.summary.courses} cursos · {pending.summary.lessons} lecciones completadas · {pending.summary.attempts} intentos.</p>
      <ul className="list-disc pl-5 text-sm text-body">
        {pending.summary.notices.map((notice, index) => <li key={index}>{notice}</li>)}
      </ul>
      <div className="flex flex-wrap gap-3">
        <button type="button" aria-disabled={busy} onClick={() => void confirm()}
          className="btn btn-primary">{busy ? "Guardando…" : "Confirmar reemplazo"}</button>
        <button type="button" aria-disabled={busy} className="btn btn-secondary" onClick={() => {
          if (lock.current) return;
          setPending(null); setError(""); setMessage("Importación cancelada. Tu progreso no cambió.");
          input.current?.focus();
        }}>Cancelar</button>
      </div>
    </div> : <p className="text-sm text-muted">Elegí un archivo para ver qué contiene.</p>}
    <p role="status" aria-atomic="true" className="text-sm text-body">{message}</p>
    <p role="alert" className="text-sm text-brand-950">{error}</p>
  </section>;
}
