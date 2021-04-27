import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TextesResultsModel} from '../../../shared/models/textes-results.model';

@Injectable({
  providedIn: 'root'
})
export class TextesService {
  private textApi = 'https://nicob.space/apiJson';

  constructor(private readonly http: HttpClient) { }

  getTextes(nameText: string): Observable<TextesResultsModel>{
    const url = this.textApi + '/' + nameText;
    return this.http.get<TextesResultsModel>(url);
  }
}
