import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor() { }

  avatars = [
    {
      img: '1_avatar.svg',
      seleccionado: true
    },
    {
      img: '2_avatar.svg',
      seleccionado: false
    },
    {
      img: '3_avatar.svg',
      seleccionado: false
    }
  ];

  user = 
    {
      name: 'Leonardo',
      email: 'leo@gmail,com',
      phone: '(123)456789',
      birthdate: '04/02/1986',
      genre: 'male',
    };
  
  
  ngOnInit() {
  }

  save() {
    console.log("saved")
  }

  segmentChanged(ev: any){
    console.log('segment changed')
  }
  
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}
