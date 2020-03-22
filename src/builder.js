import { flagsPattern, emailPattern } from './patterns.js'

export function getAllEmail() {
    let _flags = flagsPattern.global + flagsPattern.multiLine 
    return build(emailPattern, _flags)
}

export function getOneEmail() {
    let _flags = flagsPattern.multiLine 
    return build(emailPattern, _flags)
}

function build(pattern, _flags){
    return new RegExp(pattern, _flags + flagsPattern.case + flagsPattern.unicode)
}