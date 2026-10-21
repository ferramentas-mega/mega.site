import { pageEspecialidade } from '../layouts.mjs';

export function page() {
  return pageEspecialidade({
    url: '/especialidades/marketing-para-advogados-de-familia/',
    title: 'Marketing para advogados de família',
    area: 'família',
    h1: 'Marketing para advogados de família',
    metaTitle: 'Marketing para advogados de direito de família | Mega ADS',
    metaDescription: 'Captação de clientes para escritórios de direito de família: divórcio, guarda e pensão, com a discrição que o assunto exige.',
    lede: 'Divórcio, guarda e pensão são assuntos sensíveis, muitas vezes vividos em um momento emocionalmente difícil. A comunicação precisa transmitir confiança e discrição — não urgência agressiva.',
    contexto: 'Diferente de uma demanda trabalhista com prazo correndo, a decisão de procurar um advogado de família costuma amadurecer por semanas ou meses antes da pessoa agir. A primeira impressão de seriedade e discrição pesa mais do que a velocidade de resposta.',
    desafios: [
      { titulo: 'Discrição acima de urgência', texto: 'Criativos agressivos ou que expõem o tema publicamente (comentários visíveis em redes sociais, por exemplo) afastam esse público, que valoriza privacidade.' },
      { titulo: 'Tom emocional sem sensacionalismo', texto: 'O texto precisa reconhecer o momento da pessoa sem dramatizar a situação, mantendo a sobriedade exigida pela publicidade jurídica.' },
    ],
    demanda: 'As buscas mais comuns envolvem divórcio (consensual e litigioso), guarda de filhos, pensão alimentícia e partilha de bens. Há também busca por acordo extrajudicial, para quem quer evitar processo judicial longo.',
    organizacao: 'A triagem é conduzida com mais cuidado e tempo do que em áreas de alta urgência — o objetivo é dar espaço para a pessoa explicar a situação sem se sentir pressionada a decidir rápido.',
    solucoes: [
      { url: '/servicos/criacao-de-sites-para-advogados/', titulo: 'Criação de sites', texto: 'Presença institucional que transmite seriedade antes do primeiro contato.' },
      { url: '/servicos/google-ads-para-advogados/', titulo: 'Google Ads', texto: 'Para captar busca privada e direta, sem exposição em redes sociais.' },
      { url: '/servicos/estruturacao-comercial-para-advogados/', titulo: 'Estruturação comercial', texto: 'Atendimento no ritmo e com a discrição que o tema pede.' },
    ],
    faq: [
      { q: 'Vocês usam Meta Ads para direito de família?', a: 'Com cautela — como o tema é sensível, o criativo é revisado especificamente para manter discrição, evitando linguagem ou imagens que exponham publicamente a situação de quem está decidindo procurar o escritório.' },
      { q: 'O atendimento inicial já pede detalhes do processo?', a: 'Não — a triagem inicial é propositalmente leve, para não constranger a pessoa a detalhar a situação antes de falar diretamente com o escritório.' },
    ],
  });
}
