import type { Course } from "@/types/course";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const herramientasDigitales: Course = {
  id: "herramientas-digitales",
  slug: "herramientas-digitales-para-mi-negocio",
  title: "Herramientas digitales para mi negocio",
  shortTitle: "Herramientas digitales",
  subtitle: "Orden, comunicación y tecnología con criterio",
  description:
    "Organizá archivos, usá planillas básicas, creá códigos QR, aprovechá WhatsApp Business y aplicá inteligencia artificial de forma responsable.",
  longDescription:
    "La tecnología puede ahorrar tiempo y reducir errores, pero solo si se usa con un propósito claro. Este curso propone un recorrido práctico por herramientas accesibles: carpetas y copias de seguridad, planillas de cálculo, catálogos con QR, WhatsApp Business y asistentes de inteligencia artificial. El foco está en la organización, la privacidad y la verificación de la información.",
  durationMinutes: 110,
  level: "Inicial",
  accent: "profundo",
  icon: "laptop",
  objectives: [
    "Organizar la información del emprendimiento y proteger copias de archivos importantes.",
    "Usar planillas básicas para registrar ventas, gastos y stock.",
    "Crear un código QR y aprovechar funciones esenciales de WhatsApp Business.",
    "Usar herramientas de inteligencia artificial de manera responsable y verificable.",
  ],
  audience: [
    "Emprendedores con conocimientos digitales básicos.",
    "Personas que administran su negocio con papeles sueltos o mensajes dispersos.",
    "Comercios que quieren ordenar su presencia digital sin gastar en servicios innecesarios.",
  ],
  modules: [
    {
      id: "modulo-organizacion",
      title: "Módulo 1 · Orden y registros",
      description: "Una base digital sencilla para encontrar la información y no depender de la memoria.",
      lessons: [
        {
          id: "organizacion-digital",
          slug: "organizacion-digital",
          title: "Organización digital de la información",
          summary:
            "Carpetas claras, nombres consistentes y copias de seguridad evitan pérdidas y ahorran tiempo.",
          estimatedMinutes: 26,
          objectives: [
            "Diseñar una estructura de carpetas simple para el emprendimiento.",
            "Nombrar y respaldar archivos importantes.",
            "Aplicar criterios básicos de privacidad y seguridad.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Cuando la información está dispersa en conversaciones, fotos, papeles y nombres como «final final 2», encontrar algo lleva más tiempo que hacerlo de nuevo. Una organización digital básica no requiere programas costosos: requiere un lugar definido para cada tipo de archivo y una forma constante de nombrarlos.",
            },
            {
              type: "heading",
              text: "Una estructura que podés sostener",
              level: 2,
            },
            {
              type: "table",
              caption: "Ejemplo de carpetas para un emprendimiento pequeño",
              headers: ["Carpeta", "Qué guardar", "Ejemplos"],
              rows: [
                ["01_Administración", "Documentos del emprendimiento y comprobantes.", "Altas, habilitaciones, contratos, comprobantes de compra."],
                ["02_Clientes_y_ventas", "Pedidos y registros de ventas sin datos innecesarios.", "Planilla mensual, pedidos confirmados."],
                ["03_Productos", "Fichas, fotos y costos por producto.", "Fotos aprobadas, ficha técnica, lista de materiales."],
                ["04_Proveedores", "Presupuestos y datos de contacto comerciales.", "Catálogos, órdenes de compra."],
                ["05_Comunicación", "Piezas de marca y textos aprobados.", "Logo, plantillas, catálogo vigente."],
                ["06_Respaldos", "Copias de seguridad con fecha.", "Copia mensual de la carpeta principal."],
              ],
            },
            {
              type: "paragraph",
              text: "Usá nombres descriptivos con una fecha que se ordene sola: `2026-05-12_presupuesto_imprenta.pdf` es más útil que `presupuesto nuevo (3).pdf`. Si trabajás desde el celular, creá una carpeta principal del emprendimiento y evitá guardar todo en la galería de fotos. Si compartís archivos con otras personas, acordá quién edita y quién solo consulta.",
            },
            {
              type: "callout",
              variant: "tip",
              title: "La regla de las tres copias",
              text: "Para archivos importantes, intentá tener el original, una copia en otro dispositivo y una copia fuera del lugar habitual (por ejemplo, un disco externo guardado en otro sitio o un servicio en la nube que uses con criterio). Una sola copia en el mismo celular no protege de pérdida, robo o rotura.",
            },
            {
              type: "heading",
              text: "Privacidad y acceso",
              level: 2,
            },
            {
              type: "list",
              items: [
                "Guardá solo los datos de clientes que realmente necesitás para la venta y la entrega.",
                "No incluyas documentos de identidad, datos bancarios ni información de salud en carpetas compartidas.",
                "Usá contraseñas distintas para las cuentas importantes y activá la verificación en dos pasos cuando esté disponible.",
                "Evitá dejar sesiones abiertas en computadoras compartidas y cerrá sesión al terminar.",
                "Revisá periódicamente quién tiene acceso a tus carpetas y grupos.",
              ],
            },
            {
              type: "paragraph",
              text: "Las herramientas en la nube son cómodas, pero implican que otra empresa almacena tus archivos. Antes de usarlas, revisá las condiciones y la configuración de privacidad. No subas información sensible que no necesitás respaldar de esa manera. Si usás una computadora compartida del Aula-Taller, recordá cerrar sesión y no guardar contraseñas en el navegador.",
            },
            {
              type: "example",
              title: "Ejemplo: encontrar un comprobante en dos minutos",
              text: "Una emprendedora ficticia recibe un reclamo por una compra de hace tres meses. Antes tardaba una tarde en encontrar el ticket entre fotos. Ahora busca en la carpeta `01_Administración`, subcarpeta `2026`, el archivo `2026-07-18_factura_proveedor_harina.pdf`. El nombre incluye fecha, tipo de documento y proveedor. No necesita abrir diez archivos para saber cuál es.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Ordená una carpeta",
              intro:
                "Elegí una sola carpeta del emprendimiento. No intentes reorganizar todo el teléfono en un día.",
              steps: [
                "Creá la carpeta principal con el nombre del emprendimiento.",
                "Agregá las seis subcarpetas sugeridas o adaptalas a tu actividad.",
                "Movés diez archivos a la carpeta que corresponde.",
                "Renombrá los archivos con fecha y contenido.",
                "Eliminá duplicados obvios y guardá una copia de la carpeta en otro lugar.",
                "Anotá en un papel dónde está la copia y cuándo pensás actualizarla.",
              ],
              closing:
                "Repetí diez minutos de orden por semana. Es más sostenible que una limpieza gigante cada seis meses.",
            },
          ],
          keyIdeas: [
            "Una estructura de carpetas simple y nombres con fecha ahorra tiempo y reduce errores.",
            "Los archivos importantes necesitan más de una copia y una revisión periódica.",
            "La comodidad digital no elimina la obligación de proteger los datos de otras personas.",
          ],
          resourceSlugs: ["guia-organizacion-administrativa"],
        },
        {
          id: "planillas-basicas",
          slug: "planillas-y-aplicaciones",
          title: "Planillas y aplicaciones básicas",
          summary:
            "Una planilla bien armada convierte datos sueltos en información para decidir: ventas, gastos, stock y saldos.",
          estimatedMinutes: 27,
          objectives: [
            "Identificar filas, columnas, celdas y fórmulas en una planilla.",
            "Armar un registro simple de ventas y gastos.",
            "Revisar errores y proteger la información original.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Una planilla de cálculo es una cuadrícula formada por filas y columnas. Cada cruce es una celda y puede contener un dato, un texto o una fórmula. Sirve para registrar ventas, controlar gastos, calcular totales y observar cómo cambia el resultado. Podés usar LibreOffice Calc en una computadora sin conexión, o una aplicación en línea si tenés cuenta y conexión estable. Para empezar, no necesitás funciones avanzadas.",
            },
            {
              type: "heading",
              text: "Un registro mínimo de ventas",
              level: 2,
            },
            {
              type: "table",
              caption: "Columnas sugeridas para una planilla de ventas",
              headers: ["Fecha", "Producto o servicio", "Cantidad", "Precio unitario", "Total", "Forma de pago", "Observaciones"],
              rows: [
                ["2026-05-03", "Mermelada de naranja 250 g", "2", "$3.500", "=C2*D2", "Transferencia", "Entrega el jueves"],
                ["2026-05-03", "Mermelada de frutilla 250 g", "1", "$3.800", "=C3*D3", "Efectivo", ""],
              ],
            },
            {
              type: "paragraph",
              text: "La fórmula `=C2*D2` multiplica cantidad por precio. Si usás una planilla en español, puede escribirse con punto y coma en algunas configuraciones; verificá cómo responde tu programa. Para sumar una columna, usá una función como `=SUMA(E2:E31)`. El objetivo no es memorizar fórmulas: es entender que un total debe venir de datos registrados y no de una estimación manual que se olvida.",
            },
            {
              type: "callout",
              variant: "warning",
              title: "No borres los datos originales",
              text: "Si necesitás probar una fórmula o corregir un cálculo, hacé una copia de la planilla. Guardar una versión con fecha te permite volver atrás si un cambio produce errores. Revisá que los montos tengan formato de moneda y que las fechas sean consistentes.",
            },
            {
              type: "heading",
              text: "Aplicaciones que pueden ayudar",
              level: 2,
            },
            {
              type: "list",
              items: [
                "**Planillas:** para ventas, costos, stock y presupuestos.",
                "**Notas o documentos:** para procedimientos y respuestas frecuentes.",
                "**Calendario:** para entregas, vencimientos y tareas pendientes.",
                "**Cámara y escáner del teléfono:** para digitalizar comprobantes con nombre y fecha.",
                "**Almacenamiento local o en la nube:** para copias, según privacidad y conexión.",
              ],
            },
            {
              type: "example",
              title: "Ejemplo: planilla de caja semanal",
              text: "Un taller ficticio de reparaciones usa una planilla con tres hojas: Ventas, Gastos y Resumen. En Ventas registra fecha, trabajo, monto y forma de pago. En Gastos anota insumos y servicios. En Resumen suma ambos y calcula la diferencia semanal. Cada domingo revisa el saldo y compara con el dinero disponible en la cuenta del emprendimiento. Si la diferencia no coincide, busca el comprobante faltante antes de continuar.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Tu primera planilla",
              intro:
                "Armá una planilla de una sola hoja para registrar las próximas diez ventas.",
              steps: [
                "Creá las columnas: fecha, producto, cantidad, precio unitario, total, medio de pago y observaciones.",
                "Escribí una fórmula para calcular el total de la primera fila.",
                "Copiá la fórmula hacia las filas siguientes.",
                "Agregá una celda que sume la columna de totales.",
                "Cargá una venta real o un ejemplo claramente identificado como prueba.",
                "Guardá el archivo con un nombre que incluya el mes y hacé una copia.",
              ],
              closing:
                "No incluyas datos sensibles de clientes. Si necesitás identificar una venta, usá un número de pedido.",
            },
          ],
          keyIdeas: [
            "Las planillas permiten registrar datos y obtener totales que se actualizan solos.",
            "Un registro mínimo de ventas y gastos mejora el control sin exigir un sistema complejo.",
            "Conviene guardar versiones y revisar los datos de entrada antes de confiar en un resultado.",
          ],
          resourceSlugs: ["guia-organizacion-administrativa", "presupuesto-basico"],
        },
      ],
    },
    {
      id: "modulo-comunicacion",
      title: "Módulo 2 · Comunicación digital responsable",
      description: "Códigos QR, WhatsApp Business e inteligencia artificial aplicada con criterio.",
      lessons: [
        {
          id: "qr-whatsapp",
          slug: "catalogos-qr-whatsapp",
          title: "Catálogos, códigos QR y WhatsApp Business",
          summary:
            "Los canales digitales deben reducir pasos y responder con claridad. Un QR mal probado o una cuenta desatendida generan desconfianza.",
          estimatedMinutes: 30,
          objectives: [
            "Crear y probar un código QR que lleve a un destino útil.",
            "Configurar los elementos básicos de un perfil de WhatsApp Business.",
            "Organizar consultas y proteger la privacidad de los clientes.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Un **código QR** es una imagen que contiene información, normalmente una dirección web. Al escanearlo con la cámara del teléfono, se abre el destino. Puede conectar un cartel con tu catálogo, una etiqueta con instrucciones de uso o una feria con un formulario de pedido. Su utilidad depende de que el destino exista, tenga sentido y esté actualizado.",
            },
            {
              type: "heading",
              text: "Cómo crear un QR confiable",
              level: 2,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Definí primero qué querés que haga la persona: ver el catálogo, escribirte, acceder a una guía o dejar un pedido.",
                "Usá una dirección corta y estable; evitá enlaces que vencen sin aviso.",
                "Generá el código con una herramienta confiable y descargalo en buena resolución.",
                "Probá el QR con al menos dos teléfonos y con la cámara apuntada desde la distancia real de uso.",
                "Imprimilo con buen contraste, tamaño suficiente y una zona blanca alrededor.",
                "Agregá una indicación breve: «Escaneá para ver el catálogo».",
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Un QR es una puerta, no el contenido",
              text: "Si el enlace es privado, cambia de dueño o deja de funcionar, el QR impreso queda inservible. Verificá el destino antes de imprimir y cada vez que cambies de plataforma. No incluyas datos personales dentro del código.",
            },
            {
              type: "heading",
              text: "WhatsApp Business: ordenar la atención",
              level: 2,
            },
            {
              type: "paragraph",
              text: "La versión Business de WhatsApp permite separar la cuenta comercial de la personal y agregar información útil para clientes, como descripción, horario, dirección y catálogo, según las funciones disponibles en tu país y dispositivo. También ofrece respuestas rápidas, etiquetas y mensajes de ausencia. Las funciones pueden cambiar, por lo que conviene revisar la configuración actual dentro de la aplicación.",
            },
            {
              type: "table",
              caption: "Configuración inicial útil",
              headers: ["Elemento", "Qué definir", "Ejemplo"],
              rows: [
                ["Nombre comercial", "Nombre reconocible y consistente con tu marca.", "Mermeladas Monte Verde"],
                ["Descripción", "Qué ofrecés y cómo comprar.", "Mermeladas de estación. Pedidos por este canal de 9 a 18."],
                ["Horario", "Cuándo respondés realmente.", "Lunes a viernes de 9 a 18."],
                ["Catálogo", "Productos con foto, precio y descripción breve.", "Tres mermeladas con presentación y precio."],
                ["Mensaje de ausencia", "Respuesta cuando no podés atender.", "Gracias por escribir. Respondemos mañana a primera hora."],
                ["Respuestas rápidas", "Mensajes para consultas repetidas.", "Zonas de entrega, formas de pago, plazos."],
              ],
            },
            {
              type: "paragraph",
              text: "La confianza se construye con respuestas claras y tiempos realistas. No prometas respuesta inmediata si no podés sostenerla. Pedí solo los datos necesarios para entregar el pedido y no agregues personas a grupos sin su consentimiento. Si compartís el teléfono de un cliente, hacelo con autorización y solo cuando sea imprescindible. Guardá una copia de los contactos comerciales importantes fuera del teléfono para no depender de una sola cuenta.",
            },
            {
              type: "example",
              title: "Ejemplo: feria de productores",
              text: "Un grupo ficticio de productores participa de una feria. En el mantel coloca un cartel con un QR que abre un catálogo con precios y un botón para escribir al número comercial. Antes de imprimir, prueban el código con tres teléfonos. La persona responsable responde de 9 a 18 y tiene respuestas rápidas para entrega, pago y conservación. El catálogo aclara que los precios son de la feria y tienen vigencia de una semana.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Un canal listo para recibir consultas",
              intro:
                "Prepará el destino y el mensaje antes de promocionar el QR.",
              steps: [
                "Definí si el QR abrirá tu catálogo, tu cuenta comercial o una guía.",
                "Creá el destino y verificá que se abra desde un teléfono que no sea el tuyo.",
                "Generá el QR y probalo impreso o en pantalla, a distancia real.",
                "Configurá nombre, descripción, horario y mensaje de ausencia en tu cuenta comercial.",
                "Redactá tres respuestas rápidas para consultas frecuentes.",
                "Revisá qué datos pedís y eliminá los que no sean necesarios.",
              ],
              closing:
                "No publiques el QR hasta haber probado el recorrido completo: escanear, leer, decidir y escribir.",
            },
          ],
          keyIdeas: [
            "Un QR solo es útil si su destino es claro, estable y fue probado.",
            "La atención comercial requiere horarios reales, información completa y respuestas consistentes.",
            "La comodidad de WhatsApp no habilita a compartir datos de clientes sin consentimiento.",
          ],
          resourceSlugs: ["lista-verificacion-identidad-comercial", "guia-fotografia-celular"],
          toolIds: ["yo-emprendedor"],
        },
        {
          id: "ia-responsable",
          slug: "uso-responsable-de-ia",
          title: "Uso responsable de inteligencia artificial",
          summary:
            "La IA puede ayudar a pensar y redactar, pero no reemplaza la verificación, el criterio propio ni la protección de datos.",
          estimatedMinutes: 27,
          objectives: [
            "Reconocer usos útiles y límites de los asistentes de inteligencia artificial.",
            "Evitar el ingreso de datos personales o confidenciales.",
            "Verificar información generada antes de usarla con clientes.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "La **inteligencia artificial generativa** incluye herramientas que producen texto, imágenes, audio o código a partir de instrucciones. Puede ayudar a redactar un borrador de descripción, proponer preguntas para una entrevista, ordenar ideas o traducir un texto. No «sabe» todo ni garantiza que lo que produce sea verdadero: genera respuestas probables a partir de patrones y puede inventar datos con seguridad aparente.",
            },
            {
              type: "table",
              caption: "Usos de bajo riesgo y usos que requieren cuidado",
              headers: ["Puede ayudar en…", "Evitá o verificá especialmente…"],
              rows: [
                ["Generar opciones de nombres o eslóganes para revisar.", "Afirmar precios, leyes o requisitos sin consultar la fuente oficial."],
                ["Mejorar la redacción de una descripción propia.", "Publicar información médica, legal o financiera sin revisión profesional."],
                ["Resumir un texto que vos proporcionás.", "Subir datos de clientes, documentos de identidad o información bancaria."],
                ["Proponer una lista de tareas o preguntas.", "Usar imágenes de personas o marcas sin autorización."],
                ["Traducir un texto para revisar.", "Presentar un texto generado como una fuente verificada."],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Regla de oro: no ingreses datos sensibles",
              text: "No pegues en un chat de IA documentos de identidad, historias clínicas, contraseñas, datos bancarios, listas de clientes ni información privada de terceros. Tampoco ingreses información confidencial de la escuela u otra institución sin autorización.",
            },
            {
              type: "heading",
              text: "Un flujo de trabajo responsable",
              level: 2,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Definí la tarea y qué decisión vas a tomar con el resultado.",
                "Usá solo información que puedas compartir y no incluya datos personales.",
                "Pedí un borrador, no una verdad final.",
                "Verificá nombres, precios, fechas, normas y cifras en fuentes confiables.",
                "Adaptá el texto a tu voz, tu público y la realidad de tu emprendimiento.",
                "Revisá que no haya estereotipos, errores ni promesas que no puedas cumplir.",
              ],
            },
            {
              type: "paragraph",
              text: "Si usás una imagen generada para promocionar un producto, no la presentes como una fotografía real del producto. Si una persona famosa aparece en una pieza sin autorización, no la publiques. En muchos contextos, la transparencia sobre el uso de IA es una buena práctica: tus clientes valoran saber qué es real y qué es una simulación. Las normas y condiciones de cada herramienta cambian; revisalas antes de usar contenido con fines comerciales.",
            },
            {
              type: "example",
              title: "Ejemplo: descripción de producto con IA",
              text: "Una emprendedora ficticia pide a un asistente: «Tengo una mermelada de naranja de 250 g, elaborada en tandas pequeñas con fruta de estación. Propone tres descripciones breves para un catálogo, sin inventar propiedades nutricionales». Recibe opciones, elige una y corrige el tono para que suene como ella. Verifica que no se agreguen afirmaciones de salud ni ingredientes que no usa. La descripción final es propia y está respaldada por su proceso real.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Prompt seguro y revisión",
              intro:
                "Elegí una tarea de comunicación de tu emprendimiento y escribí una instrucción clara para un asistente de IA, sin datos personales.",
              steps: [
                "Describí el producto, el público y el objetivo sin incluir información de clientes.",
                "Indicá qué no debe inventar y qué datos debés completar vos.",
                "Pedí dos versiones breves y una lista de preguntas para mejorar el texto.",
                "Revisá nombres, precios y afirmaciones en fuentes propias.",
                "Adaptá el texto con tu voz y anotá qué parte fue asistida.",
                "Compartí el resultado con una persona y preguntá si resulta claro y honesto.",
              ],
              closing:
                "Si no tenés acceso a una herramienta de IA, realizá el ejercicio en papel: la planificación y la verificación son la parte más importante.",
            },
          ],
          keyIdeas: [
            "La IA es una asistente de borradores y exploración, no una fuente automática de verdad.",
            "Los datos personales y la información confidencial no deben ingresarse en herramientas externas.",
            "Verificar, adaptar y ser transparente son responsabilidades humanas.",
          ],
          resourceSlugs: ["guia-organizacion-administrativa", "guia-fotografia-celular"],
        },
      ],
    },
  ],
  finalQuiz: {
    title: "Autoevaluación final · Herramientas digitales",
    description:
      "Seis preguntas sobre organización, planillas, códigos QR, WhatsApp Business e inteligencia artificial responsable.",
    passingScore: 70,
    questions: [
      {
        id: "p1",
        prompt: "¿Cuál es una forma práctica de proteger archivos importantes del emprendimiento?",
        options: [
          { text: "Guardarlos únicamente en la galería del celular." },
          { text: "Tener el original y al menos otra copia en un lugar distinto, revisada periódicamente." },
          { text: "Compartirlos en un grupo público para no perderlos." },
          { text: "Cambiarles el nombre cada vez que se abren." },
        ],
        correctIndex: 1,
        explanation:
          "Una copia adicional en otro lugar reduce el riesgo de pérdida por robo, rotura o error. Las copias deben revisarse y no exponerse en canales públicos.",
      },
      {
        id: "p2",
        prompt: "En una planilla, ¿qué permite una fórmula como =C2*D2?",
        options: [
          { text: "Cambiar el color de la celda." },
          { text: "Multiplicar el valor de dos celdas y mostrar el resultado." },
          { text: "Enviar un mensaje de WhatsApp." },
          { text: "Eliminar las filas anteriores." },
        ],
        correctIndex: 1,
        explanation:
          "La fórmula realiza un cálculo con los valores de las celdas C2 y D2. Si los datos cambian, el resultado se actualiza automáticamente.",
      },
      {
        id: "p3",
        prompt: "Antes de imprimir un código QR, ¿qué conviene hacer?",
        options: [
          { text: "Probarlo con varios teléfonos y confirmar que abre el destino correcto y actualizado." },
          { text: "Imprimirlo sin probarlo para ahorrar tiempo." },
          { text: "Incluir todos los datos de los clientes dentro del código." },
          { text: "Usar un enlace que venza al día siguiente." },
        ],
        correctIndex: 0,
        explanation:
          "El QR impreso no se puede corregir fácilmente. Hay que verificar el destino, la legibilidad y que el contenido siga vigente antes de publicarlo.",
      },
      {
        id: "p4",
        prompt: "¿Qué información conviene pedir a un cliente por WhatsApp?",
        options: [
          { text: "Todos sus datos personales y una copia de su documento." },
          { text: "Solo los datos necesarios para gestionar el pedido y la entrega." },
          { text: "Sus contraseñas para verificar la cuenta." },
          { text: "Los datos de sus contactos para agregarlos a un grupo." },
        ],
        correctIndex: 1,
        explanation:
          "Se debe pedir la información mínima necesaria y usarla solo para la finalidad acordada. No se deben solicitar contraseñas ni agregar contactos sin consentimiento.",
      },
      {
        id: "p5",
        prompt: "¿Cuál es un uso responsable de un asistente de inteligencia artificial en un emprendimiento?",
        options: [
          { text: "Publicar sin revisar todo lo que produce." },
          { text: "Cargar documentos de identidad de clientes para que redacte un catálogo." },
          { text: "Usarlo para generar un borrador y verificar los datos antes de publicar." },
          { text: "Atribuirle decisiones médicas o legales." },
        ],
        correctIndex: 2,
        explanation:
          "La IA puede asistir en borradores y organización de ideas, pero la verificación y la responsabilidad son humanas. No se deben ingresar datos sensibles.",
      },
      {
        id: "p6",
        prompt: "¿Qué práctica mejora la organización de la información digital?",
        options: [
          { text: "Guardar todos los archivos en el escritorio con nombres genéricos." },
          { text: "Usar carpetas por tema y nombres con fecha y contenido." },
          { text: "Duplicar cada archivo sin registrar cuál es la versión final." },
          { text: "No hacer copias para ahorrar espacio." },
        ],
        correctIndex: 1,
        explanation:
          "Una estructura por temas y nombres descriptivos permite encontrar archivos y distinguir versiones. Las copias son necesarias para proteger la información.",
      },
    ],
  },
  resourceSlugs: ["guia-organizacion-administrativa", "presupuesto-basico"],
  toolIds: ["diagnostico-emprendedor", "yo-emprendedor", "costoclaro"],
};
