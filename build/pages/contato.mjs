import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs, ctaWhatsapp, esc } from '../partials.mjs';

const url = '/contato/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'A Mega ADS', url: '/sobre/' }, { label: 'Contato' }];

const campo = 'width:100%;box-sizing:border-box;background:hsl(222,47%,10%);border:1px solid hsl(217,30%,20%);border-radius:12px;padding:14px 16px;color:#fff;font-size:15px;font-family:inherit';
const rotulo = 'display:block;font-size:13.5px;font-weight:700;color:#fff;margin-bottom:7px';

export function page() {
  const body = `
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">A Mega ADS</span>
  <h1>Fale com um especialista</h1>
  <p class="lede">Preencha os dados abaixo ou chame diretamente no WhatsApp. Um especialista responde para entender o momento do seu escritório antes de qualquer proposta.</p>
</section>

<section class="section container" style="padding-top:0">
  <div class="grid grid-2" style="align-items:start">
    <form id="form-contato" novalidate style="display:flex;flex-direction:column;gap:16px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:28px">
      <div><label style="${rotulo}" for="f-nome">Nome *</label><input style="${campo}" id="f-nome" name="nome" type="text" required autocomplete="name"></div>
      <div><label style="${rotulo}" for="f-email">E-mail</label><input style="${campo}" id="f-email" name="email" type="email" autocomplete="email"></div>
      <div><label style="${rotulo}" for="f-whats">WhatsApp *</label><input style="${campo}" id="f-whats" name="whatsapp" type="tel" required autocomplete="tel" placeholder="(DDD) 9 9999-9999"></div>
      <div><label style="${rotulo}" for="f-escritorio">Nome do escritório</label><input style="${campo}" id="f-escritorio" name="escritorio" type="text"></div>
      <div><label style="${rotulo}" for="f-servico">Serviço de interesse</label>
        <select style="${campo}" id="f-servico" name="servico">
          <option value="">Prefiro contar na conversa</option>
          <option value="Tráfego pago">Tráfego pago (Google/Meta Ads)</option>
          <option value="Site ou landing page">Site ou landing page</option>
          <option value="Estruturação comercial">Estruturação do atendimento comercial</option>
          <option value="IA para atendimento">IA para atendimento</option>
          <option value="Ainda não sei">Ainda não sei — quero diagnóstico</option>
        </select>
      </div>
      <div><label style="${rotulo}" for="f-area">Área de atuação <span style="font-weight:500;color:var(--text-3)">(opcional)</span></label><input style="${campo}" id="f-area" name="area" type="text" placeholder="Ex.: trabalhista, previdenciário, família…"></div>
      <div><label style="${rotulo}" for="f-ja-anuncia">Você já anuncia seu escritório? <span style="font-weight:500;color:var(--text-3)">(opcional)</span></label>
        <select style="${campo}" id="f-ja-anuncia" name="ja_anuncia">
          <option value="">Prefiro não responder agora</option>
          <option value="Sim">Sim</option>
          <option value="Ainda não">Ainda não</option>
          <option value="Pretendo começar">Pretendo começar</option>
        </select>
      </div>
      <input type="hidden" name="projeto_referencia" id="f-projeto-referencia">
      <input type="hidden" name="pagina_origem" id="f-pagina-origem">
      <p id="form-contato-retorno" role="status" style="margin:0;font-size:13.5px;min-height:18px"></p>
      <button class="btn btn-primary" type="submit" style="width:100%">Enviar</button>
      <p style="margin:0;font-size:12px;color:var(--text-3)">Ao enviar, você concorda com o uso dos seus dados conforme a <a href="/politica-de-privacidade/" style="color:var(--blue-2)">política de privacidade</a>.</p>
    </form>

    <div style="display:flex;flex-direction:column;gap:20px">
      <div class="card">
        <h3>Prefere o WhatsApp?</h3>
        <p style="margin-bottom:18px">Fale direto com a equipe, sem preencher formulário.</p>
        ${ctaWhatsapp({ id: 'cta-contato-whatsapp', pos: 'Contato', label: 'Chamar no WhatsApp', texto: 'Olá! Vim pela página de contato e quero falar com um especialista da Mega ADS.' })}
      </div>
      <div class="card">
        <h3>O que esperar depois do envio</h3>
        <p>Um especialista entra em contato pelo WhatsApp informado para entender o momento do escritório. Não há horário de atendimento confirmado para publicar aqui — ver nota de verificação no rodapé desta página.</p>
      </div>
    </div>
  </div>
</section>

<section class="container" style="padding-bottom:40px">
  <p style="font-size:12.5px;color:var(--text-3);max-width:720px">Nota de verificação: endereço físico, horário comercial e telefone fixo não foram confirmados para publicação e por isso não aparecem nesta página. O canal confirmado de contato é o WhatsApp acima e o formulário.</p>
</section>`;

  return renderPage({
    url,
    title: 'Contato — Mega ADS',
    description: 'Fale com um especialista da Mega ADS pelo formulário ou diretamente pelo WhatsApp.',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
