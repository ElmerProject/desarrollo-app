/**
 * ============================================
 * DATA.JS - Datos de la aplicación EXPANDIDO
 * Psicología del Desarrollo II - Bursuc Pro
 * ============================================
 * 
 * Contiene:
 * - Flashcards (200+ tarjetas detalladas)
 * - Logros desbloqueables
 * - Categorías y temas
 * - Análisis de exámenes completo
 * - Mapas conceptuales
 * - Glosario completo
 * - Autores y teóricos
 */

// ============================================
// FLASHCARDS - 200+ tarjetas de estudio
// ============================================

const FLASHCARDS_DATA = [
    // ============================================
    // CAP 1: PIAGET VS VYGOTSKI (Expanded)
    // ============================================
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
        answer: 'Es el factor coordinador del desarrollo (el 4º factor). Es la tendencia del organismo a la autorregulación para mantener un equilibrio dinámico entre asimilación y acomodación ante los desajustes del medio. Es el motor del desarrollo.',
        difficulty: 'hard',
        tags: ['piaget', 'equilibracion', 'factores']
    },
    {
        id: 3,
        category: 'piaget',
        question: '¿Qué es la "Abstracción Reflexiva" en Piaget?',
        answer: 'Mecanismo por el que se extrae información de las propias acciones sobre los objetos (experiencia lógico-matemática), no de los objetos en sí. Es la base de la construcción de nuevas estructuras operativas. Se diferencia de la abstracción simple que extrae propiedades de los objetos.',
        difficulty: 'hard',
        tags: ['piaget', 'abstraccion', 'mecanismos']
    },
    {
        id: 4,
        category: 'vygotsky',
        question: '¿Qué es la "Ley de la Doble Formación" de Vygotski?',
        answer: 'Toda función psicológica superior aparece dos veces: primero a nivel social (interpsicológico) y luego a nivel individual (intrapsicológico). El desarrollo es un proceso de internalización de lo social.',
        difficulty: 'medium',
        tags: ['vygotski', 'ley', 'internalizacion']
    },
    {
        id: 5,
        category: 'vygotsky',
        question: '¿Cómo evolucionan el lenguaje y el pensamiento según Vygotski?',
        answer: 'Siguen líneas independientes que confluyen. El lenguaje pasa de ser SOCIAL (comunicativo) a EGOCÉNTRICO (regulador externo) y finalmente INTERIOR (pensamiento verbal). Vygotski ve el lenguaje como herramienta mediadora del pensamiento.',
        difficulty: 'medium',
        tags: ['vygotski', 'lenguaje', 'pensamiento']
    },
    {
        id: 6,
        category: 'piaget',
        question: '¿Qué es la Asimilación según Piaget?',
        answer: 'Proceso por el cual el organismo integra elementos externos dentro de las estructuras ya disponibles. Lo nuevo se interpreta según los esquemas previos. Ejemplo: un niño que ve un caballo y lo llama "perro grande" está asimilando a su esquema de perro.',
        difficulty: 'easy',
        tags: ['piaget', 'asimilacion']
    },
    {
        id: 7,
        category: 'piaget',
        question: '¿Qué es la Acomodación según Piaget?',
        answer: 'Proceso por el cual las estructuras previas se modifican para adaptarse a los nuevos elementos. Supone un cambio en los esquemas ante la resistencia del objeto. Es complementaria e inseparable de la asimilación.',
        difficulty: 'easy',
        tags: ['piaget', 'acomodacion']
    },
    {
        id: 8,
        category: 'piaget',
        question: '¿Qué es un Esquema para Piaget?',
        answer: 'Patrón de conducta organizado que representa un modo característico de interacción con el medio. Es la unidad básica de las estructuras psicológicas. Toda acción particular es manifestación de un esquema cognitivo subyacente.',
        difficulty: 'medium',
        tags: ['piaget', 'esquema']
    },
    {
        id: 9,
        category: 'piaget',
        question: '¿Cuáles son los tres tipos de experiencia según Piaget?',
        answer: '1) Ejercicio simple con el objeto (no implica nuevo conocimiento), 2) Experiencia física: conocimiento sobre propiedades de objetos por abstracción simple, 3) Experiencia lógico-matemática: conocimiento de las acciones y sus relaciones por abstracción reflexiva (la más importante).',
        difficulty: 'hard',
        tags: ['piaget', 'experiencia', 'tipos']
    },
    {
        id: 10,
        category: 'vygotsky',
        question: '¿Qué es la Zona de Desarrollo Próximo (ZDP)?',
        answer: 'Distancia entre el nivel de desarrollo real (lo que hace solo) y el nivel de desarrollo potencial (lo que hace con ayuda). Es el margen de competencia en el que el aprendizaje puede actuar. Concepto clave para el andamiaje educativo.',
        difficulty: 'medium',
        tags: ['vygotski', 'zdp', 'desarrollo']
    },
    {
        id: 11,
        category: 'vygotsky',
        question: '¿Qué diferencia hay entre la línea natural y la línea cultural del desarrollo según Vygotski?',
        answer: 'La línea natural es el desarrollo biológico/madurativo. La línea cultural es el desarrollo por apropiación de herramientas cognitivo-culturales. El desarrollo real es la fusión de ambas: la cultura amplifica artificialmente los recursos naturales.',
        difficulty: 'hard',
        tags: ['vygotski', 'linea', 'natural', 'cultural']
    },
    {
        id: 12,
        category: 'teorias',
        question: '¿Cuál es la diferencia fundamental entre Piaget y Vygotski respecto al aprendizaje?',
        answer: 'Piaget: El aprendizaje va "a remolque" del desarrollo (sigue al desarrollo). Vygotski: El aprendizaje "tira" del desarrollo (lo promueve). Para Vygotski, la buena enseñanza es la que se adelanta al desarrollo.',
        difficulty: 'medium',
        tags: ['piaget', 'vygotski', 'aprendizaje']
    },
    {
        id: 13,
        category: 'piaget',
        question: '¿Qué es la Epistemología Genética de Piaget?',
        answer: 'Intento por explicar el conocimiento tanto filosófica como empíricamente. Estudia el "paso de un conocimiento peor o más pobre a un saber más rico". Busca establecer un sistema filosófico sobre la base de una teoría biológica del conocimiento.',
        difficulty: 'hard',
        tags: ['piaget', 'epistemologia', 'genetica']
    },
    {
        id: 14,
        category: 'piaget',
        question: '¿Cuáles son los cuatro factores del desarrollo según Piaget?',
        answer: '1) Maduración biológica, 2) Experiencia física, 3) Experiencia social, 4) Equilibración (factor coordinador). La equilibración es el principal factor explicativo del desarrollo.',
        difficulty: 'medium',
        tags: ['piaget', 'factores', 'desarrollo']
    },
    {
        id: 15,
        category: 'vygotsky',
        question: '¿Qué es la Internalización según Vygotski?',
        answer: 'Proceso por el que una actividad o relación externa se reconstruye internamente, incorporándose a las estructuras psicológicas del sujeto. Es el paso de lo interpsicológico a lo intrapsicológico.',
        difficulty: 'medium',
        tags: ['vygotski', 'internalizacion']
    },
    {
        id: 16,
        category: 'vygotsky',
        question: '¿Qué es la Mediación Semiótica según Vygotski?',
        answer: 'Los signos (proporcionados por la cultura) sirven como instrumentos de mediación entre las personas. Cualquier recurso cognitivo surge primero en la relación social y luego se internaliza. El lenguaje es el mediador por excelencia.',
        difficulty: 'hard',
        tags: ['vygotski', 'mediacion', 'semiotica']
    },
    {
        id: 17,
        category: 'piaget',
        question: '¿Qué es el Constructivismo Interaccionista de Piaget?',
        answer: 'Postura intermedia entre el innatismo (ideas preformadas) y el empirismo (copia del objeto). El conocimiento es una construcción activa del sujeto mediante la interacción con el medio. Las estructuras ni están dadas en los objetos ni en el sujeto.',
        difficulty: 'medium',
        tags: ['piaget', 'constructivismo', 'interaccionismo']
    },
    {
        id: 18,
        category: 'teorias',
        question: '¿Qué es el Andamiaje (Scaffolding) según Bruner?',
        answer: 'Ayuda temporal y ajustada que da el adulto o experto al niño dentro de su ZDP. Se retira progresivamente a medida que el niño puede hacerse cargo de la tarea. Concepto neovygotskiano aplicado a la educación.',
        difficulty: 'medium',
        tags: ['bruner', 'andamiaje', 'zdp']
    },
    {
        id: 19,
        category: 'piaget',
        question: '¿Qué es la Función Simbólica según Piaget?',
        answer: 'Capacidad de formar y utilizar símbolos mentales que representan lo que ya no está presente. Incluye: imágenes mentales, imitación diferida, juego simbólico, dibujo y lenguaje. Surge hacia el final del período sensoriomotor (2 años).',
        difficulty: 'medium',
        tags: ['piaget', 'funcion', 'simbolica']
    },
    {
        id: 20,
        category: 'piaget',
        question: '¿Qué es el Egocentrismo según Piaget?',
        answer: 'Actitud intelectual del niño preoperatorio que consiste en interpretar el mundo bajo la propia perspectiva sin conciencia clara de que los demás tienen puntos de vista diferentes. Es una limitación cognitiva, no emocional.',
        difficulty: 'medium',
        tags: ['piaget', 'egocentrismo']
    },
    
    // ============================================
    // CAP 2: ENFOQUES ACTUALES (Expanded)
    // ============================================
    {
        id: 21,
        category: 'teorias',
        question: '¿Qué diferencia a los modelos de P.I. (Procesamiento de Información) de la teoría de Piaget?',
        answer: 'El P.I. no propone cambios cualitativos globales (estadios) sino cambios cuantitativos o funcionales. Analiza la mente como un computador (codificación, almacenamiento, recuperación) y estudia procesos específicos de dominio.',
        difficulty: 'medium',
        tags: ['pi', 'diferencias', 'computacional']
    },
    {
        id: 22,
        category: 'teorias',
        question: '¿Qué diferencia hay entre Pascual-Leone y Case respecto a la capacidad de memoria?',
        answer: 'Pascual-Leone: La capacidad mental (M) AUMENTA biológicamente con la edad (e + 1, e + 2...). Case: La capacidad total (ETP) es CONSTANTE; lo que aumenta es la eficacia operativa (EOP disminuye → ACP aumenta).',
        difficulty: 'hard',
        tags: ['neopiagetianos', 'case', 'pascual-leone']
    },
    {
        id: 23,
        category: 'teorias',
        question: '¿Qué es el "Conexionismo" o modelos PDP?',
        answer: 'Sustituye la metáfora del ordenador por la del CEREBRO (redes neuronales). El conocimiento no son símbolos, sino patrones de activación distribuidos. El aprendizaje es el cambio en los pesos de las conexiones entre unidades.',
        difficulty: 'hard',
        tags: ['conexionismo', 'redes', 'cerebro']
    },
    {
        id: 24,
        category: 'teorias',
        question: '¿Qué defiende el enfoque de los "Sistemas Dinámicos"?',
        answer: 'El desarrollo es un proceso no lineal, complejo y autoorganizado. La conducta emerge de la interacción de múltiples componentes sin un plan preestablecido. Importancia de la variabilidad intra-sujeto como fuente de datos.',
        difficulty: 'hard',
        tags: ['sistemas', 'dinamicos', 'caos']
    },
    {
        id: 25,
        category: 'teorias',
        question: '¿Qué es el "Neuroconstructivismo" (Karmiloff-Smith)?',
        answer: 'Integra Piaget y neurociencia. La mente se "modulariza" progresivamente (especialización) a través del desarrollo. No hay módulos innatos fijos (como decía Fodor), sino sesgos atencionales relevantes. Postula "redescripción representacional" (RR).',
        difficulty: 'medium',
        tags: ['neuroconstructivismo', 'modularizacion', 'karmiloff']
    },
    {
        id: 26,
        category: 'teorias',
        question: '¿Qué es la "Redescripción Representacional" (RR) de Karmiloff-Smith?',
        answer: 'Proceso de volver explícito (conocimiento declarativo) lo que está implícito (conocimiento procedimental). Permite la manipulación flexible de la información. Hay tres niveles: I (implícito), E1 (explicito), E2 (autoconsciente).',
        difficulty: 'hard',
        tags: ['karmiloff', 'redescripcion', 'rr']
    },
    {
        id: 27,
        category: 'teorias',
        question: '¿Qué son los Sistemas de Producciones en el Procesamiento de Información?',
        answer: 'Reglas condición-acción (SI...ENTONCES...) propuestas por Newell y Simon. El sistema aprende adquiriendo nuevas producciones. Los mecanismos de automodificación incluyen: resolución de conflicto, generalización, discriminación y composición.',
        difficulty: 'hard',
        tags: ['pi', 'producciones', 'newell']
    },
    {
        id: 28,
        category: 'teorias',
        question: '¿Qué propone Halford sobre el desarrollo cognitivo?',
        answer: '4 estadios caracterizados por la capacidad de realizar operaciones de correspondencia de estructuras (de índole matemática). El desarrollo depende del incremento en la capacidad de procesamiento, que es gradual y fruto de la maduración.',
        difficulty: 'hard',
        tags: ['halford', 'neopiagetiano']
    },
    {
        id: 29,
        category: 'teorias',
        question: '¿Qué propone Fischer sobre el desarrollo cognitivo?',
        answer: '4 estadios basados en el concepto de "destreza". El desarrollo surge de la interacción sujeto-tarea-contexto. La variabilidad es la regla, pero hay regularidades o escalones. Cada escalón sufre cambios graduales hasta un cambio abrupto en el nivel óptimo.',
        difficulty: 'hard',
        tags: ['fischer', 'neopiagetiano', 'destrezas']
    },
    {
        id: 30,
        category: 'teorias',
        question: '¿Qué es la Epigénesis en el contexto del desarrollo?',
        answer: 'Desarrollo como producto de la interacción dinámica bidireccional entre genes y ambiente, emergiendo nuevas estructuras. Es la concepción opuesta al "preformismo" (el organismo ya existe completo en la célula inicial).',
        difficulty: 'medium',
        tags: ['epigenesis', 'neuroconstructivismo', 'sistemas']
    },
    {
        id: 31,
        category: 'teorias',
        question: '¿Qué es la Especialización Progresiva según el neuroconstructivismo?',
        answer: 'A medida que se produce el desarrollo, las conexiones en distintas regiones cerebrales se especializan en funciones específicas mediante procesos de competición y cooperación. Resulta en pérdida de plasticidad pero aumento de eficacia.',
        difficulty: 'hard',
        tags: ['neuroconstructivismo', 'especializacion']
    },
    {
        id: 32,
        category: 'teorias',
        question: '¿Qué son las Trayectorias del Desarrollo según el neuroconstructivismo?',
        answer: 'Concepción del desarrollo típico y atípico como trayectorias diversas. Las alteraciones tempranas tienen efectos en cascada que afectan el desarrollo en el tiempo. El objetivo es construir contextos que maximicen la adaptación.',
        difficulty: 'hard',
        tags: ['neuroconstructivismo', 'trayectorias']
    },
    {
        id: 33,
        category: 'teorias',
        question: '¿Qué es la Autoorganización según los Sistemas Dinámicos?',
        answer: 'El funcionamiento del sistema genera nuevos estados y propiedades emergentes sin instrucciones explícitas. El orden emerge de las interacciones de un sistema complejo. Ejemplo: nadie enseña explícitamente el lenguaje pero los niños lo aprenden.',
        difficulty: 'hard',
        tags: ['sistemas', 'dinamicos', 'autoorganizacion']
    },
    {
        id: 34,
        category: 'teorias',
        question: '¿Qué es un Estado Atractor en los Sistemas Dinámicos?',
        answer: 'Forma de equilibrio hacia la que tiende a evolucionar el sistema. Por ejemplo, el nivel adulto de conocimiento gramatical sería un estado atractor estable hacia el que se orienta el sistema de manera no intencional.',
        difficulty: 'hard',
        tags: ['sistemas', 'dinamicos', 'atractor']
    },
    {
        id: 35,
        category: 'teorias',
        question: '¿Qué es la Retropropagación del Error en redes conexionistas?',
        answer: 'Algoritmo de aprendizaje supervisado en redes multiestrato. Propaga hacia atrás la discrepancia entre salida real y esperada, ajustando los pesos de las conexiones en todas las capas de la red.',
        difficulty: 'hard',
        tags: ['conexionismo', 'retropropagacion']
    },
    {
        id: 36,
        category: 'teorias',
        question: '¿Qué diferencia hay entre conexionismo clásico y redes constructivistas?',
        answer: 'Las redes constructivistas (Mareschal y Schultz) pueden añadir nuevas estructuras (unidades ocultas) mediante algoritmos generativos, permitiendo cambios cualitativos. El conexionismo clásico tiene arquitectura fija.',
        difficulty: 'hard',
        tags: ['conexionismo', 'constructivista', 'redes']
    },
    {
        id: 37,
        category: 'teorias',
        question: '¿Qué es la Cronotopía según el neuroconstructivismo?',
        answer: 'Mecanismo de organización temporal del desarrollo neuronal. Los eventos del desarrollo prenatal ocurren en secuencia concreta que depende de la oportuna estimulación. Ejemplo: la agudeza visual limitada al principio es ventajosa para la integración sensorial.',
        difficulty: 'hard',
        tags: ['neuroconstructivismo', 'cronotopia']
    },
    
    // ============================================
    // CAP 3: METODOLOGÍA (Expanded)
    // ============================================
    {
        id: 38,
        category: 'metodologia',
        question: '¿Qué es un diseño longitudinal?',
        answer: 'Estudia a los MISMOS sujetos a lo largo del tiempo. Permite ver el cambio intraindividual directo. Problemas: lento, caro, mortandad experimental, efecto de práctica, confusión edad-momento de medida.',
        difficulty: 'medium',
        tags: ['metodologia', 'disenos', 'longitudinal']
    },
    {
        id: 39,
        category: 'metodologia',
        question: '¿Qué es un diseño transversal?',
        answer: 'Compara grupos de DISTINTAS edades en un ÚNICO momento. Rápido y barato. Problema: Confunde edad con COHORTE (generación). No ve el cambio individual, solo diferencias entre grupos.',
        difficulty: 'medium',
        tags: ['metodologia', 'disenos', 'transversal']
    },
    {
        id: 40,
        category: 'metodologia',
        question: '¿Qué es un diseño secuencial?',
        answer: 'Combina longitudinal y transversal. Estudia varias cohortes a lo largo del tiempo. Permite separar los efectos de la EDAD, la COHORTE y el MOMENTO de la medida. Mayor confiabilidad y eficiencia.',
        difficulty: 'hard',
        tags: ['metodologia', 'disenos', 'secuencial']
    },
    {
        id: 41,
        category: 'metodologia',
        question: '¿Qué es la técnica de "Habituación/Deshabituación"?',
        answer: 'Presentar un estímulo hasta que el bebé pierde interés (habitúa). Al cambiar el estímulo, si recupera la atención (deshabitúa), discrimina entre ambos. Técnica clásica para estudiar percepción y memoria en bebés.',
        difficulty: 'medium',
        tags: ['metodologia', 'tecnicas', 'bebes']
    },
    {
        id: 42,
        category: 'metodologia',
        question: '¿Qué es el método microgenético?',
        answer: 'Estudio intensivo del cambio MIENTRAS ocurre (Vygotski). Se observa a los sujetos en sesiones densas durante el periodo de adquisición de una competencia. Permite ver el proceso de cambio, no solo el resultado.',
        difficulty: 'medium',
        tags: ['metodologia', 'microgenetico', 'vygotski']
    },
    {
        id: 43,
        category: 'metodologia',
        question: '¿Qué es la Validez Interna?',
        answer: 'Grado en que las condiciones del experimento permiten asegurar que las variaciones en la VD se deben a los cambios en la VI. Depende del control experimental. Es requisito previo para la validez externa.',
        difficulty: 'medium',
        tags: ['metodologia', 'validez', 'interna']
    },
    {
        id: 44,
        category: 'metodologia',
        question: '¿Qué es la Validez Externa?',
        answer: 'Grado en que los resultados pueden generalizarse a otras situaciones, sujetos o conductas. Depende de la representatividad de las condiciones del experimento. Si se refiere a la situación natural: validez ecológica.',
        difficulty: 'medium',
        tags: ['metodologia', 'validez', 'externa']
    },
    {
        id: 45,
        category: 'metodologia',
        question: '¿Qué es el Efecto de Cohorte?',
        answer: 'Diferencia debida a la generación a la que se pertenece (experiencias históricas compartidas), no a la edad. Sesgo característico de los diseños transversales que confunden edad con generación.',
        difficulty: 'medium',
        tags: ['metodologia', 'cohorte', 'efecto']
    },
    {
        id: 46,
        category: 'metodologia',
        question: '¿Qué es la Técnica de Preferencia de Estímulos?',
        answer: 'Desarrollada por Fantz. Presenta dos estímulos simultáneamente registrando el tiempo que mira cada uno. Si mira más uno, indica que los discrimina y prefiere ese. Mide atención y discriminación perceptiva.',
        difficulty: 'medium',
        tags: ['metodologia', 'tecnicas', 'bebes']
    },
    {
        id: 47,
        category: 'metodologia',
        question: '¿Qué es el Paradigma de Violación de Expectativas?',
        answer: 'Se analiza la reacción ante eventos imposibles/inésperados para inferir lo que el niño conoce. Ejemplo: Baillargeon mostró que bebés de 2.5 meses miran más tiempo un objeto que pasa a través de una barrera (imposible), indicando que ya entienden propiedades de objetos sólidos.',
        difficulty: 'hard',
        tags: ['metodologia', 'tecnicas', 'bebes']
    },
    {
        id: 48,
        category: 'metodologia',
        question: '¿Qué es el Método Clínico de Piaget?',
        answer: 'Variante de la entrevista clínica con diálogo abierto y flexible. Se indaga en las explicaciones que el niño da sobre el mundo. Combina ventajas de observación directa, tests y experimentos. Centrado en el análisis cualitativo del caso individual.',
        difficulty: 'medium',
        tags: ['metodologia', 'clinico', 'piaget']
    },
    {
        id: 49,
        category: 'metodologia',
        question: '¿Qué es la Mortandad Experimental?',
        answer: 'Pérdida de sujetos durante un estudio longitudinal. Puede sesgar los resultados si quienes abandonan son diferentes de quienes continúan. Amenaza a la validez interna (equivalencia de grupos) y externa (representatividad).',
        difficulty: 'medium',
        tags: ['metodologia', 'longitudinal', 'problemas']
    },
    {
        id: 50,
        category: 'metodologia',
        question: '¿Qué es el Efecto de Práctica?',
        answer: 'Mejora en la ejecución como consecuencia de la repetición de las pruebas. Problema de los diseños longitudinales con medidas repetidas. Puede confundirse con el verdadero cambio evolutivo.',
        difficulty: 'easy',
        tags: ['metodologia', 'longitudinal', 'practica']
    },
    {
        id: 51,
        category: 'metodologia',
        question: '¿Cuál es la relación entre Validez Interna y Externa?',
        answer: 'Tienen una relación inversa: lo que favorece una tiende a disminuir la otra. Mayor control experimental (interna) implica mayor artificialidad (menos externa). Se debe buscar un equilibrio adecuado.',
        difficulty: 'medium',
        tags: ['metodologia', 'validez', 'relacion']
    },
    {
        id: 52,
        category: 'metodologia',
        question: '¿Qué son las técnicas de Neuroimagen?',
        answer: 'Técnicas que proporcionan imágenes neuroanatómicas según la actividad cerebral. Principales: PET (tomografía de emisión de positrones) y fMRI (resonancia magnética funcional). Miden flujo sanguíneo y cambios en oxigenación.',
        difficulty: 'medium',
        tags: ['metodologia', 'neuroimagen', 'tecnicas']
    },
    
    // ============================================
    // CAP 4: DESARROLLO CONCEPTUAL (Expanded)
    // ============================================
    {
        id: 53,
        category: 'conceptos',
        question: '¿En qué se diferencian la concepción Clásica y Probabilística de los conceptos?',
        answer: 'Clásica: Rasgos definitorios necesarios y suficientes (Todo o nada). Probabilística (Rosch): Rasgos característicos, límites difusos, estructura de prototipo (gradual). Los ejemplares varían en representatividad.',
        difficulty: 'medium',
        tags: ['conceptos', 'rosch', 'teorias']
    },
    {
        id: 54,
        category: 'conceptos',
        question: '¿Qué es el "Nivel Básico" de categorización (Rosch)?',
        answer: 'Nivel intermedio (ej: Perro) que maximiza la información y economía cognitiva. Es el primero que se aprende, antes que el supraordinado (Animal) o subordinado (Caniche). Refleja la estructura correlacional del ambiente.',
        difficulty: 'medium',
        tags: ['conceptos', 'rosch', 'basico']
    },
    {
        id: 55,
        category: 'conceptos',
        question: 'Según Mandler, ¿cuál es la diferencia entre Percepto y Concepto?',
        answer: 'Percepto: Procedimental/Implícito, basado en apariencia física (lo que parece), conocimiento no declarativo. Concepto: Declarativo/Explícito, basado en significado y función (lo que es), puede verbalizarse.',
        difficulty: 'hard',
        tags: ['conceptos', 'mandler', 'percepto']
    },
    {
        id: 56,
        category: 'conceptos',
        question: '¿Qué es el "Análisis Perceptivo" según Mandler?',
        answer: 'Mecanismo mediante el cual los bebés recodifican activamente la información perceptiva en significados conceptuales (esquemas de imagen). Es un proceso de construcción activa, no pasiva.',
        difficulty: 'hard',
        tags: ['conceptos', 'mandler', 'analisis']
    },
    {
        id: 57,
        category: 'conceptos',
        question: '¿Qué sostienen las teorías de "La Teoría" (Theory-Theory)?',
        answer: 'Que los conceptos no son aislados, sino que forman parte de estructuras de conocimiento (teorías intuitivas o ingenuas) sobre dominios específicos (física, biología, mente) que permiten inferencias causales.',
        difficulty: 'medium',
        tags: ['conceptos', 'teoria', 'intuitiva']
    },
    {
        id: 58,
        category: 'conceptos',
        question: '¿Qué es el Esencialismo Psicológico (Gelman)?',
        answer: 'Creencia infantil de que las categorías tienen una "esencia" interna inmutable que determina su identidad, más allá de la apariencia. Los niños piensan que hay algo "en el interior" que hace que un tigre sea tigre aunque se pinte de rayas diferentes.',
        difficulty: 'hard',
        tags: ['conceptos', 'esencialismo', 'gelman']
    },
    {
        id: 59,
        category: 'conceptos',
        question: '¿Qué es el Bootstrapping en el desarrollo conceptual (Carey)?',
        answer: 'Mecanismo de "empuje" o facilitación donde un aprendizaje previo impulsa nuevas distinciones más complejas. El conocimiento nuclear (core knowledge) permite construir conceptos más elaborados.',
        difficulty: 'hard',
        tags: ['conceptos', 'bootstrapping', 'carey']
    },
    {
        id: 60,
        category: 'conceptos',
        question: '¿Qué es un Rasgo Definitorio según la concepción clásica?',
        answer: 'Característica necesaria y suficiente para pertenecer a una categoría. Define la clase e identifica a sus miembros. Ejemplo: "ser un polígono de tres lados" es definitorio de triángulo.',
        difficulty: 'easy',
        tags: ['conceptos', 'rasgos', 'definitorios']
    },
    {
        id: 61,
        category: 'conceptos',
        question: '¿Qué es un Rasgo Característico según Rosch?',
        answer: 'Propiedad que ocurre frecuentemente en los miembros de una categoría pero no es necesaria ni suficiente. Permite inferencias probabilísticas. Ejemplo: "tener plumas" es característico de ave pero no definitorio (pingüinos no vuelan).',
        difficulty: 'medium',
        tags: ['conceptos', 'rasgos', 'caracteristicos']
    },
    {
        id: 62,
        category: 'conceptos',
        question: '¿Qué es el Efecto de Prototipicidad?',
        answer: 'Los sujetos juzgan más rápidamente la pertenencia a una categoría de ejemplares típicos (prototipos) que de ejemplares atípicos. Ejemplo: "perro" se identifica más rápido como mamífero que "ballena".',
        difficulty: 'medium',
        tags: ['conceptos', 'prototipo', 'rosch']
    },
    {
        id: 63,
        category: 'conceptos',
        question: '¿Qué son los Dominios de Conocimiento?',
        answer: 'Áreas específicas de conocimiento: físico (objetos), biológico (seres vivos), psicológico (mente), social (normas). Según las teorías de la teoría, el niño desarrolla conocimiento de forma específica por dominios.',
        difficulty: 'medium',
        tags: ['conceptos', 'dominios', 'teoria']
    },
    {
        id: 64,
        category: 'conceptos',
        question: '¿Cuáles son las etapas de clasificación según la perspectiva clásica?',
        answer: '1) Colecciones figurales (2-5 años): agrupaciones temáticas/perceptivas, 2) Colecciones no figurales (5-7 años): clasificación racional pero no jerárquica, 3) Clasificación jerárquica (7-8 años): inclusión de clases, lógica de clases.',
        difficulty: 'hard',
        tags: ['conceptos', 'clasificacion', 'etapas']
    },
    {
        id: 65,
        category: 'conceptos',
        question: '¿Qué es la Lógica de Clases según Piaget?',
        answer: 'Operación que marca el inicio de las operaciones concretas. Las clases se organizan taxonómicamente según relaciones de inclusión jerárquica (todos, algunos, ninguno). Criterio de desarrollo conceptual completo.',
        difficulty: 'hard',
        tags: ['conceptos', 'logica', 'clases', 'piaget']
    },
    
    // ============================================
    // CAP 5: MEMORIA Y FUNCIONES EJECUTIVAS (Expanded)
    // ============================================
    {
        id: 66,
        category: 'memoria',
        question: '¿Cuáles son los componentes de la Memoria Operativa según Baddeley?',
        answer: '1) Ejecutivo Central (control atencional), 2) Lazo Fonológico (verbal: almacén fonológico + repaso articulatorio), 3) Agenda Visoespacial (visual), 4) Retén Episódico (integración con MLP).',
        difficulty: 'medium',
        tags: ['memoria', 'baddeley', 'componentes']
    },
    {
        id: 67,
        category: 'memoria',
        question: '¿Qué es la "Imitación Diferida" y qué demuestra?',
        answer: 'Reproducir una acción tras un intervalo de tiempo. Demuestra memoria declarativa/explícita en bebés (desde 6-9 meses según Meltzoff) antes del lenguaje. Requiere recordar algo que ya no está presente.',
        difficulty: 'medium',
        tags: ['memoria', 'imitacion', 'bebes']
    },
    {
        id: 68,
        category: 'memoria',
        question: '¿Qué son las Funciones Ejecutivas (FE) según Miyake?',
        answer: 'Tres procesos de control cognitivo básicos: 1) Inhibición (frenar respuestas prepotentes), 2) Actualización/Memoria de Trabajo (mantener y manipular info), 3) Flexibilidad/Cambio (cambiar atencionalmente entre tareas).',
        difficulty: 'hard',
        tags: ['memoria', 'ejecutivas', 'miyake']
    },
    {
        id: 69,
        category: 'memoria',
        question: '¿Qué es un "Déficit de Producción" en estrategias de memoria?',
        answer: 'El niño tiene la estrategia disponible pero no la usa espontáneamente. Si se le instruye, la usa y mejora su rendimiento. Es un problema de iniciativa, no de competencia.',
        difficulty: 'medium',
        tags: ['memoria', 'estrategias', 'deficit']
    },
    {
        id: 70,
        category: 'memoria',
        question: '¿Qué es un "Déficit de Utilización" en estrategias de memoria?',
        answer: 'El niño usa la estrategia (espontánea o inducidamente) pero NO mejora su rendimiento, debido al alto coste cognitivo de aplicarla. La estrategia consume recursos que no dejan capacidad para el recuerdo.',
        difficulty: 'medium',
        tags: ['memoria', 'estrategias', 'deficit']
    },
    {
        id: 71,
        category: 'memoria',
        question: '¿Qué es la "Amnesia Infantil"?',
        answer: 'Incapacidad de recordar sucesos autobiográficos anteriores a los 2-3 años. Posibles causas: inmadurez del hipocampo, falta de lenguaje, cambio en la codificación, desarrollo del self narrativo.',
        difficulty: 'medium',
        tags: ['memoria', 'amnesia', 'infantil']
    },
    {
        id: 72,
        category: 'memoria',
        question: '¿Qué propone Cowan sobre las diferencias individuales en Memoria Operativa?',
        answer: 'Las diferencias se explican por la capacidad de usar y ajustar el FOCO ATENCIONAL durante el procesamiento, no por la capacidad del Ejecutivo Central. El foco atencional es el factor determinante.',
        difficulty: 'hard',
        tags: ['memoria', 'cowan', 'foco', 'atencional']
    },
    {
        id: 73,
        category: 'memoria',
        question: '¿Qué son las Funciones Ejecutivas según Diamond?',
        answer: 'FE básicas (on-line, durante la tarea): inhibición, memoria de trabajo, flexibilidad cognitiva. FE complejas (off-line): planificación, razonamiento, resolución de problemas. Dependen de la corteza prefrontal.',
        difficulty: 'medium',
        tags: ['memoria', 'ejecutivas', 'diamond']
    },
    {
        id: 74,
        category: 'memoria',
        question: '¿Cuál es el patrón de desarrollo de las Funciones Ejecutivas?',
        answer: 'Comienzan en el primer año, progresan fuertemente durante la adolescencia y se prolongan hasta los 25-30 años. No todas se desarrollan al mismo tiempo; cada componente tiene su propio ritmo y momentos críticos.',
        difficulty: 'medium',
        tags: ['memoria', 'ejecutivas', 'desarrollo']
    },
    {
        id: 75,
        category: 'memoria',
        question: '¿Qué es el Modelo de Procesos Anidados de Cowan?',
        answer: 'La memoria operativa consiste en elementos activados de la MLP dentro del foco atencional. Las diferencias individuales se deben a la capacidad de mantener información en el foco atencional mientras se procesa.',
        difficulty: 'hard',
        tags: ['memoria', 'cowan', 'procesos', 'anidados']
    },
    {
        id: 76,
        category: 'memoria',
        question: '¿Cuáles son las tres estrategias de memoria en orden evolutivo?',
        answer: '1) Repetición (básica), 2) Organización (agrupar por categorías), 3) Elaboración (crear historias/conexiones). La elaboración es la más eficaz y aparece más tarde en el desarrollo.',
        difficulty: 'easy',
        tags: ['memoria', 'estrategias', 'orden']
    },
    {
        id: 77,
        category: 'memoria',
        question: '¿Qué es el Déficit de Mediación?',
        answer: 'El niño NO posee la estrategia y por tanto no puede usarla ni siquiera si se le enseña. Es un déficit de competencia real, no solo de producción.',
        difficulty: 'medium',
        tags: ['memoria', 'estrategias', 'deficit', 'mediacion']
    },
    {
        id: 78,
        category: 'memoria',
        question: '¿Qué es la Memoria Declarativa/Explícita?',
        answer: 'Memoria consciente de hechos y eventos. Incluye memoria episódica (eventos personales) y semántica (hechos/conceptos). Puede verbalizarse.',
        difficulty: 'easy',
        tags: ['memoria', 'declarativa', 'explicita']
    },
    {
        id: 79,
        category: 'memoria',
        question: '¿Qué es la Memoria Procedimental/Implícita?',
        answer: 'Memoria de habilidades y procedimientos que se manifiesta en la ejecución pero no puede verbalizarse conscientemente. Ejemplo: saber andar en bicicleta.',
        difficulty: 'easy',
        tags: ['memoria', 'procedimental', 'implicita']
    },
    {
        id: 80,
        category: 'memoria',
        question: '¿Qué son las Estrategias de Comprensión en lectura?',
        answer: 'Procedimientos deliberados para mejorar la comprensión. Ejemplos: resumir, hacer inferencias, autorregulación. Cuando se automatizan se convierten en destrezas lectoras.',
        difficulty: 'medium',
        tags: ['memoria', 'lectura', 'estrategias']
    },
    
    // ============================================
    // CAP 6: LECTURA Y RAZONAMIENTO (Expanded)
    // ============================================
    {
        id: 81,
        category: 'lectura',
        question: 'Según Uta Frith, ¿cuáles son las etapas de la lectura?',
        answer: '1) Logográfica: reconocimiento visual global (como dibujos). 2) Alfabética: conversión grafema-fonema (secuencial). 3) Ortográfica: reconocimiento directo de morfemas/palabras (lectura experta).',
        difficulty: 'medium',
        tags: ['lectura', 'frith', 'etapas']
    },
    {
        id: 82,
        category: 'lectura',
        question: '¿Qué es el modelo de Kintsch y van Dijk sobre comprensión lectora?',
        answer: 'Distingue entre MICROESTRUCTURA (ideas locales/proposiciones) y MACROESTRUCTURA (significado global/tema). Se aplican macrorreglas (supresión, generalización, construcción) para extraer el sentido.',
        difficulty: 'hard',
        tags: ['lectura', 'comprension', 'kintsch']
    },
    {
        id: 83,
        category: 'razonamiento',
        question: '¿Qué es el "Sesgo de Emparejamiento" en la Tarea de Wason?',
        answer: 'Tendencia a seleccionar las tarjetas que coinciden con los términos de la regla (p.ej., levantar "E" y "4" para "Si E entonces 4"), ignorando la falsación (no-q). Error sistemático en razonamiento condicional.',
        difficulty: 'hard',
        tags: ['razonamiento', 'wason', 'sesgo']
    },
    {
        id: 84,
        category: 'razonamiento',
        question: '¿Qué defiende la Teoría de los Modelos Mentales (Johnson-Laird)?',
        answer: 'Que razonamos construyendo representaciones semánticas (modelos) de las situaciones, no aplicando reglas lógicas sintácticas. Los errores vienen de la limitación de la Memoria Operativa para representar todos los modelos posibles.',
        difficulty: 'hard',
        tags: ['razonamiento', 'modelos', 'mentales']
    },
    {
        id: 85,
        category: 'razonamiento',
        question: '¿Qué es el "Modus Tollens"?',
        answer: 'Inferencia válida: Si p entonces q. No q. Por tanto, no p. Es más difícil que el Modus Ponens y requiere falsar la regla.',
        difficulty: 'medium',
        tags: ['razonamiento', 'logica', 'inferencia']
    },
    {
        id: 86,
        category: 'razonamiento',
        question: '¿Qué es el "Modus Ponens"?',
        answer: 'Inferencia válida: Si p entonces q. p. Por tanto, q. Es la inferencia condicional más simple y fácil de realizar.',
        difficulty: 'easy',
        tags: ['razonamiento', 'logica', 'inferencia']
    },
    {
        id: 87,
        category: 'razonamiento',
        question: '¿Qué crítica hace Markovits a la Teoría de los Modelos Mentales?',
        answer: 'Argumenta que las diferencias evolutivas no se deben solo a limitaciones de procesamiento, sino a déficits en la organización de la MLP y mecanismos de accesibilidad a los casos pertinentes (especialmente no-p q).',
        difficulty: 'hard',
        tags: ['razonamiento', 'markovits', 'critica']
    },
    {
        id: 88,
        category: 'razonamiento',
        question: '¿Qué es el Efecto del Contenido en el razonamiento?',
        answer: 'Las personas razonan mejor con contenido familiar y con significado (especialmente si implica cheaters o normas sociales) que con contenido abstracto. Explicado por la Teoría de los Modelos Mentales.',
        difficulty: 'medium',
        tags: ['razonamiento', 'contenido', 'efecto']
    },
    {
        id: 89,
        category: 'lectura',
        question: '¿Qué son las Inferencias en comprensión lectora?',
        answer: 'Proceso cognitivo por el que se incorpora información semántica no explícita en el texto. Son básicas para la comprensión. Permiten conectar ideas y construir el modelo situacional.',
        difficulty: 'medium',
        tags: ['lectura', 'inferencias', 'comprension']
    },
    {
        id: 90,
        category: 'lectura',
        question: '¿Qué son las Macrorreglas de Kintsch y van Dijk?',
        answer: 'Reglas para construir la macroestructura: 1) Supresión (eliminar información redundante), 2) Generalización (construir proposiciones más generales), 3) Construcción (inferir proposiciones integradoras).',
        difficulty: 'hard',
        tags: ['lectura', 'macrorreglas', 'kintsch']
    },
    {
        id: 91,
        category: 'lectura',
        question: '¿Cuándo se convierten las estrategias de comprensión en destrezas lectoras?',
        answer: 'Cuando se aplican de forma automatizada tras la instrucción y práctica. El objetivo pedagógico es que las estrategias deliberadas se transformen en habilidades automáticas.',
        difficulty: 'medium',
        tags: ['lectura', 'estrategias', 'destrezas']
    },
    {
        id: 92,
        category: 'razonamiento',
        question: '¿Qué son los Condicionales Bicondicionales según Markovits?',
        answer: 'Interpretación incorrecta de "Si p entonces q" como "Si y solo si p entonces q". Los niños pequeños tienden a interpretar los condicionales de forma bicondicional, dificultando el razonamiento.',
        difficulty: 'hard',
        tags: ['razonamiento', 'markovits', 'bicondicional']
    },
    
    // ============================================
    // CAP 7: METACOGNICIÓN (Expanded)
    // ============================================
    {
        id: 93,
        category: 'metacognicion',
        question: '¿Qué distinción hace Ann Brown en la metacognición?',
        answer: 'Conocimiento Metacognitivo (Declarativo, estable, verbalizable, "saber qué") vs Control Metacognitivo (Procedimental, dependiente de tarea, regulación, "saber cómo").',
        difficulty: 'medium',
        tags: ['metacognicion', 'brown', 'tipos']
    },
    {
        id: 94,
        category: 'metacognicion',
        question: '¿Qué es la Teoría de la Mente (ToM)?',
        answer: 'Capacidad de atribuir estados mentales (creencias, deseos) a uno mismo y a otros, y comprender que la conducta se debe a ellos. Hito clave: Tarea de Falsa Creencia (4 años).',
        difficulty: 'medium',
        tags: ['metacognicion', 'tom', 'falsa-creencia']
    },
    {
        id: 95,
        category: 'metacognicion',
        question: '¿Cuáles son los niveles epistemológicos según Kuhn?',
        answer: '1) Realista: copia directa de la realidad. 2) Absolutista: hechos correctos/incorrectos. 3) Pluralista: todo son opiniones. 4) Evaluacionista: juicios fundamentados, verdad relativa pero evaluable.',
        difficulty: 'hard',
        tags: ['metacognicion', 'epistemologia', 'kuhn']
    },
    {
        id: 96,
        category: 'metacognicion',
        question: '¿Qué es la "Ilusión de comprensión"?',
        answer: 'Fallo metacognitivo donde el sujeto cree haber entendido un texto cuando no es así, no detectando inconsistencias o lagunas. Es una supervisión inadecuada del propio aprendizaje.',
        difficulty: 'medium',
        tags: ['metacognicion', 'comprension', 'error']
    },
    {
        id: 97,
        category: 'metacognicion',
        question: '¿Qué es el Conocimiento Metacognitivo según Flavell?',
        answer: 'Conocimiento declarativo sobre la propia cognición. Incluye: conocimiento sobre personas (quién sabe qué), tareas (qué dificultad tiene) y estrategias (qué estrategia usar en cada caso).',
        difficulty: 'medium',
        tags: ['metacognicion', 'flavell', 'conocimiento']
    },
    {
        id: 98,
        category: 'metacognicion',
        question: '¿Qué es la Falsa Creencia (False Belief)?',
        answer: 'Comprensión de que alguien puede tener una representación mental que no coincide con la realidad. Test clásico: Sally y Ana. Se supera hacia los 4 años. Indica comprensión representacional de la mente.',
        difficulty: 'medium',
        tags: ['metacognicion', 'falsa', 'creencia']
    },
    {
        id: 99,
        category: 'metacognicion',
        question: '¿Cuáles son las etapas del desarrollo de la ToM?',
        answer: '1) Deseos (2 años): entienden deseos simples. 2) Creencias verdaderas (3 años). 3) Falsas creencias (4 años): hito clave. 4) Mente interpretativa (más tarde): la mente interpreta, no solo reproduce.',
        difficulty: 'medium',
        tags: ['metacognicion', 'tom', 'etapas']
    },
    {
        id: 100,
        category: 'metacognicion',
        question: '¿Qué es el Control Metacognitivo según Brown?',
        answer: 'Componente procedimental de planificación, supervisión y evaluación de los procesos cognitivos en curso. Incluye: planificar antes, monitorear durante, evaluar después.',
        difficulty: 'medium',
        tags: ['metacognicion', 'brown', 'control']
    },
    {
        id: 101,
        category: 'metacognicion',
        question: '¿Qué dificultades tienen los niños en el Control Metacognitivo?',
        answer: 'Dificultades para: 1) decidir cuándo han aprendido suficiente, 2) usar estrategias de forma autorregulada, 3) transferir conocimientos entre dominios, 4) monitorear su comprensión eficazmente.',
        difficulty: 'hard',
        tags: ['metacognicion', 'control', 'dificultades']
    },
    
    // ============================================
    // CAP 8: CONOCIMIENTO SOCIAL (Expanded)
    // ============================================
    {
        id: 102,
        category: 'social',
        question: '¿Qué es un "Hecho Institucional" según Searle?',
        answer: 'Hechos que existen solo por acuerdo humano y reglas constitutivas (ej: dinero, matrimonio, permiso de conducir). Se distinguen de los "Hechos Brutos" (físicos, naturales).',
        difficulty: 'medium',
        tags: ['social', 'searle', 'institucional']
    },
    {
        id: 103,
        category: 'social',
        question: '¿Cómo evoluciona la comprensión de la ganancia económica en el niño?',
        answer: 'Hasta los 10-11 años no entienden la ganancia (diferencia precio compra-venta). Antes creen que el tendero vende al mismo precio que compra (ritual) o que el cambio es un regalo.',
        difficulty: 'medium',
        tags: ['social', 'economia', 'ganancia']
    },
    {
        id: 104,
        category: 'social',
        question: '¿Cuáles son los 3 niveles de conocimiento social (Delval)?',
        answer: '1) Aspectos visibles/externos (sin inferencias, hasta 10-11 años), 2) Procesos ocultos inferidos/Institucionalización incipiente (10-14 años), 3) Sistemas de relaciones, conflictos y soluciones políticas (adolescencia).',
        difficulty: 'hard',
        tags: ['social', 'delval', 'niveles']
    },
    {
        id: 105,
        category: 'social',
        question: '¿Qué es un Hecho Bruto según Searle?',
        answer: 'Hecho físico-natural que existe independientemente de la interpretación humana. Ejemplo: una montaña, el peso de un objeto. Se contrapone a los hechos institucionales que dependen de acuerdos.',
        difficulty: 'easy',
        tags: ['social', 'searle', 'bruto']
    },
    {
        id: 106,
        category: 'social',
        question: '¿Qué son las Funciones de Status según Searle?',
        answer: 'Funciones asignadas a objetos o personas por acuerdo social. Ejemplo: un trozo de papel (hecho bruto) funciona como dinero (status) porque colectivamente le asignamos esa función.',
        difficulty: 'medium',
        tags: ['social', 'searle', 'status']
    },
    
    // ============================================
    // CAP 9: DESARROLLO MORAL (Expanded)
    // ============================================
    {
        id: 107,
        category: 'moral',
        question: '¿Qué es el "Realismo Moral" según Piaget?',
        answer: 'Etapa de la moral heterónoma donde las normas son cosas físicas, sagradas e inalterables. Se juzga por la RESPONSABILIDAD OBJETIVA (daño material) y no por la intención.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'realismo']
    },
    {
        id: 108,
        category: 'moral',
        question: '¿Qué es la "Justicia Inmanente" (Piaget)?',
        answer: 'Creencia infantil de que las faltas son castigadas automáticamente por la naturaleza de las cosas (ej: si robas manzanas y te caes al río, es el castigo). Disminuye con la edad.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'justicia']
    },
    {
        id: 109,
        category: 'moral',
        question: '¿Qué caracteriza el Nivel Preconvencional de Kohlberg?',
        answer: 'La moral es externa. Estadio 1: Castigo/Obediencia (evitar daño). Estadio 2: Instrumental/Hedonista (interés propio/intercambio: "tú me das, yo te doy").',
        difficulty: 'medium',
        tags: ['moral', 'kohlberg', 'preconvencional']
    },
    {
        id: 110,
        category: 'moral',
        question: '¿Qué caracteriza el Nivel Convencional de Kohlberg?',
        answer: 'Conformidad social. Estadio 3: Buen chico/Relaciones interpersonales (aprobación, "qué dirán"). Estadio 4: Ley y Orden (mantenimiento del sistema social, normas rígidas).',
        difficulty: 'medium',
        tags: ['moral', 'kohlberg', 'convencional']
    },
    {
        id: 111,
        category: 'moral',
        question: '¿Qué caracteriza el Nivel Postconvencional de Kohlberg?',
        answer: 'Moral autónoma. Estadio 5: Contrato Social/Derechos (mayoría democrática, derechos humanos). Estadio 6: Principios Éticos Universales (justicia sobre la ley, muy raro).',
        difficulty: 'medium',
        tags: ['moral', 'kohlberg', 'postconvencional']
    },
    {
        id: 112,
        category: 'moral',
        question: '¿Cuál fue la crítica de Carol Gilligan a Kohlberg?',
        answer: 'Que su modelo era sexista (centrado en la justicia/derechos, típico de hombres). Propuso una "Moral del Cuidado" (responsabilidad hacia otros, empatía) más propia de las mujeres.',
        difficulty: 'medium',
        tags: ['moral', 'gilligan', 'cuidado']
    },
    {
        id: 113,
        category: 'moral',
        question: '¿Qué diferencia establece Turiel entre Moral y Convención?',
        answer: 'Moral: Justicia, derechos, daño (intrínseco, inalterable, universal). Convención: Normas arbitrarias de coordinación social (modificables, dependen del contexto). Los niños las distinguen desde los 3-4 años.',
        difficulty: 'hard',
        tags: ['moral', 'turiel', 'convencion']
    },
    {
        id: 114,
        category: 'moral',
        question: '¿Qué son los niveles de razonamiento prosocial de Eisenberg?',
        answer: 'Estadios sobre conducta de ayuda (altruismo) sin leyes. Evoluciona desde hedonista (beneficio propio) hasta orientación por valores internalizados (empatía abstracta).',
        difficulty: 'medium',
        tags: ['moral', 'eisenberg', 'prosocial']
    },
    {
        id: 115,
        category: 'moral',
        question: '¿Qué es la Responsabilidad Objetiva según Piaget?',
        answer: 'Juzgar la gravedad de una acción por el resultado material (objetivo), no por la intención. Ejemplo: romper 5 tazas sin querer es peor que romper 1 queriendo.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'objetiva']
    },
    {
        id: 116,
        category: 'moral',
        question: '¿Qué es la Responsabilidad Subjetiva según Piaget?',
        answer: 'Juzgar la gravedad por la intención del sujeto, no por el resultado. Ejemplo: romper 1 taza queriendo es peor que romper 5 sin querer. Surge con la moral autónoma.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'subjetiva']
    },
    {
        id: 117,
        category: 'moral',
        question: '¿Qué es el Dilema de Heinz?',
        answer: 'Dilema moral clásico de Kohlberg: ¿Debe Heinz robar un medicamento caro para salvar a su esposa? Las justificaciones revelan el estadio moral del sujeto, no la respuesta sí/no.',
        difficulty: 'easy',
        tags: ['moral', 'kohlberg', 'heinz']
    },
    {
        id: 118,
        category: 'moral',
        question: '¿Cuál es la relación entre desarrollo cognitivo y moral según Piaget y Kohlberg?',
        answer: 'Ambos coinciden en que el desarrollo moral está vinculado al desarrollo cognitivo. El avance en pensamiento moral depende de las capacidades cognitivas (reversibilidad, abstracción) del individuo.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'kohlberg', 'cognitivo']
    },
    {
        id: 119,
        category: 'moral',
        question: '¿Qué es la Moral Heterónoma según Piaget?',
        answer: 'Primera etapa del desarrollo moral (hasta 10 años). Las normas son externas, sagradas, inmutables. Obediencia unilateral al adulto. Caracterizada por realismo moral, justicia inmanente y responsabilidad objetiva.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'heteronoma']
    },
    {
        id: 120,
        category: 'moral',
        question: '¿Qué es la Moral Autónoma según Piaget?',
        answer: 'Segunda etapa del desarrollo moral (a partir de 10 años). Las normas son mutuas, negociables, producto del acuerdo entre iguales. Se considera la intención (responsabilidad subjetiva) y la reciprocidad.',
        difficulty: 'medium',
        tags: ['moral', 'piaget', 'autonoma']
    }
];

