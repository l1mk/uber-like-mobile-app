import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditCardPageRoutingModule } from './credit-card-routing.module';

import { CreditCardPage } from './credit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditCardPageRoutingModule
  ],
  declarations: [CreditCardPage]
})
export class CreditCardPageModule {}
