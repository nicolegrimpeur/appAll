import {Component, OnInit} from '@angular/core';
import {SubscribeService} from '../../core/subscribe/subscribe.service';
import {TextesResultsModel} from '../../shared/models/textes-results.model';
import {LinksModel} from '../../shared/models/links.model';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage implements OnInit {
  private readonly idText = 'STO';
  public json = new TextesResultsModel();
  public link = new LinksModel();

  constructor(
    public readonly subscribeService: SubscribeService
  ) {
  }

  ngOnInit() {
    // récupération du json en ligne
    this.subscribeService.initTextes(this.idText).then((results: TextesResultsModel) => {
      this.json = results;
    });
    // récupération du lien vers le groupe facebook en ligne
    this.subscribeService.initLink(this.idText).then((results: LinksModel) => {
      this.link = results;
    });
  }

  // click sur le bouton facebook
  clickFacebook(): void {
    window.open(this.link.link, '_blank');
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }
}
