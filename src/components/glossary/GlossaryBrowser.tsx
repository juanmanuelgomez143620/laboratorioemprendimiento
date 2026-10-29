"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Search, X } from "lucide-react";
import type { GlossaryCategory, GlossaryTerm } from "@/content/glossary";
import { cn } from "@/lib/utils";

interface GlossaryBrowserProps {
  terms: GlossaryTerm[];
  categories: GlossaryCategory[];
  courses: { slug: string; title: string }[];
}

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("es-AR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function GlossaryBrowser({ terms, categories, courses }: GlossaryBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("todos");

  const courseNames = useMemo(
    () => new Map(courses.map((course) => [course.slug, course.title])),
    [courses],
  );
  const categoryNames = useMemo(
    () => new Map(categories.map((item) => [item.id, item.title])),
    [categories],
  );
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const term of terms) {
      counts.set(term.category, (counts.get(term.category) ?? 0) + 1);
    }
    return counts;
  }, [terms]);

  const filteredTerms = useMemo(() => {
    const needle = normalizeText(query.trim());

    return terms
      .filter((term) => category === "todos" || term.category === category)
      .filter((term) => {
        if (!needle) return true;
        const searchable = normalizeText(
          [term.term, term.definition, term.example ?? "", categoryNames.get(term.category) ?? ""].join(
            " ",
          ),
        );
        return searchable.includes(needle);
      })
      .sort((a, b) => a.term.localeCompare(b.term, "es-AR"));
  }, [terms, query, category, categoryNames]);

  function clearFilters() {
    setQuery("");
    setCategory("todos");
  }

  return (
    <div>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
        <label htmlFor="glossary-search" className="text-sm font-extrabold text-brand-950">
          Buscar una palabra
        </label>
        <div className="relative mt-2">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ejemplo: margen, caja, posicionamiento…"
            className="input-base pl-9"
            autoComplete="off"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
          <button
            type="button"
            onClick={() => setCategory("todos")}
            aria-pressed={category === "todos"}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-bold transition",
              category === "todos"
                ? "border-brand-900 bg-brand-900 text-white"
                : "border-line bg-white text-body hover:border-brand-200 hover:bg-brand-50",
            )}
          >
            Todos ({terms.length})
          </button>
          {categories.map((item) => {
            const active = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-bold transition",
                  active
                    ? "border-brand-900 bg-brand-900 text-white"
                    : "border-line bg-white text-body hover:border-brand-200 hover:bg-brand-50",
                )}
              >
                {item.title} ({categoryCounts.get(item.id) ?? 0})
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-muted">
          <p aria-live="polite">
            Mostrando {filteredTerms.length} de {terms.length} términos.
          </p>
          {(query || category !== "todos") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 rounded font-bold text-brand-800 underline underline-offset-4 hover:text-sea-800"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {filteredTerms.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredTerms.map((term) => (
            <article
              key={term.id}
              id={term.id}
              className="scroll-mt-28 rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-sea-700">
                {categoryNames.get(term.category)}
              </p>
              <h3 className="mt-1.5 text-lg font-extrabold text-brand-950">{term.term}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{term.definition}</p>

              {term.example && (
                <p className="mt-3 rounded-xl border border-brand-100 bg-brand-50/60 px-3 py-2.5 text-xs leading-relaxed text-brand-900">
                  <span className="font-extrabold">Ejemplo ilustrativo. </span>
                  {term.example.replace(/^Ejemplo ilustrativo:\s*/i, "")}
                </p>
              )}

              {term.relatedCourseSlugs && term.relatedCourseSlugs.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-3">
                  {term.relatedCourseSlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/cursos/${slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-800 hover:text-sea-700 hover:underline"
                    >
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                      {courseNames.get(slug) ?? "Ver curso"}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center">
          <p className="text-base font-extrabold text-brand-950">
            No encontramos términos con esos filtros.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Probá con otra palabra o volvé a ver todas las categorías.
          </p>
          <button type="button" onClick={clearFilters} className="btn btn-secondary btn-sm mt-4">
            Ver todos los términos
          </button>
        </div>
      )}
    </div>
  );
}
