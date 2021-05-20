import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../models/produtos';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
})
export class ProdutoCardDetalheComponent {
  @Input()
  produtoCard: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();
  emitirEvento(): void {
    this.status.emit(this.produtoCard);
  }
}
