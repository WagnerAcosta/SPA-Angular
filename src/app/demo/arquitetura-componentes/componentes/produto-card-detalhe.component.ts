import { Component, Input } from '@angular/core';
import { Produto } from '../models/produtos';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
})
export class ProdutoCardDetalheComponent {
  @Input()
  produtoCard: Produto;
}
