import { Component } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  myBooks: string [];
  constructor (private httpService: HttpClient) { }
  ngOnInit () {
    this.httpService.get('https://api.github.com/users').subscribe(
      data => {
        this.myBooks = data as string [];		// FILL THE ARRAY WITH DATA.
      })
    }
}
