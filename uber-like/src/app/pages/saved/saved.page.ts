import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  favorites = [
    { 
      name: "Home",
      address: "115 #09-26 heights blvd",
      img: "home_avatar.svg"
    },
    {
      name: "Trabajo",
      address: "2325 theall road",
      img: "work_avatar.svg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  addFavorite(fLogin: NgForm) {
    console.log(fLogin.valid);
  }

}
