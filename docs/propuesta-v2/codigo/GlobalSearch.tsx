"use client";

import { useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { normalizeText } from "@/lib/utils";

export type SearchKind = "course" | "lesson" | "resource" | "term" | "faq";
export interface SearchItem {
  id: string;
  kind: SearchKind;
  title: string;
  summary: string;
  href: `/${string}`;
  tags: readonly string[];
}
export type SearchIndexState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; items: readonly SearchItem[] };
const kinds: Record<SearchKind, string> = {
  course: "Cursos", lesson: "Lecciones", resource: "Recursos", term: "Glosario", faq: "Preguntas frecuentes",
};

export function GlobalSearch({ index, onRetry }: {
  index: SearchIndexState;
  onRetry?: () => void;
}) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<SearchKind | "all">("all");
  const normalizedIndex = useMemo(() => index.status === "ready"
    ? index.items.map(item => ({ item, text: normalizeText(
      `${item.title} ${item.summary} ${item.tags.join(" ")}`,
    ) })) : [], [index]);
  const terms = normalizeText(query).split(/\s+/).filter(Boolean);
  const matches = normalizedIndex.filter(({ item, text }) =>
    (kind === "all" || item.kind === kind) && terms.every(term => text.includes(term)));

  function clear() {
    setQuery("");
    setKind("all");
    input.current?.focus();
  }

  return <section aria-labelledby={`${id}-title`} className="space-y-5">
    <h2 id={`${id}-title`} className="text-2xl font-extrabold text-brand-950">Buscar en el campus</h2>
    <form role="search" aria-label="Contenido del campus" onSubmit={event => event.preventDefault()}
      className="grid gap-4 rounded-2xl border border-line bg-white p-5 sm:grid-cols-3">
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-query`} className="font-bold text-brand-950">Qué querés aprender</label>
        <input id={`${id}-query`} ref={input} type="search" value={query} maxLength={160}
          onChange={event => setQuery(event.target.value)} className="input-base mt-2"
          aria-describedby={`${id}-hint`} placeholder="Por ejemplo: costos o precio" />
        <p id={`${id}-hint`} className="mt-2 text-sm text-muted">Los acentos no cambian los resultados.</p>
      </div>
      <div>
        <label htmlFor={`${id}-kind`} className="font-bold text-brand-950">Tipo de contenido</label>
        <select id={`${id}-kind`} value={kind} className="input-base mt-2"
          onChange={event => {
            const value = event.target.value;
            if (value === "all" || Object.hasOwn(kinds, value)) setKind(value as SearchKind | "all");
          }}>
          <option value="all">Todo el contenido</option>
          {Object.entries(kinds).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </div>
      <button type="button" onClick={clear} className="btn btn-secondary w-fit">Limpiar búsqueda</button>
    </form>
    <div aria-busy={index.status === "loading"}>
      <p role="status" aria-atomic="true" className="text-sm text-body">
        {index.status === "loading" ? "Cargando el índice del campus…"
          : index.status === "ready" ? `${matches.length} resultados.` : ""}
      </p>
      {index.status === "error" && <div className="mt-3">
        <p role="alert">{index.message}</p>
        {onRetry && <button type="button" onClick={onRetry} className="btn btn-secondary mt-3">Reintentar</button>}
      </div>}
      {index.status === "ready" && matches.length === 0 && <p className="mt-3 text-body">
        Probá una palabra más general o elegí «Todo el contenido». También podés <Link href="/cursos" prefetch={false} className="underline">explorar los cursos</Link>.
      </p>}
      {index.status === "ready" && <ul className="mt-4 space-y-3">
        {matches.map(({ item }) => <li key={item.id} className="rounded-xl border border-line bg-white p-5">
          <p className="text-sm text-sea-800">{kinds[item.kind]}</p>
          <h3 className="mt-1 font-bold text-brand-950"><Link href={item.href} prefetch={false} className="underline underline-offset-4">{item.title}</Link></h3>
          <p className="mt-2 text-body">{item.summary}</p>
        </li>)}
      </ul>}
    </div>
  </section>;
}
