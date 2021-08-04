import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  
  date: Date = new Date();
  showPassword = false;
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

  dateChange(event){
    console.log(new Date (event.detail.value))
  }

  register(fRegister: NgForm) {
    console.log("valid", fRegister);
    this.ionLoader.autoLoader();
    this.navCtrl.navigateRoot('/main/tabs/tab2', {animated: true});
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }


}
