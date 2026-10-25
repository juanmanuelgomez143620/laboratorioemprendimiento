"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrintButtonProps {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export function PrintButton({
  label = "Imprimir o guardar PDF",
  className,
  variant = "primary",
}: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn("btn", variant === "primary" ? "btn-primary" : "btn-secondary", className)}
    >
      <Printer className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  );
}
