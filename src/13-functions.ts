(() => {
  type Size = 'S' | 'M' | 'L' | 'XL'

  function createProductToJson (title: string, createdAt: Date, stock: number, size: Size) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const createProductToJsonV2 = (title: string, createdAt: Date, stock: number, size?: Size) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('Product #1', new Date(), 1, 'M')
  console.log(product1)

  const product2 = createProductToJsonV2('Product #1', new Date(), 1)
  const algo = 1 + '1'
})()