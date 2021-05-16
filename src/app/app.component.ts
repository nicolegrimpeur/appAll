import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    window.addEventListener('load', this.modifRouterOutlet);
    window.addEventListener('resize', this.modifRouterOutlet);
  }

  // passe la page en taille pleine pour passer en dessous du tabs
  modifRouterOutlet() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
