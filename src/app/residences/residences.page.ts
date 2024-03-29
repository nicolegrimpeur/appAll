import {Component} from '@angular/core';
import {Language} from '../shared/langue';
import {AlertController} from '@ionic/angular';
import {SubscribeService} from '../core/subscribe/subscribe.service';
import {Router} from '@angular/router';
import {StorageService} from '../core/storage/storage.service';
import {Network} from '@capacitor/network';
import {ListeModel} from '../shared/models/liste.model';
import {isLangueActive} from '../shared/isLangueActive';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.page.html',
  styleUrls: ['./residences.page.scss'],
})
export class ResidencesPage {
  public langue: string;
  public status: any;
  public liste = new ListeModel();
  public isLangueActive = isLangueActive;

  constructor(
    public alertController: AlertController,
    public readonly subscribeService: SubscribeService,
    public storageService: StorageService,
    private route: Router
  ) {
    this.langue = Language.value;

    // on récupère la langue si elle existe déjà sinon on l'initialise dans le stockage local
    this.storageService.getLangue().then(result => {
      if (result.value !== null) {
        Language.value = result.value;
      } else {
        this.storageService.setLangue().then();
      }
      this.langue = Language.value;
    });

    this.status = {
      connected: true
    };
  }

  ionViewWillEnter() {
    // on met à jour le status pour afficher ou non le système de langue
    Network.getStatus().then(result => {
      this.status = result;
    });

    // récupère la liste de résidences
    this.subscribeService.initListe().then((results) => {
      this.liste = results;
    });
  }

  // redirige l'utilisateur au click sur un bouton
  clickEvent(id) {
    this.route.navigateByUrl('infos-res?' + id).then();
  }

  // fonction lancé par le switch de langue
  changeLangue(event: any) {
    Language.value = event.detail.value;
    this.addAlert().then();
  }

  // affiche l'alerte
  async addAlert() {
    let alert;
    if (Language.value === 'fr') {
      alert = await this.alertController.create({
        subHeader: 'Changement de la langue en Français',
        message: 'Vous allez être redirigé sur la page d\'accueil',
        buttons: ['OK']
      });
    } else if (Language.value === 'en') {
      alert = await this.alertController.create({
        subHeader: 'Language switch to English',
        message: 'You will be redirect on the main page',
        buttons: ['OK']
      });
    }

    // on affiche l'alerte
    await alert.present();

    // on enregistre la langue sur le json
    this.storageService.setLangue().then();

    // on attend que l'utilisateur supprime l'alerte
    await alert.onDidDismiss();

    // on redirige sur la page d'accueil
    this.route.navigate(['/home']).then();

    // on change la langue de la page
    this.langue = Language.value;
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ionViewWillEnter();
    }, 1000);
  }
}
