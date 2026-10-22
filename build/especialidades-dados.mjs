/**
 * Dados das 36 páginas de "Para quem" (central + 35 áreas).
 *
 * Fonte única de conteúdo — build/pages/especialidades/render.mjs consome
 * este arquivo para gerar as páginas, e build/nav.mjs consome pra derivar
 * menu/sitemap/rodapé. Separado de nav.mjs porque carrega campos que mais
 * nenhuma outra página tem (grupo, público, canais recomendados).
 *
 * MATRIZ DE DIFERENCIAÇÃO — por que cada par que se parece não é a mesma
 * página (seção 4 do briefing):
 *
 *  Família × Sucessões: família é o litígio entre vivos (divórcio, guarda,
 *  pensão); sucessões é o que acontece depois de uma morte (inventário,
 *  testamento, partilha). Jornada de decisão e gatilho são diferentes.
 *
 *  Cível × Consumidor × Bancário: cível é o guarda-chuva (contratos, danos,
 *  responsabilidade civil em geral); consumidor é o recorte específico do
 *  CDC; bancário é o recorte ainda mais específico de disputa com
 *  instituição financeira. Tratадas como três escopos, do mais largo ao
 *  mais estreito, cada um cross-linkando pros outros dois.
 *
 *  Empresarial × Societário × Contratual: empresarial é assessoria jurídica
 *  ampla pra empresa; societário é especificamente disputa/estrutura entre
 *  sócios; contratual é especificamente elaboração/litígio de contrato.
 *
 *  Direito Digital × Proteção de dados: digital é o guarda-chuva de
 *  problema jurídico ligado a atividade online (e-commerce, crime digital,
 *  contrato digital); proteção de dados é o recorte específico de
 *  adequação à LGPD e governança de dados para organizações.
 *
 *  Saúde × Médico: saúde fala com quem foi prejudicado como paciente
 *  (plano de saúde, acesso a tratamento); médico fala com o profissional
 *  ou a instituição de saúde que precisa de defesa ou assessoria regulatória.
 *
 *  Administrativo × Licitações: administrativo é o guarda-chuva de direito
 *  público; licitações é o recorte específico de contratação pública.
 *
 *  Internacional × Imigração: internacional fala com empresa (comércio
 *  exterior, contratos internacionais); imigração fala com pessoa física
 *  (visto, nacionalidade, regularização).
 *
 * Nenhum par foi consolidado numa página só: todos têm prática, público ou
 * jornada de decisão suficientemente distintos para justificar página
 * própria, com escopo estreito e link cruzado pros vizinhos — é o que o
 * briefing pede em vez de forçar uma fusão artificial.
 */

export const CANAIS = {
  'trafego-pago': { label: 'Tráfego pago', url: '/servicos/trafego-pago-para-advogados/' },
  'google-ads': { label: 'Google Ads', url: '/servicos/google-ads-para-advogados/' },
  'meta-ads': { label: 'Meta Ads', url: '/servicos/meta-ads-para-advogados/' },
  'sites': { label: 'Site institucional', url: '/servicos/criacao-de-sites-para-advogados/' },
  'landing-pages': { label: 'Landing page', url: '/servicos/landing-pages-para-advogados/' },
  'estruturacao-comercial': { label: 'Estruturação comercial', url: '/servicos/estruturacao-comercial-para-advogados/' },
  'ia-atendimento': { label: 'IA para atendimento', url: '/servicos/ia-para-atendimento-juridico/' },
};

export const GRUPOS = [
  { id: 'pessoais', titulo: 'Direitos pessoais e patrimoniais' },
  { id: 'criminal-transito', titulo: 'Criminal e trânsito' },
  { id: 'empresas', titulo: 'Empresas, patrimônio e atividade econômica' },
  { id: 'saude-setores', titulo: 'Saúde e setores específicos' },
  { id: 'publico-internacional', titulo: 'Direito público e atuação internacional' },
  { id: 'amplo', titulo: 'Escritórios com atuação ampla' },
];

/**
 * `publico`: 'pf' (pessoa física), 'pj' (empresa) ou 'ambos' — define o tom
 * da seção B e se a narrativa "WhatsApp cheio, contrato rápido" cabe (só
 * para pf com decisão rápida) ou se a página fala de reputação, reunião e
 * relacionamento mais longo (pj).
 *
 * `canais`: só os que fazem sentido PARA ESSA ÁREA — nunca a lista inteira.
 */
