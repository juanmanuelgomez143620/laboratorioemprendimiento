# Prompt para Astra / ChatGPT — Mejora visual y funcional del Campus Emprendedor

Actuá como un equipo senior de producto, diseño UX/UI, arquitectura frontend y accesibilidad. Tu tarea es proponer una mejora profunda (no superficial) del sitio "NORMAL 9 IMPULSA — Campus Emprendedor", tanto visual como funcional, manteniendo su identidad institucional, su alcance y sus restricciones. No te limites a "hacerlo más lindo": necesito un rediseño pensado, escalable y verificable.

## 1. Contexto del proyecto

- Nombre público: Campus Emprendedor — NORMAL 9 IMPULSA.
- Institución: Escuela Normal Superior N.º 9 "Juan XXIII", Wanda, Misiones, Argentina. Modalidad TGA. Aula-Taller de Simulación Empresarial N.º 17. Departamento de Ciencias Económicas.
- Propósito: campus educativo abierto para acompañar los primeros pasos de un emprendimiento.
- Contenido: 4 cursos aplicados, 24 lecciones, autoevaluaciones (10 preguntas, aprobación ≥ 70 %), biblioteca con 9 recursos, glosario con 30 términos, 18 preguntas frecuentes, diagnóstico inicial de 10 preguntas, herramientas externas claramente identificadas, una jornada modelo demostrativa, páginas institucionales, constancia de actividad educativa de demostración.
- Stack: Next.js 16 (App Router, exportación estática), React 19, TypeScript estricto, Tailwind CSS 4 (configuración CSS-first), Lucide React, Manrope variable autoalojada. Sin backend, sin base de datos, sin autenticación, sin APIs pagas, sin secretos.
- Público: adultos de la comunidad, estudiantes de 5.º y 6.º año TGA, docentes, personas que quieren iniciar o mejorar un emprendimiento. Contexto de aula y proyección. Conectividad variable.
- Estado actual: versión inicial verificada (68 pruebas, Lighthouse 100 en accesibilidad, buenas prácticas y SEO en una página de curso). 61 páginas estáticas generadas.

## 2. Restricciones inamovibles (no negociables)

- No inventar convenios, avales, financiamientos, fechas, disertantes, métricas de impacto ni resultados.
- No prometer certificaciones oficiales, créditos, subsidios ni beneficios. La constancia es de demostración.
- Las herramientas externas (CostoClaro, Yo Emprendedor) son de terceros: se enlazan, no se modifican ni se gestionan sus datos.
- Sin backend ni panel administrativo en esta versión. El contenido se edita en TypeScript y se publica con un nuevo deploy.
- Privacidad: progreso local (localStorage), sin cuentas, sin cookies de seguimiento, sin analítica de terceros, sin envío de datos. El diagnóstico no se almacena. El nombre de la constancia se usa solo en memoria.
- Accesibilidad: mantener y mejorar WCAG 2.2 AA, navegación por teclado, foco visible, `prefers-reduced-motion`, impresión A4, PWA y modo sin conexión.
- Rendimiento: exportación estática, Core Web Vitals excelentes, imágenes optimizadas.
- Idioma: español de Argentina, tono claro y directo. Los ejemplos ficticios siempre identificados.
- No romper las pruebas de contenido ni las referencias existentes.

## 3. Lo que ya funciona bien (no destruir)

- Sistema de diseño con tokens `brand`/`sea`, sombras, componentes (`btn`, `card`, `badge`, `input`).
- Hero con ruta sugerida, tarjetas de curso, diagnóstico, constancia, progreso local con copia de seguridad en JSON, glosario con búsqueda sin acentos, preguntas frecuentes, PWA.
- Accesibilidad Lighthouse 100.

## 4. Objetivo de la mejora

Elevar el sitio a un nivel de producto educativo moderno y confiable: experiencia más clara, motivadora y personalizada sin backend; identidad visual más distintiva y coherente; interacciones que aumenten la finalización de cursos y el uso de recursos; medición local de progreso y logros; mejor navegación y descubrimiento; cero regresiones en accesibilidad y privacidad.

## 5. Entregables que espero (estructura de respuesta)

A. Diagnóstico UX/UI actual: fortalezas, fricciones y oportunidades, con evidencia de las páginas descritas.
B. Tres direcciones de diseño (conservadora, evolutiva, ambiciosa) con pros/contras y recomendación.
C. Sistema de diseño v2: tokens (color, tipografía, espaciado, radios, sombras, motion), evaluación de dark mode, componentes clave y estados.
D. Arquitectura de información y navegación: encabezado, pie, breadcrumbs, búsqueda global, filtros, rutas.
E. Rediseño página por página de las ocho más importantes (Inicio, Cursos, Curso, Lección, Evaluación, Biblioteca, Herramientas/Diagnóstico, Mi progreso) con wireframes textuales y jerarquía.
F. Funcionalidades nuevas priorizadas (MoSCoW) con esfuerzo/impacto y dependencias, implementables sin backend.
G. Plan de datos local (esquema `localStorage` v2, migración, exportación/importación, copias de seguridad, límites, privacidad).
H. Accesibilidad y rendimiento: checklist medible y pruebas.
I. Plan de implementación por sprints (4 a 6) con criterios de aceptación y archivos a tocar.
J. Riesgos, anti-patrones a evitar y "no hacer".
K. Snippets de código representativos (TSX/Tailwind) para tres componentes nuevos y dos patrones de interacción.
L. Métricas de éxito sin tracking externo (métricas locales opt-in).

## 6. Preguntas que debés responder explícitamente

- ¿Cómo hacer que el sitio se sienta "premium" sin perder sobriedad institucional?
- ¿Qué mejoras funcionales tienen mayor impacto en la finalización de cursos y la retención local?
- ¿Cómo personalizar sin cuentas (progreso, recomendaciones, recordatorios locales)?
- ¿Cómo mejorar el descubrimiento de contenido (búsqueda global, etiquetas, rutas)?
- ¿Cómo visualizar el progreso (mapa de ruta, rachas locales, logros) sin gamificación tóxica?
- ¿Cómo mejorar la constancia (vista previa, exportación a PDF, código QR de verificación? evaluar privacidad)?
- ¿Cómo mejorar la impresión y el uso en aula (modo presentación, proyección)?
- ¿Cómo mejorar el modo sin conexión (PWA, precache, indicadores)?
- ¿Cómo mantener Lighthouse 100 y mejorar los Core Web Vitals?
- ¿Qué no conviene hacer y por qué?

## 7. Nivel de ambición

No propongas cambios triviales ("cambiar colores", "agregar animaciones"). Cada propuesta debe incluir: problema, solución, justificación, impacto esperado, costo, riesgo, métrica de validación y cómo se implementa en este stack. Priorizá soluciones robustas, reutilizables y testables.

## 8. Formato de salida

- Idioma español (Argentina).
- Usá tablas para priorización y checklists.
- Incluí diagramas en texto (ASCII o Mermaid) para los flujos clave.
- Incluí código real (TSX/Tailwind) cuando propongas componentes.
- Marcá claramente lo que requiere decisión del equipo frente a lo que es recomendación directa.
- No inventes datos institucionales.
- Si detectás una contradicción entre una mejora propuesta y una restricción, explicitála y proponé una alternativa compatible.
