import { Component, OnInit } from '@angular/core';
import {ClassText} from '../shared/models/classText';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Add_event();
  }

  // ajoute les événements aux différents labels
  Add_event(): void {
    const planning = new ClassText('laverie', 'texte_laverie', ['div_liensSTO', 'div_infosSTO']);

    const responsables = new ClassText('responsables', 'texte_responsables', ['div_infosSTO', 'div_liensSTO']);
    const evenements = new ClassText('evenements', 'texte_evenements', ['div_infosSTO', 'div_liensSTO']);
    const petitDej = new ClassText('petit_dej', 'texte_petit_dej', ['div_infosSTO', 'div_liensSTO']);
    const loisir = new ClassText('5eme', 'texte_5eme', ['div_infosSTO', 'div_liensSTO']);
  }

}
