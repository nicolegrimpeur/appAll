import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Plugins} from '@capacitor/core';
import {Router} from '@angular/router';
import {SubscribeService} from '../core/subscribe/subscribe.service';
import {JsonResultsModel} from '../shared/models/json-results.model';

const {App} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private readonly idText = 'All';  // id utilisé pour le json
  public json = new JsonResultsModel();  // stockage du json

  constructor(
    public readonly subscribeService: SubscribeService,
    private platform: Platform,
    private route: Router
  ) {
    // gestion de la touche mobile back
    this.platform.backButton.subscribeWithPriority(-1, () => {
      // si l'on est sur la page principale on quitte l'application
      if (this.route.url === '/home') {
        App.exitApp();
      } else if (this.route.url === '/residences') {  // si on est sur la page de résidence on va sur la page principale
        this.route.navigate(['/home']).then();
      } else {  // sinon c'est que l'on est sur la page d'une résidence -> on va sur la liste des résidences
        this.route.navigate(['/residences']).then();
      }
    });
  }

  ngOnInit() {
    this.playLogo();
  }

  ionViewWillEnter() {
    // récupération du json en ligne à chaque fois que l'on affiche la page
    this.subscribeService.initTextes(this.idText).then((results) => {
      this.json = results;
    });
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
      img.setAttribute('src', './assets/gif/logoAll.gif');
      img.setAttribute('style', 'border-radius: 10%');

      currentDiv.setAttribute('id', 'gif');
      // une fois le gif finit, on le remplace par le logo
      setTimeout(() => {
        currentDiv.setAttribute('id', 'logo');
        img.setAttribute('src', './assets/image/logoAll.png');
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
