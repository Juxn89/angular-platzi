import { inject, Injectable } from '@angular/core';
import { catchError, map, retry, throwError, zip } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http'

import { checkTime } from '@interceptors/time.interceptor';
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
            .pipe(
              retry(3),
              map( products => products.map(product => ({...product, taxes: product.price * 0.19 })) )
            )
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`)
      .pipe(
        catchError( (error: HttpErrorResponse) => {

          if(error.status === HttpStatusCode.InternalServerError) return throwError('Something is wrong with the server')
          if(error.status === HttpStatusCode.NotFound) return throwError('Product not exits')
          if(error.status === HttpStatusCode.Unauthorized) return throwError('You are not authorized')

          return throwError('Ups, something was wrong')
        })
      )
  }

  getProductsByPage(limit:number, offset: number) {
    return this.http.get<Product[]>(`${this.BASE_URL}`, {
      params: { limit, offset },
      context: checkTime()
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

  fetchReadAndUpdate(id: number, product: UpdateProductDto) {
    return  zip(
        this.getProduct(id),
        this.update(id, product)
      )
  }
}
