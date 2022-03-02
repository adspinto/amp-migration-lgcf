const { execCLI } = require("./exec");
const { generateClient } = require("./generateClient");

const exportCLI = ({ schemaIds, client, toExport, name }) => {
    const clientConfig = generateClient(client);
    let exportName = name;
    if(!name) {
        exportName = `exported-${toExport}`;
    }
    let exp = `dc-cli ${toExport} export ${exportName} ${clientConfig}`;

    schemaIds.forEach(id => {
        exp += ` --schemaId ${id}`
    });

    execCLI(exp);
}

const importCLI = ({ client, toImport, name }) => {
    const clientConfig = generateClient(client);
    let exportName = name;

    if(!name) {
        exportName = `exported-${toImport}`;
    }

    let exp = `dc-cli ${toImport} import ${exportName} ${clientConfig}`;

    execCLI(exp);
}


exports.exportCLI = exportCLI;
exports.importCLI = importCLI;