const prices: (number | string)[] = [1, 2, 3, 4, 5, 6]

let user: [string, number] = ['zelda', 15]
user = ['link', 17]

const [character_name, character_age] = user
console.log(character_name, character_age)