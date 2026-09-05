/**
 * js/main.js
 * ---------------------------------------------------------------
 * Responsável por:
 *  1. Renderizar o conteúdo de forma segura no DOM.
 *  2. Interações: menu mobile, header ao rolar, nav ativo.
 *  3. Animações: scroll-reveal via IntersectionObserver.
 *  4. Atendimento: formulário opcional + WhatsApp.
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

  if (navCta) {
    navCta.textContent = SITE_DATA.hero.cta;
  }

  const menuToggle = $("#menu-toggle");

  if (menuToggle) {
    menuToggle.innerHTML = ICONS.menu;
  }

  const navClose = $("#nav-close");

  if (navClose) {
    navClose.innerHTML = ICONS.close;
  }


  /* ================= RENDER: HERO ================= */

  const heroEyebrow = $("#hero-eyebrow");

  if (heroEyebrow) {
    heroEyebrow.textContent = SITE_DATA.hero.eyebrow;
  }

  const heroTitle = $("#hero-title");

  if (heroTitle) {
    heroTitle.replaceChildren();

    heroTitle.append(
      document.createTextNode(SITE_DATA.hero.tituloLinha1)
    );

    const span = document.createElement("span");
    span.className = "line-2";
    span.textContent = SITE_DATA.hero.tituloLinha2;

    heroTitle.appendChild(span);
  }

  const heroSubtitle = $("#hero-subtitle");

  if (heroSubtitle) {
    heroSubtitle.textContent = SITE_DATA.hero.subtitulo;
  }

  const heroText = $("#hero-text");

  if (heroText) {
    heroText.textContent = SITE_DATA.hero.paragrafo;
  }

  const heroCta = $("#hero-cta");

  if (heroCta) {
    heroCta.textContent = SITE_DATA.hero.cta;
  }

  const heroCrest = $("#hero-crest");

  if (heroCrest) {
    heroCrest.innerHTML = ICONS.crest;
  }

  const heroMediaName = $("#hero-media-name");

  if (heroMediaName) {
    heroMediaName.textContent = SITE_DATA.marca.slogan;
  }

  const heroMediaTag = $("#hero-media-tag");

  if (heroMediaTag) {
    heroMediaTag.textContent = SITE_DATA.marca.assinatura;
  }


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

  if (sobreEyebrow) {
    sobreEyebrow.textContent = SITE_DATA.quemSomos.eyebrow;
  }

  const sobreTitulo = $("#sobre-titulo");

  if (sobreTitulo) {
    sobreTitulo.textContent = SITE_DATA.quemSomos.titulo;
  }

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

  if (sobreCrestNome) {
    sobreCrestNome.textContent = SITE_DATA.marca.nome;
  }

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

  if (footerSlogan) {
    footerSlogan.textContent = SITE_DATA.marca.assinatura;
  }

  const footerContact = $("#footer-contact");

  if (footerContact) {
    footerContact.replaceChildren();

    /* Telefone */
    const liTel = document.createElement("li");

    liTel.innerHTML = ICONS.telefone;

    const aTel = document.createElement("a");

    aTel.href = `tel:${SITE_DATA.contato.telefone.replace(/\D/g, "")}`;
    aTel.textContent = SITE_DATA.contato.telefone;

    liTel.appendChild(aTel);


    /* E-mail */
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

  if (footerBottom) {
    footerBottom.textContent = SITE_DATA.rodape.copyright;
  }


  /* ============================================================
     ATENDIMENTO / WHATSAPP
     ============================================================ */

  const wa = $("#whatsapp-btn");

  const contactModal = $("#contact-modal");
  const contactBackdrop = $("#contact-modal-backdrop");
  const contactClose = $("#contact-modal-close");

  const contactForm = $("#contact-form");
  const contactSkip = $("#contact-skip");

  const contactName = $("#contact-name");
  const contactType = $("#contact-type");
  const contactMessage = $("#contact-message");

  const contactCounter = $("#contact-counter");

  const contactFile = $("#contact-file");
  const fileSelected = $("#file-selected");

  const formFileIcon = $("#form-file-icon");
  const formWhatsappIcon = $("#form-whatsapp-icon");


  /*
   * Ícone de documento.
   * Criado aqui para não depender de um nome específico
   * no objeto ICONS.
   */
  if (formFileIcon) {
    formFileIcon.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M8 13h8"/>
        <path d="M8 17h6"/>
      </svg>
    `;
  }


  /*
   * Ícone do WhatsApp dentro do formulário.
   */
  if (formWhatsappIcon) {
    formWhatsappIcon.innerHTML = ICONS.whatsapp || "";
  }


  /*
   * URL base do WhatsApp configurada no site.
   */
  const whatsappUrl = SITE_DATA.contato.whatsapp;


  /*
   * Abre o WhatsApp com uma mensagem pré-preenchida.
   */
  function openWhatsapp(message = "") {

    let finalUrl = whatsappUrl;

    if (message) {
      const separator = whatsappUrl.includes("?")
        ? "&"
        : "?";

      finalUrl =
        `${whatsappUrl}${separator}text=${encodeURIComponent(message)}`;
    }

    window.open(
      finalUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }


  /*
   * Abre o modal.
   */
  function openContactModal() {

    if (!contactModal) return;

    contactModal.classList.add("is-open");
    contactModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      if (contactName) {
        contactName.focus();
      }
    }, 150);
  }


  /*
   * Fecha o modal.
   */
  function closeContactModal() {

    if (!contactModal) return;

    contactModal.classList.remove("is-open");
    contactModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  }


  /*
   * Botão flutuante do WhatsApp:
   * agora abre primeiro o formulário.
   */
  if (wa) {

    wa.href = "#";
    wa.innerHTML = ICONS.whatsapp;

    wa.addEventListener("click", event => {
      event.preventDefault();
      openContactModal();
    });
  }


  /*
   * Fechamento pelo X.
   */
  if (contactClose) {
    contactClose.addEventListener(
      "click",
      closeContactModal
    );
  }


  /*
   * Fechamento clicando fora do formulário.
   */
  if (contactBackdrop) {
    contactBackdrop.addEventListener(
      "click",
      closeContactModal
    );
  }


  /*
   * Fechamento pelo ESC.
   */
  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      contactModal &&
      contactModal.classList.contains("is-open")
    ) {
      closeContactModal();
    }

  });


  /*
   * Contador do campo de relato.
   */
  if (contactMessage && contactCounter) {

    contactMessage.addEventListener("input", () => {

      contactCounter.textContent =
        contactMessage.value.length;

    });

  }


  /*
   * Mostra o nome do arquivo selecionado.
   *
   * O arquivo NÃO é enviado automaticamente ao WhatsApp.
   */
  if (contactFile && fileSelected) {

    contactFile.addEventListener("change", () => {

      const file = contactFile.files?.[0];

      if (!file) {

        fileSelected.textContent = "";
        fileSelected.classList.remove("is-visible");

        return;
      }


      /*
       * Limite visual de 10 MB.
       */
      const maxSize = 10 * 1024 * 1024;

      if (file.size > maxSize) {

        alert(
          "O arquivo selecionado ultrapassa o limite de 10 MB."
        );

        contactFile.value = "";

        fileSelected.textContent = "";
        fileSelected.classList.remove("is-visible");

        return;
      }


      fileSelected.textContent =
        `Arquivo selecionado: ${file.name}`;

      fileSelected.classList.add("is-visible");

    });

  }


  /*
   * Monta a mensagem que será enviada ao WhatsApp.
   */
  function createWhatsappMessage() {

    const name =
      contactName?.value.trim() || "";

    const type =
      contactType?.value.trim() || "";

    const message =
      contactMessage?.value.trim() || "";

    const file =
      contactFile?.files?.[0] || null;


    const lines = [];


    lines.push(
      "Olá! Vim pelo site do NTCF."
    );


    if (name) {

      lines.push(
        `Meu nome é ${name}.`
      );

    }


    if (type) {

      lines.push(
        `Tipo de demanda/perícia: ${type}.`
      );

    }


    if (message) {

      lines.push("");
      lines.push("Relato:");
      lines.push(message);

    }


    if (file) {

      lines.push("");

      lines.push(
        `Tenho um documento para enviar: ${file.name}.`
      );

      lines.push(
        "Posso encaminhá-lo por aqui no WhatsApp."
      );

    }


    lines.push("");
    lines.push(
      "Aguardo o retorno. Obrigado!"
    );


    return lines.join("\n");
  }


  /*
   * Pular o formulário.
   */
  if (contactSkip) {

    contactSkip.addEventListener("click", () => {

      const message =
        "Olá! Vim pelo site do NTCF e gostaria de solicitar atendimento.";

      closeContactModal();

      openWhatsapp(message);

    });

  }


  /*
   * Continuar para o WhatsApp.
   */
  if (contactForm) {

    contactForm.addEventListener("submit", event => {

      event.preventDefault();

      const message =
        createWhatsappMessage();

      closeContactModal();

      openWhatsapp(message);

    });

  }


  /* ================= INTERAÇÃO: HEADER AO ROLAR ================= */

  const header = $("#site-header");

  if (header) {

    const onScroll = () => {

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 12
      );

    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

  }


  /* ================= INTERAÇÃO: MENU MOBILE ================= */

  const navScrim = $("#nav-scrim");
  const body = document.body;

  const openNav = () => {
    body.classList.add("nav-open");
  };

  const closeNav = () => {
    body.classList.remove("nav-open");
  };

  if (menuToggle) {
    menuToggle.addEventListener(
      "click",
      openNav
    );
  }

  if (navClose) {
    navClose.addEventListener(
      "click",
      closeNav
    );
  }

  if (navScrim) {
    navScrim.addEventListener(
      "click",
      closeNav
    );
  }

  $$("#nav-links a").forEach(a => {
    a.addEventListener(
      "click",
      closeNav
    );
  });


  /* ================= INTERAÇÃO: SCROLL-SPY ================= */

  const sections = SITE_DATA.navegacao
    .map(item => document.querySelector(item.href))
    .filter(Boolean);


  const navObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          $$("a[data-nav]").forEach(a => {
            a.classList.remove("active");
          });

          const link =
            $(`a[data-nav="#${entry.target.id}"]`);

          if (link) {
            link.classList.add("active");
          }

        }

      });

    },
    {
      rootMargin: "-45% 0px -45% 0px"
    }
  );


  sections.forEach(sec => {
    navObserver.observe(sec);
  });


  /* ================= ANIMAÇÃO: SCROLL REVEAL ================= */

  const revealTargets =
    $$("[data-reveal]");


  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-visible"
            );

          } else {

            entry.target.classList.remove(
              "is-visible"
            );

          }

        });

      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px"
      }
    );


  revealTargets.forEach(el => {
    revealObserver.observe(el);
  });

})();
