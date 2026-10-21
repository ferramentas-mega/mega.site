import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGINAS, SITE } from './nav.mjs';
import { RENDERERS } from './pages/index.mjs';
import { page404 } from './pages/404.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

function caminhoDeSaida(url) {
  // '/sobre/' -> sobre/index.html  (a home, '/', nunca chega aqui: ver loop abaixo)
  const limpo = url.replace(/^\/|\/$/g, '');
  return join(RAIZ, limpo, 'index.html');
}

let escritas = 0, pulos = 0, erros = [];

writeFileSync(join(RAIZ, '404.html'), page404(), 'utf-8');
escritas++;

for (const p of PAGINAS) {
  if (p.url === '/') { continue; } // home: tratada manualmente (patch cirúrgico), não gerada por aqui
  const fn = RENDERERS[p.url];
  if (!fn) {
    if (p.status === 'publicada') erros.push(`SEM CONTEÚDO: ${p.url} está marcada 'publicada' em nav.mjs mas não tem módulo em build/pages/.`);
    pulos++;
    continue;
  }
  const html = fn();
  const caminho = caminhoDeSaida(p.url);
  mkdirSync(dirname(caminho), { recursive: true });
  writeFileSync(caminho, html, 'utf-8');
  escritas++;
}

// ── sitemap.xml — só páginas publicadas e indexáveis ────────────────────
const publicadas = PAGINAS.filter((p) => p.status === 'publicada');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicadas.map((p) => `  <url>\n    <loc>${SITE.dominio}${p.url}</loc>\n    <changefreq>${p.tipo === 'artigo' ? 'monthly' : 'monthly'}</changefreq>\n    <priority>${p.url === '/' ? '1.0' : p.tipo.startsWith('listagem') || p.tipo === 'servico' ? '0.8' : '0.6'}</priority>\n  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(RAIZ, 'sitemap.xml'), sitemap, 'utf-8');

// ── robots.txt ────────────────────────────────────────────────────────
const rascunhos = PAGINAS.filter((p) => p.status !== 'publicada');
const robots = `User-agent: *
Allow: /
${rascunhos.map((p) => `Disallow: ${p.url}`).join('\n')}

Sitemap: ${SITE.dominio}/sitemap.xml
`;
writeFileSync(join(RAIZ, 'robots.txt'), robots, 'utf-8');

console.log(`build: ${escritas} página(s) escrita(s), ${pulos} pulada(s) (home ou sem conteúdo ainda).`);
if (erros.length) {
  console.error('\nERROS:');
  erros.forEach((e) => console.error('  - ' + e));
  process.exitCode = 1;
}
