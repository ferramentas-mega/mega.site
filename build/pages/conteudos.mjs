import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, esc } from '../partials.mjs';
import { PAGINAS } from '../nav.mjs';

const url = '/conteudos/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Conteúdos' }];

const RESUMOS = {
  '/conteudos/quanto-investir-google-ads-advogados/': 'Os fatores que mudam o orçamento ideal — e por que não existe um valor único certo.',
  '/conteudos/google-ads-ou-meta-ads-advogados/': 'Busca ativa ou demanda nova: como decidir onde investir primeiro.',
  '/conteudos/site-ou-landing-page-advogados/': 'Presença institucional ou conversão de campanha: quando usar cada formato.',
  '/conteudos/custo-por-lead-e-cliente-advocacia/': 'A diferença entre custo por lead e custo por contrato assinado.',
  '/conteudos/atendimento-whatsapp-escritorio-advocacia/': 'Velocidade de resposta e roteiro de qualificação no WhatsApp.',
  '/conteudos/ia-pre-atendimento-escritorio-advocacia/': 'O que automatizar — e onde a automação precisa parar.',
};

export function page() {
  const artigos = PAGINAS.filter((p) => p.tipo === 'artigo' && p.status === 'publicada');
  const categorias = [...new Set(artigos.map((a) => {
    if (a.url.includes('investir') || a.url.includes('google-ads-ou-meta')) return 'Tráfego pago';
    if (a.url.includes('site-ou-landing')) return 'Presença digital';
    if (a.url.includes('custo-por-lead')) return 'Mensuração';
    return 'Atendimento';
  }))];

  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Conteúdos</span>
  <h1>Perguntas reais de quem gerencia um escritório</h1>
  <p class="lede">Conteúdo editorial para quem decide marketing e atendimento no escritório — sem benchmark inventado, sem promessa de resultado.</p>
</section>

<section class="section container" style="padding-top:0">
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px">
    ${categorias.map((c) => `<span class="post-tag">${esc(c)}</span>`).join('')}
  </div>
  <div class="content-cards">
    ${artigos.map((a) => `<a class="content-card" href="${a.url}"><div class="body"><span class="cat">Artigo</span><h3>${esc(a.titulo)}</h3><p>${esc(RESUMOS[a.url] || '')}</p><span class="meta">Mega ADS — conteúdo editorial</span></div></a>`).join('')}
  </div>
</section>`;

  return renderPage({
    url,
    title: 'Conteúdos — marketing jurídico na prática | Mega ADS',
    description: 'Artigos sobre tráfego pago, presença digital, mensuração e atendimento, escritos para quem decide marketing no escritório de advocacia.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
