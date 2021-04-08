import {Component, OnInit} from '@angular/core';
import {ClassText} from '../shared/models/classText';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.Add_event();
  }

  // ajoute les événements aux différents labels
  Add_event(): void {
    const ucopia = new ClassText('ucopia', 'texte_ucopia', 'div_infos');
    const covid = new ClassText('covid', 'texte_covid', 'div_infos');
    const colis = new ClassText('colis', 'texte_colis', 'div_infos');
    const ru = new ClassText('ru', 'texte_ru', 'div_infos');
  }
}
