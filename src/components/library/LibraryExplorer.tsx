"use client";

import { useMemo, useRef, useState } from "react";
import { Filter, RotateCcw, Search, SearchX } from "lucide-react";
import type { ResourceSummary } from "@/lib/presentation";
import type { ResourceCategory, ResourceType } from "@/types/resource";
import { ResourceCard } from "@/components/library/ResourceCard";
import { normalizeText } from "@/lib/utils";

const resourceTypes: ResourceType[] = [
  "Plantilla",
  "Guía",
  "Ficha",
  "Modelo",
  "Lista de verificación",
];

interface LibraryExplorerProps {
  resources: ResourceSummary[];
  categories: ResourceCategory[];
}

export function LibraryExplorer({ resources, categories }: LibraryExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ResourceCategory["id"] | "todas">("todas");
  const [type, setType] = useState<ResourceType | "todos">("todos");
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeText(query);
    return resources.filter((resource) => {
      if (category !== "todas" && resource.category !== category) return false;
      if (type !== "todos" && resource.type !== type) return false;
      if (!normalizedQuery) return true;

      const categoryLabel = categories.find((item) => item.id === resource.category)?.label ?? "";
      const haystack = normalizeText(
        [
          resource.title,
          resource.description,
          resource.useCase,
          resource.type,
          categoryLabel,
          ...resource.tags,
        ].join(" "),
      );
      return haystack.includes(normalizedQuery);
    });
  }, [resources, categories, query, category, type]);

  const hasFilters = query.trim() !== "" || category !== "todas" || type !== "todos";

  function clearFilters() {
    setQuery("");
    setCategory("todas");
    setType("todos");
    searchRef.current?.focus();
  }

  return (
    <div>
      <div className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
        <div role="search" aria-label="Buscar en la biblioteca">
          <label htmlFor="library-search" className="text-sm font-extrabold text-brand-950">
            Buscar por título, tema o etiqueta
          </label>
          <div className="relative mt-2">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              ref={searchRef}
              id="library-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="input-base pl-10 pr-10"
              placeholder="Ej.: costos, fotografía, presupuesto, WhatsApp"
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  searchRef.current?.focus();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs font-bold text-muted hover:bg-slate-100 hover:text-brand-900"
                aria-label="Borrar el texto de búsqueda"
              >
                Borrar
              </button>
            )}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p id="category-filter-label" className="text-xs font-extrabold uppercase tracking-[0.1em] text-muted">
              Categoría
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="type-filter" className="sr-only">
                Filtrar por tipo de recurso
              </label>
              <Filter className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              <select
                id="type-filter"
                value={type}
                onChange={(event) => setType(event.target.value as ResourceType | "todos")}
                className="min-h-9 rounded-lg border border-line bg-white px-2.5 text-xs font-bold text-brand-950"
              >
                <option value="todos">Todos los tipos</option>
                {resourceTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            className="mt-2 flex flex-wrap gap-2"
            role="group"
            aria-labelledby="category-filter-label"
          >
            <button
              type="button"
              onClick={() => setCategory("todas")}
              aria-pressed={category === "todas"}
              className={
                category === "todas"
                  ? "rounded-full border border-brand-900 bg-brand-900 px-3 py-1.5 text-xs font-bold text-white"
                  : "rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-body hover:border-brand-200 hover:bg-brand-50"
              }
            >
              Todas
            </button>
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={category === item.id}
                className={
                  category === item.id
                    ? "rounded-full border border-brand-900 bg-brand-900 px-3 py-1.5 text-xs font-bold text-white"
                    : "rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-body hover:border-brand-200 hover:bg-brand-50"
                }
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
          <p className="text-xs font-semibold text-muted" role="status" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "recurso encontrado" : "recursos encontrados"}
            {hasFilters ? " con los filtros aplicados" : " en la biblioteca"}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-bold text-brand-800 hover:bg-brand-50"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="mt-7 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <SearchX className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-xl font-extrabold text-brand-950">No encontramos recursos con esos filtros</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            Probá con otra palabra, revisá la ortografía o quitá los filtros para ver todos los
            materiales disponibles.
          </p>
          <button type="button" onClick={clearFilters} className="btn btn-secondary mt-5">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Ver todos los recursos
          </button>
        </div>
      )}
    </div>
  );
}
