import type { Tool } from "@/types/resource";
import { site } from "@/content/site";

export const tools: Tool[] = [
  {
    id: "costoclaro",
    name: "CostoClaro",
    description:
      "Calculadora de costos y rentabilidad disponible como antecedente de desarrollo tecnológico. Permite trabajar con costos y precios de un emprendimiento.",
    category: "Costos y rentabilidad",
    status: "disponible",
    origin: "externo",
    href: site.externalLinks.costoClaro,
    linkLabel: "Utilizar herramienta",
    ownerNote:
      "Aplicación externa al campus. Se ofrece como acceso directo; su funcionamiento, contenidos y condiciones corresponden a su propio sitio.",
    tags: ["costos", "precio de venta", "rentabilidad", "calculadora"],
    icon: "calculator",
  },
  {
    id: "diagnostico-emprendedor",
    name: "Diagnóstico inicial de mi emprendimiento",
    description:
      "Un recorrido de diez preguntas que identifica áreas de mejora y recomienda cursos y recursos del campus. Se completa sin registro y puede imprimirse.",
    category: "Autoevaluación",
    status: "disponible",
    origin: "campus",
    href: "/herramientas/diagnostico",
    linkLabel: "Hacer el diagnóstico",
    ownerNote:
      "Herramienta educativa desarrollada para NORMAL 9 IMPULSA. El resultado es orientativo y no se guarda ni se envía a ningún servidor.",
    tags: ["diagnóstico", "organización", "costos", "promoción", "herramientas digitales"],
    icon: "compass",
  },
  {
    id: "yo-emprendedor",
    name: "Yo Emprendedor",
    description:
      "Plataforma provincial de Misiones para personas emprendedoras. Se incluye como acceso externo claramente identificado.",
    category: "Plataforma provincial",
    status: "disponible",
    origin: "externo",
    href: site.externalLinks.yoEmprendedor,
    linkLabel: "Ir a la plataforma provincial",
    ownerNote:
      "Herramienta externa de la Provincia de Misiones. No es desarrollada ni administrada por la Escuela Normal Superior N.º 9. Su acceso puede requerir registro en el sitio provincial.",
    tags: ["Misiones", "herramienta provincial", "acceso externo"],
    icon: "shield",
  },
  {
    id: "plan-negocios-digital",
    name: "Plan de negocios digital",
    description:
      "Un asistente que guíe la construcción de un plan de una página y permita retomarlo por etapas.",
    category: "Proyecto previsto",
    status: "previsto",
    origin: "campus",
    ownerNote: "Proyecto previsto. Todavía no está disponible como aplicación funcional.",
    tags: ["planificación", "proyecto futuro"],
    icon: "briefcase",
  },
  {
    id: "generador-presupuestos",
    name: "Generador de presupuestos",
    description:
      "Una herramienta para preparar presupuestos simples de productos o servicios, con datos de contacto y condiciones.",
    category: "Proyecto previsto",
    status: "previsto",
    origin: "campus",
    ownerNote: "Proyecto previsto. Todavía no está disponible como aplicación funcional.",
    tags: ["presupuestos", "ventas", "proyecto futuro"],
    icon: "receipt",
  },
  {
    id: "identidad-promocion",
    name: "Identidad y promoción comercial",
    description:
      "Un espacio de apoyo para ordenar nombre, colores, mensajes y piezas básicas de comunicación.",
    category: "Proyecto previsto",
    status: "previsto",
    origin: "campus",
    ownerNote: "Proyecto previsto. Todavía no está disponible como aplicación funcional.",
    tags: ["marca", "promoción", "proyecto futuro"],
    icon: "palette",
  },
  {
    id: "catalogo-digital",
    name: "Catálogo digital de productos",
    description:
      "Una herramienta para organizar productos, fotos, precios y un enlace compartible con clientes.",
    category: "Proyecto previsto",
    status: "previsto",
    origin: "campus",
    ownerNote: "Proyecto previsto. Todavía no está disponible como aplicación funcional.",
    tags: ["catálogo", "productos", "proyecto futuro"],
    icon: "catalog",
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((tool) => tool.id === id);
}
