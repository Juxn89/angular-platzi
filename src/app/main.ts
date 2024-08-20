import { addProduct } from './products/product.service'

addProduct(
  {
    id: '1',
    title: 'Rupies',
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 100,
    size: 'M',
    category: {
      id: '2',
      name: 'Money',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
)