// ============================================
// FLASHCARDS ADICIONALES - NIVEL EXPERTO
// ============================================

const FLASHCARDS_DATA_EXPERT = [
    // Preguntas de examen reales analizadas
    {
        id: 121,
        category: 'teorias',
        question: 'Según el planteamiento de Case sobre el desarrollo de la memoria, ¿qué cambia con los años?',
        answer: 'La EFICACIA en el procesamiento. La capacidad total de almacenamiento (ETP) es constante. Lo que aumenta es la eficacia operativa (EOP disminuye → ACP aumenta).',
        difficulty: 'hard',
        tags: ['case', 'neopiagetiano', 'memoria', 'examen']
    },
    {
        id: 122,
        category: 'metodologia',
        question: 'En un estudio evolutivo con dos muestras de 5 y 10 años medidas en 2010, 2015 y 2020, ¿qué tipo de comparaciones permite?',
        answer: 'Comparaciones longitudinales (mismos grupos seguidos en el tiempo) Y transversales (comparación entre grupos en cada momento). Es un diseño secuencial.',
        difficulty: 'hard',
        tags: ['metodologia', 'diseno', 'secuencial', 'examen']
    },
    {
        id: 123,
        category: 'conceptos',
        question: 'Según la propuesta de Mandler, ¿por qué tienen formato distinto los perceptos y los conceptos?',
        answer: 'Los conceptos tienen formato declarativo/explícito. Los perceptos tienen formato procedimental/implícito. Los bebés pueden formar perceptos pero no conceptos propiamente dichos.',
        difficulty: 'hard',
        tags: ['mandler', 'conceptos', 'perceptos', 'examen']
    },
    {
        id: 124,
        category: 'razonamiento',
        question: '¿Qué ha permitido establecer la tarea de selección de Wason?',
        answer: 'La influencia que tiene el tipo de contenido de los enunciados en la resolución de problemas deductivos. Con contenido social se hace mucho mejor (efecto del contenido).',
        difficulty: 'medium',
        tags: ['wason', 'razonamiento', 'contenido', 'examen']
    },
    {
        id: 125,
        category: 'metacognicion',
        question: '¿Qué connotación esencial tiene la metacognición como conocimiento según Flavell?',
        answer: 'Se define particularmente por su carácter RECURSIVO: es cognición sobre la propia cognición (de segundo orden), no de primer orden.',
        difficulty: 'hard',
        tags: ['metacognicion', 'flavell', 'recursivo', 'examen']
    },
    {
        id: 126,
        category: 'teorias',
        question: '¿Qué modelo teórico actual propone, al igual que Piaget, la existencia de estadios cualitativamente distintos?',
        answer: 'Las teorías NEOPIAGETIANAS (Pascual-Leone, Case, Halford, Fischer). Mantienen la concepción constructivista y la existencia de estadios, pero los caracterizan en términos de procesamiento de información.',
        difficulty: 'medium',
        tags: ['neopiagetianos', 'estadios', 'piaget', 'examen']
    },
    {
        id: 127,
        category: 'metodologia',
        question: '¿Qué tienen en cuenta los diseños secuenciales que no tienen los longitudinales ni transversales simples?',
        answer: 'Permiten separar los efectos de la EDAD, la COHORTE (generación) y el MOMENTO de la medida. Controlan el efecto de cohorte que confunde los diseños transversales.',
        difficulty: 'hard',
        tags: ['metodologia', 'secuencial', 'cohorte', 'examen']
    },
    {
        id: 128,
        category: 'moral',
        question: 'Según la teoría de Kohlberg, las respuestas al dilema de Heinz que relacionan el valor de la vida con la aprobación de los familiares indican qué nivel?',
        answer: 'Nivel CONVENCIONAL, estadio 3 ("buen chico"). Busca la aprobación de los otros, la concordancia con las expectativas familiares/sociales.',
        difficulty: 'medium',
        tags: ['kohlberg', 'moral', 'heinz', 'examen']
    },
    {
        id: 129,
        category: 'teorias',
        question: 'Según el modelo de Piaget, el desarrollo conceptual se relaciona particularmente con...',
        answer: 'La función simbólica. El verdadero pensamiento surge a partir de la función simbólica que permite representaciones mentales de objetos no presentes.',
        difficulty: 'medium',
        tags: ['piaget', 'conceptos', 'funcion', 'simbolica', 'examen']
    },
    {
        id: 130,
        category: 'memoria',
        question: 'Según el modelo de procesos anidados de Cowan, las diferencias individuales se explican por...',
        answer: 'La capacidad para usar y ajustar el FOCO ATENCIONAL durante el procesamiento. Es el factor determinante de las diferencias en funcionamiento cognitivo.',
        difficulty: 'hard',
        tags: ['cowan', 'memoria', 'foco', 'atencional', 'examen']
    },
    {
        id: 131,
        category: 'moral',
        question: 'En la historia de Piaget, un niño dice que es peor romper 5 platos sin querer que 1 queriendo. Esto es...',
        answer: 'Responsabilidad OBJETIVA. Juzga por el resultado material, no por la intención. Es característico de la moral heterónoma/realismo moral.',
        difficulty: 'medium',
        tags: ['piaget', 'moral', 'objetiva', 'examen']
    },
    {
        id: 132,
        category: 'conceptos',
        question: 'Según la teoría de Rosch, el nivel básico de categorización...',
        answer: 'Es el nivel de abstracción más inclusivo que refleja la estructura correlacional del ambiente. Maximiza la información y economía cognitiva.',
        difficulty: 'hard',
        tags: ['rosch', 'nivel', 'basico', 'categorizacion', 'examen']
    },
    {
        id: 133,
        category: 'metacognicion',
        question: 'El desarrollo de la Teoría de la Mente puede considerarse como...',
        answer: 'La primera etapa de la comprensión metacognitiva. Representa el paso de una concepción "reproductiva" de la mente a una "interpretativa".',
        difficulty: 'medium',
        tags: ['tom', 'metacognicion', 'desarrollo', 'examen']
    },
    {
        id: 134,
        category: 'teorias',
        question: 'Para el enfoque neuroconstructivista, el concepto de representación mental es...',
        answer: 'Central y muy útil. Se concibe el desarrollo como un proceso de cambio representacional. Las representaciones son estados de información en el cerebro (patrones de activación).',
        difficulty: 'hard',
        tags: ['neuroconstructivismo', 'representacion', 'examen']
    },
    {
        id: 135,
        category: 'moral',
        question: 'Las convenciones sociales constituyen según Turiel un dominio de razonamiento...',
        answer: 'DIFERENTE del dominio de la moralidad. Son normas arbitrarias de coordinación social (ej: comer con cubiertos), modificables y dependientes del contexto.',
        difficulty: 'medium',
        tags: ['turiel', 'convencion', 'moral', 'examen']
    },
    {
        id: 136,
        category: 'razonamiento',
        question: 'Según la Teoría de los Modelos Mentales, las diferencias evolutivas en razonamiento se deben a...',
        answer: 'Las limitaciones de la memoria operativa en el procesamiento de las representaciones semánticas. La dificultad para mantener múltiples modelos simultáneos.',
        difficulty: 'hard',
        tags: ['modelos', 'mentales', 'johnson-laird', 'memoria', 'examen']
    },
    {
        id: 137,
        category: 'teorias',
        question: 'Según los modelos conexionistas, los cambios en el desarrollo se producen...',
        answer: 'Tanto en las representaciones del conocimiento, como en los mecanismos de aprendizaje (capacidad para aprender). Cambios sinérgicos entre entrada, cambios internos y maduración.',
        difficulty: 'hard',
        tags: ['conexionismo', 'cambio', 'desarrollo', 'examen']
    },
    {
        id: 138,
        category: 'metodologia',
        question: 'Los diseños longitudinales permiten...',
        answer: 'Establecer DIRECTAMENTE el cambio intra-individual. Siguen a los mismos sujetos a lo largo del tiempo, permitiendo ver cómo cambia cada individuo.',
        difficulty: 'medium',
        tags: ['metodologia', 'longitudinal', 'cambio', 'examen']
    },
    {
        id: 139,
        category: 'teorias',
        question: 'Para los modelos de Sistemas Dinámicos, la variabilidad inter e intra-sujeto es...',
        answer: 'Una fuente de datos crucial para la comprensión de los cambios evolutivos. No es "ruido", sino información valiosa sobre el desarrollo.',
        difficulty: 'hard',
        tags: ['sistemas', 'dinamicos', 'variabilidad', 'examen']
    },
    {
        id: 140,
        category: 'metacognicion',
        question: 'En torno al desarrollo metacognitivo, las dificultades se deben sobre todo a...',
        answer: 'Una insuficiente competencia para aplicar de forma autorregulada las estrategias requeridas. Es un problema de control metacognitivo, no de conocimiento.',
        difficulty: 'hard',
        tags: ['metacognicion', 'control', 'autorregulacion', 'examen']
    }
];

