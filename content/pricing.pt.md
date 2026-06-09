---
title: "Preços"
description: "Pague por proteção, não por recursos. Infraestrutura transparente + valor baseado em resultados."
layout: "pricing"
date: "2024-05-20T00:00:00Z"
author: "Arquiteto Líder de Dados e Nuvem"
---

{{< pricing-toggle >}}
{
  "options": [
    { "label": "Compromisso Mensal", "value": "monthly" },
    { "label": "Contrato Anual (Economize 15%)", "value": "yearly" }
  ]
}
{{< /pricing-toggle >}}

{{< pricing-table-1 >}}
{
  "plans": [
    {
      "pill": "AUTOMAÇÃO ESSENCIAL",
      "pill_color": "stone",
      "name": "LICENÇA LITE",
      "subtitle": "1 A 9 ASSENTOS",
      "price_color": "stone",
      "price_monthly": "86",
      "price_yearly": "75",
      "price_subtitle": "POR ASSENTO / MÊS",
      "credits": "POOL DE UC DINÂMICO",
      "outcome_strategies": [
        {"label": "RECUPERAÇÃO DE CONTESTAÇÕES", "value": "Taxa de Sucesso de 20%"},
        {"label": "AUTO-PROVISIONAMENTO", "value": "1-3% (Limitado a $50)"}
      ],
      "features": [
        "NÓ COMPARTILHADO DE ALTA DENSIDADE",
        "FLUXOS DE TRABALHO DE AUTOMAÇÃO BÁSICOS",
        "PRIORIDADE DE COMPUTAÇÃO PADRÃO",
        "COMPROMISSOS MENSAL OU ANUAL"
      ],
      "button": {
        "text": "INICIAR LITE",
        "url": "/#contact",
        "style": "outline"
      }
    },
    {
      "pill": "PLATAFORMA E SEGURANÇA",
      "pill_color": "orange",
      "name": "LICENÇA DEDICADA",
      "subtitle": "10+ ASSENTOS",
      "price_color": "orange",
      "price_monthly": "75",
      "price_yearly": "75",
      "price_subtitle": "POR ASSENTO / MÊS (APENAS ANUAL)",
      "credits": "POOL DE UC MASSIVO",
      "outcome_strategies": [
        {"label": "RECUPERAÇÃO DE CONTESTAÇÕES", "value": "Taxa de Sucesso de 20%"},
        {"label": "AUTO-PROVISIONAMENTO", "value": "1-3% (Limitado a $50)"}
      ],
      "features": [
        "COMPUTAÇÃO SOBERANA DEDICADA",
        "CONFIGURAÇÃO DE DOMÍNIO PERSONALIZADO",
        "ROTEAMENTO E INFERÊNCIA PRIORITÁRIOS",
        "1.000 UC POR ASSENTO + BÔNUS DE 2.000 UC/10 ASSENTOS"
      ],
      "button": {
        "text": "INICIALIZAR DEDICADO",
        "url": "/#contact",
        "style": "solid"
      }
    },
    {
      "pill": "INFRAESTRUTURA SOBERANA",
      "pill_color": "stone",
      "name": "ENTERPRISE",
      "subtitle": "ISOLADO E NO LOCAL (ON-PREM)",
      "price_monthly": "SOB MEDIDA",
      "price_yearly": "SOB MEDIDA",
      "price_subtitle": "IMPLANTAÇÕES PERSONALIZADAS",
      "credits": "CAPACIDADE GERENCIADA",
      "outcome_strategies": [
        {"label": "ESTRATÉGIA DE RESULTADOS", "value": "SLAs Personalizados"}
      ],
      "features": [
        "HOSPEDAGEM LOCAL AUTO-PROVISIONADA",
        "CAPACIDADES DE EMBUTIMENTO EM BORDA",
        "TUDO DA PLATAFORMA DEDICADA",
        "LOGS DE AUDITORIA AVANÇADOS"
      ],
      "button": {
        "text": "CONTATAR ENTERPRISE",
        "url": "/#contact",
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
  "title": "Lógica de Faturamento. Sem Surpresas.",
  "description": "Baixa barreira de entrada. A receita acompanha o uso real de sua infraestrutura.",
  "questions": [
    {
      "question": "Quando a Licença Lite é a escolha certa?",
      "answer": "A **Licença Lite** foi projetada para PMEs, startups e equipes muito enxutas (1-9 assentos) que precisam de retorno rápido sobre o investimento em automação, sem grandes compromissos iniciais. Ela opera em nós compartilhados de alta densidade, oferecendo excelente desempenho a acessíveis $75/assento (anualmente) ou ~$86/assento (mensalmente). É a porta de entrada perfeita para começar a capturar receitas de contestações perdidas e automatizar tarefas logísticas básicas sem contratos anuais restritivos."
    },
    {
      "question": "Por que escolher a Licença Dedicada em vez da Lite?",
      "answer": "Uma vez que sua equipe escala para mais de 10 assentos, a segurança e o volume de processamento tornam-se primordiais. A **Licença Dedicada** provisiona automaticamente um Nó Soberano isolado exclusivamente para sua organization, com roteamento de domínio personalizado e limites rígidos de dados. Embora o preço base continue incrivelmente competitivo a $75/assento/mês, ela requer um compromisso de 1 ano. Em troca, sua organização desbloqueia bônus massivos de UC compartilhados (2.000 UC extras a cada 10 assentos) para executar tarefas automatizadas de alto volume."
    },
    {
      "question": "Qual é o valor de um engajamento Enterprise completo?",
      "answer": "Para indústrias altamente regulamentadas (defesa, finanças, saúde) ou volumes extremos de transações, o nível **Enterprise** oferece controle absoluto. Fornecemos implantações locais (on-premises) totalmente isoladas ou arquiteturas VPC personalizadas. Mais importante ainda, o Enterprise desbloqueia o **ajuste de decisão otimizado** — treinamos e otimizamos modelos de raciocínio personalizados especificamente nos dados de seu modelo operacional interno, resultando em precisão inigualável e velocidades de decisão de subsegundos adaptadas aos seus SLAs específicos."
    },
    {
      "question": "Preciso me comprometer com um plano anual?",
      "answer": "Apenas para as licenças Dedicada e Enterprise. A **Licença Lite** oferece total flexibilidade com uma opção mensal com acréscimo de 15% (~$86/assento/mês). Como as licenças **Dedicada** e **Enterprise** exigem que provisionemos e isolemos uma infraestrutura substancial de nuvem soberana especificamente para sua organização, elas exigem estritamente um compromisso mínimo de 1 ano."
    },
    {
      "question": "Como os recursos de computação são calculados?",
      "answer": "**Utilizamos uma abordagem de Capacidade Dinâmica.**<br>Cada assento inclui **1.000 Unidades de Capacidade (UC)**. Além disso, para cada bloco de 10 assentos adquiridos (desbloqueando o Dedicado), sua organização recebe um **Bônus de 2.000 UC**. Você só será cobrado pelo excedente ($0,10/100 UC ou $5,00/Hora de Computação) em processamentos em lote de intensidade extrema."
    }
  ]
}
{{< /faq >}}


---



<!-- Generated FAQ Section for E-A-T & GEO -->
<section class="faq-section mt-16 p-8 bg-[#1b1919] rounded-3xl border border-stone-800/80 shadow-2xl relative z-10">
  <div class="flex items-center gap-4 mb-8">
    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#ca4708] flex items-center justify-center shadow-lg">
      <span class="material-symbols-outlined text-white">help_center</span>
    </div>
    <h2 class="text-3xl font-black text-white uppercase italic tracking-tight m-0">Perguntas Frequentes</h2>
  </div>
  <div class="space-y-6">
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Qual é o verdadeiro custo total de propriedade (TCO) para implementar uma plataforma de logística automatizada?</h3>
      <p class="text-stone-400 leading-relaxed">Ao avaliar o custo total de propriedade de uma plataforma de logística automatizada, você deve olhar além do licenciamento inicial de software ou das taxas de assinatura de SaaS. O verdadeiro TCO abrange os custos de implementação, que envolvem a integração do sistema com seus sistemas ERP, TMS ou WMS existentes, migração de dados e desenvolvimento de APIs personalizadas. Além disso, você deve considerar os custos de gerenciamento de mudanças e treinamento para garantir que sua equipe possa aproveitar as novas ferramentas com eficácia. As despesas contínuas incluem o uso de infraestrutura de nuvem, volumes de processamento para modelos de raciocínio avançados ou mecanismos de roteamento e o ajuste contínuo da lógica. No entanto, esse investimento é normalmente compensado pelo rápido ROI gerado por meio de redução de quilometragem vazia, consumo de combustível otimizado, menor sobrecarga de despacho manual e penalidades de SLA minimizadas.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Como vocês estruturam os preços para implantações em escala empresarial ou requisitos locais?</h3>
      <p class="text-stone-400 leading-relaxed">Por padrão, nossa Licença Pro padrão oferece alto isolamento de dados implantando Computação Soberana Compartilhada. No entanto, para organizações que experimentam volumes extremos de transações ou que exigem conformidade estrita, nossos níveis Enterprise oferecem hospedagem soberana, isolada e local (on-premises). Nesses cenários, você pode implantar a plataforma Runink em seu próprio hardware, infraestrutura fisicamente isolada ou ambientes de computação em borda. Entre em contato com nossa equipe de vendas para discutir SLAs dedicados, controles personalizados de governança de dados e opções de licenciamento local adaptadas às suas restrições de infraestrutura específicas.</p>
    </div>
    <div class="faq-item p-6 bg-stone-900 rounded-xl border border-stone-800/50 hover:border-[#ea580c]/30 transition-colors">
      <h3 class="text-xl font-bold text-stone-200 mb-4">Por que devo fazer a transição de um sistema legado local para uma solução de logística automatizada nativa da nuvem?</h3>
      <p class="text-stone-400 leading-relaxed">La transição de um sistema legado local para uma solução de logística automatizada nativa da nuvem é fundamental para manter a competitividade. Uma arquitetura nativa da nuvem oferece escalabilidade elástica, permitindo que seus recursos de computação se expandam dinamicamente. Mais importante ainda, serve como a camada fundamental necessária para implantar modelos matemáticos e analíticos avançados de aprendizado de máquina. Esses recursos analíticos podem processar vastos conjuntos de dados em tempo real para identificar oportunidades de otimização ocultas, prever interrupções na cadeia de suprimentos antes que ocorram e automatizar tarefas complexas.</p>
    </div>
  </div>
</section>


<section class="author-bio mt-12 p-6 bg-stone-900 rounded-2xl border border-stone-800">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Sobre o Autor</h2>
  <p class="text-stone-300">
    <strong>Arquiteto Líder de Dados e Nuvem</strong><br>
    Especialista no assunto (SME) em AWS Data Analytics, AWS Certified Developer e Google Cloud Professional Certified in Engenharia de Dados e Análise Avançada. Com mais de uma década de experiência na construção de arquiteturas de nuvem resilientes e de alto rendimento, pipelines de dados e soluções de logística automatizadas.
  </p>
</section>

<section class="citations mt-8 p-6 bg-stone-900/50 rounded-2xl border border-stone-800/50">
  <h2 class="text-2xl font-bold text-[#ea580c] mb-4">Citações e Referências do Setor</h2>
  <ul class="list-decimal pl-6 text-stone-400 space-y-2">
    <li><a href="https://aws.amazon.com/architecture/analytics/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Centro de Arquitetura AWS: Melhores Práticas de Análise de Dados</a> - Diretrizes abrangentes para processamento de dados escalável.</li>
    <li><a href="https://cloud.google.com/solutions/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Google Cloud: Análise Avançada para Otimização da Cadeia de Suprimentos</a> - Metodologias avançadas para logística automatizada.</li>
    <li><a href="https://www.gartner.com/en/supply-chain" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">Gartner: Principais Tendências de Tecnologia Estratégica em Logística</a> - Pesquisa padrão do setor sobre tecnologia de cadeia de suprimentos.</li>
    <li><a href="https://ctl.mit.edu/" class="text-[#ea580c] hover:underline" rel="noopener noreferrer" target="_blank">MIT Center for Transportation & Logistics</a> - Pesquisa acadêmica sobre aplicações analíticas em frete e transporte.</li>
  </ul>
</section>
