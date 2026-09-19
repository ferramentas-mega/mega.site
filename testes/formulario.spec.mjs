import { test, expect } from '@playwright/test';

/**
 * O formulário do popup, contra o `index.html` que vai para o ar.
 *
 * O que estes testes protegem, e o motivo de cada um existir:
 *
 *  - **Confirmação vem do servidor.** A versão anterior fechava o modal no
 *    instante do clique, o que dizia "pronto" antes de qualquer resposta. Um
 *    envio recusado ficava indistinguível de um aceito.
 *  - **A chave de idempotência sobrevive à falha.** É ela que impede que uma
 *    segunda tentativa vire um segundo lead. Se ela for regerada a cada clique,
 *    a base infla e ninguém percebe.
 *  - **O redirect do WhatsApp continua saindo do clique.** Movê-lo para depois
 *    da resposta faria o bloqueador de pop-up barrar a aba — e o funil inteiro
 *    depende dessa aba abrir.
 *
 * Nenhuma requisição sai da máquina: painel, Apps Script e WhatsApp são
 * interceptados. O que se testa é o comportamento da página, não a rede.
 */

const PAINEL = '**/api/forms/**';

/** Intercepta os três destinos externos e devolve o que o painel responderia. */
async function preparar(page, respostaDoPainel) {
  const envios = [];
  // No CONTEXTO, não na página: o WhatsApp abre numa aba nova, e uma rota
  // registrada só na página original não a alcança — a aba tentaria sair para
  // a internet de verdade e terminaria numa tela de erro do navegador.
  const ctx = page.context();
  await ctx.route(PAINEL, async (rota) => {
    envios.push(new URLSearchParams(rota.request().postData() ?? ''));
    await rota.fulfill(respostaDoPainel);
  });
  await ctx.route('**/script.google.com/**', (r) => r.fulfill({ status: 200, body: '' }));
  await ctx.route('**/app.johnyweb.com/t.js', (r) => r.fulfill({ status: 200, body: '' }));
  await ctx.route('**/api.whatsapp.com/**', (r) =>
    r.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: 'whatsapp' }));
  return envios;
}

const ACEITO = {
  status: 201, contentType: 'application/json',
  body: JSON.stringify({ ok: true, duplicada: false, submissao: 'sub_1' }),
};
const RECUSADO = {
  status: 422, contentType: 'application/json',
  body: JSON.stringify({ ok: false, erro: 'Dados inválidos.' }),
};

/** Abre a página e espera a hidratação — antes dela o modal não existe. */
async function abrirSite(page) {
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('[data-track-id="cta-hero"]')).toBeVisible();
}

function popup(page) {
  return page.locator('form').filter({ has: page.locator('input[type=tel]') }).first();
}

async function abrirPopup(page, cta = 'cta-hero') {
  await page.locator(`[data-track-id="${cta}"]`).first().click();
  const form = popup(page);
  await expect(form).toBeVisible();
  return form;
}

/**
 * Fecha pelo botão da própria tela, e espera o modal sumir de verdade.
 *
 * O overlay do modal cobre a página inteira enquanto some. Seguir para o
 * próximo CTA sem esperar faz o clique cair no overlay, não no botão — a falha
 * é do teste, e o sintoma (“intercepts pointer events”) não diz isso.
 */
async function fecharPopup(page) {
  await page.getByLabel('Fechar').click();
  await expect(popup(page)).toBeHidden();
}

async function preencher(form, { nome = 'Joana Teste', email = 'joana@exemplo.com.br', whats = '48991006505' } = {}) {
  await form.locator('input[type=text]').fill(nome);
  await form.locator('input[type=email]').fill(email);
  await form.locator('input[type=tel]').fill(whats);
}

test.describe('instalação do rastreamento', () => {
  test('a tag do coletor aparece uma vez só', async ({ page }) => {
    await abrirSite(page);
    const tags = page.locator('script[src*="app.johnyweb.com/t.js"]');
    await expect(tags).toHaveCount(1);
    await expect(tags).toHaveAttribute('data-site', 'sit_038a2d476f83');
  });

  test('os CTAs estão marcados com identificador e posição', async ({ page }) => {
    await abrirSite(page);
    const marcados = page.locator('[data-track-id]');
    await expect(marcados).toHaveCount(7);
    for (const el of await marcados.all()) {
      expect(await el.getAttribute('data-track-id')).toBeTruthy();
      expect(await el.getAttribute('data-track-pos')).toBeTruthy();
    }
  });
});

