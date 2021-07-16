import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.page.html',
  styleUrls: ['./password-recovery.page.scss'],
})
export class PasswordRecoveryPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  recovery() {
    console.log('recovery email sent')
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Please look at your email for further instructions',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.recovery()
          }
        }
      ]
    });
    await alert.present();
  }

}
