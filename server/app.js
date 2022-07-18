const express = require('express')
const hostname  = 'localhost';
const port      = 3035;
const server = express();
const generateClient = require("./src/listContentItems")
const json = require("../content-type-schemas.json")
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

server.get('/', (req, res) => {
    res.send("AMPLIENCE DC CLI MIGRATION HELPER 2022 ANDRE PINTO")
});

server.get('/api/v1/list-content-items', (req, res) => {
    const client = generateClient();
    console.log(client.hubs.list())

    return res.json(json);
})

server.listen(port, () => {
    console.log(`[Server running on ${hostname}:${port}]`)
})
