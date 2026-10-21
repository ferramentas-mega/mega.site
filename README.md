# Site Mega ADS

Site estático (HTML + JS próprios). Não depende de WordPress, Elementor nem plugins,
nem de servidor Node em produção — Node só é usado no computador de quem edita, para
gerar as páginas institucionais (ver abaixo).

## Duas partes do site

**1. A home** (`index.html`) — página única, feita no Claude Design, com
hero, vídeo, formulário, FAQ etc. Editada diretamente no arquivo; `support.js`
é o runtime que a hidrata.

**2. As páginas institucionais** (`/sobre/`, `/servicos/`, `/especialidades/`,
`/conteudos/` e as demais) — HTML estático de verdade, gerado por um script
em `build/`, sem depender de JavaScript para existir. Para editar uma
dessas páginas, mexa no arquivo correspondente dentro de `build/pages/`,
nunca no `index.html` gerado dentro da pasta da página — ele é sobrescrito
a cada `node build/run.mjs`.

### Gerar/atualizar as páginas institucionais

```bash
node build/run.mjs
```

Lê `build/nav.mjs` (a lista de todas as páginas, com status `publicada` ou
`rascunho`) e `build/pages/*.mjs` (o conteúdo de cada uma), e escreve:
- uma pasta por página, com `index.html` dentro (URL limpa, sem extensão);
- `404.html` na raiz;
- `sitemap.xml` e `robots.txt`, só com as páginas `publicada`.

Página em rascunho nunca aparece no menu, no rodapé nem no sitemap — mas o
arquivo é gerado (com `noindex`), porque é mais fácil revisar um rascunho
publicado-mas-não-divulgado do que um arquivo que não existe. Ver
`PENDENCIAS.md` para o que falta em cada rascunho.

## Estrutura

- `index.html`, `support.js` — a home.
- `build/` — gerador das páginas institucionais (só roda no computador de
  quem edita; nada daqui vai para o servidor).
- `assets/` — imagens (webp), vídeos (webm/mp4), fontes e os dois arquivos
  `site.css`/`site.js` compartilhados pelas páginas institucionais.
- `testes/` — suíte Playwright (home + páginas institucionais). Ver o
  README dentro da pasta.
- `.htaccess`, `.cpanel.yml` — cache, compressão, MIME, 404 e o que o
  deploy do cPanel publica.
- `PENDENCIAS.md`, `PORTFOLIO-INVENTARIO.md` — pendências de conteúdo
  (dados institucionais, alegações sem comprovação, inventário do
  portfólio). Nunca vão para o servidor (fora do `.cpanel.yml`).

## Publicar

O `.cpanel.yml` já está configurado para publicar `index.html`, `assets/`,
os arquivos soltos da raiz e as pastas de página geradas. `build/` e
`testes/` nunca são publicados — são ferramentas de quem edita o site, não
conteúdo público.

## Integrações

- Leads do formulário da home: Google Apps Script → Google Sheets + e-mail
  (URL no `submitForm` do `index.html`), e envio adicional ao painel de
  analytics (`app.johnyweb.com`).
- Leads do formulário de `/contato/`: mesmo Apps Script e mesmo painel, via
  `assets/site.js`.
- WhatsApp: `5548991006505` — ver `PENDENCIAS.md` item 1 sobre uma
  divergência encontrada com outro número, ainda não confirmada.
