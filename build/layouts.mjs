import { renderPage, breadcrumbLd, faqLd } from './shell.mjs';
import { breadcrumbs, faqList, ctaBand, ctaWhatsapp, ctaContato, esc } from './partials.mjs';
import { SITE, PAGINAS } from './nav.mjs';

const draftBanner = (texto) => `<div class="draft-banner container" role="note"><strong>Rascunho interno — fora da navegação pública.</strong> ${esc(texto)}</div>`;

/**
 * Página de serviço (Fase 2). Estrutura fixa do briefing (seção 7), conteúdo
 * variável por serviço — isso é o que evita "oito páginas trocando só o
 * nome do serviço": cada `dados` é escrito à mão para aquele serviço.
 */
export function pageServico(dados) {
  const nav = PAGINAS.find((p) => p.url === dados.url);
  const rascunho = nav?.status !== 'publicada';
  const crumbs = [{ label: 'Home', url: '/' }, { label: 'Soluções', url: '/servicos/' }, { label: dados.tituloMenu || dados.title }];

  const body = `
${rascunho ? draftBanner(nav.pendencia) : ''}
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Soluções</span>
  <h1>${esc(dados.h1)}</h1>
  <p class="lede">${dados.lede}</p>
  <div class="actions">
    ${ctaWhatsapp({ id: 'cta-servico-hero', pos: dados.title, texto: `Olá! Quero saber mais sobre ${dados.h1.toLowerCase()}.` })}
    ${ctaContato({ id: 'cta-servico-hero-form', pos: dados.title })}
  </div>
</section>

<section class="section container">
  <div class="section-head"><span class="kicker">O que é e para quem</span><h2>${esc(dados.paraQuem.titulo)}</h2><p>${dados.paraQuem.texto}</p></div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">O problema</span><h2>${esc(dados.problema.titulo)}</h2><p>${dados.problema.texto}</p></div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">O que está incluído</span><h2>O que você recebe</h2></div>
  <div class="grid grid-3">
    ${dados.incluido.map((it) => `<div class="card"><h3>${esc(it.titulo)}</h3><p>${it.texto}</p></div>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Como funciona</span><h2>O passo a passo</h2></div>
  <div class="step-list">
    ${dados.comoFunciona.map((it) => `<div class="step"><h3>${esc(it.titulo)}</h3><p>${it.texto}</p></div>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="grid grid-2">
    <div class="card">
      <h3>O que depende do seu escritório</h3>
      <p>${dados.responsabilidadeCliente}</p>
    </div>
    ${dados.exemplo ? `<div class="card"><h3>${esc(dados.exemplo.titulo)}</h3><p>${dados.exemplo.texto}</p></div>` : `<div class="card"><h3>Exemplos</h3><p>Ainda não temos um case autorizado para publicar especificamente deste serviço. Ver <a href="/resultados/" style="color:var(--blue-2)">Resultados</a> para os projetos já confirmados.</p></div>`}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Dúvidas</span><h2>Perguntas sobre ${esc(dados.title.toLowerCase())}</h2></div>
  ${faqList(dados.faq)}
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Relacionados</span><h2>Outras soluções</h2></div>
  <div class="grid grid-3">
    ${dados.relacionados.map((r) => `<a class="content-card" href="${r.url}"><div class="body"><h3>${esc(r.titulo)}</h3><p>${esc(r.texto)}</p></div></a>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: dados.ctaFinal?.titulo || `Quer estruturar ${dados.h1.toLowerCase()}?`, texto: dados.ctaFinal?.texto || 'Fale com um especialista da Mega ADS e entenda se faz sentido para o seu escritório agora.', id: 'cta-servico-final', pos: dados.title })}
