import { Category } from '../models/category.model'
import { Product } from '../models/product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id']
}

export interface UpdateProdctDto extends Partial<CreateProductDto> { }