import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    public loadingController: LoadingController
    ) { }
  //regular loading w automatic dismiss
  autoLoader() {
    this.loadingController.create({
      duration: 2000, 
      spinner: 'dots',
      cssClass:'custom-loading-class',
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((res) => {
        console.log('Loader dismissed', res);
      });
    });
  } 

}
