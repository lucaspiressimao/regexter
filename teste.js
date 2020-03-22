import { getEmailList, getFirstEmail } from './src/index.js'

let emails = "asdasd adsd asd asda sasdas lucaspiressimao@gmail.com lucas@dooloop.com.br asdasd asd asda sd asd asd"
console.log(getFirstEmail(emails))
console.log(getFirstEmail(""))
console.log(getFirstEmail(123))