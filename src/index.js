import { getEmailList, getFirstEmail } from './email/index'

let regexter = {
    // Email
    getEmailList,
    getFirstEmail

    // Telefone
}

Object.keys(regexter).forEach(element => {
    exports[element] = regexter[element]
});

export default regexter