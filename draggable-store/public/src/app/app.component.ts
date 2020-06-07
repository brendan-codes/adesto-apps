import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  stuff = [];

  constructor() {}

  ngOnInit() {
  }

  addStuff() {
    this.stuff.push({value: 'value!'});
  }


}