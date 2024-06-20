import { IProduto } from './../../../model/IProduto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../../../services/prudutos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(private ProdutosService: ProdutosService, private router: Router) {}

  ngOnInit(): void{}

  salvarProduto() : void {
    this.ProdutosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto=retorno;
      this.ProdutosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID ${this.produto.id}`,
        'toast-success'
      )
      this.router.navigate(['/produtos']);

    });
  }
}
