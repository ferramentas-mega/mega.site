/**
 * Servidor estático que entrega o site EXATAMENTE como ele é, com uma única
 * diferença: o React vem do `node_modules` em vez do unpkg.com.
 *
 * O `support.js` (runtime do Claude Design) baixa React, ReactDOM e Babel do
 * unpkg em tempo de execução. Sem rede — numa máquina offline, num runner de CI
 * sem saída para a internet, ou atrás de um proxy que bloqueia CDN — nada
 * hidrata, a página fica no HTML estático e o formulário não existe para o
 * teste. Trocar a origem desses três arquivos é o que torna o teste possível
 * sem depender da internet.
 *
 * O que NÃO é trocado: o `index.html` é servido byte a byte como está no
 * repositório. Se o teste passa, passa contra o arquivo que vai para o ar.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = fileURLToPath(new URL('.', import.meta.url));
const RAIZ = join(AQUI, '..');
const PORTA = Number(process.env.PORTA ?? 8901);

const VENDOR = {
  '/vendor/react.js': 'react/umd/react.production.min.js',
  '/vendor/react-dom.js': 'react-dom/umd/react-dom.production.min.js',
  '/vendor/babel.js': '@babel/standalone/babel.min.js',
};

const ORIGINAIS = {
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js': '/vendor/react.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': '/vendor/react-dom.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js': '/vendor/babel.js',
};

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2',
};

/** O runtime com a origem do React trocada e a verificação de SRI desligada. */
async function supportLocal() {
  let js = await readFile(join(RAIZ, 'support.js'), 'utf8');
  for (const [de, para] of Object.entries(ORIGINAIS)) js = js.replaceAll(de, para);
  // A integridade é calculada sobre o arquivo do unpkg; servido de outro
  // caminho, o navegador recusaria o script e nada carregaria.
  js = js.replace(/integrity:\s*sri\b/g, 'integrity: undefined')
         .replace(/integrity\s*=\s*babel\.integrity/g, 'integrity = undefined');
  return js;
}

const servidor = createServer(async (req, res) => {
  const caminho = decodeURIComponent((req.url ?? '/').split('?')[0]);

  try {
    if (caminho === '/' || caminho === '/index.html') {
      res.writeHead(200, { 'Content-Type': TIPOS['.html'] });
      return res.end(await readFile(join(RAIZ, 'index.html')));
    }

    if (caminho === '/support.js') {
      res.writeHead(200, { 'Content-Type': TIPOS['.js'] });
      return res.end(await supportLocal());
    }

    if (VENDOR[caminho]) {
      res.writeHead(200, { 'Content-Type': TIPOS['.js'] });
      return res.end(await readFile(join(AQUI, 'node_modules', VENDOR[caminho])));
    }

    // Qualquer outro arquivo sai da raiz do site. `normalize` + o prefixo
    // impedem que `../` escape do diretório.
    const alvo = join(RAIZ, normalize(caminho).replace(/^(\.\.[/\\])+/, ''));
    if (!alvo.startsWith(RAIZ)) {
      res.writeHead(403);
      return res.end('fora da raiz');
    }
    res.writeHead(200, { 'Content-Type': TIPOS[extname(alvo)] ?? 'application/octet-stream' });
    return createReadStream(alvo).on('error', () => { res.writeHead(404); res.end(); }).pipe(res);
  } catch {
    res.writeHead(404);
    res.end('não encontrado');
  }
});

servidor.listen(PORTA, () => console.log(`site de teste em http://127.0.0.1:${PORTA}`));
