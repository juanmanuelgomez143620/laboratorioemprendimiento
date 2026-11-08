import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { courses } from "@/content/courses";
import { glossaryCategories, glossaryTerms } from "@/content/glossary";
import { resourceCategories } from "@/content/resource-categories";
import { resources } from "@/content/resources";
import { tools } from "@/content/tools";

const courseSlugs = new Set(courses.map((course) => course.slug));
const resourceSlugs = new Set(resources.map((resource) => resource.slug));
const toolIdSet = new Set(tools.map((tool) => tool.id));
const categoryIds = new Set(resourceCategories.map((category) => category.id));
const glossaryCategoryIds = new Set(glossaryCategories.map((category) => category.id));

describe("contenido de cursos", () => {
  it("incluye al menos los cuatro cursos fundacionales con identificadores únicos", () => {
    expect(courses.length).toBeGreaterThanOrEqual(4);
    expect(courseSlugs.size).toBe(courses.length);
    expect(new Set(courses.map((course) => course.id)).size).toBe(courses.length);

    for (const requiredSlug of [
      "mi-primer-emprendimiento",
      "costos-y-precios",
      "mi-marca-y-mi-identidad-comercial",
      "herramientas-digitales-para-mi-negocio",
    ]) {
      expect(courseSlugs.has(requiredSlug), requiredSlug).toBe(true);
    }
  });

  it("cada curso tiene al menos cinco lecciones completas con identificadores únicos", () => {
    for (const course of courses) {
      const lessons = course.modules.flatMap((module) => module.lessons);

      expect(lessons.length, course.slug).toBeGreaterThanOrEqual(5);
      expect(new Set(lessons.map((lesson) => lesson.id)).size, course.slug).toBe(lessons.length);
      expect(new Set(lessons.map((lesson) => lesson.slug)).size, course.slug).toBe(lessons.length);
      expect(course.durationMinutes).toBeGreaterThan(0);
      expect(course.objectives.length).toBeGreaterThan(0);
      expect(course.audience.length).toBeGreaterThan(0);
      expect(course.project.title.length, course.slug).toBeGreaterThan(0);
      expect(course.project.description.length, course.slug).toBeGreaterThan(20);
      expect(course.project.deliverables.length, course.slug).toBeGreaterThan(0);

      for (const lesson of lessons) {
        expect(lesson.title.length, `${course.slug}/${lesson.slug}`).toBeGreaterThan(0);
        expect(lesson.summary.length).toBeGreaterThan(20);
        expect(lesson.objectives.length).toBeGreaterThan(0);
        expect(lesson.keyIdeas.length).toBeGreaterThan(0);
        expect(lesson.blocks.length).toBeGreaterThanOrEqual(3);
        expect(lesson.estimatedMinutes).toBeGreaterThan(0);
      }
    }
  });

  it("las lecciones no repiten identificadores entre cursos", () => {
    const allIds = courses.flatMap((course) =>
      course.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id)),
    );

    expect(new Set(allIds).size).toBe(allIds.length);
  });

  it("cada evaluación tiene al menos ocho preguntas válidas y aprueba con 70%", () => {
    for (const course of courses) {
      const quiz = course.finalQuiz;

      expect(quiz.passingScore, course.slug).toBe(70);
      expect(quiz.questions.length).toBeGreaterThanOrEqual(8);
      expect(new Set(quiz.questions.map((question) => question.id)).size, course.slug).toBe(
        quiz.questions.length,
      );

      for (const question of quiz.questions) {
        expect(question.options.length, question.id).toBeGreaterThanOrEqual(2);
        expect(question.correctIndex, question.id).toBeGreaterThanOrEqual(0);
        expect(question.correctIndex, question.id).toBeLessThan(question.options.length);
        expect(question.explanation.length, question.id).toBeGreaterThan(10);
      }
    }
  });

  it("las referencias a recursos y herramientas del curso existen", () => {
    for (const course of courses) {
      for (const slug of course.resourceSlugs) {
        expect(resourceSlugs.has(slug), `${course.slug} → ${slug}`).toBe(true);
      }
      for (const toolId of course.toolIds) {
        expect(toolIdSet.has(toolId), `${course.slug} → ${toolId}`).toBe(true);
      }

      for (const lesson of course.modules.flatMap((module) => module.lessons)) {
        for (const slug of lesson.resourceSlugs ?? []) {
          expect(resourceSlugs.has(slug), `${lesson.id} → ${slug}`).toBe(true);
        }
        for (const toolId of lesson.toolIds ?? []) {
          expect(toolIdSet.has(toolId), `${lesson.id} → ${toolId}`).toBe(true);
        }
      }
    }
  });
});

