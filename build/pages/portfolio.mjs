import { renderPage, breadcrumbLd, faqLd } from '../shell.mjs';
import { breadcrumbs, ctaWhatsapp, ctaContato, faqList, esc } from '../partials.mjs';
import { draftBanner } from '../layouts.mjs';

const url = '/portfolio/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Portfólio' }];

/**
 * Inventário de projetos. VAZIO DE PROPÓSITO.
 *
 * As 32 URLs foram recebidas (ver PORTFOLIO-INVENTARIO.md), mas NENHUMA pôde
 * ser aberta, verificada ou capturada nesta sessão: o proxy de saída nega
 * conexão por política para domínios externos fora da lista liberada do
 * ambiente — testado e confirmado com `adv.finkleradvocacia.com` e
 * `direitofamilia.com`, mesmo padrão de bloqueio visto a sessão inteira para
 * outros domínios (megaads.com.br, o painel, unpkg.com, web.archive.org).
 * Não é falta de dado — é impossibilidade técnica desta sessão específica.
 *
 * Cada item aqui, quando puder ser preenchido (screenshots enviados
 * diretamente no chat, ou outra sessão com acesso de rede mais amplo), deve
 * trazer: url, categoria(s), nomeEscritorio (ou null se não confirmado),
 * tipo ('Landing page'|'Site'), descricao (factual, sem atribuir
 * resultado/conversão sem dado fornecido), capturaDisponivel (bool).
 */
const PROJETOS = [];

const CATEGORIAS = [
  'Trabalhista', 'Criminal', 'Bancário e consumidor', 'Saúde', 'Família e sucessões',
  'Previdenciário', 'Trânsito', 'Empresarial', 'Imobiliário', 'Tributário',
  'Aéreo', 'Marítimo e aduaneiro', 'Transportador', 'Múltiplas áreas',
];

const faq = [
  { q: 'Contratar uma landing page obriga a contratar tráfego pago também?', a: 'Não. A criação da landing page é um serviço de entrada e pode ser contratada isoladamente. A gestão de tráfego é uma continuidade opcional, para quem quiser atrair visitantes para a página depois de publicada.' },
  { q: 'Posso usar um projeto do portfólio como modelo para o meu?', a: 'Os projetos aqui demonstram experiência e servem como referência de estilo e estrutura — não são modelos prontos para reprodução idêntica. Cada landing page é construída especificamente para o escritório que a contrata, com identidade, textos e estrutura próprios.' },
  { q: 'A landing page publicada já gera clientes sozinha?', a: 'A landing page organiza a apresentação da oferta e o caminho até o contato. Para ela receber visitas, é preciso tráfego — seja orgânico, de indicação, ou de campanhas pagas. Isso é explicado na continuidade para gestão de tráfego, mais abaixo.' },
];

function galeria() {
  if (PROJETOS.length === 0) {
    return `
    <div class="card" style="text-align:center;padding:48px 28px">
      <h3>Galeria em preparação</h3>
      <p style="max-width:480px;margin:0 auto">Esta seção vai reunir projetos reais de landing pages e sites entregues pela Mega ADS, organizados por área de atuação, com captura de tela de cada um. As 32 URLs do inventário já foram recebidas, mas nenhuma pôde ser aberta ou capturada nesta sessão — ver <code>PORTFOLIO-INVENTARIO.md</code> para a lista completa e o motivo técnico.</p>
    </div>`;
  }
  // Quando o inventário chegar: filtro por categoria (sem página indexável por
  // filtro, conforme pedido), cards com captura real, "Visualizar projeto" e
  // "Quero uma LP para minha área" levando a /contato/ com contexto no query
  // string (?projeto=...&area=...&interesse=criacao-lp&origem=portfolio).
  return `<div class="grid grid-3">${PROJETOS.map((p) => `
    <div class="card service-card">
      <h3>${esc(p.nomeEscritorio || 'Projeto confidencial')}</h3>
      <p>${esc(p.categoria)} · ${esc(p.tipo)}</p>
      <p>${esc(p.descricao || '')}</p>
      <a class="more" href="/contato/?projeto=${encodeURIComponent(p.url)}&area=${encodeURIComponent(p.categoria)}&interesse=criacao-lp&origem=portfolio">Quero uma LP para minha área →</a>
    </div>`).join('')}</div>`;
}

