import Link from "next/link";
import { GraduationCap } from "lucide-react";
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
          "relative grid shrink-0 place-items-center overflow-hidden rounded-[14px] shadow-sm",
          compact ? "h-10 w-10" : "h-12 w-12",
          inverted
            ? "bg-white text-brand-950 ring-1 ring-white/20"
            : "bg-brand-900 text-white ring-1 ring-brand-950/10",
        )}
      >
        <span className="relative z-10 text-[14px] font-extrabold tracking-tight">N9</span>
        <span
          className={cn(
            "absolute -right-3 -top-3 h-7 w-7 rounded-full",
            inverted ? "bg-sea-200" : "bg-sea-400/80",
          )}
        />
        <span
          className={cn(
            "absolute inset-x-2 bottom-[7px] h-[3px] rounded-full",
            inverted ? "bg-sea-500" : "bg-sea-300",
          )}
        />
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block text-[10px] font-extrabold uppercase leading-tight tracking-[0.19em]",
            inverted ? "text-sea-300" : "text-sea-700",
          )}
        >
          Campus Emprendedor
        </span>
        <span
          className={cn(
            "block whitespace-nowrap font-extrabold leading-tight tracking-[-0.045em]",
            compact ? "text-lg" : "text-[21px]",
            inverted ? "text-white" : "text-brand-950",
          )}
        >
          NORMAL 9 <span className={inverted ? "text-sea-300" : "text-sea-700"}>IMPULSA</span>
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 hidden items-center gap-1 text-[10.5px] font-semibold sm:flex",
              inverted ? "text-white/60" : "text-muted",
            )}
          >
            <GraduationCap className="h-3 w-3" aria-hidden="true" />
            Escuela Normal Superior N.º 9 · Wanda
          </span>
        )}
      </span>
    </>
  );

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-3 rounded-lg", className)}
      aria-label="NORMAL 9 IMPULSA, Campus Emprendedor de la Escuela Normal Superior N.º 9. Ir al inicio"
    >
      {content}
    </Link>
  );
}
