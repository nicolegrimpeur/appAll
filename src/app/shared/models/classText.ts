import {CleanForm, AjoutTexte} from './formulaire';

import json from '../../../assets/json/textesSTO.json';

export class ClassText {
  private readonly idBarre: string;
  private readonly idTexte: string;
  private readonly idDiv: string[];

  constructor(idBarre: string, idTexte: string, idDiv: string[]) {
    this.idBarre = idBarre;
    this.idTexte = idTexte;
    this.idDiv = idDiv;
    this.EventClick();
  }

  EventClick(): void {
    const click = document.getElementById(this.idBarre);
    // lance Texte() au click
    click.addEventListener('click', () => {
      this.Texte();
    });
  }

  Texte(): void {
    // si le texte que l'on cherche à afficher n'a pas déjà été affiché
    if (document.getElementById(this.idTexte) === null) {
      // réinitialise les div contenus dans idDiv à des barres vides, prêtes à accueillir le texte
      CleanForm(this.idDiv);

      // affiche le texte dans la div_infos
      for (const value of json[this.idBarre]) {
        AjoutTexte(value, this.idTexte, this.idDiv[0]);
      }
    } else {
      // sinon c'est qu'il existe déjà, alors on le supprime
      CleanForm(this.idDiv);
    }
  }
}
