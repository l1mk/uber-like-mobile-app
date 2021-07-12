import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  lastTrip = {
    date: "08-02-2021 05-34 p.m.",
    vehicle: "Renault Symbol 0154XXX",
    price: "15,50",
    img: "map-313x125.png",
    address: "23423 South Street"
  }

  constructor() { }

  ngOnInit() {
  }

}
