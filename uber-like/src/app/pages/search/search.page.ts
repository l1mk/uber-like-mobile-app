import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private navCtrl: NavController) { }

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
  

  items = [
    {
      address: "1234 South. 23 #124-87",
      city: "Houston"
    },
    {
      address: '20200 Heights #11b-27',
      city: "Houston"
    },
    {
      address: "Cinemark 19xd",
      city: "Houston"
    }
  ]

  ngOnInit() {
  }

}
