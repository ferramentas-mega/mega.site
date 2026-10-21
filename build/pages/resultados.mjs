import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, ctaBand } from '../partials.mjs';

const url = '/resultados/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Resultados' }];

export function page() {
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Resultados</span>
  <h1>Como medimos e acompanhamos resultado</h1>
  <p class="lede">Esta página descreve como a Mega ADS acompanha e reporta resultado para os escritórios atendidos. Projetos específicos, com nome do escritório e números autorizados para publicação, entram aqui assim que cada cliente aprovar a divulgação — ver nota ao final.</p>
</section>

<section class="section container">
  <div class="section-head"><span class="kicker">Metodologia</span><h2>O que entra no acompanhamento</h2><p>O mesmo CRM e o mesmo conjunto de indicadores valem para todo escritório atendido, para que a leitura do resultado não dependa de interpretação.</p></div>
  <div class="grid grid-3">
    <div class="card"><h3>CRM no domínio do escritório</h3><p>O funil é configurado com as etapas da rotina comercial de um escritório de advocacia — do primeiro contato até o contrato assinado.</p></div>
    <div class="card"><h3>Origem de cada lead</h3><p>Cada contato é rastreado desde o clique no anúncio ou no botão do site até a etapa em que está no funil comercial.</p></div>
    <div class="card"><h3>Leitura mensal</h3><p>Apresentação do resultado do período (leads, contratos, custo por contrato) e as decisões recomendadas para o mês seguinte.</p></div>
  </div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">O que reportamos</span><h2>Os números que importam — não os que impressionam</h2><p>O relatório prioriza três indicadores, porque são os que de fato dizem se a operação está funcionando:</p></div>
  <table class="simple rolagem-tabela">
    <thead><tr><th>Indicador</th><th>O que mede</th></tr></thead>
    <tbody>
      <tr><td>Leads gerados</td><td>Contatos recebidos pelos canais de anúncio no período.</td></tr>
      <tr><td>Contratos assinados</td><td>Dos leads recebidos, quantos viraram contrato de honorários assinado.</td></tr>
      <tr><td>Custo por contrato</td><td>Investimento total em mídia dividido pelos contratos assinados no período — o indicador que de fato mostra se o investimento compensa.</td></tr>
    </tbody>
  </table>
  <p style="color:var(--text-3);font-size:13px">Clique no WhatsApp e abertura de formulário são medidos à parte, como indicadores de intenção — não entram na contagem de contratos. Essa distinção está detalhada na <a href="/politica-de-privacidade/" style="color:var(--blue-2)">política de privacidade</a> e nas páginas de cada serviço.</p>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Projetos</span><h2>Projetos publicados</h2></div>
  <div class="card">
    <h3>Nenhum projeto com autorização de divulgação publicada nesta versão</h3>
    <p>Para publicar um case aqui — contexto, problema, trabalho realizado e evidência do resultado — a Mega ADS precisa da autorização explícita do escritório envolvido para usar seu nome, segmento e números. Assim que houver um projeto autorizado, ele entra nesta seção com o período e os limites dos dados apresentados.</p>
  </div>
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: 'Quer entender o que é possível para o seu escritório?', texto: 'Um especialista explica como a metodologia acima se aplicaria ao seu caso.', id: 'cta-resultados-final', pos: 'Resultados' })}
</section>`;

  return renderPage({
    url,
    title: 'Resultados — como a Mega ADS mede e reporta performance',
    description: 'Veja a metodologia de acompanhamento de resultado da Mega ADS: CRM, origem de leads, custo por contrato e leitura mensal.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
