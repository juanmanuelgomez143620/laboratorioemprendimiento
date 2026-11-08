# IA aplicada a emprendimientos: usos actuales y propuestas de desarrollo de software

> Documento de apoyo para el campus NORMAL 9 IMPULSA. Español de Argentina. Contenido educativo, no constituye asesoramiento legal, contable ni financiero. Las cifras y referencias provienen de fuentes públicas citadas al final; no se inventan datos.

## 1. Panorama actual (2026)

La inteligencia artificial dejó de ser una herramienta aislada y pasó a ser un **componente operativo** de las empresas. Tres cambios marcan el escenario actual:

1. **De chatbots a agentes.** Un agente de IA no solo responde preguntas: ejecuta tareas, consulta sistemas, toma decisiones acotadas y da seguimiento a procesos. En 2026, el 80 % de las organizaciones que invierten en agentes reportan retorno económico medible, no proyectado (State of AI Agents Report, 2026).
2. **Del software comprado al software construido.** Las herramientas de programación asistida por IA (coding agents) permiten a equipos pequeños construir internamente funciones que antes se compraban como software empaquetado. McKinsey (2026) señala que los agentes de desarrollo aceleran la opción de construir en casa en lugar de comprar.
3. **Barrera de entrada derrumbada.** Una startup de pocas personas accede hoy al mismo nivel analítico que una gran empresa, porque la IA está integrada en las plataformas que ya usan (Salesforce, 2026). El costo no es el principal obstáculo; lo son la calidad de los datos, la madurez digital y la capacitación (IBM, 2026; artículo SciELO sobre PYMES en economías emergentes, 2026).

Para emprendimientos de América Latina y el Caribe, el estudio *Startups x IA* del BID Lab (2026) muestra que la adopción es creciente pero desigual: la IA se usa como palanca estratégica en productos, procesos y modelos de negocio, con mejores resultados cuando se vincula a problemas concretos y medibles.

## 2. Usos actuales de la IA en las empresas

### 2.1 Por función de negocio

| Función | Uso actual | Valor para un emprendimiento |
| --- | --- | --- |
| Atención al cliente | Chatbots y agentes autónomos 24/7, resolución de consultas, escalado a humano | Reduce carga del fundador, mejora tiempos de respuesta |
| Ventas | Calificación de leads, seguimiento automatizado, agentes de venta/marketing, pronóstico | Más conversiones con el mismo equipo |
| Marketing | Generación de copys, imágenes, videos, segmentación, A/B testing, calendario de contenidos | Contenido constante con bajo presupuesto |
| Operaciones | Automatización de procesos (RPA + IA), extracción de datos de documentos, inventario | Menos errores y horas manuales |
| Finanzas | Conciliación, categorización de gastos, proyecciones, detección de anomalías | Control de caja sin contador full-time |
| Recursos humanos | Filtrado de CV, onboarding, capacitación personalizada | Contratación más rápida y justa |
| Producto / desarrollo | Coding agents, generación de código, pruebas, documentación, refactor | MVP en semanas, no meses |
| Conocimiento | Búsqueda interna, resúmenes, asistentes sobre documentos propios (RAG) | El equipo encuentra respuestas sin depender de una persona |

### 2.2 Tres niveles de madurez

1. **Asistencia (copiloto):** la IA ayuda a una persona a hacer una tarea (escribir un email, generar código). Requiere revisión humana.
2. **Automatización (workflow):** la IA ejecuta pasos encadenados con reglas y aprobaciones (ej.: recibir pedido → validar stock → generar factura → notificar).
3. **Agencia (agente autónomo):** la IA decide y actúa dentro de límites definidos, reportando resultados. Es el nivel de mayor impacto y mayor riesgo.

Recomendación para emprendimientos: empezar en el nivel 1 o 2, medir, y solo pasar al nivel 3 donde el proceso esté bien entendido y el costo del error sea bajo.

### 2.3 Agentes de IA: qué son y cómo se usan

Un agente combina: un modelo de lenguaje, acceso a herramientas (APIs, bases de datos, archivos), memoria de contexto y un objetivo. Patrones comunes:

