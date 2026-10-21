/**
 * JS das páginas institucionais novas. Vanilla, sem build, sem dependência
 * de React/support.js — essas páginas são HTML real desde a primeira
 * resposta do servidor; este arquivo só adiciona interação.
 */
(function () {
  'use strict';

  // ── menu mobile ──────────────────────────────────────────────────────
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu-mobile');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var aberto = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    // Fecha ao navegar por um link do menu mobile (não ao abrir um <details>).
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── formulário de contato (/contato/) ───────────────────────────────
  // Mesmo contrato validado no popup da home: envio ADICIONAL ao painel,
  // sem substituir o Apps Script; confirmação só depois da resposta do
  // servidor; chave de idempotência mantida entre tentativas; visitante
  // vai vazio quando o coletor não carregou.
  var form = document.getElementById('form-contato');
  if (form) {
    var retorno = document.getElementById('form-contato-retorno');
    var botao = form.querySelector('button[type=submit]');
    var idem = null;

    // Contexto vindo de outra página (hoje: /portfolio/, quando publicado),
    // via query string: ?projeto=...&area=...&interesse=...&origem=...
    // Preenche o formulário sem travar o envio se algum campo não bater —
    // a pessoa sempre pode editar antes de mandar.
    try {
      var q = new URLSearchParams(location.search);
      var mapaInteresse = {
        'trafego-pago': 'Tráfego pago',
        'criacao-lp': 'Site ou landing page',
        'estruturacao-comercial': 'Estruturação comercial',
        'ia-atendimento': 'IA para atendimento',
      };
      if (q.get('area')) { var fArea = form.querySelector('[name=area]'); if (fArea) fArea.value = q.get('area'); }
      if (q.get('interesse')) {
        var fServico = form.querySelector('[name=servico]');
        var valor = mapaInteresse[q.get('interesse')] || '';
        if (fServico && valor) fServico.value = valor;
      }
      if (q.get('projeto')) { var fProjeto = document.getElementById('f-projeto-referencia'); if (fProjeto) fProjeto.value = q.get('projeto'); }
      var fOrigem = document.getElementById('f-pagina-origem');
      if (fOrigem) fOrigem.value = document.referrer || '';
    } catch (e) {}

    function uuid() {
      try { if (window.crypto && crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
      try {
        var b = new Uint8Array(16);
        crypto.getRandomValues(b);
        b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;
        var h = Array.prototype.map.call(b, function (x) { return x.toString(16).padStart(2, '0'); }).join('');
        return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
      } catch (e) {}
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      });
    }

    function setStatus(texto, tom) {
      if (!retorno) return;
      retorno.textContent = texto;
      retorno.style.color = tom === 'erro' ? '#fca5a5' : tom === 'ok' ? '#86efac' : '';
    }

    form.addEventListener('submit', function (evento) {
      evento.preventDefault();
      if (botao && botao.disabled) return; // protege contra duplo clique/duplo envio

      var nome = form.querySelector('[name=nome]');
      var whats = form.querySelector('[name=whatsapp]');
      if (!nome.value.trim() || !whats.value.trim()) {
        setStatus('Por favor, preencha nome e WhatsApp.', 'erro');
        return;
      }

      if (!idem) idem = uuid();
      var dados = {
        nome: nome.value.trim(),
        email: (form.querySelector('[name=email]') || {}).value || '',
        whatsapp: whats.value.trim(),
        escritorio: (form.querySelector('[name=escritorio]') || {}).value || '',
        servico: (form.querySelector('[name=servico]') || {}).value || '',
        area: (form.querySelector('[name=area]') || {}).value || '',
        jaAnuncia: (form.querySelector('[name=ja_anuncia]') || {}).value || '',
        projetoReferencia: (form.querySelector('[name=projeto_referencia]') || {}).value || '',
      };

      if (botao) { botao.disabled = true; botao.dataset.textoOriginal = botao.textContent; botao.textContent = 'Enviando…'; }
      setStatus('Enviando…', null);

      // 1) Apps Script existente — destino já em uso, preservado sem alteração.
      try {
        var qs = 'nome=' + encodeURIComponent(dados.nome) +
          '&email=' + encodeURIComponent(dados.email) +
          '&whatsapp=' + encodeURIComponent(dados.whatsapp) +
          '&pagina=' + encodeURIComponent(location.href) +
          '&origem=contato&escritorio=' + encodeURIComponent(dados.escritorio) +
          '&servico=' + encodeURIComponent(dados.servico) +
          '&ja_anuncia=' + encodeURIComponent(dados.jaAnuncia) +
          '&projeto_referencia=' + encodeURIComponent(dados.projetoReferencia) +
          '&t=' + Date.now();
        var base = 'https://script.google.com/macros/s/AKfycby6sCuNPhb-xPZPGbl08z1zqMuHqbSkm2NcOSfHLKn4MFalTChvphRbOWbZUZ6GwNXz/exec';
        fetch(base + '?' + qs, { mode: 'no-cors', keepalive: true }).catch(function () {});
      } catch (e) {}

      // 2) Painel — envio adicional, com confirmação lida de verdade.
      var visitante = '';
      try { if (window.painel && typeof window.painel.visitante === 'function') visitante = window.painel.visitante() || ''; } catch (e) {}

      var enviarPainel = function (vis, jaRepetiu) {
        var body = new URLSearchParams({
          formulario: 'Contato',
          nome: dados.nome,
          email: dados.email,
          telefone: dados.whatsapp,
          mensagem: [dados.escritorio && ('Escritório: ' + dados.escritorio), dados.servico && ('Interesse: ' + dados.servico), dados.area && ('Área: ' + dados.area), dados.jaAnuncia && ('Já anuncia: ' + dados.jaAnuncia), dados.projetoReferencia && ('Projeto de referência: ' + dados.projetoReferencia)].filter(Boolean).join(' · '),
          caminho: location.pathname,
          visitante: vis,
          idempotencia: idem,
        });
        return fetch('https://app.johnyweb.com/api/forms/sit_038a2d476f83', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: body.toString(),
          keepalive: true,
        }).then(function (r) {
          if (r && r.ok) { idem = null; return true; }
          if (!jaRepetiu && !vis && r && r.status === 422) {
            return enviarPainel('anon-' + uuid().replace(/-/g, '').slice(0, 16), true);
          }
          return false;
        });
      };

      enviarPainel(visitante, false).then(function (ok) {
        if (botao) { botao.disabled = false; botao.textContent = botao.dataset.textoOriginal || 'Enviar'; }
        if (ok) {
          setStatus('Recebemos seu contato. Em breve alguém da Mega ADS fala com você.', 'ok');
          form.reset();
        } else {
          // O Apps Script já recebeu o envio (passo 1), então a mensagem não
          // se perdeu — mas não confirmamos isso como "registrado" sem a
          // resposta do servidor do painel. Honesto com o que sabemos.
          setStatus('Não foi possível confirmar o envio agora. Tente novamente ou fale direto pelo WhatsApp abaixo.', 'erro');
        }
      }).catch(function () {
        if (botao) { botao.disabled = false; botao.textContent = botao.dataset.textoOriginal || 'Enviar'; }
        setStatus('Não foi possível confirmar o envio agora. Tente novamente ou fale direto pelo WhatsApp abaixo.', 'erro');
      });
    });
  }
})();
