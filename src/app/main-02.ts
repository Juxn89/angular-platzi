import { ProductMemoryService } from './services/product.service';

const productService = new ProductMemoryService()

productService.add({
  categoryId: 1,
  title: 'Product #1',
  price: 100,
  description: 'Bla bla bla...',
  images: [],
  creationAt: new Date(),
  updatedAt: new Date()
})

const products = productService.getAll()
const productId = products[0].id

productService.updateProduct(productId, {
  title: 'Product #1 - Updated'
})

const rta = productService.findOne(productId)
console.log(rta)
