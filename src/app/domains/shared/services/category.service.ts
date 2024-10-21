import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Category } from '@shared/components/counter/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)
  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/'

  constructor() { }

  getAll() {
    return this.http.get<Category[]>(`${this.BASE_URL}categories`)
  }
}
