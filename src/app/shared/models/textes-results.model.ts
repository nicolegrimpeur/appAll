import {TextesModel} from './textes.model';
import {IdAffichageModel} from './id-affichage.model';
import {BullesLienModel} from './bullesLien.model';

export class TextesResultsModel {
  liens: Array<TextesModel>;
  infos: Array<TextesModel>;
  idAffichage: IdAffichageModel;
  bullesLien: Array<BullesLienModel>;
}
