import { faker } from '@faker-js/faker'
import { Product } from './../models/product.model'
import { CreateProductDto, UpdateProdctDto } from './../dto/product.dto'

export class ProductMemoryService {
  private products: Product[] = []

  add (data: CreateProductDto): Product {
    const newProduct: Product = {
      ...data,
      id: faker.number.int(),
      updatedAt: new Date(),
      category: {
        id: faker.number.int(),
        name: 'Warrior',
        image: faker.image.url(),
        creationAt: new Date(),
        updatedAt: new Date()
      }
    }

    this.products.push(newProduct)
    return newProduct
  }

  updateProduct (id: Product['id'], data: UpdateProdctDto): Product {
    const index = this.products.findIndex(p => p.id === id)

    if(!index)
      throw new Error('Product not found')

    const prevData = this.products[index]
    this.products[index] = {
      ...prevData,
      ...data
    }

    return this.products[index]
  }

  findOne (id: Product['id']) {
    return this.products.find(item => item.id === id)
  }
}