import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  oneProduct = {
    name: '',
    quantity: 0,
    price: 0
  };

  resetProduct = {
    name: '',
    quantity: 0,
    price: 0
  };

  errors = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getById(params.id);
    });
  }

  editProduct(id) {
    const observable = this.http.updateProductById(id, this.oneProduct);
    observable.subscribe((data: any) => {

      console.log(data);
      if (data.message === 'fail') {
        this.errors = this.errorHelper(data.err.errors);
      } else {
        console.log('succ');
        this.router.navigate(['/']);
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

  getById(id) {
    const observable = this.http.getProductById(id);
    observable.subscribe((data: any) => {
      this.oneProduct = data;
      this.resetProduct = { ...data};
    });
  }

  resetButton() {
    this.oneProduct = { ...this.resetProduct};
  }

}
