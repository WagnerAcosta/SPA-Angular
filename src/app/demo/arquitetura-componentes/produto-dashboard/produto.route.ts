import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoDashboardComponent } from './produto-dashboard.component';

const produtoRouterConfig: Routes = [
  { path: '', component: ProdutoDashboardComponent },
];

//Rota filha
@NgModule({
  imports: [RouterModule.forChild(produtoRouterConfig)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
