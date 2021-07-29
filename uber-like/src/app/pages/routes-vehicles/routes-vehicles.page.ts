import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-routes-vehicles',
  templateUrl: './routes-vehicles.page.html',
  styleUrls: ['./routes-vehicles.page.scss'],
})
export class RoutesVehiclesPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(public alertController: AlertController) { }

  vehicleSelected =     {
    img: 'bike_avatar.svg',
    selected: false,
    name: 'Bicycle',
    price: 'Aprox. $25',
    estimate: 'ETA 2:42pm'
  }

  vehicles = [
    {
      img: 'bike_avatar.svg',
      selected: true,
      name: 'Bicycle',
      price: 'Aprox. $25',
      estimate: 'ETA 2:42pm'
    },
    {
      img: 'scooter_avatar.svg',
      selected: false,
      name: 'Scooter',
      price: 'Aprox. $5',
      estimate: 'ETA 2:50pm'
    },
    {
      img: 'taxi_avatar.svg',
      selected: false,
      name: 'Taxi',
      price: 'Aprox. $100',
      estimate: 'ETA 1:40pm'
    },
    {
      img: 'limo_avatar.svg',
      selected: false,
      name: 'Limousine',
      price: 'Aprox. $120',
      estimate: 'ETA 1:40pm'
    }
  ];

  ngOnInit() {
  }

  opts = {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true
  };

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  clickEvent(vehicle: any){
    this.vehicles.map(function(obj){
      console.log(obj.selected)
      if (obj.selected === true ){
        obj.selected = false
      } 
    })
    vehicle.selected = true;
    this.vehicleSelected = vehicle;
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you sure?',
      message: `Confirm Vehicle Selection ${this.vehicleSelected.name}`,
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
