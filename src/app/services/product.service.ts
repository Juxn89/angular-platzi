import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  getAllProducts() {
    return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products')
  }
}
