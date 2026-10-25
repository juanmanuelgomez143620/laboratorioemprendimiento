import { describe, expect, it } from "vitest";
import { countUnanswered, scoreQuiz } from "@/lib/quiz";
import type { FinalQuiz, QuizQuestion } from "@/types/course";

function makeQuestion(index: number, correctIndex = 1): QuizQuestion {
  return {
    id: `q-${index}`,
    prompt: `Pregunta ${index + 1}`,
    options: [{ text: "A" }, { text: "B" }, { text: "C" }],
    correctIndex,
    explanation: `Explicación ${index + 1}`,
  };
}

function makeQuiz(questionCount: number, passingScore = 70): FinalQuiz {
  return {
    title: "Evaluación de prueba",
    description: "Evaluación generada para las pruebas automatizadas.",
    passingScore,
    questions: Array.from({ length: questionCount }, (_, index) => makeQuestion(index)),
  };
}

function allCorrect(questionCount: number): number[] {
  return Array.from({ length: questionCount }, () => 1);
}

describe("scoreQuiz", () => {
  it("aprueba con todas las respuestas correctas", () => {
    const result = scoreQuiz(makeQuiz(10), allCorrect(10));

    expect(result).toEqual({ score: 10, total: 10, percentage: 100, passed: true });
  });

  it("aprueba exactamente en el límite del 70%", () => {
    const result = scoreQuiz(makeQuiz(10, 70), allCorrect(7).concat([0, 0, 0]));

    expect(result.score).toBe(7);
    expect(result.percentage).toBe(70);
    expect(result.passed).toBe(true);
  });

  it("no aprueba un punto porcentual por debajo del límite", () => {
    const result = scoreQuiz(makeQuiz(10, 70), allCorrect(6).concat([0, 0, 0, 0]));

    expect(result.score).toBe(6);
    expect(result.percentage).toBe(60);
    expect(result.passed).toBe(false);
  });

  it("no aprueba por efecto del redondeo (2 de 3 se muestra 67%, pero no alcanza el 70%)", () => {
    const result = scoreQuiz(makeQuiz(3, 70), [1, 1, 0]);

    expect(result.score).toBe(2);
    expect(result.percentage).toBe(67);
    expect(result.passed).toBe(false);
  });

  it("cuenta las respuestas sin contestar como incorrectas", () => {
    const result = scoreQuiz(makeQuiz(4, 70), [1, null, undefined]);

    expect(result.score).toBe(1);
    expect(result.percentage).toBe(25);
    expect(result.passed).toBe(false);
  });

  it("ignora respuestas fuera de rango o no enteras", () => {
    const result = scoreQuiz(makeQuiz(4, 70), [99, -1, 1.5, 1]);

    expect(result.score).toBe(1);
    expect(result.passed).toBe(false);
  });

  it("no aprueba una evaluación sin preguntas", () => {
    const result = scoreQuiz(makeQuiz(0), []);

    expect(result).toEqual({ score: 0, total: 0, percentage: 0, passed: false });
  });

  it("admite un umbral de aprobación distinto", () => {
    const result = scoreQuiz(makeQuiz(4, 50), [1, 1, 0, 0]);

    expect(result.percentage).toBe(50);
    expect(result.passed).toBe(true);
  });
});

describe("countUnanswered", () => {
  it("cuenta valores ausentes, nulos y fuera de rango", () => {
    expect(countUnanswered([1, null, undefined, -1], 4)).toBe(3);
  });

  it("no cuenta respuestas válidas ni índices posteriores al total", () => {
    expect(countUnanswered([0, 2, 1, 0], 3)).toBe(0);
  });

  it("devuelve cero cuando no hay preguntas", () => {
    expect(countUnanswered([], 0)).toBe(0);
  });
});
