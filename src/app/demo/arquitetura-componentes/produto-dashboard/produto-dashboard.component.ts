import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoCardDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count.component';

import { Produto } from '../models/produtos';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
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

  @ViewChild(ProdutoCountComponent, { static: false })
  contador: ProdutoCountComponent;

  @ViewChild('teste', { static: false })
  mensagemTela: ElementRef;

  @ViewChildren(ProdutoCardDetalheComponent)
  botoes: QueryList<ProdutoCardDetalheComponent>;

  ngAfterViewInit(): void {
    console.log('Objeto do Contador', this.contador.produtosCount);

    let cliqueTeste: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      'click'
    );
    cliqueTeste.subscribe(() => {
      alert('clicou no texto');
      return;
    });

    console.log(this.botoes);
    this.botoes.forEach((p) => {
      console.log(p.produtoCard);
    });
  }

  alterarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
