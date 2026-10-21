import { renderPage, breadcrumbLd } from '../shell.mjs';
import { breadcrumbs } from '../partials.mjs';
import { draftBanner } from '../layouts.mjs';

const url = '/trabalhe-conosco/';
const crumbs = [{ label: 'Home', url: '/' }, { label: 'Trabalhe conosco' }];

export function page() {
  const body = `
${draftBanner('Não há vagas abertas confirmadas nem um canal definido de recebimento e tratamento de candidaturas (e-mail dedicado, formulário próprio ou sistema de recrutamento). Por isso esta página fica fora do menu, do rodapé e do sitemap até essas definições existirem — publicá-la hoje significaria anunciar um canal de candidatura que ninguém está de fato monitorando.')}
${breadcrumbs(crumbs)}
<section class="page-hero container">
  <span class="kicker">Empresa</span>
  <h1>Trabalhe conosco</h1>
  <p class="lede">Estrutura em preparação. Quando houver vagas abertas e um canal definido para candidaturas, elas aparecerão aqui.</p>
</section>

<section class="section container" style="padding-top:0">
  <div class="card" style="max-width:640px">
    <h3>Banco de talentos</h3>
    <p>Planejado, mas não ativado nesta versão: um banco de talentos exige um canal de recebimento de currículos e uma política de tratamento desses dados (quanto tempo ficam guardados, quem acessa, como são descartados). Nenhum dos dois está definido ainda.</p>
  </div>
</section>`;

  return renderPage({
    url,
    title: 'Trabalhe conosco — Mega ADS',
    description: 'Vagas e candidaturas na Mega ADS.',
    robots: 'noindex, nofollow',
    structuredData: [breadcrumbLd(crumbs)],
    body,
  });
}
