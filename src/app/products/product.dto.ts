import { Product } from './product.model'

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

type example = Pick<Product, 'id' | 'title' | 'size'>

export interface UpdateProdctDto extends Partial<CreateProductDto> {} // Marl all as optional

type example2 = Required<Product> // Mark all as mandatory