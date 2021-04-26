import {Component, Input, OnInit} from '@angular/core';
import {AjoutTexte, CleanForm} from '../../models/formulaire';

@Component({
  selector: 'app-btn-list',
  templateUrl: './btn-list.component.html',
  styleUrls: ['./btn-list.component.scss'],
})
export class BtnListComponent implements OnInit {
  // nom du bouton
  @Input() id: string;
  // texte à afficher au clic
  @Input() content: string;
  // id du texte qui sera afficher -> permet de savoir si l'on a déjà cliqué dessus ou non
  @Input() idText: string;
  // ids des zones de la page à supprimer
  @Input() idAffichage: string[];

  constructor() {
  }

  ngOnInit() {
  }

  addTexte() {
    // si le texte que l'on cherche à afficher n'a pas déjà été affiché
    if (document.getElementById(this.idText) === null) {
      // réinitialise les div contenus dans idDiv à des barres vides, prêtes à accueillir le texte
      CleanForm(this.idAffichage);

      // affiche le texte dans la div_infos
      for (const value of this.content) {
        AjoutTexte(value, this.idText, this.idAffichage[0]);
      }
    } else {
      // sinon c'est qu'il existe déjà, alors on le supprime
      CleanForm(this.idAffichage);
    }
  }
}