// Combinar flashcards
FLASHCARDS_DATA.push(...FLASHCARDS_DATA_EXPERT);


// ============================================
// ANÁLISIS DEL EXAMEN COMPLETO (Basado en 2022-2025)
// ============================================

const EXAM_ANALYSIS_DATA = {
    info: {
        questions: 30,
        type: 'Test',
        pass: '15 aciertos netos',
        note: 'Análisis de 12 exámenes (2022-2025) - 360 preguntas',
        duration: 'Sesión de tarde',
        format: 'Test opción múltiple (a, b, c) con feedback explicativo'
    },
    distribution: {
        piaget: { questions: '~13', percentage: '43%', priority: 'CRÍTICO', chapters: '1' },
        memoria: { questions: '~7', percentage: '22%', priority: 'CRÍTICO', chapters: '5' },
        conceptos: { questions: '~6', percentage: '19%', priority: 'ALTO', chapters: '4' },
        ejecutivas: { questions: '~5', percentage: '18%', priority: 'ALTO', chapters: '2, 5' },
        razonamiento: { questions: '~4', percentage: '12%', priority: 'MEDIO', chapters: '6' },
        metodologia: { questions: '~3', percentage: '10%', priority: 'MEDIO', chapters: '3' },
        vygotski: { questions: '~3', percentage: '9%', priority: 'MEDIO', chapters: '1' },
        metacognicion: { questions: '~2-3', percentage: '8%', priority: 'BAJO', chapters: '7' },
        moral: { questions: '~2', percentage: '7%', priority: 'BAJO', chapters: '9' },
        lectura: { questions: '~2', percentage: '6%', priority: 'BAJO', chapters: '6' }
    },
    clusters: [
        {
            name: 'Fundamentos Teóricos',
            percentage: '52%',
            chapters: '1, 2, 4',
            description: 'Piaget → Neopiagetianos → Conceptos',
            key: 'La teoría piagetiana explica el desarrollo conceptual como evolución de estructuras'
        },
        {
            name: 'Cognición y Procesamiento',
            percentage: '40%',
            chapters: '5, 6, 7',
            description: 'Memoria → Razonamiento → Metacognición',
            key: 'Las limitaciones de MO explican el desarrollo del razonamiento'
        },
        {
            name: 'Contexto y Aplicaciones',
            percentage: '16%',
            chapters: '3, 8, 9',
            description: 'Metodología → Social → Moral',
            key: 'Dominios de conocimiento separados'
        }
    ],
    trends: {
        evolution: [
            { period: '2022-2023', characteristic: 'Preguntas más directas sobre definiciones' },
            { period: '2024-2025', characteristic: 'Más énfasis en aplicación y comparación entre teorías' },
            { period: 'Tendencia creciente', characteristic: 'Funciones Ejecutivas (más frecuentes en 2024-25)' },
            { period: 'Tendencia decreciente', characteristic: 'Menos preguntas sobre metodología pura' }
        ],
        byExam: {
            semana1: 'Más énfasis en teorías fundamentales y metodología',
            semana2: 'Más aplicación, metacognición, integración de conceptos',
            septiembre: 'Similar a Semana 1, a veces más específico en Piaget'
        }
    },
    topics: [
        {
            priority: 'ALTA',
            topic: 'Teoría Piagetiana',
            chapters: '1, 2, 9',
            frequency: 'Muy frecuente (~13 preguntas)',
            tips: 'Centrarse en: Equilibración, Abstracción reflexiva, Moral (Realismo, Justicia inmanente), Críticas (desfases). Las preguntas suelen tener feedback detallado.',
            examQuestions: [
                'Asimilación vs Acomodación (diferenciación)',
                'Equilibración (definición)',
                'Abstracción reflexiva (explicación)',
                'Línea natural vs cultural (comparación Vygotski)',
                'Estadios (descripción de operaciones)',
                'Experiencia lógico-matemática vs física'
            ]
        },
        {
            priority: 'ALTA',
            topic: 'Memoria y Funciones Ejecutivas',
            chapters: '5',
            frequency: 'Frecuente (~7 preguntas memoria + ~5 FE)',
            tips: 'Diferenciar modelos (Baddeley vs Cowan). Funciones Ejecutivas (Miyake: 3 básicas; Diamond: on-line vs off-line). Estrategias y sus déficits (producción vs utilización vs mediación).',
            examQuestions: [
                'Modelo Baddeley (componentes)',
                'Cowan (foco atencional)',
                'Case (eficacia procesamiento, NO capacidad total)',
                'Déficits de estrategias (producción/utilización)'
            ]
        },
        {
            priority: 'MEDIA',
            topic: 'Desarrollo Conceptual',
            chapters: '4',
            frequency: 'Media (~6 preguntas)',
            tips: 'Mandler (Percepto vs Concepto) es PREGUNTA FIJA. Nivel Básico Rosch. Teorías de la Teoría vs Esencialismo. Diferencia concepción clásica vs probabilística.',
            examQuestions: [
                'Mandler (perceptual vs conceptual) - MUY PREGUNTADO',
                'Nivel básico Rosch',
                'Teorías de la teoría',
                'Esencialismo (Gelman)'
            ]
        },
        {
            priority: 'MEDIA',
            topic: 'Razonamiento',
            chapters: '6',
            frequency: 'Media (~4 preguntas)',
            tips: 'Tarea de Wason (sesgo emparejamiento, efecto del contenido). Modelos Mentales (Johnson-Laird) vs Reglas. Markovits (crítica, bicondicionales). Kintsch y van Dijk (micro/macroestructura).',
            examQuestions: [
                'Tarea Wason (contenido)',
                'Modelos Mentales (limitaciones MO)',
                'Markovits (crítica a TMM)',
                'Kintsch y van Dijk (macroestructura)'
            ]
        },
        {
            priority: 'MEDIA',
            topic: 'Vygotski',
            chapters: '1',
            frequency: 'Media (~3 preguntas)',
            tips: 'Doble formación, ZDP, Mediación semiótica. Diferencia lenguaje con Piaget. Línea natural vs cultural. Internalización.',
            examQuestions: [
                'ZDP (definición)',
                'Ley doble formación',
                'Lenguaje (social→egocéntrico→interior)',
                'Línea natural vs cultural'
            ]
        },
        {
            priority: 'MEDIA',
            topic: 'Metodología',
            chapters: '3',
            frequency: 'Media (~3 preguntas)',
            tips: 'Diseños (longitudinal vs transversal vs secuencial). Validez interna vs externa. Efecto cohorte. Técnicas con bebés (habituación, imitación diferida).',
            examQuestions: [
                'Diseños (ventajas/limitaciones)',
                'Validez interna vs externa',
                'Efecto cohorte',
                'Habituación/deshabituación'
            ]
        },
        {
            priority: 'MEDIA',
            topic: 'Moral y Social',
            chapters: '8, 9',
            frequency: 'Media (~4 preguntas)',
            tips: 'Kohlberg (niveles y estadios). Turiel (Moral vs Convención). Piaget (Realismo moral, Justicia inmanente, Responsabilidad objetiva/subjetiva). Searle (hechos brutos vs institucionales).',
            examQuestions: [
                'Kohlberg (niveles)',
                'Turiel (moral vs convención)',
                'Piaget (responsabilidad objetiva/subjetiva)',
                'Searle (hechos institucionales)'
            ]
        }
    ],
    traps: [
        {
            trap: 'Neopiagetianos (Pascual-Leone vs Case)',
            explanation: 'Pascual-Leone dice que la capacidad M AUMENTA biológicamente. Case dice que la capacidad total es CONSTANTE, lo que aumenta es la EFICACIA.'
        },
        {
            trap: 'Moral vs Convención (Turiel)',
            explanation: 'Turiel dice que son dominios DISTINTOS. Kohlberg los mezclaba en sus estadios. Los niños distinguen moral (daño) de convención (normas arbitrarias) desde los 3-4 años.'
        },
        {
            trap: 'Justicia Inmanente',
            explanation: 'Es creer que "si haces algo malo, te pasará algo malo automáticamente" (propio de niños pequeños/Piaget). NO es justicia divina ni karma adulto.'
        },
        {
            trap: 'Déficit de Producción vs Utilización',
            explanation: 'Producción = no usa la estrategia espontáneamente, pero sí si se le enseña. Utilización = la usa, pero no mejora el rendimiento (coste cognitivo alto).'
        },
        {
            trap: 'Memoria Operativa según Case',
            explanation: 'NO aumenta la capacidad total (ETP). Aumenta la EFICACIA OPERATIVA, liberando espacio en el ACP (almacén a corto plazo).'
        },
        {
            trap: 'Nivel Básico Rosch',
            explanation: 'Es el nivel de abstracción MÁS INCLUSIVO que refleja la estructura correlacional del ambiente. NO el más específico ni el más general.'
        }
    ],
    quickAssociations: [
        { author: 'Turiel', association: 'Moral vs Convención' },
        { author: 'Miyake', association: 'Unidad y diversidad de Funciones Ejecutivas (3 básicas)' },
        { author: 'Diamond', association: 'FE on-line vs off-line, Corteza prefrontal' },
        { author: 'Mandler', association: 'Percepto (procedimental) vs Concepto (declarativo)' },
        { author: 'Case', association: 'Eficacia operacional libera espacio en MO' },
        { author: 'Pascual-Leone', association: 'Capacidad M aumenta cada 2 años (e+1, e+2...)' },
        { author: 'Karmiloff-Smith', association: 'Neuroconstructivismo, Redescripción Representacional' },
        { author: 'Rosch', association: 'Nivel básico, Prototipos, Categorización natural' },
        { author: 'Johnson-Laird', association: 'Teoría de Modelos Mentales' },
        { author: 'Markovits', association: 'Crítica a TMM, Condicionales bicondicionales' },
        { author: 'Kintsch & van Dijk', association: 'Micro/Macroestructura, Macrorreglas' },
        { author: 'Uta Frith', association: 'Etapas lectura: Logográfica-Alfabética-Ortográfica' },
        { author: 'Flavell', association: 'Metacognición, Conocimiento vs Control' },
        { author: 'Brown', association: 'Control Metacognitivo (planificar, monitorear, evaluar)' },
        { author: 'Kuhn', association: 'Niveles epistemológicos (realista→absolutista→pluralista→evaluacionista)' },
        { author: 'Searle', association: 'Hechos brutos vs institucionales' },
        { author: 'Gelman', association: 'Esencialismo psicológico' },
        { author: 'Carey', association: 'Bootstrapping, Cambio conceptual' },
        { author: 'Cowan', association: 'Procesos anidados, Foco atencional' },
        { author: 'Eisenberg', association: 'Razonamiento prosocial' }
    ]
};

