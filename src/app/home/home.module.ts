import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {BtnListComponent} from '../shared/components/btn-list/btn-list.component';
import {ErreurConnexionComponent} from '../shared/components/erreur-connexion/erreur-connexion.component';
import {BullesLienComponent} from '../shared/components/bulles-lien/bulles-lien.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    BtnListComponent,
    ErreurConnexionComponent,
    BullesLienComponent
  ],
  declarations: [HomePage, BtnListComponent, ErreurConnexionComponent, BullesLienComponent]
})
export class HomePageModule {
}
