const { generateClient } = require("../../utils/generateClient");
const { execCLI } = require("../../utils/exec");

const schemaIds = [
    "https://therecordingacademy.com/content/global-footer-content",
    "https://therecordingacademy.com/content/global-footer-navigation",
    "https://therecordingacademy.com/slot/global-footer",
];

const clientConfig = generateClient("musicaresdev");
let musicaresExports = `dc-cli content-type export exportedContentTypes ${clientConfig}`

schemaIds.forEach(id => {
    musicaresExports += ` --schemaId ${id}`
});

execCLI(musicaresExports);
