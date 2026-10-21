# Pendências — expansão institucional da Mega ADS

Registro interno. Nada aqui é exposto ao público — é o que falta confirmar,
corrigir ou decidir antes (ou depois) da publicação. Organizado por
prioridade de risco, não por ordem de criação.

---

## 1. Divergência de WhatsApp entre o site em produção e o projeto enviado

- **No ar hoje** (`index.html`, testado e validado): `5548991006505`.
- **No ZIP enviado para esta expansão** (`site-final/index.html` e
  `servicos.html`, README incluso): `55 91 8348-6435`.

Mantive o número **em produção** (`5548991006505`) em todas as páginas novas,
porque é o único dos dois que está testado, validado e recebendo tráfego
real agora — trocar silenciosamente poderia desviar leads reais para um
número que não sei se ainda está ativo. **Preciso que você confirme qual é o
número correto hoje** antes do deploy. Se for o do ZIP, é uma troca de uma
constante só (`SITE.whatsapp` em `build/nav.mjs`, mais o número hardcoded em
`index.html`), não um retrabalho.

**Status:** aguardando confirmação. Não publiquei com o número do ZIP sem
perguntar.

---

## 2. Afirmações não verificadas já presentes na home em produção

Encontradas na auditoria inicial, **não alteradas nesta rodada** — são
conteúdo já publicado, testado e (presumivelmente) aprovado antes, e trocar
promessa comercial ao vivo é uma decisão que cabe a você, não a mim decidir
sozinho no meio de uma expansão de 29 páginas novas. Registro cada uma no
formato pedido.

| Alegação | Origem | Período | Definição do indicador | Evidência necessária | Status |
|---|---|---|---|---|---|
| "A Maior Agência de Marketing Jurídico do Brasil" | Home, H1 e seção de jornada | atual | Nenhuma — superlativo sem métrica associada | Nenhuma evidência objetiva prova "maior" sem um ranking setorial independente | não comprovado |
| "+3.000 escritórios atendidos" (aparece 6×) | Home | atual, sem corte temporal | Não definido: atendido = contrato ativo? já teve contrato algum dia? | Definição do indicador + contagem na base de clientes | não comprovado |
| "+3.500 Escritórios escalados" (painel de investimento) | Home, seção "Escala comprovada" | atual | Mesma ambiguidade — e diverge do número acima (+3.000) | Mesma evidência, e decidir qual dos dois números é o real | **inconsistência interna**: dois números diferentes para o que parece ser a mesma métrica |
| "10 mil campanhas no nicho jurídico" vs "+4.500 Campanhas ativas" | Home (FAQ) vs Home (painel) | atual | "No nicho" (total histórico?) vs "ativas" (hoje?) — podem ser métricas diferentes, mas o texto não deixa claro | Definição do indicador | ambíguo, não comprovado |
| Gráfico comparativo "98% Mega ADS vs. 41% agência genérica vs. 33% anúncio sem gestão vs. 24% faça você mesmo" | Home, seção "Resultado comprovado" | atual | Taxa de conversão — mas conversão de quê para quê não é definido, e não há fonte para os números dos concorrentes | Metodologia do estudo comparativo, fonte dos números de terceiros | **não comprovado — maior risco da lista**: é um comparativo direto com concorrência, sem fonte |
| "93% Taxa de sucesso" | Home, painel de investimento | atual | Não definido o que conta como "sucesso" | Definição do indicador | não comprovado |
| "R$ 8M+ Faturado p/ clientes" / "mais de R$ 10 milhões em anúncios" | Home | atual | Não definido o período nem a base de clientes | Dado financeiro agregado com fonte | não comprovado |
| "Garantia do Dono" (90 dias, CEO entra pessoalmente) + "Garantia de Reposição de contratos" | Home, seção dedicada + FAQ | atual | É um programa nomeado e estruturado — ao contrário dos números acima, parece uma política comercial real, não um dado inventado | Documento de termos e condições da garantia, para publicar com precisão (prazo, o que conta como "meta", exceções) | **provavelmente real, mas sem documento formal publicável** — não removi, só não consigo documentar os termos exatos |
| Depoimentos com foto de "Ana" (atendente) e dos clientes no carrossel, via `randomuser.me` | Home | atual | Fotos de banco de pessoas aleatórias, apresentadas como se fossem pessoas reais da Mega ADS ou clientes reais | Fotos reais e autorização de uso de cada pessoa (equipe) ou dos clientes (depoimentos) | **não comprovado — risco de imagem de pessoa real sendo usada sem relação com a empresa** |

