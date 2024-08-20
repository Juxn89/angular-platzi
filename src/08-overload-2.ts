export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean

// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input))
//     return input.join()

//   return input.split('')
// }

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input))
    return input.join()

  if(typeof input === 'string')
    return input.split('')

  if(typeof input === 'number')
    return true
}

const rtaArray = parseStr('Zelda')
console.log(rtaArray)
rtaArray.reverse()

const rtaArray1 = parseStr(['L', 'i', 'n', 'k'])
console.log(rtaArray1)
rtaArray1.toUpperCase()

const rtaNumber = parseStr(123)
console.log(rtaNumber)