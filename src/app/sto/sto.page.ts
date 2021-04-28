import { Component } from '@angular/core';
import { TextesService } from '../core/http/textes/textes.service';
import { TextesResultsModel } from '../shared/models/textes-results.model';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage {
  private readonly idText = 'STO';
  public json = new TextesResultsModel();

  constructor(private readonly textesService: TextesService) {
    textesService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      // this.json = results;
    });
  }
}