**O que eu fiz:** só corrigi a inconsistência aritmética "7 anos" → "6 anos"
(fundação em 2020 citada na própria linha do tempo da home; 2020 a 2026 são
6 anos, não 7) — é uma correção de matemática interna, não uma remoção de
alegação comercial, por isso tratei como segura para editar sem te
perguntar antes.

**O que eu NÃO fiz:** não apaguei, não reescrevi e não suavizei nenhuma das
alegações da tabela acima na home em produção. Elas continuam exatamente
como estavam. Decidir o que fazer com cada uma — manter com evidência,
reescrever sem o número, ou remover — é uma decisão sua.

**Nas páginas novas que eu escrevi**, nenhuma dessas alegações foi reutilizada.

---

## 3. Alegações do site antigo (mgaads.com) — mencionadas na sua própria mensagem, nunca verificadas por mim

Você me passou estes números ao descrever o site antigo. Eu não acessei o
site antigo (tentativa de acesso ao `web.archive.org` falhou — ver item 4) —
então estou registrando exatamente o que você relatou, como alegação de
origem histórica, não como fato comprovado.

| Alegação | Origem | Período | Definição do indicador | Evidência necessária | Status |
|---|---|---|---|---|---|
| "Mais de 300 escritórios" | mgaads.com (relatado por você) | não especificado | não especificado | Acesso ao conteúdo original + definição do indicador | não verificado por mim |
| "Mais de 500 escritórios" | mgaads.com (relatado por você) | não especificado | não especificado — diverge do item acima no próprio site antigo, segundo seu relato | idem | não verificado; inconsistência já relatada por você mesmo |
| "+R$ 1 milhão de faturamento interno" | mgaads.com (relatado por você) | não especificado | "faturamento interno" não definido | idem | não verificado |
| "+R$ 8 milhões em contratos para clientes" | mgaads.com (relatado por você) | não especificado | "contratos para clientes" não definido | idem | não verificado |
| "R$ 477 mil em contratos em 4 meses" | mgaads.com (relatado por você) | 4 meses, datas não especificadas | mais específico que os demais, mas sem fonte | idem | não verificado |

**Nenhum desses números entrou em nenhuma página nova.** Nem somados, nem
combinados com os números do site atual — por instrução sua explícita e
porque misturar dado de períodos diferentes como se fosse um número só
seria exatamente o erro que você pediu para evitar.

---

## 4. Pesquisa histórica no site antigo — bloqueada tecnicamente, não teve resultado

Tentei acessar `https://web.archive.org/web/20250320021610/https://mgaads.com/`
(e variações para `/sobre-nos/` e `/portfolio/`) para recuperar história,
avaliações e portfólio reais. **Todas as tentativas falharam**: o proxy de
saída desta sessão nega conexão, por política, para `web.archive.org` —
mesmo padrão de bloqueio visto a sessão inteira para outros domínios
externos (ver item 6, que é o mesmo problema afetando o portfólio novo).

**Não tentei o site ao vivo** (`mgaads.com` sem ser via Wayback), porque
você pediu especificamente a captura arquivada — e, pelo que você relatou,
pode haver conteúdo contaminado (textos em alemão, links de cassino) que
não faz sentido buscar na versão atual sem necessidade.

**Resultado:** nenhuma história, equipe, avaliação ou portfólio do site
antigo foi recuperado ou usado em `/sobre/` ou `/resultados/`. As duas
páginas usam só o que já está confirmado no site atual (fundação em 2020,
pela linha do tempo já publicada na home).

**Para desbloquear:** rodar a mesma tarefa num ambiente com acesso de rede
mais amplo, ou colar aqui o HTML/texto da página arquivada para eu analisar
com a mesma triagem de conteúdo não confiável.

---

## 5. Avaliações do Google / Trustindex (Place ID citado: `ChIJC7nYDfaJpJIRv7-pwZBDpYo`)

