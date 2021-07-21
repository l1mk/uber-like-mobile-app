import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public alertController: AlertController) { }


  user = {
    name: 'John Smith',
    email: 'jm@gmail,com',
    phone: '(123)456789',
    birthdate: '04/02/1986',
    genre: 'male',
  };

  lastTrip = {
    date: "08-02-2021 05-34 p.m.",
    vehicle: "Renault Symbol 0154XXX",
    price: "15,50",
    img: "map-313x125.png",
    address: "23423 South Street"
  }

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

  ngOnInit() {
  }

  borrar(){
    console.log("borrar cuenta")
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New Password',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Type New Password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure?',
      message: 'Confirm to erase your account',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
