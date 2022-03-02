const { config } = require("../../../config");
const { execCLI } = require("../../../utils/exec");

const clientConfig = ` --hubId ${config().lradev.hubId} --clientId ${config().lradev.appId} --clientSecret ${config().lradev.appSecret}`

execCLI(`dc-cli content-type import exportedHamburger ${clientConfig}`)
