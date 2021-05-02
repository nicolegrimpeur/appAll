import {Injectable} from '@angular/core';
import {TextesService} from '../http/textes/textes.service';
import {StorageService} from '../storage/storage.service';
import {JsonResultsModel} from '../../shared/models/json-results.model';

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

    // attend que la fonction soit terminé avant de passer à la suite
    await this.jsonService.getJson(id).toPromise().then((results: JsonResultsModel) => {
      json = results;

      // stockage du json ou récupération pour utilisation hors ligne
      if (!json.constructor.length) {
        json = this.storageService.get(id);
      } else {
        this.storageService.set(id, json);
      }
    });

    return json;
  }
}
