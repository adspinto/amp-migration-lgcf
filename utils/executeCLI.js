const { execCLI } = require("./exec");
const { generateClient } = require("./generateClient");

const exportCLI = ({ schemaIds, client, toExport, name }) => {
    const clientConfig = generateClient(client);
    let exportName = name;
    if(!name) {
        exportName = `exported-${toExport}`;
    }

    //we have to sync content schema with content types always
    let exp = `dc-cli ${toExport} export ${exportName} ${clientConfig} --sync`;

    schemaIds.forEach(id => {
        exp += ` --schemaId ${id}`
    });
    // console.log(exp)
    execCLI(exp);
}

const importCLI = ({ client, toImport, name }) => {
    const clientConfig = generateClient(client);
    let exportName = name;

    if(!name) {
        exportName = `exported-${toImport}`;
    }

    let exp = `dc-cli ${toImport} import ${exportName} ${clientConfig}`;
    console.log(exp)
    execCLI(exp);    
}


exports.exportCLI = exportCLI;
exports.importCLI = importCLI;