# Cómo agregar y editar contenido

Esta guía explica cómo mantener el campus sin tocar la lógica de las páginas. Todo el contenido vive en `src/content/` y se valida con TypeScript y Vitest.

Después de cualquier cambio:

```bash
npm run check
```

Si una referencia, una evaluación o una descarga queda inválida, las pruebas de contenido lo detectan antes del deploy.

---

## 1. Mapa rápido

| Qué querés cambiar | Archivo |
| --- | --- |
| Datos de la escuela, enlaces externos, avisos | `src/content/site.ts` |
| Cursos y lecciones | `src/content/courses/` |
| Registro y orden de los cursos | `src/content/courses/index.ts` |
| Biblioteca | `src/content/resources.ts` |
| Categorías de la biblioteca | `src/content/resource-categories.ts` |
| Glosario emprendedor | `src/content/glossary.ts` |
| Preguntas frecuentes | `src/app/preguntas-frecuentes/page.tsx` |
| Herramientas | `src/content/tools.ts` |
| Diagnóstico | `src/content/diagnostic.ts` |
| Jornadas | `src/content/jornadas.ts` |
| Tipos compartidos | `src/types/` |
| Cálculo de puntajes | `src/lib/quiz.ts` |
| Progreso local | `src/lib/progress.ts` |
| Resultado del diagnóstico | `src/lib/diagnostic.ts` |

---

## 2. Agregar un curso

### 2.1 Crear el archivo

Copiá un curso existente como base, por ejemplo `src/content/courses/costos-y-precios.ts`, y renombralo. Después ajustá:

- `id`: clave interna del progreso. **No lo cambies** una vez publicado: se perdería el avance guardado.
- `slug`: dirección URL (`/cursos/mi-nuevo-curso`). Debe ser único, en minúsculas y con guiones.
- `title`, `shortTitle`, `subtitle`, `description`, `longDescription`.
- `durationMinutes`, `level` (`"Inicial"` o `"Intermedio"`).
- `accent`: `"azul"`, `"verde"`, `"celeste"` o `"profundo"`.
- `icon`: `"lightbulb"`, `"calculator"`, `"palette"` o `"laptop"`.
- `objectives` y `audience` (al menos un elemento en cada uno).
- `project`: título, descripción y entregables del trabajo final.
- `modules`, `finalQuiz`, `resourceSlugs` y `toolIds`.

### 2.2 Estructura mínima

```ts
import type { Course } from "@/types/course";

export const miNuevoCurso: Course = {
  id: "mi-nuevo-curso",
  slug: "mi-nuevo-curso",
  title: "Título completo del curso",
  shortTitle: "Título corto",
  subtitle: "Una frase que explique qué resuelve",
  description: "Descripción para tarjetas y metadatos.",
  longDescription: "Descripción más extensa para la portada del curso.",
  durationMinutes: 160,
  level: "Inicial",
  accent: "azul",
  icon: "lightbulb",
  objectives: ["Objetivo 1", "Objetivo 2", "Objetivo 3"],
  audience: ["A quién está dirigido"],
  project: {
    title: "Entregable final del curso",
    description: "Qué documento o herramienta construye el estudiante.",
    deliverables: ["Pieza 1", "Pieza 2", "Pieza 3"],
  },
  modules: [
    {
      id: "modulo-1",
      title: "Empezar",
      description: "Qué se trabaja en este módulo.",
      lessons: [
        // Ver sección 3
      ],
    },
  ],
  finalQuiz: {
    title: "Autoevaluación final",
    description: "Diez preguntas para revisar lo aprendido.",
    passingScore: 70,
    questions: [
      // Ver sección 4
    ],
  },
  resourceSlugs: [],
  toolIds: [],
};
```

### 2.3 Registrarlo

En `src/content/courses/index.ts`:

```ts
import { miNuevoCurso } from "./mi-nuevo-curso";

export const courses: Course[] = [
  miPrimerEmprendimiento,
  costosYPrecios,
  marcaIdentidad,
  herramientasDigitales,
  miNuevoCurso,
];
```

El orden del arreglo define el orden visible en el catálogo.

### 2.4 Revisar textos fijos

Hoy las páginas usan la expresión «cuatro cursos» en algunos textos comerciales. Si agregás un curso, buscá y actualizá esas menciones:

