import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/google-ads-para-advogados/',
    title: 'Google Ads',
    tituloMenu: 'Google Ads',
    h1: 'Google Ads para advogados',
    metaTitle: 'Google Ads para advogados — campanhas de busca | Mega ADS',
    metaDescription: 'Campanhas de Google Ads para escritórios de advocacia: capture quem já está buscando um advogado para o problema que ele tem agora.',
    lede: 'Quando alguém pesquisa "advogado trabalhista perto de mim" ou "quanto tempo tenho para entrar na justiça", já está com um problema concreto e procurando ajuda. O Google Ads coloca o seu escritório nessa busca.',
    paraQuem: {
      titulo: 'Demanda de quem já está procurando',
      texto: 'Diferente de redes sociais, a busca do Google captura intenção explícita: a pessoa digitou o problema que tem. Faz sentido para escritórios que querem captar casos com urgência definida — prazo que está vencendo, demissão recente, benefício negado — onde a pessoa pesquisa ativamente por solução.',
    },
    problema: {
      titulo: 'Palavra-chave errada queima verba rápido',
      texto: 'O leilão de Google Ads pune quem testa sem direção: termos genéricos demais trazem cliques caros e pouco qualificados; termos específicos demais não têm volume. A curva de aprendizado de quais termos convertem em caso real, no nicho jurídico, já foi percorrida — não precisa ser refeita campanha a campanha.',
    },
    incluido: [
      { titulo: 'Pesquisa de termos de busca', texto: 'Seleção de palavras-chave por intenção de contratação, não só por volume de busca.' },
      { titulo: 'Estrutura de campanhas', texto: 'Organização por área de atuação e tipo de busca, com anúncios de texto compatíveis com a sobriedade exigida pela OAB.' },
      { titulo: 'Acompanhamento de CPL e conversão', texto: 'Leitura semanal de custo por lead e corte de termos que trazem clique sem qualidade.' },
    ],
    comoFunciona: [
      { titulo: 'Pesquisa de palavras-chave', texto: 'Termos mapeados por área de atuação e intenção de contratação.' },
      { titulo: 'Anúncios e página de destino', texto: 'Anúncio e página conectados pela mesma promessa, evitando dispersão de mensagem.' },
      { titulo: 'Otimização semanal', texto: 'Ajuste de lances e pausa de termos que não convertem.' },
    ],
    responsabilidadeCliente: 'Aprovar o texto dos anúncios (sobriedade exigida pela OAB) e manter a página de destino (site ou landing page) ativa e correta.',
    exemplo: null,
    faq: [
      { q: 'Google Ads ou Meta Ads: qual começar primeiro?', a: 'Depende da área. Para quem tem urgência explícita (prazo vencendo, demissão), Google Ads costuma trazer leads mais quentes porque a pessoa já está buscando. Para gerar demanda nova (a pessoa ainda não sabe que tem um caso), Meta Ads costuma funcionar melhor. Detalhamos a comparação em Google Ads ou Meta Ads: como escolher.' },
      { q: 'O anúncio aparece para qualquer pesquisa sobre o assunto?', a: 'Não — a campanha é restrita às palavras-chave selecionadas e à região definida no diagnóstico, para evitar clique de quem não é público-alvo.' },
    ],
    relacionados: [
      { url: '/servicos/trafego-pago-para-advogados/', titulo: 'Tráfego pago', texto: 'Visão geral da gestão de anúncios.' },
      { url: '/servicos/meta-ads-para-advogados/', titulo: 'Meta Ads para advogados', texto: 'A outra frente de geração de demanda.' },
      { url: '/conteudos/google-ads-ou-meta-ads-advogados/', titulo: 'Google Ads ou Meta Ads: como escolher', texto: 'Artigo comparando os dois canais.' },
    ],
  });
}
