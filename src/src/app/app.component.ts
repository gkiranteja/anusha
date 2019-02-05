import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'conceir';
  
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      'assets/rose.jpeg',
      'assets/download.jpeg',
      'assets/rose.jpeg',
    ];
}
}
