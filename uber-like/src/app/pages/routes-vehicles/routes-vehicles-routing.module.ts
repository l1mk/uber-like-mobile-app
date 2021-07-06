import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesVehiclesPage } from './routes-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: RoutesVehiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesVehiclesPageRoutingModule {}
