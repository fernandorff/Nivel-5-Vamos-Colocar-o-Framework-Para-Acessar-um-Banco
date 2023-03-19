import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import styles from "../styles/Home.module.css";
import { LinhaLivro } from "../componentes/LinhaLivro";
import Livro from "../classes/modelo/Livro";
import ControleLivro from "@/classes/controle/ControleLivro";

const LivroLista: React.FC = () => {
  const controleLivros = new ControleLivro();
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    if (!carregado) {
      controleLivros.obterLivros().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: string) => {
    await controleLivros.excluir(codigo);
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="p-5">
        <h1 className={styles.title}>Livros</h1>
        <table className="table table-hover">
          <thead className="bg-dark">
            <tr className="text-center text-light">
              <th scope="col">Ações</th>
              <th scope="col">Código</th>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LivroLista;