- **Agente de atención:** responde consultas, crea tickets, deriva casos.
- **Agente de ventas:** califica, envía mensajes, agenda reuniones.
- **Agente de investigación/reporting:** busca información, arma informes, actualiza dashboards.
- **Agente de desarrollo:** escribe, prueba y despliega código.
- **Agente de operaciones:** procesa documentos, actualiza sistemas, concilia.

La clave de éxito no es la tecnología sola, sino **definir bien el alcance, los datos y las métricas** (Tec de Monterrey / incMTY, 2026).

## 3. Barreras y consideraciones para PYMES y emprendimientos

Según el artículo sobre adopción de IA en PYMES de economías emergentes (SciELO, 2026) y el estudio del BID (2026), las principales barreras son:

- Baja madurez digital previa (sin procesos digitalizados, no hay IA que automatizar).
- Calidad y disponibilidad de datos.
- Costos de software, consultoría, capacitación e infraestructura.
- Falta de personal con habilidades técnicas.
- Incertidumbre sobre ROI y proveedores.

Recomendaciones derivadas:

- Adoptar de forma progresiva, con casos de uso simples, medibles y vinculados a problemas concretos del negocio (atención, marketing, ventas, e-commerce, automatización básica, análisis comercial).
- Priorizar herramientas que se integren con el stack actual (evitar silos).
- Medir siempre: tiempo ahorrado, costo por atención, tasa de conversión, error humano reducido.
- Cuidar datos personales: minimizar, no almacenar lo innecesario, informar al usuario, y cumplir normativa local (en Argentina, Ley 25.326 de Protección de Datos Personales).

## 4. Propuestas prácticas de desarrollo de software para emprendedores

Cada propuesta incluye: problema, solución, alcance de MVP, stack sugerido, esfuerzo estimado y métrica de éxito. Son propuestas educativas; los costos y tiempos son orientativos y deben validarse en cada contexto.

### Propuesta 1 — Asistente de atención al cliente con RAG

- **Problema:** el fundador responde las mismas consultas por WhatsApp/email.
- **Solución:** chatbot entrenado con la documentación del negocio (productos, precios, políticas, FAQ) que responde y deriva a humano cuando no sabe.
- **MVP:** widget web + canal WhatsApp (vía API) + panel de conversaciones + botón "hablar con humano".
- **Stack:** Next.js, API de modelo (OpenAI/Anthropic), base vectorial (pgvector o Supabase), WhatsApp Business API.
- **Esfuerzo:** 3-6 semanas.
- **Métrica:** % de consultas resueltas sin humano, tiempo de respuesta promedio, satisfacción (CSAT).

### Propuesta 2 — Agente de calificación y seguimiento de leads

- **Problema:** leads que llegan por formularios/redes se pierden por falta de seguimiento.
- **Solución:** agente que recibe el lead, califica según criterios, envía mensaje personalizado, agenda reunión y notifica al vendedor.
- **MVP:** formulario → cola de leads → mensajes automáticos (email/WhatsApp) → panel de pipeline → recordatorios.
- **Stack:** Next.js + Supabase/Postgres, cola de trabajos (BullMQ/Inngest), proveedor de email/WhatsApp, modelo de IA para personalización.
- **Esfuerzo:** 4-8 semanas.
- **Métrica:** tasa de respuesta, reuniones agendadas, tiempo hasta primer contacto.

### Propuesta 3 — Generador de contenido y calendario para redes

- **Problema:** el emprendedor no tiene tiempo ni presupuesto para contenido constante.
- **Solución:** herramienta que, a partir de un tema/producto, genera posts, carruseles y guiones de video, y arma un calendario de 30 días.
- **MVP:** formulario de marca (tono, audiencia, productos) → generación de piezas → editor → exportación CSV/calendario → programación manual.
- **Stack:** Next.js, modelo multimodal (texto+imagen), almacenamiento de assets, exportación CSV.
- **Esfuerzo:** 3-5 semanas.
- **Métrica:** piezas publicadas por semana, tiempo dedicado a contenido, engagement.

