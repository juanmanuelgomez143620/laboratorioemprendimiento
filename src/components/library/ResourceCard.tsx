import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  Download,
  FolderOpen,
  Laptop,
  Palette,
  type LucideIcon,
} from "lucide-react";
import type { ResourceSummary } from "@/lib/presentation";
import type { ResourceCategoryId } from "@/types/resource";
import { getResourceCategory } from "@/content/resource-categories";
import { cn } from "@/lib/utils";

const categoryIcons: Record<ResourceCategoryId, LucideIcon> = {
  administracion: FolderOpen,
  costos: Calculator,
  marketing: Palette,
  herramientas: Laptop,
  planificacion: ClipboardList,
};

const categoryTints: Record<ResourceCategoryId, string> = {
  administracion: "bg-brand-50 text-brand-800 ring-brand-100",
  costos: "bg-sea-50 text-sea-800 ring-sea-100",
  marketing: "bg-cyan-50 text-cyan-900 ring-cyan-100",
  herramientas: "bg-slate-100 text-slate-800 ring-slate-200",
  planificacion: "bg-brand-100/70 text-brand-900 ring-brand-200",
};

export function ResourceCard({ resource }: { resource: ResourceSummary }) {
  const category = getResourceCategory(resource.category);
  const Icon = categoryIcons[resource.category];
  const formatLabel = resource.download
    ? `${resource.type} · ${resource.download.fileType}`
    : `${resource.type} · imprimible`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:border-brand-200 hover:shadow-lift sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl ring-1",
            categoryTints[resource.category],
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="badge badge-neutral">{formatLabel}</span>
      </div>

      <p className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-sea-700">
        {category.label}
      </p>
      <h3 className="mt-1.5 text-lg font-extrabold leading-snug text-brand-950">
        <Link
          href={`/biblioteca/${resource.slug}`}
          className="rounded transition hover:text-brand-800 hover:underline hover:decoration-brand-300 hover:underline-offset-4"
        >
          {resource.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{resource.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Etiquetas">
        {resource.tags.slice(0, 4).map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-200/70"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
        <Link href={`/biblioteca/${resource.slug}`} className="btn btn-secondary btn-sm">
          Abrir recurso
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        {resource.download && (
          <a
            href={resource.download.href}
            download
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-bold text-brand-800 transition hover:bg-brand-50 hover:text-brand-950"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            {resource.download.label}
          </a>
        )}
      </div>
    </article>
  );
}