// ============================================
// MAPAS CONCEPTUALES EXPANDIDOS
// ============================================

const CONCEPT_MAPS_DATA = [
    {
        title: 'Modelo de Memoria Operativa (Baddeley)',
        list: [
            'EJECUTIVO CENTRAL: Control atencional, inhibición, actualización. Coordinador del sistema.',
            'LAZO FONOLÓGICO: Almacén fonológico + Repaso articulatorio. Almacenamiento verbal temporal.',
            'AGENDA VISOESPACIAL: Visual + Espacial. Almacenamiento de imágenes y ubicaciones.',
            'RETÉN EPISÓDICO: Integra información multimodal y conecta con Memoria a Largo Plazo.'
        ]
    },
    {
        title: 'Desarrollo de Estrategias de Memoria (Déficits)',
        steps: [
            { step: 1, name: 'Déficit de Mediación', desc: 'No se posee la estrategia. No se puede enseñar. Falta de competencia real.' },
            { step: 2, name: 'Déficit de Producción', desc: 'Se posee, pero no se usa espontáneamente. Mejora con instrucción. Problema de iniciativa.' },
            { step: 3, name: 'Déficit de Utilización', desc: 'Se usa pero NO mejora el rendimiento (coste cognitivo alto). La estrategia consume recursos.' },
            { step: 4, name: 'Uso Maduro', desc: 'Uso eficaz, flexible y con poco esfuerzo. Automatización de la estrategia.' }
        ]
    },
    {
        title: 'Teoría de los Modelos Mentales (Razonamiento)',
        list: [
            'COMPRENSIÓN: Se construye un modelo mental del significado del enunciado.',
            'DESCRIPCIÓN: Se genera una conclusión tentativa a partir del modelo.',
            'VALIDACIÓN: Búsqueda de contraejemplos (modelos alternativos).',
            'ERROR: Ocurre por fallo en memoria operativa al no poder mantener múltiples modelos.'
        ]
    },
    {
        title: 'Comparación Piaget vs Vygotski',
        comparison: [
            { aspect: 'Dirección', piaget: 'Dentro → Fuera (Individual → Social)', vygotski: 'Fuera → Dentro (Social → Individual)' },
            { aspect: 'Motor desarrollo', piaget: 'Equilibración (construcción individual)', vygotski: 'Internalización (aprendizaje mediado)' },
            { aspect: 'Lenguaje', piaget: 'Egocéntrico → Social', vygotski: 'Social → Egocéntrico → Interior' },
            { aspect: 'Aprendizaje', piaget: 'Va a remolque del desarrollo', vygotski: 'Tira del desarrollo (ZDP)' },
            { aspect: 'Rol del social', piaget: 'Secundario (necesario pero no motor)', vygotski: 'Primario (origen de lo cognitivo)' },
            { aspect: 'Perspectiva', piaget: 'Psicogenética (línea natural)', vygotski: 'Sociogenética (línea cultural)' }
        ]
    },
    {
        title: 'Funciones Ejecutivas según Miyake y Diamond',
        list: [
            'MIYAKE - Tres básicas: 1) Inhibición (frenar respuestas), 2) Actualización (mantener/manipular info), 3) Flexibilidad (cambiar entre tareas)',
            'DIAMOND - FE on-line (durante la tarea): Inhibición, Memoria de trabajo, Flexibilidad cognitiva',
            'DIAMOND - FE off-line (antes/después): Planificación, Razonamiento, Resolución de problemas',
            'DESARROLLO: Desde el primer año hasta los 25-30 años. No todas se desarrollan simultáneamente.'
        ]
    },
    {
        title: 'Modelo de Kintsch y van Dijk (Comprensión Lectora)',
        list: [
            'MICROESTRUCTURA: Proposiciones locales, ideas explícitas del texto.',
            'MACROESTRUCTURA: Significado global, tema. Se construye mediante macrorreglas.',
            'MACRORREGLAS: 1) Supresión (eliminar redundante), 2) Generalización (construir proposiciones generales), 3) Construcción (inferir proposiciones integradoras)',
            'MODELO SITUACIONAL: Representación integrada con conocimiento previo del lector.'
        ]
    },
    {
        title: 'Niveles de Conocimiento Social (Delval)',
        steps: [
            { step: 1, name: 'Nivel Externo', desc: 'Aspectos visibles/externos (hasta 10-11 años). Sin inferencias sobre procesos ocultos.' },
            { step: 2, name: 'Nivel Intermedio', desc: 'Procesos ocultos inferidos. Institucionalización incipiente (10-14 años).' },
            { step: 3, name: 'Nivel Avanzado', desc: 'Sistemas de relaciones, conflictos y soluciones políticas. Adolescencia.' }
        ]
    },
    {
        title: 'Niveles Epistemológicos (Kuhn)',
        steps: [
            { step: 1, name: 'Realista', desc: 'Copia directa de la realidad. Conocimiento como réplica objetiva.' },
            { step: 2, name: 'Absolutista', desc: 'Hechos correctos/incorrectos. Conocimiento como entidades absolutas.' },
            { step: 3, name: 'Pluralista', desc: 'Todo son opiniones. Todas las opiniones son igualmente válidas.' },
            { step: 4, name: 'Evaluacionista', desc: 'Juicios fundamentados. Verdad relativa pero evaluable mediante argumentos.' }
        ]
    },
    {
        title: 'Diseños de Investigación Evolutiva',
        comparison: [
            { aspect: 'Definición', longitudinal: 'Mismos sujetos, varios momentos', transversal: 'Distintos grupos edad, un momento', secuencial: 'Varias cohortes seguidas en el tiempo' },
            { aspect: 'Objetivo', longitudinal: 'Cambio intra-individual directo', transversal: 'Diferencias inter-individuales', secuencial: 'Separar edad/cohorte/momento' },
            { aspect: 'Ventaja', longitudinal: 'Ve cambio real', transversal: 'Rápido y barato', secuencial: 'Mayor confiabilidad' },
            { aspect: 'Problema', longitudinal: 'Lento, caro, mortandad, práctica', transversal: 'Efecto cohorte', secuencial: 'Complejo y costoso' }
        ]
    },
    {
        title: 'Etapa Logográfica vs Alfabética vs Ortográfica (Frith)',
        comparison: [
            { aspect: 'Logográfica', characteristics: 'Reconocimiento visual global. Lee como dibujos/logos. NO lee letras. Contextual.' },
            { aspect: 'Alfabética', characteristics: 'Conversión grafema-fonema. Secuencial. Lee pseudopalabras. Letra a letra.' },
            { aspect: 'Ortográfica', characteristics: 'Reconocimiento directo de morfemas/palabras. Rápida y fluida. Lectura experta.' }
        ]
    }
];

