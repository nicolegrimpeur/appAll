import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.page.html',
  styleUrls: ['./residences.page.scss'],
})
export class ResidencesPage implements OnInit {
  constructor(
    private route: Router,
    private platform: Platform
  ) {

    // retourne sur la page principale lorsque l'on appuie sur la touche "back"
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.route.navigate(['/']);
    });
  }

  ngOnInit() {
  }

  nextPage(residence: string) {
      this.route.navigate(['/tabs/' + residence]);
  }
}
