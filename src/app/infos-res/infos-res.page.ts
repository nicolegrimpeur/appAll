import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SubscribeService} from '../core/subscribe/subscribe.service';
import {JsonResultsModel} from '../shared/models/json-results.model';
import {BaseUrl} from '../shared/baseUrl';
import {Network} from '@capacitor/network';

@Component({
  selector: 'app-infos-res',
  templateUrl: './infos-res.page.html',
  styleUrls: ['./infos-res.page.scss'],
})
export class InfosResPage implements OnInit {
  @ViewChild('masthead') masthead;

  private id = ''; // stockage de l'id de la résidence
  public json = new JsonResultsModel();  // stockage du json
  private status; // stocke le status courant de la connexion internet

  constructor(
    private router: Router,
    private subscribeService: SubscribeService
  ) {
    // initialise le status
    this.initNetworkStatus().then();
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

      this.initMasthead().then();
    });
  }

  // initialise le status
  async initNetworkStatus() {
    this.status = await Network.getStatus();
  }

  // initialise l'image d'arrière plan
  async initMasthead() {
    if (this.status.connected) {
      this.masthead.el.style.height = '100vh';
      this.masthead.el.style.background = 'linear-gradient(to bottom, rgba(22, 22, 22, 0.3) 0%, rgba(22, 22, 22, 0.7) 75%, #161616 100%), url(' + BaseUrl + 'get/residence' + this.id + ')';
      this.masthead.el.style.backgroundSize = 'cover';
    }
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      // permet de terminer l'animation
      event.target.complete();
      // rafraichi le json
      this.ionViewWillEnter();
    }, 1000);
  }
}
