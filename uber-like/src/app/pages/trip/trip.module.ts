import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlideDrawerComponent } from './../../components/slide-drawer/slide-drawer.component';

import { IonicModule } from '@ionic/angular';

import { TripPageRoutingModule } from './trip-routing.module';

import { TripPage } from './trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripPageRoutingModule
  ],
  declarations: [TripPage, SlideDrawerComponent]
})
export class TripPageModule {}
