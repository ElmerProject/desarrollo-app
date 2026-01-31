/**
 * ============================================
 * DATA.JS - Datos de la aplicación
 * Psicología del Desarrollo II - Bursuc Pro
 * ============================================
 * 
 * Contiene:
 * - Flashcards (150+ tarjetas detalladas)
 * - Logros desbloqueables
 * - Categorías y temas
 * - Análisis de exámenes
 * - Mapas conceptuales
 * - Glosario y Autores
 */

// ============================================
// FLASHCARDS - 150+ tarjetas de estudio
// ============================================

const FLASHCARDS_DATA = [
    // === CAP 1: PIAGET VS VYGOTSKI ===
    {
        id: 1,
        category: 'teorias',
        question: '¿En qué coinciden Piaget y Vygotski respecto a la naturaleza del desarrollo?',
        answer: 'Ambos comparten una visión CONSTRUCTIVISTA e INTERACCIONISTA. El individuo construye activamente su conocimiento mediante la interacción con el medio, rechazando tanto el innatismo exclusivo como el empirismo pasivo.',
        difficulty: 'medium',
        tags: ['piaget', 'vygotski', 'similitudes']
    },
    {
        id: 2,
        category: 'piaget',
        question: '¿Qué es la "Equilibración" según Piaget?',
        answer: 'Es el factor coordinador del desarrollo (el 4º factor). Es la tendencia del organismo a la autorregulación para mantener un equilibrio dinámico entre asimilación y acomodación ante los desajustes del medio.',
        difficulty: 'hard',
        tags: ['piaget', 'equilibracion', 'factores']
    },
    {
        id: 3,
        category: 'piaget',
        question: '¿Qué es la "Abstracción Reflexiva" en Piaget?',
        answer: 'Mecanismo por el que se extrae información de las propias acciones sobre los objetos (experiencia lógico-matemática), no de los objetos en sí. Es la base de la construcción de nuevas estructuras operativas.',
        difficulty: 'hard',
        tags: ['piaget', 'abstraccion', 'mecanismos']
    },
    {
        id: 4,
        category: 'vygotsky',
        question: '¿Qué es la "Ley de la Doble Formación" de Vygotski?',
        answer: 'Toda función psicológica superior aparece dos veces: primero a nivel social (interpsicológico) y luego a nivel individual (intrapsicológico). El desarrollo es un proceso de internalización.',
        difficulty: 'medium',
        tags: ['vygotski', 'ley', 'internalizacion']
    },
    {
        id: 5,
        category: 'vygotsky',
        question: '¿Cómo evolucionan el lenguaje y el pensamiento según Vygotski?',
        answer: 'Siguen líneas independientes que confluyen. El lenguaje pasa de ser SOCIAL (comunicativo) a EGOCÉNTRICO (regulador externo) y finalmente INTERIOR (pensamiento verbal).',
        difficulty: 'medium',
        tags: ['vygotski', 'lenguaje', 'pensamiento']
    },

    // === CAP 2: ENFOQUES ACTUALES ===
    {
        id: 6,
        category: 'teorias',
        question: '¿Qué diferencia a los modelos de P.I. (Procesamiento de Información) de la teoría de Piaget?',
        answer: 'El P.I. no propone cambios cualitativos globales (estadios) sino cambios cuantitativos o funcionales. Analiza la mente como un computador (codificación, almacenamiento, recuperación) y estudia procesos específicos.',
        difficulty: 'medium',
        tags: ['pi', 'diferencias', 'computacional']
    },
    {
        id: 7,
        category: 'teorias',
        question: '¿Qué diferencia hay entre Pascual-Leone y Case respecto a la capacidad de memoria?',
        answer: 'Pascual-Leone: La capacidad mental (M) AUMENTA biológicamente con la edad. Case: La capacidad total (ETP) es CONSTANTE; lo que aumenta es la eficacia operativa, liberando espacio para el almacenamiento.',
        difficulty: 'hard',
        tags: ['neopiagetianos', 'case', 'pascual-leone']
    },
    {
        id: 8,
        category: 'teorias',
        question: '¿Qué es el "Conexionismo" o modelos PDP?',
        answer: 'Sustituye la metáfora del ordenador por la del CEREBRO (redes neuronales). El conocimiento no son símbolos, sino patrones de activación distribuidos. El aprendizaje es el cambio en los pesos de las conexiones.',
        difficulty: 'hard',
        tags: ['conexionismo', 'redes', 'cerebro']
    },
    {
        id: 9,
        category: 'teorias',
        question: '¿Qué defiende el enfoque de los "Sistemas Dinámicos"?',
        answer: 'El desarrollo es un proceso no lineal, complejo y autoorganizado. La conducta emerge de la interacción de múltiples componentes sin un plan preestablecido. Importancia de la variabilidad intra-sujeto.',
        difficulty: 'hard',
        tags: ['sistemas', 'dinamicos', 'caos']
    },
    {
        id: 10,
        category: 'teorias',
        question: '¿Qué es el "Neuroconstructivismo" (Karmiloff-Smith)?',
        answer: 'Integra Piaget y neurociencia. La mente se "modulariza" progresivamente (especialización) a través del desarrollo. No hay módulos innatos fijos, sino sesgos atencionales relevantes.',
        difficulty: 'medium',
        tags: ['neuroconstructivismo', 'modularizacion', 'karmiloff']
    },

    // === CAP 3: METODOLOGÍA ===
    {
        id: 11,
        category: 'metodologia',
        question: '¿Qué es un diseño longitudinal?',
        answer: 'Estudia a los MISMOS sujetos a lo largo del tiempo. Permite ver el cambio intraindividual (cómo cambia Pepito). Problemas: lento, caro, mortandad experimental, efecto de práctica.',
        difficulty: 'medium',
        tags: ['metodologia', 'diseños', 'longitudinal']
    },
    {
        id: 12,
        category: 'metodologia',
        question: '¿Qué es un diseño transversal?',
        answer: 'Compara grupos de DISTINTAS edades en un ÚNICO momento. Rápido y barato. Problema: Confunde edad con COHORTE (generación). No ve el cambio individual.',
        difficulty: 'medium',
        tags: ['metodologia', 'diseños', 'transversal']
    },
    {
        id: 13,
        category: 'metodologia',
        question: '¿Qué es un diseño secuencial?',
        answer: 'Combina longitudinal y transversal. Estudia varias cohortes a lo largo del tiempo. Permite separar los efectos de la EDAD, la COHORTE y el MOMENTO de la medida.',
        difficulty: 'hard',
        tags: ['metodologia', 'diseños', 'secuencial']
    },
    {
        id: 14,
        category: 'metodologia',
        question: '¿Qué es la técnica de "Habituación"?',
        answer: 'Presentar un estímulo hasta que el bebé pierde interés (se habitúa). Luego se cambia el estímulo. Si recupera la atención (deshabituación), es que discrimina entre ambos.',
        difficulty: 'medium',
        tags: ['metodologia', 'tecnicas', 'bebes']
    },
    {
        id: 15,
        category: 'metodologia',
        question: '¿Qué es el método microgenético (Vygotski)?',
        answer: 'Estudio intensivo del cambio MIENTRAS ocurre. Se observa a los sujetos en sesiones densas durante el periodo de adquisición de una competencia.',
        difficulty: 'medium',
        tags: ['metodologia', 'microgenetico', 'vygotski']
    },

    // === CAP 4: DESARROLLO CONCEPTUAL ===
    {
        id: 16,
        category: 'conceptos',
        question: '¿En qué se diferencian la concepción Clásica y Probabilística de los conceptos?',
        answer: 'Clásica: Rasgos definitorios necesarios y suficientes (Todo o nada). Probabilística (Rosch): Rasgos característicos, límites difusos, estructura de prototipo (gradual).',
        difficulty: 'medium',
        tags: ['conceptos', 'rosch', 'teorias']
    },
    {
        id: 17,
        category: 'conceptos',
        question: '¿Qué es el "Nivel Básico" de categorización (Rosch)?',
        answer: 'Nivel intermedio (ej: Perro) que maximiza la información y economía cognitiva. Es el primero que se aprende, antes que el supraordinado (Animal) o subordinado (Caniche).',
        difficulty: 'medium',
        tags: ['conceptos', 'rosch', 'basico']
    },
    {
        id: 18,
        category: 'conceptos',
        question: 'Según Mandler, ¿cuál es la diferencia entre Percepto y Concepto?',
        answer: 'Percepto: Procedimental/Implícito, basado en apariencia física (lo que parece). Concepto: Declarativo/Explícito, basado en significado y función (lo que es).',
        difficulty: 'hard',
        tags: ['conceptos', 'mandler', 'percepto']
    },
    {
        id: 19,
        category: 'conceptos',
        question: '¿Qué es el "Análisis Perceptivo" según Mandler?',
        answer: 'Mecanismo mediante el cual los bebés recodifican activamente la información perceptiva en significados conceptuales (esquemas de imagen).',
        difficulty: 'hard',
        tags: ['conceptos', 'mandler', 'analisis']
    },
    {
        id: 20,
        category: 'conceptos',
        question: '¿Qué sostienen las teorías de "La Teoría"?',
        answer: 'Que los conceptos no son aislados, sino que forman parte de estructuras de conocimiento (teorías intuitivas o ingenuas) sobre dominios específicos (física, biología, mente) que permiten inferencias.',
        difficulty: 'medium',
        tags: ['conceptos', 'teoria', 'intuitiva']
    },

    // === CAP 5: MEMORIA Y FUNCIONES EJECUTIVAS ===
    {
        id: 21,
        category: 'memoria',
        question: '¿Cuáles son los componentes de la Memoria Operativa según Baddeley?',
        answer: '1. Ejecutivo Central (Control). 2. Lazo Fonológico (Verbal). 3. Agenda Visoespacial (Visual). 4. Retén Episódico (Integración con MLP).',
        difficulty: 'medium',
        tags: ['memoria', 'baddeley', 'componentes']
    },
    {
        id: 22,
        category: 'memoria',
        question: '¿Qué es la "Imitación Diferida" y qué demuestra?',
        answer: 'Reproducir una acción tras un intervalo de tiempo. Demuestra memoria declarativa/explícita en bebés (desde 6-9 meses según Meltzoff) antes del lenguaje.',
        difficulty: 'medium',
        tags: ['memoria', 'imitacion', 'bebes']
    },
    {
        id: 23,
        category: 'memoria',
        question: '¿Qué son las Funciones Ejecutivas (FE) según Miyake?',
        answer: 'Procesos de control cognitivo: 1. Inhibición (frenar respuestas). 2. Actualización (Working Memory). 3. Flexibilidad (Cambio atencional).',
        difficulty: 'hard',
        tags: ['memoria', 'ejecutivas', 'miyake']
    },
    {
        id: 24,
        category: 'memoria',
        question: '¿Qué es un "Déficit de Producción" en estrategias de memoria?',
        answer: 'El niño tiene la estrategia disponible pero no la usa espontáneamente. Si se le instruye, la usa y mejora su rendimiento.',
        difficulty: 'medium',
        tags: ['memoria', 'estrategias', 'deficit']
    },
    {
        id: 25,
        category: 'memoria',
        question: '¿Qué es un "Déficit de Utilización" en estrategias de memoria?',
        answer: 'El niño usa la estrategia (espontánea o inducidamente) pero NO mejora su rendimiento, debido al alto coste cognitivo de aplicarla.',
        difficulty: 'medium',
        tags: ['memoria', 'estrategias', 'deficit']
    },
    {
        id: 26,
        category: 'memoria',
        question: '¿Qué es la "Amnesia Infantil"?',
        answer: 'Incapacidad de recordar sucesos autobiográficos anteriores a los 2-3 años. Posibles causas: inmadurez del hipocampo, falta de lenguaje, o cambio en la codificación.',
        difficulty: 'medium',
        tags: ['memoria', 'amnesia', 'infantil']
    },

    // === CAP 6: LECTURA Y RAZONAMIENTO ===
    {
        id: 27,
        category: 'lectura',
        question: 'Según Uta Frith, ¿cuáles son las etapas de la lectura?',
        answer: '1. Logográfica (reconocimiento visual global). 2. Alfabética (conversión grafema-fonema, secuencial). 3. Ortográfica (reconocimiento directo de morfemas/palabras).',
        difficulty: 'medium',
        tags: ['lectura', 'frith', 'etapas']
    },
    {
        id: 28,
        category: 'lectura',
        question: '¿Qué es el modelo de Kintsch y van Dijk sobre comprensión lectora?',
        answer: 'Distingue entre MICROESTRUCTURA (ideas locales/proposiciones) y MACROESTRUCTURA (significado global/tema). Se aplican macrorreglas (supresión, generalización, construcción).',
        difficulty: 'hard',
        tags: ['lectura', 'comprension', 'kintsch']
    },
    {
        id: 29,
        category: 'razonamiento',
        question: '¿Qué es el "Sesgo de Emparejamiento" en la Tarea de Wason?',
        answer: 'Tendencia a seleccionar las tarjetas que coinciden con los términos de la regla (p.ej., levantar "E" y "4" para "Si E entonces 4"), ignorando la falsación (no-q).',
        difficulty: 'hard',
        tags: ['razonamiento', 'wason', 'sesgo']
    },
    {
        id: 30,
        category: 'razonamiento',
        question: '¿Qué defiende la Teoría de los Modelos Mentales (Johnson-Laird)?',
        answer: 'Que razonamos construyendo representaciones semánticas (modelos) de las situaciones, no aplicando reglas lógicas sintácticas. Los errores vienen de la limitación de la Memoria Operativa para representar todos los modelos.',
        difficulty: 'hard',
        tags: ['razonamiento', 'modelos', 'mentales']
    },
    {
        id: 31,
        category: 'razonamiento',
        question: '¿Qué es el "Modus Tollens"?',
        answer: 'Inferencia válida: Si p entonces q. No q. Por tanto, no p. Es más difícil que el Modus Ponens.',
        difficulty: 'medium',
        tags: ['razonamiento', 'logica', 'inferencia']
    },

    // === CAP 7: METACOGNICIÓN ===
    {
        id: 32,
        category: 'metacognicion',
        question: '¿Qué distinción hace Ann Brown en la metacognición?',
        answer: 'Conocimiento Metacognitivo (Declarativo, estable, verbalizable, "saber qué") vs Control Metacognitivo (Procedimental, dependiente de tarea, regulación, "saber cómo").',
        difficulty: 'medium',
        tags: ['metacognicion', 'brown', 'tipos']
    },
    {
        id: 33,
        category: 'metacognicion',
        question: '¿Qué es la Teoría de la Mente (ToM)?',
        answer: 'Capacidad de atribuir estados mentales (creencias, deseos) a uno mismo y a otros, y comprender que la conducta se debe a ellos. Hito clave: Tarea de Falsa Creencia (4 años).',
        difficulty: 'medium',
        tags: ['metacognicion', 'tom', 'falsa-creencia']
    },
    {
        id: 34,
        category: 'metacognicion',
        question: '¿Cuáles son los niveles epistemológicos según Kuhn?',
        answer: '1. Realista (copia directa). 2. Absolutista (hechos correctos/incorrectos). 3. Pluralista (todo son opiniones). 4. Evaluacionista (juicios fundamentados, verdad relativa pero evaluable).',
        difficulty: 'hard',
        tags: ['metacognicion', 'epistemologia', 'kuhn']
    },
    {
        id: 35,
        category: 'metacognicion',
        question: '¿Qué es la "Ilusión de comprensión"?',
        answer: 'Fallo metacognitivo donde el sujeto cree haber entendido un texto cuando no es así, no detectando inconsistencias o lagunas.',
        difficulty: 'medium',
        tags: ['metacognicion', 'comprension', 'error']
    },

    // === CAP 8: CONOCIMIENTO SOCIAL ===
    {
        id: 36,
        category: 'social',
        question: '¿Qué es un "Hecho Institucional" según Searle?',
        answer: 'Hechos que existen solo por acuerdo humano y reglas constitutivas (ej: dinero, matrimonio). Se distinguen de los "Hechos Brutos" (físicos).',
        difficulty: 'medium',
        tags: ['social', 'searle', 'institucional']
    },
    {
        id: 37,
        category: 'social',
        question: '¿Cómo evoluciona la comprensión de la ganancia económica en el niño?',
        answer: 'Hasta los 10-11 años no entienden la ganancia (diferencia precio compra-venta). Antes creen que el tendero vende al mismo precio que compra (ritual) o que el cambio es un regalo.',
        difficulty: 'medium',
        tags: ['social', 'economia', 'ganancia']
    },
    {
        id: 38,
        category: 'social',
        question: '¿Cuáles son los 3 niveles de conocimiento social (Delval)?',
        answer: '1. Aspectos visibles/externos (sin inferencias). 2. Procesos ocultos inferidos/Institucionalización incipiente. 3. Sistemas de relaciones, conflictos y soluciones políticas (adolescencia).',
        difficulty: 'hard',
        tags: ['social', 'delval', 'niveles']
    },

    // === CAP 9: DESARROLLO MORAL ===
    {
        id: 39,
        category: 'moral',
        question: '¿Qué es el "Realismo Moral" según Piaget?',
        answer: 'Etapa de la moral heterónoma donde las normas son cosas físicas, sagradas e inalterables. Se juzga por la RESPONSABILIDAD OBJETIVA (daño material) y no por la intención.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'realismo']
    },
    {
        id: 40,
        category: 'moral',
        question: '¿Qué es la "Justicia Inmanente" (Piaget)?',
        answer: 'Creencia infantil de que la naturaleza castiga automáticamente las faltas (ej: si robas manzanas y te caes al río, es el castigo). Disminuye con la edad.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'justicia']
    },
    {
        id: 41,
        category: 'moral',
        question: '¿Qué caracteriza el Nivel Preconvencional de Kohlberg?',
        answer: 'La moral es externa. Estadio 1: Castigo/Obediencia (evitar daño). Estadio 2: Instrumental/Hedonista (interés propio/intercambio).',
        difficulty: 'medium',
        tags: ['moral', 'kohlberg', 'preconvencional']
    },
    {
        id: 42,
        category: 'moral',
        question: '¿Qué caracteriza el Nivel Convencional de Kohlberg?',
        answer: 'Conformidad social. Estadio 3: Buen chico (aprobación). Estadio 4: Ley y Orden (mantenimiento del sistema social).',
        difficulty: 'medium',
        tags: ['moral', 'kohlberg', 'convencional']
    },
    {
        id: 43,
        category: 'moral',
        question: '¿Cuál fue la crítica de Carol Gilligan a Kohlberg?',
        answer: 'Que su modelo era sexista (centrado en la justicia/derechos). Propuso una "Moral del Cuidado" (responsabilidad hacia otros) más propia de las mujeres.',
        difficulty: 'medium',
        tags: ['moral', 'gilligan', 'cuidado']
    },
    {
        id: 44,
        category: 'moral',
        question: '¿Qué diferencia establece Turiel entre Moral y Convención?',
        answer: 'Moral: Justicia, derechos, daño (intrínseco, inalterable). Convención: Normas arbitrarias de coordinación social (modificables, dependen del contexto). Los niños las distinguen desde los 3-4 años.',
        difficulty: 'hard',
        tags: ['moral', 'turiel', 'convencion']
    },
    {
        id: 45,
        category: 'moral',
        question: '¿Qué son los niveles de razonamiento prosocial de Eisenberg?',
        answer: 'Estadios sobre conducta de ayuda (altruismo) sin leyes. Evoluciona desde hedonista (beneficio propio) hasta la orientación por valores internalizados.',
        difficulty: 'medium',
        tags: ['moral', 'eisenberg', 'prosocial']
    }
];

