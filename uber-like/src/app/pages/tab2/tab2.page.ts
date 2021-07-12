import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor() { }

  lastTrip = {
    date: "08-02-2021 05-34 p.m.",
    vehicle: "Renault Symbol 0154XXX",
    price: "15,50",
    img: "map-313x125.png",
    address: "23423 South Street"
  }

  favorites = [
    { 
      name: "Home",
      address: "200 s Street Houston TX 77450",
      img: "home_avatar.svg"
    },
    {
      name: "Work",
      address: "12300 Theall Road Houston TX 77455",
      img: "work_avatar.svg"
    }
  ]

  ngOnInit() {
  }

  adPage(){
    window.open('https://joinup.es/en/', '_system');
  }
  
}
