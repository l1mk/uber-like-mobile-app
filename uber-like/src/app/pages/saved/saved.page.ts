import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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

  constructor(public alertController: AlertController,
              private socialSharing: SocialSharing
              ) { }

  ngOnInit() {
  }

  addFavorite() {
    console.log("saved");
  }

  menu(address){
    console.log(address);
    this.socialSharing.share();
  }

  async presentAlert(form: NgForm) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New favorite added',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Ok', form);
            this.addFavorite()
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
      message: 'Confirm to erase this address',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
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
