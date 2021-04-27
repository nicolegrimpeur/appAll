import { Component, OnInit } from '@angular/core';
import { TextesService } from '../core/http/textes/textes.service';
import { TextesResultsModel } from '../shared/models/textes-results.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private readonly idText = 'All';
  public json = new TextesResultsModel();

  constructor(private readonly textesService: TextesService) {
    textesService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      this.json = results;
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