### Propuesta 4 — Control de caja y conciliación asistida por IA

- **Problema:** el emprendedor no sabe cuánto gana ni a dónde va el dinero.
- **Solución:** carga de movimientos (CSV/banco), categorización automática por IA, dashboard de caja, alertas de gastos inusuales, proyección de 13 semanas.
- **MVP:** importador CSV → categorización → dashboard → exportación → alertas por email.
- **Stack:** Next.js, Postgres, modelo para clasificación, librería de gráficos.
- **Esfuerzo:** 4-6 semanas.
- **Métrica:** tiempo de cierre mensual, errores de categorización, decisiones tomadas con datos.

### Propuesta 5 — Extractor y validador de documentos (facturas, remitos, CV)

- **Problema:** datos en papel/PDF que se transcriben a mano.
- **Solución:** subida de documentos, extracción estructurada por IA (OCR + LLM), validación contra reglas, exportación a CSV/Excel.
- **MVP:** carga de archivos → extracción → revisión humana → exportación → historial.
- **Stack:** Next.js, almacenamiento de archivos, OCR (Tesseract o servicio), modelo para estructurar, Postgres.
- **Esfuerzo:** 4-7 semanas.
- **Métrica:** tiempo por documento, tasa de acierto, correcciones manuales.

### Propuesta 6 — Sistema operativo digital del emprendimiento (dashboard unificado)

- **Problema:** herramientas dispersas (ventas, stock, clientes, tareas) sin visión única.
- **Solución:** panel que integra los módulos anteriores (atención, leads, contenido, caja, documentos) con un asistente de IA que responde preguntas sobre el negocio ("¿cuánto vendí esta semana?", "¿qué cliente no compró en 30 días?").
- **MVP:** autenticación, módulos básicos, búsqueda/consulta en lenguaje natural sobre los datos propios (RAG sobre la base del negocio).
- **Stack:** Next.js, Postgres, auth (NextAuth/Clerk), modelo para consultas, colas para tareas.
- **Esfuerzo:** 8-12 semanas (por fases).
- **Métrica:** adopción diaria, preguntas respondidas, tiempo para obtener un dato.

### Propuesta 7 — Asistente de costos y precios (variante del campus)

- **Problema:** el emprendedor no sabe cómo costear ni fijar precios.
- **Solución:** chat que guía el cálculo de costos (materia prima, mano de obra, overhead), sugiere margen, simula escenarios y genera una ficha de costos.
- **MVP:** formulario guiado → cálculo → simulador → exportación CSV → recomendaciones.
- **Stack:** Next.js, lógica de negocio en TypeScript, modelo para explicaciones y sugerencias.
- **Esfuerzo:** 2-4 semanas.
- **Métrica:** fichas de costos creadas, variación de precios, margen promedio.

## 5. Roadmap sugerido de adopción (para un emprendimiento)

1. **Semanas 1-2 — Diagnóstico:** listar procesos repetitivos, cuellos de botella y datos disponibles. Elegir un caso de uso con impacto alto y esfuerzo bajo.
2. **Semanas 3-6 — MVP asistido:** construir la propuesta más simple (nivel 1-2) con herramientas existentes + una integración propia. Medir línea base.
3. **Semanas 7-10 — Automatización:** conectar sistemas, agregar reglas y aprobaciones humanas. Documentar.
4. **Semanas 11-16 — Agente (opcional):** solo si el proceso es estable y el error es tolerable. Agregar monitoreo, límites y rollback.
5. **Continuo:** revisión mensual de métricas, costos de IA y calidad. Reentrenar/ajustar prompts y datos.

## 6. Consideraciones técnicas, éticas y legales

