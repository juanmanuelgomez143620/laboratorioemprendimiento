import type { FinalQuiz } from "@/types/course";

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
}

/**
 * Corrige la evaluación a partir de los índices elegidos.
 * - Si falta una respuesta se cuenta como incorrecta.
 * - El porcentaje se redondea para mostrar, pero la aprobación se calcula
 *   con la proporción exacta para no aprobar por efecto del redondeo.
 */
export function scoreQuiz(quiz: FinalQuiz, answers: ReadonlyArray<number | null | undefined>): QuizResult {
  const total = quiz.questions.length;
  let score = 0;

  quiz.questions.forEach((question, index) => {
    const answer = answers[index];
    if (typeof answer === "number" && Number.isInteger(answer) && answer === question.correctIndex) {
      score += 1;
    }
  });

  return {
    score,
    total,
    percentage: total === 0 ? 0 : Math.round((score / total) * 100),
    passed: total > 0 && score * 100 >= quiz.passingScore * total,
  };
}

export function countUnanswered(
  answers: ReadonlyArray<number | null | undefined>,
  totalQuestions: number,
): number {
  let unanswered = 0;
  for (let index = 0; index < totalQuestions; index += 1) {
    const answer = answers[index];
    if (typeof answer !== "number" || !Number.isInteger(answer) || answer < 0) {
      unanswered += 1;
    }
  }
  return unanswered;
}
