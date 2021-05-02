import {Component, OnInit} from '@angular/core';
import {SubscribeService} from '../core/subscribe/subscribe.service';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage implements OnInit {
  private readonly idText = 'STO';

  constructor(
    public readonly subscribeService: SubscribeService
  ) {
  }

  ngOnInit() {
    // récupération du json en ligne
    this.subscribeService.initTextes(this.idText);

    // récupération du lien vers le groupe facebook en ligne
    this.subscribeService.initLink(this.idText);
  }

  // click sur le bouton facebook
  clickFacebook(): void {
    window.open(this.subscribeService.link.link, '_blank');
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }
}
