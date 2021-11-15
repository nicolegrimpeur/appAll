import {Injectable} from '@angular/core';
import {TextesService} from '../http/textes/textes.service';
import {StorageService} from '../storage/storage.service';
import {JsonResultsModel} from '../../shared/models/json-results.model';
import {Network} from '@capacitor/network';
import {ListeModel} from '../../shared/models/liste.model';
import {lastValueFrom} from 'rxjs';

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
      await lastValueFrom(this.jsonService.getJson(id))
        .then((results: JsonResultsModel) => {
          json = results;

          // stockage du json
          this.storageService.set(id, json);
        })
        .catch(async () => {
          // récupération du json en local pour utilisation hors ligne
          await this.storageService.get(id).then((result) => {
            json = JSON.parse(result.value);
          });
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
      await lastValueFrom(this.jsonService.getListe()).then((results: ListeModel) => {
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