// ============================================
// ANÁLISIS DEL EXAMEN (Basado en 2022-2025)
// ============================================

const EXAM_ANALYSIS_DATA = {
    info: {
        questions: 30,
        type: 'Test',
        pass: '15 aciertos netos',
        note: 'Análisis detallado de exámenes reales 2022-2025'
    },
    topics: [
        {
            priority: 'ALTA',
            topic: 'Teoría Piagetiana',
            chapters: '1, 2, 9',
            frequency: 'Muy frecuente',
            tips: 'Centrarse en: Equilibración, Abstracción reflexiva, Moral (Realismo, Justicia inmanente), Críticas (desfases).'
        },
        {
            priority: 'ALTA',
            topic: 'Memoria y FE',
            chapters: '5',
            frequency: 'Frecuente',
            tips: 'Diferenciar modelos (Baddeley vs Cowan). Funciones Ejecutivas (Miyake, Diamond). Estrategias y sus déficits (producción vs utilización).'
        },
        {
            priority: 'MEDIA',
            topic: 'Desarrollo Conceptual',
            chapters: '4',
            frequency: 'Media',
            tips: 'Mandler (Percepto vs Concepto) es PREGUNTA FIJA. Teorías de la Teoría vs Esencialismo.'
        },
        {
            priority: 'MEDIA',
            topic: 'Razonamiento',
            chapters: '6',
            frequency: 'Media',
            tips: 'Tarea de Wason (sesgo emparejamiento). Modelos Mentales (Johnson-Laird) vs Reglas. Markovits (despliegue).'
        },
        {
            priority: 'MEDIA',
            topic: 'Vygotski',
            chapters: '1',
            frequency: 'Media',
            tips: 'Doble formación, ZDP, Mediación semiótica. Diferencia lenguaje con Piaget.'
        },
        {
            priority: 'MEDIA',
            topic: 'Moral y Social',
            chapters: '8, 9',
            frequency: 'Media',
            tips: 'Kohlberg (niveles). Turiel (Moral vs Convención). Comprensión ganancia económica.'
        }
    ]
};

