import { renderPage } from '../shell.mjs';
import { ctaWhatsapp } from '../partials.mjs';

export function page404() {
  const body = `
<section class="page-hero container" style="text-align:center">
  <span class="kicker">Erro 404</span>
  <h1>Essa página não existe</h1>
  <p class="lede" style="margin:0 auto">O endereço pode ter mudado ou ter um erro de digitação. Veja alguns caminhos abaixo.</p>
  <div class="actions" style="justify-content:center">
    <a class="btn btn-primary" href="/">Voltar para a home</a>
    <a class="btn btn-secondary" href="/servicos/">Ver soluções</a>
    ${ctaWhatsapp({ id: 'cta-404', pos: '404', texto: 'Olá! Cheguei numa página que não encontrei no site de vocês.' })}
  </div>
</section>`;
  return renderPage({
    url: '/404.html',
    title: 'Página não encontrada — Mega ADS',
    description: 'Esta página não existe ou foi movida.',
    robots: 'noindex, follow',
    body,
  });
}
