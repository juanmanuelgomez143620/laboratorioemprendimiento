import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  HelpCircle,
  LibraryBig,
  MessageCircleQuestion,
  Search,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlossaryBrowser } from "@/components/glossary/GlossaryBrowser";
import { courses } from "@/content/courses";
import { glossaryCategories, glossaryTerms } from "@/content/glossary";

export const metadata: Metadata = {
  title: "Glosario emprendedor",
  description:
    "Definiciones claras de costos, caja, clientes, marca y herramientas digitales para tomar decisiones en tu emprendimiento. Con ejemplos y enlaces a los cursos del campus.",
};

export default function GlossaryPage() {
  const courseLinks = courses.map((course) => ({
    slug: course.slug,
    title: course.title,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Palabras para decidir mejor"
        title="Glosario emprendedor"
        description="Un diccionario breve para entender los términos que aparecen en los cursos y en la vida cotidiana de un emprendimiento. Buscá una palabra o recorré las categorías."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Glosario" }]}
        actions={
          <>
            <Link href="/cursos" className="btn btn-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Ver los cursos
            </Link>
            <Link href="/preguntas-frecuentes" className="btn btn-secondary">
              <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
              Preguntas frecuentes
            </Link>
          </>
        }
        meta={
          <>
            <span className="badge badge-sea">
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              {glossaryTerms.length} términos
            </span>
            <span className="badge badge-neutral">
              <LibraryBig className="h-3.5 w-3.5" aria-hidden="true" />
              {glossaryCategories.length} categorías
            </span>
            <span className="badge badge-neutral">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Sin registro
            </span>
          </>
        }
      />

      <div className="container-page py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0">
            <GlossaryBrowser
              terms={glossaryTerms}
              categories={glossaryCategories}
              courses={courseLinks}
            />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="card-surface p-5" aria-labelledby="glossary-how-title">
              <h2
                id="glossary-how-title"
                className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-brand-900"
              >
                <Compass className="h-4 w-4 text-sea-700" aria-hidden="true" />
                Cómo usarlo
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-body">
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-600"
                    aria-hidden="true"
                  />
                  Buscá la palabra que aparece en una lección o en una conversación con tu cliente.
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-600"
                    aria-hidden="true"
                  />
                  Leé la definición y el ejemplo ilustrativo. Adaptá el ejemplo a tus propios números.
                </li>
                <li className="flex gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sea-600"
                    aria-hidden="true"
                  />
                  Abrí el curso relacionado para practicar el concepto con una actividad.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="flex items-center gap-2 text-sm font-extrabold text-amber-950">
                <HelpCircle className="h-4 w-4" aria-hidden="true" />
                Definiciones orientativas
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-amber-950">
                Estas definiciones son educativas y generales. No reemplazan el asesoramiento
                contable, impositivo o legal que tu situación particular pueda necesitar. Los
                ejemplos son ficticios y solo sirven para ilustrar.
              </p>
            </section>

            <section className="card-surface p-5">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-brand-900">
                Seguir aprendiendo
              </h2>
              <div className="mt-3 space-y-2.5">
                <Link href="/biblioteca" className="link-arrow text-sm">
                  <LibraryBig className="h-4 w-4" aria-hidden="true" />
                  Biblioteca de recursos
                </Link>
                <Link href="/herramientas/diagnostico" className="link-arrow text-sm">
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  Diagnóstico inicial
                </Link>
                <Link href="/cursos" className="link-arrow text-sm">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  Todos los cursos
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
