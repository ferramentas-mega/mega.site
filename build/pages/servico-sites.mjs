import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/criacao-de-sites-para-advogados/',
    title: 'Criação de sites',
    tituloMenu: 'Sites',
    h1: 'Criação de sites para advogados',
    metaTitle: 'Criação de sites para advogados | Mega ADS',
    metaDescription: 'Site institucional para escritórios de advocacia: arquitetura, conteúdo e navegação pensados para apresentar credibilidade e converter contato.',
    lede: 'Um site institucional serve a um propósito diferente de uma landing page de campanha: apresentar o escritório por inteiro — áreas de atuação, forma de trabalho, canais de contato — para quem pesquisa antes de decidir.',
    paraQuem: {
      titulo: 'Presença institucional completa',
      texto: 'Para o escritório que quer um endereço digital próprio, navegável, que sustente múltiplas áreas de atuação e sirva de referência tanto para quem chega por anúncio quanto por indicação ou busca orgânica.',
    },
    problema: {
      titulo: 'Site bonito não é o mesmo que site que converte',
      texto: 'Um site genérico, feito sem pensar na jornada de quem precisa de um advogado, apresenta a empresa mas não conduz a ação. A estrutura — o que vem primeiro, onde o contato aparece, como as áreas de atuação se conectam — decide se o visitante some ou chama no WhatsApp.',
    },
    incluido: [
      { titulo: 'Arquitetura da informação', texto: 'Definição de páginas, navegação e hierarquia de conteúdo, como este próprio site demonstra.' },
      { titulo: 'Redação e design', texto: 'Texto e layout com foco em credibilidade e em facilitar a ação de contato.' },
      { titulo: 'Publicação com rastreamento', texto: 'Site no ar com medição de visitas, cliques e formulários desde o primeiro dia.' },
    ],
    comoFunciona: [
      { titulo: 'Levantamento', texto: 'Áreas de atuação, diferenciais e canais de contato do escritório.' },
      { titulo: 'Arquitetura e conteúdo', texto: 'Definição das páginas e redação do conteúdo de cada uma.' },
      { titulo: 'Publicação', texto: 'Site no ar, com formulário, WhatsApp e rastreamento configurados.' },
    ],
    responsabilidadeCliente: 'Fornecer informações institucionais (áreas de atuação, forma de trabalho, fotos da equipe quando houver) e aprovar o conteúdo antes da publicação.',
    exemplo: { titulo: 'Este site é o exemplo', texto: 'A arquitetura, os componentes compartilhados (cabeçalho, rodapé, FAQ) e a estrutura de conteúdo deste próprio site foram construídos seguindo exatamente este processo.' },
    faq: [
      { q: 'Quanto tempo leva para o site ficar pronto?', a: 'Depende do número de páginas e da velocidade de aprovação de conteúdo pelo escritório. É definido no escopo, na etapa de diagnóstico do método.' },
      { q: 'O site vai funcionar bem no celular?', a: 'Sim — a maior parte do tráfego de quem busca um advogado vem de celular, então o site é construído com isso como prioridade, não como adaptação posterior.' },
      { q: 'Site institucional ou landing page: preciso dos dois?', a: 'Depende do objetivo. Um resume a diferença no artigo Site ou landing page para advogados: quando usar cada um.' },
    ],
    relacionados: [
      { url: '/servicos/landing-pages-para-advogados/', titulo: 'Landing pages', texto: 'Página dedicada a uma oferta ou campanha específica.' },
      { url: '/servicos/trafego-pago-para-advogados/', titulo: 'Tráfego pago', texto: 'Para onde levar tráfego depois do site publicado.' },
      { url: '/conteudos/site-ou-landing-page-advogados/', titulo: 'Site ou landing page: quando usar cada um', texto: 'Artigo que detalha a diferença.' },
    ],
  });
}