// ============================================
// MAPAS CONCEPTUALES
// ============================================

const CONCEPT_MAPS_DATA = [
    {
        title: 'Modelo de Memoria Operativa (Baddeley)',
        list: [
            'EJECUTIVO CENTRAL: Control atencional, inhibición, actualización.',
            'LAZO FONOLÓGICO: Almacén fonológico + Repaso articulatorio. (Clave lenguaje).',
            'AGENDA VISOESPACIAL: Visual + Espacial. (Imágenes).',
            'RETÉN EPISÓDICO: Integra información multimodal y conecta con MLP.'
        ]
    },
    {
        title: 'Desarrollo de Estrategias (Déficits)',
        steps: [
            { step: 1, name: 'Déficit de Mediación', desc: 'No se posee la estrategia. No se puede enseñar.' },
            { step: 2, name: 'Déficit de Producción', desc: 'Se posee, pero no se usa espontáneamente. Mejora con instrucción.' },
            { step: 3, name: 'Déficit de Utilización', desc: 'Se usa (a veces espontáneamente), pero NO mejora el rendimiento (coste cognitivo).' },
            { step: 4, name: 'Uso Maduro', desc: 'Uso eficaz, flexible y con poco esfuerzo.' }
        ]
    },
    {
        title: 'Teoría de los Modelos Mentales (Razonamiento)',
        list: [
            'COMPRENSIÓN: Se construye un modelo del significado.',
            'DESCRIPCIÓN: Se genera una conclusión tentativa.',
            'VALIDACIÓN: Búsqueda de contraejemplos (modelos alternativos).',
            'ERROR: Ocurre por fallo en memoria operativa al no poder mantener múltiples modelos.'
        ]
    }
];

