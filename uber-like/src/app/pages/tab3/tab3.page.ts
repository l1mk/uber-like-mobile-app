import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  lastTrip = {
    date: "08-02-2021 05-34 p.m.",
    vehicle: "Renault Symbol 0154XXX",
    price: "15.5",
    img: "map-313x125.png",
    address: "23423 South Street"
  }

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${this.lastTrip.date}`,
      subHeader: `Price: $ ${this.lastTrip.price}`,
      message: `Vehicle: ${this.lastTrip.vehicle} `,
      buttons: ['OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
