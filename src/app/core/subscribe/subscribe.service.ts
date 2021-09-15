import {Injectable} from '@angular/core';
import {TextesService} from '../http/textes/textes.service';
import {StorageService} from '../storage/storage.service';
import {JsonResultsModel} from '../../shared/models/json-results.model';
import {Plugins} from '@capacitor/core';
import {ListeModel} from '../../shared/models/liste.model';

const {Network} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  constructor(
    private readonly jsonService: TextesService,
    private readonly storageService: StorageService
  ) {
  }

  // retourne une promise contenant le json
  async initTextes(id: string): Promise<JsonResultsModel> {
    let json = new JsonResultsModel();

    const status = await Network.getStatus();

    // si l'on est connecté à internet
    if (status.connected) {
      // on récupère le json
      await this.jsonService.getJson(id).toPromise().then((results: JsonResultsModel) => {
        json = results;

        // stockage du json
        this.storageService.set(id, json);
      });
    } else {  // si l'on est hors ligne
      // récupération du json en local pour utilisation hors ligne
      await this.storageService.get(id).then((result) => {
        json = JSON.parse(result.value);
      });
    }

    return json;
  }

  // retourne une promise contenant le json
  async initListe(): Promise<ListeModel> {
    let liste = new ListeModel();

    const status = await Network.getStatus();

    // si l'on est connecté à internet
    if (status.connected) {
      // on récupère la liste
      await this.jsonService.getListe().toPromise().then((results: ListeModel) => {
        liste = results;

        // stockage du json
        this.storageService.set('liste', liste);
      });
    } else {  // si l'on est hors ligne
      // récupération de la liste en local pour utilisation hors ligne
      await this.storageService.get('liste').then((result) => {
        liste = JSON.parse(result.value);
      });
    }

    return liste;
  }
}
