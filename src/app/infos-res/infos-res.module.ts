import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InfosResPageRoutingModule} from './infos-res-routing.module';

import {InfosResPage} from './infos-res.page';
import {HomePageModule} from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosResPageRoutingModule,
    HomePageModule
  ],
  declarations: [InfosResPage]
})
export class InfosResPageModule {
}
