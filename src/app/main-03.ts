import { ProductHttpService } from './services/product-http.service'

( async () => {
  const productService = new ProductHttpService()

  console.log( '--'.repeat(10) )
  const products = await productService.getAll();
  console.log(products)

  const productId = products[0].id
  await productService.update(productId, { title: 'Updated !' })
} )()