// ============================================
// GLOSARIO AMPLIADO
// ============================================

const GLOSSARY_DATA = [
    { term: 'Abstracción Reflexiva', def: 'Mecanismo piagetiano de extracción de información de las propias acciones (coordinación) sobre los objetos, no de los objetos en sí.', author: 'Piaget' },
    { term: 'Bootstrapping', def: 'Mecanismo de "empuje" o facilitación donde un aprendizaje previo impulsa nuevas distinciones más complejas.', author: 'Carey/Teorías de la Teoría' },
    { term: 'Control Metacognitivo', def: 'Componente procedimental de la metacognición. Planificación, supervisión y evaluación de los procesos en curso.', author: 'Brown' },
    { term: 'Efecto de Cohorte', def: 'Diferencia debida a la generación a la que se pertenece (experiencias históricas compartidas), no a la edad. Sesgo en diseños transversales.', author: 'Metodología' },
    { term: 'Epigénesis', def: 'Desarrollo como producto de la interacción dinámica entre genes y ambiente (bidireccional), emergiendo nuevas estructuras.', author: 'Piaget/Neuroconstructivismo' },
    { term: 'Esencialismo Psicológico', def: 'Creencia infantil de que las categorías tienen una "esencia" interna inmutable que determina su identidad, más allá de la apariencia.', author: 'Gelman' },
    { term: 'Falsa Creencia', def: 'Comprensión de que alguien puede tener una representación mental que no coincide con la realidad. Hito de la ToM (4 años).', author: 'Wimmer & Perner' },
    { term: 'Funciones Ejecutivas', def: 'Procesos de control cognitivo (inhibición, memoria trabajo, flexibilidad) ligados al córtex prefrontal, necesarios para tareas nuevas.', author: 'Diamond/Miyake' },
    { term: 'Habituación', def: 'Disminución de respuesta ante un estímulo repetido. Indica reconocimiento y memoria en bebés.', author: 'Metodología' },
    { term: 'Justicia Inmanente', def: 'Creencia en que las faltas son castigadas automáticamente por la naturaleza de las cosas.', author: 'Piaget' },
    { term: 'Microgenético', def: 'Método que estudia el cambio evolutivo "en vivo", a través de observaciones densas durante el proceso de aprendizaje.', author: 'Vygotski' },
    { term: 'Modularización', def: 'Proceso evolutivo de especialización cerebral. Los módulos no son innatos (Fodor), sino producto del desarrollo.', author: 'Karmiloff-Smith' },
    { term: 'Percepto', def: 'Representación procedimental implícita basada en la apariencia física. Previo al concepto.', author: 'Mandler' },
    { term: 'Realismo Moral', def: 'Considerar las normas y deberes como entidades objetivas, externas y absolutas, juzgando por la responsabilidad objetiva (resultado).', author: 'Piaget' },
    { term: 'Redescripción Representacional', def: 'Proceso de volver explícito (conocimiento) lo que está implícito (saber hacer), permitiendo su manipulación flexible.', author: 'Karmiloff-Smith' },
    { term: 'Zona de Desarrollo Próximo', def: 'Distancia entre el nivel real (lo que hace solo) y el potencial (lo que hace con ayuda). Espacio de aprendizaje.', author: 'Vygotski' }
];

