import Image from "next/image";
import { cn } from "@/lib/utils";

const crestSizes = {
  sm: { box: "h-20 w-[66px]", sizes: "66px" },
  md: { box: "h-28 w-[93px]", sizes: "93px" },
  lg: { box: "h-44 w-[145px]", sizes: "145px" },
} as const;

export type InstitutionalCrestSize = keyof typeof crestSizes;

interface InstitutionalCrestProps {
  size?: InstitutionalCrestSize;
  className?: string;
}

/**
 * Escudo institucional provisto por la escuela.
 * Se muestra enmarcado en blanco porque el archivo original tiene fondo claro.
 */
export function InstitutionalCrest({ size = "md", className }: InstitutionalCrestProps) {
  const config = crestSizes[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-brand-950/10",
        config.box,
        className,
      )}
    >
      <Image
        src="/institucional/escudo-escuela-normal-9.png"
        alt="Escudo institucional de la Escuela Normal Superior N.º 9 de Wanda"
        width={471}
        height={570}
        sizes={config.sizes}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
