# Mega ADS — Landing Page

Landing page de marketing jurídico da **Mega ADS**, importada do projeto
Claude Design `Mega ADS.dc.html` e implementada como site estático pronto
para publicação.

## Como funciona

O site é um documento **Design Canvas** (`.dc.html`). A marcação fica dentro
de `<x-dc>` e é renderizada no navegador por `support.js` (o runtime do
Design Canvas), que carrega React 18 via CDN (`unpkg.com`) e monta a página.

- **`index.html`** — página servível (documento `<x-dc>` completo). Ponto de
  entrada do site.
- **`Mega ADS.dc.html`** — cópia com o nome original do arquivo de design,
  mantida como fonte para re-sincronização. Conteúdo idêntico ao `index.html`.
- **`support.js`** — runtime do Design Canvas (gerado; não editar à mão).
- **`assets/`** — imagens locais (logo, hero, timeline "Jornada", OG image).

## Rodando localmente

Sirva a pasta por HTTP (o runtime faz `fetch` do próprio documento, o que não
funciona via `file://`):

```bash
python3 -m http.server 8000
# abra http://localhost:8000/
```

Em runtime o navegador também busca: React/ReactDOM (`unpkg.com`), a fonte
Montserrat (Google Fonts) e imagens de exemplo (`images.unsplash.com`,
`randomuser.me`). É necessário acesso à internet.

## Publicação

Site 100% estático — publique a pasta em qualquer host estático (HostGator,
Hostinger, Netlify, Vercel, GitHub Pages, etc.). Nenhum build é necessário.
O deploy via cPanel Git Version Control usa o `.cpanel.yml` da raiz.

## Observações da importação

Os **6 arquivos de vídeo** do design ultrapassam o limite de 256 KB por
arquivo do importador e **não puderam ser trazidos**. As referências foram
mantidas no código, então basta copiar os arquivos originais para as pastas
indicadas que os vídeos passam a funcionar — **nenhuma alteração de código é
necessária**:

| Arquivo a adicionar | Onde é usado |
|---|---|
| `assets/hero-bg-video.mp4` | vídeo de fundo do Hero (decorativo, ~5% opacidade) |
| `assets/intro/trafego.webm` | seção INTRO (scroll FX) — Tráfego |
| `assets/intro/ia.mp4` | seção INTRO — IA de pré-atendimento |
| `assets/intro/crm.webm` | seção INTRO — CRM |
| `assets/intro/comercial.webm` | seção INTRO — Comercial |
| `assets/intro/site.webm` | seção INTRO — Site/Landing |

Enquanto os vídeos não são adicionados, o site **funciona normalmente**: a
seção INTRO exibe as imagens de fundo (Unsplash) e o Hero exibe o gradiente —
os `<video>` sem arquivo apenas não aparecem (sem ícone de imagem quebrada).
No console haverá 6 avisos `404` até que os arquivos sejam adicionados.

Todas as imagens foram importadas normalmente, incluindo a foto real e
otimizada da timeline (`assets/jornada/2026-opt.webp`).
