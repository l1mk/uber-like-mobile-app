import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPaymentPage } from './help-payment.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPaymentPageRoutingModule {}
