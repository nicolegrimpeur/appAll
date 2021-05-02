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

  // retourne une promise contenant le json
  async initTextes(id: string): Promise<TextesResultsModel> {
    let textes = new TextesResultsModel();

    // attend que la fonction soit terminé avant de passer à la suite
    await this.jsonService.getTextes(id).toPromise().then((results: TextesResultsModel) => {
      textes = results;

      // stockage du json ou récupération pour utilisation hors ligne
      if (!textes.constructor.length) {
        textes = this.storageService.get(id);
      } else {
        this.storageService.set(id, textes);
      }
    });

    return textes;
  }

  // retourne une promise contenant le lien
  async initLink(id: string): Promise<LinksModel> {
    let link = new LinksModel();

    // attend que la fonction soit terminé avant de passer à la suite
    await this.jsonService.getLinks().toPromise().then((results: LinksResultsModel) => {
      link = results.links.find(element => element.id === 'facebook' + id);

      // stockage du json ou récupération pour utilisation hors ligne
      if (link === undefined) {
        link = this.storageService.get('lienFcb' + id);
      } else {
        this.storageService.set('lienFcb' + id, link);
      }
    });

    return link;
  }

}
