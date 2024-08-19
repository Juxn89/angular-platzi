const withoutEnd = () => {
  while(true) {
    console.log('Never stop learning')
  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if(typeof input === 'string')
    return `It's a string`

  if(Array.isArray(input))
    return `It's an array`

  return fail('Not match')
}

console.log(example('Hi'))
console.log(example([1, 2, 3, 4, 5]))
console.log(example(123))
console.log(example('Hi, after fail'))