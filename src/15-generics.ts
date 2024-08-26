function getValue(value: number | string) {
  return value
}

function getValue_2<myType>(value: myType) {
  return value
}

getValue_2<number>(12).toFixed()
getValue_2<string>('12').toLowerCase()
getValue_2<number[]>([12, 12, 1])