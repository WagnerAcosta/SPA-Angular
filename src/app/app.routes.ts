import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demo/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CadastroComponent } from './demo/reactiveForm/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'feature',
    component: DataBindingComponent,
  },
  {
    path: 'produtos',
    component: ListaProdutoComponent,
  },
  {
    path: 'produto-detalhe/:id',
    component: ListaProdutoComponent,
  },
  {
    path: 'formulario',
    component: CadastroComponent,
  },
  {
    //Lazy Loading
    path: 'arqmodulo',
    loadChildren: () =>
      import('./demo/arquitetura-componentes/produto.module').then(
        (lazy) => lazy.ProdutoModule
      ),
  },
  { path: '**', component: NotFoundComponent }, //Caso não encontre a rota, sem ficar em ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
