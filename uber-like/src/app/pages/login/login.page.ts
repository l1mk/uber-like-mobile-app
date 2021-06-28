import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { LoaderService } from './../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private ionLoader: LoaderService
  ) { }

  login(fLogin: NgForm) {
    this.ionLoader.autoLoader();
    this.navCtrl.navigateRoot('/main/tabs/tab2', {animated: true});
  }

  ngOnInit() {
  }

}
