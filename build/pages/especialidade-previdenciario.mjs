import { pageEspecialidade } from '../layouts.mjs';

export function page() {
  return pageEspecialidade({
    url: '/especialidades/marketing-para-advogados-previdenciarios/',
    title: 'Marketing para advogados previdenciários',
    area: 'previdenciário',
    h1: 'Marketing para advogados previdenciários',
    metaTitle: 'Marketing para advogados previdenciários | Mega ADS',
    metaDescription: 'Captação de clientes para escritórios de direito previdenciário: benefício negado, revisão de aposentadoria e público que exige atendimento acessível.',
    lede: 'Boa parte de quem precisa de um advogado previdenciário não sabe, inicialmente, que tem direito a revisar ou contestar uma decisão do INSS. A comunicação precisa explicar antes de vender.',
    contexto: 'O público de direito previdenciário costuma incluir pessoas de mais idade, nem sempre habituadas a pesquisar e preencher formulários online. Isso muda a prioridade de canal: um atendimento acessível pelo WhatsApp, com linguagem simples, costuma converter melhor do que um formulário longo.',
    desafios: [
      { titulo: 'Explicar antes de converter', texto: 'Muita gente não sabe que um benefício negado pode ser revisto, ou que a aposentadoria pode ter sido calculada abaixo do devido. O criativo e a página precisam educar, não só captar quem já procura.' },
      { titulo: 'Acessibilidade de linguagem e de canal', texto: 'Termos técnicos do INSS (DER, CNIS, tempo de contribuição) afastam quem não os conhece. A comunicação eficaz traduz isso para a situação prática da pessoa.' },
    ],
    demanda: 'As buscas mais comuns envolvem benefício negado, revisão de aposentadoria, auxílio-doença e BPC/LOAS. Muitas vezes a pessoa chega com uma carta de indeferimento do INSS em mãos, não com uma busca ativa no Google.',
    organizacao: 'A triagem prioriza entender se há decisão do INSS em mãos (negativa ou valor questionável) e o tipo de benefício, direcionando rapidamente para o WhatsApp — o canal que esse público mais usa no dia a dia.',
    solucoes: [
      { url: '/servicos/meta-ads-para-advogados/', titulo: 'Meta Ads', texto: 'Para despertar a busca de quem não sabe que tem direito a revisão.' },
      { url: '/servicos/estruturacao-comercial-para-advogados/', titulo: 'Estruturação comercial', texto: 'Atendimento acessível e no ritmo desse público.' },
      { url: '/servicos/criacao-de-sites-para-advogados/', titulo: 'Criação de sites', texto: 'Conteúdo institucional que explica direitos em linguagem simples.' },
    ],
    faq: [
      { q: 'Esse público usa WhatsApp mais do que formulário?', a: 'Com frequência sim — a estruturação do atendimento para esse público prioriza o WhatsApp como canal principal de conversa, com o formulário como alternativa.' },
      { q: 'Dá para anunciar "revisão de aposentadoria" sem prometer valor de ganho?', a: 'Sim — o anúncio informa que existe a possibilidade de revisão, sem prometer um valor ou resultado específico, que é o limite da publicidade jurídica permitida.' },
    ],
  });
}
