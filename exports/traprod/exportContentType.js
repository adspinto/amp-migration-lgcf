const { execCLI } = require("../../utils/exec");
const { generateClient } = require("../../utils/generateClient");

const schemaIds = [
    "https://therecordingacademy.com/content/hamburger-menu",
    "https://therecordingacademy.com/content/global-header",
    "https://therecordingacademy.com/slot/global-navigation",
    "https://musicares.org/content/global-navigation"
];

const clientConfig = generateClient("traprod");

let exportTRAPROD = `dc-cli content-type export exportedContentTypes ${clientConfig}`

schemaIds.forEach(id => {
    exportTRAPROD += ` --schemaId ${id}`
});

execCLI(exportTRAPROD);
