import { Briefcase, Calculator, Laptop, Lightbulb, Palette, type LucideIcon } from "lucide-react";
import type { CourseAccent, CourseIcon } from "@/types/course";

export const courseIconMap: Record<CourseIcon, LucideIcon> = {
  lightbulb: Lightbulb,
  calculator: Calculator,
  palette: Palette,
  laptop: Laptop,
  briefcase: Briefcase,
};

export const accentStyles: Record<
  CourseAccent,
  {
    banner: string;
    badge: string;
    icon: string;
    title: string;
    link: string;
    line: string;
    soft: string;
  }
> = {
  azul: {
    banner: "bg-gradient-to-br from-brand-700 via-brand-900 to-brand-950",
    badge: "border-brand-200 bg-brand-50 text-brand-800",
    icon: "bg-white/12 text-white ring-white/20",
    title: "text-brand-800",
    link: "text-brand-800",
    line: "bg-brand-500",
    soft: "bg-brand-50 text-brand-900",
  },
  verde: {
    banner: "bg-gradient-to-br from-sea-600 via-sea-800 to-brand-950",
    badge: "border-sea-200 bg-sea-50 text-sea-800",
    icon: "bg-white/12 text-white ring-white/20",
    title: "text-sea-800",
    link: "text-sea-800",
    line: "bg-sea-500",
    soft: "bg-sea-50 text-sea-900",
  },
  celeste: {
    banner: "bg-gradient-to-br from-cyan-600 via-brand-800 to-brand-950",
    badge: "border-cyan-200 bg-cyan-50 text-cyan-900",
    icon: "bg-white/12 text-white ring-white/20",
    title: "text-cyan-900",
    link: "text-cyan-900",
    line: "bg-cyan-500",
    soft: "bg-cyan-50 text-cyan-950",
  },
  profundo: {
    banner: "bg-gradient-to-br from-slate-700 via-brand-900 to-brand-950",
    badge: "border-slate-200 bg-slate-100 text-slate-800",
    icon: "bg-white/12 text-white ring-white/20",
    title: "text-brand-900",
    link: "text-brand-900",
    line: "bg-slate-500",
    soft: "bg-slate-100 text-slate-900",
  },
};
