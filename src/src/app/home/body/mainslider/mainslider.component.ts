import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../data.service';


@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent implements OnInit {
  data;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice
      .getUsers()
      .subscribe(data => {
          this.data = data;
        });
  }

}
