import { pageArtigo } from '../layouts.mjs';

export function page() {
  return pageArtigo({
    url: '/conteudos/ia-pre-atendimento-escritorio-advocacia/',
    title: 'O que automatizar no pré-atendimento e quando encaminhar para uma pessoa',
    categoria: 'IA e atendimento',
    h1: 'O que automatizar no pré-atendimento e quando encaminhar para uma pessoa',
    metaTitle: 'IA no pré-atendimento jurídico: o que automatizar | Mega ADS',
    metaDescription: 'Onde a automação ajuda no pré-atendimento de um escritório de advocacia, e onde ela precisa parar e passar a conversa para uma pessoa.',
    dataIso: '2026-10-21',
    dataLegivel: '21 de outubro de 2026',
    corpo: `
<p><strong>Resposta direta:</strong> automatize a resposta imediata e a coleta de informações básicas (tipo de caso, urgência, dados de contato). Nunca automatize o aconselhamento jurídico em si — isso é trabalho do advogado, não da IA.</p>

<h2>O que faz sentido automatizar</h2>
<ul>
<li><strong>Primeira resposta.</strong> Confirmar que a mensagem foi recebida, a qualquer hora, é a parte mais fácil de automatizar e a que mais evita perder lead por demora.</li>
<li><strong>Perguntas de triagem.</strong> Área do caso, urgência, informações básicas de contato — um roteiro fixo, definido previamente com o escritório.</li>
<li><strong>Organização da fila.</strong> Priorizar quem está em situação mais urgente antes de quem só está pesquisando.</li>
</ul>

<h2>O que não deve ser automatizado</h2>
<ul>
<li><strong>Qualquer orientação sobre o mérito do caso.</strong> "Você tem direito a X" ou "seu caso é forte" são afirmações jurídicas — nunca devem vir de uma automação.</li>
<li><strong>Negociação de honorários.</strong> Valores e condições são decisão do escritório, discutida por uma pessoa.</li>
<li><strong>Casos fora do roteiro previsto.</strong> Quando a conversa sai do que foi mapeado, o caminho correto é transferir para um humano, não tentar improvisar uma resposta.</li>
</ul>

<h2>Como fica a transição para o humano</h2>
<p>O ponto de transferência costuma ser definido por dois gatilhos: a triagem terminou (a IA já coletou o essencial) ou a conversa saiu do roteiro previsto. Em qualquer um dos dois casos, a conversa — com o histórico completo — passa para uma pessoa, que é quem efetivamente qualifica a viabilidade do caso e conduz a negociação.</p>

<h2>Transparência com quem está do outro lado</h2>
<p>Deixar claro que o primeiro contato é automatizado, em vez de disfarçar a IA como se fosse uma pessoa, evita desconfiança quando a pessoa percebe — e evita também a expectativa errada de estar recebendo aconselhamento jurídico de verdade naquele momento.</p>`,
    faq: [
      { q: 'A automação substitui a equipe comercial?', a: 'Não — ela cuida da primeira resposta e da triagem inicial. A qualificação mais a fundo e a condução até o contrato continuam sendo trabalho de pessoas, seja da equipe do escritório ou da estruturação comercial contratada.' },
      { q: 'É seguro, do ponto de vista ético, usar IA no atendimento de um escritório?', a: 'Desde que a IA não dê orientação jurídica e a transparência sobre a automação seja mantida, a triagem automatizada é uma ferramenta operacional, não uma substituição do trabalho do advogado.' },
    ],
    relacionados: [
      { url: '/servicos/ia-para-atendimento-juridico/', titulo: 'IA para atendimento jurídico' },
      { url: '/conteudos/atendimento-whatsapp-escritorio-advocacia/', titulo: 'Como organizar o atendimento pelo WhatsApp' },
    ],
  });
}
