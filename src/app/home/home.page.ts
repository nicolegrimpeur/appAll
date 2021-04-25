import {Component} from '@angular/core';
import {ClassText} from '../shared/models/classText';
import {TextesService} from '../core/http/textes/textes.service';
import {TextesResultsModel} from '../shared/models/textes-results.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private readonly idDiv = ['div_infosAll'];
  private readonly idText = 'All';
  public json = new TextesResultsModel();

  constructor(private readonly textesService: TextesService) {
    this.textesService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      console.log('results', results);
      this.json = results;
      this.addEvents();
    });
  }

  // ajoute les événements aux différents labels
  addEvents(): void {
    console.log('json', this.json);
    // const ucopia = new ClassText('ucopia', 'texte_ucopia', this.idDiv, this.idText, this.json);
    // const covid = new ClassText('covid', 'texte_covid', this.idDiv, this.idText, this.json);
    // const colis = new ClassText('colis', 'texte_colis', this.idDiv, this.idText, this.json);
    // const ru = new ClassText('ru', 'texte_ru', this.idDiv, this.idText, this.json);
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
