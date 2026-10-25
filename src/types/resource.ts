import type { ContentBlock } from "@/types/course";

export type ResourceCategoryId =
  | "administracion"
  | "costos"
  | "marketing"
  | "herramientas"
  | "planificacion";

export interface ResourceCategory {
  id: ResourceCategoryId;
  label: string;
  description: string;
}

export type ResourceType =
  | "Plantilla"
  | "Guía"
  | "Ficha"
  | "Modelo"
  | "Lista de verificación";

export interface ResourceDownload {
  href: string;
  label: string;
  fileType: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ResourceCategoryId;
  type: ResourceType;
  tags: string[];
  useCase: string;
  content: ContentBlock[];
  download?: ResourceDownload;
  relatedCourseSlugs?: string[];
}

export type ToolStatus = "disponible" | "previsto";
export type ToolOrigin = "campus" | "externo";

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  status: ToolStatus;
  origin: ToolOrigin;
  /** Solo las herramientas disponibles tienen un enlace real. */
  href?: string;
  linkLabel?: string;
  ownerNote?: string;
  tags: string[];
  icon: "calculator" | "compass" | "briefcase" | "receipt" | "palette" | "catalog" | "shield";
}
