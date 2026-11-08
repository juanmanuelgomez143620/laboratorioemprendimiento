/**
 * Tipos compartidos para los contenidos educativos.
 * El contenido se redacta en TypeScript para que sea fácil de editar y revisar.
 */

export type CalloutVariant = "tip" | "info" | "warning";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "callout";
      variant: CalloutVariant;
      title: string;
      text: string;
    }
  | {
      type: "example";
      title: string;
      text: string;
      disclaimer?: string;
    }
  | {
      type: "activity";
      title: string;
      intro: string;
      steps: string[];
      closing?: string;
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | { type: "checklist"; title?: string; items: string[] }
  | {
      type: "fields";
      title?: string;
      items: Array<{ label: string; hint?: string; lines?: number }>;
    }
  | { type: "quote"; text: string; source?: string };

export type CourseAccent = "azul" | "verde" | "celeste" | "profundo";
export type CourseIcon = "lightbulb" | "calculator" | "palette" | "laptop" | "briefcase";

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  summary: string;
  estimatedMinutes: number;
  objectives: string[];
  blocks: ContentBlock[];
  keyIdeas: string[];
  resourceSlugs?: string[];
  toolIds?: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface QuizOption {
  text: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
}

export interface FinalQuiz {
  title: string;
  description: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface CourseProject {
  title: string;
  description: string;
  deliverables: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  longDescription: string;
  durationMinutes: number;
  level: "Inicial" | "Intermedio";
  accent: CourseAccent;
  icon: CourseIcon;
  objectives: string[];
  audience: string[];
  project: CourseProject;
  modules: CourseModule[];
  finalQuiz: FinalQuiz;
  resourceSlugs: string[];
  toolIds: string[];
}
