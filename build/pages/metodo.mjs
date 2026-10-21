import { renderPage, breadcrumbLd, faqLd } from '../shell.mjs';
import { breadcrumbs, ctaBand, faqList } from '../partials.mjs';

const url = '/metodo/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'A Mega ADS', url: '/sobre/' }, { label: 'Método' }];

const passos = [
  { titulo: '1. Diagnóstico', texto: 'Mapeamos a área de atuação do escritório, a região de interesse, o ticket médio e a capacidade de atendimento atual. É esse levantamento que define se o modelo de implementação ou o modelo de mensalidade faz mais sentido para o momento do escritório.' },
  { titulo: '2. Definição de escopo e objetivos', texto: 'Com o diagnóstico em mãos, alinhamos o que entra no contrato: quais canais (Google Ads, Meta Ads, ambos), se há site/landing page a construir, se o atendimento comercial fica com a Mega ADS ou com o escritório, e qual meta de contratos faz sentido para o investimento previsto.' },
  { titulo: '3. Acessos e preparação', texto: 'Liberação de acesso às contas de anúncio (ou criação, quando o escritório ainda não tem), ao WhatsApp Business usado na captação e, quando aplicável, ao domínio para publicar site ou landing page.' },
  { titulo: '4. Implementação', texto: 'Estruturação das campanhas, criativos, página de conversão e, quando contratado, o roteiro de atendimento e/ou a triagem por IA. Esta etapa tem prazo variável conforme o escopo — não divulgamos um prazo fixo porque ele depende de quantos canais e páginas entram no projeto.' },
  { titulo: '5. Operação', texto: 'Campanhas no ar, leads chegando, atendimento (humano e/ou IA, conforme contratado) qualificando e conduzindo até a assinatura. O escritório acompanha pelo relatório/CRM combinado no escopo.' },
  { titulo: '6. Análise e melhoria', texto: 'Revisão periódica do que está performando — criativos, páginas, scripts de atendimento — e ajuste do que não está trazendo contrato. O marketing jurídico não para no ar ligado uma vez; ele é revisado continuamente.' },
];

const faq = [
  { q: 'O que é responsabilidade da Mega ADS e o que é do escritório?', a: 'A Mega ADS assume tráfego, criativos, páginas e — conforme o modelo contratado — o atendimento comercial inicial até a assinatura do contrato de honorários. O trabalho jurídico em si (análise do caso, atuação processual, relação com o cliente após a assinatura) é sempre do escritório. Isso fica explícito no escopo definido na etapa 2.' },
  { q: 'Quanto tempo leva para sair do diagnóstico até a primeira campanha no ar?', a: 'Varia conforme o escopo contratado (quantos canais, se há site a construir) e a velocidade de liberação de acessos pelo escritório. Não publicamos um prazo fixo porque ele depende dessas duas variáveis — isso é alinhado na etapa 2.' },
  { q: 'Existem modelos comerciais diferentes?', a: 'Sim. Há um modelo de implementação com pagamento por contrato fechado, um modelo de mensalidade fixa (comercial + marketing, sem taxa por contrato) e um modelo de mensalidade voltado a quem já tem equipe comercial e quer a captação com apoio de IA no atendimento. O modelo mais adequado é definido na etapa 1, conforme a estrutura que o escritório já tem.' },
];

export function page() {
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">A Mega ADS</span>
  <h1>Como a Mega ADS estrutura a captação do seu escritório</h1>
  <p class="lede">Seis etapas, da mesma forma para todo escritório que contrata — o que muda é o escopo (quais canais, se há atendimento comercial incluso), não o processo.</p>
</section>

<section class="section container">
  <div class="step-list">${passos.map((p) => `<div class="step"><h3>${p.titulo}</h3><p>${p.texto}</p></div>`).join('')}</div>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Modelos comerciais</span><h2>O modelo é escolhido junto com você</h2><p>Os valores abaixo são apresentados para dar transparência ao processo de decisão. Condições completas, reajustes e cláusulas de cada modelo são formalizados em contrato na conversa com um especialista.</p></div>
  <div class="grid grid-3">
    <div class="card">
      <h3>Implementação + pagamento por contrato</h3>
      <p>Implementação única, e depois o investimento acompanha o resultado: um valor fixo por contrato efetivamente fechado.</p>
    </div>
    <div class="card">
      <h3>Mensalidade comercial + marketing</h3>
      <p>Operação completa de marketing e atendimento comercial por mensalidade fixa, sem taxa por contrato. Opções anual, semestral ou trimestral, sem fidelidade.</p>
    </div>
    <div class="card">
      <h3>Mensalidade marketing + IA</h3>
      <p>Para escritórios que já têm equipe comercial própria e querem a máquina de captação com triagem por IA no atendimento inicial.</p>
    </div>
  </div>
  <p style="color:var(--text-3);font-size:13px;margin-top:18px">O investimento em mídia (Google Ads e Meta Ads) é pago diretamente na plataforma de anúncios e não é receita da Mega ADS.</p>
</section>

<section class="section container" style="padding-top:0">
  <div class="section-head"><span class="kicker">Dúvidas</span><h2>Perguntas sobre o método</h2></div>
  ${faqList(faq)}
</section>

<section class="section container" style="padding-top:0">
  ${ctaBand({ titulo: 'Quer passar pelo diagnóstico?', texto: 'A primeira conversa é para entender se e como a Mega ADS se encaixa no momento do seu escritório.', id: 'cta-metodo-final', pos: 'Método' })}
</section>`;

  return renderPage({
    url,
    title: 'Método Mega ADS — como funciona a captação de clientes',
    description: 'As seis etapas do método da Mega ADS: diagnóstico, escopo, acessos, implementação, operação e melhoria contínua. Veja os modelos comerciais.',
    structuredData: [breadcrumbLd(crumbs), faqLd(faq)],
    body,
  });
}
