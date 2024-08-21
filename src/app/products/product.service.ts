import { Product } from './product.model'
import { CreateProductDto, FindProductDto, UpdateProdctDto } from './product.dto'

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

export const updateProduct = (id: Product['id'], data: UpdateProdctDto): Product => {
  const index = products.findIndex(p => p.id === id)

  if(!index)
    throw new Error('Product not found')

  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...data
  }

  return products[index]
}

export const findProduct = (dto: FindProductDto): Product[] => {
  dto.tags = []
  dto.tags?.pop()
  dto.tags?.push()
  return products
}