import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  inverted?: boolean;
  compact?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ inverted = false, compact = false, href = "/", className }: LogoProps) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "relative grid shrink-0 place-items-center overflow-hidden rounded-[14px] shadow-sm ring-1",
          compact ? "h-10 w-10" : "h-12 w-12",
          inverted ? "bg-white/10 ring-white/20" : "bg-white ring-brand-950/10",
        )}
      >
        <Image
          src="/logo.svg"
          alt=""
          width={compact ? 40 : 48}
          height={compact ? 40 : 48}
          className="h-full w-full"
          priority
        />
      </span>
      <span className="min-w-0">
        <span className="sr-only">Ir al inicio: </span>
        <span
          className={cn(
            "block text-[10px] font-extrabold uppercase leading-tight tracking-[0.19em]",
            inverted ? "text-sea-300" : "text-sea-700",
          )}
        >
          Escuela Normal N.º 9 · Wanda
        </span>
        <span
          className={cn(
            "block whitespace-nowrap font-extrabold leading-tight tracking-[-0.045em]",
            compact ? "text-lg" : "text-[21px]",
            inverted ? "text-white" : "text-brand-950",
          )}
        >
          Campus Emprendedor
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 hidden items-center gap-1 text-[10.5px] font-semibold sm:flex",
              inverted ? "text-white/60" : "text-muted",
            )}
          >
            Formación abierta a la comunidad
          </span>
        )}
      </span>
    </>
  );

  return (
    <Link href={href} className={cn("inline-flex items-center gap-3 rounded-lg", className)}>
      {content}
    </Link>
  );
}