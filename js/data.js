/**
 * ============================================
 * DATA.JS - Datos de la aplicación
 * Psicología del Desarrollo II - Simo Pro
 * ============================================
 * 
 * Contiene:
 * - Flashcards (90+ tarjetas)
 * - Logros desbloqueables
 * - Categorías y temas
 */

// ============================================
// FLASHCARDS - 90+ tarjetas de estudio
// ============================================

const FLASHCARDS_DATA = [
    // === TEORÍAS DEL DESARROLLO ===
    {
        id: 1,
        category: 'teorias',
        question: '¿Qué es el desarrollo humano según la Psicología del Desarrollo?',
        answer: 'Es el conjunto de cambios cualitativos y cuantitativos que experimenta el ser humano a lo largo de su vida, incluyendo aspectos biológicos, cognitivos, emocionales y sociales.',
        difficulty: 'easy',
        tags: ['concepto', 'definicion']
    },
    {
        id: 2,
        category: 'teorias',
        question: '¿Cuáles son las principales dimensiones del desarrollo humano?',
        answer: '1. Físico-motor\n2. Cognitivo-intelectual\n3. Socio-emocional\n4. Moral\n5. Del lenguaje',
        difficulty: 'easy',
        tags: ['dimensiones', 'aspectos']
    },
    {
        id: 3,
        category: 'teorias',
        question: '¿Qué debate existe entre continuidad vs. discontinuidad en el desarrollo?',
        answer: 'La continuidad sostiene que el desarrollo es gradual y acumulativo. La discontinuidad propone etapas cualitativamente distintas con cambios abruptos.',
        difficulty: 'medium',
        tags: ['debate', 'continuidad', 'etapas']
    },
    {
        id: 4,
        category: 'teorias',
        question: '¿Qué es la maduración en el contexto del desarrollo?',
        answer: 'Es el desarrollo de las funciones y estructuras corporales según un programa heredado. Es el resultado de la herencia biológica y ocurre independientemente de la práctica o ejercicio.',
        difficulty: 'medium',
        tags: ['maduracion', 'herencia', 'biologia']
    },
    {
        id: 5,
        category: 'teorias',
        question: '¿Qué es el constructivismo en Psicología del Desarrollo?',
        answer: 'Teoría que sostiene que el conocimiento se construye activamente por el sujeto a través de su interacción con el entorno, no se recibe pasivamente.',
        difficulty: 'medium',
        tags: ['constructivismo', 'piaget', 'conocimiento']
    },
    
    // === PIAGET ===
    {
        id: 6,
        category: 'piaget',
        question: '¿Quién fue Jean Piaget y qué teoría desarrolló?',
        answer: 'Psicólogo suizo (1896-1980) que desarrolló la teoría constructivista del desarrollo cognitivo, proponiendo que los niños construyen activamente su conocimiento.',
        difficulty: 'easy',
        tags: ['piaget', 'biografia', 'teoria']
    },
    {
        id: 7,
        category: 'piaget',
        question: '¿Cuáles son los cuatro estadios del desarrollo cognitivo según Piaget?',
        answer: '1. Sensoriomotor (0-2 años)\n2. Preoperacional (2-7 años)\n3. Operaciones concretas (7-11 años)\n4. Operaciones formales (11+ años)',
        difficulty: 'easy',
        tags: ['piaget', 'estadios', 'etapas']
    },
    {
        id: 8,
        category: 'piaget',
        question: '¿Qué caracteriza el estadio sensoriomotor de Piaget?',
        answer: 'El bebé conoce el mundo mediante sensaciones y acciones motoras. Desarrolla la permanencia del objeto y pasa de reflejos a acciones intencionales.',
        difficulty: 'medium',
        tags: ['piaget', 'sensoriomotor', 'bebe']
    },
    {
        id: 9,
        category: 'piaget',
        question: '¿Qué es la permanencia del objeto según Piaget?',
        answer: 'Es la comprensión de que los objetos continúan existiendo incluso cuando no se pueden ver, oír o tocar. Se desarrolla al final del estadio sensoriomotor.',
        difficulty: 'medium',
        tags: ['piaget', 'permanencia', 'objeto']
    },
    {
        id: 10,
        category: 'piaget',
        question: '¿Qué es el egocentrismo en el estadio preoperacional?',
        answer: 'Dificultad del niño para ver las cosas desde la perspectiva de otra persona. Solo puede ver el mundo desde su propio punto de vista.',
        difficulty: 'medium',
        tags: ['piaget', 'egocentrismo', 'preoperacional']
    },
    {
        id: 11,
        category: 'piaget',
        question: '¿Qué es la centración en Piaget?',
        answer: 'Tendencia del niño preoperacional a centrarse en una sola característica o dimensión de un objeto o situación, ignorando otras.',
        difficulty: 'medium',
        tags: ['piaget', 'centracion', 'preoperacional']
    },
    {
        id: 12,
        category: 'piaget',
        question: '¿Qué es la conservación según Piaget?',
        answer: 'Comprensión de que ciertas propiedades de los objetos (cantidad, masa, volumen) permanecen constantes a pesar de los cambios en su apariencia.',
        difficulty: 'medium',
        tags: ['piaget', 'conservacion', 'operaciones']
    },
    {
        id: 13,
        category: 'piaget',
        question: '¿Cuándo se desarrolla la conservación según Piaget?',
        answer: 'Durante el estadio de operaciones concretas (7-11 años), cuando el niño adquiere la capacidad de operaciones lógicas reversibles.',
        difficulty: 'medium',
        tags: ['piaget', 'conservacion', 'operaciones']
    },
    {
        id: 14,
        category: 'piaget',
        question: '¿Qué son las operaciones concretas?',
        answer: 'Pensamiento lógico aplicado a objetos y situaciones concretas y tangibles. El niño puede clasificar, ordenar y comprender relaciones causales.',
        difficulty: 'medium',
        tags: ['piaget', 'operaciones', 'concretas']
    },
    {
        id: 15,
        category: 'piaget',
        question: '¿Qué caracteriza el estadio de operaciones formales?',
        answer: 'Capacidad de pensamiento abstracto, hipotético-deductivo, razonamiento proposicional y consideración de múltiples variables simultáneamente.',
        difficulty: 'medium',
        tags: ['piaget', 'formales', 'abstracto']
    },
    {
        id: 16,
        category: 'piaget',
        question: '¿Qué es la asimilación en Piaget?',
        answer: 'Proceso por el cual se incorpora información nueva a esquemas mentales ya existentes, interpretando la nueva información según conocimientos previos.',
        difficulty: 'medium',
        tags: ['piaget', 'asimilacion', 'esquemas']
    },
    {
        id: 17,
        category: 'piaget',
        question: '¿Qué es la acomodación en Piaget?',
        answer: 'Proceso de modificación de los esquemas mentales existentes para incorporar nueva información que no encaja en los esquemas actuales.',
        difficulty: 'medium',
        tags: ['piaget', 'acomodacion', 'esquemas']
    },
    {
        id: 18,
        category: 'piaget',
        question: '¿Qué es el equilibrio según Piaget?',
        answer: 'Estado de balance cognitivo donde los esquemas existentes pueden explicar la experiencia. El desequilibrio motiva el desarrollo cognitivo.',
        difficulty: 'hard',
        tags: ['piaget', 'equilibrio', 'desequilibrio']
    },
    {
        id: 19,
        category: 'piaget',
        question: '¿Qué son los esquemas en la teoría de Piaget?',
        answer: 'Estructuras cognitivas organizadas que guían el comportamiento y permiten organizar el conocimiento. Pueden ser motoras, simbólicas o operacionales.',
        difficulty: 'medium',
        tags: ['piaget', 'esquemas', 'estructuras']
    },
    {
        id: 20,
        category: 'piaget',
        question: '¿Qué críticas recibió la teoría de Piaget?',
        answer: 'Subestimación de las capacidades infantiles, etapas no tan rígidas, influencia cultural ignorada, métodos de investigación cuestionados.',
        difficulty: 'hard',
        tags: ['piaget', 'criticas', 'debate']
    },
    
    // === VYGOTSKY ===
    {
        id: 21,
        category: 'vygotsky',
        question: '¿Quién fue Lev Vygotsky y qué teoría desarrolló?',
        answer: 'Psicólogo ruso (1896-1934) que desarrolló la teoría sociocultural del desarrollo cognitivo, enfatizando el papel del contexto social y el lenguaje.',
        difficulty: 'easy',
        tags: ['vygotsky', 'biografia', 'teoria']
    },
    {
        id: 22,
        category: 'vygotsky',
        question: '¿Qué es la Zona de Desarrollo Próximo (ZDP) según Vygotsky?',
        answer: 'Distancia entre lo que el niño puede hacer solo actualmente y lo que puede hacer con la ayuda de un adulto o compañero más capaz.',
        difficulty: 'easy',
        tags: ['vygotsky', 'zdp', 'zona']
    },
    {
        id: 23,
        category: 'vygotsky',
        question: '¿Qué es el andamiaje según Vygotsky?',
        answer: 'Apoyo temporal proporcionado por un adulto o experto para ayudar al niño a realizar una tarea que no podría hacer solo, ajustándose gradualmente.',
        difficulty: 'medium',
        tags: ['vygotsky', 'andamiaje', 'apoyo']
    },
    {
        id: 24,
        category: 'vygotsky',
        question: '¿Cuál es el papel del lenguaje según Vygotsky?',
        answer: 'El lenguaje es fundamental para el desarrollo cognitivo. Pasa de ser social (comunicación) a egocéntrico (pensamiento) y finalmente inner speech (pensamiento interno).',
        difficulty: 'medium',
        tags: ['vygotsky', 'lenguaje', 'pensamiento']
    },
    {
        id: 25,
        category: 'vygotsky',
        question: '¿Qué es el aprendizaje como construcción social?',
        answer: 'El conocimiento se construye primero en el plano social (interpsicológico) y luego se internaliza en el plano individual (intrapsicológico).',
        difficulty: 'medium',
        tags: ['vygotsky', 'aprendizaje', 'social']
    },
    {
        id: 26,
        category: 'vygotsky',
        question: '¿Qué diferencia hay entre Piaget y Vygotsky sobre el aprendizaje y desarrollo?',
        answer: 'Piaget: desarrollo precede al aprendizaje. Vygotsky: aprendizaje precede al desarrollo (aprendizaje en ZDP promueve desarrollo).',
        difficulty: 'hard',
        tags: ['vygotsky', 'piaget', 'comparacion']
    },
    {
        id: 27,
        category: 'vygotsky',
        question: '¿Qué es el "otro significativo" en Vygotsky?',
        answer: 'Persona que proporciona andamiaje y guía el aprendizaje del niño en la ZDP, típicamente padres, maestros o compañeros más capaces.',
        difficulty: 'medium',
        tags: ['vygotsky', 'otro', 'significativo']
    },
    {
        id: 28,
        category: 'vygotsky',
        question: '¿Qué son las funciones mentales superiores según Vygotsky?',
        answer: 'Procesos cognitivos complejos (atención voluntaria, memoria lógica, conceptos, razonamiento) que se desarrollan mediante la mediación social y cultural.',
        difficulty: 'hard',
        tags: ['vygotsky', 'funciones', 'superiores']
    },
    
    // === ERIKSON ===
    {
        id: 29,
        category: 'erikson',
        question: '¿Quién fue Erik Erikson y qué teoría desarrolló?',
        answer: 'Psicoanalista germano-estadounidense (1902-1994) que desarrolló la teoría psicosocial con 8 etapas del desarrollo a lo largo de toda la vida.',
        difficulty: 'easy',
        tags: ['erikson', 'biografia', 'teoria']
    },
    {
        id: 30,
        category: 'erikson',
        question: '¿Cuáles son las 8 etapas del desarrollo psicosocial de Erikson?',
        answer: '1. Confianza vs. Desconfianza\n2. Autonomía vs. Vergüenza\n3. Iniciativa vs. Culpa\n4. Industria vs. Inferioridad\n5. Identidad vs. Confusión\n6. Intimidad vs. Aislamiento\n7. Generatividad vs. Estancamiento\n8. Integridad vs. Desesperación',
        difficulty: 'medium',
        tags: ['erikson', 'etapas', 'psicosocial']
    },
    {
        id: 31,
        category: 'erikson',
        question: '¿Qué ocurre en la etapa de Confianza vs. Desconfianza?',
        answer: '(0-1 año) El bebé desarrolla confianza básica si sus necesidades son satisfechas consistentemente por los cuidadores.',
        difficulty: 'medium',
        tags: ['erikson', 'confianza', 'bebe']
    },
    {
        id: 32,
        category: 'erikson',
        question: '¿Qué ocurre en la etapa de Identidad vs. Confusión de roles?',
        answer: '(Adolescencia) El joven explora quién es, sus valores y metas. Crisis de identidad: exploración y compromiso con una identidad.',
        difficulty: 'medium',
        tags: ['erikson', 'identidad', 'adolescencia']
    },
    {
        id: 33,
        category: 'erikson',
        question: '¿Qué es la crisis en cada etapa de Erikson?',
        answer: 'Conflicto entre dos fuerzas opuestas que debe resolverse. El resultado positivo fortalece el ego; el negativo debilita el desarrollo.',
        difficulty: 'medium',
        tags: ['erikson', 'crisis', 'conflicto']
    },
    {
        id: 34,
        category: 'erikson',
        question: '¿Qué virtud se desarrolla en la etapa de Industria vs. Inferioridad?',
        answer: 'La COMPETENCIA. El niño desarrolla sentido de logro y competencia a través del trabajo y la comparación con pares.',
        difficulty: 'medium',
        tags: ['erikson', 'industria', 'competencia']
    },
    {
        id: 35,
        category: 'erikson',
        question: '¿Qué es la moratoria psicosocial según Erikson?',
        answer: 'Período de exploración activa de diferentes identidades sin compromiso inmediato, típico de la adolescencia.',
        difficulty: 'hard',
        tags: ['erikson', 'moratoria', 'identidad']
    },
    
    // === KOHLBERG ===
    {
        id: 36,
        category: 'kohlberg',
        question: '¿Quién fue Lawrence Kohlberg y qué teoría desarrolló?',
        answer: 'Psicólogo estadounidense (1927-1987) que desarrolló la teoría del desarrollo moral en 3 niveles con 2 etapas cada uno.',
        difficulty: 'easy',
        tags: ['kohlberg', 'biografia', 'teoria']
    },
    {
        id: 37,
        category: 'kohlberg',
        question: '¿Cuáles son los 3 niveles del desarrollo moral de Kohlberg?',
        answer: '1. Preconvencional (obediencia e interés propio)\n2. Convencional (conformidad y ley y orden)\n3. Postconvencional (contrato social y principios universales)',
        difficulty: 'easy',
        tags: ['kohlberg', 'niveles', 'moral']
    },
    {
        id: 38,
        category: 'kohlberg',
        question: '¿Qué es el dilema de Heinz en la teoría de Kohlberg?',
        answer: 'Escenario hipotético donde Heinz debe decidir si robar medicamentos para salvar a su esposa. Usado para evaluar el razonamiento moral.',
        difficulty: 'medium',
        tags: ['kohlberg', 'heinz', 'dilema']
    },
    {
        id: 39,
        category: 'kohlberg',
        question: '¿Qué caracteriza el nivel preconvencional de Kohlberg?',
        answer: 'Moral basada en consecuencias externas: castigo/obediencia (etapa 1) y intercambio justo/interés propio (etapa 2).',
        difficulty: 'medium',
        tags: ['kohlberg', 'preconvencional', 'nivel']
    },
    {
        id: 40,
        category: 'kohlberg',
        question: '¿Qué es el razonamiento moral postconvencional?',
        answer: 'Moral basada en principios abstractos: contratos sociales mutuos (etapa 5) y principios éticos universales (etapa 6).',
        difficulty: 'hard',
        tags: ['kohlberg', 'postconvencional', 'principios']
    },
    {
        id: 41,
        category: 'kohlberg',
        question: '¿Qué críticas recibió la teoría de Kohlberg?',
        answer: 'Sesgo cultural occidental, énfasis en justicia ignorando cuidado (Gilligan), no predice comportamiento moral, etapa 6 poco comprobada.',
        difficulty: 'hard',
        tags: ['kohlberg', 'criticas', 'gilligan']
    },
    
    // === BOWLBY & AINSWORTH ===
    {
        id: 42,
        category: 'bowlby',
        question: '¿Quién fue John Bowlby y qué teoría desarrolló?',
        answer: 'Psiquiatra británico (1907-1990) que desarrolló la teoría del apego, explicando el vínculo emocional entre el bebé y su cuidador.',
        difficulty: 'easy',
        tags: ['bowlby', 'biografia', 'apego']
    },
    {
        id: 43,
        category: 'bowlby',
        question: '¿Qué es el apego según Bowlby?',
        answer: 'Vínculo emocional duradero entre el bebé y su figura de apego (típicamente la madre), con función adaptativa de supervivencia.',
        difficulty: 'easy',
        tags: ['bowlby', 'apego', 'definicion']
    },
    {
        id: 44,
        category: 'bowlby',
        question: '¿Cuáles son las 4 fases del desarrollo del apego según Bowlby?',
        answer: '1. Pre-apego (0-2 meses)\n2. Apego en desarrollo (2-7 meses)\n3. Apego específico claro (7-24 meses)\n4. Apego recíproco (24+ meses)',
        difficulty: 'medium',
        tags: ['bowlby', 'fases', 'desarrollo']
    },
    {
        id: 45,
        category: 'bowlby',
        question: '¿Qué es la base segura en la teoría del apego?',
        answer: 'El cuidador de apego proporciona seguridad al niño, permitiéndole explorar el entorno con confianza y regresar cuando necesita consuelo.',
        difficulty: 'medium',
        tags: ['bowlby', 'base', 'segura']
    },
    {
        id: 46,
        category: 'bowlby',
        question: '¿Quién fue Mary Ainsworth y qué aportó a la teoría del apego?',
        answer: 'Psicóloga estadounidense (1913-1999) que desarrolló la "Situación Extraña" para clasificar los estilos de apego.',
        difficulty: 'easy',
        tags: ['ainsworth', 'biografia', 'situacion']
    },
    {
        id: 47,
        category: 'bowlby',
        question: '¿Qué es la Situación Extraña de Ainsworth?',
        answer: 'Procedimiento experimental de 8 episodios para observar el apego madre-bebé mediante separaciones y reuniones en un laboratorio.',
        difficulty: 'medium',
        tags: ['ainsworth', 'situacion', 'extraña']
    },
    {
        id: 48,
        category: 'bowlby',
        question: '¿Cuáles son los 3 estilos de apego principales de Ainsworth?',
        answer: '1. Seguro: explora, se angustia al separarse, se calma al reunirse\n2. Evitativo: evita contacto, poca angustia\n3. Ambivalente/Resistente: muy angustiado, difícil de calmar',
        difficulty: 'medium',
        tags: ['ainsworth', 'estilos', 'apego']
    },
    {
        id: 49,
        category: 'bowlby',
        question: '¿Qué es el apego desorganizado?',
        answer: 'Estilo de apego añadido por Main y Solomon. El niño muestra comportamientos contradictorios, congelamiento o desorientación ante el cuidador.',
        difficulty: 'hard',
        tags: ['bowlby', 'desorganizado', 'main']
    },
    {
        id: 50,
        category: 'bowlby',
        question: '¿Qué factores influyen en el tipo de apego?',
        answer: 'Sensibilidad y responsividad del cuidador, temperamento del bebé, contexto familiar, experiencias tempranas de separación.',
        difficulty: 'medium',
        tags: ['bowlby', 'factores', 'influencia']
    },
    
    // === DESARROLLO FÍSICO Y MOTOR ===
    {
        id: 51,
        category: 'teorias',
        question: '¿Qué es el principio cefalocaudal del desarrollo motor?',
        answer: 'El desarrollo ocurre de la cabeza hacia los pies: primero se controla la cabeza, luego el tronco y finalmente las piernas.',
        difficulty: 'easy',
        tags: ['motor', 'cefalocaudal', 'desarrollo']
    },
    {
        id: 52,
        category: 'teorias',
        question: '¿Qué es el principio proximodistal del desarrollo motor?',
        answer: 'El desarrollo ocurre del centro hacia la periferia: primero se controlan los músculos del tronco y luego las extremidades.',
        difficulty: 'easy',
        tags: ['motor', 'proximodistal', 'desarrollo']
    },
    {
        id: 53,
        category: 'teorias',
        question: '¿Cuándo ocurre el "spurt" de crecimiento puberal?',
        answer: 'Tipicamente entre los 10-14 años en niñas y 12-16 años en niños, con aceleración del crecimiento físico y maduración sexual.',
        difficulty: 'medium',
        tags: ['pubertad', 'crecimiento', 'spurt']
    },
    
    // === DESARROLLO DEL LENGUAJE ===
    {
        id: 54,
        category: 'teorias',
        question: '¿Cuáles son las etapas del desarrollo del lenguaje?',
        answer: '1. Balbuceo (6-10 meses)\n2. Primera palabra (10-13 meses)\n3. Primeras frases (18-24 meses)\n4. Explosión vocabular (18-24 meses)\n5. Frases complejas (2-3 años)',
        difficulty: 'medium',
        tags: ['lenguaje', 'etapas', 'desarrollo']
    },
    {
        id: 55,
        category: 'teorias',
        question: '¿Qué es el balbuceo canónico?',
        answer: 'Etapa del balbuceo (6-10 meses) donde el bebé produce sílabas repetidas como "bababa", "dadada", preparando la articulación.',
        difficulty: 'medium',
        tags: ['lenguaje', 'balbuceo', 'canonico']
    },
    {
        id: 56,
        category: 'teorias',
        question: '¿Qué es la holofrase?',
        answer: 'Primera palabra del bebé (10-13 meses) que expresa una idea completa. Ejemplo: "agua" puede significar "quiero agua".',
        difficulty: 'medium',
        tags: ['lenguaje', 'holofrase', 'primera']
    },
    {
        id: 57,
        category: 'teorias',
        question: '¿Qué es la telegraficidad en el lenguaje infantil?',
        answer: 'Frases del niño pequeño (2-3 años) que omiten palabras funcionales, dejando solo palabras de contenido. Ej: "mamá leche"',
        difficulty: 'medium',
        tags: ['lenguaje', 'telegrafico', 'frases']
    },
    {
        id: 58,
        category: 'teorias',
        question: '¿Qué es el sobreextension en el lenguaje infantil?',
        answer: 'Uso de una palabra para referirse a más objetos de los que corresponde. Ej: llamar "perro" a todos los animales de 4 patas.',
        difficulty: 'medium',
        tags: ['lenguaje', 'sobreextension', 'semantica']
    },
    
    // === DESARROLLO SOCIO-EMOCIONAL ===
    {
        id: 59,
        category: 'teorias',
        question: '¿Qué es la teoría de la mente?',
        answer: 'Capacidad de comprender que otros tienen creencias, deseos y pensamientos diferentes a los propios. Se desarrolla alrededor de los 4 años.',
        difficulty: 'medium',
        tags: ['mente', 'teoria', 'social']
    },
    {
        id: 60,
        category: 'teorias',
        question: '¿Qué es la tarea de falsa creencia (Sally-Anne)?',
        answer: 'Test para evaluar teoría de la mente. Sally pone una pelota, Anne la mueve mientras Sally no ve. ¿Dónde buscará Sally?',
        difficulty: 'medium',
        tags: ['mente', 'falsa', 'creencia']
    },
    {
        id: 61,
        category: 'teorias',
        question: '¿Qué es la empatía?',
        answer: 'Capacidad de comprender y compartir los sentimientos de otra persona, involucrando tanto cognición como emoción.',
        difficulty: 'easy',
        tags: ['empatia', 'emocion', 'social']
    },
    {
        id: 62,
        category: 'teorias',
        question: '¿Qué es el juego simbólico?',
        answer: 'Tipo de juego donde el niño usa objetos para representar otros (un palo es un caballo) o asume roles (jugar a ser mamá).',
        difficulty: 'easy',
        tags: ['juego', 'simbolico', 'preoperacional']
    },
    {
        id: 63,
        category: 'teorias',
        question: '¿Qué es el juego paralelo según Parten?',
        answer: 'Tipo de juego donde niños juegan cerca con juguetes similares pero sin interacción directa. Típico de 2-3 años.',
        difficulty: 'medium',
        tags: ['juego', 'paralelo', 'parten']
    },
    {
        id: 64,
        category: 'teorias',
        question: '¿Qué es el juego cooperativo según Parten?',
        answer: 'Tipo de juego donde los niños juegan juntos con metas compartidas, organizándose y asumiendo roles. Típico después de 4 años.',
        difficulty: 'medium',
        tags: ['juego', 'cooperativo', 'parten']
    },
    
    // === METODOLOGÍA ===
    {
        id: 65,
        category: 'metodologia',
        question: '¿Qué es el método longitudinal en Psicología del Desarrollo?',
        answer: 'Estudio que sigue a los mismos participantes a lo largo del tiempo, midiéndolos repetidamente en diferentes edades.',
        difficulty: 'medium',
        tags: ['metodologia', 'longitudinal', 'estudio']
    },
    {
        id: 66,
        category: 'metodologia',
        question: '¿Qué es el método transversal en Psicología del Desarrollo?',
        answer: 'Estudio que compara diferentes grupos de edad en un único momento temporal (corte transversal).',
        difficulty: 'medium',
        tags: ['metodologia', 'transversal', 'estudio']
    },
    {
        id: 67,
        category: 'metodologia',
        question: '¿Qué es el método secuencial en Psicología del Desarrollo?',
        answer: 'Combina longitudinal y transversal: sigue cohortes diferentes a lo largo del tiempo, permitiendo separar efectos de edad, cohorte y tiempo.',
        difficulty: 'hard',
        tags: ['metodologia', 'secuencial', 'estudio']
    },
    {
        id: 68,
        category: 'metodologia',
        question: '¿Qué es el efecto de cohorte?',
        answer: 'Diferencias entre grupos de edad debidas a experiencias históricas/sociales diferentes, no al desarrollo real.',
        difficulty: 'hard',
        tags: ['metodologia', 'cohorte', 'efecto']
    },
    {
        id: 69,
        category: 'metodologia',
        question: '¿Qué es el efecto de práctica en estudios longitudinales?',
        answer: 'Mejora en el rendimiento debida a la familiarización con las pruebas al repetirlas, no al desarrollo real.',
        difficulty: 'medium',
        tags: ['metodologia', 'practica', 'longitudinal']
    },
    {
        id: 70,
        category: 'metodologia',
        question: '¿Qué es el método observacional en Psicología del Desarrollo?',
        answer: 'Registro sistemático del comportamiento en contextos naturales o controlados, sin manipulación experimental.',
        difficulty: 'easy',
        tags: ['metodologia', 'observacion', 'metodo']
    },
    {
        id: 71,
        category: 'metodologia',
        question: '¿Qué es el método experimental en Psicología del Desarrollo?',
        answer: 'Manipulación controlada de variables para establecer relaciones causales, con grupo experimental y control.',
        difficulty: 'medium',
        tags: ['metodologia', 'experimental', 'metodo']
    },
    {
        id: 72,
        category: 'metodologia',
        question: '¿Qué es el método clínico de Piaget?',
        answer: 'Entrevista semiestructurada donde el investigador adapta las preguntas según las respuestas del niño, explorando su razonamiento.',
        difficulty: 'medium',
        tags: ['metodologia', 'clinico', 'piaget']
    },
    
    // === DESARROLLO PRENATAL ===
    {
        id: 73,
        category: 'teorias',
        question: '¿Cuáles son los tres períodos del desarrollo prenatal?',
        answer: '1. Germinal (0-2 semanas): zigoto, implantación\n2. Embrionario (3-8 semanas): formación de órganos\n3. Fetal (9 semanas-nacimiento): crecimiento y maduración',
        difficulty: 'medium',
        tags: ['prenatal', 'periodos', 'desarrollo']
    },
    {
        id: 74,
        category: 'teorias',
        question: '¿Qué es el período crítico en el desarrollo prenatal?',
        answer: 'Momento en que una estructura o función es especialmente vulnerable a daños por teratógenos. Daño irreversible si ocurre.',
        difficulty: 'medium',
        tags: ['prenatal', 'critico', 'periodo']
    },
    {
        id: 75,
        category: 'teorias',
        question: '¿Qué son los teratógenos?',
        answer: 'Agentes ambientales que pueden causar malformaciones o daño al feto: drogas, alcohol, radiación, infecciones, estrés materno.',
        difficulty: 'easy',
        tags: ['prenatal', 'teratogenos', 'daño']
    },
    {
        id: 76,
        category: 'teorias',
        question: '¿Qué es el Síndrome de Alcohol Fetal (SAF)?',
        answer: 'Conjunto de alteraciones causadas por consumo de alcohol durante el embarazo: retraso mental, malformaciones faciales, problemas de crecimiento.',
        difficulty: 'medium',
        tags: ['prenatal', 'alcohol', 'teratogeno']
    },
    
    // === DESARROLLO EN LA ADOLESCENCIA ===
    {
        id: 77,
        category: 'teorias',
        question: '¿Qué cambios ocurren en el cerebro durante la adolescencia?',
        answer: 'Poda sináptica (eliminación de conexiones no usadas), mielinización continua, desarrollo del córtex prefrontal (incompleto hasta los 25).',
        difficulty: 'medium',
        tags: ['adolescencia', 'cerebro', 'neuro']
    },
    {
        id: 78,
        category: 'teorias',
        question: '¿Por qué los adolescentes muestran mayor toma de riesgos?',
        answer: 'El sistema límbico (emociones/recompensa) madura antes que el córtex prefrontal (control inhibidor), creando desbalance.',
        difficulty: 'medium',
        tags: ['adolescencia', 'riesgo', 'cerebro']
    },
    {
        id: 79,
        category: 'teorias',
        question: '¿Qué es la invención personal de Marcia?',
        answer: 'Componente de la identidad que implica desarrollar una imagen coherente y positiva de uno mismo en diferentes contextos.',
        difficulty: 'hard',
        tags: ['adolescencia', 'marcia', 'identidad']
    },
    {
        id: 80,
        category: 'teorias',
        question: '¿Cuáles son los 4 estados de identidad de Marcia?',
        answer: '1. Difusión: sin exploración ni compromiso\n2. Cierre: compromiso sin exploración\n3. Moratoria: exploración activa\n4. Logro: compromiso tras exploración',
        difficulty: 'hard',
        tags: ['adolescencia', 'marcia', 'estados']
    },
    
    // === DESARROLLO EN LA EDAD ADULTA ===
    {
        id: 81,
        category: 'teorias',
        question: '¿Qué es la crisis de los 40 según Levinson?',
        answer: 'Período de transición (40-45 años) donde se evalúan logros vs. sueños juveniles, pudiendo llevar a cambios importantes.',
        difficulty: 'medium',
        tags: ['adulto', 'levinson', 'crisis']
    },
    {
        id: 82,
        category: 'teorias',
        question: '¿Qué es la generatividad según Erikson?',
        answer: 'Preocupación por guiar y contribuir a la próxima generación, ya sea a través de la crianza, el trabajo o el servicio a la comunidad.',
        difficulty: 'medium',
        tags: ['adulto', 'erikson', 'generatividad']
    },
    {
        id: 83,
        category: 'teorias',
        question: '¿Qué es la menopausia?',
        answer: 'Cese de la menstruación (típicamente 45-55 años) marcando el fin de la fertilidad femenina, con cambios hormonales asociados.',
        difficulty: 'easy',
        tags: ['adulto', 'menopausia', 'transicion']
    },
    {
        id: 84,
        category: 'teorias',
        question: '¿Qué es la andropausia?',
        answer: 'Disminución gradual de testosterona en hombres mayores, con cambios menos abruptos y dramáticos que la menopausia.',
        difficulty: 'medium',
        tags: ['adulto', 'andropausia', 'transicion']
    },
    
    // === DESARROLLO EN LA VEJEZ ===
    {
        id: 85,
        category: 'teorias',
        question: '¿Qué es la plasticidad cerebral en la vejez?',
        answer: 'Capacidad del cerebro de adaptarse y formar nuevas conexiones a cualquier edad, permitiendo aprendizaje continuo.',
        difficulty: 'medium',
        tags: ['vejez', 'plasticidad', 'cerebro']
    },
    {
        id: 86,
        category: 'teorias',
        question: '¿Qué es la demencia?',
        answer: 'Síndrome caracterizado por deterioro significativo de la memoria y al menos otra función cognitiva, afectando la vida diaria.',
        difficulty: 'easy',
        tags: ['vejez', 'demencia', 'cognicion']
    },
    {
        id: 87,
        category: 'teorias',
        question: '¿Qué es el Alzheimer?',
        answer: 'Enfermedad neurodegenerativa más común, causada por depósitos de placas beta-amiloides y ovillos neurofibrilares de tau.',
        difficulty: 'medium',
        tags: ['vejez', 'alzheimer', 'demencia']
    },
    {
        id: 88,
        category: 'teorias',
        question: '¿Qué es la teoría de la desengagement (desvinculación)?',
        answer: 'Teoría que propone que el envejecimiento óptimo implica retirada mutua entre la persona mayor y la sociedad.',
        difficulty: 'medium',
        tags: ['vejez', 'desengagement', 'teoria']
    },
    {
        id: 89,
        category: 'teorias',
        question: '¿Qué es la teoría de la actividad en la vejez?',
        answer: 'Teoría que propone que el envejecimiento exitoso requiere mantener niveles altos de actividad y participación social.',
        difficulty: 'medium',
        tags: ['vejez', 'actividad', 'teoria']
    },
    {
        id: 90,
        category: 'teorias',
        question: '¿Cuál es la diferencia entre envejecimiento primario y secundario?',
        answer: 'Primario: cambios inevitables por el paso del tiempo. Secundario: cambios debidos a enfermedad, estilo de vida o factores ambientales.',
        difficulty: 'medium',
        tags: ['vejez', 'envejecimiento', 'tipos']
    }
];

