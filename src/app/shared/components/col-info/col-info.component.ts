import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-col-info',
  templateUrl: './col-info.component.html',
  styleUrls: ['./col-info.component.scss'],
})
export class ColInfoComponent {
  @Input() title;
  @Input() info1;
  @Input() info2;

  constructor() {
  }

}
