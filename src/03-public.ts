export class MyDate {
  public year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days') this.day += amount
    if(type === 'months') this.month += amount
    if(type === 'years') this.year += amount
  }
}

const myDate = new MyDate(2024, 8, 21)
console.log(myDate)
console.log( myDate.printFormat() )
myDate.add(1, 'days')