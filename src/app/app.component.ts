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
    const router = document.querySelectorAll('ion-router-outlet');

    router.forEach(element => {
      if (element.hasAttribute('tabs')) {
        element.setAttribute('style', 'height: 117%');
      }
    });
  }
}
