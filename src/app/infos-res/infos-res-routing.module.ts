import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosResPage } from './infos-res.page';

const routes: Routes = [
  {
    path: '',
    component: InfosResPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosResPageRoutingModule {}
