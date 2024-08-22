export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 1,
    public day: number = 1
  ) { }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days') this.day += amount
    if(type === 'months') this.month += amount
    if(type === 'years') this.year += amount
  }

  private addPadding(value: number) {
    if(value < 10)
      return `0${value}`
    return `${value}`
  }

  getDay() {
    return this.day
  }
}

const myDate = new MyDate(2024, 8, 21)
console.log(myDate)
console.log( myDate.printFormat() )
myDate.add(1, 'days')

const myDate2 = new MyDate()
const myDate3 = new MyDate(2001)
const myDate4 = new MyDate(2001, 1)