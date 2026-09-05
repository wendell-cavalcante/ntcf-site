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
    icone: "tuboEnsaio",
    titulo: "Toxicologia Forense",
    descricao: "Análise e interpretação de álcool, drogas, medicamentos, metais e agentes tóxicos em investigações criminais."
  },
  {
    codigo: "EVD-02",
    icone: "frascoQuimico",
    titulo: "Química Forense e Envenenamentos",
    descricao: "Investigação de envenenamentos, intoxicações, substâncias químicas, agentes corrosivos e contaminantes relacionados ao fato investigado."
  },
  {
    codigo: "EVD-03",
    icone: "monitorLupa",
    titulo: "Perícia Digital",
    descricao: "Análise técnica de dispositivos, arquivos, mensagens, mídias e evidências digitais, com avaliação de integridade e contexto probatório."
  },
  {
    codigo: "EVD-04",
    icone: "documento",
    titulo: "Documentoscopia",
    descricao: "Análise de documentos, assinaturas, rasuras, adulterações e elementos relacionados à autenticidade documental."
  },
  {
    codigo: "EVD-05",
    icone: "alvo",
    titulo: "Balística Forense",
    descricao: "Análise de disparos, trajetórias, impactos, estojos, projéteis e demais vestígios relacionados a armas de fogo."
  },
  {
    codigo: "EVD-06",
    icone: "carroAcidente",
    titulo: "Acidentes de Trânsito",
    descricao: "Reconstrução da dinâmica de acidentes e atropelamentos, com análise de velocidade, frenagem, tempo de reação, trajetória e vestígios."
  },
  {
    codigo: "EVD-07",
    icone: "laudoCheck",
    titulo: "Análise Crítica de Laudos Oficiais",
    descricao: "Revisão técnico-científica de laudos periciais, identificação de inconsistências, limitações metodológicas e hipóteses não avaliadas."
  },
  {
    codigo: "EVD-08",
    icone: "balanca",
    titulo: "Assistência Técnica Criminal",
    descricao: "Análise de processos, elaboração de quesitos, acompanhamento de perícias, diligências e elaboração de pareceres técnicos."
  }
];