import type { ContentBlock } from "@/types/course";
import { AlertTriangle, Check, Info, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
        }
        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

const calloutStyles = {
  tip: {
    wrapper: "border-sea-200 bg-sea-50/80",
    icon: "bg-white text-sea-700 ring-sea-200",
    title: "text-sea-900",
    Icon: Lightbulb,
  },
  info: {
    wrapper: "border-brand-200 bg-brand-50/80",
    icon: "bg-white text-brand-700 ring-brand-200",
    title: "text-brand-950",
    Icon: Info,
  },
  warning: {
    wrapper: "border-amber-200 bg-amber-50/90",
    icon: "bg-white text-amber-800 ring-amber-200",
    title: "text-amber-950",
    Icon: AlertTriangle,
  },
} as const;

interface ContentBlocksProps {
  blocks: ContentBlock[];
  variant?: "lesson" | "resource";
}

export function ContentBlocks({ blocks, variant = "lesson" }: ContentBlocksProps) {
  return (
    <div className={cn(variant === "lesson" ? "space-y-6" : "space-y-6 print:space-y-4")}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "paragraph":
            return (
              <p key={key} className={variant === "lesson" ? "text-[1.04rem] leading-[1.82]" : "leading-7"}>
                <RichText text={block.text} />
              </p>
            );

          case "heading":
            if (block.level === 3) {
              return (
                <h3 key={key} className="pt-2 text-xl font-extrabold text-brand-950 sm:text-[1.35rem]">
                  {block.text}
                </h3>
              );
            }
            return (
              <h2 key={key} className="pt-3 text-2xl font-extrabold text-brand-950 sm:text-[1.7rem]">
                {block.text}
              </h2>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={key}
                className={cn(
                  "space-y-2 pl-6",
                  variant === "lesson" && "text-[1.04rem] leading-[1.75]",
                  block.ordered ? "list-decimal" : "list-disc",
                  "marker:font-bold marker:text-sea-600",
                )}
              >
                {block.items.map((item, itemIndex) => (
                  <li key={`${key}-${itemIndex}`} className="pl-1">
                    <RichText text={item} />
                  </li>
                ))}
              </ListTag>
            );
          }

          case "callout": {
            const style = calloutStyles[block.variant];
            const Icon = style.Icon;
            return (
              <aside key={key} className={cn("rounded-2xl border p-5", style.wrapper)}>
                <div className="flex gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1",
                      style.icon,
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className={cn("text-base font-extrabold", style.title)}>{block.title}</h3>
                    <p className="mt-1.5 text-[0.96rem] leading-relaxed text-body">
                      <RichText text={block.text} />
                    </p>
                  </div>
                </div>
              </aside>
            );
          }

          case "example":
            return (
              <figure key={key} className="rounded-2xl border border-line bg-[#fbfdfe] p-5 sm:p-6">
                <figcaption className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-sea">Ejemplo</span>
                  <span className="text-base font-extrabold text-brand-950">{block.title}</span>
                </figcaption>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-body">
                  <RichText text={block.text} />
                </p>
                {block.disclaimer && (
                  <p className="mt-4 border-t border-dashed border-line pt-3 text-xs font-medium italic text-muted">
                    {block.disclaimer}
                  </p>
                )}
              </figure>
            );

          case "activity":
            return (
              <section
                key={key}
                className="overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-[0_18px_35px_-30px_rgba(7,31,67,0.35)] print-avoid-break"
              >
                <div className="flex flex-wrap items-center gap-2 border-b border-brand-100 bg-brand-50 px-5 py-3.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-900 text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                    Actividad práctica
                  </h3>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-xl font-extrabold text-brand-950">{block.title}</h4>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-body">{block.intro}</p>
                  <ol className="mt-4 space-y-2.5">
                    {block.steps.map((step, stepIndex) => (
                      <li key={`${key}-${stepIndex}`} className="flex gap-3 text-[0.96rem] leading-relaxed">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea-100 text-xs font-extrabold text-sea-800">
                          {stepIndex + 1}
                        </span>
                        <span className="text-body">
                          <RichText text={step} />
                        </span>
                      </li>
                    ))}
                  </ol>
                  {block.closing && (
                    <p className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-muted">
                      <RichText text={block.closing} />
                    </p>
                  )}
                </div>
              </section>
            );

          case "table":
            return (
              <div key={key} className="print-avoid-break">
                <div className="overflow-x-auto rounded-2xl border border-line">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                    {block.caption && (
                      <caption className="border-b border-line bg-slate-50 px-4 py-3 text-left text-xs font-extrabold uppercase tracking-wide text-muted">
                        {block.caption}
                      </caption>
                    )}
                    <thead>
                      <tr className="bg-slate-50">
                        {block.headers.map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="border-b border-line px-4 py-3 text-xs font-extrabold uppercase tracking-wide text-brand-900"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={`${key}-row-${rowIndex}`} className="even:bg-slate-50/50">
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${key}-cell-${rowIndex}-${cellIndex}`}
                              className="border-b border-line/80 px-4 py-3 align-top leading-relaxed text-body last:border-r-0"
                            >
                              <RichText text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          case "checklist":
            return (
              <section key={key} className="rounded-2xl border border-line bg-white p-5 print-avoid-break">
                {block.title && (
                  <h3 className="mb-3 text-base font-extrabold text-brand-950">{block.title}</h3>
                )}
                <ul className="space-y-2.5">
                  {block.items.map((item, itemIndex) => (
                    <li key={`${key}-${itemIndex}`} className="flex gap-3 text-[0.97rem] leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 rounded-[4px] border-2 border-sea-600 bg-white"
                      />
                      <span className="text-body">
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );

          case "fields":
            return (
              <section key={key} className="print-avoid-break">
                {block.title && (
                  <h3 className="mb-4 text-xl font-extrabold text-brand-950">{block.title}</h3>
                )}
                <div className="space-y-4">
                  {block.items.map((field, fieldIndex) => (
                    <div key={`${key}-${fieldIndex}`}>
                      <p className="text-sm font-bold text-brand-950">{field.label}</p>
                      {field.hint && <p className="mt-0.5 text-xs text-muted">{field.hint}</p>}
                      <div className="mt-2 space-y-3">
                        {Array.from({ length: field.lines ?? 1 }).map((_, lineIndex) => (
                          <div key={lineIndex} className="h-7 border-b border-dashed border-slate-300" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

          case "quote":
            return (
              <blockquote
                key={key}
                className="rounded-r-2xl border-l-4 border-sea-500 bg-sea-50/60 px-5 py-4"
              >
                <p className="text-[1.02rem] font-semibold leading-relaxed text-brand-950">
                  <RichText text={block.text} />
                </p>
                {block.source && <footer className="mt-2 text-xs text-muted">— {block.source}</footer>}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
