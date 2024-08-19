export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const p1 = createProduct(1, true, 12)
console.log(p1)

const p2 = createProduct(1, true)
console.log(p2)
console.log(p1)

/*
  0 === false
  '' === false
  false === false
*/

const p3 = createProduct(1, false, 0)
console.log(p3)