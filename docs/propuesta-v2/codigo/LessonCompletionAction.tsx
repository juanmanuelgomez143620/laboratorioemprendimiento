"use client";

import { useRef, useState } from "react";

export type CompletionResult =
  | { ok: true; completed: boolean; durability: "persistent" | "memory" }
  | { ok: false; message: string };

export function LessonCompletionAction({ completed, ready, commit }: {
  completed: boolean;
  ready: boolean;
  // El adaptador actualiza el proveedor y confirma el resultado real de la escritura.
  commit: (next: boolean) => Promise<CompletionResult>;
}) {
  const lock = useRef(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function toggle() {
    if (!ready || lock.current) return;
    lock.current = true;
    setBusy(true);
    setMessage("");
    setError("");
    try {
      const result = await commit(!completed);
      if (!result.ok) { setError(result.message); return; }
      const action = result.completed ? "Lección completada." : "Lección marcada como pendiente.";
      setMessage(result.durability === "persistent"
        ? `${action} El cambio se guardó en este navegador.`
        : `${action} El cambio sólo está disponible en esta sesión; no se pudo guardar.`);
    } catch {
      setError("No pudimos confirmar el cambio. Revisá el estado de la lección antes de reintentar.");
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }

  return <div className="rounded-xl border border-line bg-white p-5">
    <button type="button" aria-disabled={!ready || busy}
      onClick={() => void toggle()} className="btn btn-primary aria-disabled:opacity-60">
      {busy ? "Aplicando cambio…" : completed ? "Desmarcar lección" : "Marcar lección como completada"}
    </button>
    <p className="mt-3 text-sm text-muted">
      {ready ? `Estado: ${completed ? "completada" : "pendiente"}.` : "Leyendo el progreso…"}
      {" "}Podés deshacer esta acción con el mismo botón.
    </p>
    <p role="status" aria-atomic="true" className="mt-2 text-sm text-body">{message}</p>
    <p role="alert" className="mt-2 text-sm text-brand-950">{error}</p>
  </div>;
}
