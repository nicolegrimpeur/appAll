import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.page.html',
  styleUrls: ['./residences.page.scss'],
})
export class ResidencesPage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextPage(residence: string) {
      this.route.navigate(['/tabs/' + residence]);
  }
}
