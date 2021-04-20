import {Component, OnInit} from '@angular/core';
import {ClassText} from '../shared/models/classText';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.addEvents();
  }

  // ajoute les événements aux différents labels
  addEvents(): void {
    const ucopia = new ClassText('ucopia', 'texte_ucopia', ['div_infosAll']);
    const covid = new ClassText('covid', 'texte_covid', ['div_infosAll']);
    const colis = new ClassText('colis', 'texte_colis', ['div_infosAll']);
    const ru = new ClassText('ru', 'texte_ru', ['div_infosAll']);
    this.playLogo();
  }

  // lance l'event du click sur le logo
  playLogo(): void {
    const currentDiv = document.getElementById('logo');
    let time;
    currentDiv.addEventListener('click', () => {
      const img = currentDiv.firstElementChild;
      img.setAttribute('src', '../../assets/gif/logoAll.gif');
      img.setAttribute('style', 'border-radius: 10%');

      currentDiv.setAttribute('id', 'gif');

      // une fois le gif finit, on le remplace par le logo
      time = setTimeout(() => {
        currentDiv.setAttribute('id', 'logo');
        img.setAttribute('src', '../../assets/image/logoAll.png');
        img.removeAttribute('style');
        clearTimeout(time);
      }, 4300);
    });
  }
}
