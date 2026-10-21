import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs } from '../partials.mjs';

const url = '/politica-de-privacidade/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Política de privacidade' }];

export function page() {
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Institucional</span>
  <h1>Política de privacidade</h1>
  <p class="lede">Esta página descreve, de forma direta, quais dados este site coleta, para que servem e para onde vão — com base no que está efetivamente implementado no site hoje.</p>
</section>

<section class="section container" style="padding-top:0">
  <article class="post" style="max-width:760px;margin:0">
    <div class="draft-banner" role="note" style="margin-bottom:32px">
      Esta é uma minuta técnica baseada nos fluxos de dados identificados no código do site. Ela ainda não substitui uma revisão jurídica e precisa da confirmação de dados institucionais (razão social, CNPJ, endereço, contato do responsável pelo tratamento) antes de valer como documento final. Ver lista de pendências ao final.
    </div>

    <h2>1. O que este site coleta</h2>
    <p>Três fluxos distintos de dados acontecem neste site, e vale a pena separá-los porque têm destinos diferentes:</p>

    <h3>1.1 Navegação (analytics próprio)</h3>
    <p>Ao visitar o site, um script de medição registra eventos como visualização de página e cliques em botões (por exemplo, no WhatsApp). Esse script usa um identificador de navegador rotativo — não é um dado que, sozinho, identifica uma pessoa. <strong>Nome, e-mail, telefone ou conteúdo de formulário não são enviados a esse sistema de analytics.</strong> Você pode impedir essa coleta usando bloqueadores de rastreamento no navegador; o envio de formulários de contato continua funcionando normalmente mesmo assim.</p>

    <h3>1.2 Formulário de contato</h3>
    <p>Quando você preenche um formulário de contato (nome, e-mail, WhatsApp e, conforme o formulário, nome do escritório e serviço de interesse), esses dados são enviados a dois destinos: uma planilha e notificação por e-mail da equipe Mega ADS (via Google Apps Script/Google Sheets), e o painel interno de atendimento de leads da Mega ADS. Esses dados são usados exclusivamente para que um especialista entre em contato com você sobre os serviços da Mega ADS.</p>

    <h3>1.3 WhatsApp</h3>
    <p>Os links e botões de WhatsApp abrem uma conversa direta pelo aplicativo ou site do WhatsApp. Essa conversa é regida pela política de privacidade do WhatsApp/Meta, fora do controle deste site.</p>

    <h2>2. Com quem os dados são compartilhados</h2>
    <p>Os dados de formulário são compartilhados com os seguintes fornecedores, estritamente para operar o que está descrito acima:</p>
    <ul>
      <li><strong>Google (Apps Script / Google Sheets / Gmail):</strong> recebe os dados do formulário para registro em planilha e notificação por e-mail à equipe.</li>
      <li><strong>Painel interno da Mega ADS:</strong> sistema próprio onde a equipe comercial acompanha leads recebidos pelo site.</li>
    </ul>
    <p>Os dados não são vendidos nem compartilhados com terceiros para fins de publicidade.</p>

    <h2>3. Cookies e armazenamento local</h2>
    <p>O site usa armazenamento local do navegador (não necessariamente cookies tradicionais) para manter o identificador de visitante do analytics mencionado em 1.1. Não há, até a publicação desta página, pixels de redes sociais de terceiros instalados além do mencionado aqui.</p>

    <h2>4. Seus direitos</h2>
    <p>Você pode solicitar a confirmação, correção ou exclusão dos dados que enviou por formulário entrando em contato pelo canal informado na página de <a href="/contato/" style="color:var(--blue-2)">Contato</a>. O prazo de resposta e o canal formal de atendimento a esse tipo de solicitação estão sujeitos a confirmação — ver pendências abaixo.</p>

    <h2>5. Informações ainda pendentes de confirmação</h2>
    <ul>
      <li>Razão social, CNPJ e endereço do responsável pelo tratamento dos dados (controlador).</li>
      <li>Canal e prazo formal para atendimento a solicitações de titulares de dados (acesso, correção, exclusão).</li>
      <li>Período de retenção dos dados de formulário na planilha/Apps Script e no painel.</li>
      <li>Confirmação se há, ou haverá, uso de cookies de terceiros para publicidade (remarketing) — não identificado no código nesta data.</li>
    </ul>
    <p style="color:var(--text-3);font-size:13px">Última verificação do conteúdo técnico desta página: data da geração deste site. Revisar sempre que um novo fornecedor de dados for integrado.</p>
  </article>
</section>`;

  return renderPage({
    url,
    title: 'Política de privacidade — Mega ADS',
    description: 'Como a Mega ADS coleta, usa e compartilha dados de navegação e de formulários neste site.',
    robots: 'index, follow',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
