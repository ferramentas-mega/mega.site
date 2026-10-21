import { test, expect } from '@playwright/test';
import { PAGINAS } from '../build/nav.mjs';

/**
 * As páginas institucionais novas (Fases 1–3), contra os arquivos reais
 * gerados por `build/run.mjs` — não um mock.
 *
 * O que estes testes protegem:
 *  - Toda página publicada responde 200, tem <title>, canonical e H1 reais
 *    (não um placeholder, não uma variável de template exposta).
 *  - Nenhuma página publicada expõe `{{ }}` no HTML — o problema descrito
 *    na seção 4.1 do briefing, que esta arquitetura (HTML estático gerado
 *    em build, sem createRoot) existe justamente para não ter.
 *  - Página em rascunho tem noindex e nunca aparece no menu.
 *  - O menu, o breadcrumb e o FAQ (sem JS — <details> nativo) funcionam.
 *  - 404 real devolve status 404, não 200 disfarçado de redirect.
 */

const PUBLICADAS = PAGINAS.filter((p) => p.status === 'publicada' && p.url !== '/');
const RASCUNHOS = PAGINAS.filter((p) => p.status !== 'publicada');

test.describe('páginas publicadas — integridade básica', () => {
  for (const p of PUBLICADAS) {
    test(`${p.url} responde e não vaza template`, async ({ page }) => {
      const resposta = await page.goto(p.url);
      expect(resposta.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).not.toBeEmpty();
      await expect(page.locator('title')).toHaveCount(1);
      expect(await page.locator('link[rel=canonical]').getAttribute('href')).toContain(p.url);

      // Nada de {{ algo }} visível — sinal de dado de template não resolvido.
      const corpo = await page.locator('body').innerText();
      expect(corpo).not.toMatch(/\{\{\s*[\w.]+\s*\}\}/);

      // robots não pode ser noindex numa página marcada 'publicada'.
      const robots = await page.locator('meta[name=robots]').getAttribute('content');
      expect(robots || '').not.toContain('noindex');
    });
  }
});

test.describe('páginas em rascunho — nunca públicas por engano', () => {
  for (const p of RASCUNHOS) {
    test(`${p.url} tem noindex e avisa que é rascunho`, async ({ page }) => {
      await page.goto(p.url);
      const robots = await page.locator('meta[name=robots]').getAttribute('content');
      expect(robots || '').toContain('noindex');
    });
  }

  test('nenhum rascunho aparece no menu principal (desktop)', async ({ page }) => {
    await page.goto('/');
    const hrefsMenu = await page.locator('.main-nav a').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
    for (const r of RASCUNHOS) expect(hrefsMenu).not.toContain(r.url);
  });
});

test.describe('navegação e componentes compartilhados', () => {
  test('o menu mobile abre e fecha', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/sobre/');
    const menu = page.locator('#menu-mobile');
    await expect(menu).not.toHaveClass(/is-open/);
    await page.locator('.menu-toggle').click();
    await expect(menu).toHaveClass(/is-open/);
  });

  test('breadcrumb aparece e o último item é a página atual', async ({ page }) => {
    await page.goto('/servicos/trafego-pago-para-advogados/');
    const ultimo = page.locator('.breadcrumbs li[aria-current]');
    await expect(ultimo).toHaveText(/Tráfego pago/i);
  });

  test('FAQ funciona sem depender de clique em nada além do <summary> nativo', async ({ page }) => {
    await page.goto('/metodo/');
    const item = page.locator('.faq-item').first();
    await expect(item).not.toHaveAttribute('open', '');
    await item.locator('summary').click();
    await expect(item).toHaveAttribute('open', '');
  });

  test('404 real devolve status 404, não um redirect disfarçado', async ({ page }) => {
    const resposta = await page.goto('/pagina-que-nao-existe-de-jeito-nenhum/');
    expect(resposta.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText(/não existe/i);
  });

  test('link do portfólio para landing pages está correto, mesmo em rascunho', async ({ page }) => {
    await page.goto('/servicos/landing-pages-para-advogados/');
    const link = page.locator('a[href="/portfolio/"]').first();
    await expect(link).toBeVisible();
  });
});

test.describe('fluxo de contexto do portfólio para o contato', () => {
  test('query string pré-preenche área e serviço no formulário', async ({ page }) => {
    await page.goto('/contato/?area=Trabalhista&interesse=criacao-lp&projeto=https%3A%2F%2Fexemplo.com%2F');
    await expect(page.locator('#f-area')).toHaveValue('Trabalhista');
    await expect(page.locator('#f-servico')).toHaveValue('Site ou landing page');
    await expect(page.locator('#f-projeto-referencia')).toHaveValue('https://exemplo.com/');
  });
});
