import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoPageRoutingModule } from './sto-routing.module';

import { StoPage } from './sto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoPageRoutingModule
  ],
  declarations: [StoPage]
})
export class StoPageModule {}
