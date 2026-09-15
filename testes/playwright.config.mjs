import { defineConfig, devices } from '@playwright/test';

const PORTA = 8901;

export default defineConfig({
  testDir: '.',
  testMatch: '*.spec.mjs',
  // O site abre vídeo, fonte e imagens antes de hidratar; em máquina lenta o
  // padrão de 30s aperta.
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://127.0.0.1:${PORTA}`,
    // O botão flutuante e outros elementos animam sem parar, e o Playwright
    // espera um elemento ficar "estável" antes de clicar — com animação
    // infinita ele nunca fica, e o clique estoura o tempo. O site já respeita
    // `prefers-reduced-motion`, então pedir isso resolve usando um caminho que
    // ele suporta de verdade, em vez de forçar cliques às cegas.
    reducedMotion: 'reduce',
    // O Chromium já instalado no ambiente, quando houver. Sem isso o
    // Playwright tenta baixar o próprio, que falha sem rede.
    launchOptions: process.env.PLAYWRIGHT_BROWSERS_PATH
      ? { executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium' }
      : {},
  },
  projects: [
    { name: 'celular', use: { ...devices['Pixel 7'] } },
    { name: 'computador', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'node servidor.mjs',
    url: `http://127.0.0.1:${PORTA}/index.html`,
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
