
const { config } = require("../config");

const generateClient = (client) => {
    try {
        return ` --hubId ${config()[client].hubId} --clientId ${config()[client].appId} --clientSecret ${config()[client].appSecret}`
    } catch (error) {
        console.error("error while trying to generate client string", error)
    }
}

exports.generateClient = generateClient