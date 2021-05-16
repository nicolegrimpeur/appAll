import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ResidencesPageRoutingModule} from './residences-routing.module';

import {ResidencesPage} from './residences.page';
import {HomePageModule} from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidencesPageRoutingModule,
    HomePageModule
  ],
  declarations: [ResidencesPage]
})
export class ResidencesPageModule {
}
