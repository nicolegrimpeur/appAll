import {Injectable} from '@angular/core';
import {Preferences} from '@capacitor/preferences';
import {Language} from '../../shared/langue';
import {isLangueActive} from '../../shared/isLangueActive';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  // stocke en local les json
  async set(id: string, valeur: any) {
    await Preferences.set({
        key: id,
        value: JSON.stringify(valeur)
      }
    );
  }

  // récupère les json à partir de l'id
  async get(id: string) {
    return Preferences.get({key: id});
  }

  // stocke en local la langue courante
  async setLangue() {
    await Preferences.set({
      key: 'langue',
      value: Language.value
    });
  }

  // récupère la langue courante en local
  async getLangue() {
    return (isLangueActive) ? Preferences.get({key: 'langue'}) : {value: 'fr'};
  }

  // récupère toutes les clés
  async getKeys() {
    return Preferences.keys();
  }
}
