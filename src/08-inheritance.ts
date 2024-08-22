export class Animal {
  constructor(
    public name: string
  ) {}

  move() {
    console.log('Moving along!')
  }

  gretting() {
    return `Hello, I'm ${this.name}`
  }
}

const fenryr = new Animal('Fenryr')
fenryr.move()
console.log(fenryr.gretting())

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  bark(times: number): void {
    for (let index = 0; index <= times; index++) {
      console.log('Woof!')
    }
  }
}

const cerberus = new Dog('Cerberus', 'Hades')
cerberus.move()
console.log(cerberus.gretting())
cerberus.bark(5)
console.log( cerberus.owner);