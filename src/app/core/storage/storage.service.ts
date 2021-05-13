import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {JsonResultsModel} from '../../shared/models/json-results.model';
import {Language} from '../../shared/langue';

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

  async setLangue() {
    await Storage.set({
      key: 'langue',
      value: Language.value
    });
  }

  async getLangue() {
    return Storage.get({key: 'langue'});
  }

  async getKeys() {
    return Storage.keys();
  }
}
