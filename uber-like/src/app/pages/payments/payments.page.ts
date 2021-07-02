import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor() { }

  payments = [
    {
      img: 'visa_avatar.svg',
      selected: true,
      number: '1316******7755',
      name: 'John Smith',
      type: 'débito'
    },
    {
      img: 'visa_avatar.svg',
      selected: false,
      number: '1316******78145',
      name: 'John Smith',
      type: 'crédito'
    },
    {
      img: 'mastercard_avatar.svg',
      selected: false,
      number: '1488******1111',
      name: 'John Smith',
      type: 'débito'
    }
  ];

  ngOnInit() {
  }

  select(){
    //code to change "selected" on the card
    console.log('click')
  }

}
