const { generateClient } = require("../../utils/generateClient");
const { execCLI } = require("../../utils/exec");

const schemaIds = [
    "https://therecordingacademy.com/content/global-footer-content",
    "https://therecordingacademy.com/content/global-footer-navigation",
    "https://therecordingacademy.com/slot/global-footer",
];

const clientConfig = generateClient("musicaresdev");
let exportTRAPRoD = `dc-cli content-type-schema export exportedGlobalHeader ${clientConfig}`

schemaIds.forEach(id => {
    exportTRAPRoD += ` --schemaId ${id}`
});

execCLI(exportTRAPRoD);
