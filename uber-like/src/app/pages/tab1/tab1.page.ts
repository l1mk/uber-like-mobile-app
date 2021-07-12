import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  user = {
    name: 'John Smith',
    email: 'jm@gmail,com',
    phone: '(123)456789',
    birthdate: '04/02/1986',
    genre: 'male',
  };

  constructor() { }

  ngOnInit() {
  }

}