// ============================================
// LOGROS - Sistema de gamificación
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
        id: 'all_cards',
        title: 'Maestro del Conocimiento',
        description: 'Estudia todas las flashcards al menos una vez',
        icon: '👑',
        points: 500,
        condition: (stats) => stats.cardsStudied >= 90
    },
    {
        id: 'perfect_card',
        title: 'Memoria Perfecta',
        description: 'Responde correctamente una flashcard en el primer intento',
        icon: '✨',
        points: 25,
        condition: (stats) => stats.perfectAnswers >= 1
    },
    {
        id: 'streak_3',
        title: 'Racha Caliente',
        description: 'Consigue 3 respuestas correctas seguidas',
        icon: '🔥',
        points: 30,
        condition: (stats) => stats.bestStreak >= 3
    },
    {
        id: 'streak_10',
        title: 'Imparable',
        description: 'Consigue 10 respuestas correctas seguidas',
        icon: '⚡',
        points: 100,
        condition: (stats) => stats.bestStreak >= 10
    },
    {
        id: 'first_pomodoro',
        title: 'Concentración Inicial',
        description: 'Completa tu primer pomodoro',
        icon: '🍅',
        points: 25,
        condition: (stats) => stats.pomodorosCompleted >= 1
    },
    {
        id: 'five_pomodoros',
        title: 'Productividad Total',
        description: 'Completa 5 pomodoros en un día',
        icon: '⏰',
        points: 100,
        condition: (stats) => stats.pomodorosCompleted >= 5
    },
    {
        id: 'level_2',
        title: 'Ascenso de Nivel',
        description: 'Alcanza el nivel 2',
        icon: '⭐',
        points: 50,
        condition: (stats) => stats.level >= 2
    },
    {
        id: 'level_5',
        title: 'Experto en Desarrollo',
        description: 'Alcanza el nivel 5',
        icon: '🏆',
        points: 200,
        condition: (stats) => stats.level >= 5
    },
    {
        id: 'daily_streak_3',
        title: 'Constancia',
        description: 'Estudia 3 días seguidos',
        icon: '📅',
        points: 75,
        condition: (stats) => stats.dailyStreak >= 3
    },
    {
        id: 'daily_streak_7',
        title: 'Hábito Formado',
        description: 'Estudia 7 días seguidos',
        icon: '💪',
        points: 200,
        condition: (stats) => stats.dailyStreak >= 7
    },
    {
        id: 'master_piaget',
        title: 'Experto en Piaget',
        description: 'Domina todas las flashcards de Piaget',
        icon: '🔬',
        points: 150,
        condition: (stats) => stats.masteredCategories && stats.masteredCategories.includes('piaget')
    },
    {
        id: 'master_vygotsky',
        title: 'Experto en Vygotsky',
        description: 'Domina todas las flashcards de Vygotsky',
        icon: '🤝',
        points: 100,
        condition: (stats) => stats.masteredCategories && stats.masteredCategories.includes('vygotsky')
    },
    {
        id: 'night_owl',
        title: 'Búho Nocturno',
        description: 'Estudia después de las 10 PM',
        icon: '🦉',
        points: 20,
        condition: (stats) => stats.nightStudy
    },
    {
        id: 'early_bird',
        title: 'Madrugador',
        description: 'Estudia antes de las 8 AM',
        icon: '🌅',
        points: 20,
        condition: (stats) => stats.earlyStudy
    },
    {
        id: 'speed_demon',
        title: 'Velocidad de Relámpago',
        description: 'Responde 5 flashcards en menos de 2 minutos',
        icon: '⚡',
        points: 50,
        condition: (stats) => stats.fastSession
    },
    {
        id: 'collector',
        title: 'Coleccionista',
        description: 'Desbloquea 5 logros diferentes',
        icon: '🎨',
        points: 75,
        condition: (stats) => stats.achievementsUnlocked >= 5
    },
    {
        id: 'legend',
        title: 'Leyenda de la Psicología',
        description: 'Desbloquea todos los logros',
        icon: '🌟',
        points: 1000,
        condition: (stats) => stats.achievementsUnlocked >= 15
    }
];