```bash
rg "cuatro cursos|Cuatro cursos|Cuatro recorridos" src
```

Las estadísticas del inicio y del catálogo se calculan desde `courses`, así que se actualizan solas. Las pruebas aceptan cuatro o más cursos, pero exigen que los cuatro cursos fundacionales sigan existiendo.

---

## 3. Agregar una lección

Cada lección debe tener `id` y `slug` únicos dentro del curso. El `id` es la clave que se guarda en el progreso; el `slug` forma la URL.

```ts
{
  id: "mi-leccion",
  slug: "mi-leccion",
  title: "Título de la lección",
  summary: "Un resumen de una o dos frases.",
  estimatedMinutes: 20,
  objectives: ["Qué va a poder hacer al terminar"],
  blocks: [
    { type: "paragraph", text: "Texto introductorio." },
    { type: "heading", text: "Un subtítulo", level: 2 },
    { type: "list", items: ["Primer punto", "Segundo punto"] },
    {
      type: "callout",
      variant: "tip",
      title: "Consejo",
      text: "Una recomendación práctica.",
    },
    {
      type: "example",
      title: "Ejemplo ficticio",
      text: "Descripción del caso.",
      disclaimer: "Ejemplo ficticio con fines educativos.",
    },
    {
      type: "activity",
      title: "Actividad",
      intro: "Qué vas a hacer.",
      steps: ["Paso 1", "Paso 2"],
      closing: "Qué revisar al terminar.",
    },
  ],
  keyIdeas: ["Idea central 1", "Idea central 2"],
  resourceSlugs: ["ficha-de-costos"],
  toolIds: ["costoclaro"],
}
```

### Bloques disponibles

| Tipo | Campos principales |
| --- | --- |
| `paragraph` | `text` |
| `heading` | `text`, `level` (2 o 3) |
| `list` | `items`, `ordered` opcional |
| `callout` | `variant` (`tip`, `info`, `warning`), `title`, `text` |
| `example` | `title`, `text`, `disclaimer` opcional |
| `activity` | `title`, `intro`, `steps`, `closing` opcional |
| `table` | `caption` opcional, `headers`, `rows` |
| `checklist` | `title` opcional, `items` |
| `fields` | `title` opcional, `items` con `label`, `hint`, `lines` |
| `quote` | `text`, `source` opcional |

Las pruebas exigen al menos **5 lecciones** por curso y **3 bloques** por lección. Para mantener la calidad editorial del campus se recomiendan 6 lecciones por curso, entre 24 y 32 minutos por lección, un cierre con ideas clave y un entregable final. Los módulos aplicados pueden vivir en `src/content/courses/modules/` e importarse desde el archivo del curso.

### Referencias

- `resourceSlugs` debe apuntar a recursos existentes.
- `toolIds` debe apuntar a herramientas existentes.
- Si no hay referencias, usá `[]` u omití el campo.
- No agregues enlaces externos dentro de bloques de contenido: usá el catálogo de herramientas para que queden rotulados.

---

## 4. Editar la autoevaluación

Cada curso tiene `finalQuiz`:

```ts
finalQuiz: {
  title: "Autoevaluación final",
  description: "Diez preguntas para revisar lo aprendido.",
  passingScore: 70,
  questions: [
    {
      id: "pregunta-1",
      prompt: "¿Qué conviene hacer antes de invertir?",
      options: [
        { text: "Comprar todo el equipamiento." },
        { text: "Validar con posibles clientes." },
        { text: "Registrar el nombre." },
      ],
      correctIndex: 1, // cero-based: la segunda opción
      explanation: "Validar reduce el riesgo antes de invertir.",
    },
  ],
}
```

Reglas:

- `passingScore` debe ser **70**.
- `correctIndex` empieza en **0**.
- Cada pregunta necesita al menos 2 opciones y una explicación.
- No repitas `id` dentro de la evaluación.
- Las preguntas sin responder se cuentan como incorrectas.
- Se aprueba con la proporción exacta: 7/10 = 70 % aprueba; 2/3 = 67 % no aprueba aunque se muestre 67 %.
- Se conservan hasta 25 intentos por curso.

Después de editar una evaluación, probá el flujo real en `/cursos/TU-CURSO/evaluacion`.

---

## 5. Agregar un recurso a la biblioteca

En `src/content/resources.ts`:

