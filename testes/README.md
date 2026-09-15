# Testes de navegador

Testam o `index.html` **como ele é** — o mesmo arquivo que o deploy publica.
Nada aqui vai para o servidor: o `.cpanel.yml` copia `index.html`, `assets/` e os
arquivos soltos da raiz, e esta pasta não entra em nenhum desses padrões.

## Rodar

```bash
cd testes
npm install
npx playwright install chromium   # só na primeira vez, se o Chromium não existir
npm test
```

O servidor sobe sozinho na porta 8901 e cai no fim.

- `npm test` — as duas plataformas (celular e computador)
- `npx playwright test --project=celular` — só uma
- `npx playwright test -g "idempotência"` — um teste
- `npm run test:ui` — modo interativo

## Por que existe um servidor próprio

O `support.js` — runtime do Claude Design — baixa React, ReactDOM e Babel do
unpkg.com em tempo de execução. Sem internet, nada hidrata: a página fica no HTML
estático e o formulário do popup não chega a existir. O `servidor.mjs` entrega os
três arquivos a partir do `node_modules` e desliga a verificação de integridade
(que é calculada sobre o arquivo do unpkg e falharia noutro caminho).

O `index.html` é servido byte a byte, sem reescrita. Se o teste passa, passa
contra o arquivo que vai para o ar.

## O que está coberto

| Teste | Protege contra |
|---|---|
| Tag do coletor aparece uma vez | Instalação duplicada, que dobra visitas e cliques |
| Os 7 CTAs têm `data-track-id` e `data-track-pos` | Perder a identificação dos botões no relatório |
| Três campos, sem campo de mensagem | Regressão do formulário |
| Sem nome e WhatsApp não envia nada | Lead vazio chegando ao painel |
| Envio aceito confirma, limpa e abre o WhatsApp | Fechar o modal fingindo sucesso antes da resposta |
| Envio recusado mostra o motivo e preserva o texto | Perder o que a pessoa digitou numa falha de rede |
| Mesma chave de idempotência entre tentativas | Uma segunda tentativa virar um segundo lead |
| Sem coletor, repete uma vez com id efêmero | 422 silencioso para quem bloqueia analytics |
| O popup abre pelos três CTAs de formulário | CTA que não abre nada |

Painel, Apps Script e WhatsApp são interceptados — nenhuma requisição sai da
máquina, e nenhum lead de teste chega ao painel de verdade.

## Duas armadilhas já encontradas aqui

**Interceptar no contexto, não na página.** O WhatsApp abre numa aba nova. Uma
rota registrada só na página original não a alcança, a aba tenta sair para a
internet e termina numa tela de erro do navegador — o teste falha por um motivo
que não tem nada a ver com o site.

**`reducedMotion: 'reduce'` na configuração.** O botão flutuante anima sem parar,
e o Playwright espera o elemento ficar estável antes de clicar. Com animação
infinita ele nunca fica, e o clique estoura o tempo com a mensagem enganosa
`intercepts pointer events`. O site já respeita `prefers-reduced-motion`, então
pedir isso usa um caminho que ele suporta de verdade, em vez de forçar cliques.
