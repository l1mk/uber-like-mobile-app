import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  submit(){
    console.log("form sent");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Thanks for your feedback',
      subHeader: 'Someone will contact you shortly',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.submit()
          }
        }
      ]
    });
    await alert.present();
  }

}
