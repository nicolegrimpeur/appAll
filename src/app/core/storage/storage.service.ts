import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {JsonResultsModel} from '../../shared/models/json-results.model';

const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  async set(id: string, valeur: JsonResultsModel) {
    await Storage.set({
        key: id,
        value: JSON.stringify(valeur)
      }
    );
  }

  async get(id: string) {
    return Storage.get({key: id});
  }
}
