/**
 * ============================================
 * CONTENT.JS - Renderizado de contenido estático
 * Psicología del Desarrollo II - Simo Pro
 * ============================================
 * 
 * Se encarga de renderizar las secciones informativas
 * usando los datos de DATA.JS
 */

const ContentRenderer = (function() {
    'use strict';
    
    // ============================================
    // RENDERIZADO GENERAL
    // ============================================
    
    function init() {
        console.log('📖 Inicializando renderizado de contenido...');
        renderExamAnalysis();
        renderConceptMaps();
        renderGlossary();
        renderAuthors();
        renderStages();
        renderMnemonics();
        renderMethodology();
        renderTips();
        renderStatistics();
    }
    
    // ============================================
    // SECCIONES ESPECÍFICAS
    // ============================================

    function renderStatistics() {
        const container = document.getElementById('estadisticas');
        if (!container) return;

        // Intentar obtener datos reales si ProgressManager existe
        let stats = {
            cardsStudied: 0,
            pomodorosCompleted: 0,
            totalStudyTime: 0,
            points: 0,
            level: 1,
            streak: 0,
            masteredCards: 0,
            totalCards: 0,
            progressPercent: 0
        };

        if (typeof ProgressManager !== 'undefined') {
            stats = ProgressManager.getStats();
        }

        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Estadísticas de Estudio 📈</h2>
                <p class="text-gray-600">Tu rendimiento detallado</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <span class="text-3xl mb-2 block">🎴</span>
                    <p class="text-2xl font-bold text-gray-900">${stats.cardsStudied}</p>
                    <p class="text-xs text-gray-500 uppercase tracking-wide">Tarjetas Repasadas</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <span class="text-3xl mb-2 block">🍅</span>
                    <p class="text-2xl font-bold text-gray-900">${stats.pomodorosCompleted}</p>
                    <p class="text-xs text-gray-500 uppercase tracking-wide">Pomodoros</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <span class="text-3xl mb-2 block">⏱️</span>
                    <p class="text-2xl font-bold text-gray-900">${Math.round(stats.totalStudyTime)}m</p>
                    <p class="text-xs text-gray-500 uppercase tracking-wide">Tiempo Total</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <span class="text-3xl mb-2 block">💎</span>
                    <p class="text-2xl font-bold text-gray-900">${stats.points}</p>
                    <p class="text-xs text-gray-500 uppercase tracking-wide">Puntos Totales</p>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 class="font-bold text-gray-900 mb-6 flex items-center">
                        <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-lg">📊</span>
                        Progreso del Temario
                    </h3>
                    
                    <div class="space-y-6">
                        <div>
                            <div class="flex justify-between text-sm mb-2">
                                <span class="text-gray-600">Total Dominado</span>
                                <span class="font-bold text-primary-600">${stats.progressPercent}%</span>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-3">
                                <div class="bg-primary-500 h-3 rounded-full transition-all duration-1000" style="width: ${stats.progressPercent}%"></div>
                            </div>
                            <p class="text-xs text-gray-400 mt-2 text-right">${stats.masteredCards} de ${stats.totalCards} tarjetas</p>
                        </div>
                        
                        <div class="pt-4 border-t border-gray-100">
                            <h4 class="text-sm font-bold text-gray-900 mb-3">Categorías Dominadas</h4>
                            <div class="flex flex-wrap gap-2">
                                ${stats.masteredCategories && stats.masteredCategories.length > 0 
                                    ? stats.masteredCategories.map(cat => 
                                        `<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium capitalize">✅ ${cat}</span>`
                                      ).join('')
                                    : '<p class="text-sm text-gray-500 italic">Aún no has dominado ninguna categoría. ¡Sigue estudiando!</p>'
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 class="font-bold text-gray-900 mb-6 flex items-center">
                        <span class="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mr-3 text-lg">🔥</span>
                        Constancia
                    </h3>
                    
                    <div class="flex items-center justify-center py-4">
                        <div class="text-center">
                            <p class="text-5xl font-bold text-orange-500 mb-2">${stats.streak}</p>
                            <p class="text-sm text-gray-600 uppercase tracking-wide font-medium">Días seguidos (Racha actual)</p>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-center p-4 bg-orange-50 rounded-xl">
                        <p class="text-sm text-orange-800">
                            <span class="font-bold">Mejor racha histórica:</span> ${stats.bestStreak} días
                        </p>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }
    
    function renderExamAnalysis() {
        const container = document.getElementById('analisis');
        if (!container || typeof EXAM_ANALYSIS_DATA === 'undefined') return;
        
        const data = EXAM_ANALYSIS_DATA;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Análisis del Examen 📊</h2>
                <p class="text-gray-600">Estrategia basada en patrones de exámenes anteriores</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6 mb-8">
                <div class="bg-blue-50 rounded-2xl p-6 text-center">
                    <p class="text-sm text-blue-600 font-bold uppercase mb-1">Preguntas</p>
                    <p class="text-4xl font-bold text-gray-900">${data.info.questions}</p>
                    <p class="text-sm text-gray-500">Tipo Test</p>
                </div>
                <div class="bg-green-50 rounded-2xl p-6 text-center">
                    <p class="text-sm text-green-600 font-bold uppercase mb-1">Para Aprobar</p>
                    <p class="text-4xl font-bold text-gray-900">${data.info.pass}</p>
                    <p class="text-sm text-gray-500">Netos</p>
                </div>
                <div class="bg-purple-50 rounded-2xl p-6 text-center">
                    <p class="text-sm text-purple-600 font-bold uppercase mb-1">Fuente</p>
                    <p class="text-lg font-bold text-gray-900 mt-2">${data.info.note}</p>
                </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="bg-gray-50 text-gray-600 text-xs uppercase font-semibold">
                            <tr>
                                <th class="px-6 py-4">Prioridad</th>
                                <th class="px-6 py-4">Tema</th>
                                <th class="px-6 py-4">Frecuencia</th>
                                <th class="px-6 py-4">Claves Tácticas</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            ${data.topics.map(topic => `
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                            ${topic.priority === 'ALTA' ? 'bg-red-100 text-red-800' : 
                                              topic.priority === 'MEDIA' ? 'bg-orange-100 text-orange-800' : 
                                              'bg-yellow-100 text-yellow-800'}">
                                            ${topic.priority}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4">
                                        <p class="font-semibold text-gray-900">${topic.topic}</p>
                                        <p class="text-xs text-gray-500">Caps: ${topic.chapters}</p>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-600">${topic.frequency}</td>
                                    <td class="px-6 py-4 text-sm text-gray-600 italic">${topic.tips}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    }
    
    function renderConceptMaps() {
        const container = document.getElementById('mapas');
        if (!container || typeof CONCEPT_MAPS_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Mapas Conceptuales 🗺️</h2>
                <p class="text-gray-600">Esquemas visuales para entender las relaciones</p>
            </div>
            
            <div class="space-y-8">
        `;
        
        CONCEPT_MAPS_DATA.forEach((map, index) => {
            html += `
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 class="text-xl font-bold text-primary-700 mb-4 flex items-center">
                        <span class="bg-primary-100 text-primary-600 rounded-lg p-2 mr-3 text-sm">#${index + 1}</span>
                        ${map.title}
                    </h3>
            `;
            
            if (map.nodes) {
                // Renderizado simple de nodos (tipo árbol)
                html += `<div class="flex flex-col md:flex-row justify-center gap-4 text-sm">`;
                // Simplificación visual para no usar librería de grafos compleja
                html += `
                    <div class="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <p class="font-bold text-center mb-2 border-b pb-2">Piaget (INDIVIDUAL)</p>
                        <ul class="space-y-2">
                            <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Motor: Equilibración</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Lenguaje: Egocéntrico → Social</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Aprendizaje: Sigue al desarrollo</li>
                        </ul>
                    </div>
                    <div class="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <p class="font-bold text-center mb-2 border-b pb-2">Vygotski (SOCIAL)</p>
                        <ul class="space-y-2">
                            <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Motor: Internalización</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Lenguaje: Social → Interior</li>
                            <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Aprendizaje: Tira del desarrollo</li>
                        </ul>
                    </div>
                </div>`;
            } else if (map.list) {
                html += `<ul class="grid md:grid-cols-2 gap-3">`;
                map.list.forEach(item => {
                    const [title, desc] = item.split(':');
                    html += `
                        <li class="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                            <span class="font-bold text-indigo-700">${title}:</span>
                            <span class="text-gray-700">${desc || ''}</span>
                        </li>
                    `;
                });
                html += `</ul>`;
            } else if (map.steps) {
                html += `<div class="relative">
                    <div class="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200"></div>
                    <div class="space-y-4">
                `;
                map.steps.forEach(step => {
                    html += `
                        <div class="relative pl-10">
                            <div class="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center font-bold text-primary-600 text-xs shadow-sm">
                                ${step.step}
                            </div>
                            <h4 class="font-bold text-gray-900">${step.name}</h4>
                            <p class="text-gray-600 text-sm">${step.desc}</p>
                        </div>
                    `;
                });
                html += `</div></div>`;
            }
            
            html += `</div>`;
        });
        
        html += `</div>`;
        container.innerHTML = html;
    }
    
    function renderGlossary() {
        const container = document.getElementById('glosario');
        if (!container || typeof GLOSSARY_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Glosario "Salva-Exámenes" 📖</h2>
                <p class="text-gray-600">Definiciones clave directas al grano</p>
            </div>
            
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        `;
        
        GLOSSARY_DATA.sort((a, b) => a.term.localeCompare(b.term)).forEach(item => {
            html += `
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-bold text-lg text-primary-700 group-hover:text-primary-600">${item.term}</h3>
                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">${item.author}</span>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">${item.def}</p>
                </div>
            `;
        });
        
        html += `</div>`;
        container.innerHTML = html;
    }
    
    function renderAuthors() {
        const container = document.getElementById('autores');
        if (!container || typeof AUTHORS_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Autores y sus "Hits" 👥</h2>
                <p class="text-gray-600">Quién es quién en Psicología del Desarrollo</p>
            </div>
            
            <div class="space-y-4 max-w-3xl mx-auto">
        `;
        
        AUTHORS_DATA.forEach(author => {
            html += `
                <div class="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                    <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 mr-4 shadow-md">
                        ${author.name.charAt(0)}
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-900 text-lg">${author.name}</h3>
                        <p class="text-gray-600">${author.desc}</p>
                    </div>
                </div>
            `;
        });
        
        html += `</div>`;
        container.innerHTML = html;
    }
    
    function renderStages() {
        const container = document.getElementById('estadios');
        if (!container || typeof STAGES_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Estadios del Desarrollo 🎯</h2>
                <p class="text-gray-600">Las etapas clave que debes memorizar</p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8">
        `;
        
        // Piaget
        const piaget = STAGES_DATA.piaget;
        html += `
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="bg-blue-600 p-4 text-white">
                    <h3 class="font-bold text-xl">${piaget.title}</h3>
                    <p class="text-blue-100 text-sm mt-1">Mnemónico: "${piaget.mnemonic}"</p>
                </div>
                <div class="p-6">
                    <div class="relative border-l-2 border-blue-200 ml-3 space-y-6">
                        ${piaget.stages.map((stage, idx) => `
                            <div class="relative pl-8">
                                <span class="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm"></span>
                                <h4 class="font-bold text-gray-900 flex items-center">
                                    ${stage.name} 
                                    <span class="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">${stage.age} años</span>
                                </h4>
                                <p class="text-sm text-gray-600 mt-1">${stage.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Kohlberg
        const kohlberg = STAGES_DATA.kohlberg;
        html += `
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="bg-purple-600 p-4 text-white">
                    <h3 class="font-bold text-xl">${kohlberg.title}</h3>
                    <p class="text-purple-100 text-sm mt-1">Mnemónico: "${kohlberg.mnemonic}"</p>
                </div>
                <div class="p-6">
                    <div class="relative border-l-2 border-purple-200 ml-3 space-y-6">
                        ${kohlberg.stages.map((stage, idx) => `
                            <div class="relative pl-8">
                                <span class="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-sm"></span>
                                <h4 class="font-bold text-gray-900">${stage.name}</h4>
                                <p class="text-sm text-gray-600 mt-1">${stage.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        html += `</div>`;
        container.innerHTML = html;
    }
    
    function renderMnemonics() {
        const container = document.getElementById('mnemotecnia');
        if (!container || typeof MNEMONICS_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Mnemotécnicos 🧠</h2>
                <p class="text-gray-600">Trucos de memoria para conceptos difíciles</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;
        
        MNEMONICS_DATA.forEach(item => {
            html += `
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                    <div class="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">${item.category || 'General'}</div>
                    <h3 class="font-bold text-gray-900 mb-3">${item.title}</h3>
                    <div class="bg-yellow-50 border border-yellow-100 p-3 rounded-lg mb-3">
                        <p class="font-mono text-yellow-800 font-bold text-center text-lg">${item.mnemonic}</p>
                    </div>
                    <p class="text-sm text-gray-600">${item.explanation}</p>
                </div>
            `;
        });
        
        html += `</div>`;
        container.innerHTML = html;
    }
    
    function renderMethodology() {
        const container = document.getElementById('metodologia');
        if (!container || typeof METHODOLOGY_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Metodología 🔬</h2>
                <p class="text-gray-600">Diseños de investigación y conceptos clave</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
        `;
        
        METHODOLOGY_DATA.forEach(item => {
            html += `
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 class="font-bold text-lg text-gray-900 mb-2 flex items-center">
                        <span class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-gray-600">⚡</span>
                        ${item.type}
                    </h3>
                    <p class="text-gray-600 mb-4 border-b pb-4">${item.desc}</p>
                    
                    ${item.pros ? `
                        <div class="flex gap-4 text-sm">
                            <div class="flex-1">
                                <span class="font-bold text-green-600 block mb-1">👍 Ventaja</span>
                                <span class="text-gray-600">${item.pros}</span>
                            </div>
                            <div class="flex-1">
                                <span class="font-bold text-red-600 block mb-1">👎 Problema</span>
                                <span class="text-gray-600">${item.cons}</span>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        html += `</div>`;
        container.innerHTML = html;
    }
    
    function renderTips() {
        const container = document.getElementById('consejos');
        if (!container || typeof TIPS_DATA === 'undefined') return;
        
        let html = `
            <div class="mb-8 text-center">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">Consejos de Última Hora 💡</h2>
                <p class="text-gray-600">Patrones para identificar la respuesta correcta</p>
            </div>
            
            <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100">
                <div class="grid md:grid-cols-2 gap-6">
        `;
        
        TIPS_DATA.forEach((tip, index) => {
            html += `
                <div class="flex items-start">
                    <div class="bg-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-yellow-600 shadow-sm mr-4 shrink-0">
                        ${index + 1}
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-900 mb-1">${tip.title}</h4>
                        <p class="text-gray-700 text-sm">${tip.text}</p>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
                <div class="mt-8 text-center">
                    <p class="font-bold text-yellow-800 italic">"Este examen es de conceptos, no de memoria pura. Entiende la lógica del autor."</p>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    }
    
    return {
        init
    };
})();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Pequeño delay para asegurar que data.js ha cargado
    setTimeout(() => {
        ContentRenderer.init();
    }, 200);
});
