import { faker } from '@faker-js/faker'
import { addProduct, products, updateProduct } from './products/product.service';

for (let index = 0; index <= 10; index++) {
  addProduct(
    {
      title: faker.commerce.productName(),
      stock: faker.number.int({ min: 10, max: 100 }),
      size: faker.helpers.arrayElement([ 'M', 'S', 'XL', 'L' ]),
      categoryId: '',
      image: faker.image.url(),
      description: faker.commerce.productDescription(),
      color: faker.color.human(),
      price: faker.number.int({min:5, max: 200}),
      isNew: true,
      tags: [
        faker.string.alpha({ length: {min: 5, max: 10} }),
        faker.string.alpha({ length: {min: 5, max: 10} }),
        faker.string.alpha({ length: {min: 5, max: 10} })
      ]
    }
  )
}

console.log(products)

const product = products[0]
updateProduct(product.id, {
  title: 'New title',
  stock: 80
})