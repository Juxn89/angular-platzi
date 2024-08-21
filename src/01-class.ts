const date = new Date()

date.getHours()
date.getTime()
date.toISOString()

const date2 = new Date(2000, 1, 1) // 0 JUN -> 11 DEC

date.getHours()
date.getTime()
date.toISOString()

console.log(date)
console.log(date2)

class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }
}

const myDate = new MyDate(2024, 8, 21)
console.log(myDate)