import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../data.service';


@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {
  data;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice
      .getSliders()
      .subscribe(data => {
          this.data = data;
        });
  }

}