export const ESPECIALIDADES = [
  // ═══════════════ DIREITOS PESSOAIS E PATRIMONIAIS ═══════════════
  {
    slug: 'trabalhista', grupo: 'pessoais', publico: 'pf',
    titulo: 'Marketing para advogados trabalhistas',
    metaDescription: 'Captação de clientes para escritórios de direito do trabalho: campanhas voltadas a quem tem prazo correndo — demissão, verbas rescisórias, rescisão indireta.',
    lede: 'Quem procura um advogado trabalhista geralmente tem prazo correndo — prescrição de dois anos para reclamar direitos após o fim do contrato. A comunicação precisa refletir essa urgência sem prometer resultado específico.',
    quemAtende: 'Pessoas físicas que tiveram o contrato de trabalho encerrado e desconfiam de algo irregular — verbas não pagas, rescisão sem justa causa questionável, assédio. A decisão de procurar um advogado costuma amadurecer rápido, pressionada pelo prazo prescricional de dois anos.',
    desafios: [
      { titulo: 'Comunicar urgência sem prometer resultado', texto: 'Mencionar o prazo prescricional é informativo e ajuda a pessoa a agir; prometer valor de indenização ou resultado do processo não é permitido pela OAB.' },
      { titulo: 'Diferenciar demissão com e sem justa causa', texto: 'A dúvida mais comum de quem chega por anúncio é se tem direito a algo — e isso varia conforme o tipo de desligamento, o que a página de destino precisa esclarecer sem dar aconselhamento jurídico completo ali mesmo.' },
    ],
    canais: ['google-ads', 'landing-pages', 'ia-atendimento'],
    estrategiaTexto: 'Google Ads tende a performar bem aqui porque a busca já existe ("fui demitido, tenho direito a quê"). Uma landing page por situação (demissão, rescisão indireta) mantém a mensagem do anúncio até o contato. A triagem por IA ajuda a confirmar rapidamente se o prazo ainda está aberto.',
    processo: 'O diagnóstico para um escritório trabalhista começa mapeando a área de atuação dentro do trabalhista (individual, coletivo, assédio) e o volume de busca na região, para dimensionar se tráfego pago já compensa ou se o escritório deveria começar por uma landing page isolada.',
    faq: [
      { q: 'Posso anunciar mencionando o prazo de dois anos?', a: 'Informar prazos legais é informativo, não promessa de resultado, e normalmente é aceitável dentro da sobriedade exigida pela OAB. O texto final de cada campanha é revisado com esse cuidado.' },
      { q: 'Funciona melhor Google Ads ou Meta Ads para trabalhista?', a: 'Google Ads costuma performar bem aqui, porque a pessoa já pesquisa ativamente. Meta Ads complementa gerando consciência antes da busca. Ver a comparação completa em Google Ads ou Meta Ads: como escolher.' },
    ],
  },
  {
    slug: 'previdenciario', grupo: 'pessoais', publico: 'pf',
    titulo: 'Marketing para advogados previdenciários',
    metaDescription: 'Captação de clientes para escritórios de direito previdenciário: benefício negado, revisão de aposentadoria e público que exige atendimento acessível.',
    lede: 'Boa parte de quem precisa de um advogado previdenciário não sabe, inicialmente, que tem direito a revisar ou contestar uma decisão do INSS. A comunicação precisa explicar antes de vender.',
    quemAtende: 'Pessoas físicas, com frequência de mais idade e não necessariamente habituadas a pesquisar ou preencher formulários online. Muitas vezes chegam com uma carta de indeferimento do INSS em mãos, não com uma busca ativa no Google.',
    desafios: [
      { titulo: 'Explicar antes de converter', texto: 'Muita gente não sabe que um benefício negado pode ser revisto, ou que a aposentadoria pode ter sido calculada abaixo do devido. O criativo e a página precisam educar, não só captar quem já procura.' },
      { titulo: 'Acessibilidade de linguagem e de canal', texto: 'Termos técnicos do INSS (DER, CNIS, tempo de contribuição) afastam quem não os conhece. A comunicação eficaz traduz isso para a situação prática da pessoa.' },
    ],
    canais: ['meta-ads', 'estruturacao-comercial', 'sites'],
    estrategiaTexto: 'Meta Ads ajuda a despertar a busca de quem ainda não sabe que tem direito a revisão. Como o público costuma preferir conversa a formulário, a estruturação comercial com atendimento acessível pelo WhatsApp pesa mais aqui do que em áreas com decisão mais rápida e digital.',
    processo: 'O diagnóstico aqui dá peso maior ao perfil etário e ao canal preferido do público local — em algumas regiões o WhatsApp direto supera qualquer formulário, o que muda a prioridade entre site e atendimento.',
    faq: [
      { q: 'Esse público usa WhatsApp mais do que formulário?', a: 'Com frequência sim — a estruturação do atendimento para esse público prioriza o WhatsApp como canal principal de conversa, com o formulário como alternativa.' },
      { q: 'Dá para anunciar "revisão de aposentadoria" sem prometer valor de ganho?', a: 'Sim — o anúncio informa que existe a possibilidade de revisão, sem prometer um valor ou resultado específico, que é o limite da publicidade jurídica permitida.' },
    ],
  },
  {
    slug: 'familia', grupo: 'pessoais', publico: 'pf',
    titulo: 'Marketing para advogados de família',
    metaDescription: 'Captação de clientes para escritórios de direito de família: divórcio, guarda e pensão, com a discrição que o assunto exige.',
    lede: 'Divórcio, guarda e pensão são assuntos sensíveis, muitas vezes vividos em um momento emocionalmente difícil. A comunicação precisa transmitir confiança e discrição — não urgência agressiva.',
    quemAtende: 'Pessoas físicas enfrentando separação, disputa de guarda ou questões de pensão — geralmente num processo de decisão mais lento e deliberado do que áreas com prazo legal apertado, e que valoriza privacidade acima de velocidade de resposta.',
    desafios: [
      { titulo: 'Discrição acima de urgência', texto: 'Criativos agressivos ou que expõem o tema publicamente afastam esse público, que valoriza privacidade.' },
      { titulo: 'Tom emocional sem sensacionalismo', texto: 'O texto precisa reconhecer o momento da pessoa sem dramatizar a situação, mantendo a sobriedade exigida pela publicidade jurídica.' },
    ],
    canais: ['sites', 'google-ads', 'estruturacao-comercial'],
    estrategiaTexto: 'Um site institucional que transmita seriedade pesa mais aqui do que em áreas de decisão rápida — é comum a pessoa pesquisar o escritório antes de qualquer contato. Google Ads capta busca privada sem a exposição de redes sociais. O atendimento inicial é deliberadamente mais leve, sem pedir detalhes do processo logo de cara.',
    processo: 'O diagnóstico considera o volume de busca na região e se o escritório já atua mais por indicação — nesse caso, o site institucional (para confirmar credibilidade a quem chega por indicação) costuma vir antes do tráfego pago.',
    faq: [
      { q: 'Vocês usam Meta Ads para direito de família?', a: 'Com cautela — como o tema é sensível, o criativo é revisado especificamente para manter discrição, evitando linguagem ou imagens que exponham publicamente a situação de quem está decidindo procurar o escritório.' },
      { q: 'O atendimento inicial já pede detalhes do processo?', a: 'Não — a triagem inicial é propositalmente leve, para não constranger a pessoa a detalhar a situação antes de falar diretamente com o escritório.' },
    ],
  },
  {
    slug: 'sucessoes', grupo: 'pessoais', publico: 'pf',
    titulo: 'Marketing para advogados de sucessões',
    metaDescription: 'Captação de clientes para escritórios de inventário, testamento e partilha de bens — um momento de decisão diferente do de família.',
    lede: 'Inventário e partilha começam depois de uma morte na família — um gatilho e um ritmo de decisão diferentes de divórcio ou guarda, mesmo as duas áreas sendo próximas no dia a dia de um escritório.',
    quemAtende: 'Pessoas físicas (herdeiros, cônjuge sobrevivente) que precisam abrir um inventário, formalizar um testamento ou resolver uma partilha de bens — muitas vezes mais de uma pessoa da mesma família decidindo junto, o que estica o ciclo de decisão.',
    desafios: [
      { titulo: 'Falar com várias partes ao mesmo tempo', texto: 'Diferente de uma demanda individual, inventário costuma envolver mais de um herdeiro — a comunicação precisa ser neutra o bastante para não parecer que fala só pelo lado de uma das partes antes da conversa real.' },
      { titulo: 'Timing sensível', texto: 'O contato acontece num momento de luto. Linguagem comercial agressiva é especialmente deslocada aqui.' },
    ],
    canais: ['sites', 'google-ads'],
    estrategiaTexto: 'Site institucional com conteúdo educativo (o que é inventário, prazo legal para abrir) costuma funcionar melhor do que anúncio direto nesse momento — é comum a busca orgânica e a indicação pesarem mais do que em outras áreas. Google Ads capta quem já está pesquisando "como abrir inventário" ativamente.',
    processo: 'O diagnóstico aqui avalia se o escritório quer competir por tráfego pago direto ou priorizar conteúdo (ver Conteúdos) que responda às dúvidas mais comuns sobre prazo e processo de inventário, gerando contato mais orgânico.',
    faq: [
      { q: 'Sucessões é a mesma coisa que direito de família?', a: 'São práticas próximas, mas o gatilho é diferente: família lida com conflito entre pessoas vivas (divórcio, guarda); sucessões começa depois de uma morte. Por isso são páginas separadas.' },
      { q: 'Faz sentido anunciar logo após um falecimento recente?', a: 'A comunicação é pensada para quem já está buscando informação sobre o processo, não para abordar alguém no momento do luto — o foco é estar disponível quando a pessoa decidir procurar, não induzir essa decisão.' },
    ],
  },
  {
    slug: 'civel', grupo: 'pessoais', publico: 'ambos',
    titulo: 'Marketing para advogados cíveis',
    metaDescription: 'Captação de clientes para escritórios de direito civil em geral — contratos, danos e responsabilidade civil fora dos recortes específicos de consumidor ou bancário.',
    lede: 'Direito cível é o guarda-chuva mais amplo da nossa lista: cobre disputa contratual, indenização por dano, responsabilidade civil. Quando o caso é especificamente relação de consumo ou disputa bancária, as páginas de Consumidor e Bancário têm uma estratégia mais específica.',
    quemAtende: 'Pessoas físicas e empresas com disputas civis que não se encaixam exatamente em consumidor ou bancário — cobrança, indenização por dano moral ou material, disputa contratual em geral.',
    desafios: [
      { titulo: 'Escopo amplo demais para um anúncio genérico', texto: '"Direito civil" sozinho é vago demais para quem pesquisa — a campanha performa melhor quando aponta para a situação concreta (cobrança, indenização, disputa contratual) dentro do cível.' },
    ],
    canais: ['google-ads', 'landing-pages'],
    estrategiaTexto: 'Por ser uma área ampla, cada campanha funciona melhor recortada por situação específica (ex.: "indenização por dano moral"), com uma landing page própria por recorte, em vez de uma única página genérica de "direito civil".',
    processo: 'O diagnóstico aqui foca em identificar, dentro do cível, qual recorte específico tem mais volume de busca na região e no histórico do escritório, para não dispersar a campanha num termo genérico demais.',
    faq: [
      { q: 'Por que existe uma página separada para consumidor e bancário?', a: 'Porque são recortes específicos do cível com volume de busca e linguagem próprios — "advogado para golpe do PIX" busca diferente de "advogado cível". Ver as páginas de Consumidor e Bancário.' },
    ],
  },
  {
    slug: 'consumidor', grupo: 'pessoais', publico: 'pf',
    titulo: 'Marketing para advogados do consumidor',
    metaDescription: 'Captação de clientes para escritórios de direito do consumidor: cobrança indevida, produto com defeito, serviço não prestado.',
    lede: 'Direito do consumidor é o recorte do cível voltado especificamente à relação com empresas — compra, serviço, cobrança. É uma área de alto volume de busca por situações bem concretas.',
    quemAtende: 'Pessoas físicas que tiveram um problema direto com uma empresa: cobrança indevida, produto com defeito não resolvido, serviço não prestado, nome negativado sem justificativa.',
    desafios: [
      { titulo: 'Volume alto, concorrência alta', texto: 'É uma das áreas mais disputadas em anúncio — a diferenciação vem de recortar bem a campanha por situação (nome negativado, produto com defeito) em vez de competir num termo genérico.' },
    ],
    canais: ['google-ads', 'landing-pages', 'ia-atendimento'],
    estrategiaTexto: 'Google Ads funciona bem porque a busca por situação concreta já existe ("nome negativado indevidamente"). Uma landing page por situação e triagem rápida por IA ajudam a lidar com o volume mais alto de contatos que essa área costuma gerar.',
    processo: 'O diagnóstico prioriza identificar, dentre as situações de consumo mais comuns na região, quais têm volume de busca suficiente para sustentar uma campanha recortada, evitando competir num termo genérico caro.',
    faq: [
      { q: 'Qual a diferença entre esta página e a de Direito Bancário?', a: 'Bancário é um recorte ainda mais específico, só sobre disputas com instituição financeira (conta bloqueada, tarifa abusiva, fraude). Consumidor cobre o restante das relações de consumo.' },
    ],
  },
  {
    slug: 'imobiliario', grupo: 'pessoais', publico: 'ambos',
    titulo: 'Marketing para advogados imobiliários',
    metaDescription: 'Captação de clientes para escritórios de direito imobiliário: compra e venda, distrato, regularização de imóvel.',
    lede: 'Direito imobiliário atende tanto pessoa física (comprou um imóvel com problema) quanto construtora ou imobiliária (assessoria recorrente) — dois perfis de cliente bem diferentes dentro da mesma área.',
    quemAtende: 'Pessoas físicas com problema pontual (distrato, atraso de obra, vício de construção) e, separadamente, empresas do setor (construtoras, imobiliárias) buscando assessoria jurídica recorrente — a estratégia de captação muda bastante entre os dois perfis.',
    desafios: [
      { titulo: 'Dois públicos, duas jornadas', texto: 'Pessoa física com problema pontual decide rápido e busca ativamente; empresa do setor decide por indicação e reputação, com ciclo de venda mais longo.' },
    ],
    canais: ['google-ads', 'sites'],
    estrategiaTexto: 'Para o público pessoa física, Google Ads recortado por situação (atraso de obra, distrato) funciona como em outras áreas de demanda pontual. Para o público empresarial do setor, um site institucional forte pesa mais do que anúncio direto — a decisão passa por reputação, não por clique.',
    processo: 'O diagnóstico começa definindo qual dos dois públicos é a prioridade do escritório — pessoa física com problema pontual, ou empresa do setor buscando assessoria recorrente — porque a estratégia recomendada é bem diferente para cada um.',
    faq: [
      { q: 'A mesma campanha serve para os dois públicos?', a: 'Não é recomendado. Pessoa física com problema pontual e empresa do setor buscando assessoria recorrente respondem a mensagens e canais diferentes — o diagnóstico define qual público priorizar primeiro.' },
    ],
  },
  {
    slug: 'condominial', grupo: 'pessoais', publico: 'ambos',
    titulo: 'Marketing para advogados condominiais',
    metaDescription: 'Captação de clientes para escritórios de direito condominial: cobrança de taxa, assembleia, conflito entre condôminos.',
    lede: 'Direito condominial atende tanto o síndico ou a administradora (assessoria recorrente) quanto o condômino individual (conflito pontual) — vale a mesma lógica de dois públicos do direito imobiliário.',
    quemAtende: 'Administradoras e síndicos profissionais buscando assessoria jurídica recorrente para a rotina do condomínio, e condôminos individuais com um conflito pontual (cobrança, barulho, uso de área comum).',
    desafios: [
      { titulo: 'Público recorrente versus público pontual', texto: 'Administradora/síndico decide por relacionamento e confiabilidade ao longo do tempo; condômino individual busca resolver um problema específico agora.' },
    ],
    canais: ['sites', 'google-ads'],
    estrategiaTexto: 'Para captar administradoras e síndicos, presença institucional e relacionamento pesam mais do que anúncio de clique. Para o condômino individual com um conflito específico, Google Ads recortado por situação funciona de forma parecida com outras áreas de demanda pontual.',
    processo: 'O diagnóstico identifica se o escritório já tem carteira de administradoras (e quer captar mais desse perfil) ou se está começando do zero e precisa de volume de condôminos individuais primeiro.',
    faq: [
      { q: 'Vale a pena anunciar para síndicos no Google?', a: 'Depende do volume de busca na região — administradoras e síndicos profissionais costumam decidir mais por indicação e relacionamento do que por clique em anúncio, então o site institucional tende a ter mais peso do que a campanha paga para esse público específico.' },
    ],
  },

  // ═══════════════ CRIMINAL E TRÂNSITO ═══════════════
  {
    slug: 'criminalista', grupo: 'criminal-transito', publico: 'pf',
    titulo: 'Marketing para advogados criminalistas',
    metaDescription: 'Captação de clientes para escritórios de direito criminal: situações de urgência real, onde resposta rápida pesa mais do que em qualquer outra área.',
    lede: 'Em direito criminal, a urgência costuma ser literal: flagrante, prisão, audiência marcada. Nenhuma outra área exige resposta tão rápida ao primeiro contato.',
    quemAtende: 'Pessoas físicas em situação de urgência real (flagrante, prisão, audiência de custódia) ou já respondendo a um processo. Boa parte dos contatos chega por indicação de familiares buscando ajuda em nome de outra pessoa.',
    desafios: [
      { titulo: 'Disponibilidade fora do horário comercial', texto: 'Prisões não respeitam horário comercial. Um escritório criminalista que só responde em horário comercial perde justamente os casos mais urgentes.' },
      { titulo: 'Sobriedade mesmo em situação de urgência', texto: 'A urgência real do cliente não é motivo para um anúncio alarmista — a publicidade continua precisando ser informativa e sóbria.' },
    ],
    canais: ['ia-atendimento', 'estruturacao-comercial', 'google-ads'],
    estrategiaTexto: 'É a área onde a triagem por IA mais se justifica: garantir resposta imediata a qualquer hora, coletando o essencial antes de transferir para o advogado de plantão. Google Ads capta busca com urgência explícita.',
    processo: 'O diagnóstico aqui dá peso especial à escala de disponibilidade do escritório — sem alguém (ou uma automação) respondendo fora do horário comercial, o investimento em tráfego perde justamente os casos mais urgentes.',
    faq: [
      { q: 'O atendimento funciona de madrugada ou fim de semana?', a: 'A triagem por IA responde imediatamente a qualquer hora; a transferência para um advogado humano depende da escala de plantão combinada com o escritório no escopo do contrato.' },
      { q: 'Posso anunciar "defesa em flagrante" sem prometer soltura?', a: 'Sim — informar o tipo de atuação é diferente de prometer um resultado específico do processo, o que a publicidade jurídica não permite.' },
    ],
  },
  {
    slug: 'transito', grupo: 'criminal-transito', publico: 'pf',
    titulo: 'Marketing para advogados de trânsito',
    metaDescription: 'Captação de clientes para escritórios de direito de trânsito: suspensão de CNH, multas, recursos administrativos.',
    lede: 'Direito de trânsito tem um gatilho bem concreto e datado: a notificação de multa ou suspensão chega com prazo de recurso definido, parecido com a lógica de urgência do trabalhista.',
    quemAtende: 'Pessoas físicas que receberam notificação de multa, estão em risco de suspensão da CNH por pontuação, ou foram autuadas e querem recorrer — a decisão de procurar ajuda é rápida porque o prazo de recurso é curto.',
    desafios: [
      { titulo: 'Prazo de recurso é curto e específico', texto: 'Diferente de outras áreas, aqui o prazo é contado em dias, não em anos — a campanha e a página de destino precisam deixar isso claro sem inflar a urgência artificialmente.' },
    ],
    canais: ['google-ads', 'landing-pages'],
    estrategiaTexto: 'Google Ads capta bem a busca ativa ("recurso de multa", "suspensão CNH o que fazer"). Uma landing page específica por situação (suspensão, multa, pontuação) funciona melhor do que uma página genérica de "direito de trânsito".',
    processo: 'O diagnóstico aqui verifica o tipo de recurso mais comum na região (multa de trânsito municipal vs. federal, por exemplo) para direcionar a campanha ao termo de busca certo.',
    faq: [
      { q: 'O prazo de recurso é sempre o mesmo?', a: 'Varia conforme o tipo de infração e a esfera (municipal, estadual, federal) — por isso a página de destino é específica por situação, não genérica.' },
    ],
  },

  // ═══════════════ EMPRESAS, PATRIMÔNIO E ATIVIDADE ECONÔMICA ═══════════════
  {
    slug: 'empresarial', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados empresariais',
    metaDescription: 'Captação de clientes para escritórios de assessoria jurídica empresarial — presença institucional e relacionamento, não cliques avulsos.',
    lede: 'Assessoria jurídica empresarial é decisão de empresa para empresa: pesa reputação, apresentação institucional e reunião — não o mesmo "clique e contrato rápido" de uma demanda de pessoa física.',
    quemAtende: 'Empresas buscando assessoria jurídica recorrente e ampla — não um caso pontual, mas uma relação continuada. A decisão passa por mais de uma pessoa dentro da empresa e por um ciclo de avaliação mais longo.',
    desafios: [
      { titulo: 'Ciclo de decisão longo', texto: 'Diferente de pessoa física com problema urgente, empresa avalia, compara, às vezes pede reunião antes de decidir — a comunicação não pode prometer agilidade que não corresponde a essa realidade.' },
      { titulo: 'Reputação pesa mais que CPL', texto: 'Para esse público, a credibilidade institucional do escritório importa tanto quanto (ou mais que) o anúncio que trouxe o primeiro contato.' },
    ],
    canais: ['sites', 'estruturacao-comercial'],
    estrategiaTexto: 'Presença institucional forte (site, conteúdo que demonstre domínio técnico) pesa mais aqui do que tráfego pago direto. Quando há campanha, ela serve para gerar reunião, não contrato imediato — e a estruturação comercial cuida da condução mais longa até a decisão.',
    processo: 'O diagnóstico aqui mapeia o porte de empresa que o escritório quer atender e o canal que essas empresas realmente usam para buscar assessoria (indicação, busca orgânica, evento do setor) antes de recomendar investimento em anúncio.',
    faq: [
      { q: 'Vale a pena anunciar no Google para captar empresas?', a: 'Depende do porte e do segmento — para muitas empresas, indicação e presença institucional pesam mais do que clique em anúncio. O diagnóstico avalia se faz sentido para o seu caso antes de recomendar.' },
      { q: 'Qual a diferença entre esta página e a de Direito Societário?', a: 'Empresarial é a assessoria ampla para a empresa; societário é o recorte específico de disputa ou estruturação entre sócios. Ver a página de Societário.' },
    ],
  },
  {
    slug: 'societario', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados societários',
    metaDescription: 'Captação de clientes para escritórios de direito societário: disputa entre sócios, estruturação societária, saída de sócio.',
    lede: 'Direito societário é o recorte específico de empresarial voltado à relação entre sócios — estruturação, disputa, saída de sócio. Um problema que raramente aparece sozinho: geralmente envolve mais de uma parte decidindo.',
    quemAtende: 'Empresas ou sócios individuais enfrentando disputa societária, reestruturação de quadro societário, ou precisando formalizar a saída de um sócio — decisão tipicamente sensível e que exige discrição.',
    desafios: [
      { titulo: 'Tema sensível entre sócios', texto: 'Disputa societária costuma envolver relação de confiança quebrada — a comunicação precisa ser discreta, sem parecer que incentiva o conflito.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Essa é uma das áreas onde tráfego pago direto tende a fazer menos sentido — a decisão de procurar um advogado societário quase sempre passa por indicação ou pesquisa orgânica após um problema já identificado internamente. Presença institucional que demonstre domínio técnico específico pesa mais.',
    processo: 'O diagnóstico aqui avalia principalmente se o escritório tem casos/conteúdo técnico suficiente para sustentar uma presença institucional de autoridade na área, já que esta não costuma ser uma área de conversão por anúncio direto.',
    faq: [
      { q: 'Por que não recomendam tráfego pago para esta área?', a: 'Não é uma regra fixa, mas a experiência geral do mercado jurídico indica que disputa societária costuma chegar por indicação ou pesquisa após o problema já existir, não por clique em anúncio — o diagnóstico confirma se isso vale para o seu caso.' },
    ],
  },
  {
    slug: 'contratual', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados contratuais',
    metaDescription: 'Captação de clientes para escritórios de elaboração e disputa de contratos empresariais.',
    lede: 'Direito contratual é o recorte de empresarial focado especificamente em elaborar, revisar ou litigar contrato — uma demanda que pode ser recorrente (empresa que sempre precisa de contrato novo) ou pontual (disputa sobre um contrato específico).',
    quemAtende: 'Empresas que precisam de contratos elaborados ou revisados com regularidade, e separadamente empresas enfrentando uma disputa específica sobre descumprimento contratual.',
    desafios: [
      { titulo: 'Recorrente versus pontual', texto: 'Empresa que precisa de assessoria contratual contínua decide diferente de empresa com uma disputa específica — a mensagem de captação muda conforme o caso.' },
    ],
    canais: ['sites', 'google-ads'],
    estrategiaTexto: 'Para a demanda recorrente de elaboração de contrato, presença institucional pesa mais. Para disputa pontual sobre descumprimento, Google Ads recortado pela situação específica pode captar busca ativa.',
    processo: 'O diagnóstico separa se o foco é captar demanda recorrente (assessoria contínua) ou pontual (disputa específica), porque a estratégia recomendada muda bastante entre as duas.',
    faq: [
      { q: 'Dá pra anunciar genericamente "advogado de contratos"?', a: 'Tende a performar pior do que recortar pela situação específica (ex.: descumprimento de contrato de prestação de serviço) — o termo genérico é vago demais para quem pesquisa.' },
    ],
  },
  {
    slug: 'tributarista', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados tributaristas',
    metaDescription: 'Captação de clientes para escritórios de direito tributário: planejamento tributário e defesa em autuação fiscal.',
    lede: 'Direito tributário fala quase sempre com empresa — a complexidade técnica do assunto e o valor envolvido fazem a decisão passar por avaliação cuidadosa, não por clique rápido.',
    quemAtende: 'Empresas buscando planejamento tributário preventivo ou defesa em autuação fiscal já instaurada — dois momentos bem diferentes da relação da empresa com o fisco.',
    desafios: [
      { titulo: 'Assunto técnico demais para anúncio genérico', texto: 'Tributário é uma área onde demonstrar domínio técnico (conteúdo, casos) conta mais para gerar confiança do que um anúncio chamativo.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional com conteúdo técnico de qualidade tende a pesar mais do que tráfego pago direto — empresa buscando assessoria tributária geralmente já está pesquisando ativamente e avalia profundidade técnica antes de entrar em contato.',
    processo: 'O diagnóstico aqui avalia se o escritório tem material técnico (artigos, casos) suficiente para sustentar uma presença de autoridade, dado que essa é uma área de decisão mais pesquisada do que impulsionada por anúncio.',
    faq: [
      { q: 'Vale a pena fazer Google Ads para captar empresas com problema fiscal?', a: 'Pode funcionar para situações específicas e urgentes (autuação fiscal recebida, prazo de defesa correndo), mas para planejamento tributário preventivo a presença institucional tende a pesar mais.' },
    ],
  },
  {
    slug: 'bancario', grupo: 'empresas', publico: 'pf',
    titulo: 'Marketing para advogados bancários',
    metaDescription: 'Captação de clientes para escritórios de direito bancário: conta bloqueada, tarifa abusiva, fraude e golpe financeiro.',
    lede: 'Direito bancário é o recorte mais específico do cível/consumidor para disputa com instituição financeira — uma área de alto volume de busca, puxada em parte pelo aumento de golpes e fraudes via PIX.',
    quemAtende: 'Pessoas físicas com conta bloqueada, cobrança de tarifa que consideram abusiva, ou vítimas de fraude/golpe financeiro — demanda geralmente urgente, porque envolve dinheiro bloqueado ou perdido.',
    desafios: [
      { titulo: 'Urgência real sobre dinheiro', texto: 'Conta bloqueada ou golpe de PIX é um problema financeiro imediato — a pessoa quer resposta rápida, o que pede atendimento ágil, não necessariamente promessa de solução imediata.' },
    ],
    canais: ['google-ads', 'landing-pages', 'ia-atendimento'],
    estrategiaTexto: 'Google Ads captura bem a busca específica ("desbloqueio de conta", "fui vítima de golpe PIX"). Uma landing page por situação concentra a mensagem. A triagem por IA ajuda a atender rápido um volume que costuma ser alto nessa área.',
    processo: 'O diagnóstico identifica qual situação bancária específica (bloqueio, tarifa, fraude) tem mais volume de busca na região para recortar a primeira campanha.',
    faq: [
      { q: 'Qual a diferença entre esta página e a de Direito do Consumidor?', a: 'Bancário é um recorte ainda mais específico de consumidor, só sobre disputas com instituição financeira. Se o problema do cliente não envolve banco, a página de Consumidor é mais abrangente.' },
    ],
  },
  {
    slug: 'recuperacao-judicial-falencias', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados de recuperação judicial e falências',
    metaDescription: 'Captação de clientes para escritórios especializados em recuperação judicial e falência empresarial.',
    lede: 'Recuperação judicial e falência atendem empresa em situação financeira crítica — uma decisão de altíssimo peso, quase sempre guiada por indicação de contador, outro advogado ou rede de relacionamento, não por anúncio.',
    quemAtende: 'Empresas em dificuldade financeira séria avaliando recuperação judicial, ou já em processo de falência — decisão tomada no mais alto nível da empresa, geralmente com urgência real mas baixa tolerância a abordagem comercial agressiva.',
    desafios: [
      { titulo: 'Decisão de altíssimo peso, baixa tolerância a anúncio comercial', texto: 'Empresa nessa situação não "clica em anúncio" — chega por indicação qualificada (contador, outro advogado, rede de relacionamento).' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Esta é uma das áreas onde tráfego pago direto tende a ter pouco retorno. Presença institucional sólida, com autoridade técnica demonstrada, é o que sustenta a indicação que efetivamente traz esse tipo de cliente.',
    processo: 'O diagnóstico aqui foca quase inteiramente em presença institucional e rede de relacionamento (contadores, outros escritórios) — tráfego pago raramente é a recomendação principal nesta área específica.',
    faq: [
      { q: 'Por que não recomendam anúncio pago para esta área?', a: 'Porque, na prática do mercado jurídico, esse tipo de decisão empresarial de altíssimo peso costuma vir de indicação qualificada, não de clique em anúncio — o diagnóstico confirma se há exceção para o seu caso.' },
    ],
  },
  {
    slug: 'propriedade-intelectual', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados de propriedade intelectual',
    metaDescription: 'Captação de clientes para escritórios de registro de marca, patente e proteção de propriedade intelectual.',
    lede: 'Propriedade intelectual atende desde o empreendedor individual registrando uma marca até a empresa protegendo uma patente — um espectro amplo de ticket e urgência dentro da mesma área técnica.',
    quemAtende: 'Empreendedores e empresas que precisam registrar marca, proteger patente, ou já enfrentam uso indevido de algo que consideram seu — a demanda de registro costuma ser mais previsível e pesquisável; a de disputa, mais urgente.',
    desafios: [
      { titulo: 'Registro preventivo x disputa reativa', texto: 'Quem busca registrar uma marca está num momento de decisão calmo; quem descobriu uso indevido está em modo de urgência — a comunicação para cada um é diferente.' },
    ],
    canais: ['google-ads', 'sites'],
    estrategiaTexto: 'Google Ads funciona bem para a busca previsível de registro ("como registrar marca"). Para disputa de uso indevido, a urgência pede landing page própria e resposta rápida — mas o volume dessa situação específica costuma ser menor.',
    processo: 'O diagnóstico separa se o foco inicial é captar demanda de registro (mais previsível, maior volume) ou disputa de uso indevido (mais urgente, menor volume), já que as duas pedem abordagens diferentes.',
    faq: [
      { q: 'Registro de marca é uma boa porta de entrada para tráfego pago?', a: 'Costuma ser mais previsível do que disputa de uso indevido, porque a busca já existe de forma recorrente ("como registrar marca") — bom ponto de partida para testar o canal.' },
    ],
  },
  {
    slug: 'compliance', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados de compliance',
    metaDescription: 'Captação de clientes para escritórios de assessoria em compliance e governança corporativa.',
    lede: 'Compliance é uma área consultiva, vendida para empresa antes de qualquer problema acontecer — o oposto de uma demanda reativa, o que muda completamente a lógica de captação.',
    quemAtende: 'Empresas de médio e grande porte (ou em processo de crescimento) buscando estruturar programas de integridade e governança — decisão institucional, raramente urgente, quase sempre avaliada por mais de uma pessoa.',
    desafios: [
      { titulo: 'Venda consultiva, não reativa', texto: 'Ninguém "precisa" de compliance com a mesma urgência de quem foi preso ou demitido — a venda é consultiva, baseada em demonstrar valor preventivo.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Conteúdo técnico e presença institucional que demonstre domínio da área pesam muito mais aqui do que tráfego pago direto — é uma venda consultiva que se constrói com autoridade, não com clique.',
    processo: 'O diagnóstico aqui avalia o material técnico disponível (cases, artigos, apresentações) para sustentar presença de autoridade, já que esta não é uma área de conversão por anúncio.',
    faq: [
      { q: 'Compliance precisa de tráfego pago?', a: 'Raramente é a recomendação principal — presença institucional e conteúdo técnico tendem a gerar mais resultado nessa área consultiva do que anúncio direto.' },
    ],
  },
  {
    slug: 'direito-digital', grupo: 'empresas', publico: 'ambos',
    titulo: 'Marketing para advogados de Direito Digital',
    metaDescription: 'Captação de clientes para escritórios de direito digital: e-commerce, crime digital, contratos e relações online.',
    lede: 'Direito Digital é o guarda-chuva de problemas jurídicos ligados à atividade online — de e-commerce a crime digital. Quando o foco é especificamente adequação à LGPD, a página de Proteção de Dados é mais específica.',
    quemAtende: 'Pessoas físicas vítimas de crime digital (golpe online, exposição indevida) e empresas que operam digitalmente e precisam de assessoria em contratos e relações online — dois perfis dentro da mesma área técnica.',
    desafios: [
      { titulo: 'Dois públicos dentro da mesma área', texto: 'Pessoa física vítima de golpe digital decide rápido; empresa buscando assessoria para operação digital decide como qualquer demanda empresarial, mais devagar.' },
    ],
    canais: ['google-ads', 'sites'],
    estrategiaTexto: 'Para o público pessoa física (vítima de golpe/crime digital), Google Ads recortado pela situação funciona como em outras áreas de urgência pontual. Para empresa buscando assessoria em operação digital, presença institucional pesa mais.',
    processo: 'O diagnóstico separa os dois públicos antes de recomendar canal — a estratégia para vítima de crime digital é bem diferente da estratégia para empresa buscando assessoria preventiva.',
    faq: [
      { q: 'Qual a diferença entre esta página e a de Proteção de Dados?', a: 'Direito Digital é o guarda-chuva mais amplo (e-commerce, crime digital, contrato online); Proteção de Dados é o recorte específico de adequação à LGPD para organizações. Ver a página de Proteção de Dados.' },
    ],
  },
  {
    slug: 'protecao-de-dados', grupo: 'empresas', publico: 'pj',
    titulo: 'Marketing para advogados de proteção de dados',
    metaDescription: 'Captação de clientes para escritórios de consultoria em LGPD, adequação e governança de dados para organizações.',
    lede: 'Proteção de dados é o recorte específico de Direito Digital voltado à adequação de organizações à LGPD — uma venda consultiva para empresa, parecida em lógica com compliance.',
    quemAtende: 'Empresas e organizações que precisam estruturar ou revisar sua adequação à LGPD — governança de dados, política de privacidade, resposta a incidentes. Decisão institucional, não de pessoa física.',
    desafios: [
      { titulo: 'Venda consultiva e técnica', texto: 'Parecido com compliance: a empresa decide por avaliação de risco e maturidade técnica demonstrada, não por anúncio chamativo.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional com conteúdo técnico sobre LGPD tende a gerar mais confiança do que tráfego pago direto — é uma área onde demonstrar domínio da legislação conta mais do que alcance de anúncio.',
    processo: 'O diagnóstico aqui avalia o material técnico disponível sobre LGPD para sustentar presença de autoridade, dado que esta é outra área consultiva de baixa conversão por anúncio direto.',
    faq: [
      { q: 'Faz sentido anunciar "adequação à LGPD" no Google?', a: 'Pode gerar algum volume, mas o peso maior tende a estar em conteúdo técnico e presença institucional — o diagnóstico avalia o equilíbrio certo para o seu caso.' },
    ],
  },

  // ═══════════════ SAÚDE E SETORES ESPECÍFICOS ═══════════════
  {
    slug: 'direito-da-saude', grupo: 'saude-setores', publico: 'pf',
    titulo: 'Marketing para advogados de Direito da Saúde',
    metaDescription: 'Captação de clientes para escritórios que atuam por pacientes: negativa de plano de saúde, acesso a tratamento e medicamento.',
    lede: 'Direito da Saúde, aqui, fala com o paciente — quem teve um tratamento, cirurgia ou medicamento negado pelo plano de saúde. Quando o cliente é o profissional ou a instituição de saúde, a página de Direito Médico é a mais adequada.',
    quemAtende: 'Pessoas físicas com um tratamento, procedimento ou medicamento negado pelo plano de saúde — demanda geralmente urgente, porque envolve saúde e, às vezes, risco de vida.',
    desafios: [
      { titulo: 'Urgência real, linguagem sóbria', texto: 'Negativa de tratamento pode ser literalmente uma questão de vida — a comunicação precisa levar isso a sério sem explorar medo ou sofrimento para converter.' },
    ],
    canais: ['google-ads', 'landing-pages', 'ia-atendimento'],
    estrategiaTexto: 'Google Ads capta bem a busca por situação ("plano de saúde negou cirurgia"). Uma landing page por tipo de negativa concentra a mensagem. A triagem por IA ajuda a priorizar os casos mais urgentes (risco de vida) na fila de atendimento.',
    processo: 'O diagnóstico aqui prioriza entender o tipo de negativa mais comum na região (cirurgia, medicamento de alto custo, home care) para recortar a campanha e, principalmente, garantir que o atendimento consiga responder rápido aos casos urgentes.',
    faq: [
      { q: 'Qual a diferença entre esta página e a de Direito Médico?', a: 'Esta fala com o paciente prejudicado pelo plano de saúde; Direito Médico fala com o profissional ou a instituição de saúde que precisa de defesa ou assessoria. Ver a página de Direito Médico.' },
    ],
  },
  {
    slug: 'direito-medico', grupo: 'saude-setores', publico: 'ambos',
    titulo: 'Marketing para advogados de Direito Médico',
    metaDescription: 'Captação de clientes para escritórios que atuam por médicos, clínicas e instituições de saúde.',
    lede: 'Direito Médico fala com o outro lado da relação de saúde: o profissional ou a instituição que precisa de defesa em processo ético-disciplinar, ou de assessoria regulatória contínua.',
    quemAtende: 'Médicos individuais enfrentando processo ético-disciplinar ou ação de responsabilidade civil, e clínicas/instituições de saúde buscando assessoria regulatória recorrente — dois perfis com urgência e ciclo de decisão diferentes.',
    desafios: [
      { titulo: 'Público técnico, tema sensível', texto: 'Médico ou clínica avalia o escritório pelo domínio técnico específico da área da saúde — genérico demais não gera confiança nesse público.' },
    ],
    canais: ['sites', 'estruturacao-comercial'],
    estrategiaTexto: 'Presença institucional com autoridade técnica demonstrada pesa mais aqui do que anúncio de clique — médicos e instituições de saúde avaliam domínio técnico antes de decidir. Quando há urgência (processo em andamento), a estruturação comercial garante atendimento ágil ao primeiro contato.',
    processo: 'O diagnóstico aqui avalia se o foco é captar médicos individuais (processo pontual) ou instituições de saúde (assessoria recorrente), porque muda a prioridade entre conteúdo técnico e atendimento ágil.',
    faq: [
      { q: 'Esta página é para pacientes também?', a: 'Não — fala especificamente com o profissional ou a instituição de saúde. Pacientes que buscam reparação por erro médico ou negativa de tratamento encontram a abordagem certa na página de Direito da Saúde.' },
    ],
  },
  {
    slug: 'ambientais', grupo: 'saude-setores', publico: 'pj',
    titulo: 'Marketing para advogados ambientais',
    metaDescription: 'Captação de clientes para escritórios de direito ambiental: licenciamento, autuação e assessoria regulatória para empresas.',
    lede: 'Direito ambiental fala majoritariamente com empresa — licenciamento de atividade, defesa em autuação ambiental, adequação regulatória. Área técnica, de decisão institucional.',
    quemAtende: 'Empresas de setores com impacto ambiental regulado (indústria, construção, agronegócio) buscando licenciamento, defesa em autuação, ou assessoria regulatória contínua.',
    desafios: [
      { titulo: 'Urgência varia muito por situação', texto: 'Autuação ambiental recebida é urgente; licenciamento preventivo é planejado — a comunicação precisa diferenciar os dois momentos.' },
    ],
    canais: ['sites', 'google-ads'],
    estrategiaTexto: 'Presença institucional técnica pesa mais para licenciamento preventivo. Para autuação ambiental já recebida (situação urgente), Google Ads recortado pode captar busca ativa.',
    processo: 'O diagnóstico identifica se a demanda prioritária é preventiva (licenciamento) ou reativa (defesa em autuação), porque a estratégia recomendada muda entre as duas.',
    faq: [
      { q: 'Esta área atende pessoa física também?', a: 'Pode haver demanda pontual de pessoa física, mas o foco principal da captação nesta página é a empresa com atividade regulada ambientalmente.' },
    ],
  },
  {
    slug: 'agronegocio', grupo: 'saude-setores', publico: 'pj',
    titulo: 'Marketing para advogados agrários e do agronegócio',
    metaDescription: 'Captação de clientes para escritórios de direito agrário e do agronegócio.',
    lede: 'Direito agrário e do agronegócio atende um público concentrado em regiões específicas e com dinâmica própria de relacionamento — decisão que costuma passar por rede local e indicação.',
    quemAtende: 'Produtores rurais e empresas do agronegócio enfrentando questões fundiárias, contratuais ou regulatórias específicas do setor — público concentrado geograficamente, com forte peso de indicação local.',
    desafios: [
      { titulo: 'Captação muito dependente da região', texto: 'Diferente de áreas urbanas de alto volume, o agronegócio tem público concentrado e menor volume de busca online em muitas regiões — a estratégia de captação precisa refletir isso.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional e conteúdo técnico específico do setor tendem a pesar mais do que tráfego pago, dado o peso da indicação local e rede de relacionamento nesse mercado.',
    processo: 'O diagnóstico aqui avalia primeiro o volume real de busca online na região de atuação do escritório, porque pode ser baixo o suficiente para tornar tráfego pago pouco eficiente comparado a outras estratégias de presença local.',
    faq: [
      { q: 'Tráfego pago funciona bem para esse setor?', a: 'Depende muito da região — em algumas áreas o volume de busca online é baixo e a indicação local pesa mais. O diagnóstico avalia isso antes de recomendar investimento em anúncio.' },
    ],
  },
  {
    slug: 'direito-aereo', grupo: 'saude-setores', publico: 'pf',
    titulo: 'Marketing para advogados de Direito Aéreo',
    metaDescription: 'Captação de clientes para escritórios de direito do consumidor aéreo: voo cancelado, atraso, overbooking.',
    lede: 'Direito Aéreo, na prática de captação, é majoritariamente um recorte de direito do consumidor — voo cancelado, atraso excessivo, overbooking. Alto volume de busca, situação bem concreta.',
    quemAtende: 'Pessoas físicas que tiveram voo cancelado, atrasado significativamente, ou foram vítimas de overbooking — situação concreta e datada, fácil de identificar.',
    desafios: [
      { titulo: 'Situação concreta, concorrência alta', texto: 'Por ser bem definida e de alto volume, a área atrai bastante concorrência em anúncio — recortar por situação específica (cancelamento vs. atraso vs. overbooking) ajuda a diferenciar.' },
    ],
    canais: ['google-ads', 'landing-pages'],
    estrategiaTexto: 'Google Ads captura bem a busca por situação ("voo cancelado direitos"). Landing page específica por tipo de problema (cancelamento, atraso, overbooking) concentra a mensagem.',
    processo: 'O diagnóstico aqui identifica qual situação (cancelamento, atraso, overbooking, extravio de bagagem) tem mais volume de busca para recortar a primeira campanha.',
    faq: [
      { q: 'Essa é uma área de alto volume de contatos?', a: 'Pode ser, dependendo da região e do recorte da campanha — é uma área concreta e bem pesquisada, o que também significa mais concorrência em anúncio.' },
    ],
  },
  {
    slug: 'maritimos-aduaneiros', grupo: 'saude-setores', publico: 'pj',
    titulo: 'Marketing para advogados marítimos e aduaneiros',
    metaDescription: 'Captação de clientes para escritórios de direito marítimo e aduaneiro — assessoria para empresas de comércio exterior e logística.',
    lede: 'Direito marítimo e aduaneiro é uma área de nicho, quase exclusivamente empresarial, ligada a comércio exterior e logística — baixo volume, alto grau de especialização técnica.',
    quemAtende: 'Empresas de comércio exterior, importação/exportação e logística com questões aduaneiras, portuárias ou de transporte marítimo — público pequeno e especializado.',
    desafios: [
      { titulo: 'Nicho pequeno, alta especialização', texto: 'Volume de busca online tende a ser baixo — o público desse setor costuma já conhecer (ou pedir indicação de) escritórios especializados, mais do que pesquisar genericamente.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional de autoridade técnica tende a ser a estratégia mais eficiente aqui — é um nicho pequeno onde tráfego pago genérico dificilmente compensa o investimento.',
    processo: 'O diagnóstico aqui avalia se o escritório já tem rede no setor (despachantes aduaneiros, armadores, importadoras) para priorizar relacionamento e conteúdo técnico em vez de anúncio.',
    faq: [
      { q: 'Vale a pena anunciar para esse nicho?', a: 'Normalmente não é a primeira recomendação — o volume de busca é baixo e o público tende a decidir por indicação dentro do próprio setor.' },
    ],
  },
  {
    slug: 'transportes', grupo: 'saude-setores', publico: 'pj',
    titulo: 'Marketing para advogados do setor de transportes',
    metaDescription: 'Captação de clientes para escritórios que atendem transportadoras e empresas de logística.',
    lede: 'Direito do setor de transportes atende transportadoras e empresas de logística em questões contratuais, regulatórias e de responsabilidade civil ligadas ao transporte de carga.',
    quemAtende: 'Transportadoras e empresas de logística enfrentando disputa contratual, questão regulatória, ou responsabilidade por carga — público empresarial, concentrado em quem já opera no setor.',
    desafios: [
      { titulo: 'Setor concentrado, decisão técnica', texto: 'O público conhece o próprio negócio profundamente — a comunicação precisa demonstrar entendimento real da operação de transporte, não generalidades jurídicas.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional com conteúdo que demonstre conhecimento real do setor (regulação de transporte, contratos de frete) tende a gerar mais confiança do que anúncio genérico.',
    processo: 'O diagnóstico aqui avalia o conhecimento técnico específico do setor que o escritório pode demonstrar publicamente, porque é isso que diferencia a captação nesse nicho.',
    faq: [
      { q: 'Essa página cobre bloqueio de veículo por aplicativo de transporte?', a: 'Esse tipo de situação específica pode ser um caso dentro da prática mais ampla do setor de transportes — não há página dedicada só a isso nesta etapa, mas pode ser avaliada no diagnóstico.' },
    ],
  },
  {
    slug: 'desportivos', grupo: 'saude-setores', publico: 'ambos',
    titulo: 'Marketing para advogados desportivos',
    metaDescription: 'Captação de clientes para escritórios de direito desportivo: atletas, clubes e questões contratuais do esporte.',
    lede: 'Direito desportivo atende desde o atleta individual (contrato, transferência) até o clube ou empresa do setor — um nicho com público concentrado e forte componente de relacionamento.',
    quemAtende: 'Atletas (contrato, transferência, questões trabalhistas específicas do esporte) e clubes/empresas do setor esportivo buscando assessoria contratual e regulatória.',
    desafios: [
      { titulo: 'Nicho de relacionamento', texto: 'O mercado esportivo é relativamente pequeno e conectado — reputação e rede de contato no meio pesam mais do que alcance de anúncio.' },
    ],
    canais: ['sites', 'meta-ads'],
    estrategiaTexto: 'Presença institucional e rede de relacionamento no meio esportivo tendem a pesar mais. Meta Ads pode ajudar a construir presença e reconhecimento de marca no nicho, mais como construção de autoridade do que conversão direta.',
    processo: 'O diagnóstico aqui avalia a rede de relacionamento que o escritório já tem no meio esportivo antes de recomendar investimento em mídia paga.',
    faq: [
      { q: 'Tráfego pago é a prioridade nessa área?', a: 'Normalmente não é o primeiro passo — rede de relacionamento no meio esportivo costuma pesar mais. Presença institucional ajuda a sustentar essa rede.' },
    ],
  },
  {
    slug: 'direito-educacional', grupo: 'saude-setores', publico: 'ambos',
    titulo: 'Marketing para advogados de Direito Educacional',
    metaDescription: 'Captação de clientes para escritórios de direito educacional: instituições de ensino e questões de alunos/famílias.',
    lede: 'Direito educacional atende tanto instituições de ensino (regulação, contratos) quanto alunos e famílias (questões contratuais, disciplinares) — dois públicos dentro do mesmo setor.',
    quemAtende: 'Instituições de ensino buscando assessoria regulatória e contratual, e separadamente famílias/alunos com questões específicas (contrato de mensalidade, questão disciplinar).',
    desafios: [
      { titulo: 'Dois públicos, duas abordagens', texto: 'Instituição de ensino decide como qualquer empresa (institucional, mais devagar); família com um problema pontual decide mais rápido.' },
    ],
    canais: ['sites', 'google-ads'],
    estrategiaTexto: 'Para captar instituições de ensino, presença institucional pesa mais. Para família com problema pontual (ex.: disputa de mensalidade), Google Ads recortado pode captar busca ativa.',
    processo: 'O diagnóstico separa qual público é prioridade — instituição de ensino ou família/aluno — porque a estratégia recomendada muda entre os dois.',
    faq: [
      { q: 'Esta página serve para captar escolas como clientes?', a: 'Sim, esse é um dos dois públicos cobertos — instituições de ensino buscando assessoria regulatória e contratual recorrente.' },
    ],
  },

  // ═══════════════ DIREITO PÚBLICO E ATUAÇÃO INTERNACIONAL ═══════════════
  {
    slug: 'administrativos', grupo: 'publico-internacional', publico: 'ambos',
    titulo: 'Marketing para advogados administrativistas',
    metaDescription: 'Captação de clientes para escritórios de direito administrativo — relação de pessoa física ou empresa com a administração pública.',
    lede: 'Direito administrativo é o guarda-chuva de questões envolvendo a administração pública. Quando o foco é especificamente licitação e contrato público, a página de Licitações é mais específica.',
    quemAtende: 'Pessoas físicas e empresas com questões envolvendo órgãos públicos — de servidor público buscando orientação sobre processo administrativo a empresa questionando ato da administração.',
    desafios: [
      { titulo: 'Escopo amplo, recorte necessário', texto: 'Como em outras áreas-guarda-chuva, a campanha performa melhor recortada por situação específica do que por "direito administrativo" genérico.' },
    ],
    canais: ['sites', 'google-ads'],
    estrategiaTexto: 'Depende muito da situação recortada: para demanda de servidor público (ex.: processo administrativo disciplinar), Google Ads recortado pode funcionar; para assessoria a empresas em relação com a administração, presença institucional pesa mais.',
    processo: 'O diagnóstico aqui identifica qual situação específica dentro do administrativo tem demanda real na região antes de recomendar canal.',
    faq: [
      { q: 'Qual a diferença entre esta página e a de Licitações?', a: 'Administrativo é o guarda-chuva mais amplo; Licitações é o recorte específico de contratação pública. Ver a página de Licitações.' },
    ],
  },
  {
    slug: 'licitacoes', grupo: 'publico-internacional', publico: 'pj',
    titulo: 'Marketing para advogados de licitações e contratos públicos',
    metaDescription: 'Captação de clientes para escritórios especializados em licitação pública e contratos administrativos.',
    lede: 'Licitações é o recorte específico de administrativo voltado a empresas que participam de processos de contratação pública — área técnica, de decisão empresarial.',
    quemAtende: 'Empresas que participam ou querem participar de licitações públicas, buscando assessoria na elaboração de propostas, impugnação de edital, ou defesa em processo administrativo relacionado.',
    desafios: [
      { titulo: 'Público técnico e recorrente', texto: 'Empresa que licita com frequência valoriza domínio técnico específico da Lei de Licitações — presença institucional técnica pesa mais do que anúncio genérico.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional com conteúdo técnico sobre licitações tende a gerar mais confiança do que tráfego pago direto — esse público pesquisa e compara domínio técnico antes de contratar.',
    processo: 'O diagnóstico aqui avalia o material técnico disponível sobre licitações para sustentar presença de autoridade no setor.',
    faq: [
      { q: 'Esta área atende empresa pequena também?', a: 'Pode atender, mas o perfil mais comum é empresa que já participa ou pretende participar ativamente de licitações — isso é confirmado no diagnóstico.' },
    ],
  },
  {
    slug: 'eleitorais', grupo: 'publico-internacional', publico: 'pf',
    titulo: 'Marketing para advogados eleitorais',
    metaDescription: 'Captação de clientes para escritórios de direito eleitoral — assessoria a candidatos e partidos.',
    lede: 'Direito eleitoral tem uma característica única: demanda concentrada em período de eleição, com picos bem previsíveis no calendário.',
    quemAtende: 'Candidatos, partidos e assessorias de campanha buscando assessoria jurídica eleitoral — principalmente antes e durante o período eleitoral.',
    desafios: [
      { titulo: 'Sazonalidade extrema', texto: 'Diferente de quase todas as outras áreas, a demanda aqui se concentra fortemente em período eleitoral — a estratégia de captação precisa respeitar esse calendário, não ser constante o ano todo.' },
    ],
    canais: ['sites', 'estruturacao-comercial'],
    estrategiaTexto: 'Presença institucional construída com antecedência ao período eleitoral tende a funcionar melhor do que uma campanha de tráfego pago fora de época. Perto da eleição, atendimento ágil pesa mais, dado o volume concentrado de demanda.',
    processo: 'O diagnóstico aqui leva o calendário eleitoral em conta — o momento do ano em que o escritório está decidindo investir muda completamente a recomendação.',
    faq: [
      { q: 'Faz sentido anunciar fora do período eleitoral?', a: 'Tende a ter menos retorno do que investir em presença institucional constante e concentrar esforço de captação próximo ao período eleitoral, quando a demanda real existe.' },
    ],
  },
  {
    slug: 'militares', grupo: 'publico-internacional', publico: 'pf',
    titulo: 'Marketing para advogados militares',
    metaDescription: 'Captação de clientes para escritórios de direito militar — assessoria a militares em processos administrativos e judiciais.',
    lede: 'Direito militar atende um público bem específico — militares das forças armadas ou forças estaduais enfrentando processo administrativo, disciplinar ou judicial ligado à carreira.',
    quemAtende: 'Militares (ativos, inativos ou reformados) enfrentando processo disciplinar, administrativo, ou questão relacionada a direitos da carreira militar — público concentrado e específico.',
    desafios: [
      { titulo: 'Público concentrado, linguagem específica', texto: 'O vocabulário e os ritos do direito militar são próprios — a comunicação precisa demonstrar familiaridade real com esse universo.' },
    ],
    canais: ['google-ads', 'sites'],
    estrategiaTexto: 'Google Ads recortado por situação específica (processo disciplinar, questão de reforma) pode captar busca ativa desse público concentrado. Presença institucional que demonstre familiaridade com o meio militar ajuda a gerar confiança.',
    processo: 'O diagnóstico aqui avalia a presença de público militar na região (proximidade com unidades militares, por exemplo) para dimensionar o volume de busca real.',
    faq: [
      { q: 'Esse público pesquisa no Google como qualquer outro?', a: 'Sim, mas com termos de busca específicos do universo militar — a campanha precisa usar a linguagem certa, não genérica.' },
    ],
  },
  {
    slug: 'internacionais', grupo: 'publico-internacional', publico: 'pj',
    titulo: 'Marketing para advogados de atuação internacional',
    metaDescription: 'Captação de clientes para escritórios de direito internacional empresarial: comércio exterior, contratos internacionais.',
    lede: 'Direito internacional, aqui, fala com empresa — comércio exterior, contratos internacionais, disputas transfronteiriças. Quando o cliente é pessoa física buscando imigrar ou se naturalizar, a página de Imigração é a certa.',
    quemAtende: 'Empresas com operação ou intenção de operação internacional — comércio exterior, contrato com parceiro estrangeiro, disputa transfronteiriça.',
    desafios: [
      { titulo: 'Público pequeno, alta especialização', texto: 'É um nicho empresarial relativamente pequeno no Brasil — a captação depende de demonstrar domínio técnico real, não de volume de anúncio.' },
    ],
    canais: ['sites'],
    estrategiaTexto: 'Presença institucional com conteúdo técnico sobre comércio exterior e contratos internacionais tende a ser a estratégia mais eficiente para esse nicho empresarial específico.',
    processo: 'O diagnóstico aqui avalia o segmento específico de atuação internacional que o escritório domina (comércio exterior, M&A internacional, etc.) para direcionar o conteúdo e a presença institucional.',
    faq: [
      { q: 'Qual a diferença entre esta página e a de Imigração?', a: 'Esta fala com empresa sobre operação internacional; Imigração fala com pessoa física sobre visto, nacionalidade ou regularização migratória. Ver a página de Imigração.' },
    ],
  },
  {
    slug: 'imigracao-nacionalidade', grupo: 'publico-internacional', publico: 'pf',
    titulo: 'Marketing para advogados de imigração e nacionalidade',
    metaDescription: 'Captação de clientes para escritórios de direito migratório: visto, residência, nacionalidade.',
    lede: 'Imigração e nacionalidade atendem pessoa física — estrangeiro buscando regularização no Brasil, ou brasileiro buscando nacionalidade/residência em outro país.',
    quemAtende: 'Pessoas físicas estrangeiras buscando visto, residência ou regularização migratória no Brasil, e brasileiros buscando nacionalidade ou residência em outro país.',
    desafios: [
      { titulo: 'Público multilíngue e diverso', texto: 'Parte do público pode não ter português como primeira língua — vale considerar isso na comunicação e nos canais de atendimento.' },
    ],
    canais: ['google-ads', 'meta-ads', 'sites'],
    estrategiaTexto: 'Google Ads captura busca ativa por situação migratória específica. Meta Ads pode alcançar comunidades de imigrantes de forma mais direcionada. Um site institucional claro ajuda a explicar processos migratórios, que costumam ser longos e burocráticos.',
    processo: 'O diagnóstico aqui identifica o perfil predominante do público (estrangeiro buscando regularização no Brasil, ou brasileiro buscando sair) para direcionar canal e linguagem.',
    faq: [
      { q: 'O atendimento é feito em outro idioma além de português?', a: 'Isso depende da estrutura de cada escritório — é um ponto a verificar no diagnóstico, já que parte relevante do público pode preferir outro idioma.' },
    ],
  },

  // ═══════════════ ESCRITÓRIOS COM ATUAÇÃO AMPLA ═══════════════
  {
    slug: 'multiplas-areas', grupo: 'amplo', publico: 'ambos',
    titulo: 'Marketing para escritórios de advocacia com múltiplas áreas',
    metaDescription: 'Captação de clientes para escritórios full service, que atuam em várias áreas do direito ao mesmo tempo.',
    lede: 'Escritórios full service — que atendem várias áreas ao mesmo tempo — têm um desafio de comunicação próprio: como se apresentar sem parecer genérico demais para nenhum público específico.',
    quemAtende: 'Varia conforme as áreas que o escritório atende — o desafio aqui não é "quem", mas como organizar a comunicação de várias áreas sem diluir a mensagem para cada uma.',
    desafios: [
      { titulo: 'Diluição de mensagem', texto: 'Um site ou anúncio que tenta falar com todo mundo ao mesmo tempo geralmente não fala bem com ninguém — a solução costuma ser ter páginas específicas por área (como as 35 listadas em /especialidades/), não uma mensagem genérica única.' },
    ],
    canais: ['sites', 'landing-pages'],
    estrategiaTexto: 'A recomendação central para escritórios full service é ter um site institucional organizado por área de atuação (cada área com sua própria página, como esta seção do site demonstra), em vez de uma comunicação genérica — e então direcionar tráfego pago separadamente para a área com maior demanda no momento.',
    processo: 'O diagnóstico aqui mapeia todas as áreas que o escritório atende e prioriza quais têm maior potencial de captação digital, para não tentar atacar tudo ao mesmo tempo com o mesmo investimento.',
    faq: [
      { q: 'Um escritório com várias áreas precisa de uma página para cada uma?', a: 'É o que normalmente funciona melhor — uma página por área de atuação, como esta seção do site demonstra, em vez de uma única página genérica tentando falar com todo mundo.' },
    ],
  },
];