describe("biblioteca de recursos", () => {
  it("tiene recursos con identificadores únicos en las cinco categorías", () => {
    expect(resources.length).toBeGreaterThanOrEqual(5);
    expect(resourceSlugs.size).toBe(resources.length);
    expect(new Set(resources.map((resource) => resource.id)).size).toBe(resources.length);

    for (const category of resourceCategories) {
      expect(
        resources.some((resource) => resource.category === category.id),
        category.id,
      ).toBe(true);
    }

    for (const resource of resources) {
      expect(categoryIds.has(resource.category), resource.slug).toBe(true);
      expect(resource.content.length).toBeGreaterThan(0);
      expect(resource.description.length).toBeGreaterThan(20);
      expect(resource.useCase.length).toBeGreaterThan(10);
    }
  });

  it("solo ofrece descargas cuando el archivo existe", () => {
    for (const resource of resources) {
      if (!resource.download) continue;

      expect(resource.download.href.startsWith("/recursos/")).toBe(true);
      const filePath = join(process.cwd(), "public", resource.download.href);
      expect(existsSync(filePath), resource.download.href).toBe(true);
    }
  });

  it("las referencias a cursos de cada recurso existen", () => {
    for (const resource of resources) {
      for (const slug of resource.relatedCourseSlugs ?? []) {
        expect(courseSlugs.has(slug), `${resource.slug} → ${slug}`).toBe(true);
      }
    }
  });
});

describe("glosario emprendedor", () => {
  it("tiene categorías y términos con identificadores únicos", () => {
    expect(glossaryCategories.length).toBeGreaterThanOrEqual(3);
    expect(new Set(glossaryCategories.map((category) => category.id)).size).toBe(
      glossaryCategories.length,
    );
    expect(glossaryTerms.length).toBeGreaterThanOrEqual(20);
    expect(new Set(glossaryTerms.map((term) => term.id)).size).toBe(glossaryTerms.length);
    expect(new Set(glossaryTerms.map((term) => term.term)).size).toBe(glossaryTerms.length);
  });

  it("cada término tiene definición y una categoría existente", () => {
    for (const term of glossaryTerms) {
      expect(glossaryCategoryIds.has(term.category), term.id).toBe(true);
      expect(term.term.length, term.id).toBeGreaterThan(0);
      expect(term.definition.length, term.id).toBeGreaterThan(20);
    }
  });

  it("las referencias a cursos del glosario existen", () => {
    for (const term of glossaryTerms) {
      for (const slug of term.relatedCourseSlugs ?? []) {
        expect(courseSlugs.has(slug), `${term.id} → ${slug}`).toBe(true);
      }
    }
  });
});

describe("catálogo de herramientas", () => {
  it("solo las herramientas disponibles tienen enlace", () => {
    expect(new Set(tools.map((tool) => tool.id)).size).toBe(tools.length);

    for (const tool of tools) {
      if (tool.status === "disponible") {
        expect(tool.href, tool.id).toBeTruthy();
      } else {
        expect(tool.href, tool.id).toBeUndefined();
        expect(tool.ownerNote?.toLowerCase(), tool.id).toContain("previsto");
      }
    }
  });

  it("los accesos externos usan HTTPS y los internos son rutas del campus", () => {
    for (const tool of tools) {
      if (!tool.href) continue;

      if (tool.origin === "externo") {
        expect(tool.href, tool.id).toMatch(/^https:\/\//);
      } else {
        expect(tool.href, tool.id).toMatch(/^\//);
      }
    }
  });

  it("incluye el diagnóstico del campus y las dos herramientas externas solicitadas", () => {
    const diagnostic = tools.find((tool) => tool.id === "diagnostico-emprendedor");
    const costoClaro = tools.find((tool) => tool.id === "costoclaro");
    const yoEmprendedor = tools.find((tool) => tool.id === "yo-emprendedor");

    expect(diagnostic?.href).toBe("/herramientas/diagnostico");
    expect(diagnostic?.origin).toBe("campus");
    expect(costoClaro?.href).toBe("https://calculodecosto.vercel.app/");
    expect(yoEmprendedor?.href).toBe("https://yoemprendedor.com.ar/login/?next=/");
  });
});

describe("identidad institucional", () => {
  it("incluye el escudo institucional como archivo PNG válido", () => {
    const crestPath = join(
      process.cwd(),
      "public",
      "institucional",
      "escudo-escuela-normal-9.png",
    );

    expect(existsSync(crestPath)).toBe(true);
    expect(readFileSync(crestPath).subarray(0, 8)).toEqual(
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    );
  });
});

describe("rutas para la Oficina de Empleo", () => {
  it("tienen identificadores únicos y todas sus referencias existen", async () => {
    const { employmentRoutes } = await import("@/content/employment-routes");
    const { resolveRouteStep } = await import("@/lib/employment-routes");

    expect(employmentRoutes.length).toBeGreaterThanOrEqual(4);
    expect(new Set(employmentRoutes.map((route) => route.id)).size).toBe(employmentRoutes.length);

    for (const route of employmentRoutes) {
      expect(route.programs.length, route.id).toBeGreaterThan(0);
      expect(route.steps.length, route.id).toBeGreaterThanOrEqual(3);
      for (const step of route.steps) {
        expect(resolveRouteStep(step), `${route.id}: ${JSON.stringify(step)}`).not.toBeNull();
      }
    }
  });
});
