import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  Info,
  Lightbulb,
  Printer,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { getResourceBySlug, resources } from "@/content/resources";
import { getResourceCategory } from "@/content/resource-categories";
import { getCourseBySlug } from "@/content/courses";
import { site } from "@/content/site";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) return { title: "Recurso no encontrado" };

  return {
    title: resource.title,
    description: resource.description,
    openGraph: {
      title: `${resource.title} · Biblioteca Campus Emprendedor`,
      description: resource.description,
      type: "article",
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) notFound();

  const category = getResourceCategory(resource.category);
  const relatedCourses = (resource.relatedCourseSlugs ?? [])
    .map((courseSlug) => getCourseBySlug(courseSlug))
    .filter((course) => course !== undefined);

  return (
    <>
      <PageHeader
        eyebrow={`${category.label} · ${resource.type}`}
        title={resource.title}
        description={resource.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Biblioteca", href: "/biblioteca" },
          { label: resource.title },
        ]}
        actions={
          <>
            {resource.download && (
              <a href={resource.download.href} download className="btn btn-primary">
                <Download className="h-4 w-4" aria-hidden="true" />
                {resource.download.label}
              </a>
            )}
            <PrintButton
              label={resource.download ? "Imprimir contenido" : "Imprimir o guardar PDF"}
              variant={resource.download ? "secondary" : "primary"}
            />
          </>
        }
        meta={
          <>
            <span className="badge badge-brand">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {resource.type}
            </span>
            <span className="badge badge-neutral">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin registro
            </span>
            {resource.download ? (
              <span className="badge badge-sea">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Archivo {resource.download.fileType}
              </span>
            ) : (
              <span className="badge badge-sea">
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                Imprimible
              </span>
            )}
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <article className="card-surface p-5 print:border-0 print:p-0 print:shadow-none sm:p-8" aria-labelledby="resource-content-title">
            <div className="print-only mb-6 border-b border-slate-300 pb-3">
              <p className="text-xs font-bold uppercase tracking-wide">Campus Emprendedor · Biblioteca emprendedora</p>
              <p className="text-[10px]">
                {site.institution.name} · {site.institution.locality}, {site.institution.province}
              </p>
            </div>

            <h2 id="resource-content-title" className="sr-only">
              Contenido del recurso
            </h2>

            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="badge badge-neutral">{category.label}</span>
              <span className="badge badge-neutral">{resource.type}</span>
              {resource.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-600 ring-1 ring-slate-200/70">
                  {tag}
                </span>
              ))}
            </div>

            <div className="lesson-prose">
              <ContentBlocks blocks={resource.content} variant="resource" />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
              <Link href="/biblioteca" className="link-arrow text-sm">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a la biblioteca
              </Link>
              <p className="text-xs text-muted">Recurso educativo abierto · Campus Emprendedor</p>
            </div>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="rounded-2xl border border-brand-200 bg-brand-50/70 p-5" aria-labelledby="resource-use-title">
              <h2 id="resource-use-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <Lightbulb className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Cuándo usarlo
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">{resource.useCase}</p>
            </section>

            {resource.download && (
              <section className="card-surface p-5" aria-labelledby="resource-download-title">
                <h2 id="resource-download-title" className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                  Archivo descargable
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Formato {resource.download.fileType}. El archivo se descarga directamente desde
                  este sitio; no se solicita ningún dato.
                </p>
                <a href={resource.download.href} download className="btn btn-secondary btn-sm mt-3 w-full">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {resource.download.label}
                </a>
              </section>
            )}

            <section className="card-surface p-5" aria-labelledby="resource-print-title">
              <h2 id="resource-print-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                <Printer className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Imprimir o guardar
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                El botón de impresión abre el diálogo del navegador. Para conservar una copia digital,
                elegí «Guardar como PDF». El formato está preparado para A4.
              </p>
            </section>

            {relatedCourses.length > 0 && (
              <section className="card-surface p-5" aria-labelledby="resource-courses-title">
                <h2 id="resource-courses-title" className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900">
                  <BookOpen className="h-4 w-4 text-sea-700" aria-hidden="true" />
                  Cursos relacionados
                </h2>
                <ul className="mt-3 space-y-2">
                  {relatedCourses.map((course) => (
                    <li key={course.id}>
                      <Link
                        href={`/cursos/${course.slug}`}
                        className="group flex items-start justify-between gap-2 rounded-lg py-1.5 text-sm font-bold text-brand-900 hover:text-sea-800"
                      >
                        <span>{course.shortTitle}</span>
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <aside className="rounded-2xl border border-line bg-slate-50 p-5">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                Los ejemplos y montos de este recurso son ficticios y se incluyen con fines
                educativos. Adaptalos a tu situación y verificá los datos antes de usarlos.
              </p>
            </aside>

            <div className="flex items-start gap-2 text-xs leading-relaxed text-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
              <p>
                ¿Querés aplicar este material con acompañamiento? Recorré el curso{" "}
                <Link href="/cursos" className="link-inline">
                  del campus
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
