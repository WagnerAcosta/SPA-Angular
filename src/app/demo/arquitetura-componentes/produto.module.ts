import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import de formatação
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
registerLocaleData(localPt);

import { ProdutoRoutingModule } from './produto.route';

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produto.app.component';

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent,
    ProdutoAppComponent,
  ],
  imports: [CommonModule, ProdutoRoutingModule],
  exports: [],
})
export class ProdutoModule {}
