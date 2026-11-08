import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
}

export function Breadcrumbs({ items, className, dark = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Migas de pan" className={cn("text-sm text-muted", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link className={cn("rounded font-medium hover:underline", dark ? "hover:text-white" : "hover:text-brand-800")} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? cn("font-semibold", dark ? "text-white" : "text-brand-950") : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  tone?: "light" | "dark";
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  meta,
  breadcrumbs,
  tone = "light",
}: PageHeaderProps) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        dark
          ? "print-invert border-white/10 bg-brand-950 text-white"
          : "border-line bg-white",
      )}
    >
      {dark ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_5%,rgba(20,180,155,0.25),transparent_28rem),radial-gradient(circle_at_5%_100%,rgba(46,130,242,0.2),transparent_25rem)]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_88%_0%,rgba(100,230,203,0.14),transparent_24rem)]"
        />
      )}
      <div className="container-page relative py-8 sm:py-10 lg:py-12">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className={cn("mb-6", dark && "text-white/65")} dark={dark} />}
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className={cn("eyebrow", dark && "eyebrow-on-dark")}>{eyebrow}</p>
            <h1
              className={cn(
                "mt-3 text-[clamp(2.1rem,4.6vw,3.55rem)]",
                dark ? "text-white" : "text-brand-950",
              )}
            >
              {title}
            </h1>
            {description && (
              <div
                className={cn(
                  "mt-4 max-w-2xl text-[1.02rem] leading-relaxed sm:text-lg",
                  dark ? "text-white/75" : "text-body",
                )}
              >
                {description}
              </div>
            )}
            {meta && <div className="mt-5 flex flex-wrap items-center gap-2.5">{meta}</div>}
          </div>
          {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
