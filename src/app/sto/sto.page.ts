import {Component} from '@angular/core';
import {TextesService} from '../core/http/textes/textes.service';
import {TextesResultsModel} from '../shared/models/textes-results.model';
import {LinksResultsModel} from '../shared/models/links-results.model';
import {LinksModel} from '../shared/models/links.model';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage {
  private readonly idText = 'STO';
  private lienFacebook = new LinksModel();
  public json = new TextesResultsModel();

  constructor(
    private readonly jsonService: TextesService,
    private route: Router,
    private platform: Platform
  ) {
    // récupération du json en ligne
    jsonService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      this.json = results;
    });

    // récupération du lien vers le groupe facebook en ligne
    jsonService.getLinks().subscribe((results: LinksResultsModel) => {
      this.lienFacebook = results.links.find(element => element.id === 'facebook' + this.idText);
    });

    // retourne sur la page de résidences lorsque l'on appuie sur la touche "back"
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.route.navigate(['/tabs/residences']);
    });
  }

  clickFacebook(): void {
    window.open(this.lienFacebook.link, '_blank');
  }
}
