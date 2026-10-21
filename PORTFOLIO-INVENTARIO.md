# Inventário de projetos do portfólio — `/portfolio/`

Lista recebida do responsável pelo projeto. **Nenhum destes 32 links pôde ser
verificado, carregado ou capturado nesta sessão.**

## Por que está tudo com status "bloqueado"

O proxy de saída desta sessão nega conexão (HTTP 403 no `CONNECT`, por
política — não é instabilidade de rede) para domínios externos que não estão
na lista liberada do ambiente. Isso não é específico destes 32 links: a mesma
barreira apareceu a sessão inteira para `megaads.com.br`, o painel em
`app.johnyweb.com`, `unpkg.com`, `web.archive.org` e `images.unsplash.com`.

Testado neste caso: `adv.finkleradvocacia.com` e `direitofamilia.com`, os dois
com a mesma rejeição (`gateway answered 403 to CONNECT`). Não testei os
outros 30 individualmente — o padrão já é consistente o bastante para não
gastar tempo repetindo o mesmo resultado 30 vezes.

**O que isso significa na prática:** eu não vi nenhuma dessas páginas. Não
sei se estão no ar, se mudaram de layout, se pertencem hoje a quem as
contratou originalmente, nem qual é o nome real de cada escritório — a
página 6 do briefing pede exatamente essa cautela ("se um domínio foi
modificado, use uma captura da versão efetivamente produzida pela Mega"),
e eu não tenho como checar isso daqui. Por isso **não inventei nome de
escritório, nem miniatura, nem descrição do projeto** — só registrei a URL e
a categoria, exatamente como vieram.

## Como desbloquear

Uma das três, na ordem mais rápida para mais trabalhosa:
1. **Enviar os prints/capturas direto no chat** — eu recebo arquivo de imagem
   sem passar pelo proxy de rede, então isso funciona mesmo com o bloqueio.
2. **Rodar esta mesma tarefa num ambiente/sessão cuja política de rede
   permita esses domínios** (um Claude Code local, por exemplo).
3. Confirmar que a barreira é intencional e seguir sem capturas reais — nesse
   caso o portfólio teria que usar outro formato (descrição textual do
   projeto, sem imagem), o que é uma decisão sua, não minha.

## Inventário (schema da seção 10 do briefing)

| URL fornecida | Categoria(s) | Nome confirmado | Disponibilidade | Captura disponível | Status de inclusão | Pendência |
|---|---|---|---|---|---|---|
| https://adv.finkleradvocacia.com/ | Trabalhista | não | não verificada | não | bloqueado | conexão negada pelo proxy desta sessão |
| https://adv.mnsociedadedeadvogados.com.br/ | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://crisalencaradvocacia.com/advogado-trabalhista/ | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://lp.rosangelalabreadvogada.com.br/trabalhista-adv | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://adv.ataadvogados.com.br/ | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://adv.fpereiraadv.com/ | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://adv.commenaleadvogados.com.br/ | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://azevedoeazevedoadvogados.com | Trabalhista | não | não verificada | não | bloqueado | idem |
| https://hevelemborriero.com.br/ | Trabalhista | não | não verificada | não | bloqueado | confirmado via UTM da URL, segundo o remetente — não verificado por mim |
| https://camposecardosoadv.com.br/ | Criminal | não | não verificada | não | bloqueado | conexão negada pelo proxy desta sessão |
| https://romanziniepinto.com/ | Criminal | não | não verificada | não | bloqueado | idem |
| https://adv.fortunaebacelar.com.br/ | Criminal | não | não verificada | não | bloqueado | idem |
| https://rodrigoumezaki.adv.br/desbloqueio/ | Bancário e consumidor | não | não verificada | não | bloqueado | idem |
| https://tavareswanderleyadvocacia.com.br/desbloqueio-conta-bancaria/ | Bancário e consumidor | não | não verificada | não | bloqueado | idem |
| https://isabelagabry.adv.br/dbc/ | Bancário e consumidor | não | não verificada | não | bloqueado | idem |
| https://renataneves.adv.br/ | Bancário e consumidor | não | não verificada | não | bloqueado | idem |
| https://souzabarencoadvogados.com/ | Bancário e consumidor | não | não verificada | não | bloqueado | idem |
| https://direitobancariomattosmarcondes.megaadvocacia.com/ | Bancário e consumidor | não | não verificada | não | bloqueado | idem |
| https://hipolitoemourao.com.br/diagnostico-consumidor/ | Bancário e consumidor | não | não verificada | não | bloqueado | Consumidor + Bancário, segundo o remetente |
| https://mpcadvocacia.com/ | Bancário e consumidor | não | não verificada | não | bloqueado | Fraude bancária / PIX, segundo o remetente |
| https://heliovenancioadv.com/ | Saúde | não | não verificada | não | bloqueado | conexão negada pelo proxy desta sessão |
| https://fsgadvogados.com.br | Saúde | não | não verificada | não | bloqueado | idem |
| https://sbadvocaciaespecializada.com.br/ | Saúde | não | não verificada | não | bloqueado | idem |
| https://adv.ishiiadvogados.com/advogado-familia/ | Família e sucessões | não | não verificada | não | bloqueado | idem |
| https://direitofamilia.com/ | Família e sucessões | não | não verificada | não | bloqueado | testado nesta sessão — bloqueado |
| https://direitofamliamattosmarcondes.megaadvocacia.com/ | Família e sucessões | não | não verificada | não | bloqueado | conexão negada pelo proxy desta sessão |
| https://adv.cairesvianaadv.com.br/ | Família e sucessões | não | não verificada | não | bloqueado | idem |
| https://lp.pulino.com.br/ | Família e sucessões | não | não verificada | não | bloqueado | Inventário / Sucessões, segundo o remetente |
| https://camposecardosoadv.com.br/advogado-previdenciario | Previdenciário | não | não verificada | não | bloqueado | mesmo domínio-base do item de Criminal acima |
| https://thomazellaebottaciniadvogados.com/advogado-previdenciario/ | Previdenciário | não | não verificada | não | bloqueado | conexão negada pelo proxy desta sessão |
| https://adv.ingrhidhideassisadvocacia.com.br/ | Trânsito | não | não verificada | não | bloqueado | idem |
| https://cwbmultas.com.br/ | Trânsito | não | não verificada | não | bloqueado | idem |
| https://lp.jaimeribeiro.adv.br/advogado-empresarial/ | Empresarial | não | não verificada | não | bloqueado | idem |
| https://lacerdagomes.com.br/advogado-imobiliario/ | Imobiliário | não | não verificada | não | bloqueado | idem |
| https://gomeseamaro.com/ | Tributário | não | não verificada | não | bloqueado | idem |
| https://bianchinisilveira.com.br/advogado-aereo/ | Aéreo | não | não verificada | não | bloqueado | Consumidor, segundo o remetente |
| https://adv.ishiiadvogados.com/ | Marítimo e aduaneiro | não | não verificada | não | bloqueado | mesmo domínio-base do item de Família acima |
| https://rochacoutinhoelopes.com.br/ | Transportador | não | não verificada | não | bloqueado | Bloqueio Buonny/Pancary, segundo o remetente |
| https://advmiranda.com.br/ | Múltiplas áreas | não | não verificada | não | bloqueado | Trabalhista, Previdenciário, Criminal e Imobiliário, segundo o remetente |

**Total: 32 URLs, 0 verificadas, 0 capturadas, 0 publicadas.**

## Observações ao transcrever a lista

- `camposecardosoadv.com.br` e `adv.ishiiadvogados.com` aparecem duas vezes
  cada (uma vez na categoria principal, outra numa página interna de área
  diferente do mesmo domínio-base) — mantive como estão na mensagem
  original, mas pode ser o mesmo projeto contando duas vezes no portfólio
  por engano. Vale confirmar antes de publicar.
- As anotações "(confirmado via UTM...)", "(Consumidor + Bancário)",
  "(Fraude bancária / PIX)", "(Inventário / Sucessões)", "(Bloqueio
  Buonny/Pancary)" e a descrição de `advmiranda.com.br` são citações
  diretas do que o remetente escreveu, não verificação minha.
