export class Animal {
  constructor(
    protected name: string
  ) {}

  move() {
    console.log('Moving along!')
  }

  gretting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('Do something...')
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
    this.doSomething()
    for (let index = 0; index <= times; index++) {
      console.log(`Woof!, ${this.name}`)
    }
  }

  move() {
    console.log('Moving as a dog.')
    super.move()
  }
}

const cerberus = new Dog('Cerberus', 'Hades')
cerberus.move()
console.log(cerberus.gretting())
cerberus.bark(5)
console.log( cerberus.owner);
cerberus.move()
//cerberus.doSomething()
//cerberus.name = 'Sköll'