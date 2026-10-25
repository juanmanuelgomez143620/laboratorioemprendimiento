import { diagnosticAreas, diagnosticQuestions } from "@/content/diagnostic";
import { site } from "@/content/site";
import type {
  DiagnosticAreaId,
  DiagnosticAreaResult,
  DiagnosticLevelId,
  DiagnosticResult,
  RecommendationLink,
} from "@/types/diagnostic";

const LEVEL_LABELS: Record<DiagnosticLevelId, string> = {
  inicial: "Punto de partida",
  "en-marcha": "En marcha",
  consolidado: "Consolidado",
  avanzado: "Avanzado",
};

function levelFromPercentage(percentage: number): DiagnosticLevelId {
  if (percentage < 40) return "inicial";
  if (percentage < 65) return "en-marcha";
  if (percentage < 85) return "consolidado";
  return "avanzado";
}

const AREA_ADVICE: Record<DiagnosticAreaId, Record<DiagnosticLevelId, string>> = {
  organizacion: {
    inicial:
      "Empezá por un registro mínimo de ventas y gastos. Separar el dinero del emprendimiento y guardar comprobantes te dará una base para decidir.",
    "en-marcha":
      "Ya hay algunas prácticas de orden. El siguiente paso es sostenerlas en una rutina semanal y respaldar la información importante.",
    consolidado:
      "Tu organización es funcional. Revisá si los registros se actualizan a tiempo y si podés encontrar cualquier comprobante sin dificultad.",
    avanzado:
      "Tenés una base administrativa sólida. Podés profundizar en indicadores simples y en la revisión periódica de procesos.",
  },
  costos: {
    inicial:
      "Antes de ajustar precios, armá una ficha de costos. Incluir insumos, trabajo, envases y mermas cambia el punto de partida de cualquier decisión.",
    "en-marcha":
      "Conocés algunos costos, pero todavía hay espacio para un cálculo completo. Revisá el costo unitario y sumá comisiones y entregas.",
    consolidado:
      "Tenés un criterio de costos y precios. Profundizá en el punto de equilibrio y en la revisión del margen real de cada producto.",
    avanzado:
      "Tus costos y precios están bajo control. Podés comparar rentabilidad por producto y revisar supuestos con mayor frecuencia.",
  },
  promocion: {
    inicial:
      "Definí una propuesta clara y una presentación básica. Un nombre comprensible, fotos honestas y un canal de consultas activo son el primer paso.",
    "en-marcha":
      "Hay una identidad inicial, pero necesita consistencia. Ordená los mensajes, actualizá las fotos y prepará respuestas frecuentes.",
    consolidado:
      "Tu presentación comunica con claridad. Revisá la vigencia de precios y condiciones y medí qué consultas se convierten en pedidos.",
    avanzado:
      "Tu identidad y tus canales están consolidados. Podés enfocarte en fidelizar clientes y mantener actualizada la información.",
  },
  digital: {
    inicial:
      "Empezá por una estructura simple de carpetas y una planilla básica. No necesitás incorporar muchas herramientas a la vez.",
    "en-marcha":
      "Usás canales digitales, pero el orden puede mejorar. Probá tus enlaces, ordená archivos y elegí una herramienta por objetivo.",
    consolidado:
      "Tu uso digital es funcional. Revisá copias de seguridad, privacidad y la verificación de información asistida por IA.",
    avanzado:
      "Tenés prácticas digitales avanzadas. Mantené la revisión de enlaces, accesos y datos para sostener la calidad.",
  },
};

