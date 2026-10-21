import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, ctaBand, esc } from '../partials.mjs';
import { PAGINAS } from '../nav.mjs';

const url = '/servicos/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Soluções' }];

const GRUPOS = [
  {
    titulo: 'Atrair demanda',
    texto: 'Colocar o escritório na frente de quem já está procurando um advogado.',
    urls: ['/servicos/trafego-pago-para-advogados/', '/servicos/google-ads-para-advogados/', '/servicos/meta-ads-para-advogados/'],
  },
  {
    titulo: 'Melhorar a presença digital',
    texto: 'O lugar para onde o clique leva precisa converter, não só existir.',
    urls: ['/servicos/criacao-de-sites-para-advogados/', '/servicos/landing-pages-para-advogados/'],
  },
  {
    titulo: 'Organizar atendimento e acompanhamento',
    texto: 'Transformar lead em cliente depende de quem atende, não só de quem anuncia.',
    urls: ['/servicos/estruturacao-comercial-para-advogados/', '/servicos/ia-para-atendimento-juridico/'],
  },
];

export function page() {
  const resumos = {
    '/servicos/trafego-pago-para-advogados/': 'Gestão de Google Ads e Meta Ads para escritórios de advocacia.',
    '/servicos/google-ads-para-advogados/': 'Campanhas de busca para captar quem já procura um advogado agora.',
    '/servicos/meta-ads-para-advogados/': 'Criativos e distribuição no Instagram e Facebook para gerar demanda.',
    '/servicos/criacao-de-sites-para-advogados/': 'Site institucional com arquitetura, conteúdo e navegação pensados para conversão.',
    '/servicos/landing-pages-para-advogados/': 'Página dedicada a uma oferta ou campanha específica, com mensuração.',
    '/servicos/estruturacao-comercial-para-advogados/': 'Atendimento, qualificação e condução do lead até o contrato assinado.',
    '/servicos/ia-para-atendimento-juridico/': 'Triagem automática no WhatsApp, com transferência para uma pessoa quando necessário.',
  };

  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Soluções</span>
  <h1>Do primeiro anúncio ao contrato assinado</h1>
  <p class="lede">Cada solução abaixo pode funcionar isoladamente, mas foi desenhada para operar em conjunto — é assim que o escritório escala com previsibilidade. Agrupamos por necessidade para facilitar a escolha de onde começar.</p>
</section>

${GRUPOS.map((g) => `
<section class="section container" style="padding-top:0">
  <div class="section-head"><h2>${esc(g.titulo)}</h2><p>${esc(g.texto)}</p></div>
  <div class="grid grid-3">
    ${g.urls.map((u) => {
      const p = PAGINAS.find((x) => x.url === u);
      return `<a class="content-card service-card" href="${u}"><div class="body"><h3>${esc(p.titulo)}</h3><p>${esc(resumos[u] || '')}</p><span class="more">Ver solução →</span></div></a>`;
    }).join('')}
  </div>
</section>`).join('')}

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: 'Não sabe por onde começar?', texto: 'O diagnóstico inicial aponta qual solução faz mais sentido para o momento do seu escritório.', id: 'cta-servicos-final', pos: 'Soluções' })}
</section>`;

  return renderPage({
    url,
    title: 'Soluções de marketing jurídico — Mega ADS',
    description: 'Tráfego pago, sites, landing pages, estruturação comercial e IA para atendimento: as soluções da Mega ADS para escritórios de advocacia.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
