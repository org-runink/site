---
title: "Precios"
description: "Pague por protección, no por funciones. Infraestructura transparente + valor basado en resultados."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Lead Data & Cloud Architect"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Compromiso Mensual", "value": "monthly" },
    { "label": "Contrato Anual (Ahorre 15%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "AUTOMATIZACIÓN ESENCIAL",
      "pill_color": "stone",
      "name": "LICENCIA LITE",
      "subtitle": "1 A 9 USUARIOS",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "POR USUARIO / MES",
      "credits": "POOL DE CU DINÁMICO",
      "outcome_strategies": [
        {"label": "RECUPERACIÓN DE RECLAMACIONES", "value": "Comisión de éxito del 20%"},
        {"label": "AUTO-PROVISIONAMIENTO", "value": "1-3% (Topado en $50)"}
      ],
      "features": [
        "NODO MULTIUSUARIO COMPARTIDO",
        "FLUJOS DE TRABAJO DE AUTOMATIZACIÓN BÁSICOS",
        "PRIORIDAD DE CÓMPUTO ESTÁNDAR",
        "COMPROMISOS MENSUALES O ANUALES"
      ],
      "button": {
        "text": "INICIAR LITE",
        "url": "/es/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "PLATAFORMA Y SEGURIDAD",
      "pill_color": "orange",
      "name": "LICENCIA DEDICADA",
      "subtitle": "10+ USUARIOS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "POR USUARIO / MES (SOLO ANUAL)",
      "credits": "POOL DE CU MASIVO",
      "outcome_strategies": [
        {"label": "RECUPERACIÓN DE RECLAMACIONES", "value": "Comisión de éxito del 20%"},
        {"label": "AUTO-PROVISIONAMIENTO", "value": "1-3% (Topado en $50)"}
      ],
      "features": [
        "CÓMPUTO SOBERANO DEDICADO",
        "CONFIGURACIÓN DE DOMINIO PERSONALIZADO",
        "ENRUTAMIENTO E INFERENCIA PRIORITARIOS",
        "1,000 CU POR USUARIO + 2,000 CU BONUS/10 USUARIOS"
      ],
      "button": {
        "text": "INICIALIZAR DEDICADO",
        "url": "/es/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "INFRAESTRUCTURA SOBERANA",
      "pill_color": "stone",
      "name": "ENTERPRISE",
      "subtitle": "AISLADO Y EN SITIO",
      "price_monthly": "A MEDIDA",
      "price_yearly": "A MEDIDA",
      "price_subtitle": "DESPLIEGUES PERSONALIZADOS",
      "credits": "CAPACIDAD GESTIONADA",
      "outcome_strategies": [
        {"label": "ESTRATEGIA DE RESULTADOS", "value": "SLAs personalizados"}
      ],
      "features": [
        "AUTO-HOSPEDADO EN SITIO",
        "CAPACIDADES DE INTEGRACIÓN EN BORDE",
        "TODO EN LA PLATAFORMA DEDICADA",
        "LOGS DE AUDITORÍA AVANZADOS"
      ],
      "button": {
        "text": "CONTACTAR ENTERPRISE",
        "url": "/es/#contact",
        "style": "outline"
      }
    }
  ]
}
{{< /pricing-table-1 >}}

<div class="py-12"></div>

{{< enterprise-a2a >}}
{{< faq >}}
{
  "title": "Lógica de Facturación. Sin Sorpresas.",
  "description": "Baja barrera de entrada. Los ingresos se escalan con el uso real de su infraestructura.",
  "questions": [
    {
      "question": "¿Cuándo es la licencia Lite una buena opción?",
      "answer": "La **licencia Lite** está diseñada para PYMEs, startups y equipos muy reducidos (1-9 usuarios) que necesitan un retorno de inversión rápido en automatización sin compromisos financieros masivos iniciales. Funciona en nodos compartidos de alta densidad, ofreciendo un rendimiento excelente a un precio accesible de $75/usuario (anual) o ~$86/usuario (mensual). Es el punto de entrada perfecto para comenzar a recuperar ingresos de reclamaciones perdidas y automatizar tareas logísticas básicas sin contratos anuales restrictivos."
    },
    {
      "question": "¿Por qué elegir la licencia Dedicada en lugar de Lite?",
      "answer": "Una vez que su equipo escala a más de 10 usuarios, la seguridad y el volumen de cómputo se vuelven primordiales. La **licencia Dedicada** aprovisiona automáticamente un nodo soberano aislado exclusivamente para su organización, con enrutamiento de dominio personalizado y límites de datos estrictos. Aunque el precio base sigue siendo extremadamente competitivo a $75/usuario/mes, requiere un compromiso de 1 año. A cambio, su organización desbloquea bonos significativos de CU compartidos (2,000 CU adicionales por cada 10 usuarios) para ejecutar tareas automatizadas de alto volumen."
    },
    {
      "question": "¿Cuál es el valor de un compromiso Enterprise completo?",
      "answer": "Para industrias altamente reguladas (defensa, finanzas, salud) o volúmenes de transacciones extremos, el nivel **Enterprise** ofrece control absoluto. Ofrecemos despliegues en sitio completamente aislados o arquitecturas VPC personalizadas. Más importante aún, Enterprise desbloquea el **ajuste de decisión optimizado** — entrenamos y optimizamos modelos de razonamiento personalizados específicamente con sus datos operativos internos, lo que resulta en una precisión sin igual y velocidades de decisión de menos de un segundo adaptadas a sus acuerdos de nivel de servicio (SLA) específicos."
    },
    {
      "question": "¿Tengo que comprometerme con un plan anual?",
      "answer": "Solo para las licencias Dedicada y Enterprise. La **licencia Lite** ofrece total flexibilidad con una opción de mes a mes con un recargo del 15% (~$86/usuario/mes). Dado que las licencias **Dedicada** y **Enterprise** requieren que aprovisionemos e implemantemos una infraestructura de nube soberana sustancial específicamente para su organización, requieren estrictamente un compromiso mínimo de 1 año."
    },
    {
      "question": "¿Cómo se calculan los recursos de cómputo?",
      "answer": "**Utilizamos un enfoque de capacidad dinámica.**<br>Cada usuario incluye **1,000 unidades de capacidad (CU)**. Además, por cada bloque de 10 usuarios que adquiera (lo que desbloquea el Dedicado), su organización recibe un **bono de 2,000 CU**. Solo se le cobrará por excedentes ($0.10/100 CU o $5.00/hora de cómputo) en el caso de procesamiento por lotes extremos y de alta intensidad."
    }
  ]
}
{{< /faq >}}


