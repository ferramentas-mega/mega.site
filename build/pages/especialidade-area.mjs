import { pageEspecialidadeArea } from '../layouts.mjs';
import { ESPECIALIDADES, CANAIS } from '../especialidades-dados.mjs';
import { ESPECIALIDADES_PAGINAS } from '../nav.mjs';

const porSlug = new Map(ESPECIALIDADES.map((e) => [e.slug, e]));
const navPorSlug = new Map(ESPECIALIDADES_PAGINAS.filter((p) => p.slug).map((p) => [p.slug, p]));

/** Gera o renderer de uma área a partir do dado único em especialidades-dados.mjs. */
export function renderEspecialidadeArea(slug) {
  const dados = porSlug.get(slug);
  const nav = navPorSlug.get(slug);
  return pageEspecialidadeArea({ ...dados, url: nav.url, CANAIS });
}

/** { '/especialidades/marketing-...-x/': () => html, ... } para todas as 35 áreas. */
export const RENDERERS_ESPECIALIDADES = Object.fromEntries(
  ESPECIALIDADES_PAGINAS.filter((p) => p.slug).map((p) => [p.url, () => renderEspecialidadeArea(p.slug)])
);
