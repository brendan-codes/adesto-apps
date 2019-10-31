import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  PRODUCTS = null;
  PRODUCT = null;

  constructor() { }

  get products() { return this.PRODUCTS; }
  set products(data) { this.PRODUCTS = data; }

  get product() { return this.PRODUCT; }
  set product(data) { this.PRODUCT = data; }
}
