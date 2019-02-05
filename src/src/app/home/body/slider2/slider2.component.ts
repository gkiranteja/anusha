import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {
  public imagesUrl:any[];
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      'assets/images/banner/banner-1.png',
      'assets/images/clients/big-awards.png',
      'assets/images/banner/banner-1.png',
      'assets/images/clients/big-awards.png'
     
      ];
  }

}
