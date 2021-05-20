import { Component, Input } from '@angular/core';
import { Produto } from '../models/produtos';

@Component({
  selector: 'produto-count',
  template: `
    <div>
      <h3>Produtos</h3>
      <div>
        Produtos Ativos: {{ contadorAtivos() }} no total de
        {{ produtosCount.length }} produtos <br /><br />
      </div>
    </div>
  `,
})
export class ProdutoCountComponent {
  @Input()
  produtosCount: Produto[];

  contadorAtivos(): number {
    if (!this.produtosCount) return;
    return this.produtosCount.filter((p: Produto) => p.ativo).length;
  }
}
