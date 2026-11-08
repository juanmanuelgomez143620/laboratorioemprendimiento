import type { ResourceCategory } from "@/types/resource";

export const resourceCategories: ResourceCategory[] = [
  {
    id: "administracion",
    label: "Administración y gestión",
    description: "Herramientas para ordenar registros, comprobantes y tareas del emprendimiento.",
  },
  {
    id: "costos",
    label: "Costos y finanzas",
    description: "Plantillas y guías para conocer costos, presupuestar y revisar precios.",
  },
  {
    id: "marketing",
    label: "Marketing e identidad",
    description: "Recursos para nombrar, presentar y comunicar tu propuesta.",
  },
  {
    id: "herramientas",
    label: "Herramientas digitales",
    description: "Material de apoyo para organizar la información y usar canales digitales.",
  },
  {
    id: "planificacion",
    label: "Planificación de emprendimientos",
    description: "Modelos simples para convertir una idea en pasos concretos.",
  },
  {
    id: "empleo",
    label: "Empleo y carrera",
    description: "Recursos para buscar trabajo, preparar un CV y afrontar entrevistas.",
  },
];

export function getResourceCategory(id: ResourceCategory["id"]): ResourceCategory {
  const category = resourceCategories.find((item) => item.id === id);
  if (!category) throw new Error(`Categoría de recurso desconocida: ${id}`);
  return category;
}
