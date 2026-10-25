import type { MetadataRoute } from "next";
import { courses } from "@/content/courses";
import { resources } from "@/content/resources";
import { siteUrl } from "@/lib/site-url";

const baseUrl = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/cursos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/biblioteca`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/herramientas`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/herramientas/diagnostico`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/jornadas`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/proyecto`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/aula-taller`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/privacidad`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const coursePages: MetadataRoute.Sitemap = courses.flatMap((course) => [
    {
      url: `${baseUrl}/cursos/${course.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cursos/${course.slug}/evaluacion`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({
        url: `${baseUrl}/cursos/${course.slug}/lecciones/${lesson.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
  ]);

  const resourcePages: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${baseUrl}/biblioteca/${resource.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...coursePages, ...resourcePages];
}
