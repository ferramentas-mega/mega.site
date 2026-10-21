/**
 * Fonte única da arquitetura do site: navegação, rodapé, sitemap e matriz de
 * SEO são todos derivados daqui. Uma URL só existe num lugar.
 *
 * `status`:
 *  - 'publicada'  → entra no menu, no rodapé, no sitemap.xml e é indexável.
 *  - 'rascunho'   → existe como arquivo, tem noindex, NÃO entra em menu,
 *                   rodapé nem sitemap. Serve para revisão interna.
 */
export const SITE = {
  nome: 'Mega ADS',
  dominio: 'https://megaads.com.br',
  whatsapp: '5548991006505', // número já validado e em produção — ver PENDENCIAS.md sobre o número divergente do zip
};

export const PAGINAS = [
  // ── Fase 1 — institucional ──────────────────────────────────────────
  { url: '/', tipo: 'home', titulo: 'Home', status: 'publicada', fase: 1 },
  { url: '/sobre/', tipo: 'institucional', titulo: 'Sobre', status: 'publicada', fase: 1, menu: 'A Mega ADS' },
  { url: '/metodo/', tipo: 'institucional', titulo: 'Método', status: 'publicada', fase: 1, menu: 'A Mega ADS' },
  { url: '/contato/', tipo: 'institucional', titulo: 'Contato', status: 'publicada', fase: 1, menu: 'A Mega ADS' },
  { url: '/servicos/', tipo: 'listagem-servicos', titulo: 'Soluções', status: 'publicada', fase: 1, menu: 'Soluções' },
  { url: '/resultados/', tipo: 'institucional', titulo: 'Resultados', status: 'publicada', fase: 1, menuTopo: true },
  { url: '/portfolio/', tipo: 'institucional', titulo: 'Portfólio', status: 'rascunho', fase: 1,
    pendencia: 'Nenhum link de projeto foi recebido ainda. A estrutura da página (hero, processo, entregáveis, FAQ, fluxo de solicitação com contexto, continuidade para tráfego) está pronta; falta o inventário real: URL de cada projeto, categoria, nome do escritório quando confirmado, captura de tela e autorização de uso. Publicar sem isso seria uma página de portfólio sem nenhum projeto — pior que não publicar. Assim que o inventário chegar, muda para \'publicada\'.' },
  { url: '/politica-de-privacidade/', tipo: 'institucional', titulo: 'Política de privacidade', status: 'publicada', fase: 1, rodape: true },
  { url: '/trabalhe-conosco/', tipo: 'institucional', titulo: 'Trabalhe conosco', status: 'rascunho', fase: 1, rodape: true,
    pendencia: 'Sem canal definido de recebimento e tratamento de currículos/candidaturas. Mantida em rascunho até existir um fluxo real (e-mail dedicado ou ATS) e uma política de dados para candidatos.' },

  // ── Fase 2 — serviços ────────────────────────────────────────────────
  { url: '/servicos/trafego-pago-para-advogados/', tipo: 'servico', titulo: 'Tráfego pago para advogados', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/google-ads-para-advogados/', tipo: 'servico', titulo: 'Google Ads para advogados', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/meta-ads-para-advogados/', tipo: 'servico', titulo: 'Meta Ads para advogados', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/criacao-de-sites-para-advogados/', tipo: 'servico', titulo: 'Criação de sites para advogados', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/landing-pages-para-advogados/', tipo: 'servico', titulo: 'Landing pages para advogados', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/estruturacao-comercial-para-advogados/', tipo: 'servico', titulo: 'Estruturação comercial para advogados', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/ia-para-atendimento-juridico/', tipo: 'servico', titulo: 'IA para atendimento jurídico', status: 'publicada', fase: 2, menu: 'Soluções' },
  { url: '/servicos/seo-para-advogados/', tipo: 'servico', titulo: 'SEO para advogados', status: 'rascunho', fase: 2, menu: 'Soluções',
    pendencia: 'O briefing condiciona esta página à confirmação de que SEO integra a oferta comercial hoje. Não há essa confirmação nos arquivos inspecionados (servicos.html não lista SEO como serviço à parte). Mantida em rascunho até confirmação.' },

  // ── Fase 3 — especialidades ──────────────────────────────────────────
  { url: '/especialidades/', tipo: 'listagem-especialidades', titulo: 'Para quem', status: 'publicada', fase: 3, menu: 'Para quem' },
  { url: '/especialidades/marketing-para-advogados-trabalhistas/', tipo: 'especialidade', titulo: 'Marketing para advogados trabalhistas', status: 'publicada', fase: 3, menu: 'Para quem' },
  { url: '/especialidades/marketing-para-advogados-previdenciarios/', tipo: 'especialidade', titulo: 'Marketing para advogados previdenciários', status: 'publicada', fase: 3, menu: 'Para quem' },
  { url: '/especialidades/marketing-para-advogados-de-familia/', tipo: 'especialidade', titulo: 'Marketing para advogados de família', status: 'publicada', fase: 3, menu: 'Para quem' },
  { url: '/especialidades/marketing-para-advogados-criminalistas/', tipo: 'especialidade', titulo: 'Marketing para advogados criminalistas', status: 'publicada', fase: 3, menu: 'Para quem' },

  // ── Fase 3 — conteúdos ───────────────────────────────────────────────
  { url: '/conteudos/', tipo: 'listagem-conteudos', titulo: 'Conteúdos', status: 'publicada', fase: 3, menuTopo: true },
  { url: '/conteudos/quanto-investir-google-ads-advogados/', tipo: 'artigo', titulo: 'Quanto investir em Google Ads para um escritório?', status: 'publicada', fase: 3 },
  { url: '/conteudos/google-ads-ou-meta-ads-advogados/', tipo: 'artigo', titulo: 'Google Ads ou Meta Ads: como escolher para o escritório?', status: 'publicada', fase: 3 },
  { url: '/conteudos/site-ou-landing-page-advogados/', tipo: 'artigo', titulo: 'Site ou landing page para advogados: quando usar cada um?', status: 'publicada', fase: 3 },
  { url: '/conteudos/custo-por-lead-e-cliente-advocacia/', tipo: 'artigo', titulo: 'Como medir o custo por lead e por cliente no escritório', status: 'publicada', fase: 3 },
  { url: '/conteudos/atendimento-whatsapp-escritorio-advocacia/', tipo: 'artigo', titulo: 'Como organizar o atendimento dos contatos recebidos pelo WhatsApp', status: 'publicada', fase: 3 },
  { url: '/conteudos/ia-pre-atendimento-escritorio-advocacia/', tipo: 'artigo', titulo: 'O que automatizar no pré-atendimento e quando encaminhar para uma pessoa', status: 'publicada', fase: 3 },
];

