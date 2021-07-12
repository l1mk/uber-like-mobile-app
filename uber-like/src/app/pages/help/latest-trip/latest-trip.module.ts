import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestTripPageRoutingModule } from './latest-trip-routing.module';

import { LatestTripPage } from './latest-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestTripPageRoutingModule
  ],
  declarations: [LatestTripPage]
})
export class LatestTripPageModule {}
