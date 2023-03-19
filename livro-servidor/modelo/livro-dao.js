const Livro = require("./livro-schema");

const obterLivros = async () => {
  try {
    const livros = await Livro.find();
    return livros;
  } catch (err) {
    console.log(`Erro ao obter livros: ${err}`);
    return [];
  }
};

const incluir = async (livro) => {
  try {
    await Livro.create(livro);
    return { mensagem: "Livro incluído com sucesso" };
  } catch (err) {
    console.log(`Erro ao incluir livro: ${err}`);
    return { mensagem: "Erro ao incluir livro" };
  }
};

const excluir = async (codigo) => {
  try {
    await Livro.deleteOne({ _id: codigo });
    return { mensagem: "Livro excluído com sucesso" };
  } catch (err) {
    console.log(`Erro ao excluir livro: ${err}`);
    return { mensagem: "Erro ao excluir livro" };
  }
};

module.exports = { obterLivros, incluir, excluir };
