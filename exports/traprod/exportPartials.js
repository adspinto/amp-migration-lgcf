const { exportCLI } = require("../../utils/executeCLI");

const schemaIds = [
    "https://therecordingacademy.com/partial/navigation"
];

exportCLI({ schemaIds, client: "traprod", toExport: "content-type-schema", name: "exported-partials" })