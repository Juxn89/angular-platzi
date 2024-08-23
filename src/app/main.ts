import axios from 'axios'
import { Product } from './mdoels/product.model';

const BASE_URL: string = 'https://api.escuelajs.co/api/v1';


( async () => {

  async function getProduct(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(`${BASE_URL}/products`)
    return data
  }

  const products = await getProduct()
  console.log( products.map(item => `${item.id}: ${item.title}`)  )
} )()