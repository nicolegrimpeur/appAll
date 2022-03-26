import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonResultsModel} from '../../../shared/models/json-results.model';
import {Language} from '../../../shared/langue';
import {ListeModel} from '../../../shared/models/liste.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextesService {
  constructor(private readonly http: HttpClient) {
  }

  // récupère le json en ligne
  getJson(nameText: string): Observable<JsonResultsModel> {
    const url = environment.base + nameText + '_' + Language.value;
    return this.http.get<JsonResultsModel>(url);
  }

  // récupère la liste de résidence en ligne
  getListe(): Observable<ListeModel> {
    const url = environment.base + 'listeResidences';
    return this.http.get<ListeModel>(url);
  }
}
