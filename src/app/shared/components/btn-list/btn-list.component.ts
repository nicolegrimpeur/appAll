import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-list',
  templateUrl: './btn-list.component.html',
  styleUrls: ['./btn-list.component.scss'],
})
export class BtnListComponent implements OnInit {
  @Input() id: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {}

  addTexte() {
    console.log(this.id, this.text);
  }
}