```ts
{
  id: "mi-recurso",
  slug: "mi-recurso",
  title: "Nombre del recurso",
  description: "Qué es y para qué sirve, en una o dos frases.",
  category: "costos",
  type: "Plantilla",
  tags: ["costos", "precio"],
  useCase: "En qué momento conviene usarlo.",
  content: [
    // Mismos bloques que una lección
  ],
  download: {
    href: "/recursos/mi-plantilla.csv",
    label: "Descargar plantilla CSV",
    fileType: "CSV",
  },
  relatedCourseSlugs: ["costos-y-precios"],
}
```

### Categorías válidas

- `administracion`
- `costos`
- `marketing`
- `herramientas`
- `planificacion`

Están definidas en `src/content/resource-categories.ts`. Si agregás una categoría nueva, actualizá el tipo `ResourceCategoryId`, el arreglo de categorías y las pruebas.

### Tipos válidos

`"Plantilla"`, `"Guía"`, `"Ficha"`, `"Modelo"` o `"Lista de verificación"`.

### Descargas

- El archivo debe existir realmente en `public/recursos/`.
- El campo `download` es opcional: **no lo agregues si no hay archivo**.
- Las pruebas verifican que cada `download.href` exista en disco.
- Preferí CSV en UTF-8 con BOM para que Excel reconozca los acentos.
- No publiques PDFs, planillas ni imágenes sin revisar derechos y datos personales.

### Cursos relacionados

`relatedCourseSlugs` debe usar **slugs reales**, no ids internos. Por ejemplo, para el curso de marca:

```ts
relatedCourseSlugs: ["mi-marca-y-mi-identidad-comercial"]
```

Las pruebas fallan si el slug no existe.

---

## 6. Agregar o cambiar una herramienta

En `src/content/tools.ts`:

```ts
{
  id: "mi-herramienta",
  name: "Nombre",
  description: "Qué hace y a quién ayuda.",
  category: "Costos y rentabilidad",
  status: "disponible",
  origin: "externo",
  href: "https://ejemplo.com/",
  linkLabel: "Abrir herramienta",
  ownerNote: "Aplicación externa. No es administrada por la escuela.",
  tags: ["costos"],
  icon: "calculator",
}
```

Reglas:

- `status: "disponible"` **debe** tener `href` real.
- `status: "previsto"` **no debe** tener `href`; la interfaz lo muestra como «Proyecto previsto».
- `origin: "externo"` se abre en pestaña nueva y muestra el dominio.
- `origin: "campus"` usa navegación interna.
- Un enlace externo debe ser HTTPS, estable y corresponder a un servicio existente.
- No inventes herramientas, dominios ni integraciones.
- Iconos disponibles: `calculator`, `compass`, `briefcase`, `receipt`, `palette`, `catalog`, `shield`.

Si la herramienta es externa, agregá una `ownerNote` que aclare que el campus no la administra y que puede requerir registro.

---

## 7. Editar el diagnóstico

### Preguntas y opciones

En `src/content/diagnostic.ts`:

```ts
{
  id: "org-registro",
  area: "organizacion",
  prompt: "¿Cómo registrás las ventas y los gastos?",
  help: "Pensá en los últimos dos meses.",
  options: [
    { label: "No los registro.", points: 0 },
    { label: "Tomo notas sueltas.", points: 1 },
    { label: "Anoto la mayoría.", points: 2 },
    { label: "Mantengo un registro ordenado.", points: 3 },
  ],
}
```

- Áreas válidas: `organizacion`, `costos`, `promocion`, `digital`.
- Cada pregunta debe tener 4 opciones con puntajes de 0 a 3.
- El máximo del área se calcula sumando el puntaje máximo de cada pregunta, no un valor fijo.
- El resultado general es el promedio simple de los porcentajes de las cuatro áreas.
- Los niveles se asignan por porcentaje: `< 40` inicial, `< 65` en marcha, `< 85` consolidado, `≥ 85` avanzado.

### Recomendaciones

En `src/lib/diagnostic.ts`, cada área tiene `AREA_RECOMMENDATIONS`. Los enlaces internos deben existir y los externos deben estar rotulados con `external: true`.

Si agregás o renombrás un recurso o curso, actualizá las recomendaciones y ejecutá las pruebas.

### Privacidad

El diagnóstico no guarda respuestas ni resultados. No agregues persistencia, envío a servidores ni campos personales sin una revisión de privacidad y una decisión institucional explícita.

