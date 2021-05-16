import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrPage } from './dr.page';

const routes: Routes = [
  {
    path: '',
    component: DrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrPageRoutingModule {}
