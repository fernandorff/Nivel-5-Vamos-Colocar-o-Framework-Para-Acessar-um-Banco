const express = require("express");
const router = express.Router();

const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");

router.get("/", async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post("/", async (req, res) => {
  const livro = req.body;
  const resultado = await incluir(livro);
  res.json(resultado);
});

router.delete("/:codigo", async (req, res) => {
  const codigo = req.params.codigo;
  const resultado = await excluir(codigo);
  res.json(resultado);
});

module.exports = router;
