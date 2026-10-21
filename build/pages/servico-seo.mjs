import { pageServico } from '../layouts.mjs';

/**
 * Rascunho. nav.mjs marca esta URL como 'rascunho' — o briefing condiciona a
 * página à confirmação de que SEO integra a oferta comercial hoje, e
 * servicos.html (fonte usada para as demais páginas de serviço) não lista
 * SEO como serviço à parte. Mantida fora do menu/sitemap até confirmação.
 */
export function page() {
  return pageServico({
    url: '/servicos/seo-para-advogados/',
    title: 'SEO para advogados',
    tituloMenu: 'SEO',
    h1: 'SEO para advogados',
    metaTitle: 'SEO para advogados | Mega ADS',
    metaDescription: 'Estrutura de SEO para escritórios de advocacia — página em revisão.',
    lede: 'Estrutura de página pronta; conteúdo detalhado depende da confirmação de que SEO integra a oferta comercial atual da Mega ADS.',
    paraQuem: { titulo: 'A confirmar', texto: 'Pendente de confirmação comercial — ver nota no início da página.' },
    problema: { titulo: 'A confirmar', texto: 'Pendente de confirmação comercial.' },
    incluido: [
      { titulo: 'Diagnóstico técnico', texto: 'A detalhar após confirmação do escopo real oferecido.' },
      { titulo: 'Arquitetura e conteúdo', texto: 'A detalhar.' },
      { titulo: 'Acompanhamento orgânico', texto: 'A detalhar — sem promessa de posição ou prazo, por princípio.' },
    ],
    comoFunciona: [
      { titulo: 'A confirmar', texto: 'Etapas a detalhar após confirmação do escopo.' },
    ],
    responsabilidadeCliente: 'A detalhar.',
    exemplo: null,
    faq: [
      { q: 'A Mega ADS garante primeira posição no Google?', a: 'Nenhum serviço de SEO sério garante posição específica ou prazo — motores de busca não funcionam por contrato. Qualquer página de SEO publicada pela Mega ADS seguirá esse princípio.' },
    ],
    relacionados: [
      { url: '/servicos/criacao-de-sites-para-advogados/', titulo: 'Criação de sites', texto: 'Base técnica sobre a qual o SEO atua.' },
      { url: '/conteudos/', titulo: 'Conteúdos', texto: 'Conteúdo editorial que já contribui organicamente hoje.' },
    ],
  });
}
