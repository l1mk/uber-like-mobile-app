import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: ['./trip-list.page.scss'],
})
export class TripListPage implements OnInit {
  
  constructor() { }

  trips = [
    {
      date: '2/4/21 8:18 pm',
      price: 100,
      vehicle: 'Nissan Sentra B13 DAR162',
      rating: 5,
      img: 'routeA_artwork.png',
    },
    {
      date: '2/4/21 5:18 pm',
      price: 45,
      vehicle: 'Chevrolet Sail JCU063',
      rating: 4,
      img: 'routeB_artwork.png',
    },
    {
      date: '1/29/21 7:33 pm',
      price: 22,
      vehicle: 'Nissan Sentra B13 DAR162',
      rating: 3,
      img: 'routeA_artwork.png',
    },
    {
    date: '2/4/20 8:00 am',
    price: 100,
    vehicle: 'Chevrolet Optra CTZX90',
    rating: 1,
    img: 'routeB_artwork.png',
    }
  ];

  ngOnInit() {
  }
}
