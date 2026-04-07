import { Post } from '@/types/blog';

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    title: 'Guia Completo: Primeiro Ciclo de Testosterona',
    slug: 'guia-primeiro-ciclo-testosterona',
    subtitle: 'Tudo o que você precisa saber antes de iniciar seu primeiro ciclo',
    summary: 'Um guia detalhado e seguro para quem está considerando o primeiro ciclo de testosterona. Desde a escolha do éster até o protocolo de TPC.',
    coverImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    categories: ['cat-ciclos'],
    tags: ['tag-testosterona', 'tag-iniciante', 'tag-tpc', 'tag-protocolo'],
    contentType: 'guide',
    content: `
      <h2>Introdução</h2>
      <p>Iniciar o primeiro ciclo de testosterona é uma decisão que exige conhecimento, planejamento e responsabilidade. Este guia aborda todos os aspectos essenciais para que você compreenda o que esperar e como se preparar adequadamente.</p>
      <div class="callout info"><strong>Nota importante:</strong> Consulte sempre um profissional de saúde antes de iniciar qualquer protocolo hormonal. Exames pré-ciclo são indispensáveis.</div>

      <h2>Exames Pré-Ciclo Obrigatórios</h2>
      <p>Antes de iniciar qualquer ciclo, é fundamental realizar uma bateria completa de exames para avaliar sua saúde de base:</p>
      <ul>
        <li>Hemograma completo</li>
        <li>Testosterona total e livre</li>
        <li>Estradiol (E2)</li>
        <li>LH e FSH</li>
        <li>Perfil lipídico completo</li>
        <li>TGO, TGP, GGT (função hepática)</li>
        <li>Creatinina e ureia (função renal)</li>
        <li>PSA (homens acima de 35 anos)</li>
      </ul>

      <h2>Escolha do Éster</h2>
      <p>A testosterona está disponível em diferentes ésteres, cada um com características farmacocinéticas específicas. O Enantato e o Cipionato são os mais recomendados para iniciantes devido à sua meia-vida longa e estabilidade hormonal.</p>
      <table>
        <thead><tr><th>Éster</th><th>Meia-vida</th><th>Frequência</th><th>Recomendação</th></tr></thead>
        <tbody>
          <tr><td>Propionato</td><td>~2 dias</td><td>Dia sim, dia não</td><td>Avançados</td></tr>
          <tr><td>Enantato</td><td>~7 dias</td><td>2x/semana</td><td>⭐ Iniciantes</td></tr>
          <tr><td>Cipionato</td><td>~8 dias</td><td>2x/semana</td><td>⭐ Iniciantes</td></tr>
          <tr><td>Undecanoato</td><td>~21 dias</td><td>A cada 10-14 dias</td><td>TRT</td></tr>
        </tbody>
      </table>

      <h2>Dosagem Recomendada</h2>
      <p>Para um primeiro ciclo, a dosagem geralmente recomendada fica entre 300-500mg por semana, dividida em duas aplicações para manter níveis séricos estáveis.</p>
      <div class="callout tip"><strong>Dica:</strong> Comece com 300mg/semana. Você sempre pode aumentar em ciclos futuros, mas nunca pode "desfazer" efeitos colaterais de doses altas.</div>

      <h3>Exemplo de Protocolo para 12 Semanas</h3>
      <table>
        <thead><tr><th>Semana</th><th>Testosterona E.</th><th>Anastrozol</th><th>HCG</th></tr></thead>
        <tbody>
          <tr><td>1-12</td><td>250mg 2x/sem</td><td>0.5mg a cada 3 dias (se necessário)</td><td>500UI 2x/sem</td></tr>
          <tr><td>13-14</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>15-18</td><td colspan="3">TPC (ver abaixo)</td></tr>
        </tbody>
      </table>

      <h2>Controle de Estradiol</h2>
      <p>O uso de inibidor de aromatase (IA) como Anastrozol deve ser baseado em exames e sintomas, nunca preventivamente em doses altas. Estradiol muito baixo é tão prejudicial quanto alto.</p>

      <h2>Terapia Pós-Ciclo (TPC)</h2>
      <p>A TPC é essencial para a recuperação do eixo hormonal (HPTA). Os protocolos mais utilizados incluem:</p>
      <ul>
        <li><strong>Tamoxifeno:</strong> 20mg/dia por 4-6 semanas</li>
        <li><strong>Clomifeno:</strong> 50mg/dia por 4 semanas</li>
        <li><strong>HCG:</strong> Usado durante o ciclo para manter função testicular</li>
      </ul>
      <div class="callout warning"><strong>Atenção:</strong> Nunca pule a TPC. A recuperação hormonal é tão importante quanto o ciclo em si.</div>

      <h2>Efeitos Colaterais e Gerenciamento</h2>
      <p>Os principais efeitos colaterais incluem acne, retenção hídrica, aumento da pressão arterial e alteração do perfil lipídico. A maioria é dose-dependente e reversível com manejo adequado.</p>

      <h2>Conclusão</h2>
      <p>O primeiro ciclo deve ser simples, com apenas testosterona. Adicionar múltiplas substâncias dificulta identificar qual está causando eventuais efeitos colaterais. Paciência e responsabilidade são essenciais.</p>
    `,
    seoTitle: 'Primeiro Ciclo de Testosterona: Guia Completo 2025',
    seoDescription: 'Guia completo para o primeiro ciclo de testosterona. Dosagem, duração, TPC e tudo que um iniciante precisa saber.',
    status: 'published',
    publishDate: '2025-03-15T10:00:00Z',
    pinned: true,
    featured: true,
    readingTime: 12,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver Testosterona na Loja', url: '#loja' },
    relatedPosts: ['post-2', 'post-3', 'post-12'],
    views: 15420,
    uniqueViews: 8930,
  },
  {
    id: 'post-2',
    title: 'Ciclo de Cutting com Oxandrolona e Stanozolol',
    slug: 'ciclo-cutting-oxandrolona-stanozolol',
    subtitle: 'Protocolo detalhado para definição muscular com segurança',
    summary: 'Combine Oxandrolona e Stanozolol em um ciclo de cutting otimizado. Veja dosagens, duração e cuidados essenciais.',
    coverImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80',
    categories: ['cat-ciclos', 'cat-ergogenicos'],
    tags: ['tag-oxandrolona', 'tag-stanozolol', 'tag-cutting', 'tag-protocolo'],
    contentType: 'protocol',
    content: `
      <h2>Objetivo do Ciclo</h2>
      <p>Este protocolo combina duas substâncias de perfil oral para um ciclo de cutting focado em preservação de massa magra com redução de gordura corporal. É indicado para usuários com experiência prévia em ciclos.</p>

      <h2>Perfil das Substâncias</h2>
      <h3>Oxandrolona (Anavar)</h3>
      <ul>
        <li>Derivada da DHT — sem aromatização</li>
        <li>Excelente para preservação muscular em déficit calórico</li>
        <li>Aumento significativo de força</li>
        <li>Baixa hepatotoxicidade comparada a outros orais</li>
      </ul>
      <h3>Stanozolol (Winstrol)</h3>
      <ul>
        <li>Forte efeito anti-estrogênico</li>
        <li>Promove aspecto "seco" e vascularizado</li>
        <li>Aumento de força e performance</li>
        <li>Pode afetar articulações (ressecamento sinovial)</li>
      </ul>

      <h2>Protocolo Sugerido — 8 Semanas</h2>
      <table>
        <thead><tr><th>Semana</th><th>Oxandrolona</th><th>Stanozolol</th><th>Suporte</th></tr></thead>
        <tbody>
          <tr><td>1-2</td><td>20mg/dia</td><td>—</td><td>Silimarina 500mg/dia</td></tr>
          <tr><td>3-4</td><td>30mg/dia</td><td>—</td><td>Silimarina 500mg/dia</td></tr>
          <tr><td>5-6</td><td>30mg/dia</td><td>30mg/dia</td><td>Silimarina 500mg/dia + TUDCA 500mg/dia</td></tr>
          <tr><td>7-8</td><td>30mg/dia</td><td>40mg/dia</td><td>Silimarina 500mg/dia + TUDCA 500mg/dia</td></tr>
        </tbody>
      </table>
      <div class="callout warning"><strong>Atenção:</strong> Este protocolo requer acompanhamento de exames hepáticos regulares (TGO, TGP, GGT).</div>

      <h2>Dieta e Treino</h2>
      <p>O sucesso de um ciclo de cutting depende primariamente da dieta. Mantenha um déficit calórico moderado de 300-500kcal, com proteína alta (2.2-2.5g/kg), carboidratos moderados e gorduras essenciais.</p>

      <h2>Suplementação de Suporte</h2>
      <ul>
        <li><strong>Silimarina:</strong> Proteção hepática básica</li>
        <li><strong>TUDCA:</strong> Proteção hepática avançada</li>
        <li><strong>Ômega-3:</strong> 3-4g/dia para perfil lipídico</li>
        <li><strong>CoQ10:</strong> 200mg/dia para saúde cardiovascular</li>
      </ul>

      <h2>TPC Pós-Ciclo</h2>
      <p>Por se tratar de um ciclo exclusivamente oral sem base de testosterona, a TPC deve ser iniciada 3-5 dias após a última dose. Protocolo: Tamoxifeno 20mg/dia por 4 semanas.</p>

      <div class="callout info"><strong>Recomendação:</strong> Para resultados superiores e maior segurança, considere adicionar uma base de testosterona ao ciclo.</div>
    `,
    seoTitle: 'Ciclo de Cutting: Oxandrolona + Stanozolol — Protocolo Completo',
    seoDescription: 'Protocolo de ciclo de cutting com Oxandrolona e Stanozolol. Dosagens, duração e cuidados para definição muscular.',
    status: 'published',
    publishDate: '2025-03-10T08:00:00Z',
    pinned: false,
    featured: true,
    readingTime: 8,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Comprar Oxandrolona', url: '#loja' },
    relatedPosts: ['post-1', 'post-4', 'post-13'],
    views: 12050,
    uniqueViews: 7200,
  },
  {
    id: 'post-3',
    title: 'Tudo sobre Oxandrolona: O Guia Definitivo',
    slug: 'guia-oxandrolona',
    subtitle: 'Mecanismo de ação, benefícios, efeitos colaterais e protocolos',
    summary: 'Análise completa da Oxandrolona: como funciona, para quem é indicada, dosagens e o que a ciência diz.',
    coverImage: 'https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=1200&q=80',
    categories: ['cat-ergogenicos'],
    tags: ['tag-oxandrolona', 'tag-feminino', 'tag-cutting', 'tag-iniciante'],
    contentType: 'substance-analysis',
    content: `
      <h2>O que é Oxandrolona?</h2>
      <p>A Oxandrolona (Anavar) é um esteroide anabólico androgênico derivado da dihidrotestosterona (DHT). Conhecida por seu perfil suave, é uma das substâncias mais populares tanto para homens quanto para mulheres.</p>
      <p>Desenvolvida originalmente na década de 1960 pela Searle Laboratories, foi criada para tratar condições como perda muscular, osteoporose e recuperação de queimaduras graves.</p>

      <h2>Mecanismo de Ação</h2>
      <p>Atua ligando-se aos receptores androgênicos, promovendo síntese proteica e retenção de nitrogênio, com baixa atividade androgênica. Diferente da testosterona, não sofre aromatização, ou seja, não converte em estrogênio.</p>

      <h2>Benefícios Comprovados</h2>
      <ul>
        <li>Preservação de massa magra em déficit calórico</li>
        <li>Aumento de força sem ganho expressivo de peso</li>
        <li>Baixa retenção hídrica — ideal para cutting</li>
        <li>Perfil de efeitos colaterais mais suave</li>
        <li>Adequada para uso feminino em doses controladas</li>
      </ul>

      <h3>Oxandrolona vs. Outros Orais</h3>
      <table>
        <thead><tr><th>Substância</th><th>Anabolismo</th><th>Androgenicidade</th><th>Hepatotoxicidade</th><th>Aromatização</th></tr></thead>
        <tbody>
          <tr><td><strong>Oxandrolona</strong></td><td>322-630</td><td>24</td><td>Baixa</td><td>Não</td></tr>
          <tr><td>Stanozolol</td><td>320</td><td>30</td><td>Moderada</td><td>Não</td></tr>
          <tr><td>Dianabol</td><td>210</td><td>60</td><td>Alta</td><td>Sim</td></tr>
          <tr><td>Turinabol</td><td>180</td><td>50</td><td>Moderada</td><td>Não</td></tr>
        </tbody>
      </table>

      <h2>Dosagens Recomendadas</h2>
      <h3>Para Homens</h3>
      <p>A dosagem típica para homens varia entre 30-80mg/dia, dividida em 2-3 tomadas devido à meia-vida de 9 horas.</p>
      <h3>Para Mulheres</h3>
      <p>Mulheres devem utilizar doses significativamente menores: 5-15mg/dia. Doses acima de 20mg aumentam consideravelmente o risco de virilização.</p>
      <div class="callout tip"><strong>Dica para mulheres:</strong> Comece com 5mg/dia por 2 semanas. Se tolerada, aumente para 10mg/dia. Monitore sinais de virilização semanalmente.</div>

      <h2>Efeitos Colaterais</h2>
      <ul>
        <li>Supressão do eixo HPTA (dose-dependente)</li>
        <li>Alteração do perfil lipídico (redução HDL)</li>
        <li>Hepatotoxicidade leve (17-alfa-alquilado)</li>
        <li>Possível acne e oleosidade</li>
        <li>Virilização em mulheres (em doses altas)</li>
      </ul>

      <h2>Considerações Finais</h2>
      <p>A Oxandrolona permanece como uma das opções mais seguras e versáteis entre os esteroides orais. Sua combinação de eficácia e perfil de segurança a torna ideal tanto para iniciantes quanto para atletas experientes em ciclos de cutting.</p>
    `,
    seoTitle: 'Oxandrolona: Guia Completo — Benefícios, Dosagens e Efeitos',
    seoDescription: 'Guia definitivo sobre Oxandrolona (Anavar). Mecanismo de ação, benefícios, efeitos colaterais e dosagens recomendadas.',
    status: 'published',
    publishDate: '2025-03-08T14:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 10,
    author: 'Dra. Camila Soares',
    primaryCTA: { label: 'Ver Oxandrolona', url: '#loja' },
    relatedPosts: ['post-2', 'post-5', 'post-14'],
    views: 18300,
    uniqueViews: 11200,
  },
  {
    id: 'post-4',
    title: 'Stanozolol: Benefícios, Protocolos e Riscos',
    slug: 'stanozolol-beneficios-protocolos',
    subtitle: 'Uma análise científica completa sobre Winstrol',
    summary: 'Entenda como o Stanozolol funciona, seus benefícios para performance e os cuidados necessários.',
    coverImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80',
    categories: ['cat-ergogenicos'],
    tags: ['tag-stanozolol', 'tag-cutting', 'tag-performance'],
    contentType: 'substance-analysis',
    content: `
      <h2>Visão Geral</h2>
      <p>O Stanozolol, comercialmente conhecido como Winstrol, é um anabolizante derivado da DHT com propriedades únicas que o diferem de outros esteroides. É amplamente utilizado em ciclos de cutting e pré-competição.</p>

      <h2>Perfil Farmacológico</h2>
      <p>Possui alta atividade anabólica com baixa atividade androgênica. Disponível em forma oral e injetável (suspensão aquosa).</p>
      <table>
        <thead><tr><th>Propriedade</th><th>Valor</th></tr></thead>
        <tbody>
          <tr><td>Índice Anabólico</td><td>320</td></tr>
          <tr><td>Índice Androgênico</td><td>30</td></tr>
          <tr><td>Meia-vida (oral)</td><td>~9 horas</td></tr>
          <tr><td>Meia-vida (injetável)</td><td>~24 horas</td></tr>
          <tr><td>Aromatização</td><td>Nenhuma</td></tr>
        </tbody>
      </table>

      <h2>Benefícios para Performance</h2>
      <ul>
        <li>Aumento significativo de força sem ganho de peso</li>
        <li>Aspecto muscular denso e vascularizado</li>
        <li>Redução de SHBG — potencializa outras substâncias</li>
        <li>Sem retenção hídrica</li>
      </ul>

      <h2>Efeitos Colaterais e Precauções</h2>
      <ul>
        <li>Hepatotoxicidade significativa (17-alfa-alquilado)</li>
        <li>Impacto negativo acentuado no perfil lipídico</li>
        <li>Ressecamento articular — risco de lesões</li>
        <li>Queda de cabelo em predispostos</li>
      </ul>
      <div class="callout warning"><strong>Precaução:</strong> Não use Stanozolol por mais de 6-8 semanas consecutivas. Monitore enzimas hepáticas a cada 4 semanas.</div>

      <h2>Oral vs. Injetável</h2>
      <p>A versão injetável (Winstrol Depot) é uma suspensão aquosa que oferece menor hepatotoxicidade, mas as aplicações são dolorosas e frequentes. A versão oral é mais prática, porém mais agressiva ao fígado.</p>

      <h2>Protocolos Comuns</h2>
      <p>Dosagem masculina: 30-50mg/dia oral ou 50mg em dias alternados injetável. Duração máxima recomendada: 6-8 semanas.</p>
    `,
    seoTitle: 'Stanozolol (Winstrol): Benefícios, Dosagens e Riscos',
    seoDescription: 'Análise completa do Stanozolol. Benefícios, protocolos de uso, efeitos colaterais e comparações.',
    status: 'published',
    publishDate: '2025-03-05T09:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 7,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Comprar Stanozolol', url: '#loja' },
    relatedPosts: ['post-2', 'post-3'],
    views: 9800,
    uniqueViews: 6100,
  },
  {
    id: 'post-5',
    title: 'Tirzepatida: A Nova Era do Emagrecimento',
    slug: 'tirzepatida-nova-era-emagrecimento',
    subtitle: 'Como o agonista duplo GIP/GLP-1 está revolucionando a perda de peso',
    summary: 'Descubra como a Tirzepatida se tornou uma das substâncias mais promissoras para emagrecimento, com resultados superiores a terapias anteriores.',
    coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
    categories: ['cat-emagrecimento'],
    tags: ['tag-tirzepatida', 'tag-saude'],
    contentType: 'article',
    content: `
      <h2>O que é Tirzepatida?</h2>
      <p>A Tirzepatida é um agonista duplo dos receptores GIP e GLP-1, representando uma nova classe de medicamentos para controle de peso e diabetes tipo 2. Desenvolvida pela Eli Lilly, foi aprovada pelo FDA em 2023 para tratamento de obesidade.</p>

      <h2>Como Funciona</h2>
      <p>A Tirzepatida mimetiza dois hormônios incretinas — GIP (polipeptídeo insulinotrópico dependente de glicose) e GLP-1 (peptídeo semelhante ao glucagon tipo 1). Essa ação dupla proporciona:</p>
      <ul>
        <li>Redução significativa do apetite</li>
        <li>Aumento da saciedade pós-prandial</li>
        <li>Melhora da sensibilidade à insulina</li>
        <li>Redução da velocidade de esvaziamento gástrico</li>
        <li>Efeitos neurais na regulação do peso</li>
      </ul>

      <h2>Resultados Clínicos — Estudos SURMOUNT</h2>
      <p>Nos estudos clínicos SURMOUNT, pacientes tratados com Tirzepatida apresentaram resultados impressionantes:</p>
      <table>
        <thead><tr><th>Dose</th><th>Perda de peso (72 sem)</th><th>Pacientes >20% perda</th></tr></thead>
        <tbody>
          <tr><td>5mg/semana</td><td>-15%</td><td>30%</td></tr>
          <tr><td>10mg/semana</td><td>-19.5%</td><td>46%</td></tr>
          <tr><td>15mg/semana</td><td>-20.9%</td><td>57%</td></tr>
        </tbody>
      </table>
      <div class="callout info"><strong>Destaque:</strong> A Tirzepatida mostrou resultados superiores à Semaglutida em estudos comparativos, com média de 5% a mais de perda de peso.</div>

      <h2>Tirzepatida vs Semaglutida</h2>
      <table>
        <thead><tr><th>Critério</th><th>Tirzepatida</th><th>Semaglutida</th></tr></thead>
        <tbody>
          <tr><td>Mecanismo</td><td>GIP + GLP-1</td><td>GLP-1</td></tr>
          <tr><td>Perda de peso média</td><td>20-25%</td><td>15-17%</td></tr>
          <tr><td>Aplicação</td><td>Subcutânea semanal</td><td>Subcutânea semanal</td></tr>
          <tr><td>Náusea (incidência)</td><td>Moderada</td><td>Moderada-Alta</td></tr>
        </tbody>
      </table>

      <h2>Protocolo de Titulação</h2>
      <p>A Tirzepatida deve ser iniciada em dose baixa e titulada gradualmente para minimizar efeitos gastrointestinais:</p>
      <ul>
        <li>Semanas 1-4: 2.5mg/semana</li>
        <li>Semanas 5-8: 5mg/semana</li>
        <li>Semanas 9-12: 7.5mg/semana (opcional)</li>
        <li>Semanas 13+: 10-15mg/semana (dose de manutenção)</li>
      </ul>

      <h2>Efeitos Colaterais</h2>
      <p>Os efeitos colaterais mais comuns são gastrointestinais e tendem a melhorar com o tempo: náusea, diarreia, constipação e diminuição do apetite.</p>
      <div class="callout warning"><strong>Contraindicação:</strong> Pacientes com histórico pessoal ou familiar de carcinoma medular de tireoide ou MEN2 não devem usar Tirzepatida.</div>

      <h2>Considerações Finais</h2>
      <p>A Tirzepatida representa um avanço significativo no tratamento farmacológico da obesidade, oferecendo resultados de perda de peso que antes só eram alcançáveis com cirurgia bariátrica.</p>
    `,
    seoTitle: 'Tirzepatida para Emagrecimento: O Guia Completo 2025',
    seoDescription: 'Tirzepatida: o agonista duplo GIP/GLP-1 que revolucionou o emagrecimento. Saiba tudo sobre resultados e protocolos.',
    status: 'published',
    publishDate: '2025-03-20T11:00:00Z',
    pinned: false,
    featured: true,
    readingTime: 9,
    author: 'Dra. Camila Soares',
    primaryCTA: { label: 'Ver Tirzepatida', url: '#loja' },
    relatedPosts: ['post-6', 'post-16'],
    views: 22100,
    uniqueViews: 14500,
  },
  {
    id: 'post-6',
    title: 'Sibutramina vs Anfepramona: Comparativo Completo',
    slug: 'sibutramina-vs-anfepramona',
    subtitle: 'Qual é a melhor opção para supressão de apetite?',
    summary: 'Comparação detalhada entre Sibutramina e Anfepramona: mecanismos, eficácia, efeitos colaterais e indicações.',
    coverImage: 'https://images.unsplash.com/photo-1505576399279-0d06b4388fea?w=1200&q=80',
    categories: ['cat-emagrecimento'],
    tags: ['tag-sibutramina', 'tag-saude'],
    contentType: 'comparison',
    content: `
      <h2>Introdução</h2>
      <p>A Sibutramina e a Anfepramona são dois dos supressores de apetite mais utilizados no tratamento farmacológico da obesidade. Ambas atuam no sistema nervoso central, mas por mecanismos distintos que determinam seus perfis de eficácia e segurança.</p>

      <h2>Mecanismo de Ação</h2>
      <h3>Sibutramina</h3>
      <p>Inibe a recaptação de serotonina e noradrenalina, aumentando a saciedade e moderadamente o gasto energético basal.</p>
      <h3>Anfepramona (Dietilpropiona)</h3>
      <p>Estimula a liberação de catecolaminas (noradrenalina e dopamina), reduzindo o apetite por ação central.</p>

      <h2>Comparativo Detalhado</h2>
      <table>
        <thead><tr><th>Critério</th><th>Sibutramina</th><th>Anfepramona</th></tr></thead>
        <tbody>
          <tr><td>Mecanismo</td><td>Inibição recaptação 5-HT/NA</td><td>Liberação de catecolaminas</td></tr>
          <tr><td>Perda de peso média</td><td>5-10%</td><td>5-8%</td></tr>
          <tr><td>Duração recomendada</td><td>Até 2 anos</td><td>Até 12 semanas</td></tr>
          <tr><td>Efeito termogênico</td><td>Sim (leve)</td><td>Sim (moderado)</td></tr>
          <tr><td>Risco cardiovascular</td><td>Moderado</td><td>Baixo-Moderado</td></tr>
          <tr><td>Potencial de dependência</td><td>Baixo</td><td>Moderado</td></tr>
          <tr><td>Disponibilidade</td><td>Controlada (B2)</td><td>Controlada (B2)</td></tr>
        </tbody>
      </table>

      <h2>Indicações Preferenciais</h2>
      <div class="callout tip"><strong>Sibutramina:</strong> Pacientes que comem compulsivamente, com problemas de saciedade. Melhor para tratamentos prolongados.</div>
      <div class="callout tip"><strong>Anfepramona:</strong> Pacientes que precisam de supressão de apetite mais intensa por período curto. Útil para "dar o pontapé inicial".</div>

      <h2>Efeitos Colaterais</h2>
      <h3>Sibutramina</h3>
      <ul>
        <li>Aumento de PA e FC</li>
        <li>Boca seca, insônia</li>
        <li>Constipação</li>
      </ul>
      <h3>Anfepramona</h3>
      <ul>
        <li>Insônia, agitação</li>
        <li>Taquicardia</li>
        <li>Tolerância (perda de efeito)</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Ambas são ferramentas válidas quando prescritas adequadamente. A escolha deve considerar o perfil do paciente, comorbidades e objetivos de tratamento. Nenhuma substitui mudanças de estilo de vida.</p>
    `,
    seoTitle: 'Sibutramina vs Anfepramona: Qual é Melhor? Comparativo 2025',
    seoDescription: 'Comparação detalhada entre Sibutramina e Anfepramona para emagrecimento. Eficácia, segurança e indicações.',
    status: 'published',
    publishDate: '2025-02-28T10:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 6,
    author: 'Dra. Camila Soares',
    relatedPosts: ['post-5', 'post-7', 'post-11'],
    views: 8900,
    uniqueViews: 5600,
  },
  {
    id: 'post-7',
    title: 'Retatrutida: O Futuro dos Agonistas de Incretina',
    slug: 'retatrutida-futuro-incretinas',
    subtitle: 'O agonista triplo que promete superar Tirzepatida e Semaglutida',
    summary: 'Conheça a Retatrutida, o primeiro agonista triplo GIP/GLP-1/Glucagon em desenvolvimento, com resultados preliminares impressionantes.',
    coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80',
    categories: ['cat-emagrecimento', 'cat-peptideos'],
    tags: ['tag-saude', 'tag-performance'],
    contentType: 'article',
    content: `
      <h2>O que é Retatrutida?</h2>
      <p>A Retatrutida é um agonista triplo em desenvolvimento pela Eli Lilly que atua nos receptores GIP, GLP-1 e Glucagon simultaneamente. Representa a próxima geração de tratamentos para obesidade.</p>

      <h2>Por que Triplo Agonismo?</h2>
      <p>A adição do receptor de glucagon aos já estabelecidos GIP e GLP-1 traz benefícios adicionais:</p>
      <ul>
        <li><strong>GLP-1:</strong> Redução de apetite e esvaziamento gástrico</li>
        <li><strong>GIP:</strong> Melhora sensibilidade à insulina e metabolismo lipídico</li>
        <li><strong>Glucagon:</strong> Aumento do gasto energético e oxidação de gordura hepática</li>
      </ul>

      <h2>Resultados Fase 2</h2>
      <p>Nos estudos de fase 2, participantes apresentaram redução de até 24% do peso corporal em 48 semanas, superando resultados de terapias anteriores.</p>
      <table>
        <thead><tr><th>Substância</th><th>Mecanismo</th><th>Perda de peso máxima</th></tr></thead>
        <tbody>
          <tr><td>Semaglutida</td><td>GLP-1</td><td>~17%</td></tr>
          <tr><td>Tirzepatida</td><td>GIP/GLP-1</td><td>~22%</td></tr>
          <tr><td><strong>Retatrutida</strong></td><td><strong>GIP/GLP-1/Glucagon</strong></td><td><strong>~24%</strong></td></tr>
        </tbody>
      </table>
      <div class="callout info"><strong>Importante:</strong> A Retatrutida ainda está em fase 3 de estudos clínicos. Sua aprovação regulatória é esperada para 2026-2027.</div>

      <h2>Implicações para o Futuro</h2>
      <p>Se os resultados de fase 3 confirmarem os dados de fase 2, a Retatrutida pode se tornar a terapia farmacológica mais eficaz para obesidade já desenvolvida, aproximando-se dos resultados de cirurgia bariátrica.</p>

      <h2>Considerações de Segurança</h2>
      <p>Os dados de segurança de fase 2 mostraram perfil de efeitos colaterais similar à Tirzepatida, predominantemente gastrointestinais. Dados de longo prazo ainda são aguardados.</p>
    `,
    seoTitle: 'Retatrutida: O Agonista Triplo para Emagrecimento — Tudo que Sabemos',
    seoDescription: 'Retatrutida: conheça o agonista triplo GIP/GLP-1/Glucagon e seus resultados impressionantes para perda de peso.',
    status: 'published',
    publishDate: '2025-03-22T08:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 7,
    author: 'Dr. Rafael Mendes',
    relatedPosts: ['post-5', 'post-6'],
    views: 6700,
    uniqueViews: 4200,
  },
  {
    id: 'post-8',
    title: 'BPC-157: Recuperação Acelerada com Peptídeos',
    slug: 'bpc-157-recuperacao-acelerada',
    subtitle: 'Como o peptídeo gástrico está transformando a recuperação esportiva',
    summary: 'Análise detalhada do BPC-157: mecanismo de ação, benefícios para recuperação de lesões e protocolos de uso.',
    coverImage: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=1200&q=80',
    categories: ['cat-peptideos'],
    tags: ['tag-bpc157', 'tag-recuperacao', 'tag-performance'],
    contentType: 'substance-analysis',
    content: `
      <h2>O que é BPC-157?</h2>
      <p>O BPC-157 (Body Protection Compound-157) é um pentadecapeptídeo derivado de uma proteína protetora encontrada no suco gástrico humano. É composto por 15 aminoácidos e tem demonstrado notáveis propriedades regenerativas em estudos pré-clínicos.</p>

      <h2>Mecanismos de Ação</h2>
      <p>O BPC-157 atua por múltiplas vias que convergem para proteção e regeneração tecidual:</p>
      <ul>
        <li><strong>Angiogênese:</strong> Promoção da formação de novos vasos sanguíneos</li>
        <li><strong>Óxido Nítrico:</strong> Regulação do sistema NO, melhorando fluxo sanguíneo</li>
        <li><strong>Fatores de Crescimento:</strong> Upregulation de EGF, VEGF e outros</li>
        <li><strong>Colágeno:</strong> Estimulação da síntese de colágeno tipo I</li>
        <li><strong>Neuroproteção:</strong> Efeitos protetores sobre o sistema nervoso central</li>
      </ul>

      <h2>Aplicações Clínicas</h2>
      <h3>Lesões Musculoesqueléticas</h3>
      <p>Aceleração da recuperação de lesões musculares, tendíneas e ligamentares. Estudos em animais mostram redução de 50-70% no tempo de recuperação.</p>
      <h3>Proteção Gastrointestinal</h3>
      <p>Proteção contra úlceras, colite e danos gastrointestinais induzidos por AINEs.</p>
      <h3>Recuperação Pós-Cirúrgica</h3>
      <p>Aceleração da cicatrização de feridas e anastomoses.</p>

      <h2>Protocolos de Uso</h2>
      <table>
        <thead><tr><th>Aplicação</th><th>Dose</th><th>Frequência</th><th>Duração</th></tr></thead>
        <tbody>
          <tr><td>Recuperação geral</td><td>250mcg</td><td>2x/dia</td><td>4-6 semanas</td></tr>
          <tr><td>Lesão aguda</td><td>500mcg</td><td>2x/dia</td><td>2-4 semanas</td></tr>
          <tr><td>Manutenção/prevenção</td><td>250mcg</td><td>1x/dia</td><td>4-8 semanas</td></tr>
        </tbody>
      </table>
      <div class="callout info"><strong>Via de administração:</strong> Pode ser usado via subcutânea (local ou sistêmica) ou oral. A via subcutânea próxima à lesão tende a ser mais eficaz para recuperação localizada.</div>

      <h2>Sinergia com TB-500</h2>
      <p>A combinação BPC-157 + TB-500 é considerada o "stack de recuperação" mais eficaz. Enquanto o BPC-157 atua mais na fase inflamatória e vascular, o TB-500 promove migração celular e reparo estrutural.</p>

      <h2>Perfil de Segurança</h2>
      <p>O BPC-157 apresenta um perfil de segurança excelente em estudos pré-clínicos, sem toxicidade relatada mesmo em doses suprafisiológicas. No entanto, estudos em humanos ainda são limitados.</p>
    `,
    seoTitle: 'BPC-157: Guia Completo de Recuperação com Peptídeos',
    seoDescription: 'BPC-157 para recuperação esportiva: mecanismo de ação, benefícios, dosagens e protocolos atualizados.',
    status: 'published',
    publishDate: '2025-03-18T12:00:00Z',
    pinned: false,
    featured: true,
    readingTime: 8,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver BPC-157', url: '#loja' },
    relatedPosts: ['post-9', 'post-17'],
    views: 11200,
    uniqueViews: 7800,
  },
  {
    id: 'post-9',
    title: 'Stack de Peptídeos para Performance e Recuperação',
    slug: 'stack-peptideos-performance',
    subtitle: 'Combinações sinérgicas de peptídeos para atletas',
    summary: 'Descubra as melhores combinações de peptídeos para potencializar performance e acelerar recuperação.',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    categories: ['cat-peptideos'],
    tags: ['tag-bpc157', 'tag-gh', 'tag-performance', 'tag-recuperacao', 'tag-avancado'],
    contentType: 'guide',
    content: `
      <h2>Introdução aos Stacks de Peptídeos</h2>
      <p>A combinação de peptídeos pode criar efeitos sinérgicos superiores ao uso individual. Este guia apresenta os stacks mais eficazes para diferentes objetivos, desde recuperação de lesões até otimização de composição corporal.</p>
      <div class="callout info"><strong>Princípio fundamental:</strong> Combine peptídeos com mecanismos complementares, não redundantes. A sinergia deve amplificar os resultados, não duplicar os mesmos efeitos.</div>

      <h2>Stack 1: Recuperação de Lesões</h2>
      <p>O stack mais popular para recuperação acelerada de lesões musculoesqueléticas:</p>
      <table>
        <thead><tr><th>Peptídeo</th><th>Dose</th><th>Frequência</th><th>Função</th></tr></thead>
        <tbody>
          <tr><td>BPC-157</td><td>250-500mcg</td><td>2x/dia</td><td>Angiogênese, anti-inflamatório</td></tr>
          <tr><td>TB-500</td><td>2-5mg</td><td>2x/semana</td><td>Migração celular, reparo estrutural</td></tr>
        </tbody>
      </table>

      <h2>Stack 2: GH / Anti-aging</h2>
      <p>Combinação para otimizar a secreção natural de GH:</p>
      <table>
        <thead><tr><th>Peptídeo</th><th>Dose</th><th>Frequência</th><th>Função</th></tr></thead>
        <tbody>
          <tr><td>CJC-1295 DAC</td><td>2mg</td><td>1x/semana</td><td>Elevação basal de GH (GHRH)</td></tr>
          <tr><td>Ipamorelin</td><td>200-300mcg</td><td>3x/dia</td><td>Pulsatilidade de GH (GHRP)</td></tr>
        </tbody>
      </table>
      <div class="callout tip"><strong>Timing:</strong> Aplique Ipamorelin em jejum, preferencialmente ao acordar, antes do treino e antes de dormir para maximizar os pulsos de GH.</div>

      <h2>Stack 3: Composição Corporal</h2>
      <ul>
        <li><strong>CJC-1295 + Ipamorelin:</strong> Base para elevação de GH</li>
        <li><strong>AOD-9604:</strong> Fragmento de GH para lipólise</li>
        <li><strong>BPC-157:</strong> Proteção gastrointestinal e recuperação</li>
      </ul>

      <h2>Stack 4: Performance Atlética</h2>
      <ul>
        <li><strong>BPC-157 + TB-500:</strong> Recuperação entre treinos</li>
        <li><strong>Hexarelin:</strong> Liberação aguda de GH pré-treino</li>
        <li><strong>MGF (Mechano Growth Factor):</strong> Regeneração muscular pós-treino</li>
      </ul>

      <h2>Regras de Reconstituição e Armazenamento</h2>
      <p>Peptídeos liofilizados devem ser reconstituídos com água bacteriostática, nunca água destilada simples. Após reconstituição, armazene a 2-8°C e use dentro de 4 semanas.</p>

      <h2>Considerações de Segurança</h2>
      <p>Embora peptídeos tenham perfil de segurança geralmente favorável, o uso combinado requer atenção a possíveis interações e monitoramento regular de IGF-1, glicemia em jejum e marcadores de inflamação.</p>
    `,
    seoTitle: 'Stack de Peptídeos: Guia de Combinações para Performance',
    seoDescription: 'Melhores stacks de peptídeos para performance e recuperação esportiva. BPC-157, TB-500, CJC-1295 e mais.',
    status: 'published',
    publishDate: '2025-03-12T09:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 11,
    author: 'Dr. Rafael Mendes',
    relatedPosts: ['post-8', 'post-17', 'post-18'],
    views: 7500,
    uniqueViews: 4900,
  },
  {
    id: 'post-10',
    title: 'Trembolona: O Anabólico Mais Potente — Prós e Contras',
    slug: 'trembolona-pros-contras',
    subtitle: 'Análise completa para usuários experientes',
    summary: 'Análise detalhada da Trembolona: por que é considerada a substância mais potente e quais são os riscos reais.',
    coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
    categories: ['cat-ergogenicos'],
    tags: ['tag-trembolona', 'tag-avancado', 'tag-bulking', 'tag-cutting'],
    contentType: 'substance-analysis',
    content: `
      <h2>Perfil da Trembolona</h2>
      <p>A Trembolona é frequentemente considerada o esteroide anabólico mais potente disponível. Com um índice anabólico de 500/500, supera a testosterona em 5 vezes tanto em atividade anabólica quanto androgênica.</p>

      <h2>Variantes Disponíveis</h2>
      <table>
        <thead><tr><th>Éster</th><th>Meia-vida</th><th>Frequência</th><th>Indicação</th></tr></thead>
        <tbody>
          <tr><td>Acetato</td><td>~3 dias</td><td>Dia sim, dia não</td><td>Mais popular, picos rápidos</td></tr>
          <tr><td>Enantato</td><td>~10 dias</td><td>2x/semana</td><td>Conveniência, menos aplicações</td></tr>
          <tr><td>Hexahidrobenzilcarbonato</td><td>~14 dias</td><td>1x/semana</td><td>Meia-vida intermediária</td></tr>
        </tbody>
      </table>

      <h2>Benefícios Únicos</h2>
      <ul>
        <li>Ganhos de massa magra sem retenção hídrica</li>
        <li>Aumento dramático de força e performance</li>
        <li>Efeito de partição de nutrientes</li>
        <li>Versatilidade — eficaz tanto em bulking quanto cutting</li>
        <li>Redução de SHBG — potencializa testosterona livre</li>
      </ul>

      <h2>Efeitos Colaterais Significativos</h2>
      <div class="callout warning"><strong>Aviso:</strong> Substância recomendada APENAS para usuários muito experientes com acompanhamento médico rigoroso.</div>
      <ul>
        <li><strong>Cardiovascular:</strong> Impacto severo no perfil lipídico, aumento de PA</li>
        <li><strong>Neurológico:</strong> Insônia, "tren-somnia", agressividade, ansiedade</li>
        <li><strong>Respiratório:</strong> "Tren cough" — tosse aguda após injeção</li>
        <li><strong>Endócrino:</strong> Supressão profunda, sem aromatização mas atividade progestágena</li>
        <li><strong>Renal:</strong> Possível estresse renal (urina escura)</li>
        <li><strong>Sexual:</strong> Disfunção erétil, anorgasmia (pela atividade progestágena)</li>
      </ul>

      <h2>Dosagem Típica</h2>
      <p>Acetato: 200-400mg/semana. Nunca como primeira substância — sempre com base de testosterona. Duração máxima recomendada: 8-10 semanas.</p>

      <h2>Quem NÃO Deve Usar</h2>
      <ul>
        <li>Iniciantes em esteroides</li>
        <li>Pessoas com histórico cardiovascular</li>
        <li>Pessoas com tendência a ansiedade/depressão</li>
        <li>Mulheres (virilização severa mesmo em doses baixas)</li>
      </ul>
    `,
    seoTitle: 'Trembolona: Guia Completo — Benefícios, Riscos e Protocolos',
    seoDescription: 'Trembolona: análise completa do anabólico mais potente. Benefícios, riscos, variantes e protocolos para avançados.',
    status: 'published',
    publishDate: '2025-02-20T10:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 9,
    author: 'Dr. Rafael Mendes',
    relatedPosts: ['post-1', 'post-4', 'post-14'],
    views: 13800,
    uniqueViews: 8400,
  },
  {
    id: 'post-11',
    title: 'Femproporex: Análise Completa para Emagrecimento',
    slug: 'femproporex-analise-emagrecimento',
    subtitle: 'Mecanismo de ação, eficácia e protocolos de uso',
    summary: 'Análise detalhada do Femproporex como auxiliar no emagrecimento, incluindo mecanismos e comparações.',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    categories: ['cat-emagrecimento'],
    tags: ['tag-saude'],
    contentType: 'article',
    content: `
      <h2>O que é Femproporex?</h2>
      <p>O Femproporex é um anorexígeno simpaticomimético utilizado no tratamento da obesidade, atuando como pró-droga da anfetamina. É uma das opções mais tradicionais no Brasil para controle de peso.</p>

      <h2>Mecanismo de Ação</h2>
      <p>Atua no sistema nervoso central liberando catecolaminas (noradrenalina e dopamina), resultando em supressão do apetite e aumento do metabolismo basal. Após absorção, é parcialmente convertido em anfetamina.</p>

      <h2>Eficácia Clínica</h2>
      <p>Estudos demonstram perda de peso média de 4-7% em 12 semanas de uso. A eficácia é maior quando combinada com dieta hipocalórica e exercício regular.</p>

      <h2>Dosagem e Administração</h2>
      <ul>
        <li>Dose usual: 25mg, 1-2x/dia</li>
        <li>Administrar pela manhã ou início da tarde</li>
        <li>Evitar uso noturno (risco de insônia)</li>
        <li>Duração máxima recomendada: 12 semanas</li>
      </ul>

      <h2>Efeitos Colaterais</h2>
      <table>
        <thead><tr><th>Efeito</th><th>Frequência</th><th>Gravidade</th></tr></thead>
        <tbody>
          <tr><td>Insônia</td><td>Muito comum</td><td>Leve</td></tr>
          <tr><td>Boca seca</td><td>Comum</td><td>Leve</td></tr>
          <tr><td>Taquicardia</td><td>Comum</td><td>Moderada</td></tr>
          <tr><td>Irritabilidade</td><td>Comum</td><td>Leve</td></tr>
          <tr><td>Dependência</td><td>Incomum</td><td>Grave</td></tr>
        </tbody>
      </table>
      <div class="callout warning"><strong>Atenção:</strong> O Femproporex é controlado pela ANVISA (B2). Só pode ser adquirido com receita especial e notificação de receita.</div>

      <h2>Comparação com Outras Opções</h2>
      <p>Comparado à Sibutramina, o Femproporex tem efeito mais rápido mas maior potencial de tolerância. Comparado aos agonistas de GLP-1 (Semaglutida, Tirzepatida), apresenta eficácia significativamente inferior e mais efeitos colaterais.</p>

      <h2>Considerações Finais</h2>
      <p>O Femproporex ainda tem seu lugar no arsenal terapêutico, mas está sendo gradualmente substituído por opções mais modernas e seguras. A indicação deve ser criteriosa e sempre com acompanhamento médico.</p>
    `,
    seoTitle: 'Femproporex para Emagrecimento: Análise Completa 2025',
    seoDescription: 'Femproporex: mecanismo de ação, eficácia para perda de peso, efeitos colaterais e protocolos de uso.',
    status: 'published',
    publishDate: '2025-02-15T14:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 6,
    author: 'Dra. Camila Soares',
    relatedPosts: ['post-5', 'post-6'],
    views: 5200,
    uniqueViews: 3400,
  },
  {
    id: 'post-12',
    title: 'Ciclo de Bulking para Intermediários: Testosterona + Deca',
    slug: 'ciclo-bulking-testosterona-deca',
    subtitle: 'O clássico ciclo de massa com protocolo atualizado',
    summary: 'Protocolo completo do ciclo de bulking com Testosterona e Nandrolona Decanoato para ganho de massa muscular.',
    coverImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80',
    categories: ['cat-ciclos'],
    tags: ['tag-testosterona', 'tag-bulking', 'tag-protocolo'],
    contentType: 'protocol',
    content: `
      <h2>O Clássico Testo + Deca</h2>
      <p>A combinação de Testosterona com Nandrolona Decanoato é um dos ciclos mais tradicionais e eficazes para ganho de massa muscular. Esta combinação é usada há décadas e continua sendo uma das mais populares entre usuários intermediários.</p>

      <h2>Por que esta Combinação Funciona</h2>
      <ul>
        <li>Testosterona provê a base androgênica necessária</li>
        <li>Nandrolona adiciona efeito anabólico com menor androgenicidade</li>
        <li>Efeito sinérgico em síntese proteica</li>
        <li>Nandrolona melhora a saúde articular (lubrificação sinovial)</li>
        <li>Ganhos sólidos e sustentáveis</li>
      </ul>

      <h2>Protocolo Detalhado — 12 Semanas</h2>
      <table>
        <thead><tr><th>Semana</th><th>Testosterona E.</th><th>Deca</th><th>Anastrozol</th><th>HCG</th></tr></thead>
        <tbody>
          <tr><td>1-12</td><td>500mg/sem</td><td>400mg/sem</td><td>0.5mg 3x/sem</td><td>500UI 2x/sem</td></tr>
          <tr><td>13-14</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>15-18</td><td colspan="4">TPC: Tamoxifeno 20mg/dia + Clomifeno 50mg/dia</td></tr>
        </tbody>
      </table>
      <div class="callout info"><strong>Regra de ouro:</strong> A dosagem de Testosterona deve ser SEMPRE igual ou superior à de Nandrolona para evitar problemas de "Deca Dick" (disfunção erétil por excesso de progesterona).</div>

      <h2>Dieta para Bulking</h2>
      <p>Superávit calórico de 300-500kcal acima do TDEE. Proteína: 2g/kg. Carboidratos: 4-6g/kg. Gorduras: 0.8-1g/kg. Refeições a cada 3-4 horas.</p>

      <h2>O que Esperar</h2>
      <p>Ganho total de 6-10kg, sendo 4-7kg de massa magra (o restante é retenção hídrica que será eliminada na TPC). Aumento significativo de força em 3-4 semanas.</p>

      <h2>TPC Detalhada</h2>
      <p>Devido à meia-vida longa da Nandrolona Decanoato (~15 dias), a TPC deve ser iniciada 3 semanas após a última aplicação:</p>
      <ul>
        <li>Tamoxifeno 20mg/dia por 4 semanas</li>
        <li>Clomifeno 50mg/dia por 4 semanas</li>
        <li>Zinco 50mg/dia e Vitamina D 5000UI/dia</li>
      </ul>
    `,
    seoTitle: 'Ciclo Bulking Testosterona + Deca: Protocolo Intermediário',
    seoDescription: 'Ciclo de bulking com Testosterona e Deca-Durabolin para intermediários. Dosagens, duração e TPC completa.',
    status: 'published',
    publishDate: '2025-03-01T08:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 8,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver Testosterona', url: '#loja' },
    relatedPosts: ['post-1', 'post-2', 'post-13'],
    views: 10300,
    uniqueViews: 6500,
  },
  // ========== NEW POSTS ==========
  {
    id: 'post-13',
    title: 'Ciclo Feminino Iniciante: Oxandrolona com Segurança',
    slug: 'ciclo-feminino-iniciante-oxandrolona',
    subtitle: 'Protocolo seguro e detalhado para mulheres que consideram o primeiro ciclo',
    summary: 'Guia completo para mulheres iniciantes em ciclos com Oxandrolona. Dosagens conservadoras, monitoramento de virilização e resultados esperados.',
    coverImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80',
    categories: ['cat-ciclos'],
    tags: ['tag-oxandrolona', 'tag-feminino', 'tag-iniciante', 'tag-cutting', 'tag-protocolo'],
    contentType: 'guide',
    content: `
      <h2>Introdução</h2>
      <p>A Oxandrolona é considerada a substância mais segura para mulheres devido ao seu baixo índice androgênico. Ainda assim, o primeiro ciclo feminino exige cautela extrema e monitoramento constante de sinais de virilização.</p>
      <div class="callout warning"><strong>Aviso fundamental:</strong> Mesmo com a substância mais suave, toda mulher deve realizar exames hormonais completos antes de iniciar qualquer ciclo.</div>

      <h2>Exames Pré-Ciclo para Mulheres</h2>
      <ul>
        <li>Hemograma completo</li>
        <li>Testosterona total e livre</li>
        <li>DHEA-S e Androstenediona</li>
        <li>Estradiol, Progesterona, LH, FSH</li>
        <li>Perfil lipídico completo</li>
        <li>TGO, TGP (função hepática)</li>
        <li>Ultrassom transvaginal (descartar SOP)</li>
      </ul>

      <h2>Protocolo Sugerido — 6 Semanas</h2>
      <table>
        <thead><tr><th>Semana</th><th>Oxandrolona</th><th>Observação</th></tr></thead>
        <tbody>
          <tr><td>1-2</td><td>5mg/dia</td><td>Avaliar tolerância</td></tr>
          <tr><td>3-4</td><td>10mg/dia (dividido 2x)</td><td>Monitorar sinais</td></tr>
          <tr><td>5-6</td><td>10mg/dia (dividido 2x)</td><td>Última fase, avaliar continuidade</td></tr>
        </tbody>
      </table>
      <div class="callout tip"><strong>Regra de ouro feminina:</strong> Se qualquer sinal de virilização aparecer, suspenda IMEDIATAMENTE. Não espere "passar". Alguns efeitos são irreversíveis.</div>

      <h2>Sinais de Virilização — O que Monitorar</h2>
      <ul>
        <li><strong>Voz:</strong> Rouquidão ou engrossamento (mais grave — pode ser irreversível)</li>
        <li><strong>Acne:</strong> Aparecimento em mandíbula, costas e peito</li>
        <li><strong>Pelos:</strong> Aumento de pelugem facial</li>
        <li><strong>Clitóris:</strong> Aumento de sensibilidade ou tamanho</li>
        <li><strong>Ciclo menstrual:</strong> Irregularidades</li>
      </ul>

      <h2>Resultados Esperados</h2>
      <p>Com dieta e treino adequados, mulheres podem esperar:</p>
      <ul>
        <li>Ganho de 2-4kg de massa magra</li>
        <li>Redução de 3-5% de gordura corporal</li>
        <li>Aumento significativo de força (20-30%)</li>
        <li>Aspecto muscular mais definido e tonificado</li>
      </ul>

      <h2>Pós-Ciclo Feminino</h2>
      <p>Mulheres geralmente não precisam de TPC formal com SERMs. O eixo feminino se recupera naturalmente em 4-8 semanas. Recomenda-se apenas suporte com Zinco, Magnésio e vitamina D.</p>
    `,
    seoTitle: 'Ciclo Feminino com Oxandrolona: Guia Completo para Iniciantes',
    seoDescription: 'Guia seguro para o primeiro ciclo feminino com Oxandrolona. Dosagens, sinais de virilização e resultados esperados.',
    status: 'published',
    publishDate: '2025-03-25T09:00:00Z',
    pinned: false,
    featured: true,
    readingTime: 10,
    author: 'Dra. Camila Soares',
    primaryCTA: { label: 'Ver Oxandrolona', url: '#loja' },
    relatedPosts: ['post-3', 'post-2'],
    views: 16200,
    uniqueViews: 10800,
  },
  {
    id: 'post-14',
    title: 'Primobolan: A Substância Favorita dos Fisiculturistas Clássicos',
    slug: 'primobolan-analise-completa',
    subtitle: 'Metenolona — perfil suave, ganhos de qualidade e segurança',
    summary: 'Análise completa do Primobolan (Metenolona): por que é considerado um dos esteroides mais seguros e como utilizá-lo corretamente.',
    coverImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80',
    categories: ['cat-ergogenicos'],
    tags: ['tag-primobolan', 'tag-cutting', 'tag-feminino'],
    contentType: 'substance-analysis',
    content: `
      <h2>O que é Primobolan?</h2>
      <p>O Primobolan (Metenolona) é um esteroide anabólico derivado da DHT, famosamente associado a Arnold Schwarzenegger na era de ouro do fisiculturismo. Disponível em versões oral (Acetato) e injetável (Enantato).</p>

      <h2>Perfil Farmacológico</h2>
      <table>
        <thead><tr><th>Propriedade</th><th>Oral (Acetato)</th><th>Injetável (Enantato)</th></tr></thead>
        <tbody>
          <tr><td>Índice Anabólico</td><td>88</td><td>88</td></tr>
          <tr><td>Índice Androgênico</td><td>44-57</td><td>44-57</td></tr>
          <tr><td>Meia-vida</td><td>~5 horas</td><td>~10 dias</td></tr>
          <tr><td>Aromatização</td><td>Nenhuma</td><td>Nenhuma</td></tr>
          <tr><td>Hepatotoxicidade</td><td>Mínima</td><td>Nenhuma</td></tr>
        </tbody>
      </table>

      <h2>Por que Primobolan é Especial</h2>
      <ul>
        <li><strong>Sem aromatização:</strong> Zero retenção hídrica e sem ginecomastia</li>
        <li><strong>Baixa hepatotoxicidade:</strong> Mesmo na versão oral</li>
        <li><strong>Ganhos de qualidade:</strong> Massa magra sólida e sustentável</li>
        <li><strong>Seguro para mulheres:</strong> Na versão oral em doses baixas</li>
        <li><strong>Imunoestimulante:</strong> Efeitos positivos no sistema imunológico</li>
      </ul>
      <div class="callout info"><strong>Curiosidade:</strong> O Primobolan é uma das poucas substâncias que foi prescrita clinicamente para mulheres e crianças para tratamento de desnutrição e perda muscular.</div>

      <h2>Dosagem e Protocolos</h2>
      <h3>Homens</h3>
      <p>Injetável: 400-700mg/semana. A eficácia do Primobolan requer doses relativamente altas, o que impacta no custo-benefício.</p>
      <h3>Mulheres</h3>
      <p>Oral: 25-75mg/dia. É uma das opções mais seguras para uso feminino, perdendo apenas para a Oxandrolona.</p>

      <h2>Desvantagens</h2>
      <ul>
        <li>Custo elevado (uma das substâncias mais caras)</li>
        <li>Alto índice de falsificações no mercado</li>
        <li>Ganhos modestos comparados a substâncias mais potentes</li>
        <li>Necessidade de doses altas para resultados significativos</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O Primobolan é ideal para quem prioriza segurança e ganhos sustentáveis sobre volume rápido. Excelente para cutting e para quem quer uma abordagem conservadora.</p>
    `,
    seoTitle: 'Primobolan (Metenolona): Análise Completa — Guia 2025',
    seoDescription: 'Primobolan: análise completa da Metenolona. Perfil de segurança, dosagens, protocolos e por que é favorito dos clássicos.',
    status: 'published',
    publishDate: '2025-03-28T10:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 9,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver Primobolan', url: '#loja' },
    relatedPosts: ['post-3', 'post-10'],
    views: 8100,
    uniqueViews: 5300,
  },
  {
    id: 'post-15',
    title: 'Ciclo de Recomposição Corporal: Ganhar Músculo e Perder Gordura',
    slug: 'ciclo-recomposicao-corporal',
    subtitle: 'É possível ganhar massa e queimar gordura simultaneamente?',
    summary: 'Protocolo detalhado para recomposição corporal com substâncias que favorecem tanto o anabolismo quanto a lipólise.',
    coverImage: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1200&q=80',
    categories: ['cat-ciclos'],
    tags: ['tag-recomposicao', 'tag-cutting', 'tag-testosterona', 'tag-protocolo'],
    contentType: 'protocol',
    content: `
      <h2>A Recomposição Corporal é Real?</h2>
      <p>Naturalmente, ganhar músculo e perder gordura simultaneamente é extremamente difícil. No entanto, com o suporte farmacológico adequado, a recomposição corporal se torna não apenas possível, mas altamente eficiente.</p>

      <h2>Quem se Beneficia Mais</h2>
      <ul>
        <li>Iniciantes em ciclos com gordura corporal moderada (15-22%)</li>
        <li>Usuários retornando após período off</li>
        <li>Pessoas que não querem fazer bulk/cut tradicionais</li>
      </ul>

      <h2>Protocolo Sugerido — 12 Semanas</h2>
      <table>
        <thead><tr><th>Semana</th><th>Testosterona E.</th><th>Oxandrolona</th><th>Cardarine (GW-501516)</th></tr></thead>
        <tbody>
          <tr><td>1-12</td><td>400mg/sem</td><td>—</td><td>20mg/dia</td></tr>
          <tr><td>5-12</td><td>400mg/sem</td><td>30mg/dia</td><td>20mg/dia</td></tr>
        </tbody>
      </table>

      <h2>Estratégia Nutricional</h2>
      <p>A chave da recomposição é a dieta no nível de manutenção calórica (TDEE) com alta proteína:</p>
      <ul>
        <li><strong>Calorias:</strong> TDEE ±200kcal (cycling entre dias de treino e descanso)</li>
        <li><strong>Proteína:</strong> 2.5-3g/kg — essencial para maximizar síntese proteica</li>
        <li><strong>Carboidratos:</strong> Maior nos dias de treino, menor nos dias off</li>
        <li><strong>Gorduras:</strong> 0.8g/kg — manter hormônios otimizados</li>
      </ul>
      <div class="callout tip"><strong>Carb cycling simplificado:</strong> Dias de treino: carboidratos altos (4g/kg). Dias off: carboidratos baixos (1.5g/kg). Proteína e gordura constantes.</div>

      <h2>Treino para Recomposição</h2>
      <p>O treino ideal para recomposição combina musculação pesada (4-6x/semana) com cardio moderado (3-4 sessões de 30min LISS ou 2-3 sessões de HIIT).</p>

      <h2>Resultados Esperados em 12 Semanas</h2>
      <ul>
        <li>Ganho de 4-6kg de massa magra</li>
        <li>Perda de 4-8kg de gordura</li>
        <li>Peso corporal pode se manter similar, mas composição muda drasticamente</li>
        <li>Aumento significativo de força e performance</li>
      </ul>

      <h2>TPC</h2>
      <p>Protocolo padrão: iniciar 2 semanas após última aplicação de Testosterona. Tamoxifeno 20mg/dia por 4-6 semanas.</p>
    `,
    seoTitle: 'Ciclo de Recomposição Corporal: Protocolo Completo 2025',
    seoDescription: 'Protocolo de ciclo para recomposição corporal — ganhar músculo e perder gordura ao mesmo tempo. Dieta, treino e substâncias.',
    status: 'published',
    publishDate: '2025-04-01T08:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 10,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver Produtos', url: '#loja' },
    relatedPosts: ['post-1', 'post-2', 'post-12'],
    views: 9400,
    uniqueViews: 6200,
  },
  {
    id: 'post-16',
    title: 'Semaglutida: O Guia Definitivo para Perda de Peso',
    slug: 'semaglutida-guia-definitivo',
    subtitle: 'Ozempic e Wegovy — como funcionam e para quem são indicados',
    summary: 'Tudo sobre Semaglutida para emagrecimento: mecanismo, dosagens, resultados dos estudos STEP e comparações com Tirzepatida.',
    coverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
    categories: ['cat-emagrecimento'],
    tags: ['tag-semaglutida', 'tag-saude'],
    contentType: 'guide',
    content: `
      <h2>O que é Semaglutida?</h2>
      <p>A Semaglutida é um agonista do receptor GLP-1 (peptídeo semelhante ao glucagon tipo 1) desenvolvido pela Novo Nordisk. Comercializada como Ozempic (para diabetes) e Wegovy (para obesidade), revolucionou o tratamento farmacológico da perda de peso.</p>

      <h2>Mecanismo de Ação</h2>
      <p>A Semaglutida mimetiza o GLP-1 endógeno, atuando em múltiplos alvos:</p>
      <ul>
        <li><strong>Hipotálamo:</strong> Redução do apetite e aumento da saciedade</li>
        <li><strong>Estômago:</strong> Retardo do esvaziamento gástrico</li>
        <li><strong>Pâncreas:</strong> Aumento da secreção de insulina (dependente de glicose)</li>
        <li><strong>Fígado:</strong> Redução da produção de glicose</li>
      </ul>

      <h2>Resultados dos Estudos STEP</h2>
      <table>
        <thead><tr><th>Estudo</th><th>População</th><th>Perda de peso</th><th>Duração</th></tr></thead>
        <tbody>
          <tr><td>STEP 1</td><td>Obesos sem diabetes</td><td>-14.9%</td><td>68 semanas</td></tr>
          <tr><td>STEP 2</td><td>Obesos com DM2</td><td>-9.6%</td><td>68 semanas</td></tr>
          <tr><td>STEP 3</td><td>Obesos + mudança de hábitos</td><td>-16%</td><td>68 semanas</td></tr>
          <tr><td>STEP 5</td><td>Longo prazo</td><td>-15.2%</td><td>104 semanas</td></tr>
        </tbody>
      </table>
      <div class="callout info"><strong>Importante:</strong> Aproximadamente 1/3 dos pacientes no STEP 1 perderam mais de 20% do peso corporal — resultados anteriormente associados apenas à cirurgia bariátrica.</div>

      <h2>Protocolo de Titulação</h2>
      <p>A Semaglutida deve ser titulada gradualmente para minimizar efeitos gastrointestinais:</p>
      <ul>
        <li>Semanas 1-4: 0.25mg/semana</li>
        <li>Semanas 5-8: 0.5mg/semana</li>
        <li>Semanas 9-12: 1.0mg/semana</li>
        <li>Semanas 13-16: 1.7mg/semana</li>
        <li>Semana 17+: 2.4mg/semana (dose alvo)</li>
      </ul>

      <h2>Efeitos Colaterais</h2>
      <ul>
        <li>Náusea (44% dos pacientes — melhora com o tempo)</li>
        <li>Diarreia ou constipação</li>
        <li>Dor abdominal</li>
        <li>Cefaleia</li>
        <li>Raramente: pancreatite, colelitíase</li>
      </ul>

      <h2>Semaglutida vs Tirzepatida</h2>
      <p>Embora a Semaglutida tenha sido pioneira, a Tirzepatida (agonista duplo GIP/GLP-1) demonstrou resultados superiores em perda de peso. No entanto, a Semaglutida tem mais dados de segurança de longo prazo e benefícios cardiovasculares comprovados (estudo SELECT).</p>

      <h2>Quem se Beneficia</h2>
      <p>Indicada para adultos com IMC ≥30 ou IMC ≥27 com pelo menos uma comorbidade relacionada ao peso. Não é recomendada como "shortcut" para perda de peso estética sem indicação clínica.</p>
    `,
    seoTitle: 'Semaglutida (Ozempic/Wegovy): Guia Completo de Emagrecimento',
    seoDescription: 'Semaglutida para perda de peso: mecanismo, dosagens, resultados STEP e comparação com Tirzepatida. Guia definitivo.',
    status: 'published',
    publishDate: '2025-04-03T10:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 11,
    author: 'Dra. Camila Soares',
    primaryCTA: { label: 'Ver Semaglutida', url: '#loja' },
    relatedPosts: ['post-5', 'post-7'],
    views: 19500,
    uniqueViews: 12800,
  },
  {
    id: 'post-17',
    title: 'TB-500: O Peptídeo de Regeneração Tecidual',
    slug: 'tb-500-regeneracao-tecidual',
    subtitle: 'Timosina Beta-4 — mecanismos, protocolos e sinergia com BPC-157',
    summary: 'Análise completa do TB-500: como funciona para regeneração de tecidos, protocolos de dosagem e por que combina perfeitamente com BPC-157.',
    coverImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80',
    categories: ['cat-peptideos'],
    tags: ['tag-tb500', 'tag-recuperacao', 'tag-performance'],
    contentType: 'substance-analysis',
    content: `
      <h2>O que é TB-500?</h2>
      <p>O TB-500 é uma versão sintética da Timosina Beta-4 (Tβ4), uma proteína natural presente em todas as células do corpo humano. A Tβ4 é uma das primeiras proteínas expressas após lesão tecidual, desempenhando papel crucial na regeneração.</p>

      <h2>Mecanismos de Ação</h2>
      <ul>
        <li><strong>Sequestro de actina-G:</strong> Regula a polimerização de actina, essencial para migração celular</li>
        <li><strong>Migração celular:</strong> Promove deslocamento de células para o local da lesão</li>
        <li><strong>Diferenciação de células-tronco:</strong> Ativa células progenitoras para reparo</li>
        <li><strong>Anti-inflamatório:</strong> Modula resposta inflamatória sem suprimi-la</li>
        <li><strong>Angiogênese:</strong> Promove formação de novos vasos sanguíneos</li>
      </ul>

      <h2>Diferença entre TB-500 e BPC-157</h2>
      <table>
        <thead><tr><th>Característica</th><th>TB-500</th><th>BPC-157</th></tr></thead>
        <tbody>
          <tr><td>Origem</td><td>Timosina Beta-4</td><td>Proteína gástrica</td></tr>
          <tr><td>Ação primária</td><td>Migração celular, reparo estrutural</td><td>Angiogênese, anti-inflamatório</td></tr>
          <tr><td>Efeito sistêmico</td><td>Alto (circula por todo o corpo)</td><td>Moderado (mais localizado)</td></tr>
          <tr><td>Melhor para</td><td>Lesões crônicas, fibrose</td><td>Lesões agudas, inflamação</td></tr>
          <tr><td>Dosagem</td><td>2-5mg 2x/semana</td><td>250-500mcg 2x/dia</td></tr>
        </tbody>
      </table>
      <div class="callout tip"><strong>Stack ideal:</strong> TB-500 + BPC-157 são complementares — o BPC-157 inicia o processo de cura (inflamação/vascularização) e o TB-500 completa (migração celular/reparo estrutural).</div>

      <h2>Protocolos de Uso</h2>
      <h3>Fase de Carga (4 semanas)</h3>
      <p>5mg, 2 vezes por semana, via subcutânea</p>
      <h3>Fase de Manutenção</h3>
      <p>2-5mg, 1 vez por semana</p>

      <h2>Aplicações Principais</h2>
      <ul>
        <li>Recuperação de lesões musculares</li>
        <li>Reparo de tendões e ligamentos</li>
        <li>Cicatrização acelerada</li>
        <li>Fibrose cardíaca (dados pré-clínicos)</li>
        <li>Recuperação pós-cirúrgica</li>
      </ul>

      <h2>Perfil de Segurança</h2>
      <p>O TB-500 apresenta excelente perfil de segurança em estudos pré-clínicos. Efeitos colaterais são raros e geralmente limitados a leve rubor ou dor no local da injeção.</p>
      <div class="callout warning"><strong>Nota:</strong> Há preocupação teórica sobre promoção de crescimento tumoral em indivíduos com neoplasias pré-existentes, embora evidências sejam inconclusivas. Pacientes oncológicos devem evitar.</div>
    `,
    seoTitle: 'TB-500: Guia Completo — Regeneração Tecidual com Peptídeos',
    seoDescription: 'TB-500 (Timosina Beta-4): mecanismos de regeneração, protocolos de uso e por que combina com BPC-157.',
    status: 'published',
    publishDate: '2025-04-05T11:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 9,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver TB-500', url: '#loja' },
    relatedPosts: ['post-8', 'post-9', 'post-18'],
    views: 7300,
    uniqueViews: 4800,
  },
  {
    id: 'post-18',
    title: 'Ipamorelin + CJC-1295: O Stack de GH Mais Seguro',
    slug: 'ipamorelin-cjc1295-stack-gh',
    subtitle: 'Estimulação natural do hormônio do crescimento com peptídeos',
    summary: 'Guia completo do stack Ipamorelin + CJC-1295 para estimulação do GH: como funciona, dosagens, timing e resultados esperados.',
    coverImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80',
    categories: ['cat-peptideos'],
    tags: ['tag-ipamorelin', 'tag-gh', 'tag-performance', 'tag-recuperacao'],
    contentType: 'guide',
    content: `
      <h2>Por que Estimular GH com Peptídeos?</h2>
      <p>O Hormônio do Crescimento (GH) é essencial para regeneração tecidual, composição corporal e anti-envelhecimento. Em vez de usar GH exógeno (caro e com mais efeitos colaterais), peptídeos estimulam a produção natural, mantendo a pulsatilidade fisiológica.</p>

      <h2>O Stack Perfeito</h2>
      <h3>Ipamorelin (GHRP)</h3>
      <p>Secretagogo de GH que estimula pulsos de liberação pela hipófise. O mais seletivo e seguro dos GHRPs — não aumenta significativamente cortisol, prolactina ou grelina.</p>
      <h3>CJC-1295 (GHRH)</h3>
      <p>Análogo do hormônio liberador de GH. Amplifica e prolonga os pulsos de GH. Disponível em duas versões:</p>
      <table>
        <thead><tr><th>Versão</th><th>Meia-vida</th><th>Frequência</th><th>Indicação</th></tr></thead>
        <tbody>
          <tr><td>CJC-1295 DAC</td><td>~8 dias</td><td>1-2x/semana</td><td>Elevação basal constante</td></tr>
          <tr><td>CJC-1295 sem DAC (Mod GRF 1-29)</td><td>~30 min</td><td>2-3x/dia</td><td>Pulsos agudos, mais fisiológico</td></tr>
        </tbody>
      </table>

      <h2>Protocolo Recomendado</h2>
      <table>
        <thead><tr><th>Peptídeo</th><th>Dose</th><th>Frequência</th><th>Timing</th></tr></thead>
        <tbody>
          <tr><td>Ipamorelin</td><td>200-300mcg</td><td>2-3x/dia</td><td>Jejum (ao acordar, pré-treino, antes de dormir)</td></tr>
          <tr><td>CJC-1295 sem DAC</td><td>100mcg</td><td>2-3x/dia</td><td>Junto com Ipamorelin</td></tr>
        </tbody>
      </table>
      <div class="callout info"><strong>Timing é fundamental:</strong> Aplique sempre em jejum — insulina suprime a liberação de GH. Espere 30-60 min após a aplicação para comer.</div>

      <h2>Por que Este Stack é Superior</h2>
      <ul>
        <li><strong>Pulsatilidade preservada:</strong> Mantém o padrão natural de GH</li>
        <li><strong>Sem dessensibilização:</strong> Ipamorelin não causa downregulation</li>
        <li><strong>Sinergia GHRP + GHRH:</strong> Amplificação de 3-5x nos pulsos de GH</li>
        <li><strong>Sem efeitos em cortisol/prolactina:</strong> Diferente de GHRP-6 e Hexarelin</li>
        <li><strong>Custo muito menor que GH exógeno</strong></li>
      </ul>

      <h2>Resultados Esperados</h2>
      <p>Após 3-6 meses de uso consistente:</p>
      <ul>
        <li>Melhora na qualidade do sono (mais profundo e restaurador)</li>
        <li>Redução de gordura corporal (especialmente abdominal)</li>
        <li>Melhora na elasticidade e qualidade da pele</li>
        <li>Recuperação mais rápida entre treinos</li>
        <li>Aumento de energia e bem-estar geral</li>
      </ul>

      <h2>Monitoramento</h2>
      <p>Exames recomendados: IGF-1 (principal marcador), glicemia em jejum, insulina. Dosar IGF-1 antes de iniciar e a cada 8-12 semanas.</p>
      <div class="callout warning"><strong>Atenção:</strong> Se IGF-1 ultrapassar o range de referência superior, reduza a dose ou frequência. Níveis cronicamente elevados de IGF-1 estão associados a riscos de saúde.</div>
    `,
    seoTitle: 'Ipamorelin + CJC-1295: Guia Completo do Stack de GH',
    seoDescription: 'Stack Ipamorelin + CJC-1295 para GH: protocolos, dosagens, timing e resultados. O stack de peptídeos mais seguro.',
    status: 'published',
    publishDate: '2025-04-02T09:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 12,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver Peptídeos', url: '#loja' },
    relatedPosts: ['post-9', 'post-8', 'post-19'],
    views: 6800,
    uniqueViews: 4500,
  },
  {
    id: 'post-19',
    title: 'Melanotan II: Bronzeamento e Além',
    slug: 'melanotan-ii-bronzeamento',
    subtitle: 'O peptídeo que bronzeia, suprime apetite e melhora libido',
    summary: 'Análise completa do Melanotan II: como funciona para bronzeamento sintético, efeitos colaterais, dosagens e precauções importantes.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    categories: ['cat-peptideos'],
    tags: ['tag-melanotan', 'tag-saude'],
    contentType: 'substance-analysis',
    content: `
      <h2>O que é Melanotan II?</h2>
      <p>O Melanotan II (MT-II) é um análogo sintético do hormônio estimulante de alfa-melanócitos (α-MSH). Originalmente desenvolvido pela Universidade do Arizona para proteção contra câncer de pele, seus efeitos colaterais "desejáveis" — bronzeamento, supressão de apetite e aumento de libido — o tornaram popular no mercado.</p>

      <h2>Mecanismos de Ação</h2>
      <p>O MT-II atua nos receptores de melanocortina (MC1R-MC5R), com efeitos em múltiplos sistemas:</p>
      <table>
        <thead><tr><th>Receptor</th><th>Efeito</th></tr></thead>
        <tbody>
          <tr><td>MC1R</td><td>Estimulação da melanogênese (bronzeamento)</td></tr>
          <tr><td>MC3R</td><td>Regulação energética e metabolismo</td></tr>
          <tr><td>MC4R</td><td>Função sexual, supressão de apetite</td></tr>
          <tr><td>MC5R</td><td>Secreção de glândulas exócrinas</td></tr>
        </tbody>
      </table>

      <h2>Protocolo de Uso</h2>
      <h3>Fase de Carga</h3>
      <ul>
        <li>Dia 1: 0.1mg (teste de tolerância)</li>
        <li>Dias 2-3: 0.25mg/dia</li>
        <li>Dias 4+: 0.5mg/dia até atingir o tom desejado (geralmente 2-3 semanas)</li>
      </ul>
      <h3>Fase de Manutenção</h3>
      <p>0.5mg, 1-2 vezes por semana para manter o bronzeado</p>
      <div class="callout tip"><strong>Dica:</strong> Exposição solar moderada (15-20min) potencializa os resultados. O MT-II prepara os melanócitos, mas a UV ativa a produção de melanina.</div>

      <h2>Efeitos Colaterais</h2>
      <ul>
        <li><strong>Náusea:</strong> Muito comum nas primeiras aplicações — reduz com o tempo</li>
        <li><strong>Rubor facial:</strong> Temporário, dura 1-2 horas</li>
        <li><strong>Ereções espontâneas:</strong> Em homens, especialmente no início</li>
        <li><strong>Aparecimento de nevos (pintas):</strong> Pode escurecer pintas existentes</li>
        <li><strong>Letargia e bocejos:</strong> Comum, especialmente em doses maiores</li>
      </ul>
      <div class="callout warning"><strong>Precaução séria:</strong> O Melanotan II pode alterar nevos existentes, dificultando a dermatoscopia e detecção precoce de melanoma. Consulte um dermatologista antes de usar e faça mapeamento de pintas.</div>

      <h2>Contraindicações</h2>
      <ul>
        <li>Histórico pessoal ou familiar de melanoma</li>
        <li>Múltiplos nevos atípicos</li>
        <li>Doenças autoimunes</li>
        <li>Gravidez ou amamentação</li>
      </ul>

      <h2>Considerações Finais</h2>
      <p>O Melanotan II é eficaz para bronzeamento e possui efeitos adicionais interessantes, mas seus riscos dermatológicos não devem ser subestimados. O acompanhamento dermatológico regular é indispensável para qualquer usuário.</p>
    `,
    seoTitle: 'Melanotan II: Guia Completo — Bronzeamento, Dosagens e Riscos',
    seoDescription: 'Melanotan II: como funciona para bronzeamento sintético. Protocolos, efeitos colaterais e precauções dermatológicas.',
    status: 'published',
    publishDate: '2025-03-30T14:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 8,
    author: 'Dra. Camila Soares',
    relatedPosts: ['post-8', 'post-17'],
    views: 5900,
    uniqueViews: 3900,
  },
  {
    id: 'post-20',
    title: 'GH (Hormônio do Crescimento): Guia Completo',
    slug: 'gh-hormonio-crescimento-guia',
    subtitle: 'Tudo sobre GH exógeno — benefícios, riscos, dosagens e alternativas',
    summary: 'Guia definitivo sobre Hormônio do Crescimento: como funciona, protocolos para diferentes objetivos, efeitos colaterais e quando considerar peptídeos como alternativa.',
    coverImage: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=1200&q=80',
    categories: ['cat-ergogenicos', 'cat-peptideos'],
    tags: ['tag-gh', 'tag-performance', 'tag-avancado', 'tag-saude'],
    contentType: 'guide',
    content: `
      <h2>O que é GH Exógeno?</h2>
      <p>O Hormônio do Crescimento recombinante (rhGH) é uma versão sintética do somatotropina humana, produzido por tecnologia de DNA recombinante. É idêntico ao GH produzido naturalmente pela hipófise.</p>

      <h2>Funções Fisiológicas do GH</h2>
      <ul>
        <li>Crescimento e regeneração celular</li>
        <li>Metabolismo de gordura (lipólise)</li>
        <li>Síntese proteica e reparo tecidual</li>
        <li>Metabolismo de carboidratos (antagonista da insulina)</li>
        <li>Manutenção da densidade óssea</li>
        <li>Função imunológica</li>
      </ul>

      <h2>Protocolos por Objetivo</h2>
      <table>
        <thead><tr><th>Objetivo</th><th>Dose</th><th>Frequência</th><th>Duração mínima</th></tr></thead>
        <tbody>
          <tr><td>Anti-aging / Bem-estar</td><td>1-2 UI/dia</td><td>5-7x/semana</td><td>6 meses</td></tr>
          <tr><td>Perda de gordura</td><td>2-4 UI/dia</td><td>Diariamente</td><td>4-6 meses</td></tr>
          <tr><td>Performance / Hipertrofia</td><td>4-8 UI/dia</td><td>Diariamente</td><td>6+ meses</td></tr>
          <tr><td>Profissional (bodybuilding)</td><td>8-16 UI/dia</td><td>Diariamente</td><td>Contínuo</td></tr>
        </tbody>
      </table>
      <div class="callout warning"><strong>Doses acima de 4 UI/dia</strong> requerem monitoramento regular de glicemia, insulina e potencialmente o uso de Metformina ou insulina para controle glicêmico.</div>

      <h2>Timing de Aplicação</h2>
      <p>O GH deve ser aplicado em jejum para máxima eficácia. Os protocolos mais comuns:</p>
      <ul>
        <li><strong>Manhã (jejum):</strong> Melhor para perda de gordura</li>
        <li><strong>Pré-treino:</strong> Sinergia com exercício</li>
        <li><strong>Antes de dormir:</strong> Mimetiza o pico natural noturno</li>
        <li><strong>Dividido:</strong> Metade manhã, metade noite (doses altas)</li>
      </ul>

      <h2>GH Exógeno vs. Peptídeos Secretagogos</h2>
      <table>
        <thead><tr><th>Critério</th><th>GH Exógeno</th><th>Peptídeos (Ipa + CJC)</th></tr></thead>
        <tbody>
          <tr><td>Elevação de GH</td><td>Alta e previsível</td><td>Moderada, fisiológica</td></tr>
          <tr><td>Custo mensal</td><td>R$ 800-3000+</td><td>R$ 200-500</td></tr>
          <tr><td>Pulsatilidade</td><td>Não (suprime GH natural)</td><td>Sim (mantém padrão natural)</td></tr>
          <tr><td>Efeitos colaterais</td><td>Mais frequentes</td><td>Menos frequentes</td></tr>
          <tr><td>Resultado</td><td>Superior (dose-dependente)</td><td>Bom para anti-aging/wellness</td></tr>
        </tbody>
      </table>

      <h2>Efeitos Colaterais do GH</h2>
      <ul>
        <li>Retenção hídrica e edema (mãos, pés, face)</li>
        <li>Dor articular e síndrome do túnel do carpo</li>
        <li>Resistência insulínica / hiperglicemia</li>
        <li>Acromegalia (uso crônico em doses altas)</li>
        <li>Possível promoção de neoplasias pré-existentes</li>
      </ul>

      <h2>Qualidade e Falsificações</h2>
      <p>O mercado de GH é notoriamente cheio de falsificações. Sinais de GH legítimo: serostim test positivo, elevação de IGF-1 em exames, efeitos colaterais esperados em doses adequadas.</p>
      <div class="callout info"><strong>Dica:</strong> Dose 4 UI de GH e meça IGF-1 após 2-3 semanas. Se estiver acima de 300ng/mL, o GH provavelmente é legítimo.</div>

      <h2>Conclusão</h2>
      <p>O GH é uma ferramenta poderosa mas cara e que requer monitoramento. Para a maioria dos objetivos (anti-aging, recuperação, composição corporal moderada), peptídeos secretagogos oferecem uma alternativa mais acessível e segura.</p>
    `,
    seoTitle: 'GH (Hormônio do Crescimento): Guia Definitivo 2025',
    seoDescription: 'GH exógeno: guia completo sobre dosagens, protocolos, efeitos colaterais e quando preferir peptídeos como alternativa.',
    status: 'published',
    publishDate: '2025-03-26T08:00:00Z',
    pinned: false,
    featured: false,
    readingTime: 13,
    author: 'Dr. Rafael Mendes',
    primaryCTA: { label: 'Ver GH na Loja', url: '#loja' },
    relatedPosts: ['post-9', 'post-18'],
    views: 14200,
    uniqueViews: 9100,
  },
  {
    id: 'post-21',
    title: 'Top 5 Substâncias para Emagrecimento em 2025',
    slug: 'top-5-substancias-emagrecimento-2025',
    subtitle: 'Ranking atualizado das opções mais eficazes e seguras',
    summary: 'Conheça as 5 substâncias mais eficazes para emagrecimento em 2025, com análise comparativa de eficácia, segurança e custo-benefício.',
    coverImage: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80',
    categories: ['cat-emagrecimento'],
    tags: ['tag-tirzepatida', 'tag-semaglutida', 'tag-sibutramina', 'tag-saude'],
    contentType: 'list',
    content: `
      <h2>Critérios de Avaliação</h2>
      <p>Este ranking considera: eficácia comprovada em estudos clínicos, perfil de segurança, praticidade de uso, disponibilidade no mercado e custo-benefício.</p>

      <h2>1. Tirzepatida (Mounjaro / Zepbound)</h2>
      <p>O agonista duplo GIP/GLP-1 lidera nosso ranking com resultados de perda de peso que mudam o paradigma do tratamento de obesidade.</p>
      <ul>
        <li><strong>Eficácia:</strong> ⭐⭐⭐⭐⭐ (20-25% de perda de peso)</li>
        <li><strong>Segurança:</strong> ⭐⭐⭐⭐ (efeitos GI transitórios)</li>
        <li><strong>Custo:</strong> ⭐⭐ (alto — R$ 1.500-3.000/mês)</li>
      </ul>

      <h2>2. Semaglutida (Wegovy / Ozempic)</h2>
      <p>A pioneira dos agonistas de GLP-1 para obesidade, com mais dados de segurança de longo prazo e benefícios cardiovasculares comprovados.</p>
      <ul>
        <li><strong>Eficácia:</strong> ⭐⭐⭐⭐ (15-17% de perda de peso)</li>
        <li><strong>Segurança:</strong> ⭐⭐⭐⭐⭐ (mais dados de longo prazo)</li>
        <li><strong>Custo:</strong> ⭐⭐ (alto — R$ 1.000-2.500/mês)</li>
      </ul>

      <h2>3. Sibutramina</h2>
      <p>Apesar de mais antiga, continua sendo uma opção acessível e eficaz para pacientes com perfil cardiovascular favorável.</p>
      <ul>
        <li><strong>Eficácia:</strong> ⭐⭐⭐ (5-10% de perda de peso)</li>
        <li><strong>Segurança:</strong> ⭐⭐⭐ (contraindicações cardiovasculares)</li>
        <li><strong>Custo:</strong> ⭐⭐⭐⭐⭐ (acessível)</li>
      </ul>

      <h2>4. Contrave (Naltrexona + Bupropiona)</h2>
      <p>Combinação que atua no sistema de recompensa e saciedade. Boa opção para pacientes com compulsão alimentar.</p>
      <ul>
        <li><strong>Eficácia:</strong> ⭐⭐⭐ (5-8% de perda de peso)</li>
        <li><strong>Segurança:</strong> ⭐⭐⭐⭐ (sem risco cardiovascular)</li>
        <li><strong>Custo:</strong> ⭐⭐⭐⭐ (moderado)</li>
      </ul>

      <h2>5. Orlistat (Xenical / Alli)</h2>
      <p>Inibidor da lipase pancreática — impede a absorção de ~30% da gordura dietética. Eficácia modesta mas excelente perfil de segurança.</p>
      <ul>
        <li><strong>Eficácia:</strong> ⭐⭐ (3-5% de perda de peso)</li>
        <li><strong>Segurança:</strong> ⭐⭐⭐⭐⭐ (ação local, sem efeitos sistêmicos)</li>
        <li><strong>Custo:</strong> ⭐⭐⭐⭐ (acessível)</li>
      </ul>

      <h2>Tabela Comparativa Final</h2>
      <table>
        <thead><tr><th>Substância</th><th>Perda de peso</th><th>Segurança</th><th>Custo</th><th>Praticidade</th></tr></thead>
        <tbody>
          <tr><td><strong>Tirzepatida</strong></td><td>20-25%</td><td>Alta</td><td>Alto</td><td>Semanal SC</td></tr>
          <tr><td>Semaglutida</td><td>15-17%</td><td>Muito alta</td><td>Alto</td><td>Semanal SC</td></tr>
          <tr><td>Sibutramina</td><td>5-10%</td><td>Moderada</td><td>Baixo</td><td>Oral diário</td></tr>
          <tr><td>Contrave</td><td>5-8%</td><td>Alta</td><td>Moderado</td><td>Oral diário</td></tr>
          <tr><td>Orlistat</td><td>3-5%</td><td>Muito alta</td><td>Baixo</td><td>Oral 3x/dia</td></tr>
        </tbody>
      </table>

      <div class="callout info"><strong>Menção Honrosa:</strong> A Retatrutida (agonista triplo) pode assumir o 1º lugar quando aprovada, com resultados preliminares de até 24% de perda de peso.</div>

      <h2>Conclusão</h2>
      <p>A escolha ideal depende do perfil do paciente, comorbidades, orçamento e preferências. Os agonistas de incretina (Tirzepatida e Semaglutida) são claramente superiores em eficácia, mas seu custo elevado os torna inacessíveis para muitos. Nenhuma substância substitui mudanças de estilo de vida — todas funcionam melhor como complemento à dieta e exercício.</p>
    `,
    seoTitle: 'Top 5 Substâncias para Emagrecimento em 2025 — Ranking Atualizado',
    seoDescription: 'Ranking das 5 melhores substâncias para emagrecimento em 2025. Tirzepatida, Semaglutida, Sibutramina e mais — análise comparativa.',
    status: 'published',
    publishDate: '2025-04-06T10:00:00Z',
    pinned: true,
    featured: false,
    readingTime: 10,
    author: 'Dra. Camila Soares',
    relatedPosts: ['post-5', 'post-16', 'post-6'],
    views: 24500,
    uniqueViews: 16200,
  },
];
