import { describe, expect, it } from "vitest";
import { diagnosticAreas, diagnosticQuestions } from "@/content/diagnostic";
import { calculateDiagnostic, isDiagnosticComplete } from "@/lib/diagnostic";
import type { DiagnosticAreaResult } from "@/types/diagnostic";

/**
 * Construye un arreglo de respuestas en el mismo orden que las preguntas.
 * Las preguntas no incluidas en `overrides` responden la primera opción (0 puntos).
 */
function answersFrom(overrides: Record<string, number>): number[] {
  return diagnosticQuestions.map((question) => overrides[question.id] ?? 0);
}

function answersWithOption(optionIndex: number): number[] {
  return diagnosticQuestions.map((question) =>
    Math.min(optionIndex, question.options.length - 1),
  );
}

function area(result: ReturnType<typeof calculateDiagnostic>, id: string): DiagnosticAreaResult {
  const found = result.areas.find((item) => item.id === id);
  if (!found) throw new Error(`No se encontró el área ${id}`);
  return found;
}

describe("isDiagnosticComplete", () => {
  it("acepta una respuesta válida para cada pregunta", () => {
    expect(isDiagnosticComplete(answersWithOption(0))).toBe(true);
    expect(isDiagnosticComplete(answersWithOption(3))).toBe(true);
  });

  it("rechaza respuestas faltantes o incompletas", () => {
    const answers: Array<number | null> = answersWithOption(1);
    answers[4] = null;
    expect(isDiagnosticComplete(answers)).toBe(false);

    expect(isDiagnosticComplete([])).toBe(false);
    expect(isDiagnosticComplete(answersWithOption(1).slice(0, -1))).toBe(false);
  });

  it("rechaza índices fuera de rango o no enteros", () => {
    const outOfRange = answersWithOption(1);
    outOfRange[0] = 99;
    expect(isDiagnosticComplete(outOfRange)).toBe(false);

    const negative = answersWithOption(1);
    negative[0] = -1;
    expect(isDiagnosticComplete(negative)).toBe(false);

    const decimal = answersWithOption(1);
    decimal[0] = 1.5;
    expect(isDiagnosticComplete(decimal)).toBe(false);
  });
});

describe("calculateDiagnostic", () => {
  it("asigna el puntaje máximo cuando todas las respuestas son la opción superior", () => {
    const result = calculateDiagnostic(answersWithOption(3));

    expect(result.percentage).toBe(100);
    expect(result.level).toBe("avanzado");
    expect(result.levelLabel).toBe("Avanzado");
    expect(result.areas).toHaveLength(diagnosticAreas.length);
    for (const item of result.areas) {
      expect(item.points).toBe(item.maxPoints);
      expect(item.percentage).toBe(100);
      expect(item.level).toBe("avanzado");
    }
  });

  it("asigna cero cuando todas las respuestas son la opción inicial", () => {
    const result = calculateDiagnostic(answersWithOption(0));

    expect(result.percentage).toBe(0);
    expect(result.level).toBe("inicial");
    for (const item of result.areas) {
      expect(item.points).toBe(0);
    }
  });

  it("calcula el porcentaje y el nivel de cada área", () => {
    const result = calculateDiagnostic(answersWithOption(2));

    const organizacion = area(result, "organizacion");
    expect(organizacion.points).toBe(6);
    expect(organizacion.maxPoints).toBe(9);
    expect(organizacion.percentage).toBe(67);
    expect(organizacion.level).toBe("consolidado");
    expect(organizacion.levelLabel).toBe("Consolidado");

    const promocion = area(result, "promocion");
    expect(promocion.points).toBe(4);
    expect(promocion.maxPoints).toBe(6);
    expect(promocion.percentage).toBe(67);
  });

  it("respeta los límites de nivel: inicial, en marcha, consolidado y avanzado", () => {
    const enMarcha = calculateDiagnostic(
      answersFrom({ "promo-identidad": 3, "promo-atencion": 0 }),
    );
    expect(area(enMarcha, "promocion").percentage).toBe(50);
    expect(area(enMarcha, "promocion").level).toBe("en-marcha");

    const consolidado = calculateDiagnostic(
      answersFrom({ "promo-identidad": 2, "promo-atencion": 2 }),
    );
    expect(area(consolidado, "promocion").percentage).toBe(67);
    expect(area(consolidado, "promocion").level).toBe("consolidado");

    const avanzado = calculateDiagnostic(
      answersFrom({ "org-registro": 3, "org-fondos": 3, "org-comprobantes": 2 }),
    );
    expect(area(avanzado, "organizacion").percentage).toBe(89);
    expect(area(avanzado, "organizacion").level).toBe("avanzado");
  });

  it("promedia los porcentajes de las áreas y redondea el resultado general", () => {
    const result = calculateDiagnostic(
      answersFrom({
        "org-registro": 1,
        "org-fondos": 1,
        "org-comprobantes": 1,
        "costos-unitario": 1,
        "costos-precio": 1,
        "costos-revision": 1,
        "promo-identidad": 3,
        "promo-atencion": 0,
        "digital-archivos": 3,
        "digital-herramientas": 0,
      }),
    );

    expect(result.areas.map((item) => item.percentage)).toEqual([33, 33, 50, 50]);
    expect(result.percentage).toBe(42);
    expect(result.level).toBe("en-marcha");
  });

  it("cuenta como cero las respuestas faltantes o fuera de rango", () => {
    const result = calculateDiagnostic([99, -1, null, undefined, 1.5, -2]);

    expect(result.percentage).toBe(0);
    for (const item of result.areas) {
      expect(item.points).toBe(0);
    }
  });

  it("suma el puntaje de las preguntas respondidas y no del resto", () => {
    const result = calculateDiagnostic(answersFrom({ "org-registro": 3 }));

    expect(area(result, "organizacion").points).toBe(3);
    expect(area(result, "organizacion").percentage).toBe(33);
    expect(area(result, "costos").points).toBe(0);
  });

  it("incluye un resumen y recomendaciones con enlaces utilizables en cada área", () => {
    const result = calculateDiagnostic(answersWithOption(1));

    expect(result.summary.length).toBeGreaterThan(20);
    for (const item of result.areas) {
      expect(item.advice.length).toBeGreaterThan(20);
      expect(item.recommendations.length).toBeGreaterThan(0);

      for (const recommendation of item.recommendations) {
        expect(recommendation.label.length).toBeGreaterThan(0);
        expect(recommendation.href).toBeTruthy();

        if (recommendation.external) {
          expect(recommendation.href).toMatch(/^https:\/\//);
        } else {
          expect(recommendation.href).toMatch(/^\//);
        }
      }
    }
  });

  it("usa los puntajes máximos definidos por las opciones de cada pregunta", () => {
    const result = calculateDiagnostic(answersWithOption(0));
    const totals = Object.fromEntries(result.areas.map((item) => [item.id, item.maxPoints]));

    expect(totals).toEqual({ organizacion: 9, costos: 9, promocion: 6, digital: 6 });
  });
});
