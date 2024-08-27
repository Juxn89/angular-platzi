import axios from 'axios'
import { Product } from './../models/product.model'
import { Category } from '../models/category.model'
import { UpdateProdctDto } from '../dto/product.dto'

export class BaseHttpService<T> {
  data: T[] = []

  constructor(
    protected url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url)
    return data
  }

  async update<Id, Dto, Result>(id: Id, changes: Dto): Promise<Result> {
    const { data } = await axios.patch(`${this.url}/${id}`, changes)
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

  productService.update<Product['id'], UpdateProdctDto, Product>(1, { title: 'aaaa!!!'})
} )()