import { Component, OnInit } from '@angular/core';

import { Produto } from '../models/produtos';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
})
export class ProdutoDashboardComponent implements OnInit {
  constructor() {}

  produtos: Produto[];

  ngOnInit(): void {
    this.produtos = [
      {
        id: 1,
        nome: 'Samgung J4',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg',
      },
      {
        id: 2,
        nome: 'TV',
        ativo: false,
        valor: 100,
        imagem: 'monitor.jpg',
      },
      {
        id: 3,
        nome: 'Samgung J4',
        ativo: true,
        valor: 100,
        imagem: 'mouse.jpg',
      },
    ];
  }

  alterarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
