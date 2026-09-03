# NTCF — Site institucional

Site responsivo do NTCF (Núcleo Técnico-Científico Forense), construído em HTML/CSS/JS puro — sem build tools, basta abrir `index.html` no navegador.

## Estrutura de pastas

```
ntcf-site/
├── index.html              → estrutura da página (a maior parte do conteúdo é injetada via JS)
├── css/
│   └── style.css           → tokens de design, layout, componentes, responsivo e animações
├── js/
│   └── main.js              → renderiza os dados no DOM + interações (menu, scroll, animações)
├── data/
│   ├── site-data.js         → conteúdo institucional: navegação, hero, quem somos, contato
│   └── pericias.js          → lista dos tipos de perícia (cards)
└── assets/
    └── icons/
        └── icons.js         → biblioteca de ícones SVG usados no site
```