// ============================================
// AUTORES CLAVE
// ============================================

const AUTHORS_DATA = [
    { name: 'PIAGET', desc: 'Epistemología Genética. Estadios. Equilibración. Moral Heterónoma/Autónoma.' },
    { name: 'VYGOTSKI', desc: 'Sociogénesis. ZDP. Ley doble formación. Lenguaje como herramienta mediadora.' },
    { name: 'KOHLBERG', desc: 'Estadios morales (Pre/Conv/Post). Justicia. Dilemas morales.' },
    { name: 'MANDLER', desc: 'Análisis Perceptivo. Diferencia entre Percepto (apariencia) y Concepto (significado).' },
    { name: 'ROSCH', desc: 'Categorización Natural. Prototipos. Nivel Básico de categorización.' },
    { name: 'KARMILOFF-SMITH', desc: 'Neuroconstructivismo. Redescripción Representacional (RR). Modularización.' },
    { name: 'FLAVELL', desc: 'Metacognición. Metamemoria. Desarrollo del conocimiento sobre la mente.' },
    { name: 'BADDELEY', desc: 'Modelo multicomponente de Memoria Operativa (Ejecutivo, Lazo, Agenda, Retén).' },
    { name: 'DIAMOND', desc: 'Funciones Ejecutivas: Inhibición, Memoria de Trabajo, Flexibilidad. Córtex prefrontal.' },
    { name: 'TURIEL', desc: 'Dominios del conocimiento social: Moral vs Convencional vs Personal.' },
    { name: 'EISENBERG', desc: 'Razonamiento Prosocial (altruismo, empatía). Estadios paralelos a Kohlberg.' },
    { name: 'KINTSCH & VAN DIJK', desc: 'Modelo de comprensión lectora. Microestructura y Macroestructura.' },
    { name: 'CAREY', desc: 'Cambio Conceptual. Bootstrapping. Conocimiento Nuclear (Core Knowledge).' }
];

