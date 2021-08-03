import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides, AlertController} from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(public alertController: AlertController) { }

  date: Date = new Date();
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
      img: '3_avatar.svg',
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

  dateChange(event){
    console.log(new Date (event.detail.value))
  }

  async presentAlert(form: NgForm) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Info was Saved',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Ok', form);
            this.save()
          }
        }
      ]
    });
    await alert.present();
  }

}