const AREA_RECOMMENDATIONS: Record<DiagnosticAreaId, RecommendationLink[]> = {
  organizacion: [
    {
      label: "Curso: Mi primer emprendimiento",
      description: "Planificación básica, clientes, recursos y un plan de una página.",
      href: "/cursos/mi-primer-emprendimiento",
      kind: "curso",
    },
    {
      label: "Recurso: Guía de organización administrativa básica",
      description: "Carpetas, registros, comprobantes y rutina semanal.",
      href: "/biblioteca/guia-organizacion-administrativa",
      kind: "recurso",
    },
    {
      label: "Recurso: Plantilla básica de presupuesto",
      description: "Una estructura para ordenar ingresos y costos mensuales.",
      href: "/biblioteca/presupuesto-basico",
      kind: "recurso",
    },
  ],
  costos: [
    {
      label: "Curso: Costos y precios para emprender",
      description: "Costos fijos y variables, costo unitario, precio y punto de equilibrio.",
      href: "/cursos/costos-y-precios",
      kind: "curso",
    },
    {
      label: "Herramienta: CostoClaro",
      description: "Calculadora externa de costos y rentabilidad disponible para practicar.",
      href: site.externalLinks.costoClaro,
      external: true,
      kind: "herramienta",
    },
    {
      label: "Recurso: Ficha de costos",
      description: "Modelo para calcular cuánto cuesta cada unidad vendible.",
      href: "/biblioteca/ficha-de-costos",
      kind: "recurso",
    },
  ],
  promocion: [
    {
      label: "Curso: Mi marca y mi identidad comercial",
      description: "Nombre, identidad visual, fotografía de productos y catálogo.",
      href: "/cursos/mi-marca-y-mi-identidad-comercial",
      kind: "curso",
    },
    {
      label: "Recurso: Lista de verificación para identidad comercial",
      description: "Una revisión práctica antes de publicar o imprimir materiales.",
      href: "/biblioteca/lista-verificacion-identidad-comercial",
      kind: "recurso",
    },
    {
      label: "Recurso: Guía de fotografía de productos con celular",
      description: "Luz, encuadre y edición mínima con un teléfono.",
      href: "/biblioteca/guia-fotografia-celular",
      kind: "recurso",
    },
  ],
  digital: [
    {
      label: "Curso: Herramientas digitales para mi negocio",
      description: "Archivos, planillas, códigos QR, WhatsApp Business e IA responsable.",
      href: "/cursos/herramientas-digitales-para-mi-negocio",
      kind: "curso",
    },
    {
      label: "Herramienta: Yo Emprendedor",
      description: "Plataforma externa de la Provincia de Misiones, con acceso propio.",
      href: site.externalLinks.yoEmprendedor,
      external: true,
      kind: "herramienta",
    },
    {
      label: "Recurso: Guía de organización administrativa básica",
      description: "Respaldos, privacidad y orden de la información digital.",
      href: "/biblioteca/guia-organizacion-administrativa",
      kind: "recurso",
    },
  ],
};

function overallSummary(level: DiagnosticLevelId): string {
  switch (level) {
    case "inicial":
      return "Estás en un buen momento para ordenar lo básico. El resultado no define el potencial de tu emprendimiento: muestra áreas donde un primer paso puede generar una diferencia importante.";
    case "en-marcha":
      return "Tu emprendimiento tiene bases y prácticas en marcha. Elegí una o dos áreas para profundizar y convertí las recomendaciones en acciones concretas para las próximas semanas.";
    case "consolidado":
      return "Contás con prácticas consolidadas en varias áreas. El desafío es sostenerlas, revisar la información y detectar los puntos donde todavía hay margen de mejora.";
    case "avanzado":
      return "Tu emprendimiento muestra prácticas avanzadas en el diagnóstico. Usá este resultado como una oportunidad para revisar supuestos, compartir lo aprendido y seguir profesionalizando procesos.";
  }
}

export function isDiagnosticComplete(
  answers: ReadonlyArray<number | null | undefined>,
): boolean {
  return diagnosticQuestions.every((question, index) => {
    const answer = answers[index];
    return (
      typeof answer === "number" &&
      Number.isInteger(answer) &&
      answer >= 0 &&
      answer < question.options.length
    );
  });
}

export function calculateDiagnostic(
  answers: ReadonlyArray<number | null | undefined>,
): DiagnosticResult {
  const areas: DiagnosticAreaResult[] = diagnosticAreas.map((area) => {
    const questions = diagnosticQuestions.filter((question) => question.area === area.id);
    const maxPoints = questions.reduce(
      (total, question) => total + Math.max(...question.options.map((option) => option.points)),
      0,
    );
    const points = questions.reduce((total, question) => {
      const questionIndex = diagnosticQuestions.indexOf(question);
      const answer = answers[questionIndex];
      const option =
        typeof answer === "number" && Number.isInteger(answer) && answer >= 0
          ? question.options[answer]
          : undefined;
      return total + (option?.points ?? 0);
    }, 0);
    const percentage = maxPoints === 0 ? 0 : Math.round((points / maxPoints) * 100);
    const level = levelFromPercentage(percentage);

    return {
      id: area.id,
      label: area.label,
      description: area.description,
      points,
      maxPoints,
      percentage,
      level,
      levelLabel: LEVEL_LABELS[level],
      advice: AREA_ADVICE[area.id][level],
      recommendations: AREA_RECOMMENDATIONS[area.id],
    };
  });

  const percentage =
    areas.length === 0
      ? 0
      : Math.round(areas.reduce((total, area) => total + area.percentage, 0) / areas.length);
  const level = levelFromPercentage(percentage);

  return {
    percentage,
    level,
    levelLabel: LEVEL_LABELS[level],
    summary: overallSummary(level),
    areas,
  };
}