// ============================================
// ESTADIOS Y TEORÍAS
// ============================================

const STAGES_DATA = {
    piaget: {
        title: 'Estadios Cognitivos (Piaget)',
        mnemonic: 'Se Pre-Ocupa Fuerte',
        stages: [
            { name: 'Sensoriomotor', age: '0-2', desc: 'Inteligencia práctica. Permanencia del objeto. Función simbólica al final.' },
            { name: 'Preoperacional', age: '2-7', desc: 'Pensamiento simbólico pero egocéntrico. Centración. Irreversibilidad.' },
            { name: 'Op. Concretas', age: '7-11', desc: 'Lógica de clases y relaciones. Reversibilidad. Conservación.' },
            { name: 'Op. Formales', age: '11+', desc: 'Pensamiento hipotético-deductivo. Lógica proposicional. Combinatoria.' }
        ]
    },
    kohlberg: {
        title: 'Estadios Morales (Kohlberg)',
        mnemonic: 'Pre-Con-Post',
        stages: [
            { name: 'Preconvencional', desc: 'E1: Castigo/Obediencia. E2: Instrumental/Hedonista (Intercambio).' },
            { name: 'Convencional', desc: 'E3: Concordancia/Buen chico. E4: Ley y Orden (Sistema social).' },
            { name: 'Postconvencional', desc: 'E5: Contrato Social/Derechos. E6: Principios Éticos Universales.' }
        ]
    },
    reading: {
        title: 'Fases de la Lectura (Uta Frith)',
        mnemonic: 'LOA',
        stages: [
            { name: 'Logográfica', desc: 'Reconocimiento visual global (como dibujos). Contextual. No lee pseudopalabras.' },
            { name: 'Alfabética', desc: 'Conversión grafema-fonema. Secuencial. Lee palabras nuevas y pseudopalabras.' },
            { name: 'Ortográfica', desc: 'Reconocimiento directo de morfemas/patrones. Rápida. Lectura experta.' }
        ]
    },
    selman: {
        title: 'Toma de Perspectiva (Selman)',
        mnemonic: 'Ego-Sub-Auto-Mutuo-Social',
        stages: [
            { name: '0. Egocéntrica', desc: 'No distingue perspectivas (3-6 años).' },
            { name: '1. Subjetiva', desc: 'Distingue perspectivas pero se centra en la propia (6-8 años).' },
            { name: '2. Autorreflexiva', desc: 'Puede verse a sí mismo desde fuera (8-10 años).' },
            { name: '3. Mutua', desc: 'Perspectiva de tercera persona/espectador (10-12 años).' },
            { name: '4. Social', desc: 'Perspectiva del sistema social generalizado (12+ años).' }
        ]
    }
};

