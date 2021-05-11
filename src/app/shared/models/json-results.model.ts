import {TextesModel} from './textes.model';
import {IdAffichageModel} from './id-affichage.model';
import {BullesLienModel} from './bullesLien.model';
import {ColInfoModel} from './colInfo.model';

export class JsonResultsModel {
  news: Array<string>;
  nameLiens: string;
  liens: Array<TextesModel>;
  nameInfos: string;
  infos: Array<TextesModel>;
  idAffichage: IdAffichageModel;
  bullesLien: Array<BullesLienModel>;
  colInfo: Array<ColInfoModel>;
}
