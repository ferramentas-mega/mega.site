import { pageEspecialidade } from '../layouts.mjs';

export function page() {
  return pageEspecialidade({
    url: '/especialidades/marketing-para-advogados-criminalistas/',
    title: 'Marketing para advogados criminalistas',
    area: 'criminalista',
    h1: 'Marketing para advogados criminalistas',
    metaTitle: 'Marketing para advogados criminalistas | Mega ADS',
    metaDescription: 'Captação de clientes para escritórios de direito criminal: situações de urgência real, onde resposta rápida pesa mais do que em qualquer outra área.',
    lede: 'Em direito criminal, a urgência costuma ser literal: flagrante, prisão, audiência marcada. Nenhuma outra área exige resposta tão rápida ao primeiro contato.',
    contexto: 'Diferente de áreas onde o contato pode esperar algumas horas, uma ligação ou mensagem sobre prisão em flagrante ou audiência de custódia tem janela de horas, às vezes minutos. A estrutura de atendimento precisa estar pronta para isso a qualquer hora.',
    desafios: [
      { titulo: 'Disponibilidade fora do horário comercial', texto: 'Prisões não respeitam horário comercial. Um escritório criminalista que só responde em horário comercial perde justamente os casos mais urgentes — e mais relevantes financeiramente.' },
      { titulo: 'Sobriedade mesmo em situação de urgência', texto: 'A urgência real do cliente não é motivo para um anúncio alarmista ou sensacionalista — a publicidade continua precisando ser informativa e sóbria.' },
    ],
    demanda: 'As buscas e contatos mais comuns envolvem prisão em flagrante, audiência de custódia, inquérito policial e defesa em processo já em andamento. Boa parte chega por indicação de familiares buscando ajuda em nome de outra pessoa.',
    organizacao: 'Por isso esta é a área onde a triagem por IA mais se justifica: garantir resposta imediata a qualquer hora, coletando o essencial (tipo de situação, se há prazo de audiência) antes de transferir para o advogado de plantão ou disponível.',
    solucoes: [
      { url: '/servicos/ia-para-atendimento-juridico/', titulo: 'IA para atendimento', texto: 'Resposta imediata fora do horário comercial, quando a urgência é maior.' },
      { url: '/servicos/estruturacao-comercial-para-advogados/', titulo: 'Estruturação comercial', texto: 'Condução rápida até a assinatura, dado o tempo curto de decisão.' },
      { url: '/servicos/google-ads-para-advogados/', titulo: 'Google Ads', texto: 'Para captar busca com urgência explícita.' },
    ],
    faq: [
      { q: 'O atendimento funciona de madrugada ou fim de semana?', a: 'A triagem por IA responde imediatamente a qualquer hora; a transferência para um advogado humano depende da escala de plantão combinada com o escritório no escopo do contrato.' },
      { q: 'Posso anunciar "defesa em flagrante" sem prometer soltura?', a: 'Sim — informar o tipo de atuação é diferente de prometer um resultado específico do processo, o que a publicidade jurídica não permite.' },
    ],
  });
}
