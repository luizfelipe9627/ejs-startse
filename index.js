// Está importando o Express de um outro diretório.
import express from "express";

// Está importando todos os arquivos do artigos e nomeando os dois em um para Artigos.
import * as funcoesArtigos from "./src/data/artigos.js";

// Variável constante que é responsável por chamar o express.
const app = express();

// Está avisando ao JS que vai ser utilizado uma engine responsável por renderizar os templates de HTML's.
app.set("view engine", "ejs");

// Está dizendo o diretório da onde está as views.
app.set("views", "./src/views");

// Criado uma variável constante responsável por armazenar a porta. Basicamente irá definir uma porta, se ele não conseguir ele vai definir em 3000.
// Para o Heroku reconhecer deve se escrever "PORT" em inglês mesmo.
const PORT = process.env.PORT || 3000;

// Quando o listen "escutar" essa porta vai executar a função criada.
app.listen(PORT, () => {
  // Irá apresentar a resposta no console.
  console.log(`O servidor está rodando em http://localhost:${PORT}`);
});

// Irá obter a resposta, e atribuir no direcionamento definido.
// O get é utilizado para obter uma lista ou detalhes de usuários. Usa o status 200.
app.get("/", (requisicao, resposta) => {
  // Uma variável constante que está recebendo os artigos que estão presentes na array Artigos de outro arquivo.
  const artigos = funcoesArtigos.obterArtigos();

  // Quando chegar na página raiz irá retornar e renderizar o template HTML que está definido na pasta views/pages/home.
  // E no objeto está puxando a variável criada dentro da tag title no arquivo home e atribuindo um valor a ele, e depois a virgula está os artigos para evitar de ocorrer algum erro.
  return resposta.render("../views/pages/home.ejs", { titulo: "EJS", artigos });
});

app.get("/artigos/:artigoId", (requisicao, resposta) => {
  // O params é um objeto que contém propriedades mapeadas para os “parâmetros” da rota nomeada. Por exemplo, se você tiver a rota / aluno /: id, a propriedade “id” estará disponível como req.params.id.
  const artigoId = requisicao.params.artigoId;

  // Está pegando a array artigos e usando a função para obter o id do artigo, tendo como seu parâmetro o id do artigo.
  const artigo = funcoesArtigos.obterArtigosId(artigoId);

  // Utilizado um operador ternário, bem parecido com o IF e ELSE.
  // Se artigo for true(no caso não estiver vazio) ele vai retornar Artigo não encontrado.
  const titulo = { artigo } ? artigo.titulo : "Artigo não encontrado";

  // Quando chegar na página definida irá retornar e renderizar o template HTML que está definido na pasta views/pages/artigo.
  // E no objeto está puxando a variável titulo e puxando o artigo para melhor funcionamento.
  return resposta.render("pages/artigos", { titulo, artigo });
});
