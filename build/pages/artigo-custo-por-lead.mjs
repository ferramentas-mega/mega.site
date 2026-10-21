import { pageArtigo } from '../layouts.mjs';

export function page() {
  return pageArtigo({
    url: '/conteudos/custo-por-lead-e-cliente-advocacia/',
    title: 'Como medir o custo por lead e por cliente no escritório',
    categoria: 'Mensuração',
    h1: 'Como medir o custo por lead e por cliente no escritório',
    metaTitle: 'Custo por lead e por contrato na advocacia: como calcular | Mega ADS',
    metaDescription: 'A diferença entre custo por lead e custo por contrato assinado, e por que o segundo indicador importa mais para decidir se vale investir em anúncios.',
    dataIso: '2026-10-21',
    dataLegivel: '21 de outubro de 2026',
    corpo: `
<p><strong>Resposta direta:</strong> custo por lead é o investimento em mídia dividido pelo número de contatos recebidos; custo por contrato é o mesmo investimento dividido pelos contratos efetivamente assinados. O segundo é o que de fato diz se vale a pena continuar investindo.</p>

<h2>Por que o custo por lead sozinho engana</h2>
<p>Dois escritórios podem ter o mesmo custo por lead e resultados completamente diferentes, se um deles fecha 30% dos leads recebidos e o outro fecha 5%. O custo por lead mede a eficiência da campanha em gerar contato; não mede a eficiência do escritório em transformar esse contato em cliente.</p>

<h3>Como calcular</h3>
<p><strong>Custo por lead</strong> = investimento total em mídia no período ÷ número de leads recebidos no mesmo período.<br>
<strong>Custo por contrato</strong> = investimento total em mídia no período ÷ número de contratos assinados no mesmo período.</p>

<h2>Um exemplo hipotético</h2>
<p>Imagine um escritório que investiu R$ 3.000 em um mês e recebeu 40 leads — custo por lead de R$ 75. Desses 40, 8 viraram contrato assinado — custo por contrato de R$ 375. Se o ticket médio dos casos atendidos for superior a esse valor, o investimento se paga; se for menor, não compensa continuar no mesmo ritmo sem revisar o funil. (Os números deste parágrafo são ilustrativos, não uma média real de mercado.)</p>

<h2>O que fazer quando o custo por contrato está alto</h2>
<p>Antes de cortar o investimento em mídia, vale checar onde o funil está perdendo: se o custo por lead está baixo mas a conversão em contrato é que está ruim, o problema provavelmente não é a campanha — é o atendimento, a velocidade de resposta ou a qualificação dos leads recebidos.</p>

<h2>Por que acompanhar os dois indicadores juntos</h2>
<p>Olhar só para volume de leads incentiva a campanha a trazer o máximo de contatos possível, mesmo os pouco qualificados. Olhar só para custo por contrato, sem volume mínimo de leads, pode esconder uma amostra pequena demais para ser confiável. Os dois juntos — e o acompanhamento mensal — é o que dá uma leitura honesta do resultado.</p>`,
    faq: [
      { q: 'Clique no WhatsApp conta como lead?', a: 'Depende de como o funil é definido — normalmente clique no WhatsApp é medido como intenção de contato, um indicador à parte; vira lead quando a conversa efetivamente acontece e os dados da pessoa são registrados.' },
      { q: 'Com quantos leads já dá para calcular o custo por contrato com confiança?', a: 'Quanto menor a amostra, menos confiável é a taxa de conversão calculada — um mês com poucos leads pode mostrar uma taxa de fechamento que não se repete no mês seguinte. O acompanhamento mensal contínuo é o que estabiliza essa leitura.' },
    ],
    relacionados: [
      { url: '/resultados/', titulo: 'Como medimos resultado' },
      { url: '/servicos/estruturacao-comercial-para-advogados/', titulo: 'Estruturação comercial para advogados' },
    ],
  });
}
