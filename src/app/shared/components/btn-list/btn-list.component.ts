import {Component, Input} from '@angular/core';
import {AjoutTexte, CleanForm} from '../../models/formulaire';

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
  }
}
