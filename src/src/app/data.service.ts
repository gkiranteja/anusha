import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
   
  }
  url='http://staging.concierto.cloud/api_concierto/top-slider-service';
  url1='http://staging.concierto.cloud/api_concierto/top-three-blocks-services';
  getUsers() {
    return this
            .http
            .get(`${this.url}`);
        }
        getSliders() {
          return this
                  .http
                  .get(`${this.url1}`);
              }
}

