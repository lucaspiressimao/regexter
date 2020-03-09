import { getAllEmail } from './builder.js'

export function getEmailList(text) {
    try {
        let regex = getAllEmail()
        let ret = text.match(regex)
        return ret ? ret : [];
    } catch (err) {
        return []
    }
}

export default { getEmailList }