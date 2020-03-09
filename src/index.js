
let Regexter = {}

export function getEmail(text){
    try{
        let regex = /\S+@\S+\.\S+/gim
        let ret = text.match(regex)
        return ret ? ret : [];
    } catch(err) {
        return []
    }
}

Regexter.getEmail = getEmail

export default Regexter;