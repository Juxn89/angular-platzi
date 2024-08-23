import axios from 'axios'

const BASE_URL: string = 'https://api.escuelajs.co/api/v1';

( async () => {

  function delay (time: number): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout( () => { resolve(true) }, time)
    } )
    return promise
  }

  console.log('---'.repeat(10))
  const rta: boolean = await delay(3000)
  console.log(rta)

  function getProduct() {
    const promise = axios.get(`${BASE_URL}/products`)
    return promise
  }

  async function getProductAsync() {
    const promise = await axios.get(`${BASE_URL}/products`)
    return promise.data
  }

  const products = await getProduct()
  console.log(products.data)

  const productsAsync = await getProductAsync()
  console.log(productsAsync)
} )()