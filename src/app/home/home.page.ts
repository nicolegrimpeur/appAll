import {Component, OnInit} from '@angular/core';
import {TextesService} from '../core/http/textes/textes.service';
import {TextesResultsModel} from '../shared/models/textes-results.model';
import {IonRouterOutlet, Platform} from '@ionic/angular';
import {Plugins} from '@capacitor/core';
import {Router} from '@angular/router';

const {App} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private readonly idText = 'All';  // id utilisé pour le json
  public json = new TextesResultsModel();


  constructor(
    private readonly textesService: TextesService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private route: Router
  ) {

    // gestion de la touche mobile back
    this.platform.backButton.subscribeWithPriority(-1, () => {
      // si l'on est sur la page principale on quitte l'application
      if (this.route.url === '/tabs/home') {
        App.exitApp();
      } else if (this.route.url === '/tabs/residences') {  // si on est sur la page de résidence on va sur la page principale
        this.route.navigate(['/tabs/home']).then();
      } else {  // sinon c'est que l'on est sur la page d'une résidence -> on va sur la liste des résidences
        this.route.navigate(['/tabs/residences']).then();
      }
    });
  }

  ngOnInit() {
    // récupération du json en ligne
    this.textesService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      this.json = results;
    });

    this.playLogo();
  }

  // lance l'event du click sur le logo
  playLogo(): void {
    const currentDiv = document.getElementById('logo');

    if (currentDiv !== null) {
      currentDiv.addEventListener('click', this.eventLogo);
    }
  }

  eventLogo() {
    const currentDiv = document.getElementById('logo');

    if (currentDiv !== null) {
      const img = currentDiv.firstElementChild;
      img.setAttribute('src', '../../assets/gif/logoAll.gif');
      img.setAttribute('style', 'border-radius: 10%');

      currentDiv.setAttribute('id', 'gif');
      // une fois le gif finit, on le remplace par le logo
      setTimeout(() => {
        currentDiv.setAttribute('id', 'logo');
        img.setAttribute('src', '../../assets/image/logoAll.png');
        img.removeAttribute('style');
      }, 4300);
    }
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }
}
