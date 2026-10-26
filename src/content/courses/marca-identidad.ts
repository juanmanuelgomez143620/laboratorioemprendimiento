import type { Course } from "@/types/course";
import { marcaAvanzado } from "./modules/marca-avanzado";

const DISCLAIMER = "Ejemplo ficticio con fines educativos. No representa a un emprendimiento real.";

export const marcaIdentidad: Course = {
  id: "marca-e-identidad",
  slug: "mi-marca-y-mi-identidad-comercial",
  title: "Mi marca y mi identidad comercial",
  shortTitle: "Marca e identidad",
  subtitle: "De una identidad reconocible a una reputación que sostiene ventas",
  description:
    "Definí el nombre, el posicionamiento, la personalidad visual y la presentación de tu emprendimiento. Aprendé a fotografiar productos, armar un catálogo claro y comunicar con pruebas reales.",
  longDescription:
    "Una marca no es solo un logo: es la suma de lo que tu emprendimiento promete, cómo se diferencia, cómo se comunica y cómo trata a sus clientes. Este curso te propone construir una identidad coherente con recursos accesibles, definir un posicionamiento frente a alternativas reales, preparar fotos útiles con un teléfono, organizar un catálogo que facilite la compra y planificar contenido con métricas de confianza. Al final vas a reunir un manual de marca mínimo y un plan de comunicación de 30 días.",
  durationMinutes: 162,
  level: "Inicial",
  accent: "celeste",
  icon: "palette",
  objectives: [
    "Definir la identidad, el nombre y la personalidad de tu emprendimiento.",
    "Elegir un posicionamiento y una promesa comprobable frente a otras opciones.",
    "Crear un sistema visual simple y aplicar criterios de legibilidad y accesibilidad.",
    "Mejorar la presentación y la fotografía de productos usando un celular.",
    "Armar un catálogo comercial claro y una arquitectura de oferta que facilite la compra.",
    "Planificar contenido, lanzamientos y reputación con pruebas reales y métricas.",
  ],
  audience: [
    "Emprendedores que ya venden pero no tienen una identidad consistente.",
    "Personas que quieren lanzar una marca y necesitan definir su lugar en el mercado.",
    "Comercios que necesitan mejorar sus fotos, catálogos, mensajes y presencia digital.",
    "Quienes reciben consultas pero no logran que el cliente entienda su diferencia.",
  ],
  project: {
    title: "Manual de marca mínimo y plan de comunicación de 30 días",
    description:
      "Un documento aplicable con posicionamiento, promesa, voz, sistema visual, fotos, estructura de catálogo y calendario de contenidos.",
    deliverables: [
      "Declaración de posicionamiento y promesa con pruebas.",
      "Sistema visual mínimo y criterios de accesibilidad.",
      "Set de fotos y fichas de producto.",
      "Arquitectura de oferta y condiciones del catálogo.",
      "Calendario de contenidos de 30 días con métricas de revisión.",
    ],
  },
  modules: [
    {
      id: "modulo-identidad",
      title: "La identidad de tu emprendimiento",
      description: "Qué representa tu marca, cómo se llama y qué personalidad transmite.",
      lessons: [
        {
          id: "identidad-nombre",
          slug: "identidad-y-nombre",
          title: "Identidad y nombre del emprendimiento",
          summary:
            "La identidad ordena las decisiones de comunicación. El nombre debe ser fácil de recordar, pronunciar y escribir.",
          estimatedMinutes: 24,
          objectives: [
            "Reconocer los elementos que forman la identidad de una marca.",
            "Evaluar un nombre con criterios prácticos antes de adoptarlo.",
            "Redactar una promesa de marca breve y coherente con la experiencia.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "La **identidad comercial** es la forma en que tu emprendimiento se presenta y se distingue. Incluye el nombre, la manera de hablar, los colores, las imágenes, la atención, la calidad de lo que entregás y la experiencia completa del cliente. Un logo puede ayudar a reconocer la marca, pero no reemplaza la coherencia entre lo que prometés y lo que hacés.",
            },
            {
              type: "heading",
              text: "Empezá por lo que querés que la gente sienta",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Antes de elegir colores, definí tres o cuatro atributos que querés transmitir: cercanía, confianza, rapidez, cuidado artesanal, innovación, tradición, alegría, sobriedad. No elijas todos. Una marca que intenta ser todo al mismo tiempo se vuelve difícil de recordar. Esos atributos deben poder observarse en decisiones concretas: el tono de los mensajes, la puntualidad de la entrega, el packaging, la información del catálogo.",
            },
            {
              type: "callout",
              variant: "tip",
              title: "Una identidad se demuestra",
              text: "Si tu marca promete cercanía, respondé los mensajes con claridad. Si promete cuidado ambiental, explicá qué materiales usás y qué hacés con los residuos. La identidad no es una declaración: es una serie de decisiones repetidas.",
            },
            {
              type: "heading",
              text: "Criterios para elegir un nombre",
              level: 2,
            },
            {
              type: "list",
              items: [
                "**Fácil de pronunciar:** que una persona pueda decirlo por teléfono sin deletrearlo varias veces.",
                "**Fácil de escribir:** evitá combinaciones ambiguas o letras que se confundan al dictar.",
                "**Recordable:** breve y con relación con la propuesta o con una imagen mental clara.",
                "**No engañoso:** no prometas un origen, material o beneficio que no podés cumplir.",
                "**Con margen de crecimiento:** un nombre demasiado específico puede limitar nuevos productos.",
                "**Verificable:** antes de invertir en cartelería, revisá que no esté siendo usado por otra marca y consultá los pasos de registro que correspondan.",
              ],
            },
            {
              type: "paragraph",
              text: "Las redes sociales, los dominios y los registros de marca tienen reglas propias que pueden cambiar. Este curso no reemplaza una consulta legal ni garantiza disponibilidad. La recomendación práctica es no imprimir cientos de etiquetas hasta comprobar el uso del nombre y consultar a la autoridad competente si el proyecto va a crecer.",
            },
            {
              type: "example",
              title: "Ejemplo: de «Delicias del barrio» a un nombre con identidad",
              text: "Una emprendedora ficticia vende mermeladas caseras. Su primer nombre era muy general. Define que su identidad se basa en frutas de estación, producción pequeña y trazabilidad de cada frasco. Elige un nombre breve asociado a la huerta y una promesa: «Mermeladas de estación, hechas en tandas pequeñas, con la fruta y la fecha de elaboración en cada etiqueta». El nombre acompaña la promesa sin exagerarla.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Brújula de identidad",
              intro:
                "Escribí la identidad de tu emprendimiento en una página, sin diseño todavía.",
              steps: [
                "Definí tres atributos que querés que el cliente perciba.",
                "Escribí en una frase quién sos, qué ofrecés y a quién servís.",
                "Redactá una promesa concreta que puedas cumplir en cada venta.",
                "Proponé tres nombres y evaluálos con los criterios de la lección.",
                "Consultá con cinco personas cuál recuerdan y cómo lo escribirían.",
                "Verificá el uso del nombre elegido antes de invertir en impresiones.",
              ],
              closing:
                "Elegí un nombre provisorio si todavía necesitás verificar disponibilidad. Lo importante es que puedas explicarlo.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Probá el nombre antes de invertir",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Un nombre que te gusta puede ser difícil de dictar, confundirse con otra marca o no estar disponible en los canales que necesitás. Hacé una prueba simple con personas que no conozcan tu proyecto y verificá la disponibilidad antes de imprimir etiquetas o carteles.",
            },
            {
              type: "table",
              caption: "Prueba práctica de nombre",
              headers: ["Prueba", "Cómo hacerla", "Señal de alerta"],
              rows: [
                ["Dictado", "Decí el nombre por teléfono y pedí que lo escriban.", "La persona necesita deletrearlo varias veces."],
                ["Memoria", "Mostralo unos segundos y preguntá cómo se llamaba.", "Se olvida o se confunde con otra palabra."],
                ["Búsqueda", "Revisá buscadores, redes y canales donde estarás.", "Uso muy similar en el mismo rubro o zona."],
                ["Pronunciación", "Pedí a varias personas que lo lean en voz alta.", "Cada una lo pronuncia distinto."],
                ["Promesa", "Preguntá qué esperarían de una marca con ese nombre.", "La expectativa contradice lo que ofrecés."],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "La disponibilidad no se resuelve solo con una búsqueda",
              text: "Que un nombre no aparezca en una red social no significa que esté libre para su uso comercial. Antes de una inversión importante, consultá los registros y requisitos que correspondan a tu actividad y jurisdicción.",
            },
          ],
          keyIdeas: [
            "La identidad es la coherencia entre promesa, experiencia y comunicación.",
            "Los atributos de marca deben expresarse en decisiones concretas.",
            "Un nombre práctico se pronuncia, se escribe y se recuerda con facilidad.",
          ],
          resourceSlugs: ["lista-verificacion-identidad-comercial"],
        },
        {
          id: "logo-colores",
          slug: "logotipo-y-colores",
          title: "Logotipo, colores y aplicación",
          summary:
            "Un buen logotipo funciona en pequeño, en blanco y negro y sobre distintos fondos. Menos elementos suelen comunicar mejor.",
          estimatedMinutes: 24,
          objectives: [
            "Reconocer las características de un logotipo funcional.",
            "Elegir una paleta breve con contraste suficiente.",
            "Organizar versiones y archivos de la identidad visual.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "El logotipo es una marca gráfica que identifica tu emprendimiento. Puede combinar un símbolo, un nombre escrito con una tipografía y un color. No necesita ser complejo ni incluir un dibujo que explique toda la actividad. Debe ser legible, reproducible y coherente con los atributos que definiste.",
            },
            {
              type: "table",
              caption: "Pruebas antes de adoptar un logotipo",
              headers: ["Prueba", "Pregunta"],
              rows: [
                ["Tamaño pequeño", "¿Se entiende en una foto de perfil o en una etiqueta de 3 cm?"],
                ["Blanco y negro", "¿Sigue funcionando sin color?"],
                ["Fondo claro y oscuro", "¿Tiene contraste en ambos casos?"],
                ["Formato vertical y horizontal", "¿Se adapta a redes, carteles y documentos?"],
                ["Lectura a distancia", "¿Se reconoce desde un cartel o una pantalla proyectada?"],
              ],
            },
            {
              type: "heading",
              text: "Colores con intención",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Elegí una paleta breve: un color principal, uno secundario y uno o dos neutros para fondos y textos. El color principal debe aparecer en los elementos importantes, no en todo. Usá blanco o un tono muy claro como base para facilitar la lectura. Antes de aprobar una combinación, revisá que el texto se lea bien sobre el fondo, incluso en un teléfono con brillo bajo.",
            },
            {
              type: "callout",
              variant: "warning",
              title: "Contraste, no solo estética",
              text: "Texto claro sobre fondo claro o colores muy parecidos dificultan la lectura y excluyen a muchas personas. Un buen contraste no hace que un diseño sea aburrido: lo hace usable. Evitá también transmitir información únicamente por color.",
            },
            {
              type: "paragraph",
              text: "No copies un logotipo, una tipografía registrada ni una campaña completa de otra marca. Podés inspirarte en referencias, pero la identidad debe ser propia y no generar confusión. Si usás una herramienta gratuita, revisá sus condiciones y guardá archivos editables cuando sea posible. Para un emprendimiento pequeño alcanza con un logotipo simple y una guía de una página.",
            },
            {
              type: "heading",
              text: "Qué archivos guardar",
              level: 2,
            },
            {
              type: "list",
              items: [
                "Una versión horizontal para encabezados y documentos.",
                "Una versión cuadrada o símbolo para foto de perfil.",
                "Una versión en blanco para fondos oscuros.",
                "Una versión en negro para impresiones económicas o sellos.",
                "El archivo editable y una guía breve con colores, tipografías y usos.",
              ],
            },
            {
              type: "example",
              title: "Ejemplo: identidad de un servicio de jardinería",
              text: "Un emprendimiento ficticio de mantenimiento de jardines elige un símbolo simple —una hoja formada por dos trazos— y el nombre en una tipografía legible. Su paleta es verde oscuro, un verde claro y un neutro cálido. Usa el verde oscuro para textos y el claro para fondos, manteniendo contraste. El mismo símbolo aparece en el delantal, la factura y la foto de perfil, sin agregar detalles distintos en cada pieza.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Sistema visual mínimo",
              intro:
                "Definí una base visual que puedas aplicar sin depender de un diseñador en cada pieza.",
              steps: [
                "Elegí dos colores principales y un neutro; verificá el contraste de texto.",
                "Bocetá tres versiones del logotipo en papel: símbolo, nombre y combinación.",
                "Probá la elegida en tamaño pequeño y en blanco y negro.",
                "Definí una tipografía para títulos y otra, o la misma, para textos.",
                "Armá una página con logotipo, colores, tipografías y un ejemplo de aplicación.",
                "Guardá las versiones en una carpeta ordenada y respaldada.",
              ],
              closing:
                "Una guía de una página es suficiente para empezar. Revisala después de usar la identidad en cinco piezas reales.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Sistema visual, no piezas sueltas",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Un sistema visual permite que cualquier persona produzca una pieza reconocible sin improvisar. No necesitás un manual de cien páginas: necesitás decisiones documentadas y archivos ordenados. La prueba es simple: entregale la guía a otra persona y pedile que arme una publicación o una etiqueta.",
            },
            {
              type: "table",
              caption: "Componentes mínimos del sistema",
              headers: ["Componente", "Qué definir", "Error frecuente"],
              rows: [
                ["Logotipo", "Versiones horizontal, cuadrada, blanca y negra.", "Usar una versión que no se lee en tamaño pequeño."],
                ["Tipografías", "Una para títulos y una para textos, con tamaños.", "Mezclar cinco fuentes y perder legibilidad."],
                ["Paleta", "Principal, secundario y neutros con códigos.", "Elegir colores por moda sin revisar contraste."],
                ["Plantillas", "Publicación, etiqueta, presupuesto o catálogo.", "Armar cada pieza desde cero."],
                ["Fotografía", "Fondo, luz, encuadre y edición permitida.", "Mezclar estilos que parecen de marcas distintas."],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Contraste antes que combinación",
              text: "Probá el texto sobre el fondo en un teléfono con brillo bajo. Si no se lee, el color no sirve para comunicar, por más lindo que sea. La accesibilidad también mejora la experiencia de todos.",
            },
          ],
          keyIdeas: [
            "Un logotipo funcional se lee en pequeño, sin color y sobre distintos fondos.",
            "Una paleta breve y con contraste mejora el reconocimiento y la accesibilidad.",
            "Guardar versiones organizadas evita improvisar en cada publicación.",
          ],
          resourceSlugs: ["lista-verificacion-identidad-comercial"],
        },
      ],
    },
    {
      id: "modulo-presentacion",
      title: "Productos que se muestran bien",
      description: "Fotografía comercial accesible y catálogos que ayudan a decidir la compra.",
      lessons: [
        {
          id: "fotografia-celular",
          slug: "presentacion-y-fotografia",
          title: "Presentación de productos y fotografía con celular",
          summary:
            "Una foto clara, bien iluminada y honesta vende mejor que una imagen espectacular que no representa el producto.",
          estimatedMinutes: 26,
          objectives: [
            "Preparar un espacio simple para fotografiar productos.",
            "Usar luz, encuadre y enfoque del celular de forma consciente.",
            "Seleccionar y editar imágenes sin alterar la apariencia real del producto.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "La foto de un producto ayuda a que el cliente imagine lo que recibirá. No necesitás un estudio profesional: una mesa junto a una ventana, un fondo limpio y un teléfono con la cámara limpia suelen alcanzar para mejorar muchísimo la presentación. La clave es mostrar el producto con claridad y no generar expectativas que no se cumplirán.",
            },
            {
              type: "heading",
              text: "Preparar antes de disparar",
              level: 2,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Limpiá el producto y el fondo; retirá elementos que distraigan.",
                "Elegí una superficie estable y una pared o tela de color neutro.",
                "Usá luz natural indirecta: cerca de una ventana, sin sol directo sobre el producto.",
                "Limpiá la cámara del teléfono y activá la cuadrícula para ordenar el encuadre.",
                "Apoyá el teléfono o sujetalo con ambas manos para evitar movimiento.",
                "Enfocá tocando la pantalla sobre el producto y ajustá la exposición si hace falta.",
              ],
            },
            {
              type: "paragraph",
              text: "Fotografiá al menos tres tipos de imagen: una general con todo el producto, un detalle de textura o terminación y una referencia de escala o uso. Para alimentos, mostrá la porción real; para indumentaria, incluí una foto de la prenda puesta o medidas; para artesanías, mostrá el proceso o el material. La variedad permite responder preguntas antes de que el cliente las haga.",
            },
            {
              type: "callout",
              variant: "warning",
              title: "Representación honesta",
              text: "No uses filtros que cambien el color de un producto, no muestres porciones más grandes con perspectivas engañosas y no publiques fotos de otra marca. La confianza se pierde rápido y una devolución cuesta más que una foto bien hecha.",
            },
            {
              type: "heading",
              text: "Edición mínima",
              level: 2,
            },
            {
              type: "paragraph",
              text: "La edición sirve para aclarar y ordenar, no para transformar. Ajustá el brillo, el contraste y el balance de blancos con moderación. Recortá para centrar el producto y mantené una proporción consistente entre imágenes del catálogo. Guardá siempre el archivo original y una copia editada; si el producto cambia, actualizá las fotos en lugar de reutilizar una imagen vieja.",
            },
            {
              type: "example",
              title: "Ejemplo: fotos de un pan de campo",
              text: "Una panadería ficticia fotografía su pan sobre una tabla de madera clara junto a una ventana. Toma una foto entera, otra del corte para mostrar la miga y una tercera con un cuchillo y una taza para dar escala. Evita saturar el color y aclara en el catálogo el peso y los ingredientes. La imagen no promete un tamaño distinto del real.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Mini sesión de fotos",
              intro:
                "Elegí un producto y hacé una serie de al menos cuatro fotos con tu celular.",
              steps: [
                "Prepará un fondo neutro y una fuente de luz natural indirecta.",
                "Tomá una foto general, una de detalle y una de uso o escala.",
                "Repetí una toma con el teléfono apoyado para comparar estabilidad.",
                "Revisá que colores, tamaño y textura representen el producto real.",
                "Elegí las mejores imágenes y editá solo brillo, contraste y recorte.",
                "Nombrá los archivos con producto y fecha para encontrarlos después.",
              ],
              closing:
                "Mostrá las fotos a una persona que no conozca el producto y preguntale qué tamaño y color percibe.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Narrativa visual y video corto",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Una serie de fotos no es solo un catálogo: cuenta una historia. La primera imagen presenta, la segunda muestra un detalle, la tercera da escala o uso y la cuarta puede mostrar el proceso o a la persona detrás. Esa secuencia reduce dudas y construye confianza. El video corto sigue la misma lógica: una acción clara, buena luz, texto en pantalla y un final con el siguiente paso.",
            },
            {
              type: "table",
              caption: "Secuencia mínima para una publicación o ficha",
              headers: ["Toma", "Qué muestra", "Pregunta que responde"],
              rows: [
                ["General", "Producto completo sobre fondo limpio.", "¿Qué es y cómo se ve?"],
                ["Detalle", "Textura, terminación, ingrediente o material.", "¿Qué calidad tiene?"],
                ["Escala o uso", "Producto en la mano, en una mesa o en contexto.", "¿Qué tamaño tiene y cómo se usa?"],
                ["Proceso o persona", "Elaboración, taller o empaque.", "¿Quién lo hace y cómo?"],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "Video vertical, pero no improvisado",
              text: "Grabá con el teléfono apoyado, en formato vertical y con buena luz. Evitá música o imágenes que no tengas derecho a usar. Si mostrás a una persona o un espacio ajeno, pedí autorización. Un video honesto y claro funciona mejor que uno espectacular que no representa el producto.",
            },
          ],
          keyIdeas: [
            "La luz natural indirecta, un fondo simple y el teléfono estable mejoran la foto sin equipamiento costoso.",
            "Conviene mostrar el producto completo, un detalle y una referencia de escala.",
            "La edición debe aclarar, no alterar la apariencia real del producto.",
          ],
          resourceSlugs: ["guia-fotografia-celular"],
        },
        {
          id: "catalogo-comercial",
          slug: "catalogo-comercial",
          title: "Elaboración de catálogos",
          summary:
            "Un catálogo útil muestra qué ofrecés, cuánto cuesta, cómo se pide y qué condiciones tiene la entrega.",
          estimatedMinutes: 26,
          objectives: [
            "Diseñar la estructura de un catálogo digital o impreso.",
            "Incluir información que evite preguntas repetidas y errores de pedido.",
            "Actualizar precios y productos de forma ordenada.",
          ],
          blocks: [
            {
              type: "paragraph",
              text: "Un catálogo no es una colección de fotos sin contexto. Es una herramienta de venta y de atención. Debe permitir que una persona entienda qué ofrecés, elija una opción, conozca el precio y sepa cómo comprar. Puede ser un archivo PDF, una presentación para enviar por WhatsApp, una publicación fijada o una página web. El formato importa menos que la claridad.",
            },
            {
              type: "heading",
              text: "Estructura mínima",
              level: 2,
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Portada:** nombre, logo opcional, qué ofrece el catálogo y período de vigencia.",
                "**Índice o categorías:** agrupá por tipo de producto, uso o precio.",
                "**Ficha de cada producto:** nombre, foto, descripción breve, presentación, precio y opciones.",
                "**Condiciones:** formas de pago, zona y costo de entrega, plazos, cambios y stock.",
                "**Cómo pedir:** un paso claro y un canal de contacto que realmente atiendas.",
                "**Cierre:** recordatorio de vigencia y agradecimiento, sin promesas exageradas.",
              ],
            },
            {
              type: "table",
              caption: "Ficha de producto que evita consultas repetidas",
              headers: ["Dato", "Ejemplo útil"],
              rows: [
                ["Nombre y presentación", "Mermelada de naranja, frasco de 250 g."],
                ["Descripción", "Elaborada con naranjas de estación, sin colorantes."],
                ["Precio", "Precio vigente y moneda; aclarar si incluye entrega."],
                ["Disponibilidad", "Stock disponible o plazo de elaboración."],
                ["Condiciones", "Conservación, vencimiento, cambios y zona de entrega."],
                ["Contacto", "Canal de pedido y horario de respuesta."],
              ],
            },
            {
              type: "callout",
              variant: "tip",
              title: "Pensá en el pulgar",
              text: "La mayoría de los clientes mirará el catálogo en un teléfono. Usá textos grandes, bloques cortos y botones o enlaces fáciles de tocar. Probá el archivo en tu propio celular antes de enviarlo.",
            },
            {
              type: "paragraph",
              text: "Si incluís un código QR, verificá que abra exactamente la dirección correcta y que el contenido esté actualizado. Un QR impreso en un catálogo no se puede modificar: si los precios cambian seguido, conviene que lleve a una versión digital actualizable o que el catálogo tenga una fecha de vigencia clara. Revisá la ortografía, los números de contacto y los precios antes de compartir.",
            },
            {
              type: "example",
              title: "Ejemplo: catálogo de una cooperativa de tejidos",
              text: "Un grupo ficticio de tejedoras arma un catálogo digital de dos páginas. En la portada indica el período de vigencia y el canal de pedidos. Agrupa por categorías: accesorios, prendas para bebés y piezas de decoración. Cada ficha incluye medidas, composición, cuidado, precio y plazo de tejido. Al final aclara que las piezas son artesanales y pueden tener variaciones mínimas de color. Usa un QR que abre un formulario simple de pedido atendido por una de las integrantes.",
              disclaimer: DISCLAIMER,
            },
            {
              type: "activity",
              title: "Actividad práctica · Armá tu catálogo mínimo",
              intro:
                "Empezá con tres productos. No necesitás un catálogo extenso para probar el formato.",
              steps: [
                "Elegí tres productos y reuní una foto representativa de cada uno.",
                "Escribí nombre, presentación, descripción, precio y disponibilidad.",
                "Definí un canal de pedido y un horario real de respuesta.",
                "Agregá condiciones de entrega, pago y cambios.",
                "Armá una versión digital legible en celular y otra imprimible si la necesitás.",
                "Probalo con una persona: pedile que elija un producto y te cuente qué información faltó.",
              ],
              closing:
                "Registrá la fecha de vigencia en la portada. Actualizar es parte del trabajo, no una corrección excepcional.",
            },
            {
              type: "heading",
              text: "Nivel aplicado · Arquitectura de oferta",
              level: 2,
            },
            {
              type: "paragraph",
              text: "Un catálogo no solo enumera productos: ayuda a elegir. Agrupar la oferta en pocas opciones comparables reduce la parálisis y facilita el pedido. Una estructura simple es **básica, recomendada y completa**. La opción intermedia puede facilitar la comparación, pero solo funciona si la diferencia entre opciones es clara y honesta.",
            },
            {
              type: "table",
              caption: "Ejemplo de oferta para un servicio de jardinería",
              headers: ["Opción", "Qué incluye", "Para quién es", "Qué no incluye"],
              rows: [
                ["Básica", "Corte y limpieza general.", "Mantenimiento de un espacio pequeño.", "Poda de altura y retiro de ramas grandes."],
                ["Recomendada", "Corte, limpieza y control de malezas.", "Jardines de uso familiar.", "Diseño de nuevas plantas."],
                ["Completa", "Mantenimiento mensual y asesoramiento.", "Espacios que necesitan continuidad.", "Materiales ni obras de gran escala."],
              ],
            },
            {
              type: "paragraph",
              text: "Las objeciones también se anticipan en el catálogo: precio, plazo, zona de entrega, conservación, cambios y forma de pago. Responderlas antes de la consulta ahorra mensajes y evita malentendidos. Si una objeción se repite, no la respondas solo en privado: incorpórala a la ficha.",
            },
            {
              type: "callout",
              variant: "tip",
              title: "Menos opciones, mejores decisiones",
              text: "Si el cliente debe comparar doce variantes para elegir una, probablemente abandone. Empezá con tres opciones bien explicadas y sumá complejidad solo cuando la demanda lo justifique.",
            },
          ],
          keyIdeas: [
            "Un catálogo debe permitir elegir, consultar condiciones y saber cómo pedir.",
            "La ficha de producto reduce dudas y errores cuando incluye presentación, precio y disponibilidad.",
            "La vigencia y la actualización constante protegen la confianza del cliente.",
          ],
          resourceSlugs: ["lista-verificacion-identidad-comercial", "guia-fotografia-celular"],
          toolIds: ["diagnostico-emprendedor"],
        },
      ],
    },
    marcaAvanzado,
  ],
  finalQuiz: {
    title: "Autoevaluación final · Marca e identidad",
    description:
      "Diez preguntas sobre posicionamiento, identidad visual, fotografía, catálogo, reputación y comunicación. La aprobación requiere al menos 70 % de respuestas correctas.",
    passingScore: 70,
    questions: [
      {
        id: "p1",
        prompt: "¿Qué significa posicionar una marca?",
        options: [
          { text: "Elegir el logo más colorido del rubro." },
          { text: "Ocupar un lugar claro frente a las alternativas reales del cliente." },
          { text: "Prometer que se es la mejor opción para todas las personas." },
          { text: "Copiar el mensaje de un competidor exitoso." },
        ],
        correctIndex: 1,
        explanation:
          "El posicionamiento define para quién es la marca, qué beneficio ofrece y por qué la elegirían frente a otras opciones. No es una frase aislada ni una promesa para todos.",
      },
      {
        id: "p2",
        prompt: "¿Cuál de estas promesas está mejor respaldada?",
        options: [
          { text: "«Somos la mejor calidad del mercado»." },
          { text: "«Tenemos atención personalizada»." },
          { text: "«Pedidos confirmados antes de las 10 se entregan ese día en el centro; si no, avisamos antes de las 12»." },
          { text: "«Hacemos todo lo que necesites»." },
        ],
        correctIndex: 2,
        explanation:
          "La tercera promesa define una condición, un resultado y un límite. Las frases generales no permiten comprobar si se cumplen ni ayudan al cliente a decidir.",
      },
      {
        id: "p3",
        prompt: "En una jerarquía de mensajes, ¿qué debería aparecer primero?",
        options: [
          { text: "Una lista de todos los precios." },
          { text: "La idea central que resume el lugar de la marca." },
          { text: "Los datos personales del emprendedor." },
          { text: "Un descuento por tiempo limitado." },
        ],
        correctIndex: 1,
        explanation:
          "La idea central ordena el resto: beneficios, pruebas, objeciones y llamado a la acción. Si todo aparece con la misma importancia, el cliente no recuerda nada.",
      },
      {
        id: "p4",
        prompt: "¿Qué práctica daña la reputación de una marca?",
        options: [
          { text: "Publicar testimonios con permiso y sin alterar su sentido." },
          { text: "Inventar reseñas o mostrar resultados que no ocurrieron." },
          { text: "Explicar los límites de un producto antes de venderlo." },
          { text: "Responder un reclamo con un plazo concreto." },
        ],
        correctIndex: 1,
        explanation:
          "La prueba social debe ser real y autorizada. Inventar reseñas, clientes o resultados puede generar una venta inmediata y destruir la confianza cuando se descubre.",
      },
      {
        id: "p5",
        prompt: "¿Qué métrica se acerca más a la conversión comercial?",
        options: [
          { text: "Cantidad de visualizaciones." },
          { text: "Cantidad de «me gusta»." },
          { text: "Consultas calificadas que se convierten en pedidos." },
          { text: "Cantidad de publicaciones realizadas." },
        ],
        correctIndex: 2,
        explanation:
          "Las visualizaciones y los «me gusta» pueden indicar interés, pero no prueban una intención de compra. La conversión de consultas calificadas a pedidos está más cerca del resultado comercial.",
      },
      {
        id: "p6",
        prompt: "Un cliente reclama por una entrega tardía. ¿Cuál es una respuesta coherente con una marca confiable?",
        options: [
          { text: "Ignorar el mensaje hasta que se calme." },
          { text: "Reconocer el problema, explicar qué pasó, dar un plazo y ofrecer una solución concreta." },
          { text: "Culpar al cliente por no haber avisado antes." },
          { text: "Ofrecer un descuento sin reconocer el error." },
        ],
        correctIndex: 1,
        explanation:
          "La confianza se sostiene con respuestas claras y responsables. Reconocer, informar y resolver es más valioso que una disculpa vacía o un silencio.",
      },
      {
        id: "p7",
        prompt: "¿Qué decisión mejora la accesibilidad de una pieza visual?",
        options: [
          { text: "Usar texto claro sobre fondo con contraste suficiente." },
          { text: "Transmitir información solo con colores parecidos." },
          { text: "Usar la mayor cantidad de tipografías posible." },
          { text: "Escribir textos extensos en letra pequeña." },
        ],
        correctIndex: 0,
        explanation:
          "El contraste y el tamaño legible permiten que más personas lean el mensaje. La información no debe depender únicamente del color.",
      },
      {
        id: "p8",
        prompt: "¿Para qué sirve una arquitectura de oferta con opciones básica, recomendada y completa?",
        options: [
          { text: "Para confundir al cliente y que compre la más cara." },
          { text: "Para facilitar la comparación y reducir el esfuerzo de elección." },
          { text: "Para esconder los precios y las condiciones." },
          { text: "Para eliminar la necesidad de explicar qué incluye cada opción." },
        ],
        correctIndex: 1,
        explanation:
          "Una buena arquitectura de oferta ordena alternativas y ayuda a decidir. Las diferencias deben ser claras y honestas; no se trata de ocultar información.",
      },
      {
        id: "p9",
        prompt: "¿Qué conviene preparar antes de un lanzamiento?",
        options: [
          { text: "Solo las publicaciones de la primera semana." },
          { text: "Catálogo, stock, precios, preguntas frecuentes, respuestas y canal de pedidos." },
          { text: "Un descuento permanente para cualquier consulta." },
          { text: "Testimonios inventados para generar confianza." },
        ],
        correctIndex: 1,
        explanation:
          "El lanzamiento atrae consultas; si el catálogo, el stock y la atención no están listos, el interés se pierde. La preparación incluye también los límites y las condiciones.",
      },
      {
        id: "p10",
        prompt: "¿Qué sostiene una buena reputación en el tiempo?",
        options: [
          { text: "Publicar mucho contenido aunque la experiencia de compra falle." },
          { text: "La coherencia entre la promesa, la experiencia y la comunicación." },
          { text: "Bajar el precio en cada campaña." },
          { text: "Tener el logo más grande de la competencia." },
        ],
        correctIndex: 1,
        explanation:
          "La reputación se construye en cada punto de contacto. Si la promesa no coincide con la entrega, la atención o las condiciones, el contenido por sí solo no alcanza.",
      },
    ],
  },
  resourceSlugs: [
    "lista-verificacion-identidad-comercial",
    "guia-fotografia-celular",
    "calendario-contenidos-30-dias",
    "plan-de-negocios-simple",
  ],
  toolIds: ["diagnostico-emprendedor"],
};
