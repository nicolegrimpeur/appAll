import {Injectable} from '@angular/core';
import {TextesService} from '../http/textes/textes.service';
import {StorageService} from '../storage/storage.service';
import {TextesResultsModel} from '../../shared/models/textes-results.model';
import {LinksResultsModel} from '../../shared/models/links-results.model';
import {LinksModel} from '../../shared/models/links.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public textes = new TextesResultsModel();
  public link = new LinksModel();

  constructor(
    private readonly jsonService: TextesService,
    private readonly storageService: StorageService
  ) {
  }

  // retourne un TextesResultsModel
  initTextes(id: string): void {
    this.jsonService.getTextes(id).subscribe((results: TextesResultsModel) => {
      // this.textes = results;

      // stockage du json ou récupération pour utilisation hors ligne
      if (!this.textes.constructor.length) {
        this.textes = this.storageService.get(id);
      }
      else {
        this.storageService.set(id, this.textes);
      }
      return this.textes;
    });
  }

  initLink(id: string): void {
    this.jsonService.getLinks().subscribe((results: LinksResultsModel) => {
      this.link = results.links.find(element => element.id === 'facebook' + id);

      // stockage du json ou récupération pour utilisation hors ligne
      if (this.link === undefined) {
        this.link = this.storageService.get('lienFcb' + id);
      }
      else {
        this.storageService.set('lienFcb' + id, this.link);
      }
      return this.link;
    });
  }
}
