function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input))
    return input.join()

  return input.split('')
}

const rtaArray = parseStr('Zelda')
console.log(rtaArray)

const rtaArray1 = parseStr(['L', 'i', 'n', 'k'])
console.log(rtaArray1)