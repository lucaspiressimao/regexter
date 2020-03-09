import patterns, { flags } from './patterns.js'

export function getAllEmail() {
    let _flags = flags.global + flags.multiLine 
    return build(patterns.email, _flags)
}

function build(pattern, _flags){
    return new RegExp(pattern, _flags + flags.case + flags.unicode)
}