export type DiagnosticAreaId =
  | "organizacion"
  | "costos"
  | "promocion"
  | "digital";

export interface DiagnosticOption {
  label: string;
  points: number;
}

export interface DiagnosticQuestion {
  id: string;
  area: DiagnosticAreaId;
  prompt: string;
  help?: string;
  options: DiagnosticOption[];
}

export interface DiagnosticArea {
  id: DiagnosticAreaId;
  label: string;
  description: string;
  maxPoints: number;
}

export type DiagnosticLevelId =
  | "inicial"
  | "en-marcha"
  | "consolidado"
  | "avanzado";

export interface RecommendationLink {
  label: string;
  description: string;
  href?: string;
  external?: boolean;
  kind: "curso" | "recurso" | "herramienta";
}

export interface DiagnosticAreaResult {
  id: DiagnosticAreaId;
  label: string;
  description: string;
  points: number;
  maxPoints: number;
  percentage: number;
  level: DiagnosticLevelId;
  levelLabel: string;
  advice: string;
  recommendations: RecommendationLink[];
}

export interface DiagnosticResult {
  percentage: number;
  level: DiagnosticLevelId;
  levelLabel: string;
  summary: string;
  areas: DiagnosticAreaResult[];
}
