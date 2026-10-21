import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, ctaBand, ctaWhatsapp, esc } from '../partials.mjs';

const url = '/sobre/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'A Mega ADS', url: '/sobre/' }, { label: 'Sobre' }];

export function page() {
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">A Mega ADS</span>
  <h1>Uma agência dedicada só a marketing para advogados</h1>
  <p class="lede">Não atendemos qualquer segmento. Toda a estrutura — anúncios, páginas, atendimento e acompanhamento — foi construída em torno de uma única pergunta: como um escritório de advocacia capta clientes de forma previsível, dentro do que a OAB permite.</p>
</section>

<section class="section container">
  <div class="grid grid-2">
    <div>
      <div class="section-head" style="margin-bottom:18px"><span class="kicker">Quem somos</span><h2>Nascemos dentro do nicho jurídico</h2></div>
      <p style="color:var(--text-2);font-size:16.5px;line-height:1.7">A Mega ADS começou em 2020 atendendo escritórios de advocacia e nunca mudou de segmento. Enquanto agências generalistas atendem qualquer tipo de negócio, aqui cada processo — da campanha ao roteiro de atendimento — foi desenhado especificamente para a dinâmica de captação de um escritório: ciclo de decisão do cliente, linguagem permitida pelo Código de Ética e o que realmente faz um lead virar contrato assinado.</p>
    </div>
    <div>
      <div class="section-head" style="margin-bottom:18px"><span class="kicker">Especialização</span><h2>O que essa especialização muda na prática</h2></div>
      <p style="color:var(--text-2);font-size:16.5px;line-height:1.7">Campanhas, páginas e roteiros de atendimento validados em outros escritórios da mesma área de atuação não precisam ser descobertos do zero a cada novo cliente. Isso reduz o tempo até o primeiro resultado e evita gastar a verba de mídia do escritório testando hipóteses que o mercado jurídico já respondeu.</p>
    </div>
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Linha do tempo</span><h2>De onde viemos</h2><p>Os marcos abaixo refletem a trajetória registrada internamente. Datas e eventos específicos de cada ano estão sujeitos a confirmação detalhada — ver nota de verificação ao final desta página.</p></div>
  <div class="step-list">
    <div class="step"><h3>2020 — início</h3><p>Primeira estrutura dedicada a marketing jurídico.</p></div>
    <div class="step"><h3>2021 — primeiros clientes</h3><p>Formação da equipe inicial a partir dos primeiros escritórios atendidos.</p></div>
    <div class="step"><h3>2022–2023 — consolidação</h3><p>Estruturação de processo repetível entre tráfego, páginas e atendimento comercial.</p></div>
    <div class="step"><h3>2024–2026 — operação atual</h3><p>Equipe dedicada por função (tráfego, atendimento, tecnologia) e a estrutura descrita no <a href="/metodo/" style="color:var(--blue-2)">Método</a>.</p></div>
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Equipe e bastidores</span><h2>Quem toca a operação</h2><p>A Mega ADS é operada por um time dedicado por função — tráfego pago, atendimento comercial e tecnologia. Nomes, cargos e formação de cada pessoa aparecerão aqui assim que a empresa confirmar o conteúdo a publicar (ver nota ao final da página).</p></div>
  <div class="grid grid-4">
    ${['01', '02', '03', '04'].map((n) => `<figure style="margin:0;border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);background:var(--card)"><img src="/assets/equipe/${n}.webp" alt="" loading="lazy" width="362" height="482" style="aspect-ratio:3/4;object-fit:cover;width:100%"></figure>`).join('')}
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Forma de trabalho</span><h2>O que esperar de quem contrata a Mega ADS</h2></div>
  <div class="grid grid-3">
    <div class="card"><h3>Especialização, não generalização</h3><p>Todo o time trabalha só com escritórios de advocacia — não há divisão de atenção com outros segmentos.</p></div>
    <div class="card"><h3>Processo documentado</h3><p>Diagnóstico, implementação e operação seguem etapas definidas — ver <a href="/metodo/" style="color:var(--blue-2)">o método completo</a>.</p></div>
    <div class="card"><h3>Responsabilidade dividida</h3><p>O que é responsabilidade da Mega ADS e o que depende do escritório fica explícito desde o diagnóstico — sem letras miúdas.</p></div>
  </div>
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: 'Quer conhecer a operação por dentro?', texto: 'Fale com um especialista e entenda como funcionaria para o seu escritório.', id: 'cta-sobre-final', pos: 'Sobre' })}
</section>

<section class="container" style="padding-bottom:40px">
  <p style="font-size:12.5px;color:var(--text-3);max-width:720px">Nota de verificação: nomes, cargos e formação da equipe, além do detalhamento de marcos específicos da linha do tempo, dependem de confirmação institucional e não foram publicados nesta versão. Ver <code>PENDENCIAS.md</code> no projeto.</p>
</section>`;

  return renderPage({
    url,
    title: 'Sobre a Mega ADS — agência de marketing para advogados',
    description: 'Conheça a Mega ADS: agência especializada em marketing jurídico, dedicada exclusivamente a escritórios de advocacia desde 2020.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
