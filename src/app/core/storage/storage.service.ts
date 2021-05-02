import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageTemp: Storage | null = null;

  constructor(private storage: Storage) {
  }

  async init() {
    this.storageTemp = await this.storage.create();
  }

  set(key: string, value: any): void {
    this.storageTemp?.set(key, value);
  }

  get(key: string): any {
    return this.storageTemp?.get(key);
  }
}