Não tentei acessar o Google Maps para verificar esse perfil — pelo mesmo
motivo do item 4 (sem rede) e por um motivo adicional: mesmo que
conseguisse ler as avaliações, **republicar nome e comentário de uma pessoa
real exige mais cuidado do que eu copiar o texto** — são dados pessoais de
terceiros (os avaliadores), e a página de política de privacidade que
escrevi já assume que o site só usa dado com consentimento claro para o
fim declarado. Usar uma avaliação pública do Google Maps num novo contexto
de marketing é uma linha que prefiro deixar para sua decisão.

**O que ficou pronto:** nenhum depoimento foi publicado em `/resultados/`.
A página explica a metodologia de acompanhamento de resultado e diz
explicitamente que não há projeto com autorização de divulicação publicada
ainda.

**Status:** aguardando decisão seguida de verificação manual do perfil.

---

## 6. Inventário de projetos do portfólio — recebido, mas tecnicamente bloqueado

As 32 URLs de projetos (ver `PORTFOLIO-INVENTARIO.md`, arquivo dedicado por
ser extenso) foram recebidas, com categoria por área jurídica. **Nenhuma
pôde ser aberta, verificada ou capturada nesta sessão** — mesmo bloqueio de
rede do item 4, confirmado testando 2 dos 32 domínios (os outros 30 não
foram testados individualmente, porque o padrão já está estabelecido).

A página `/portfolio/` está com a estrutura inteira pronta (hero, processo,
entregáveis, FAQ, continuidade para tráfego pago, fluxo de solicitação com
contexto pré-preenchido) e em **rascunho** — fora do menu, do rodapé e do
sitemap — até a galeria ter pelo menos um projeto real.

**Para desbloquear:** enviar os prints/capturas direto no chat (isso não
passa pelo proxy de rede bloqueado), ou rodar num ambiente com acesso mais
amplo.

---

## 7. Outras páginas em rascunho e por quê

| Página | Por quê está em rascunho |
|---|---|
| `/trabalhe-conosco/` | Não há canal definido de recebimento de candidaturas, nem política de tratamento desses dados. Publicar um "trabalhe conosco" sem ninguém monitorando o canal é pior que não ter a página. |
| `/servicos/seo-para-advogados/` | O briefing original condicionou esta página à confirmação de que SEO é oferta comercial atual. `servicos.html` (fonte usada para as demais páginas de serviço) não lista SEO como serviço à parte. Sem essa confirmação, mantive como estrutura pronta e conteúdo mínimo. |
| `/portfolio/` | Ver item 6. |

---

## 8. Dados institucionais ainda sem confirmação

- **`/sobre/`**: nomes, cargos e formação da equipe não foram informados em
  nenhum momento — a página usa fotos já existentes no site (pasta
  `assets/equipe/`) sem atribuir nome a ninguém, e diz isso explicitamente
  no rodapé da página.
- **`/politica-de-privacidade/`**: falta razão social, CNPJ, endereço do
  responsável pelo tratamento de dados, canal formal e prazo de resposta a
  solicitações de titulares, e período de retenção dos dados de formulário.
- **Redes sociais no rodapé**: deixei o espaço reservado, mas vazio — não
  tenho links de Instagram/LinkedIn/etc. confirmados como contas oficiais
  atuais para preencher.
- **`/contato/`**: não publiquei endereço físico, horário comercial nem
  telefone fixo — nenhum dos três foi confirmado.

---

## 9. Verificações técnicas já feitas (para não repetir)

- Confirmado por `ls`: `servicos.html` **não existe** no site em produção
  hoje — logo, **não há redirecionamento a fazer** dessa URL. Não presumi
  isso, verifiquei diretamente.
- 1.730 links internos das 29 páginas novas checados por script — **zero
  quebrados**.
- As 29 páginas novas respondem 200, têm H1 único, título, canonical e
  nenhum resíduo de template (`{{ }}`) visível — testado via Playwright,
  70 verificações, 2 larguras de tela, todas passando.
- 404 real (status HTTP 404, não um redirect disfarçado de 200).
- Nenhuma página em rascunho aparece no menu, no rodapé ou no sitemap —
  testado, não só revisado visualmente.
- `index.html` em produção: FAQ agora também existe como HTML estático
  (via `<noscript>`, com o texto idêntico ao da versão interativa) — porque
  o runtime atual (`createRoot`, não `hydrateRoot`) descarta o HTML inicial
  e remonta tudo via JavaScript, o que deixava o FAQ invisível para quem
  não executa JS. Os 18 testes de navegador do formulário continuam
  passando depois dessa mudança.
