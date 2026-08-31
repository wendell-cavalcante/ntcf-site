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

## Por que separado dessa forma

- **Conteúdo (`/data`) fica isolado do layout.** Para trocar um texto, telefone, endereço ou adicionar/remover um tipo de perícia, basta editar os arquivos em `data/` — não é preciso mexer no HTML.
- **Ícones (`/assets/icons`) ficam centralizados** em um só lugar, reutilizados tanto nos cards de perícia quanto no rodapé e nos ícones sociais.
- **`main.js`** é o único lugar que lê os dados e monta o HTML — mantém a lógica de renderização separada do conteúdo e do design.
- Os arquivos usam `<script>` comuns (não ES modules), então o site funciona abrindo o `index.html` direto, sem precisar de servidor local.

## Como editar

- **Adicionar uma nova perícia:** edite `data/pericias.js`, copie um item existente e ajuste `codigo`, `icone` (use uma chave já existente em `assets/icons/icons.js`), `titulo` e `descricao`. O card aparece automaticamente no grid.
- **Trocar telefone/e-mail/endereço:** edite `data/site-data.js` → objeto `contato`.
- **Trocar textos do hero, missão/visão/valores etc.:** edite `data/site-data.js`.
- **Cores e tipografia:** edite as variáveis no topo de `css/style.css` (bloco `:root`).

## Animações incluídas

- Header ganha sombra/compacta ao rolar a página.
- Menu mobile em drawer lateral com overlay.
- Link ativo da navegação conforme a seção visível (scroll-spy).
- Revelação suave dos blocos ao entrar na tela (IntersectionObserver + `data-reveal`).
- Selo do cabeçalho com linha de "scanner" animada, hover nos cards e botão flutuante do WhatsApp com pulso.
- Todas as animações respeitam `prefers-reduced-motion`.
