import { IProduto } from './../../../model/IProduto.model';
import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/services/prudutos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {

  listaProdutos: IProduto[] = [];


  constructor(private produtosService : ProdutosService){

  }

  ngOnInit(): void{
    this.carregarProdutos();
  }
  carregarProdutos(): void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    })
  }
  deletar(produto: IProduto): void {
    this.produtosService.excluir(produto.id!).subscribe(() =>{
    this.produtosService.exibirMensagem(
    'SISTEMA',
    `${produto.nome} foi excluido com sucesso!`,
    'toast-error'
    );
    this.carregarProdutos();
  });
  }
}
