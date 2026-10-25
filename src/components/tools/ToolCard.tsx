import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Calculator,
  Compass,
  ExternalLink,
  Palette,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Tool } from "@/types/resource";
import { cn } from "@/lib/utils";

const toolIcons: Record<Tool["icon"], LucideIcon> = {
  calculator: Calculator,
  compass: Compass,
  briefcase: Briefcase,
  receipt: Receipt,
  palette: Palette,
  catalog: BookOpen,
  shield: ShieldCheck,
};

/** Solo muestra un dominio cuando el enlace es externo y válido. */
function getExternalDomain(href?: string): string | null {
  if (!href) return null;
  try {
    const url = new URL(href);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export function ToolCard({ tool, featured = false }: { tool: Tool; featured?: boolean }) {
  const Icon = toolIcons[tool.icon];
  const isAvailable = tool.status === "disponible";
  const domain = getExternalDomain(tool.href);

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-white p-5 shadow-card sm:p-6",
        isAvailable ? "border-line transition hover:border-brand-200 hover:shadow-lift" : "border-dashed border-slate-300 bg-slate-50/70",
        featured && "md:p-7",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl ring-1",
            isAvailable
              ? tool.origin === "externo"
                ? "bg-cyan-50 text-cyan-900 ring-cyan-100"
                : "bg-brand-50 text-brand-800 ring-brand-100"
              : "bg-white text-slate-500 ring-slate-200",
          )}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {isAvailable ? (
          <span className={cn("badge", tool.origin === "externo" ? "badge-neutral" : "badge-sea")}>
            {tool.origin === "externo" ? "Herramienta externa" : "Del campus"}
          </span>
        ) : (
          <span className="badge badge-neutral">Proyecto previsto</span>
        )}
      </div>

      <p className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-sea-700">
        {tool.category}
      </p>
      <h3 className={cn("mt-1.5 text-xl font-extrabold leading-snug", isAvailable ? "text-brand-950" : "text-slate-700")}>
        {tool.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{tool.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Temas de la herramienta">
        {tool.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-200/70"
          >
            {tag}
          </li>
        ))}
      </ul>

      {isAvailable ? (
        <div className="mt-auto border-t border-line pt-4">
          {tool.origin === "externo" ? (
            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm w-full sm:w-auto"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {tool.linkLabel ?? "Abrir herramienta"}
              <span className="sr-only">(abre en una pestaña nueva)</span>
            </a>
          ) : (
            <Link href={tool.href ?? "/herramientas"} className="btn btn-sea btn-sm w-full sm:w-auto">
              {tool.linkLabel ?? "Abrir herramienta"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
          {domain && (
            <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-muted">
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              {domain}
            </p>
          )}
          {tool.ownerNote && (
            <p className="mt-2.5 text-[11px] leading-relaxed text-muted">{tool.ownerNote}</p>
          )}
        </div>
      ) : (
        <div className="mt-auto border-t border-slate-200 pt-4">
          <p className="text-xs font-bold text-slate-500">En etapa de diseño · todavía no disponible</p>
          {tool.ownerNote && (
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{tool.ownerNote}</p>
          )}
        </div>
      )}
    </article>
  );
}
