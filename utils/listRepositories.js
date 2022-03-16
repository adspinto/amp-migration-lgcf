const { execCLI } = require("./exec");
const { generateClient } = require("./generateClient");

const client = generateClient("traprod");

execCLI(`dc-cli content-repository get 61fd972052faff000147e0c0 ${client}`);