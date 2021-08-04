import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  showPassword = false;

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  recovery() {
    console.log('recovery email sent')
  }

  async presentAlert(form: NgForm) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Please look at your email for further instructions',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok', form);
            this.recovery()
          }
        }
      ]
    });
    await alert.present();
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

}
