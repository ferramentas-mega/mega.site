# Mega ADS — Landing Page

Landing page de marketing jurídico da **Mega ADS**, importada do projeto
Claude Design `Mega ADS.dc.html` e implementada como site estático pronto
para publicação.

## Como funciona

O site é um documento **Design Canvas** (`.dc.html`). A marcação fica dentro
de `<x-dc>` e é renderizada no navegador por `support.js` (o runtime do
Design Canvas), que carrega React 18 via CDN (`unpkg.com`) e monta a página.

- **`index.html`** — página servível (documento `<x-dc>` completo). É o ponto
  de entrada do site.
- **`Mega ADS.dc.html`** — cópia com o nome original do arquivo de design,
  mantida como fonte para re-sincronização futura. Conteúdo idêntico ao
  `index.html`.
- **`support.js`** — runtime do Design Canvas (gerado; não editar à mão).
- **`assets/`** — imagens locais (logo, hero, timeline "Jornada", OG image).

## Rodando localmente

Sirva a pasta por HTTP (o runtime faz um `fetch` do próprio documento, o que
não funciona via `file://`):

```bash
python3 -m http.server 8000
# abra http://localhost:8000/
```

Em tempo de execução o navegador busca, além do `support.js` local:
React/ReactDOM (`unpkg.com`), a fonte Montserrat (Google Fonts) e algumas
imagens de exemplo (`images.unsplash.com`, `randomuser.me`). É necessário
acesso à internet para carregá-los.

## Publicação

É um site 100% estático — publique a pasta em qualquer host estático
(Netlify, Vercel, GitHub Pages, S3/CloudFront, Nginx, etc.). Nenhum build é
necessário.

## Observações da importação

Dois arquivos do projeto de design **excederam o limite de 256 KB por arquivo
do importador** e não puderam ser trazidos na íntegra:

1. **`assets/jornada/2026.webp`** (original ≈ 750 KB) — foto da equipe usada
   no carrossel "Nossa Jornada". Foi substituída por um **placeholder da
   marca** (mesma proporção) para não quebrar o layout. Substitua pela foto
   original quando disponível.
2. **`assets/hero-bg-video.mp4`** — vídeo decorativo de fundo do hero
   (opacidade ~5%). O elemento `<video>` foi **removido** do hero para evitar
   um 404; o visual permanece praticamente idêntico (o fundo é o gradiente
   radial). Para restaurar, adicione o arquivo em `assets/` e reponha o
   bloco `<video>` no hero, reativando a prop `showHeroVideo`.
