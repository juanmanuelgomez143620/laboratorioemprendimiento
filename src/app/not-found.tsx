import Link from "next/link";
import { ArrowLeft, BookOpen, Compass, Home, LibraryBig, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] items-center py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 ring-1 ring-brand-100">
          <SearchX className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-sea-700">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-brand-950 sm:text-5xl">
          No encontramos esta página
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-body">
          Puede que el enlace esté mal escrito o que el contenido se haya movido. Podés volver al
          inicio, explorar los cursos o buscar un recurso en la biblioteca.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/" className="btn btn-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>
          <Link href="/cursos" className="btn btn-secondary">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Explorar cursos
          </Link>
          <Link href="/biblioteca" className="btn btn-ghost">
            <LibraryBig className="h-4 w-4" aria-hidden="true" />
            Abrir biblioteca
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">¿No sabés por dónde empezar?</p>
          <Link href="/herramientas/diagnostico" className="link-arrow text-sm">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Hacer el diagnóstico inicial
          </Link>
        </div>

        <Link href="/cursos" className="link-arrow mt-6 inline-flex text-sm">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Ir al aula virtual
        </Link>
      </div>
    </section>
  );
}
