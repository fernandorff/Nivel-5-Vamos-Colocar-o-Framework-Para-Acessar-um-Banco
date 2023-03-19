import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import ControleLivroService from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivroService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((livros) => {
      this.livros = livros;
    });
  }

  excluir = (codigo: string) => {
    this.servLivros.excluir(codigo).then(() => {
      this.servLivros.obterLivros().then((livros) => {
        this.livros = livros;
      });
    });
  };

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora.toString());
  };
}
