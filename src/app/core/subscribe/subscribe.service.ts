import {Injectable} from '@angular/core';
import {TextesService} from '../http/textes/textes.service';
import {StorageService} from '../storage/storage.service';
import {JsonResultsModel} from '../../shared/models/json-results.model';
import {Plugins} from '@capacitor/core';
import {Language} from '../../shared/langue';

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

    if (status.connected) {
      await this.jsonService.getJson(id).toPromise().then((results: JsonResultsModel) => {
        json = results;

        // stockage du json
        this.storageService.set(id, json);
      });
    } else {
      // récupération du json en local pour utilisation hors ligne
      await this.storageService.get(id).then((result) => {
        json = JSON.parse(result.value);
        Language.value = json.langue;
      });
    }

    return json;
  }
}
