console.log('Math.PI', Math.PI)
console.log('Math.max', Math.max(1, 2, 10, 4, 5, 6))

export class MyMath {
  static readonly PI = 3.14

  static max(...numbers: number[]) {
    console.log(numbers)
    return numbers.reduce( (max, item) => max > item ? max : item, 0 )
  }
}

console.log('MyMath', MyMath.PI)
console.log('MyMath', MyMath.max(1, 2, 10, 9))