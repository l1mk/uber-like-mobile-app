import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestTripPage } from './latest-trip.page';

const routes: Routes = [
  {
    path: '',
    component: LatestTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestTripPageRoutingModule {}
