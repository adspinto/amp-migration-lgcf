const { exportCLI } = require("../../utils/executeCLI");


const schemaIds = [
    "https://therecordingacademy.com/content/hamburger-menu",
    "https://therecordingacademy.com/content/global-header",
    "https://therecordingacademy.com/slot/global-navigation",
    "https://musicares.org/content/global-navigation"
];

exportCLI({ schemaIds, client: "traprod", toExport: "content-type-schema", name: "exported-content-schema" })