- **Privacidad por diseño:** no enviar datos personales sensibles a modelos externos sin consentimiento; anonimizar cuando sea posible; informar al usuario.
- **Transparencia:** avisar cuando se interactúa con IA; ofrecer canal humano.
- **Sesgos:** revisar resultados por género, edad, zona; no automatizar decisiones de alto impacto sin revisión.
- **Costos:** monitorear consumo de tokens/API; poner límites por usuario y alertas de gasto.
- **Seguridad:** validar entradas, evitar inyección de prompts, no exponer claves en el cliente.
- **Cumplimiento:** en Argentina, Ley 25.326 (datos personales), y normativa sectorial si aplica (salud, finanzas).
- **Propiedad:** definir quién es dueño del código, los datos y los prompts; documentar licencias de terceros.

## 7. Cómo presentar una propuesta a un emprendedor

Estructura recomendada (1 página):

1. **Problema** (en palabras del emprendedor, con número).
2. **Solución propuesta** (qué hace el software, no cómo).
3. **Alcance del MVP** (qué entra, qué no entra).
4. **Tiempo y costo estimados** (rangos, no promesas).
5. **Métrica de éxito** (cómo sabremos que funcionó).
6. **Riesgos y supuestos.**
7. **Próximo paso** (piloto de 2-4 semanas con un grupo pequeño).

## 9. Desarrollo en la práctica: de la idea al repositorio y la app

### 9.1 ¿Repositorio o aplicación?

La respuesta corta: **siempre un repositorio que contiene la aplicación**. El repositorio es la "fuente de verdad" del código; la aplicación es lo que se ejecuta. Para un emprendimiento:

- **Repositorio (GitHub/GitLab):** código, historial, ramas, colaboración, CI/CD, issues.
- **Aplicación:** el producto que usan los clientes (web, móvil, API).
- **Infraestructura:** dónde corre (Vercel, Render, Railway, Supabase, etc.).

No se desarrolla "en la nube" directamente sobre la app desplegada; se desarrolla en el repo y se despliega desde ahí. Esto permite volver atrás, revisar cambios y trabajar con agentes de IA de forma segura.

### 9.2 Stack recomendado para MVP de emprendimiento (2026)

| Capa | Opción sugerida | Por qué |
| --- | --- | --- |
| Frontend / full-stack | Next.js (App Router) + TypeScript + Tailwind | Un solo repo, SSR/SSG, ecosistema maduro, fácil de desplegar |
| Backend / API | Route Handlers de Next.js o Supabase Edge Functions | Sin servidor propio que mantener |
| Base de datos | Supabase (Postgres) o Neon | Postgres real, auth y storage incluidos, plan gratuito |
| Autenticación | Supabase Auth o Clerk | Registro/login listo, políticas RLS |
| IA | SDK oficial (OpenAI/Anthropic) + Vercel AI SDK | Streaming, tool calling, fácil de integrar |
| Colas / jobs | Inngest o Trigger.dev | Tareas en segundo plano sin infraestructura |
| Email | Resend | Simple, buena DX |
| Pagos | Stripe o Mercado Pago (LATAM) | Webhooks listos |
| Deploy | Vercel (frontend) + Supabase (datos) | CI/CD automático desde GitHub |
| Observabilidad | Sentry + logs de Vercel | Errores y rendimiento |

Para un MVP, evitar Kubernetes, microservicios y bases NoSQL complejas. Un solo repo full-stack es suficiente hasta ~10k usuarios.

### 9.3 Estructura de carpetas sugerida (Next.js)

```
mi-emprendimiento/
├── app/                    # Rutas y páginas (App Router)
│   ├── (marketing)/        # Landing, blog
│   ├── (app)/              # Área autenticada
│   └── api/                # Route Handlers (endpoints)
├── components/             # UI reutilizable
├── lib/                    # Lógica de negocio, clientes (db, ia, email)
├── content/                # Datos estáticos (como en este campus)
├── public/                 # Assets estáticos
├── tests/ o *.test.ts      # Pruebas (Vitest)
├── .env.example            # Variables de entorno documentadas
├── .github/workflows/      # CI (lint, test, build)
├── README.md
└── package.json
```

Regla: **nada secreto en el repo**. Las claves van en `.env.local` (ignorado) y en el panel del proveedor de deploy.

### 9.4 Flujo de trabajo con IA (coding agents)

