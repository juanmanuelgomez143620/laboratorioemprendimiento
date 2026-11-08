import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, PenLine } from "lucide-react";
import { InstitutionalCrest } from "@/components/ui/InstitutionalCrest";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Créditos",
  description: "Autoría de Campus Emprendedor e imágenes institucionales utilizadas en el sitio.",
};

export default function CreditsPage() {
  const inst = site.institution;
  const author = site.author;
  const cover = site.coverImage;

  return (
    <>
      <PageHeader
        tone="dark"
        eyebrow="Créditos"
        title="Autoría y créditos"
        description="Quién creó este campus y de dónde provienen las imágenes institucionales que lo acompañan."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Créditos" }]}
      />

      <div className="container-page py-10 sm:py-14">
        <section
          aria-labelledby="author-title"
          className="flex flex-col gap-6 rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-8"
        >
          <InstitutionalCrest size="md" />
          <div>
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-sea-700">
              <PenLine className="h-4 w-4" aria-hidden="true" />
              Autoría
            </p>
            <h2 id="author-title" className="mt-1 text-3xl font-extrabold text-brand-950">
              {author.name}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {author.titles.map((title) => (
                <li key={title} className="badge badge-brand">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  {title}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-base leading-relaxed text-body">{author.role}.</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Iniciativa educativa de la {inst.name} ({inst.locality}, {inst.province}),{" "}
              {inst.department}, modalidad {inst.modality}.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="images-title">
          <p className="eyebrow">Imágenes</p>
          <h2 id="images-title" className="mt-2 text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Imágenes institucionales
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-[1.4fr_0.6fr]">
            <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(min-width: 768px) 60vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="p-4 text-sm leading-relaxed text-body">
                <strong className="text-brand-950">Imagen de portada:</strong> {inst.classroom} de la{" "}
                {inst.name}.
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-white p-6 shadow-card">
              <InstitutionalCrest size="lg" />
              <figcaption className="text-center text-sm leading-relaxed text-body">
                <strong className="text-brand-950">Escudo institucional</strong> de la escuela, usado con
                fines institucionales.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
