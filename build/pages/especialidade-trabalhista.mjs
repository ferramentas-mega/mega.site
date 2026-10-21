import { pageEspecialidade } from '../layouts.mjs';

export function page() {
  return pageEspecialidade({
    url: '/especialidades/marketing-para-advogados-trabalhistas/',
    title: 'Marketing para advogados trabalhistas',
    area: 'trabalhista',
    h1: 'Marketing para advogados trabalhistas',
    metaTitle: 'Marketing para advogados trabalhistas | Mega ADS',
    metaDescription: 'Captação de clientes para escritórios de direito do trabalho: campanhas voltadas a quem tem prazo correndo — demissão, verbas rescisórias, rescisão indireta.',
    lede: 'Quem procura um advogado trabalhista geralmente tem prazo correndo — prescrição de dois anos para reclamar direitos após o fim do contrato. A comunicação precisa refletir essa urgência sem prometer resultado específico.',
    contexto: 'O escritório trabalhista típico atende demandas com prazo definido por lei: a prescrição trabalhista é de até dois anos após o fim do contrato de trabalho para reclamar direitos dos últimos cinco anos. Isso muda a lógica de campanha — quem pesquisa já está, com frequência, dentro de uma janela de decisão curta.',
    desafios: [
      { titulo: 'Comunicar urgência sem prometer resultado', texto: 'Mencionar o prazo prescricional é informativo e ajuda a pessoa a agir; prometer valor de indenização ou resultado do processo não é permitido pela OAB.' },
      { titulo: 'Diferenciar demissão com e sem justa causa', texto: 'A dúvida mais comum de quem chega por anúncio é se tem direito a algo — e isso varia conforme o tipo de desligamento, o que a página de destino precisa esclarecer sem dar aconselhamento jurídico completo ali mesmo.' },
    ],
    demanda: 'As buscas mais comuns giram em torno de demissão (com ou sem justa causa), verbas rescisórias não pagas, rescisão indireta e assédio no ambiente de trabalho. São buscas com intenção alta — a pessoa já identificou um problema concreto.',
    organizacao: 'A triagem prioriza confirmar se o prazo prescricional ainda está aberto e qual o tipo de desligamento, antes de agendar a conversa com o escritório — evitando que o advogado gaste tempo com casos fora do prazo ou fora do perfil atendido.',
    solucoes: [
      { url: '/servicos/google-ads-para-advogados/', titulo: 'Google Ads', texto: 'Captura de busca ativa por "advogado trabalhista" e situações específicas.' },
      { url: '/servicos/landing-pages-para-advogados/', titulo: 'Landing pages', texto: 'Página dedicada a uma situação — demissão, rescisão indireta.' },
      { url: '/servicos/ia-para-atendimento-juridico/', titulo: 'IA para atendimento', texto: 'Triagem do prazo e do tipo de caso antes do atendimento humano.' },
    ],
    faq: [
      { q: 'Posso anunciar mencionando o prazo de dois anos?', a: 'Informar prazos legais é informativo, não promessa de resultado, e normalmente é aceitável dentro da sobriedade exigida pela OAB. O texto final de cada campanha é revisado com esse cuidado.' },
      { q: 'Funciona melhor Google Ads ou Meta Ads para trabalhista?', a: 'Google Ads costuma performar bem aqui, porque a pessoa já pesquisa ativamente ("fui demitido, tenho direito a quê"). Meta Ads complementa gerando consciência antes da busca. Ver a comparação completa em Google Ads ou Meta Ads: como escolher.' },
    ],
  });
}
