require('dotenv').config();

require("./scripts/copyContentItemExample");
// require("./scripts/importContentTypeSchema");




// require("./imports/lradev/traprod/archiveContentTypeSchemas");
// require("./exports/exportContentTypeSchema.js");
// const csv = require('csv-parser');
// const fs = require('fs');

// var objectToCSVRow = function(dataObject) {
//     var dataArray = new Array;
//     for (var o in dataObject) {
//         var innerValue = dataObject[o]===null?'':dataObject[o].toString();
//         var result = innerValue.replace(/"/g, '""');
//         result = '"' + result + '"';
//         dataArray.push(result);
//     }
//     return dataArray.join(' ') + '\r\n';
// }


// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });