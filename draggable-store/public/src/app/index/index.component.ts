import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products = [];


  constructor(
    private http: HttpService,
    private session: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.session.products;
    if (!this.products) {
      this.getProducts();
    }
  }

  getProducts() {
    const observable = this.http.getProducts();
    observable.subscribe((data: any) => {
      console.log('We sent http calls!');
      this.products = data;
      this.session.products = data;
    });
  }


}
