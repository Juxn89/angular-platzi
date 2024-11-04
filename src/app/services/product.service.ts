import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CreateProductDto, Product, UpdateProductDto } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/products'
  private http = inject(HttpClient)

  getAllProducts() {
    return this.http.get<Product[]>(this.BASE_URL)
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`)
  }

  create(product: CreateProductDto) {
    return this.http.post<Product>(`${this.BASE_URL}`, product)
  }

  update(id: number, product: UpdateProductDto) {
    return this.http.put<Product>(`${this.BASE_URL}/${id}`, product)
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.BASE_URL}/${id}`)
  }
}
