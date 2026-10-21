import { pageArtigo } from '../layouts.mjs';

export function page() {
  return pageArtigo({
    url: '/conteudos/quanto-investir-google-ads-advogados/',
    title: 'Quanto investir em Google Ads para um escritório?',
    categoria: 'Tráfego pago',
    h1: 'Quanto investir em Google Ads para um escritório de advocacia?',
    metaTitle: 'Quanto investir em Google Ads para advogados? | Mega ADS',
    metaDescription: 'Como pensar o orçamento de Google Ads para um escritório de advocacia: fatores que mudam o valor e por que não existe um número único certo.',
    dataIso: '2026-10-21',
    dataLegivel: '21 de outubro de 2026',
    corpo: `
<p><strong>Resposta direta:</strong> não existe um valor único correto — mas uma referência prática para começar a testar é a partir de cerca de R$ 1.500 por mês em mídia, pagos diretamente na plataforma de anúncios. O valor ideal para o seu escritório depende de três fatores que mudam o cálculo bastante: a região, a área de atuação e o ticket médio do caso.</p>

<h2>Por que não existe um número fixo</h2>
<p>O custo por clique em Google Ads varia por concorrência local e por área de atuação. Uma busca por "advogado trabalhista" numa capital concorrida custa mais por clique do que a mesma busca numa cidade menor. Isso significa que dois escritórios, com o mesmo orçamento, podem gerar volumes de leads bem diferentes dependendo de onde estão.</p>

<h2>Os três fatores que mais pesam</h2>
<h3>1. Região</h3>
<p>Quanto maior e mais concorrida a cidade, maior tende a ser o custo por clique — e maior também o volume de busca disponível.</p>
<h3>2. Área de atuação</h3>
<p>Áreas com mais escritórios concorrendo por anúncio (geralmente trabalhista e previdenciário, pelo volume de busca) tendem a ter clique mais caro do que áreas menos disputadas.</p>
<h3>3. Ticket médio do caso</h3>
<p>Um escritório que trabalha com causas de ticket médio mais alto pode sustentar um custo por lead mais alto e ainda assim ter retorno positivo — o cálculo não é sobre "gastar pouco", é sobre quanto um contrato fechado vale para o escritório.</p>

<h2>Como pensar o primeiro orçamento</h2>
<p>Hipoteticamente: um escritório trabalhista numa cidade de porte médio, começando do zero, costuma usar o primeiro mês para testar palavras-chave e entender o custo por lead real da sua região — e só então decide se escala o investimento. Esse teste inicial é o que o diagnóstico do <a href="/metodo/" style="color:var(--blue-2)">método</a> faz antes de qualquer campanha ir ao ar.</p>

<h2>O que não fazer</h2>
<p>Definir o orçamento só pela quantidade de leads desejada, sem considerar a taxa de fechamento esperada, costuma frustrar: 50 leads por mês que não convertem valem menos do que 15 leads bem qualificados que o time consegue atender e fechar.</p>

<blockquote>O orçamento certo não é o maior possível — é o que o escritório consegue atender bem e converter em contrato.</blockquote>`,
    faq: [
      { q: 'R$ 1.500 por mês é suficiente para qualquer área?', a: 'É uma referência de entrada, não uma garantia. Em regiões ou áreas mais concorridas, pode gerar poucos leads; em outras, pode já trazer volume relevante. O diagnóstico inicial ajusta essa expectativa ao caso real.' },
      { q: 'O investimento em mídia é pago para a agência ou para o Google?', a: 'Diretamente para a plataforma de anúncios (Google), não é receita da agência que gerencia a campanha.' },
    ],
    relacionados: [
      { url: '/servicos/google-ads-para-advogados/', titulo: 'Google Ads para advogados' },
      { url: '/conteudos/custo-por-lead-e-cliente-advocacia/', titulo: 'Como medir custo por lead e por cliente' },
    ],
  });
}
