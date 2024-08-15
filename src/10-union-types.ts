( () => {
  let userId: string | number
  userId = 123
  userId = 'asdas'

  function gretting(myText: string | number) {
    if(typeof myText === 'string')
      console.log(`Hi ${myText.toUpperCase()}`)
    else
      console.log('Number:', myText.toFixed(1))
  }

  gretting('sdsfd')
  gretting(123.56756)

} )()