---



<!-- Sección FAQ generada para el E-A-T & GEO -->
<section class="faq-section mt-16 p-8 bg-[#1b1919] rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#ca4708] flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Preguntas Frecuentes</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">¿Cuál es el costo total de propiedad (TCO) real al implementar una plataforma de logística automatizada?</h3>
      <p class="text-stone-400 leading-relaxed">Al evaluar el costo total de propiedad para una plataforma logística automatizada, debe mirar más allá de las tarifas de licencia de software iniciales o suscripciones SaaS. El TCO real abarca los costos de implementación, que involucran la integración del sistema con sus sistemas ERP, TMS o WMS existentes, la migración de datos y el desarrollo de APIs personalizadas. Además, debe considerar los costos de gestión del cambio y capacitación para garantizar que su personal pueda aprovechar las nuevas herramientas con eficacia. Los gastos continuos incluyen el uso de infraestructura en la nube, los volúmenes de procesamiento de modelos analíticos avanzados o motores de enrutamiento y el ajuste continuo de la lógica. Sin embargo, esta inversión suele compensarse con el rápido ROI generado a través de la reducción de kilómetros vacíos, el consumo de combustible optimizado, menores costos de despacho manual y la minimización de penalizaciones por SLA.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">¿Cómo estructuran los precios para despliegues a nivel empresarial o requisitos en sitio?</h3>
      <p class="text-stone-400 leading-relaxed">Por defecto, nuestra licencia Pro estándar ofrece un aislamiento elevado de datos al implementar cómputo soberano compartido. Sin embargo, para organizaciones que experimentan volúmenes de transacciones extremos o requieren un cumplimiento estricto, nuestros niveles Enterprise ofrecen alojamiento soberano, aislado y en sitio (on-premises). En estos escenarios, puede implementar la plataforma Runink en su propio hardware, infraestructura físicamente aislada o entornos de cómputo en el borde. Póngase en contacto con nuestro equipo de ventas para discutir SLAs dedicados, controles personalizados de gobernanza de datos y opciones de licencia en sitio adaptadas a sus restricciones de infraestructura específicas.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">¿Por qué debería pasar de un sistema heredado local a una solución logística automatizada nativa de la nube?</h3>
      <p class="text-stone-400 leading-relaxed">La transición de un sistema heredado local a una solución logística automatizada nativa de la nube es fundamental para mantener la competitividad. Una arquitectura nativa de la nube ofrece escalabilidad elástica, lo que permite que sus recursos de cómputo se expandan dinámicamente. Más importante aún, sirve como la capa fundamental necesaria para implementar modelos analíticos y de aprendizaje automático avanzados. Estas capacidades analíticas pueden procesar vastos conjuntos de datos en tiempo real para identificar oportunidades de optimización ocultas, predecir interrupciones en la cadena de suministro antes de que ocurran y automatizar tareas complejas.</p>
    </div>
  </div>
</section>


<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Sobre el Autor</h2>
  <p class="text-stone-300">
    <strong>Lead Data & Cloud Architect</strong><br>
    Sujeto experto en la materia (SME) en AWS Data Analytics, AWS Certified Developer y Google Cloud Professional certificado en Data Engineering y Advanced Analytics. Con más de una década de experiencia en la construcción de arquitecturas en la nube resilientes y de alto rendimiento, pipelines de datos y soluciones logísticas automatizadas.
  </p>
</section>

<section class="citations mt-8 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Citas y Referencias de la Industria</h2>
  <ul class="list-decimal pl-6 text-stone-400 space-y-2">
    <li><a href="https://aws.amazon.com/architecture/analytics/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Centro de Arquitectura AWS: Mejores Prácticas de Análisis de Datos</a> - Pautas completas para procesamiento de datos escalable.</li>
    <li><a href="https://cloud.google.com/solutions/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Google Cloud: Análisis Avanzado para Optimización de la Cadena de Suministro</a> - Metodologías avanzadas para logística automatizada.</li>
    <li><a href="https://www.gartner.com/en/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Gartner: Principales Tendencias Tecnológicas Estratégicas en Logística</a> - Investigación estándar de la industria sobre tecnología de cadena de suministro.</li>
    <li><a href="https://ctl.mit.edu/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">MIT Center for Transportation & Logistics</a> - Investigación académica sobre aplicaciones analíticas en flete y transporte.</li>
  </ul>
</section>
