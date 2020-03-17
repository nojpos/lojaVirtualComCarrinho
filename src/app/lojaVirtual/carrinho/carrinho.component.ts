import { Component, OnInit } from '@angular/core';
import { Produto } from './models/Produto';
import { Carrinho } from './models/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.component.html'
})

export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = []

  constructor() { }

  produtos: Produto[] = [
    {
      id: 1,
      descricao: 'Produto 1',
      valor: 100.00
    },
    {
      id: 2,
      descricao: 'Produto 2',
      valor: 150.00
    }
  ]

  ngOnInit(): void {
  }

  adicionar(item: Produto) {
    this.carrinho.push(new Carrinho (item, 1, item.valor))
    console.log(this.carrinho)
  }

}
