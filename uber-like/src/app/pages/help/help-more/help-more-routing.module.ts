import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpMorePage } from './help-more.page';

const routes: Routes = [
  {
    path: '',
    component: HelpMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpMorePageRoutingModule {}