// ============================================
// GLOSARIO COMPLETO EXPANDIDO
// ============================================

const GLOSSARY_DATA = [
    { term: 'Abstracción Reflexiva', def: 'Mecanismo piagetiano de extracción de información de las propias acciones (coordinación) sobre los objetos, no de los objetos en sí. Fuente del conocimiento lógico-matemático.', author: 'Piaget' },
    { term: 'Abstracción Simple', def: 'Extracción de propiedades de los objetos mediante experiencia directa. Fuente del conocimiento físico.', author: 'Piaget' },
    { term: 'Acomodación', def: 'Modificación de los esquemas previos para adaptarse a los nuevos elementos externos. Complementaria de la asimilación.', author: 'Piaget' },
    { term: 'Adaptación', def: 'Proceso por el cual el organismo se ajusta al medio mediante asimilación y acomodación. Plano externo del desarrollo.', author: 'Piaget' },
    { term: 'Andamiaje (Scaffolding)', def: 'Ayuda temporal y ajustada que da el adulto al niño dentro de su ZDP. Se retira progresivamente.', author: 'Bruner' },
    { term: 'Asimilación', def: 'Integración de elementos externos dentro de las estructuras ya disponibles. Interpretar lo nuevo según lo conocido.', author: 'Piaget' },
    { term: 'Autoorganización', def: 'El funcionamiento del sistema genera nuevos estados y propiedades sin instrucciones explícitas. El orden emerge de las interacciones.', author: 'Sistemas Dinámicos' },
    { term: 'Bootstrapping', def: 'Mecanismo de "empuje" donde un aprendizaje previo impulsa nuevas distinciones más complejas.', author: 'Carey' },
    { term: 'Cambio Atencional', def: 'Flexibilidad cognitiva. Capacidad de cambiar entre tareas o reglas mentales. Una de las tres FE básicas de Miyake.', author: 'Miyake' },
    { term: 'Compromiso Neuronal', def: 'Pérdida de plasticidad por especialización progresiva. La ventaja evolutiva es la eficacia.', author: 'Neuroconstructivismo' },
    { term: 'Concepto', def: 'Representación mental declarativa/explícita basada en significado y función (lo que es). Puede verbalizarse.', author: 'Mandler' },
    { term: 'Condicional Bicondicional', def: 'Interpretación incorrecta de "Si p entonces q" como "Si y solo si p entonces q". Típica de niños pequeños.', author: 'Markovits' },
    { term: 'Conocimiento Metacognitivo', def: 'Componente declarativo de la metacognición. Saber qué se sabe. Estable y verbalizable.', author: 'Flavell/Brown' },
    { term: 'Control Metacognitivo', def: 'Componente procedimental de la metacognición. Planificación, supervisión y evaluación. "Saber cómo".', author: 'Brown' },
    { term: 'Core Knowledge', def: 'Conocimiento nuclear o básico que permite el bootstrapping hacia conceptos más complejos.', author: 'Carey' },
    { term: 'Cronotopía', def: 'Mecanismo de organización temporal del desarrollo neuronal. Secuencia de eventos que depende de estimulación oportuna.', author: 'Neuroconstructivismo' },
    { term: 'Déficit de Mediación', def: 'No se posee la estrategia. Imposible de usar incluso con instrucción. Déficit de competencia real.', author: 'Estrategias Memoria' },
    { term: 'Déficit de Producción', def: 'Se posee la estrategia pero no se usa espontáneamente. Mejora con instrucción. Problema de iniciativa.', author: 'Estrategias Memoria' },
    { term: 'Déficit de Utilización', def: 'Se usa la estrategia pero no mejora el rendimiento debido al alto coste cognitivo.', author: 'Estrategias Memoria' },
    { term: 'Desfase Horizontal', def: 'Diferencias en la adquisición de estructuras operacionales según el contenido o dominio. Ej: conservar cantidad antes que peso.', author: 'Piaget' },
    { term: 'Diseño Inter-sujeto', def: 'Se utilizan distintas muestras para distintas condiciones. Característico del diseño transversal.', author: 'Metodología' },
    { term: 'Diseño Intra-sujeto', def: 'Los mismos sujetos en distintas condiciones. Característico del diseño longitudinal.', author: 'Metodología' },
    { term: 'Efecto de Cohorte', def: 'Diferencia debida a la generación a la que se pertenece, no a la edad. Sesgo en diseños transversales.', author: 'Metodología' },
    { term: 'Efecto de Práctica', def: 'Mejora por repetición de pruebas. Problema de diseños longitudinales.', author: 'Metodología' },
    { term: 'Efecto de Prototipicidad', def: 'Los ejemplares típicos se identifican más rápidamente como miembros de una categoría.', author: 'Rosch' },
    { term: 'Egocentrismo', def: 'Interpretación del mundo bajo la propia perspectiva sin conciencia de otras perspectivas. Limitación cognitiva.', author: 'Piaget' },
    { term: 'Elaboración', def: 'Estrategia de memoria que consiste en crear historias/conexiones. La más eficaz y última en desarrollarse.', author: 'Estrategias Memoria' },
    { term: 'Epigénesis', def: 'Desarrollo por interacción bidireccional entre genes y ambiente, emergiendo nuevas estructuras.', author: 'Biología/Neuroconstructivismo' },
    { term: 'Equilibración', def: 'Motor del desarrollo. Tendencia a mantener equilibrio dinámico entre asimilación y acomodación. Factor coordinador.', author: 'Piaget' },
    { term: 'Esencialismo Psicológico', def: 'Creencia de que las categorías tienen una "esencia" interna inmutable más allá de la apariencia.', author: 'Gelman' },
    { term: 'Esquema', def: 'Patrón de conducta organizado. Unidad básica de las estructuras psicológicas. Modo de interacción con el medio.', author: 'Piaget' },
    { term: 'Estado Atractor', def: 'Forma de equilibrio hacia la que tiende a evolucionar un sistema dinámico.', author: 'Sistemas Dinámicos' },
    { term: 'Estrategia', def: 'Procedimiento deliberado para mejorar el rendimiento. Cuando se automatiza se convierte en destreza.', author: 'Psicología Cognitiva' },
    { term: 'Experiencia Física', def: 'Conocimiento sobre propiedades de objetos por abstracción simple. Ej: descubrir que un objeto pesa.', author: 'Piaget' },
    { term: 'Experiencia Lógico-Matemática', def: 'Conocimiento de las acciones y sus relaciones por abstracción reflexiva. Ej: descubrir que la suma es conmutativa.', author: 'Piaget' },
    { term: 'Falsa Creencia', def: 'Comprensión de que alguien puede tener una creencia falsa. Hito de la ToM a los 4 años.', author: 'Wimmer & Perner' },
    { term: 'Foco Atencional', def: 'Según Cowan, factor determinante de las diferencias individuales en memoria operativa.', author: 'Cowan' },
    { term: 'Función Simbólica', def: 'Capacidad de crear símbolos mentales de lo no presente. Incluye imagen, imitación diferida, juego, lenguaje.', author: 'Piaget' },
    { term: 'Funciones Ejecutivas', def: 'Procesos de control cognitivo: inhibición, memoria trabajo, flexibilidad. Dependen de corteza prefrontal.', author: 'Diamond/Miyake' },
    { term: 'Habituación', def: 'Disminución de respuesta ante estímulo repetido. Técnica para estudiar discriminación en bebés.', author: 'Metodología' },
    { term: 'Hecho Bruto', def: 'Hecho físico-natural que existe independientemente de interpretaciones humanas.', author: 'Searle' },
    { term: 'Hecho Institucional', def: 'Hecho que existe por acuerdo humano y reglas constitutivas: dinero, matrimonio, leyes.', author: 'Searle' },
    { term: 'Ilusión de Comprensión', def: 'Fallo metacognitivo de creer que se ha entendido cuando no es así.', author: 'Metacognición' },
    { term: 'Inhibición', def: 'Capacidad de frenar respuestas automáticas/prepotentes. Clave en FE y desarrollo moral.', author: 'Diamond' },
    { term: 'Internalización', def: 'Tránsito de lo interpsicológico a lo intrapsicológico. Reconstrucción interna de relaciones externas.', author: 'Vygotski' },
    { term: 'Invariante Cognitiva', def: 'Elementos que se mantienen en objetos pese a transformaciones. Ej: permanencia del objeto.', author: 'Piaget' },
    { term: 'Justicia Distributiva', def: 'Reparto equitativo de recursos entre miembros de un grupo.', author: 'Piaget' },
    { term: 'Justicia Inmanente', def: 'Creencia de que las faltas son castigadas automáticamente por la naturaleza.', author: 'Piaget' },
    { term: 'Laz Fonológico', def: 'Componente de la MO para información verbal: almacén fonológico + repaso articulatorio.', author: 'Baddeley' },
    { term: 'Ley de Doble Formación', def: 'Toda función psicológica superior aparece primero socialmente y luego individualmente.', author: 'Vygotski' },
    { term: 'Macroestructura', def: 'Significado global/tema de un texto. Se construye mediante macrorreglas.', author: 'Kintsch & van Dijk' },
    { term: 'Macrorreglas', def: 'Supresión, generalización y construcción para extraer el tema principal de un texto.', author: 'Kintsch & van Dijk' },
    { term: 'Mediación Semiótica', def: 'Los signos sirven como instrumentos de mediación entre personas. El lenguaje como mediador.', author: 'Vygotski' },
    { term: 'Microestructura', def: 'Ideas locales/proposiciones explícitas en un texto.', author: 'Kintsch & van Dijk' },
    { term: 'Método Clínico', def: 'Entrevista abierta y flexible para indagar en las explicaciones del niño.', author: 'Piaget' },
    { term: 'Método Microgenético', def: 'Estudio intensivo del cambio MIENTRAS ocurre. Sesiones densas durante adquisición.', author: 'Vygotski' },
    { term: 'Modelo Situacional', def: 'Representación integrada del texto con conocimiento previo del lector.', author: 'Kintsch & van Dijk' },
    { term: 'Modularización', def: 'Especialización progresiva de funciones psicológicas. Los módulos no son innatos sino producto del desarrollo.', author: 'Karmiloff-Smith' },
    { term: 'Moral Autónoma', def: 'Normas mutuas, negociables. Se considera la intención. A partir de 10 años.', author: 'Piaget' },
    { term: 'Moral Heterónoma', def: 'Normas externas, sagradas, inmutables. Obediencia unilateral. Responsabilidad objetiva.', author: 'Piaget' },
    { term: 'Mortandad Experimental', def: 'Pérdida de sujetos durante estudio longitudinal. Puede sesgar resultados.', author: 'Metodología' },
    { term: 'Nivel Básico', def: 'Nivel de categorización intermedio que maximiza información y economía cognitiva.', author: 'Rosch' },
    { term: 'Operaciones Concretas', def: 'Período de 7-11 años. Lógica de clases y relaciones. Conservación. Reversibilidad.', author: 'Piaget' },
    { term: 'Operaciones Formales', def: 'Período desde 11 años. Pensamiento hipotético-deductivo. Lógica proposicional.', author: 'Piaget' },
    { term: 'Organización', def: 'Integración y fijación de cambios mediante reestructuraciones internas. Plano interno.', author: 'Piaget' },
    { term: 'Percepto', def: 'Representación procedimental/implícita basada en apariencia física (lo que parece).', author: 'Mandler' },
    { term: 'Preferencia de Estímulos', def: 'Técnica que mide tiempo de mirada a estímulos para inferir discriminación.', author: 'Fantz' },
    { term: 'Producción', def: 'Regla condición-acción en sistemas de procesamiento de información.', author: 'Newell & Simon' },
    { term: 'Prototipo', def: 'Ejemplar más típico/representativo de una categoría. Tiene más rasgos característicos.', author: 'Rosch' },
    { term: 'Rasgo Característico', def: 'Propiedad frecuente en miembros de categoría pero no necesaria ni suficiente.', author: 'Rosch' },
    { term: 'Rasgo Definitorio', def: 'Característica necesaria y suficiente para pertenecer a una categoría.', author: 'Concepción Clásica' },
    { term: 'Realismo Moral', def: 'Considerar normas como entidades objetivas y sagradas. Juzgar por resultado material.', author: 'Piaget' },
    { term: 'Redescripción Representacional', def: 'Proceso de volver explícito (declarativo) lo que está implícito (procedimental).', author: 'Karmiloff-Smith' },
    { term: 'Responsabilidad Objetiva', def: 'Juzgar por el resultado material. Ej: romper 5 tazas sin querer > 1 queriendo.', author: 'Piaget' },
    { term: 'Responsabilidad Subjetiva', def: 'Juzgar por la intención. Ej: romper 1 queriendo > 5 sin querer.', author: 'Piaget' },
    { term: 'Retropropagación', def: 'Algoritmo de aprendizaje en redes conexionistas que ajusta pesos desde la salida hacia atrás.', author: 'Conexionismo' },
    { term: 'Reversibilidad', def: 'Comprensión de que se puede restablecer el resultado de una acción con su contraria.', author: 'Piaget' },
    { term: 'Sistema Dinámico', def: 'Conjunto de componentes que interactúan modificándose mutuamente en el tiempo.', author: 'Sistemas Dinámicos' },
    { term: 'Teoría de la Mente', def: 'Capacidad de atribuir estados mentales a uno mismo y otros.', author: 'ToM' },
    { term: 'Teorías de la Teoría', def: 'Los conceptos forman parte de teorías intuitivas sobre dominios específicos.', author: 'Theory-Theory' },
    { term: 'Trayectoria Evolutiva', def: 'Concepción del desarrollo típico y atípico como caminos diversos con mecanismos comunes.', author: 'Neuroconstructivismo' },
    { term: 'Validez Externa', def: 'Grado de generalización de resultados a otras situaciones/sujetos.', author: 'Metodología' },
    { term: 'Validez Interna', def: 'Grado de certeza de que cambios en VD se deben a la VI manipulada.', author: 'Metodología' },
    { term: 'Variabilidad Intra-sujeto', def: 'Diferencias en el mismo sujeto a través del tiempo. Fuente de datos en sistemas dinámicos.', author: 'Sistemas Dinámicos' },
    { term: 'Violación de Expectativas', def: 'Paradigma que analiza reacción ante eventos imposibles para inferir conocimiento.', author: 'Metodología' },
    { term: 'Zona de Desarrollo Próximo', def: 'Distancia entre nivel real (solo) y potencial (con ayuda). Margen de aprendizaje.', author: 'Vygotski' }
];


// ============================================
// AUTORES CLAVE EXPANDIDOS
// ============================================

const AUTHORS_DATA = [
    { name: 'PIAGET', desc: 'Epistemología Genética. Estadios. Equilibración. Abstracción reflexiva. Moral Heterónoma/Autónoma. Constructivismo interaccionista.', keyConcepts: 'Asimilación, Acomodación, Esquemas, Función simbólica' },
    { name: 'VYGOTSKI', desc: 'Sociogénesis. ZDP. Ley doble formación. Lenguaje como herramienta mediadora. Línea natural vs cultural.', keyConcepts: 'Internalización, Mediación semiótica, Andamiaje' },
    { name: 'KOHLBERG', desc: 'Tres niveles morales (Pre/Conv/Post). Dilemas morales. Justicia como equidad. Dilema de Heinz.', keyConcepts: 'Preconvencional, Convencional, Postconvencional' },
    { name: 'GILLIGAN', desc: 'Crítica feminista a Kohlberg. Moral del cuidado vs moral de la justicia.', keyConcepts: 'Moral del cuidado, Responsabilidad, Empatía' },
    { name: 'MANDLER', desc: 'Análisis Perceptivo. Diferencia entre Percepto (apariencia/procedimental) y Concepto (significado/declarativo).', keyConcepts: 'Percepto, Concepto, Análisis perceptivo, Esquemas de imagen' },
    { name: 'ROSCH', desc: 'Teoría de la Categorización Natural. Prototipos. Nivel Básico de categorización. Rasgos probabilísticos.', keyConcepts: 'Prototipo, Nivel básico, Efecto de prototipicidad' },
    { name: 'KARMILOFF-SMITH', desc: 'Neuroconstructivismo. Redescripción Representacional (RR). Modularización emergente. Trayectorias del desarrollo.', keyConcepts: 'RR, Modularización, Especialización, Plasticidad' },
    { name: 'FLAVELL', desc: 'Metacognición. Metamemoria. Conocimiento metacognitivo (personas, tareas, estrategias).', keyConcepts: 'Metacognición, Metamemoria, Conocimiento vs Control' },
    { name: 'BROWN', desc: 'Control Metacognitivo. Planificación, supervisión, evaluación. Secuencia: conocimiento → autorregulación.', keyConcepts: 'Control metacognitivo, Autorregulación' },
    { name: 'BADDELEY', desc: 'Modelo multicomponente de Memoria Operativa: Ejecutivo Central, Lazo Fonológico, Agenda Visoespacial, Retén Episódico.', keyConcepts: 'Ejecutivo central, Lazo fonológico, Agenda visoespacial' },
    { name: 'COWAN', desc: 'Modelo de Procesos Anidados. Foco atencional como factor de diferencias individuales. MO como MLP activada.', keyConcepts: 'Foco atencional, Procesos anidados, Capacidad atencional' },
    { name: 'DIAMOND', desc: 'Funciones Ejecutivas: Inhibición, Memoria de Trabajo, Flexibilidad. FE on-line vs off-line. Córtex prefrontal.', keyConcepts: 'Inhibición, FE on-line/off-line, Prefrontal' },
    { name: 'MIYAKE', desc: 'Tres Funciones Ejecutivas básicas: Inhibición, Actualización (WM), Flexibilidad/Cambio. Unidad y diversidad de FE.', keyConcepts: 'Tres FE básicas, Unidad y diversidad' },
    { name: 'PASCUAL-LEONE', desc: 'Teoría de los Operadores Constructivos. Capacidad mental M aumenta biológicamente (e+1, e+2...).', keyConcepts: 'Espacio mental M, Operadores constructivos' },
    { name: 'CASE', desc: 'Neopiagetiano. Eficacia operativa libera espacio en MO. ETP = EOP + ACP. Capacidad total es constante.', keyConcepts: 'Eficacia operativa, ETP, EOP, ACP' },
    { name: 'HALFORD', desc: 'Neopiagetiano. 4 estadios por capacidad de correspondencia de estructuras. Desarrollo gradual por maduración.', keyConcepts: 'Correspondencias, Estructuras, Maduración' },
    { name: 'FISCHER', desc: 'Neopiagetiano. 4 escalones basados en destrezas. Variabilidad es la regla. Control de nivel óptimo.', keyConcepts: 'Destrezas, Escalones, Variabilidad' },
    { name: 'TURIEL', desc: 'Distingue dominios: Moral (daño/justicia) vs Convención Social (normas arbitrarias) vs Personal.', keyConcepts: 'Dominio moral, Dominio convencional' },
    { name: 'EISENBERG', desc: 'Razonamiento Prosocial (altruismo, empatía). Estadios paralelos a Kohlberg pero centrados en ayuda.', keyConcepts: 'Prosocial, Altruismo, Empatía' },
    { name: 'KINTSCH & VAN DIJK', desc: 'Modelo de comprensión lectora. Microestructura y Macroestructura. Macrorreglas. Modelo situacional.', keyConcepts: 'Microestructura, Macroestructura, Macrorreglas' },
    { name: 'CAREY', desc: 'Cambio Conceptual. Bootstrapping. Conocimiento Nuclear (Core Knowledge). Esencialismo.', keyConcepts: 'Bootstrapping, Core knowledge, Cambio conceptual' },
    { name: 'GELMAN', desc: 'Esencialismo Psicológico. Los niños creen en esencias internas que determinan identidad.', keyConcepts: 'Esencialismo, Esencias, Identidad' },
    { name: 'JOHNSON-LAIRD', desc: 'Teoría de los Modelos Mentales. Razonamiento mediante representaciones semánticas, no reglas.', keyConcepts: 'Modelos mentales, Representaciones semánticas' },
    { name: 'MARKOVITS', desc: 'Crítica a la TMM. Condicionales bicondicionales. Deficit en organización MLP, no solo capacidad.', keyConcepts: 'Bicondicionales, Crítica TMM, MLP' },
    { name: 'WASON', desc: 'Tarea de selección. Sesgo de emparejamiento. Efecto del contenido en razonamiento.', keyConcepts: 'Tarea selección, Sesgo emparejamiento' },
    { name: 'UTA FRITH', desc: 'Tres etapas de lectura: Logográfica → Alfabética → Ortográfica.', keyConcepts: 'Logográfica, Alfabética, Ortográfica' },
    { name: 'SEARLE', desc: 'Hechos brutos vs institucionales. Funciones de status. Conocimiento social.', keyConcepts: 'Hechos brutos, Hechos institucionales, Status' },
    { name: 'KUHN', desc: 'Niveles epistemológicos: Realista → Absolutista → Pluralista → Evaluacionista.', keyConcepts: 'Epistemología, Realista, Evaluacionista' },
    { name: 'RUMELHART & MCCLELLAND', desc: 'Conexionismo. Retropropagación. Modelos PDP. Redes constructivistas.', keyConcepts: 'Conexionismo, PDP, Retropropagación' },
    { name: 'MARESCHAL & SCHULTZ', desc: 'Redes constructivistas. Algoritmos generativos. Añaden unidades ocultas.', keyConcepts: 'Redes constructivistas, Generativos' },
    { name: 'THELEN & SMITH', desc: 'Sistemas Dinámicos. Desarrollo como sistema complejo. Autoorganización.', keyConcepts: 'Sistemas dinámicos, Autoorganización' },
    { name: 'VAN GEERT', desc: 'Autoorganización como resultado del funcionamiento del sistema. Trayectorias de desarrollo.', keyConcepts: 'Autoorganización, Trayectorias' },
    { name: 'PRIGOGINE', desc: 'Teoría de sistemas dinámicos. Autoorganización en sistemas complejos.', keyConcepts: 'Sistemas complejos, Autoorganización' },
    { name: 'DELVAL', desc: 'Niveles de conocimiento social (visibles → ocultos → sistémico).', keyConcepts: 'Niveles sociales, Conocimiento social' },
    { name: 'BRUNER', desc: 'Andamiaje. Psicología cognitiva. Descubrimiento. Categorización.', keyConcepts: 'Andamiaje, Descubrimiento' },
    { name: 'NEVELL & SIMON', desc: 'Sistemas de producciones. Procesamiento de información. Human Problem Solving.', keyConcepts: 'Producciones, PI' },
    { name: 'KLAHR', desc: 'Sistemas de producciones para desarrollo. Tarea de la balanza. Automodificación.', keyConcepts: 'Producciones, Tarea balanza' },
    { name: 'SIEGLER', desc: 'Tarea de la balanza. Reglas de desarrollo. Estrategias alternativas.', keyConcepts: 'Reglas balanza, Estrategias' },
    { name: 'FANTZ', desc: 'Preferencia de estímulos en bebés. Método de tiempo de mirada.', keyConcepts: 'Preferencia estímulos, Mirada' },
    { name: 'BAILLARGEON', desc: 'Violación de expectativas. Permanencia del objeto en bebés muy pequeños.', keyConcepts: 'Violación expectativas, Permanencia' },
    { name: 'MELTZOFF', desc: 'Imitación diferida en bebés. Memoria declarativa temprana.', keyConcepts: 'Imitación diferida, Memoria bebés' },
    { name: 'SCHAIE', desc: 'Diseño secuencial. Modelo evolutivo general. Separar edad/cohorte/momento.', keyConcepts: 'Diseño secuencial, Modelo evolutivo' },
    { name: 'BALTES', desc: 'Diseño secuencial. Confusión edad-cohorte-momento.', keyConcepts: 'Diseño secuencial' },
    { name: 'WIMMER & PERNER', desc: 'Tarea de falsa creencia. Sally-Ann. Teoría de la mente.', keyConcepts: 'Falsa creencia, ToM' },
    { name: 'HEBB', desc: 'Regla de aprendizaje en conexionismo. Fuerza de conexión cuando unidades actúan conjuntamente.', keyConcepts: 'Regla Hebb, Aprendizaje' }
];

// ============================================
// ESTADIOS Y TEORÍAS EXPANDIDAS
// ============================================

const STAGES_DATA = {
    piaget: {
        title: 'Estadios Cognitivos (Piaget)',
        mnemonic: 'Se Pre-Ocupa Fuerte',
        stages: [
            { name: 'Sensoriomotor', age: '0-2', desc: 'Inteligencia práctica. Permanencia del objeto. Función simbólica al final. Reflejos y esquemas sensomotores.', key: 'Permanencia del objeto, Espaciotemporal, Causalidad' },
            { name: 'Preoperacional', age: '2-7', desc: 'Pensamiento simbólico pero egocéntrico. Centración. Irreversibilidad. Falta de conservación. Función simbólica.', key: 'Egocentrismo, Centración, Irreversibilidad' },
            { name: 'Op. Concretas', age: '7-11', desc: 'Lógica de clases y relaciones. Reversibilidad. Conservación. Operaciones con objetos reales. Inclusión de clases.', key: 'Conservación, Reversibilidad, Clasificación, Seriación' },
            { name: 'Op. Formales', age: '11+', desc: 'Pensamiento hipotético-deductivo. Lógica proposicional. Combinatoria. Pensamiento científico abstracto.', key: 'Hipotético-deductivo, Proposicional, Abstracto' }
        ]
    },
    kohlberg: {
        title: 'Estadios Morales (Kohlberg)',
        mnemonic: 'Pre-Con-Post',
        stages: [
            { name: 'Preconvencional', desc: 'Moral externa. E1: Castigo/Obediencia (evitar daño). E2: Instrumental/Hedonista (interés propio/intercambio).', key: 'Evitar castigo, Intercambio' },
            { name: 'Convencional', desc: 'Conformidad social. E3: Buen chico (aprobación, relaciones). E4: Ley y Orden (mantenimiento del sistema).', key: 'Aprobación, Normas sociales' },
            { name: 'Postconvencional', desc: 'Moral autónoma. E5: Contrato Social/Derechos (democracia). E6: Principios Éticos Universales (justicia sobre ley).', key: 'Derechos humanos, Justicia universal' }
        ]
    },
    reading: {
        title: 'Fases de la Lectura (Uta Frith)',
        mnemonic: 'LOA',
        stages: [
            { name: 'Logográfica', desc: 'Reconocimiento visual global (como dibujos/logos). Contextual. NO lee pseudopalabras ni letras aisladas.', key: 'Reconocimiento global, No fonológico' },
            { name: 'Alfabética', desc: 'Conversión grafema-fonema. Secuencial. Lee palabras nuevas y pseudopalabras. Letra a letra.', key: 'Grafema-fonema, Decodificación' },
            { name: 'Ortográfica', desc: 'Reconocimiento directo de morfemas/patrones. Rápida y fluida. Lectura experta. Automatización.', key: 'Morfemas, Fluidez, Automatización' }
        ]
    },
    selman: {
        title: 'Toma de Perspectiva (Selman)',
        mnemonic: 'Ego-Sub-Auto-Mutuo-Social',
        stages: [
            { name: '0. Egocéntrica (3-6)', desc: 'No distingue perspectivas. No entiende que otros piensen diferente.', key: 'No distinción' },
            { name: '1. Subjetiva (6-8)', desc: 'Distingue perspectivas pero se centra en la propia. Entiende que otros piensan diferente.', key: 'Distingue pero egocéntrica' },
            { name: '2. Autorreflexiva (8-10)', desc: 'Puede verse a sí mismo desde fuera. Tercera persona sobre sí mismo.', key: 'Tercera persona' },
            { name: '3. Mutua (10-12)', desc: 'Perspectiva de tercera persona/espectador. Puede ver ambas perspectivas simultáneamente.', key: 'Perspectiva tercera' },
            { name: '4. Social (12+)', desc: 'Perspectiva del sistema social generalizado. Puntos de vista abstractos/sociales.', key: 'Sistema social' }
        ]
    },
    kuhn: {
        title: 'Niveles Epistemológicos (Kuhn)',
        mnemonic: 'Real-Absolut-Plural-Evalua',
        stages: [
            { name: 'Realista', desc: 'Copia directa de la realidad. Conocimiento como réplica objetiva del mundo.', key: 'Copia realidad' },
            { name: 'Absolutista', desc: 'Hechos correctos/incorrectos. Conocimiento como entidades absolutas de verdad.', key: 'Verdad absoluta' },
            { name: 'Pluralista', desc: 'Todo son opiniones. Todas las opiniones son igualmente válidas. Subjetivismo.', key: 'Todo opiniones' },
            { name: 'Evaluacionista', desc: 'Juicios fundamentados. Verdad relativa pero evaluable mediante argumentos y evidencia.', key: 'Argumentación' }
        ]
    },
    eisenberg: {
        title: 'Niveles Prosociales (Eisenberg)',
        stages: [
            { name: 'Hedonista', desc: 'Ayuda para obtener beneficios personales. No considera al otro realmente.', key: 'Beneficio propio' },
            { name: 'Orientación a necesidades', desc: 'Ayuda por empatía directa. Reconoce necesidad del otro.', key: 'Empatía directa' },
            { name: 'Orientación a aprobación', desc: 'Ayuda por aprobación social. Cómo quedará uno ante otros.', key: 'Aprobación' },
            { name: 'Orientación empática', desc: 'Ayuda por empatía abstracta. Valoración de la condición del otro.', key: 'Empatía abstracta' },
            { name: 'Valores internalizados', desc: 'Ayuda por valores morales internalizados. Principios éticos.', key: 'Valores' }
        ]
    },
    classification: {
        title: 'Etapas de Clasificación (Perspectiva Clásica)',
        stages: [
            { name: 'Colecciones figurales (2-5)', desc: 'Agrupaciones temáticas y perceptivas. Configuraciones espaciales aleatorias. Diseños figurativos.', key: 'Temática, Perceptiva' },
            { name: 'Colecciones no figurales (5-7)', desc: 'Clasificación racional pero no jerárquica. Rasgos definitorios cambiantes. Preconceptual.', key: 'Racional, No jerárquica' },
            { name: 'Clasificación jerárquica (7-8)', desc: 'Inclusión de clases. Lógica de clases. Taxonomías. Operaciones concretas.', key: 'Jerárquica, Inclusión' }
        ]
    },
    vygotskyLanguage: {
        title: 'Evolución del Lenguaje (Vygotski)',
        stages: [
            { name: 'Social/Externo (0-2)', desc: 'Lenguaje comunicativo. Vocalizaciones sociales. Sin función reguladora importante.', key: 'Comunicación' },
            { name: 'Egocéntrico (~4)', desc: 'Lenguaje regulador externo. El niño se habla a sí mismo en voz alta para guiarse.', key: 'Autorregulación externa' },
            { name: 'Interior (~5)', desc: 'Lenguaje interior. Pensamiento verbal. Regulación interna del propio comportamiento.', key: 'Pensamiento verbal' }
        ]
    }
};

// ============================================
// METODOLOGÍA EXPANDIDA
// ============================================

const METHODOLOGY_DATA = [
    { 
        type: 'Diseño Longitudinal', 
        desc: 'Mismos sujetos a lo largo del tiempo (medidas repetidas). Permite ver cambio intra-individual directo.',
        pros: 'Cambio intra-individual real. Relaciones en el cambio. Determinantes del cambio.',
        cons: 'Lento, caro. Mortandad experimental. Efecto de práctica. Confusión edad-momento. No generalizable a otras cohortes.' 
    },
    { 
        type: 'Diseño Transversal', 
        desc: 'Distintos grupos de edad en un único momento. Comparación entre sujetos de diferentes edades.',
        pros: 'Rápido, barato. Permite inferir cambio. Datos inmediatos.',
        cons: 'No ve cambio individual. Efecto de COHORTE (confunde edad con generación). Sesgo de selección.' 
    },
    { 
        type: 'Diseño Secuencial', 
        desc: 'Combinación longitudinal + transversal. Varias cohortes seguidas en el tiempo.',
        pros: 'Controla efecto cohorte. Separa edad/generación/momento. Mayor confiabilidad. Mayor eficiencia (extiende intervalo investigado).',
        cons: 'Muy complejo y costoso. Requiere análisis estadístico sofisticado.' 
    },
    { 
        type: 'Diseño Microgenético', 
        desc: 'Observación densa durante el cambio (Vygotski). Estudia el proceso de cambio en vivo.',
        pros: 'Muestra el PROCESO de cambio. Transiciones entre estados. Mecanismos de adquisición.',
        cons: 'Limitado a periodos cortos. Intensivo en recursos. No generalizable fácilmente.' 
    },
    { 
        type: 'Investigación Experimental', 
        desc: 'Manipulación de VI para establecer causalidad. Control de variables extrañas.',
        pros: 'Validez interna alta. Establece causalidad. Control sistemático.',
        cons: 'Artificialidad (amenaza validez externa). No siempre ético o viable con variables del sujeto.' 
    },
    { 
        type: 'Investigación Cuasi-experimental', 
        desc: 'No asignación aleatoria. Se usan grupos naturales intactos (clases, edades).',
        pros: 'Viable en contextos naturales. Mayor validez ecológica.',
        cons: 'Menor validez interna. No se puede establecer causalidad con seguridad. Sesgo de selección.' 
    },
    { 
        type: 'Investigación Correlacional', 
        desc: 'Observación de relaciones sin manipulación. Estudia covariación entre variables.',
        pros: 'Permite estudiar variables no manipulables. Exploración de relaciones.',
        cons: 'No establece causalidad. Solo correlación. Direccionalidad desconocida.' 
    },
    { 
        type: 'Método Clínico (Piaget)', 
        desc: 'Entrevista abierta y flexible. Diálogo con el niño para indagar su pensamiento.',
        pros: 'Acceso al pensamiento. Flexibilidad. Caso individual. Cualitativo.',
        cons: 'Subjetividad. Falta estandarización. Difícil replicar. Interpretación dependiente del observador.' 
    }
];

// ============================================
// TÉCNICAS ESPECÍFICAS
// ============================================

const TECHNIQUES_DATA = [
    {
        name: 'Habituación/Deshabituación',
        category: 'Bebés',
        description: 'Presentar estímulo hasta habituación (pérdida de interés), luego cambiar. Si recupera atención (deshabituación), discrimina entre estímulos.',
        measures: 'Tiempo de mirada, orientación',
        uses: 'Percepción, memoria, discriminación, conceptos tempranos'
    },
    {
        name: 'Preferencia de Estímulos',
        category: 'Bebés',
        description: 'Presentar dos estímulos simultáneamente. Medir tiempo mirando cada uno.',
        measures: 'Tiempo de fijación a cada estímulo',
        uses: 'Discriminación perceptiva, preferencias, atención'
    },
    {
        name: 'Imitación Diferida',
        category: 'Bebés',
        description: 'Reproducir acción tras intervalo de tiempo. Demuestra recuerdo de evento no presente.',
        measures: 'Reproducción correcta tras demora',
        uses: 'Memoria declarativa explícita desde 6-9 meses'
    },
    {
        name: 'Violación de Expectativas',
        category: 'Bebés',
        description: 'Presentar eventos imposibles/inésperados. Mayor tiempo de mirada indica sorpresa/detection de imposibilidad.',
        measures: 'Tiempo de mirada a evento imposible vs posible',
        uses: 'Permanencia del objeto, física intuitiva, expectativas'
    },
    {
        name: 'Condicionamiento',
        category: 'Bebés',
        description: 'Clásico: asociación estímulo-señal. Operante: asociación respuesta-consecuencia.',
        measures: 'Respuesta condicionada, tasa respuesta',
        uses: 'Aprendizaje, memoria, discriminación, categorías'
    },
    {
        name: 'Registro de Potenciales Evocados',
        category: 'Neurofisiología',
        description: 'Respuesta eléctrica de neuronas ante estimulación mediante electrodos en el cuero cabelludo.',
        measures: 'Actividad eléctrica cerebral (ERP)',
        uses: 'Procesamiento de información, atención selectiva, memoria'
    },
    {
        name: 'fMRI',
        category: 'Neuroimagen',
        description: 'Resonancia magnética funcional. Mide cambios en oxigenación sanguínea (BOLD).',
        measures: 'Activación cerebral regional',
        uses: 'Localización de funciones cognitivas, desarrollo cerebral'
    },
    {
        name: 'Tarea de Wason',
        category: 'Razonamiento',
        description: 'Seleccionar tarjetas para verificar regla condicional. Detecta sesgo de emparejamiento.',
        measures: 'Tarjetas seleccionadas correctamente',
        uses: 'Razonamiento condicional, efecto del contenido'
    }
];


// ============================================
// MNEMOTÉCNICOS EXPANDIDOS
// ============================================

