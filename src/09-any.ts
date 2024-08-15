( () => {
  let myDynamicVar: any

  myDynamicVar = 100
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = ''

  myDynamicVar = 'Hi'
  const rta = (myDynamicVar as string).toLocaleLowerCase()
  console.log(rta)

  myDynamicVar = 123
  const rta1 = (<number>myDynamicVar).toFixed()
  console.log(rta1)
} )()