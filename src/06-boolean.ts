( () => {
  let isEnable = true
  isEnable = false

  let isNew:boolean = false
  console.log('isNew', isNew)
  isNew = true
  console.log('isNew', isNew)

  const random = Math.random()
  console.log('random', random)
  isNew = random >= 0.5
} )()
