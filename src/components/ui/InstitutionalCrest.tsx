import Image from "next/image";
import { cn } from "@/lib/utils";

const crestSizes = {
  xs: { box: "h-12 w-10", sizes: "40px" },
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
 * El archivo ahora tiene fondo transparente, por eso no lleva marco blanco.
 */
export function InstitutionalCrest({ size = "md", className }: InstitutionalCrestProps) {
  const config = crestSizes[size];

  return (
    <span
      className={cn("inline-flex shrink-0 overflow-hidden", config.box, className)}
    >
      <Image
        src="/institucional/escudo-escuela-normal-9.png"
        alt="Escudo institucional de la Escuela Normal Superior N.º 9 de Wanda"
        width={471}
        height={570}
        sizes={config.sizes}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
