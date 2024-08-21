// const numbers: number[] = [1, 2, 3, 4, 5]
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]
numbers.push(6)
numbers.pop()
numbers.unshift(1)
numbers.filter(() => {})
numbers.reduce(() => 0)
numbers.map(() => 0)