test.describe('formulário do popup', () => {
  test('tem os três campos e nenhum campo de mensagem', async ({ page }) => {
    await abrirSite(page);
    const form = await abrirPopup(page);
    await expect(form.locator('input:not([type=hidden])')).toHaveCount(3);
    await expect(page.locator('textarea')).toHaveCount(0);
  });

  test('não envia nada sem nome e WhatsApp', async ({ page }) => {
    await abrirSite(page);
    const envios = await preparar(page, ACEITO);
    const form = await abrirPopup(page);
    await form.locator('button[type=submit]').click();
    await expect(page.getByText(/preencha seu nome e WhatsApp/i)).toBeVisible();
    expect(envios).toHaveLength(0);
  });

  test('envio aceito: confirma, limpa os campos e abre o WhatsApp', async ({ page, context }) => {
    await abrirSite(page);
    const envios = await preparar(page, ACEITO);
    const form = await abrirPopup(page);
    await preencher(form);

    // A aba abre de forma assíncrona, e no celular emulado ela demora mais que
    // a confirmação na tela. Esperar pelo evento — em vez de checar um sinal
    // logo depois do clique — é o que torna o teste determinístico.
    const abaDoWhats = context.waitForEvent('page', { timeout: 15_000 });
    await form.locator('button[type=submit]').click();

    await expect(page.getByText('Recebemos seu contato.')).toBeVisible();
    expect(envios).toHaveLength(1);
    expect(envios[0].get('nome')).toBe('Joana Teste');
    expect(envios[0].get('telefone')).toBe('48991006505');
    expect(envios[0].get('formulario')).toBe('Formulário Principal');
    expect(envios[0].has('mensagem')).toBe(false);
    // A confirmação só faz sentido se o modal continuar à vista.
    await expect(form).toBeVisible();
    await expect(form.locator('input[type=text]')).toHaveValue('');
    const aba = await abaDoWhats;
    await aba.waitForLoadState('domcontentloaded');
    expect(aba.url()).toContain('api.whatsapp.com/send');
    expect(aba.url()).toContain('phone=5548991006505');
  });

  test('envio recusado: mostra o motivo e preserva o que foi digitado', async ({ page }) => {
    await abrirSite(page);
    await preparar(page, RECUSADO);
    const form = await abrirPopup(page);
    await preencher(form);
    await form.locator('button[type=submit]').click();

    await expect(page.getByText(/Dados inválidos\. Tente novamente\./)).toBeVisible();
    await expect(form.locator('input[type=text]')).toHaveValue('Joana Teste');
    await expect(form.locator('button[type=submit]')).toBeEnabled();
  });

  test('a chave de idempotência é a mesma nas tentativas do mesmo preenchimento', async ({ page }) => {
    await abrirSite(page);
    const envios = await preparar(page, RECUSADO);
    const form = await abrirPopup(page);
    await preencher(form);

    await form.locator('button[type=submit]').click();
    await expect(page.getByText(/Tente novamente/)).toBeVisible();
    const naPrimeira = envios.length;

    // Segunda tentativa, mesmo preenchimento: o painel precisa reconhecer que é
    // o MESMO contato, não um lead novo.
    await page.waitForTimeout(4200); // a guarda contra clique duplo dura 4s
    await form.locator('button[type=submit]').click();
    await expect.poll(() => envios.length).toBeGreaterThan(naPrimeira);

    const chaves = new Set(envios.map((e) => e.get('idempotencia')));
    expect(chaves.size).toBe(1);
  });

  test('sem o coletor na página, repete uma vez com identificador efêmero', async ({ page }) => {
    await abrirSite(page);
    const envios = await preparar(page, RECUSADO);
    const form = await abrirPopup(page);
    await preencher(form);
    await form.locator('button[type=submit]').click();
    await expect(page.getByText(/Tente novamente/)).toBeVisible();

    // Primeiro vai vazio, como a documentação do painel manda; a repetição só
    // acontece porque o servidor recusou.
    expect(envios).toHaveLength(2);
    expect(envios[0].get('visitante')).toBe('');
    expect(envios[1].get('visitante')).toMatch(/^anon-[0-9a-f]{16}$/);
    expect(envios[0].get('idempotencia')).toBe(envios[1].get('idempotencia'));
  });

  test('o popup abre por qualquer um dos CTAs de formulário', async ({ page }) => {
    await abrirSite(page);
    for (const cta of ['cta-hero', 'cta-escala-comprovada', 'cta-fab-atendente']) {
      const form = await abrirPopup(page, cta);
      await expect(form).toBeVisible();
      await fecharPopup(page);
    }
  });
});
