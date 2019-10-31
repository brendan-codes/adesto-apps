import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}

  newWitch: any = {
    name: '',
    broom: '',
    coven: ''
  };
  hasErrors = false;
  errors: any = [];
  witches = [];


  ngOnInit() {
    this.getAllWitches();
  }

  deleteWitch(id) {
    const observable = this.http.deleteById(id);
    observable.subscribe((data: any) => {
      this.getAllWitches();
    });
  }

  getAllWitches() {
    const observable = this.http.getAll();
    observable.subscribe((data: any) => {
      this.witches = data;
    });
  }

}
