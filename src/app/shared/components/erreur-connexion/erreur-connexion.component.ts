import {Component} from '@angular/core';
import {Language} from '../../langue';

@Component({
  selector: 'app-erreur-connexion',
  templateUrl: './erreur-connexion.component.html',
  styleUrls: ['./erreur-connexion.component.scss'],
})
export class ErreurConnexionComponent {
  public readonly langue: string;
  constructor() {
    this.langue = Language.value;
  }

}
