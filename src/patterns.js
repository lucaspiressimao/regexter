
let flags = {
    global: "g",
    case: "i",
    multiLine: "m",
    unicode: "u"
}

module.exports.flags = flags

export default {
    email: "\\S+@\\S+\\.\\S+",
    flags: flags
}