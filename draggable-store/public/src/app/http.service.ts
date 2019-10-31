import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/api/products');
  }

  getProductById(id) {
    return this.http.get(`/api/products/${id}`);
  }

  postProduct(data) {
    return this.http.post('/api/products', data);
  }

  deleteProduct(id) {
    return this.http.delete(`/api/products/${id}`);
  }

  updateProductById(id, data) {
    return this.http.put(`/api/products/${id}`, data);
  }

}