export const publicadas = () => PAGINAS.filter((p) => p.status === 'publicada');

export const MENU_A_MEGA = [
  { label: 'Sobre', url: '/sobre/' },
  { label: 'Método', url: '/metodo/' },
  { label: 'Contato', url: '/contato/' },
];

export const MENU_SOLUCOES = () =>
  PAGINAS.filter((p) => p.tipo === 'servico' && p.status === 'publicada')
    .map((p) => ({ label: p.titulo.replace(' para advogados', '').replace('IA para atendimento jurídico', 'IA para atendimento'), url: p.url }));

export const MENU_PARA_QUEM = () =>
  PAGINAS.filter((p) => p.tipo === 'especialidade' && p.status === 'publicada')
    .map((p) => ({ label: p.titulo.replace('Marketing para advogados ', '').replace('Marketing para advogados de ', ''), url: p.url }));

export const MENU_PRINCIPAL = [
  { label: 'Home', url: '/' },
  { label: 'A Mega ADS', url: '/sobre/', submenu: MENU_A_MEGA },
  { label: 'Soluções', url: '/servicos/', submenuFn: MENU_SOLUCOES },
  { label: 'Para quem', url: '/especialidades/', submenuFn: MENU_PARA_QUEM },
  { label: 'Resultados', url: '/resultados/' },
  { label: 'Conteúdos', url: '/conteudos/' },
];
