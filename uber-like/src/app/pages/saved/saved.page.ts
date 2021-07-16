import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';

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

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  addFavorite() {
    console.log("saved");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New favorite added',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Ok');
            this.addFavorite()
          }
        }
      ]
    });
    await alert.present();
  }

}
