/**
 * data/site-data.js
 * ---------------------------------------------------------------
 * Conteúdo institucional do site: navegação, textos do hero,
 * quem somos, contato e redes sociais.
 * ---------------------------------------------------------------
 */

const SITE_DATA = {
  marca: {
    nome: "NTCF",
    slogan: "Núcleo Técnico-Científico Forense",
    assinatura: "Especialistas em provas, comprometidos com a verdade."
  },

  navegacao: [
    { texto: "Início", href: "#inicio" },
    { texto: "Perícias", href: "#pericias" },
    { texto: "Quem Somos", href: "#quem-somos" },
    { texto: "Contato", href: "#contato" }
  ],

  hero: {
    eyebrow: "Laudo técnico-pericial",
    tituloLinha1: "Excelência técnica.",
    tituloLinha2: "Verdade que transforma.",
    subtitulo: "Perícia é ciência. Ética é nosso compromisso.",
    paragrafo: "No NTCF Núcleo Técnico-Científico Forense, unimos conhecimento científico, tecnologia e experiência para esclarecer fatos e entregar respostas com precisão e imparcialidade.",
    cta: "Entrar em Contato"
  },

  quemSomos: {
    eyebrow: "Quem somos",
    titulo: "Quem Somos",
    paragrafos: [
      "O NTCF Núcleo Técnico-Científico Forense é uma empresa especializada na prestação de serviços periciais com base técnica, científica e imparcial.",
      "Contamos com uma equipe multidisciplinar de profissionais altamente qualificados, equipamentos de última geração e metodologias reconhecidas para oferecer laudos precisos e confiáveis."
    ],
    pilares: [
      {
        icone: "telefone",
        titulo: "Missão",
        texto: "Oferecer serviços periciais de alta qualidade, contribuindo para a justiça e a verdade."
      },
      {
        icone: "olho",
        titulo: "Visão",
        texto: "Ser referência nacional em perícias forenses, reconhecida pela excelência e ética."
      },
      {
        icone: "escudo",
        titulo: "Valores",
        texto: "Ética, imparcialidade, compromisso com a verdade, confidencialidade e respeito à justiça."
      }
    ]
  },

  contato: {
    telefone: "(11) 99812-8504",
    email: "peritoforenseguilhermelima@gmail.com",
    endereco: "Rua das Ciências, 123 — São Paulo, SP, 01000-000",
    whatsapp: "https://wa.me/5511998128504"
  },

  redesSociais: [
    {
      nome: "Instagram",
      icone: "instagram",
      href: "https://www.instagram.com/peritoforenseguilhermelima/"
    }
  ],

  rodape: {
    copyright: `© ${new Date().getFullYear()} NTCF Núcleo Técnico-Científico Forense. Todos os direitos reservados.`
  }
};
