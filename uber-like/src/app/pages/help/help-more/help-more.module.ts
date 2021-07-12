import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpMorePageRoutingModule } from './help-more-routing.module';

import { HelpMorePage } from './help-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpMorePageRoutingModule
  ],
  declarations: [HelpMorePage]
})
export class HelpMorePageModule {}
