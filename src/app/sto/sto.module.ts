import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { StoPageRoutingModule } from './sto-routing.module';

import { StoPage } from './sto.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StoPageRoutingModule
  ],
  declarations: [StoPage]
})
export class StoPageModule {}
