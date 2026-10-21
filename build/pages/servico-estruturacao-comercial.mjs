import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/estruturacao-comercial-para-advogados/',
    title: 'Estruturação comercial',
    tituloMenu: 'Estruturação comercial',
    h1: 'Estruturação comercial para advogados',
    metaTitle: 'Estruturação comercial para escritórios de advocacia | Mega ADS',
    metaDescription: 'Organização do atendimento: qualificação de leads, condução até a assinatura e indicadores claros de cada etapa do funil.',
    lede: 'A diferença entre receber leads e receber clientes está em quem atende. Esta solução organiza o atendimento, a qualificação e a condução até o contrato de honorários assinado.',
    paraQuem: {
      titulo: 'Para quem já gera leads mas perde no atendimento',
      texto: 'Faz sentido para escritórios que já recebem contatos (por anúncio, indicação ou site) mas não têm um processo definido de abordagem, qualificação e fechamento — e por isso perdem lead qualificado por demora ou falta de condução.',
    },
    problema: {
      titulo: 'Lead esfria em minutos',
      texto: 'Quem pesquisa um advogado normalmente pesquisa mais de uma opção ao mesmo tempo. Um contato abordado horas depois já conversou com outro escritório. A velocidade e a qualidade da primeira resposta decidem boa parte do resultado — antes mesmo da qualidade jurídica do trabalho.',
    },
    incluido: [
      { titulo: 'Atendimento em minutos', texto: 'Cada lead é abordado logo após o clique, quando o interesse ainda está quente.' },
      { titulo: 'Qualificação e triagem', texto: 'Separação entre quem tem caso viável e quem só está pesquisando, agendando apenas o que vale o tempo do escritório.' },
      { titulo: 'Condução até a assinatura', texto: 'Negociação conduzida até o envio do contrato de honorários e da procuração.' },
    ],
    comoFunciona: [
      { titulo: 'Definição do roteiro', texto: 'Perguntas de qualificação específicas da área de atuação do escritório.' },
      { titulo: 'Atendimento', texto: 'Primeira resposta rápida, seguida de qualificação do caso.' },
      { titulo: 'Condução e fechamento', texto: 'Acompanhamento até a assinatura do contrato de honorários.' },
    ],
    responsabilidadeCliente: 'O trabalho jurídico em si — análise do caso, atuação processual e relação com o cliente após a assinatura — permanece sempre com o escritório. A estruturação comercial cuida do que vem antes: atendimento, qualificação e fechamento.',
    exemplo: null,
    faq: [
      { q: 'Quem assina o contrato de honorários — a Mega ADS ou o escritório?', a: 'O contrato é sempre entre o cliente e o escritório de advocacia. A Mega ADS conduz a negociação e o envio da documentação, mas a relação jurídica e a responsabilidade profissional são do escritório.' },
      { q: 'A equipe que atende é da Mega ADS ou do meu escritório?', a: 'Varia conforme o modelo comercial contratado — mensalidade comercial + marketing inclui o atendimento pela Mega ADS; outros modelos deixam o atendimento com a equipe do próprio escritório. Isso é definido na etapa de escopo do método.' },
    ],
    relacionados: [
      { url: '/servicos/ia-para-atendimento-juridico/', titulo: 'IA para atendimento jurídico', texto: 'Triagem automática antes do atendimento humano.' },
      { url: '/metodo/', titulo: 'Método', texto: 'Onde a estruturação comercial entra no processo completo.' },
      { url: '/conteudos/atendimento-whatsapp-escritorio-advocacia/', titulo: 'Como organizar o atendimento pelo WhatsApp', texto: 'Artigo relacionado.' },
    ],
  });
}