Herramientas habituales en 2026: Claude Code, Cursor, GitHub Copilot, Windsurf, Aider. El flujo recomendado:

1. **Definir la tarea en un issue** (título, contexto, criterios de aceptación). Un issue = un cambio pequeño.
2. **Crear rama** `feat/nombre-corto` desde `main`.
3. **Pedir al agente** que implemente, con instrucciones claras: stack, convenciones, archivos a tocar, pruebas esperadas. Adjuntar el issue y archivos relevantes.
4. **Revisar el diff** antes de aceptar: seguridad, secretos, dependencias nuevas, lógica.
5. **Ejecutar localmente:** `npm run dev`, pruebas, typecheck, lint.
6. **Abrir PR** con descripción, capturas y checklist.
7. **CI ejecuta** lint + typecheck + tests + build. Si falla, corregir.
8. **Merge a main** → deploy automático a producción (o a preview).
9. **Verificar en producción** y cerrar el issue.

Buenas prácticas con agentes:
- Dar contexto del proyecto (README, convenciones) al inicio de cada sesión.
- Pedir cambios pequeños y revisables (no "haceme toda la app").
- Exigir pruebas para lógica de negocio.
- No dejar que el agente commitee secretos ni dependencias no auditadas.
- Revisar siempre el diff; el agente puede alucinar APIs o borrar código.

### 9.5 Pasos concretos para arrancar (día 1 a semana 2)

**Día 1 — Repositorio y base**
```bash
# Crear repo en GitHub (vacío, sin README para evitar conflictos)
git clone https://github.com/tu-usuario/mi-emprendimiento.git
cd mi-emprendimiento
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
npm install
git add . && git commit -m "chore: scaffold Next.js" && git push
```

