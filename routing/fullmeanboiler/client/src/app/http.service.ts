import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HTTP: HttpClient) {

    this.doStuff();
  }

  doStuff() {
    const obv = this.HTTP.get('/persons');
    obv.subscribe(data => {
      console.log(data);
    });
  }
}
