import { pageServico } from '../layouts.mjs';

export function page() {
  return pageServico({
    url: '/servicos/trafego-pago-para-advogados/',
    title: 'Tráfego pago',
    tituloMenu: 'Tráfego pago',
    h1: 'Tráfego pago para advogados',
    metaTitle: 'Tráfego pago para advogados — Google e Meta Ads | Mega ADS',
    metaDescription: 'Gestão de Google Ads e Meta Ads para escritórios de advocacia: diagnóstico da área, estrutura de campanhas e otimização semanal.',
    lede: 'Anúncios que colocam o seu escritório na frente de quem está procurando um advogado agora — sem gastar a verba descobrindo sozinho o que funciona no nicho jurídico.',
    paraQuem: {
      titulo: 'Gestão completa de Google Ads e Meta Ads',
      texto: 'É o serviço para o escritório que quer demanda nova de forma previsível, e não depender só de indicação. Cobre as duas frentes — busca (Google) e redes sociais (Meta) — com a estrutura decidida conforme a área de atuação e a região de interesse do escritório.',
    },
    problema: {
      titulo: 'Testar sozinho custa caro',
      texto: 'Um escritório que sobe campanha sem experiência no nicho jurídico normalmente gasta as primeiras semanas de verba descobrindo o que a OAB permite anunciar, que palavras-chave trazem caso qualificado e qual criativo não convence. Esse aprendizado, quando já foi feito em centenas de campanhas de advocacia, não precisa ser repetido do zero a cada cliente novo.',
    },
    incluido: [
      { titulo: 'Diagnóstico da área', texto: 'Mapeamento da área de atuação, região e ticket médio, para escolher o canal e a segmentação certos antes de ligar qualquer campanha.' },
      { titulo: 'Estrutura no ar', texto: 'Campanhas de busca e de redes, com segmentação, palavras-chave e públicos já validados no nicho jurídico.' },
      { titulo: 'Otimização semanal', texto: 'Acompanhamento de CPL, volume e qualidade dos leads — cortando o que não performa e escalando o que traz contrato.' },
    ],
    comoFunciona: [
      { titulo: 'Diagnóstico', texto: 'Área de atuação, região e ticket médio definem a estratégia de canal e segmentação.' },
      { titulo: 'Estruturação', texto: 'Campanhas sobem com criativos, palavras-chave e públicos.' },
      { titulo: 'Otimização contínua', texto: 'Leitura semanal de CPL e qualidade, com cortes e escalonamento conforme o que performa.' },
    ],
    responsabilidadeCliente: 'Definir o investimento de mídia (pago diretamente na plataforma de anúncios, fora da mensalidade da Mega ADS), aprovar os criativos e manter a conta de anúncios acessível para a equipe.',
    exemplo: null,
    faq: [
      { q: 'Qual o investimento mínimo para começar?', a: 'A referência prática é a partir de cerca de R$ 1.500 por mês em mídia, pagos diretamente na plataforma de anúncios — não é receita da Mega ADS. O valor ideal depende da região e da área de atuação, e é ajustado no diagnóstico.' },
      { q: 'Em quanto tempo os primeiros leads chegam?', a: 'Normalmente nas primeiras semanas após a campanha entrar no ar, depois da estruturação inicial. O prazo exato depende da aprovação de criativos e da liberação de acesso às contas de anúncio.' },
      { q: 'Isso é permitido pela OAB?', a: 'Sim, quando a publicidade é informativa e sóbria, seguindo o Provimento nº 205/2021 da OAB. As campanhas e páginas são planejadas dentro dessas regras.' },
    ],
    relacionados: [
      { url: '/servicos/google-ads-para-advogados/', titulo: 'Google Ads para advogados', texto: 'Foco em quem já está procurando um advogado agora.' },
      { url: '/servicos/meta-ads-para-advogados/', titulo: 'Meta Ads para advogados', texto: 'Criativos e distribuição para gerar demanda nova.' },
      { url: '/servicos/landing-pages-para-advogados/', titulo: 'Landing pages', texto: 'A página para onde o clique do anúncio deve levar.' },
    ],
  });
}
