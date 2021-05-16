import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {StoPageRoutingModule} from './sto-routing.module';

import {StoPage} from './sto.page';
import {HomePageModule} from '../../home/home.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        StoPageRoutingModule,
        HomePageModule
    ],
  declarations: [StoPage]
})
export class StoPageModule {
}
