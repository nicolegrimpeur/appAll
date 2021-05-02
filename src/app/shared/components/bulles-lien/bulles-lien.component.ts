import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bulles-lien',
  templateUrl: './bulles-lien.component.html',
  styleUrls: ['./bulles-lien.component.scss'],
})
export class BullesLienComponent {
  @Input() title: string;
  @Input() href: string;
  @Input() logo: string;

  constructor() {
    console.log(this.title);
  }

}
