import Regexter, { getEmail } from './src/index.js'

let emails = "lucaspiressimao@gmail.com lucas@dooloop.com.br"
console.log(getEmail(emails))
console.log(getEmail(""))
console.log(getEmail(123))