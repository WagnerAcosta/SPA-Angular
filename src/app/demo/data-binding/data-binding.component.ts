import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string =
    'https://diariodopoder.com.br/wp-content/uploads/2020/02/P90370532_highRes.jpg';

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  public nome: string = '';
  keyUp(event: any) {
    this.nome = event.target.value;
  }
}
