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
    icone: "fingerprint",
    titulo: "Perícia Papiloscópica",
    descricao: "Análise de impressões digitais para identificação de indivíduos."
  },
  {
    codigo: "EVD-02",
    icone: "documento",
    titulo: "Perícia Documentoscópica",
    descricao: "Exame de documentos para verificação de autenticidade e fraudes."
  },
  {
    codigo: "EVD-03",
    icone: "camera",
    titulo: "Perícia Fotográfica",
    descricao: "Registro e análise técnica de imagens para auxiliar nas investigações."
  },
  {
    codigo: "EVD-04",
    icone: "quimica",
    titulo: "Perícia Química",
    descricao: "Análise de substâncias para identificação de composição e origem."
  },
  {
    codigo: "EVD-05",
    icone: "dna",
    titulo: "Perícia Biológica",
    descricao: "Exames em vestígios biológicos para vinculação de pessoas e objetos."
  },
  {
    codigo: "EVD-06",
    icone: "balanca",
    titulo: "Perícia Contábil",
    descricao: "Análise de documentos contábeis e financeiros para apuração de fatos."
  }
];
