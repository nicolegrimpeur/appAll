import {Component} from '@angular/core';
import {Language} from '../shared/langue';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.page.html',
  styleUrls: ['./residences.page.scss'],
})
export class ResidencesPage {
  public readonly langue: string;
  constructor(public alertController: AlertController) {
    this.langue = Language.value;
  }

  changeLangue(event: any) {
    Language.value = event.detail.value;
    this.addAlert().then();
  }

  async addAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Passage de la langue en ' + ((Language.value === 'fr') ? 'Français' : 'Anglais'),
      buttons: ['OK']
    });

    await alert.present();
  }
}
