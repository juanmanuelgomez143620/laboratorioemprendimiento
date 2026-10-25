import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  FolderOpen,
  LibraryBig,
  Printer,
  Search,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { LocalDataNotice } from "@/components/ui/LocalDataNotice";
import { LibraryExplorer } from "@/components/library/LibraryExplorer";
import { resources } from "@/content/resources";
import { resourceCategories } from "@/content/resource-categories";
import { toResourceSummary } from "@/lib/presentation";

export const metadata: Metadata = {
  title: "Biblioteca",
  description:
    "Plantillas, guías, fichas y listas de verificación para emprendedores. Recursos abiertos, con búsqueda y filtros por categoría y tipo.",
};

export default function LibraryPage() {
  const summaries = resources.map(toResourceSummary);
  const downloadable = resources.filter((resource) => resource.download).length;
  const counts = resourceCategories.map((category) => ({
    ...category,
    count: resources.filter((resource) => resource.category === category.id).length,
  }));

  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Biblioteca emprendedora"
        title="Recursos para usar, imprimir y guardar"
        description="Materiales abiertos para ordenar costos, registros, fotos y canales de venta. Buscá por tema o filtrá por categoría y tipo. No necesitás registro para consultar ni descargar."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Biblioteca" }]}
        actions={
          <>
            <Link href="/cursos" className="btn btn-on-dark">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Ver cursos
            </Link>
            <Link href="/herramientas/diagnostico" className="btn btn-outline-on-dark">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Hacer mi diagnóstico
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-on-dark">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {resources.length} materiales
            </span>
            <span className="badge badge-on-dark">
              <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {resourceCategories.length} categorías
            </span>
            <span className="badge badge-on-dark">
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              {downloadable} con archivo descargable
            </span>
            <span className="badge badge-on-dark">
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Todos imprimibles
            </span>
          </>
        }
      />

      <div className="container-page py-10 sm:py-14">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <section className="card-surface h-fit p-5 sm:p-6" aria-labelledby="library-how-title">
            <p className="eyebrow">Cómo usar la biblioteca</p>
            <h2 id="library-how-title" className="mt-2 text-2xl font-extrabold text-brand-950">
              Buscar, abrir y aplicar
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-body">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea-100 text-xs font-extrabold text-sea-800">1</span>
                <span>Buscá por palabra clave o elegí una categoría.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea-100 text-xs font-extrabold text-sea-800">2</span>
                <span>Abrí el recurso para leer el contenido y las instrucciones.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea-100 text-xs font-extrabold text-sea-800">3</span>
                <span>Imprimí o guardá como PDF. Si hay archivo CSV, usá el botón de descarga.</span>
              </li>
            </ol>
            <div className="mt-5 rounded-xl border border-line bg-slate-50 p-4">
              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sea-700" aria-hidden="true" />
                Los recursos no piden datos personales. Si completás una plantilla en papel o en tu
                dispositivo, la información queda bajo tu control.
              </p>
            </div>
            <Link href="/herramientas/diagnostico" className="link-arrow mt-4 text-sm">
              <Search className="h-4 w-4" aria-hidden="true" />
              No sé qué recurso necesito
            </Link>
          </section>

          <section className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6" aria-labelledby="library-categories-title">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow">Cinco áreas de trabajo</p>
                <h2 id="library-categories-title" className="mt-1 text-xl font-extrabold text-brand-950">
                  Temas de la biblioteca
                </h2>
              </div>
              <LibraryBig className="h-6 w-6 text-sea-700" aria-hidden="true" />
            </div>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {counts.map((category) => (
                <li key={category.id} className="rounded-xl border border-line bg-slate-50/60 p-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-extrabold text-brand-950">{category.label}</p>
                    <span className="badge badge-neutral shrink-0 text-[10px]">{category.count}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{category.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="recursos" className="mt-10 scroll-mt-28" aria-labelledby="library-resources-title">
          <div className="mb-5">
            <p className="eyebrow">Explorar</p>
            <h2 id="library-resources-title" className="mt-1 text-2xl font-extrabold text-brand-950 sm:text-3xl">
              Todos los recursos
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
              La búsqueda y los filtros funcionan en esta página, sin enviar consultas a ningún
              servidor. Los resultados se actualizan a medida que escribís.
            </p>
          </div>

          <LibraryExplorer resources={summaries} categories={[...resourceCategories]} />
        </section>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
          <LocalDataNotice compact className="rounded-xl border border-line bg-white p-4" />
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-200 bg-brand-50/70 p-5">
            <div>
              <p className="text-sm font-extrabold text-brand-950">¿Buscás una guía paso a paso?</p>
              <p className="mt-0.5 text-xs text-muted">Los cursos aplican estos recursos en actividades concretas.</p>
            </div>
            <Link href="/cursos" className="btn btn-primary btn-sm shrink-0">
              Explorar cursos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
