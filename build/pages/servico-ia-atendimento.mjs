import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/ia-para-atendimento-juridico/',
    title: 'IA para atendimento',
    tituloMenu: 'IA para atendimento',
    h1: 'IA para atendimento jurídico',
    metaTitle: 'IA para pré-atendimento jurídico no WhatsApp | Mega ADS',
    metaDescription: 'IA de triagem no WhatsApp para escritórios de advocacia: resposta imediata, coleta de informações e transferência para um humano — sem dar conselho jurídico.',
    lede: 'Ninguém fica sem resposta. A IA atende cada contato em segundos, faz as perguntas certas e entrega ao time comercial apenas quem está pronto para conversar — sem nunca dar aconselhamento jurídico no lugar do advogado.',
    paraQuem: {
      titulo: 'Triagem, não substituição do advogado',
      texto: 'Para escritórios que recebem contato fora do horário comercial ou em volume que o time humano não consegue responder em segundos. A IA faz a primeira triagem; a decisão jurídica e a conversa de fato sobre o caso sempre passam para uma pessoa.',
    },
    problema: {
      titulo: 'Fora do horário comercial, o lead procura outro escritório',
      texto: 'Mensagem recebida às 22h ou num sábado, sem resposta até segunda, é mensagem que o concorrente provavelmente já respondeu primeiro. A IA garante uma primeira resposta imediata, mesmo quando não há ninguém disponível naquele momento.',
    },
    incluido: [
      { titulo: 'Resposta imediata', texto: 'O lead recebe o primeiro contato em segundos, inclusive fora do horário comercial e nos fins de semana.' },
      { titulo: 'Triagem inteligente', texto: 'A IA identifica a área do caso, coleta as informações essenciais e descarta contatos fora do perfil atendido.' },
      { titulo: 'Passagem para o humano', texto: 'Quando o lead está qualificado, a conversa vai para o time comercial com todo o histórico — sem o cliente precisar repetir informação.' },
    ],
    comoFunciona: [
      { titulo: 'Configuração do roteiro', texto: 'Perguntas de triagem definidas por área de atuação do escritório.' },
      { titulo: 'Atendimento automático', texto: 'A IA responde, pergunta e coleta as informações do caso.' },
      { titulo: 'Transferência', texto: 'Lead qualificado e com histórico completo é passado para uma pessoa do time.' },
    ],
    responsabilidadeCliente: 'Validar o roteiro de perguntas de triagem (não há aconselhamento jurídico na automação — isso continua sempre com advogados do escritório) e manter o time humano disponível para assumir as conversas qualificadas.',
    exemplo: null,
    faq: [
      { q: 'A IA dá aconselhamento jurídico?', a: 'Não. A IA faz perguntas de triagem e coleta informações — ela não analisa o mérito do caso nem orienta juridicamente o contato. Qualquer orientação sobre o caso é feita por uma pessoa do escritório, depois da transferência.' },
      { q: 'O contato percebe que está falando com uma IA?', a: 'Sim — a transparência sobre estar interagindo com automação é parte do roteiro, não é escondida do contato.' },
      { q: 'E se a IA não souber responder?', a: 'O fluxo prevê transferência para um humano sempre que a triagem terminar ou quando a pergunta sair do roteiro definido.' },
    ],
    relacionados: [
      { url: '/servicos/estruturacao-comercial-para-advogados/', titulo: 'Estruturação comercial', texto: 'O atendimento humano que recebe o lead qualificado.' },
      { url: '/conteudos/ia-pre-atendimento-escritorio-advocacia/', titulo: 'O que automatizar no pré-atendimento', texto: 'Artigo sobre os limites da automação.' },
    ],
  });
}
