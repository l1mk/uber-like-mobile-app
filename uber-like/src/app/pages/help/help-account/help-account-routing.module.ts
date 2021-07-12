import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpAccountPage } from './help-account.page';

const routes: Routes = [
  {
    path: '',
    component: HelpAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpAccountPageRoutingModule {}
