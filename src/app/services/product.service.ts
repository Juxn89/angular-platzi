import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { CreateProductDto, Product, UpdateProductDto } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/products'
  private http = inject(HttpClient)

  getAllProducts(limit?:number, offset?: number) {
    let params = new HttpParams()
    if(limit && offset) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }

    return this.http.get<Product[]>(this.BASE_URL, { params })
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`)
  }

  getProductsByPage(limit:number, offset: number) {
    return this.http.get<Product[]>(`${this.BASE_URL}`, {
      params: { limit, offset }
    })
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
