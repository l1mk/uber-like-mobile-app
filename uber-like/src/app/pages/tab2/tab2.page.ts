import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor() { }

  home = 
  {
    address: "200 s Street",
    city: "Houston TX 77450"
  }


workPlace = 
  {
    address: "12300 Theall Road",
    city: "Houston TX 77455"
  }

  ngOnInit() {
  }

  adPage(){
    window.open('https://joinup.es/en/', '_system');
  }
  
}
