import {Injectable} from '@angular/core';
import {Storage} from '@capacitor/storage';
import {Language} from '../../shared/langue';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  // stocke en local les json
  async set(id: string, valeur: any) {
    await Storage.set({
        key: id,
        value: JSON.stringify(valeur)
      }
    );
  }

  // récupère les json à partir de l'id
  async get(id: string) {
    return Storage.get({key: id});
  }

  // stocke en local la langue courante
  async setLangue() {
    await Storage.set({
      key: 'langue',
      value: Language.value
    });
  }

  // récupère la langue courante en local
  async getLangue() {
    return Storage.get({key: 'langue'});
  }

  // récupère toutes les clés
  async getKeys() {
    return Storage.keys();
  }
}
