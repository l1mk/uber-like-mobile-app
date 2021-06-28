import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LoaderService } from './../../services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(
    private navCtrl: NavController,
    private ionLoader: LoaderService
    ) { }

  avatars = [
    {
      img: '1_avatar.svg',
      selected: true
    },
    {
      img: '2_avatar.svg',
      selected: false
    },
    {
      img: '3_avatar.svg',
      selected: false
    }
  ];
  
  ngOnInit() {
  }

  register() {
    this.ionLoader.autoLoader();
    this.navCtrl.navigateRoot('/main/tabs/tab2', {animated: true});
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
