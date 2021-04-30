import {Component, OnInit} from '@angular/core';
import {TextesService} from '../core/http/textes/textes.service';
import {TextesResultsModel} from '../shared/models/textes-results.model';
import {LinksResultsModel} from '../shared/models/links-results.model';
import {LinksModel} from '../shared/models/links.model';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.page.html',
  styleUrls: ['./sto.page.scss'],
})
export class StoPage implements OnInit {
  private readonly idText = 'STO';
  private lienFacebook = new LinksModel();
  public json = new TextesResultsModel();

  constructor(private readonly jsonService: TextesService) {
  }

  ngOnInit() {
    // récupération du json en ligne
    this.jsonService.getTextes(this.idText).subscribe((results: TextesResultsModel) => {
      this.json = results;
    });

    // récupération du lien vers le groupe facebook en ligne
    this.jsonService.getLinks().subscribe((results: LinksResultsModel) => {
      this.lienFacebook = results.links.find(element => element.id === 'facebook' + this.idText);
    });
  }

  // click sur le bouton facebook
  clickFacebook(): void {
    window.open(this.lienFacebook.link, '_blank');
  }

  // événement pour rafraichir la page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }
}
