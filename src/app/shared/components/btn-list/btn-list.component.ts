import {Component, Input} from '@angular/core';
import {AjoutTexte, CleanForm} from '../../models/formulaire';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-btn-list',
  templateUrl: './btn-list.component.html',
  styleUrls: ['./btn-list.component.scss'],
})
export class BtnListComponent {
  // nom du bouton
  @Input() id: string;
  // texte à afficher au clic
  @Input() content: string;
  // ids des zones de la page à supprimer
  @Input() idAffichage: string[];

  @ViewChild('button') button;

  constructor() {
  }

  addTexte() {
    // si le texte que l'on cherche à afficher n'a pas déjà été affiché
    if (document.getElementsByClassName(this.id).length === 0) {
      // réinitialise les div contenus dans idDiv à des barres vides, prêtes à accueillir le texte
      CleanForm(this.idAffichage);

      // affiche le texte dans la div_infos
      for (const value of this.content) {
        AjoutTexte(value, this.id, this.idAffichage[0]);
      }
    } else {
      // sinon c'est qu'il existe déjà, alors on le supprime
      CleanForm(this.idAffichage);
    }

    if (this.button.fill === 'solid') {
      this.clearFill();
    }
    this.changeFill();
  }

  clearFill() {
    const buttons = document.getElementsByTagName('ion-button');

    for (let id = 0; id < buttons.length; id++) {
      if (buttons.item(id).fill !== 'clear') {
        buttons.item(id).fill = 'solid';
      }
    }
  }

  changeFill() {
    if (this.button.fill === 'solid') {
      this.button.fill = 'outline';
    } else if (this.button.fill === 'outline') {
      this.button.fill = 'solid';
    }
  }
}
