import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoPage } from './sto.page';

const routes: Routes = [
  {
    path: '',
    component: StoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoPageRoutingModule {}
