import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private ionLoader: LoaderService
  ) { }


  ngOnInit() {
    this.ionLoader.autoLoader();
  }

}
