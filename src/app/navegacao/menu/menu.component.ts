import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: true,
    },
  ];
}

interface Nav {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}