**Día 2 — Variables y proveedores**
- Crear proyecto en Supabase, copiar `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
- Crear `.env.local` y `.env.example` (documentado).
- Agregar Vercel, conectar el repo, configurar variables de entorno.

**Día 3-5 — Primer feature (nivel 1, asistido)**
- Definir un caso de uso simple (ej.: formulario de contacto que guarda en DB y envía email).
- Implementar con agente de coding, con pruebas.
- Deploy a preview, probar en móvil.

**Semana 2 — Iteración**
- Agregar autenticación si hace falta.
- Integrar IA (un endpoint `/api/chat` con Vercel AI SDK).
- Configurar Sentry y alertas básicas.
- Documentar en README cómo correr y desplegar.

### 9.6 Integración de IA en el código (patrón recomendado)

```ts
// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: "Sos un asistente de atención al cliente de [negocio]. Respondé en español de Argentina, breve y claro. Si no sabés, derivá a humano.",
    messages,
  });
  return result.toDataStreamResponse();
}
```

Buenas prácticas:
- **System prompt versionado** en el repo (no hardcodeado en varios lugares).
- **Límites de tokens y rate limiting** por usuario/IP.
- **Logs de conversaciones** (sin datos sensibles) para mejorar prompts.
- **Fallback** a humano cuando la confianza es baja o el tema es sensible.
- **Costos:** usar modelos pequeños para tareas simples; reservar modelos grandes para razonamiento complejo.

### 9.7 Calidad, seguridad y datos

- **Pruebas:** Vitest para lógica, Playwright para flujos críticos (login, pago, chat).
- **TypeScript estricto:** `"strict": true`, sin `any` salvo justificación.
- **Lint + format:** ESLint + Prettier en CI.
- **Secretos:** nunca en el repo; rotar si se filtran; usar gestores (Vercel env, Supabase secrets).
- **Validación de entrada:** Zod en endpoints y formularios.
- **Privacidad:** minimizar datos, no guardar conversaciones con PII sin consentimiento, cumplir Ley 25.326 (Argentina).
- **Backups:** export periódico de la base de datos; probar restauración.

### 9.8 Monitoreo y costos de IA

- Dashboard de uso de tokens (OpenAI/Anthropic) con alertas de gasto.
- Límite por usuario (ej.: 50 mensajes/día) para evitar abuso.
- Métricas de producto: usuarios activos, conversaciones resueltas, tasa de derivación a humano, costo por conversación.
- Revisión mensual: ¿el modelo sigue siendo el adecuado? ¿Hay prompts que se pueden simplificar?

### 9.9 Cuándo NO construir (y comprar/usar SaaS)

Construir software propio tiene sentido cuando:
- El proceso es diferenciador o central al negocio.
- No existe SaaS que lo resuelva bien o el costo es alto.
- Se necesita integración profunda entre sistemas.

Usar SaaS/herramientas existentes cuando:
- Es una función estándar (email, pagos, CRM, helpdesk).
- El equipo es muy pequeño y el tiempo es escaso.
- El costo del SaaS es menor que el costo de desarrollo + mantenimiento.

Regla práctica: **comprar lo genérico, construir lo diferencial.** Y reevaluar cada 6 meses: los agentes de IA bajan el costo de construir, pero también el de comprar (muchos SaaS incorporan IA).

### 9.10 Checklist de salida a producción

- [ ] README con instrucciones de desarrollo y deploy.
- [ ] `.env.example` completo y actualizado.
- [ ] CI verde (lint, typecheck, tests, build).
- [ ] Variables de entorno configuradas en producción.
- [ ] Dominio y HTTPS configurados.
- [ ] Sentry o equivalente activo.
- [ ] Backups de base de datos probados.
- [ ] Página de privacidad y aviso de IA al usuario.
- [ ] Límites de uso y costos monitoreados.
- [ ] Plan de rollback (revertir deploy en 1 clic).

## 10. Fuentes

- Tec de Monterrey / incMTY (2026). *Así cambia la inteligencia artificial la forma de emprender en 2026.* https://conecta.tec.mx
- McKinsey (2026). *The state of AI in 2026: On the road to ROI.* https://www.mckinsey.com
- BID Lab (2026). *Startups x AI: un panorama de la adopción en América Latina y el Caribe.* https://publications.iadb.org
- State of AI Agents Report (2026). PDF citado.
- Salesforce México (2026). *Guía de las mejores herramientas de IA para pequeñas empresas en 2026.* https://www.salesforce.com/mx
- IBM (2026). *¿Qué es la inteligencia artificial en los negocios?* https://www.ibm.com/es-es/think/topics/artificial-intelligence-business
- SciELO Venezuela (2026). *Adopción de inteligencia artificial en PYMES de economías emergentes.* https://ve.scielo.org
- WIRED en Español (2026). *El futuro de la IA se escribe en las startups de Latinoamérica.* https://es.wired.com
- TechCrunch (2026). *Sierra raises $950M...* https://techcrunch.com

---

*Documento creado para apoyar la creación de propuestas prácticas de desarrollo de software para emprendedores. Actualizar con nuevas fuentes y casos locales.*

- Tec de Monterrey / incMTY (2026). *Así cambia la inteligencia artificial la forma de emprender en 2026.* https://conecta.tec.mx
- McKinsey (2026). *The state of AI in 2026: On the road to ROI.* https://www.mckinsey.com
- BID Lab (2026). *Startups x AI: un panorama de la adopción en América Latina y el Caribe.* https://publications.iadb.org
- State of AI Agents Report (2026). https://www.stateofaiagents.com (PDF citado).
- Salesforce México (2026). *Guía de las mejores herramientas de IA para pequeñas empresas en 2026.* https://www.salesforce.com/mx
- IBM (2026). *¿Qué es la inteligencia artificial en los negocios?* https://www.ibm.com/es-es/think/topics/artificial-intelligence-business
- SciELO Venezuela (2026). *Adopción de inteligencia artificial en PYMES de economías emergentes.* https://ve.scielo.org
- WIRED en Español (2026). *El futuro de la IA se escribe en las startups de Latinoamérica.* https://es.wired.com
- TechCrunch (2026). *Sierra raises $950M...* https://techcrunch.com

---

*Documento creado para apoyar la creación de propuestas prácticas de desarrollo de software para emprendedores. Actualizar con nuevas fuentes y casos locales.*