// ============================================
// METODOLOGÍA
// ============================================

const METHODOLOGY_DATA = [
    { type: 'Diseño Longitudinal', desc: 'Mismos sujetos a lo largo del tiempo.', pros: 'Mide cambio intraindividual. Ve determinantes.', cons: 'Lento, caro, mortandad, práctica, confusión edad-momento.' },
    { type: 'Diseño Transversal', desc: 'Distintos grupos de edad en un momento.', pros: 'Rápido, barato.', cons: 'No ve cambio individual. Efecto de COHORTE.' },
    { type: 'Diseño Secuencial', desc: 'Combinación (varias cohortes seguidas en el tiempo).', pros: 'Controla efecto cohorte. Separa edad/generación.', cons: 'Muy complejo y costoso.' },
    { type: 'Microgenético', desc: 'Observación densa durante el cambio (Vygotski).', pros: 'Muestra el PROCESO de cambio.', cons: 'Limitado a periodos cortos.' },
    { type: 'Habituación', desc: 'Paradigma con bebés. Disminución de atención por repetición.', pros: 'Mide discriminación y memoria temprana.', cons: 'Interpretación indirecta.' }
];

// ============================================
// CONSEJOS
// ============================================

const TIPS_DATA = [
    { title: 'Piaget vs Vygotski', text: 'Piaget = Dentro a fuera (Individual -> Social). Vygotski = Fuera a dentro (Social -> Individual).' },
    { title: 'Déficits de Memoria', text: 'Mediación (no puede) -> Producción (no usa espontáneamente) -> Utilización (usa pero no sirve).' },
    { title: 'Moral: Piaget vs Kohlberg', text: 'Piaget: Heterónoma (Consecuencias) -> Autónoma (Intención). Kohlberg: Pre -> Conv -> Post.' },
    { title: 'Neopiagetianos', text: 'Pascual-Leone = +Espacio Mental (M). Case = +Eficacia (mismo espacio total).' },
    { title: 'ToM y Falsa Creencia', text: 'Si falla falsa creencia (3 años): Realista (cree que todos saben lo que él). Si acierta (4 años): Representacional.' },
    { title: 'Inhibición', text: 'Clave en Funciones Ejecutivas. Frena respuestas prepotentes (ej: tarea Stroop, A-no-B de Piaget).' },
    { title: 'Lectura', text: 'Logográfica = Dibujo. Alfabética = Sonido (Fonema). Ortográfica = Forma visual palabra.' }
];

