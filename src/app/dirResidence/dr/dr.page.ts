import {Component, OnInit} from '@angular/core';
import {JsonResultsModel} from '../../shared/models/json-results.model';
import {SubscribeService} from '../../core/subscribe/subscribe.service';

@Component({
  selector: 'app-dr',
  templateUrl: './dr.page.html',
  styleUrls: ['./dr.page.scss'],
})
export class DrPage implements OnInit {
  private readonly idText = 'DR';  // id utilisé pour le json
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
      // permet de terminer l'animation
      event.target.complete();
      // rafraichi le json
      this.ngOnInit();
    }, 1000);
  }
}
