import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, ctaBand, esc } from '../partials.mjs';
import { PAGINAS } from '../nav.mjs';

const url = '/especialidades/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Para quem' }];

const RESUMOS = {
  '/especialidades/marketing-para-advogados-trabalhistas/': 'Comunicação voltada a quem tem prazo prescricional correndo.',
  '/especialidades/marketing-para-advogados-previdenciarios/': 'Linguagem acessível para quem não sabe que tem direito a revisão.',
  '/especialidades/marketing-para-advogados-de-familia/': 'Discrição e seriedade para um tema sensível.',
  '/especialidades/marketing-para-advogados-criminalistas/': 'Resposta imediata para situações de urgência real.',
};

export function page() {
  const itens = PAGINAS.filter((p) => p.tipo === 'especialidade' && p.status === 'publicada');
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Para quem</span>
  <h1>Marketing jurídico para cada área de atuação</h1>
  <p class="lede">Cada especialidade tem um perfil de demanda, um nível de urgência e uma linguagem diferentes. Veja como isso muda a estratégia de captação.</p>
</section>

<section class="section container" style="padding-top:0">
  <div class="content-cards">
    ${itens.map((p) => `<a class="content-card" href="${p.url}"><div class="body"><span class="cat">Especialidade</span><h3>${esc(p.titulo)}</h3><p>${esc(RESUMOS[p.url] || '')}</p></div></a>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="card" style="max-width:720px">
    <h3>Sua área não está na lista?</h3>
    <p>As páginas acima cobrem as áreas com volume de demanda mais consistente por anúncio. O método se aplica a outras áreas também — fale com um especialista para entender como.</p>
  </div>
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: 'Qual é a área do seu escritório?', texto: 'Conte a área de atuação e um especialista explica como a captação funcionaria para o seu caso.', id: 'cta-especialidades-final', pos: 'Para quem' })}
</section>`;

  return renderPage({
    url,
    title: 'Para quem — marketing por especialidade jurídica | Mega ADS',
    description: 'Veja como a Mega ADS adapta a captação de clientes para trabalhista, previdenciário, família e criminal.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