// ============================================
// CATEGORÍAS
// ============================================

const CATEGORIES_DATA = {
    teorias: { name: 'Teorías del Desarrollo', icon: '🧠', color: 'purple' },
    piaget: { name: 'Jean Piaget', icon: '🔬', color: 'blue' },
    vygotsky: { name: 'Lev Vygotsky', icon: '🤝', color: 'green' },
    erikson: { name: 'Erik Erikson', icon: '🎭', color: 'orange' },
    kohlberg: { name: 'Lawrence Kohlberg', icon: '⚖️', color: 'red' },
    bowlby: { name: 'Bowlby & Ainsworth', icon: '💕', color: 'pink' },
    metodologia: { name: 'Metodología', icon: '📊', color: 'gray' }
};

// ============================================
// NIVELES DEL SISTEMA
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
    { level: 10, name: 'Leyenda de la Psicología', minPoints: 4500, icon: '👑' }
];

// ============================================
// MNEMOTÉCNICOS
// ============================================

const MNEMONICS_DATA = [
    {
        id: 1,
        title: 'Estadios de Piaget',
        mnemonic: '"Señor, Prefiero Operar Con Formas"',
        explanation: 'Sensoriomotor - Preoperacional - Operaciones Concretas - Formales',
        category: 'piaget'
    },
    {
        id: 2,
        title: 'Etapas de Erikson',
        mnemonic: '"Cada Ave Indica Increíbles Intentos Grandes En Salidas"',
        explanation: 'Confianza - Autonomía - Iniciativa - Industria - Identidad - Intimidad - Generatividad - Integridad',
        category: 'erikson'
    },
    {
        id: 3,
        title: 'Niveles de Kohlberg',
        mnemonic: '"Prepara Café Postre"',
        explanation: 'Preconvencional - Convencional - Postconvencional',
        category: 'kohlberg'
    },
    {
        id: 4,
        title: 'Conceptos clave de Vygotsky',
        mnemonic: '"Zona de Andamiaje Social"',
        explanation: 'ZDP (Zona Desarrollo Próximo) - Andamiaje - Construcción Social',
        category: 'vygotsky'
    },
    {
        id: 5,
        title: 'Estilos de Apego',
        mnemonic: '"Seguro Evita Ambigüedad"',
        explanation: 'Seguro - Evitativo - Ambivalente/Resistente - Desorganizado',
        category: 'bowlby'
    }
];

// Exportar datos si es módulo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FLASHCARDS_DATA,
        ACHIEVEMENTS_DATA,
        CATEGORIES_DATA,
        LEVELS_DATA,
        MNEMONICS_DATA
    };
}
