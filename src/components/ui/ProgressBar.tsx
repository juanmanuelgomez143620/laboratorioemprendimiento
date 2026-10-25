import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  label: string;
  tone?: "brand" | "sea" | "on-dark";
  size?: "sm" | "md";
  className?: string;
}

export function ProgressBar({
  value,
  label,
  tone = "brand",
  size = "sm",
  className,
}: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, Math.round(value)));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
      aria-valuetext={`${safeValue} por ciento`}
      className={cn(
        "w-full overflow-hidden rounded-full",
        size === "sm" ? "h-2" : "h-2.5",
        tone === "on-dark" ? "bg-white/15" : "bg-slate-200/80",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-500",
          tone === "brand" && "bg-gradient-to-r from-brand-700 to-brand-500",
          tone === "sea" && "bg-gradient-to-r from-sea-600 to-sea-400",
          tone === "on-dark" && "bg-gradient-to-r from-sea-300 to-sea-200",
        )}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
