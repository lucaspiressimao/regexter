import patterns from './patterns.js'

let Regexter = {}

export function getEmail(text){
    try{
        let regex = patterns.email
        let ret = text.match(regex)
        return ret ? ret : [];
    } catch(err) {
        return []
    }
}

Regexter.getEmail = getEmail

export default Regexter;