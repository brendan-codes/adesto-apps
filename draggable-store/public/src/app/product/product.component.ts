import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  oneProduct = {
    name: '',
    quantity: 0,
    price: 0
  };

  hasProducts = false;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private session: ProductsService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((param: Params) => {
      if (this.session.product) {
        this.oneProduct = this.session.product;
        if (this.oneProduct.quantity > 0) {
          this.hasProducts = true;
        }
      } else {
        this.getById(param.id);
      }
    });
  }

  getById(id) {

    const observable = this.http.getProductById(id);
    observable.subscribe((data: any) => {
      console.log('http!');
      this.oneProduct = data;
      if (this.oneProduct.quantity > 0) {
        this.hasProducts = true;
      }
    });
  }

  deleteProduct(id) {
    const observable = this.http.deleteProduct(id);
    observable.subscribe((data: any) => {
      const obs = this.http.getProducts();
      obs.subscribe((products: any) => {
        this.session.products = products;
        this.router.navigate(['/']);
      });
    });
  }

}
