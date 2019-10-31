import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct = {
    name: '',
    quantity: 0,
    price: 0.00
  };

  errors = [];

  altErrors: any = {

      name: {
        message: null
      },
      quantity: {
        message: null
      },
      price: {
        message: null
      }

  };

  constructor(private http: HttpService, private router: Router, private data: ProductsService) { }

  ngOnInit() {
  }

  createProduct() {
    const observable = this.http.postProduct(this.newProduct);
    observable.subscribe((data: any) => {
      console.log(data);
      if (data.message === 'fail') {
        this.altErrors = data.err.errors;
        this.errors = this.errorHelper(data.err.errors);
      } else {
        const obs = this.http.getProducts();
        obs.subscribe((allProducts: any) => {
          console.log(allProducts);
          this.data.products = allProducts;
          this.router.navigate(['/']);
        });
      }
    });
  }

  errorHelper(errorMessage: any) {
    const errorArr = [];
    // tslint:disable-next-line:forin
    for (const error in errorMessage) {
      console.log(error);
      errorArr.push({path: errorMessage[error].path, message: errorMessage[error].message});
    }

    return errorArr;
  }


}
