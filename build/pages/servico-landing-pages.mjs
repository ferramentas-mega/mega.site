import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/landing-pages-para-advogados/',
    title: 'Landing pages',
    tituloMenu: 'Landing pages',
    h1: 'Landing pages para advogados',
    metaTitle: 'Landing page para advogados — página de campanha | Mega ADS',
    metaDescription: 'Landing page dedicada a uma oferta ou campanha específica, com clareza de mensagem, formulário e mensuração completa.',
    lede: 'Páginas construídas para converter, não apenas para existir. Uma oferta, um argumento, um formulário — sem a dispersão de um site institucional completo.',
    paraQuem: {
      titulo: 'Uma página por campanha ou oferta',
      texto: 'Para quando o objetivo é converter o clique de um anúncio específico — uma área de atuação, uma situação concreta ("foi demitido sem justa causa?") — sem competir com menus e outras páginas do site institucional. É também a porta de entrada mais comum: dá para contratar a criação da landing page isoladamente, sem compromisso de contratar gestão de tráfego junto — veja projetos reais no <a href="/portfolio/" style="color:var(--blue-2)">portfólio</a>.',
    },
    problema: {
      titulo: 'Dispersão mata conversão',
      texto: 'Levar tráfego pago para a home de um site institucional, cheia de links e seções sobre tudo, dilui a mensagem do anúncio. A landing page resolve isso: a mesma promessa do anúncio continua na página, sem distração até o formulário ou o WhatsApp.',
    },
    incluido: [
      { titulo: 'Arquitetura da página', texto: 'Estrutura, argumentos e ordem das provas definidos com base no que converte na área de atuação.' },
      { titulo: 'Design e redação', texto: 'Texto e layout com foco na ação única: falar com o escritório agora.' },
      { titulo: 'Publicação e testes', texto: 'Página no ar com rastreamento completo e testes de variações de título, oferta e botão.' },
    ],
    comoFunciona: [
      { titulo: 'Definição da oferta', texto: 'Uma única promessa, alinhada ao anúncio que vai trazer o tráfego.' },
      { titulo: 'Construção', texto: 'Página com um objetivo — contato — sem navegação concorrente.' },
      { titulo: 'Teste e ajuste', texto: 'Variações de título, oferta e botão testadas com o tráfego real da campanha.' },
    ],
    responsabilidadeCliente: 'Aprovar a oferta e o texto antes da publicação, e garantir capacidade de atendimento compatível com o volume de leads esperado da campanha.',
    exemplo: null,
    faq: [
      { q: 'Uma landing page substitui o site institucional?', a: 'Não — são complementares. A landing page serve a uma campanha específica; o site institucional apresenta o escritório por inteiro. Ver Site ou landing page: quando usar cada um.' },
      { q: 'A página fica em conformidade com a OAB?', a: 'Sim — a sobriedade do Provimento 205/2021 vale tanto para o texto do anúncio quanto para a página de destino.' },
    ],
    relacionados: [
      { url: '/servicos/criacao-de-sites-para-advogados/', titulo: 'Criação de sites', texto: 'Para presença institucional completa.' },
      { url: '/servicos/trafego-pago-para-advogados/', titulo: 'Tráfego pago', texto: 'O tráfego que alimenta a landing page.' },
      { url: '/conteudos/site-ou-landing-page-advogados/', titulo: 'Site ou landing page: quando usar cada um', texto: 'Artigo com a comparação completa.' },
    ],
  });
}
