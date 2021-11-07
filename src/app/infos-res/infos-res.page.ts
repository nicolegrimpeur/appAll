import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SubscribeService} from '../core/subscribe/subscribe.service';
import {JsonResultsModel} from '../shared/models/json-results.model';

@Component({
  selector: 'app-infos-res',
  templateUrl: './infos-res.page.html',
  styleUrls: ['./infos-res.page.scss'],
})
export class InfosResPage implements OnInit {
  public json = new JsonResultsModel();  // stockage du json
  private id = ''; // stockage de l'id de la résidence

  constructor(
    private router: Router,
    private subscribeService: SubscribeService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let after = false;
    // récupère l'email dans le lien
    for (const i of this.router.url) {
      if (after && i !== '=') {
        this.id += i;
      } else if (i === '?') {
        after = true;
      }
    }

    // récupération du json en ligne
    this.subscribeService.initTextes(this.id).then((results: JsonResultsModel) => {
      this.json = results;
    });
  }
}
