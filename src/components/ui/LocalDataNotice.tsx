import Link from "next/link";
import { HardDrive, Info, ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

interface LocalDataNoticeProps {
  compact?: boolean;
  className?: string;
}

export function LocalDataNotice({ compact = false, className }: LocalDataNoticeProps) {
  if (compact) {
    return (
      <p className={cn("flex items-start gap-2 text-xs leading-relaxed text-muted", className)}>
        <HardDrive className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sea-700" aria-hidden="true" />
        <span>
          Tu avance se guarda solo en este navegador.{" "}
          <Link href="/privacidad" className="link-inline text-xs">
            Cómo cuidamos tus datos
          </Link>
        </span>
      </p>
    );
  }

  return (
    <aside
      className={cn(
        "rounded-2xl border border-brand-100 bg-brand-50/80 p-5 sm:p-6",
        className,
      )}
      aria-labelledby="local-data-notice-title"
    >
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-800 ring-1 ring-brand-100">
          <HardDrive className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 id="local-data-notice-title" className="text-sm font-extrabold text-brand-950">
            Tu progreso queda en este dispositivo
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-body">{site.storageNotice}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold">
            <Link href="/privacidad" className="link-inline inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Leer el aviso de privacidad
            </Link>
            <Link href="/mi-progreso" className="link-inline inline-flex items-center gap-1">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
              Gestionar o borrar mi progreso
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
