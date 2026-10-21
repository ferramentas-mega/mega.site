import { pageArtigo } from '../layouts.mjs';

export function page() {
  return pageArtigo({
    url: '/conteudos/site-ou-landing-page-advogados/',
    title: 'Site ou landing page para advogados: quando usar cada um?',
    categoria: 'Presença digital',
    h1: 'Site ou landing page para advogados: quando usar cada um?',
    metaTitle: 'Site institucional ou landing page para advogados? | Mega ADS',
    metaDescription: 'Entenda a diferença entre um site institucional e uma landing page, e quando cada um faz mais sentido para o seu escritório.',
    dataIso: '2026-10-21',
    dataLegivel: '21 de outubro de 2026',
    corpo: `
<p><strong>Resposta direta:</strong> site institucional apresenta o escritório por inteiro; landing page converte uma campanha específica. Não são substitutos — servem a objetivos diferentes, e muitos escritórios acabam precisando dos dois.</p>

<h2>O que cada um faz</h2>
<p>Um <strong>site institucional</strong> tem múltiplas páginas — sobre o escritório, áreas de atuação, equipe, contato — e serve como referência para quem pesquisa, chega por indicação, ou quer confirmar que o escritório é sério antes de decidir.</p>
<p>Uma <strong>landing page</strong> tem uma página só, com um objetivo único: converter o clique de uma campanha específica em contato. Não tem menu de navegação distraindo, porque não deveria distrair — a pessoa chegou ali por um anúncio sobre um assunto específico.</p>

<h2>Quando o site institucional faz mais sentido</h2>
<ul>
<li>O escritório quer presença digital permanente, não ligada a uma campanha específica.</li>
<li>Há múltiplas áreas de atuação a apresentar.</li>
<li>Parte do tráfego vem de busca orgânica ou indicação, não só de anúncio pago.</li>
</ul>

<h2>Quando a landing page faz mais sentido</h2>
<ul>
<li>Há uma campanha de anúncio específica, sobre um tema concreto (ex.: "demissão sem justa causa").</li>
<li>O objetivo é maximizar a taxa de conversão daquele tráfego pago específico, sem concorrência de outras páginas do site.</li>
<li>Diferentes campanhas testam diferentes ofertas ou mensagens — cada uma com sua própria landing page.</li>
</ul>

<h2>Na prática, os dois costumam coexistir</h2>
<p>Hipoteticamente: um escritório pode ter um site institucional como base, e landing pages específicas para cada campanha de anúncio ativa — a campanha de Google Ads sobre rescisão trabalhista leva para uma landing page sobre rescisão, não para a home do site. Isso mantém a mensagem do anúncio coerente até o fim.</p>`,
    faq: [
      { q: 'Preciso ter os dois desde o início?', a: 'Não necessariamente — muitos escritórios começam só com uma landing page ligada à primeira campanha, e constroem o site institucional depois, quando a operação de captação já está validada.' },
      { q: 'A landing page é indexada pelo Google como o site?', a: 'Sim, uma landing page tem URL própria e pode ser indexada — mas o foco dela é a conversão do tráfego pago, não o posicionamento orgânico, que normalmente é papel do site institucional e do conteúdo editorial.' },
    ],
    relacionados: [
      { url: '/servicos/criacao-de-sites-para-advogados/', titulo: 'Criação de sites para advogados' },
      { url: '/servicos/landing-pages-para-advogados/', titulo: 'Landing pages para advogados' },
    ],
  });
}
