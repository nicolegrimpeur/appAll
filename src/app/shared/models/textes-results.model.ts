import {TextesModel} from './textes.model';
import {IdAffichageModel} from './id-affichage.model';

export class TextesResultsModel {
  liens: Array<TextesModel>;
  infos: Array<TextesModel>;
  idAffichage: Array<IdAffichageModel>;
}
