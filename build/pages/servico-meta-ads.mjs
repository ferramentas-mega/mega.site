import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/meta-ads-para-advogados/',
    title: 'Meta Ads',
    tituloMenu: 'Meta Ads',
    h1: 'Meta Ads para advogados',
    metaTitle: 'Meta Ads para advogados — Instagram e Facebook | Mega ADS',
    metaDescription: 'Criativos e campanhas no Instagram e Facebook para escritórios de advocacia: gere demanda nova, não só capture quem já procura.',
    lede: 'Nem todo cliente em potencial sabe que tem um caso. O Meta Ads trabalha essa demanda que ainda não virou busca — informando e despertando a decisão de procurar um advogado.',
    paraQuem: {
      titulo: 'Demanda que ainda não virou busca ativa',
      texto: 'Faz sentido para áreas onde a pessoa muitas vezes não sabe que tem direito a algo — por exemplo, revisão de benefício ou verbas rescisórias não pagas corretamente. O criativo educa e desperta a procura, em vez de esperar que ela já exista no Google.',
    },
    problema: {
      titulo: 'O criativo decide se o anúncio é visto',
      texto: 'No feed, a decisão de parar de rolar e prestar atenção acontece em segundos. Um criativo genérico, ou que soa como propaganda de resultado garantido — o que a OAB não permite —, é ignorado ou reportado. O criativo certo comunica autoridade sem prometer resultado específico.',
    },
    incluido: [
      { titulo: 'Pesquisa de repertório', texto: 'Análise do que está performando na área de atuação e dos ângulos de comunicação com melhor resposta.' },
      { titulo: 'Produção de criativos', texto: 'Imagens, vídeos curtos e textos de anúncio prontos para rodar nas plataformas, sem promessa de resultado e sem apelação.' },
      { titulo: 'Renovação contínua', texto: 'Troca de peças antes que o público sature, mantendo o custo por lead estável.' },
    ],
    comoFunciona: [
      { titulo: 'Pesquisa de ângulos', texto: 'Identificação do que já funciona na área de atuação, sem copiar literalmente concorrentes.' },
      { titulo: 'Produção', texto: 'Criativos (imagem, vídeo curto, texto) alinhados à sobriedade exigida pela publicidade jurídica.' },
      { titulo: 'Veiculação e renovação', texto: 'Distribuição segmentada e substituição de peças que começam a saturar.' },
    ],
    responsabilidadeCliente: 'Aprovar os criativos antes de irem ao ar e fornecer, quando houver, material próprio (fotos da equipe, do escritório) que ajude a dar autenticidade às peças.',
    exemplo: null,
    faq: [
      { q: 'Posso usar depoimentos de clientes no anúncio?', a: 'Só com autorização explícita do cliente para uso de nome, imagem e relato, e respeitando o sigilo profissional. Sem essa autorização, não produzimos nem publicamos esse tipo de peça.' },
      { q: 'Com que frequência os criativos são trocados?', a: 'Varia conforme o desempenho: um criativo que satura rápido (queda de CPL) é substituído antes, um que sustenta performance continua no ar por mais tempo.' },
    ],
    relacionados: [
      { url: '/servicos/trafego-pago-para-advogados/', titulo: 'Tráfego pago', texto: 'Visão geral da gestão de anúncios.' },
      { url: '/servicos/google-ads-para-advogados/', titulo: 'Google Ads para advogados', texto: 'A outra frente, voltada a busca ativa.' },
      { url: '/conteudos/google-ads-ou-meta-ads-advogados/', titulo: 'Google Ads ou Meta Ads: como escolher', texto: 'Artigo comparando os dois canais.' },
    ],
  });
}
