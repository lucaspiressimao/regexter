import { getEmailList, getFirstEmail } from './src/index.js'

let emails = "asdasd adsd asd asda sasdas teste@teste.com teste@teste.com.br asdasd asd asda sd asd asd"
console.log("1 - ", getFirstEmail(emails))
console.log("2 - ", getFirstEmail(""))
console.log("3 - ", getFirstEmail(123))

console.log("4 - ", getEmailList(emails))
console.log("5 - ", getEmailList(""))
console.log("6 - ", getEmailList(123))
