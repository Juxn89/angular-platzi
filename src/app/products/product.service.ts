import { Product } from './product.model'
import { CreateProductDto } from './product.dto'

export const products: Product[] = []

export const addProduct = (data: CreateProductDto) => {
  products.push({
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: crypto.randomUUID(),
      name: 'Warrior',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  })
}

export const updateProduct = (id: string, data: CreateProductDto) => {

}