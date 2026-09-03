/**
 * js/main.js
 * ---------------------------------------------------------------
 * Responsável por:
 *  1. Renderizar o conteúdo de forma segura no DOM.
 *  2. Interações: menu mobile, header ao rolar, nav ativo.
 *  3. Animações: scroll-reveal via IntersectionObserver.
 * ---------------------------------------------------------------
 */

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ================= RENDER: HEADER / MARCA ================= */
  function renderBrand(target) {
    if (!target) return;
    target.replaceChildren();

    const crestDiv = document.createElement("div");
    crestDiv.className = "brand-crest";
    crestDiv.innerHTML = ICONS.crest;

    const infoDiv = document.createElement("div");
    const nameDiv = document.createElement("div");
    nameDiv.className = "brand-name";
    nameDiv.textContent = SITE_DATA.marca.nome;

    const subDiv = document.createElement("div");
    subDiv.className = "brand-sub";
    subDiv.textContent = SITE_DATA.marca.slogan;

    infoDiv.append(nameDiv, subDiv);
    target.append(crestDiv, infoDiv);
  }

  function renderBrandLogo(target) {
    if (!target) return;
    target.replaceChildren();

    const crestDiv = document.createElement("div");
    crestDiv.className = "brand-crest brand-crest-img";

    const img = document.createElement("img");
    img.src = "assets/img/logo.webp";
    img.alt = SITE_DATA.marca.nome;
    crestDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    const nameDiv = document.createElement("div");
    nameDiv.className = "brand-name";
    nameDiv.textContent = SITE_DATA.marca.nome;

    const subDiv = document.createElement("div");
    subDiv.className = "brand-sub";
    subDiv.textContent = SITE_DATA.marca.slogan;

    infoDiv.append(nameDiv, subDiv);
    target.append(crestDiv, infoDiv);
  }

  renderBrandLogo($("#brand-slot"));
  renderBrand($("#footer-brand-slot"));

  /* ================= RENDER: NAV ================= */
  const navLinksContainer = $("#nav-links");
  if (navLinksContainer) {
    navLinksContainer.replaceChildren();
    SITE_DATA.navegacao.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.setAttribute("data-nav", item.href);
      a.textContent = item.texto;
      li.appendChild(a);
      navLinksContainer.appendChild(li);
    });
  }

  const navCta = $("#nav-cta");
  if (navCta) navCta.textContent = SITE_DATA.hero.cta;

  const menuToggle = $("#menu-toggle");
  if (menuToggle) menuToggle.innerHTML = ICONS.menu;

  const navClose = $("#nav-close");
  if (navClose) navClose.innerHTML = ICONS.close;

  /* ================= RENDER: HERO ================= */
  const heroEyebrow = $("#hero-eyebrow");
  if (heroEyebrow) heroEyebrow.textContent = SITE_DATA.hero.eyebrow;

  const heroTitle = $("#hero-title");
  if (heroTitle) {
    heroTitle.replaceChildren();
    heroTitle.append(document.createTextNode(SITE_DATA.hero.tituloLinha1));
    const span = document.createElement("span");
    span.className = "line-2";
    span.textContent = SITE_DATA.hero.tituloLinha2;
    heroTitle.appendChild(span);
  }

  const heroSubtitle = $("#hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = SITE_DATA.hero.subtitulo;

  const heroText = $("#hero-text");
  if (heroText) heroText.textContent = SITE_DATA.hero.paragrafo;

  const heroCta = $("#hero-cta");
  if (heroCta) heroCta.textContent = SITE_DATA.hero.cta;

  const heroCrest = $("#hero-crest");
  if (heroCrest) heroCrest.innerHTML = ICONS.crest;

  const heroMediaName = $("#hero-media-name");
  if (heroMediaName) heroMediaName.textContent = SITE_DATA.marca.slogan;

  const heroMediaTag = $("#hero-media-tag");
  if (heroMediaTag) heroMediaTag.textContent = SITE_DATA.marca.assinatura;

  /* ================= RENDER: PERÍCIAS ================= */
  const periciasGrid = $("#pericias-grid");
  if (periciasGrid) {
    periciasGrid.replaceChildren();
    PERICIAS_DATA.forEach((p, i) => {
      const card = document.createElement("article");
      card.className = "pericia-card";
      card.setAttribute("data-reveal", "");
      card.style.setProperty("--i", i);

      const code = document.createElement("span");
      code.className = "pericia-code";
      code.textContent = p.codigo;

      const icon = document.createElement("div");
      icon.className = "pericia-icon";
      icon.innerHTML = ICONS[p.icone] || "";

      const title = document.createElement("h3");
      title.className = "pericia-title";
      title.textContent = p.titulo;

      const desc = document.createElement("p");
      desc.className = "pericia-desc";
      desc.textContent = p.descricao;

      card.append(code, icon, title, desc);
      periciasGrid.appendChild(card);
    });
  }

  /* ================= RENDER: QUEM SOMOS ================= */
  const sobreEyebrow = $("#sobre-eyebrow");
  if (sobreEyebrow) sobreEyebrow.textContent = SITE_DATA.quemSomos.eyebrow;

  const sobreTitulo = $("#sobre-titulo");
  if (sobreTitulo) sobreTitulo.textContent = SITE_DATA.quemSomos.titulo;

  const sobreParagrafos = $("#sobre-paragrafos");
  if (sobreParagrafos) {
    sobreParagrafos.replaceChildren();
    SITE_DATA.quemSomos.paragrafos.forEach(texto => {
      const p = document.createElement("p");
      p.textContent = texto;
      sobreParagrafos.appendChild(p);
    });
  }

  const sobreCrest = $("#sobre-crest");
  if (sobreCrest) {
    sobreCrest.replaceChildren();
    const imgSobre = document.createElement("img");
    imgSobre.src = "assets/img/logo.webp";
    imgSobre.alt = SITE_DATA.marca.nome;
    sobreCrest.appendChild(imgSobre);
  }

  const sobreCrestNome = $("#sobre-crest-nome");
  if (sobreCrestNome) sobreCrestNome.textContent = SITE_DATA.marca.nome;

  const pilares = $("#pilares");
  if (pilares) {
    pilares.replaceChildren();
    SITE_DATA.quemSomos.pilares.forEach((pilar, i) => {
      const container = document.createElement("div");
      container.className = "pilar";
      container.setAttribute("data-reveal", "");
      container.style.setProperty("--i", i);

      const icon = document.createElement("div");
      icon.className = "pilar-icon";
      icon.innerHTML = ICONS[pilar.icone] || "";

      const textWrap = document.createElement("div");
      const title = document.createElement("p");
      title.className = "pilar-title";
      title.textContent = pilar.titulo;

      const text = document.createElement("p");
      text.className = "pilar-text";
      text.textContent = pilar.texto;

      textWrap.append(title, text);
      container.append(icon, textWrap);
      pilares.appendChild(container);
    });
  }

  /* ================= RENDER: RODAPÉ / CONTATO ================= */
  const footerSlogan = $("#footer-slogan");
  if (footerSlogan) footerSlogan.textContent = SITE_DATA.marca.assinatura;

  const footerContact = $("#footer-contact");
  if (footerContact) {
    footerContact.replaceChildren();

    // Telefone
    const liTel = document.createElement("li");
    liTel.innerHTML = ICONS.telefone;
    const aTel = document.createElement("a");
    aTel.href = `tel:${SITE_DATA.contato.telefone.replace(/\\D/g, "")}`;
    aTel.textContent = SITE_DATA.contato.telefone;
    liTel.appendChild(aTel);

    // E-mail
    const liMail = document.createElement("li");
    liMail.innerHTML = ICONS.mail;
    const aMail = document.createElement("a");
    aMail.href = `mailto:${SITE_DATA.contato.email}`;
    aMail.textContent = SITE_DATA.contato.email;
    liMail.appendChild(aMail);

    footerContact.append(liTel, liMail);
  }

  const socialRow = $("#social-row");
  if (socialRow) {
    socialRow.replaceChildren();
    SITE_DATA.redesSociais.forEach(r => {
      const a = document.createElement("a");
      a.href = r.href;
      a.setAttribute("aria-label", r.nome);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = ICONS[r.icone] || "";
      socialRow.appendChild(a);
    });
  }

  const footerBottom = $("#footer-bottom");
  if (footerBottom) footerBottom.textContent = SITE_DATA.rodape.copyright;

  const wa = $("#whatsapp-btn");
  if (wa) {
    wa.href = SITE_DATA.contato.whatsapp;
    wa.rel = "noopener noreferrer";
    wa.innerHTML = ICONS.whatsapp;
  }

  /* ================= INTERAÇÃO: HEADER AO ROLAR ================= */
  const header = $("#site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ================= INTERAÇÃO: MENU MOBILE ================= */
  const navScrim = $("#nav-scrim");
  const body = document.body;

  const openNav = () => body.classList.add("nav-open");
  const closeNav = () => body.classList.remove("nav-open");

  if (menuToggle) menuToggle.addEventListener("click", openNav);
  if (navClose) navClose.addEventListener("click", closeNav);
  if (navScrim) navScrim.addEventListener("click", closeNav);
  $$("#nav-links a").forEach(a => a.addEventListener("click", closeNav));

  /* ================= INTERAÇÃO: SCROLL-SPY ================= */
  const sections = SITE_DATA.navegacao
    .map(item => document.querySelector(item.href))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$("a[data-nav]").forEach(a => a.classList.remove("active"));
        const link = $(`a[data-nav="#${entry.target.id}"]`);
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(sec => navObserver.observe(sec));

  /* ================= ANIMAÇÃO: SCROLL REVEAL ================= */
  const revealTargets = $$("[data-reveal]");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  revealTargets.forEach(el => revealObserver.observe(el));
})();