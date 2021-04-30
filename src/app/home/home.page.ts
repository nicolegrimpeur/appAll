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
    console.log(this.route.url);

    // ferme l'application lorsque l'on appuie sur la touche "back"
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.route.url === '/tabs/home') {
        App.exitApp();
      } else if (this.route.url === '/tabs/residences') {
        this.route.navigate(['/tabs/home']).then();
      } else {
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
    let time;
    currentDiv.addEventListener('click', () => {
      ///////////////////////////////////////////////////////// à corriger
      console.log('play');
      if (time === undefined) {
        const img = currentDiv.firstElementChild;
        img.setAttribute('src', '../../assets/gif/logoAll.gif');
        img.setAttribute('style', 'border-radius: 10%');

        currentDiv.setAttribute('id', 'gif');
        // une fois le gif finit, on le remplace par le logo
        time = setTimeout(() => {
          currentDiv.setAttribute('id', 'logo');
          img.setAttribute('src', '../../assets/image/logoAll.png');
          img.removeAttribute('style');

          // supprime le timeout de fin
          time = undefined;
        }, 4300);
      }
    });
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }
}
