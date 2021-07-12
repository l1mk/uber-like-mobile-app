import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPaymentPageRoutingModule } from './help-payment-routing.module';

import { HelpPaymentPage } from './help-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpPaymentPageRoutingModule
  ],
  declarations: [HelpPaymentPage]
})
export class HelpPaymentPageModule {}
