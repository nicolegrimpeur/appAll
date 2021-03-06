import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {BtnListComponent} from '../shared/components/btn-list/btn-list.component';
import {ErreurConnexionComponent} from '../shared/components/erreur-connexion/erreur-connexion.component';
import {BullesLienComponent} from '../shared/components/bulles-lien/bulles-lien.component';
import {ColInfoComponent} from '../shared/components/col-info/col-info.component';
import {TemplatePageComponent} from '../shared/components/template-page/template-page.component';
import {PageComponent} from '../shared/components/page/page.component';

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
    BullesLienComponent,
    ColInfoComponent,
    TemplatePageComponent,
    PageComponent
  ],
  declarations: [HomePage, BtnListComponent, ErreurConnexionComponent, BullesLienComponent, ColInfoComponent, TemplatePageComponent, PageComponent]
})
export class HomePageModule {
}
