import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() oneProduct;

  constructor(
    private router: Router,
    private data: ProductsService
  ) { }

  ngOnInit() {
    console.log(this.oneProduct);
  }

  goToDetails(product) {
    this.data.product = product;
    this.router.navigate([`/products/${product._id}`]);
  }

}