const MNEMONICS_DATA = [
    {
        id: 1,
        title: 'Moral de Piaget: ReJus',
        mnemonic: 'Re-Jus-Re',
        explanation: 'REalismo moral, JUSticia inmanente, REsponsabilidad objetiva. Las tres características de la moral heterónoma.',
        category: 'moral'
    },
    {
        id: 2,
        title: 'Estrategias Memoria: ROE',
        mnemonic: 'ROE',
        explanation: 'Repetición → Organización → Elaboración. Orden evolutivo de las estrategias. La Elaboración es la más eficaz.',
        category: 'memoria'
    },
    {
        id: 3,
        title: 'Lectura (Frith): LOA',
        mnemonic: 'LOA',
        explanation: 'Logográfica → Alfabética → Ortográfica. Las tres etapas de adquisición de la lectura.',
        category: 'lectura'
    },
    {
        id: 4,
        title: 'Toma Perspectiva: EgoSubAutoMutSo',
        mnemonic: 'Ego-Sub-Auto-Mut-So',
        explanation: 'Egocéntrica → Subjetiva → Autorreflexiva → Mutua → SOcial. Las 5 etapas de Selman.',
        category: 'social'
    },
    {
        id: 5,
        title: 'Estadios Piaget: SePreOcupaFuerte',
        mnemonic: 'Se-Pre-Ocupa-Fuerte',
        explanation: 'SEnsoriomotor → PREoperacional → OCUPAconcretas → FUERTEformales.',
        category: 'piaget'
    },
    {
        id: 6,
        title: 'Moral Kohlberg: PreConPost',
        mnemonic: 'Pre-Con-Post',
        explanation: 'PREconvencional → CONvencional → POSTconvencional. Tres niveles morales.',
        category: 'moral'
    },
    {
        id: 7,
        title: 'Componentes Baddeley: ELAgeRe',
        mnemonic: 'E-LA-Ge-Re',
        explanation: 'Ejecutivo Central, LAzo fonológico, GEnda visoespacial, REtén episódico. Memoria Operativa.',
        category: 'memoria'
    },
    {
        id: 8,
        title: 'Funciones Ejecutivas Miyake: InAcCam',
        mnemonic: 'In-Ac-Cam',
        explanation: 'INhibición → ACtualización (WM) → CAMbio/Flexibilidad. Las tres FE básicas.',
        category: 'memoria'
    },
    {
        id: 9,
        title: 'Déficits Estrategias: MeProUti',
        mnemonic: 'Me-Pro-Uti-Ma',
        explanation: 'MEdiación (no puede) → PROducción (no usa) → UTIlización (usa pero no mejora) → MAduro (uso eficaz).',
        category: 'memoria'
    },
    {
        id: 10,
        title: 'Teoría de la Mente: DeCreFal',
        mnemonic: 'De-Cre-Fal',
        explanation: 'DEseos (2 años) → CREencias verdaderas (3) → FALsas creencias (4). Hito clave a los 4 años.',
        category: 'metacognicion'
    },
    {
        id: 11,
        title: 'Niveles Epistemológicos Kuhn: ReAbPlEv',
        mnemonic: 'Real-Abs-Plu-Eva',
        explanation: 'REalista → ABsolutista → PLuralista → EVAluacionista. Desarrollo epistemológico.',
        category: 'metacognicion'
    },
    {
        id: 12,
        title: 'Diseños: LoTraSec',
        mnemonic: 'Lo-Tra-Sec',
        explanation: 'LOngitudinal (mismo sujeto) → TRAnsversal (distintos grupos) → SECuencial (combinación).',
        category: 'metodologia'
    },
    {
        id: 13,
        title: 'Vygotski: ZDP',
        mnemonic: 'ZDP',
        explanation: 'Zona de Desarrollo Próximo. Distancia entre nivel REAL (solo) y POTENCIAL (con ayuda).',
        category: 'vygotski'
    },
    {
        id: 14,
        title: 'Piaget: 4 Factores',
        mnemonic: 'Ma-Ex-Ex-Eq',
        explanation: 'MAduración + EXperiencia física + EXperiencia social + EQuilibración (coordinador).',
        category: 'piaget'
    },
    {
        id: 15,
        title: 'Neopiagetianos: PaCaHaFi',
        mnemonic: 'Pa-Ca-Ha-Fi',
        explanation: 'PAscual-Leone (capacidad M) → CAse (eficacia) → HAlford (correspondencias) → FIscher (destrezas).',
        category: 'teorias'
    },
    {
        id: 16,
        title: 'Modelos Actuales: PISisConNeu',
        mnemonic: 'PI-Sis-Con-Neu',
        explanation: 'Procesamiento Información → SIstemas Dinámicos → CONexionismo → NEUroconstructivismo.',
        category: 'teorias'
    },
    {
        id: 17,
        title: 'Lenguaje Vygotski: SoEgIn',
        mnemonic: 'So-Eg-In',
        explanation: 'SOcial → EGoéntrico → INterior. Evolución del lenguaje según Vygotski (opuesto a Piaget).',
        category: 'vygotski'
    },
    {
        id: 18,
        title: 'Macrorreglas: SuGeCo',
        mnemonic: 'Su-Ge-Co',
        explanation: 'SUPresión → GEnearalización → COnstrucción. Macrorreglas de Kintsch y van Dijk.',
        category: 'lectura'
    },
    {
        id: 19,
        title: 'Piaget vs Vygotski: In vs So',
        mnemonic: 'In vs So / Eq vs Zd',
        explanation: 'Piaget: INdividual → EQuilibración. Vygotski: SOcial → Zona Desarrollo Próximo.',
        category: 'teorias'
    },
    {
        id: 20,
        title: 'Validez: In-Ex',
        mnemonic: 'In antes Ex',
        explanation: 'Validez INterna antes que EXterna. No hay generalización sin control experimental previo.',
        category: 'metodologia'
    }
];

// ============================================
// CONSEJOS Y ESTRATEGIAS DE EXAMEN EXPANDIDOS
// ============================================

const TIPS_DATA = [
    { title: 'Piaget vs Vygotski', text: 'Piaget = Dentro a fuera (Individual → Social) con Equilibración. Vygotski = Fuera a dentro (Social → Individual) con ZDP.' },
    { title: 'Déficits de Memoria', text: 'Mediación (no puede) → Producción (no usa espontáneamente) → Utilización (usa pero no sirve). Orden evolutivo de problemas.' },
    { title: 'Moral: Piaget vs Kohlberg', text: 'Piaget: Heterónoma (Consecuencias) → Autónoma (Intención). Kohlberg: Pre → Conv → Post. Turiel: Moral vs Convención son DISTINTOS.' },
    { title: 'Neopiagetianos', text: 'Pascual-Leone = +Espacio Mental (M). Case = +Eficacia (mismo espacio total ETP). No confundir!' },
    { title: 'ToM y Falsa Creencia', text: 'Si falla falsa creencia (3 años): Realista. Si acierta (4 años): Representacional. Hito clave a los 4 años.' },
    { title: 'Inhibición', text: 'Clave en Funciones Ejecutivas. Frena respuestas prepotentes (ej: tarea Stroop, A-no-B de Piaget). Relacionada con corteza prefrontal.' },
    { title: 'Lectura', text: 'Logográfica = Dibujo (no letras). Alfabética = Sonido (Fonema: C-A-S-A). Ortográfica = Fluidez (palabras completas).' },
    { title: 'Metodología: Diseños', text: 'Longitudinal = mismo sujeto, tiempo real. Transversal = distintos grupos, cohorte problema. Secuencial = combinación mejor.' },
    { title: 'Case y Memoria', text: 'NO aumenta capacidad total (ETP). Aumenta EFICACIA (EOP disminuye → ACP aumenta). ETP = EOP + ACP (constante).' },
    { title: 'Mandler Conceptos', text: 'Percepto = Procedimental/Implícito/Apariencia. Concepto = Declarativo/Explícito/Significado. Diferencia clave examen.' },
    { title: 'Modelos Mentales', text: 'Razonamos con representaciones semánticas, no reglas. Errores por limitación MO. Markovits critica: problema es organización MLP.' },
    { title: 'Rosch y Categorización', text: 'Nivel Básico = más inclusivo que refleja estructura correlacional (ej: Perro). Prototipos = ejemplares más típicos.' },
    { title: 'Turiel: Moral vs Convención', text: 'Moral = Justicia, derechos, daño (intrínseco, universal). Convención = Normas arbitrarias (modificables, contexto).' },
    { title: 'Kohlberg: Estadios', text: 'Pre (obediencia/castigo) → Conv (aprobación/ley-orden) → Post (contrato/principios). Pocos llegan a Post.' },
    { title: 'Searle: Hechos', text: 'Brutos = físicos naturales (montaña). Institucionales = acuerdo humano (dinero, matrimonio). Funciones de status.' },
    { title: 'Cowan vs Baddeley', text: 'Cowan: Foco atencional explica diferencias. Baddeley: 4 componentes (Ejecutivo, Lazo, Agenda, Retén).' },
    { title: 'Experiencia Piaget', text: 'Física = propiedades objetos (abstracción simple). Lógico-matemática = relaciones entre acciones (abstracción reflexiva). Esta última es clave.' },
    { title: 'Wason y Contenido', text: 'Razonamos mejor con contenido social/familiar. Sesgo de emparejamiento: elegir E y 4 para "Si E entonces 4".' },
    { title: 'Feedback en Exámenes', text: 'Las preguntas de Piaget suelen tener feedback detallado. Las respuestas a menudo están en tablas y cuadros del texto.' },
    { title: 'Distinciones Clave', text: 'Natural vs Cultural. Declarativo vs Procedimental. On-line vs Off-line. Subjetiva vs Objetiva. Individual vs Social.' },
    { title: 'Si dudas entre opciones', text: 'Piaget casi siempre prioriza la CONSTRUCCIÓN ACTIVA y el PROCESO sobre el resultado o la copia de la realidad.' },
    { title: 'Vygotski y Educación', text: '"La única buena enseñanza es la que se adelanta al desarrollo". El aprendizaje tira del desarrollo (ZDP).' },
    { title: 'Karmiloff-Smith', text: 'No hay módulos innatos (Fodor), sino modularización progresiva. Redescripción Representacional: lo implícito → explícito.' },
    { title: 'Sistemas Dinámicos', text: 'Variabilidad es información, no ruido. Autoorganización: orden emerge sin instrucciones. Desarrollo no lineal.' },
    { title: 'Técnicas Bebés', text: 'Habituación = discriminación. Imitación diferida = memoria explícita. Violación expectativas = conocimiento implícito.' }
];

// ============================================
// LOGROS (ACHIEVEMENTS)
// ============================================

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
        id: 'hundred_cards',
        title: 'Maestro del Conocimiento',
        description: 'Estudia 100 flashcards',
        icon: '👑',
        points: 300,
        condition: (stats) => stats.cardsStudied >= 100
    },
    {
        id: 'all_cards',
        title: 'Leyenda de la Psicología',
        description: 'Estudia todas las flashcards',
        icon: '🏆',
        points: 500,
        condition: (stats) => stats.cardsStudied >= 200
    },
    {
        id: 'perfect_card',
        title: 'Memoria Perfecta',
        description: 'Responde correctamente a la primera',
        icon: '✨',
        points: 25,
        condition: (stats) => stats.perfectAnswers >= 1
    },
    {
        id: 'ten_perfect',
        title: 'Racha Perfecta',
        description: '10 respuestas perfectas',
        icon: '🔥',
        points: 100,
        condition: (stats) => stats.perfectAnswers >= 10
    },
    {
        id: 'first_pomodoro',
        title: 'Primer Pomodoro',
        description: 'Completa tu primera sesión de concentración',
        icon: '🍅',
        points: 20,
        condition: (stats) => stats.pomodorosCompleted >= 1
    },
    {
        id: 'five_pomodoros',
        title: 'Concentración Sostenida',
        description: 'Completa 5 pomodoros',
        icon: '⏱️',
        points: 75,
        condition: (stats) => stats.pomodorosCompleted >= 5
    },
    {
        id: 'streak_3',
        title: 'Constancia',
        description: '3 días seguidos estudiando',
        icon: '🔥',
        points: 50,
        condition: (stats) => stats.streak >= 3
    },
    {
        id: 'streak_7',
        title: 'En Racha',
        description: '7 días seguidos estudiando',
        icon: '⚡',
        points: 150,
        condition: (stats) => stats.streak >= 7
    },
    {
        id: 'streak_30',
        title: 'Hábito Formado',
        description: '30 días seguidos estudiando',
        icon: '🌟',
        points: 500,
        condition: (stats) => stats.streak >= 30
    },
    {
        id: 'level_5',
        title: 'Ascenso',
        description: 'Alcanza el nivel 5',
        icon: '📈',
        points: 100,
        condition: (stats) => stats.level >= 5
    },
    {
        id: 'level_10',
        title: 'Élite',
        description: 'Alcanza el nivel 10',
        icon: '💎',
        points: 300,
        condition: (stats) => stats.level >= 10
    }
];

// ============================================
// CATEGORÍAS EXPANDIDAS
// ============================================

const CATEGORIES_DATA = {
    teorias: { name: 'Teorías Generales', icon: '🧠', color: 'purple', description: 'Enfoques teóricos y modelos generales del desarrollo' },
    piaget: { name: 'Jean Piaget', icon: '🔬', color: 'blue', description: 'Epistemología genética, constructivismo, estadios cognitivos' },
    vygotski: { name: 'Lev Vygotski', icon: '🤝', color: 'green', description: 'Sociogénesis, ZDP, mediación semiótica, internalización' },
    metodologia: { name: 'Metodología', icon: '📊', color: 'gray', description: 'Diseños de investigación, técnicas, validez' },
    conceptos: { name: 'Desarrollo Conceptual', icon: '💡', color: 'yellow', description: 'Categorización, conceptos, teorías de la teoría' },
    memoria: { name: 'Memoria y Funciones Ejecutivas', icon: '💾', color: 'red', description: 'Memoria operativa, estrategias, FE, inhibición' },
    lectura: { name: 'Lectura y Razonamiento', icon: '📖', color: 'indigo', description: 'Adquisición lectora, comprensión, lógica' },
    metacognicion: { name: 'Metacognición', icon: '🤔', color: 'pink', description: 'ToM, control cognitivo, epistemología' },
    social: { name: 'Conocimiento Social', icon: '🌍', color: 'teal', description: 'Hechos institucionales, economía, política' },
    moral: { name: 'Desarrollo Moral', icon: '⚖️', color: 'orange', description: 'Kohlberg, Piaget, Turiel, prosocialidad' }
};

// ============================================
// NIVELES EXPANDIDOS
// ============================================

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
    { level: 10, name: 'Leyenda de la Psicología', minPoints: 4500, icon: '👑' },
    { level: 11, name: 'Genio del Desarrollo', minPoints: 5500, icon: '🌟' },
    { level: 12, name: 'Sabio Inmortal', minPoints: 7000, icon: '☄️' }
];

// ============================================
// PREGUNTAS FRECUENTES DE EXAMEN
// ============================================

const EXAM_QUESTIONS_DATA = [
    {
        question: 'Según Case, ¿qué cambia con la edad en la memoria operativa?',
        answer: 'La EFICACIA del procesamiento. NO la capacidad total.',
        explanation: 'Case propone que ETP = EOP + ACP (constante). La eficacia operativa libera espacio en ACP.',
        frequency: 'Muy alta',
        year: '2022-2025'
    },
    {
        question: '¿Cuál es la diferencia entre categorías perceptivas y conceptos según Mandler?',
        answer: 'Los conceptos tienen formato DECLARATIVO/EXPLÍCITO; los perceptos son PROCEDIMENTALES/IMPLÍCITOS.',
        explanation: 'Concepto = puede declararse verbalmente. Percepto = conocimiento implícito de apariencia.',
        frequency: 'Muy alta',
        year: 'Pregunta fija'
    },
    {
        question: '¿Qué técnica se usa para estudiar la memoria en bebés desde los 2 meses?',
        answer: 'La IMITACIÓN DIFERIDA (o habituación).',
        explanation: 'Demuestra memoria declarativa explícita antes del lenguaje.',
        frequency: 'Alta',
        year: '2022-2024'
    },
    {
        question: 'Un niño dice que es peor romper 5 tazas sin querer que 1 queriendo. ¿Qué tipo de responsabilidad es?',
        answer: 'Responsabilidad OBJETIVA.',
        explanation: 'Juzga por resultado material. Característico de moral heterónoma/realismo moral.',
        frequency: 'Muy alta',
        year: '2022-2025'
    },
    {
        question: 'En la lectura, ¿qué etapa reconoce las palabras como dibujos o logos?',
        answer: 'Etapa LOGOGRÁFICA.',
        explanation: 'Primera etapa según Frith. Reconocimiento visual global, no fonológico.',
        frequency: 'Alta',
        year: '2022-2024'
    },
    {
        question: '¿Qué crítica se le hace a Kohlberg sobre el estadio Postconvencional?',
        answer: 'Que es ESCASO en adultos y tiene sesgo cultural occidental.',
        explanation: 'Muy pocos adultos alcanzan el nivel postconvencional (principios éticos universales).',
        frequency: 'Media',
        year: '2022-2023'
    },
    {
        question: 'Según Vygotski, ¿cuál es la dirección del desarrollo del lenguaje?',
        answer: 'Social → Egocéntrico → Interior.',
        explanation: 'Vygotski va de FUERA (social) a DENTRO (interior). Opuesto a Piaget.',
        frequency: 'Alta',
        year: '2022-2025'
    },
    {
        question: '¿Qué es un "déficit de utilización" en estrategias de memoria?',
        answer: 'El niño usa la estrategia, pero NO MEJORA su rendimiento.',
        explanation: 'La estrategia tiene alto coste cognitivo y consume recursos.',
        frequency: 'Alta',
        year: '2022-2024'
    },
    {
        question: 'Según Piaget, el conflicto cognitivo es...',
        answer: 'El MOTOR del cambio (necesario para la equilibración).',
        explanation: 'El desequilibrio entre asimilación y acomodación impulsa el desarrollo.',
        frequency: 'Alta',
        year: '2022-2025'
    },
    {
        question: '¿En qué consisten los diseños secuenciales?',
        answer: 'Combinan transversales y longitudinales para controlar el EFECTO DE COHORTE.',
        explanation: 'Permiten separar efectos de edad, cohorte y momento de medida.',
        frequency: 'Muy alta',
        year: '2022-2025'
    }
];

// ============================================
// EXPORTAR
// ============================================
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
        TECHNIQUES_DATA,
        TIPS_DATA,
        EXAM_QUESTIONS_DATA
    };
}
