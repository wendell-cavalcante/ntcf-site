/**
 * data/pericias.js
 * ---------------------------------------------------------------
 * Estrutura de dados dos tipos de perícia oferecidos pelo NTCF.
 * Cada objeto vira um card renderizado dinamicamente pelo main.js.
 * Para adicionar/remover uma perícia, edite apenas este arquivo.
 * ---------------------------------------------------------------
 */

const PERICIAS_DATA = [
  {
    codigo: "EVD-01",
    icone: "batimento",
    titulo: "Crimes contra a vida",
    descricao: "Atuação especializada em homicídios, feminicídios, suicídios e mortes violentas em trânsito."
  },
  {
    codigo: "EVD-02",
    icone: "usuarioProtegido",
    titulo: "Crimes contra a pessoa",
    descricao: "Perícia em integridade física e lesões corporais para determinação de nexo causal e dinâmica dos fatos."
  },
  {
    codigo: "EVD-03",
    icone: "escudo",
    titulo: "Crimes contra a dignidade sexual",
    descricao: "Análise pericial integral e técnica voltada à apuração de violência e abuso sexual."
  },
  {
    codigo: "EVD-04",
    icone: "fone",
    titulo: "Escuta especializada",
    descricao: "Entrevista forense e acolhimento metodológico em casos de crimes sexuais e contra vulneráveis."
  },
  {
    codigo: "EVD-05",
    icone: "cerebro",
    titulo: "Avaliação psicológica forense",
    descricao: "Exames e laudos psicológicos para suporte probatório à capacidade civil, trauma e vitimização."
  },
  {
    codigo: "EVD-06",
    icone: "lupa",
    titulo: "Local de crime e evidências",
    descricao: "Levantamento técnico, registro fotográfico e preservação de vestígios para reconstituição do fato."
  }
];