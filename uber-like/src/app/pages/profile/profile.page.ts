import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(public alertController: AlertController) { }

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
      name: 'John Smith',
      email: 'jm@gmail,com',
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Info was Saved',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Ok');
            this.save()
          }
        }
      ]
    });
    await alert.present();
  }

}
