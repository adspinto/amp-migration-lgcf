
const { execCLI } = require("../../../utils/exec");
const { generateClient } = require("../../../utils/generateClient");

const { config } = require("../../../config");

const srcFolder = ` --srcFolder 6142168e52faff0001357ccf`;
const dstFolder = ` --dstFolder 621fe5924cedfd0001ffd3df`;
const dstHubId = ` --dstHubId ${config().lradev.hubId}`;
const dstClientId = ` --dstClientId ${config().lradev.appId}`;
const dstSecret = ` --dstSecret ${config().lradev.appSecret}`;
const clientConfig = generateClient("traprod");

// this command should be done manually because it has progress and input
console.log(`dc-cli content-item copy ${clientConfig} ${dstClientId} ${dstSecret} ${srcFolder} ${dstFolder} ${dstHubId}`);


