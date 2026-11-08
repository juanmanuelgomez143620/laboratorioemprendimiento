import Link from "next/link";
import { ArrowRight, Briefcase, Compass } from "lucide-react";

/**
 * Tarjeta que completa la grilla de cursos y orienta a quien no sabe por dónde empezar.
 */
export function CourseFinderCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-dashed border-brand-200 bg-brand-50/60 p-6">
      <div>
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-800 ring-1 ring-brand-100">
          <Compass className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-extrabold text-brand-950">¿No sabés por dónde empezar?</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">
          Si querés emprender, el diagnóstico inicial te sugiere cursos según tu situación. Si estás
          buscando trabajo, seguí la ruta de empleo pensada con la Oficina de Empleo de Wanda.
        </p>
      </div>
      <div className="mt-5 grid gap-2">
        <Link href="/herramientas/diagnostico" className="btn btn-sea btn-sm">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Hacer el diagnóstico
        </Link>
        <Link href="/oficina-de-empleo/rutas" className="btn btn-secondary btn-sm">
          <Briefcase className="h-4 w-4" aria-hidden="true" />
          Rutas por programa de empleo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
