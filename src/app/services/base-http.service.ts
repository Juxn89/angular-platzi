import axios from 'axios'
import { Product } from './../models/product.model'
import { Category } from '../models/category.model'

export class BaseHttpService<T> {
  data: T[] = []

  constructor(
    private url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url)
    return data
  }
}

( async () => {
  const BASE_URL = 'https://api.escuelajs.co/api/v1/'
  const productService = new BaseHttpService<Product>(`${BASE_URL}/products`)
  const rat = await productService.getAll()

  console.log(rat)

  const categoryService = new BaseHttpService<Category>(`${BASE_URL}/categories`)
  const rat1 = await categoryService.getAll()

  console.log(rat1)
} )()