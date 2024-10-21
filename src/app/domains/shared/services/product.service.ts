import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../components/counter/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/products'
  private http = inject(HttpClient)

  constructor() { }

  getProducts(categroyId?: string) {
    const url = new URL(this.BASE_URL)

    if(categroyId) {
      url.searchParams.set('categoryId', categroyId)
    }

    return this.http.get<Product[]>(url.toString())
  }

  getOne(id: string) {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`)
  }
}
