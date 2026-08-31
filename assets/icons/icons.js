/**
 * assets/icons/icons.js
 * ---------------------------------------------------------------
 * Biblioteca de ícones SVG inline (sem dependências externas).
 * Cada função retorna uma string SVG pronta para ser inserida no DOM.
 * ---------------------------------------------------------------
 */

const ICONS = {
  fingerprint: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8c8.837 0 16 7.163 16 16v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M24 14c5.523 0 10 4.477 10 10v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M18 12.5C19.83 11.53 21.86 11 24 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M13 18c1.2-2.4 3-4.4 5.2-5.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M10 26c0-3.2.8-6.2 2.2-8.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 34c-1.3-2.4-2-5.1-2-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M18 39c-3.2-1.6-5.8-4.2-7.4-7.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M24 40c-2.3 0-4.5-.5-6.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M30 38.5c-1.8 1-3.9 1.5-6 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M34 34c-1.6 2.6-4 4.7-6.8 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M36 27c0 3.4-1 6.5-2.7 9.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M24 18c3.3 0 6 2.7 6 6v6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M24 24v7c0 2.8-1.2 5.3-3.2 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  documento: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8h16l6 6v11" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29 8v6h6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M13 8v32a2 2 0 0 0 2 2h11" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M18 20h11M18 26h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="32" cy="33" r="6" stroke="currentColor" stroke-width="2"/>
    <path d="M36.3 37.3 40 41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  camera: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16a2 2 0 0 1 2-2h6l3-4h14l3 4h6a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="24" cy="26" r="7" stroke="currentColor" stroke-width="2"/>
    <circle cx="24" cy="26" r="2.4" fill="currentColor"/>
    <path d="M12 18h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  quimica: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M21 6v13.2L11.4 36a3 3 0 0 0 2.6 4.5h20a3 3 0 0 0 2.6-4.5L27 19.2V6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M15.5 30.5h17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="20" cy="34.5" r="1.4" fill="currentColor"/>
    <circle cx="26" cy="36.5" r="1" fill="currentColor"/>
    <circle cx="23" cy="33" r="1" fill="currentColor"/>
  </svg>`,

  dna: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6c0 9 16 9 16 18s-16 9-16 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M32 6c0 9-16 9-16 18s16 9 16 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M17.5 12h13M16.3 18h15.4M16.3 30h15.4M17.5 36h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  balanca: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6v34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M15 42h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M9 13h14M25 13h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="24" cy="10" r="2.6" stroke="currentColor" stroke-width="2"/>
    <path d="M9 13 4 23a5.2 5.2 0 0 0 10 0L9 13Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <path d="M39 13l-5 10a5.2 5.2 0 0 0 10 0l-5-10Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  </svg>`,

  telefone: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C10.6 20 4 13.4 4 5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`,

  olho: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
  </svg>`,

  escudo: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/>
    <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  pin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s7-6.6 7-12.5A7 7 0 0 0 5 9.5C5 15.4 12 22 12 22Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" stroke-width="1.6"/>
  </svg>`,

  linkedin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6"/>
    <path d="M8 10.5v6M8 7.8v.01M12 16.5v-4c0-1.2 1-2.2 2.4-2.2S17 11.3 17 12.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor"/>
  </svg>`,

  facebook: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 21v-7h2.5l.5-3H14v-2c0-.9.3-1.5 1.7-1.5H17V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8.5v3H11v7h3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`,

  menu: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  close: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.7 4.5 1.9 6.4L4 29l7.8-1.9A12.9 12.9 0 0 0 16 27c6.6 0 12-5.4 12-12S22.6 3 16 3Zm0 22.2c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.2 1 1.1-4.1-.3-.4A9.9 9.9 0 0 1 6.1 15c0-5.5 4.4-9.9 9.9-9.9s9.9 4.4 9.9 9.9-4.4 9.9-9.9 9.9Zm5.4-7.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.1 8.1 0 0 1-4-3.5c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5L13 9.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.6-.3Z"/>
  </svg>`,

  crest: `<svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 6 104 20v34c0 30-19 50-44 68C35 104 16 84 16 54V20L60 6Z" stroke="currentColor" stroke-width="2"/>
    <path d="M60 14 97 25.5v28.4c0 26-16.6 43.6-37 59-20.4-15.4-37-33-37-59V25.5L60 14Z" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
    <circle cx="60" cy="52" r="19" stroke="currentColor" stroke-width="1.4"/>
    <path d="M50 52a10 10 0 0 1 10-10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M42 46a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" stroke="currentColor" stroke-width="1.2"/>
    <path d="M68 60v-9M65 60v-13M71 60v-6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M60 33v38" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <path d="M24 30c8 6 8 12 0 18M96 30c-8 6-8 12 0 18M24 46c8 6 8 12 0 18M96 46c-8 6-8 12 0 18" stroke="currentColor" stroke-width="1.1" opacity="0.55"/>
  </svg>`
};
