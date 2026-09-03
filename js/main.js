/**
 * js/main.js
 * ---------------------------------------------------------------
 * Responsável por:
 *  1. Renderizar o conteúdo (SITE_DATA / PERICIAS_DATA) no DOM.
 *  2. Interações: menu mobile, header ao rolar, nav ativo.
 *  3. Animações simples: scroll-reveal via IntersectionObserver.
 * ---------------------------------------------------------------
 */

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ================= RENDER: HEADER / MARCA ================= */
  function renderBrand(target) {
    target.innerHTML = `
      <div class="brand-crest">${ICONS.crest}</div>
      <div>
        <div class="brand-name">${SITE_DATA.marca.nome}</div>
        <div class="brand-sub">${SITE_DATA.marca.slogan}</div>
      </div>`;
  }
  renderBrand($("#brand-slot"));
  renderBrand($("#footer-brand-slot"));

  /* ================= RENDER: NAV ================= */
  const navLinksHTML = SITE_DATA.navegacao
    .map((item, i) => `<li><a href="${item.href}" data-nav="${item.href}">${item.texto}</a></li>`)
    .join("");
  $("#nav-links").innerHTML = navLinksHTML;
  $("#nav-cta").textContent = SITE_DATA.hero.cta;
  $("#menu-toggle").innerHTML = ICONS.menu;
  $("#nav-close").innerHTML = ICONS.close;

  /* ================= RENDER: HERO ================= */
  $("#hero-eyebrow").textContent = SITE_DATA.hero.eyebrow;
  $("#hero-title").innerHTML =
    `${SITE_DATA.hero.tituloLinha1}<span class="line-2">${SITE_DATA.hero.tituloLinha2}</span>`;
  $("#hero-subtitle").textContent = SITE_DATA.hero.subtitulo;
  $("#hero-text").textContent = SITE_DATA.hero.paragrafo;
  $("#hero-cta").textContent = SITE_DATA.hero.cta;
  $("#hero-crest").innerHTML = ICONS.crest;
  $("#hero-media-name").textContent = SITE_DATA.marca.slogan;
  $("#hero-media-tag").textContent = SITE_DATA.marca.assinatura;

  /* ================= RENDER: PERÍCIAS ================= */
  const periciasGrid = $("#pericias-grid");
  periciasGrid.innerHTML = PERICIAS_DATA.map((p, i) => `
    <article class="pericia-card" data-reveal style="--i:${i}">
      <span class="pericia-code">${p.codigo}</span>
      <div class="pericia-icon">${ICONS[p.icone] || ""}</div>
      <h3 class="pericia-title">${p.titulo}</h3>
      <p class="pericia-desc">${p.descricao}</p>
    </article>
  `).join("");

  /* ================= RENDER: QUEM SOMOS ================= */
  $("#sobre-eyebrow").textContent = SITE_DATA.quemSomos.eyebrow;
  $("#sobre-titulo").textContent = SITE_DATA.quemSomos.titulo;
  $("#sobre-paragrafos").innerHTML = SITE_DATA.quemSomos.paragrafos
    .map(p => `<p>${p}</p>`).join("");
  $("#sobre-crest").innerHTML = ICONS.crest;
  $("#sobre-crest-nome").textContent = SITE_DATA.marca.nome;

  $("#pilares").innerHTML = SITE_DATA.quemSomos.pilares.map((pilar, i) => `
    <div class="pilar" data-reveal style="--i:${i}">
      <div class="pilar-icon">${ICONS[pilar.icone] || ""}</div>
      <div>
        <p class="pilar-title">${pilar.titulo}</p>
        <p class="pilar-text">${pilar.texto}</p>
      </div>
    </div>
  `).join("");

  /* ================= RENDER: RODAPÉ / CONTATO ================= */
  $("#footer-slogan").textContent = SITE_DATA.marca.assinatura;

  $("#footer-contact").innerHTML = `
    <li>${ICONS.telefone}<a href="tel:${SITE_DATA.contato.telefone.replace(/\D/g,"")}">${SITE_DATA.contato.telefone}</a></li>
    <li>${ICONS.mail}<a href="mailto:${SITE_DATA.contato.email}">${SITE_DATA.contato.email}</a></li>
   
  `;

  $("#social-row").innerHTML = SITE_DATA.redesSociais.map(r =>
    `<a href="${r.href}" aria-label="${r.nome}" target="_blank" rel="noopener">${ICONS[r.icone] || ""}</a>`
  ).join("");

  $("#footer-bottom").textContent = SITE_DATA.rodape.copyright;

  const wa = $("#whatsapp-btn");
  wa.href = SITE_DATA.contato.whatsapp;
  wa.innerHTML = ICONS.whatsapp;

  /* ================= INTERAÇÃO: HEADER AO ROLAR ================= */
  const header = $("#site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ================= INTERAÇÃO: MENU MOBILE ================= */
  const menuToggle = $("#menu-toggle");
  const navClose = $("#nav-close");
  const navScrim = $("#nav-scrim");
  const body = document.body;

  const openNav = () => body.classList.add("nav-open");
  const closeNav = () => body.classList.remove("nav-open");

  menuToggle.addEventListener("click", openNav);
  navClose.addEventListener("click", closeNav);
  navScrim.addEventListener("click", closeNav);
  $$('#nav-links a').forEach(a => a.addEventListener("click", closeNav));

  /* ================= INTERAÇÃO: LINK ATIVO NA NAV (scroll-spy) ================= */
  const sections = SITE_DATA.navegacao
    .map(item => document.querySelector(item.href))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('a[data-nav]').forEach(a => a.classList.remove("active"));
        const link = $(`a[data-nav="#${entry.target.id}"]`);
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(sec => navObserver.observe(sec));

  /* ================= ANIMAÇÃO: SCROLL REVEAL ================= */
  const revealTargets = $$('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* Cards de perícia e pilares aparecem em cascata (usa --i definido no HTML) */

})();
