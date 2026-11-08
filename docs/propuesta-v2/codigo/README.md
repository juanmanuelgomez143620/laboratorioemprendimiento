# Ejemplos de la propuesta v2

Estos cinco módulos son ejemplos reales de React 19 y TypeScript estricto. No están importados por la aplicación, no cambian el campus ni sus datos y no constituyen una implementación completa de v2. Usan clases y tokens existentes (`brand`, `sea`, `line`, `body`, `btn`, `input-base`). El foco visible depende de `src/app/globals.css`.

| Archivo | Función | Contrato de integración |
|---|---|---|
| `ResumeCard.tsx` | Una acción concreta para retomar | El adaptador elige una lección existente; cantidades enteras válidas, total positivo y tiempo editorial. `empty` significa ausencia confirmada de avance; no usarlo durante hidratación ni ante errores. |
| `LearningRoute.tsx` | Lista ordenada de pasos abiertos | IDs únicos; como máximo un `current`; estados derivados del progreso y catálogo, sin bloqueos ni datos duplicados. |
| `GlobalSearch.tsx` | Búsqueda local por términos y tipo | Índice compilado, IDs únicos, texto editorial breve y enlaces a rutas/fragmentos reales. Reutiliza `normalizeText`. No persiste consultas ni consulta un servidor. |
| `LessonCompletionAction.tsx` | Completar/deshacer con confirmación real | `commit` actualiza el proveedor y devuelve el estado confirmado. Distingue persistencia de memoria. El botón mantiene su nodo y foco; bloquea acciones repetidas. |
| `ImportReview.tsx` | Leer → validar → revisar → confirmar | `validate` no escribe. `commit` revalida el candidato, detecta cambio de revisión y sólo informa éxito tras escritura confirmada y actualización del proveedor. |

## Uso y límites

1. Copiar los módulos aprobados a sus carpetas de `src/components/`. Las tarjetas pueden renderizarse desde un componente cliente que consume el proveedor; los módulos interactivos ya declaran `use client`. Los enlaces usan `next/link` para conservar el proveedor entre rutas, con `prefetch={false}` para evitar descargas anticipadas del catálogo. El paquete offline debe incluir también los payloads estáticos de navegación de Next.
2. Inyectar datos derivados del catálogo existente, nunca slugs escritos a mano. `href: /${string}` ayuda a tipar, pero no valida seguridad: el generador debe admitir únicamente rutas internas conocidas, excluir `//`, esquemas, fragmentos inexistentes y parámetros personales.
3. Importar desde un wrapper conectado al proveedor real. No pasar un adaptador que devuelva `{ok: true}` sin efectuar y comprobar la operación. Una escritura síncrona fallida debe devolver error o durabilidad `memory`, según el contrato del componente.
4. `ImportReview<T>` es genérico deliberadamente: no inventa el esquema v2. El validador debe recibir `unknown`, verificar marca de aplicación/versión y estructura, migrar v1, limitar colecciones y texto, recalcular resultados y filtrar IDs contra el catálogo. Rechazar versiones futuras y claves peligrosas; nunca copiar objetos arbitrarios al estado. Los avisos deben describir descartes y cambios. No importar nombre, diagnóstico, métricas ni preferencias de consentimiento.
5. El límite de 2 MiB se controla antes de leer. No confiar en extensión/MIME; el JSON se analiza y después se valida. El candidato normalizado debe ser independiente e inmutable. La confirmación sólo reemplaza lo que mostró la revisión; cambios en otra pestaña exigen revisar otra vez. El adaptador debe coordinar escritores: comparar revisiones por sí solo no vuelve atómico un ciclo lectura/escritura entre pestañas.
6. Los fallos de escritura no deben destruir el estado previo. El adaptador debe preservar una copia recuperable y mantener consistente el proveedor. No hay transacción universal entre varias claves de localStorage. Ver el diseño de datos del informe antes de implementar.
7. La búsqueda muestra todas las coincidencias del pequeño catálogo actual. Para escalar, agregar paginación accesible y cargar el índice al abrir la búsqueda; no cargar todos los textos completos en el JavaScript inicial. No hay modal ni atajos globales que interfieran con lectores de pantalla.
8. Las vistas no acceden a localStorage durante render. El contenedor entrega `loading` hasta hidratar y mantiene HTML inicial consistente. Cambios concurrentes se resuelven en el adaptador, no en estas vistas.

## Verificación necesaria al integrar

- Tipado estricto, lint y build estático; tests de migración, enlaces y búsqueda con/sin acentos.
- Teclado: completar/deshacer conserva foco; revisión recibe foco; cancelar/importar devuelve al selector; fallo mantiene mensaje accesible. No anunciar guardado antes del resultado del adaptador.
- Probar almacenamiento bloqueado, error de validación, archivo demasiado grande, JSON malformado, versión futura, IDs desconocidos, conflicto de revisión y fallo de escritura.
- Importación cancelada no escribe; doble activación no duplica operaciones; resultados de evaluación siguen derivados del 70 % exacto.
- Reflow, contraste y lector de pantalla se verifican sobre la integración real. Compilar ejemplos no acredita WCAG ni funcionamiento completo del producto.
