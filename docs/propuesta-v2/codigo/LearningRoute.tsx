import { useId } from "react";
import Link from "next/link";

export interface RouteStep {
  id: string;
  title: string;
  href: `/${string}`;
  status: "completed" | "current" | "available";
}

const labels: Record<RouteStep["status"], string> = {
  completed: "Completado", current: "Próximo paso sugerido", available: "Disponible",
};

export function LearningRoute({ steps, loading = false, error }: {
  steps: readonly RouteStep[];
  loading?: boolean;
  error?: string;
}) {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} aria-busy={loading}
      className="rounded-2xl border border-line bg-white p-6">
      <h2 id={titleId} className="text-xl font-extrabold text-brand-950">Tu recorrido</h2>
      <p className="mt-2 text-sm text-body">Podés abrir cualquier paso y avanzar a tu ritmo.</p>
      {loading ? <p role="status" className="mt-4">Leyendo tu recorrido…</p>
        : error ? <p role="alert" className="mt-4 text-body">{error}</p>
        : steps.length === 0 ? <p className="mt-4 text-body">
          Todavía no elegiste un recorrido. <Link href="/cursos" prefetch={false} className="underline">Ver cursos</Link>
        </p> : <ol className="mt-5 space-y-3">
          {steps.map((step, index) => <li key={step.id}>
            <Link href={step.href} prefetch={false} aria-current={step.status === "current" ? "step" : undefined}
              className={`flex min-h-14 items-start gap-3 rounded-xl border p-4 hover:bg-brand-50 ${
                step.status === "current" ? "border-brand-700 bg-brand-50" : "border-line"
              }`}>
              <span aria-hidden="true" className="font-bold text-sea-800">{index + 1}.</span>
              <span><span className="block font-bold text-brand-950">{step.title}</span>
                <span className="block text-sm text-body">{labels[step.status]}</span>
              </span>
            </Link>
          </li>)}
        </ol>}
    </section>
  );
}
