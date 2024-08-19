let anyvar: any
anyvar = true
anyvar = undefined
anyvar = null
anyvar = 1
anyvar = []
anyvar = {}

let isNew: boolean = anyvar

anyvar.doSomething()
anyvar.touppercase()

let unknownVar: unknown
unknownVar = true
unknownVar = undefined
unknownVar = null
unknownVar = 1
unknownVar = []
unknownVar = {}

// unknownVar.doSomething(); // ERROR ❌

if(typeof unknownVar === 'string') {
  // anyvar.touppercase() // ERROR ❌
  unknownVar.toUpperCase()
}

// let isNewV2: boolean = unknown

if(typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}