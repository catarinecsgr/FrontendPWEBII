import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProduto : string = 'Curso de Angular';
  anuncio : string = `O ${this.nomeProduto} está em promoção`; //literal string utiliza o sinal de crase (`)
  idProduto : number = 3;
  precoProduto : number = 2.51;
  promocao : boolean = true;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31';


//Criação de variáveis vêm antes do construtor

  constructor() {
    //variáveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
  }

  ngOnInit(): void {

  }


}
