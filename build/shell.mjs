import { SITE } from './nav.mjs';
import { header, footer, esc } from './partials.mjs';

/**
 * Envelope HTML de toda página nova (Fases 1–3).
 *
 * `structuredData`: array de objetos JSON-LD. `organizationLd`/`websiteLd`
 * entram em TODA página; o chamador acrescenta o que for específico do tipo
 * (Service, Article, BreadcrumbList, FAQPage).
 */
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  // Tipo genérico de propósito — NUNCA "LegalService": a Mega ADS não é um
  // escritório de advocacia, é uma agência de marketing que atende advogados.
  name: 'Mega ADS',
  url: SITE.dominio + '/',
  logo: SITE.dominio + '/assets/logo.webp',
  description: 'Agência de marketing para advogados e escritórios de advocacia.',
  // Sem endereço, avaliação ou nota agregada: nenhum dado desses foi
  // confirmado nos arquivos inspecionados. Ver PENDENCIAS.md.
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mega ADS',
  url: SITE.dominio + '/',
  inLanguage: 'pt-BR',
};

export function breadcrumbLd(itens) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: it.url ? SITE.dominio + it.url : undefined,
    })),
  };
}

export function faqLd(itens) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: itens.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.aTexto ?? it.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function renderPage({
  url,
  title,
  description,
  h1OgImage = '/assets/og-image.jpg',
  robots = 'index, follow',
  structuredData = [],
  body,
  bodyClass = '',
}) {
  const canonical = SITE.dominio + url;
  const ld = [organizationLd, websiteLd, ...structuredData]
    .map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${robots}">
<link rel="icon" href="/assets/favicon.png">
<link rel="stylesheet" href="/assets/site.css">
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/montserrat-var.woff2" crossorigin>
<style>@font-face{font-family:'Montserrat';font-style:normal;font-weight:400 900;font-display:swap;src:url('/assets/fonts/montserrat-var.woff2') format('woff2')}</style>
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.dominio}${h1OgImage}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Mega ADS">
<meta name="twitter:card" content="summary_large_image">
${ld}
</head>
<body class="${bodyClass}">
${header(url)}
<main id="conteudo">
${body}
</main>
${footer()}
<script src="/assets/site.js" defer></script>
<script async src="https://app.johnyweb.com/t.js" data-site="sit_038a2d476f83"></script>
</body>
</html>`;
}
