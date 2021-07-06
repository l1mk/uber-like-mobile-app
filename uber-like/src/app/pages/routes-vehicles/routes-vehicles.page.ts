import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-routes-vehicles',
  templateUrl: './routes-vehicles.page.html',
  styleUrls: ['./routes-vehicles.page.scss'],
})
export class RoutesVehiclesPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor() { }

  vehicles = [
    {
      img: 'bike-avatar-wide.svg',
      selected: false,
      name: 'Bicycle',
      price: 'Aprox. $25',
      estimate: 'ETA 2:42pm'
    },
    {
      img: 'scooter-avatar-wide.svg',
      selected: false,
      name: 'Scooter',
      price: 'Aprox. $5',
      estimate: 'ETA 2:50pm'
    },
    {
      img: 'taxi-avatar-wide.svg',
      selected: true,
      name: 'Taxi',
      price: 'Aprox. $100',
      estimate: 'ETA 1:40pm'
    },
    {
      img: 'limo-avatar-wide.svg',
      selected: false,
      name: 'Limousine',
      price: 'Aprox. $120',
      estimate: 'ETA 1:40pm'
    }
  ];

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