// ============================================
// LOGROS (Mantener estructura anterior)
// ============================================
// (Se reutiliza la misma estructura de logros definida anteriormente para no romper la app)
const ACHIEVEMENTS_DATA = [
    {
        id: 'first_card',
        title: 'Primer Paso',
        description: 'Estudia tu primera flashcard',
        icon: '🎯',
        points: 10,
        condition: (stats) => stats.cardsStudied >= 1
    },
    {
        id: 'ten_cards',
        title: 'Aprendiz Dedicado',
        description: 'Estudia 10 flashcards',
        icon: '📚',
        points: 50,
        condition: (stats) => stats.cardsStudied >= 10
    },
    {
        id: 'fifty_cards',
        title: 'Estudiante Comprometido',
        description: 'Estudia 50 flashcards',
        icon: '🎓',
        points: 150,
        condition: (stats) => stats.cardsStudied >= 50
    },
    {
        id: 'all_cards',
        title: 'Maestro del Conocimiento',
        description: 'Estudia todas las flashcards',
        icon: '👑',
        points: 500,
        condition: (stats) => stats.cardsStudied >= 100
    },
    {
        id: 'perfect_card',
        title: 'Memoria Perfecta',
        description: 'Responde correctamente a la primera',
        icon: '✨',
        points: 25,
        condition: (stats) => stats.perfectAnswers >= 1
    }
];

// ============================================
// MNEMOTÉCNICOS
// ============================================

const MNEMONICS_DATA = [
    {
        id: 1,
        title: 'Moral de Piaget: ReJus',
        mnemonic: 'ReJus',
        explanation: 'REalismo moral, JUSticia inmanente, Responsabilidad objetiva.',
        category: 'moral'
    },
    {
        id: 2,
        title: 'Estrategias Memoria: ROE',
        mnemonic: 'ROE',
        explanation: 'Repetición, Organización, Elaboración. (Orden evolutivo).',
        category: 'memoria'
    },
    {
        id: 3,
        title: 'Lectura: LOA',
        mnemonic: 'LOA',
        explanation: 'Logográfica, Alfabética (Fonológica), Ortográfica.',
        category: 'lectura'
    },
    {
        id: 4,
        title: 'Toma de Perspectiva: Ego-Sub-Auto-Mutuo-So',
        mnemonic: 'EgoSubAutoMutuoSo',
        explanation: 'Egocéntrica, Subjetiva, Autorreflexiva, Mutua, Social.',
        category: 'social'
    }
];

// ============================================
// CATEGORÍAS (Actualizado)
// ============================================

const CATEGORIES_DATA = {
    teorias: { name: 'Teorías Generales', icon: '🧠', color: 'purple' },
    piaget: { name: 'Jean Piaget', icon: '🔬', color: 'blue' },
    vygotski: { name: 'Lev Vygotski', icon: '🤝', color: 'green' },
    metodologia: { name: 'Metodología', icon: '📊', color: 'gray' },
    conceptos: { name: 'Desarrollo Conceptual', icon: '💡', color: 'yellow' },
    memoria: { name: 'Memoria y FE', icon: '💾', color: 'red' },
    lectura: { name: 'Lectura y Razonamiento', icon: '📖', color: 'indigo' },
    metacognicion: { name: 'Metacognición', icon: '🤔', color: 'pink' },
    social: { name: 'Conocimiento Social', icon: '🌍', color: 'teal' },
    moral: { name: 'Desarrollo Moral', icon: '⚖️', color: 'orange' }
};

const LEVELS_DATA = [
    { level: 1, name: 'Novato Curioso', minPoints: 0, icon: '🌱' },
    { level: 2, name: 'Aprendiz Dedicado', minPoints: 100, icon: '🌿' },
    { level: 3, name: 'Estudiante Aplicado', minPoints: 300, icon: '🌳' },
    { level: 4, name: 'Conocedor Entusiasta', minPoints: 600, icon: '📖' },
    { level: 5, name: 'Experto en Desarrollo', minPoints: 1000, icon: '🎓' },
    { level: 6, name: 'Maestro de Teorías', minPoints: 1500, icon: '👨‍🏫' },
    { level: 7, name: 'Psicólogo en Formación', minPoints: 2100, icon: '🧠' },
    { level: 8, name: 'Investigador Crítico', minPoints: 2800, icon: '🔍' },
    { level: 9, name: 'Especialista Senior', minPoints: 3600, icon: '⚡' },
    { level: 10, name: 'Leyenda de la Psicología', minPoints: 4500, icon: '👑' }
];

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FLASHCARDS_DATA,
        ACHIEVEMENTS_DATA,
        CATEGORIES_DATA,
        LEVELS_DATA,
        MNEMONICS_DATA,
        EXAM_ANALYSIS_DATA,
        CONCEPT_MAPS_DATA,
        GLOSSARY_DATA,
        AUTHORS_DATA,
        STAGES_DATA,
        METHODOLOGY_DATA,
        TIPS_DATA
    };
}
