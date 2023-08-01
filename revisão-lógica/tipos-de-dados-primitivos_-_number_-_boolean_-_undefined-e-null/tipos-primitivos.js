// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)

let minhaVar = "minha string"
let minhaVar2 = 'Minha "string" com aspas simples'
var minhaVar3 = `Minha template literal`

let idade = 40;
// let msg = "eu possuo " + 40 + "anos"
let msg = `eu possuo ${idade} anos`

console.log(msg)
console.log("Hello " + "World")
console.log(typeof msg, typeof idade, typeof minhaVar, " -- ", 20)

// ⇓⇓ Number ⇓⇓

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`)

// ⇑⇑ Number ⇑⇑

// ⇓⇓ Boolean ⇓⇓

const isValid = false;
console.log(`isValid: ${isValid}`)

// ⇑⇑ Boolean ⇑⇑

// ⇓⇓ Undefined e Null ⇓⇓

let varTeste
console.log(varTeste)
console.log(typeof varTeste)
let varTeste2 = null
console.log(varTeste2)
console.log(typeof varTeste2)

// ⇑⇑ Undefined e Null ⇑⇑