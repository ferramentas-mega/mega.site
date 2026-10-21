import { SITE, MENU_PRINCIPAL } from './nav.mjs';

/** Escapa texto para dentro de atributo/conteúdo HTML. */
export function esc(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const waHref = (texto) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;

export function ctaWhatsapp({ texto = 'Olá! Quero falar com um especialista da Mega ADS.', id, pos, label = 'Falar com especialista', classe = 'btn btn-primary' } = {}) {
  return `<a class="${classe}" href="${waHref(texto)}" target="_blank" rel="noopener noreferrer" data-track-id="${esc(id)}" data-track-sub="whatsapp" data-track-pos="${esc(pos)}">${esc(label)}</a>`;
}

export function ctaContato({ id, pos, label = 'Preencher formulário', classe = 'btn btn-secondary' } = {}) {
  return `<a class="${classe}" href="/contato/" data-track-id="${esc(id)}" data-track-sub="form_open" data-track-pos="${esc(pos)}">${esc(label)}</a>`;
}

/** Cabeçalho, com submenus montados a partir de build/nav.mjs — uma fonte só. */
export function header(urlAtual) {
  const itens = MENU_PRINCIPAL.map((item) => {
    const sub = item.submenuFn ? item.submenuFn() : item.submenu;
    const ativo = urlAtual === item.url || (sub && sub.some((s) => s.url === urlAtual));
    const linkSub = sub && sub.length
      ? `<ul class="submenu">${sub.map((s) => `<li><a href="${s.url}"${urlAtual === s.url ? ' aria-current="page"' : ''}>${esc(s.label)}</a></li>`).join('')}</ul>`
      : '';
    return `<li><a class="nav-link" href="${item.url}"${ativo ? ' aria-current="page"' : ''}>${esc(item.label)}${sub ? ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' : ''}</a>${linkSub}</li>`;
  }).join('');

  const mobileItens = MENU_PRINCIPAL.map((item) => {
    const sub = item.submenuFn ? item.submenuFn() : item.submenu;
    if (!sub) return `<li><a href="${item.url}">${esc(item.label)}</a></li>`;
    return `<li><details><summary>${esc(item.label)} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary><ul class="sub-list">${sub.map((s) => `<li><a href="${s.url}">${esc(s.label)}</a></li>`).join('')}</ul></details></li>`;
  }).join('');

  return `
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header class="site-header">
  <div class="container bar">
    <a class="brand" href="/" aria-label="Mega ADS — início">
      <img src="/assets/logo.webp" alt="" width="140" height="31" fetchpriority="high">
      <span class="visually-hidden">Mega ADS</span>
    </a>
    <nav class="main-nav" aria-label="Navegação principal">
      <ul>${itens}</ul>
    </nav>
    <div style="display:flex;align-items:center;gap:10px">
      ${ctaWhatsapp({ texto: 'Olá! Quero falar com um especialista da Mega ADS.', id: 'cta-header', pos: 'Header', classe: 'btn btn-primary btn-sm header-cta' })}
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-mobile" aria-label="Abrir menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>
  <nav class="mobile-nav" id="menu-mobile" aria-label="Navegação (celular)">
    <ul>${mobileItens}</ul>
    <div class="mobile-cta">${ctaWhatsapp({ texto: 'Olá! Quero falar com um especialista da Mega ADS.', id: 'cta-header-mobile', pos: 'Header mobile', classe: 'btn btn-primary' })}</div>
  </nav>
</header>`;
}

export function footer() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h3>Institucional</h3>
        <ul>
          <li><a href="/sobre/">Sobre</a></li>
          <li><a href="/metodo/">Método</a></li>
          <li><a href="/resultados/">Resultados</a></li>
          <li><a href="/contato/">Contato</a></li>
        </ul>
      </div>
      <div>
        <h3>Soluções</h3>
        <ul>
          <li><a href="/servicos/">Ver todas</a></li>
          <li><a href="/servicos/trafego-pago-para-advogados/">Tráfego pago</a></li>
          <li><a href="/servicos/criacao-de-sites-para-advogados/">Sites</a></li>
          <li><a href="/servicos/estruturacao-comercial-para-advogados/">Estruturação comercial</a></li>
        </ul>
      </div>
      <div>
        <h3>Para quem</h3>
        <ul>
          <li><a href="/especialidades/">Ver especialidades</a></li>
          <li><a href="/especialidades/marketing-para-advogados-trabalhistas/">Trabalhista</a></li>
          <li><a href="/especialidades/marketing-para-advogados-previdenciarios/">Previdenciário</a></li>
          <li><a href="/especialidades/marketing-para-advogados-de-familia/">Família</a></li>
        </ul>
      </div>
      <div>
        <h3>Empresa</h3>
        <ul>
          <li><a href="/trabalhe-conosco/">Trabalhe conosco</a></li>
          <li><a href="/politica-de-privacidade/">Política de privacidade</a></li>
          <li><a href="/conteudos/">Conteúdos</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Mega ADS. Todos os direitos reservados.</span>
      <div class="footer-social">
        <!-- Links sociais: ver PENDENCIAS.md — precisam de confirmação das contas oficiais atuais antes de publicar. -->
      </div>
    </div>
  </div>
</footer>`;
}

export function breadcrumbs(itens) {
  // itens: [{label, url?}] — o último não leva url (página atual)
  const lis = itens.map((it, i) => {
    const atual = i === itens.length - 1;
    return atual
      ? `<li aria-current="page">${esc(it.label)}</li>`
      : `<li><a href="${it.url}">${esc(it.label)}</a></li>`;
  }).join('');
  return `<nav class="breadcrumbs container" aria-label="Breadcrumb"><ol>${lis}</ol></nav>`;
}

export function faqList(itens, idPrefix = 'faq') {
  return `<div class="faq-list">${itens.map((it, i) => `
    <details class="faq-item" id="${idPrefix}-${i + 1}">
      <summary>${esc(it.q)}</summary>
      <p class="faq-a">${it.a}</p>
    </details>`).join('')}</div>`;
}

export function ctaBand({ titulo, texto, id, pos }) {
  return `
<div class="cta-band">
  <h2>${esc(titulo)}</h2>
  <p>${esc(texto)}</p>
  <div class="actions" style="justify-content:center;display:flex;flex-wrap:wrap;gap:12px">
    ${ctaWhatsapp({ id: id || 'cta-band', pos: pos || 'CTA', texto: `Olá! Quero falar com um especialista da Mega ADS sobre: ${titulo}` })}
    ${ctaContato({ id: (id || 'cta-band') + '-form', pos: pos || 'CTA' })}
  </div>
</div>`;
}