</section>`;

  return renderPage({
    url: dados.url,
    title: dados.metaTitle,
    description: dados.metaDescription,
    robots: rascunho ? 'noindex, nofollow' : 'index, follow',
    structuredData: [
      breadcrumbLd(crumbs),
      faqLd(dados.faq),
      {
        '@context': 'https://schema.org', '@type': 'Service',
        name: dados.h1, serviceType: dados.h1,
        provider: { '@type': 'Organization', name: 'Mega ADS', url: SITE.dominio + '/' },
        areaServed: 'BR',
        audience: { '@type': 'Audience', audienceType: 'Advogados e escritórios de advocacia' },
        description: dados.metaDescription,
      },
    ],
    body,
  });
}

/** Página de especialidade (Fase 3). */
export function pageEspecialidade(dados) {
  const crumbs = [{ label: 'Home', url: '/' }, { label: 'Para quem', url: '/especialidades/' }, { label: dados.title }];
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Para quem</span>
  <h1>${esc(dados.h1)}</h1>
  <p class="lede">${dados.lede}</p>
  <div class="actions">
    ${ctaWhatsapp({ id: 'cta-especialidade-hero', pos: dados.title, texto: `Olá! Meu escritório atua com ${dados.area} e quero entender a captação de clientes.` })}
  </div>
</section>

<section class="section container">
  <div class="section-head"><span class="kicker">O contexto</span><h2>Como é o escritório que atendemos nessa área</h2><p>${dados.contexto}</p></div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Desafios</span><h2>Desafios de comunicação mais comuns</h2></div>
  <div class="grid grid-2">
    ${dados.desafios.map((d) => `<div class="card"><h3>${esc(d.titulo)}</h3><p>${d.texto}</p></div>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Demanda</span><h2>O tipo de demanda que chega por anúncio</h2><p>${dados.demanda}</p></div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Como organizamos</span><h2>Atendimento e qualificação nessa área</h2><p>${dados.organizacao}</p></div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Soluções relevantes</span><h2>O que normalmente faz sentido primeiro</h2></div>
  <div class="grid grid-3">
    ${dados.solucoes.map((s) => `<a class="content-card" href="${s.url}"><div class="body"><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p></div></a>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Dúvidas</span><h2>Perguntas de quem atua com ${esc(dados.area)}</h2></div>
  ${faqList(dados.faq)}
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: `Marketing para advogados de ${dados.area}`, texto: 'Fale com um especialista e veja se o momento do seu escritório pede captação paga agora.', id: 'cta-especialidade-final', pos: dados.title })}
</section>`;

  return renderPage({
    url: dados.url,
    title: dados.metaTitle,
    description: dados.metaDescription,
    structuredData: [breadcrumbLd(crumbs), faqLd(dados.faq)],
    body,
  });
}

/** Artigo da central de conteúdos (Fase 3). */
export function pageArtigo(dados) {
  const crumbs = [{ label: 'Home', url: '/' }, { label: 'Conteúdos', url: '/conteudos/' }, { label: dados.title }];
  const body = `
${breadcrumbs(crumbs)}
<article class="post container">
  <header style="margin-bottom:8px">
    <span class="post-tag">${esc(dados.categoria)}</span>
    <h1 style="font-size:clamp(28px,4vw,42px);font-weight:800;line-height:1.18;letter-spacing:-.02em;margin:18px 0 0">${esc(dados.h1)}</h1>
    <div class="post-meta">
      <span>Mega ADS — conteúdo editorial</span>
      <span aria-hidden="true">·</span>
      <time datetime="${dados.dataIso}">${dados.dataLegivel}</time>
    </div>
  </header>
  <div style="margin-top:28px">${dados.corpo}</div>
  ${dados.faq ? `<h2>Perguntas frequentes</h2>${faqList(dados.faq, 'faq-artigo')}` : ''}
  <div style="margin-top:40px;padding-top:28px;border-top:1px solid var(--border)">
    <h2 style="margin-top:0">Relacionados</h2>
    <div class="grid grid-2">
      ${dados.relacionados.map((r) => `<a class="content-card" href="${r.url}"><div class="body"><h3>${esc(r.titulo)}</h3></div></a>`).join('')}
    </div>
  </div>
  <div style="margin-top:36px">${ctaBand({ titulo: dados.ctaFinal?.titulo || 'Quer ajuda para aplicar isso no seu escritório?', texto: dados.ctaFinal?.texto || 'Fale com um especialista da Mega ADS.', id: 'cta-artigo-final', pos: dados.title })}</div>
</article>`;

  return renderPage({
    url: dados.url,
    title: dados.metaTitle,
    description: dados.metaDescription,
    structuredData: [
      breadcrumbLd(crumbs),
      ...(dados.faq ? [faqLd(dados.faq)] : []),
      {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: dados.h1, description: dados.metaDescription,
        datePublished: dados.dataIso, dateModified: dados.dataIso,
        inLanguage: 'pt-BR',
        publisher: { '@type': 'Organization', name: 'Mega ADS', url: SITE.dominio + '/' },
        author: { '@type': 'Organization', name: 'Mega ADS' },
      },
    ],
    body,
  });
}

export { draftBanner };
