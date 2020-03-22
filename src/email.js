import { getAllEmail, getOneEmail } from './builder.js'

export function getEmailList(text) {
    try {
        let regex = getAllEmail()
        let ret = text.match(regex)
        return ret ? ret : []
    } catch (err) {
        return []
    }
}

export function getFirstEmail(text) {
    try {
        let regex = getOneEmail()
        let ret = text.match(regex)
        return ret ? ret[0] : ""
    } catch (err) {
        return ""
    }
}

export default { getEmailList, getFirstEmail }