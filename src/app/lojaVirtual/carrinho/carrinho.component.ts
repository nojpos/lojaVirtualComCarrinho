import { Component, OnInit } from '@angular/core';
import { Produto } from './models/Produto';
import { Carrinho } from './models/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.component.html'
})

export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = []
  totalCompra: number = 0;

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
    if (this.carrinho.find(produto => produto.produto.id === item.id)) {
      let produtoAtualizar = this.carrinho.findIndex(produto => produto.produto.id === item.id);
      this.carrinho[produtoAtualizar].valorTotal += item.valor;
      this.carrinho[produtoAtualizar].unidade += 1;
    }
    else {
      let oCarrinho = {produto: item, unidade: 1, valorTotal: item.valor}
      this.carrinho.push(oCarrinho)
      console.log(this.carrinho)
    }
    var valores = this.carrinho.map(item => item.valorTotal)
    this.totalCompra = valores.reduce((a, b) => a + b, 0);
  }

}
