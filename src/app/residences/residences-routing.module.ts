import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidencesPage } from './residences.page';

const routes: Routes = [
  {
    path: '',
    component: ResidencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidencesPageRoutingModule {}
