import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(fLogin: NgForm){
    console.log(fLogin.valid);
  }

}
