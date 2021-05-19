import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //Inserido em todos os modulos
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [MenuComponent, HomeComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, HomeComponent, FooterComponent], //Exportando p/ Modulo principal
})
export class NavegacaoModule {}
