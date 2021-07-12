import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpAccountPageRoutingModule } from './help-account-routing.module';

import { HelpAccountPage } from './help-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpAccountPageRoutingModule
  ],
  declarations: [HelpAccountPage]
})
export class HelpAccountPageModule {}
