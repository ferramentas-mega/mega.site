import { page as sobre } from './sobre.mjs';
import { page as metodo } from './metodo.mjs';
import { page as contato } from './contato.mjs';
import { page as politicaPrivacidade } from './politica-privacidade.mjs';
import { page as trabalheConosco } from './trabalhe-conosco.mjs';
import { page as resultados } from './resultados.mjs';
import { page as portfolio } from './portfolio.mjs';
import { page as servicos } from './servicos.mjs';
import { page as svTrafegoPago } from './servico-trafego-pago.mjs';
import { page as svGoogleAds } from './servico-google-ads.mjs';
import { page as svMetaAds } from './servico-meta-ads.mjs';
import { page as svSites } from './servico-sites.mjs';
import { page as svLandingPages } from './servico-landing-pages.mjs';
import { page as svEstruturacaoComercial } from './servico-estruturacao-comercial.mjs';
import { page as svIaAtendimento } from './servico-ia-atendimento.mjs';
import { page as svSeo } from './servico-seo.mjs';
import { page as especialidades } from './especialidades.mjs';
import { page as espTrabalhista } from './especialidade-trabalhista.mjs';
import { page as espPrevidenciario } from './especialidade-previdenciario.mjs';
import { page as espFamilia } from './especialidade-familia.mjs';
import { page as espCriminalista } from './especialidade-criminalista.mjs';
import { page as conteudos } from './conteudos.mjs';
import { page as artQuantoInvestir } from './artigo-quanto-investir.mjs';
import { page as artGoogleOuMeta } from './artigo-google-ou-meta.mjs';
import { page as artSiteOuLanding } from './artigo-site-ou-landing.mjs';
import { page as artCustoPorLead } from './artigo-custo-por-lead.mjs';
import { page as artWhatsapp } from './artigo-whatsapp.mjs';
import { page as artIaPreAtendimento } from './artigo-ia-pre-atendimento.mjs';

export const RENDERERS = {
  '/sobre/': sobre,
  '/metodo/': metodo,
  '/contato/': contato,
  '/politica-de-privacidade/': politicaPrivacidade,
  '/trabalhe-conosco/': trabalheConosco,
  '/resultados/': resultados,
  '/portfolio/': portfolio,
  '/servicos/': servicos,
  '/servicos/trafego-pago-para-advogados/': svTrafegoPago,
  '/servicos/google-ads-para-advogados/': svGoogleAds,
  '/servicos/meta-ads-para-advogados/': svMetaAds,
  '/servicos/criacao-de-sites-para-advogados/': svSites,
  '/servicos/landing-pages-para-advogados/': svLandingPages,
  '/servicos/estruturacao-comercial-para-advogados/': svEstruturacaoComercial,
  '/servicos/ia-para-atendimento-juridico/': svIaAtendimento,
  '/servicos/seo-para-advogados/': svSeo,
  '/especialidades/': especialidades,
  '/especialidades/marketing-para-advogados-trabalhistas/': espTrabalhista,
  '/especialidades/marketing-para-advogados-previdenciarios/': espPrevidenciario,
  '/especialidades/marketing-para-advogados-de-familia/': espFamilia,
  '/especialidades/marketing-para-advogados-criminalistas/': espCriminalista,
  '/conteudos/': conteudos,
  '/conteudos/quanto-investir-google-ads-advogados/': artQuantoInvestir,
  '/conteudos/google-ads-ou-meta-ads-advogados/': artGoogleOuMeta,
  '/conteudos/site-ou-landing-page-advogados/': artSiteOuLanding,
  '/conteudos/custo-por-lead-e-cliente-advocacia/': artCustoPorLead,
  '/conteudos/atendimento-whatsapp-escritorio-advocacia/': artWhatsapp,
  '/conteudos/ia-pre-atendimento-escritorio-advocacia/': artIaPreAtendimento,
};
