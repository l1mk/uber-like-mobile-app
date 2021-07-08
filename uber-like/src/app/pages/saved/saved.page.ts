import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addFavorite(fLogin: NgForm) {
    console.log(fLogin.valid);
  }

}