export function page() {
  const nav = { pendencia: 'Nenhum link de projeto foi recebido ainda. A estrutura está pronta; falta o inventário real (URL, categoria, nome do escritório quando confirmado, captura de tela, autorização de uso) para a galeria deixar de estar vazia.' };

  const body = `
${draftBanner(nav.pendencia)}
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Portfólio</span>
  <h1>Landing pages e sites para advogados</h1>
  <p class="lede">Veja o trabalho de criação de páginas para escritórios de advocacia e solicite a sua. A criação da landing page pode ser contratada como primeiro passo — sem obrigação de contratar gestão de tráfego junto.</p>
  <div class="actions">
    ${ctaWhatsapp({ id: 'cta-portfolio-hero', pos: 'Portfólio', label: 'Solicitar minha landing page', texto: 'Olá! Vi o portfólio da Mega ADS e quero uma landing page para o meu escritório.' })}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Áreas</span><h2>Projetos por área de atuação</h2><p>Filtro por categoria. No celular, use o seletor abaixo; no computador, as categorias ficam visíveis lado a lado.</p></div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px" role="group" aria-label="Filtrar por área">
    ${CATEGORIAS.map((c) => `<span class="post-tag" style="cursor:default">${esc(c)}</span>`).join('')}
  </div>
  ${galeria()}
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Como funciona</span><h2>Da solicitação à página publicada</h2></div>
  <div class="step-list">
    <div class="step"><h3>Escolha uma referência</h3><p>Veja os projetos da sua área (quando a galeria estiver publicada) ou descreva o que precisa diretamente.</p></div>
    <div class="step"><h3>Levantamento</h3><p>Informações sobre a área de atuação, diferenciais e canal de contato preferido do escritório.</p></div>
    <div class="step"><h3>Design e redação</h3><p>Texto e layout com foco na ação — falar com o escritório agora.</p></div>
    <div class="step"><h3>Publicação</h3><p>Página no ar, com rastreamento de visitas e cliques configurado.</p></div>
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">O que está incluído</span><h2>Entregáveis da criação</h2></div>
  <div class="grid grid-3">
    <div class="card"><h3>Página publicada</h3><p>Landing page no ar, responsiva, com a identidade do escritório.</p></div>
    <div class="card"><h3>Formulário e WhatsApp</h3><p>Caminho de contato configurado e testado.</p></div>
    <div class="card"><h3>Rastreamento</h3><p>Medição de visitas e cliques desde a publicação.</p></div>
  </div>
  <p style="color:var(--text-3);font-size:13px;margin-top:18px">Prazo, quantidade de revisões incluídas e condições de hospedagem são definidos na conversa comercial — não publicamos esses números aqui sem confirmação.</p>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Dúvidas</span><h2>Perguntas sobre a contratação</h2></div>
  ${faqList(faq)}
</section>

<section class="section container" style="padding-top:0">
  <div class="cta-band">
    <h2>Também quer atrair visitantes para sua página?</h2>
    <p>Depois da landing page publicada, conheça a gestão de tráfego — a continuidade para quem quer campanhas pagas levando visitas até ela.</p>
    <div class="actions" style="justify-content:center;display:flex;flex-wrap:wrap;gap:12px">
      <a class="btn btn-secondary" href="/servicos/trafego-pago-para-advogados/">Conhecer gestão de tráfego</a>
      ${ctaContato({ id: 'cta-portfolio-final', pos: 'Portfólio', label: 'Solicitar proposta' })}
    </div>
  </div>
</section>`;

  return renderPage({
    url,
    title: 'Portfólio — landing pages e sites para advogados | Mega ADS',
    description: 'Projetos de landing pages e sites criados pela Mega ADS para escritórios de advocacia. Solicite a sua.',
    robots: 'noindex, nofollow',
    structuredData: [breadcrumbLd(crumbs), faqLd(faq)],
    body,
  });
}
