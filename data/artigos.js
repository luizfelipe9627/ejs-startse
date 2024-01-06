// Foi criado uma variável constante chamada articles que é uma array que contém dois objetos.
const artigos = [
  {
    id: 1,
    titulo: "Healthtech de “telemedicina aumentada” chega ao Brasil",
    descricao:
      "A telemedicina por si só deixou de ser uma grande novidade no mundo de saúde – e já foi até regulamentada no Brasil. Agora, depois de 2 anos de pandemia, startups e empresas do setor precisam buscar novas ferramentas para melhorar o acesso e a experiência do paciente e facilitar o trabalho das instituições de saúde.",
  },
  {
    id: 2,
    titulo: "Tesla: entregas caem com lockdown na China",
    descricao:
      "A Tesla entregou quase 18% menos veículos elétricos no segundo trimestre em relação ao trimestre anterior. A empresa alega que a paralisação na China relacionada à Covid-19 interrompeu a produção. No Bom Dia Califórnia de hoje, você confere a análise deste cenário e as possíveis apostas",
  },
];

// Função responsável por obter os artigos presentes na array Artigos.
function obterArtigos() {
  // Retorna a array Artigos.
  return artigos;
}

// Função responsável por obter o Id do artigo.
function obterArtigosId(artigoId) {
  // O find serve para encontrar algo em especifico, nesse caso foi criado um parâmetro chamado artigo que armazena o artigo procurado.
  return artigos.find((artigo) => {
    // Retorna o o Id do artigo seja igual(true) ao artigoId então ele vai retornar o artigo encontrado.
    return artigo.id === Number(artigoId);
  });
}

// O export permite que uma função local possa ser acessada em outro arquivo.
export { obterArtigos, obterArtigosId };
