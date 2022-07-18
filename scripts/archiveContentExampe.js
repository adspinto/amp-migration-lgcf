
const { generateClient } = require("../utils/generateClient")
const lgcfConfig = generateClient("lradev");

// this command should be done manually because it has progress and input
// copy content
console.log(`dc-cli content-item archive --folderId 6262cf294cedfd0001d455f9 ${lgcfConfig} --facet schema:https://therecordingacademy.com/content/body-text  --logFile ./logs/log_${Date.now()}`)