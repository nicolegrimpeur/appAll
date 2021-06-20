import {Component, Input, OnInit} from '@angular/core';
import {JsonResultsModel} from '../../models/json-results.model';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss'],
})
export class TemplatePageComponent implements OnInit {
  @Input() json: JsonResultsModel;

  constructor() { }

  ngOnInit() {}

}
