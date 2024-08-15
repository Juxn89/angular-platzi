( () => {
  type  UserID = string | number

  let userId: UserID

  function gretting(myText: UserID) {
    if(typeof myText === 'string')
      console.log(`Hi ${myText.toUpperCase()}`)
    else
      console.log('Number:', myText.toFixed(1))
  }

  // Literal types
  // let shirtSize: string
  // shirtSize = 'M'
  // shirtSize = 'S'
  // shirtSize = 'L'
  // shirtSize = 'adasdasjkdhas'

  type ShirtSizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: ShirtSizes
  shirtSize = 'M'
  shirtSize = 'S'
  shirtSize = 'L'
  // shirtSize = 'adasdasjkdhas'

} )()