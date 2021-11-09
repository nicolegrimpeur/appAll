import {Component, Input} from '@angular/core';
import {TextesModel} from '../../models/textes.model';

@Component({
  selector: 'app-btn-list',
  templateUrl: './btn-list.component.html',
  styleUrls: ['./btn-list.component.scss'],
})
export class BtnListComponent {
  // infos à afficher
  @Input() infos: Array<TextesModel>;

  // stocke le contenu à afficher
  content = [];
  // stocke l'id du bouton affiché précédemment
  currentIdAffichage = '';

  constructor() {
  }

  // au click sur un bouton, id l'id du bouton, content le contenu à afficher
  addTexte(id, content) {
    // on change le fill du bouton
    this.changeFill(id);

    // si un autre bouton avait été cliqué précédemment, alors on le remet à 0
    if (this.currentIdAffichage !== '' && this.currentIdAffichage !== id) {
      this.changeFill(this.currentIdAffichage);
    }

    // si le click est sur le même bouton, on supprime le contenu, sinon on l'affiche
    if (this.content === content) {
      this.content = [];
      this.currentIdAffichage = '';
    } else {
      this.content = content;
      this.currentIdAffichage = id;
    }
  }

  // change le fill du bouton
  changeFill(id) {
    const button = document.getElementById(id);
    if (button.getAttribute('fill') === 'solid') {
      button.setAttribute('fill', 'outline');
    } else if (button.getAttribute('fill') === 'outline') {
      button.setAttribute('fill', 'solid');
    }
  }
}
