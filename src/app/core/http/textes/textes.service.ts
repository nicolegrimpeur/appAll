import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JsonResultsModel} from '../../../shared/models/json-results.model';
import {Language} from '../../../shared/langue';

@Injectable({
  providedIn: 'root'
})
export class TextesService {
  private textApi = 'https://nicob.space/apiJson';

  constructor(private readonly http: HttpClient) {
  }

  // récupère le json en ligne
  getJson(nameText: string): Observable<JsonResultsModel> {
    const url = this.textApi + '/' + nameText + '_' + Language.value;
    return this.http.get<JsonResultsModel>(url);
  }
}
