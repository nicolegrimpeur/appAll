import {Component, OnInit} from '@angular/core';
import {TextesService} from '../core/http/textes/textes.service';
import {TextesResultsModel} from '../shared/models/textes-results.model';
import {Platform} from '@ionic/angular';
import {App} from '@capacitor/core';

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
    private platform: Platform
  ) {
    // récupération du json en ligne
    textesService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      this.json = results;
    });

    // ferme l'application lorsque l'on appuie sur la touche "back"
    this.platform.backButton.subscribeWithPriority(-1, () => {
      App.exitApp();
    });
  }

  ngOnInit() {
    this.playLogo();
  }

  // lance l'event du click sur le logo
  playLogo(): void {
    const currentDiv = document.getElementById('logo');
    let time;
    currentDiv.addEventListener('click', () => {
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

          // évite les problèmes si l'on clique plusieurs fois d'affilés sur le bouton
          time = undefined;
        }, 4300);
      }
    });
  }
}