---

## 8. Jornadas

`src/content/jornadas.ts` contiene la **jornada modelo**. Está marcada como demostración y no debe presentarse como una actividad programada.

Reglas:

- No agregues fechas, horarios, disertantes, inscripciones ni cupos sin confirmación institucional.
- No inventes fotos, logos, avales ni testimonios.
- Cuando exista una jornada real y autorizada, agregá los datos verificados y cambiá el estado de la agenda.
- Las imágenes de participantes requieren autorización institucional y de las personas retratadas.

---

## 9. Datos institucionales y avisos

`src/content/site.ts` concentra:

- nombre y datos de la escuela;
- modalidad y Aula-Taller;
- aviso de estado de la propuesta;
- aviso de la constancia;
- aviso de almacenamiento;
- enlaces externos;
- navegación principal.

No cambies los avisos para sugerir avales, convenios o financiamiento que no estén confirmados por escrito. Si la situación institucional cambia, actualizá el texto y dejá constancia de la fuente y la fecha de verificación.

### Escudo institucional

El escudo incorporado para esta versión está en `public/institucional/escudo-escuela-normal-9.png`. Se muestra en el pie de página y en la tarjeta institucional de `/proyecto`, a través de `src/components/ui/InstitutionalCrest.tsx`.

Si la escuela entrega una versión autorizada en mejor resolución, reemplazá el archivo conservando el mismo nombre o actualizá la ruta y las dimensiones en el componente. El escudo es una referencia de identidad institucional: no debe presentarse como sello de certificación, aval o convenio.

### Glosario y preguntas frecuentes

El glosario vive en `src/content/glossary.ts`. Cada término necesita:

- `id` único, en minúsculas y con guiones;
- `term`, `category` y `definition` (más de 20 caracteres);
- `example` opcional, siempre ilustrativo y sin datos reales;
- `relatedCourseSlugs` opcional, con slugs de cursos existentes.

Las pruebas de contenido verifican que las categorías y los términos no se repitan y que las referencias a cursos existan. Si agregás una categoría, actualizá `glossaryCategories` y el texto de la página `/glosario`.

Las preguntas frecuentes están en `src/app/preguntas-frecuentes/page.tsx`. Mantené las respuestas alineadas con los avisos de `src/content/site.ts` y con el comportamiento real del campus. No agregues promesas de certificación oficial, plazos, avales ni datos de contacto que no estén verificados.

---

## 10. Estilo y accesibilidad del contenido

- Escribí en español de Argentina, con oraciones cortas y ejemplos concretos.
- Explicá las palabras técnicas la primera vez que aparecen.
- Usá ejemplos ficticios y aclaralos con el campo `disclaimer`.
- No uses imágenes decorativas que no aporten; si agregás imágenes, incluí `alt` y optimizalas.
- Evitá tablas anchas: deben poder leerse en celular.
- No prometas resultados, ganancias, créditos ni certificaciones.
- Diferenciá siempre educación de asesoramiento profesional.
- Revisá los textos en celular y en proyector antes de publicar.

---

## 11. Checklist antes de publicar

```bash
npm run check
npm run dev
```

Luego verificá en **http://localhost:3100**:

- [ ] El curso nuevo aparece en `/cursos` y en el inicio.
- [ ] Se puede entrar a cada lección y marcar/desmarcar su completion.
- [ ] La evaluación corrige, explica y permite repetir.
- [ ] La constancia sigue bloqueada sin todos los requisitos.
- [ ] Los recursos relacionados abren y las descargas funcionan.
- [ ] Las herramientas externas abren en pestaña nueva y están rotuladas.
- [ ] El diagnóstico sigue completo y no guarda respuestas.
- [ ] Exportar e importar la copia del progreso funciona y pide confirmación antes de reemplazar.
- [ ] El glosario y las preguntas frecuentes no contradicen los avisos institucionales.
- [ ] No hay enlaces rotos ni botones sin acción.
- [ ] El contenido se lee bien en celular y en proyector.
- [ ] No se agregaron avales, fechas, estadísticas ni socios sin verificar.
- [ ] `NEXT_PUBLIC_SITE_URL` está configurada en Vercel con el dominio real.

Para una revisión más rápida de enlaces internos:

```bash
rg 'href="/' src
```
