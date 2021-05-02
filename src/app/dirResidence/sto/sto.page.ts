import {Component, OnInit} from '@angular/core';
import {SubscribeService} from '../../core/subscribe/subscribe.service';
import {JsonResultsModel} from '../../shared/models/json-results.model';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage implements OnInit {
  private readonly idText = 'STO';  // id utilisé pour le json
  public json = new JsonResultsModel();  // stockage du json

  constructor(public readonly subscribeService: SubscribeService) {
  }

  ngOnInit() {
    // récupération du json en ligne
    this.subscribeService.initTextes(this.idText).then((results: JsonResultsModel) => {
      this.json = results;
    });
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }
}
