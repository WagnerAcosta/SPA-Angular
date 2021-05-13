import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.buscaProdutos().subscribe(
      (p) => {
        this.produtos = p;
        console.log(p);
      },
      (error) => console.error(error)
    );
  }
}
