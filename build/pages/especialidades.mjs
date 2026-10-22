import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, ctaBand, esc } from '../partials.mjs';
import { ESPECIALIDADES_PAGINAS } from '../nav.mjs';
import { ESPECIALIDADES, GRUPOS } from '../especialidades-dados.mjs';

const url = '/especialidades/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Para quem' }];

const porSlug = new Map(ESPECIALIDADES.map((e) => [e.slug, e]));
const areas = ESPECIALIDADES_PAGINAS.filter((p) => p.slug);

export function page() {
  const grupos = GRUPOS.map((g) => {
    const itensDoGrupo = areas.filter((p) => p.grupo === g.id);
    const cards = itensDoGrupo.map((p) => {
      const dados = porSlug.get(p.slug);
      return `<a class="content-card" href="${p.url}" data-nome="${esc(p.titulo.toLowerCase())}"><div class="body"><span class="cat">Especialidade</span><h3>${esc(p.titulo)}</h3><p>${esc(dados.lede.split('.')[0])}.</p></div></a>`;
    }).join('');
    return `
<section class="section container" style="padding-top:0" id="${g.id}">
  <div class="section-head"><h2>${esc(g.titulo)}</h2></div>
  <div class="content-cards" data-grupo-cards>${cards}</div>
</section>`;
  }).join('');

  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Para quem</span>
  <h1>Marketing jurídico para cada área de atuação</h1>
  <p class="lede">Cada área tem um perfil de cliente, um nível de urgência e uma linguagem diferentes — isso muda a estratégia de captação. Esta é uma cobertura inicial ampla das áreas que já atendemos, não uma classificação oficial ou exaustiva do direito.</p>
  <div class="actions" style="max-width:480px;width:100%">
    <label for="busca-especialidade" class="visually-hidden">Buscar por área de atuação</label>
    <input type="search" id="busca-especialidade" placeholder="Busque pela área do seu escritório (ex.: trabalhista, tributário...)" style="width:100%;padding:14px 16px;border-radius:999px;border:1px solid var(--border);background:var(--bg-2);color:var(--text);font-size:15px">
  </div>
</section>

<div id="grupos-especialidade">${grupos}</div>

<p id="busca-sem-resultado" class="container" hidden style="color:var(--text-2)">Nenhuma área encontrada com esse termo. Fale com um especialista — o método se aplica a outras áreas também, mesmo sem página própria ainda.</p>

<section class="section container" style="padding-top:0">
  <div class="card" style="max-width:720px">
    <h3>Como funciona o diagnóstico</h3>
    <p>Cada página de área explica como o diagnóstico considera aquele tipo de escritório — não é o mesmo roteiro de /metodo/ repetido 35 vezes, é a parte específica que muda conforme a área: perfil de cliente, canal recomendado e o que já tem experiência comprovada versus o que depende de diagnóstico.</p>
  </div>
  <div class="card" style="max-width:720px;margin-top:16px">
    <h3>Sua área não está na lista?</h3>
    <p>As páginas acima cobrem a cobertura inicial da Mega ADS, não uma lista oficial de todas as áreas do direito. Fale com um especialista para entender como o método se aplicaria ao seu caso.</p>
  </div>
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: 'Qual é a área do seu escritório?', texto: 'Conte a área de atuação e um especialista explica como a captação funcionaria para o seu caso.', id: 'cta-especialidades-final', pos: 'Para quem' })}
</section>

<script>
(function () {
  var busca = document.getElementById('busca-especialidade');
  if (!busca) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-nome]'));
  var secoes = Array.prototype.slice.call(document.querySelectorAll('#grupos-especialidade > section'));
  var vazio = document.getElementById('busca-sem-resultado');
  busca.addEventListener('input', function () {
    var termo = busca.value.trim().toLowerCase();
    var algumaVisivel = false;
    secoes.forEach(function (secao) {
      var algumaNaSecao = false;
      secao.querySelectorAll('[data-nome]').forEach(function (card) {
        var bate = !termo || card.getAttribute('data-nome').indexOf(termo) !== -1;
        card.style.display = bate ? '' : 'none';
        if (bate) algumaNaSecao = true;
      });
      secao.style.display = algumaNaSecao ? '' : 'none';
      if (algumaNaSecao) algumaVisivel = true;
    });
    vazio.hidden = algumaVisivel || !termo;
  });
})();
</script>`;

  return renderPage({
    url,
    title: 'Para quem — marketing por especialidade jurídica | Mega ADS',
    description: 'Veja como a Mega ADS adapta a captação de clientes por área de atuação: trabalhista, previdenciário, família, criminal, tributário, empresarial e mais.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
