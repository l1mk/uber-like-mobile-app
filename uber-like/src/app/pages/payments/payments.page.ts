import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor() { }

  paymentSelected = {
    img: 'visa_avatar.svg',
    selected: true,
    number: '1316******7755',
    name: 'John Smith',
    type: 'débito'
  }
  
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

  select(payment: any){
    this.payments.map(function(obj){
      if (obj.selected === true ){
        obj.selected = false;
      } 
    })
    payment.selected = true;
    this.paymentSelected = payment;
  }

}
